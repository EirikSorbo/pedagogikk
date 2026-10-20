# JSON-oppskrift — Pedagogikkens historie

Eksport-/importformat for hele datagrunnlaget. Filen ligger på rota og oppdateres når skjemaet endres.

**Versjon:** 0.21 (følger appversjonen i `js/version.js`)
**Sist endret:** 2026-10-20

Appen er kopiert fra musikkhistorie-appen, og kode, filnavn og databasenøkler beholdes (se [PLAN.md](PLAN.md)). Derfor heter feltene fortsatt `artists`, `metaGenre`, `mainGenre`, `subGenre`, `instrument` og `tech`. Tabellen viser hva de betyr i pedagogikkappen. **I filene bruker du alltid databasenøklene; i appen heter de det høyre kolonnen sier.**

| Databasenøkkel | I appen |
|---|---|
| `artists` (ett objekt) | Teoretiker (pedagog) |
| `metaGenre` / `genreDescriptions.meta` | Retning (farge og gruppe i treet) |
| `mainGenre` / `genreDescriptions.main` / treets noder | Epoke |
| `subGenre` / `genreDescriptions.sub` | Pedagogisk prinsipp |
| `instrument`, `instrument2` | Fagbakgrunn |
| `keyWorks` | Hovedverk |
| `tech` | Reformer og milepæler |
| `edgeDescriptions` | Påvirkning mellom to epoker |
| `story` (på retningen) | Fortellingen om retningen |

---

## Toppnivåstruktur

```json
{
  "formatVersion":     1,
  "artists":           [ /* teoretikere */ ],
  "genreDescriptions": { "meta": { "Erfaring og demokrati": { ... } }, "main": { "Progressivismen": { ... } }, "sub": { "Læring gjennom erfaring": { ... } } },
  "edgeDescriptions":  { "pragmatisme__progressivisme": { "description": "...", "kilder": [ ... ] } },
  "tech":              [ /* reformer og milepæler */ ],
  "pages":             { "omHistorie": { "body": "..." }, "appGuide": { ... } },
  "teacherChecks":     { /* lærerens sjekk-fremdrift */ },
  "referanser":        { "kilder": [ ... ] },
  "presentasjoner":    { "planer": { ... } },
  "notater":           { /* lærerens private notater */ },
  "genealogy":         { "version": 2, "nodes": [ ... ], "tidsrom": [ ... ], "metaGenres": [ ... ], "families": { ... }, "metaOrderHint": [ ... ] }
}
```

Alle nøkler er valgfrie, men fila må ha teoretikere eller minst én innholdsdel (`genreDescriptions`, `edgeDescriptions`, `tech`, `pages`, `referanser`, `genealogy`, `presentasjoner`). En fil uten teoretikere godtas som ren innholdsfil.

| Nøkkel | Type | Beskrivelse |
|---|---|---|
| `formatVersion` | number | Filformat-merke (1). |
| `artists` | array | ALLE teoretikere uansett status — også ventende og fjernede forslag (tapsfri backup). Rekkefølge spiller ingen rolle. |
| `genreDescriptions` | objekt | Beskrivelser for retninger, epoker og prinsipper, nestet i tre bolker (`meta`/`main`/`sub`). `story` på retningen er fortellingen om retningen. Se seksjon 2. |
| `edgeDescriptions` | objekt | Beskrivelsene av påvirkningene (strekene i treet). Nøkkel = dokument-ID `fra__til`, to epoke-id-er (`id` i `genealogy.nodes`) skilt av to understreker. |
| `tech` | array | Reformer og milepæler (alle statuser, også pending). Sortert etter `adoptedYear`. |
| `pages` | objekt | Innholdssidene: `omHistorie`, `appGuide`, `skriveveiledning` (hjelp øverst i skjemaet) og `laererHandbok`. |
| `teacherChecks` | objekt | Lærerens sjekk-fremdrift per kategori: `{ kategori: [id, ...] }`. |
| `referanser` | objekt | Frittstående referanser (erstattes i sin helhet ved import). |
| `presentasjoner` | objekt | Kjøreplanene til Visning-vinduet. Importen legger til eller erstatter planen med samme id, og læreren får se lista først. |
| `notater` | objekt | Lærerens private notater til kortene (ett dokument per kort). |
| `genealogy` | objekt | HELE treet (`content/genealogy`): epoker, tidsrom, retninger og farger. Valideres og ERSTATTES i sin helhet ved import. Se seksjon 4. |

