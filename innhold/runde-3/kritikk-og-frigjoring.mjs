// Runde 3 — Kritikk og frigjøring: retningen, epokene, teoretikerne og påvirkningene (fase 6, skrevet av Opus 2026-10-21).
import { snl, sep, iep, bok } from "../kilder.mjs";

const R = "Kritikk og frigjøring";
const FREIRE = bok("Freire, Paulo. De undertryktes pedagogikk. Gyldendal, 1974. (Pedagogia do oprimido, skrevet 1968.)");
const ILLICH = bok("Illich, Ivan. Deschooling Society. Harper & Row, 1971.");
const BOURDIEU = bok("Bourdieu, Pierre og Jean-Claude Passeron. La reproduction: Éléments pour une théorie du système d'enseignement. Minuit, 1970.");
const GIROUX = bok("Giroux, Henry A. Theory and Resistance in Education: A Pedagogy for the Opposition. Bergin & Garvey, 1983.");
const ELLSWORTH = bok("Ellsworth, Elizabeth. «Why Doesn't This Feel Empowering? Working Through the Repressive Myths of Critical Pedagogy.» Harvard Educational Review 59, nr. 3 (1989): 297–324.");
const KUMASHIRO = bok("Kumashiro, Kevin K. «Toward a Theory of Anti-Oppressive Education.» Review of Educational Research 70, nr. 1 (2000): 25–53.");
const BROMSETH = bok("Bromseth, Janne og Frida Darj (red.). Normkritisk pedagogik: Makt, lärande och strategier för förändring. Centrum för genusvetenskap, Uppsala universitet, 2010.");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler tradisjonene som ser oppdragelse og skole i lys av makt, og som vil at utdanningen skal frigjøre, ikke bare tilpasse. Den går fra Frankfurterskolens kritiske teori via 1970-tallets frigjøringspedagogikk og skolekritikk (Freire, Illich, Bourdieu) til den angloamerikanske kritiske pedagogikken og dagens normkritikk. Felles er spørsmålene om hvem skolen tjener, hvordan den reproduserer klasse, kjønn og etnisitet, og hvordan undervisning kan gjøre elever i stand til å forstå og forandre sin situasjon. Felles er også kritikken retningen har fått: at den moraliserer, at frigjøringen ofte defineres av læreren, og at den sier mer om hva som er galt enn om hva skolen bør gjøre. I Norge har den vært tydeligst i positivismestriden, skolekritikken rundt 1970 og nyere normkritisk pedagogikk.
          `,
          kilder: [snl("https://snl.no/kritisk_teori"), snl("https://snl.no/Paulo_Freire")],
        },
        story: {
          body: `
            ### Kritisk teori
            Retningen begynner ikke i skolen, men i Frankfurt. Instituttet for sosialforskning, med Max Horkheimer som leder fra 1930, ville forstå hvorfor arbeiderklassen i Tyskland ikke gjorde opprør, men fulgte autoritære ledere. Studiene av autoritet og familie (1936) og senere av den autoritære personligheten gjorde oppdragelsen til et politisk spørsmål. I eksil skrev Horkheimer og Adorno *Opplysningens dialektikk* (1944/1947): den samme fornuften som skulle frigjøre mennesket, var blitt et redskap for herredømme. Etter krigen ble Adornos radiofordrag om oppdragelse til myndighet og hans krav om at Auschwitz aldri må gjenta seg (1966) en pedagogisk arv, og Jürgen Habermas' lære om kunnskapsinteresser (1968) ga den kritiske pedagogikken et emansipatorisk mål. I Norge førte Hans Skjervheim an i oppgjøret med positivismen.

            ### Frigjøring og skolekritikk
            Rundt 1970 ble kritikken et program. Paulo Freire, som hadde lært fattige bønder i Brasil å lese ved å ta utgangspunkt i deres egne ord og livssituasjon, beskrev i *De undertryktes pedagogikk* (skrevet 1968) en «bankpedagogikk» som fyller passive elever med kunnskap, og satte opp mot den en dialogisk pedagogikk som gjør dem bevisste på sin situasjon. Ivan Illich ville avskole samfunnet, Pierre Bourdieu og Jean-Claude Passeron viste hvordan skolen gjør kulturell arv om til fortjeneste, og Basil Bernstein beskrev språkkoder som skiller elevene etter klasse. I Norge spurte Nils Christie hva som ville skje *Hvis skolen ikke fantes* (1971).

            ### Kritisk pedagogikk
            Fra 1980-årene samlet Henry Giroux, Peter McLaren, Michael Apple og bell hooks tradisjonen under navnet *critical pedagogy*. Skolen er en arena for kamp om kunnskap, kultur og identitet, lærere skal være «transformative intellektuelle», og undervisningen skal gjøre elevenes erfaringer til utgangspunkt for kritisk refleksjon. Elizabeth Ellsworth (1989) og andre feminister svarte at frigjøringsretorikken kunne skjule lærerens egen makt og overse forskjellene mellom de undertrykte.

            ### Normkritikken
            Den siste epoken flytter blikket fra de undertrykte til normene som gjør noen til avvik. Kevin Kumashiro beskrev en antiundertrykkende utdanning som utfordrer det normale, inspirert av Judith Butlers teori om kjønn og av skeiv teori, og i Sverige og Norge ble normkritisk pedagogikk et begrep i lærerutdanning og skoleutvikling fra omkring 2010. Debatten om normkritikken har vært skarp: tilhengerne ser den som et redskap mot diskriminering, kritikerne som moralisering og identitetspolitikk. Spørsmålet retningen har stilt siden Frankfurt, om utdanning skal tilpasse eller frigjøre, står uansett åpent.
          `,
        },
      },
    },
    main: {
      "Kritisk teori": {
        main: {
          era: "1930-tallet–", activeFrom: 1930, activeTo: 1990,
          description: `
            Kritisk teori er Frankfurterskolens samfunnsteori: en tverrfaglig kritikk av samfunnet ut fra en interesse i menneskets frigjøring. Max Horkheimer satte i «Traditionelle und kritische Theorie» (1937) en teori som vil forandre samfunnet, opp mot en tradisjonell vitenskap som tar det bestående for gitt. *Studien über Autorität und Familie* (1936) og senere *The Authoritarian Personality* (1950) undersøkte hvordan familie og oppdragelse skaper underdanige mennesker, og *Opplysningens dialektikk* (1944/1947) viste hvordan den instrumentelle fornuften slår over i herredømme.

            Theodor W. Adorno ga tradisjonen pedagogisk form. «Theorie der Halbbildung» (1959) kritiserer en dannelse som er blitt konsum og tilpasning, og radioforedragene om «Erziehung zur Mündigkeit» og «Erziehung nach Auschwitz» (1966) gjør myndighet og motstand mot autoritær karakter til oppdragelsens første mål. Jürgen Habermas skilte i *Erkenntnis und Interesse* (1968) mellom tekniske, praktiske og emansipatoriske kunnskapsinteresser, og senere mellom systemets og livsverdenens rasjonalitet (*Theorie des kommunikativen Handelns*, 1981).

            I Tyskland ga dette en kritisk-emansipatorisk pedagogikk (Mollenhauer, Klafki, Blankertz). I Norge var positivismestriden fra 1960-årene, med Hans Skjervheim som sentral, den viktigste mottakelsen, og den preget pedagogikkfaget og lærerutdanningen i 1970-årene.
          `,
          samfunn: `
            Weimarrepublikkens krise, nasjonalsosialismen, eksilet i USA og etterkrigstidens Vest-Tyskland, der oppgjøret med fortiden og studentopprøret i 1968 ga kritisk teori et stort publikum. Masseproduksjon, kulturindustri og et nytt forbrukersamfunn var kritikkens gjenstander.
          `,
          skole: `
            Etterkrigstidens demokratiseringsprogrammer i Vest-Tyskland, kritikk av autoritær oppdragelse og en ny vekt på myndighet, kritisk tenkning og politisk dannelse i skolen. I Norge ble vitenskapsteori og kritikk av positivistisk pedagogikk en del av pedagogikkstudiet.
          `,
          kilder: [snl("https://snl.no/kritisk_teori"), snl("https://snl.no/Frankfurterskolen"), sep("https://plato.stanford.edu/entries/critical-theory/")],
        },
      },
      "Frigjøringspedagogikk": {
        main: {
          era: "ca. 1968–1985", activeFrom: 1968, activeTo: 1985,
          description: `
            Frigjøringspedagogikken og skolekritikken rundt 1970 gjorde skolen selv til problemet. Paulo Freire hadde ledet alfabetiseringskampanjer i det nordøstlige Brasil, der bønder lærte å lese gjennom «generative ord» fra sitt eget liv, til militærkuppet i 1964 sendte ham i eksil. *De undertryktes pedagogikk* (skrevet 1968, på norsk 1974) setter «bankpedagogikken» opp mot en problemformulerende, dialogisk pedagogikk der lærer og elev lærer sammen, og der bevisstgjøring (*conscientização*) fører til handling.

            Ivan Illich ville avskole samfunnet (*Deschooling Society*, 1971): skolen lærer folk å forveksle undervisning med læring og karakterer med kunnskap, og bør erstattes av «læringsnett». Pierre Bourdieu og Jean-Claude Passeron (*Les Héritiers*, 1964; *La Reproduction*, 1970) viste hvordan skolen belønner den kulturelle kapitalen barn fra privilegerte hjem har med seg, og dermed legitimerer ulikhet som fortjeneste. Basil Bernstein beskrev hvordan språkkoder og pedagogiske koder fordeler kunnskap etter klasse, og Philip Jackson og andre gjorde den skjulte læreplanen til et begrep.

            I Norge spurte kriminologen Nils Christie i *Hvis skolen ikke fantes* (1971) hva skolen egentlig gjør med barn og unge, og elev- og lærerorganisasjoner krevde mindre eksamen, karakterer og autoritet. Kritikerne pekte på at avskolingen mest ville ramme de svakeste, og at reproduksjonsteorien ga lite rom for handling.
          `,
          samfunn: `
            Avkolonisering, militærdiktaturer i Latin-Amerika, frigjøringsteologi, studentopprør og en ny venstrebevegelse i Europa og Nord-Amerika. Den raske utbyggingen av utdanning hadde ikke gitt den sosiale utjevningen mange hadde ventet.
          `,
          skole: `
            Alfabetiseringskampanjer for voksne i Latin-Amerika og Afrika, frie skoler og forsøksskoler i vest, og en ny utdanningssosiologi som studerte skolen som sorteringsmaskin. I Norge ble karakterer, eksamen og skolens disiplin tema for elevaksjoner og offentlig debatt.
          `,
          kilder: [snl("https://snl.no/Paulo_Freire"), snl("https://snl.no/Ivan_Illich"), snl("https://snl.no/Pierre_Bourdieu"), FREIRE, BOURDIEU],
        },
      },
      "Kritisk pedagogikk": {
        main: {
          era: "ca. 1985–2010", activeFrom: 1983, activeTo: 2010,
          description: `
            Kritisk pedagogikk (*critical pedagogy*) er den angloamerikanske samlingen av Freire, Frankfurterskolen, Gramsci og nyere kulturteori. Henry Giroux (*Theory and Resistance in Education*, 1983) kritiserte reproduksjonsteoriene for å gjøre elever og lærere til passive brikker, og beskrev skolen som et sted for kamp og motstand, der lærere skal være transformative intellektuelle. Peter McLaren (*Life in Schools*, 1989) og Michael Apple (*Ideology and Curriculum*, 1979; *Official Knowledge*, 1993) analyserte hvordan læreplaner og skolekultur fordeler makt og anerkjennelse.

            bell hooks ga tradisjonen en feministisk og antirasistisk stemme (*Teaching to Transgress*, 1994): en «engasjert pedagogikk» der læreren tar hele mennesket på alvor, og der klasserommet kan være et sted for frihet. Paul Willis' studie av arbeidergutter (*Learning to Labour*, 1977) ble et klassisk eksempel på at motstand mot skolen kan bidra til å reprodusere klasse.

            Elizabeth Ellsworth (1989) kritiserte at «empowerment» og «dialog» skjuler lærerens makt og overser at elevene er ulikt undertrykt, og andre har pekt på retningens tunge språk og svake forbindelse til skolens hverdag. Tradisjonen har likevel hatt stor innflytelse på lærerutdanning og forskning om sosial rettferdighet, mest i USA og Storbritannia.
          `,
          samfunn: `
            Nyliberalisme under Reagan og Thatcher, kulturkriger om kanon og identitet, migrasjon og flerkulturelle klasserom, og en skolepolitikk med standarder og testing (*A Nation at Risk*, 1983) som kritikerne så som en ny form for styring.
          `,
          skole: `
            Flerkulturell undervisning, antirasistisk pedagogikk og kritisk literacy, og en kritikk av standardiserte prøver og læreplaner. I Norden fikk tradisjonen en mindre, men tydelig plass i lærerutdanning og forskning om ulikhet og mangfold.
          `,
          kilder: [GIROUX, ELLSWORTH, snl("https://snl.no/bell_hooks")],
        },
      },
      "Normkritikken": {
        main: {
          era: "2000-tallet–", activeFrom: 2000, activeTo: null,
          description: `
            Normkritisk pedagogikk flytter oppmerksomheten fra de som avviker, til normene som gjør dem til avvikere: forestillinger om hva som er normalt når det gjelder kjønn, seksualitet, etnisitet, funksjonsevne og klasse. Kevin Kumashiro (2000, 2002) skilte mellom fire tilnærminger til antiundertrykkende undervisning: utdanning for de andre, om de andre, kritisk til privilegering og andregjøring, og utdanning som endrer elevene og samfunnet. Den siste, som bygger på poststrukturalisme og skeiv teori, er normkritikkens kjerne.

            Judith Butlers teori om kjønn som performativt (*Gender Trouble*, 1990) og Deborah Britzmans skeive pedagogikk (1995) var viktige kilder. I Sverige ble normkritisk pedagogikk et eget felt med antologien redigert av Janne Bromseth og Frida Darj (2010), og begrepet spredte seg til norsk lærerutdanning, skoleutvikling og arbeid mot diskriminering, blant annet i programmer for kompetanse om kjønns- og seksualitetsmangfold.

            Normkritikken har vært omstridt. Tilhengerne ser den som et redskap mot mobbing og diskriminering og for et inkluderende fellesskap. Kritikerne mener den moraliserer, gjør normer i seg selv mistenkelige og blander politikk og pedagogikk, og at begrepet er teoretisk uklart. Debatten om kjønn og seksualitet i skolen har gjort retningen til en av de mest politiserte i dag.
          `,
          samfunn: `
            Rettighetsbevegelser for kjønns- og seksualitetsminoriteter, likestillings- og diskrimineringslover, migrasjon og et mer mangfoldig samfunn, og en polarisert offentlighet der identitet og normer er politiske stridsspørsmål.
          `,
          skole: `
            Arbeid mot mobbing, diskriminering og trakassering, læremidler som viser mangfold, og læreplaner med tverrfaglige temaer om folkehelse, livsmestring og demokrati. Lærerutdanningen har fått normkritiske perspektiver, og debatten om seksualitetsundervisning har blitt sterkere.
          `,
          kilder: [KUMASHIRO, BROMSETH, snl("https://snl.no/Judith_Butler")],
        },
      },
    },
  },

  edgeDescriptions: {
    kritiskteori__frigjoring: {
      description: `
        Frigjøringspedagogikken arvet kritisk teoris spørsmål om hvordan samfunnet former bevisstheten, og hvordan erkjennelse kan bli frigjøring. Freire bygde på marxisme, eksistensialisme og kristen personalisme, og studentbevegelsen leste Marcuse og Adorno. Habermas' emansipatoriske kunnskapsinteresse ga skolekritikken et vitenskapsteoretisk grunnlag.
      `,
      kilder: [snl("https://snl.no/Frankfurterskolen")],
    },
    frigjoring__kritiskped: {
      description: `
        Den kritiske pedagogikken i USA og Storbritannia bygde direkte på Freire, som Giroux og McLaren samarbeidet med, og på reproduksjonsteoriene til Bourdieu og Bernstein. Giroux' bidrag var å vende reproduksjonen til motstand: skolen er ikke bare et redskap for makten, men også et sted der den kan utfordres.
      `,
      kilder: [GIROUX],
    },
    kritiskped__normkritikk: {
      description: `
        Normkritikken vokste ut av den kritiske pedagogikken og den feministiske kritikken av den. Der kritisk pedagogikk talte om de undertrykte og deres frigjøring, flyttet normkritikken blikket til normene som skaper kategoriene, med poststrukturalisme og skeiv teori som verktøy. Kumashiros fjerde tilnærming bygger eksplisitt på denne vendingen.
      `,
      kilder: [KUMASHIRO],
    },
  },

  artists: [
    // --- Kritisk teori -----------------------------------------------------
    {
      name: "Max Horkheimer", birthYear: 1895, deathYear: 1973, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Sosiolog", mainGenre: ["Kritisk teori"],
      subGenre: ["Myndighet"],
      influenceStart: 1930, influenceEnd: 1973, geography: "Frankfurt og New York",
      description: `
        Tysk filosof og sosiolog, leder for Instituttet for sosialforskning i Frankfurt fra 1930 og en av grunnleggerne av kritisk teori. «Traditionelle und kritische Theorie» (1937) definerer kritisk teori som en teori med interesse i å forandre samfunnet, og studiene av autoritet og familie (1936) gjorde familie og oppdragelse til nøkler for å forstå autoritære samfunn. Med Adorno skrev han *Opplysningens dialektikk* (1944/1947) i eksil i USA, og etter krigen var han rektor ved universitetet i Frankfurt.
      `,
      keyWorks: [
        { title: "Traditionelle und kritische Theorie", year: 1937 },
        { title: "Dialektik der Aufklärung (med Adorno)", year: 1947 },
      ],
      kilder: [snl("https://snl.no/Max_Horkheimer"), sep("https://plato.stanford.edu/entries/horkheimer/")],
    },
    {
      name: "Theodor W. Adorno", birthYear: 1903, deathYear: 1969, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Sosiolog", mainGenre: ["Kritisk teori"],
      subGenre: ["Myndighet"],
      influenceStart: 1938, influenceEnd: 1969, geography: "Frankfurt",
      description: `
        Tysk filosof, sosiolog og musikkteoretiker, en ledende tenker i Frankfurterskolen. «Theorie der Halbbildung» (1959) kritiserer en dannelse som er blitt halvdannelse: kulturelle goder konsumeres uten at de forvandler den som konsumerer dem. I radioforedragene samlet i *Erziehung zur Mündigkeit* (1971) gjør han myndighet til demokratiets forutsetning, og «Erziehung nach Auschwitz» (1966) begynner med kravet om at Auschwitz aldri må gjenta seg: oppdragelsen må motvirke kulde, autoritetstro og evnen til å behandle andre som ting. Adorno er en hovedkilde for kritisk pedagogikk i Tyskland og Norden.
      `,
      keyWorks: [
        { title: "Theorie der Halbbildung", year: 1959 },
        { title: "Erziehung nach Auschwitz", year: 1966 },
        { title: "Erziehung zur Mündigkeit", year: 1971 },
      ],
      kilder: [snl("https://snl.no/Theodor_W._Adorno"), sep("https://plato.stanford.edu/entries/adorno/")],
    },
    {
      name: "Jürgen Habermas", birthYear: 1929, deathYear: 2026, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Sosiolog", mainGenre: ["Kritisk teori"],
      subGenre: ["Myndighet", "Dialogisk undervisning"],
      influenceStart: 1962, influenceEnd: 2026, geography: "Frankfurt",
      description: `
        Tysk filosof og sosiolog, gjennom sju tiår en av verdens mest innflytelsesrike intellektuelle, død i 2026. *Erkenntnis und Interesse* (1968) skiller mellom tekniske, praktiske og emansipatoriske kunnskapsinteresser, et skille som ble grunnlaget for den kritisk-emansipatoriske pedagogikken og for mange norske pedagogikkstudenters vitenskapsteori. *Theorie des kommunikativen Handelns* (1981) setter kommunikativ rasjonalitet, rettet mot forståelse, opp mot systemets strategiske rasjonalitet, og har gitt pedagogikken begreper om dialog, deliberasjon og skolens plass i livsverdenen.
      `,
      keyWorks: [
        { title: "Strukturwandel der Öffentlichkeit", year: 1962 },
        { title: "Erkenntnis und Interesse", year: 1968 },
        { title: "Theorie des kommunikativen Handelns", year: 1981 },
      ],
      kilder: [snl("https://snl.no/J%C3%BCrgen_Habermas"), sep("https://plato.stanford.edu/entries/habermas/")],
    },
    {
      name: "Hans Skjervheim", birthYear: 1926, deathYear: 1999, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Kritisk teori"],
      subGenre: ["Myndighet", "Dialogisk undervisning"],
      influenceStart: 1957, influenceEnd: 1999, geography: "Oslo og Bergen",
      description: `
        Norsk filosof og essayist, sentral i positivismestriden. *Deltakar og tilskodar* (1957) skiller mellom å forholde seg til et annet menneske som deltaker i en felles sak og som tilskuer som gjør den andre til et objekt, et skille som er blitt et grunnbegrep i norsk pedagogikk og profesjonsetikk. Han kritiserte samfunnsvitenskapens og pedagogikkens naturvitenskapelige ideal, og i essayet om «det instrumentalistiske mistaket» angrep han tanken om at oppdragelse kan forstås som teknikk. Skjervheim var en viktig formidler av fenomenologi og kritisk teori i Norge.
      `,
      keyWorks: [
        { title: "Deltakar og tilskodar", year: 1957 },
        { title: "Deltakar og tilskodar og andre essays", year: 1976 },
      ],
      kilder: [snl("https://snl.no/Hans_Skjervheim")],
    },

    // --- Frigjøringspedagogikk ---------------------------------------------
    {
      name: "Paulo Freire", birthYear: 1921, deathYear: 1997, gender: "mann",
      metaGenre: R, instrument: "Praktiker", instrument2: "Filosof", mainGenre: ["Frigjøringspedagogikk", "Kritisk pedagogikk"],
      subGenre: ["Bevisstgjøring", "Dialogisk undervisning"],
      influenceStart: 1962, influenceEnd: 1997, geography: "Recife, Santiago, Genève og São Paulo",
      description: `
        Brasiliansk pedagog. Alfabetiseringsprogrammene han ledet i det nordøstlige Brasil tidlig i 1960-årene lærte voksne å lese gjennom ord og bilder fra deres egen virkelighet, og ble stanset av militærkuppet i 1964. I eksil i Chile skrev han *De undertryktes pedagogikk* (skrevet 1968, på norsk 1974), som kritiserer bankpedagogikken og beskriver en dialogisk og problemformulerende undervisning der bevisstgjøring (*conscientização*) gjør de undertrykte til subjekter i sin egen historie. Freire arbeidet senere for Kirkenes verdensråd i Genève og var skolebyråd i São Paulo (1989–1991).
      `,
      keyWorks: [
        { title: "Educação como prática da liberdade", year: 1967 },
        { title: "Pedagogia do oprimido", year: 1968 },
        { title: "Pedagogia da esperança", year: 1992 },
      ],
      kilder: [snl("https://snl.no/Paulo_Freire"), iep("https://iep.utm.edu/freire/"), FREIRE],
    },
    {
      name: "Ivan Illich", birthYear: 1926, deathYear: 2002, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Teolog", mainGenre: ["Frigjøringspedagogikk"],
      subGenre: ["Den skjulte læreplanen"],
      influenceStart: 1961, influenceEnd: 2002, geography: "Cuernavaca, Mexico",
      description: `
        Østerrikskfødt prest og samfunnskritiker som ledet senteret CIDOC i Cuernavaca. *Deschooling Society* (1971) hevder at skolen lærer elevene å forveksle undervisning med læring, karakterer med kunnskap og diplomer med kompetanse, og at den gjør folk avhengige av institusjoner. I stedet foreslo han «læringsnett» der mennesker kan finne ressurser, kunnskap og hverandre. Illich kritiserte på samme måte helsevesenet og transportsystemene, og hans skolekritikk ble lest mye i Norden rundt 1970.
      `,
      keyWorks: [{ title: "Deschooling Society", year: 1971 }],
      kilder: [snl("https://snl.no/Ivan_Illich"), ILLICH],
    },
    {
      name: "Pierre Bourdieu", birthYear: 1930, deathYear: 2002, gender: "mann",
      metaGenre: R, instrument: "Sosiolog", mainGenre: ["Frigjøringspedagogikk"],
      subGenre: ["Den skjulte læreplanen"],
      influenceStart: 1964, influenceEnd: 2002, geography: "Paris",
      description: `
        Fransk sosiolog. Sammen med Jean-Claude Passeron viste han i *Les Héritiers* (1964) og *La Reproduction* (1970) hvordan skolen belønner den kulturelle kapitalen som barn fra dannede hjem har med seg, språk, smak og omgangsformer, og dermed gjør sosial arv om til personlig fortjeneste og ulikhet til rettferdighet. Begrepene kulturell kapital, habitus, felt og symbolsk vold har vært noen av de mest brukte i utdanningssosiologien, også i Norge, der forskere har studert utdanningssystemet og eliteskolene med dem.
      `,
      keyWorks: [
        { title: "Les Héritiers (med Passeron)", year: 1964 },
        { title: "La Reproduction (med Passeron)", year: 1970 },
        { title: "La Distinction", year: 1979 },
      ],
      kilder: [snl("https://snl.no/Pierre_Bourdieu"), BOURDIEU],
    },
    {
      name: "Basil Bernstein", birthYear: 1924, deathYear: 2000, gender: "mann",
      metaGenre: R, instrument: "Sosiolog", mainGenre: ["Frigjøringspedagogikk"],
      subGenre: ["Den skjulte læreplanen"],
      influenceStart: 1958, influenceEnd: 2000, geography: "London",
      description: `
        Britisk sosiolog, professor i utdanningssosiologi ved Institute of Education i London. Han skilte mellom en begrenset og en utdypet språkkode og viste at skolen bygger på den utdypede, som middelklassebarn har med seg hjemmefra (*Class, Codes and Control*, 1971–1990). Senere analyserte han hvordan kunnskap klassifiseres og rammes inn i læreplaner og undervisning, og hvordan «usynlige pedagogikker» med mye frihet kan gi middelklassebarn ennå større fordeler. Bernsteins begreper er mye brukt i forskning om læreplaner og sosial ulikhet.
      `,
      keyWorks: [{ title: "Class, Codes and Control", year: 1971 }],
      kilder: [snl("https://snl.no/Basil_Bernstein")],
    },
    {
      name: "Nils Christie", birthYear: 1928, deathYear: 2015, gender: "mann",
      metaGenre: R, instrument: "Sosiolog", mainGenre: ["Frigjøringspedagogikk"],
      subGenre: ["Den skjulte læreplanen"],
      influenceStart: 1960, influenceEnd: 2015, geography: "Oslo",
      description: `
        Norsk sosiolog og kriminolog, professor ved Universitetet i Oslo. *Hvis skolen ikke fantes* (1971) er en norsk klassiker i skolekritikken: Christie spør hva skolen egentlig gjør, ut over å undervise, og peker på at den holder barn og unge borte fra arbeid og voksenliv, sorterer dem og gjør dem til passive mottakere. Han ville ha mindre skole og flere arenaer der unge kunne delta i samfunnet. Christie er ellers kjent for sin kritikk av straff og fengsel og for begrepet «konflikter som eiendom».
      `,
      keyWorks: [{ title: "Hvis skolen ikke fantes", year: 1971 }],
      kilder: [snl("https://snl.no/Nils_Christie")],
    },

    // --- Kritisk pedagogikk ------------------------------------------------
    {
      name: "Henry A. Giroux", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Kritisk pedagogikk"],
      subGenre: ["Bevisstgjøring", "Transformative intellektuelle"],
      influenceStart: 1981, geography: "USA og Canada",
      description: `
        Amerikansk-kanadisk pedagog og kulturkritiker, en av grunnleggerne av den kritiske pedagogikken. *Theory and Resistance in Education* (1983) kritiserer reproduksjonsteoriene for determinisme og beskriver skolen som et sted for motstand og kamp om mening. *Teachers as Intellectuals* (1988) gjør lærerne til transformative intellektuelle som skal knytte undervisningen til demokrati og sosial rettferdighet, ikke til teknikere som gjennomfører andres planer. Senere har han skrevet mye om nyliberalisme, populærkultur og universitetets krise.
      `,
      keyWorks: [
        { title: "Theory and Resistance in Education", year: 1983 },
        { title: "Teachers as Intellectuals", year: 1988 },
      ],
      kilder: [GIROUX],
    },
    {
      name: "Peter McLaren", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Kritisk pedagogikk"],
      subGenre: ["Bevisstgjøring"],
      influenceStart: 1986, geography: "Canada og USA",
      description: `
        Kanadisk pedagog, tidligere lærer i en fattig bydel i Toronto, som ble en sentral skikkelse i den kritiske pedagogikken. *Schooling as a Ritual Performance* (1986) analyserte skolens ritualer, og *Life in Schools* (1989) ble en av de mest brukte innføringene i kritisk pedagogikk i lærerutdanningen. Senere utviklet han en mer marxistisk «revolusjonær» kritisk pedagogikk og skrev om Che Guevara og Paulo Freire.
      `,
      keyWorks: [{ title: "Life in Schools", year: 1989 }],
      kilder: [bok("McLaren, Peter. Life in Schools: An Introduction to Critical Pedagogy in the Foundations of Education. Longman, 1989.")],
    },
    {
      name: "Michael W. Apple", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Kritisk pedagogikk"],
      subGenre: ["Den skjulte læreplanen"],
      influenceStart: 1979, geography: "University of Wisconsin–Madison",
      description: `
        Amerikansk læreplanforsker ved University of Wisconsin–Madison. *Ideology and Curriculum* (1979) spør hvis kunnskap som kommer inn i læreplanen, og viser hvordan skolens innhold og den skjulte læreplanen formidler en bestemt samfunnsorden. *Official Knowledge* (1993) og *Educating the «Right» Way* (2001) analyserer hvordan konservative og markedsliberale krefter har formet amerikansk skolepolitikk. Apple har vært en av de viktigste forbindelsene mellom kritisk teori, utdanningssosiologi og læreplanforskning.
      `,
      keyWorks: [
        { title: "Ideology and Curriculum", year: 1979 },
        { title: "Official Knowledge", year: 1993 },
      ],
      kilder: [bok("Apple, Michael W. Ideology and Curriculum. Routledge & Kegan Paul, 1979.")],
    },
    {
      name: "bell hooks", birthYear: 1952, deathYear: 2021, gender: "kvinne",
      metaGenre: R, instrument: "Forsker", instrument2: "Filosof", mainGenre: ["Kritisk pedagogikk"],
      subGenre: ["Bevisstgjøring", "Lik rett til utdanning"],
      influenceStart: 1981, influenceEnd: 2021, geography: "USA",
      description: `
        Amerikansk litteraturviter, feminist og aktivist, som skrev under et pseudonym med små bokstaver for å flytte oppmerksomheten fra personen til ideene. *Teaching to Transgress: Education as the Practice of Freedom* (1994) bygger på Freire og egne erfaringer som svart kvinne i segregerte og integrerte skoler, og beskriver en «engasjert pedagogikk» der læreren tar hele mennesket på alvor, klasserommet kan romme begeistring og konflikt, og undervisning er en praksis for frihet. hooks forbandt kritikk av rasisme, sexisme og klasse og har hatt stor betydning i lærerutdanning og høyere utdanning.
      `,
      keyWorks: [
        { title: "Ain't I a Woman?", year: 1981 },
        { title: "Teaching to Transgress", year: 1994 },
      ],
      kilder: [snl("https://snl.no/bell_hooks")],
    },

    // --- Normkritikken -----------------------------------------------------
    {
      name: "Kevin K. Kumashiro", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Normkritikken"],
      subGenre: ["Normkritikk"],
      influenceStart: 2000, geography: "USA",
      description: `
        Amerikansk pedagog. Artikkelen «Toward a Theory of Anti-Oppressive Education» (2000) og boka *Troubling Education: Queer Activism and Antioppressive Pedagogy* (2002) beskriver fire tilnærminger til undervisning mot undertrykking: utdanning for de andre, om de andre, kritisk til privilegering og andregjøring, og utdanning som endrer elevene og samfunnet ved å forstyrre det som tas for gitt. Den siste, med vekt på krise og normbrudd i læringen, er blitt et teoretisk grunnlag for normkritisk pedagogikk i Skandinavia.
      `,
      keyWorks: [{ title: "Troubling Education", year: 2002 }],
      kilder: [KUMASHIRO],
    },
    {
      name: "Judith Butler", birthYear: 1956, gender: "ikkebinaer",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Normkritikken"],
      subGenre: ["Normkritikk"],
      influenceStart: 1990, geography: "Berkeley",
      description: `
        Nordamerikansk filosof og litteraturviter. *Gender Trouble* (1990) hevder at kjønn ikke er noe vi er, men noe som skapes gjennom gjentatte handlinger og normer (performativitet), og at heteroseksualitet framstår som naturlig fordi den gjentas som norm. Teorien ble et grunnlag for skeiv teori og for normkritisk pedagogikk, som spør hvordan skolen gjentar og kan forstyrre normer for kjønn og seksualitet. Butler har også skrevet om sårbarhet, sorg og politisk etikk.
      `,
      keyWorks: [
        { title: "Gender Trouble", year: 1990 },
        { title: "Bodies That Matter", year: 1993 },
      ],
      kilder: [snl("https://snl.no/Judith_Butler")],
    },
    {
      name: "Janne Bromseth", gender: "kvinne",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Normkritikken"],
      subGenre: ["Normkritikk"],
      influenceStart: 2010, geography: "Uppsala og Stockholm",
      description: `
        Norsk-svensk genusforsker. Antologien *Normkritisk pedagogik: Makt, lärande och strategier för förändring* (2010), som hun redigerte sammen med Frida Darj, ga feltet et navn og en teoretisk og praktisk ramme i Sverige: normkritikk skal synliggjøre og utfordre normene som gjør noen til «normale» og andre til avvikere, i stedet for å lære om «de andre». Bromseth har arbeidet med normkritikk i lærerutdanning og høyere utdanning og har vært viktig for spredningen av begrepet til Norge.
      `,
      kilder: [BROMSETH],
    },
  ],
};
