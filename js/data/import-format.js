// ============================================================================
//  IMPORT-FORMAT — ren parselogikk for JSON-filene
// ----------------------------------------------------------------------------
//  Skilt ut fra teacher-import.js så logikken kan enhetstestes i Node.
// ============================================================================

// Gjør sjangerbeskrivelser om til et flatt { navn: dokument }-oppslag uansett
// kildeformat: nytt nestet { meta:{…}, main:{…}, sub:{…} }, eldre flatt
// { navn: dokument }, eller legacy «subgenres». Nestet kjennes igjen på at ALLE
// toppnøkler er meta/main/sub (ingen sjanger heter det).
export function flattenGenreDescriptions(obj) {
  if (!obj || typeof obj !== "object") return {};
  const keys = Object.keys(obj);
  const nested = keys.length > 0 && keys.every((k) => ["meta", "main", "sub"].includes(k));
  if (!nested) return obj; // alt flatt format
  const flat = {};
  for (const lv of ["meta", "main", "sub"]) {
    // FLETT ved samme navn i flere bolker (mulig i håndskrevne/gamle filer) —
    // en ren overskriving ville latt sub-bolkens dokument skygge for main-
    // bolkens tekst, og main-teksten nådde aldri Firestore (juni 2026-fella).
    // Nivåfeltene er disjunkte nøkler, så en grunn fletting er tapsfri.
    for (const [id, doc] of Object.entries(obj[lv] || {})) flat[id] = { ...flat[id], ...doc };
  }
  return flat;
}

// ---------------------------------------------------------------------------
//  IMPORT-VALIDERING
//  Kjøres på HELE artistlista FØR noe skrives/slettes, så en «Erstatt alle»
//  aldri sletter eksisterende data og deretter feiler på en skjev fil.
//  Fanger nøyaktig de formene Firestore avviser eller som krasjer flettingen:
//   • name som ikke er en ikke-tom tekst  (krasjer name.trim() i flettingen)
//   • nestede lister/objekter i mainGenre/subGenre  (Firestore avviser)
//   • keyWorks/musicExamples/kilder som ikke er lister
//   • dokumenter over Firestore-grensen (~1 MiB)
// ---------------------------------------------------------------------------

// Firestore avviser dokumenter større enn ~1 MiB. Vi holder litt margin.
const MAX_DOC_BYTES = 1_000_000;

// Portabelt UTF-8 byte-estimat (fungerer i både nettleser og Node).
function byteLength(str) {
  if (typeof TextEncoder !== "undefined") return new TextEncoder().encode(str).length;
  return unescape(encodeURIComponent(str)).length;
}

// En liste der ALLE elementer er primitive tekster/tall (ikke nestede
// lister/objekter, som Firestore avviser i array-felter).
function isFlatPrimitiveList(v) {
  return Array.isArray(v) && v.every((x) => x === null || ["string", "number", "boolean"].includes(typeof x));
}

// Validerer en rå artistliste fra en importfil.
// Returnerer { ok, errors: [{ row, name, problems: string[] }] }.
export function validateArtistsForImport(list) {
  if (!Array.isArray(list)) {
    return { ok: false, errors: [{ row: 0, name: "", problems: ["Fila inneholder ingen artistliste."] }] };
  }
  const errors = [];
  list.forEach((a, i) => {
    const row = i + 1;
    const problems = [];
    const name = a && typeof a.name === "string" ? a.name : "";

    if (!a || typeof a !== "object" || Array.isArray(a)) {
      problems.push("Raden er ikke et artistobjekt.");
    } else {
      if (typeof a.name !== "string" || !a.name.trim()) {
        problems.push("mangler gyldig «name» (må være en ikke-tom tekst).");
      }
      for (const key of ["mainGenre", "subGenre"]) {
        const v = a[key];
        if (v != null && typeof v !== "string" && !isFlatPrimitiveList(v)) {
          problems.push(`«${key}» må være tekst eller en enkel liste av tekster (ingen nestede lister/objekter).`);
        }
      }
      // Oppsummeringspunktene (v5.50): en liste med tekster.
      if (a.punkter != null && !isFlatPrimitiveList(a.punkter)) {
        problems.push("«punkter» må være en liste med tekster (ett punkt per element).");
      }
      for (const key of ["keyWorks", "musicExamples", "kilder"]) {
        const v = a[key];
        // En enkeltstreng er en FEIL, ikke et unntak (audit-funn 29):
        // normaliseringen kaster den (buildArtistDoc gir []), så et validator-
        // OK hadde betydd tomme kilder/verk bak en grønn kvittering. mainGenre
        // fikk koersjon (cleanGenres) i v5.10; her sies det heller ifra.
        if (v != null && !Array.isArray(v)) {
          problems.push(`«${key}» må være en liste.`);
        }
      }
      let bytes = 0;
      try { bytes = byteLength(JSON.stringify(a)); } catch { bytes = 0; }
      if (bytes > MAX_DOC_BYTES) {
        problems.push(`dokumentet er for stort (${Math.round(bytes / 1024)} KB, maks ~1000 KB).`);
      }
    }
    if (problems.length) errors.push({ row, name, problems });
  });
  return { ok: errors.length === 0, errors };
}