Tre nøkler fra musikkappen er tatt ut og leses ikke lenger: `decades` (tiårene, fase 2), `varmekart` (fase 2) og `podcasts` (fase 4). Står de i en gammel fil, ignoreres de, og importen advarer om ukjente nøkler før du bekrefter. En fil som bare har slike nøkler, kjennes ikke igjen som en importfil.

Config-samlingen er borte: fagbakgrunnene er en konstant i `js/felles/limits.js`, og vokabularet for retninger og epoker kommer fra `genealogy`.

---

## 1. Teoretikerobjekt (`artists`)

```json
{
  "name": "John Dewey",
  "birthYear": 1859,
  "deathYear": 1952,
  "gender": "mann",
  "metaGenre": "Erfaring og demokrati",
  "instrument": "Filosof",
  "mainGenre": ["Pragmatismen", "Progressivismen"],
  "subGenre": ["Læring gjennom erfaring"],
  "influenceStart": 1896,
  "influenceEnd": 1952,
  "geography": "Chicago og New York",
  "description": "Amerikansk filosof og pedagog som ville gjøre skolen til et samfunn i miniatyr: barnet lærer ved å gjøre og reflektere, og demokratiet må øves der.",
  "keyWorks": [
    { "title": "Democracy and Education", "year": 1916 },
    { "title": "Experience and Education", "year": 1938 }
  ],
  "kilder": [
    { "text": "Store norske leksikon: John Dewey", "url": "https://snl.no/John_Dewey", "kategori": "Nettsteder" }
  ],
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/...",
  "imageCredit": "Fotograf / lisens, via Wikimedia Commons",
  "proposedBy": "Eirik Sørbø",
  "status": "active",
  "priority": 3,
  "teacherChecked": false,
  "votedUpBy": [],
  "addedYear": 2026
}
```

### Feltbeskrivelser

| Felt | Type | Påkrevd | Notater |
|---|---|---|---|
| `name` | string | ✓ | Visningsnavn og matchenøkkel ved sammenslåing (uavhengig av store/små bokstaver). |
| `birthYear` | number \| null | | Fødselsår. År før Kristus skrives som negative tall (−428); skjemaene godtar −3000 til 2100. |
| `deathYear` | number \| null | | Dødsår, samme regler. |
| `gender` | string | ✓ | Én av: `"kvinne"`, `"mann"`, `"annet"` (vises som «Gruppe»), `"ikkebinaer"`. Alt annet telles som «ukjent» i statistikken. |
| `metaGenre` | string | ✓ | **Retningen.** Én av treets retninger (`metaGenres[].name` i `genealogy`). Hver teoretiker har én. |
| `instrument` | string | ✓ | **Fagbakgrunn.** Én verdi fra `INSTRUMENTS` i `js/felles/limits.js`: Filosof, Teolog, Psykolog, Sosiolog, Praktiker, Politiker og reformator, Forsker. |
| `instrument2` | string | | Andre fagbakgrunn, for dem som er sentrale på to. Bare læreren setter det. Les alltid begge via `instrumenterFor`. |
| `mainGenre` | array av strings | | **Epokene** teoretikeren hører til (flere er lov). Strengene må matche en node-etikett (`nodes[].l`) i treet. |
| `subGenre` | array av strings | | **Pedagogiske prinsipper** teoretikeren er merket med. Frie tags: samme stavemåte overalt, og gi dem gjerne en felles tekst under `genreDescriptions.sub`. |
| `influenceStart` | number | ✓ | Året teoretikeren begynte å virke. Plasserer personen i tidsrommene. |
| `influenceEnd` | number \| null | | Året virket tok slutt (null hvis fortsatt aktiv). |
| `geography` | string | | «Virkested», fritekst: by, land, miljø. |
| `description` | string | | Hvorfor teoretikeren er med. Vanlig tekst, kort. Markdown-light (se under). |
| `keyWorks` | array av objekter | | **Hovedverk.** Se under. |
| `kilder` | array av objekter | ✓ | Kilder (minst én). Se under. |
| `punkter` | array av strings | | Oppsummering i punkter, ett punkt per element. Bare læreren skriver dem. |
| `imageUrl` | string | | URL til portrettbilde. Bruk Commons/CC-lisensiert. |
| `imageCredit` | string | | Fotograf + lisens, vises som bildetekst. |
| `proposedBy` | string | | Hvem la inn forslaget. Mangler → `"Anonym"`. |
| `status` | string | | `"active"`, `"pending"` eller `"removed"`. Eksporten tar med ALLE. Ved lærer-import beholdes gyldig status; **mangler feltet, settes kortet til `active`**; ugyldige verdier blir `pending`. |
| `priority` | number | | Viktighetsgrad: 3 = viktigst, 2 = viktig, 1 = mindre viktig, 0/mangler = ingen. |
| `hidden` | boolean | | Skjult for studentene. (Gammel verdi: `priority: -1` leses også som skjult.) |
| `teacherChecked` | boolean | | Lærerens «gjennomgått»-hake. |
| `votedUpBy` | array av strings | | Stemme-identiteter (uid-er). Bevares ved lærer-import, så backup → restore ikke mister stemmer. Studentinnsending kan ikke sette feltet. |
| `addedYear` | number | | Året kortet ble lagt inn. Mangler → inneværende år ved import. |

