// Reformer og milepæler (pedagogikkappens fase 3): innovasjonskortene (`tech`)
// har kategoriene lov, læreplan, institusjon, læremiddel, metode og norsk spor.
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { TECH_CATEGORIES, TECH_CATEGORY_TABS } from "../../js/ui/ui-tech.js";

const MAL = ["Lov", "Læreplan", "Institusjon", "Læremiddel", "Metode", "Norsk spor"];

test("kategoriene er de seks fra planen, og fanene bærer samme navn", () => {
  assert.deepEqual(TECH_CATEGORIES, MAL);
  assert.deepEqual(TECH_CATEGORY_TABS, MAL.map((v) => ({ value: v, label: v })));
  assert.equal(new Set(TECH_CATEGORIES).size, TECH_CATEGORIES.length);
});

test("lærerens kategorifaner i teacher.html står i takt med kategoriene", () => {
  const html = readFileSync(new URL("../../teacher.html", import.meta.url), "utf8");
  const faner = [...html.matchAll(/class="btn ghost small tech-tab" data-tech-cat="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(faner, MAL);
});

test("de gamle teknologikategoriene er borte fra koden", () => {
  const ui = readFileSync(new URL("../../js/ui/ui-tech.js", import.meta.url), "utf8");
  for (const gammel of ["Opptak og avspilling", "Kringkasting og spredning", "Instrumenter og lydutstyr"]) {
    assert.ok(!ui.replace(/\/\/.*$/gm, "").includes(gammel), gammel);
  }
});
