// ============================================================================
//  LÆRER — SJANGERTRE-EDITOR
// ----------------------------------------------------------------------------
//  Her legger læreren inn, endrer og fjerner sjangre og metasjangre. Treet bor i
//  content/genealogy (fase 1), og layouten regnes ut (fase 2), så det finnes
//  ingen koordinater å pusle med: man sier hvilken metasjanger sjangeren hører
//  til, hvilket tidsrom den preget og hvem den vokste ut av, så plasserer
//  kartet den selv.
//
//  Tidsrommene (radene, pedagogikkappens fase 2) redigeres i et eget skjema.
//  De er en TRYGG endring: et tidsrom er ingen identitet, og nodene peker på
//  raden med et tall. Settes et tidsrom inn eller fjernes, flyttes nodene
//  under med i samme lagring, så ingen epoke havner i feil tidsrom.
//
//  DET VIKTIGE SKILLET, og grunnen til at fila er bygget som den er:
//
//    TRYGGE endringer  — fullt navn, metasjanger, rad, foreldre, farge,
//                        og det å legge til en helt ny sjanger. Ingen andre
//                        peker på dem. De skrives rett.
//
//    IDENTITETSbytter  — å endre ETIKETTEN, eller å slette. Etiketten er
//                        dokument-ID i genreDescriptions og står som tagg på
//                        artister, i avkryssinger og i åpne forslag. Slike endringer går ALLTID gjennom
//                        js/sjangre/genre-migrate.js: den planlegger, læreren ser hva
//                        som skjer, og alt skrives i ÉN atomisk batch.
//
//  Node-ID-en kan ikke endres i det hele tatt. edgeDescriptions har «fra__til»
//  som dokument-ID, og et id-bytte ville gjort alle koblingsbeskrivelsene
//  foreldreløse.
// ============================================================================

import { $ } from "../data/shared.js";
import { escapeHtml, kanoniskJson } from "../felles/util.js";

import { state } from "./teacher-state.js";
import { TIDSROM, RAD_ANTALL, FAMILIES, tidsromEtikett } from "../sjangre/genre-model.js";
import { validateTree, sjekkTidsrom } from "../sjangre/genre-validate.js";
import { tolkAar, visSpenn, AAR_HJELP } from "../felles/aarstall.js";
import {
  planGenreRename, planMetaRename, planGenreDelete, planMetaDelete,
  planPasserIBatch, byggMetaTre,
  planEdgeCleanup, edgeOrphanKeys,
} from "../sjangre/genre-migrate.js";
import { runMigrationPlan, saveGenealogyTree } from "../data/store.js";
import { melding, bekreft, modalOpen, modalClose } from "../ui/ui-modal.js";

// Treet slik det ser ut nå. Leses fra det delte state-objektet, aldri fra en
// lokal kopi — læreren kan ha to faner åpne.
const tre = () => state.content?.genealogy || null;

// Sidens state-objekt i den formen genre-migrate forventer.
const migrasjonsState = () => ({
  tree: tre(),
  artists: state.artists || [],
  genreDescs: state.genreDescs || {},
  edgeDescs: state.edgeDescs || {},
  content: state.content || {},
  teacherChecks: state.teacherChecks || {},
  pendingEdits: state.pendingEdits || [],
});

