// ============================================================================
//  TIDSAKSEN — tidsrommene som akse for tidslinjer, striper og filtre (fase 2)
// ----------------------------------------------------------------------------
//  Radene i slektstreet er TIDSROM av ulik lengde (content/genealogy.tidsrom,
//  se genre-model.js): lange sprang i antikken, korte der det skjer mest.
//  Treet gir hvert tidsrom like stor høyde. Denne modulen gir tidslinjene,
//  artiststripa, filtrene og tellingene den SAMME aksen: hvert tidsrom er like
//  bredt, og innenfor et tidsrom er året lineært. Da står Platon og Dewey på
//  samme akse uten at 2800 år klemmer det 20. århundret til en strek, og
//  tidslinjen leses som treet ved siden av.
//
//  Rene funksjoner med lista som argument, så de kan testes uten treet.
//  Kallerne sender TIDSROM fra genre-model.js, lest ved kall-tid.
//
//  Et tidsrom er { fra, til }: fra er første år, til er første år i NESTE
//  tidsrom (halvåpent, [fra, til)), og til = null betyr «til i dag». Et år på
//  grensen hører altså til det senere tidsrommet: 1520 er i «1520–1600».
// ============================================================================

// Start og slutt for hvert tidsrom. Et hull i dataene (fra eller til mangler)
// tettes med nabogrensa, så aksen aldri får NaN; editoren og valideringen
// sier fra om hullet. Siste tidsrom uten til slutter i år `naa`. Tom liste
// når ingen tidsrom har et startår: da finnes det ingen akse.
export function tidsromGrenser(liste, naa = new Date().getFullYear()) {
  const rom = Array.isArray(liste) ? liste : [];
  if (!rom.some((t) => Number.isInteger(t?.fra))) return [];
  const n = rom.length;
  const ut = [];
  for (let i = 0; i < n; i++) {
    const t = rom[i] || {};
    const nesteFra = rom[i + 1]?.fra;
    let start = Number.isInteger(t.fra) ? t.fra : (i > 0 ? ut[i - 1].slutt : null);
    let slutt = Number.isInteger(t.til) ? t.til
      : Number.isInteger(nesteFra) ? nesteFra
        : null;
    const apen = !Number.isInteger(t.til) && i === n - 1;
    if (start == null) start = (slutt ?? naa) - 1;
    if (slutt == null) slutt = apen ? Math.max(naa, start + 1) : start + 1;
    if (slutt <= start) slutt = start + 1;
    ut.push({ start, slutt, apen });
  }
  return ut;
}

// Tidsrommet et år hører til, eller -1 (før det første, eller etter et
// lukket siste). Siste tidsrom uten sluttår tar imot alle senere år.
export function tidsromIndeks(liste, aar, naa) {
  const g = tidsromGrenser(liste, naa);
  if (!Number.isFinite(aar)) return -1;
  for (let i = 0; i < g.length; i++) {
    if (aar >= g[i].start && (aar < g[i].slutt || (g[i].apen && i === g.length - 1))) return i;
  }
  return -1;
}

// Tidsrommene et spenn av HELE år berører: fra og til er begge med, så en
// periode som slutter i 1520 berører også tidsrommet som begynner i 1520
// (samme regel som tiårene hadde: 1955–1960 telte i 1960-tallet).
export function tidsromForSpenn(liste, fra, til, naa) {
  const g = tidsromGrenser(liste, naa);
  if (!Number.isFinite(fra)) return [];
  const slutt = Number.isFinite(til) ? Math.max(til, fra) : fra;
  const ut = [];
  g.forEach((r, i) => {
    const romSlutt = r.apen && i === g.length - 1 ? Infinity : r.slutt;
    if (fra < romSlutt && slutt >= r.start) ut.push(i);
  });
  return ut;
}

// Plassen til et år på aksen, fra 0 (venstre) til 1 (høyre). Hvert tidsrom
// er 1/n bredt, og året deler sitt tidsrom lineært. År før aksen gir 0, år
// etter gir 1. null når det ikke finnes noen akse (treet mangler tidsrom).
export function aksePos(liste, aar, naa) {
  const g = tidsromGrenser(liste, naa);
  if (!g.length || !Number.isFinite(aar)) return null;
  const n = g.length;
  if (aar <= g[0].start) return 0;
  for (let i = 0; i < n; i++) {
    const { start, slutt } = g[i];
    if (aar < slutt || i === n - 1) {
      const andel = Math.min(1, Math.max(0, (aar - start) / (slutt - start)));
      return (i + andel) / n;
    }
  }
  return 1;
}

// Er året utenfor aksen? Brukes til å tegne en avkuttet ende flat.
export function forAksen(liste, aar, naa) {
  const g = tidsromGrenser(liste, naa);
  return g.length > 0 && Number.isFinite(aar) && aar < g[0].start;
}
export function etterAksen(liste, aar, naa) {
  const g = tidsromGrenser(liste, naa);
  return g.length > 0 && Number.isFinite(aar) && aar > g[g.length - 1].slutt;
}
