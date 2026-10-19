import "../helpers/seed-model.js";
import { test } from "node:test";
import assert from "node:assert/strict";
import { artistStripHtml, spanText } from "../../js/ui/artist-strip.js";
import { rebuild } from "../../js/sjangre/genre-model.js";

// Artistkortets stripe plasserer innflytelsesperioden på TIDSROMSAKSEN (fase
// 2): hvert tidsrom like bredt, året lineært innenfor. Testene bruker fem
// tidsrom på 20 % hver, så prosentene kan regnes for hånd:
//   0: 800–150 f.Kr.   1: 150 f.Kr.–500   2: 500–1500   3: 1500–1900   4: 1900–i dag
const T = [
  { fra: -800, til: -150 }, { fra: -150, til: 500 }, { fra: 500, til: 1500 },
  { fra: 1500, til: 1900 }, { fra: 1900, til: null },
];
const NÅ = 2026;   // fast «i dag» i testene, ellers endrer fasiten seg med tiden
// Siste tidsrom varer til i dag: 1900–2026, 126 år.
const pst = (aar) => (aar >= 1900 ? (80 + ((aar - 1900) / 126) * 20)
  : aar >= 1500 ? (60 + ((aar - 1500) / 400) * 20)
  : aar >= 500 ? (40 + ((aar - 500) / 1000) * 20)
  : aar >= -150 ? (20 + ((aar + 150) / 650) * 20)
  : ((aar + 800) / 650) * 20).toFixed(2);
const stripe = (a) => artistStripHtml(a, { nowYear: NÅ, tidsrom: T });

test("perioden plasseres på året sitt, innenfor tidsrommet sitt", () => {
  const html = stripe({ metaGenre: "Blues", influenceStart: 1955, influenceEnd: 1970 });
  assert.match(html, new RegExp(`left:${pst(1955)}%`));            // 88.73 %
  assert.match(html, new RegExp(`width:${(Number(pst(1970)) - Number(pst(1955))).toFixed(2)}%`));
  assert.doesNotMatch(html, /is-cut-/, "en periode innenfor aksen skal ha to lukkede ender");
  assert.match(html, /aria-label="Aktiv ca\. 1955–1970"/);
});

test("en periode før Kristus står i antikkens tidsrom og leses med f.Kr.", () => {
  // Platon underviste i Akademiet fra ca. 387 til 347 f.Kr.
  const html = stripe({ metaGenre: "Blues", influenceStart: -387, influenceEnd: -347 });
  assert.match(html, new RegExp(`left:${pst(-387)}%`));
  assert.match(html, /aria-label="Aktiv ca\. 387–347 f\.Kr\."/);
  // 40 år av 650 er 1,2 %: minstebredden (1,5 %) slår inn, så Platon synes.
  assert.match(html, /width:1\.50%/);
});

test("aksen skriver startåret til noen av tidsrommene, sentrert på sitt eget år", () => {
  // Fem tidsrom og høyst fem årstall: alle står, med f.Kr. der det trengs.
  const html = stripe({ metaGenre: "Blues", influenceStart: 1950 });
  const aar = [...html.matchAll(/<span style="left:([\d.]+)%">([^<]+)<\/span>/g)].map((m) => [m[1], m[2]]);
  assert.deepEqual(aar, [["0.00", "800 f.Kr."], ["20.00", "150 f.Kr."], ["40.00", "500"], ["60.00", "1500"], ["80.00", "1900"]]);
  // Strekene i sporet står ved hver grense (CSS leser antallet).
  assert.match(html, /class="ai-track" style="--ai-n:5"/);
  // Årstallene er ikke lenger lenker til tiårsvinduet (tatt ut i fase 2).
  assert.doesNotMatch(html, /data-tiar|<button/);
});