// ----------------------------------------------------------------------------
//  Markup
// ----------------------------------------------------------------------------
export const GENRE_ADMIN_HTML = `
<div class="modal-backdrop" id="modal-genre-admin">
  <div class="modal modal-wide">
    <div class="modal-head">
      <h2>Sjangertre-editor</h2>
      <button class="modal-close btn ghost small">✕</button>
    </div>
    <p class="muted" style="margin:0 0 12px">
      Legg inn, endre eller fjern sjangre. Plasseringen i kartet regnes ut av metasjanger,
      tidsrom og slektskap, så du trenger ikke tenke på koordinater.
    </p>
    <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap">
      <button class="btn primary small" id="gen-ny-sjanger">Ny sjanger</button>
      <button class="btn ghost small" id="gen-ny-meta">Ny metasjanger</button>
      <!-- Radene i treet (fase 2): tidsrom av fri lengde. -->
      <button class="btn ghost small" id="gen-tidsrom">Tidsrom</button>
      <!-- Foreldreløse koblingsbeskrivelser: doc-ID er «forelderid__barnid»,
           så det å fjerne en forelder etterlater dokumentet. De er usynlige i
           appen (edgeExists), og dette er eneste vei til dem. -->
      <button class="btn ghost small" id="gen-rydd-kobling">Sjekk koblingsbeskrivelsene for foreldreløse</button>
    </div>
    <div id="gen-liste"></div>
  </div>
</div>

<div class="modal-backdrop" id="modal-genre-edit">
  <div class="modal">
    <div class="modal-head">
      <h2 id="gen-edit-title">Sjanger</h2>
      <button class="modal-close btn ghost small">✕</button>
    </div>
    <div id="gen-edit-body"></div>
    <p id="gen-edit-msg" class="form-msg"></p>
    <div class="modal-foot-right" style="display:flex;gap:8px;justify-content:flex-end">
      <button class="btn ghost small" id="gen-edit-slett">Slett</button>
      <button class="btn primary small" id="gen-edit-lagre">Lagre</button>
    </div>
  </div>
</div>

<div class="modal-backdrop" id="modal-genre-meta">
  <div class="modal">
    <div class="modal-head">
      <h2 id="gen-meta-title">Metasjanger</h2>
      <button class="modal-close btn ghost small">✕</button>
    </div>
    <div id="gen-meta-body"></div>
    <p id="gen-meta-msg" class="form-msg"></p>
    <div class="modal-foot-right" style="display:flex;gap:8px;justify-content:flex-end">
      <button class="btn ghost small" id="gen-meta-slett">Slett</button>
      <button class="btn primary small" id="gen-meta-lagre">Lagre</button>
    </div>
  </div>
</div>

<div class="modal-backdrop" id="modal-genre-tidsrom">
  <div class="modal modal-wide">
    <div class="modal-head">
      <h2>Tidsrom</h2>
      <button class="modal-close btn ghost small">✕</button>
    </div>
    <p class="muted" style="margin:0 0 12px">
      Radene i treet, ovenfra og ned. Et tidsrom varer fra startåret til neste
      tidsrom begynner; la «Til» stå tom i det siste, så varer det til i dag.
      Tidsrommene kan være ulikt lange, men tegnes like høye.
      ${AAR_HJELP} Etiketten er valgfri: tom etikett gir årstallene.
    </p>
    <div id="gen-tidsrom-body"></div>
    <p id="gen-tidsrom-msg" class="form-msg"></p>
    <div class="modal-foot-right" style="display:flex;gap:8px;justify-content:flex-end">
      <button class="btn ghost small" id="gen-tidsrom-ny">Legg til nederst</button>
      <button class="btn primary small" id="gen-tidsrom-lagre">Lagre</button>
    </div>
  </div>
</div>

<div class="modal-backdrop" id="modal-genre-plan">
  <div class="modal">
    <div class="modal-head">
      <h2 id="gen-plan-title">Bekreft endringen</h2>
      <button class="modal-close btn ghost small">✕</button>
    </div>
    <div id="gen-plan-body"></div>
    <div class="modal-foot-right" style="display:flex;gap:8px;justify-content:flex-end">
      <button class="btn ghost small" id="gen-plan-avbryt">Avbryt</button>
      <button class="btn primary small" id="gen-plan-utfor">Utfør</button>
    </div>
  </div>
</div>`;

// ----------------------------------------------------------------------------
//  Lista
// ----------------------------------------------------------------------------
export function openGenreAdmin() {
  renderListe();
  modalOpen($("#modal-genre-admin"));
}

function renderListe() {
  const el = $("#gen-liste");
  if (!el) return;
  const t = tre();
  if (!t?.nodes?.length) {
    el.innerHTML = `<p class="gx-missing">Sjangertreet er ikke lastet inn. Importer Innholdspakka først.</p>`;
    return;
  }
  const metaer = [...(t.metaGenres || [])].sort((a, b) => (a.column ?? 0) - (b.column ?? 0));
  const uten = t.nodes.filter((n) => !n.g);

  // Knappen står ALLTID: en selvskjulende knapp var uoppdagelig i det
  // øyeblikket tellingen (eller en cachet side) tok feil, nettopp fordi
  // tekstene ikke vises noe annet sted i appen. Nå sier etiketten hva den
  // fant, og et klikk når alt er rent svarer «rent» i planen.
  const ryddKobling = $("#gen-rydd-kobling");
  if (ryddKobling) {
    const n = edgeOrphanKeys(t.nodes, state.edgeDescs).length;
    ryddKobling.textContent = n
      ? `Rydd foreldreløse koblingsbeskrivelser (${n})`
      : "Sjekk koblingsbeskrivelsene for foreldreløse";
    ryddKobling.classList.toggle("primary", n > 0);
  }

  let h = "";
  for (const m of metaer) {
    const egne = t.nodes.filter((n) => n.g === m.name).sort((a, b) => a.r - b.r);
    h += `<div class="gen-gruppe">
      <div class="gen-gruppe-head">
        <span class="gen-dot" style="background:${escapeHtml(m.color || FAMILIES[m.fam]?.stroke || "#999")}"></span>
        <strong>${escapeHtml(m.name)}</strong>
        <span class="muted">${egne.length} sjangre</span>
        <button class="btn ghost small gen-meta-rediger" data-meta="${escapeHtml(m.name)}">Rediger</button>
      </div>
      <div class="gen-rader">${egne.map(radHtml).join("") || `<p class="muted">Ingen sjangre ennå.</p>`}</div>
    </div>`;
  }
  if (uten.length) {
    h += `<div class="gen-gruppe">
      <div class="gen-gruppe-head"><span class="gen-dot" style="background:#9bada1"></span>
        <strong>Røtter</strong><span class="muted">${uten.length} noder, uten metasjanger</span></div>
      <div class="gen-rader">${uten.sort((a, b) => a.r - b.r).map(radHtml).join("")}</div>
    </div>`;
  }
  el.innerHTML = h;
}

function radHtml(n) {
  const tiar = tidsromEtikett(n.r) || `rad ${Math.floor(n.r) + 1}`;
  const antall = (state.artists || []).filter((a) =>
    (a.mainGenre || []).some((g) => String(g).toLowerCase() === String(n.l).toLowerCase())).length;
  return `<button class="gen-rad" data-node="${escapeHtml(n.id)}">
    <span class="gen-rad-navn">${escapeHtml(n.l)}</span>
    <span class="muted">${escapeHtml(tiar)}</span>
    <span class="muted">${antall} artist(er)</span>
  </button>`;
}

