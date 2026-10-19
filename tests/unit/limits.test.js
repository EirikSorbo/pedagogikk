import { test } from "node:test";
import assert from "node:assert/strict";
import {
  INSTRUMENTS,
  GENDERS,
  isVisible,
  erTilModerasjon,
  tidsromForArtist,
  computeCounts,
  genderDistribution,
  filterArtists,
  hasActiveFilters,
} from "../../js/felles/limits.js";
import { rebuild } from "../../js/sjangre/genre-model.js";
import { lesJs } from "../helpers/js-filer.js";

// Tidsrommene (fase 2; før tiårene 1900–2020) kommer fra treet. Testene
// bygger modellen med fem kjente tidsrom, så filtrene og tellingene kan
// regnes for hånd:
//   0: 800–150 f.Kr.   1: 150 f.Kr.–1900   2: 1900–1950   3: 1950–2000   4: 2000–i dag
const T = [
  { fra: -800, til: -150, navn: "Antikken" }, { fra: -150, til: 1900 },
  { fra: 1900, til: 1950 }, { fra: 1950, til: 2000 }, { fra: 2000, til: null },
];
rebuild({ nodes: [], tidsrom: T });

const kilde = (f) => lesJs(f);

test("erTilModerasjon: ventende og returnerte, ingenting annet", () => {
  assert.equal(erTilModerasjon({ status: "pending" }), true);
  assert.equal(erTilModerasjon({ status: "returnert" }), true);
  assert.equal(erTilModerasjon({ status: "active" }), false);
  assert.equal(erTilModerasjon({ status: "rejected" }), false);
  assert.equal(erTilModerasjon({}), false);
});

// Audit v5.19, funn 1: Skrivebordets teller brukte bare «pending», så et
// returnert forslag mistet innboks-kortet — eneste vei til returkoden. Lås at
// alle fire flatene bruker det delte predikatet, så de ikke glir fra
// hverandre igjen.
test("moderasjonspredikatet er delt: skrivebord, kø, liste og auto-av", () => {
  for (const f of ["teacher-desk.js", "teacher-review.js", "teacher-state.js", "ui.js"]) {
    // Krev faktisk BRUK (filter/some med referansen), ikke bare importlinjen.
    assert.match(kilde(f), /\b(?:filter|some)\(erTilModerasjon\)/, `${f} må bruke erTilModerasjon`);
  }
  // Skrivebordet teller BEGGE samlingene (artister og tech) med predikatet.
  assert.equal((kilde("teacher-desk.js").match(/filter\(erTilModerasjon\)/g) || []).length, 2,
    "teacher-desk.js må filtrere både artists og techItems med erTilModerasjon");
});

// Audit v5.19, funn 2: returSporring må spre dokumentet FØRST — ellers vinner
// tech-dokumentets eget «type»-felt («innovasjon») over retur-typen, og «Rett
// og send inn på nytt» blir en død knapp for returnerte innovasjonskort.
// Audit v5.42, funn 19: kortets EGEN type må likevel følge med (kortType),
// og skjemaet forhåndsvelges med den.
test("returSporring: retur-typen ruter, kortets egen type forhåndsvelger skjemaet", () => {
  const store = kilde("store.js");
  assert.match(store, /\{ \.\.\.d\.data\(\), kortType: d\.data\(\)\.type \?\? null, type, id: d\.id \}/,
    "spredningen av d.data() må stå først i returSporring, og kortType bære kortets type");
  assert.match(kilde("proposals.js"), /if \(retur\.type === "tech"\) return openNewTechProposal\(\{ \.\.\.retur, type: retur\.kortType \}, retur\);/);
  assert.doesNotMatch(store, /\{ type, id: d\.id, \.\.\.d\.data\(\) \}/,
    "den gamle rekkefølgen (type før spredningen) må ikke komme tilbake");
});

// Etikettene er UI, verdiene er data. «ukjent» heter «Annet» i skjemaet fra
// v4.95, men verdien ligger fast i Firestore — bytter noen den til "annet"
// kolliderer den med «Gruppe», og all eksisterende data mister kjønnet sitt.
test("GENDERS: verdiene ligger fast, etikettene er de synlige", () => {
  // v6.96 (brukervalg 2026-10-13): «Ikke-binær» erstatter valget «Annet», med
  // egen verdi. «ukjent» er bare statistikkens bøtte, ikke et valg.
  assert.deepEqual(GENDERS.map((g) => g.value), ["kvinne", "mann", "annet", "ikkebinaer"]);
  assert.equal(GENDERS.find((g) => g.value === "ikkebinaer").label, "Ikke-binær");
  assert.equal(GENDERS.find((g) => g.value === "annet").label, "Gruppe");
  assert.equal(GENDERS.some((g) => g.value === "ukjent"), false);
  assert.equal(new Set(GENDERS.map((g) => g.label)).size, GENDERS.length, "etikettene må være unike");
});

