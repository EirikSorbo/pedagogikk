# Pedagogikkhistorie: plan for kopien

Dette repoet er en kopi av musikkhistorie-appen (pensum, v7.11, historikken er med). Arbeidsnavnet er «pedagogikkhistorie». Emne, studenter, endelig navn og domene er ikke avgjort, og skal ikke avgjøres uten at Eirik tar det opp.

Teknisk hovedlinje: hele koden, filnavnene og databasenøklene beholdes (`artists`, `genreDescriptions`, `decades` og så videre). Bare det brukerne ser byttes ut. Da kan forbedringer hentes fra musikkappen med `git fetch upstream` og `git cherry-pick`. Pushurl til `upstream` er satt til DISABLED, så pedagogikkappen aldri kan pushes til musikkappens repo.

## Vedtatt av Eirik 2026-10-19

- Egen kopi og eget Firebase-prosjekt. Ikke en felles kodebase.
- Epokene dekker hele historien, fra de gamle grekerne til i dag. Hovedsakelig internasjonalt blikk, men norsk skolehistorie skal med.
- Nodene i treet er **epoker**. Metasjangrene er **retninger** (farge og gruppe). Strekene viser påvirkning mellom epoker. Undersjangre blir **begreper**. «Grunnlinje» og «retning» er det samme: bruk «retning» i appen.
- Påvirkning mellom enkeltpedagoger står i beskrivelsen. Det blir ikke noe eget felt.
- Venter: emne og studenter, domene og endelig navn.

## Oversettelse av begrepene

| Musikkappen | Pedagogikkappen |
|---|---|
| Artist | Teoretiker (pedagog) |
| Metasjanger | Retning |
| Sjanger (node i treet) | Epoke |
| Undersjanger | Begrep |
| Strek mellom sjangre | Påvirkning mellom epoker |
| Sjangerhistorie | Fortellingen om retningen |
| Tiår (samfunn og teknologi) | Fjernes eller omformes (se fase 2) |
| Innovasjoner | Reformer og milepæler (lov, læreplan, institusjon, læremiddel, metode, norsk spor) |
| Instrument | Fagbakgrunn (filosof, teolog, psykolog, praktiker …) |
| Sentrale verk | Hovedverk |
| Lytteeksempler | Se og les (video og tekstutdrag) |
| Plateselskap | Fjernes |
| Varmekart | Tas ut (stort sett en diagonal med epoker som noder) |

## Fasene

**Fase 0: Kopien.** Egen mappe, upstream satt opp, musikkappens Firebase-oppsett og domene koblet fra, ny klassekode, versjon 0.01. Appen starter i oppsettmodus til `js/firebase-config.js` fylles ut.

**Fase 1: Skjelettet (Opus).** Forslag til retninger, epoker, røtter (antikk og middelalder som felles grå røtter), tidsrom og påvirkningsstrekene. Eirik bestemmer. Bare struktur, ingen tekster. Leveres som importfil (`genealogy`).

**Fase 2: Tidsaksen (Opus).** Radene i treet blir tidsrom av ulik lengde, lagret som data i stedet for `1900 + 10 år per rad` (`buildDecadeRows` i `js/sjangre/genre-model.js`, `DECADES` i `js/felles/limits.js`, 18 filer bruker tiårslista). Årstall før Kristus lagres som negative tall og vises som «427 f.Kr.»; skjemaene (min/max 1800–2030) og tidslinja må tilpasses. Tiårskortene og varmekartet tas ut, hvis ikke Eirik ber om noe annet.

**Fase 3: Feltene (Sonnet).** Teoretikerkortet (én retning, flere epoker, begreper, fagbakgrunn, hovedverk, se og les), reformer og milepæler, epokekortet med «Samfunn» og «Skole og oppdragelse». Oppdater `firestore.rules` og testene.

**Fase 4: Språk og utrenskning (Sonnet).** Alle synlige tekster, logo og tittel. Plateselskapene, instrumentsiden og Lytt-sidene går ut. Et skript finner musikkord som står igjen.

**Fase 5: Tester og dokumentasjon (Sonnet).** README, JSON-OPPSKRIFT, MODULKART og KART-OPPSKRIFT skrives for den nye appen.

**Fase 6: Innholdet, i runder (Opus til tekstene).** Importfiler for treet, beskrivelsene, teoretikerne i bolker per epoke og reformene. Kilderekkefølge: SNL, Stanford Encyclopedia of Philosophy, Britannica, Internet Encyclopedia of Philosophy. Omfanget avtales før hver runde.

## Gjenstår for Eirik i fase 0

- Opprette et Firebase-prosjekt (Firestore i EU-region, Google og Anonym innlogging) og lime verdiene inn i `js/firebase-config.js`.
- Publisere `firestore.rules` i det nye prosjektet. Lærer-e-posten ligger både i `js/firebase-config.js` og i `firestore.rules`.
- Opprette et GitHub-repo (privat til domenet er avgjort).
- Domene, når det er bestemt: legg det til under Authentication, Authorized domains, og lag `CNAME`.

## Husk

- Appen under var skrevet for musikk: dokumentene README, JSON-OPPSKRIFT, MODULKART og KART-OPPSKRIFT beskriver fortsatt musikkappen til fase 5.
- Preview og lokal kjøring skriver til databasen i `firebase-config.js`. Før Firebase er koblet til, er appen i oppsettmodus og skriver ingenting.
- Fellene i musikkappens HANDOVER (grep leser enkelte filer som binære, `-a` hjelper; avledede verdier fra `genre-model.js` må leses ved kall-tid; test med tomt localStorage-speil) gjelder også her.
