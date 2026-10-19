// ============================================================================
//  VALIDERING AV SJANGERTREET
// ----------------------------------------------------------------------------
//  Treet er data fra v4.49, og importen skriver det til content/genealogy.
//  Validatoren er det eneste som står mellom en ødelagt fil og et kart som er
//  nede for hele klassen, så den testes på hvert feilslag den skal fange.
// ============================================================================
import test from "node:test";
import assert from "node:assert/strict";
import { validateTree, assertTreeOk, sjekkTidsrom } from "../../js/sjangre/genre-validate.js";
import { GENEALOGY, FAMILIES, META_ORDER_HINT } from "../../js/sjangre/genealogy-data.js";

const feilene = (tree) => validateTree(tree).filter((p) => p.nivå === "feil").map((p) => p.melding);
const ekte = () => ({
  nodes: JSON.parse(JSON.stringify(GENEALOGY)),
  families: FAMILIES,
  metaOrderHint: META_ORDER_HINT,
});

test("det ekte treet validerer uten feil", () => {
  assert.deepEqual(feilene(ekte()), []);
});

test("tomt tre er en feil, ikke en stille tom modell", () => {
  assert.equal(feilene({ nodes: [] }).length, 1);
  assert.equal(feilene(null).length, 1);
  assert.equal(feilene({}).length, 1);
});

test("dupliserte id-er fanges", () => {
  const t = ekte();
  t.nodes.push({ ...t.nodes[0], l: "Et annet navn" });
  assert.ok(feilene(t).some((m) => m.includes("har id")));
});

test("duplisert etikett fanges — etiketten er dokument-ID i genreDescriptions", () => {
  const t = ekte();
  t.nodes.push({ id: "nyid", l: t.nodes[0].l, f: "Noe", fam: "gray", r: 5, p: [] });
  assert.ok(feilene(t).some((m) => m.includes("brukes av både")));
});

test("etikett med skråstrek fanges — Firestore forbyr «/» i dokument-ID", () => {
  const t = ekte();
  t.nodes.push({ id: "nyid", l: "House/techno", f: "House/techno", fam: "teal", r: 9, p: [] });
  assert.ok(feilene(t).some((m) => m.includes("«/»")));
});

test("forelder som ikke finnes fanges", () => {
  const t = ekte();
  t.nodes[5].p = ["finnes-ikke"];
  assert.ok(feilene(t).some((m) => m.includes("finnes-ikke")));
});

test("node som er sin egen forelder fanges", () => {
  const t = ekte();
  t.nodes[5].p = [t.nodes[5].id];
  assert.ok(feilene(t).some((m) => m.includes("sin egen forelder")));
});

test("sykel fanges, med hele stien i meldingen", () => {
  const t = {
    nodes: [
      { id: "a", l: "A", f: "A", fam: "gray", r: 1, p: ["c"] },
      { id: "b", l: "B", f: "B", fam: "gray", r: 2, p: ["a"] },
      { id: "c", l: "C", f: "C", fam: "gray", r: 3, p: ["b"] },
    ],
    families: FAMILIES, metaOrderHint: [],
  };
  const m = feilene(t);
  assert.ok(m.some((x) => x.startsWith("Sykel i slektskapet")), m.join("|"));
});

test("sykel via motreaksjon (rx) fanges også", () => {
  const t = {
    nodes: [
      { id: "a", l: "A", f: "A", fam: "gray", r: 1, p: [], rx: ["b"] },
      { id: "b", l: "B", f: "B", fam: "gray", r: 2, p: ["a"] },
    ],
    families: FAMILIES, metaOrderHint: [],
  };
  assert.ok(feilene(t).some((x) => x.startsWith("Sykel")));
});

test("node uten rad fanges", () => {
  const t = ekte();
  delete t.nodes[3].r;
  assert.ok(feilene(t).some((m) => m.includes("mangler rad")));
});

test("ukjent metasjanger og ukjent familie er ADVARSLER, ikke feil", () => {
  const t = ekte();
  t.metaGenres = [{ name: "Blues" }];
  t.nodes[10].fam = "finnes-ikke";
  const alle = validateTree(t);
  assert.deepEqual(alle.filter((p) => p.nivå === "feil"), []);
  assert.ok(alle.some((p) => p.nivå === "advarsel" && p.melding.includes("families")));
  assert.ok(alle.some((p) => p.nivå === "advarsel" && p.melding.includes("metaGenres")));
});