test("isVisible: aktiv og ikke lærer-skjult", () => {
  assert.equal(isVisible({ status: "active" }), true);
  assert.equal(isVisible({ status: "active", priority: 2 }), true);
  assert.equal(isVisible({ status: "active", priority: -1 }), false);
  assert.equal(isVisible({ status: "pending" }), false);
  assert.equal(isVisible({ status: "removed" }), false);
});

test("tidsromForArtist: tom influenceEnd løper til i dag", () => {
  // Kjernen i v3.95: uten sluttår skal artisten telle i ALLE tidsrom fra start
  // og fram til nå — ikke bare i startåret sitt.
  assert.deepEqual(tidsromForArtist({ influenceStart: 1997 }, 2026), [3, 4]);
  assert.deepEqual(tidsromForArtist({ influenceStart: 2012 }, 2026), [4]);

  // Satt sluttår avslutter som før.
  assert.deepEqual(tidsromForArtist({ influenceStart: 1955, influenceEnd: 1972 }, 2026), [3]);

  // Dødsåret er tak når influenceEnd mangler — en avdød artist «pågår» ikke.
  assert.deepEqual(tidsromForArtist({ influenceStart: 1936, deathYear: 1938 }, 2026), [2]);

  // Før Kristus (fase 2): Platon i Akademiet, ca. 387–347 f.Kr.
  assert.deepEqual(tidsromForArtist({ influenceStart: -387, influenceEnd: -347 }, 2026), [0]);

  // Hele år i begge ender: 1900–1950 berører også tidsrommet som begynner i
  // 1950 (samme regel som tiårene hadde).
  assert.deepEqual(tidsromForArtist({ influenceStart: 1900, influenceEnd: 1950 }, 2026), [2, 3]);

  // Uten startår kan artisten ikke plasseres i det hele tatt.
  assert.deepEqual(tidsromForArtist({}, 2026), []);
  assert.deepEqual(tidsromForArtist({ influenceEnd: 1980 }, 2026), []);
  // Uten tidsrom i treet finnes det ingen akse å plassere på.
  assert.deepEqual(tidsromForArtist({ influenceStart: 1955 }, 2026, []), []);
});

test("computeCounts teller kun synlige", () => {
  const artists = [
    { status: "active", metaGenre: "Blues", instrument: "Gitar", influenceStart: 1930 },
    { status: "active", priority: -1, metaGenre: "Blues", instrument: "Gitar", influenceStart: 1930 },
    { status: "pending", metaGenre: "Blues", instrument: "Gitar", influenceStart: 1930 },
  ];
  const c = computeCounts(artists);
  assert.equal(c.total, 1);
  assert.equal(c.perMetaGenre.Blues, 1);
  assert.equal(c.perTidsrom[2], 1, "1930 er i tidsrommet 1900–1950");
});

test("genderDistribution: ukjente kategorier telles som ukjent, ikke som ikke-binær", () => {
  const d = genderDistribution([
    { status: "active", gender: "kvinne" },
    { status: "active", gender: "noe-rart" },
    { status: "active", gender: "" },
    { status: "active", gender: "ikkebinaer" },
  ]);
  assert.equal(d.kvinne, 1);
  assert.equal(d.ukjent, 2);
  assert.equal(d.ikkebinaer, 1);
  assert.equal(d.total, 4);
});

test("vokabularet bor i koden: INSTRUMENTS-konstanten", () => {
  assert.ok(INSTRUMENTS.includes("Gitar"));
  assert.ok(INSTRUMENTS.includes("Tangenter"));
  assert.ok(INSTRUMENTS.includes("Saksofon"));
  assert.equal(new Set(INSTRUMENTS).size, INSTRUMENTS.length, "ingen duplikater");
});

test("filterArtists: sjanger matcher case-insensitivt i main/sub/meta", () => {
  const list = [
    { name: "A", metaGenre: "Blues", mainGenre: ["Delta blues"], subGenre: [], influenceStart: 1930 },
    { name: "B", metaGenre: "Jazz", mainGenre: ["Bebop"], subGenre: [], influenceStart: 1945 },
  ];
  assert.deepEqual(filterArtists(list, { mainGenre: "delta blues" }).map((a) => a.name), ["A"]);
  assert.deepEqual(filterArtists(list, { metaGenre: "Jazz" }).map((a) => a.name), ["B"]);
});