// ----------------------------------------------------------------------------
//  Skjemaet for én node
// ----------------------------------------------------------------------------
let redigerer = null;         // node-id, eller null for ny

function openNodeEditor(nodeId) {
  const t = tre();
  if (!t) return;
  redigerer = nodeId;
  const n = nodeId ? t.nodes.find((x) => x.id === nodeId) : null;
  $("#gen-edit-title").textContent = n ? n.l : "Ny sjanger";
  $("#gen-edit-msg").textContent = "";
  $("#gen-edit-slett").style.display = n ? "" : "none";

  const andre = t.nodes.filter((x) => x.id !== nodeId).sort((a, b) => a.r - b.r || a.l.localeCompare(b.l, "no"));
  const metaValg = (t.metaGenres || []).map((m) =>
    `<option value="${escapeHtml(m.name)}"${n?.g === m.name ? " selected" : ""}>${escapeHtml(m.name)}</option>`).join("");
  // Radene er tidsrommene (fase 2). En ny rad lages i Tidsrom-skjemaet, ikke
  // her: et tidsrom trenger årstall. En node som står på en rad uten tidsrom,
  // får raden sin i lista likevel, så skjemaet ikke flytter den i stillhet.
  // En ny sjanger foreslås i det siste tidsrommet.
  const valgtRad = Math.floor(n?.r ?? Math.max(0, RAD_ANTALL - 1));
  const radValg = Array.from({ length: Math.max(RAD_ANTALL, 1) }, (_, i) => {
    const rom = TIDSROM[i];
    const tekst = rom ? `${rom.etikett}${rom.navn ? ` (${rom.navn})` : ""}` : `Rad ${i + 1} (uten tidsrom)`;
    return `<option value="${i}"${valgtRad === i ? " selected" : ""}>${escapeHtml(tekst)}</option>`;
  }).join("");
  const famValg = Object.entries(FAMILIES).map(([k, v]) =>
    `<option value="${escapeHtml(k)}"${n?.fam === k ? " selected" : ""}>${escapeHtml(v.label || k)}</option>`).join("");

  const kryss = (felt, valgte) => andre.map((x) => `
    <label class="gen-kryss"><input type="checkbox" data-${felt}="${escapeHtml(x.id)}"${(valgte || []).includes(x.id) ? " checked" : ""}>
      ${escapeHtml(x.l)}</label>`).join("");

  $("#gen-edit-body").innerHTML = `
    <div class="form-grid">
      <label>Etikett (kort navn i kartet)
        <input type="text" id="gen-l" value="${escapeHtml(n?.l || "")}" maxlength="60">
      </label>
      <label>Fullt navn
        <input type="text" id="gen-f" value="${escapeHtml(n?.f || "")}" maxlength="120">
      </label>
      <label>Metasjanger
        <select id="gen-g"><option value="">(rot, ingen metasjanger)</option>${metaValg}</select>
      </label>
      <label>Tidsrom
        <select id="gen-r">${radValg}</select>
      </label>
      <label>Egen farge (unntak)
        <select id="gen-fam"><option value="">(arv fra metasjangeren)</option>${famValg}</select>
      </label>
    </div>
    ${n ? `<p class="muted" style="margin:10px 0 4px">ID: <code>${escapeHtml(n.id)}</code> kan ikke endres. Koblingsbeskrivelsene henger i den.</p>` : ""}
    <p class="muted" style="margin:4px 0">Epoke og lytteforslag redigeres sammen med beskrivelsen, ikke her: treet holder strukturen, beskrivelsen holder innholdet.</p>
    <details style="margin-top:10px"${n ? "" : " open"}>
      <summary>Vokste ut av (foreldre)</summary>
      <div class="gen-kryss-liste">${kryss("p", n?.p)}</div>
    </details>
    <details style="margin-top:8px">
      <summary>Motreaksjon mot</summary>
      <div class="gen-kryss-liste">${kryss("rx", n?.rx)}</div>
    </details>`;
  modalOpen($("#modal-genre-edit"));
}

// Leser skjemaet og bygger den nye noden.
function lesSkjema() {
  const valgte = (felt) => [...document.querySelectorAll(`#gen-edit-body [data-${felt}]`)]
    .filter((i) => i.checked).map((i) => i.dataset[felt]);
  const l = $("#gen-l").value.trim();
  return {
    l,
    f: $("#gen-f").value.trim() || l,
    g: $("#gen-g").value || null,
    // Desimalen (yOffset er en egen nøkkel) beholdes ikke: raden er et heltall.
    r: Number($("#gen-r").value),
    fam: $("#gen-fam").value || undefined,
    p: valgte("p"),
    rx: valgte("rx"),
  };
}

// Lager en id fra etiketten for NYE noder. Bare små bokstaver og tall, så den
// er trygg som del av en edgeDescriptions-nøkkel («fra__til»).
function lagId(l, finnes) {
  const rot = l.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "").slice(0, 24) || "sjanger";
  let id = rot, i = 2;
  while (finnes.has(id)) id = rot + i++;
  return id;
}

