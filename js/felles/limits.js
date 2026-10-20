// ============================================================================
//  KONFIGURASJON, VOKABULAR OG TELLING
// ----------------------------------------------------------------------------
//  Config-en er slanket til det som faktisk er en lærer-innstilling
//  (instrument-vokabularet). Metasjangre utledes alltid fra slektstreet
//  (GENEALOGY_META_GENRES), og det samme gjør tidsrommene (TIDSROM, fase 2;
//  før var tiårene en DECADES-konstant her) — de er strukturakser i appen,
//  ikke innstillinger. Grense-apparatet (maks totalt /
//  per tiår / per sjanger / per instrument + checkWarnings) er fjernet (v3.20):
//  det hørte til den opprinnelige forslagsfasen med spredningspress, og hadde
//  til slutt ingen reell funksjon i den kuraterte pensum-appen.
// ============================================================================

import { resolveSpan } from "./timeline-lanes.js";
import { artistSjekketOk } from "./sjekket.js";
import { tidsromForSpenn } from "./tidsakse.js";
import { TIDSROM } from "../sjangre/genre-model.js";

// Firestore tar maks 500 operasjoner i én batch (v7.03: flyttet hit fra
// js/sjangre/genre-migrate.js). store.js og migreringsplanene leser samme tall,
// og store.js slipper å dra hele migreringsmodulen (46 kB) inn på alle sidene
// bare for denne konstanten.
export const BATCH_MAX = 500;

// ----------------------------------------------------------------------------
//  INSTRUMENT-VOKABULARET — to nivåer, som sjangertreet
// ----------------------------------------------------------------------------
//  Fast liste i kode (v3.68: erstattet config-
//  dokumentet i Firestore, det siste som lå der). Artister med verdier utenfor
//  lista flagges i Oversikten og ved import, så lista og dataene ikke kan drive
//  fra hverandre slik config-tekstfeltet tillot (Saxofon/Saksofon...).
//
//  v3.78 innførte GRUPPENIVÅET (samme form som metaGenre over mainGenre):
//   - Artistkortet beholder det PRESISE instrumentet — «Trompet», «Klarinett».
//   - Gruppen samler dem — Trompet, Saksofon og Klarinett er «Soloinstrument».
//  Instrument-tidslinjene ligger på GRUPPEN; artistvisningen er uendret presis.
//  Nøklene her er gruppenavnene, verdiene er det som kan stå på en artist.
//  Grupper med bare seg selv (Vokal, Bass …) er helt vanlige — de har bare
//  ingen underinndeling.
// FAGBAKGRUNN (pedagogikkappens fase 3): hva teoretikeren kom fra. Feltet og
// konstantene heter fortsatt instrument (databasenøkler og kode beholdes, så
// forbedringer kan hentes fra musikkappen), men verdiene er fagbakgrunnene
// Eirik vedtok 2026-10-20. Hver gruppe har bare seg selv: Instrumenter-siden
// og instrumentsammendragene går ut i fase 4. En teoretiker kan ha to
// (instrument2): Dewey er både filosof og pedagogisk praktiker.
export const INSTRUMENT_GROUPS = {
  "Filosof": ["Filosof"],
  "Teolog": ["Teolog"],
  "Psykolog": ["Psykolog"],
  "Sosiolog": ["Sosiolog"],
  "Praktiker": ["Praktiker"],
  "Politiker og reformator": ["Politiker og reformator"],
  "Forsker": ["Forsker"],
};

// Overskriften over hvert instrumentsammendrag. Skrives ut i sin helhet fordi
// norsk genitiv ikke lar seg utlede mekanisk — «Vokalens», «Tangentenes» og
// «Trommenes» følger tre ulike mønstre.
export const INSTRUMENT_TITLE = {
  "Filosof": "Filosofene",
  "Teolog": "Teologene",
  "Psykolog": "Psykologene",
  "Sosiolog": "Sosiologene",
  "Praktiker": "Praktikerne",
  "Politiker og reformator": "Politikerne og reformatorene",
  "Forsker": "Forskerne",
};