test("filterArtists: prioritet, instrument, tidsrom og søk", () => {
  // deathYear på Robert Johnson er ikke pynt: uten den ville han (start 1936,
  // ingen influenceEnd) regnes som pågående helt fram til i dag etter v3.95, og
  // tidsromsfilteret under ville ikke lenger prøve det det skal prøve.
  const list = [
    { name: "Robert Johnson", metaGenre: "Blues", instrument: "Gitar", priority: 3, mainGenre: [], subGenre: [], geography: "Mississippi", influenceStart: 1936, deathYear: 1938 },
    { name: "Bill Evans", metaGenre: "Jazz", instrument: "Piano", priority: 1, mainGenre: [], subGenre: [], geography: "New Jersey", influenceStart: 1958, influenceEnd: 1980 },
  ];
  assert.deepEqual(filterArtists(list, { priority: 3 }).map((a) => a.name), ["Robert Johnson"]);
  assert.deepEqual(filterArtists(list, { instrument: "Piano" }).map((a) => a.name), ["Bill Evans"]);
  assert.deepEqual(filterArtists(list, { tidsrom: "3" }).map((a) => a.name), ["Bill Evans"]);
  assert.deepEqual(filterArtists(list, { tidsrom: "2" }).map((a) => a.name), ["Robert Johnson"]);
  // «0» er det første tidsrommet, et ekte valg, ikke «ingen filter».
  assert.deepEqual(filterArtists(list, { tidsrom: "0" }).map((a) => a.name), []);
  assert.equal(hasActiveFilters({ tidsrom: "0" }), true);
  assert.equal(hasActiveFilters({ tidsrom: "" }), false);
  assert.deepEqual(filterArtists(list, { search: "mississippi" }).map((a) => a.name), ["Robert Johnson"]);
  assert.equal(filterArtists(list, {}).length, 2); // ingen filtre → alt
});

test("filterArtists: artist uten sluttår er med i alle tidsrom fram til nå", () => {
  // Regresjonsvakt for v3.95. Før falt tiårsfilteret tilbake på startåret, så
  // en pågående artist var USYNLIG i alle tiår etter debuten sin.
  const list = [
    { name: "Grethe", mainGenre: [], subGenre: [], influenceStart: 1997 },
    { name: "Anna Sethne", mainGenre: [], subGenre: [], influenceStart: 1923, influenceEnd: 1933 },
  ];
  for (const i of ["3", "4"]) {
    assert.deepEqual(filterArtists(list, { tidsrom: i }).map((a) => a.name), ["Grethe"], `tidsrom ${i}`);
  }
  assert.deepEqual(filterArtists(list, { tidsrom: "2" }).map((a) => a.name), ["Anna Sethne"]);
  assert.deepEqual(filterArtists(list, { tidsrom: "1" }).map((a) => a.name), []);
});

// --- Sjangernavn som finnes på TO nivåer -----------------------------------
// Seks navn er både node i sjangertreet og metasjanger (Blues, Gospel, Jazz,
// Pop, R&B, Rock). Treffer man dem mot metaGenre, svarer «Jazz» med hele
// jazzfamilien i stedet for tidlig jazz. Metasjangeren har sitt eget filter.

test("Sjanger-filteret leser tre-taggene, ikke metasjangeren", () => {
  const artister = [
    { name: "Tidlig",  metaGenre: "Jazz", mainGenre: ["Jazz"],   subGenre: [] },
    { name: "Bebop",   metaGenre: "Jazz", mainGenre: ["Bebop"],  subGenre: [] },
    { name: "Cool",    metaGenre: "Jazz", mainGenre: ["Cool jazz"], subGenre: [] },
  ];
  assert.deepEqual(
    filterArtists(artister, { mainGenre: "Jazz" }).map((a) => a.name),
    ["Tidlig"],
    "«Jazz»-noden er tidlig jazz, ikke paraplyen"
  );
  // Paraplyen finnes fortsatt — som metasjanger.
  assert.equal(filterArtists(artister, { metaGenre: "Jazz" }).length, 3);
});

test("Sjanger-filteret treffer undersjanger og tåler ulik store bokstaver", () => {
  const artister = [
    { name: "A", metaGenre: "R&B", mainGenre: ["Soul"], subGenre: ["Southern soul"] },
    { name: "B", metaGenre: "R&B", mainGenre: ["Funk"], subGenre: [] },
  ];
  assert.deepEqual(filterArtists(artister, { mainGenre: "southern soul" }).map((a) => a.name), ["A"]);
  assert.deepEqual(filterArtists(artister, { mainGenre: "Funk" }).map((a) => a.name), ["B"]);
});