Returflyten (`teacherFeedback`, `returKode`, `studentComment`, `innsendtKode`, `returnedAt`, `ownerUid`) følger med i eksporten, så en backup tatt mens et forslag er «hos studenten» ikke mister tilbakemeldingen. Du skriver dem ikke selv.

**Felt fra musikkappen som blir liggende i dataene.** `recordLabel` (plateselskap) og `musicExamples` (lytteeksempler) er ikke lenger i skjemaene, men følger med i eksport og import så ingenting går tapt. `musicExamples` leses fortsatt av spilleren når en video velges som stopp i en kjøreplan eller i utskriften (`yt:`-målene, som heter «Videoer» i appen).

### `keyWorks[]`

```json
{ "title": "Democracy and Education", "year": 1916, "url": "https://..." }
```

| Felt | Påkrevd | Notater |
|---|---|---|
| `title` | ✓ | Verkets tittel. |
| `year` | | Utgivelsesår. Brukes i visning og kronologisk sortering. |
| `url` | | Lenke til verket eller en omtale. |

### `kilder[]`

```json
{ "text": "Store norske leksikon.", "forfatter": "Ola Nordmann", "year": 2021, "url": "https://snl.no/John_Dewey", "kategori": "Nettsteder" }
```

| Felt | Påkrevd | Notater |
|---|---|---|
| `text` | ✓ | Navnet på kilden. For nettkilder: publikasjonen alene («Store norske leksikon.»), slik at lenken bærer artikkelen. Samme form på alle korttyper. |
| `forfatter` | | Forfatter/artikkelforfatter. Vises i parentes etter tittelen, utenfor lenken. |
| `year` | | Publiseringsår (tall). Vises sammen med forfatteren. |
| `url` | | Klikkbar lenke. Hvis satt: hele teksten blir lenke. |
| `kategori` | | Styrer hvilken seksjon kilden havner i i Referanser-kortet: `Bøker`, `Podkaster`, `Videoer` eller `Nettsteder` (`KILDE_KATEGORIER` i `js/felles/kilder.js`). Mangler feltet, eller står det noe annet, havner kilden under «Ukategorisert» nederst. |

Referanser-kortet har én seksjon per kategori. Bare `Nettsteder` grupperes på nettsted (`snl.no` → Store norske leksikon), og der utledes artikkeltittelen fra URL-en. Nettsteder med færre enn tre artikler, og nettkilder uten lenke, samles under «Andre nettsteder». I de øvrige seksjonene er `text` hele referansen. En kilde med `kategori: "Podkaster"` er en kilde som kan være en podkast, og har ingenting med den fjernede podkastfunksjonen å gjøre.

Kilder kan også skrives som rene strenger (`"Store norske leksikon"`); de tolkes som kildetekst uten lenke. Det er den eneste gjenværende koersjonen, og den finnes fordi importfiler skrives for hånd.

### `referanser` (toppnøkkel)

```json
"referanser": { "kilder": [{ "text": "Telhaug, A. O.: Utdanningshistorie", "kategori": "Bøker" }], "updatedAt": "2026-10-20T…" }
```

