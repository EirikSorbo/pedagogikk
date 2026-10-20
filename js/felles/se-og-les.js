// ============================================================================
//  SE OG LES — valgfri liste på et pedagogisk prinsipp (fase 3)
// ----------------------------------------------------------------------------
//  Videoer og tekstutdrag som hører til et prinsipp. Erstatter lytteeksemplene
//  fra musikkappen. Listen bor på sub-nivået i genreDescriptions (prinsippene
//  er undersjangrene), som `seOgLes: [{ tittel, kilde?, url?, tekst? }]`.
//
//  Typen utledes, ikke lagres: har posten `tekst`, er den et utdrag; ellers er
//  den en video (YouTube-lenker åpnes i appens egen spiller, se yt-spiller.js)
//  eller en vanlig lenke til noe man kan lese.
//
//  Utdragene er korte med vilje (SELES_TEKST_MAKS) og skal ha kilde: de er
//  sitater, ikke gjengivelse av verk. Ren modul, uten DOM.
// ============================================================================
import { escapeHtml, safeUrl } from "./util.js";

export const SELES_TEKST_MAKS = 1200;
export const SELES_MAKS = 12;

const streng = (v, maks) => String(v ?? "").trim().slice(0, maks);

// Vasker lista slik den kommer fra Firestore, en import eller skjemaet: bare
// poster med tittel, tomme felter utelates, lenken må være http(s).
export function normaliserSeOgLes(raa) {
  if (!Array.isArray(raa)) return [];
  const ut = [];
  for (const p of raa) {
    if (!p || typeof p !== "object") continue;
    const tittel = streng(p.tittel, 200);
    if (!tittel) continue;
    const post = { tittel };
    const kilde = streng(p.kilde, 300);
    const url = safeUrl(streng(p.url, 2000));
    const tekst = streng(p.tekst, SELES_TEKST_MAKS);
    if (kilde) post.kilde = kilde;
    if (url) post.url = url;
    if (tekst) post.tekst = tekst;
    ut.push(post);
    if (ut.length >= SELES_MAKS) break;
  }
  return ut;
}

const erYoutube = (url) => /^https?:\/\/(www\.|m\.)?(youtube\.com|youtu\.be)\//i.test(url || "");

// Lista som HTML. Tom streng når den er tom, så kallerne slipper en tom overskrift.
export function seOgLesHtml(liste) {
  const poster = normaliserSeOgLes(liste);
  if (!poster.length) return "";
  const rader = poster.map((p) => {
    const url = p.url ? escapeHtml(p.url) : "";
    const lenke = !url ? ""
      : erYoutube(p.url) ? `<a class="seles-lenke" href="${url}" target="_blank" rel="noopener">▶ Se video</a>`
        : `<a class="seles-lenke" href="${url}" target="_blank" rel="noopener">${p.tekst ? "Les hele" : "Les"}</a>`;
    return `<li class="seles-rad${p.tekst ? " seles-utdrag" : ""}">
      <p class="seles-tittel">${escapeHtml(p.tittel)}</p>
      ${p.tekst ? `<blockquote class="seles-tekst">${escapeHtml(p.tekst).replace(/\n/g, "<br>")}</blockquote>` : ""}
      ${p.kilde || lenke ? `<p class="seles-kilde">${p.kilde ? escapeHtml(p.kilde) : ""}${p.kilde && lenke ? " · " : ""}${lenke}</p>` : ""}
    </li>`;
  });
  return `<ul class="seles-liste">${rader.join("")}</ul>`;
}