async function lagre() {
  const t = tre();
  const msg = $("#gen-edit-msg");
  const felt = lesSkjema();
  if (!felt.l) { msg.textContent = "Etiketten kan ikke være tom."; return; }

  const gammel = redigerer ? t.nodes.find((n) => n.id === redigerer) : null;
  // Slettet i en annen fane mens editoren sto åpen: uten dette falt vi ned i
  // «ny node»-grenen og gjenopprettet sjangeren med en FERSK id — treet fikk
  // en dublett, og alle koblingsbeskrivelsene pekte fortsatt på den gamle.
  if (redigerer && !gammel) {
    msg.textContent = "Sjangeren finnes ikke lenger (slettet i en annen fane?). Lukk og åpne editoren på nytt.";
    return;
  }
  const navnEndret = gammel && gammel.l !== felt.l;

  // 1) Bygg det nye treet med ALT unntatt etiketten (den går via migreringen).
  const nyNode = gammel
    ? { ...gammel, ...felt, l: gammel.l }
    : { id: lagId(felt.l, new Set(t.nodes.map((n) => n.id))), ...felt };
  if (!nyNode.fam) delete nyNode.fam;
  if (!nyNode.rx?.length) delete nyNode.rx;

  const nyttTre = {
    ...t,
    nodes: gammel
      ? t.nodes.map((n) => (n.id === gammel.id ? nyNode : n))
      : [...t.nodes, nyNode],
  };

  const problemer = validateTree(nyttTre).filter((p) => p.nivå === "feil");
  if (problemer.length) {
    msg.textContent = problemer[0].melding;
    return;
  }

  // Foreldre og motreaksjon er klassifisert som TRYGGE endringer og skrives
  // rett. Men edgeDescriptions har «forelderid__barnid» som dokument-ID, så å
  // fjerne en forelder ØDELEGGER en identitet på samme måte som en sletting.
  // Vi kan ikke flytte teksten automatisk (den nye kanten er en annen kobling),
  // så læreren får se hva som blir stående igjen og bekrefte.
  const førKanter = edgeOrphanKeys(t.nodes, state.edgeDescs);
  const etterKanter = edgeOrphanKeys(nyttTre.nodes, state.edgeDescs);
  const nyeForeldrelose = etterKanter.filter((k) => !førKanter.includes(k));
  if (nyeForeldrelose.length) {
    const navn = Object.fromEntries(t.nodes.map((n) => [n.id, n.l]));
    const liste = nyeForeldrelose.map((k) => {
      const [fra, til] = k.split("__");
      const d = (state.edgeDescs?.[k]?.description || "").trim();
      return `  ${navn[fra] || fra} → ${navn[til] || til} (${d.length} tegn)`;
    }).join("\n");
    if (!(await bekreft(
      `Denne endringen fjerner ${nyeForeldrelose.length} kobling(er) fra treet.\n\n` +
      `Koblingsbeskrivelsene blir liggende i basen, men slutter å vises noe sted:\n${liste}\n\n` +
      `Teksten går ikke tapt, og du finner den igjen under «Rydd foreldreløse koblingsbeskrivelser». Fortsette?`,
      { ja: "Fortsett" }
    ))) { msg.textContent = "Avbrutt. Ingenting er lagret."; return; }
  }

  // guardTeacherAction FANGER feilen og returnerer normalt. Sto tre-lagringen,
  // kjørte navnebytte-planen likevel — og den flytter identiteter (beskrivelser,
  // tagger) til et navn treet aldri fikk. Her må vi vite om det gikk.
  let stempel;
  try {
    stempel = await saveGenealogyTree(nyttTre);
  } catch (err) {
    console.error("Kunne ikke lagre sjangertreet:", err);
    msg.textContent = "Treet ble ikke lagret (" + (err?.message || err) + "). Ingenting er endret. Prøv igjen.";
    return;
  }

  // 2) Etiketten sist, som en egen migrering — den flytter identiteter.
  if (navnEndret) {
    const bygg = () => {
      const s = migrasjonsState();
      // Snapshotet brukes først når det beviselig har tatt igjen lagringen
      // over (audit-funn 22): med død content-lytter (typisk tømt lesekvote)
      // sto state.content på versjonen FØR lagringen, ferskhetssjekken i
      // utforPlan bygde planen fra det foreldede treet, og «Utfør» skrev de
      // trygge endringene (tidsrom, farge …) stille tilbake. ISO-strenger
      // sammenlignes leksikografisk, som her er kronologisk.
      const snap = state.content?.genealogy;
      s.tree = (snap?.updatedAt || "") >= stempel ? snap : nyttTre;
      return planGenreRename(s, gammel.l, felt.l);
    };
    const s = migrasjonsState();
    s.tree = nyttTre;
    const plan = planGenreRename(s, gammel.l, felt.l);
    modalClose($("#modal-genre-edit"));
    visPlan(`Endre navn: «${gammel.l}» → «${felt.l}»`, plan, bygg);
    return;
  }

  modalClose($("#modal-genre-edit"));
  renderListe();
}

async function slett() {
  const t = tre();
  const n = t.nodes.find((x) => x.id === redigerer);
  if (!n) return;
  const plan = planGenreDelete(migrasjonsState(), n.l);
  modalClose($("#modal-genre-edit"));
  visPlan(`Slette «${n.l}»`, plan, () => planGenreDelete(migrasjonsState(), n.l));
}

