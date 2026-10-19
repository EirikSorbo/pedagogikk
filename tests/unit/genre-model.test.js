// ============================================================================
//  SJANGERMODELLEN — avledningene må være uendret
// ----------------------------------------------------------------------------
//  tests/fixtures/genre-model.json er en FASIT: avledningene fra frøet slik de
//  var da treet ble flyttet ut av koden (v4.47). Testene her bygger modellen
//  fra frøet — via byggGenealogyDoc, altså v2-FORMEN produksjonen leser — og
//  krever at hver avledede struktur er dypt lik fasiten.
//
//  Feiler en av dem, er det én av to ting: enten er en formel endret ved et
//  uhell, eller så er treet/transformasjonen bevisst endret. I det andre
//  tilfellet skal fasiten regenereres BEVISST (node tools/dump-genre-fixture.js)
//  og diffen leses som en pensumendring, ikke kvitteres bort.
// ============================================================================
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { GENEALOGY as SEED_NODES, FAMILIES as SEED_FAMILIES, META_ORDER_HINT } from "../../js/sjangre/genealogy-data.js";
import { byggGenealogyDoc } from "../../tools/build-genealogy-doc.js";
import {
  rebuild, GENEALOGY, GENEALOGY_MAIN_GENRES, GENEALOGY_META_GENRES, META_GENRE_ORDER,
  GENEALOGY_EDGES, MAIN_GENRE_INFO, META_GENRE_COLOR, TIDSROM, RAD_ANTALL,
  tidsromEtikett, tidsromValg, normaliserTidsrom, applyGenealogyDoc,
  isMainGenre, findTreeGenreNode, canonMainGenre, genreNodeById, edgeKey,
  isGenreModelReady, onGenreModelChanged,
} from "../../js/sjangre/genre-model.js";

const HER = path.dirname(fileURLToPath(import.meta.url));
const fasit = JSON.parse(fs.readFileSync(path.join(HER, "../fixtures/genre-model.json"), "utf8"));

const SEED_DOC = byggGenealogyDoc({ GENEALOGY: SEED_NODES, FAMILIES: SEED_FAMILIES, META_ORDER_HINT });
const seed = () => rebuild(SEED_DOC);
seed();

test("frøet gir nøyaktig fasitens noder", () => {
  assert.equal(GENEALOGY.length, fasit.nodes.length);
  // rebuild normaliserer rx til alltid å finnes; sammenlign feltvis mot fasiten.
  // NB: fam er nå et UNNTAKSFELT (v2-formen) — de fleste nodene arver familien
  // fra metasjangeren, og den avledede per-node-familien låses i stedet av
  // mainGenreInfo-fasiten under.
  GENEALOGY.forEach((n, i) => {
    const f = fasit.nodes[i];
    assert.equal(n.id, f.id, `node ${i} id`);
    assert.equal(n.l, f.l);
    assert.equal(n.f, f.f);
    assert.equal(n.fam, f.fam);
    assert.equal(n.g, f.g ?? null);
    assert.deepEqual(n.p, f.p);
    assert.deepEqual(n.rx, f.rx || []);
  });
});

test("sjangervokabularet er uendret", () => {
  assert.deepEqual(GENEALOGY_MAIN_GENRES, fasit.mainGenres);
});

test("metasjangrene og den pedagogiske rekkefølgen er uendret", () => {
  assert.deepEqual(GENEALOGY_META_GENRES, fasit.metaGenres);
  assert.deepEqual(META_GENRE_ORDER, fasit.metaGenreOrder);
});

test("kantene er uendret, i samme rekkefølge", () => {
  assert.deepEqual(GENEALOGY_EDGES, fasit.edges);
});

test("fargeoppslagene er uendret", () => {
  assert.deepEqual(MAIN_GENRE_INFO, fasit.mainGenreInfo);
  assert.deepEqual(META_GENRE_COLOR, fasit.metaGenreColor);
});

test("isMainGenre svarer likt for alle navn i treet, også i annen case", () => {
  for (const [navn, ventet] of Object.entries(fasit.isMainGenreTable)) {
    assert.equal(isMainGenre(navn), ventet, navn);
  }
});

test("findTreeGenreNode peker på samme node som før", () => {
  for (const [navn, ventetId] of Object.entries(fasit.findTreeGenreNodeTable)) {
    assert.equal(findTreeGenreNode(navn)?.id ?? null, ventetId, navn);
  }
});

test("edgeKey er dokument-ID-en i edgeDescriptions", () => {
  assert.equal(edgeKey("blues", "rnb"), "blues__rnb");
});

test("canonMainGenre kanoniserer case og avviser ikke-sjangre", () => {
  assert.equal(canonMainGenre("blues"), "Blues");
  assert.equal(canonMainGenre("BLUES"), "Blues");
  assert.equal(canonMainGenre("Rockabilly"), undefined);
});

test("genreNodeById slår opp på id", () => {
  assert.equal(genreNodeById("blues")?.l, "Blues");
  assert.equal(genreNodeById("finnes-ikke"), null);
});

