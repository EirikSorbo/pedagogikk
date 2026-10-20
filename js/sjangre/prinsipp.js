// ============================================================================
//  PEDAGOGISKE PRINSIPPER — «Hos hvem og når» (fase 3)
// ----------------------------------------------------------------------------
//  Et prinsipp (anskuelse, læring gjennom erfaring …) er en undersjanger i
//  dataene: en felles tekst som merkes på teoretikerne (subGenre). Denne
//  modulen svarer på «hvem har dette prinsippet, i hvilke epoker, og når?»:
//  teoretikerne i tidsrekkefølge, epokene de hører til, og en stripe på
//  tidsaksen (tidsrommene fra fase 2) som viser hvor prinsippet står tykkest.
//
//  prinsippFolk er ren og tar treet som argument, så den kan testes i Node.
//  Stripa og lista leses ved kall-tid fra treet (aldri i en konstant).
// ============================================================================
import { GENEALOGY, MAIN_GENRE_INFO } from "./genre-model.js";
import { isVisible } from "../felles/limits.js";
import { resolveSpan } from "../felles/timeline-lanes.js";
import { visSpenn } from "../felles/aarstall.js";
import { escapeHtml } from "../felles/util.js";
import { flerStripeHtml } from "../ui/artist-strip.js";

const lik = (a, b) => String(a ?? "").trim().toLowerCase() === String(b ?? "").trim().toLowerCase();

// Teoretikerne som har prinsippet, eldst først, hver med spennet sitt og
// epokene (tre-nodene) de er merket med. Skjulte og ventende kort er ikke med.
// Både subGenre og mainGenre telles: eldre kort har fritt merke i mainGenre.
export function prinsippFolk(navn, artists, noder = GENEALOGY, nowYear = new Date().getFullYear()) {
  const finnNode = (n) => noder.find((x) => lik(x.l, n) || lik(x.f, n)) || null;
  const folk = [];
  for (const a of artists || []) {
    if (!isVisible(a)) continue;
    const merker = [...(a.subGenre || []), ...(a.mainGenre || [])];
    if (!merker.some((m) => lik(m, navn))) continue;
    const epoker = (a.mainGenre || []).map(finnNode).filter((n) => n && n.g);
    folk.push({ artist: a, span: resolveSpan(a, nowYear), epoker: [...new Map(epoker.map((n) => [n.id, n])).values()] });
  }
  return folk.sort((x, y) => (x.span ? x.span.start : Infinity) - (y.span ? y.span.start : Infinity)
    || String(x.artist.name).localeCompare(String(y.artist.name), "no"));
}

// Epokene alle teoretikerne til sammen er merket med, i treets rekkefølge
// (rad, så plassering), uten gjentak.
export function prinsippEpoker(folk) {
  const sett = new Map();
  for (const f of folk) for (const n of f.epoker) sett.set(n.id, n);
  return [...sett.values()].sort((a, b) => (Number(a.r) || 0) - (Number(b.r) || 0));
}

// Seksjonen på prinsipp-kortet. Tom streng uten teoretikere, så en tag ingen
// bærer ikke får en tom overskrift.
export function hosHvemHtml(navn, artists, { nowYear = new Date().getFullYear() } = {}) {
  const folk = prinsippFolk(navn, artists, GENEALOGY, nowYear);
  if (!folk.length) return "";
  const stripe = flerStripeHtml(folk.filter((f) => f.span).map((f) => ({
    span: f.span, tittel: f.artist.name, farge: MAIN_GENRE_INFO[f.epoker[0]?.l]?.color || null, meta: f.artist.metaGenre,
  })), { nowYear });
  const epoker = prinsippEpoker(folk).map((n) =>
    `<button type="button" class="tag hh-epoke" data-sjanger="${escapeHtml(n.l)}" title="${escapeHtml(n.f || n.l)}">${escapeHtml(n.l)}</button>`).join("");
  const personer = folk.map(({ artist: a, span }) =>
    `<li><button type="button" class="hh-person" data-related-id="${escapeHtml(String(a.id))}">${escapeHtml(a.name)}</button>`
    + `${span ? ` <span class="muted">${escapeHtml(visSpenn(span.start, span.open ? null : span.end, { apen: "" }))}</span>` : ""}</li>`).join("");
  return `<div class="hh">
    <h4 class="related-head">Hos hvem og når</h4>
    ${stripe}
    ${epoker ? `<div class="hh-epoker">${epoker}</div>` : ""}
    <ul class="hh-liste">${personer}</ul>
  </div>`;
}