// ----------------------------------------------------------------------------
//  Plan-visningen — læreren ser konsekvensen FØR noe skrives
// ----------------------------------------------------------------------------
// { tittel, plan, bygg } — bygg lager planen PÅ NYTT fra gjeldende state, så
// «Utfør» kan oppdage at grunnlaget endret seg mens dialogen sto åpen (to
// lærer-faner støttes eksplisitt, og planens doc.replace-operasjoner ville
// ellers klemt en samtidig endring stille over).
let ventendePlan = null;

function visPlan(tittel, plan, bygg) {
  ventendePlan = { tittel, plan, bygg };
  $("#gen-plan-title").textContent = tittel;
  const body = $("#gen-plan-body");
  const utfor = $("#gen-plan-utfor");

  if (plan.feil?.length) {
    body.innerHTML = `<p class="gx-missing">Kan ikke gjennomføres:</p><ul>${
      plan.feil.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>`;
    utfor.style.display = "none";
  } else if (plan.blokkeringer?.length) {
    body.innerHTML = `<p class="gx-missing">Dette må ryddes først:</p>` +
      plan.blokkeringer.map((b) => `
        <div class="gen-blokk">
          <p><strong>${escapeHtml(b.hva)}</strong></p>
          <p class="muted">${escapeHtml(b.losning)}</p>
          ${b.detaljer?.length ? `<p class="muted">${escapeHtml(b.detaljer.join(", "))}${b.detaljer.length >= 12 ? " …" : ""}</p>` : ""}
        </div>`).join("");
    utfor.style.display = "none";
  } else if (!planPasserIBatch(plan)) {
    body.innerHTML = `<p class="gx-missing">Endringen krever ${plan.ops.length} skrivinger, mer enn Firestore tar i én atomisk operasjon (500). Del den i mindre steg.</p>`;
    utfor.style.display = "none";
  } else {
    body.innerHTML = `
      <p>Dette skrives i én operasjon: enten alt, eller ingenting.</p>
      <ul>${plan.ops.map((o) => `<li>${escapeHtml(o.hva)}</li>`).join("")}</ul>
      ${plan.advarsler?.length ? `<p class="muted"><strong>Merk:</strong></p><ul class="muted">${
        plan.advarsler.map((a) => `<li>${escapeHtml(a)}</li>`).join("")}</ul>` : ""}`;
    utfor.style.display = "";
  }
  modalOpen($("#modal-genre-plan"));
}

async function utforPlan() {
  if (!ventendePlan?.plan?.ops?.length) return;
  const { tittel, plan, bygg } = ventendePlan;

  // Fersk-sjekk: har grunnlaget endret seg siden planen ble vist (snapshot fra
  // en annen fane eller en student), bygges planen på nytt og vises igjen i
  // stedet for å skrive fra foreldet tilstand. Skriver ingenting nå.
  if (bygg) {
    const fersk = bygg();
    // updatedAt settes til «nå» hver gang en plan bygges, så en rå
    // JSON-sammenligning var ULIK ved hvert eneste kall — advarselen kom alltid,
    // og læreren lærte å klikke forbi den. Strip tidsstemplene før sammenligning.
    // Kanonisk form (audit-funn 23): et snapshot fra serveren kan ha en annen
    // nøkkelrekkefølge enn den appen skrev (46 av 53 noder i den lokale
    // REST-kopien har det), og rå JSON.stringify meldte da «endret» om to
    // semantisk like planer.
    const utenTid = (ops) => kanoniskJson((ops || []).map((o) => {
      if (!o?.data || typeof o.data !== "object") return o;
      const { updatedAt: _t, ...resten } = o.data;
      return { ...o, data: resten };
    }));
    if (utenTid(fersk.ops) !== utenTid(plan.ops)) {
      visPlan(tittel, fersk, bygg);
      const body = $("#gen-plan-body");
      if (body) body.insertAdjacentHTML("afterbegin",
        `<p class="gx-missing">Dataene endret seg mens dialogen sto åpen. Planen er bygget på nytt. Se over og bekreft igjen.</p>`);
      return;
    }
  }

  const knapp = $("#gen-plan-utfor");
  knapp.disabled = true;
  knapp.textContent = "Utfører …";
  try {
    await runMigrationPlan(plan.ops);
  } catch (err) {
    // Planen beholdes og dialogen står: læreren kan prøve «Utfør» igjen i
    // stedet for å bygge hele endringen opp på nytt (nettglipp, utlogget økt).
    console.error(err);
    melding("Endringen ble IKKE skrevet: " + (err?.message || err) + "\nPlanen står, prøv «Utfør» igjen.");
    knapp.disabled = false;
    knapp.textContent = "Utfør";
    return;
  }
  knapp.disabled = false;
  knapp.textContent = "Utfør";
  ventendePlan = null;
  modalClose($("#modal-genre-plan"));
  renderListe();
}

// ----------------------------------------------------------------------------
//  Tidsrommene (radene)
// ----------------------------------------------------------------------------
//  Skjemaet arbeider på en kopi. Hver rad husker hvilken rad den var da
//  skjemaet ble åpnet (`fra`), så lagringen kan flytte nodene når et tidsrom
//  settes inn over dem eller et tomt tidsrom fjernes. Et tidsrom som har
//  epoker, kan ikke fjernes: flytt epokene først.
let tidsromKopi = null;       // [{ fra, til, navn, etikett, opprinnelig }]