Frittstående kilder som ikke hører til noe kort (lagt inn med «Ny referanse» på lærersiden, lagret i `content/referanser`). Samme feltene som `kilder[]`. Ved import ERSTATTES hele lista, siden den er ett dokument.

---

## 2. Beskrivelser (`genreDescriptions`)

Nestet i tre bolker etter TYPE — samme inndeling som lærerens Skrivebord:

| Bolk | Innhold |
|---|---|
| `meta` | Retningene (de åtte i skjelettet: Klassisk dannelse, Kristen oppdragelse, Empiri og metode, Skolen for alle, Barnet i sentrum, Erfaring og demokrati, Læring og utvikling, Kritikk og frigjøring). |
| `main` | Epokene (nodene i treet som ikke også er en retning). |
| `sub` | De pedagogiske prinsippene (frie navn). |

Hvert navn står ÉN gang, i bolken som matcher typen. Verdien er hele dokumentet, som selv er **nivådelt**: nøklene `meta`/`main`/`sub` holder teksten for hvert nivå. Et navn som både er en retning og en epoke ligger i `meta`-bolken, men dokumentet kan ha tekst på flere nivåer. Importen flettes ved samme navn i flere bolker.

```json
"genreDescriptions": {
  "meta": {
    "Erfaring og demokrati": {
      "meta": { "description": "Retningens beskrivelse.", "kilder": [ { "text": "Dewey, J. Democracy and Education. Macmillan, 1916." } ] },
      "story": { "body": "Fortellingen om retningen, skrevet som sammenhengende tekst." }
    }
  },
  "main": {
    "Progressivismen": {
      "main": {
        "description": "Epokens beskrivelse.",
        "activeFrom": 1896,
        "activeTo": 1955,
        "era": "ca. 1896–1955",
        "samfunn": "Industrialisering, innvandring og byvekst i USA.",
        "skole": "Laboratorieskolen i Chicago, prosjektarbeid og elevaktive arbeidsmåter.",
        "kilder": [ { "text": "Store norske leksikon.", "url": "https://snl.no/progressivisme" } ]
      }
    }
  },
  "sub": {
    "Læring gjennom erfaring": {
      "sub": {
        "description": "Prinsippets felles tekst, som går på tvers av epoker og teoretikere.",
        "kilder": [ { "text": "Dewey, J. Experience and Education. Kappa Delta Pi, 1938." } ],
        "seOgLes": [
          { "tittel": "Utdrag fra Experience and Education", "kilde": "Dewey (1938)", "tekst": "Kort sitat på høyst 1200 tegn." },
          { "tittel": "Forelesning om erfaringslæring", "kilde": "Nettvideo", "url": "https://www.youtube.com/watch?v=..." }
        ]
      }
    }
  }
}
```

Per nivå:

| Felt | Nivå | Notater |
|---|---|---|
| `description` | alle | Beskrivelsen på dette nivået. Vises i kortet på alle sider. |
| `kilder` | alle | Kilder spesifikt for navnet, samme form som `kilder[]` over. |
| `activeFrom`, `activeTo` | `main` | Epokens årstall (hele år; `activeTo` tomt = fortsatt aktiv). Før Kristus som negative tall. |
| `era` | `main` | Epoken med ord, vises ordrett på tidslinja (høyst 60 tegn). |
| `samfunn` | `main` | Samfunnet epoken sto i. Tok over det tiårskortene gjorde. |
| `skole` | `main` | Skole og oppdragelse: hva epoken betydde for skolen. |
| `punkter` | `main` | Oppsummering i punkter (bare læreren). |
| `seOgLes` | `sub` | Valgfri liste, høyst 12 poster. Hver post har `tittel` (påkrevd, ≤ 200 tegn), og eventuelt `kilde` (≤ 300), `url` (http/https) og `tekst` (utdrag, ≤ 1200 tegn). Typen utledes: har posten `tekst`, er den et utdrag; ellers er den en video (YouTube-lenker åpnes i appens spiller) eller en lenke til noe å lese. Utdragene er sitater og skal ha kilde. Bare læreren skriver lista, studenter kan ikke foreslå den. |
| `story.body` | dokumentet (retningen) | Fortellingen om retningen. |

