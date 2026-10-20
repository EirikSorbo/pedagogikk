// ============================================================================
//  SJANGERBESKRIVELSER — oppslag per nivå (INGEN innebygde defaults)
// ----------------------------------------------------------------------------
//  Beskrivelser kommer KUN fra data (Firestore-«genreDescriptions» / import-JSON), per
//  nivå: doc = sjangernavn, med valgfrie felt meta/main/sub = { description,
//  kilder, activeFrom, activeTo, usikre, era, samfunn, skole, seOgLes }. Det finnes INGEN fallback: hvert nivå leses kun fra sitt eget
//  felt (meta/main/sub). Et eldre flatt { description } brukes IKKE.
//  Det finnes BEVISST ingen seed/standardtekst — mangler en beskrivelse, skal
//  det vises en tydelig feilmelding (missingDesc), ikke en fallback som skjuler
//  at sjangeren ikke er synkronisert. Nivå: meta (metasjanger), main (tre-
//  sjanger), sub (fri undersjanger).
// ============================================================================

import { normaliserPunkter } from "../felles/punkter.js";
import { erAar } from "../felles/aarstall.js";
import { normaliserSeOgLes } from "../felles/se-og-les.js";

const LVL = { meta: "metasjanger", main: "sjanger", sub: "undersjanger" };

// Tydelig melding når ingen beskrivelse er lagt inn på gjeldende nivå. Vises i
// en .gx-missing-ramme som allerede markerer den visuelt (SVG-ikonkravet: ingen
// emoji i teksten).
export function missingDesc(level) {
  return `Ingen beskrivelse lagt inn ennå (${LVL[level] || level})`;
}

// Årstallene er heltall i et plausibelt årsintervall, ellers null. Samme
// grense som editoren validerer mot (erAar i aarstall.js: fra 3000 f.Kr. til
// 2100, fase 2; i musikkappen 1600–2100). Et tomt felt skal bety «ikke satt»,
// og 0 er IKKE et årstall: uten denne grensen ville et streifende 0 fra en
// import rendret «0–i dag» på sjangerkortet.
function yr(v) {
  return erAar(v) ? v : null;
}

const TOM = { description: "", kilder: [], activeFrom: null, activeTo: null, activeToUgyldig: false, usikre: [], era: "", punkter: [], samfunn: "", skole: "", seOgLes: [] };

function fromOverride(o, level) {
  if (!o) return null;
  const lvl = o[level];
  if (!lvl) return null;
  // KUN nivå-spesifikk tekst. Ingen fallback til flat/annet nivå — mangler
  // beskrivelsen på DETTE nivået, skal kalleren vise missingDesc (bevisst valg).
  // Epoke-årstallene følger med uavhengig av teksten: en sjanger kan ha fått
  // årstall satt før beskrivelsen er skrevet, og da skal kortet vise epoken
  // selv om prosaen fortsatt mangler.
  //
  // era teller MED her (v4.64): en node som ennå ikke har prosa, men har epoken
  // med ord, skal vise den.
  const har = !!lvl.description || yr(lvl.activeFrom) !== null
    || !!String(lvl.era || "").trim()
    || normaliserPunkter(lvl.punkter).length > 0
    || !!String(lvl.samfunn || "").trim() || !!String(lvl.skole || "").trim()
    || normaliserSeOgLes(lvl.seOgLes).length > 0;
  if (!har) return null;
  return {
    description: lvl.description || "",
    kilder: lvl.kilder || [],
    activeFrom: yr(lvl.activeFrom),
    activeTo: yr(lvl.activeTo),
    // Satt, men ikke et årstall (streng, 0, femsifret …). yr() gjør verdien om
    // til null, og da kan ingen skille den fra et tomt felt, som betyr «fortsatt
    // aktiv». Sjangerperioder (v5.20) viser slike rader som et merket hull i
    // stedet for en stolpe fram til i dag. Tomt i dataene er alltid null.
    activeToUgyldig: lvl.activeTo != null && lvl.activeTo !== "" && yr(lvl.activeTo) === null,
    usikre: Array.isArray(lvl.usikre) ? lvl.usikre : [],
    // Epoken som FRITEKST («midten av 1940-tallet», «ca. 1979»). Årstallene over
    // er det presise; denne bærer nyansen, og tidslinjen viser den ordrett.
    era: String(lvl.era || "").trim(),
    // Oppsummeringspunktene (v5.50): bare main-nivået har dem i dag (sjanger-
    // kortet), men oppslaget er likt for alle nivåer.
    punkter: normaliserPunkter(lvl.punkter),
    // Epokekortets to kontekstfelt (fase 3): samfunnet epoken sto i, og hva
    // den betydde for skole og oppdragelse. Samfunn tok over det tiårskortene
    // gjorde. Bare main-nivået (epokene) bruker dem.
    samfunn: String(lvl.samfunn || "").trim(),
    skole: String(lvl.skole || "").trim(),
    // Se og les (fase 3): valgfri liste på prinsippene (sub-nivået).
    seOgLes: normaliserSeOgLes(lvl.seOgLes),
  };
}

// Fritekst-epoken bare når den sier noe årstallene ikke sier (v5.74). Mange
// sjangre har «ca. 1900» eller «1930-tallet» som fritekst ved siden av
// activeFrom = 1900 eller 1930, og kortet leste da «ca. 1900–i dag. ca. 1900»
// på skjerm, lerret og papir. Sammenligningen ser bort fra «ca.», mellomrom
// og hvilken strek som er brukt. Uten årstall er friteksten alt vi har, og
// den vises som før.
export function epokeFritekst(resolved) {
  const ord = String(resolved?.era || "").trim();
  if (!ord) return "";
  const fra = resolved?.activeFrom, til = resolved?.activeTo;
  if (!Number.isInteger(fra)) return ord;
  const norm = (s) => String(s).toLowerCase().replace(/^ca\.?\s*/, "").replace(/\s+/g, "").replace(/[–—]/g, "-");
  const tilTekst = Number.isInteger(til) ? String(til) : "idag";
  const gjentak = new Set([
    `${fra}`, `${fra}-`, `fra${fra}`, `${fra}-tallet`,
    `${fra}-${tilTekst}`, `${fra}-idag`, `${fra}-nå`,
  ]);
  // Før Kristus (fase 2): «ca. 450–300 f.Kr.» gjentar activeFrom -450 og
  // activeTo -300, akkurat som årstallene på kortet sier det.
  if (fra < 0) {
    const bc = (x) => `${-x}`;
    const tilBc = Number.isInteger(til) ? (til < 0 ? `${bc(til)}f.kr.` : `${til}`) : "idag";
    for (const g of [`${bc(fra)}f.kr.`, `${bc(fra)}-${tilBc}`, `${bc(fra)}f.kr.-${tilBc}`]) gjentak.add(g);
  }
  return gjentak.has(norm(ord)) ? "" : ord;
}

// Beskrivelse for (navn, nivå) fra data. Tom { description: "" } hvis ingenting
// finnes — kalleren viser da missingDesc.
export function resolveDesc(overrides, name, level) {
  return fromOverride(overrides && overrides[name], level) || { ...TOM };
}

// Som resolveDesc, men over flere navn (f.eks. nodens label OG fulle navn).
export function resolveDescAny(overrides, names, level) {
  for (const n of names) { const r = fromOverride(overrides && overrides[n], level); if (r) return r; }
  return { ...TOM };
}