// Rekkefølgen gruppene VISES i (brukervalg 2026-09-01): rytmeseksjonen først,
// så de melodiførende, og til slutt de som ikke er ett fysisk instrument.
//
// Skilt fra INSTRUMENT_GROUPS, som er VOKABULARET: artistskjemaets nedtrekk
// leser INSTRUMENTS rett fra gruppene, og det skal ikke stokkes om av et rent
// visningsvalg. Rekkefølgen her styrer knappene i Instrumenter-kortet og
// instrument-nedtrekket på innovasjonskortene, altså der gruppene selv vises.
//
// En gruppe som IKKE står her havner sist i stedet for å forsvinne — lista er
// en prioritering, ikke en hviteliste.
const INSTRUMENT_REKKEFOLGE = [
  "Filosof", "Teolog", "Psykolog", "Sosiolog", "Praktiker", "Politiker og reformator", "Forsker",
];

// Gruppene som får egen nyvinnings-tidslinje i Instrumenter-seksjonen.
// «Annet» er utelatt (se over) — alt annet følger med automatisk når en ny
// gruppe legges inn over.
export const INSTRUMENT_TIMELINE_GROUPS = Object.keys(INSTRUMENT_GROUPS)
  .filter((g) => g !== "Annet")
  .sort((a, b) => instrumentRang(a) - instrumentRang(b));

// Uplassert gruppe får en rang bakenfor alle andre. Likt tall gir 0, og
// Array.sort er stabil, så de beholder rekkefølgen fra INSTRUMENT_GROUPS.
function instrumentRang(group) {
  const i = INSTRUMENT_REKKEFOLGE.indexOf(group);
  return i === -1 ? Number.MAX_SAFE_INTEGER : i;
}

// Flat liste over lovlige artistverdier — utledet, så gruppene er ÉN kilde.
// Brukt av forslagsskjema, lærerredigering, filtre og import-valideringen.
export const INSTRUMENTS = Object.values(INSTRUMENT_GROUPS).flat();

// Alle instrumentene til en artist, hovedinstrumentet først (v6.39). En artist
// kan ha et andre instrument (instrument2) når hen er sentral på begge, som
// Ray Charles på tangenter og vokal. ALLE som filtrerer, teller eller viser
// instrumenter, skal lese denne, ikke a.instrument direkte.
export function instrumenterFor(a) {
  const ut = [];
  for (const v of [a?.instrument, a?.instrument2]) {
    const t = String(v || "").trim();
    if (t && !ut.includes(t)) ut.push(t);
  }
  return ut;
}

// Instrumentene som FAKTISK er i bruk, i vokabularets rekkefølge. Et filtervalg
// eller en statistikkboble som garantert gir null treff er bare støy, så
// filtrene og oversiktens instrumentbobler leser denne i stedet for hele
// vokabularet. Skjemaene der man SETTER instrument på en artist bruker fortsatt
// INSTRUMENTS: uten Banjo i lista kunne ingen noensinne lagt inn den første
// banjospilleren, og instrumentet ville vært låst ute for alltid.
// `behold` sikrer at et aktivt filtervalg blir stående i nedtrekket selv om
// siste artist med instrumentet fjernes — ellers spriker nedtrekket og filteret.
export function instrumentsInUse(artists, behold = "") {
  const brukt = new Set(activeArtists(artists || []).flatMap(instrumenterFor));
  const liste = INSTRUMENTS.filter((i) => brukt.has(i));
  if (behold && !liste.includes(behold)) liste.push(behold);
  return liste;
}

// (instrumentGroup/INSTRUMENT_TO_GROUP er fjernet: ingen runtime-kode mappet
// noensinne et presist instrument til gruppe — tech-kortene lagrer GRUPPE-
// navnet direkte, og artistkortet beholder det presise instrumentet.)

