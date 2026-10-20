// ============================================================================
//  PEDAGOGISKE PRINSIPPER (pedagogikkappens fase 3)
// ----------------------------------------------------------------------------
//  Se og les (js/felles/se-og-les.js) og «Hos hvem og når»
//  (js/sjangre/prinsipp.js, flerStripeHtml i artist-strip.js).
// ============================================================================
import "../helpers/seed-model.js";
import test from "node:test";
import assert from "node:assert/strict";
import { normaliserSeOgLes, seOgLesHtml, SELES_TEKST_MAKS, SELES_MAKS } from "../../js/felles/se-og-les.js";
import { prinsippFolk, prinsippEpoker, hosHvemHtml } from "../../js/sjangre/prinsipp.js";
import { flerStripeHtml } from "../../js/ui/artist-strip.js";
import { GENEALOGY } from "../../js/sjangre/genre-model.js";
import { resolveDesc } from "../../js/sjangre/genre-descriptions.js";

// --- Se og les -----------------------------------------------------------------

test("normaliserSeOgLes: bare poster med tittel, trimmet, http(s) og kort utdrag", () => {
  const ut = normaliserSeOgLes([
    { tittel: "  Pestalozzi om anskuelse ", kilde: " Pestalozzi, 1801 ", url: "https://youtu.be/abc", tekst: "  Anskuelsen er grunnlaget.  " },
    { tittel: "Uten lenke" },
    { tittel: "Farlig lenke", url: "javascript:alert(1)" },
    { tittel: "", url: "https://ex.com" },
    "tull", null, 42,
    { tittel: "Langt", tekst: "x".repeat(SELES_TEKST_MAKS + 500) },
  ]);
  assert.deepEqual(ut[0], { tittel: "Pestalozzi om anskuelse", kilde: "Pestalozzi, 1801", url: "https://youtu.be/abc", tekst: "Anskuelsen er grunnlaget." });
  assert.deepEqual(ut[1], { tittel: "Uten lenke" });
  assert.equal("url" in ut[2], false, "javascript:-lenker slippes aldri gjennom");
  assert.equal(ut.length, 4);
  assert.equal(ut[3].tekst.length, SELES_TEKST_MAKS);
  assert.deepEqual(normaliserSeOgLes(null), []);
  assert.deepEqual(normaliserSeOgLes("tull"), []);
  assert.equal(normaliserSeOgLes(Array.from({ length: 40 }, (_, i) => ({ tittel: `P${i}` }))).length, SELES_MAKS);
});

test("seOgLesHtml: video i appens spiller, utdrag med kilde, og HTML i dataene escapes", () => {
  const html = seOgLesHtml([
    { tittel: "Forelesning", url: "https://www.youtube.com/watch?v=abc" },
    { tittel: "Utdrag <b>fet</b>", kilde: "Rousseau, Emile", tekst: "Linje én.\nLinje <to>.", url: "https://ex.com/emile" },
  ]);
  assert.match(html, /<a class="seles-lenke" href="https:\/\/www\.youtube\.com\/watch\?v=abc"[^>]*>▶ Se video<\/a>/);
  assert.match(html, /<blockquote class="seles-tekst">Linje én\.<br>Linje &lt;to&gt;\.<\/blockquote>/);
  assert.match(html, /Utdrag &lt;b&gt;fet&lt;\/b&gt;/);
  assert.match(html, /Rousseau, Emile · <a class="seles-lenke" href="https:\/\/ex\.com\/emile"[^>]*>Les hele<\/a>/);
  assert.equal(seOgLesHtml([]), "");
  assert.equal(seOgLesHtml(undefined), "");
});

test("seOgLes leses fra sub-nivået og regnes som innhold selv uten beskrivelse", () => {
  const d = { Anskuelse: { sub: { seOgLes: [{ tittel: "Video", url: "https://youtu.be/x" }, { tittel: "" }] } } };
  const r = resolveDesc(d, "Anskuelse", "sub");
  assert.deepEqual(r.seOgLes, [{ tittel: "Video", url: "https://youtu.be/x" }]);
  assert.deepEqual(resolveDesc({}, "Ingen", "sub").seOgLes, []);
});

// --- Hos hvem og når -------------------------------------------------------------

const art = (id, name, extra = {}) => ({ id, name, status: "active", metaGenre: "Blues", influenceStart: 1950, mainGenre: [], subGenre: [], ...extra });
const FOLK = [
  art("b", "Bessie", { influenceStart: 1923, influenceEnd: 1933, mainGenre: ["Blues"], subGenre: ["Anskuelse"] }),
  art("m", "Muddy", { influenceStart: 1948, influenceEnd: 1964, mainGenre: ["Electric blues"], subGenre: ["anskuelse"] }),
  art("g", "Gammel", { influenceStart: 1900, influenceEnd: 1910, mainGenre: ["Anskuelse", "Blues"] }),
  art("s", "Skjult", { priority: -1, subGenre: ["Anskuelse"] }),
  art("v", "Venter", { status: "pending", subGenre: ["Anskuelse"] }),
  art("x", "Annet", { subGenre: ["Disiplin"] }),
];