Det finnes INGEN fallback-tekster i koden: mangler `description`, viser appen en tydelig «mangler»-melding. Feltene `lytt` og `usikre` fra musikkappen kan stå i gamle dokumenter; de leses, men har ikke noe skjema.

### `edgeDescriptions` — påvirkning mellom epoker

```json
"edgeDescriptions": {
  "pragmatisme__progressivisme": { "description": "Dewey bygde pragmatismens syn på erfaring og handling inn i en skoleteori.", "kilder": [ ... ] }
}
```

Nøkkelen er `fra__til` med epokenes `id`-er (ikke etikettene). Samme felter som over.

---

## 3. Reformer og milepæler (`tech`)

```json
{
  "name": "Almueskoleloven av 1860",
  "category": "Lov",
  "type": "innovasjon",
  "inventedYear": 1860,
  "adoptedYear": 1860,
  "adoptedLabel": "1860",
  "description": "Norsk lov som la rammene for almueskolen på landsbygda.",
  "kilder": [ { "text": "Store norske leksikon.", "url": "https://snl.no/almueskole" } ],
  "imageUrl": "",
  "imageCredit": "",
  "status": "active"
}
```

| Felt | Type | Påkrevd | Notater |
|---|---|---|---|
| `name` | string | ✓ | Visningsnavn. |
| `category` | string | ✓ | Én av `Lov`, `Læreplan`, `Institusjon`, `Læremiddel`, `Metode`, `Norsk spor` (`TECH_CATEGORIES` i `js/ui/ui-tech.js`). «Norsk spor» er en egen kategori: en norsk lov eller reform kan bare ha én, så velg den som sier mest. |
| `type` | string | | `"innovasjon"` (vises som *reform eller milepæl*) eller `"hendelse"` (*viktig hendelse*). Mangler feltet, er kortet en reform/milepæl. |
| `inventedYear` | number \| null | | Året reformen ble vedtatt eller milepælen inntraff. (Skjemaet kaller feltet «Oppfunnet (år)» fra musikkappen.) |
| `adoptedYear` | number \| null | | Året den fikk gjennomslag i nevneverdig skala. Brukes til sortering. |
| `adoptedLabel` | string | | Kort forklaring av tidspunktet, f.eks. `"ca. 1950"`, `"sent 1960-tall"` (≤ 150 tegn). |
| `description` | string | | Hva den var og hva den betydde. |
| `kilder` | array | | Samme form som `kilder[]`. |
| `imageUrl`, `imageCredit` | string | | Bilde og bildetekst (≤ 150 tegn). |
| `status` | string | | `"active"` eller `"pending"` (studentforslag som venter). Manglende felt regnes som aktivt. |
| `proposedBy` | string | | Hvem foreslo kortet. |

Feltet `decade` fra musikkappen er borte. Ved import matches eksisterende kort på `name` (oppdateres); ukjente navn legges til som nye.

---

## 4. Treet (`genealogy`)

Epokene er nodene i treet, retningene gir farge og kolonne, og radene er tidsrom av ulik lengde.

```json
{
  "version": 2,
  "nodes": [
    { "id": "pragmatisme", "l": "Pragmatismen", "f": "Pragmatismen", "g": "Erfaring og demokrati", "r": 9, "p": ["empirisme"] },
    { "id": "progressivisme", "l": "Progressivismen", "f": "Dewey og progressivismen", "g": "Erfaring og demokrati", "r": 10, "p": ["pragmatisme"], "rx": ["herbartianisme"] }
  ],
  "tidsrom": [
    { "fra": -800, "til": -150, "etikett": "ca. 800–150 f.Kr.", "navn": "Antikkens Hellas" },
    { "fra": 2010, "til": null }
  ],
  "metaGenres": [ { "name": "Erfaring og demokrati", "column": 5, "fam": "rosa", "color": "#db2777" } ],
  "families": { "rosa": { "stroke": "#db2777", "label": "Rosa" } },
  "metaOrderHint": [ "Klassisk dannelse", "Kristen oppdragelse" ]
}
```