// Dokument-ID for instrumentgruppens sammendrag i `content`-samlingen — samme
// sted som Om historie og Røtter. Utledet, men rensket: Firestore-ID-er tåler
// ikke skråstrek («Trommer/perkusjon» er en artistverdi, ikke et gruppenavn, så
// gruppene er trygge i dag — men rensingen står her så en fremtidig gruppe med
// skråstrek eller æøå ikke kan lage et ulovlig dokumentnavn i stillhet).
export function instrumentPageId(group) {
  const slug = String(group || "")
    .toLowerCase()
    .replace(/æ/g, "ae").replace(/ø/g, "o").replace(/å/g, "a")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return `instrument-${slug}`;
}

// (DECADES og DECADE_OPTIONS, tiårene 1900–2020, sto her til fase 2. Tidsaksen
// er nå tidsrommene i treet: TIDSROM i genre-model.js og js/felles/tidsakse.js.)

// Kjønnskategorier brukt i skjema og statistikk. Etikettene er det eneste
// brukeren ser (GENDER_LABEL i ui-helpers utleder alt fra denne lista) —
// VERDIENE ligger fast i Firestore og kan ikke endres uten en migrering.
// Verdien «annet» er «Gruppe» (opptatt fra før v4.95).
// «Ikke-binær» (v6.96, brukervalg 2026-10-13) erstatter valget «Annet», som
// hadde verdien «ukjent». Den fikk egen verdi framfor nytt navn, fordi
// «ukjent» også er bøtta statistikken legger tomme og ukjente verdier i, og
// de skal ikke telles som ikke-binære. Ingen artist hadde «ukjent» 13.10.
export const GENDERS = [
  { value: "kvinne", label: "Kvinne" },
  { value: "mann", label: "Mann" },
  { value: "annet", label: "Gruppe" },
  { value: "ikkebinaer", label: "Ikke-binær" },
];
// Statistikkens bøtte for alt utenfor GENDERS, også tomt felt. Ikke et valg.
export const UKJENT_KJONN = { value: "ukjent", label: "Ukjent" };

// ----------------------------------------------------------------------------
//  TELLING OG STATISTIKK
// ----------------------------------------------------------------------------

// Skjult for studentene (v6.86, brukervalg 2026-10-13): eget felt `hidden`,
// skilt ut fra viktighetsgraden, som før bar begge deler (priority -1 = skjult).
// Flyttingen er gjort (alle 83 fikk hidden, 2026-10-13), og knappen er borte
// (v6.94). Den gamle -1 leses likevel fortsatt som skjult: en sikkerhetskopi fra
// før v6.86 kan føre den inn igjen, og «Vis» på lærerkortet rydder den da.
// Alle som spør om skjuling, spør her.
export function erSkjult(a) {
  return a?.hidden === true || (a?.priority || 0) === -1;
}

// Synlig for studenter: aktiv status, ikke lærer-skjult (erSkjult) og, når
// «Bare sjekket innhold» er på, sjekket (v6.89, js/felles/sjekket.js; alltid
// sann på lærersiden). Delt predikat — brukes av alle student-visninger og
// tellinger.
export function isVisible(a) {
  return a.status === "active" && !erSkjult(a) && artistSjekketOk(a);
}

// Hos læreren til moderasjon: ventende, ELLER sendt tilbake til studenten.
// Et returnert kort er fortsatt lærerens sak (koden og «Ny kode» ligger bare
// på moderasjonskortet), så det skal telle og vises overalt der ventende gjør
// det. Delt predikat siden v5.21 — Skrivebordets teller brukte bare «pending»
// og lot returnerte innsendinger bli uoppnåelige (audit v5.19, funn 1).
export function erTilModerasjon(x) {
  return x.status === "pending" || x.status === "returnert";
}

// Bare aktive, synlige forslag teller i statistikken. Skjulte utelates.
export function activeArtists(artists) {
  return artists.filter(isVisible);
}

// Kronologisk etter innflytelsesår, så alfabetisk. Delt av artistlistene.
export const byInfluenceThenName = (a, b) =>
  (a.influenceStart || 0) - (b.influenceStart || 0) || a.name.localeCompare(b.name, "no");

