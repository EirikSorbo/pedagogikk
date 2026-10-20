// ============================================================================
//  KILDEHJELPERE FOR INNHOLDSFILENE (fase 6)
// ----------------------------------------------------------------------------
//  Samme form på alle kilder (JSON-OPPSKRIFT.md, «kilder[]»): nettkilder har
//  publikasjonen som tekst og artikkelen i lenken, bøker har hele referansen.
//  Alle lenker er sjekket på nettet før de ble skrevet inn (fase 6, PLAN.md).
//  Fila ligger utenfor rundemappene, så tools/bygg-innholdsfil.js ikke leser
//  den som en del.
// ============================================================================
const nett = (text) => (url, forfatter) => ({ text, ...(forfatter ? { forfatter } : {}), url, kategori: "Nettsteder" });

export const snl = nett("Store norske leksikon.");
export const nbl = nett("Norsk biografisk leksikon.");
export const sep = nett("Stanford Encyclopedia of Philosophy.");
export const iep = nett("Internet Encyclopedia of Philosophy.");
export const brit = nett("Encyclopædia Britannica.");
export const ndb = nett("Deutsche Biographie.");
export const lex = nett("Lex (Den Store Danske).");
export const side = (text, url) => ({ text, url, kategori: "Nettsteder" });
export const bok = (text) => ({ text, kategori: "Bøker" });
