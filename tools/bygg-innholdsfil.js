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
//         … --lenker   (sjekker i tillegg hver lenke på nettet, med sidetittel)
//
//  Hver del eksporterer `default` med noen av nøklene artists,
//  genreDescriptions ({ meta, main, sub }), edgeDescriptions og tech. Navn som står i
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
  const ut = { formatVersion: 1, artists: [], genreDescriptions: { meta: {}, main: {}, sub: {} }, edgeDescriptions: {}, tech: [], pages: {} };
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
    for (const t of del.tech || []) {
      const k = `reform:${String(t.name).trim().toLowerCase()}`;
      if (hvor.has(k)) feil.push(`Reformen «${t.name}» står i både ${hvor.get(k)} og ${navn}.`);
      hvor.set(k, navn);
      ut.tech.push({ status: "active", ...ryddDypt(t) });
    }
    for (const [id, side] of Object.entries(del.pages || {})) {
      const k = `side:${id}`;
      if (hvor.has(k)) feil.push(`Siden «${id}» står i både ${hvor.get(k)} og ${navn}.`);
      hvor.set(k, navn);
      ut.pages[id] = ryddDypt(side);
    }
    for (const [n, e] of Object.entries(del.edgeDescriptions || {})) {
      const k = `kobling:${n}`;
      if (hvor.has(k)) feil.push(`Påvirkningen «${n}» står i både ${hvor.get(k)} og ${navn}.`);
      hvor.set(k, navn);
      ut.edgeDescriptions[n] = ryddDypt(e);
    }
  }
  ut.artists.sort((a, b) => (a.influenceStart ?? 0) - (b.influenceStart ?? 0) || a.name.localeCompare(b.name, "no"));
  ut.tech.sort((a, b) => (a.adoptedYear ?? a.inventedYear ?? 0) - (b.adoptedYear ?? b.inventedYear ?? 0) || a.name.localeCompare(b.name, "no"));
  if (!ut.tech.length) delete ut.tech;
  if (!Object.keys(ut.pages).length) delete ut.pages;
  return { fil: ut, feil };
}

// --lenker: henter hver lenke i fila og viser status og sidetittel, så man ser
// både døde lenker og lenker som svarer 200, men til feil side.
async function sjekkLenker(fil) {
  const urler = new Set();
  const samle = (v) => {
    if (Array.isArray(v)) v.forEach(samle);
    else if (v && typeof v === "object") { if (typeof v.url === "string") urler.add(v.url); Object.values(v).forEach(samle); }
  };
  samle(fil);
  let feil = 0;
  console.log(`\nSjekker ${urler.size} lenker …`);
  for (const url of [...urler].sort()) {
    try {
      const svar = await fetch(url, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0 (lenkesjekk)" } });
      const html = await svar.text();
      const tittel = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "").replace(/\s+/g, " ").trim().slice(0, 80);
      if (svar.status !== 200) feil++;
      console.log(`  ${svar.status === 200 ? "ok  " : "FEIL"} ${svar.status} ${url}  «${tittel}»`);
    } catch (e) {
      feil++;
      console.log(`  FEIL --- ${url}  (${e.message})`);
    }
  }
  return feil;
}

const erHovedfil = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (erHovedfil) {
  const [mappe, utfil] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
  if (!mappe || !utfil) { console.error('Bruk: node tools/bygg-innholdsfil.js innhold/runde-1 "json files/runde-1.json"'); process.exit(2); }
  const abs = path.resolve(ROT, mappe);
  const filer = fs.readdirSync(abs).filter((f) => f.endsWith(".mjs")).sort();
  const deler = [];
  for (const f of filer) deler.push([f, (await import(pathToFileURL(path.join(abs, f)).href)).default]);
  const { fil, feil } = slaaSammen(deler, { foreslaattAv: `Fase 6, ${path.basename(abs)}` });
  feil.forEach((m) => console.log(`  [FEIL] ${m}`));
  const tre = JSON.parse(fs.readFileSync(path.join(ROT, "json files/pedagogikk-skjelett.json"), "utf8"));
  // Prinsippene fra de andre rundene i innhold/ er allerede skrevet og kan brukes
  // på teoretikerne i denne runden uten advarsel.
  const kjentePrinsipper = [];
  const innhold = path.dirname(abs);
  for (const annen of fs.readdirSync(innhold).filter((d) => d !== path.basename(abs) && fs.statSync(path.join(innhold, d)).isDirectory())) {
    for (const f of fs.readdirSync(path.join(innhold, annen)).filter((x) => x.endsWith(".mjs"))) {
      const del = (await import(pathToFileURL(path.join(innhold, annen, f)).href)).default;
      kjentePrinsipper.push(...Object.keys(del.genreDescriptions?.sub || {}));
    }
  }
  const sjekk = sjekkInnholdsfil(fil, tre.genealogy || tre, { kjentePrinsipper });
  sjekk.advarsler.forEach((m) => console.log(`  [advarsel] ${m}`));
  sjekk.feil.forEach((m) => console.log(`  [FEIL] ${m}`));
  fs.writeFileSync(path.resolve(ROT, utfil), JSON.stringify(fil, null, 2) + "\n");
  let lenkefeil = 0;
  if (process.argv.includes("--lenker")) lenkefeil = await sjekkLenker(fil);
  const deler2 = Object.entries(sjekk.tall).filter(([, n]) => n).map(([k, n]) => `${n} ${k}`).join(", ");
  console.log(`\n${filer.length} deler -> ${utfil}: ${deler2}. ${feil.length + sjekk.feil.length} feil, ${sjekk.advarsler.length} advarsler${lenkefeil ? `, ${lenkefeil} lenkefeil` : ""}.`);
  process.exit(feil.length + sjekk.feil.length + lenkefeil ? 1 : 0);
}
