// Runde 5 — innholdssidene (pages), fase 6, skrevet av Opus 2026-10-21.
// Sidene er omHistorie («Om historie» i Det store bildet), appGuide («Slik
// bruker du appen»; hver ###-del slås av og på for seg under «Synlig for
// studentene»), skriveveiledning (hjelpen i steg 3 i forslagsskjemaet) og
// laererHandbok (bare på lærersiden). Formatet er markdown-light, se
// js/felles/rich-text.js: ### tittel, **fet**, *kursiv*, - punkt, blank linje.
import { snl, bok } from "../kilder.mjs";

export default {
  pages: {
    omHistorie: {
      body: `
        Pedagogikkhistorie er ikke en forhistorie til dagens pedagogikk, men et av fagets viktigste redskaper for å forstå seg selv. Begrepene vi tenker med, som *dannelse*, *læring*, *tilpasset opplæring*, *kompetanse* og *evidens*, har hver sin historie. Den historien bestemmer hva de kan brukes til, og hva de skjuler. Appen samler denne historien som et nettverk av retninger, epoker, teoretikere, prinsipper og reformer, så det går an å se både linjene og bruddene.

        ### Fra heltehistorie til kritisk historie
        Den eldste pedagogikkhistorien var en historie om store tenkere og om skolens framskritt. Ellwood P. Cubberleys *Public Education in the United States* (1919) fortalte den offentlige skolen som en seiershistorie, og i Tyskland og Norden var pedagogikkhistorien lenge en del av lærerutdanningens dannelsesprogram: en rekke klassikere fra Platon til Pestalozzi som lærerne skulle kjenne.

        Fra 1960-årene ble dette perspektivet utfordret. Bernard Bailyn (*Education in the Forming of American Society*, 1960) og Lawrence Cremin (*The Wonderful World of Ellwood Patterson Cubberley*, 1965) ville se utdanning som noe langt videre enn skolen, og revisjonistene, med Michael Katz (*The Irony of Early School Reform*, 1968) i spissen, leste skolereformene som sosial kontroll og klassepolitikk like mye som opplysning. Senere har sosialhistorie, kjønnshistorie, kulturhistorie og postkolonial kritikk gjort feltet bredere. Jane Roland Martin viste i *Reclaiming a Conversation* (1985) hvordan kanon i pedagogisk filosofi hadde latt oppdragelsen av jenter og arbeidet i hjemmet falle ut.

        ### Skolens grammatikk og reformenes historie
        David Tyack og Larry Cuban har vist hvor seigt skolens grunnformer lever: klasser etter alder, fag delt i timer og karakterer, det de kaller skolens «grammatikk» (Tyack og Tobin 1994; *Tinkering toward Utopia*, 1995). Mange reformer, fra arbeidsskolen til prosjektarbeid og dybdelæring, har møtt nettopp denne grammatikken. Marc Depaepe og medarbeidere har på samme måte vist, med belgiske klasserom 1880–1970 (*Order in Progress*, 2000), at praksis endret seg langt langsommere enn programmene. Det er en grunn til at appen holder idéene (epokene og prinsippene) og institusjonene (reformene og milepælene) fra hverandre: de har ulik takt.

        ### Språk, nasjon og reiser
        Daniel Tröhler (*Languages of Education*, 2011) har vist hvordan protestantiske tankemønstre, om det indre mennesket, samvittighet og selvdannelse, lever videre i moderne pedagogiske språk, også de som er verdslige og internasjonale. Thomas Popkewitz har lest reformer som «kulturelle teser» om hvem barnet og borgeren skal være. Slik forskning gjør det vanskelig å lese begreper som læring eller kompetanse som nøytrale. Den viser også at pedagogiske idéer reiser: fra Halle til København og Christiania, fra Jena og Chicago til norske seminarer, fra OECD til Kunnskapsløftet. De endrer seg underveis.

        ### Det norske sporet
        Norsk utdanningshistorie har sin egen forskningstradisjon. Alfred Oftedal Telhaug og Odd Asbjørn Mediås har skrevet grunnskolens historie som nasjonsbygging fra statspietisme til nyliberalisme (2003). Rune Slagstad har tolket skole og universitet som redskaper for *de nasjonale strateger* (1998), og Erling Lars Dale har skrevet pedagogikkfagets vitenskapshistorie i *De strategiske pedagoger* (1999). Gro Hagemann har skrevet lærernes historie (*Skolefolk*, 1992), og Kim Helsvig departementets historie (*Reform og rutine*, 2017). I appen er dette sporet synlig i to former: som teoretikere og epoker med norsk virkningshistorie, og som kategorien **Norsk spor** blant reformene og milepælene, en egen tidslinje fra katedralskolene til fagfornyelsen.

        ### Slik er historien ordnet her
        - **Retningene** (åtte) er idétradisjoner som går gjennom hele historien, ikke skoler i streng forstand: Klassisk dannelse, Kristen oppdragelse, Empiri og metode, Skolen for alle, Barnet i sentrum, Erfaring og demokrati, Læring og utvikling og Kritikk og frigjøring.
        - **Epokene** (45) er perioder eller bevegelser innenfor en retning, hver med en beskrivelse og egne tekster om *samfunnet* og *skolen og oppdragelsen*. Mange overlapper i tid.
        - **Påvirkningene** er strekene i slektstreet. Hver har en tekst om hvordan én epoke bygde på en annen; de stiplede strekene er motreaksjoner, der en epoke ble til i opposisjon til en annen.
        - **Prinsippene** går på tvers av epokene, som anskuelse, selvvirksomhet eller tilpasset opplæring, og viser «hos hvem og når» de dukker opp.
        - **Tidsrommene** på tidsaksen er ulike lange. Antikken og middelalderen er presset sammen, de siste hundre årene er strukket ut, fordi stoffet er tettest der.

        ### Les med kritiske briller
        Ethvert tre er en konstruksjon. At epokene henger sammen med streker, betyr ikke at historien gikk i en retning, og at en teoretiker står i én retning, betyr ikke at hun eller han passer der uten rest. Utvalget er europeisk og nordamerikansk, og det er fortsatt flere menn enn kvinner. Tekstene prøver å vise strid og tvil der forskningen er uenig. Bruk kildene, og si fra der du mener noe er feil, mangler eller burde vært fortalt annerledes.
      `,
      kilder: [
        snl("https://snl.no/norsk_utdanningshistorie"),
        bok("Bailyn, Bernard. Education in the Forming of American Society. University of North Carolina Press, 1960."),
        bok("Cremin, Lawrence A. The Wonderful World of Ellwood Patterson Cubberley: An Essay on the Historiography of American Education. Teachers College Press, 1965."),
        bok("Katz, Michael B. The Irony of Early School Reform: Educational Innovation in Mid-Nineteenth Century Massachusetts. Harvard University Press, 1968."),
        bok("Martin, Jane Roland. Reclaiming a Conversation: The Ideal of the Educated Woman. Yale University Press, 1985."),
        bok("Tyack, David og William Tobin. «The ‹Grammar› of Schooling: Why Has It Been So Hard to Change?» American Educational Research Journal 31, nr. 3 (1994): 453–479."),
        bok("Tyack, David og Larry Cuban. Tinkering toward Utopia: A Century of Public School Reform. Harvard University Press, 1995."),
        bok("Depaepe, Marc mfl. Order in Progress: Everyday Educational Practice in Primary Schools, Belgium, 1880–1970. Leuven University Press, 2000."),
        bok("Tröhler, Daniel. Languages of Education: Protestant Legacies, National Identities, and Global Aspirations. Routledge, 2011."),
        bok("Popkewitz, Thomas S. Cosmopolitanism and the Age of School Reform: Science, Education, and Making Society by Making the Child. Routledge, 2008."),
        bok("Telhaug, Alfred Oftedal og Odd Asbjørn Mediås. Grunnskolen som nasjonsbygger: Fra statspietisme til nyliberalisme. Abstrakt, 2003."),
        bok("Slagstad, Rune. De nasjonale strateger. Pax, 1998."),
        bok("Dale, Erling Lars. De strategiske pedagoger: Pedagogikkens vitenskapshistorie i Norge. Ad Notam Gyldendal, 1999."),
        bok("Hagemann, Gro. Skolefolk: Lærernes historie i Norge. Ad Notam Gyldendal, 1992."),
        bok("Helsvig, Kim G. Reform og rutine: Kunnskapsdepartementets historie 1945–2017. Pax, 2017."),
      ],
    },

    appGuide: {
      body: `
        Appen er et pensum i form av et nettverk: retninger, epoker, teoretikere, prinsipper og reformer som peker på hverandre. Det viktigste er å følge sammenhengene. Her er funksjonene, og noen det er lett å gå glipp av.

        ### Begynn på forsiden
        Forsiden har fire innganger: **Teoretikere**, **Epoker**, **Reformer og milepæler** og **Det store bildet**, og **Søk** finner alt på tvers. **Dagens teoretiker** gir deg én tilfeldig teoretiker; trykk «Vis ny teoretiker» for en ny. Du trenger ingen bestemt rekkefølge.

        ### Finn og filtrer teoretikere
        Under **Teoretikere** kan du filtrere på **retning**, **epoke**, **tidsrom** og **fagbakgrunn**, og kombinere filtrene, for eksempel psykologer i epoken Reformpedagogikken. Teoretikerkortet har leveår, beskrivelse, hovedverk, epoker og prinsipper, kilder og **beslektede teoretikere** du kan gå videre til. **Teoretikertidslinje** viser hvem som var virksomme samtidig.

        ### Epoker, retninger og prinsipper
        Under **Epoker** står epokene ordnet etter de åtte retningene, og **Oversikt** gir hver retning med beskrivelse. Epokekortet har en beskrivelse og to egne tekster: **Samfunn** og **Skole og oppdragelse**. Fanene gir også **Epokeperioder**, **Teoretikertidslinje**, **Prinsipper** og **Slektstre**. Et prinsippkort har en felles tekst, «**Hos hvem og når**» på tidsaksen, og noen har en **Se og les**-liste med utdrag og videoer.

        ### Se det store bildet
        **Det store bildet** viser stoffet fra flere vinkler:
        - **Slektstreet** viser hvordan epokene vokste ut av hverandre. Strekene er klikkbare og forteller hvordan én epoke påvirket en annen; de stiplede er motreaksjoner.
        - **Epokeperioder** viser når epokene var aktive, og **Teoretikertidslinje** når teoretikerne virket.
        - **Epokehimmelen** stiller teoretikerne opp rundt epokene sine. «Alle broer» viser dem som hører til flere epoker.
        - **Epokehistorier** er én sammenhengende fortelling per retning, en god vei inn hvis du heller vil lese enn klikke.
        - **Om historie** handler om hvordan pedagogikkhistorie skrives, og om hvordan historien er ordnet her.
        - **Referanser** samler alle kildene appen bygger på.

        ### Reformer og milepæler
        Her står lover, læreplaner, institusjoner, læremidler og metoder, fra Platons akademi til fagfornyelsen. Kategorien **Norsk spor** er en egen tidslinje for norsk skole: fra katedralskolene og skoleforordningen av 1739 til Kunnskapsløftet og LK20. Noen kort er merket som **viktige hendelser**, som PISA-sjokket og Brown mot Board of Education.

        ### Følg lenkene
        Nesten overalt der navnet på en teoretiker, en epoke eller en reform står i en tekst, kan du klikke på det. Følg lenkene dit nysgjerrigheten tar deg, så bygger du ditt eget nett av sammenhenger.

        ### Repeter smart
        Øverst under **Teoretikere** kan du vise bare de viktigste (**Bare viktigst**), de viktige og viktigste, eller alle med en viktighetsgrad. Det er greit før en prøve; uten filter ser du alt.

        ### Du former pensumet
        Mangler en teoretiker, eller er noe feil? Bruk **Foreslå en teoretiker**, eller **Foreslå endring** på et kort, og stem opp forslag du er enig i. Læreren går gjennom alt. Sender læreren et forslag tilbake til deg, får du en kode. Skriv den inn under «**Fått kode fra lærer?**» på forsiden, retter og sender på nytt.

        Tanken bak: begynn med helheten, gå i dybden der noe fanger deg, følg lenkene og kom tilbake. Jo mer du utforsker og bidrar, jo bedre blir pensumet.
      `,
    },

    skriveveiledning: {
      body: `
        Beskrivelsen er det første andre leser om teoretikeren. Skriv den slik at en fagperson kan stole på den og en student kan forstå den.

        ### Hva den bør inneholde
        - **Hvem:** posisjon, virkested og tid, kort.
        - **Hovedidéene**, med teoretikerens egne begreper og helst ett hovedverk ved navn (*i kursiv*).
        - **Plassen i historien:** hvem bygde hun eller han på, hvem tok idéene videre, og hvem kritiserte dem?
        - **Strid og tolkning:** der forskningen er uenig, si det, og si hvem som mener hva.
        - **Norsk spor**, hvis det finnes: hvordan idéene ble tatt imot eller brukt i Norge.

        ### Form
        Sikt mot 100–250 ord. Skriv med egne ord, presist og uten superlativer: «viktig» og «banebrytende» sier mindre enn hva teoretikeren faktisk gjorde. Unngå å lese dagens begreper inn i fortiden. Bruk **fet** sparsomt og *kursiv* for verktitler.

        ### Kilder
        Oppgi minst én kilde. Begynn gjerne med Store norske leksikon, Stanford Encyclopedia of Philosophy, Britannica eller Internet Encyclopedia of Philosophy, og legg til en bok eller artikkel der du har brukt en. Sjekk at lenken går til riktig artikkel. Årstall og navn skal kunne finnes igjen i kildene.
      `,
    },

    laererHandbok: {
      body: `
        Håndboka er bare for læreren. Den beskriver hvordan innholdet kom inn, og hvordan du holder det i orden.

        ### Innholdet kommer i runder
        Fase 6 er skrevet i runder, som JavaScript-moduler i mappa innhold/runde-N i repoet. Verktøyet tools/bygg-innholdsfil.js slår delene sammen til én importfil, sjekker den mot treet og henter hver lenke. Rundene er:
        1. Barnet i sentrum, Erfaring og demokrati og Skolen for alle
        2. Empiri og metode og Læring og utvikling
        3. Klassisk dannelse, Kristen oppdragelse og Kritikk og frigjøring
        4. Reformer og milepæler
        5. Innholdssidene: Om historie, Slik bruker du appen, Skriveveiledning og denne håndboka

        ### Import
        Importer under **Import og eksport**, i rekkefølgen over. Ta en **Eksporter** først, som sikkerhetskopi. Velg **«Slå sammen»** for alt etter runde 1: **«Erstatt alle»** sletter teoretikerne som ikke står i fila. Teoretikere og reformer matches på navn, så en runde kan importeres på nytt uten dubletter. Innholdssidene erstattes i sin helhet.

        ### Sjekk innholdet
        Alt som importeres, er usjekket. **Skrivebordet** viser det som venter på deg. Når **«Bare sjekket innhold»** står på under «Synlig for studentene», ser studentene bare det du har sjekket. Endrer en ny import teksten på noe du har sjekket, fjernes sjekken, så du ser det på nytt.

        ### Synlig for studentene
        Under «Synlig for studentene» på Skrivebordet slår du av og på kortene i Det store bildet. Som standard er Om historie, Epokehistorier, Epokehimmel, Referanser og Slik bruker du appen skjult til du slipper dem inn. I «Slik bruker du appen» slås hver del (hver mellomtittel) av og på for seg, og en ny del er skjult til du huker den av.

        ### Viktighetsgrad
        Stjernene på teoretikerkortene i lærerlista gir en grad: **Mindre viktig**, **Viktig** eller **Viktigst**. Studentene kan filtrere på graden under Teoretikere, så gradene bør settes før en prøveperiode. **Skjult** tar en teoretiker ut av studentvisningen uten å slette den.

        ### Forslag fra studentene
        Nye teoretikere og endringsforslag venter på godkjenning. Du kan godkjenne, avvise eller **sende tilbake** med en tilbakemelding. Da får du en kode som du gir studenten, og studenten åpner forslaget igjen under «Fått kode fra lærer?» på forsiden.

        ### Kildene
        Hver kilde har en tekst og eventuelt en lenke og en kategori (Bøker, Podkaster, Videoer, Nettsteder). Referanser-kortet bygges av kildene på alle kortene. Frittstående referanser legges inn på lærersiden. Nettkilder står som publikasjonen alene, for eksempel «Store norske leksikon.», og lenken bærer artikkelen.

        ### Faresone
        **Slett all teoretikerdata** sletter alle teoretikerkortene for godt. Appen laster ned en sikkerhetskopi først, og du må skrive SLETT for å bekrefte.
      `,
    },
  },
};
