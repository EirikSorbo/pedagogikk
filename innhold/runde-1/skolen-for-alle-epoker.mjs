// Runde 1 — Skolen for alle: retningen, epokene og påvirkningene (fase 6, skrevet av Opus).
import { snl, brit, ndb, side, bok } from "../kilder.mjs";

const TELHAUG = bok("Telhaug, Alfred Oftedal og Odd Asbjørn Mediås. Grunnskolen som nasjonsbygger. Fra statspietisme til nyliberalisme. Abstrakt forlag, 2003.");
const DOKKA = bok("Dokka, Hans-Jørgen. En skole gjennom 250 år. Den norske allmueskolen, folkeskolen, grunnskolen 1739–1989. NKS-forlaget, 1988.");
const SLAGSTAD = bok("Slagstad, Rune. De nasjonale strateger. Pax, 1998.");
const THUEN = bok("Thuen, Harald. Den norske skolen. Utdanningssystemets historie. Abstrakt forlag, 2017.");
const HAUG = side("Haug, Peder. «Understanding inclusive education: ideals and reality.» Scandinavian Journal of Disability Research 19, nr. 3 (2017): 206–217.", "https://doi.org/10.1080/15017419.2016.1224778");
const ALLMUE = snl("https://snl.no/allmueskole", "Merethe Roos og Harald Jarning");
const FOLKESKOLEN = snl("https://snl.no/folkeskolen", "Merethe Roos og Harald Jarning");
const ENHET = snl("https://snl.no/enhetsskole", "Kirsten Sivesind");

