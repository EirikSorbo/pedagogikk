# Modulkart

Alle filene i `js/`, mappe for mappe. Teksten i hver rad er tittellinjen øverst i fila.
Kartet lages av `tools/modulkart.js` og skal ikke redigeres for hånd: endre innledningen
i fila og kjør `./bump.sh` (eller `node tools/modulkart.js`). Pre-push-kroken og GitHub
stopper et kart som ikke stemmer med filene.

108 filer i 11 mapper.

| Mappe | Innhold | Filer |
|---|---|---|
| `js/` | Sidene og oppsettet | 11 |
| `js/utforsk/` | Utforsk | 15 |
| `js/sjangre/` | Epokene, prinsippene og slektstreet | 13 |
| `js/visning/` | Visning | 15 |
| `js/laerer/` | Lærersiden | 8 |
| `js/forslag/` | Endringsforslag | 3 |
| `js/utskrift/` | Utskrift | 2 |
| `js/ui/` | Byggeklosser for skjermen | 15 |
| `js/data/` | Data | 9 |
| `js/felles/` | Felles hjelpere | 16 |
| `js/vendor/` | Tredjepart | 1 |

## Reglene koden holder seg til

- Navnene i koden er musikkappens (PLAN.md): `artist` er en teoretiker, `sjanger` (`genre`, `mainGenre`) en epoke, `metaGenre` en retning, `subGenre` et prinsipp, `instrument` en fagbakgrunn og `tech` en reform eller milepæl. Bare det brukerne ser, er byttet.
- Bare `data/store.js` snakker med Firestore, og alle sidene leser de delte samlingene gjennom `data/shared-data.js`.
- Importer en funksjon fra fila som definerer den, ikke via en annen modul. `tools/check-imports.js` stopper videresending.
- Ingen filer importerer hverandre i ring. Utforsk-kjernen (`utforsk/explore-context.js`) åpner featurene gjennom `nav`, som `utforsk/explore.js` fyller, i stedet for å importere dem. `tools/check-imports.js` stopper importringer.
- Det `sjangre/genre-model.js` avleder av treet, byttes ut når treet lastes (live bindings), og det samme gjelder `opts` i `data/app-state.js` og `nav` i `utforsk/explore-context.js`. Les dem ved kall-tid, aldri i en konstant på modulnivå.
- Alt pensuminnhold bor i Firestore. `sjangre/genealogy-data.js` er frøet (treet slik det sto i v4.47) og leses bare av `tools/` og `tests/`; `tools/check-imports.js` stopper en import av det i appen.
- Importlinjene står uten `?v=`. Versjonen settes i importkartet i HTML-sidene når `./bump.sh` kjøres.
- Hver fil begynner med en innledning. Tittellinjen i den er det som står i dette kartet.

## `js/` Sidene og oppsettet

Én fil per HTML-side (landing, student, teacher, tre med tre-page, utskrift), sperrene hver side laster først (gate, load-guard), appversjonen og Firebase-oppsettet.

| Fil | Hva den gjør |
|---|---|
| `farge.js` | FARGEROTASJON — dagens aksentfarge, satt før siden tegnes |
| `firebase-config.js` | FIREBASE-KONFIGURASJON |
| `gate.js` | KLASSEPASSORD — enkel sperre foran appen |
| `landing.js` | FORSIDEN (index.html) — Utforsk, dagens artist, artistsøket og stemmene |
| `load-guard.js` | LAST-VAKT — feilmelding når Firebase ikke laster |
| `student.js` | STUDENTSIDEN (student.html) — foreslå en artist, og lever et returnert |
| `teacher.js` | LÆRERSIDEN (teacher.html) — innlogging, oppstart og abonnementer |
| `tre-page.js` | SLEKTSTRESIDEN (tre.html) — oppkoblingen: treet, sjangerkortene og dataene |
| `tre.js` | SLEKTSTRESIDEN (tre.html) — velger rendereren; resten bor i tre-page.js |
| `utskrift.js` | UTSKRIFTSSIDEN (utskrift.html) — panelet, søket og heftet (v5.56) |
| `version.js` | APPVERSJONEN — vises i appen og gir ?v= til filene (cache-busting) |

