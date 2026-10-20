// ============================================================================
//  RUNDE 1 — RETNINGEN «SKOLEN FOR ALLE» (fem epoker)
// ----------------------------------------------------------------------------
//  Tekstene til importfila (tools/lag-runde-1.js). Utkast skrevet av Claude
//  (Opus) 2026-10-21 for forskningsnivå; læreren sjekker og retter i appen.
// ============================================================================
import { snl, nbl, lex, bok, avsnitt, verk } from "./hjelpere.js";

const R = "Skolen for alle";

export const retning = {
  navn: R,
  beskrivelse: avsnitt(
    "Retningen handler om hvordan skolen ble en institusjon for hele folket: fra kirkens og statens krav om at alle skulle kunne lese katekismen, via opplysningstidens folkeopplysning og 1800-tallets nasjonale folkeskoler, til etterkrigstidens enhetsskole og den inkluderende skolen. Spørsmålet er ikke først hvordan barn lærer, men hvem skolen er for, hva de skal lære sammen, og hvem som bestemmer.",
    "Norge har en tydelig plass i denne historien: skoleforordningen av 1739, folkehøgskolene, folkeskolelovene av 1860 og 1889, den niårige grunnskolen fra 1969 og integreringen i 1975. Retningen er tett på politikk, og forskningen har lenge diskutert om skolen for alle er et frigjøringsprosjekt, et nasjonsbyggingsprosjekt eller et styringsprosjekt.",
  ),
  kilder: [snl("norsk_utdanningshistorie"), bok("Alfred Oftedal Telhaug og Odd Asbjørn Mediås", "Grunnskolen som nasjonsbygger: Fra statspietisme til nyliberalisme. Abstrakt", 2003)],
  fortelling: avsnitt(
    "### Katekisme og opplysning",
    "Skolen for alle begynte ikke som en demokratisk idé. I Danmark-Norge innførte staten konfirmasjon i 1736 og skoleplikt på landet i 1739, fordi pietismen krevde at hver kristen selv skulle kunne lese og forstå troen. Omgangsskolen med klokkeren som lærer var resultatet. Opplysningstiden snudde begrunnelsen: folket skulle være nyttig, opplyst og lojalt. Friedrich Eberhard von Rochow og Johann Ignaz von Felbiger bygde landsbyskoler for det opplyste eneveldet, mens Louis-René de La Chalotais ville ha en nasjonal oppdragelse, men ikke for mye kunnskap til bøndene. Condorcets plan for revolusjonen (1792) gikk lengst: gratis, verdslig og lik undervisning for alle, gutter og jenter, og uavhengig av den politiske makten.",
    "### Folket og nasjonen",
    "På 1800-tallet ble folket subjekt og ikke bare objekt. N.F.S. Grundtvig ville ha en «skole for livet» for den voksne bondeungdommen, der det levende ord, historien og morsmålet skulle vekke folkelig selvbevissthet. Folkehøgskolene fra Rødding (1844) og Sagatun (1864) ble en del av bondebevegelsene i Norden. Samtidig bygde statene folkeskoler. Horace Mann gjorde «the common school» til republikkens fundament i Massachusetts, Uno Cygnaeus ga Finland en folkeskole med sløyd, og i Norge laget Hartvig Nissen landsskoleloven av 1860 og Ole Vig agiterte for en felles skole for alle samfunnslag. Folkeskolelovene av 1889 ga landet en sjuårig skole som var felles for barn fra alle klasser, og som de høyere skolene etter hvert bygde på.",
    "### Enhetsskolen og inkluderingen",
    "Det tjuende århundret gjorde fellesskolen til et sosialdemokratisk program. Enhetsskolen skulle utjevne sosiale forskjeller og hente fram «begavelsesreserven» i arbeiderklassen og på landsbygda. I Sverige kom grunnskolen etter skolkommisjonen av 1946, med Alva Myrdal og forskere som Torsten Husén. I Norge gikk linjen fra Nils Hjelmtveits normalplan (1939) til Helge Sivertsens niårige skole: loven om forsøk (1959), grunnskoleloven (1969) og Mønsterplanen (1974). Den siste utvidelsen gjaldt de som fortsatt sto utenfor. Integreringen i 1975, ansvarsreformen (1991) og Salamanca-erklæringen (1994) gjorde inkludering til et mål for hele skolen.",
    "### Kritikken",
    "Historikerne har lest denne fortellingen på flere måter. Rune Slagstad har beskrevet de «nasjonale strategene» som brukte skolen i et moderniseringsprosjekt, Alfred Oftedal Telhaug har vist hvordan skiftende ideologier gjorde grunnskolen til nasjonsbygger, og kritikere fra venstre og høyre har pekt på at enhet også betyr standardisering, sentralisering og at minoriteter, samer og kvener måtte bli like de andre. Fellesskolen har både utjevnet og sortert, og spenningen mellom felleskap og tilpasning er fortsatt kjernen i norsk skolepolitikk.",
  ),
};

