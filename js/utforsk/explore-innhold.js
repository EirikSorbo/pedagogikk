// ============================================================================
//  INNHOLDSSIDER, SJANGERHISTORIER, HUB & SJANGERHIMMEL
// ----------------------------------------------------------------------------
//  «Det store bildet»-huben og innholdssidene (Om historie, Røtter, app-guide,
//  sjangerhistorier). Sjangerhimmelen (konstellasjonsvisningen) bor her fordi
//  huben er inngangen til den. Flyttet ut av explore.js (v3.55, runde 2).
//  currentStoryGenre er modul-tilstand her.
// ============================================================================
import { modalOpen, kobleFanePiler, visValgtFane } from "../ui/ui-modal.js";
import { escapeHtml } from "../felles/util.js";
import { isVisible } from "../felles/limits.js";
import { META_GENRE_COLOR, FAMILIES, GENEALOGY_ROOT_GENRES, MAIN_GENRE_INFO } from "../sjangre/genre-model.js";
import { pageFor, storyFor, stripGenrePath, storyOrderSynlig } from "../felles/story-format.js";
import { sjekketRegelAktiv } from "../felles/sjekket.js";
import { renderRichText } from "../felles/rich-text.js";
import { guideDeler, guideForStudent } from "../felles/guide-deler.js";
import { guideDelSynlig } from "../felles/feature-flags.js";
import { genreFamilyNodes } from "../ui/ui-timeline.js";
import { wireLinks } from "../ui/ui-helpers.js";
import { renderSjangerhimmel } from "../sjangre/constellation.js";
import { buildLinkCtx, injectTeacherRow, onMainGenreClick } from "./explore-context.js";
import { opts, getState } from "../data/app-state.js";
import { openMetaOversikt } from "./explore-metaoversikt.js";

// Samleinngang for «vis meg helheten»: alle tidslinjer og visuelle oversikter
// bak ett dashbordkort, uten at de flyttes fra innholdsmodalene sine.
export function openStoreBildet() {
  modalOpen(document.getElementById("modal-store-bildet"));
}

// Bruksveiledningen: teksten bor i Firestore (content/appGuide) og rendres ved
// hver åpning — samme mønster som Om historie/Røtter, med Rediger-knapp for
// lærer. Åpnes OPPÅ huben som de andre kortene, så ← går tilbake dit.
export function openAppGuide() {
  const modal = document.getElementById("modal-app-guide");
  if (!modal) return;
  renderPage("appGuide", "app-guide-body", "app-guide-extra");
  modalOpen(modal);
}

// Sidene uten Sjekk-knapp: bruksveiledningen og lærerhåndboken.
const USJEKKEDE_SIDER = ["appGuide", "laererHandbok"];

// Innholdssidene «Om historie» (omHistorie) og «Røtter før 1910» (rotter):
// teksten bor i Firestore (content/<id>.body, markdown-light) og rendres ved
// hver åpning, så import/redigering slår gjennom umiddelbart. INGEN fallback-
// tekst i koden (brukervalg) — mangler teksten, sies det tydelig ifra i
// stedet for å vise en utdatert reserve.
export function renderPage(pageId, bodyElId, extraElId) {
  const body = document.getElementById(bodyElId);
  if (!body) return;
  const s = getState();
  const page = pageFor(pageId, s.content);
  // Skillet går på TEKSTEN, ikke dokumentet (v5.32, audit-funn 7): et
  // dokument med bare kilder (mulig via import) skal fortsatt vise hullet.
  if (page?.body?.trim()) {
    const lc = buildLinkCtx();
    body.innerHTML = pageId === "appGuide" ? guideHtml(page.body, lc) : renderRichText(page.body, lc);
    wireLinks(body, lc);
  } else {
    body.innerHTML = `<p class="gx-missing">${s.contentLoaded
      ? "Teksten er ikke lagt inn ennå. Læreren legger den inn via innholds-importen eller Rediger-knappen."
      : "Laster innhold …"}</p>`;
  }
  // Lærer: Sjekk + Rediger over teksten (delt knapperad). Bruksveiledningen
  // sjekkes ikke (v6.95): den er unntatt «Bare sjekket innhold». Det er heller
  // ikke lærerhåndboken (v7.01), som studentene aldri ser.
  injectTeacherRow(document.getElementById(extraElId), {
    category: "pages",
    id: pageId,
    onEdit: opts.onPageEdit ? () => opts.onPageEdit(pageId) : null,
    sjekk: !USJEKKEDE_SIDER.includes(pageId),
  });
}

// «Slik bruker du appen» i deler (v6.95, js/felles/guide-deler.js). Studentene
// og lerretet får innledningen og de avhukede delene. Læreren ser alt, med de
// skjulte delene merket, så det synes hva studentene ikke får.
function guideHtml(body, lc) {
  if (!opts.onStoryEdit) return renderRichText(guideForStudent(body, guideDelSynlig), lc);
  const { innledning, deler } = guideDeler(body);
  return [
    innledning ? renderRichText(innledning, lc) : "",
    ...deler.map((d) => guideDelSynlig(d.tittel)
      ? renderRichText(d.tekst, lc)
      : `<div class="guide-skjult"><span class="guide-skjult-merke">Skjult for studentene</span>${renderRichText(d.tekst, lc)}</div>`),
  ].join("");
}

