#!/usr/bin/env node
// ============================================================================
//  SJEKK EN INNHOLDSFIL FØR DEN IMPORTERES (fase 6)
// ----------------------------------------------------------------------------
//  Leser en importfil (formatet i JSON-OPPSKRIFT.md) og sjekker den mot treet i
//  json files/pedagogikk-skjelett.json og appens egne regler, slik at feil
//  stoppes her og ikke på lærersiden: ukjente epoker og retninger, fagbakgrunn
//  utenfor lista, teoretikere uten kilder, prinsipper uten tekst, påvirkninger
//  som ikke finnes i treet, Se og les som importen ville kastet stille.
//
//  Kjør:  node tools/sjekk-innholdsfil.js "json files/runde-1.json"
//         node tools/sjekk-innholdsfil.js fil.json --tre annet-tre.json
//  Exit 1 når fila har feil; advarsler stopper ikke. Skriptet skriver ingenting.
//
//  Reglene bor i sjekkInnholdsfil(), som er ren og testes i
//  tests/unit/sjekk-innholdsfil.test.js. Ordgrensene er advarsler, ikke feil.
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { normalizeImportFile, validateArtistsForImport, flattenGenreDescriptions } from "../js/data/import-format.js";
import { INSTRUMENTS, GENDERS } from "../js/felles/limits.js";
import { erAar } from "../js/felles/aarstall.js";
import { SELES_TEKST_MAKS, SELES_MAKS } from "../js/felles/se-og-les.js";
import { TECH_CATEGORIES, TECH_TYPES } from "../js/ui/ui-tech.js";

// Ordgrenser per tekst (myke: gir advarsel). Skal justeres når runden er avtalt.
export const ORDGRENSER = {
  teoretiker: [60, 260],
  epoke: [100, 450],
  samfunn: [40, 300],
  skole: [40, 300],
  prinsipp: [60, 400],
  historie: [150, 1200],
};

const ord = (t) => String(t || "").trim().split(/\s+/).filter(Boolean).length;
const erHttp = (u) => /^https?:\/\/\S+$/i.test(String(u || ""));
const KJENTE_NOKLER = new Set(["formatVersion", "artists", "genreDescriptions", "edgeDescriptions", "tech", "pages",
  "teacherChecks", "referanser", "presentasjoner", "notater", "genealogy"]);

