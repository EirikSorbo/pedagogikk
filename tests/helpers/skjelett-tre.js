// ============================================================================
//  TESTHJELPER — pedagogikkens tre bygd fra kilden i tools/
// ----------------------------------------------------------------------------
//  «json files/» er utenfor git (.gitignore), så testene kan ikke lese
//  json files/pedagogikk-skjelett.json på GitHub. Her bygges det samme treet
//  fra tools/pedagogikk-skjelett.js, med samme form som
//  tools/lag-pedagogikk-skjelett.js skriver. Finnes JSON-fila lokalt, kan en
//  test sammenligne de to (skjelettFil()).
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { FAMILIES, RETNINGER, TIDSROM, EPOKER } from "../../tools/pedagogikk-skjelett.js";

const ROT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const node = (e) => {
  const ut = { id: e.id, l: e.l, f: e.f, g: e.g, r: e.r, p: e.p || [] };
  if (e.yOffset) ut.yOffset = e.yOffset;
  if (e.rx?.length) ut.rx = e.rx;
  return ut;
};

const tidsrom = (t) => {
  const ut = { fra: t.fra, til: t.til ?? null };
  if (t.etikett) ut.etikett = t.etikett;
  if (t.navn) ut.navn = t.navn;
  return ut;
};

export function skjelettTre() {
  return {
    version: 2,
    nodes: EPOKER.map(node),
    tidsrom: TIDSROM.map(tidsrom),
    families: FAMILIES,
    metaOrderHint: RETNINGER.map((r) => r.navn),
    metaGenres: RETNINGER.map((r) => ({ name: r.navn, column: r.kolonne, fam: r.fam, color: FAMILIES[r.fam].stroke })),
  };
}

// Den genererte fila, eller null når den ikke finnes (som på GitHub).
export function skjelettFil() {
  const fil = path.join(ROT, "json files", "pedagogikk-skjelett.json");
  return fs.existsSync(fil) ? JSON.parse(fs.readFileSync(fil, "utf8")) : null;
}