const nodeTall = (t, rad) => (t?.nodes || []).filter((n) => Math.floor(Number(n.r) || 0) === rad).length;

function openTidsromEditor() {
  const t = tre();
  if (!t) return;
  const raa = Array.isArray(t.tidsrom) ? t.tidsrom : [];
  tidsromKopi = raa.map((x, i) => ({
    fra: Number.isInteger(x?.fra) ? x.fra : null,
    til: Number.isInteger(x?.til) ? x.til : null,
    navn: String(x?.navn || ""), etikett: String(x?.etikett || ""), opprinnelig: i,
  }));
  if (!tidsromKopi.length) tidsromKopi.push({ fra: null, til: null, navn: "", etikett: "", opprinnelig: null });
  $("#gen-tidsrom-msg").textContent = "";
  tegnTidsrom();
  modalOpen($("#modal-genre-tidsrom"));
}

// Feltene står som tekst (ikke type=number), så «427 f.Kr.» kan skrives som
// det sies; tolkAar leser begge formene.
function tegnTidsrom() {
  const t = tre();
  const felt = (i, navn, v, plass) =>
    `<input type="text" data-tr="${i}" data-felt="${navn}" value="${escapeHtml(v ?? "")}" placeholder="${escapeHtml(plass)}"${navn === "fra" || navn === "til" ? ' inputmode="numeric" class="gen-tr-aar"' : ""}>`;
  const rader = tidsromKopi.map((x, i) => {
    const antall = x.opprinnelig == null ? 0 : nodeTall(t, x.opprinnelig);
    const sist = i === tidsromKopi.length - 1;
    return `<tr>
      <td class="muted">${i + 1}</td>
      <td>${felt(i, "fra", x.fra, i === 0 ? "-800" : String(tidsromKopi[i - 1]?.til ?? ""))}</td>
      <td>${felt(i, "til", x.til, sist ? "i dag" : String(tidsromKopi[i + 1]?.fra ?? ""))}</td>
      <td>${felt(i, "navn", x.navn, "Renessansen")}</td>
      <td>${felt(i, "etikett", x.etikett, visSpenn(x.fra, x.til, { apen: "i dag" }) || "")}</td>
      <td class="muted">${antall ? `${antall} epoke${antall === 1 ? "" : "r"}` : "tomt"}</td>
      <td class="gen-tr-knapper">
        <button type="button" class="btn ghost small" data-tr-inn="${i}" title="Sett inn et nytt tidsrom over dette">Sett inn over</button>
        <button type="button" class="btn ghost small" data-tr-ut="${i}"${antall ? ' disabled title="Flytt epokene til et annet tidsrom først"' : ""}>Fjern</button>
      </td>
    </tr>`;
  }).join("");
  $("#gen-tidsrom-body").innerHTML = `<div class="gen-tr-tabell"><table>
    <thead><tr><th></th><th>Fra</th><th>Til</th><th>Navn</th><th>Etikett</th><th></th><th></th></tr></thead>
    <tbody>${rader}</tbody></table></div>`;
}

// Skjemaets verdier inn i kopien, før en rad settes inn, fjernes eller lagres.
function lesTidsrom() {
  document.querySelectorAll("#gen-tidsrom-body [data-tr]").forEach((inp) => {
    const x = tidsromKopi[Number(inp.dataset.tr)];
    if (!x) return;
    const v = inp.value.trim();
    if (inp.dataset.felt === "fra" || inp.dataset.felt === "til") x[inp.dataset.felt] = v === "" ? null : (tolkAar(v) ?? v);
    else x[inp.dataset.felt] = v;
  });
}

async function lagreTidsrom() {
  const t = tre();
  const msg = $("#gen-tidsrom-msg");
  lesTidsrom();
  const ugyldig = tidsromKopi.findIndex((x) => typeof x.fra === "string" || typeof x.til === "string");
  if (ugyldig >= 0) { msg.textContent = `Tidsrom ${ugyldig + 1}: årstallet kan ikke leses. ${AAR_HJELP}`; return; }
  const tidsrom = tidsromKopi.map((x) => {
    const ut = { fra: x.fra, til: x.til };
    if (x.navn) ut.navn = x.navn;
    if (x.etikett) ut.etikett = x.etikett;
    return ut;
  });
  // Nodene følger tidsrommet sitt: opprinnelig rad → ny rad. Desimalen
  // (mellomrader) beholdes.
  const nyRad = new Map(tidsromKopi.filter((x) => x.opprinnelig != null).map((x, _, __) => [x.opprinnelig, tidsromKopi.indexOf(x)]));
  const nodes = t.nodes.map((n) => {
    const r = Number(n.r) || 0;
    const gammel = Math.floor(r);
    if (!nyRad.has(gammel) || nyRad.get(gammel) === gammel) return n;
    return { ...n, r: nyRad.get(gammel) + (r - gammel) };
  });
  const nyttTre = { ...t, nodes, tidsrom };
  const feil = [...sjekkTidsrom(tidsrom, nodes), ...validateTree(nyttTre)].filter((p) => p.nivå === "feil");
  if (feil.length) { msg.textContent = feil[0].melding; return; }
  try {
    await saveGenealogyTree(nyttTre);
  } catch (err) {
    console.error("Kunne ikke lagre tidsrommene:", err);
    msg.textContent = "Tidsrommene ble ikke lagret (" + (err?.message || err) + "). Ingenting er endret. Prøv igjen.";
    return;
  }
  tidsromKopi = null;
  modalClose($("#modal-genre-tidsrom"));
  renderListe();
}

