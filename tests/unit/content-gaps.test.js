// contentGaps er delt kilde for «Innhold som mangler» i Oversikt og tallet på
// Skrivebordet. Testene låser tellereglene: hvilke felt/sider/historier som
// regnes som hull, at bare synlige artister teller, og at total = sum av bøtter.
import "../helpers/seed-model.js";
import { test } from "node:test";
import assert from "node:assert/strict";
import { contentGaps } from "../../js/ui/ui-dashboard.js";
import { GENEALOGY_EDGES, edgeKey } from "../../js/sjangre/genre-model.js";

const artist = (o) => ({
  status: "active", priority: 0, mainGenre: [], subGenre: [],
  imageUrl: "x", description: "d", musicExamples: [{}], keyWorks: [{}], kilder: [{}],
  instrument: "Psykolog", ...o,
});

test("contentGaps: artist-mediahull telles per felt", () => {
  const artists = [
    artist({ name: "Full" }),
    artist({ name: "UtenBilde", imageUrl: "" }),
    artist({ name: "UtenAlt", imageUrl: "", description: "  ", keyWorks: [], kilder: [] }),
  ];
  const g = contentGaps({ artists, genreDescs: {}, content: {}, contentLoaded: true });
  assert.equal(g.noImage.length, 2);
  assert.equal(g.noDesc.length, 1);
  assert.equal(g.noMusic.length, 1);
  assert.equal(g.noSources.length, 1);
});

test("contentGaps: skjulte og pending artister telles ikke", () => {
  const artists = [
    artist({ name: "Skjult", priority: -1, imageUrl: "" }),
    artist({ name: "Pending", status: "pending", imageUrl: "" }),
  ];
  const g = contentGaps({ artists, contentLoaded: true });
  assert.equal(g.noImage.length, 0);
});

test("contentGaps: sider telles kun når innhold er lastet", () => {
  assert.equal(contentGaps({ artists: [], content: {}, contentLoaded: false }).pages.length, 0);
  assert.deepEqual(
    contentGaps({ artists: [], content: {}, contentLoaded: true }).pages.sort(),
    ["omHistorie"],
  );
  assert.deepEqual(
    contentGaps({ artists: [], content: { omHistorie: { body: "x" } }, contentLoaded: true }).pages,
    [],
  );
});

test("contentGaps: sjangerhistorie regnes som skrevet når story.body finnes", () => {
  // Ni historier fra v6.05: alle metasjangrene, også Pop og Rock (S4).
  assert.equal(contentGaps({ artists: [], genreDescs: {} }).stories.length, 9);
  const one = contentGaps({ artists: [], genreDescs: { Blues: { story: { body: "s" } } } });
  assert.equal(one.stories.length, 8);
  assert.ok(!one.stories.includes("Blues"));
});

test("contentGaps: main-beskrivelse fjerner sjangeren fra mainDesc", () => {
  assert.ok(contentGaps({ artists: [], genreDescs: {} }).mainDesc.includes("Blues"));
  const withBlues = contentGaps({ artists: [], genreDescs: { Blues: { main: { description: "b" } } } });
  assert.ok(!withBlues.mainDesc.includes("Blues"));
});

test("contentGaps: koblingsbeskrivelse fjerner koblingen fra edgeDesc", () => {
  const empty = contentGaps({ artists: [] });
  assert.equal(empty.edgeDesc.length, GENEALOGY_EDGES.length);
  assert.ok(empty.edgeDesc.some((e) => e.from === "blues" && e.to === "jazz"));
  const withOne = contentGaps({ artists: [], edgeDescs: { [edgeKey("blues", "jazz")]: { description: "b" } } });
  assert.equal(withOne.edgeDesc.length, GENEALOGY_EDGES.length - 1);
  assert.ok(!withOne.edgeDesc.some((e) => e.from === "blues" && e.to === "jazz"));
});

// Fase 4: «noMusic» betyr nå «uten hovedverk», og lytteeksempler uten epoke er ute av oversikten.
test("contentGaps: noExGenre er tom (lytteeksemplene er ute av oversikten)", () => {
  const artists = [artist({ name: "Utagget", mainGenre: ["Blues", "Soul"], musicExamples: [{ url: "https://x" }] })];
  assert.deepEqual(contentGaps({ artists, contentLoaded: true }).noExGenre, []);
});

test("contentGaps: instrument utenfor vokabularet eller tomt flagges", () => {
  const artists = [
    artist({ name: "Gyldig" }),
    artist({ name: "Tomt", instrument: "" }),
    artist({ name: "Utenfor", instrument: "Saxofon" }),
  ];
  const g = contentGaps({ artists, contentLoaded: true });
  assert.deepEqual(g.badInstrument.map((a) => a.name).sort(), ["Tomt", "Utenfor"]);
});

test("contentGaps: total er summen av alle bøtter", () => {
  const g = contentGaps({
    artists: [artist({ name: "X", imageUrl: "" })],
    genreDescs: {}, content: {}, contentLoaded: true,
  });
  const sum = g.stories.length + g.pages.length + g.mainDesc.length + g.subDesc.length
    + g.edgeDesc.length + g.noImage.length + g.noDesc.length + g.noMusic.length + g.noSources.length
    + g.noExGenre.length + g.badInstrument.length;
  assert.equal(g.total, sum);
});

// Audit v5.19 funn 7: etter at sider med bare kilder ble gyldige dokumenter
// (gammelt funn 8), betyr «dokumentet finnes» ikke lenger «teksten finnes».
// Oversikten skal telle tekstløse sider som hull, ikke grønnmerke dem.
test("side med kilder men uten tekst teller som hull", async () => {
  const { contentGaps } = await import("../../js/ui/ui-dashboard.js");
  const content = { omHistorie: { body: "", kilder: [{ text: "SNL" }] } };
  const g = contentGaps({ artists: [], genreDescs: {}, content, contentLoaded: true });
  assert.deepEqual(g.pages, ["omHistorie"], "kilder alene er ikke innhold");
});