## `js/utforsk/` Utforsk

Det store bildet, epokene, epokeperiodene, tidslinja, reformene, referansene, søket og ?vis=-ruteren. explore.js kobler dem sammen, og explore-context.js er limet de deler.

| Fil | Hva den gjør |
|---|---|
| `explore-apne.js` | DELT ÅPNER + ?vis=-RUTER (v5.22) |
| `explore-context.js` | DELT KJERNE FOR UTFORSK-MODULENE |
| `explore-innhold.js` | INNHOLDSSIDER, SJANGERHISTORIER, HUB & SJANGERHIMMEL |
| `explore-metaoversikt.js` | METASJANGER-OVERSIKTEN (v5.94) — én side per aktiv metasjanger i visningen |
| `explore-modals.js` | MODAL-MARKUP FOR UTFORSK-SIDENE |
| `explore-referanser.js` | REFERANSER: alle kildene appen bygger på, samlet |
| `explore-search.js` | SØK — visning og ruting |
| `explore-sjanger.js` | SJANGRE OG UNDERSJANGRE |
| `explore-sjangerperioder.js` | SJANGERPERIODER — kortet i «Det store bildet» (v5.20) |
| `explore-tech.js` | TEKNOLOGI — innovasjonskortene (liste og detalj) |
| `explore-tidslinje.js` | TIDSLINJE: når var artistene aktive? |
| `explore-timer.js` | FRA TIMENE (v6.10, strukturgjennomgangen U1) |
| `explore-visningssider.js` | VISNING — SPESIALSIDENE FOR VISNINGSMODUS (v5.96) |
| `explore.js` | UTFORSK — ORKESTRATOR |
| `metaoversikt-modell.js` | METASJANGER-OVERSIKTEN — ren modell (v5.94) |

## `js/sjangre/` Epokene, prinsippene og slektstreet

Epokemodellen (treet bor i Firestore, og alt annet avledes av det), beskrivelsene, epokekortet, prinsippene, slektstreet, epokehimmelen og migreringen når en epoke eller et prinsipp bytter navn. Mappen heter fortsatt sjangre (musikkappens navn).

| Fil | Hva den gjør |
|---|---|
| `constellation.js` | SJANGERHIMMELEN — stjernekart i slektstreets rekkefølge. |
| `genealogy-bundled.js` | SLEKTSTRE — BUNDLEDE BÅND |
| `genealogy-data.js` | SLEKTSTRE — RÅDATA (frøet) |
| `genealogy.js` | SJANGER- OG KOBLINGSKORTENE |
| `genre-descriptions.js` | SJANGERBESKRIVELSER — oppslag per nivå (INGEN innebygde defaults) |
| `genre-layout.js` | SJANGERTREETS LAYOUT — kolonnene regnes ut, ikke plasseres for hånd |
| `genre-migrate.js` | MIGRERING AV SJANGERTREET — planlegging, ikke skriving |
| `genre-model.js` | SJANGERMODELLEN — treets form, avledet ett sted |
| `genre-periods.js` | SJANGERPERIODER — ren datalogikk for «Sjangerperioder» i «Det store bildet» |
| `genre-picker.js` | SJANGERVELGER — nedtrekk + brikker (flervalg fra slektstreet) |
| `genre-validate.js` | VALIDERING AV SJANGERTREET |
| `gx-camera.js` | KARTKAMERA — panorering, zoom og pinch for slektstre-flatene |
| `prinsipp.js` | PEDAGOGISKE PRINSIPPER — «Hos hvem og når» (fase 3) |

## `js/visning/` Visning

Presentasjonsvisningen på lerretet, kjøreplanene og Visning-vinduet bak presentasjonsikonet.

