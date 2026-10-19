// ============================================================================
//  ÅRSTALL — år og spenn i tekst, også før Kristus (fase 2)
// ----------------------------------------------------------------------------
//  Pedagogikkens historie begynner hos grekerne, så et årstall kan ligge før
//  Kristus. Det lagres som et NEGATIVT heltall (-427 er 427 f.Kr.) og vises
//  med «f.Kr.» bak. Alt som skriver et årstall til skjermen eller papiret,
//  går gjennom visAar eller visSpenn, så formen er lik overalt.
//
//  Tidsregningen har ikke noe år 0, men appen regner med vanlige heltall: fra
//  -4 til 30 blir 34 år, ikke 33. Avviket er ett år, og årstallene er anslag.
//
//  Avhengighetsfri med vilje: skjemaene, importen, utskriften og
//  tidsaksen (tidsakse.js) leser den.
// ============================================================================

// Grensene skjemaene godtar. Den nedre dekker de eldste skolene vi kjenner
// (skriverskolene i Mesopotamia og Egypt); den øvre gir rom for planer og
// reformer som er vedtatt, men ikke trådt i kraft.
export const AAR_MIN = -3000;
export const AAR_MAKS = 2100;

// Hjelpeteksten under årsfeltene.
export const AAR_HJELP = "År før Kristus skrives med minus foran: -427 er 427 f.Kr.";

// Er verdien et årstall appen kan lagre? Heltall innenfor grensene, og ikke
// 0: et tomt tallfelt leses som 0 flere steder, og år 0 finnes ikke.
export function erAar(v) {
  return Number.isInteger(v) && v !== 0 && v >= AAR_MIN && v <= AAR_MAKS;
}

// Leser et årstall fra et skjemafelt eller en fil: «-427», «427 f.Kr.»,
// «427 fvt.» og «1762» (også med «e.Kr.» eller «evt.» bak). Alt annet, og
// tomt felt, gir null.
export function tolkAar(raa) {
  if (typeof raa === "number") return erAar(raa) ? raa : null;
  const t = String(raa ?? "").trim().toLowerCase().replace(/\s+/g, " ");
  if (!t) return null;
  const m = t.match(/^(-?\d{1,4})\s*(f\.?\s?kr\.?|fvt\.?|e\.?\s?kr\.?|evt\.?)?$/);
  if (!m) return null;
  let n = parseInt(m[1], 10);
  if (m[2] && /^f/.test(m[2])) n = -Math.abs(n);
  return erAar(n) ? n : null;
}

// «427 f.Kr.», «1762». Ikke et tall: tom streng.
export function visAar(aar) {
  const n = Number(aar);
  if (aar == null || aar === "" || !Number.isFinite(n)) return "";
  return n < 0 ? `${-n} f.Kr.` : String(n);
}

// Et spenn med «f.Kr.» bare der det trengs: «427–347 f.Kr.» (begge før),
// «4 f.Kr.–65» (over tidsskillet) og «1762–1827». Uten sluttår står `apen`
// etter streken («1990–i dag»), eller ingenting («1990–»). Samme år i begge
// ender er ett årstall.
export function visSpenn(fra, til, { apen = "" } = {}) {
  const harFra = fra != null && fra !== "" && Number.isFinite(Number(fra));
  const harTil = til != null && til !== "" && Number.isFinite(Number(til));
  if (!harFra) return harTil ? `?–${visAar(til)}` : "";
  const a = Number(fra);
  if (!harTil) return `${visAar(a)}–${apen}`;
  const b = Number(til);
  if (a === b) return visAar(a);
  if (a < 0 && b < 0) return `${-a}–${-b} f.Kr.`;
  return `${visAar(a)}–${visAar(b)}`;
}
