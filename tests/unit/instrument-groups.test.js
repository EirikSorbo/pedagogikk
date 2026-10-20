import { test } from "node:test";
import assert from "node:assert/strict";
import {
  INSTRUMENT_GROUPS, INSTRUMENTS, INSTRUMENT_TIMELINE_GROUPS, instrumentsInUse,
} from "../../js/felles/limits.js";
import { instrumentInnovations, buildInstrumentTimeline } from "../../js/ui/ui-timeline.js";
import { PROPOSABLE_KEYS } from "../../js/forslag/proposal-fields.js";
import { lesJs } from "../helpers/js-filer.js";

// To nivåer, som metaGenre over mainGenre: artistkortet beholder det PRESISE
// instrumentet, tidslinjene ligger på GRUPPEN.

test("INSTRUMENTS utledes av gruppene — én kilde, ingen duplikater", () => {
  const fasit = Object.values(INSTRUMENT_GROUPS).flat();
  assert.deepEqual(INSTRUMENTS, fasit);
  assert.equal(new Set(INSTRUMENTS).size, INSTRUMENTS.length, "ingen instrument kan stå i to grupper");
});

// Fagbakgrunn (pedagogikkappens fase 3): sju verdier, hver sin gruppe, i
// Eiriks rekkefølge. «Annet» og musikkinstrumentene er borte.
const FAGBAKGRUNN = ["Filosof", "Teolog", "Psykolog", "Sosiolog", "Praktiker", "Politiker og reformator", "Forsker"];

test("vokabularet er fagbakgrunnene, i den vedtatte rekkefølgen, og hver står for seg", () => {
  assert.deepEqual(INSTRUMENTS, FAGBAKGRUNN);
  assert.deepEqual(INSTRUMENT_TIMELINE_GROUPS, FAGBAKGRUNN);
  assert.deepEqual(Object.keys(INSTRUMENT_GROUPS), FAGBAKGRUNN);
  for (const musikk of ["Annet", "Gruppe", "Gitar", "Vokal", "Trommer/perkusjon"]) {
    assert.ok(!INSTRUMENTS.includes(musikk), `${musikk} er en musikkverdi og skal være borte`);
  }
});

// --- Nyvinnings-tidslinjen per instrument ------------------------------------

const kort = [
  { id: "a", name: "Elektrisk gitar", adoptedYear: 1938, instrument: "Filosof", status: "active" },
  { id: "b", name: "Gibson Les Paul", adoptedYear: 1952, instrument: "Filosof", status: "active" },
  { id: "c", name: "Ventende kort", adoptedYear: 1960, instrument: "Filosof", status: "pending" },
  { id: "d", name: "El-bassen", adoptedYear: 1955, instrument: "Teolog", status: "active" },
  { id: "e", name: "Grammofonen", adoptedYear: 1900, status: "active" },   // uten instrument
];

test("kun godkjente kort for RIKTIG instrument havner på tidslinjen", () => {
  const gitar = instrumentInnovations(kort, "Filosof").map((t) => t.name);
  assert.deepEqual(gitar, ["Elektrisk gitar", "Gibson Les Paul"], "ventende kort skal ikke vises");
  assert.deepEqual(instrumentInnovations(kort, "Teolog").map((t) => t.name), ["El-bassen"]);
  assert.deepEqual(instrumentInnovations(kort, "Psykolog"), []);
  // Et kort uten instrument hører kun hjemme under Teknologi.
  assert.ok(!INSTRUMENT_TIMELINE_GROUPS.some((g) => instrumentInnovations(kort, g).some((t) => t.id === "e")));
});

test("tidslinjen tegnes først ved minst to kort", () => {
  assert.equal(buildInstrumentTimeline(kort, "Teolog"), "", "ett kort gir ingen tidslinje");
  assert.equal(buildInstrumentTimeline(kort, "Forsker"), "", "null kort gir ingen tidslinje");
  const gitar = buildInstrumentTimeline(kort, "Filosof");
  assert.ok(gitar.includes("Elektrisk gitar") && gitar.includes("Gibson Les Paul"));
  assert.ok(!gitar.includes("Ventende kort"));
  // Grønn som innovasjonstidslinjen — ingen egen farge satt.
  assert.ok(!gitar.includes("--tl-color"), "instrumenttidslinjen skal arve --accent");
  assert.ok(gitar.includes("tl-rich"), "skal bruke den forfinede utformingen");
});

