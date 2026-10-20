// Pedagogikkens eget tre (fase 1 og 2) og eksemplene i JSON-OPPSKRIFT.md.
// De andre testene låser FORMLENE mot musikkappens frø (tests/helpers/seed-model.js);
// denne låser det nye innholdet: skjelettet Eirik importerer på lærersiden, og at
// eksemplene i oppskriften faktisk lar seg importere.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateTree, sjekkTidsrom } from "../../js/sjangre/genre-validate.js";
import {
  rebuild, GENEALOGY_MAIN_GENRES, GENEALOGY_ROOT_GENRES, layoutX, TIDSROM,
} from "../../js/sjangre/genre-model.js";
import { INSTRUMENTS, GENDERS } from "../../js/felles/limits.js";
import { normalizeImportFile, validateArtistsForImport, flattenGenreDescriptions } from "../../js/data/import-format.js";
import { EPOKER, RETNINGER, TIDSROM as SKJELETT_TIDSROM } from "../../tools/pedagogikk-skjelett.js";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const lesFil = (rel) => fs.readFileSync(path.join(ROT, rel), "utf8");
const skjelett = JSON.parse(lesFil("json files/pedagogikk-skjelett.json"));
const tre = skjelett.genealogy;

test("skjelettfila er et gyldig tre uten feil", () => {
  assert.equal(skjelett.formatVersion, 1);
  const feil = validateTree(tre).filter((p) => p.nivå === "feil");
  assert.deepEqual(feil, []);
  assert.deepEqual(sjekkTidsrom(tre.tidsrom, tre.nodes).filter((p) => p.nivå === "feil"), []);
});

test("skjelettet har vedtatt størrelse: 8 retninger, 45 epoker, 16 tidsrom, 55 påvirkninger og 8 motreaksjoner", () => {
  assert.equal(tre.metaGenres.length, 8);
  assert.equal(tre.nodes.length, 45);
  assert.equal(tre.tidsrom.length, 16);
  assert.equal(tre.nodes.reduce((n, e) => n + e.p.length, 0), 55);
  assert.equal(tre.nodes.reduce((n, e) => n + (e.rx || []).length, 0), 8);
});

test("hver epoke hører til en retning, står i et tidsrom og påvirkes bare bakover i tid", () => {
  const retninger = new Set(tre.metaGenres.map((m) => m.name));
  const perId = new Map(tre.nodes.map((n) => [n.id, n]));
  for (const n of tre.nodes) {
    assert.ok(retninger.has(n.g), `${n.id}: ukjent retning «${n.g}»`);
    assert.ok(n.r >= 0 && n.r < tre.tidsrom.length, `${n.id}: raden ${n.r} har ikke noe tidsrom`);
    for (const pid of [...n.p, ...(n.rx || [])]) {
      assert.ok(perId.has(pid), `${n.id}: ukjent forelder ${pid}`);
      assert.ok(perId.get(pid).r <= n.r, `${pid} → ${n.id} går bakover i tid`);
    }
  }
});

test("appens modell tar imot treet: ingen røtter, alle epoker kan tagges og har x-posisjon", () => {
  rebuild(tre);
  assert.equal(GENEALOGY_ROOT_GENRES.length, 0, "røtter kan ikke tagges på teoretikere");
  assert.equal(GENEALOGY_MAIN_GENRES.length, 45);
  assert.equal(TIDSROM.length, 16);
  for (const n of tre.nodes) assert.ok(Number.isFinite(layoutX(n.id)), `${n.id} mangler x-posisjon`);
});

test("tidsrommene starter før Kristus og slutter åpent «til i dag»", () => {
  assert.equal(tre.tidsrom[0].fra, -800);
  assert.equal(tre.tidsrom.at(-1).til, null);
  for (let i = 1; i < tre.tidsrom.length; i++) assert.ok(tre.tidsrom[i].fra > tre.tidsrom[i - 1].fra, `tidsrom ${i} stiger ikke`);
});