| Felt | Notater |
|---|---|
| `nodes[].id` | Stabil ID (små bokstaver). Brukes i `p`, `rx` og i nøklene i `edgeDescriptions`. |
| `nodes[].l` | Etiketten: epokens korte navn. **Dette er strengen som står i `mainGenre` på teoretikerne**, og dokument-ID i `genreDescriptions`. Kan ikke inneholde «/». |
| `nodes[].f` | Det fulle navnet. |
| `nodes[].g` | Retningen (navnet på en `metaGenres`-post). |
| `nodes[].r` | Raden = indeksen i `tidsrom`. |
| `nodes[].p` | Id-ene til epokene som påvirket denne (de heltrukne strekene). |
| `nodes[].rx` | Motreaksjoner: id-er det er en reaksjon mot (stiplede streker). |
| `nodes[].yOffset` | Valgfri halv-rads forskyvning i tegningen. |
| `tidsrom[]` | `{ fra, til, etikett?, navn? }`. Raden er plassen i lista; `til: null` er «til i dag». `fra` må være et årstall og stige nedover lista. |
| `metaGenres[]` | Retningene: `{ name, column, fam, color }`. |
| `families` | Fargepaletten retningene velger fra. |

Treet valideres (`js/sjangre/genre-validate.js`: sykler, ID-er, etiketter, tidsrom) før det skrives, og ERSTATTES i sin helhet ved import. Skjelettet fra fase 1 og 2 ligger i `json files/pedagogikk-skjelett.json` og lages av `node tools/lag-pedagogikk-skjelett.js` (45 epoker, 16 tidsrom, 8 retninger).

---

## Tekstformatering (gjelder ALLE beskrivelser)

Alle tekstfelter i appen leses som **markdown-light** — teoretikerbeskrivelser, epoke-, retnings- og prinsipptekster, påvirkningene, reformene og historiene/innholdssidene. Samme syntaks overalt, og samme knapper over hvert felt i editoren:

```
**fet**            *kursiv*            [lenketekst](https://…)
### Mellomtittel
- punkt            • punkt             – punkt
1. nummerert punkt

Blank linje = nytt avsnitt. Enkelt linjeskift = ny linje.
```

Detaljer verdt å kjenne:

- **Tankestrek som kulepunkt** (`– `) teller som punktliste.
- **Stjerne inni et ord** blir IKKE kursiv. Kursivmarkørene må stå på ordgrense.
- **Lenker** må være `http`/`https`; alt annet vises som ren tekst. Lenketeksten blir aldri gjort om til teoretikerlenke, så man slipper lenker inni lenker.
- **Teoretiker-, epoke-, prinsipp- og reformnavn** blir automatisk klikkbare, også inni fet/kursiv tekst og listepunkter.
- **HTML i teksten escapes.** Egne `<b>`-tagger vises som tekst, ikke markup.

Formateringen skjer ved visning; det som lagres i Firestore og i denne fila er teksten slik den er skrevet.

---

## Praktiske retningslinjer

### Bilder
- Foretrekk Wikimedia Commons og Library of Congress (public domain eller CC).
- `imageUrl` må være direkte link til bildefil (`.jpg`/`.png`/`.webp`).
- `imageCredit` bør ha fotograf + lisens + kilde.
- Unngå hotlinking fra nettsider du ikke kontrollerer — last opp til Commons om nødvendig.

### Kilder
- Lik stil i hele filen. Anbefaling: Chicago Author-Date eller MLA.
- Bøker: `Etternavn, Fornavn. Tittel. Forlag, år.`
- Nettsider: `"Tittel" — Nettsted. Hentet 2026-10-20.` + `url`.
- Kilderekkefølge for de første tekstene (PLAN.md): SNL, Stanford Encyclopedia of Philosophy, Britannica, Internet Encyclopedia of Philosophy.

### Tagging — epoker og prinsipper
- **`mainGenre`** = en av epokene i treet. Disse styrer filtre, søk og koblinger. Vær konservativ, og bruk etiketten (`l`) slik den står.
- **`subGenre`** = prinsipper: fri tagg, men samme stavemåte overalt, og gi dem en felles tekst under `genreDescriptions.sub`.
- I tvil: er navnet en node i treet? → `mainGenre`. Ellers → `subGenre`.

### `metaGenre` (retning)
- Skal alltid være satt, og være navnet på en retning i treet.
- For teoretikere som krysser retninger: velg den dominerende, og la de andre epokene stå i `mainGenre`.