export function openOmHistorie() {
  const modal = document.getElementById("modal-om-historie");
  if (!modal) return;
  renderPage("omHistorie", "om-historie-body", "omh-extra");
  modalOpen(modal);
}

export function openRotter() {
  const modal = document.getElementById("modal-rotter");
  if (!modal) return;
  renderRotterChips();
  renderPage("rotter", "rotter-body", "rotter-extra");
  modalOpen(modal);
}

// Røttene som grå bobler øverst i kortet — samme form som sjangerboblene i
// Sjangre-kortet, men i røttenes egen gråtone (treets «Røtter»-familie).
// Boblen viser nodens korte navn og bærer det fulle i title, som i kartet.
// Klikk går gjennom onMainGenreClick, SAMME dør som sjangerbobler, tre-noder
// og navn i løpende tekst — ett navn skal ikke åpne to ulike kort.
export function renderRotterChips() {
  const el = document.getElementById("rotter-chips");
  if (!el) return;
  el.innerHTML = GENEALOGY_ROOT_GENRES.map((n) =>
    `<button class="tag tag-rot" data-rot="${escapeHtml(n.l)}" title="${escapeHtml(n.f || n.l)}">${escapeHtml(n.l)}</button>`
  ).join("");
  el.querySelectorAll("[data-rot]").forEach((b) =>
    b.addEventListener("click", () => onMainGenreClick(b.dataset.rot)));
}

// Sjangerhistoriene: teksten bor i Firestore (genreDescriptions/<sjanger>
// .story.body — importert eller lærer-redigert; se storyFor). INGEN
// standardtekst i koden. Rendres på nytt ved hvert chip-bytte OG hver åpning,
// så lærer-lagring slår gjennom umiddelbart. Artist-/sjangernavn i teksten
// lenkes og åpner kortene OPPÅ historien.
let currentStoryGenre = null;

// Snapshot-omtegning av en ÅPEN historie (v5.34, audit-funn 8): familien og
// teksten skal følge lærerens lagring — og en historie åpnet før treet
// landet, skal fylles når det kommer. Kalles fra contentChanged/
// genreDescsChanged (explore-context) bak isOpen-sjekken der. Tegner bare om
// når det historien viser faktisk er endret, og aldri til toppen (audit v5.42
// funn 14): hver lagring i content-samlingen (kjøreplaner, sider)
// kastet før alle med en historie åpen tilbake til toppen.
export function refreshHistorie() {
  if (currentStoryGenre != null) renderHistorie(currentStoryGenre, { fraSnapshot: true });
}

let historieSignatur = null;

// Alt historien tegnes fra: sjangeren, familien, teksten og om innholdet
// har landet.
function historieSig(genre) {
  const s = getState();
  const familie = genreFamilyNodes(genre, s.genreDescs).map(({ n }) => n.l);
  return JSON.stringify([genre, !!s.contentLoaded, familie,
    storyFor(genre, s.genreDescs)?.body ?? null]);
}

function renderHistorie(genre, { fraSnapshot = false } = {}) {
  const sig = historieSig(genre);
  if (fraSnapshot && sig === historieSignatur) return;
  historieSignatur = sig;
  currentStoryGenre = genre;
  // «Kopier lenke» (v5.22): følger metasjangeren som faktisk vises, også når
  // man bytter historie med chipsene mens modalen står åpen. Settes bare ved
  // endring, så opptaket ikke ser et «valg» i en omtegning.
  const histModal = document.getElementById("modal-historier");
  const vis = genre ? `historie:${genre}` : "historie";
  if (histModal && histModal.dataset.vis !== vis) histModal.dataset.vis = vis;
  const modal = document.getElementById("modal-historier");
  modal.querySelectorAll("#hist-faner [data-story]").forEach((b) => {
    const paa = b.dataset.story === genre;
    b.classList.toggle("active", paa);
    b.setAttribute("aria-selected", paa ? "true" : "false");
    b.tabIndex = paa ? 0 : -1;
  });
  visValgtFane(document.getElementById("hist-faner"));
  // «Vis oversikt» (v5.94) følger historien som vises (i appen også fra
  // v6.05, S2).
  const oversiktKnapp = document.getElementById("hist-oversikt");
  if (oversiktKnapp) oversiktKnapp.textContent = `Vis oversikt over ${genre}`;

  // Familien som bobler i tidsrekkefølge (fase 2, pedagogikkappen): epokene
  // i retningen, eldst først. Her sto varmestripene (v5.16) til varmekartet
  // ble tatt ut. Rekkefølgen er genreFamilyNodes sin (startår, og aldri foran
  // en forelder), og boblene åpner epokekortet gjennom den delegerte
  // data-sjanger-lytteren i explore.js, samme dør som navn i teksten.
  const tre = document.getElementById("hist-tre");
  if (tre) {
    const familie = genreFamilyNodes(genre, getState().genreDescs).map(({ n }) => n);
    tre.innerHTML = familie.length
      ? `<div class="hist-familie">${familie.map((n) => {
          const farge = MAIN_GENRE_INFO[n.l]?.color || META_GENRE_COLOR[genre] || FAMILIES.gray?.stroke || "#9bada1";
          return `<button type="button" class="tag hist-epoke" data-sjanger="${escapeHtml(n.l)}" title="${escapeHtml(n.f || n.l)}" style="--hist-color:${escapeHtml(farge)}">${escapeHtml(n.l)}</button>`;
        }).join("")}</div>`
      : "";
  }

  const story = storyFor(genre, getState().genreDescs);
  const lc = buildLinkCtx();
  const body = document.getElementById("hist-body");
  body.innerHTML = story
    ? renderRichText(stripGenrePath(story.body), lc)
    : `<p class="gx-missing">Historien om ${escapeHtml(genre)} er ikke lagt inn ennå. Læreren legger den inn via innholds-importen eller Rediger-knappen.</p>`;
  wireLinks(body, lc);

  // Lærer: Sjekk (på metasjanger-nivå — historien ER metasjangerens innhold)
  // + Rediger, delt knapperad.
  injectTeacherRow(document.getElementById("hist-extra"), {
    category: "metaGenres",
    id: genre,
    onEdit: opts.onStoryEdit ? () => opts.onStoryEdit(genre) : null,
  });

  // Til toppen bare ved åpning og bytte av historie, ikke ved omtegning.
  const box = modal.querySelector(".modal");
  if (box && !fraSnapshot) box.scrollTop = 0;
}

