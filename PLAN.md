# Pedagogikkhistorie: plan for kopien

Dette repoet er en kopi av musikkhistorie-appen (pensum, v7.11, historikken er med). Arbeidsnavnet er «pedagogikkhistorie». Emne, studenter, endelig navn og domene er ikke avgjort, og skal ikke avgjøres uten at Eirik tar det opp.

Teknisk hovedlinje: hele koden, filnavnene og databasenøklene beholdes (`artists`, `genreDescriptions`, `decades` og så videre). Bare det brukerne ser byttes ut. Da kan forbedringer hentes fra musikkappen med `git fetch upstream` og `git cherry-pick`. Pushurl til `upstream` er satt til DISABLED, så pedagogikkappen aldri kan pushes til musikkappens repo.

## Vedtatt av Eirik 2026-10-19

- Egen kopi og eget Firebase-prosjekt. Ikke en felles kodebase.
- Epokene dekker hele historien, fra de gamle grekerne til i dag. Hovedsakelig internasjonalt blikk, men norsk skolehistorie skal med.
- Nodene i treet er **epoker**. Metasjangrene er **retninger** (farge og gruppe). Strekene viser påvirkning mellom epoker. Undersjangre blir **pedagogiske prinsipper** (endret 2026-10-20, se under; først var de tenkt som «begreper»). «Grunnlinje» og «retning» er det samme: bruk «retning» i appen.
- Påvirkning mellom enkeltpedagoger står i beskrivelsen. Det blir ikke noe eget felt.
- Domene: **pedagogikk.historieappen.no** (underdomene av musikkappens domene, vedtatt 2026-10-19). Filen `CNAME` i repoet har navnet. DNS: CNAME `pedagogikk` til `eiriksorbo.github.io.` i cPanel Zone Editor hos domene.no.
- Venter: emne og studenter, og endelig navn.

## Vedtatt av Eirik 2026-10-20

- **Pedagogiske prinsipper erstatter «begreper» og lytteeksemplene.** Et prinsipp (anskuelse, læring gjennom erfaring, tilpasset opplæring …) er en felles tekst som går på tvers av epoker og teoretikere. Det bygges på maskineriet undersjangrene har i dag (felles beskrivelse i `genreDescriptions`, merket på teoretikerne, egen fane, lenker fra løpende tekst, søk og utskrift), så det blir ikke en tredje ting ved siden av. «Begrep» er borte som egen type: ord som Bildung eller «skjult læreplan» står i teksten til epoken eller teoretikeren, eller blir prinsipper i vid forstand.
- Hvert prinsipp kan ha en valgfri **«Se og les»-liste** med video (den innebygde spilleren) og tekstutdrag. Lytteeksemplene på teoretikerkortet faller bort; hovedverkene blir.
- Prinsippets side får en **«Hos hvem og når»-visning**: teoretikerne og epokene i tidsrekkefølge, tegnet på tidsaksen fra fase 2.
- Ikke avgjort: om et prinsipp også skal kunne knyttes direkte til en epoke uten at en teoretiker er nevnt (krever et ekstra felt). Start med merking på teoretikerne; epokene følger av dem.

## Oversettelse av begrepene

| Musikkappen | Pedagogikkappen |
|---|---|
| Artist | Teoretiker (pedagog) |
| Metasjanger | Retning |
| Sjanger (node i treet) | Epoke |
| Undersjanger | Pedagogisk prinsipp |
| Strek mellom sjangre | Påvirkning mellom epoker |
| Sjangerhistorie | Fortellingen om retningen |
| Tiår (samfunn og teknologi) | Fjernes eller omformes (se fase 2) |
| Innovasjoner | Reformer og milepæler (lov, læreplan, institusjon, læremiddel, metode, norsk spor) |
| Instrument | Fagbakgrunn (filosof, teolog, psykolog, praktiker …) |
| Sentrale verk | Hovedverk |
| Lytteeksempler | Fjernes på teoretikerkortet. Prinsippet får en valgfri «Se og les»-liste (video og tekstutdrag) |
| Plateselskap | Fjernes |
| Varmekart | Tas ut (stort sett en diagonal med epoker som noder) |

## Fasene

**Fase 0: Kopien.** Egen mappe, upstream satt opp, musikkappens Firebase-oppsett og domene koblet fra, ny klassekode, versjon 0.01. Appen starter i oppsettmodus til `js/firebase-config.js` fylles ut.

**Fase 1: Skjelettet (Opus). Ferdig 2026-10-19.** Eirik godtok hele forslaget: 8 retninger, 45 epoker, 16 tidsrom, 55 påvirkninger og 8 motreaksjoner (stiplede streker). Ingen grå røtter: antikken hører til retningene, siden noder uten retning ikke kan tagges på teoretikere. «Skolen for alle» og «Erfaring og demokrati» er egne retninger. Dataene står i `tools/pedagogikk-skjelett.js` (med `era` og `personer` som notater til fase 6), og `node tools/lag-pedagogikk-skjelett.js` validerer treet med appens egen kode og skriver `json files/pedagogikk-skjelett.json`, som Eirik importerer på lærersiden. Fra fase 2 følger tidsrommene med i importfila (`genealogy.tidsrom`).

