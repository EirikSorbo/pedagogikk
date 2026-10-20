// ============================================================================
//  UI — TIDSLINJER
// ----------------------------------------------------------------------------
//  Bygger proporsjonale tidslinjer for instrumentene og rekkefølgen i
//  sjangerfamiliene. Intern layout-logikk holdes privat her. Importerer
//  GENEALOGY (treet er fasit for sjangertidslinjen) — trygt, fordi genealogy.js
//  ikke importerer denne modulen. (Tiårsvelgeren og tiårenes tidslinjer ble
//  tatt ut i fase 2 sammen med tiårskortene.)
// ============================================================================

import { escapeHtml } from "../felles/util.js";
import { GENEALOGY, TIDSROM } from "../sjangre/genre-model.js";
import { visAar } from "../felles/aarstall.js";
// Epoken bor i genreDescriptions fra v4.64. Vi går til den rene oppslags-
// modulen, ikke til genealogy.js: den importerer denne veien rundt ellers.
import { resolveDescAny } from "../sjangre/genre-descriptions.js";
import { isHendelse } from "./ui-tech.js";

// Etikettene er 130px brede (CSS .tl-prop .tl-label) — ca. 24 % av minste
// sporbredde (560px). Grupper hvis intervaller overlapper horisontalt må
// stables i høyden. Linjehøyden er et estimat uten DOM-måling: ~20 tegn per
// linje ved 130px/0.75rem, bevisst i underkant så estimatet heller tar for
// mye høyde enn for lite.
const LABEL_W_PCT = 24;
const CHARS_PER_LINE = 20;
const LINE_H = 17;

// lineH må følge den FAKTISKE skriftstørrelsen på .tl-desc. Sjangertidslinjen
// setter navnene større (0.82rem, halvfet) enn teknologitidslinjene gjorde, og
// med standardhøyden 17px undervurderte estimatet stabler på tre navn nok til
// at etiketten kolliderte med naboen (Neo-soul/Gangsta rap/Cont. R&B mot Trap).
function estimateLabelHeight(entries, lineH = LINE_H) {
  const lines = entries.reduce((n, e) => n + Math.max(1, Math.ceil(e.desc.length / CHARS_PER_LINE)), 0);
  return lineH + 2 + lines * lineH;
}

// Kant-etiketter (tl-start/tl-end) venstre-/høyrestilles i CSS-en, så det
// horisontale fotavtrykket deres strekker seg innover fra punktet — ikke
// symmetrisk rundt det. Er etikettene alltid midtstilte (sjangertidslinjen),
// er fotavtrykket symmetrisk overalt, og kant-unntaket ville regnet feil.
function labelInterval(pct, edgeAlign = true) {
  if (edgeAlign && pct <= 12) return [pct - 1, pct + LABEL_W_PCT - 1];
  if (edgeAlign && pct >= 88) return [pct - LABEL_W_PCT + 1, pct + 1];
  return [pct - LABEL_W_PCT / 2, pct + LABEL_W_PCT / 2];
}

const BASE_STEM = 24;

// Høydebevisst layout: hver gruppe legges på den siden (over/under) der den
// får kortest stilk, og stilken må løfte etiketten klar av alle tidligere
// etiketter på samme side som overlapper horisontalt. Da kan ingenting
// kollidere, uansett hvor mange hendelser som deler årstall eller hvor mange
// linjer tekstene brekker over.
//
// stemLevels > 0 slår på FASTE stilklengder i stedet. Den frie stablingen over
// vokser monotont — hver ny etikett må klarere alle de forrige — så i en tett
// familie som Jazz ble stilkene lengre og lengre utover i sporet. Med faste
// nivåer prøves plassene i rekkefølgen kort-over, kort-under, lang-over,
// lang-under, og en etikett som ikke overlapper noen i sin egen plass havner
// på den korteste ledige. Da veksler stilkene i stedet for å eskalere, og
// mønsteret nullstiller seg av seg selv når sporet åpner seg igjen.
// Finnes det ingen ledig fast plass, faller vi tilbake på den frie stablingen,
// så garantien om at ingenting kolliderer står uansett.
function layoutTimeline(groups, { stemLevels = 0, edgeAlign = true } = {}) {
  const placed = { above: [], below: [] };
  const step = Math.max(...groups.map((g) => g.height)) + 8;
  return groups.map((g) => {
    const [lo, hi] = labelInterval(g.pct, edgeAlign);
    const overlaps = (p) => lo < p.hi && hi > p.lo;

    for (let lvl = 0; lvl < stemLevels; lvl++) {
      for (const side of ["above", "below"]) {
        if (placed[side].some((p) => p.level === lvl && overlaps(p))) continue;
        const stem = BASE_STEM + lvl * step;
        placed[side].push({ lo, hi, stem, height: g.height, level: lvl });
        return { ...g, dir: side, stem };
      }
    }

    const stemFor = (side) => {
      let stem = BASE_STEM;
      for (const p of placed[side]) {
        if (overlaps(p)) stem = Math.max(stem, p.stem + p.height + 8);
      }
      return stem;
    };
    const aStem = stemFor("above"), bStem = stemFor("below");
    const dir = bStem < aStem ? "below" : "above";
    const stem = Math.min(aStem, bStem);
    placed[dir].push({ lo, hi, stem, height: g.height, level: -1 });
    return { ...g, dir, stem };
  });
}