### Innflytelse vs. levetid
- `birthYear`/`deathYear` = biografi.
- `influenceStart`/`influenceEnd` = når teoretikeren virket. Det er dette som plasserer personen i tidsrommene, så en teoretiker født i ett tidsrom og aktiv i et annet vises i det siste.

### Tomme felter
- `null` og `""` er ok. Tomme arrays er ok. Mangler en array → leses som `[]`.

---

## Eksempel — komplett mini-fil

```json
{
  "artists": [
    {
      "name": "Johann Heinrich Pestalozzi",
      "birthYear": 1746,
      "deathYear": 1827,
      "gender": "mann",
      "metaGenre": "Barnet i sentrum",
      "instrument": "Praktiker",
      "mainGenre": ["Anskuelsespedagogikken"],
      "subGenre": ["Anskuelse"],
      "influenceStart": 1774,
      "influenceEnd": 1827,
      "geography": "Sveits",
      "description": "Sveitsisk skolemann som ville la barnet lære gjennom egne sanseinntrykk, og som drev skole for fattige barn.",
      "keyWorks": [
        { "title": "Lienhard und Gertrud", "year": 1781 },
        { "title": "Wie Gertrud ihre Kinder lehrt", "year": 1801 }
      ],
      "kilder": [
        { "text": "Store norske leksikon.", "url": "https://snl.no/Johann_Heinrich_Pestalozzi", "kategori": "Nettsteder" }
      ],
      "status": "active",
      "priority": 3,
      "addedYear": 2026
    }
  ],
  "genreDescriptions": {
    "main": {
      "Anskuelsespedagogikken": {
        "main": {
          "description": "Undervisning som starter i det barnet kan se, ta på og erfare.",
          "activeFrom": 1780,
          "activeTo": 1850,
          "samfunn": "Opplysningstidens tro på oppdragelse og en voksende folkeopplysning.",
          "skole": "Anskuelsesundervisning og sansetrening i de nye allmueskolene."
        }
      }
    },
    "sub": {
      "Anskuelse": {
        "sub": { "description": "At undervisningen bygger på konkrete inntrykk før begreper." }
      }
    }
  }
}
```

---

## Import-/eksport-flyt

1. **Eksport** (lærersiden → «Eksporter»): `pedagogikkhistorie-YYYY-MM-DD.json` med alle seksjonene i toppnivåstrukturen over. Tar med alle teoretikere og reformer uansett status — også ventende forslag — så eksporten er en komplett, tapsfri backup. Vakten foran eksporten nekter å lage en fil før alle samlingene er lastet.
2. **Import** (lærersiden → «Importer»): velg fil. Hele teoretikerlista valideres FØR noe skrives eller slettes; feil rapporteres med radnummer og ingenting endres. Deretter valget *Erstatt* eller *Slå sammen*.
3. **Erstatt alle**: laster ned en full sikkerhetskopi (`pedagogikkhistorie-BACKUP-…`) og krever bekreftelse på at fila faktisk kom, FØR noe slettes.
4. **Slå sammen**: teoretikere matches på navn (uavhengig av store/små bokstaver). Tomme felter fylles automatisk fra importfila. Konflikter løses interaktivt eller med *Behold alle*/*Importer alle*. En fil med bare noen felt (navn + oppsummeringspunkter, uten retning og beskrivelse) regnes som en delpost og kan bare flettes inn i teoretikere som finnes.
5. **Beskrivelser** importeres alltid (overskriver eksisterende verdier). **Reformer** matches på navn (oppdater/legg til). **Treet** og **referansene** erstattes i sin helhet.

### Formatkrav (ingen bakoverkompatibilitet)
Importfiler må følge formatet i dette dokumentet:
- Feltnavnene `metaGenre`/`mainGenre`/`subGenre` er påkrevd. Eldre `genre`/`sjangre`/`undersjangre` leses **ikke**.
- Beskrivelser: kun nestet `genreDescriptions` med bolkene `meta`/`main`/`sub`. Et dokument uten `main`, `sub` eller `story` hoppes over.
- `keyWorks` og `kilder` må være lister (kilder kan være lister av strenger). `keyWorks` som kommaseparert streng konverteres **ikke**.
- Bruk alltid en fersk eksport fra appen som backup.