| Fil | Hva den gjør |
|---|---|
| `lerret.js` | LERRET PÅ ANNEN SKJERM (v6.50, brukerbestilling 2026-10-07) |
| `paminnelser.js` | PÅMINNELSER I VISNINGEN (v6.70, brukerbestilling 2026-10-11) |
| `plan-innsamling.js` | SAMLEØKT — to måter å bygge en kjøreplan mens man bruker appen (v5.27) |
| `plan-meny.js` | «LEGG TIL I KJØREPLAN»-MENYEN OG DEN AKTIVE KJØREPLANEN |
| `pres-artist.js` | ARTISTKORTETS LERRET (v5.40) — oppsettet i presentasjonsvisningen |
| `pres-notater.js` | PRIVATE NOTATER I VISNINGEN (v6.50, brukerbestilling 2026-10-07) |
| `pres-sjanger.js` | SJANGERKORTETS LERRET (v5.89) — oppsettet i presentasjonsvisningen |
| `presentasjon-modell.js` | PRESENTASJONSVISNING — ren modell (v5.24) |
| `presentasjon.js` | PRESENTASJONSVISNING — browser-delen (v5.24) |
| `slide-kort.js` | SLIDEKORTET — åpner en slide i visningen (v7.06) |
| `slides-liste.js` | SLIDE-LISTA — det som er lest, uten Firebase (v7.06) |
| `slides-modell.js` | SLIDES — lærerens egne sider i visningen, utenfor pensum (v7.06) |
| `slides.js` | SLIDES — kjøring: abonnement og lagring (v7.06) |
| `stopp-etikett.js` | STOPP-ETIKETT — menneskelig navn på et kjøreplan-stopp (v5.75) |
| `visning.js` | VISNING — vinduet bak presentasjonsikonet (v5.41) |

## `js/laerer/` Lærersiden

Skrivebordet, teoretikerne, innholdsredigeringen, epoketre-editoren, gjennomgangen av endringsforslag og import/eksport.

| Fil | Hva den gjør |
|---|---|
| `teacher-artists.js` | LÆRER — ARTISTER |
| `teacher-content.js` | LÆRER — INNHOLDSREDIGERING |
| `teacher-desk.js` | LÆRER — SKRIVEBORD (arbeidsflyt øverst på lærersiden) |
| `teacher-genres.js` | LÆRER — SJANGERTRE-EDITOR |
| `teacher-import.js` | LÆRER — IMPORT / EKSPORT / FLETTING |
| `teacher-review.js` | LÆRER — ENDRINGSFORSLAG (review/diff) |
| `teacher-slides.js` | SLIDES PÅ SKRIVEBORDET — lag, rediger og slett (v7.06) |
| `teacher-state.js` | LÆRER — DELT KJERNE |

## `js/forslag/` Endringsforslag

Studentenes forslag til endringer på kortene, og hvilke felter som kan foreslås.

| Fil | Hva den gjør |
|---|---|
| `entity-values.js` | DELTE ENTITETSVERDIER — «hva står det nå?» for et endringsforslag |
| `proposal-fields.js` | FORESLÅBARE FELTER — hviteliste per entityType |
| `proposals.js` | ENDRINGSFORSLAG (studentside) |

## `js/utskrift/` Utskrift

Utvalget til heftet og heftets oppbygning. Selve siden er js/utskrift.js.

| Fil | Hva den gjør |
|---|---|
| `utskrift-modell.js` | UTSKRIFT — ren modell (v5.56) |
| `utskrift-utvalg.js` | UTSKRIFT — utvalget i nettleseren (v5.56) |

## `js/ui/` Byggeklosser for skjermen

Teoretikerkortene og listene, modalene og meldingsboksene, tidslinjene, reformkortene, oversikten på lærersiden, skjemadelene og videospilleren.