export const epoker = [
  {
    navn: "Folkeopplysningen",
    fra: 1739, til: 1800, era: "ca. 1739–1800",
    description: avsnitt(
      "Epoken spenner fra den pietistiske allmueskolen til opplysningstidens planer for en nasjonal oppdragelse. I Danmark-Norge kom konfirmasjonen (1736) og forordningen om skolene på landet i Norge (1739), med skoleplikt fra sjuårsalderen til konfirmasjonen. Forordningen møtte motstand mot kostnadene og ble alt i 1741 myket opp, slik at hvert amt og prestegjeld kunne lage egne skoleplaner. Målet var lesing i katekismen, ikke skriving; Pontoppidans forklaring (1737) var lærebok i mer enn hundre år.",
      "Opplysningstiden ga folkeopplysningen en verdslig begrunnelse: et nyttig, flittig og lojalt folk. Preussen fikk et generelt landskolereglement (1763), Østerrike en skoleordning (1774) etter Felbigers mønster, og Rochow bygde en mønsterskole i Reckahn (1773). I Frankrike drøftet man etter jesuittenes fall en nasjonal oppdragelse, og revolusjonen ga planer om en offentlig skole for alle (Talleyrand 1791, Condorcet 1792). Spørsmålet ble stilt åpent: Det prøyssiske akademiets prisspørsmål fra 1780, om det er nyttig for folket å bli bedratt, viser hvor omstridt folkets opplysning var.",
    ),
    samfunn: "Opplyst enevelde, merkantilisme og landbruksreformer (i Danmark landboreformene og opphevelsen av stavnsbåndet i 1788). En lesende offentlighet, aviser, lesesirkler og patriotiske selskaper vokste fram, og den franske revolusjonen gjorde folkets oppdragelse til et spørsmål om borgerskap.",
    skole: "I Norge ble omgangsskolen hovedformen: klokkeren eller en omreisende lærer holdt skole på gårdene noen uker i året. Lesekyndigheten ble høy, skriveferdigheten lav. Den lærde skolen fikk sin første store reform i 1775. Kvinner og barn i byenes fattige familier fikk lite skole utover fattig- og pleieskoler.",
    kilder: [snl("oppl%C3%A6ringsplikt"), snl("allmueskole"), snl("folkeopplysning"), bok("Hans-Jørgen Dokka", "Fra allmueskole til folkeskole: Studier i den norske folkeskoles historie i det 19. hundreåret. Universitetsforlaget", 1967)],
  },
  {
    navn: "Folkehøgskolen",
    fra: 1844, til: null, era: "fra 1844",
    description: avsnitt(
      "Folkehøgskolen er N.F.S. Grundtvigs idé om en «skole for livet» (1838): en skole for den voksne ungdommen fra bondestanden, uten eksamen og pensum, der det levende ord, sangen, historien og morsmålet skal vekke folkelig og nasjonal selvbevissthet og gi «livsopplysning». Grundtvig satte den opp mot latinskolens «døde» boklærdom. Han grunnla selv ingen skole; den første ble opprettet i Rødding i Sønderjylland i 1844, som et dansk svar i den nasjonale striden om Slesvig.",
      "Christen Kold ga ideene en praksis (Ryslinge 1851, senere Dalum): lærer og elever levde sammen, fortellingen sto i sentrum, og skolen skulle «oplive før den oplyser». Etter nederlaget i 1864 vokste skolene raskt i Danmark. I Norge grunnla Herman Anker og Olaus Arvesen Sagatun ved Hamar i 1864, og Christopher Bruun skapte et eget, mer kristent og alvorlig program på Vonheim. Sverige og Finland fulgte.",
      "Folkehøgskolen var tett knyttet til bondebevegelsen, venstrepolitikken og målsaken i Norge, og striden mellom den frilynte og den kristelige folkehøgskolen speiler kulturkampene i bygde-Norge. Ove Korsgaard har skrevet folkeopplysningens historie som en kamp om hvem som skal definere folket.",
    ),
    samfunn: "Eneveldets slutt i Danmark (1849), de slesvigske krigene (1848–1851 og 1864), bondefrigjøring og andelsbevegelse. I Norge nasjonalromantikk, bøndenes politiske gjennombrudd på Stortinget, Venstre og parlamentarismen (1884), og en språkstrid der landsmålet sto sterkt i folkehøgskolene.",
    skole: "Folkehøgskolen sto utenfor det offentlige skolesystemet og var frivillig. I Danmark ga friskoleloven (1855) rom for Kolds friskoler for barn. I Norge vokste amtsskoler og ungdomsskoler for voksen ungdom fram ved siden av folkehøgskolene.",
    kilder: [snl("folkeh%C3%B8gskole"), snl("grundtvigianismen"), lex("N.F.S._Grundtvig"), bok("Ove Korsgaard", "Kampen om lyset: Dansk voksenoplysning gennem 500 år. Gyldendal", 1997)],
  },
  {
    navn: "Folkeskolen",
    fra: 1837, til: 1920, era: "ca. 1840–1920",
    description: avsnitt(
      "Epoken er de nasjonale folkeskolene: offentlige, obligatoriske og gratis skoler som skulle samle barna i en nasjon. Horace Mann bygde «the common school» i Massachusetts (fra 1837) som en skole for alle samfunnslag og republikkens fundament, inspirert av den prøyssiske folkeskolen han beskrev i 1844. Uno Cygnaeus ga Finland en folkeskole med sløyd som obligatorisk fag (1866). Overalt fikk staten skoleinspeksjon, lærerseminarer og etter hvert en lærerstand der kvinnene ble flertallet, slik Catharine Beecher hadde argumentert for.",
      "I Norge gikk linjen fra loven om allmueskolevesenet på landet (1827) via landsskoleloven av 1860, som Hartvig Nissen utarbeidet, med fast skole, flere fag og lesebok, til folkeskolelovene av 1889. De ga en sjuårig folkeskole som var felles for barn fra alle samfunnslag, med skolestyrer der lekfolk satt ved siden av presten. Ole Vig og Folkevennen hadde beredt grunnen. Fra 1896 bygde middelskolen på folkeskolen, og fra 1892 kunne skolestyrene velge landsmål som opplæringsspråk.",
      "Skolen var også fornorskingsredskap: samiske og kvenske barn skulle læres norsk, og instruksen av 1898 (Wexelsen-plakaten) er et nøkkeldokument. Forskningen har lest epoken både som demokratisering og som disiplinering og nasjonsbygging.",
    ),
    samfunn: "Nasjonalstater, liberalisme og etter hvert massedemokrati. Industrialisering, utvandring til Amerika og byvekst. I Norge embetsmannsstatens fall, parlamentarismen (1884) og et samfunn der folkeskolen ble nasjonens felles møteplass.",
    skole: "Lærerutdanning ved seminarer, nye lesebøker (Nordahl Rolfsens lesebok fra 1892), fagene utvidet med historie, geografi, naturfag og sang, og en skoledag som ble lengre. Kristendomskunnskap var fortsatt sentralt, og forholdet mellom skole og kirke var en hovedstrid.",
    kilder: [snl("folkeskolen"), snl("Hartvig_Nissen_-_skolemann"), bok("Hans-Jørgen Dokka", "Fra allmueskole til folkeskole: Studier i den norske folkeskoles historie i det 19. hundreåret. Universitetsforlaget", 1967), bok("Alfred Oftedal Telhaug og Odd Asbjørn Mediås", "Grunnskolen som nasjonsbygger: Fra statspietisme til nyliberalisme. Abstrakt", 2003)],
    usikre: [{ tekst: "Wexelsen-plakaten som «instruksen av 1898»", hvorfor: "Årstallet er gjengitt etter hukommelsen", hvorSjekke: "SNL: fornorskingspolitikk; Telhaug og Mediås 2003" }],
  },
  {
    navn: "Enhetsskolen",
    fra: 1920, til: 1975, era: "ca. 1920–1975",
    description: avsnitt(
      "Enhetsskolen er tanken om ett sammenhengende skolesystem der alle barn går i samme skole i mange år, uavhengig av sosial og kulturell bakgrunn, før de velger. Begrepet kom fra den tyske *Einheitsschule*-debatten etter 1918 (den felles fireårige *Grundschule* fra 1920), men fikk sin sterkeste form i de nordiske sosialdemokratiene. Skolen skulle utjevne, hente fram talentene i arbeiderklassen og på landsbygda, og oppdra demokratiske borgere.",
      "I Norge bygde den høyere skolen på hele folkeskolen fra 1920-årene, og Normalplanen av 1939 ga folkeskolen et felles, reformpedagogisk preget innhold. Etter krigen kom Forsøksrådet (1954), loven om forsøk med niårig skole (1959), grunnskoleloven (1969), som gjorde ni år obligatorisk, og Mønsterplanen (1974). Ungdomsskolen var en tid linjedelt, men ble udelt. I Sverige ble grunnskolen innført i 1962, etter forsøk som forskere som Torsten Husén evaluerte.",
      "Kritikken har kommet fra flere hold: at enhet betydde standardisering, skolesentralisering og nedleggelse av små grendeskoler, at forskjellene i resultater ikke forsvant, og at skolen gjorde minoriteter og samer usynlige. Rune Slagstad har skrevet om de nasjonale strategene bak prosjektet.",
    ),
    samfunn: "Mellomkrigstidens krise og arbeiderbevegelsens maktovertakelse (Nygaardsvold-regjeringen 1935), og etter 1945 gjenreisning, velferdsstat, planøkonomiske ambisjoner, industrialisering og flytting fra land til by. Utdanning ble sett som både rettighet og investering.",
    skole: "Folkeskolelovene av 1936 og Normalplanen (1939), framhaldsskolen, så ungdomsskole og videregående skole for alle (lov om videregående opplæring 1974). Skolebusser og sentralskoler erstattet grendeskolene, og lærerne fikk lengre utdanning.",
    kilder: [snl("enhetsskole"), snl("normalplan"), snl("M%C3%B8nsterplan_for_grunnskolen_1974"), bok("Rune Slagstad", "De nasjonale strateger. Pax", 1998)],
    usikre: [{ tekst: "At den høyere skolen bygde på hele folkeskolen «fra 1920-årene»", hvorfor: "Tidfestingen er omtrentlig", hvorSjekke: "SNL: middelskole og realskole; Telhaug og Mediås 2003" }],
  },
  {
    navn: "Inkludering",
    fra: 1975, til: null, era: "fra ca. 1975",
    description: avsnitt(
      "Inkludering er siste ledd i skolen for alle: også elever med funksjonsnedsettelser og særskilte behov skal høre til i fellesskolen. Utgangspunktet var normaliseringsprinsippet fra Skandinavia (fra slutten av 1950-årene) og en internasjonal bevegelse for funksjonshemmedes rettigheter. USA vedtok en lov om opplæring for alle barn med funksjonshemning i 1975, og Warnock-rapporten (1978) ga Storbritannia begrepet «special educational needs».",
      "I Norge ble spesialskoleloven opphevet og spesialundervisningen lagt inn i grunnskoleloven i 1975. Ansvarsreformen (1991) avviklet institusjonene for mennesker med utviklingshemning, og de fleste statlige spesialskolene ble lagt ned eller gjort om til kompetansesentre. Salamanca-erklæringen (1994) gjorde *inclusive education* til et globalt mål, og i L97 og opplæringsloven (1998) ble tilpasset opplæring et prinsipp for alle elever.",
      "Fagdebatten har gått fra integrering (å plassere eleven i fellesskapet) til inkludering (å endre fellesskapet). Kritikerne peker på avstanden mellom retorikk og praksis: andelen elever med spesialundervisning har holdt seg høy, mye undervisning skjer fortsatt utenfor klassen, og begrepet er så bredt at det kan bety nesten hva som helst.",
    ),
    samfunn: "Menneskerettighetsrevolusjonen etter 1945, funksjonshemmedes organisasjoner, avinstitusjonalisering og nye rettighetstradisjoner, fram til FN-konvensjonen om rettighetene til mennesker med nedsatt funksjonsevne (2006). Velferdsstaten skulle gi like muligheter, ikke bare omsorg.",
    skole: "Spesialpedagogikk ble en tjeneste i den vanlige skolen, med PP-tjeneste, spesialpedagoger og individuelle opplæringsplaner. Skillet mellom tilpasset opplæring for alle og spesialundervisning for noen ble et av de mest omdiskuterte i norsk skolepolitikk.",
    kilder: [snl("spesialpedagogikk"), snl("tilpasset_oppl%C3%A6ring"), bok("UNESCO", "The Salamanca Statement and Framework for Action on Special Needs Education. UNESCO", 1994), bok("Mel Ainscow", "Understanding the Development of Inclusive Schools. Falmer Press", 1999)],
  },
];

