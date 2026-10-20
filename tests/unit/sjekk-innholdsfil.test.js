// Validatoren for innholdsfiler (tools/sjekk-innholdsfil.js): en gyldig fil går
// gjennom, og hver regel stopper nettopp feilen den skal stoppe.
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sjekkInnholdsfil } from "../../tools/sjekk-innholdsfil.js";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const tre = JSON.parse(fs.readFileSync(path.join(ROT, "json files/pedagogikk-skjelett.json"), "utf8")).genealogy;

const teoretiker = (over = {}) => ({
  name: "John Dewey", birthYear: 1859, deathYear: 1952, gender: "mann",
  metaGenre: "Erfaring og demokrati", instrument: "Filosof",
  mainGenre: ["Progressivismen"], subGenre: ["Læring gjennom erfaring"],
  influenceStart: 1896, influenceEnd: 1952,
  description: "Amerikansk filosof og pedagog.",
  keyWorks: [{ title: "Democracy and Education", year: 1916 }],
  kilder: [{ text: "Store norske leksikon.", url: "https://snl.no/John_Dewey" }],
  ...over,
});

const gyldig = () => ({
  formatVersion: 1,
  artists: [teoretiker()],
  genreDescriptions: {
    meta: { "Erfaring og demokrati": { story: { body: "Fortellingen." } } },
    main: { Progressivismen: { main: { description: "Epokens tekst.", samfunn: "x", skole: "y", activeFrom: 1896, activeTo: 1955 } } },
    sub: { "Læring gjennom erfaring": { sub: { description: "Prinsippets tekst.",
      seOgLes: [{ tittel: "Utdrag", kilde: "Dewey (1938)", tekst: "Kort." }, { tittel: "Video", url: "https://www.youtube.com/watch?v=abc" }] } } },
  },
  edgeDescriptions: { pragmatisme__progressivisme: { description: "Dewey bygde videre." } },
  tech: [{ name: "Almueskoleloven av 1860", category: "Lov", type: "innovasjon", inventedYear: 1860, description: "Lov." }],
});

const feilFor = (fil) => sjekkInnholdsfil(fil, tre).feil;
const harFeil = (fil, mønster) => feilFor(fil).some((m) => mønster.test(m));

test("en gyldig fil har ingen feil, og tallene stemmer", () => {
  const r = sjekkInnholdsfil(gyldig(), tre);
  assert.deepEqual(r.feil, []);
  assert.deepEqual(r.tall, { teoretikere: 1, epoker: 1, retninger: 0, prinsipper: 1, pavirkninger: 1, reformer: 1 });
});

test("en fil uten innhold kjennes ikke igjen", () => {
  assert.ok(harFeil({ formatVersion: 1 }, /kjennes ikke igjen/));
});

test("teoretikere: ukjent epoke, retning og fagbakgrunn, manglende kilder og dobbelt navn", () => {
  const f = (over) => ({ artists: [teoretiker(over)] });
  assert.ok(harFeil(f({ mainGenre: ["Progressivisme"] }), /epoken «Progressivisme» finnes ikke/));
  assert.ok(harFeil(f({ mainGenre: ["progressivisme"] }), /bruk etiketten, ikke id-en|finnes ikke/));
  assert.ok(harFeil(f({ metaGenre: "Blues" }), /retningen «Blues» finnes ikke/));
  assert.ok(harFeil(f({ instrument: "Gitar" }), /fagbakgrunnen «Gitar»/));
  assert.ok(harFeil(f({ instrument2: "Vokal" }), /fagbakgrunn 2/));
  assert.ok(harFeil(f({ kilder: [] }), /minst én kilde/));
  assert.ok(harFeil(f({ kilder: [{ text: "x", url: "javascript:alert(1)" }] }), /ikke er http\(s\)/));
  assert.ok(harFeil(f({ gender: "x" }), /kjønn/));
  assert.ok(harFeil(f({ influenceStart: null }), /mangler influenceStart/));
  assert.ok(harFeil(f({ deathYear: 1800 }), /dødsår før fødselsår/));
  assert.ok(harFeil({ artists: [teoretiker(), teoretiker({ name: "john dewey" })] }, /står to ganger/));
  assert.ok(harFeil(f({ mainGenre: [] }), /ingen epoke/));
});

