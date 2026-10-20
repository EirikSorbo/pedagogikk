// Runde 3 — Kristen oppdragelse: retningen, epokene, teoretikerne og påvirkningene (fase 6, skrevet av Opus 2026-10-21).
import { snl, sep, bok } from "../kilder.mjs";

const R = "Kristen oppdragelse";
const MARROU = bok("Marrou, Henri-Irénée. Histoire de l'éducation dans l'Antiquité. Seuil, 1948.");
const RICHE = bok("Riché, Pierre. Éducation et culture dans l'Occident barbare, VIe–VIIIe siècles. Seuil, 1962.");
const STRAUSS = bok("Strauss, Gerald. Luther's House of Learning: Indoctrination of the Young in the German Reformation. Johns Hopkins University Press, 1978.");
const OMALLEY = bok("O'Malley, John W. The First Jesuits. Harvard University Press, 1993.");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler oppdragelsen som har troen som mål og kirken som bærer: kirkefedrenes forhold til den greske dannelsen, klosterskolene, skolastikken og universitetene, reformasjonens og motreformasjonens skoler og pietismens oppdragelse til personlig fromhet. Felles er at oppdragelsen gjelder sjelen og frelsen, og at lesing, katekisme og disiplin skal gjøre mennesket til et kristent menneske og et lydig medlem av kirke og samfunn. Retningen har formet den europeiske skolen mer enn noen annen: skriftkulturen, latinen, universitetet, katekismeundervisningen og allmueskolen kom alle fra kirken. I Norge går linjen fra katedralskolene etter 1152 via reformasjonen i 1537 til konfirmasjonen (1736) og skoleforordningen (1739). Kristendomsfaget og kirkens tilsyn med skolen preget norsk skole til langt ut på 1900-tallet.
          `,
          kilder: [snl("https://snl.no/katedralskole"), snl("https://snl.no/pietisme")],
        },
        story: {
          body: `
            ### Athen og Jerusalem
            De første kristne måtte avgjøre hva de skulle gjøre med den hedenske dannelsen. Tertullian spurte hva Athen har med Jerusalem å gjøre, men de fleste kirkefedrene valgte en middelvei: Klemens av Alexandria kalte Kristus den egentlige pedagogen, Basilios lærte unge menn å bruke den greske litteraturen som biene bruker blomstene, og Augustin gjorde de frie kunster til redskaper for å forstå Skriften. Kristne barn gikk i hedenske skoler, men troen skulle læres i menigheten.

            ### Kloster, katedral og universitet
            Etter Romerrikets fall ble klostrene de viktigste bærerne av skrift og lærdom. Benedikts regel gjorde lesning til en del av munkenes daglige liv, og Karl den store påla klostre og bispeseter å holde skoler (789). Fra 1100-tallet ble katedralskolene og byenes skoler sentrene for en ny lærdom, og de første universitetene vokste fram rundt 1200, med *lectio* og *disputatio* og en metode der autoritetene ble satt opp mot hverandre og forsonet. I Norge kom katedralskolene i Nidaros, Bergen, Oslo og Hamar etter at landet fikk eget erkebispesete i 1152.

            ### Reformasjon og motreformasjon
            Reformasjonen gjorde skolen til en sak for byer og fyrster: Luther ba rådsherrene opprette skoler (1524), Melanchthon laget skoleordninger, og katekismen skulle gjøre hver husfar til lærer. Johannes Bugenhagen skrev kirkeordningen som innførte reformasjonen i Danmark-Norge (1537), med latinskoler i bispebyene. Den katolske kirken svarte med jesuittenes skoler, som med *Ratio studiorum* (1599) ble det mest omfattende skolesystemet i Europa. Gerald Strauss har ment at reformasjonens forsøk på å oppdra folket i stor grad mislyktes, en tese som har vært mye diskutert.

            ### Pietismen og allmueskolen
            Pietismen flyttet tyngdepunktet til den personlige omvendelsen. August Hermann Francke bygde i Halle fra 1695 et helt system av skoler og barnehjem, der barnets egenvilje skulle brytes og fromhet og flid vokse fram, og Halle ble forbildet for Preussen og Danmark-Norge. Konfirmasjonen (1736) og skoleforordningen (1739) gjorde lesing i katekismen til en plikt for alle norske barn, og Thomas von Westen bygde misjon og skole blant samene. Hans Nielsen Hauges lekmannsbevegelse viste senere hvordan pietismens leseopplæring kunne bli selvstendighet og initiativ.

            ### Arven
            Den kristne oppdragelsen har vært både dannelse og disiplin: den ga Europa skriftkultur, skole for alle og omsorg for fattige barn, men også tvang, frykt og kulturell undertrykkelse, ikke minst overfor samene. I Norge preget kristendomsfaget og kirkens tilsyn skolen til langt ut på 1900-tallet, og debatten om skolens kristne formål endte først med den nye formålsparagrafen i 2008.
          `,
        },
      },
    },
    main: {
      "Kirkefedrene": {
        main: {
          era: "ca. 150–450", activeFrom: 150, activeTo: 450,
          description: `
            Kirkefedrene måtte finne et forhold mellom kristen tro og den greske og romerske dannelsen som var den eneste skolen som fantes. Tertullian avviste filosofien, men de fleste valgte en kritisk bruk. Klemens av Alexandria gjorde i *Paidagogos* Kristus til den egentlige oppdrageren og den greske visdommen til en forberedelse til evangeliet. Origenes ledet kateketskolen i Alexandria og senere en skole i Caesarea, der elevene ble ført fra logikk og naturvitenskap gjennom etikk til teologi. Basilios lærte i sin tale til unge menn hvordan de skulle bruke de hedenske dikterne: som biene, som bare tar honningen.

            Hieronymus skrev om hvordan en jente skulle oppdras til et asketisk liv (brev 107) og drømte at han ble anklaget for å være ciceronianer og ikke kristen. Augustin ga tradisjonen dens grunnskrifter: *De magistro* (389), der bare Kristus underviser innvendig, mens menneskelige lærere bare kan minne om, *De doctrina christiana*, der de hedenske kunster skal brukes som israelittene tok egypternes gull, og *De catechizandis rudibus* om undervisning av nybegynnere i troen. Keiser Julians forbud mot kristne lærere (362) viser hvor mye striden betydde.

            Henri-Irénée Marrou og Werner Jaeger har vist at kirkefedrene ikke avskaffet antikkens dannelse, men kristnet den, og at det var slik den ble overlevert til middelalderen.
          `,
          samfunn: `
            Romerriket under forfølgelse og senere med kristendommen som tillatt (313) og statsreligion (380). Byene i øst, særlig Alexandria og Antiokia, var sentre for gresk lærdom. Folkevandringene og Romas fall (410) gjorde Augustins spørsmål om den jordiske og den himmelske staten aktuelt.
          `,
          skole: `
            Det fantes ingen egne kristne skoler for barn: kristne gikk hos grammatikere og retorer. Troen ble lært gjennom katekumenatet, en undervisning av voksne før dåpen, og i hjemmet. Kateketskoler og bispeseter ble etter hvert steder for høyere kristen undervisning.
          `,
          kilder: [snl("https://snl.no/Augustin_av_Hippo"), sep("https://plato.stanford.edu/entries/augustine/"), MARROU],
        },
      },
      "Klosterskolene": {
        main: {
          era: "ca. 500–1100", activeFrom: 529, activeTo: 1100,
          description: `
            Fra 500-tallet ble klostrene de viktigste stedene for skrift og skole i Vest-Europa. Benedikts regel (ca. 530) gjorde bønn, arbeid og hellig lesning (*lectio divina*) til munkenes dagsrytme, og barn ble gitt til klostrene som oblater og oppdratt der. Klostrene kopierte manuskripter og underviste i latin, salmesang, tidsregning og de frie kunster, og irske og angelsaksiske munker, som Beda i Jarrow, førte lærdommen videre til kontinentet.

            Under Karl den store ble skolen en riksoppgave. *Admonitio generalis* (789) påla klostre og bispeseter å holde skoler der guttene kunne lære salmer, noter, sang, tidsregning og grammatikk, og Alkuin ledet hoffskolen og en reform av skrift og tekster. Hrabanus Maurus i Fulda, «Tysklands lærer», skrev en håndbok for presteutdanningen. Man skilte etter hvert mellom en indre skole for munkene og en ytre skole for andre, slik planen fra St. Gallen (ca. 820) viser.

            Pierre Riché har beskrevet hvor få og små disse skolene var: lese- og skrivekunst var et geistlig monopol, og de fleste mennesker, også konger og adel, var uten bokkultur.
          `,
          samfunn: `
            De germanske kongedømmene, frankerriket og den karolingiske fornyelsen, vikingtiden og kristningen av Norden. Klostrene var både religiøse, økonomiske og kulturelle sentre, og kirken var den eneste institusjonen med skriftkultur over hele Europa.
          `,
          skole: `
            Klosterskoler og bispeskoler med latin som undervisningsspråk, salmeboka som første lesebok og en lærer som underviste få elever i alle aldre. I Norden kom skriftkulturen med misjonen og kirken på 1000-tallet.
          `,
          kilder: [snl("https://snl.no/Benedikt_fra_Nursia"), snl("https://snl.no/Karl_1._den_store"), snl("https://snl.no/Alkuin"), RICHE],
        },
      },
      "Skolastikken": {
        main: {
          era: "ca. 1100–1400", activeFrom: 1100, activeTo: 1400,
          description: `
            Skolastikken var både en metode og en institusjon: lærdommen i høymiddelalderens skoler og universiteter. I katedralskolene i Chartres, Laon og Paris og hos lærere som Pierre Abélard ble autoritetene satt opp mot hverandre og forsonet med logikkens hjelp (*Sic et non*, ca. 1120), og Hugo av St. Victor skrev en lærebok i å lese og studere (*Didascalicon*, ca. 1125). Universitetene vokste fram som laug av lærere og studenter: Bologna, Paris og Oxford rundt 1200, med fakultetene for de frie kunster, teologi, jus og medisin.

            Undervisningen bygde på forelesning (*lectio*), der en autoritativ tekst ble lest og kommentert, og disputas (*disputatio*), der et spørsmål ble drøftet for og mot. Gjenoppdagelsen av Aristoteles gjennom arabiske og greske kilder forandret pensum, og Thomas Aquinas forente aristotelisk filosofi og kristen teologi. I *De magistro* skriver han at læreren hjelper eleven slik legen hjelper naturen: den som lærer, bruker sitt eget lys, og læreren gir tegn og hjelpemidler.

            I Norge kom katedralskolene i Nidaros, Bergen, Oslo og Hamar etter opprettelsen av erkebispedømmet i 1152, og nordmenn studerte i Paris. Humanistene karikerte senere skolastikken som ordkløveri, et bilde forskningen har nyansert.
          `,
          samfunn: `
            1100-tallets renessanse: byvekst, handel, pavekirkens makt, korstogene og kontakt med arabisk lærdom. Laugsprinsippet ga universitetene deres form. I Norge ble kongedømmet og kirken bygd ut, med erkebispesete i Nidaros fra 1152.
          `,
          skole: `
            Katedralskoler, byskoler og universiteter med latin som språk og eksamen og *licentia docendi* som vei til lærerrett. Pensum var de frie kunster, så de høyere fakultetene. De nordiske universitetene kom sent: Uppsala 1477 og København 1479.
          `,
          kilder: [snl("https://snl.no/katedralskole"), snl("https://snl.no/Thomas_Aquinas"), sep("https://plato.stanford.edu/entries/aquinas/"), sep("https://plato.stanford.edu/entries/abelard/")],
        },
      },
      "Reformasjonen": {
        main: {
          era: "ca. 1520–1600", activeFrom: 1520, activeTo: 1600,
          description: `
            Reformasjonen gjorde lesing av Skriften til en plikt for hver kristen og skolen til en offentlig sak. Luther skrev til rådsherrene i alle tyske byer at de skulle opprette og holde kristne skoler (1524), og i en preken (1530) at foreldre har plikt til å sende barna på skole, også fattige. *Den lille katekisme* (1529) gjorde husfaren til lærer i sitt hus, og *Den store katekisme* ga prestene stoffet. Philipp Melanchthon, «Tysklands lærer», laget den saksiske skoleordningen (1528) med tre klasser og reformerte universitetene.

            De lutherske kirkeordningene, mange skrevet av Johannes Bugenhagen, gjorde latinskoler i byene og katekismeundervisning i kirken til faste ordninger, og Johannes Sturm i Strasbourg (1538) og Calvins akademi i Genève (1559) ble mønstre for gymnaset. I Danmark-Norge kom reformasjonen med kong Christian III i 1536–1537, og kirkeordinansen (1537/1539) påla latinskoler i bispebyene.

            Gerald Strauss (1978) har hevdet at reformasjonens forsøk på å oppdra folket i stor grad mislyktes: visitasjonene viser mennesker som verken kunne katekismen eller levde etter den. Andre forskere har pekt på langsiktige virkninger for lesekyndigheten i protestantiske land.
          `,
          samfunn: `
            Boktrykkerkunsten, fyrstenes overtakelse av kirken, bondekrigen (1525) og konfesjonaliseringen av Europa. I Danmark-Norge grevefeiden og Christian IIIs maktovertakelse, som gjorde Norge til en del av det danske riket og kirken til statens.
          `,
          skole: `
            Latinskoler i byene for prester og embetsmenn, katekismeundervisning i kirken og hjemmet, visitasjoner og etter hvert skolemestre. Pikeskoler ble foreslått (Bugenhagen), men kom sjelden i gang. I Norge ble katedralskolene lutherske latinskoler.
          `,
          kilder: [snl("https://snl.no/Martin_Luther"), snl("https://snl.no/Philipp_Melanchthon"), snl("https://snl.no/Johannes_Bugenhagen"), STRAUSS],
        },
      },
      "Jesuittene": {
        main: {
          era: "1540–1773", activeFrom: 1540, activeTo: 1773,
          description: `
            Jesuittordenen, godkjent av paven i 1540, ble motreformasjonens viktigste redskap, og skolen ble dens viktigste virksomhet. Det første kollegiet for elever utenfor ordenen åpnet i Messina (1548), og Collegio Romano (1551) ble modellen. Etter flere tiår med forsøk ga *Ratio studiorum* (1599) ordenen en felles studieordning: grammatikk-, humaniora- og retorikklasser, så filosofi og teologi, med forelesning (*praelectio*), repetisjon, skriftlige øvelser, kappestrid mellom elevene (*aemulatio*), skoleteater og streng disiplin, og alt gratis for elevene.

            Jesuittene forente humanistenes latinskole med skolastisk filosofi og en spiritualitet fra Ignatius' *Åndelige øvelser*, der tilpasning til den enkelte (*cura personalis*) og prøving av ånden sto sentralt. På 1700-tallet drev ordenen flere hundre kollegier i Europa, Asia og Amerika, til den ble opphevet i 1773. Den ble gjenopprettet i 1814.

            I Norden var jesuittene både et skrekkbilde og en fristelse. Den norske jesuitten Laurentius Nicolai («Klosterlasse») ledet en presteskole i Stockholm for kong Johan III, og Grunnloven av 1814 forbød jesuitter i Norge, et forbud som ble opphevet i 1956.
          `,
          samfunn: `
            Motreformasjonen og konsilet i Trident (1545–1563), konfesjonelle kriger og en verdensomspennende katolsk misjon. Jesuittene ble rådgivere og skriftefedre for fyrster og ble dermed også mistenkt for politisk makt.
          `,
          skole: `
            Kollegier for gutter fra borgerskap og adel, gratis og etter én plan, i konkurranse med protestantiske gymnasier som lånte mange av metodene. Jesuittenes skoleteater og latin preget eliteutdanningen i katolske land i to hundre år.
          `,
          kilder: [snl("https://snl.no/Jesuittordenen"), snl("https://snl.no/Ignatius_av_Loyola"), snl("https://snl.no/Laurentius_Nicolai_Norvegus"), OMALLEY],
        },
      },
      "Pietismen": {
        main: {
          era: "ca. 1690–1760", activeFrom: 1675, activeTo: 1760,
          description: `
            Pietismen var en luthersk fornyelsesbevegelse som satte den personlige omvendelsen og et fromt liv over den rette læren. Philipp Jakob Spener (*Pia desideria*, 1675) ville ha bibellesning i små grupper og et levende kristenliv, og August Hermann Francke bygde i Halle fra 1695 et sammenhengende system av skoler: en fattigskole, et barnehjem (1698), en latinskole, et pedagogium for adelen, pikeskoler, et lærerseminar og et trykkeri. Oppdragelsen skulle bryte barnets egenvilje, gi det en levende tro og gjøre det flittig og nyttig, under stadig tilsyn og med fast dagsrytme.

            Halle ble forbildet for den prøyssiske kongens skoleedikt (1717) og for Danmark-Norge under Christian VI. Konfirmasjonen (1736), Erik Pontoppidans forklaring (1737) og skoleforordningen (1739) gjorde lesing i katekismen til en plikt for alle barn, og prøven før konfirmasjonen til et nålsøye inn i voksenlivet. Thomas von Westen bygde misjon og skoler blant samene, med sterke trekk av kulturell undertrykkelse. Brødremenigheten under Zinzendorf ga pietismen en mildere, mer følelsesfull form.

            Pietismen har vært lest både som opphavet til den moderne allmueskolen og lesekyndigheten i Norden, og som en autoritær oppdragelse med frykt og tvang. Hans Nielsen Hauges lekmannsbevegelse rundt 1800 viser hvordan pietismens leseopplæring også kunne gi selvstendighet.
          `,
          samfunn: `
            Opplyst og pietistisk enevelde, statskirke og et samfunn der kongen også var kirkens overhode. Misjonskollegiet (1714) gjorde misjon i kolonier og blant samene til statens sak, og grensene i nord mellom Danmark-Norge, Sverige og Russland gjorde misjonen også til politikk.
          `,
          skole: `
            Allmueskole med klokkeren som lærer, omgangsskole, katekisme og lesing, og konfirmasjon som eksamen. Barnehjem og fattigskoler i byene, og misjonsskoler og et seminar for samemisjonen (Seminarium Lapponicum, 1752) i Trondheim.
          `,
          kilder: [snl("https://snl.no/pietisme"), snl("https://snl.no/August_Hermann_Francke"), snl("https://snl.no/konfirmasjon"), snl("https://snl.no/Thomas_von_Westen")],
        },
      },
    },
  },

  edgeDescriptions: {
    paideia__kirkefedrene: {
      description: `
        Kirkefedrene var dannet i den greske skolen og kunne ikke tenke uten den. Klemens og Origenes i Alexandria brukte gresk filosofi som forberedelse til troen, og Basilios lærte unge kristne å lese de hedenske dikterne kritisk. Werner Jaeger har kalt dette en kristen *paideia*: den greske dannelsen ble ikke avskaffet, men omformet.
      `,
      kilder: [MARROU],
    },
    kirkefedrene__klosterskoler: {
      description: `
        Klosterskolene bygde på kirkefedrenes syn på lærdom som tjener for troen. Augustins *De doctrina christiana* ga programmet for hvordan de frie kunster skulle brukes, og Hieronymus' bibeloversettelse og asketiske idealer preget klosterlivet. Cassiodorus forente begge i Vivarium, og Benedikts regel gjorde lesningen til en del av munkenes hverdag.
      `,
    },
    klosterskoler__skolastikk: {
      description: `
        Skolastikken vokste ut av klosterskolene, men flyttet seg til byene. Katedralskolene og de nye skolene i Paris tok over klostrenes rolle, og klosterets meditative lesning ble til en analytisk lesning med spørsmål og disputas. Klosterteologer som Bernhard av Clairvaux kritiserte Abélard for å gjøre troen til et spørsmål for logikken.
      `,
    },
    artes__skolastikk: {
      description: `
        De sju frie kunster ble artesfakultetet ved de nye universitetene, forberedelsen til teologi, jus og medisin. Dialektikken, styrket av den gjenoppdagede Aristoteles, ble skolastikkens viktigste redskap, og grammatikk og retorikk tapte terreng, noe humanistene senere klaget over.
      `,
    },
    humanisme__reformasjonen: {
      description: `
        Reformasjonen sto i gjeld til humanismen: Erasmus' greske Nye testamente (1516), kravet om å gå tilbake til kildene og humanistskolens latin. Melanchthon var humanist før han var reformator, og de lutherske latinskolene var humanistiske skoler med en luthersk katekisme. Luther brøt likevel med Erasmus om den frie vilje (1524–1525).
      `,
    },
    // Motreaksjon.
    skolastikk__reformasjonen: {
      description: `
        Luther angrep skolastikken og universitetenes Aristoteles: den skolastiske teologien hadde gjort troen til filosofi og nåden til et regnestykke. Reformatorene ville erstatte den med bibelstudier, språk og en enkel katekisme for folket, men luthersk ortodoksi tok senere skolastikkens metode i bruk igjen.
      `,
    },
    skolastikk__jesuittene: {
      description: `
        Jesuittene gjorde Thomas Aquinas til ordenens teologiske lærer og skolastisk filosofi til toppen av kollegiene. *Ratio studiorum* bygde filosofistudiet på Aristoteles og teologien på Thomas, og disputasen levde videre som øvelse.
      `,
    },
    humanisme__jesuittene: {
      description: `
        Jesuittkollegiene overtok humanistskolens latin, klassikere og retorikk, organisert i klasser etter mønster fra Paris (*modus parisiensis*). Den humanistiske dannelsen ble dermed et redskap for den katolske fornyelsen, med Cicero som stilforbilde og skoleteater på latin.
      `,
      kilder: [OMALLEY],
    },
    // Motreaksjon.
    reformasjonen__jesuittene: {
      description: `
        Jesuittenes skoler var et svar på reformasjonen: de skulle vinne tilbake de dannede klassene og hindre at katolske barn gikk i protestantiske skoler. Kollegiene i Tyskland og Øst-Europa, under Petrus Canisius og andre, var frontlinjer i konfesjonskampen, og Canisius' katekismer var et svar på Luthers.
      `,
    },
    reformasjonen__pietisme: {
      description: `
        Pietismen var en fornyelse innenfor lutherdommen: Spener og Francke ville fullføre reformasjonen ved å gjøre troen personlig og levende, ikke bare riktig. Luthers krav om at alle skal kunne lese Skriften, ble først virkeliggjort i stor skala gjennom pietismens skoler og den dansk-norske allmueskolen.
      `,
      kilder: [snl("https://snl.no/pietisme")],
    },
  },

  artists: [
    // --- Kirkefedrene ------------------------------------------------------
    {
      name: "Klemens av Alexandria", birthYear: 150, deathYear: 215, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Filosof", mainGenre: ["Kirkefedrene"],
      subGenre: ["Kristen bruk av hedensk dannelse"],
      influenceStart: 190, influenceEnd: 215, geography: "Alexandria",
      description: `
        Gresk kirkefar og filosof, lærer ved kateketskolen i Alexandria. I trilogien *Protreptikos*, *Paidagogos* og *Stromateis* går han fra oppfordring til tro, via oppdragelse til et kristent liv, til høyere kunnskap. *Paidagogos* gjør Kristus til den egentlige oppdrageren, som leder menneskene som barn mot det gode, og gir detaljerte råd om mat, klær og oppførsel. Klemens så den greske filosofien som en forberedelse til evangeliet, slik loven var det for jødene, og ble opphavet til en tradisjon som forener tro og dannelse.
      `,
      keyWorks: [{ title: "Paidagogos" }, { title: "Stromateis" }],
      kilder: [snl("https://snl.no/Clemens_av_Alexandria")],
    },
    {
      name: "Basilios den store", birthYear: 330, deathYear: 379, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Kirkefedrene"],
      subGenre: ["Kristen bruk av hedensk dannelse"],
      influenceStart: 360, influenceEnd: 379, geography: "Caesarea, Kappadokia",
      description: `
        Gresk biskop og en av de kappadokiske kirkefedrene. Hans tale til unge menn om hvordan de kan ha nytte av den greske litteraturen, ble en av de mest leste pedagogiske tekstene i Bysants og senere blant humanistene: de unge skal lese dikterne og filosofene som biene, som tar det som er nyttig og lar resten ligge, som forberedelse til de hellige skriftene. Basilios skrev også klosterregler som preget østkirkens klostervesen og omfattet oppdragelse av barn i klostrene.
      `,
      kilder: [snl("https://snl.no/Basilios_den_store")],
    },
    {
      name: "Hieronymus", birthYear: 347, deathYear: 419, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Kirkefedrene"],
      subGenre: ["Kristen bruk av hedensk dannelse"],
      influenceStart: 380, influenceEnd: 419, geography: "Roma og Betlehem",
      description: `
        Romersk kirkelærer, bibeloversetter (*Vulgata*) og asket. I brevet til Laeta (brev 107) beskriver han hvordan datteren Paula skal oppdras: bokstaver av elfenben å leke med, en eldre lærer, Salmenes bok før de hedenske dikterne og et liv skjermet fra verden. Brevet ble et forbilde for jenters oppdragelse i klostrene. I et annet brev (brev 22) forteller han om en drøm der han ble anklaget for å være «ciceronianer, ikke kristen», et bilde på kirkefedrenes ambivalens overfor den klassiske dannelsen.
      `,
      kilder: [snl("https://snl.no/Hieronymus")],
    },
    {
      name: "Augustin", birthYear: 354, deathYear: 430, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Filosof", mainGenre: ["Kirkefedrene"],
      subGenre: ["Kristen bruk av hedensk dannelse", "Den indre læreren"],
      influenceStart: 386, influenceEnd: 430, geography: "Kartago, Milano og Hippo",
      description: `
        Teolog og filosof, biskop i Hippo og Vestens største kirkelærer, som selv hadde vært retorikklærer. *Bekjennelsene* er også en fortelling om en oppdragelse, med skolens juling og lese- og regneøvelser. *De magistro* (389) hevder at ingen kan lære et annet menneske noe ved ord alene: ordene minner bare om, og det er Kristus, «den indre læreren», som lar oss se sannheten. *De doctrina christiana* gir de frie kunster en plass som redskaper for å forstå Skriften, og *De catechizandis rudibus* er en håndbok i å undervise nybegynnere, med vekt på glede og tilpasning til tilhøreren.
      `,
      keyWorks: [
        { title: "De magistro", year: 389 },
        { title: "Confessiones" },
        { title: "De doctrina christiana" },
        { title: "De catechizandis rudibus" },
      ],
      kilder: [snl("https://snl.no/Augustin_av_Hippo"), sep("https://plato.stanford.edu/entries/augustine/")],
    },

    // --- Klosterskolene ----------------------------------------------------
    {
      name: "Benedikt av Nursia", birthYear: 480, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Klosterskolene"],
      subGenre: ["Lectio divina"],
      influenceStart: 529, influenceEnd: 547, geography: "Monte Cassino",
      description: `
        Italiensk munk og grunnleggeren av det vestlige klostervesenet, som døde i 540-årene. Regelen han skrev for klosteret på Monte Cassino, ordnet munkenes liv i bønn, arbeid og hellig lesning (*ora et labora*), og ble etter hvert regelen for nesten alle klostre i Vest-Europa. Den gir også regler for barn som foreldre gir til klosteret (oblater), med mildhet i straff og omsorg. Benedikts regel gjorde lesning og skrift til en del av klosterlivet og dermed klostrene til middelalderens viktigste skoler.
      `,
      keyWorks: [{ title: "Regula Benedicti" }],
      kilder: [snl("https://snl.no/Benedikt_fra_Nursia")],
    },
    {
      name: "Karl den store", birthYear: 747, deathYear: 814, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Klosterskolene"],
      subGenre: ["Lectio divina"],
      influenceStart: 768, influenceEnd: 814, geography: "Aachen",
      description: `
        Frankisk konge fra 768 og romersk keiser fra 800. Han gjorde kirke- og skolereform til en del av rikets politikk: *Admonitio generalis* (789) påla klostre og bispeseter å holde skoler for gutter, og et brev om dyrking av lærdommen ba klostrene ta studiene på alvor. Ved hoffet i Aachen samlet han lærde fra hele Europa, med Alkuin som leder, og den karolingiske renessansen ga en ny skrift (karolingisk minuskel), rensede tekster og et nettverk av skoler. Karl lærte selv å lese, men neppe å skrive.
      `,
      kilder: [snl("https://snl.no/Karl_1._den_store"), RICHE],
    },
    {
      name: "Alkuin", birthYear: 735, deathYear: 804, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Klosterskolene", "Artes liberales"],
      subGenre: ["Lectio divina", "Allsidig utvikling"],
      influenceStart: 767, influenceEnd: 804, geography: "York, Aachen og Tours",
      description: `
        Angelsaksisk lærd fra York, der han ledet katedralskolen (767–782), før han ble Karl den stores rådgiver og leder for hoffskolen i Aachen og senere abbed i Tours. Han skrev lærebøker i grammatikk, retorikk og dialektikk i dialogform, ledet arbeidet med å rense bibelteksten og gjorde de sju frie kunster til grunnlaget for de karolingiske skolene. Alkuin er et eksempel på hvordan den angelsaksiske klosterkulturen førte antikkens lærdom tilbake til kontinentet.
      `,
      kilder: [snl("https://snl.no/Alkuin")],
    },
    {
      name: "Hrabanus Maurus", birthYear: 780, deathYear: 856, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Klosterskolene"],
      subGenre: ["Lectio divina"],
      influenceStart: 804, influenceEnd: 856, geography: "Fulda og Mainz",
      description: `
        Tysk benediktinermunk, Alkuins elev, leder av klosterskolen i Fulda og senere erkebiskop i Mainz, kalt *praeceptor Germaniae*, Tysklands lærer. *De institutione clericorum* (819) er en håndbok for utdanningen av prester, med de frie kunster som redskaper for å forstå Skriften, og hans encyklopedi samlet tidens kunnskap. Uten å være en original tenker formidlet han lærdommen slik at Fulda ble et av de viktigste lærdomssentrene nord for Alpene.
      `,
      keyWorks: [{ title: "De institutione clericorum", year: 819 }],
      kilder: [snl("https://snl.no/Hrabanus_Maurus")],
    },

    // --- Skolastikken ------------------------------------------------------
    {
      name: "Pierre Abélard", birthYear: 1079, deathYear: 1142, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Teolog", mainGenre: ["Skolastikken"],
      subGenre: ["Disputas"],
      influenceStart: 1100, influenceEnd: 1142, geography: "Paris",
      description: `
        Fransk filosof og teolog, og den mest berømte læreren i Paris i første halvdel av 1100-tallet. *Sic et non* (ca. 1120) stiller opp motstridende utsagn fra kirkefedrene om 158 spørsmål og lærer studenten å løse motsetningene med logikk: ved å tvile kommer vi til å spørre, og ved å spørre finner vi sannheten. Metoden ble grunnlaget for den skolastiske disputasen. Abélard ble fordømt for kjetteri, og forholdet til eleven Héloïse, som endte med at han ble kastrert, gjorde ham til en romantisk legende.
      `,
      keyWorks: [{ title: "Sic et non" }, { title: "Historia calamitatum" }],
      kilder: [snl("https://snl.no/Pierre_Ab%C3%A9lard"), sep("https://plato.stanford.edu/entries/abelard/")],
    },
    {
      name: "Héloïse", birthYear: 1101, deathYear: 1164, gender: "kvinne",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Skolastikken"],
      subGenre: ["Lik rett til utdanning"],
      influenceStart: 1120, influenceEnd: 1164, geography: "Paris og Paraclet",
      description: `
        Fransk nonne og en av høymiddelalderens mest bemerkelsesverdige kvinnelige intellektuelle. Hun var allerede kjent for sin lærdom i latin og filosofi da onkelen ga henne Abélard som lærer, og brevvekslingen mellom dem er blant middelalderens viktigste tekster om kjærlighet, lærdom og kvinners stilling. Som abbedisse for klosteret Paraclet ba hun Abélard skrive en regel og et studieprogram for nonnene, og gjorde klosteret til et sted der kvinner kunne studere Skriften og språkene.
      `,
      kilder: [snl("https://snl.no/H%C3%A9lo%C3%AFse")],
    },
    {
      name: "Hugo av St. Victor", birthYear: 1096, deathYear: 1141, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Filosof", mainGenre: ["Skolastikken"],
      subGenre: ["Lectio divina", "Allsidig utvikling"],
      influenceStart: 1120, influenceEnd: 1141, geography: "Paris",
      description: `
        Filosof, teolog og mystiker ved augustinerabbediet St. Victor i Paris. *Didascalicon* (ca. 1125) er en lærebok i å lese: den ordner alle fag, de teoretiske, praktiske og mekaniske kunstene og logikken, som deler av en vei til visdom, og gir råd om hukommelse, rekkefølge og ydmykhet. «Lær alt; du vil siden se at ingenting er overflødig.» Ivan Illich har i *In the Vineyard of the Text* (1993) brukt Hugo som eksempel på en lesekultur før skolastikken gjorde boka til et studieredskap.
      `,
      keyWorks: [{ title: "Didascalicon" }],
      kilder: [snl("https://snl.no/Hugo_av_St._Victor")],
    },
    {
      name: "Thomas Aquinas", birthYear: 1225, deathYear: 1274, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Filosof", mainGenre: ["Skolastikken"],
      subGenre: ["Disputas", "Den indre læreren"],
      influenceStart: 1252, influenceEnd: 1274, geography: "Paris, Napoli og Roma",
      description: `
        Italiensk dominikaner, teolog og filosof, middelalderens mest berømte kirkelærer. Han forente aristotelisk filosofi og kristen teologi i *Summa theologiae*, ordnet som disputerte spørsmål med innvendinger og svar. I *De magistro*, ett av de disputerte spørsmålene om sannheten, drøfter han Augustins tanke om den indre læreren: læreren kan virkelig undervise, men som legen hjelper naturen, ved å gi tegn og eksempler som eleven selv bearbeider med sitt eget lys. Thomas ble Den katolske kirkes klassiske dogmatiker og jesuittenes teologiske lærer.
      `,
      keyWorks: [{ title: "Quaestiones disputatae de veritate (De magistro)" }, { title: "Summa theologiae" }],
      kilder: [snl("https://snl.no/Thomas_Aquinas"), sep("https://plato.stanford.edu/entries/aquinas/")],
    },

    // --- Reformasjonen -----------------------------------------------------
    {
      name: "Martin Luther", birthYear: 1483, deathYear: 1546, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Reformasjonen"],
      subGenre: ["Katekismeundervisning", "Undervisning på morsmålet"],
      influenceStart: 1517, influenceEnd: 1546, geography: "Wittenberg",
      description: `
        Tysk teolog og reformasjonens sentrale skikkelse. Lesing av Bibelen på morsmålet ble med hans bibeloversettelse og lære om det allmenne prestedømmet en plikt for alle. I skriftet *An die Ratsherren aller Städte deutschen Landes* (1524) ber han byene opprette skoler for gutter og jenter, og i en preken (1530) gjør han det til foreldrenes plikt å holde barna på skole. *Den lille katekisme* (1529) gjorde husfaren til lærer, og er blitt brukt i norsk kristendomsundervisning i flere hundre år.
      `,
      keyWorks: [
        { title: "An die Ratsherren aller Städte deutschen Landes", year: 1524 },
        { title: "Der kleine Katechismus", year: 1529 },
        { title: "Eine Predigt, dass man Kinder zur Schulen halten solle", year: 1530 },
      ],
      kilder: [snl("https://snl.no/Martin_Luther"), STRAUSS],
    },
    {
      name: "Philipp Melanchthon", birthYear: 1497, deathYear: 1560, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Reformasjonen", "Humanismen"],
      subGenre: ["Katekismeundervisning", "Allsidig utvikling"],
      influenceStart: 1518, influenceEnd: 1560, geography: "Wittenberg",
      description: `
        Tysk humanist og professor i Wittenberg, Luthers nærmeste medarbeider og reformasjonens fremste skolemann, kalt *praeceptor Germaniae*. Han skrev lærebøker i gresk, latin, retorikk og dialektikk, reformerte universitetene og laget sammen med Luther den saksiske skoleordningen i *Unterricht der Visitatoren* (1528), med latinskolens tre klasser. Melanchthon forente humanistisk dannelse og luthersk tro, og hans elever bygde opp de protestantiske latinskolene og universitetene i hele Nord-Europa, også i Danmark.
      `,
      keyWorks: [{ title: "Unterricht der Visitatoren", year: 1528 }],
      kilder: [snl("https://snl.no/Philipp_Melanchthon")],
    },
    {
      name: "Johannes Bugenhagen", birthYear: 1485, deathYear: 1558, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Politiker og reformator", mainGenre: ["Reformasjonen"],
      subGenre: ["Katekismeundervisning"],
      influenceStart: 1528, influenceEnd: 1558, geography: "Wittenberg og København",
      description: `
        Tysk reformator og prest i Wittenberg, som skrev kirkeordninger for blant andre Braunschweig, Hamburg og Lübeck, med latinskoler, katekismeundervisning, fattigkasser og tyske skoler, også for jenter. Han kom til København i 1537, kronet Christian III og ordinerte de nye lutherske biskopene, og arbeidet med kirkeordinansen for Danmark-Norge (1537/1539), som påla latinskoler i bispebyene. Bugenhagen er dermed en av den norske skolens indirekte grunnleggere.
      `,
      kilder: [snl("https://snl.no/Johannes_Bugenhagen")],
    },
    {
      name: "Johannes Sturm", birthYear: 1507, deathYear: 1589, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Reformasjonen", "Humanismen"],
      subGenre: ["Allsidig utvikling"],
      influenceStart: 1538, influenceEnd: 1581, geography: "Strasbourg",
      description: `
        Tysk humanist og pedagog som i 1538 grunnla gymnaset i Strasbourg og ledet det i over førti år. Skolen hadde ti klasser med faste pensum og årlige opprykk, latinsk veltalenhet etter Cicero som mål og «klok og veltalende fromhet» (*sapiens atque eloquens pietas*) som ideal. Sturms gymnas ble forbildet for protestantiske latinskoler og for jesuittenes klassesystem, og er et tidlig eksempel på den moderne skolens organisering i trinn og klasser.
      `,
      kilder: [bok("Grafton, Anthony og Lisa Jardine. From Humanism to the Humanities: Education and the Liberal Arts in Fifteenth- and Sixteenth-Century Europe. Duckworth, 1986.")],
    },

    // --- Jesuittene --------------------------------------------------------
    {
      name: "Ignatius av Loyola", birthYear: 1491, deathYear: 1556, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Jesuittene"],
      subGenre: ["Cura personalis"],
      influenceStart: 1540, influenceEnd: 1556, geography: "Roma",
      description: `
        Spansk adelsmann og offiser som etter en omvendelse grunnla Jesuittordenen (1540). *Åndelige øvelser* er en metode for prøving og valg som tilpasses den enkelte, og ble grunnlaget for jesuittenes pedagogikk. Ignatius hadde ikke tenkt at ordenen skulle drive skoler, men etter at kollegiet i Messina (1548) ble en suksess, ble undervisning dens viktigste virksomhet, og del fire av ordenens konstitusjoner la grunnlaget for *Ratio studiorum*. Han ble helgenkåret i 1622.
      `,
      keyWorks: [{ title: "Exercitia spiritualia" }],
      kilder: [snl("https://snl.no/Ignatius_av_Loyola"), OMALLEY],
    },
    {
      name: "Petrus Canisius", birthYear: 1521, deathYear: 1597, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Jesuittene"],
      subGenre: ["Katekismeundervisning"],
      influenceStart: 1549, influenceEnd: 1597, geography: "Ingolstadt, Wien og Fribourg",
      description: `
        Nederlandsk jesuitt og motreformasjonens leder i de tyskspråklige landene. Han grunnla og ledet en rekke jesuittkollegier og skrev tre katekismer (fra 1555) for ulike alderstrinn, som svar på Luthers og som i flere hundre år var de mest brukte katolske katekismene i Tyskland. Canisius er et eksempel på hvordan begge konfesjoner gjorde katekismen og skolen til våpen i kampen om folkets sjel.
      `,
      kilder: [snl("https://snl.no/Peter_Canisius")],
    },
    {
      name: "Laurentius Nicolai Norvegus", birthYear: 1538, deathYear: 1622, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Jesuittene"],
      subGenre: ["Katekismeundervisning"],
      influenceStart: 1576, influenceEnd: 1622, geography: "Stockholm, Braunsberg og Vilnius",
      description: `
        Norsk jesuitt fra Tønsberg, opprinnelig Lauritz Nilssøn, som ble katolikk under studiene i Leuven og gikk inn i Jesuittordenen i 1564. Kong Johan III av Sverige gjorde ham til professor og leder for en presteskole i det nedlagte fransiskanerklosteret i Stockholm (fra 1576), derav tilnavnet «Klosterlasse». Etter motstand fra den lutherske geistligheten måtte han forlate Sverige, og han virket resten av livet ved jesuittkollegier i Øst-Europa. Han er den mest kjente nordmannen i motreformasjonens skolevesen.
      `,
      kilder: [snl("https://snl.no/Laurentius_Nicolai_Norvegus")],
    },

    // --- Pietismen ---------------------------------------------------------
    {
      name: "Philipp Jakob Spener", birthYear: 1635, deathYear: 1705, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Pietismen"],
      subGenre: ["Katekismeundervisning"],
      influenceStart: 1670, influenceEnd: 1705, geography: "Frankfurt, Dresden og Berlin",
      description: `
        Tysk luthersk teolog, kalt pietismens far. *Pia desideria* (1675) foreslo bibellesning i små grupper (*collegia pietatis*), et levende kristenliv framfor teologisk strid, og en presteutdanning som la vekt på fromhet. Spener ga katekismeundervisningen og konfirmasjonen ny betydning som personlig tilegnelse av troen, og gjorde det mulig for Francke å bygge opp Halle.
      `,
      keyWorks: [{ title: "Pia desideria", year: 1675 }],
      kilder: [snl("https://snl.no/Philipp_Jakob_Spener")],
    },
    {
      name: "August Hermann Francke", birthYear: 1663, deathYear: 1727, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Pietismen"],
      subGenre: ["Katekismeundervisning", "Viljens oppdragelse"],
      influenceStart: 1695, influenceEnd: 1727, geography: "Halle",
      description: `
        Tysk teolog og pedagog, som med Spener regnes som pietismens grunnlegger. I Halle bygde han fra 1695 opp *Franckesche Stiftungen*: fattigskole, barnehjem (1698), latinskole, pedagogium, pikeskole, lærerseminar, apotek og trykkeri, en «by i byen» som ble Europas mest beundrede skoleanstalt. *Kurzer und einfältiger Unterricht* (1702) gjør fromhet og klokskap til målet og bryting av barnets egenvilje til et middel, med stadig tilsyn, fast dagsrytme og lite lek. Halle ble forbildet for skolelovgivningen i Preussen og Danmark-Norge.
      `,
      keyWorks: [{ title: "Kurzer und einfältiger Unterricht", year: 1702 }],
      kilder: [snl("https://snl.no/August_Hermann_Francke")],
    },
    {
      name: "Nikolaus Ludwig von Zinzendorf", birthYear: 1700, deathYear: 1760, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Pietismen"],
      subGenre: ["Barndommens egenverdi"],
      influenceStart: 1722, influenceEnd: 1760, geography: "Herrnhut, Sachsen",
      description: `
        Tysk greve og godseier, oppdratt i Francke-anstaltene i Halle, som ga eksilerte bøhmiske brødre (etterkommere av Comenius' Brødremenighet) et sted å bo på godset sitt i Herrnhut (fra 1722). Brødremenigheten under hans ledelse fikk en mildere og mer følelsesfull pietisme enn Halles, med vekt på Jesu kjærlighet, sang og fellesskap, og egne skoler og misjon i hele verden. Herrnhuternes skoler la mer vekt på barnas glede og egen tro, og bevegelsen fikk også tilhengere i Norge.
      `,
      kilder: [snl("https://snl.no/Ludwig_Zinzendorf")],
    },
    {
      name: "Thomas von Westen", birthYear: 1682, deathYear: 1727, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Pietismen"],
      subGenre: ["Katekismeundervisning", "Undervisning på morsmålet"],
      influenceStart: 1716, influenceEnd: 1727, geography: "Trondheim og Finnmark",
      description: `
        Norsk prest og misjonær, i Norge kalt samenes apostel. Som leder for misjonen i Nord-Norge fra 1716 under Misjonskollegiet reiste han i samiske områder, opprettet misjonsskoler og en skole i Trondheim for utdanning av misjonærer. Han ville forkynne og undervise på samisk, men misjonen var også en del av statens politikk i et grenseområde, og den førte til ødeleggelse av samisk religion og kultur, med beslag av runebommer. Westen er dermed både en pioner for samiskspråklig undervisning og et symbol på den kristne skolens rolle i fornorskingens forhistorie.
      `,
      kilder: [snl("https://snl.no/Thomas_von_Westen")],
    },
    {
      name: "Hans Nielsen Hauge", birthYear: 1771, deathYear: 1824, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Pietismen", "Folkeopplysningen"],
      subGenre: ["Katekismeundervisning"],
      influenceStart: 1796, influenceEnd: 1824, geography: "Tune, Østfold og hele Norge",
      description: `
        Norsk vekkelsesleder, lekpredikant og gründer, trolig den enkeltpersonen som har hatt størst innflytelse på norsk kirkeliv etter reformasjonen. Etter en religiøs opplevelse i 1796 reiste han landet rundt, forkynte, skrev og ga ut bøker, og bygde et nettverk av venner som drev handel, møller og industri. Han satt fengslet i flere år for brudd på konventikkelplakaten. Haugebevegelsen gjorde den pietistiske leseopplæringen om til lesing, skriving, brevskriving og selvstendig initiativ blant bønder og håndverkere, og ga mange av dem som senere satt på Stortinget, deres skolering.
      `,
      kilder: [snl("https://snl.no/Hans_Nielsen_Hauge")],
    },
  ],
};