test("instrument og kilder er foreslåbare felter", () => {
  // Uten disse ville et studentforslag blitt filtrert bort i approvePendingEdit.
  assert.ok(PROPOSABLE_KEYS.tech.includes("instrument"));
  assert.ok(PROPOSABLE_KEYS.tech.includes("kilder"));
});

// --- Sammendragssiden per instrumentgruppe -----------------------------------

test("instrumentPageId gir lovlige, stabile Firestore-ID-er", async () => {
  const { instrumentPageId } = await import("../../js/felles/limits.js");
  assert.equal(instrumentPageId("Filosof"), "instrument-filosof");
  assert.equal(instrumentPageId("Politiker og reformator"), "instrument-politiker-og-reformator");
  assert.equal(instrumentPageId("Praktiker"), "instrument-praktiker");
  for (const g of INSTRUMENT_TIMELINE_GROUPS) {
    const id = instrumentPageId(g);
    // Firestore-ID-er tåler ikke skråstrek, og æøå gir vondt-å-feilsøke ID-er.
    assert.ok(!id.includes("/"), `${g} → ${id} inneholder skråstrek`);
    assert.match(id, /^instrument-[a-z0-9-]+$/, `${g} → ${id}`);
  }
  // Ingen to grupper kan dele side.
  const ids = INSTRUMENT_TIMELINE_GROUPS.map(instrumentPageId);
  assert.equal(new Set(ids).size, ids.length);
});

test("«instrument» er en komplett forslagstype", async () => {
  // Alle fire stedene må kjenne typen, ellers blir forslaget avvist av reglene
  // eller filtrert bort ved godkjenning.
  const fs = await import("node:fs");
  // body = selve sammendraget, kilder = kildelista under det (v5.00).
  assert.deepEqual(PROPOSABLE_KEYS.instrument, ["body", "kilder"]);
  const rules = fs.readFileSync(new URL("../../firestore.rules", import.meta.url), "utf8");
  assert.match(rules, /entityType in \[[^\]]*"instrument"/, "firestore.rules mangler typen");
  const store = fs.readFileSync(new URL("../../js/data/store.js", import.meta.url), "utf8");
  assert.match(store, /case "instrument":/, "pendingEditTargetRef mangler typen");
  // entityId er student-skrevet og MÅ valideres mot instrumentgruppene her —
  // uvalidert kunne et forslag fått lærerens godkjenning til å skrive til en
  // vilkårlig content-side (confused deputy).
  assert.match(store, /INSTRUMENT_TIMELINE_GROUPS\.some\(\(g\) => instrumentPageId\(g\) === entityId\)/,
    "entityId-valideringen mot instrumentgruppene mangler");
});

// --- Korttype: innovasjon vs. hendelse ---------------------------------------

test("kort uten type ER en innovasjon — de 66 gamle trengte ingen migrering", async () => {
  const { techType, isHendelse } = await import("../../js/ui/ui-tech.js");
  assert.equal(techType({ name: "Elektrisk gitar" }), "innovasjon");
  assert.equal(techType({ type: "" }), "innovasjon");
  assert.equal(techType({ type: "innovasjon" }), "innovasjon");
  assert.equal(techType({ type: "hendelse" }), "hendelse");
  // Ukjent verdi skal ikke kunne gjøre et kort til hendelse ved et uhell.
  assert.equal(techType({ type: "tull" }), "innovasjon");
  assert.equal(isHendelse({ type: "hendelse" }), true);
  assert.equal(isHendelse({}), false);
});

test("begge typer havner på instrumenttidslinjen, kun hendelser merkes", async () => {
  const { buildInstrumentTimeline } = await import("../../js/ui/ui-timeline.js");
  const kort = [
    { id: "a", name: "Elektrisk gitar", adoptedYear: 1938, instrument: "Filosof", status: "active" },
    { id: "b", name: "Charlie Christian som soloinstrument", adoptedYear: 1939, instrument: "Filosof", status: "active", type: "hendelse" },
  ];
  const html = buildInstrumentTimeline(kort, "Filosof");
  assert.ok(html.includes("Elektrisk gitar") && html.includes("Charlie Christian"));
  assert.equal((html.match(/tl-item-hendelse/g) || []).length, 1, "kun hendelsen merkes");
  assert.ok(html.includes("tl-legend"), "tegnforklaring vises når begge typer finnes");
});