// Punkter som ligger noen få år fra hverandre havner praktisk talt oppå
// hverandre på aksen (British invasion 1963 / Blues rock 1964). Her dyttes de
// fra hverandre til minst `gap` prosentpoeng: ett gjennomløp forover som skyver
// høyre vei, så ett bakover fra høyre kant som fanger dem som ble skjøvet ut av
// sporet. To gjennomløp konvergerer så lenge det er plass til alle, og `gap`
// begrenses nettopp slik at det alltid er det.
function enforceMinGap(sorted, desiredGap, pad, limit) {
  const n = sorted.length;
  if (n < 2 || !desiredGap) return;
  const gap = Math.min(desiredGap, (limit - pad) / (n - 1));
  for (let i = 1; i < n; i++) sorted[i].pct = Math.max(sorted[i].pct, sorted[i - 1].pct + gap);
  sorted[n - 1].pct = Math.min(sorted[n - 1].pct, limit);
  for (let i = n - 2; i >= 0; i--) sorted[i].pct = Math.min(sorted[i].pct, sorted[i + 1].pct - gap);
}

// opts.color farger strek, prikker, stilker og årstall (CSS-variabelen
// --tl-color, som faller tilbake på --accent når den ikke er satt).
// opts.minGapPct, opts.stemLevels og opts.edgeAlign styrer plasseringen og
// kant-justeringen.
function buildProportionalTimeline(items, startYear, {
  color = null, extraClass = "", minGapPct = 0, lineH = LINE_H,
  stemLevels = 0, edgeAlign = true,
} = {}) {
  if (items.length < 2) return "";
  // Hendelser på samme punkt samles til én gruppe — ett punkt, én stilk, navnene
  // under hverandre — i stedet for flere etiketter oppå hverandre på samme x.
  // Grupperes på ÅRSTALL (posisjonen), ikke på etiketten: to punkter på samme
  // x skal i samme gruppe selv om teksten er ulik.
  const byPos = new Map();
  for (const e of items) {
    const key = e.year == null ? "?" : e.year;
    if (!byPos.has(key)) byPos.set(key, { year: e.year, label: e.label, entries: [] });
    byPos.get(key).entries.push(e);
  }
  const groups = [...byPos.values()];
  const pad = 4;
  const limit = 100 - pad;
  const minY = Math.min(...groups.map(g => g.year || startYear));
  const maxY = Math.max(...groups.map(g => g.year || startYear + 9));
  const span = Math.max(maxY - minY, 1);

  // Deler alle hendelsene årstall (én gruppe), sentreres punktet på aksen i
  // stedet for å klistres til venstrekanten av en meningsløs spennvidde.
  const mapped = groups.map(g => ({
    ...g,
    pct: groups.length === 1 ? 50 : pad + ((g.year || startYear) - minY) / span * (limit - pad),
    height: estimateLabelHeight(g.entries, lineH),
  }));
  mapped.sort((a, b) => a.pct - b.pct);
  enforceMinGap(mapped, minGapPct, pad, limit);
  const laid = layoutTimeline(mapped, { stemLevels, edgeAlign });
  // Sporhøyden må dekke høyeste stilk + etikett på en side (10px luft mellom
  // stilk og etikett, jf. CSS-ens bottom/top-calc).
  const half = Math.max(...laid.map(g => g.stem + g.height + 10)) + 8;
  const style = `--tl-half:${half}px` + (color ? `;--tl-color:${color}` : "");
  let html = `<div class="timeline tl-prop${extraClass ? " " + extraClass : ""}" style="${style}"><div class="tl-track">`;
  for (const g of laid) {
    const edge = !edgeAlign ? "" : g.pct <= 12 ? " tl-start" : g.pct >= 88 ? " tl-end" : "";
    // Er HELE gruppen hendelser, markeres prikken som det. Blandede grupper
    // (samme årstall, ulik type) beholder standardprikken — den ville ellers
    // lyve om halvparten av innholdet.
    const mark = g.entries.every((e) => e.hendelse) ? " tl-item-hendelse" : "";
    html += `<div class="tl-item tl-${g.dir}${edge}${mark}" style="left:${g.pct.toFixed(1)}%;--stem:${g.stem}px">` +
      `<div class="tl-dot"></div><div class="tl-stem"></div>` +
      `<div class="tl-label"><span class="tl-year">${escapeHtml(g.label)}</span>` +
      g.entries.map((e) =>
        `<span class="tl-desc${e.hendelse ? " tl-desc-hendelse" : ""}"` +
        (e.techId ? ` data-tech-id="${escapeHtml(e.techId)}"` : "") +
        (e.genre ? ` data-genre="${escapeHtml(e.genre)}"` : "") +
        `>${escapeHtml(e.desc)}</span>`
      ).join("") +
      `</div></div>`;
  }
  html += "</div></div>";
  return html;
}