test("år før Kristus er gyldige, og tekst som årstall er feil", () => {
  const f = (over) => ({ artists: [teoretiker(over)] });
  assert.deepEqual(feilFor(f({ name: "Sokrates", birthYear: -470, deathYear: -399, influenceStart: -430, influenceEnd: -399,
    metaGenre: "Klassisk dannelse", instrument: "Filosof", mainGenre: ["Gresk paideia"], subGenre: [] })), []);
  assert.ok(harFeil(f({ birthYear: "1859x" }), /birthYear.*ikke et årstall/));
});

test("beskrivelser: retning og epoke må finnes i treet, og navn kan ikke ha skråstrek", () => {
  const g = gyldig();
  g.genreDescriptions.meta["Barnet"] = { meta: { description: "x" } };
  g.genreDescriptions.main["Finnes ikke"] = { main: { description: "x" } };
  g.genreDescriptions.sub["A/B"] = { sub: { description: "x" } };
  const feil = feilFor(g);
  assert.ok(feil.some((m) => /«Barnet».*ingen retning/.test(m)));
  assert.ok(feil.some((m) => /«Finnes ikke».*ingen epoke/.test(m)));
  assert.ok(feil.some((m) => /«A\/B».*«\/»/.test(m)));
});

test("Se og les: utdrag uten kilde, post uten tittel, lenke som ikke er http(s) og for lange utdrag", () => {
  const g = gyldig();
  g.genreDescriptions.sub["Læring gjennom erfaring"].sub.seOgLes = [
    { tittel: "Uten kilde", tekst: "Sitat." },
    { url: "https://x.no" },
    { tittel: "Dårlig lenke", url: "ftp://x.no" },
    { tittel: "For langt", kilde: "k", tekst: "x".repeat(1300) },
  ];
  const feil = feilFor(g);
  assert.ok(feil.some((m) => /Se og les 1.*skal ha kilde/.test(m)));
  assert.ok(feil.some((m) => /Se og les 2 mangler tittel/.test(m)));
  assert.ok(feil.some((m) => /Se og les 3.*ikke er http/.test(m)));
  assert.ok(feil.some((m) => /Se og les 4.*over 1200/.test(m)));
});

test("påvirkninger må finnes som strek i treet, med id-er", () => {
  const g = gyldig();
  g.edgeDescriptions = {
    pragmatisme__prosjekt: { description: "x" },       // ingen strek
    Pragmatismen__Progressivismen: { description: "x" }, // etiketter, ikke id-er
    bare_en: { description: "x" },
  };
  const feil = feilFor(g);
  assert.ok(feil.some((m) => /pragmatisme__prosjekt.*ingen strek/.test(m)));
  assert.ok(feil.some((m) => /Pragmatismen__Progressivismen.*ukjent epoke-id/.test(m)));
  assert.ok(feil.some((m) => /bare_en.*fra__til/.test(m)));
  // Motreaksjoner (rx) er også streker.
  assert.deepEqual(feilFor({ ...gyldig(), edgeDescriptions: { herbartianisme__progressivisme: { description: "x" } } }), []);
});

test("reformer: kategori, type og årstall", () => {
  const g = gyldig();
  g.tech = [{ name: "A", category: "Opptak og avspilling" }, { name: "B", category: "Lov", type: "annet" },
    { name: "C", category: "Lov", inventedYear: "gammel" }, { name: "a", category: "Lov" }];
  const feil = feilFor(g);
  assert.ok(feil.some((m) => /kategorien «Opptak og avspilling»/.test(m)));
  assert.ok(feil.some((m) => /type «annet»/.test(m)));
  assert.ok(feil.some((m) => /inventedYear.*ikke et årstall/.test(m)));
  assert.ok(feil.some((m) => /navnet står to ganger/.test(m)));
});

test("advarsler: prinsipp uten tekst, manglende samfunn/skole, ordgrenser og ukjent toppnøkkel", () => {
  const g = gyldig();
  delete g.genreDescriptions.sub;
  g.genreDescriptions.main.Progressivismen.main = { description: "kort" };
  g.podcasts = [];
  const { feil, advarsler } = sjekkInnholdsfil(g, tre);
  assert.deepEqual(feil, []);
  assert.ok(advarsler.some((m) => /Læring gjennom erfaring.*ingen felles tekst/.test(m)));
  assert.ok(advarsler.some((m) => /mangler «samfunn»/.test(m)));
  assert.ok(advarsler.some((m) => /mangler «skole»/.test(m)));
  assert.ok(advarsler.some((m) => /under \d+/.test(m)));
  assert.ok(advarsler.some((m) => /Ukjent toppnøkkel «podcasts»/.test(m)));
});