test("med mange tidsrom står bare hvert k-te årstall", () => {
  const seksten = Array.from({ length: 16 }, (_, i) => ({ fra: 1000 + i * 50, til: i === 15 ? null : 1050 + i * 50 }));
  const html = artistStripHtml({ metaGenre: "Blues", influenceStart: 1950 }, { nowYear: NÅ, tidsrom: seksten });
  assert.equal([...html.matchAll(/<span style="left:/g)].length, 4, "16 tidsrom, høyst 5 årstall: hvert fjerde");
});

test("åpent sluttår løper til i dag og tegnes med flat høyrekant", () => {
  const html = stripe({ metaGenre: "Pop", influenceStart: 2006 });
  assert.match(html, /class="ai-bar is-cut-end"/);
  assert.match(html, new RegExp(`width:${(Number(pst(NÅ)) - Number(pst(2006))).toFixed(2)}%`));
  assert.match(html, /pågår \/ sluttår ikke satt/);
});

test("dødsåret er tak når innflytelsen mangler sluttår (samme regel som tidslinjen)", () => {
  const html = stripe({ metaGenre: "Jazz", influenceStart: 1940, deathYear: 1971 });
  assert.match(html, new RegExp(`width:${(Number(pst(1971)) - Number(pst(1940))).toFixed(2)}%`));
  assert.doesNotMatch(html, /is-cut-end/, "et dødsår er en KJENT slutt, ikke en åpen ende");
});

test("perioder som begynner før aksen klippes og får flat venstrekant", () => {
  const html = stripe({ metaGenre: "Jazz", influenceStart: -1200, influenceEnd: -700 });
  assert.match(html, /class="ai-bar is-cut-start"/);
  assert.match(html, /left:0\.00%/);
  assert.match(html, new RegExp(`width:${pst(-700)}%`));
});

test("ett enkelt år blir ikke usynlig", () => {
  const html = stripe({ metaGenre: "Jazz", influenceStart: 1950, influenceEnd: 1950 });
  assert.match(html, /width:1\.50%/);
  assert.match(html, /aria-label="Aktiv ca\. 1950"/);
});

test("uten tidsrom i treet tegnes ingen stripe (ingen akse å plassere på)", () => {
  assert.equal(artistStripHtml({ metaGenre: "Jazz", influenceStart: 1950 }, { nowYear: NÅ, tidsrom: [] }), "");
});

test("uten startår tegnes ingen stripe (ikke en tom akse)", () => {
  assert.equal(stripe({ metaGenre: "Jazz" }), "");
  assert.equal(stripe(null), "");
  assert.equal(stripe({ influenceStart: 0 }), "");
});

test("fargen kommer fra metasjangeren i treet", () => {
  const html = stripe({ metaGenre: "Jazz", influenceStart: 1940 });
  assert.match(html, /background:#[0-9a-f]{6}2e;border-color:#[0-9a-f]{6}b3/i);
  assert.doesNotMatch(html, /#9bada1/, "Jazz har egen farge i treet og skal ikke falle til grå");
});

test("spanText sier «ca.» — årstallene er anslag", () => {
  assert.equal(spanText({ start: 1955, end: 1970, open: false }), "ca. 1955–1970");
  assert.equal(spanText({ start: 1950, end: 1950, open: false }), "ca. 1950");
  assert.equal(spanText({ start: 2006, end: 2026, open: true }), "ca. 2006 → pågår / sluttår ikke satt");
  assert.equal(spanText({ start: -387, end: -347, open: false }), "ca. 387–347 f.Kr.");
  assert.equal(spanText({ start: -4, end: 30, open: false }), "ca. 4 f.Kr.–30");
});

// Fargene kommer fra treet i Firestore, altså fra DATA, og limes inn i et
// style-attributt. Denne testen står sist fordi rebuild() bytter ut modellen
// for resten av fila.
test("en farge som ikke er #rrggbb slipper aldri inn i style-attributtet", () => {
  rebuild({
    nodes: [{ id: "x", l: "X", f: "X", g: "Tull", p: [] }],
    families: { gray: { stroke: "#9bada1", label: "Røtter" } },
    metaGenres: [{ name: "Tull", color: "red;background:url(//angriper)" }],
  });
  const html = stripe({ metaGenre: "Tull", influenceStart: 1950 });
  assert.doesNotMatch(html, /url\(/);
  assert.match(html, /background:#9bada12e/, "ugyldig farge skal falle tilbake på røttenes grå");
});