// --- Tidsrommene (pedagogikkappens fase 2) ----------------------------------
//  Radene er tidsrom av ulik lengde, lagret i treet (tidsrom), ikke tiår
//  regnet ut i koden. Frøet er fra før de fantes og har ingen.

const TIDSROM_TEST = [
  { fra: -800, til: -150, etikett: "ca. 800–150 f.Kr.", navn: "Antikkens Hellas" },
  { fra: -150, til: 500 },
  { fra: 500, til: null, navn: "Etter Romerriket" },
];

test("tidsrommene leses fra treet, og etiketten utledes når den mangler", () => {
  rebuild({ ...SEED_DOC, tidsrom: TIDSROM_TEST });
  assert.equal(TIDSROM.length, 3);
  assert.deepEqual(TIDSROM[0], { fra: -800, til: -150, navn: "Antikkens Hellas", etikett: "ca. 800–150 f.Kr." });
  assert.equal(TIDSROM[1].etikett, "150 f.Kr.–500", "f.Kr. bare der det trengs");
  assert.equal(TIDSROM[2].etikett, "500–i dag", "åpent siste tidsrom varer til i dag");
  assert.equal(tidsromEtikett(1), "150 f.Kr.–500");
  assert.equal(tidsromEtikett(1.5), "150 f.Kr.–500", "en mellomrad hører til raden den står i");
  assert.equal(tidsromEtikett(9), "", "rad uten tidsrom: ingen etikett");
  assert.deepEqual(tidsromValg().map((v) => v.value), ["0", "1", "2"]);
  assert.equal(tidsromValg()[0].label, "ca. 800–150 f.Kr. (Antikkens Hellas)");
  seed();
});

test("RAD_ANTALL dekker både tidsrommene og den dypeste noden", () => {
  const maxRad = Math.max(...SEED_NODES.map((n) => Math.floor(n.r)));
  rebuild({ ...SEED_DOC, tidsrom: TIDSROM_TEST });
  assert.equal(RAD_ANTALL, maxRad + 1, "frøet står dypere enn de tre tidsrommene");
  rebuild({ ...SEED_DOC, tidsrom: Array.from({ length: 20 }, (_, i) => ({ fra: 1000 + i, til: 1001 + i })) });
  assert.equal(RAD_ANTALL, 20, "flere tidsrom enn rader i treet");
  seed();
  assert.deepEqual(TIDSROM, [], "frøet har ingen tidsrom");
});

test("normaliserTidsrom tåler søppel og tar bare med kjente felt", () => {
  assert.deepEqual(normaliserTidsrom(null), []);
  assert.deepEqual(normaliserTidsrom([{ fra: "1900", til: 1950.5, x: 1 }]),
    [{ fra: null, til: null, navn: "", etikett: "" }]);
  assert.deepEqual(normaliserTidsrom([{ fra: 1900, til: 1950, navn: " Mellomkrigstid " }]),
    [{ fra: 1900, til: 1950, navn: "Mellomkrigstid", etikett: "1900–1950" }]);
});

test("speilet bærer tidsrommene, så en kald start får aksen med", () => {
  const lagret = {};
  globalThis.localStorage = { getItem: (k) => lagret[k] ?? null, setItem: (k, v) => { lagret[k] = v; } };
  try {
    applyGenealogyDoc({ ...SEED_DOC, tidsrom: TIDSROM_TEST });
    const speil = JSON.parse(Object.values(lagret)[0]);
    assert.deepEqual(speil.tidsrom, TIDSROM_TEST);
  } finally {
    delete globalThis.localStorage;
    seed();
  }
});

test("tomt tre gir tom modell og ikke-klar status, uten å kaste", () => {
  rebuild({ nodes: [], families: {}, metaOrderHint: [] });
  assert.equal(isGenreModelReady(), false);
  assert.deepEqual(GENEALOGY_MAIN_GENRES, []);
  assert.deepEqual(GENEALOGY_EDGES, []);
  assert.equal(isMainGenre("Blues"), false);
  assert.equal(findTreeGenreNode("Blues"), null);
  rebuild(undefined);          // helt uten argument skal også overleves
  assert.equal(isGenreModelReady(), false);
  seed();
  assert.equal(isGenreModelReady(), true);
});

test("lyttere varsles ved hver ombygging, og kan melde seg av", () => {
  let n = 0;
  const av = onGenreModelChanged(() => { n++; });
  seed();
  assert.equal(n, 1);
  seed();
  assert.equal(n, 2);
  av();
  seed();
  assert.equal(n, 2, "avmeldt lytter skal ikke varsles");
});

test("en lytter som kaster stopper ikke de andre", () => {
  let naadde = false;
  const a = onGenreModelChanged(() => { throw new Error("med vilje"); });
  const b = onGenreModelChanged(() => { naadde = true; });
  seed();
  a(); b();
  assert.equal(naadde, true);
});
