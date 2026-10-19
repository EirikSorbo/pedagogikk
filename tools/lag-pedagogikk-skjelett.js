#!/usr/bin/env node
// ============================================================================
//  IMPORTFIL FOR PEDAGOGIKKENS SLEKTSTRE (fase 1, tidsrommene fra fase 2)
// ----------------------------------------------------------------------------
//  Bygger dokumentet content/genealogy fra skjelettet i
//  tools/pedagogikk-skjelett.js og skriver det som JSON. Læreren importerer
//  fila i Innholdspakke-flyten; skript skriver ALDRI til Firestore direkte.
//
//  Kjør:  node tools/lag-pedagogikk-skjelett.js
//  Ut:    json files/pedagogikk-skjelett.json
//
//  Før fila skrives, kjøres treet gjennom appens egen kode: validateTree
//  (sykler, ID-er, etiketter, tidsrommene) og rebuild (modellen og layouten).
//  Treet skal ha null røtter (alle epoker kan tagges), en x-posisjon for hver
//  node og et tidsrom for hver rad.
//
//  Formen er { formatVersion, genealogy } med genealogy på toppnivå, som
//  tools/seed-genealogy.js. Bare strukturen følger med: era og personer i
//  skjelettet er notater til fase 6. Tidsrommene (fase 2) står i
//  genealogy.tidsrom, uten `rad` (raden er plassen i lista).
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FAMILIES, RETNINGER, TIDSROM, EPOKER } from "./pedagogikk-skjelett.js";
import { validateTree } from "../js/sjangre/genre-validate.js";
import { rebuild, GENEALOGY_MAIN_GENRES, GENEALOGY_ROOT_GENRES, GENEALOGY_EDGES, TIDSROM as MODELL_TIDSROM, layoutX } from "../js/sjangre/genre-model.js";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Noden slik den lagres (samme form som byggNode i build-genealogy-doc.js):
// tomme felter utelates, og fargen arves fra retningen.
const node = (e) => {
  const ut = { id: e.id, l: e.l, f: e.f, g: e.g, r: e.r, p: e.p || [] };
  if (e.yOffset) ut.yOffset = e.yOffset;
  if (e.rx?.length) ut.rx = e.rx;
  return ut;
};

// Tidsrommet slik det lagres: årstallene, etiketten og navnet når det finnes.
// `rad` må stemme med plassen i lista, ellers ville epokene havnet i feil rad.
const tidsrom = TIDSROM.map((t, i) => {
  if (t.rad !== i) throw new Error(`TIDSROM[${i}] har rad ${t.rad}; raden er plassen i lista.`);
  const ut = { fra: t.fra, til: t.til ?? null };
  if (t.etikett) ut.etikett = t.etikett;
  if (t.navn) ut.navn = t.navn;
  return ut;
});

const tree = {
  version: 2,
  nodes: EPOKER.map(node),
  tidsrom,
  families: FAMILIES,
  metaOrderHint: RETNINGER.map((r) => r.navn),
  metaGenres: RETNINGER.map((r) => ({
    name: r.navn, column: r.kolonne, fam: r.fam, color: FAMILIES[r.fam].stroke,
  })),
};

const problemer = validateTree(tree);
problemer.forEach((p) => console.log(`  [${p.nivå}] ${p.melding}`));
const feil = problemer.filter((p) => p.nivå === "feil");

// Modellen og layouten, slik appen bygger dem når treet kommer fra Firestore.
rebuild(tree);
const utenX = tree.nodes.filter((n) => !Number.isFinite(layoutX(n.id)));
const bakover = tree.nodes.flatMap((n) => n.p
  .filter((pid) => tree.nodes.find((m) => m.id === pid).r > n.r)
  .map((pid) => `${pid} → ${n.id}`));
if (GENEALOGY_ROOT_GENRES.length) feil.push({ melding: `Treet har røtter (kan ikke tagges): ${GENEALOGY_ROOT_GENRES.map((n) => n.l).join(", ")}` });
if (GENEALOGY_MAIN_GENRES.length !== tree.nodes.length) feil.push({ melding: `${tree.nodes.length - GENEALOGY_MAIN_GENRES.length} epoker mangler i vokabularet` });
if (utenX.length) feil.push({ melding: `Ingen x-posisjon: ${utenX.map((n) => n.id).join(", ")}` });
if (bakover.length) feil.push({ melding: `Påvirkning bakover i tid: ${bakover.join(", ")}` });
const utenRom = tree.nodes.filter((n) => Math.floor(n.r) >= MODELL_TIDSROM.length);
if (utenRom.length) feil.push({ melding: `Epoker på en rad uten tidsrom: ${utenRom.map((n) => n.id).join(", ")}` });

if (feil.length) {
  feil.forEach((f) => console.error(`  [feil] ${f.melding}`));
  console.error(`\nAVBRUTT: ${feil.length} feil. Ingen fil skrevet.`);
  process.exit(1);
}

const utfil = path.join(ROT, "json files", "pedagogikk-skjelett.json");
fs.mkdirSync(path.dirname(utfil), { recursive: true });
fs.writeFileSync(utfil, JSON.stringify({ formatVersion: 1, genealogy: tree }, null, 2) + "\n");

const rx = tree.nodes.reduce((s, n) => s + (n.rx?.length || 0), 0);
console.log(`Skrev ${path.relative(ROT, utfil)}: ${RETNINGER.length} retninger, ${tidsrom.length} tidsrom, ${tree.nodes.length} epoker, `
  + `${GENEALOGY_EDGES.length} streker i modellen (${rx} av dem motreaksjoner), 0 røtter.`);
