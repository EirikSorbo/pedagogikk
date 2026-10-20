// ============================================================================
//  ARTIST-STRIPE — artistens aktive periode som en liten tidslinje på kortet
// ----------------------------------------------------------------------------
//  Samme spenn som artistenes tidslinje (resolveSpan i timeline-lanes.js) og
//  samme akse som treet: tidsrommene (fase 2, js/felles/tidsakse.js), hvert
//  like bredt, med året lineært innenfor sitt tidsrom. Det er hele poenget:
//  kortet, tidslinjen, tidsromsfiltrene og treet kan ikke svare ulikt på «når
//  var denne artisten aktiv», fordi de leser samme funksjon og samme akse.
//  (I musikkappen var aksen tiårene 1900–2030.)
//
//  Aksen er KONTINUERLIG: blokka plasseres på årstallet sitt, og etiketten
//  står midt på sitt eget år (startåret til tidsrommet).
//
//  Bare noen av tidsrommene får årstall: stripa står ofte i en smal
//  kortspalte ved siden av det høyrestilte bildet, og seksten årstall ble for
//  trangt. Strekene i sporet står ved hver tidsromsgrense.
//
//  Avhengighetsfattig med vilje (tidsakse + aarstall + timeline-lanes +
//  genre-model + util), så ui-helpers.js kan importere den uten import-sykel.
// ============================================================================

import { resolveSpan, packLanes } from "../felles/timeline-lanes.js";
import { aksePos, forAksen, etterAksen, tidsromGrenser } from "../felles/tidsakse.js";
import { visAar, visSpenn } from "../felles/aarstall.js";
import { META_GENRE_COLOR, FAMILIES, TIDSROM } from "../sjangre/genre-model.js";
import { escapeHtml } from "../felles/util.js";

// Høyst så mange årstall på aksen. Med seksten tidsrom blir det hvert fjerde.
const MAKS_ETIKETTER = 5;

// Fargene kommer fra sjangertreet i Firestore, altså fra DATA. De limes inn i
// et style-attributt, og «${farge}24»-trikset (alfa som to hex-siffer) krever
// dessuten nøyaktig #rrggbb. Alt annet faller tilbake på røttenes grå — det er
// både en attributt-sperre og et vern mot ugyldig CSS.
function safeColor(c) {
  return /^#[0-9a-f]{6}$/i.test(c || "") ? c : "#9bada1";
}

function artistColor(a) {
  return safeColor(META_GENRE_COLOR[a?.metaGenre] || FAMILIES.gray?.stroke);
}

// Perioden i ord — samme formulering som tidslinjens hjelpetekst, så de to
// leses likt. «ca.» fordi innflytelsesårene er skjønnsmessige anslag (samme
// grunn som på faktalinja rett over stripa).
export function spanText(span) {
  if (span.open) return `ca. ${visAar(span.start)} → pågår / sluttår ikke satt`;
  return `ca. ${visSpenn(span.start, span.end)}`;
}

// Årstallene over sporet: startåret til hvert k-te tidsrom. Absolutt plassert
// og sentrert PÅ året sitt — derfor har .ai-strip vannrett luft: den ytterste
// etiketten stikker ut et halvt årstall og skal ha plass, ikke bli klippet.
// (Årstallene var lenker til tiårsvinduet til fase 2.)
function axisHtml(grenser) {
  const n = grenser.length;
  const steg = Math.max(1, Math.ceil(n / MAKS_ETIKETTER));
  return `<div class="ai-axis">` + grenser
    .map((g, i) => (i % steg === 0
      ? `<span style="left:${((i / n) * 100).toFixed(2)}%">${escapeHtml(visAar(g.start))}</span>` : ""))
    .join("") + `</div>`;
}