export function sjekkInnholdsfil(fil, tre, { ordgrenser = ORDGRENSER } = {}) {
  const feil = [];
  const advarsler = [];
  const F = (m) => feil.push(m);
  const A = (m) => advarsler.push(m);
  const tall = { teoretikere: 0, epoker: 0, retninger: 0, prinsipper: 0, pavirkninger: 0, reformer: 0 };

  const d = normalizeImportFile(fil);
  if (!d) { F("Fila kjennes ikke igjen som en importfil (ingen teoretikere og ingen innholdsdeler)."); return { feil, advarsler, tall }; }
  for (const k of Object.keys(fil && !Array.isArray(fil) ? fil : {})) {
    if (!KJENTE_NOKLER.has(k)) A(`Ukjent toppnøkkel «${k}»: importen ignorerer den.`);
  }

  const retninger = new Set((tre.metaGenres || []).map((m) => m.name));
  const epoker = new Set((tre.nodes || []).map((n) => n.l));
  const nodeId = new Map((tre.nodes || []).map((n) => [n.id, n]));
  const grense = (nokkel, tekst, hva) => {
    const [min, maks] = ordgrenser[nokkel];
    const n = ord(tekst);
    if (n && n < min) A(`${hva}: ${n} ord (under ${min}).`);
    if (n > maks) A(`${hva}: ${n} ord (over ${maks}).`);
  };
  const sjekkKilder = (liste, hva) => {
    (Array.isArray(liste) ? liste : []).forEach((k, i) => {
      const tekst = typeof k === "string" ? k : k?.text;
      if (!String(tekst || "").trim()) F(`${hva}: kilde ${i + 1} mangler tekst.`);
      if (k && typeof k === "object" && k.url && !erHttp(k.url)) F(`${hva}: kilde ${i + 1} har en lenke som ikke er http(s): ${k.url}`);
    });
  };

  // --- Teoretikerne -----------------------------------------------------
  const val = validateArtistsForImport(d.artists);
  for (const e of val.errors) for (const p of e.problems) F(`Teoretiker ${e.row}${e.name ? ` (${e.name})` : ""}: ${p}`);
  const navn = new Map();
  const bruktePrinsipper = new Set();
  d.artists.forEach((a, i) => {
    if (!a || typeof a !== "object") return;
    const hva = `Teoretiker ${i + 1} (${a.name || "uten navn"})`;
    tall.teoretikere++;
    const nokkel = String(a.name || "").trim().toLowerCase();
    if (nokkel) {
      if (navn.has(nokkel)) F(`${hva}: navnet står to ganger (rad ${navn.get(nokkel)} og ${i + 1}).`);
      else navn.set(nokkel, i + 1);
    }
    if (!GENDERS.some((g) => g.value === a.gender)) F(`${hva}: kjønn «${a.gender}» er ikke ${GENDERS.map((g) => g.value).join("/")}.`);
    if (!retninger.has(a.metaGenre)) F(`${hva}: retningen «${a.metaGenre}» finnes ikke i treet.`);
    if (!INSTRUMENTS.includes(a.instrument)) F(`${hva}: fagbakgrunnen «${a.instrument}» er ikke i lista (${INSTRUMENTS.join(", ")}).`);
    if (a.instrument2 && !INSTRUMENTS.includes(a.instrument2)) F(`${hva}: fagbakgrunn 2 «${a.instrument2}» er ikke i lista.`);
    const mg = Array.isArray(a.mainGenre) ? a.mainGenre : (a.mainGenre ? [a.mainGenre] : []);
    if (!mg.length) F(`${hva}: ingen epoke (mainGenre).`);
    for (const e of mg) if (!epoker.has(e)) F(`${hva}: epoken «${e}» finnes ikke i treet (bruk etiketten, ikke id-en).`);
    for (const nokkelAar of ["birthYear", "deathYear", "influenceStart", "influenceEnd"]) {
      if (a[nokkelAar] != null && a[nokkelAar] !== "" && !erAar(a[nokkelAar])) F(`${hva}: ${nokkelAar} «${a[nokkelAar]}» er ikke et årstall (−3000 til 2100).`);
    }
    if (a.influenceStart == null || a.influenceStart === "") F(`${hva}: mangler influenceStart.`);
    if (erAar(a.birthYear) && erAar(a.deathYear) && a.deathYear < a.birthYear) F(`${hva}: dødsår før fødselsår.`);
    if (erAar(a.influenceStart) && erAar(a.influenceEnd) && a.influenceEnd < a.influenceStart) F(`${hva}: influenceEnd før influenceStart.`);
    if (!Array.isArray(a.kilder) || !a.kilder.length) F(`${hva}: minst én kilde er påkrevd.`);
    sjekkKilder(a.kilder, hva);
    if (!String(a.description || "").trim()) A(`${hva}: ingen beskrivelse.`);
    else grense("teoretiker", a.description, `${hva}: beskrivelsen`);
    (Array.isArray(a.keyWorks) ? a.keyWorks : []).forEach((v, j) => {
      if (!String(v?.title || "").trim()) F(`${hva}: hovedverk ${j + 1} mangler tittel.`);
    });
    const sub = Array.isArray(a.subGenre) ? a.subGenre : (a.subGenre ? [a.subGenre] : []);
    for (const s of sub) bruktePrinsipper.add(String(s).trim());
  });

  // --- Beskrivelsene ----------------------------------------------------
  const rå = fil && !Array.isArray(fil) ? fil.genreDescriptions : null;
  const bolker = rå && Object.keys(rå).every((k) => ["meta", "main", "sub"].includes(k)) ? rå : null;
  const flat = flattenGenreDescriptions(d.genreDescriptions);
  const bolkAv = (navnet) => {
    if (!bolker) return null;
    return ["meta", "main", "sub"].find((b) => bolker[b] && navnet in bolker[b]) || null;
  };
  const prinsippMedTekst = new Set();
  for (const [navnet, dok] of Object.entries(flat)) {
    const bolk = bolkAv(navnet);
    if (bolk === "meta" && !retninger.has(navnet)) F(`Beskrivelse «${navnet}» ligger under meta, men er ingen retning i treet.`);
    if (bolk === "main" && !epoker.has(navnet)) F(`Beskrivelse «${navnet}» ligger under main, men er ingen epoke (etikett) i treet.`);
    if (/\//.test(navnet)) F(`Beskrivelse «${navnet}»: navnet kan ikke inneholde «/» (Firestore bruker det som dokument-ID).`);
    for (const nivå of ["meta", "main", "sub"]) {
      const l = dok?.[nivå];
      if (!l || typeof l !== "object") continue;
      const hva = `«${navnet}» (${nivå})`;
      if (nivå === "main") tall.epoker++;
      if (nivå === "meta") tall.retninger++;
      if (nivå === "sub") { tall.prinsipper++; if (String(l.description || "").trim()) prinsippMedTekst.add(navnet); }
      sjekkKilder(l.kilder, hva);
      if (l.description) grense(nivå === "main" ? "epoke" : nivå === "sub" ? "prinsipp" : "epoke", l.description, `${hva}: beskrivelsen`);
      if (nivå === "main") {
        if (l.description && !String(l.samfunn || "").trim()) A(`${hva}: mangler «samfunn».`);
        if (l.description && !String(l.skole || "").trim()) A(`${hva}: mangler «skole».`);
        if (l.samfunn) grense("samfunn", l.samfunn, `${hva}: samfunn`);
        if (l.skole) grense("skole", l.skole, `${hva}: skole`);
        for (const k of ["activeFrom", "activeTo"]) {
          if (l[k] != null && l[k] !== "" && !erAar(l[k])) F(`${hva}: ${k} «${l[k]}» er ikke et årstall.`);
        }
        if (erAar(l.activeFrom) && erAar(l.activeTo) && l.activeTo < l.activeFrom) F(`${hva}: activeTo før activeFrom.`);
        if (l.era && String(l.era).length > 60) F(`${hva}: era er lengre enn 60 tegn.`);
      }
      if (l.seOgLes != null) {
        if (nivå !== "sub") A(`${hva}: seOgLes brukes bare på prinsipper (sub).`);
        const rå2 = Array.isArray(l.seOgLes) ? l.seOgLes : [];
        if (!Array.isArray(l.seOgLes)) F(`${hva}: seOgLes må være en liste.`);
        if (rå2.length > SELES_MAKS) F(`${hva}: seOgLes har ${rå2.length} poster (høyst ${SELES_MAKS}).`);
        rå2.forEach((p, i) => {
          const h = `${hva}: Se og les ${i + 1}`;
          if (!String(p?.tittel || "").trim()) F(`${h} mangler tittel, og importen kaster den.`);
          if (p?.url && !erHttp(p.url)) F(`${h} har en lenke som ikke er http(s), og importen kaster den.`);
          if (p?.tekst && String(p.tekst).length > SELES_TEKST_MAKS) F(`${h}: utdraget er over ${SELES_TEKST_MAKS} tegn og kuttes.`);
          if (p?.tekst && !String(p.kilde || "").trim()) F(`${h}: et utdrag skal ha kilde.`);
        });
      }
    }
    const story = dok?.story;
    if (story && typeof story === "object") {
      if (bolk && bolk !== "meta") A(`Fortellingen står på «${navnet}», som ikke er en retning.`);
      if (story.body) grense("historie", story.body, `Fortellingen om «${navnet}»`);
    }
  }
  for (const s of bruktePrinsipper) {
    if (s && !prinsippMedTekst.has(s)) A(`Prinsippet «${s}» brukes på teoretikere, men har ingen felles tekst i genreDescriptions.sub.`);
  }

  // --- Påvirkningene ----------------------------------------------------
  for (const [nokkel, e] of Object.entries(d.edgeDescriptions || {})) {
    const [fra, til, ...rest] = nokkel.split("__");
    tall.pavirkninger++;
    if (!fra || !til || rest.length) { F(`Påvirkning «${nokkel}»: nøkkelen må være fra__til.`); continue; }
    const t = nodeId.get(til);
    if (!nodeId.has(fra) || !t) { F(`Påvirkning «${nokkel}»: ukjent epoke-id (bruk id-ene fra treet, ikke etikettene).`); continue; }
    if (!(t.p || []).includes(fra) && !(t.rx || []).includes(fra)) F(`Påvirkning «${nokkel}»: treet har ingen strek fra «${fra}» til «${til}».`);
    if (!String(e?.description || "").trim()) A(`Påvirkning «${nokkel}»: ingen beskrivelse.`);
    sjekkKilder(e?.kilder, `Påvirkning «${nokkel}»`);
  }

  // --- Reformer og milepæler --------------------------------------------
  const reformNavn = new Set();
  (d.tech || []).forEach((t, i) => {
    const hva = `Reform ${i + 1} (${t?.name || "uten navn"})`;
    tall.reformer++;
    if (!String(t?.name || "").trim()) F(`${hva}: mangler name.`);
    else if (reformNavn.has(t.name.trim().toLowerCase())) F(`${hva}: navnet står to ganger.`);
    else reformNavn.add(t.name.trim().toLowerCase());
    if (!TECH_CATEGORIES.includes(t?.category)) F(`${hva}: kategorien «${t?.category}» er ikke ${TECH_CATEGORIES.join("/")}.`);
    if (t?.type != null && !TECH_TYPES.some((x) => x.value === t.type)) F(`${hva}: type «${t.type}» er ikke ${TECH_TYPES.map((x) => x.value).join("/")}.`);
    for (const k of ["inventedYear", "adoptedYear"]) {
      if (t?.[k] != null && t[k] !== "" && !erAar(t[k])) F(`${hva}: ${k} «${t[k]}» er ikke et årstall.`);
    }
    sjekkKilder(t?.kilder, hva);
    if (!String(t?.description || "").trim()) A(`${hva}: ingen beskrivelse.`);
  });

  return { feil, advarsler, tall };
}

// ---------------------------------------------------------------------------
//  Kommandolinjen
// ---------------------------------------------------------------------------
const erHovedfil = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (erHovedfil) {
  const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
  const args = process.argv.slice(2);
  const treIdx = args.indexOf("--tre");
  const trefil = treIdx >= 0 ? args[treIdx + 1] : path.join(ROT, "json files/pedagogikk-skjelett.json");
  const filnavn = args.filter((a, i) => !a.startsWith("--") && i !== treIdx + 1)[0];
  if (!filnavn) { console.error("Bruk: node tools/sjekk-innholdsfil.js <fil.json> [--tre tre.json]"); process.exit(2); }
  const les = (f) => JSON.parse(fs.readFileSync(f, "utf8"));
  let fil, tre;
  try { fil = les(filnavn); } catch (e) { console.error(`Kan ikke lese ${filnavn}: ${e.message}`); process.exit(2); }
  try { const t = les(trefil); tre = t.genealogy || t; } catch (e) { console.error(`Kan ikke lese treet ${trefil}: ${e.message}`); process.exit(2); }
  const { feil, advarsler, tall } = sjekkInnholdsfil(fil, tre);
  advarsler.forEach((m) => console.log(`  [advarsel] ${m}`));
  feil.forEach((m) => console.log(`  [FEIL] ${m}`));
  const deler = Object.entries(tall).filter(([, n]) => n).map(([k, n]) => `${n} ${k}`).join(", ");
  console.log(`\n${filnavn}: ${deler || "ingenting"}. ${feil.length} feil, ${advarsler.length} advarsler.`);
  process.exit(feil.length ? 1 : 0);
}