// ----------------------------------------------------------------------------
//  INSTRUMENTTIDSLINJE — nyvinningene for én instrumentgruppe
// ----------------------------------------------------------------------------
//  Samme kort som teknologiseksjonen (samlingen `tech`), gruppert på
//  `instrument`: ett kort = én stilk. Kortene skrives av
//  studentene, så tidslinjen må bygges av dataene og ikke av noen liste i
//  koden — en ny godkjent nyvinning skal dukke opp av seg selv.
//
//  Utformingen er den forfinede fra sjangertidslinjen (navnet nærmest streken,
//  midtstilte etiketter, vekslende stilker), men UTEN farge — da faller den
//  tilbake på --accent og er grønn som innovasjonstidslinjen den stammer fra.
export function instrumentInnovations(techItems, group) {
  return (techItems || [])
    .filter((t) => t.instrument === group && (t.status || "active") === "active")
    .sort((a, b) => (a.adoptedYear || 0) - (b.adoptedYear || 0));
}

export function buildInstrumentTimeline(techItems, group) {
  const items = instrumentInnovations(techItems, group);
  if (items.length < 2) return "";
  const html = buildProportionalTimeline(
    items.map((t) => ({
      year: t.adoptedYear || null,
      // KUN årstallet (brukervalg): adoptedLabel er fritekst som ofte er en hel
      // setning («utviklet 1993, gjennombrudd sent på 1990-tallet»), og den
      // sprengte den lille etiketten. Den lange formen står på selve kortet.
      label: t.adoptedYear ? visAar(t.adoptedYear) : "",
      desc: t.name,
      techId: t.id,
      hendelse: isHendelse(t),
    })),
    items[0].adoptedYear || 1900,
    { extraClass: "tl-rich", minGapPct: 6, lineH: 21, stemLevels: 2, edgeAlign: false }
  );
  // Tegnforklaring kun når BEGGE typene er på tidslinjen — med bare én type
  // forklarer den et skille som ikke finnes.
  const harBegge = items.some(isHendelse) && items.some((t) => !isHendelse(t));
  return html + (harBegge
    ? `<p class="tl-legend"><span class="tl-legend-dot"></span>teknologisk reform` +
      `<span class="tl-legend-dot tl-legend-hendelse"></span>viktig hendelse</p>`
    : "");
}

// ----------------------------------------------------------------------------
//  SJANGERTIDSLINJE — sjangerfamilien over hver sjangerhistorie
// ----------------------------------------------------------------------------
//  Erstatter den håndskrevne «Sjangertre-løype»-linjen som lå øverst i hver
//  historie: den var manuelt vedlikeholdt og hadde drevet fra treet på fire av
//  seks historier (Cont. jazz, Cont. gospel, Cont. country, Neotrad. country,
//  Cont. R&B og Cont. hip-hop manglet). Her utledes den av GENEALOGY, så en ny
//  node dukker opp i historien sin uten at noen må huske å oppdatere teksten.

// rad → tidsrommets startår (fase 2; før tiåret, rad 1 = 1900). En rad uten
// tidsrom låner året fra nærmeste tidsrom over, så rekkefølgen holder.
function rowYear(r) {
  const rad = Math.floor(Number(r) || 0);
  for (let i = Math.min(rad, TIDSROM.length - 1); i >= 0; i--) {
    if (Number.isInteger(TIDSROM[i]?.fra)) return TIDSROM[i].fra + (rad - i);
  }
  return rad;
}