export default {
  genreDescriptions: {
    meta: {
      "Skolen for alle": {
        meta: {
          description: `
            Retningen følger ideen om at alle barn, uansett stand, kjønn, bosted og forutsetninger, skal gå i skole, og helst i den samme skolen. Den begynner med opplysningstidens og statspietismens folkeundervisning, går gjennom folkehøgskolen og den allmenne folkeskolen på 1800-tallet til enhetsskolen og den inkluderende skolen i det 20. århundre. Retningen bærer norsk skolehistorie, fra allmueskolen av 1739 til den tiårige grunnskolen. Felles er tanken om at en felles skole er en forutsetning for et samlet folk og et demokrati. Felles er også spørsmålet om hva fellesskapet krever av dem som ikke passer inn i normen.
          `,
          kilder: [ENHET, TELHAUG],
        },
        story: {
          body: `
            ### Lesing for konfirmasjonen
            Den norske skolen for alle begynte ikke som et demokratisk prosjekt, men som et religiøst og statlig. Da konfirmasjonen ble innført i 1736, måtte alle barn kunne lese og forstå katekismen, og forordningen om allmueskolen på landet i Danmark og Norge (1739), med en egen norsk forskrift i 1741, skulle sørge for det. Lærebok var Erik Pontoppidans *Forklaring* (1737), som ble brukt i Norge i over 150 år. Skolen var ofte en omgangsskole som flyttet mellom gårdene, og lærerne var dårlig betalt, men resultatet var at en stor del av befolkningen kunne lese allerede før 1800. Telhaug og Mediås kaller perioden statspietisme: staten brukte pietismens krav om personlig tro til å bygge en skole for alle.

            ### Opplysning og fellesskole
            Samtidig formulerte opplysningstiden et annet argument for å undervise hele folket: fornuften. I Prøyssen og Habsburgmonarkiet ble skoleplikt en del av statsbyggingen, og reformatorer som Rochow og Felbiger laget lesebøker og metoder for bondebarn. Condorcet la i 1792 fram en plan for et gratis, offentlig og trinnvis undervisningsvesen for gutter og jenter, uavhengig av både kirke og politisk makt. I USA gjorde Horace Mann «the common school» til en demokratisk institusjon, og Catharine Beecher gjorde lærergjerningen til et kvinneyrke.

            ### Folkehøgskolen og det levende ord
            Grundtvig kritiserte både den lærde latinskolen og opplysningstidens bokkunnskap og ville ha en «skole for livet» for unge voksne fra bygdene, bygd på det levende ord, morsmålet og historien. Folkehøgskolen kom til Norge med Sagatun i 1864 og ble en del av den nasjonale og demokratiske bevegelsen som fikk sitt politiske gjennombrudd med parlamentarismen i 1884. Christopher Bruun og andre gjorde folkehøgskolen til en skole for nasjonal gjenreisning.

            ### Fra allmueskole til folkeskole
            I Norge kom det første store sporskiftet med lovene av 1827 og 1860, da faste skoler ble regelen og fagkretsen ble utvidet. Hartvig Nissen og Ole Vig drev dette fram gjennom Selskabet for Folkeoplysningens Fremme. Folkeskoleloven av 1889 skapte en sjuårig skole for barn fra alle samfunnslag, med valgte skolestyrer i stedet for kirkens menn, og jamstillingsvedtaket i 1885 hadde åpnet for undervisning på elevenes eget talemål. Folkeskolen ble nasjonsbyggingens viktigste institusjon.

            ### Enhetsskolen
            Fra Stortingets enhetsskolevedtak i 1920 skulle alle videre skoleløp bygge på den felles folkeskolen. Arbeiderbevegelsen gjorde enhetsskolen til en velferdsinstitusjon: den skulle utjevne klasseforskjeller og oppdra demokratiske borgere. Normalplanen av 1939 tok inn reformpedagogikkens arbeidsskole, forsøksloven av 1954 åpnet for skoleforsøk i stor skala, folkeskoleloven av 1959 ga felles lov for by og land, og grunnskoleloven av 1969 gjorde den niårige skolen obligatorisk. Helge Sivertsen var den politiske strategen bak. Rune Slagstad har vist hvordan enhetsskolen var en del av et større nasjonalt og sosialdemokratisk kunnskapsregime.

            ### Inkludering og det normale
            Enhetsskolen hadde sine grenser. Samiske og kvenske barn ble utsatt for fornorskning, og barn med funksjonsnedsettelser gikk i spesialskoler eller fikk ikke skole i det hele tatt. Normaliseringsprinsippet fra Danmark og Sverige og integreringsloven av 1975 gjorde spesialundervisningen til en del av grunnskolen, og Salamanca-erklæringen (1994) og L97 gjorde den inkluderende skolen til et ideal. Peder Haug har vist at idealet har bred oppslutning, men at praksis ofte går motsatt vei. Retningen ender dermed i det samme spørsmålet den begynte med: hva betyr det å være felles, og hvem bestemmer normen?
          `,
        },
      },
    },

    main: {
      "Folkeopplysningen": {
        main: {
          description: `
            Folkeopplysningen betegner de tiltakene på 1700-tallet som for første gang skulle gi hele folket en grunnleggende undervisning. Motivet var dels religiøst, dels opplysningsfilosofisk og dels statlig. I Danmark-Norge kom allmueskolen med forordningen av 1739, etter at konfirmasjonen ble innført i 1736: alle barn skulle lære å lese og forstå katekismen gjennom Pontoppidans *Forklaring* (1737). I Prøyssen kom det generelle landsskolereglementet i 1763, i Habsburgmonarkiet Felbigers skoleordning med skoleplikt i 1774, og godseiere som Rochow i Reckahn laget mønsterskoler og verdslige lesebøker for bondebarn.

            Opplysningstiden stilte samtidig spørsmålet om hvor mye opplysning folket skulle ha. Det prøyssiske akademiet utlyste i 1780 en prisoppgave om det var nyttig å bedra folket, og mange reformatorer ville gi bøndene nettopp nok kunnskap til å bli bedre bønder. Condorcets plan fra 1792 brøt med dette: undervisningen skulle være lik for alle og gjøre hver borger i stand til å tenke selv. Forskningen har pekt på at folkeundervisningen i de protestantiske landene ga høy leseferdighet tidlig, men en lesing bundet til religiøse tekster, mens skrivekunnskap kom langt senere. I norsk sammenheng har Telhaug og Mediås beskrevet perioden som statspietisme.
          `,
          activeFrom: 1739,
          activeTo: 1800,
          era: "ca. 1739–1800",
          samfunn: `
            Eneveldet i Danmark-Norge og de tyske statene ville ha lydige og nyttige undersåtter. Pietismen krevde personlig tro og kunnskap av hver enkelt, og kongen brukte den til å disiplinere både kirke og folk. Opplysningstidens tro på fornuften og fremskrittet nådde et voksende borgerskap. Mot slutten av hundreåret satte den franske revolusjonen allmenn utdanning på den politiske dagsordenen.
          `,
          skole: `
            Allmueskolen på landet var ofte en omgangsskole som flyttet mellom gårdene, med en lærer som gjerne var klokker eller tidligere soldat, og med lesing og kristendom som hovedfag. Den norske forskriften av 1741 dempet kravene fra 1739. Byene hadde latinskoler og fattigskoler. Konfirmasjonen ble skolens eksamen, og leseferdighet en forutsetning for å bli regnet som voksen.
          `,
          kilder: [ALLMUE, DOKKA, TELHAUG],
        },
      },

      "Folkehøgskolen": {
        main: {
          description: `
            Folkehøgskolen er en skole for unge voksne, uten eksamen, bygd på Grundtvigs idé om en «skole for livet». Den første ble åpnet i Rødding i 1844, og Christen Kold ga den den praktiske formen med kost og losji, fortelling og felles liv mellom lærere og elever. I Norge åpnet Sagatun ved Hamar i 1864, og det fulgte mange folkehøgskoler de neste tiårene. Sverige fikk sine første i 1868. Grundtvig kritiserte både latinskolens «døde» bokkunnskap og opplysningstidens rasjonalisme, og satte det levende ord, morsmålet, historien og sangen i sentrum.

            Folkehøgskolen var en del av den nasjonale og demokratiske mobiliseringen av bondestanden. I Danmark og Norge hang den nært sammen med de politiske venstrebevegelsene, med pressen og med frilynte ungdomslag. Forskningen har diskutert spenningen mellom det nasjonale og det demokratiske i tradisjonen, og hvordan «folkelighet» kunne romme både frigjøring og ekskludering. Ove Korsgaard har plassert folkehøgskolen i en lang historie om kampen om folkets opplysning. I Norge fikk folkehøgskolen egen lov i 1949 og er fortsatt en egen skoleform, nå mer preget av allmenndanning og fellesskap enn av nasjonal vekkelse.
          `,
          activeFrom: 1844,
          activeTo: null,
          era: "1844–",
          samfunn: `
            Bondestanden ble en politisk kraft i Danmark og Norge i siste halvdel av 1800-tallet, og nasjonalromantikken gjorde folkets språk og historie til grunnlag for nasjonen. Grunnloven i Danmark (1849) og parlamentarismen i Norge (1884) var milepæler. Krigen i 1864 gjorde den nasjonale vekkelsen sterkere i Danmark.
          `,
          skole: `
            Folkehøgskolen var et alternativ til den lærde skolen for ungdom fra bygdene, med vinterkurs, internat, foredrag, sang og samtale. Den ga ingen formelle rettigheter, men utdannet en generasjon lærere, politikere og ledere i ungdomslag og samvirke. I Norge sto den også bak framveksten av landsgymnasene og en egen nynorsk skolekultur.
          `,
          kilder: [
            snl("https://snl.no/folkeh%C3%B8gskole", "Johan Lövgren"),
            snl("https://snl.no/Nikolai_Frederik_Severin_Grundtvig", "Merethe Roos"),
            bok("Korsgaard, Ove. Kampen om lyset. Dansk voksenoplysning gennem 500 år. Gyldendal, 1997."),
          ],
        },
      },

      "Folkeskolen": {
        main: {
          description: `
            Folkeskolen er den allmenne, offentlige skolen som i løpet av 1800-tallet ble bygd ut i de fleste vestlige land som en felles skole for alle barn, finansiert og styrt av det offentlige. I USA ble «the common school» etter Horace Manns mønster grunnlaget, Frankrike fikk gratis, obligatorisk og sekulær skole med Ferry-lovene 1881–1882, og England sin første allmenne skolelov i 1870. Skolen skulle gjøre barna til lesekyndige, skrivekyndige og regnekyndige borgere, og den skulle samle nasjonen.

            I Norge gikk veien fra allmueskolen gjennom lovene av 1827 og 1860, som gjorde faste skoler til regelen og utvidet fagkretsen, til folkeskoleloven av 1889. Den skapte en sjuårig skole for barn fra sju til fjorten år og fra alle samfunnslag, og erstattet kirkens stiftsdireksjon med valgte skolestyrer. Folkeskolen ble nasjonsbyggingens viktigste redskap: Nordahl Rolfsens lesebok, morsmålsundervisningen etter jamstillingsvedtaket i 1885, norsk historie og geografi. Forskningen har også vist baksiden: folkeskolen var et redskap for fornorskning av samiske og kvenske barn, og den revisjonistiske historieskrivningen, fra Michael Katz i USA, har lest fellesskolen som et middel for disiplinering og sosial kontroll like mye som for frigjøring.
          `,
          activeFrom: 1840,
          activeTo: 1920,
          era: "ca. 1840–1920",
          samfunn: `
            Industrialiseringen, byveksten og den politiske demokratiseringen gjorde utdanning til en sak for staten og for de nye folkebevegelsene. Nasjonalismen ga skolen oppgaven å skape en felles nasjonal identitet. I Norge vokste det fram en embetsmannsstat som moderniserte skolen, og en folkelig bevegelse som krevde innflytelse over den.
          `,
          skole: `
            Omgangsskolen ble erstattet av faste skoler, lærerne ble utdannet ved seminarer, og fagene ble flere: lesing, skriving, regning, kristendom, historie, geografi og naturfag. I byene ble folkeskolen i praksis en skole for de lavere klassene, mens borgerskapets barn gikk i private forberedende skoler. Det var først mot slutten av perioden at folkeskolen ble en felles grunnskole for alle.
          `,
          kilder: [FOLKESKOLEN, ALLMUE, brit("https://www.britannica.com/topic/common-school"), DOKKA],
        },
      },

      "Enhetsskolen": {
        main: {
          description: `
            Enhetsskolen er ideen om én felles grunnskole for alle barn, som alle videre utdanningsløp bygger på, i stedet for parallelle skoler for ulike samfunnsklasser. Idéen har røtter i opplysningstiden, men ble et politisk program etter første verdenskrig. I Tyskland krevde Paul Oestreich og Bund Entschiedener Schulreformer en «elastisk enhetsskole», og Weimar-republikken fikk en felles fireårig grunnskole i 1920. I Sverige la skolekommisjonen av 1946, med Alva Myrdal blant medlemmene, grunnlaget for den niårige grunnskolen fra 1962.

            I Norge fikk ordet formell betydning gjennom Stortingets enhetsskolevedtak i 1920, som gjorde den sjuårige folkeskolen til felles grunnlag for middelskolen. Arbeiderbevegelsen bygde enhetsskolen ut som en velferdsinstitusjon: Normalplanen av 1939, forsøksloven av 1954, folkeskoleloven av 1959 for by og land, og grunnskoleloven av 1969 med niårig skoleplikt. Mønsterplanen av 1974 ble den første læreplanen for den nye grunnskolen. Forskningen, fra Telhaug og Mediås til Slagstad, har lest enhetsskolen som et nasjonsbyggende og sosialdemokratisk prosjekt, der pedagogiske og politiske mål gikk sammen. Kritikken har pekt på at fellesskolen også var en normaliseringsmaskin, og på spenningen mellom likhet og tilpasning til den enkelte.
          `,
          activeFrom: 1920,
          activeTo: 1975,
          era: "ca. 1920–1975",
          samfunn: `
            Mellomkrigstiden var preget av klassekamp og økonomisk krise, og etter 1945 bygde sosialdemokratiet velferdsstaten i Norden. Utdanning ble sett som nøkkelen til både økonomisk vekst og sosial utjevning. Etterkrigstidens planøkonomi og tro på forskning og forsøk preget også skolepolitikken.
          `,
          skole: `
            Folkeskolen ble den felles inngangen til all videre utdanning, og skoleplikten ble utvidet fra sju til ni år. Forsøk med niårig skole gikk over hele landet fra 1950-tallet, og ungdomsskolen erstattet framhaldsskolen og realskolen. Normalplanen av 1939 og Mønsterplanen av 1974 ga felles læreplaner, og forskjellene mellom by og land, og mellom elever fra ulike klasser, skulle utjevnes.
          `,
          kilder: [ENHET, snl("https://snl.no/M%C3%B8nsterplan_for_grunnskolen_1974", "Elise Farstad Djupedal"), SLAGSTAD, TELHAUG],
        },
      },

      "Inkludering": {
        main: {
          description: `
            Inkludering betegner idealet om en skole der alle elever, også de med funksjonsnedsettelser og andre særlige behov, hører til i det samme faglige og sosiale fellesskapet. Tradisjonen begynte i sosialpolitikken med normaliseringsprinsippet fra Danmark (1959) og Sverige (1969), og i skolen med integrering: i Norge ble spesialskoleloven opphevet og spesialundervisningen tatt inn i grunnskoleloven i 1975. Warnock-rapporten (1978) erstattet kategoriene for handikap med begrepet spesielle opplæringsbehov, og Salamanca-erklæringen fra UNESCO (1994) gjorde inkluderende skoler til et internasjonalt mål.

            I Norge ble «den inkluderende skolen» et hovedprinsipp i L97, og retten til tilpasset opplæring og spesialundervisning ble slått fast i opplæringsloven (1998). FN-konvensjonen om rettighetene til mennesker med nedsatt funksjonsevne (2006) gir retten til inkluderende utdanning folkerettslig status. Forskningen har vist at begrepet er utvidet fra funksjonsnedsettelser til alle former for ulikhet, og at det har blitt et ideal med bred oppslutning, men med en praksis som ofte trekker andre veier. Peder Haug skiller mellom fellesskap, deltakelse, demokratisering og læringsutbytte, og viser at spesialundervisningen i norsk skole ofte foregår utenfor klassen. Mary Warnock selv kritiserte i 2005 den britiske inkluderingspolitikken for å ha gått for langt.
          `,
          activeFrom: 1975,
          activeTo: null,
          era: "ca. 1975–",
          samfunn: `
            Avinstitusjonaliseringen, funksjonshemmedes rettighetsbevegelse og et nytt syn på menneskerettigheter preget tiårene fra 1970. I Norge ble de store institusjonene for utviklingshemmede avviklet med HVPU-reformen i 1991. Kunnskapssamfunnet og økende mangfold i befolkningen gjorde fellesskolen både viktigere og vanskeligere.
          `,
          skole: `
            Spesialskolene ble i stor grad lagt ned eller gjort om til kompetansesentre, og elever med særlige behov fikk rett til spesialundervisning i sin nærskole. Tilpasset opplæring ble et prinsipp for alle elever. Samtidig har andelen elever med spesialundervisning, bruk av assistenter og egne grupper vist hvor vanskelig idealet er å realisere.
          `,
          kilder: [
            snl("https://snl.no/spesialpedagogikk", "Anders Nordahl-Hansen"),
            snl("https://snl.no/tilpasset_oppl%C3%A6ring"),
            HAUG,
          ],
        },
      },
    },
  },

  edgeDescriptions: {
    pietisme__folkeopplysning: {
      description: `
        Pietismen krevde at hver enkelt skulle ha en personlig tro bygd på egen lesing av Bibelen og katekismen. I Danmark-Norge brukte den pietistiske kongen dette kravet til å innføre konfirmasjonen (1736) og allmueskolen (1739), med Pontoppidans katekismeforklaring som lærebok. Franckes skoler i Halle var et forbilde for skolereformer i flere protestantiske stater.
      `,
      kilder: [snl("https://snl.no/Erik_Pontoppidan_-_den_yngre", "Torleiv Austad"), TELHAUG],
    },
    folkeopplysning__folkehogskole: {
      description: `
        Grundtvig delte opplysningstidens mål om et opplyst folk, men avviste dens rasjonalisme og bokkunnskap. Folkehøgskolen skulle vekke og danne gjennom det levende ord, morsmålet og historien, ikke gjennom lærebøker og eksamen.
      `,
      kilder: [snl("https://snl.no/folkeh%C3%B8gskole", "Johan Lövgren")],
    },
    folkeopplysning__folkeskolen: {
      description: `
        Opplysningstidens planer om undervisning for hele folket, som Condorcets, ble virkeliggjort i 1800-tallets folkeskolelover. I Norge drev Selskabet for Folkeoplysningens Fremme (1851), med Hartvig Nissen og Ole Vig, fram skoleloven av 1860, og folkeopplysningens idealer ble en del av den statlige folkeskolen.
      `,
      kilder: [ALLMUE],
    },
    folkeskolen__enhetsskolen: {
      description: `
        Folkeskoleloven av 1889 skapte en skole for barn fra alle samfunnslag, men borgerskapet sendte fortsatt mange barn til private forberedende skoler. Enhetsskolevedtaket i 1920 gjorde den felles folkeskolen til grunnlag for all videre utdanning, og arbeiderbevegelsen bygde den ut til en niårig grunnskole.
      `,
      kilder: [FOLKESKOLEN, ENHET],
    },
    reformpedagogikk__enhetsskolen: {
      description: `
        Enhetsskolen tok opp reformpedagogikkens arbeidsmåter. I Tyskland forente Oestreichs skolereformforbund reformpedagogikk og enhetsskole, og i Norge førte Anna Sethne arbeidsskoleprinsippet og heimstadlære inn i Normalplanen av 1939.
      `,
      kilder: [side("Norsk biografisk leksikon: Anna Sethne.", "https://nbl.snl.no/Anna_Sethne"), ndb("https://www.deutsche-biographie.de/sfz73132.html")],
    },
    enhetsskolen__inkludering: {
      description: `
        Enhetsskolens løfte om at alle barn skulle gå i samme skole, ble utvidet til barn som tidligere gikk i spesialskoler eller ikke fikk skole. Integreringen fra 1975 og inkluderingen fra 1990-tallet viste samtidig at enhetsskolen hadde bygd på en norm for den vanlige eleven, som nå måtte endres.
      `,
      kilder: [HAUG, snl("https://snl.no/spesialpedagogikk", "Anders Nordahl-Hansen")],
    },
  },
};
