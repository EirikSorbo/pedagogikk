#!/usr/bin/env node
// ============================================================================
//  IMPORTFIL FOR RUNDE 1 AV INNHOLDET (fase 6)
// ----------------------------------------------------------------------------
//  Setter sammen tekstene i tools/runde-1/ (tre retninger, prinsippene og
//  påvirkningene) til én importfil i formatet i JSON-OPPSKRIFT.md, sjekker den
//  med tools/sjekk-innholdsfil.js og skriver «json files/runde-1.json».
//  Skriptet skriver aldri til Firestore: læreren importerer fila selv.
//
//  Kjør:  node tools/lag-runde-1.js            (bygg, sjekk og skriv)
//         node tools/lag-runde-1.js --lenker   (sjekk i tillegg hver lenke på nettet)
//  Exit 1 når sjekken finner feil eller en lenke ikke svarer 200.
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sjekkInnholdsfil } from "./sjekk-innholdsfil.js";
import * as barnet from "./runde-1/barnet-i-sentrum.js";
import * as erfaring from "./runde-1/erfaring-og-demokrati.js";
import * as skolen from "./runde-1/skolen-for-alle.js";
import { prinsipper } from "./runde-1/prinsipper.js";
import { pavirkninger } from "./runde-1/pavirkninger.js";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UT = path.join(ROT, "json files", "runde-1.json");
const tre = JSON.parse(fs.readFileSync(path.join(ROT, "json files", "pedagogikk-skjelett.json"), "utf8")).genealogy;

const STANDARD = { status: "active", teacherChecked: false, proposedBy: "Claude (utkast)", addedYear: 2026, votedUpBy: [] };

const meta = {}, main = {}, sub = {};
const artists = [];
for (const del of [barnet, erfaring, skolen]) {
  const r = del.retning;
  meta[r.navn] = { meta: { description: r.beskrivelse, kilder: r.kilder || [] }, story: { body: r.fortelling } };
  for (const e of del.epoker) {
    const { navn, fra, til, ...felter } = e;
    main[navn] = { main: { ...felter, activeFrom: fra ?? null, activeTo: til ?? null } };
  }
  for (const t of del.teoretikere) artists.push({ ...t, ...STANDARD });
}
for (const p of prinsipper) {
  const { navn, ...felter } = p;
  sub[navn] = { sub: felter };
}

const fil = {
  formatVersion: 1,
  artists,
  genreDescriptions: { meta, main, sub },
  edgeDescriptions: pavirkninger,
};

const { feil, advarsler, tall } = sjekkInnholdsfil(fil, tre);
advarsler.forEach((m) => console.log(`  [advarsel] ${m}`));
feil.forEach((m) => console.log(`  [FEIL] ${m}`));

// Hvilke epoker og retninger i runden som mangler tekst.
const RUNDE = new Set(["Barnet i sentrum", "Erfaring og demokrati", "Skolen for alle"]);
const manglerEpoke = tre.nodes.filter((n) => RUNDE.has(n.g) && !main[n.l]).map((n) => n.l);
if (manglerEpoke.length) console.log(`  [advarsel] Epoker i runden uten tekst: ${manglerEpoke.join(", ")}`);
const brukte = new Set(artists.flatMap((a) => a.subGenre || []));
const ubrukte = prinsipper.map((p) => p.navn).filter((n) => !brukte.has(n));
if (ubrukte.length) console.log(`  [advarsel] Prinsipper ingen teoretiker er merket med: ${ubrukte.join(", ")}`);

const ord = (t) => String(t || "").split(/\s+/).filter(Boolean).length;
const alleTekster = [
  ...artists.map((a) => a.description),
  ...Object.values(meta).flatMap((d) => [d.meta.description, d.story.body]),
  ...Object.values(main).flatMap((d) => [d.main.description, d.main.samfunn, d.main.skole]),
  ...Object.values(sub).map((d) => d.sub.description),
  ...Object.values(pavirkninger).map((e) => e.description),
];
console.log(`\n${Object.entries(tall).filter(([, n]) => n).map(([k, n]) => `${n} ${k}`).join(", ")}; ${alleTekster.reduce((s, t) => s + ord(t), 0)} ord.`);

let lenkefeil = 0;
if (process.argv.includes("--lenker")) {
  const urler = new Set();
  const samle = (liste) => (liste || []).forEach((k) => k?.url && urler.add(k.url));
  artists.forEach((a) => { samle(a.kilder); samle(a.keyWorks); });
  [meta, main, sub].forEach((b) => Object.values(b).forEach((d) => Object.values(d).forEach((l) => { samle(l?.kilder); samle(l?.seOgLes); })));
  Object.values(pavirkninger).forEach((e) => samle(e.kilder));
  console.log(`\nSjekker ${urler.size} lenker …`);
  for (const url of [...urler].sort()) {
    try {
      const svar = await fetch(url, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0 (lenkesjekk)" } });
      const html = await svar.text();
      const tittel = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || "").replace(/\s+/g, " ").trim().slice(0, 90);
      if (svar.status !== 200) lenkefeil++;
      console.log(`  ${svar.status === 200 ? "ok " : "FEIL"} ${svar.status} ${url}  «${tittel}»`);
    } catch (e) {
      lenkefeil++;
      console.log(`  FEIL ---  ${url}  (${e.message})`);
    }
  }
}

if (feil.length || lenkefeil) {
  console.error(`\nAVBRUTT: ${feil.length} feil, ${lenkefeil} lenkefeil. Fila er ikke skrevet.`);
  process.exit(1);
}
fs.writeFileSync(UT, JSON.stringify(fil, null, 2) + "\n");
console.log(`Skrev ${path.relative(ROT, UT)}.`);
