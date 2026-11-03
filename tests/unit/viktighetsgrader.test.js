// Viktighetsgradene for teoretikerne (v0.26, Eiriks bestilling 2026-11-03):
// gradene står i innhold/viktighetsgrader.mjs, og «Slå sammen» kan nå sette
// dem (flettGrad og bareGrad i js/data/import-format.js). Før ga en fil med
// bare navn og grad «Ingen endringer å flette inn», for priority står utenfor
// artistskjemaet som flettingen sammenligner.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { flettGrad, bareGrad, validateArtistsForImport, erDelpost } from "../../js/data/import-format.js";
import { lesJs } from "../helpers/js-filer.js";
import { GRADER } from "../../innhold/viktighetsgrader.mjs";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

test("flettGrad: grad 1–3 fyller et kort uten grad", () => {
  assert.deepEqual(flettGrad(0, 3), { fyll: 3 });
  assert.deepEqual(flettGrad(undefined, 2), { fyll: 2 });
  assert.deepEqual(flettGrad(null, 1), { fyll: 1 });
  assert.deepEqual(flettGrad(0, "2"), { fyll: 2 }, "tall som tekst godtas");
});

test("flettGrad: en annen grad på kortet gir konflikt, lik grad gir ingenting", () => {
  assert.deepEqual(flettGrad(2, 3), { konflikt: { field: "priority", existing: 2, imported: 3 } });
  assert.deepEqual(flettGrad(-1, 3), { konflikt: { field: "priority", existing: -1, imported: 3 } },
    "den gamle -1 («skjult») overskrives ikke i stillhet");
  assert.equal(flettGrad(3, 3), null);
});

test("flettGrad: 0, tom og ugyldig i fila tar aldri bort en grad", () => {
  for (const v of [0, null, undefined, "", -1, 4, 2.5, "viktig"]) {
    assert.equal(flettGrad(3, v), null, `fila har ${JSON.stringify(v)}`);
    assert.equal(flettGrad(0, v), null, `fila har ${JSON.stringify(v)}, kortet uten grad`);
  }
});

test("bareGrad: sjekken står bare når graden er det eneste som endres", () => {
  assert.equal(bareGrad({ priority: 3 }), true);
  assert.equal(bareGrad({ priority: 3, description: "ny" }), false);
  assert.equal(bareGrad({ description: "ny" }), false);
  assert.equal(bareGrad({}), false);
  assert.equal(bareGrad(undefined), false);
});

test("flettingen på lærersiden bruker flettGrad og bareGrad", () => {
  const kode = lesJs("teacher-import.js");
  assert.match(kode, /flettGrad\(existing\.priority, imp\.priority\)/, "handleMergeFile fletter graden");
  assert.match(kode, /!bareGrad\(felt\)/, "finishMerge lar sjekken stå når bare graden endres");
  assert.match(kode, /"Viktighetsgrad"/, "konfliktdialogen viser feltnavnet");
});

// v0.27: 196 grader ble skrevet ett kort om gangen (ca. 0,2 s hver), uten
// noe på skjermen før alt var ferdig, og skrivingen stoppet etter 13. Nå
// samles endringene og skrives i batcher.
test("flettingen skriver endringene i batcher, ikke ett kort om gangen", () => {
  const imp = lesJs("teacher-import.js");
  assert.match(imp, /updated = await updateArtistsBulk\(endringer\)/);
  assert.doesNotMatch(imp, /updateArtistFields/, "ingen enkeltskriving igjen i importen");
  const store = lesJs("store.js");
  const fn = store.slice(store.indexOf("export async function updateArtistsBulk"));
  assert.match(fn.slice(0, 400), /writeBatch\(db\)[\s\S]*batch\.update\([\s\S]*batch\.commit\(\)/);
});

// Alle teoretikerne i innholdsrundene, slik tools/bygg-innholdsfil.js leser dem.
async function innholdsnavn() {
  const navn = [];
  const dir = path.join(ROT, "innhold");
  for (const runde of fs.readdirSync(dir).filter((d) => d.startsWith("runde-")).sort()) {
    for (const f of fs.readdirSync(path.join(dir, runde)).filter((x) => x.endsWith(".mjs"))) {
      const m = await import(pathToFileURL(path.join(dir, runde, f)));
      navn.push(...(m.default?.artists || []).map((a) => a.name));
    }
  }
  return navn;
}

test("gradene: hvert navn finnes i innholdet, og hver grad er 1, 2 eller 3", async () => {
  const kjente = new Set(await innholdsnavn());
  const ukjente = Object.keys(GRADER).filter((n) => !kjente.has(n));
  assert.deepEqual(ukjente, [], "navn i innhold/viktighetsgrader.mjs uten teoretiker i innhold/runde-*");
  const ugyldige = Object.entries(GRADER).filter(([, g]) => ![1, 2, 3].includes(g));
  assert.deepEqual(ugyldige, []);
});

test("gradene: alle teoretikerne har grad (Eiriks bestilling); nye teoretikere må få en", async () => {
  const uten = (await innholdsnavn()).filter((n) => !(n in GRADER));
  assert.deepEqual(uten, [], "legg graden inn i innhold/viktighetsgrader.mjs og kjør node tools/lag-viktighetsgrader.js");
});

test("gradene blir en gyldig delfil: «Slå sammen» godtar den, «Erstatt alle» stopper den", () => {
  const artists = Object.entries(GRADER).map(([name, priority]) => ({ name, priority }));
  assert.equal(validateArtistsForImport(artists).ok, true);
  assert.ok(artists.every(erDelpost), "hver rad er en delpost, så handleReplace avviser fila");
});