// Stripa for ÉN artist. Tom streng når artisten ikke kan plasseres (mangler
// influenceStart), eller når treet ikke har tidsrom å plassere på — kortet
// skal da se ut som før, ikke vise en tom akse.
export function artistStripHtml(artist, { nowYear = new Date().getFullYear(), tidsrom = TIDSROM } = {}) {
  const span = resolveSpan(artist, nowYear);
  const grenser = tidsromGrenser(tidsrom, nowYear);
  if (!span || !grenser.length) return "";

  const color = artistColor(artist);
  // Utenfor aksen klippes blokka, og enden tegnes flat (uten kant og hjørne),
  // nøyaktig som tidslinjen markerer en åpen slutt: flat ende betyr
  // «fortsetter utenfor bildet», avrundet hjørne betyr «her slutter det».
  const cutStart = forAksen(tidsrom, span.start, nowYear);
  const cutEnd = span.open || etterAksen(tidsrom, span.end, nowYear);
  const left = aksePos(tidsrom, span.start, nowYear) * 100;
  // Minstebredde så et enkeltår ikke blir usynlig; sporet klipper overskuddet.
  const width = Math.max(1.5, aksePos(tidsrom, span.end, nowYear) * 100 - left);

  const cls = ["ai-bar", cutStart ? "is-cut-start" : "", cutEnd ? "is-cut-end" : ""]
    .filter(Boolean).join(" ");
  const txt = spanText(span);

  // --ai-n: antall tidsrom, så strekene i sporet (CSS) står ved hver grense.
  return `<div class="ai-strip" role="img" aria-label="Aktiv ${escapeHtml(txt)}">` +
    axisHtml(grenser) +
    `<div class="ai-track" style="--ai-n:${grenser.length}" title="Aktiv ${escapeHtml(txt)}">` +
    `<div class="${cls}" style="left:${left.toFixed(2)}%;width:${width.toFixed(2)}%;` +
    `background:${color}2e;border-color:${color}b3"></div>` +
    `</div></div>`;
}

// Flere perioder på samme akse (prinsippets «Hos hvem og når», fase 3): én
// stolpe per teoretiker, lagt i baner så de ikke dekker hverandre. Samme akse
// og samme farger som artistStripHtml. poster = [{ span, tittel, farge?, meta? }].
// Banepakkingen går i aksens enhet (prosent), som tidslinjen i Utforsk.
export function flerStripeHtml(poster, { nowYear = new Date().getFullYear(), tidsrom = TIDSROM } = {}) {
  const grenser = tidsromGrenser(tidsrom, nowYear);
  const gyldige = (poster || []).filter((p) => p?.span);
  if (!grenser.length || !gyldige.length) return "";
  const items = gyldige.map((p) => ({
    ...p, name: p.tittel,
    span: { start: aksePos(tidsrom, p.span.start, nowYear) * 100, end: aksePos(tidsrom, p.span.end, nowYear) * 100 },
    aapen: !!p.span.open,
  }));
  const lanes = packLanes(items, { gap: 0.5, minSpan: 1.5 });
  const BANE = 0.55;   // rem per bane
  const stolper = lanes.flatMap((lane, li) => lane.map((it) => {
    const farge = safeColor(it.farge || META_GENRE_COLOR[it.meta] || FAMILIES.gray?.stroke);
    const left = Math.max(0, it.span.start);
    const width = Math.max(1.5, Math.min(100, it.visualEnd) - left);
    return `<div class="ai-bar ai-bar-flere${it.aapen ? " is-cut-end" : ""}" title="${escapeHtml(it.tittel)}" `
      + `style="left:${left.toFixed(2)}%;width:${width.toFixed(2)}%;top:${(li * BANE).toFixed(2)}rem;`
      + `background:${farge}59;border-color:${farge}b3"></div>`;
  })).join("");
  return `<div class="ai-strip" role="img" aria-label="${gyldige.length} teoretikere på tidsaksen">`
    + axisHtml(grenser)
    + `<div class="ai-track ai-flere" style="--ai-n:${grenser.length};height:${(lanes.length * BANE + 0.2).toFixed(2)}rem">${stolper}</div></div>`;
}