// Aktive, synlige artister som hører til en sjanger (meta/main/sub matcher label).
// Sjangernavnet MÅ måles mot tre-taggene (mainGenre/subGenre) alene. Klausulen
// «a.metaGenre === label» sto her fra den gang artisten hadde ETT genre-felt, og
// ble med mekanisk gjennom omdøpingen i juni. Med dagens modell er den direkte
// feil for de seks navnene som finnes både som node i treet og som metasjanger
// (Blues, Gospel, Jazz, Pop, R&B, Rock): «Jazz»-noden betyr TIDLIG jazz, men
// klausulen dro inn hele jazzfamilien — 78 artister i stedet for 9. Vil man se
// familien, finnes metasjangeren som egen inngang.
// Flyttet hit fra ui.js i v5.89: sjangerkortet (genealogy.js) viser samme
// liste som navneliste i presentasjonen, og kan ikke importere ui.js (ui.js
// importerer genealogy.js). ui.js eksporterer den videre som før.
export function artistsInGenre(artists, label) {
  const sj = label.toLowerCase();
  return (artists || [])
    .filter((a) => isVisible(a) && (
      (a.mainGenre || []).some((s) => s.toLowerCase() === sj)
      || (a.subGenre || []).some((s) => s.toLowerCase() === sj)
    ))
    .sort(byInfluenceThenName);
}

// Tidsrommene EN ARTIST teller i (fase 2; før tiårene, decadesForArtist), som
// indekser i TIDSROM. Tom influenceEnd betyr «pågår» — artisten regnes da fra
// influenceStart og HELT FRAM TIL I DAG, ikke bare i startåret sitt (v3.95:
// før forsvant en artist uten sluttår ut av alle senere tiår).
//
// Spennet kommer fra resolveSpan, SAMME kilde som artistenes tidslinje bruker.
// Det er hele poenget med å gå via den: tidslinjen og filtrene kan ikke svare
// ulikt på «når var denne artisten aktiv». Det gir også dødsåret som tak på
// kjøpet — en avdød artist uten influenceEnd løper til dødsåret, ikke til i
// dag. `tidsrom` kan sendes inn (testene); ellers leses treets ved kall-tid.
export function tidsromForArtist(artist, nowYear = new Date().getFullYear(), tidsrom = TIDSROM) {
  const span = resolveSpan(artist, nowYear);
  return span ? tidsromForSpenn(tidsrom, span.start, span.end, nowYear) : [];
}

// Er et tidsromfilter valgt? Verdien er indeksen som tekst fra nedtrekket
// («0» er det første tidsrommet, og et gyldig valg).
const harTidsrom = (v) => v != null && v !== "";

// Delt innholdsfilter for artistlister (sjanger/meta/instrument/undersjanger/
// prioritet/tidsrom/søk). Status-/synlighetsfiltrering gjøres av kalleren FØR dette,
// siden student- og lærer-visningen har ulike regler der. Ren funksjon —
// enhetstestbar, og holder filterlogikken ett sted (landing.js + ui.js delte den
// før i to kopier som allerede hadde driftet fra hverandre).
// Er noe innholdsfilter aktivt? (søk/sjanger/meta/instrument/tidsrom/undersjanger/
// prioritet). Delt av landing (spotlight vs. kompakt liste) og ui.renderArtists
// (sortert vs. tilfeldig rekkefølge), så de to flatene aldri driver fra
// hverandre om hva «filtrert» betyr — landing utelot før prioritet og
// undersjanger, som ga inkonsistent visning ved prioritet-bare-filter.
export function hasActiveFilters(f = {}) {
  return !!(f.search || f.mainGenre || f.metaGenre || f.instrument || harTidsrom(f.tidsrom) || f.subgenre || f.priority);
}

// Er artisten med på viktighetsnivået (v6.85)? 3 = bare viktigst, 2 = viktig
// og viktigst, 1 = alle med grad (mindre viktig og over), 0 = alle. Artister
// uten grad er ute så snart et nivå er valgt.
export function iViktighetsnivaa(a, nivaa) {
  const n = Number(nivaa) || 0;
  if (n <= 0) return true;
  return (a?.priority || 0) >= n;
}

