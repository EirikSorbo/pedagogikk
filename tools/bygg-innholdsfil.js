#!/usr/bin/env node
// ============================================================================
//  BYGG EN INNHOLDSFIL AV DELENE I EN RUNDE (fase 6)
// ----------------------------------------------------------------------------
//  Tekstene i fase 6 skrives som JavaScript-moduler i innhold/<runde>/, én per
//  retning (pluss prinsippene), fordi lange tekster med avsnitt er lettere å
//  lese og rette i malstrenger enn i JSON. Dette skriptet slår delene sammen
//  til ÉN importfil (formatet i JSON-OPPSKRIFT.md), fyller inn standardfeltene
//  og kjører sjekken i tools/sjekk-innholdsfil.js på resultatet.
//
//  Kjør:  node tools/bygg-innholdsfil.js innhold/runde-1 "json files/runde-1.json"
//
//  Hver del eksporterer `default` med noen av nøklene artists,
//  genreDescriptions ({ meta, main, sub }) og edgeDescriptions. Navn som står i
//  to deler, er en feil: hver teoretiker, epoke og påvirkning skrives ett sted.
//  Tekstene trimmes, og innrykk i malstrengene fjernes (se ryddTekst).
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { sjekkInnholdsfil } from "./sjekk-innholdsfil.js";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

// Malstrenger i kildefilene er rykket inn for lesbarhet. Fjern innrykket på
// hver linje og blanke linjer først og sist, men behold avsnittene.
export function ryddTekst(t) {
  if (typeof t !== "string") return t;
  return t.split("\n").map((l) => l.trim()).join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function ryddDypt(v) {
  if (typeof v === "string") return ryddTekst(v);
  if (Array.isArray(v)) return v.map(ryddDypt);
  if (v && typeof v === "object") return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, ryddDypt(x)]));
  return v;
}

export const STANDARD = { status: "active", teacherChecked: false, priority: 0, votedUpBy: [] };

export function slaaSammen(deler, { aar = new Date().getFullYear(), foreslaattAv = "" } = {}) {
  const feil = [];
  const ut = { formatVersion: 1, artists: [], genreDescriptions: { meta: {}, main: {}, sub: {} }, edgeDescriptions: {} };
  const hvor = new Map();
  for (const [navn, del] of deler) {
    for (const a of del.artists || []) {
      const k = `teoretiker:${String(a.name).trim().toLowerCase()}`;
      if (hvor.has(k)) feil.push(`«${a.name}» står i både ${hvor.get(k)} og ${navn}.`);
      hvor.set(k, navn);
      ut.artists.push({ ...STANDARD, addedYear: aar, ...(foreslaattAv ? { proposedBy: foreslaattAv } : {}), ...ryddDypt(a) });
    }
    for (const bolk of ["meta", "main", "sub"]) {
      for (const [n, dok] of Object.entries(del.genreDescriptions?.[bolk] || {})) {
        const k = `${bolk}:${n}`;
        if (hvor.has(k)) feil.push(`Beskrivelsen «${n}» (${bolk}) står i både ${hvor.get(k)} og ${navn}.`);
        hvor.set(k, navn);
        ut.genreDescriptions[bolk][n] = ryddDypt(dok);
      }
    }
    for (const [n, e] of Object.entries(del.edgeDescriptions || {})) {
      const k = `kobling:${n}`;
      if (hvor.has(k)) feil.push(`Påvirkningen «${n}» står i både ${hvor.get(k)} og ${navn}.`);
      hvor.set(k, navn);
      ut.edgeDescriptions[n] = ryddDypt(e);
    }
  }
  ut.artists.sort((a, b) => (a.influenceStart ?? 0) - (b.influenceStart ?? 0) || a.name.localeCompare(b.name, "no"));
  return { fil: ut, feil };
}

const erHovedfil = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (erHovedfil) {
  const [mappe, utfil] = process.argv.slice(2);
  if (!mappe || !utfil) { console.error('Bruk: node tools/bygg-innholdsfil.js innhold/runde-1 "json files/runde-1.json"'); process.exit(2); }
  const abs = path.resolve(ROT, mappe);
  const filer = fs.readdirSync(abs).filter((f) => f.endsWith(".mjs")).sort();
  const deler = [];
  for (const f of filer) deler.push([f, (await import(pathToFileURL(path.join(abs, f)).href)).default]);
  const { fil, feil } = slaaSammen(deler, { foreslaattAv: `Fase 6, ${path.basename(abs)}` });
  feil.forEach((m) => console.log(`  [FEIL] ${m}`));
  const tre = JSON.parse(fs.readFileSync(path.join(ROT, "json files/pedagogikk-skjelett.json"), "utf8"));
  const sjekk = sjekkInnholdsfil(fil, tre.genealogy || tre);
  sjekk.advarsler.forEach((m) => console.log(`  [advarsel] ${m}`));
  sjekk.feil.forEach((m) => console.log(`  [FEIL] ${m}`));
  fs.writeFileSync(path.resolve(ROT, utfil), JSON.stringify(fil, null, 2) + "\n");
  const deler2 = Object.entries(sjekk.tall).filter(([, n]) => n).map(([k, n]) => `${n} ${k}`).join(", ");
  console.log(`\n${filer.length} deler -> ${utfil}: ${deler2}. ${feil.length + sjekk.feil.length} feil, ${sjekk.advarsler.length} advarsler.`);
  process.exit(feil.length + sjekk.feil.length ? 1 : 0);
}