// En DELPOST (v5.51) er en artistrad som bare bærer noen felt, f.eks. en fil
// med navn + oppsummeringspunkter. Den er gyldig for «Flett» mot en artist som
// finnes, men farlig ellers: «Erstatt alle» ville erstattet hele basen med
// artister uten metasjanger og beskrivelse, og et navn uten treff ville blitt
// en ny, nesten tom artist. Et ekte artistkort har alltid minst én av delene
// (skjemaet krever metasjanger), så mangel på begge er et sikkert kjennetegn.
export function erDelpost(a) {
  const tom = (v) => v == null || (typeof v === "string" && !v.trim());
  return !!a && typeof a === "object" && tom(a.metaGenre) && tom(a.description);
}

// ---------------------------------------------------------------------------
//  IMPORTFILENS FORM
// ---------------------------------------------------------------------------

// Innholdsdeler en importfil kan bære utover artistene.
// Tiårsbeskrivelsene (decades) og varmekartet (varmekart) var med til fase 2;
// står de i en fil, hoppes de over.
export const CONTENT_KEYS = ["genreDescriptions", "edgeDescriptions", "tech", "pages", "podcasts", "referanser", "genealogy", "presentasjoner"];

// Normaliserer en innlest importfil til appens interne form, eller returnerer
// null når formatet ikke gjenkjennes. Skilt ut fra handleImportFile (v4.52) og
// EKSPORTERT fordi den er ren og dermed testbar: objektet under er en
// HVITELISTE, og en nøkkel som ikke nevnes her forsvinner stille på vei til
// skrivingen. Det skjedde med sjangertreet — eksporten la det i fila og
// importExtras leste det, men mellomleddet slapp det aldri gjennom.
//
// En bar array leses som en ren artistliste (det eldste formatet).
export function normalizeImportFile(raw) {
  if (Array.isArray(raw)) {
    return { artists: raw, genreDescriptions: {}, tech: [] };
  }
  const harInnhold = raw && typeof raw === "object" &&
    (Array.isArray(raw.artists) || CONTENT_KEYS.some((k) => raw[k]));
  if (!harInnhold) return null;

  // Filer UTEN artister godtas også — rene innholdsfiler (sider,
  // historier/beskrivelser, podkaster, sjangertreet).
  return {
    artists: Array.isArray(raw.artists) ? raw.artists : [],
    // Formatet er nestet pr. nivå ({ meta, main, sub }) — flat ut til
    // { navn: dokument } før skriving.
    genreDescriptions: flattenGenreDescriptions(raw.genreDescriptions || {}),
    edgeDescriptions: raw.edgeDescriptions || {},
    tech: raw.tech || [],
    pages: raw.pages || {},
    referanser: raw.referanser || null,
    podcasts: raw.podcasts || [],
    teacherChecks: raw.teacherChecks || null,
    genealogy: raw.genealogy || null,
    // Kjøreplanene (v5.44, audit v5.42 funn 5).
    presentasjoner: raw.presentasjoner || null,
  };
}