// ----------------------------------------------------------------------------
//  Metasjanger
// ----------------------------------------------------------------------------
//  Samme skille som for nodene: farge og plassering er TRYGT og skrives rett,
//  mens navnet og slettingen flytter identiteter og går gjennom en plan.
let redigererMeta = null;     // metasjangerens navn, eller null for ny

// Metasjangrene i kartets rekkefølge, venstre mot høyre.
const metaerIKolonne = (t) =>
  [...(t.metaGenres || [])].sort((a, b) => (a.column ?? 0) - (b.column ?? 0));

// «Hvor skal den stå»-nedtrekk. Verdien er indeksen i lista UTEN den som
// redigeres, så splice(plass, 0, …) alltid gir en rekkefølge uten hull eller
// duplikater. Læreren slipper dermed å forholde seg til kolonnetall.
function plasseringValg(andre, valgt) {
  const opt = (v, tekst) => `<option value="${v}"${v === valgt ? " selected" : ""}>${tekst}</option>`;
  return [opt(0, "Først")]
    .concat(andre.map((navn, i) => opt(i + 1, `Etter «${escapeHtml(navn)}»`)))
    .join("");
}

function openMetaEditor(navn) {
  const t = tre();
  if (!t) return;
  const metaer = metaerIKolonne(t);
  const m = navn ? metaer.find((x) => x.name === navn) : null;
  if (navn && !m) return;
  redigererMeta = m ? m.name : null;

  $("#gen-meta-title").textContent = m ? m.name : "Ny metasjanger";
  $("#gen-meta-msg").textContent = "";
  $("#gen-meta-slett").style.display = m ? "" : "none";

  const andreKart = metaer.filter((x) => x !== m).map((x) => x.name);
  const kartPlass = m ? metaer.indexOf(m) : andreKart.length;

  // Den pedagogiske rangeringen (metaOrderHint) er en EGEN akse: kartet har
  // Country ytterst til venstre, mens den afroamerikanske linja står samlet
  // først pedagogisk. Bare denne metasjangeren flyttes i lista — de andre
  // beholder rekkefølgen seg imellom, så et lagre aldri stokker om på noe
  // læreren ikke har rørt.
  const hintNa = t.metaOrderHint || [];
  const hint = hintNa.filter((h) => h !== m?.name);
  const hintPlass = m && hintNa.includes(m.name) ? hintNa.indexOf(m.name) : hint.length;

  const valgtFam = m?.fam || "gray";
  const famValg = Object.entries(FAMILIES).map(([k, v]) =>
    `<option value="${escapeHtml(k)}"${valgtFam === k ? " selected" : ""}>${escapeHtml(v.label || k)}</option>`).join("");

  $("#gen-meta-body").innerHTML = `
    <div class="form-grid">
      <label>Navn
        <input type="text" id="gen-meta-navn" value="${escapeHtml(m?.name || "")}" maxlength="60">
      </label>
      <label>Farge
        <select id="gen-meta-fam">${famValg}</select>
      </label>
      <label>Plassering i kartet
        <select id="gen-meta-kolonne">${plasseringValg(andreKart, kartPlass)}</select>
      </label>
      <label>Pedagogisk rekkefølge
        <select id="gen-meta-hint">${plasseringValg(hint, hintPlass)}</select>
      </label>
    </div>
    <p class="muted" style="margin:10px 0 0">
      Sjangrene i metasjangeren arver fargen, med mindre de har fått sin egen.
      Plasseringen i kartet og den pedagogiske rekkefølgen er to ulike akser:
      tidslinjen og listene leser den siste.
    </p>`;
  modalOpen($("#modal-genre-meta"));
}