test("skjelettfila stemmer med kilden i tools/pedagogikk-skjelett.js", () => {
  assert.deepEqual(tre.nodes.map((n) => n.id), EPOKER.map((e) => e.id));
  for (const e of EPOKER) {
    const n = tre.nodes.find((x) => x.id === e.id);
    assert.equal(n.l, e.l, e.id);
    assert.equal(n.g, e.g, e.id);
    assert.equal(n.r, e.r, e.id);
    assert.deepEqual(n.p, e.p || [], e.id);
    assert.deepEqual(n.rx || [], e.rx || [], e.id);
  }
  assert.deepEqual(tre.metaGenres.map((m) => m.name), RETNINGER.map((r) => r.navn));
  assert.deepEqual(tre.tidsrom.map((t) => t.fra), SKJELETT_TIDSROM.map((t) => t.fra));
});

// ---------------------------------------------------------------------------
//  Eksemplene i JSON-OPPSKRIFT.md
// ---------------------------------------------------------------------------

const oppskrift = lesFil("JSON-OPPSKRIFT.md");
const jsonBlokker = [...oppskrift.matchAll(/```json\n([\s\S]*?)```/g)].map((m) => m[1]);
const blokkMed = (tekst) => {
  const b = jsonBlokker.find((x) => x.includes(tekst));
  assert.ok(b, `fant ingen eksempel med «${tekst}» i JSON-OPPSKRIFT.md`);
  return JSON.parse(b);
};

const retninger = new Set(tre.metaGenres.map((m) => m.name));
const epokeEtiketter = new Set(tre.nodes.map((n) => n.l));

function sjekkTeoretiker(a) {
  assert.ok(retninger.has(a.metaGenre), `retningen «${a.metaGenre}» finnes ikke i treet`);
  assert.ok(INSTRUMENTS.includes(a.instrument), `fagbakgrunnen «${a.instrument}» finnes ikke`);
  assert.ok(GENDERS.some((g) => g.value === a.gender), `kjønnet «${a.gender}» finnes ikke`);
  for (const e of a.mainGenre) assert.ok(epokeEtiketter.has(e), `epoken «${e}» finnes ikke i treet`);
  assert.ok(Array.isArray(a.kilder) && a.kilder.length, "kilder er påkrevd");
}

test("teoretikereksempelet i oppskriften er en gyldig import", () => {
  const dewey = blokkMed('"name": "John Dewey"');
  sjekkTeoretiker(dewey);
  assert.deepEqual(validateArtistsForImport([dewey]).errors, []);
});

test("mini-fila i oppskriften kjennes igjen av importen og har gyldige teoretikere", () => {
  const fil = blokkMed('"name": "Johann Heinrich Pestalozzi"');
  const d = normalizeImportFile(fil);
  assert.ok(d, "fila ble ikke gjenkjent");
  assert.equal(d.artists.length, 1);
  assert.deepEqual(validateArtistsForImport(d.artists).errors, []);
  d.artists.forEach(sjekkTeoretiker);
  // Beskrivelsene flates ut til { navn: dokument }, og begge nivåene er med.
  const flat = flattenGenreDescriptions(d.genreDescriptions);
  assert.ok(flat["Anskuelsespedagogikken"].main.description);
  assert.ok(flat["Anskuelse"].sub.description);
});

test("toppnivået i oppskriften bruker bare nøkler importen kjenner", () => {
  // Blokken har «...» og kommentarer og lar seg ikke parse; nøklene leses ut med mønster.
  const blokk = jsonBlokker.find((x) => x.includes('"formatVersion"'));
  assert.ok(blokk, "fant ikke toppnivåblokken");
  const nokler = [...blokk.matchAll(/^  "(\w+)":/gm)].map((m) => m[1]);
  const kjente = new Set(["formatVersion", "artists", "genreDescriptions", "edgeDescriptions", "tech", "pages",
    "teacherChecks", "referanser", "presentasjoner", "notater", "genealogy"]);
  assert.ok(nokler.length >= 10, "leste for få nøkler");
  for (const k of nokler) assert.ok(kjente.has(k), `«${k}» er ikke en kjent importnøkkel`);
});