test("prinsippFolk: eldst først, subGenre og mainGenre, uavhengig av store bokstaver, uten skjulte og ventende", () => {
  const folk = prinsippFolk("ANSKUELSE", FOLK);
  assert.deepEqual(folk.map((f) => f.artist.name), ["Gammel", "Bessie", "Muddy"]);
  assert.deepEqual(folk[1].span, { start: 1923, end: 1933, open: false });
  assert.deepEqual(prinsippFolk("Finnes ikke", FOLK), []);
});

test("prinsippFolk og prinsippEpoker: epokene er tre-nodene teoretikerne er merket med, uten gjentak, i treets rekkefølge", () => {
  const folk = prinsippFolk("Anskuelse", FOLK);
  const blues = folk.find((f) => f.artist.id === "b");
  assert.deepEqual(blues.epoker.map((n) => n.l), ["Blues"]);
  const epoker = prinsippEpoker(folk);
  assert.deepEqual(epoker.map((n) => n.l).sort(), ["Blues", "Electric blues"]);
  const rader = epoker.map((n) => Number(n.r));
  assert.deepEqual(rader, [...rader].sort((a, b) => a - b));
  assert.equal(new Set(epoker.map((n) => n.id)).size, epoker.length);
  // «Anskuelse» i mainGenre er ikke en tre-node og blir ikke en epoke.
  assert.ok(!epoker.some((n) => n.l === "Anskuelse"));
  assert.ok(GENEALOGY.length > 0);
});

test("hosHvemHtml: stripe, epoker som sjangerlenker og teoretikere som artistlenker; tom uten teoretikere", () => {
  const html = hosHvemHtml("Anskuelse", FOLK, { nowYear: 2026 });
  assert.match(html, /Hos hvem og når/);
  assert.match(html, /class="ai-strip"/);
  assert.match(html, /data-sjanger="Blues"/);
  assert.match(html, /data-related-id="b">Bessie<\/button> <span class="muted">1923–1933<\/span>/);
  assert.ok(html.indexOf(">Gammel<") < html.indexOf(">Bessie<") && html.indexOf(">Bessie<") < html.indexOf(">Muddy<"), "tidsrekkefølge");
  assert.doesNotMatch(html, /Skjult|Venter/);
  assert.equal(hosHvemHtml("Finnes ikke", FOLK), "");
});

// --- Stripa med flere perioder ---------------------------------------------------

const T = [{ fra: -800, til: -150 }, { fra: -150, til: 1500 }, { fra: 1500, til: 1900 }, { fra: 1900, til: null }];

test("flerStripeHtml: én stolpe per periode, overlappende perioder i hver sin bane, åpen ende flat", () => {
  const poster = [
    { span: { start: 1762, end: 1778, open: false }, tittel: "Rousseau" },
    { span: { start: 1770, end: 1790, open: false }, tittel: "Basedow" },
    { span: { start: 2006, end: 2026, open: true }, tittel: "Biesta" },
  ];
  const html = flerStripeHtml(poster, { nowYear: 2026, tidsrom: T });
  assert.equal((html.match(/class="ai-bar ai-bar-flere/g) || []).length, 3);
  assert.match(html, /title="Rousseau"[^>]*top:0\.00rem/);
  assert.match(html, /title="Basedow"[^>]*top:0\.55rem/, "overlapper Rousseau: neste bane");
  assert.match(html, /ai-bar-flere is-cut-end" title="Biesta"/);
  assert.match(html, /--ai-n:4/);
  assert.match(html, /aria-label="3 teoretikere på tidsaksen"/);
});

test("flerStripeHtml: før Kristus står i det første tidsrommet, og tom uten akse eller poster", () => {
  const html = flerStripeHtml([{ span: { start: -387, end: -347, open: false }, tittel: "Platon" }], { nowYear: 2026, tidsrom: T });
  assert.match(html, /title="Platon"[^>]*left:\d+\.\d+%/);
  assert.match(html, /<span style="left:0\.00%">800 f\.Kr\.<\/span>/);
  assert.equal(flerStripeHtml([], { tidsrom: T }), "");
  assert.equal(flerStripeHtml([{ span: { start: 1900, end: 1950 }, tittel: "X" }], { tidsrom: [] }), "");
});
