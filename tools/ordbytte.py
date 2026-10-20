#!/usr/bin/env python3
"""Fase 4: bytter musikkord med pedagogikkord i SYNLIG tekst i HTML-sider (tekst mellom tagger og title, placeholder, aria-label, alt).
Rører aldri id, class, data-attributter, skript eller stil. Kjør: python3 -I tools/ordbytte.py side.html ...
Ordtabellen følger PLAN.md (artist→teoretiker, sjanger→epoke, metasjanger→retning, undersjanger→prinsipp, innovasjon→reform, instrument→fagbakgrunn)."""
import re, sys
MAP = [
 ("metasjangrene","retningene"),("metasjangre","retninger"),("metasjangeren","retningen"),("metasjanger","retning"),
 ("undersjangrene","prinsippene"),("undersjangre","prinsipper"),("undersjangeren","prinsippet"),("undersjanger","prinsipp"),
 ("sjangrene","epokene"),("sjangre","epoker"),("sjangeren","epoken"),("sjanger","epoke"),
 ("artistene","teoretikerne"),("artisten","teoretikeren"),("artister","teoretikere"),("artist","teoretiker"),
 ("innovasjonene","reformene"),("innovasjoner","reformer"),("innovasjonen","reformen"),("innovasjon","reform"),
 ("instrumentene","fagbakgrunnene"),("instrumenter","fagbakgrunner"),("instrumentet","fagbakgrunnen"),("instrument","fagbakgrunn"),
]
RE = re.compile(r"(?<![\wæøåÆØÅ-])(" + "|".join(a for a, _ in MAP) + ")", re.I)
D = dict(MAP)
def byt(tekst):
    def f(m):
        o = m.group(1); n = D[o.lower()]
        if o.isupper() and len(o) > 1: return n.upper()
        return n[0].upper() + n[1:] if o[0].isupper() else n
    return RE.sub(f, tekst)
ATTR = re.compile(r'(\b(?:title|placeholder|aria-label|alt)=")([^"]*)(")')
TOK = re.compile(r"(<script[\s\S]*?</script>|<style[\s\S]*?</style>|<!--[\s\S]*?-->|<[^>]+>)")
def html(s):
    ut = []
    for t in TOK.split(s):
        if t.startswith("<script") or t.startswith("<style") or t.startswith("<!--"): ut.append(t)
        elif t.startswith("<"): ut.append(ATTR.sub(lambda m: m.group(1) + byt(m.group(2)) + m.group(3), t))
        else: ut.append(byt(t))
    return "".join(ut)
if __name__ == "__main__":
    for f in sys.argv[1:]:
        s = open(f, encoding="utf8").read(); n = html(s)
        if n != s: open(f, "w", encoding="utf8").write(n); print("endret", f)