test("assertTreeOk kaster på feil, men ikke på advarsler", () => {
  assert.doesNotThrow(() => assertTreeOk(ekte()));
  const t = ekte();
  t.nodes[5].p = ["finnes-ikke"];
  assert.throws(() => assertTreeOk(t, "importfila"), /importfila/);
});

// Node-ID-en er halve dokument-ID-en i edgeDescriptions og kan ALDRI endres.
// Etiketten ble validert mot ugyldige tegn; ID-en ikke, selv om den er den
// strengeste av de to.
test("validateTree avviser node-ID med ugyldige tegn", () => {
  const feil = (id) => validateTree({ nodes: [{ id, l: "X", r: 1, p: [], rx: [] }] })
    .filter((p) => p.nivå === "feil").map((p) => p.melding);
  assert.equal(feil("bebop").length, 0);
  assert.equal(feil("cool2").length, 0);
  assert.ok(feil("be__op").length, "«__» er skilletegnet i edge-ID-en og må avvises");
  assert.ok(feil("Be Bop").length, "mellomrom og store bokstaver må avvises");
  assert.ok(feil("bé").length, "aksenter må avvises");
});

// --- Tidsrommene (pedagogikkappens fase 2) -----------------------------------
//  Radene i treet er tidsrom lagret i treet. Startårene må finnes og stige,
//  ellers ville tidslinjene gått baklengs; hull og overlapp er advarsler.
const TIDSROM_OK = [
  { fra: -800, til: -150, navn: "Antikken" },
  { fra: -150, til: 1500 },
  { fra: 1500, til: null },
];
const nivaa = (liste, n) => liste.filter((p) => p.nivå === n).map((p) => p.melding);

test("gyldige tidsrom gir verken feil eller advarsler", () => {
  assert.deepEqual(sjekkTidsrom(TIDSROM_OK, [{ id: "a", r: 2 }]), []);
  assert.deepEqual(feilene({ ...ekte(), tidsrom: TIDSROM_OK }).filter((m) => /idsrom/.test(m)), []);
});

test("et tre uten tidsrom er en advarsel, ikke en feil", () => {
  const ut = sjekkTidsrom(undefined);
  assert.equal(nivaa(ut, "feil").length, 0);
  assert.match(nivaa(ut, "advarsel")[0], /ingen tidsrom/);
});

test("manglende eller ugyldige årstall er feil", () => {
  assert.match(nivaa(sjekkTidsrom("tull"), "feil")[0], /ikke en liste/);
  assert.match(nivaa(sjekkTidsrom([{ til: 1900 }]), "feil")[0], /startår/);
  assert.match(nivaa(sjekkTidsrom([{ fra: 0, til: 1900 }]), "feil")[0], /startår/, "år 0 finnes ikke");
  assert.match(nivaa(sjekkTidsrom([{ fra: 1900, til: "1950" }]), "feil")[0], /sluttår/);
  assert.match(nivaa(sjekkTidsrom([{ fra: 1950, til: 1900 }]), "feil")[0], /slutter \(1900\) før det begynner \(1950\)/);
  assert.match(nivaa(sjekkTidsrom([{ fra: -150, til: -800 }]), "feil")[0], /800 f\.Kr\./, "f.Kr. i meldingen");
});

test("startårene må stige: to tidsrom i feil rekkefølge er en feil", () => {
  const feil = nivaa(sjekkTidsrom([{ fra: 1900, til: 1950 }, { fra: 1800, til: null }]), "feil");
  assert.match(feil[0], /feil rekkefølge/);
});

test("hull, overlapp og et åpent tidsrom midt i lista er advarsler", () => {
  assert.match(nivaa(sjekkTidsrom([{ fra: 1900, til: 1940 }, { fra: 1950, til: null }]), "advarsel")[0], /^Hull/);
  assert.match(nivaa(sjekkTidsrom([{ fra: 1900, til: 1960 }, { fra: 1950, til: null }]), "advarsel")[0], /^Overlapp/);
  assert.match(nivaa(sjekkTidsrom([{ fra: 1900 }, { fra: 1950, til: null }]), "advarsel")[0], /mangler sluttår/);
});

test("en node under det siste tidsrommet er en advarsel", () => {
  const adv = nivaa(sjekkTidsrom(TIDSROM_OK, [{ id: "ny", r: 3 }, { id: "gammel", r: 2.5 }]), "advarsel");
  assert.equal(adv.length, 1);
  assert.match(adv[0], /«ny» står på rad 4, men treet har bare 3 tidsrom/);
});