export function openHistorier(genre) {
  const modal = document.getElementById("modal-historier");
  if (!modal) return;
  const faner = document.getElementById("hist-faner");
  // Bygges ved HVER åpning (billig — en håndfull knapper): både lista
  // (storyOrder følger navnebytter i treet) og fargene (META_GENRE_COLOR er en
  // live binding som byttes ved hvert rebuild) skal være ferske. En engangs-
  // bygging med dataset.filled frøs grå farger fra før treet hadde landet.
  const rekkefolge = storyOrderSynlig(getState().genreDescs);
  // «Bare sjekket innhold» (v6.89): ingen sjekkede historier, ingenting å åpne.
  // Inngangene er skjult da (explore.js), men en lenke kan fortsatt peke hit.
  if (!rekkefolge.length) return;
  const regel = sjekketRegelAktiv();
  // Faner (v6.34, brukervalg 2026-10-04), som Sjangre og Instrumenter.
  // Hver metasjanger bærer sin egen farge fra slektstreet (META_GENRE_COLOR),
  // så fanene, treet og himmelen snakker samme fargespråk:
  // --hist-color gir prikken foran navnet og understreken på den valgte.
  faner.innerHTML = rekkefolge.map((g) => {
    const color = META_GENRE_COLOR[g] || FAMILIES.gray?.stroke || "#9bada1";
    return `<button type="button" class="dv-fane hist-fane" role="tab" aria-selected="false" tabindex="-1" data-story="${escapeHtml(g)}" data-tekst="${escapeHtml(g)}" style="--hist-color:${color}"><span class="hist-fane-navn"><i class="hist-prikk" aria-hidden="true"></i>${escapeHtml(g)}</span></button>`;
  }).join("");
  faner.querySelectorAll("[data-story]").forEach((b) =>
    b.addEventListener("click", () => renderHistorie(b.dataset.story)));
  kobleFanePiler(faner);
  // Oversikten åpnes OPPÅ historien, så ← fører tilbake hit. Knappen står i
  // den faste markupen og kobles bare én gang.
  const oversiktKnapp = document.getElementById("hist-oversikt");
  if (oversiktKnapp && !oversiktKnapp.dataset.koblet) {
    oversiktKnapp.dataset.koblet = "1";
    oversiktKnapp.addEventListener("click", () => { if (currentStoryGenre) openMetaOversikt(currentStoryGenre); });
  }
  const valgt = typeof genre === "string" && (!regel || rekkefolge.includes(genre)) ? genre
    : (rekkefolge.includes(currentStoryGenre) ? currentStoryGenre : rekkefolge[0]);
  renderHistorie(valgt);
  modalOpen(modal);
}

// Sjangerhimmelen: konstellasjonskartet rendres på nytt ved hver åpning (samme
// mønster som kartet), så det alltid speiler gjeldende artistdata. Artist- og
// sjangerklikk åpner de vanlige modalene OPPÅ himmelen — ← går tilbake hit.
export function openSjangerhimmel() {
  const modal = document.getElementById("modal-sjangerhimmel");
  if (!modal) return;
  renderSjangerhimmel(document.getElementById("sh-body"), getState().artists.filter(isVisible), {
    onArtistClick: opts.onArtistClick,
    onGenreClick: onMainGenreClick,
  });
  modalOpen(modal);
}