async function lagreMeta() {
  const t = tre();
  const msg = $("#gen-meta-msg");
  const navn = $("#gen-meta-navn").value.trim();
  const fam = $("#gen-meta-fam").value;
  const kartPlass = Number($("#gen-meta-kolonne").value);
  const hintPlass = Number($("#gen-meta-hint").value);

  if (!navn) { msg.textContent = "Navnet kan ikke være tomt."; return; }
  // Navnet blir dokument-ID i genreDescriptions, og Firestore forbyr «/».
  if (navn.includes("/")) { msg.textContent = "Navnet kan ikke inneholde «/». Bruk «&»."; return; }

  const metaer = metaerIKolonne(t);
  const gammel = redigererMeta ? metaer.find((x) => x.name === redigererMeta) : null;
  // Omdøpt eller slettet i en annen fane mens editoren sto åpen (audit-funn
  // 20): uten vakten ble duplikatsjekken og navnEndret tomme, og byggMetaTre
  // la inn en NY, tom metasjanger ved siden av den omdøpte. Fargeendringen
  // havnet på spøkelset, og validateTree fant 0 feil. Samme vakt som lagre().
  if (redigererMeta && !gammel) {
    msg.textContent = "Metasjangeren finnes ikke lenger (endret eller slettet i en annen fane?). Lukk og åpne editoren på nytt.";
    return;
  }
  if (metaer.some((x) => x !== gammel && x.name.toLowerCase() === navn.toLowerCase())) {
    msg.textContent = `«${navn}» finnes allerede som metasjanger.`;
    return;
  }
  const navnEndret = gammel && gammel.name !== navn;

  const nyttTre = byggMetaTre(t, { gammel, navn, fam, kartPlass, hintPlass });

  const problemer = validateTree(nyttTre).filter((p) => p.nivå === "feil");
  if (problemer.length) { msg.textContent = problemer[0].melding; return; }

  // Samme grunn som i lagre(): en svelget feil her ville latt navnebytte-planen
  // flytte identiteter til et navn treet aldri fikk.
  let stempel;
  try {
    stempel = await saveGenealogyTree(nyttTre);
  } catch (err) {
    console.error("Kunne ikke lagre sjangertreet:", err);
    msg.textContent = "Treet ble ikke lagret (" + (err?.message || err) + "). Ingenting er endret. Prøv igjen.";
    return;
  }

  if (navnEndret) {
    const bygg = () => {
      const s = migrasjonsState();
      // Samme ferskhetsvalg som i lagre() (audit-funn 22).
      const snap = state.content?.genealogy;
      s.tree = (snap?.updatedAt || "") >= stempel ? snap : nyttTre;
      return planMetaRename(s, gammel.name, navn);
    };
    const s = migrasjonsState();
    s.tree = nyttTre;
    modalClose($("#modal-genre-meta"));
    visPlan(`Endre metasjanger: «${gammel.name}» → «${navn}»`, planMetaRename(s, gammel.name, navn), bygg);
    return;
  }
  modalClose($("#modal-genre-meta"));
  renderListe();
}

function slettMeta() {
  if (!redigererMeta) return;
  const navn = redigererMeta;
  modalClose($("#modal-genre-meta"));
  visPlan(`Slette metasjangeren «${navn}»`, planMetaDelete(migrasjonsState(), navn),
    () => planMetaDelete(migrasjonsState(), navn));
}

// ----------------------------------------------------------------------------
//  Oppkobling (kalles én gang ved oppstart)
// ----------------------------------------------------------------------------
export function setupGenreAdmin() {
  $("#gen-ny-sjanger")?.addEventListener("click", () => openNodeEditor(null));
  $("#gen-ny-meta")?.addEventListener("click", () => openMetaEditor(null));
  $("#gen-tidsrom")?.addEventListener("click", () => openTidsromEditor());
  $("#gen-tidsrom-lagre")?.addEventListener("click", () => lagreTidsrom());
  $("#gen-tidsrom-ny")?.addEventListener("click", () => {
    lesTidsrom();
    const forrige = tidsromKopi[tidsromKopi.length - 1];
    // Det forrige siste tidsrommet varte til i dag; nå slutter det der det nye begynner.
    tidsromKopi.push({ fra: Number.isInteger(forrige?.til) ? forrige.til : null, til: null, navn: "", etikett: "", opprinnelig: null });
    tegnTidsrom();
  });
  // Delegert: tabellen bygges på nytt ved hver innsetting og fjerning.
  $("#gen-tidsrom-body")?.addEventListener("click", (e) => {
    const inn = e.target.closest("[data-tr-inn]");
    const ut = e.target.closest("[data-tr-ut]");
    if (!inn && !ut) return;
    lesTidsrom();
    if (inn) {
      const i = Number(inn.dataset.trInn);
      const neste = tidsromKopi[i];
      tidsromKopi.splice(i, 0, { fra: null, til: Number.isInteger(neste?.fra) ? neste.fra : null, navn: "", etikett: "", opprinnelig: null });
    } else {
      tidsromKopi.splice(Number(ut.dataset.trUt), 1);
    }
    tegnTidsrom();
  });
  $("#gen-rydd-kobling")?.addEventListener("click", () =>
    visPlan("Rydd foreldreløse koblingsbeskrivelser", planEdgeCleanup(migrasjonsState()),
      () => planEdgeCleanup(migrasjonsState())));
  $("#gen-edit-lagre")?.addEventListener("click", () => lagre());
  $("#gen-edit-slett")?.addEventListener("click", () => slett());
  $("#gen-meta-lagre")?.addEventListener("click", () => lagreMeta());
  $("#gen-meta-slett")?.addEventListener("click", () => slettMeta());
  $("#gen-plan-utfor")?.addEventListener("click", utforPlan);
  $("#gen-plan-avbryt")?.addEventListener("click", () => { ventendePlan = null; modalClose($("#modal-genre-plan")); });

  // Delegert: lista bygges på nytt ved hver endring.
  $("#gen-liste")?.addEventListener("click", (e) => {
    const rad = e.target.closest("[data-node]");
    if (rad) { openNodeEditor(rad.dataset.node); return; }
    const meta = e.target.closest("[data-meta]");
    if (meta) openMetaEditor(meta.dataset.meta);
  });
}

// Kalles når treet endres utenfra (snapshot), så en åpen liste er fersk.
export function refreshGenreAdmin() {
  if ($("#modal-genre-admin")?.classList.contains("open")) renderListe();
}