// Epoken for en node, fra genreDescriptions. Fram til v4.64 lå den som `era` på
// treets node; da kunne sjangerkortet og denne tidslinjen vise ULIK epoke for
// samme sjanger, fordi kortet leste årstallene og tidslinjen leste noden.
function nodeEpoke(n, genreDescs) {
  return resolveDescAny(genreDescs || {}, [n.l, n.f], "main");
}

// Årstallet en node plasseres på, i fallende presisjon:
//   1. activeFrom — strukturert og validert, lærerens egen retting
//   2. et årstall lest ut av fritekst-epoken («ca. 1979» → 1979,
//      «ca. 450 f.Kr.» → -450)
//   3. startåret til tidsrommet noden står i
// Uten steg 1 og 2 ville to noder i samme tidsrom kollidert.
function nodeYear(n, e) {
  if (Number.isInteger(e?.activeFrom)) return e.activeFrom;
  // Første tall i teksten. Det er før Kristus når «f.Kr.» står rett etter
  // det, eller etter neste tall i et spenn («450–300 f.Kr.»). Ett- og
  // tosifrede tall uten f.Kr. er for tvetydige («2. verdenskrig»).
  const m = String(e?.era || "").match(/\b(\d{1,4})(?:\s*(f\.\s?kr)|\s*[–-]\s*\d{1,4}\s*(f\.\s?kr))?/i);
  if (m && (m[2] || m[3])) return -parseInt(m[1], 10);
  if (m && m[1].length >= 3) return parseInt(m[1], 10);
  return rowYear(n.r);
}

// Etiketten over punktet er fritekst-epoken ORDRETT («1957», «sent 1960-tall»,
// «midten av 1940-tallet»). Vi viser altså ikke det utleste årstallet: der
// epoken er upresis, ville tallet både sett feil ut og kunne havnet til høyre
// for et høyere tall etter avstamnings-låsingen under. Mangler friteksten,
// brukes årstallet, og ellers tidsrommet.
// Årstallet over for én node (metasjanger-oversikten, v5.94: forbindelsene
// til andre familier i tidsrekkefølge, også røttene uten activeFrom).
export function nodeStartAar(n, genreDescs) {
  return nodeYear(n, nodeEpoke(n, genreDescs));
}

function nodeLabel(n, e) {
  const era = String(e?.era || "").trim();
  if (era) return era;
  if (Number.isInteger(e?.activeFrom)) return visAar(e.activeFrom);
  return TIDSROM[Math.floor(Number(n.r) || 0)]?.etikett || visAar(rowYear(n.r));
}

// Sjangerfamilien til én metasjanger, i tidsrekkefølge. KUN ekte sjangre —
// rot-nodene familien vokste ut av (`g: null`, f.eks. Work songs → Blues) er
// bevisst utelatt (v3.77, brukervalg): de ga lite, og fordi de ligger et helt
// århundre foran resten krevde de et eget aksebrudd som gjorde løypen rotete.
//
// AVSTAMNING LÅSER REKKEFØLGEN: fritekst-epoken er nettopp fritekst, og upresise formuleringer kan
// snu om på slektskapet — «sent 1960-tall» (Blues rock) leses som 1960 og havner
// da FORAN forelderen British invasion («1963–66»). Derfor dyttes hver node til
// minst ett år etter sin seneste forelder i familien. Da kan en strek i treet
// aldri peke bakover på tidslinjen, uansett hvordan era er formulert.
export function genreFamilyNodes(metaGenre, genreDescs = {}) {
  const family = GENEALOGY.filter((n) => n.g === metaGenre);
  if (!family.length) return [];
  const epoke = new Map(family.map((n) => [n.id, nodeEpoke(n, genreDescs)]));
  // GENEALOGY er sortert slik at foreldre kommer før barn, så ett gjennomløp
  // holder for å propagere låsingen nedover kjeden.
  const year = new Map(family.map((n) => [n.id, nodeYear(n, epoke.get(n.id))]));
  for (const n of family) {
    const parents = (n.p || []).filter((pid) => year.has(pid));
    if (!parents.length) continue;
    const earliest = Math.max(...parents.map((pid) => year.get(pid))) + 1;
    if (year.get(n.id) < earliest) year.set(n.id, earliest);
  }
  return family
    .map((n) => ({ n, year: year.get(n.id), label: nodeLabel(n, epoke.get(n.id)) }))
    .sort((a, b) => a.year - b.year);
}

// buildGenreTimeline lå her til v5.16. genreFamilyNodes over er det eneste
// som ble igjen: den gir rekkefølgen, kronologisk etter startår, til
// historiene (epokene som bobler, fase 2) og metasjanger-oversikten.
// buildProportionalTimeline lever videre for instrumenttidslinjene.
