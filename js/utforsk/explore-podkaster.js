// ============================================================================
//  PODKASTER — eget vindu (v5.07)
// ----------------------------------------------------------------------------
//  Lå tidligere i Instrumenter-kortet (fjernet i fase 4). Episodene lastes opp
//  av lærer, så studentene ser bare lista. Vinduet har ingen inngang fra
//  forsiden lenger, men åpnes av lenker (?vis=podkaster) og lærerens
//  «Rediger episoder».
// ============================================================================
import { wirePlayerCloseGuard, renderPodcastList } from "../ui/ui-helpers.js";
import { opts, getState } from "../data/app-state.js";
import { modalOpen } from "../ui/ui-modal.js";

// Podkastene: episodene lastes opp av lærer, så studentene ser bare lista.
// Lærer får inngangen til opplastingsskjemaet her, siden dashbordkortet er borte.
function renderPodkast() {
  const el = document.getElementById("podkast-list");
  const extra = document.getElementById("podkast-extra");
  if (!el) return;
  const s = getState();
  // renderPodcastList lar lista stå urørt når episodene er uendret. Det er
  // med vilje: en episode som spiller skal fortsette å spille når kortet lukkes,
  // og stå der den var — samme episode, samme sted — når det åpnes igjen.
  renderPodcastList(el, s.podcasts, {
    empty: `<p class="muted empty" style="background:var(--surface)">Episodene publiseres fortløpende etter hvert som studentgruppene leverer sine bidrag.</p>`,
  });
  if (extra) {
    extra.innerHTML = opts.onPodkastAdmin
      ? `<button type="button" class="btn ghost small">Rediger episoder</button>` : "";
    extra.querySelector("button")?.addEventListener("click", () => opts.onPodkastAdmin());
  }
}

// Tegner vinduet på nytt når episodene endres. No-op når det er lukket, så sidene
// kan kalle den trygt fra ethvert snapshot uten egen vakt.
export function renderPodkaster() {
  if (document.getElementById("modal-podkaster")?.classList.contains("open")) renderPodkast();
}

// Podkastene i eget vindu (v5.07). Lå tidligere som fane nummer to i
// Instrumenter-kortet; med «Hør podkastene»-knappen på plass var fanen bare et
// ekstra lag rundt den samme lista.
export function openPodkaster() {
  const modal = document.getElementById("modal-podkaster");
  if (!modal) return;
  // Lukkes vinduet mens en episode spiller, skal brukeren selv velge om lyden
  // følger med ut.
  wirePlayerCloseGuard(modal, "podkast-list");
  renderPodkast();
  modalOpen(modal);
}
