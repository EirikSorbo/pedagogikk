#!/usr/bin/env python3
"""Lager logoen (img/logo.svg) og PNG-ikonene (img/apple-touch-icon.png, icon-192.png,
icon-512.png) fra studenthatten, så de alltid er samme tegning.

Studenthatten erstattet tempelet 2026-11-06 (Eiriks bilde, 512 x 512). Tegningen er
lagt over bildet i det samme 512-rommet og treffer 99,5 % av pikslene: et brett med
dusk, en hvit spalte mot kroppen, og kroppen med buet bunn. Endre figuren her, ikke i
logo.svg, og kjør:  python3 tools/lag-ikoner.py
Kjør deretter ./bump.sh, så sidene henter den nye logoen (?v= på <use>).

Ikonene får hvit bunn og mørk tegning, med luft rundt (appikoner er ikke gjennomsiktige).
"""
import math
import os
from PIL import Image, ImageDraw

ROT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FARGE = (17, 17, 17, 255)

# Rammen rundt tegningen (viewBox). Sidene bruker de samme tallene i <svg>-taggen
# rundt <use>, og .brand-icon i stilarket har samme forhold (aspect-ratio 440 / 260).
VX, VY, VB, VH = 36, 116, 440, 260

# Segmenter: ("M", x, y), ("L", x, y), ("Q", kx, ky, x, y) og
# ("A", rx, ry, x, y), en halv ellipse nedover til et punkt med samme y.
BRETT = [
    ("M", 256, 122.3), ("L", 471, 202.6),     # topp og høyre spiss
    ("L", 430.4, 218.8),                      # nedre høyre kant, fram til hakket
    ("Q", 427.2, 213.8, 421, 215.7),          # der den hvite spalten slutter
    ("L", 256, 276.8),                        # spalten mot midten
    ("L", 88, 214.6),                         # og opp til dusken
    ("L", 88, 314.4), ("A", 11, 11, 66, 314.4),  # dusken med rund ende
    ("L", 66, 212.9), ("L", 41, 202.6), ("Z",),  # venstre spiss
]
KROPP = [
    ("M", 128, 252.1), ("L", 256, 303.3), ("L", 384, 252.1),
    ("L", 384, 330.5), ("A", 128, 40, 128, 330.5), ("Z",),
]
FIGURER = [BRETT, KROPP]


def punkter(fig, n=64):
    """Segmentene som polygon, med kurvene og buene delt opp (for PIL)."""
    ut, cur = [], None
    for s in fig:
        if s[0] in "ML":
            cur = (s[1], s[2])
            ut.append(cur)
        elif s[0] == "Q":
            (x0, y0), (kx, ky), (x1, y1) = cur, (s[1], s[2]), (s[3], s[4])
            for i in range(1, n + 1):
                t = i / n
                ut.append(((1 - t) ** 2 * x0 + 2 * (1 - t) * t * kx + t * t * x1,
                           (1 - t) ** 2 * y0 + 2 * (1 - t) * t * ky + t * t * y1))
            cur = (x1, y1)
        elif s[0] == "A":
            ry, (x0, y0), x1 = s[2], cur, s[3]
            mx = (x0 + x1) / 2
            for i in range(1, n + 1):
                v = math.pi * i / n
                ut.append((mx + (x0 - mx) * math.cos(v), y0 + ry * math.sin(v)))
            cur = (x1, s[4])
    return ut


def svg_d(fig):
    tall = lambda v: f"{v:.1f}".rstrip("0").rstrip(".")
    d = []
    for s in fig:
        if s[0] in "ML":
            d.append(f"{s[0]}{tall(s[1])} {tall(s[2])}")
        elif s[0] == "Q":
            d.append("Q" + " ".join(tall(v) for v in s[1:]))
        elif s[0] == "A":
            d.append(f"A{tall(s[1])} {tall(s[2])} 0 0 1 {tall(s[3])} {tall(s[4])}")
        else:
            d.append("Z")
    return "".join(d)


SVG = """<svg xmlns="http://www.w3.org/2000/svg" width="{VB}" height="{VH}" viewBox="{VX} {VY} {VB} {VH}" role="img" aria-labelledby="title desc">
<!-- Studenthatten (2026-11-06). Lages av tools/lag-ikoner.py, ikke rediger her. Én farge, currentColor.
     Sidene tegner den med <svg><use href="img/logo.svg#logo">, og fargen følger teksten rundt (.brand-icon i stilarket).
     Som bilde (fanen) gjelder stilen under: mørk tegning, lys i mørk modus. -->
<style>:root{{color:#111}}@media (prefers-color-scheme:dark){{:root{{color:#f2f2f2}}}}</style>
<title id="title">Studenthatt</title>
<desc id="desc">En studenthatt med firkantet brett og dusk.</desc>
<g id="logo" fill="currentColor">
  <path d="{BRETT}"/>
  <path d="{KROPP}"/>
</g>
</svg>
"""


def lag_svg():
    tekst = SVG.format(VX=VX, VY=VY, VB=VB, VH=VH, BRETT=svg_d(BRETT), KROPP=svg_d(KROPP))
    with open(os.path.join(ROT, "img", "logo.svg"), "w", encoding="utf8") as f:
        f.write(tekst)


def lag_png(px, fil, luft=0.14):
    S = 4
    stor = px * S
    bilde = Image.new("RGBA", (stor, stor), (255, 255, 255, 255))
    # tegningen (viewBox-rammen) skaleres så den fyller (1 - 2*luft) av bredden, sentrert
    k = stor * (1 - 2 * luft) / VB
    ox, oy = (stor - VB * k) / 2 - VX * k, (stor - VH * k) / 2 - VY * k
    d = ImageDraw.Draw(bilde)
    for fig in FIGURER:
        d.polygon([(x * k + ox, y * k + oy) for x, y in punkter(fig)], fill=FARGE)
    bilde.convert("RGB").resize((px, px), Image.LANCZOS).save(os.path.join(ROT, "img", fil), optimize=True)


lag_svg()
lag_png(180, "apple-touch-icon.png")
lag_png(192, "icon-192.png")
lag_png(512, "icon-512.png")
print("Skrev logo.svg, apple-touch-icon.png, icon-192.png og icon-512.png")
