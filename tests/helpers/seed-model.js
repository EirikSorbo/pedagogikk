// ============================================================================
//  TESTHJELPER — fyller sjangermodellen
// ----------------------------------------------------------------------------
//  Fra v4.49 kommer treet fra Firestore, så js/sjangre/genre-model.js starter TOM. I
//  node finnes verken database eller localStorage, og en test som leser
//  GENEALOGY ville derfor sett et tomt tre.
//
//  Importer denne fila FØR resten (bare for sideeffekten), så bygges modellen
//  fra frøet i js/sjangre/genealogy-data.js:
//
//      import "../helpers/seed-model.js";
//
//  Modellen bygges via byggGenealogyDoc — SAMME transformasjon som seed-
//  generatoren — så testene kjører v2-formen produksjonen faktisk leser
//  (metaGenres med farge, fam kun som unntak). v1-formen med fam på alle
//  noder skjulte i sin tid at rebuild() leste metaByName for sent (v4.65).
//
//  NB: frøet er treet slik det sto i v4.47. Fra fase 3 redigerer læreren
//  treet live, så live-dokumentet kan ha glidd fra frøet — testene låser
//  FORMLENE mot en kjent form, ikke dagens pensuminnhold.
//
//  NB: importene MÅ ha samme form som testene bruker. Node ser
//  «genre-model.js» og «genre-model.js?v=X» som TO moduler med hver sin
//  tilstand, og da ville hjelperen fylt en kopi ingen leser. Fra v6.28 står
//  alle importer uten ?v= (versjonen settes i importkartet i HTML-sidene), og
//  tools/check-versjon.sh avviser en import med ?v=.
// ============================================================================
import { GENEALOGY, FAMILIES, META_ORDER_HINT } from "../../js/sjangre/genealogy-data.js";
import { rebuild } from "../../js/sjangre/genre-model.js";
import { byggGenealogyDoc } from "../../tools/build-genealogy-doc.js";

// Tidsrommene (pedagogikkappens fase 2) er data i treet, og frøet er fra før
// de fantes. Testene får derfor de gamle tiårsradene som tidsrom: rad 0
// «Røtter» (1850–1900), så ett tiår per rad fra 1900, og det siste åpent.
// Da gir tidsromsaksen de samme grensene som tiårsaksen gjorde, og testene
// som måler filtrer og tellinger kan regne med kjente år.
const maksRad = Math.max(...GENEALOGY.map((n) => Math.floor(n.r || 0)));
export const SEED_TIDSROM = [
  { fra: 1850, til: 1900, navn: "Røtter" },
  ...Array.from({ length: maksRad }, (_, i) => ({
    fra: 1900 + i * 10, til: i === maksRad - 1 ? null : 1910 + i * 10,
  })),
];

export const SEED_DOC = { ...byggGenealogyDoc({ GENEALOGY, FAMILIES, META_ORDER_HINT }), tidsrom: SEED_TIDSROM };
rebuild(SEED_DOC);

// Epoken (era) og lytteforslagene (t) flyttet UT av treet i v4.64 og bor nå i
// genreDescriptions. Testene som måler sjangertidslinjen trenger dem fortsatt,
// så de bygges her fra frøet: samme verdier, ny adresse. Da måler testene
// fortsatt mot det ekte pensumet, og mot den formen appen faktisk leser.
export const SEED_GENRE_DESCS = Object.fromEntries(
  GENEALOGY.map((n) => [n.l, { main: { era: n.era || "", lytt: n.t || [] } }]),
);