export const teoretikere = [
  // --- Folkeopplysningen ---
  {
    name: "Louis-René de La Chalotais", birthYear: 1701, deathYear: 1785, gender: "mann",
    metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Folkeopplysningen"],
    subGenre: ["Medborgerskap", "Folkelig opplysning"],
    influenceStart: 1761, influenceEnd: 1785, geography: "Rennes, Bretagne", priority: 1,
    description: "Fransk jurist, riksadvokat ved parlamentet i Bretagne og en av jesuittenes skarpeste motstandere. Etter jesuittenes fall skrev han *Essai d'éducation nationale* (1763), som krevde at oppdragelsen skulle være statens, ikke kirkens, og forberede barna til å bli borgere av nasjonen. Han er samtidig et eksempel på folkeopplysningens grenser: bondebarna burde etter hans syn ikke lære mer enn arbeidet deres krevde, og han angrep de katolske brødrene som lærte fattige barn å lese og skrive.",
    keyWorks: verk(["Essai d'éducation nationale, ou Plan d'études pour la jeunesse", 1763]),
    kilder: [bok("Louis-René de La Chalotais", "Essai d'éducation nationale, ou Plan d'études pour la jeunesse", 1763)],
  },
  {
    name: "Friedrich Eberhard von Rochow", birthYear: 1734, deathYear: 1805, gender: "mann",
    metaGenre: R, instrument: "Politiker og reformator", instrument2: "Praktiker", mainGenre: ["Folkeopplysningen"],
    subGenre: ["Folkelig opplysning"],
    influenceStart: 1772, influenceEnd: 1805, geography: "Reckahn, Brandenburg", priority: 2,
    description: "Prøyssisk godseier og folkeopplyser. På godset Reckahn opprettet han i 1773 en mønsterskole for bondebarna, med en godt lønnet lærer, samtale i stedet for pugg og lesestykker om jordbruk, helse og moral. Leseboka *Der Kinderfreund* (1776) ble den mest utbredte lesebok for landsbyskolene i Tyskland i flere generasjoner. Rochow ville gjøre bøndene opplyste og flittige uten å rokke ved stendersamfunnet, og Reckahn ble et besøkssted for skolereformatorer fra hele Europa.",
    keyWorks: verk(["Versuch eines Schulbuches für Kinder der Landleute", 1772], ["Der Kinderfreund", 1776]),
    kilder: [bok("Hanno Schmitt", "Vernunft und Menschlichkeit: Studien zur philanthropischen Erziehungsbewegung. Klinkhardt", 2007)],
  },
  {
    name: "Johann Ignaz von Felbiger", birthYear: 1724, deathYear: 1788, gender: "mann",
    metaGenre: R, instrument: "Teolog", instrument2: "Politiker og reformator", mainGenre: ["Folkeopplysningen"],
    subGenre: ["Folkelig opplysning", "Den felles skolen"],
    influenceStart: 1763, influenceEnd: 1788, geography: "Sagan (Żagań), Schlesien og Wien", priority: 2,
    description: "Katolsk abbed i Sagan i Schlesien som reformerte de katolske skolene der etter prøyssisk mønster, og som keiserinne Maria Theresia hentet til Wien. Han skrev *Allgemeine Schulordnung* (1774), som innførte skoleplikt, lærerutdanning ved «normalskoler», felles lærebøker og samtidig undervisning av hele klassen i Habsburg-monarkiet. Metoden hans, med bokstavmetoden og spørsmål og svar etter tabeller, ble kritisert for mekanisk pugg, men ordningen la grunnen for den østerrikske folkeskolen og påvirket skolene i store deler av Sentral-Europa.",
    keyWorks: verk(["Allgemeine Schulordnung für die deutschen Normal-, Haupt- und Trivialschulen", 1774]),
    kilder: [bok("James Van Horn Melton", "Absolutism and the Eighteenth-Century Origins of Compulsory Schooling in Prussia and Austria. Cambridge University Press", 1988)],
  },
  {
    name: "Nicolas de Condorcet", birthYear: 1743, deathYear: 1794, gender: "mann",
    metaGenre: R, instrument: "Filosof", instrument2: "Politiker og reformator", mainGenre: ["Folkeopplysningen"],
    subGenre: ["Den felles skolen", "Likestilt utdanning", "Medborgerskap"],
    influenceStart: 1791, influenceEnd: 1794, geography: "Paris", priority: 2,
    description: avsnitt(
      "Fransk matematiker, filosof og revolusjonspolitiker. *Cinq mémoires sur l'instruction publique* (1791) og planen han la fram for den lovgivende forsamling i april 1792 beskriver et offentlig skolevesen fra barneskole til akademi: gratis, åpent for begge kjønn, verdslig og uavhengig av den politiske makten, fordi en opplyst borger må kunne prøve lovene selv. Opplysning er en rettighet og et vern mot nye former for herredømme, også folkets eget.",
      "Planen ble ikke vedtatt, og Condorcet døde i fengsel under terroren. Den er likevel et grunndokument for den republikanske skolen og for tanken om utdanning som rettighet.",
    ),
    keyWorks: verk(["Cinq mémoires sur l'instruction publique", 1791], ["Rapport et projet de décret sur l'organisation générale de l'instruction publique", 1792], ["Esquisse d'un tableau historique des progrès de l'esprit humain", 1795]),
    kilder: [snl("Antoine_Condorcet")],
  },

  // --- Folkehøgskolen ---
  {
    name: "N.F.S. Grundtvig", birthYear: 1783, deathYear: 1872, gender: "mann",
    metaGenre: R, instrument: "Teolog", instrument2: "Filosof", mainGenre: ["Folkehøgskolen"],
    subGenre: ["Det levende ord", "Folkelig opplysning"],
    influenceStart: 1832, influenceEnd: 1872, geography: "København", priority: 3,
    description: avsnitt(
      "Dansk prest, salmedikter, historiker og politiker. I skriftene om skolen (blant annet *Skolen for Livet og Academiet i Soer*, 1838) satte han en folkelig «skole for livet» opp mot latinskolens døde boklærdom: en høyskole for voksen ungdom der det levende ord, historien, sangen og morsmålet skulle vekke folkets selvbevissthet og gi livsopplysning. Studiereisene til England, særlig møtet med kollegiene i Cambridge, var en viktig inspirasjon.",
      "Grundtvig grunnla ingen folkehøgskole selv, og mye av «grundtvigianismen» er formet av etterfølgerne. Han har hatt avgjørende innflytelse på dansk kirke-, skole- og folkeliv og på folkehøgskolene i hele Norden.",
    ),
    keyWorks: verk(["Skolen for Livet og Academiet i Soer", 1838]),
    kilder: [snl("Nikolai_Frederik_Severin_Grundtvig"), lex("N.F.S._Grundtvig"), snl("grundtvigianismen")],
  },
  {
    name: "Christen Kold", birthYear: 1816, deathYear: 1870, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Folkehøgskolen"],
    subGenre: ["Det levende ord", "Folkelig opplysning"],
    influenceStart: 1851, influenceEnd: 1870, geography: "Ryslinge og Dalum, Fyn", priority: 2,
    description: "Dansk lærer og den som ga folkehøgskolen og friskolen deres praksis. Han avviste katekisering og pugg og fikk derfor ikke fast stilling i den offentlige skolen. I Ryslinge (1851) og senere Dalum drev han en enkel høyskole der lærer og elever levde sammen, og der fortellingen sto i sentrum. Hans motto om at skolen skal «oplive» før den «oplyser» oppsummerer en pedagogikk som prioriterer begeistring og livssyn framfor kunnskap. Kolds friskoler for barn ble grunnlaget for den danske friskoletradisjonen.",
    kilder: [lex("Christen_Kold"), bok("Ove Korsgaard", "Kampen om lyset: Dansk voksenoplysning gennem 500 år. Gyldendal", 1997)],
  },
  {
    name: "Herman Anker", birthYear: 1839, deathYear: 1896, gender: "mann",
    metaGenre: R, instrument: "Praktiker", instrument2: "Teolog", mainGenre: ["Folkehøgskolen"],
    subGenre: ["Folkelig opplysning", "Det levende ord"],
    influenceStart: 1864, influenceEnd: 1885, geography: "Sagatun, Hamar", priority: 1,
    description: "Norsk teolog og folkehøgskolestyrer. Sammen med Olaus Arvesen grunnla han Sagatun ved Hamar i 1864, den første norske folkehøgskolen, etter dansk grundtvigiansk mønster. Sagatun ble et sentrum for den grundtvigianske og nasjonale vekkelsen på Østlandet og et forbilde for folkehøgskolene som fulgte. Fra 1885 var han postmester i Hamar.",
    kilder: [snl("Herman_Anker"), nbl("Herman_Anker")],
  },
  {
    name: "Olaus Arvesen", birthYear: 1830, deathYear: 1917, gender: "mann",
    metaGenre: R, instrument: "Praktiker", instrument2: "Politiker og reformator", mainGenre: ["Folkehøgskolen"],
    subGenre: ["Folkelig opplysning", "Det levende ord"],
    influenceStart: 1864, influenceEnd: 1917, geography: "Sagatun, Hamar", priority: 1,
    description: "Norsk lærer, teolog, journalist og politiker. Under et opphold i Danmark ble han sterkt påvirket av Grundtvig og ble en av grundtvigianismens fremste talsmenn i Norge. Han grunnla Sagatun sammen med Herman Anker i 1864 og ledet skolen i mange år. Arvesen var også journalist og politiker, og er et eksempel på hvor tett folkehøgskolen, bondepolitikken og pressen var vevd sammen i Norge.",
    kilder: [snl("Olaus_Arvesen")],
  },
  {
    name: "Christopher Bruun", birthYear: 1839, deathYear: 1920, gender: "mann",
    metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Folkehøgskolen"],
    subGenre: ["Folkelig opplysning"],
    influenceStart: 1867, influenceEnd: 1920, geography: "Sel, Gausdal (Vonheim)", priority: 2,
    description: "Norsk prest og folkehøgskolemann. Etter teologisk embetseksamen deltok han som frivillig i den dansk-tyske krigen (1864), og i 1867 grunnla han en folkehøgskole i Sel, som fra 1875 lå på Vonheim i Gausdal, nær Bjørnsons Aulestad. *Folkelige Grundtanker* (1878) formulerte et eget program: en alvorlig, etisk og kristen folkeopplysning, mer krevende enn den glade danske grundtvigianismen. Bruun var modell for Ibsens Brand ifølge en utbredt tolkning, og var en viktig stemme i norsk kirke- og kulturdebatt.",
    keyWorks: verk(["Folkelige Grundtanker", 1878]),
    kilder: [snl("Christopher_Arnt_Bruun"), nbl("Christopher_Bruun")],
  },

  // --- Folkeskolen ---
  {
    name: "Horace Mann", birthYear: 1796, deathYear: 1859, gender: "mann",
    metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Folkeskolen"],
    subGenre: ["Den felles skolen", "Medborgerskap"],
    influenceStart: 1837, influenceEnd: 1859, geography: "Massachusetts", priority: 3,
    description: avsnitt(
      "Amerikansk jurist og politiker, sekretær for Massachusetts' skolestyre 1837–1848 og den viktigste talsmannen for «the common school»: en offentlig, gratis og felles skole for barn fra alle samfunnslag, finansiert av skatt og ledet av staten. I de tolv årsrapportene argumenterte han for profesjonell lærerutdanning (den første statlige lærerhøgskolen åpnet i Lexington 1839), bedre skolehus og en ikke-sekterisk moralundervisning. Den sjuende rapporten (1844) roste den prøyssiske folkeskolen.",
      "Den tolvte rapporten (1848) kaller utdanningen «the great equalizer of the conditions of men». Historikere har senere lest common school-bevegelsen også som et protestantisk og middelklassepreget disiplineringsprosjekt rettet mot katolske innvandrere.",
    ),
    keyWorks: verk(["Seventh Annual Report of the Board of Education", 1844], ["Twelfth Annual Report of the Board of Education", 1848]),
    kilder: [bok("Lawrence A. Cremin", "American Education: The National Experience, 1783–1876. Harper & Row", 1980)],
  },
  {
    name: "Hartvig Nissen", birthYear: 1815, deathYear: 1874, gender: "mann",
    metaGenre: R, instrument: "Politiker og reformator", instrument2: "Praktiker", mainGenre: ["Folkeskolen"],
    subGenre: ["Den felles skolen"],
    influenceStart: 1843, influenceEnd: 1874, geography: "Christiania", priority: 3,
    description: avsnitt(
      "Norsk filolog og skolereformator, en av de mest innflytelsesrike i norsk skolehistorie. I 1843 åpnet han sammen med Ole Jacob Broch en latin- og realskole i Christiania, som ble forbilde for omleggingen av de høyere skolene i 1849–1851, og senere en pikeskole. Etter en studiereise til skoler i flere land utarbeidet han landsskoleloven av 1860, som ga bygdene fast skole i stedet for omgangsskole der det var mulig, flere fag og en lesebok med verdslig innhold.",
      "Som ekspedisjonssjef for skolevesenet (1865–1872) moderniserte han den norske skoleadministrasjonen.",
    ),
    kilder: [snl("Hartvig_Nissen_-_skolemann")],
  },
  {
    name: "Uno Cygnaeus", birthYear: 1810, deathYear: 1888, gender: "mann",
    metaGenre: R, instrument: "Praktiker", instrument2: "Politiker og reformator", mainGenre: ["Folkeskolen"],
    subGenre: ["Arbeidsskoleprinsippet", "Den felles skolen"],
    influenceStart: 1861, influenceEnd: 1888, geography: "Finland (Jyväskylä og Helsingfors)", priority: 2,
    description: "Finsk prest og pedagog, kjent som den finske folkeskolens far. Han hadde studert skolene i Sverige, Tyskland og Sveits, og bygde på Pestalozzi og Fröbel. Som overinspektør for folkeskolene fra 1861 og grunnlegger av lærerseminaret i Jyväskylä (1863) arbeidet han for en folkeskole for alle barn, skilt fra kirken, med kvinner som lærere og med sløyd (håndarbeid) som obligatorisk fag, et verdens-tidlig eksempel på arbeidsskoleprinsippet i en nasjonal skole.",
    kilder: [snl("Uno_Cygn%C3%A6us")],
  },
  {
    name: "Ole Vig", birthYear: 1824, deathYear: 1857, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Folkeskolen", "Folkehøgskolen"],
    subGenre: ["Den felles skolen", "Folkelig opplysning"],
    influenceStart: 1850, influenceEnd: 1857, geography: "Trøndelag og Christiania", priority: 2,
    description: "Norsk folkeopplyser, redaktør og språkmann fra en husmannsplass i Stjørdal. Etter lærereksamen ved Klæbu seminar (1843) ble han i 1850-årene folkeopplysningens viktigste organisator og formidler, som redaktør av *Folkevennen*, utgitt av Selskabet for Folkeoplysningens Fremme. Han var en tidlig forkjemper for en felles folkeskole i offentlig regi for barn fra alle samfunnslag, og beredte grunnen for landsskoleloven av 1860. Kultursynet hans var grundtvigiansk preget, med en lys kristendom mot tidens pietisme. Han døde 33 år gammel.",
    kilder: [snl("Ole_Vig")],
  },
  {
    name: "Catharine Beecher", birthYear: 1800, deathYear: 1878, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", instrument2: "Politiker og reformator", mainGenre: ["Folkeskolen"],
    subGenre: ["Likestilt utdanning", "Den felles skolen"],
    influenceStart: 1824, influenceEnd: 1878, geography: "Hartford og Cincinnati", priority: 1,
    description: "Amerikansk pedagog og forfatter. Hun opprettet Hartford Female Seminary (1824) og arbeidet for at kvinner skulle få utdanning og bli lærere i de nye skolene i vest, som hun mente kvinner av natur var bedre skikket til enn menn. *A Treatise on Domestic Economy* (1841) gjorde husholdningen til et vitenskapelig fag. Beecher er et nøkkelnavn i feminiseringen av lærerstanden: hun åpnet et yrke for kvinner, men begrunnet det med en kjønnsorden som holdt dem utenfor politikken.",
    keyWorks: verk(["A Treatise on Domestic Economy", 1841], ["The Evils Suffered by American Women and American Children", 1846]),
    kilder: [snl("Catharine_Ester_Beecher")],
  },

  // --- Enhetsskolen ---
  {
    name: "Alva Myrdal", birthYear: 1902, deathYear: 1986, gender: "kvinne",
    metaGenre: R, instrument: "Politiker og reformator", instrument2: "Sosiolog", mainGenre: ["Enhetsskolen"],
    subGenre: ["Den felles skolen", "Likestilt utdanning"],
    influenceStart: 1932, influenceEnd: 1986, geography: "Stockholm", priority: 2,
    description: avsnitt(
      "Svensk sosialreformator, diplomat og politiker, Nobels fredspris 1982. Hun hadde utdanning i pedagogikk og psykologi, grunnla Socialpedagogiska seminariet for førskolelærere (1936) og skrev om barnehagen og familien i velferdsstaten (*Stadsbarn*, 1935). Som medlem av skolkommisjonen av 1946 var hun med på å legge grunnen for den svenske grunnskolen, en udelt enhetsskole for alle barn.",
      "Med Gunnar Myrdal skrev hun *Kris i befolkningsfrågan* (1934), som både begrunnet familiepolitikken og inneholdt eugeniske resonnementer som er blitt kritisert. Senere ledet hun UNESCOs avdeling for samfunnsvitenskap og var nedrustningsminister.",
    ),
    keyWorks: verk(["Kris i befolkningsfrågan", 1934], ["Stadsbarn", 1935]),
    kilder: [snl("Alva_Myrdal")],
  },
  {
    name: "Torsten Husén", birthYear: 1916, deathYear: 2009, gender: "mann",
    metaGenre: R, instrument: "Forsker", instrument2: "Psykolog", mainGenre: ["Enhetsskolen"],
    subGenre: ["Den felles skolen", "Tilpasset opplæring"],
    influenceStart: 1950, influenceEnd: 2009, geography: "Stockholm", priority: 2,
    description: "Svensk pedagog og psykolog, professor ved Stockholms universitet og en av grunnleggerne av internasjonal og komparativ utdanningsforskning. Han ledet forskning knyttet til forsøkene med den svenske grunnskolen og argumenterte for at en udelt skole ikke senket nivået, men hentet fram talenter fra alle samfunnslag. Som leder av IEA i mange år var han sentral i de første store internasjonale sammenligningene av elevresultater, forløperne til TIMSS og PISA. *Talent, Equality and Meritocracy* (1974) drøfter spenningen mellom likhet og prestasjon.",
    keyWorks: verk(["Talent, Equality and Meritocracy", 1974]),
    kilder: [snl("Torsten_Hus%C3%A9n")],
  },
  {
    name: "Nils Hjelmtveit", birthYear: 1892, deathYear: 1985, gender: "mann",
    metaGenre: R, instrument: "Politiker og reformator", instrument2: "Praktiker", mainGenre: ["Enhetsskolen"],
    subGenre: ["Den felles skolen"],
    influenceStart: 1935, influenceEnd: 1945, geography: "Oslo", priority: 2,
    description: "Norsk lærer og politiker for Arbeiderpartiet, kirke- og undervisningsminister i Nygaardsvold-regjeringen 1935–1945. Han var mellomkrigstidens sentrale arbeiderpartipolitiker i skolespørsmål: de nye folkeskolelovene (1936) og Normalplanen (1939) ble til i hans tid, og han innførte framhaldsskolen for ungdom etter folkeskolen. Han gikk imot en obligatorisk teoretisk ungdomsskole for alle, og er et eksempel på at enhetsskolens innhold var omstridt også i arbeiderbevegelsen.",
    kilder: [snl("Nils_Hjelmtveit"), nbl("Nils_Hjelmtveit")],
  },
  {
    name: "Helge Sivertsen", birthYear: 1913, deathYear: 1986, gender: "mann",
    metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Enhetsskolen"],
    subGenre: ["Den felles skolen"],
    influenceStart: 1950, influenceEnd: 1986, geography: "Oslo", priority: 2,
    description: "Norsk skolemann og politiker for Arbeiderpartiet, kirke- og undervisningsminister i 1960-årene og den mest innflytelsesrike skolepolitikeren i etterkrigstiden. Han var sønn av en folkehøgskolestyrer, med røtter i grundtvigianismen, og var den som skulle virkeliggjøre sosialdemokratiets kultur- og oppdragelsesprogram fra 1930-årene. Utbyggingen av den niårige skolen og arbeidet for en felles norsk skole for alle hører til hans ettermæle, og han tok initiativ til Vogt-komiteen i språkstriden. Rune Slagstad regner ham blant de nasjonale strategene.",
    kilder: [snl("Helge_Sivertsen"), bok("Rune Slagstad", "De nasjonale strateger. Pax", 1998)],
  },

  // --- Inkludering ---
  {
    name: "Mel Ainscow", gender: "mann",
    metaGenre: R, instrument: "Forsker", mainGenre: ["Inkludering"],
    subGenre: ["Likeverd og deltakelse", "Tilpasset opplæring"],
    influenceStart: 1990, geography: "Manchester", priority: 2,
    description: "Britisk utdanningsforsker ved University of Manchester og en av de mest innflytelsesrike stemmene i den internasjonale inkluderingsforskningen, også som rådgiver for UNESCO. I *Understanding the Development of Inclusive Schools* (1999) flytter han blikket fra elevens vansker til skolens evne til å fjerne barrierer for læring og deltakelse, og knytter inkludering til skoleutvikling. Med Tony Booth skrev han *Index for Inclusion* (2000), et verktøy for skolers selvvurdering som er oversatt til mange språk.",
    keyWorks: verk(["Understanding the Development of Inclusive Schools", 1999], ["Index for Inclusion", 2000]),
    kilder: [bok("Mel Ainscow", "Understanding the Development of Inclusive Schools. Falmer Press", 1999), bok("Tony Booth og Mel Ainscow", "Index for Inclusion: Developing Learning and Participation in Schools. CSIE", 2000)],
  },
  {
    name: "Tony Booth", gender: "mann",
    metaGenre: R, instrument: "Forsker", mainGenre: ["Inkludering"],
    subGenre: ["Likeverd og deltakelse"],
    influenceStart: 1990, geography: "Canterbury og Cambridge", priority: 1,
    description: "Britisk utdanningsforsker, professor ved Canterbury Christ Church University College. Med Mel Ainscow skrev han *Index for Inclusion* (2000), som definerer inkludering som et verdibasert arbeid med skolens kulturer, retningslinjer og praksiser, med 70 indikatorer. Booth har insistert på at inkludering gjelder alle former for ekskludering, ikke bare funksjonsnedsettelse, og at det handler om verdier som likhet, deltakelse og respekt for mangfold.",
    keyWorks: verk(["Index for Inclusion", 2000]),
    kilder: [bok("Tony Booth og Mel Ainscow", "Index for Inclusion: Developing Learning and Participation in Schools. CSIE", 2000)],
  },
  {
    name: "Bengt Lindqvist", gender: "mann",
    metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Inkludering"],
    subGenre: ["Likeverd og deltakelse"],
    influenceStart: 1994, influenceEnd: 2002, geography: "Sverige og FN", priority: 1,
    description: "Svensk politiker og en sentral skikkelse i den internasjonale funksjonshemmedebevegelsen. FNs generalsekretær utnevnte ham i 1994 til FNs spesialrapportør for funksjonshemning, med mandat til å følge opp FNs standardregler for like muligheter (1993), og mandatet ble fornyet to ganger. Han var en av dem som gjorde opplæring av barn med funksjonsnedsettelser til et menneskerettighetsspørsmål, i samme periode som Salamanca-erklæringen (1994) ga inkluderende opplæring et globalt mandat.",
    kilder: [{ text: "United Nations: Special Rapporteur on Disability.", url: "https://www.un.org/esa/socdev/enable/dismsre0.htm", kategori: "Nettsteder" }],
  },
];
