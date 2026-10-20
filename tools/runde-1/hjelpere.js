// ============================================================================
//  HJELPERE FOR INNHOLDSFILENE I RUNDE 1 (fase 6)
// ----------------------------------------------------------------------------
//  Kildene skrives én gang her, i formen JSON-OPPSKRIFT.md beskriver: `text` er
//  publikasjonen, lenken bærer artikkelen. Hver lenke sjekkes med
//  `node tools/lag-runde-1.js --lenker` før fila leveres.
// ============================================================================

const nett = (text, url) => ({ text, url, kategori: "Nettsteder" });

export const snl = (slug) => nett("Store norske leksikon.", `https://snl.no/${slug}`);
export const nbl = (slug) => nett("Norsk biografisk leksikon.", `https://nbl.snl.no/${slug}`);
export const sep = (slug) => nett("Stanford Encyclopedia of Philosophy.", `https://plato.stanford.edu/entries/${slug}/`);
export const iep = (slug) => nett("Internet Encyclopedia of Philosophy.", `https://iep.utm.edu/${slug}/`);
export const lex = (slug) => nett("Den Store Danske.", `https://lex.dk/${slug}`);
export const treccani = (slug) => nett("Enciclopedia Treccani.", `https://www.treccani.it/enciclopedia/${slug}/`);
export const lenke = (text, url) => nett(text, url);

// En bok eller en artikkel uten lenke. `tittel` er verket, med forlag.
export const bok = (forfatter, tittel, year) => ({ text: tittel, forfatter, year, kategori: "Bøker" });

// Avsnitt skilt av blank linje (markdown-light).
export const avsnitt = (...deler) => deler.join("\n\n");

// Et hovedverk: [tittel, år] eller [tittel].
export const verk = (...par) => par.map(([title, year]) => (year ? { title, year } : { title }));
