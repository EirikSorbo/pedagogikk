# Oppskrift: kartet (arvet fra musikkappen, ikke i bruk)

Musikkappen hadde et kart, «Musikkens geografi», som ble fjernet i **v4.39** da Referanser-kortet
tok plassen i «Det store bildet». Pedagogikkappen har det ikke, og det er ikke planlagt (PLAN.md
nevner det ikke). Denne fila er en huskelapp for den dagen noen vil ha et kart.

Ingenting i dataene er rørt: feltet `geography` står som før på hvert teoretikerkort (heter
«Virkested» i skjemaet). Siste versjon med kartet i drift: **v4.38**, commit `c02ecb6`. Historikken
fra musikkappen er med i dette repoet, så commiten finnes her:

```bash
git show c02ecb6:js/explore-kart.js  > js/explore-kart.js
git show c02ecb6:js/geo-map-data.js  > js/geo-map-data.js
git show c02ecb6:js/geo-places.js    > js/geo-places.js
git show c02ecb6:tests/unit/geo-places.test.js > tests/unit/geo-places.test.js
```

## Hva det var

Én modal med et Nord-Amerika-kart, en prikk per sted der artistene virket (arealet vokste med
antallet), en tiårsstripe som filtrerte utvalget, og chips over kartet for steder utenfor utsnittet.

## Hva som måtte gjøres om for pedagogikk

Koden lar seg ikke gjenbruke uten arbeid. Det som er musikkspesifikt:

- **Utsnittet.** Omrisset (`geo-map-data.js`, ~68 KB maskingenerert path-data fra Natural Earth 50m)
  er klippet til Nord-Amerika. Pedagogikkens steder ligger i Europa og USA: Athen, Roma, Wittenberg,
  Zürich, Königsberg, Berlin, Wien, Chicago, Oslo. Utsnittet må regenereres med samme projeksjon
  (Web Mercator), og `projectPoint(lat, lng)` må speile det nye klippet, så prikkene treffer landet.
  Path-ene skal ikke håndredigeres.
- **Stedstabellen** (`geo-places.js`) kobler `geography`-teksten til koordinater, og er full av
  amerikanske byer. Den må skrives på nytt for pedagogenes virkesteder.
- **Tidsfilteret.** Kartet filtrerte på tiår (`decadesForArtist` og `renderDecadeRibbon` med
  «Alle»-prikken). Tiårene er borte (fase 2). Filteret må bygges på tidsrommene
  (`js/felles/tidsakse.js`).
- **Innkoblingen:** modal-markup i `js/utforsk/explore-modals.js`, et hub-kort i Det store bildet,
  `openKart` i `js/utforsk/explore.js`, og en tidsromstripe i `js/ui/ui-timeline.js`.
  Bump `VERSION` og kjør `./bump.sh` til slutt.

Skal kartet bygges, er det trolig raskere å skrive det på nytt mot tidsaksen enn å gjenopplive
versjonen fra v4.38.
