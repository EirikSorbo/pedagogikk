#!/usr/bin/env python3
"""Lager PNG-ikonene (img/apple-touch-icon.png, icon-192.png, icon-512.png) fra tempellogoen.

Tegningen er den samme som i img/logo.svg (128-enhetsrommet), tegnet med PIL med 4x
oppsampling. Kjør:  python3 tools/lag-ikoner.py
Ikonene får hvit bunn og mørk strek, med luft rundt (appikoner er ikke gjennomsiktige).
"""
from PIL import Image, ImageDraw
import os

ROT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FARGE = (17, 17, 17, 255)
# Tegningens ramme i logo.svg: viewBox 12 18 104 86.
VX, VY, VB, VH = 12, 18, 104, 86

def linje(d, s, p0, p1, bredde, rund=True):
    (x0, y0), (x1, y1) = p0, p1
    d.line([(x0 * s, y0 * s), (x1 * s, y1 * s)], fill=FARGE, width=round(bredde * s))
    if rund:
        r = bredde * s / 2
        for x, y in (p0, p1):
            d.ellipse([x * s - r, y * s - r, x * s + r, y * s + r], fill=FARGE)

def tegn(d, s):
    # fronton: tykk polylinje med runde skjøter
    bredde = 6.5
    for a, b in (((27, 44.5), (64, 23)), ((64, 23), (101, 44.5))):
        linje(d, s, a, b, bredde)
    d.rectangle([25 * s, 43 * s, 103 * s, 52 * s], fill=FARGE)
    linje(d, s, (18, 49.5), (110, 49.5), 6)
    linje(d, s, (31, 58), (97, 58), 5)
    for x in (38, 56, 72, 90):
        d.rectangle([(x - 3.25) * s, 60 * s, (x + 3.25) * s, 91 * s], fill=FARGE)
    linje(d, s, (31.7, 91.5), (96.5, 91.5), 4.5)
    linje(d, s, (28.3, 98), (99.8, 98), 5.5)

def lag(px, fil, luft=0.16):
    S = 4
    stor = px * S
    bilde = Image.new("RGBA", (stor, stor), (255, 255, 255, 255))
    # logoen skaleres så den fyller (1 - 2*luft) av bredden, sentrert
    k = stor * (1 - 2 * luft) / VB
    lag_ = Image.new("RGBA", (round(VB * k), round(VH * k)), (255, 255, 255, 0))
    tegn(ImageDraw.Draw(lag_), k)  # tegnes i 128-rommet, så flytt origo til (VX, VY)
    # tegn() bruker absolutte koordinater; tegn på et større lerret og beskjær
    full = Image.new("RGBA", (round(128 * k), round(128 * k)), (255, 255, 255, 0))
    tegn(ImageDraw.Draw(full), k)
    utsnitt = full.crop((round(VX * k), round(VY * k), round((VX + VB) * k), round((VY + VH) * k)))
    bilde.alpha_composite(utsnitt, ((stor - utsnitt.width) // 2, (stor - utsnitt.height) // 2))
    bilde.convert("RGB").resize((px, px), Image.LANCZOS).save(os.path.join(ROT, "img", fil), optimize=True)

lag(180, "apple-touch-icon.png")
lag(192, "icon-192.png")
lag(512, "icon-512.png")
print("Skrev apple-touch-icon.png, icon-192.png og icon-512.png")
