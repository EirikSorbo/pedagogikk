#!/usr/bin/env node
// ============================================================================
//  IMPORTFIL FOR VIKTIGHETSGRADENE (v0.26)
// ----------------------------------------------------------------------------
//  Bygger en delfil med bare navn og grad fra innhold/viktighetsgrader.mjs.
//  Læreren importerer den med «Slå sammen» (Innstillinger → Importer): graden
//  fylles inn der kortet ikke har grad, og gir en konflikt der kortet har en
//  annen (flettGrad i js/data/import-format.js). «Erstatt alle» avviser fila,
//  fordi radene er delposter. Skript skriver aldri til Firestore direkte.
//
//  Kjør:  node tools/lag-viktighetsgrader.js
//  Ut:    json files/viktighetsgrader.json
//
//  Stopper hvis et navn ikke finnes blant teoretikerne i innhold/runde-*, eller
//  hvis en grad ikke er 1, 2 eller 3. Teoretikere uten grad meldes, men stopper
//  ikke fila.
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { GRADER } from "../innhold/viktighetsgrader.mjs";
import { normalizeImportFile, validateArtistsForImport } from "../js/data/import-format.js";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Teoretikerne i innholdsrundene, slik tools/bygg-innholdsfil.js leser dem.
const kjente = new Set();
const dir = path.join(ROT, "innhold");
for (const runde of fs.readdirSync(dir).filter((d) => d.startsWith("runde-")).sort()) {
  for (const f of fs.readdirSync(path.join(dir, runde)).filter((x) => x.endsWith(".mjs"))) {
    const m = await import(pathToFileURL(path.join(dir, runde, f)));
    for (const a of m.default?.artists || []) kjente.add(a.name);
  }
}

const feil = [];
for (const [navn, grad] of Object.entries(GRADER)) {
  if (!kjente.has(navn)) feil.push(`«${navn}» finnes ikke blant teoretikerne i innhold/runde-*`);
  if (![1, 2, 3].includes(grad)) feil.push(`«${navn}» har grad ${JSON.stringify(grad)}; bare 1, 2 og 3 er lov`);
}
const fil = { formatVersion: 1, artists: Object.entries(GRADER).map(([name, priority]) => ({ name, priority })) };
const { ok, errors } = validateArtistsForImport(normalizeImportFile(fil).artists);
if (!ok) feil.push(...errors.map((e) => `rad ${e.row}: ${e.problems.join("; ")}`));

if (feil.length) {
  feil.forEach((f) => console.error(`  [feil] ${f}`));
  console.error(`\nAVBRUTT: ${feil.length} feil. Ingen fil skrevet.`);
  process.exit(1);
}

const uten = [...kjente].filter((n) => !(n in GRADER));
if (uten.length) console.log(`  [merk] ${uten.length} teoretikere uten grad: ${uten.join(", ")}`);

const utfil = path.join(ROT, "json files", "viktighetsgrader.json");
fs.mkdirSync(path.dirname(utfil), { recursive: true });
fs.writeFileSync(utfil, JSON.stringify(fil, null, 2) + "\n");

const telling = { 3: 0, 2: 0, 1: 0 };
for (const g of Object.values(GRADER)) telling[g]++;
console.log(`Skrev ${path.relative(ROT, utfil)}: ${fil.artists.length} teoretikere, `
  + `${telling[3]} viktigst, ${telling[2]} viktig, ${telling[1]} mindre viktig.`);
