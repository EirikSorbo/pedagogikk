// ============================================================================
//  ÅRSTALL OG TIDSAKSE (pedagogikkappens fase 2)
// ----------------------------------------------------------------------------
//  År før Kristus er negative tall og vises med «f.Kr.» (js/felles/aarstall.js).
//  Tidsrommene i treet er aksen for tidslinjene, stripene og filtrene
//  (js/felles/tidsakse.js): hvert tidsrom like bredt, året lineært innenfor.
// ============================================================================
import test from "node:test";
import assert from "node:assert/strict";
import { visAar, visSpenn, tolkAar, erAar, AAR_MIN, AAR_MAKS } from "../../js/felles/aarstall.js";
import { tidsromGrenser, tidsromIndeks, tidsromForSpenn, aksePos, forAksen, etterAksen } from "../../js/felles/tidsakse.js";

// --- Årstall -------------------------------------------------------------------

test("visAar: f.Kr. for negative år, ellers bare tallet", () => {
  assert.equal(visAar(-427), "427 f.Kr.");
  assert.equal(visAar(1762), "1762");
  assert.equal(visAar("1762"), "1762");
  assert.equal(visAar(null), "");
  assert.equal(visAar(undefined), "");
  assert.equal(visAar(""), "");
  assert.equal(visAar("tull"), "");
});

test("visSpenn: f.Kr. bare der det trengs", () => {
  assert.equal(visSpenn(-427, -347), "427–347 f.Kr.", "begge før Kristus: én gang bakerst");
  assert.equal(visSpenn(-4, 30), "4 f.Kr.–30", "over tidsskillet");
  assert.equal(visSpenn(1762, 1827), "1762–1827");
  assert.equal(visSpenn(1950, 1950), "1950", "samme år er ett årstall");
  assert.equal(visSpenn(-387, -387), "387 f.Kr.");
  assert.equal(visSpenn(1990, null, { apen: "i dag" }), "1990–i dag");
  assert.equal(visSpenn(1990, null), "1990–");
  assert.equal(visSpenn(null, 1778), "?–1778");
  assert.equal(visSpenn(null, null), "");
});

test("tolkAar: minus, f.Kr. og fvt. leses som før Kristus; tomt og søppel gir null", () => {
  assert.equal(tolkAar("-427"), -427);
  assert.equal(tolkAar("427 f.Kr."), -427);
  assert.equal(tolkAar("427 f.kr"), -427);
  assert.equal(tolkAar("427 fvt."), -427);
  assert.equal(tolkAar(" 1762 "), 1762);
  assert.equal(tolkAar("30 e.Kr."), 30);
  assert.equal(tolkAar(1762), 1762);
  assert.equal(tolkAar(""), null);
  assert.equal(tolkAar("0"), null, "år 0 finnes ikke");
  assert.equal(tolkAar("ca. 1900"), null, "et anslag er ikke et årstall");
  assert.equal(tolkAar(String(AAR_MAKS + 1)), null);
  assert.equal(tolkAar(AAR_MIN - 1), null);
});

test("erAar: heltall innenfor grensene, aldri 0", () => {
  assert.equal(erAar(-427), true);
  assert.equal(erAar(AAR_MIN), true);
  assert.equal(erAar(AAR_MAKS), true);
  assert.equal(erAar(0), false);
  assert.equal(erAar(1762.5), false);
  assert.equal(erAar("1762"), false);
});

// --- Tidsaksen -----------------------------------------------------------------
//   0: 800–150 f.Kr.   1: 150 f.Kr.–1500   2: 1500–1900   3: 1900–i dag
const T = [{ fra: -800, til: -150 }, { fra: -150, til: 1500 }, { fra: 1500, til: 1900 }, { fra: 1900, til: null }];
const NAA = 2026;

test("tidsromGrenser: siste tidsrom uten sluttår varer til i dag; uten startår finnes ingen akse", () => {
  assert.deepEqual(tidsromGrenser(T, NAA).map((g) => [g.start, g.slutt, g.apen]),
    [[-800, -150, false], [-150, 1500, false], [1500, 1900, false], [1900, NAA, true]]);
  assert.deepEqual(tidsromGrenser([], NAA), []);
  assert.deepEqual(tidsromGrenser([{ navn: "uten år" }], NAA), []);
  assert.deepEqual(tidsromGrenser(null, NAA), []);
  // Et hull i dataene tettes med nabogrensa, så aksen aldri får NaN.
  assert.deepEqual(tidsromGrenser([{ fra: 1800 }, { fra: 1900, til: 1950 }], NAA).map((g) => [g.start, g.slutt]),
    [[1800, 1900], [1900, 1950]]);
});

test("tidsromIndeks: halvåpne tidsrom, så grenseåret hører til det senere", () => {
  assert.equal(tidsromIndeks(T, -427, NAA), 0);
  assert.equal(tidsromIndeks(T, -150, NAA), 1, "150 f.Kr. begynner neste tidsrom");
  assert.equal(tidsromIndeks(T, 1500, NAA), 2);
  assert.equal(tidsromIndeks(T, 2030, NAA), 3, "det åpne siste tar imot senere år");
  assert.equal(tidsromIndeks(T, -1000, NAA), -1, "før aksen");
  assert.equal(tidsromIndeks(T, NaN, NAA), -1);
});

test("tidsromForSpenn: hele år i begge ender", () => {
  assert.deepEqual(tidsromForSpenn(T, -387, -347, NAA), [0]);
  assert.deepEqual(tidsromForSpenn(T, 1466, 1536, NAA), [1, 2], "Erasmus spenner over grensen 1500");
  assert.deepEqual(tidsromForSpenn(T, 1880, 1900, NAA), [2, 3], "sluttåret 1900 berører 1900–i dag");
  assert.deepEqual(tidsromForSpenn(T, 1950, null, NAA), [3], "uten slutt: bare startåret");
  assert.deepEqual(tidsromForSpenn(T, 1950, 1940, NAA), [3], "slutt før start teller som startåret");
  assert.deepEqual(tidsromForSpenn(T, null, 1940, NAA), []);
});

test("aksePos: hvert tidsrom er en like stor del av aksen", () => {
  assert.equal(aksePos(T, -800, NAA), 0);
  assert.equal(aksePos(T, -150, NAA), 0.25);
  assert.equal(aksePos(T, 1500, NAA), 0.5);
  assert.equal(aksePos(T, 1700, NAA), 0.625, "midt i 1500–1900");
  assert.equal(aksePos(T, 1900, NAA), 0.75);
  assert.equal(aksePos(T, NAA, NAA), 1);
  assert.equal(aksePos(T, -2000, NAA), 0, "før aksen klemmes til venstre kant");
  assert.equal(aksePos(T, 2100, NAA), 1, "etter aksen klemmes til høyre kant");
  assert.equal(aksePos([], 1900, NAA), null, "ingen tidsrom, ingen akse");
  // Monoton: et senere år står aldri til venstre for et tidligere.
  let forrige = -1;
  for (let y = -900; y <= NAA + 10; y += 37) {
    const p = aksePos(T, y, NAA);
    assert.ok(p >= forrige, `${y}`);
    forrige = p;
  }
});

test("forAksen og etterAksen sier når en ende er klippet", () => {
  assert.equal(forAksen(T, -1000, NAA), true);
  assert.equal(forAksen(T, -800, NAA), false);
  assert.equal(etterAksen(T, NAA + 1, NAA), true);
  assert.equal(etterAksen(T, NAA, NAA), false);
  assert.equal(forAksen([], -1000, NAA), false, "uten akse er ingenting klippet");
});