test("tegnforklaringen vises IKKE når bare én type finnes", async () => {
  const { buildInstrumentTimeline } = await import("../../js/ui/ui-timeline.js");
  const bare = (type) => [1938, 1952].map((y, i) => ({
    id: "x" + i, name: "Kort " + i, adoptedYear: y, instrument: "Filosof", status: "active", ...(type ? { type } : {}),
  }));
  assert.ok(!buildInstrumentTimeline(bare(null), "Filosof").includes("tl-legend"));
  assert.ok(!buildInstrumentTimeline(bare("hendelse"), "Filosof").includes("tl-legend"));
});

test("hendelseskort vises ikke i Teknologi-seksjonen", async () => {
  const { renderTechList } = await import("../../js/ui/ui-tech.js");
  const el = { innerHTML: "" };
  const kort = [
    { id: "a", name: "Vinylplata", category: "Opptak og avspilling" },
    { id: "b", name: "Hendrix paa Monterey", category: "", type: "hendelse" },
  ];
  renderTechList(el, kort, "", null);
  assert.ok(el.innerHTML.includes("Vinylplata"));
  assert.ok(!el.innerHTML.includes("Hendrix"), "hendelsen hoerer hjemme paa instrumenttidslinjen");
});

test("type er foreslåbar og står i regel-hvitelista", async () => {
  const fs = await import("node:fs");
  assert.ok(PROPOSABLE_KEYS.tech.includes("type"));
  const rules = fs.readFileSync(new URL("../../firestore.rules", import.meta.url), "utf8");
  assert.match(rules, /"name", "type", "category"/, "firestore.rules mangler type");
});

// --- instrumentsInUse: filtrene og oversiktsboblene ------------------------
// Skillet som lett går tapt ved senere endringer: FILTRENE viser bare
// instrumenter noen faktisk spiller, mens SKJEMAENE må by fram hele
// vokabularet — ellers kan den første banjospilleren aldri legges inn.

test("instrumentsInUse tar bare med instrumenter som er i bruk", () => {
  const artister = [
    { name: "A", status: "active", instrument: "Filosof" },
    { name: "B", status: "active", instrument: "Psykolog" },
    { name: "C", status: "active", instrument: "Filosof" },
  ];
  assert.deepEqual(instrumentsInUse(artister), ["Filosof", "Psykolog"], "vokabularets rekkefølge, ikke artistenes");
  assert.ok(!instrumentsInUse(artister).includes("Banjo"));
});

test("instrumentsInUse teller ikke skjulte eller fjernede artister", () => {
  const artister = [
    { name: "A", status: "active", instrument: "Psykolog" },
    { name: "B", status: "removed", instrument: "Banjo" },
    { name: "C", status: "active", priority: -1, instrument: "Mandolin" },
    { name: "D", status: "pending", instrument: "Trombone" },
  ];
  assert.deepEqual(instrumentsInUse(artister), ["Psykolog"]);
});

test("instrumentsInUse beholder et aktivt filtervalg som mistet siste artist", () => {
  const artister = [{ name: "A", status: "active", instrument: "Psykolog" }];
  assert.deepEqual(instrumentsInUse(artister, "Banjo"), ["Psykolog", "Banjo"]);
  assert.deepEqual(instrumentsInUse(artister, "Psykolog"), ["Psykolog"], "ingen dublett når valget finnes");
  assert.deepEqual(instrumentsInUse(artister, ""), ["Psykolog"]);
});

test("instrumentsInUse tåler tom og manglende artistliste", () => {
  assert.deepEqual(instrumentsInUse([]), []);
  assert.deepEqual(instrumentsInUse(undefined), []);
  assert.deepEqual(instrumentsInUse(null), []);
});

test("skjemaene beholder HELE vokabularet — ellers låses ubrukte instrumenter ute", async () => {
  const les = (f) => lesJs(f);
  // Skjemaet som SETTER instrument (det felles artistskjemaet fra v6.96,
  // for studenter og lærer): hele lista, via vernet som også bevarer en
  // ukjent lagret verdi (audit v5.35 funn 19).
  const skjema = les("artist-skjema.js");
  assert.match(skjema, /fyllNedtrekk\(felt\("instrument"\), INSTRUMENTS,/);
  assert.match(skjema, /fyllNedtrekk\(felt\("instrument2"\), INSTRUMENTS,/);
  // Filtrene LESER av data: bare det som er i bruk.
  assert.match(les("landing.js"), /fillSelect\(\$\("#sp-instrument"\), instrumentsInUse\(/);
  assert.match(les("teacher-state.js"), /fillSelect\(\$\("#f-instrument"\), instrumentsInUse\(/);
});
