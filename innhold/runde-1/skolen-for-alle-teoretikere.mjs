// Runde 1 — Skolen for alle: teoretikerne (fase 6, skrevet av Opus).
import { snl, brit, ndb, lex, side, bok } from "../kilder.mjs";

const R = "Skolen for alle";

export default {
  artists: [
    // --- Folkeopplysningen -------------------------------------------------
    {
      name: "Erik Pontoppidan", birthYear: 1698, deathYear: 1764, gender: "mann",
      metaGenre: "Kristen oppdragelse", instrument: "Teolog", mainGenre: ["Folkeopplysningen", "Pietismen"],
      subGenre: [],
      influenceStart: 1737, influenceEnd: 1764, geography: "København og Bergen",
      description: `
        Pontoppidan var dansk teolog, hoffprest og senere biskop i Bergen (1747–1755). Da konfirmasjonen ble innført i 1736, fikk han i oppdrag å skrive en forklaring til Luthers lille katekisme. *Sandhed til Gudfrygtighed* (1737) ble lærebok i allmueskolen, i latinskolen og i kirkens katekisering, og i Norge var den i bruk i mer enn 150 år, lenge etter at den var byttet ut i Danmark.

        Boka er nøkkelen til allmueskolen fra 1739. Skolen skulle først og fremst gjøre barna i stand til å lese og forstå «Forklaringen» før konfirmasjonen, og leseferdighet ble dermed et krav for å bli regnet som voksen kristen. Resultatet var at en høy andel av befolkningen kunne lese allerede før 1800, men lesingen var bundet til religiøse tekster og til pugg. Telhaug og Mediås har kalt perioden «statspietisme»: staten brukte pietismens krav om personlig tro og kunnskap til å bygge en skole for alle. Pontoppidan skrev også om Norges naturhistorie.
      `,
      keyWorks: [
        { title: "Sandhed til Gudfrygtighed (katekismeforklaringen)", year: 1737 },
        { title: "Menoza, en asiatisk Printz", year: 1742 },
        { title: "Det første Forsøg paa Norges Naturlige Historie", year: 1752 },
      ],
      kilder: [
        snl("https://snl.no/Erik_Pontoppidan_-_den_yngre", "Torleiv Austad"),
        bok("Telhaug, Alfred Oftedal og Odd Asbjørn Mediås. Grunnskolen som nasjonsbygger. Fra statspietisme til nyliberalisme. Abstrakt forlag, 2003."),
      ],
    },
    {
      name: "Antoine Condorcet", birthYear: 1743, deathYear: 1794, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Folkeopplysningen"],
      subGenre: ["Lik rett til utdanning", "Fellesskolen"],
      influenceStart: 1791, influenceEnd: 1794, geography: "Paris",
      description: `
        Condorcet var matematiker, opplysningsfilosof og revolusjonspolitiker. I *Cinq mémoires sur l'instruction publique* (1791) og rapporten han la fram for Den lovgivende forsamling i april 1792, la han fram en plan for et offentlig, gratis og trinnvis undervisningsvesen for hele folket, gutter og jenter, fra grunnskole til et nasjonalt vitenskapsselskap, med undervisning for voksne på søndager.

        Planen bygger på et skille mellom *instruction* og *éducation*. Staten skal gi undervisning, altså kunnskap og evne til å tenke selv, men ikke oppdragelse til bestemte meninger, som hører til familien. Undervisningen skal være uavhengig av den politiske makten, ellers blir den indoktrinering. Planen ble aldri vedtatt; samme dag som rapporten ble lagt fram, erklærte Frankrike krig. Condorcet døde i fengsel i 1794. Hans tanker ble likevel grunnlaget for den franske ideen om *instruction publique* og for den sekulære skolen under Ferry på 1880-tallet, og Catherine Kintzler har vist hvor moderne skillet mellom undervisning og oppdragelse er.
      `,
      keyWorks: [
        { title: "Cinq mémoires sur l'instruction publique", year: 1791 },
        { title: "Rapport et projet de décret sur l'organisation générale de l'instruction publique", year: 1792 },
        { title: "Esquisse d'un tableau historique des progrès de l'esprit humain (utgitt etter hans død)", year: 1795 },
      ],
      kilder: [
        snl("https://snl.no/Antoine_Condorcet"),
        bok("Kintzler, Catherine. Condorcet. L'instruction publique et la naissance du citoyen. Le Sycomore, 1984."),
      ],
    },
    {
      name: "Friedrich Eberhard von Rochow", birthYear: 1734, deathYear: 1805, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Folkeopplysningen"],
      subGenre: ["Lik rett til utdanning"],
      influenceStart: 1772, influenceEnd: 1805, geography: "Reckahn (Brandenburg)",
      description: `
        Rochow var en prøyssisk adelsmann og offiser som i 1760 overtok familiegodsene rundt Reckahn. Hungersnøden i 1771–1772 overbeviste ham om at uvitenhet og overtro holdt bøndene i elendighet, og fra 1773 bygde han reformskoler for bøndenes barn i Reckahn og nabolandsbyene. Med læreren Heinrich Julius Bruns utviklet han en undervisning der barna skulle lese med forståelse og lære å tenke gjennom samtale, ikke bare pugge katekismen.

        *Der Kinderfreund* (1776) var en verdslig lesebok for landsens barn og ble en av de mest opptrykte folkeopplysningsbøkene på 1700-tallet. Reckahn fikk mange besøkende, men reformene ble regionale fordi den prøyssiske staten førte en restriktiv politikk for folkeskolen. Rochow står midt i opplysningstidens strid om hvor mye opplysning folket tålte: Berlin-akademiet utlyste i 1780 en prisoppgave om det var nyttig å bedra folket. Hans svar var at fornuftig undervisning gjorde bøndene til bedre bønder og bedre undersåtter.
      `,
      keyWorks: [
        { title: "Versuch eines Schulbuches für Kinder der Landleute", year: 1772 },
        { title: "Der Kinderfreund", year: 1776 },
      ],
      kilder: [
        ndb("https://www.deutsche-biographie.de/sfz76724.html"),
      ],
    },
    {
      name: "Johann Ignaz von Felbiger", birthYear: 1724, deathYear: 1788, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Folkeopplysningen"],
      subGenre: ["Lik rett til utdanning"],
      influenceStart: 1765, influenceEnd: 1788, geography: "Sagan (Schlesien) og Wien",
      description: `
        Felbiger var augustinerkorherre og abbed i Sagan i Schlesien og gjorde katolsk skolereform til sitt livsverk. I 1765 utarbeidet han en skoleordning for katolske landsskoler i Schlesien, som de prøyssiske myndighetene innførte i hele den katolske delen av provinsen. Metoden hans, «Sagan-metoden», bygde på klasseundervisning der hele klassen arbeidet med det samme samtidig, på tabeller og forbokstavmetoder og på katekismeundervisning.

        Keiserinne Maria Theresia hentet ham til Wien i 1774, og *Allgemeine Schulordnung* fra desember samme år innførte skoleplikt for barn fra seks til tolv år i hele monarkiet, med normalskoler for lærerutdanning, hovedskoler og trivialskoler. Etter Maria Theresias død ble han satt til side av Joseph II og sendt til Pressburg for å arbeide med skolene i Ungarn. Felbiger viser at den moderne folkeskolen også vokste fram i den katolske opplysningen og i statsbyggingen i Habsburgmonarkiet, ikke bare i protestantiske land. Hans metoder ble modell for katolske skolereformer i Bayern og Münster.
      `,
      keyWorks: [
        { title: "Allgemeine Schulordnung für die deutschen Normal-, Haupt- und Trivialschulen", year: 1774 },
        { title: "Methodenbuch für Lehrer der deutschen Schulen", year: 1775 },
      ],
      kilder: [
        ndb("https://www.deutsche-biographie.de/sfz69765.html"),
      ],
    },

    // --- Folkehøgskolen ----------------------------------------------------
    {
      name: "N.F.S. Grundtvig", birthYear: 1783, deathYear: 1872, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Folkehøgskolen"],
      subGenre: ["Det levende ord", "Nasjonal oppdragelse"],
      influenceStart: 1838, influenceEnd: 1872, geography: "København",
      description: `
        Nikolai Frederik Severin Grundtvig var prest, salmedikter, historiker og en av de mest betydningsfulle skikkelsene i dansk kultur. Hans skoletanker vokste fram av en skarp kritikk av latinskolen, «den sorte skole», med død pugging av bøker på et fremmed språk. I skriftene fra 1830- og 1840-årene, blant dem *Skolen for Livet og Academiet i Soer* (1838), tok han til orde for en «skole for livet» for unge voksne fra folket, på morsmålet, med historie, poesi og samfunn, og uten eksamen.

        Kjernebegrepene er «det levende ord», den muntlige fortellingen som vekker og forbinder, og «folkelighet», et fellesskap bygd på språk, historie og deltakelse. Den første folkehøgskolen åpnet i Rødding i 1844 under inspirasjon fra ham. Grundtvigs tenkning er både nasjonal og demokratisk, og forskningen har diskutert forholdet mellom de to: folkehøgskolen var en skole for bondestandens politiske myndiggjøring, men også for en romantisk forestilling om det nordiske. I Norge ble han inspirator for folkehøgskolen fra Sagatun (1864), og for den frilynte bevegelsen.
      `,
      keyWorks: [
        { title: "Skolen for Livet og Academiet i Soer", year: 1838 },
        { title: "Mands Minde (forelesninger, utgitt 1877)", year: 1838 },
      ],
      kilder: [
        snl("https://snl.no/Nikolai_Frederik_Severin_Grundtvig", "Merethe Roos"),
        bok("Korsgaard, Ove. Kampen om lyset. Dansk voksenoplysning gennem 500 år. Gyldendal, 1997."),
      ],
    },
    {
      name: "Christen Kold", birthYear: 1816, deathYear: 1870, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Folkehøgskolen"],
      subGenre: ["Det levende ord"],
      influenceStart: 1851, influenceEnd: 1870, geography: "Ryslinge og Dalum (Fyn)",
      description: `
        Kold var skomakersønn og lærer og ga Grundtvigs ideer den praktiske formen som gjorde folkehøgskolen til en bevegelse. Han åpnet sin folkehøgskole i Ryslinge på Fyn i 1851, senere i Dalum, med lave kostnader, felles husholdning med elevene og undervisning gjennom fortelling. Mottoet hans var «først oplive, så oplyse»: undervisningen skal vekke lyst og livsmot før den formidler kunnskap.

        Kold var også en av grunnleggerne av de danske friskolene, frie barneskoler drevet av foreldrene, som fikk lovhjemmel i 1855. Han skrev lite, men hans foredrag og brev har formet bildet av en pedagogikk bygd på tillit, samtale og fellesskap mellom lærer og elev. Kold-skolen ble et forbilde for folkehøgskoler i hele Norden, også i Norge.
      `,
      keyWorks: [],
      kilder: [
        lex("https://lex.dk/Christen_Kold"),
        snl("https://snl.no/folkeh%C3%B8gskole", "Johan Lövgren"),
      ],
    },
    {
      name: "Herman Anker", birthYear: 1839, deathYear: 1896, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Folkehøgskolen"],
      subGenre: ["Det levende ord"],
      influenceStart: 1864, influenceEnd: 1885, geography: "Sagatun, Hamar",
      description: `
        Anker var teolog fra 1863 og grunnla året etter, sammen med Olaus Arvesen, Norges første folkehøgskole, Sagatun ved Hamar. Skolen bygde på Grundtvigs ideer om en skole for livet for ungdom fra bygdene, med muntlig fortelling, historie, sang og samfunnsfag, uten eksamen.

        Sagatun ble et forbilde for de mange folkehøgskolene som ble startet i Norge de neste tiårene, og et samlingssted for det frilynte miljøet som var nært knyttet til Venstre-bevegelsen. Anker ledet skolen sammen med Arvesen til 1873, og ble senere postmester i Hamar.
      `,
      keyWorks: [],
      kilder: [
        snl("https://snl.no/Herman_Anker"),
      ],
    },
    {
      name: "Olaus Arvesen", birthYear: 1830, deathYear: 1917, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Folkehøgskolen"],
      subGenre: ["Det levende ord", "Nasjonal oppdragelse"],
      influenceStart: 1864, influenceEnd: 1917, geography: "Sagatun, Hamar",
      description: `
        Arvesen vokste opp i et haugiansk bondemiljø i Onsøy, tok eksamen ved stiftsseminaret i Asker og senere teologisk embetseksamen (1862). Under et opphold i Danmark ble han sterkt påvirket av Grundtvig, og i 1864 grunnla han Sagatun sammen med Herman Anker. Fra 1873 ledet han skolen alene.

        Arvesen var også redaktør, av *Hamar Stiftstidende* fra 1866 og av *Oplandenes Avis* fra 1872, og stortingsrepresentant for Venstre 1892–1894. Han er et eksempel på hvordan folkehøgskolen, pressen og den politiske venstrebevegelsen hang sammen i Norge i årene før og etter parlamentarismens gjennombrudd i 1884: folkehøgskolen var en skole for unge bønder som skulle delta i det offentlige livet.
      `,
      keyWorks: [],
      kilder: [
        snl("https://snl.no/Olaus_Arvesen", "Oddvar Vormeland"),
      ],
    },
    {
      name: "Christopher Bruun", birthYear: 1839, deathYear: 1920, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Folkehøgskolen"],
      subGenre: ["Nasjonal oppdragelse", "Det levende ord"],
      influenceStart: 1867, influenceEnd: 1920, geography: "Sel, Gausdal og Vonheim",
      description: `
        Bruun var teolog, deltok som frivillig i den dansk-tyske krigen i 1864 og grunnla en folkehøgskole i Sel i 1867. Den ble flyttet til Gausdal og fra 1875 til Vonheim, like ved Bjørnstjerne Bjørnsons Aulestad. Han regnes som et av forbildene for Ibsens *Brand*. Bjørnson beundret ham først, men de kom i heftig strid i 1877–1878 om læren om de evige straffer.

        I hovedverket *Folkelige Grundtanker* (1878) trakk han opp målet for folkehøgskolen: en norrøn gjenfødelse i folkets oppdragelse og levesett, grunnlagt på en folkelig kristentro, knyttet til den gamle nasjonale kulturen og til samtidens demokratiske bevegelser. Han angrep statskirken for mangel på folkelig kristendom. Bruun viser hvor nært folkehøgskolen i Norge var knyttet til nasjonsbyggingen, og hvordan grundtvigianismen kunne ta både en kirkekritisk og en nasjonalromantisk form.
      `,
      keyWorks: [
        { title: "Folkelige Grundtanker", year: 1878 },
      ],
      kilder: [
        snl("https://snl.no/Christopher_Arnt_Bruun", "Haakon Flottorp"),
      ],
    },

    // --- Folkeskolen ------------------------------------------------------------
    {
      name: "Horace Mann", birthYear: 1796, deathYear: 1859, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Folkeskolen"],
      subGenre: ["Fellesskolen", "Lik rett til utdanning"],
      influenceStart: 1837, influenceEnd: 1859, geography: "Massachusetts",
      description: `
        Mann var jurist og politiker og ble i 1837 sekretær for det nye skolestyret i Massachusetts. I tolv år brukte han årsrapportene, tidsskriftet *Common School Journal* og en omfattende foredragsvirksomhet til å bygge «the common school»: en gratis, offentlig og felles skole for alle barn, finansiert av skatt, uavhengig av kirkesamfunn og med profesjonelle lærere. Den første statlige lærerskolen i USA åpnet i 1839. Etter en reise i Europa roste han i den sjuende rapporten (1843) de prøyssiske skolene, og i den tolvte (1848) kalte han utdanning «den store utjevneren» av menneskenes kår.

        Senere forskning har gitt et mer sammensatt bilde. Den «konfesjonsløse» fellesskolen var i praksis protestantisk, og katolikkene svarte med egne skoler. Revisjonistiske historikere som Michael Katz (1968) har lest fellesskolen som et middel for sosial kontroll i et industrisamfunn med innvandring og klassekonflikt. Mann står likevel som den fremste talsmannen for ideen om at en felles skole er en forutsetning for demokratiet.
      `,
      keyWorks: [
        { title: "Seventh Annual Report of the Board of Education", year: 1843 },
        { title: "Twelfth Annual Report of the Board of Education", year: 1848 },
      ],
      kilder: [
        brit("https://www.britannica.com/biography/Horace-Mann"),
        brit("https://www.britannica.com/topic/common-school"),
        bok("Katz, Michael B. The Irony of Early School Reform: Educational Innovation in Mid-Nineteenth Century Massachusetts. Harvard University Press, 1968."),
      ],
    },
    {
      name: "Catharine Beecher", birthYear: 1800, deathYear: 1878, gender: "kvinne",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Folkeskolen"],
      subGenre: ["Lik rett til utdanning"],
      influenceStart: 1824, influenceEnd: 1878, geography: "Hartford og Cincinnati",
      description: `
        Beecher grunnla Hartford Female Seminary i 1824 og var med og opprettet et titall skoler for kvinner, særlig i Midtvesten. Hun er en av hovedpersonene bak at undervisning ble et kvinneyrke i USA. Hun argumenterte for at kvinner var særlig egnet til å oppdra barn, og at landets voksende fellesskoler i vest burde ha kvinnelige lærere; hun organiserte utsendelse av lærerinner fra østkysten.

        Argumentet bygde på en konservativ forestilling om kvinners egen sfære i hjemmet, og hun var motstander av stemmerett for kvinner. *A Treatise on Domestic Economy* (1841) gjorde husholdning til et fag. Forskningen, fra Kathryn Kish Sklars biografi (1973) og framover, har sett paradokset i hennes arbeid: en ideologi som holdt kvinner i hjemmet, ga dem samtidig et offentlig yrke. Feminiseringen av læreryrket gjorde det også billigere for det offentlige, og det var en del av grunnen til at fellesskolen kunne bygges ut så raskt.
      `,
      keyWorks: [
        { title: "A Treatise on Domestic Economy", year: 1841 },
        { title: "The Duty of American Women to Their Country", year: 1845 },
      ],
      kilder: [
        snl("https://snl.no/Catharine_Ester_Beecher"),
        brit("https://www.britannica.com/biography/Catharine-Beecher"),
        bok("Sklar, Kathryn Kish. Catharine Beecher: A Study in American Domesticity. Yale University Press, 1973."),
      ],
    },
    {
      name: "Hartvig Nissen", birthYear: 1815, deathYear: 1874, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Folkeskolen"],
      subGenre: ["Fellesskolen"],
      influenceStart: 1843, influenceEnd: 1874, geography: "Christiania",
      description: `
        Nissen var filolog og en av dem som har hatt størst betydning for utviklingen av norsk skole. Han startet i 1843 en latin- og realskole i Christiania sammen med Ole Jacob Broch, som ble forbilde for omorganiseringen av de høyere skolene 1849–1851, og grunnla Nissens pikeskole i 1849. I 1851 tok han initiativet til Selskabet for Folkeoplysningens Fremme og ble dets første formann.

        Hans viktigste verk er landsfolkeskoleloven av 1860, som gjorde faste skoler til regelen og omgangsskolen til unntaket, utvidet fagkretsen og ga folket innflytelse over skolen gjennom skolekommisjoner. Som ekspedisjonssjef for skolevesenet (1865–1872) ledet han kommisjonen bak loven om den høyere allmennskolen (1869), som svekket latinens stilling til fordel for moderne språk og realfag, og han sto bak loven om lærerembetseksamen (1871). Nissen gjorde skolen til et statlig moderniseringsprosjekt i embetsmannsstaten.
      `,
      keyWorks: [],
      kilder: [
        snl("https://snl.no/Hartvig_Nissen_-_skolemann"),
        snl("https://snl.no/allmueskole", "Merethe Roos og Harald Jarning"),
      ],
    },
    {
      name: "Ole Vig", birthYear: 1824, deathYear: 1857, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Folkeskolen"],
      subGenre: ["Fellesskolen", "Det levende ord"],
      influenceStart: 1850, influenceEnd: 1857, geography: "Trøndelag og Christiania",
      description: `
        Vig vokste opp på en husmannsplass i Stjørdal og lærte å lese av en haugiansk mor. Han ble seminarist, lærer og folkeopplyser, og var en tidlig forkjemper for en felles, offentlig folkeskole for barn fra alle samfunnslag. Som redaktør av *Folkevennen*, tidsskriftet til Selskabet for Folkeoplysningens Fremme, nådde han et stort publikum med et grundtvigsk preget kultursyn og en lys kristendom, i opposisjon til tidens pietisme.

        Vig døde bare 33 år gammel i 1857, men han regnes som den som formidlet de nye demokratiske skoletankene ut til folket i 1850-årene og beredte grunnen for skoleloven av 1860. Han viser at skolereformene i Norge ikke bare var embetsmennenes verk, men også hadde en folkelig bevegelse bak seg.
      `,
      keyWorks: [
        { title: "Folkevennen (redaktør)", year: 1852 },
      ],
      kilder: [
        snl("https://snl.no/Ole_Vig", "Sigurd Aa. Aarnes og Arild Bye"),
      ],
    },

    // --- Enhetsskolen ---------------------------------------------------------
    {
      name: "Paul Oestreich", birthYear: 1878, deathYear: 1959, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Enhetsskolen", "Reformpedagogikken"],
      subGenre: ["Fellesskolen"],
      influenceStart: 1919, influenceEnd: 1959, geography: "Berlin",
      description: `
        Oestreich var lektor i Berlin og grunnla i september 1919 Bund Entschiedener Schulreformer, som et svar på skolekompromisset i Weimar-forfatningen, der kirkene fikk beholde konfesjonsskolene. Forbundet krevde en demokratisert og samlet statlig skole, en «elastisk enhetsskole» der faste klasser ble erstattet av kurs etter evner og interesser, fellesundervisning for gutter og jenter, og gratis skole og læremidler. Blant de andre grunnleggerne var Fritz Karsen og Siegfried Kawerau.

        Oestreich ledet forbundet til nazistene oppløste det i 1933, satt to måneder i fengsel og ble avskjediget. Etter 1945 var han skoleinspektør i Berlin og ble medlem av KPD og senere SED. Han står for den radikale, sosialistiske linjen i den tyske enhetsskoledebatten, der reformpedagogikk og skolepolitisk likhet ble sett som to sider av samme sak.
      `,
      keyWorks: [
        { title: "Die elastische Einheitsschule. Lebens- und Produktionsschule", year: 1921 },
      ],
      kilder: [
        ndb("https://www.deutsche-biographie.de/sfz73132.html"),
      ],
    },
    {
      name: "Alva Myrdal", birthYear: 1902, deathYear: 1986, gender: "kvinne",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Enhetsskolen"],
      subGenre: ["Fellesskolen", "Lik rett til utdanning"],
      influenceStart: 1934, influenceEnd: 1962, geography: "Stockholm",
      description: `
        Myrdal var utdannet i filologi og pedagogikk og en av de ledende sosialdemokratiske samfunnsplanleggerne i Sverige. Med Gunnar Myrdal skrev hun *Kris i befolkningsfrågan* (1934), som gjorde det lave fødselstallet til et argument for sosialreformer: barnetrygd, gode boliger, barnehager og en skole som avlastet familiene. Hun var studierektor ved Socialpedagogiska seminariet (1936–1947), som utdannet førskolelærere, og satt i skolekommisjonen av 1946, som la grunnlaget for den niårige svenske grunnskolen (1962).

        For Myrdal skulle en felles skole for alle utjevne klasseforskjeller og oppdra demokratiske borgere. Hun ble senere diplomat, statsråd for nedrustning og fikk Nobels fredspris i 1982. Forskningen, blant annet Yvonne Hirdmans biografi, har diskutert det sosialtekniske preget i folkhemsprosjektet, også Myrdal-parets syn på befolkningskvalitet og sterilisering i 1930-årene.
      `,
      keyWorks: [
        { title: "Kris i befolkningsfrågan (med Gunnar Myrdal)", year: 1934 },
        { title: "Stadsbarn", year: 1935 },
      ],
      kilder: [
        snl("https://snl.no/Alva_Myrdal", "Helge Giverholt og Anne Synnøve Simensen"),
        bok("Hirdman, Yvonne. Det tänkande hjärtat. Boken om Alva Myrdal. Ordfront, 2006."),
      ],
    },
    {
      name: "Helge Sivertsen", birthYear: 1913, deathYear: 1986, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Enhetsskolen"],
      subGenre: ["Fellesskolen", "Lik rett til utdanning"],
      influenceStart: 1948, influenceEnd: 1965, geography: "Oslo",
      description: `
        Sivertsen vokste opp i folkehøgskolemiljøet og grundtvigianismen, var historiker og deltok i motstandsarbeidet under krigen. Etter krigen ble han den ruvende skikkelsen i Arbeiderpartiets kultur- og skolepolitikk, først som statssekretær i Kirke- og undervisningsdepartementet fram til 1956 og senere som statsråd (1960–1965). Han sto bak forsøksvirksomheten i skolen etter forsøksloven av 1954 og overgangen fra sjuårig folkeskole til niårig grunnskole, som ble lovfestet i 1969.

        Prinsippet bak var lik tilgang til utdanning for alle, ut fra egne forutsetninger. Han tok også initiativ til Vogt-komiteen om språkfreden, og begreper som «kulturpolitikk» og «forskningspolitikk» kom inn i den politiske debatten i hans tid. Rune Slagstad har plassert ham blant de «nasjonale strateger» som bygde den sosialdemokratiske kunnskapsstaten. Sivertsen er den politiske hovedpersonen bak den norske enhetsskolen i dens fullførte form.
      `,
      keyWorks: [
        { title: "Demokratisk og nasjonal oppseding i norsk skole" },
      ],
      kilder: [
        snl("https://snl.no/Helge_Sivertsen", "Eirik Rossen og Jon Grepstad"),
        bok("Slagstad, Rune. De nasjonale strateger. Pax, 1998."),
      ],
    },

    // --- Inkludering --------------------------------------------------------------
    {
      name: "N.E. Bank-Mikkelsen", birthYear: 1919, deathYear: 1990, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Inkludering"],
      subGenre: ["Normaliseringsprinsippet"],
      influenceStart: 1959, influenceEnd: 1990, geography: "København",
      description: `
        Niels Erik Bank-Mikkelsen var jurist og ledet den danske åndssvakeomsorgen fra 1959 til 1970. Hans navn knyttes til målet i den danske loven fra 1959: utviklingshemmede skulle få en tilværelse så nær det normale som mulig. Det var en reaksjon mot de store, lukkede institusjonene der mennesker med utviklingshemming levde atskilt fra samfunnet.

        Normaliseringsprinsippet ble utviklet videre av svensken Bengt Nirje og spredte seg til Norden, Nord-Amerika og internasjonale organisasjoner. Det ble utgangspunktet for nedbyggingen av institusjonene og for kravet om at barn med funksjonsnedsettelser skulle gå i vanlige barnehager og skoler. Prinsippet viser hvordan inkluderingsbevegelsen begynte i sosialpolitikken og først senere ble et pedagogisk begrep.
      `,
      keyWorks: [],
      kilder: [
        lex("https://lex.dk/N.E._Bank-Mikkelsen"),
      ],
    },
    {
      name: "Bengt Nirje", birthYear: 1924, deathYear: 2006, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Inkludering"],
      subGenre: ["Normaliseringsprinsippet"],
      influenceStart: 1969, influenceEnd: 2006, geography: "Sverige og Canada",
      description: `
        Nirje var ombudsmann for den svenske foreningen for utviklingshemmede barn og ga normaliseringsprinsippet sin klassiske formulering i et kapittel til den amerikanske presidentkomiteen for psykisk utviklingshemming i 1969. Prinsippet går ut på å gjøre dagliglivets mønstre og vilkår tilgjengelige for mennesker med utviklingshemming, så nær samfunnets vanlige normer som mulig: en normal døgn-, uke- og årsrytme, normale livsfaser, respekt for egne valg og ønsker, og vanlige økonomiske og fysiske levekår.

        Nirje la vekt på at det er vilkårene, ikke menneskene, som skal normaliseres. Det skillet gikk ofte tapt i resepsjonen, og prinsippet ble både brukt og kritisert som et krav om tilpasning til normalitet. Hans formulering ble grunnlaget for avinstitusjonaliseringen i Norden og Nord-Amerika, og for kravet om integrering i skolen.
      `,
      keyWorks: [
        { title: "The Normalization Principle and Its Human Management Implications", year: 1969 },
      ],
      kilder: [
        bok("Nirje, Bengt. «The Normalization Principle and Its Human Management Implications.» I Robert B. Kugel og Wolf Wolfensberger (red.), Changing Patterns in Residential Services for the Mentally Retarded. President's Committee on Mental Retardation, 1969."),
      ],
    },
    {
      name: "Mary Warnock", birthYear: 1924, deathYear: 2019, gender: "kvinne",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Inkludering"],
      subGenre: ["Tilpasset opplæring"],
      influenceStart: 1974, influenceEnd: 2005, geography: "Oxford og London",
      description: `
        Warnock var moralfilosof i Oxford og ledet to av de mest innflytelsesrike offentlige utvalgene i Storbritannia. Utvalget om opplæring av barn og unge med funksjonsnedsettelser (1974–1978) erstattet de gamle kategoriene for handikap med begrepet *special educational needs*. Rapporten anslo at hvert femte barn ville ha slike behov en gang i skoletiden, og anbefalte at de så langt som mulig skulle få dem dekket i vanlig skole. Den ble fulgt opp i skoleloven av 1981.

        Begrepet gjorde behovet til noe relasjonelt, avhengig av skolen og ikke bare av barnet, og ble tatt opp internasjonalt, blant annet i Salamanca-erklæringen (1994). I 2005 kritiserte Warnock selv den britiske inkluderingspolitikken for å ha gått for langt og for å ha latt mange barn med store behov bli stående uten hjelp i vanlige klasser. Hennes utvikling viser spenningen mellom inkludering som ideal og som praksis.
      `,
      keyWorks: [
        { title: "Special Educational Needs: Report of the Committee of Enquiry into the Education of Handicapped Children and Young People (Warnock-rapporten)", year: 1978 },
        { title: "Special Educational Needs: A New Look", year: 2005 },
      ],
      kilder: [
        bok("Department of Education and Science. Special Educational Needs: Report of the Committee of Enquiry into the Education of Handicapped Children and Young People. HMSO, 1978."),
        bok("Warnock, Mary. Special Educational Needs: A New Look. Philosophy of Education Society of Great Britain, 2005."),
      ],
    },
    {
      name: "Mel Ainscow", birthYear: null, deathYear: null, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Inkludering"],
      subGenre: ["Fellesskolen"],
      influenceStart: 1988, influenceEnd: null, geography: "University of Manchester",
      description: `
        Ainscow er britisk utdanningsforsker ved University of Manchester og har vært en av de mest innflytelsesrike teoretikerne for inkluderende opplæring. Han ledet UNESCOs prosjekt om spesielle behov i klasserommet fra slutten av 1980-tallet, som forberedte Salamanca-konferansen i 1994. I *Understanding the Development of Inclusive Schools* (1999) flytter han blikket fra den enkelte elevens vansker til skolens praksis: inkludering er en prosess der skolen øker alle elevers deltakelse og reduserer utestenging.

        Sammen med Tony Booth laget han *Index for Inclusion* (2000), et verktøy for skoleutvikling som er oversatt og brukt i mange land, og som erstatter «spesielle behov» med «barrierer for læring og deltakelse». Ainscow har knyttet inkludering til skoleutvikling og rettferdighet i hele utdanningssystemet. Kritikere har pekt på at et så vidt begrep kan miste kontakten med de elevene som trenger mest hjelp.
      `,
      keyWorks: [
        { title: "Understanding the Development of Inclusive Schools", year: 1999 },
        { title: "Index for Inclusion (med Tony Booth)", year: 2000 },
      ],
      kilder: [
        bok("Ainscow, Mel. Understanding the Development of Inclusive Schools. Falmer Press, 1999."),
        bok("Booth, Tony og Mel Ainscow. Index for Inclusion: Developing Learning and Participation in Schools. Centre for Studies on Inclusive Education, 2000."),
      ],
    },
    {
      name: "Peder Haug", birthYear: null, deathYear: null, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Inkludering"],
      subGenre: ["Tilpasset opplæring", "Fellesskolen"],
      influenceStart: 1999, influenceEnd: null, geography: "Høgskulen i Volda",
      description: `
        Haug er professor i pedagogikk og en av de mest sentrale norske forskerne på spesialundervisning, inkludering og skolereformer. Han ledet Norges forskningsråds evaluering av Reform 97 og har i en lang rekke arbeider analysert forholdet mellom tilpasset opplæring, spesialundervisning og fellesskolen.

        I artikkelen «Understanding inclusive education: ideals and reality» (2017) skiller han mellom fire dimensjoner i inkludering: fellesskap, deltakelse, demokratisering og læringsutbytte. Han viser at inkludering er et politisk ideal med bred oppslutning, men at praksis ofte går motsatt vei: spesialundervisning blir organisert utenfor klassen, og elever som får den, får ofte mindre kompetente lærere. Haug har dermed gitt en presis begrepsramme for en av de mest omstridte målsetningene i norsk skole.
      `,
      keyWorks: [
        { title: "Understanding inclusive education: ideals and reality", year: 2017 },
      ],
      kilder: [
        side("Haug, Peder. «Understanding inclusive education: ideals and reality.» Scandinavian Journal of Disability Research 19, nr. 3 (2017): 206–217.", "https://doi.org/10.1080/15017419.2016.1224778"),
        snl("https://snl.no/Reform_97"),
      ],
    },
  ],
};