| Fil | Hva den gjør |
|---|---|
| `artist-skjema.js` | ARTISTSKJEMAET I FEM STEG — ett skjema overalt (v6.96) |
| `artist-strip.js` | ARTIST-STRIPE — artistens aktive periode som en liten tidslinje på kortet |
| `format-bar.js` | FORMATLINJE — knappene over tekstfeltene |
| `row-editor.js` | RAD-EDITOR — gjenbrukbare add/collect for verk, musikkeksempler og kilder |
| `ui-dashboard.js` | UI — OVERSIKT (lærer) |
| `ui-edit.js` | UI — ENDRINGSFORSLAG (diff-hjelpere) |
| `ui-helpers.js` | UI — LAVNIVÅ-HJELPERE |
| `ui-metagruppe.js` | METAGRUPPENE I UTFORSK-LISTENE |
| `ui-modal-fragments.js` | DELTE MODAL-FRAGMENTER |
| `ui-modal.js` | UI — MODALER: åpne og lukke, tilbake-knappen og appens meldingsbokser |
| `ui-tech.js` | UI — TEKNOLOGI: innovasjonskortene (liste og detalj) |
| `ui-timeline.js` | UI — TIDSLINJER |
| `ui.js` | UI — rendering (artist- og listevisninger) |
| `viktighet.js` | VIKTIGHETSNIVÅET — ett aktivt nivå for hele appen, med merke i toppfeltet |
| `yt-spiller.js` | INNEBYGD YOUTUBE-SPILLER (flyttet ut av presentasjon.js i v5.28) |

## `js/data/` Data

Firestore (store.js er den eneste fila som snakker med databasen), den delte dataroten, appens tilstand, teoretikerskjemaet og importformatet.

| Fil | Hva den gjør |
|---|---|
| `app-state.js` | APPENS TILSTAND OG SIDENS VALG |
| `artist-cache.js` | ARTIST-CACHE — delt localStorage-lag for artistlista |
| `artist-normalize.js` | ARTIST-NORMALISERING — ren datalogikk, uten Firebase-avhengigheter |
| `artist-schema.js` | ARTIST-SKJEMA — én sannhetskilde for artistfeltene |
| `import-format.js` | IMPORT-FORMAT — ren parselogikk for JSON-filene |
| `shared-data.js` | DELT DATAROT — alle sider abonnerer på de delte samlingene herfra |
| `shared.js` | DELTE HJELPERE — brukes av alle sider |
| `sjekket-filter.js` | SJEKKET-FILTRENE — studentenes utgave av de delte samlingene (v6.89) |
| `store.js` | DATALAG — Firebase Firestore |

## `js/felles/` Felles hjelpere

Små hjelpere og vokabular som flere deler av appen bruker: tekst og lenker, kilder, søkeindeksen, årstall og tidsakse, fagbakgrunner, dype lenker og bryterne.

| Fil | Hva den gjør |
|---|---|
| `aarstall.js` | ÅRSTALL — år og spenn i tekst, også før Kristus (fase 2) |
| `feature-flags.js` | MIDLERTIDIGE BRYTERE — skjuler funksjoner i STUDENTVISNINGEN |
| `guide-deler.js` | «SLIK BRUKER DU APPEN» I DELER (v6.95, brukervalg 2026-10-13) |
| `kilder.js` | KILDER — vokabular, publikasjoner og aggregering |
| `limits.js` | KONFIGURASJON, VOKABULAR OG TELLING |
| `linkify.js` | LENKER I LØPENDE TEKST — artist-, sjanger- og innovasjonsnavn blir klikkbare |
| `punkter.js` | OPPSUMMERINGSPUNKTER (v5.50) — 3–5 korte punkter per beskrivelse |
| `rich-text.js` | RIK TEKST — markdown-light for ALL løpende tekst i appen |
| `se-og-les.js` | SE OG LES — valgfri liste på et pedagogisk prinsipp (fase 3) |
| `search.js` | SØK — én indeks over alt innholdet i appen |
| `sjekket.js` | BARE SJEKKET INNHOLD FOR STUDENTENE (v6.89, brukervalg 2026-10-13) |
| `story-format.js` | SJANGERHISTORIER OG INNHOLDSSIDER — oppslag |
| `tidsakse.js` | TIDSAKSEN — tidsrommene som akse for tidslinjer, striper og filtre (fase 2) |
| `timeline-lanes.js` | TIDSLINJE-BANER — ren logikk for artist-aktivitets-tidslinjen |
| `util.js` | SMÅ DELTE HJELPERE |
| `vis-lenke.js` | VIS-LENKER — dype lenker til alt søket kan åpne (v5.22) |

## `js/vendor/` Tredjepart

Kode skrevet av andre, brukt uendret.

| Fil | Hva den gjør |
|---|---|
| `qrcode.js` | QR Code Generator for JavaScript |