export function filterArtists(list, filters = {}) {
  if (filters.mainGenre) {
    const sj = filters.mainGenre.toLowerCase();
    // Kun tre-taggene — metasjangeren har sitt eget filter rett under, så det
    // å blande dem inn her gjorde Sjanger-nedtrekket til et duplikat av
    // Metasjanger for de seks navnene som finnes på begge nivåer.
    list = list.filter((a) => (a.mainGenre || []).some((s) => s.toLowerCase() === sj)
      || (a.subGenre || []).some((s) => s.toLowerCase() === sj));
  }
  if (filters.metaGenre) list = list.filter((a) => a.metaGenre === filters.metaGenre);
  if (filters.instrument) list = list.filter((a) => instrumenterFor(a).includes(filters.instrument));
  if (filters.subgenre) {
    const sg = filters.subgenre;
    list = list.filter((a) => (a.subGenre || []).includes(sg) || (a.mainGenre || []).includes(sg));
  }
  // Viktighetsnivået (v6.85, brukerønske 2026-10-13) er trinnvis: nivået og
  // alt over. «Skjult» (-1, lærerlista) er filteret for de skjulte (erSkjult).
  if (filters.priority === -1) list = list.filter(erSkjult);
  else if (filters.priority) list = list.filter((a) => iViktighetsnivaa(a, filters.priority));
  if (harTidsrom(filters.tidsrom)) {
    const i = Number(filters.tidsrom);
    list = list.filter((a) => tidsromForArtist(a).includes(i));
  }
  if (filters.search) {
    const q = filters.search.toLowerCase();
    const qn = q.replace(/[.\-]/g, "");
    list = list.filter((a) =>
      a.name.toLowerCase().includes(q) ||
      a.name.toLowerCase().replace(/[.\-]/g, "").includes(qn) ||
      (a.geography || "").toLowerCase().includes(q) ||
      (a.mainGenre || []).some((s) => s.toLowerCase().includes(q)) ||
      (a.subGenre || []).some((s) => s.toLowerCase().includes(q)));
  }
  return list;
}

function countBy(list, key) {
  const map = {};
  for (const item of list) {
    const k = item[key];
    map[k] = (map[k] || 0) + 1;
  }
  return map;
}

function countByInstrument(list) {
  const map = {};
  for (const a of list) for (const i of instrumenterFor(a)) map[i] = (map[i] || 0) + 1;
  return map;
}

// En artist teller i ALLE tidsrom perioden spenner over. Nøkkelen er
// tidsrommets indeks i TIDSROM.
function countByTidsrom(list) {
  const map = {};
  for (const a of list) {
    for (const i of tidsromForArtist(a)) {
      map[i] = (map[i] || 0) + 1;
    }
  }
  return map;
}

export function computeCounts(artists) {
  const active = activeArtists(artists);
  return {
    total: active.length,
    perTidsrom: countByTidsrom(active),
    perMetaGenre: countBy(active, "metaGenre"),
    // Begge instrumentene teller (v6.39): Ray Charles er med under både
    // Tangenter og Vokal, slik han står i begge listene.
    perInstrument: countByInstrument(active),
  };
}

// Kjønnsfordeling blant aktive forslag — { kvinne: n, mann: n, ... , total }
export function genderDistribution(artists) {
  const active = activeArtists(artists);
  const dist = { kvinne: 0, mann: 0, annet: 0, ikkebinaer: 0, ukjent: 0 };
  for (const a of active) {
    if (dist[a.gender] !== undefined) dist[a.gender] += 1;
    else dist.ukjent += 1;
  }
  return { ...dist, total: active.length };
}

// Tak for instrumentsammendraget (content/instrument-<slug>.body). Satt av
// brukeren 2026-09-01: sammendraget skal være et sammendrag, ikke en oppgave.
// Håndheves i BEGGE skjemaene (lærerens innholdseditor og studentenes
// forslagsskjema) med maxlength + synlig teller. firestore.rules har fortsatt
// et løsere tak på 20 000 for `body`; det er misbruksgrensen, ikke skriveregelen.
export const SAMMENDRAG_MAKS = 4000;