**Fase 2: Tidsaksen (Opus). Ferdig 2026-10-20.** Radene i treet er tidsrom av ulik lengde, lagret i `content/genealogy.tidsrom` som `{ fra, til, navn?, etikett? }` (raden er plassen i lista, `til: null` er «til i dag»). `genre-model.js` gir `TIDSROM`, `RAD_ANTALL` og `tidsromValg`; læreren endrer dem under «Tidsrom» i sjangertre-editoren (sett inn, fjern tomme, epokene flyttes med), og `sjekkTidsrom` i genre-validate.js stopper manglende eller synkende startår. År før Kristus er negative tall og vises med «f.Kr.» der det trengs (`js/felles/aarstall.js`: `visAar`, `visSpenn`, `tolkAar`; skjemaene godtar −3000 til 2100). `js/felles/tidsakse.js` gjør tidsrommene til én akse der hvert tidsrom er like bredt: artisttidslinja, stripa på artistkortet, sjangerperiodene, histogrammet i Oversikten, tidsromsfiltrene i artistlistene og tidslinja i utskriften bruker den. Tiårskortene og varmekartet er tatt ut overalt (visning, lærersiden, forslag, søk, kjøreplaner, utskrift, import/eksport, `decades` i firestore.rules); over historiene står epokene i retningen som bobler, og feltet «Tiår» på innovasjonskortene er borte.

*Gjenstår for Eirik etter fase 2:* (1) kjør `node tools/lag-pedagogikk-skjelett.js` og importer `json files/pedagogikk-skjelett.json` på nytt, så treet i databasen får tidsrommene (treet som ligger der nå, er fra fase 1 og har dem ikke); (2) publiser den nye `firestore.rules` (gjort 2026-10-20). Regeltestene kjører grønt på GitHub (lokalt mangler maskinen Java). Tidsrom-editoren er bare testet i koden, ikke i nettleseren (lærersiden krever innlogging).

**Fase 3: Feltene (Sonnet).** Teoretikerkortet (én retning, flere epoker, prinsipper, fagbakgrunn, hovedverk), prinsippene (felles tekst, merket på teoretikerne, valgfri «Se og les»-liste og «Hos hvem og når» på tidsaksen), reformer og milepæler, epokekortet med «Samfunn» og «Skole og oppdragelse». Start med teoretikerkortet, for prinsippene og reformene bygger på det. Oppdater `firestore.rules` og testene.

*Fase 3, status 2026-10-20:* **epokekortet er ferdig** (felt `samfunn` og `skole` på main-nivå i genreDescriptions: kortet, lærerskjemaet, forslag, `firestore.rules`, søk og sjekk-filteret; v0.04). Epokene er ikke med i utskriften ennå. **Gjenstår i fase 3:** (a) teoretikerkortet: fagbakgrunn-ordlista (erstatter instrumentene; Eirik må godkjenne lista, forslag: Filosof, Teolog, Psykolog, Sosiolog, Praktiker, Politiker og reformator, Forsker) og fjerne lytteeksemplene fra kortet; (b) prinsippene (undersjangre): «Se og les»-liste og «Hos hvem og når»; (c) reformer og milepæler (innovasjonskortene: type lov, læreplan, institusjon, læremiddel, metode, norsk spor). Reglene er endret igjen (`samfunn` og `skole` i pendingEdits), så de må publiseres på nytt.

**Fase 4: Språk og utrenskning (Sonnet).** Alle synlige tekster, logo og tittel. Plateselskapene, instrumentsiden og Lytt-sidene går ut. Et skript finner musikkord som står igjen.

**Fase 5: Tester og dokumentasjon (Sonnet).** README, JSON-OPPSKRIFT, MODULKART og KART-OPPSKRIFT skrives for den nye appen.

**Fase 6: Innholdet, i runder (Opus til tekstene).** Importfiler for treet, beskrivelsene, teoretikerne i bolker per epoke, prinsippene (20–30 i første runde, så vokser lista) og reformene. Kilderekkefølge: SNL, Stanford Encyclopedia of Philosophy, Britannica, Internet Encyclopedia of Philosophy. Omfanget avtales før hver runde.

## Gjenstår for Eirik i fase 0

- Opprette et Firebase-prosjekt (Firestore i EU-region, Google og Anonym innlogging) og lime verdiene inn i `js/firebase-config.js`.
- Publisere `firestore.rules` i det nye prosjektet. Lærer-e-posten ligger både i `js/firebase-config.js` og i `firestore.rules`.
- Opprette et GitHub-repo (privat til domenet er avgjort).
- Domenet: legg `pedagogikk.historieappen.no` til under Authentication, Authorized domains i Firebase-prosjektet, og sett det som Custom domain i repoets Pages-innstillinger.

## Husk

- Appen under var skrevet for musikk: dokumentene README, JSON-OPPSKRIFT, MODULKART og KART-OPPSKRIFT beskriver fortsatt musikkappen til fase 5.
- Preview og lokal kjøring skriver til databasen i `firebase-config.js`. Før Firebase er koblet til, er appen i oppsettmodus og skriver ingenting.
- Fellene i musikkappens HANDOVER (grep leser enkelte filer som binære, `-a` hjelper; avledede verdier fra `genre-model.js` må leses ved kall-tid; test med tomt localStorage-speil) gjelder også her.
