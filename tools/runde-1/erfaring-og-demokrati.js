// ============================================================================
//  RUNDE 1 — RETNINGEN «ERFARING OG DEMOKRATI» (fire epoker)
// ----------------------------------------------------------------------------
//  Tekstene til importfila (tools/lag-runde-1.js). Utkast skrevet av Claude
//  (Opus) 2026-10-21 for forskningsnivå; læreren sjekker og retter i appen.
// ============================================================================
import { snl, sep, iep, bok, avsnitt, verk } from "./hjelpere.js";

const R = "Erfaring og demokrati";

export const retning = {
  navn: R,
  beskrivelse: avsnitt(
    "Retningen har sitt utspring i amerikansk pragmatisme: kunnskap er et redskap i handling, mening ligger i konsekvenser, og tenkning er undersøkelse som begynner i et problem. John Dewey gjorde dette til en pedagogikk der erfaring, interesse og fellesskap er utgangspunktet, og der skolen er et demokratisk samfunn i miniatyr.",
    "Linjen går fra Peirce og James via Dewey og den progressive bevegelsen til prosjektarbeid, problembasert læring og refleksiv praksis. Den skiller seg fra «Barnet i sentrum» ved at det sosiale og det demokratiske er målet, ikke bare barnets natur: erfaring er samspill med en omgivelse, og læring er alltid også deltakelse.",
  ),
  kilder: [snl("pragmatisme"), sep("dewey"), bok("Robert B. Westbrook", "John Dewey and American Democracy. Cornell University Press", 1991)],
  fortelling: avsnitt(
    "### Fra filosofiklubben til laboratorieskolen",
    "I begynnelsen av 1870-årene møttes en liten krets i Cambridge, Massachusetts, som kalte seg Metafysisk klubb. Der formulerte Charles S. Peirce det som ble pragmatismens maksime: begrepene våre betyr det de praktiske følgene av dem betyr. William James gjorde tanken kjent, og knyttet den til en psykologi om vane, oppmerksomhet og interesse, som han også holdt for lærere. Darwin lå i bakgrunnen: tenkning var en form for tilpasning, ikke speiling av en ferdig verden.",
    "John Dewey gjorde pragmatismen til pedagogikk. I Chicago, der han kom i 1894 sammen med George Herbert Mead, startet han i 1896 en laboratorieskole der filosofien skulle prøves. Barna arbeidet med matlaging, veving, snekring og hagebruk, ikke som ferdighetstrening, men som innganger til historie, naturvitenskap og samarbeid. *The School and Society* (1899) og *The Child and the Curriculum* (1902) avviste både den tradisjonelle skolen og en ensidig barnesentrering: oppgaven er å knytte barnets erfaring til fagenes organiserte kunnskap. Chicago var også Jane Addams' Hull House, der utdanning ble sosialt arbeid i et innvandrerkvarter.",
    "### Den progressive bevegelsen",
    "I de neste femti årene ble «progressive education» et samlenavn for svært ulike ting: Francis W. Parkers Quincy-skoler, Ella Flagg Youngs lærerråd i Chicago, Helen Parkhursts Dalton-plan, William H. Kilpatricks prosjektmetode (1918) og Progressive Education Association (1919–1955). Herbert M. Kliebard har vist at bevegelsen rommet konkurrerende interesser: barnesentrerte pedagoger, de som ville gjøre skolen effektiv og målbar, og de som ville bruke den til å forandre samfunnet. Dewey selv tok avstand fra mye av det som ble gjort i hans navn, tydeligst i *Experience and Education* (1938).",
    "### Prosjekt og refleksjon",
    "Etter 1945 ble bevegelsen offer for den kalde krigens krav om fag og prestasjoner, og Sputnik (1957) ble et symbol på at «Dewey hadde gjort skolen myk». Ideene kom likevel tilbake. I Danmark ble problemorientert prosjektarbeid grunnlaget for de nye universitetssentrene i Roskilde (1972) og Aalborg (1974), og ved McMaster i Canada ble problembasert læring medisinutdanningens modell fra 1969. I Norge ble prosjektarbeid en arbeidsmåte i Mønsterplanen og obligatorisk i L97.",
    "Den siste grenen gjelder profesjonene. Donald Schön, som hadde skrevet doktorgrad om Deweys undersøkelsesteori, lanserte i *The Reflective Practitioner* (1983) en kunnskapsteori for praksis som kunne utfordre den tekniske rasjonaliteten, og David Kolb gjorde erfaringslæringen til en syklus. I norsk lærerutdanning fikk Gunnar Handal og Per Lauvås' praksisteori stor betydning. Kritikerne har pekt på at «refleksjon» og «erfaring» kan bli tomme ord når de gjøres til krav i studieplaner, uten Deweys forankring i undersøkelse og demokrati.",
  ),
};

export const epoker = [
  {
    navn: "Pragmatismen",
    fra: 1872, til: 1910, era: "ca. 1870–1910",
    description: avsnitt(
      "Pragmatismen er den første filosofiske tradisjonen med amerikansk opphav. Peirce formulerte maksimen i «How to Make Our Ideas Clear» (1878): klargjør et begrep ved å spørre hvilke praktiske virkninger gjenstanden for det kan ha. Undersøkelse er en prosess fra tvil til fast overbevisning, utført av et fellesskap av undersøkere, og alle overbevisninger kan i prinsippet revideres (fallibilisme). James ga sannhetsbegrepet en mer psykologisk og individuell vending (*Pragmatism*, 1907), som Peirce tok avstand fra ved å kalle sin egen lære «pragmatisisme» (1905).",
      "For pedagogikken var tre trekk avgjørende. Bevisstheten er aktiv og målrettet, ikke en passiv mottaker av inntrykk; vanene er grunnlaget for både læring og karakter (James); og selvet blir til i sosial samhandling, gjennom lek og spill med andre (Mead). Dewey samlet dette i en instrumentalisme der tenkning er et redskap for å løse problemer, og der skolen er stedet erfaring kan gjøres tenkende.",
      "Forskningen har lenge diskutert hvor enhetlig «pragmatismen» egentlig var. Louis Menand har plassert den i erfaringen etter borgerkrigen, som et forsvar mot dogmer som hadde ført til vold.",
    ),
    samfunn: "USA etter borgerkrigen: industrialisering, jernbane, store innvandringsbølger og rask byvekst. Darwinismen utfordret både teologi og filosofi. Moderne forskningsuniversiteter etter tysk mønster (Johns Hopkins 1876) og en profesjonalisering av vitenskapen ga nye institusjoner for tenkningen.",
    skole: "Den offentlige «common school» var etablert i nord, og high school vokste. På 1890-tallet kom herbartianismen til USA (National Herbart Society 1895), og den store komiteen *Committee of Ten* (1893) drøftet høyere skole og fagvalg. Den nye eksperimentelle psykologien gjorde læring til et forskningsfelt.",
    kilder: [snl("pragmatisme"), sep("pragmatism"), bok("Louis Menand", "The Metaphysical Club: A Story of Ideas in America. Farrar, Straus and Giroux", 2001)],
  },
  {
    navn: "Progressivismen",
    fra: 1896, til: 1955, era: "ca. 1896–1955",
    description: avsnitt(
      "Progressivismen er den amerikanske skolereformbevegelsen fra Deweys laboratorieskole (1896) til oppløsningen av Progressive Education Association (1955). Den ville gjøre skolen til et sted der elevene lærer gjennom aktivitet, undersøkelse og samarbeid, med utgangspunkt i egne interesser og erfaringer, og der skolen forbereder til et demokratisk liv ved å være et demokratisk fellesskap.",
      "Bevegelsen var aldri enhetlig. Lawrence Cremin skrev dens historie som en bred reformbevegelse (1961); Herbert Kliebard skilte mellom de barnesentrerte, de som ville tilpasse skolen til elevenes antatte framtidige plass i samfunnet («social efficiency»), og de som ville bruke den til samfunnsendring (George Counts' *Dare the School Build a New Social Order?*, 1932). David Tyack og David Labaree har skilt de pedagogiske progressive fra de administrative, som fikk mer gjennomslag i form av testing, nivådeling og byråkrati. The Eight-Year Study (1933–1941) prøvde ut progressive high schools.",
      "Dewey avviste både tradisjonell skole og den ensidige barnesentreringen i *Experience and Education* (1938): ikke all erfaring er oppdragende, og kontinuitet og samspill avgjør. Etter 1945, og særlig etter Sputnik (1957), ble progressivismen gjort til syndebukk for svak kunnskap, en dom historikerne senere har nyansert.",
    ),
    samfunn: "Den progressive æraen (fra 1890-årene til første verdenskrig): korrupsjonsavsløringer, sosiale reformer, settlement-bevegelsen, kvinnestemmerett (1920) og en tro på vitenskap og ekspertise i politikken. Mellomkrigstiden og New Deal ga reformene både framgang og radikalisering.",
    skole: "High school ble en masseinstitusjon. *Cardinal Principles of Secondary Education* (1918) ga den et bredere, livsnært mål. Samtidig vokste intelligenstesting, nivådeling og skoleadministrasjon som fag. Dalton- og Winnetka-planene ble eksportert til Europa, og Deweys tekster ble lest i Kina, Japan, Tyrkia, Sovjetunionen og Norden.",
    kilder: [snl("John_Dewey"), sep("dewey"), bok("Lawrence A. Cremin", "The Transformation of the School: Progressivism in American Education, 1876–1957. Knopf", 1961), bok("Herbert M. Kliebard", "The Struggle for the American Curriculum, 1893–1958. Routledge & Kegan Paul", 1986)],
  },
  {
    navn: "Prosjektpedagogikken",
    fra: 1918, til: null, era: "1918; bølge ca. 1970–1990",
    description: avsnitt(
      "William H. Kilpatricks artikkel «The Project Method» (1918) definerte prosjektet som en «helhjertet, målrettet aktivitet i et sosialt miljø»: elevens eget formål skal drive arbeidet, ikke lærerens plan. Han skilte mellom prosjekter som lager noe, som nyter noe, som løser et problem og som øver en ferdighet. Metoden ble svært populær i amerikanske lærerutdanninger, men Dewey og Boyd Bode kritiserte den for å gjøre elevens øyeblikkelige formål til målestokk og for å forsømme fagenes sammenheng.",
      "Den andre bølgen kom i Europa rundt 1970. I Danmark ble problemorientert og deltakerstyrt prosjektarbeid, teoretisert av Knud Illeris (1974), grunnlaget for universitetssentrene i Roskilde (1972) og Aalborg (1974), med en marxistisk inspirert kritikk av fagdeling og reproduksjon. I Tyskland ble *Projektunterricht* et reformprogram, og ved McMaster University ble problembasert læring medisinutdanningens modell (fra 1969, Howard Barrows).",
      "I Norge kom prosjektarbeid inn med Forsøksrådets forsøk og Mønsterplanen av 1974, og L97 gjorde det til en obligatorisk arbeidsmåte på alle trinn. Kunnskapsløftet (2006) tonet det ned igjen. Forskningen har vist at prosjektarbeid krever mye struktur og lærerstøtte for å gi læring, og at det lett blir aktivitet uten faglig retning.",
    ),
    samfunn: "Rundt 1918: krigen, den progressive æraen og en ny tro på demokratisk deltakelse. Rundt 1970: studentopprør, nye venstrebevegelser, kritikk av autoritet og fagdeling, og en voldsom utbygging av høyere utdanning.",
    skole: "Den første bølgen var lærerutdanning og eksperimentskoler i USA. Den andre gjaldt både universiteter (Roskilde, Aalborg, Bremen) og grunnskole, der tverrfaglig temaarbeid og gruppearbeid ble alternativer til fagdelt klasseundervisning.",
    kilder: [snl("prosjektarbeid_-_pedagogikk"), snl("problembasert_l%C3%A6ring"), snl("William_Heard_Kilpatrick"), bok("Knud Illeris", "Problemorientering og deltagerstyring: Oplæg til en alternativ didaktik. Munksgaard", 1974)],
    usikre: [{ tekst: "Mønsterplanen av 1974 som inngang for prosjektarbeid i norsk grunnskole", hvorfor: "Gjengitt etter hukommelsen; M87 og L97 er sikrere holdepunkter", hvorSjekke: "Mønsterplan for grunnskolen (1974), kapitlet om arbeidsmåter" }],
  },
  {
    navn: "Refleksiv praksis",
    fra: 1983, til: null, era: "fra ca. 1983",
    description: avsnitt(
      "Donald Schöns *The Reflective Practitioner* (1983) svarte på det han kalte profesjonenes tillitskrise: den tekniske rasjonaliteten, der praksis er anvendt vitenskap, forklarer ikke hva dyktige praktikere gjør i situasjoner som er uklare, unike og fulle av verdikonflikt. I stedet beskrev han en kunnskap i handlingen, og *refleksjon i handling*, en samtale med situasjonen mens den pågår, og refleksjon over handling i etterkant. Arkitektenes atelier ble modellen for profesjonsutdanning (*Educating the Reflective Practitioner*, 1987).",
      "Schön bygde på Deweys undersøkelsesteori (*How We Think*, 1910) og på samarbeidet med Chris Argyris om organisasjonslæring: skillet mellom uttalt teori og bruksteori, og mellom enkelt- og dobbeltkretslæring. David Kolbs erfaringslæringssyklus (1984) ga en enklere og svært utbredt modell. I Norge ble Gunnar Handal og Per Lauvås' praksisteori og veiledningsstrategi grunnlaget for praksisveiledning i lærerutdanningen.",
      "Refleksjon ble etter 1990 et allestedsnærværende ideal i lærer- og sykepleierutdanning. Lynn Fendler (2003) og andre har kritisert hvordan begrepet er blitt både vagt og disiplinerende: studentene skal «reflektere» etter skjema, mens Deweys og Schöns kobling til undersøkelse og samfunn forsvinner.",
    ),
    samfunn: "En tid med økende mistillit til eksperter og profesjoner (etter Vietnam, miljøkriser og byplanleggingens nederlag), fulgt av livslang læring, kunnskapssamfunn og nye styringsformer i offentlig sektor.",
    skole: "Profesjonsutdanningene ble akademisert, og praksis i studiet fikk ny vekt. I Norge ble veiledning av lærerstudenter og nyutdannede et fagfelt, og refleksjonslogg og mappe en vanlig arbeidsform.",
    kilder: [bok("Donald A. Schön", "The Reflective Practitioner: How Professionals Think in Action. Basic Books", 1983), bok("David A. Kolb", "Experiential Learning: Experience as the Source of Learning and Development. Prentice-Hall", 1984), bok("Lynn Fendler", "Teacher Reflection in a Hall of Mirrors: Historical Influences and Political Reverberations. Educational Researcher 32 (3)", 2003)],
  },
];

export const teoretikere = [
  // --- Pragmatismen ---
  {
    name: "Charles Sanders Peirce", birthYear: 1839, deathYear: 1914, gender: "mann",
    metaGenre: R, instrument: "Filosof", instrument2: "Forsker", mainGenre: ["Pragmatismen"],
    subGenre: ["Undersøkende læring"],
    influenceStart: 1877, influenceEnd: 1914, geography: "Cambridge, Massachusetts", priority: 2,
    description: avsnitt(
      "Amerikansk filosof, logiker og naturvitenskapsmann, og pragmatismens opphavsmann. «The Fixation of Belief» (1877) og «How to Make Our Ideas Clear» (1878) beskriver tenkning som en undersøkelse som begynner i tvil og ender i overbevisning, og som bare et fellesskap av undersøkere over tid kan gjøre pålitelig. Mening ligger i de tenkelige praktiske følgene.",
      "Peirce skrev ikke pedagogikk, men undersøkelsesbegrepet hans ble grunnlaget for Deweys teori om tenkning og læring (*Logic: The Theory of Inquiry*, 1938). Han levde isolert og fattig, og mye av verket ble først kjent etter hans død.",
    ),
    keyWorks: verk(["The Fixation of Belief", 1877], ["How to Make Our Ideas Clear", 1878]),
    kilder: [snl("Charles_Sanders_Peirce"), sep("peirce")],
  },
  {
    name: "William James", birthYear: 1842, deathYear: 1910, gender: "mann",
    metaGenre: R, instrument: "Psykolog", instrument2: "Filosof", mainGenre: ["Pragmatismen"],
    subGenre: ["Interesse som utgangspunkt", "Læring gjennom erfaring"],
    influenceStart: 1878, influenceEnd: 1910, geography: "Harvard, Cambridge, Massachusetts", priority: 2,
    description: avsnitt(
      "Amerikansk psykolog og filosof ved Harvard. *The Principles of Psychology* (1890) beskrev bevisstheten som en strøm og et aktivt, utvelgende redskap for et levende vesen, og vanen som «samfunnets svinghjul». Boka forandret Deweys tenkning. I *Talks to Teachers on Psychology* (1899) oversatte James psykologien til læreres hverdag: oppmerksomhet, interesse, assosiasjon og vane.",
      "*Pragmatism* (1907) gjorde retningen kjent for et stort publikum, men James' individuelle og psykologiske sannhetsbegrep ble angrepet både av Peirce og av europeiske filosofer.",
    ),
    keyWorks: verk(["The Principles of Psychology", 1890], ["Talks to Teachers on Psychology", 1899], ["Pragmatism", 1907]),
    kilder: [snl("William_James"), sep("james")],
  },
  {
    name: "George Herbert Mead", birthYear: 1863, deathYear: 1931, gender: "mann",
    metaGenre: R, instrument: "Filosof", instrument2: "Sosiolog", mainGenre: ["Pragmatismen", "Progressivismen"],
    subGenre: ["Lek", "Skolen som demokratisk fellesskap"],
    influenceStart: 1894, influenceEnd: 1931, geography: "Chicago", priority: 2,
    description: avsnitt(
      "Amerikansk filosof og sosialpsykolog, Deweys kollega i Michigan og fra 1894 i Chicago. Hans teori om selvet sier at vi blir oss selv ved å ta andres perspektiv: først i rollelek, så i regelstyrte spill der barnet må forholde seg til hele gruppen, «den generaliserte andre». Teorien ble grunnlaget for symbolsk interaksjonisme og har vært viktig for forståelsen av lek, sosialisering og identitet i barnehage og skole.",
      "Mead var aktiv i Chicagos skolereformer og i laboratorieskolen. Hovedverket *Mind, Self, and Society* (1934) er satt sammen etter hans død av forelesningsnotater.",
    ),
    keyWorks: verk(["Mind, Self, and Society", 1934]),
    kilder: [snl("George_Herbert_Mead"), sep("mead")],
  },

  // --- Progressivismen ---
  {
    name: "John Dewey", birthYear: 1859, deathYear: 1952, gender: "mann",
    metaGenre: R, instrument: "Filosof", instrument2: "Psykolog", mainGenre: ["Progressivismen", "Pragmatismen"],
    subGenre: ["Læring gjennom erfaring", "Skolen som demokratisk fellesskap", "Undersøkende læring", "Interesse som utgangspunkt"],
    influenceStart: 1896, influenceEnd: 1952, geography: "Chicago og New York", priority: 3,
    description: avsnitt(
      "Amerikansk filosof og pedagog, og retningens sentrale skikkelse. Ved universitetet i Chicago (1894–1904) ledet han laboratorieskolen fra 1896, der arbeid som matlaging, veving og snekring var innganger til fag og samarbeid. Fra 1905 var han ved Columbia University i New York. *Democracy and Education* (1916) definerer oppdragelse som en stadig rekonstruksjon av erfaring, og demokrati som en form for felles liv, ikke bare en styreform.",
      "Dewey avviste både den tradisjonelle skolen og den rene barnesentreringen (*The Child and the Curriculum*, 1902; *Experience and Education*, 1938): oppgaven er å knytte barnets erfaring til fagenes organiserte kunnskap. Han foreleste i Kina (1919–1921), besøkte Tyrkia og Sovjetunionen, og er den mest leste pedagogiske filosofen i det tjuende århundret, også i Norge.",
    ),
    keyWorks: verk(["My Pedagogic Creed", 1897], ["The School and Society", 1899], ["The Child and the Curriculum", 1902], ["How We Think", 1910], ["Democracy and Education", 1916], ["Experience and Education", 1938]),
    kilder: [snl("John_Dewey"), sep("dewey"), iep("dewey"), bok("Robert B. Westbrook", "John Dewey and American Democracy. Cornell University Press", 1991)],
  },
  {
    name: "Francis W. Parker", birthYear: 1837, deathYear: 1902, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Progressivismen"],
    subGenre: ["Interesse som utgangspunkt", "Skolen som demokratisk fellesskap"],
    influenceStart: 1875, influenceEnd: 1902, geography: "Quincy, Massachusetts og Chicago", priority: 2,
    description: "Amerikansk skolemann, som Dewey kalte «den progressive utdanningens far». Som skolesjef i Quincy (1875–1880) erstattet han pugg og lærebokdrill med anskuelse, naturfag ute, lesing av hele tekster og elevarbeid, inspirert av Pestalozzi, Fröbel og et studieopphold i Tyskland. «The Quincy system» ble et nasjonalt begrep. Fra 1883 ledet han Cook County Normal School i Chicago, og *Talks on Pedagogics* (1894) knyttet skolen til demokratiet: en fellesskole der barn fra alle samfunnslag lærer å leve sammen.",
    keyWorks: verk(["Talks on Pedagogics", 1894]),
    kilder: [bok("Lawrence A. Cremin", "The Transformation of the School: Progressivism in American Education, 1876–1957. Knopf", 1961)],
  },
  {
    name: "Ella Flagg Young", birthYear: 1845, deathYear: 1918, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", instrument2: "Politiker og reformator", mainGenre: ["Progressivismen"],
    subGenre: ["Skolen som demokratisk fellesskap"],
    influenceStart: 1887, influenceEnd: 1918, geography: "Chicago", priority: 2,
    description: "Amerikansk lærer og skoleleder. Hun tok doktorgrad hos Dewey med *Isolation in the School* (1900), en kritikk av den hierarkiske skolen der lærerne isoleres fra beslutningene, og samarbeidet med ham i laboratorieskolen. Som skolesjef i Chicago (1909–1915) var hun den første kvinnen som ledet skoleverket i en storby i USA, og i 1910 ble hun den første kvinnelige presidenten i National Education Association. Hun innførte lærerråd og er et sjeldent eksempel på en administrativ leder som var pedagogisk progressiv.",
    keyWorks: verk(["Isolation in the School", 1900]),
    kilder: [bok("Ella Flagg Young", "Isolation in the School. University of Chicago Press", 1900), bok("Lawrence A. Cremin", "The Transformation of the School: Progressivism in American Education, 1876–1957. Knopf", 1961)],
  },
  {
    name: "Jane Addams", birthYear: 1860, deathYear: 1935, gender: "kvinne",
    metaGenre: R, instrument: "Politiker og reformator", instrument2: "Sosiolog", mainGenre: ["Progressivismen", "Pragmatismen"],
    subGenre: ["Skolen som demokratisk fellesskap", "Læring gjennom erfaring"],
    influenceStart: 1889, influenceEnd: 1935, geography: "Chicago", priority: 2,
    description: avsnitt(
      "Amerikansk sosialreformator og fredsaktivist, Nobels fredspris 1931. Hull House (1889), som hun grunnla med Ellen Gates Starr i et innvandrerkvarter i Chicago, var et nabolagssenter med kurs, klubber, barnehage, teater og et «arbeidsmuseum» der innvandrere viste fram sitt håndverk. Utdanningen skulle ta utgangspunkt i menneskenes egne erfaringer og bygge felles liv på tvers av klasse og opprinnelse.",
      "*Democracy and Social Ethics* (1902) kritiserer en skole som forbereder barn til næringslivet uten å la dem forstå sitt eget arbeid. Forskning siden 1990-tallet (blant annet Charlene Haddock Seigfried) har løftet henne fram som pragmatist og som en premissleverandør for Dewey, ikke bare en praktiker.",
    ),
    keyWorks: verk(["Democracy and Social Ethics", 1902], ["Twenty Years at Hull-House", 1910]),
    kilder: [snl("Jane_Addams"), sep("addams-jane")],
  },
  {
    name: "Helen Parkhurst", birthYear: 1886, deathYear: 1973, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Progressivismen"],
    subGenre: ["Tilpasset opplæring", "Elevenes selvstyre"],
    influenceStart: 1919, influenceEnd: 1973, geography: "Dalton, Massachusetts og New York", priority: 1,
    description: "Amerikansk pedagog som hadde arbeidet med Montessori, og som utviklet Dalton-planen (fra 1919–1920): klasseundervisningen erstattes av fagrom, månedsoppgaver og en «kontrakt» mellom elev og lærer om hva eleven skal gjøre, i eget tempo og med egen planlegging. *Education on the Dalton Plan* (1922) ble oversatt til mange språk, og planen fikk stor utbredelse i Storbritannia, Nederland og Sovjetunionen i 1920-årene. Ukeplanen i norsk skole er en fjern slektning.",
    keyWorks: verk(["Education on the Dalton Plan", 1922]),
    kilder: [snl("Dalton-metoden_-_pedagogikk")],
  },

  // --- Prosjektpedagogikken ---
  {
    name: "William Heard Kilpatrick", birthYear: 1871, deathYear: 1965, gender: "mann",
    metaGenre: R, instrument: "Filosof", mainGenre: ["Prosjektpedagogikken", "Progressivismen"],
    subGenre: ["Prosjektarbeid", "Interesse som utgangspunkt"],
    influenceStart: 1914, influenceEnd: 1965, geography: "Teachers College, New York", priority: 2,
    description: avsnitt(
      "Amerikansk pedagog ved Teachers College, Columbia University, der han underviste titusener av lærere. «The Project Method» (1918) gjorde prosjektet, en «helhjertet, målrettet aktivitet i et sosialt miljø», til grunnenheten i undervisningen, og elevens formål til drivkraften. Han var Deweys mest innflytelsesrike popularisator, men Dewey og Boyd Bode var kritiske til hvor lite plass fagenes egen logikk fikk.",
      "Kilpatrick skrev også de kritiske bøkene om Montessori (1914) og Fröbel (1916), som bidro til at amerikanske progressive vendte seg bort fra begge.",
    ),
    keyWorks: verk(["The Montessori System Examined", 1914], ["Froebel's Kindergarten Principles Critically Examined", 1916], ["The Project Method", 1918], ["Foundations of Method", 1925]),
    kilder: [snl("William_Heard_Kilpatrick")],
  },
  {
    name: "Knud Illeris", birthYear: 1939, gender: "mann",
    metaGenre: R, instrument: "Forsker", mainGenre: ["Prosjektpedagogikken"],
    subGenre: ["Prosjektarbeid", "Undersøkende læring"],
    influenceStart: 1974, geography: "Roskilde, Danmark", priority: 2,
    description: avsnitt(
      "Dansk pedagog og læringsforsker ved Roskilde Universitetscenter. *Problemorientering og deltagerstyring* (1974) var den teoretiske begrunnelsen for prosjektarbeidet ved de nye universitetssentrene i Roskilde og Aalborg: studentene arbeider i grupper med selvvalgte problemer fra samfunnet, og deltakerstyringen skal motvirke at utdanningen reproduserer klasseforskjeller.",
      "Senere utviklet han en helhetlig læringsteori med innholds-, drivkraft- og samspillsdimensjon (*Læring*, 1999), som er mye brukt i nordisk voksenpedagogikk.",
    ),
    keyWorks: verk(["Problemorientering og deltagerstyring", 1974], ["Læring: Aktuel læringsteori i spændingsfeltet mellem Piaget, Freud og Marx", 1999]),
    kilder: [bok("Knud Illeris", "Problemorientering og deltagerstyring: Oplæg til en alternativ didaktik. Munksgaard", 1974)],
  },
  {
    name: "Howard Barrows", birthYear: 1928, deathYear: 2011, gender: "mann",
    metaGenre: R, instrument: "Forsker", instrument2: "Praktiker", mainGenre: ["Prosjektpedagogikken"],
    subGenre: ["Undersøkende læring"],
    influenceStart: 1969, influenceEnd: 2011, geography: "McMaster University, Ontario", priority: 1,
    description: "Amerikansk nevrolog og medisinsk pedagog. Ved det nye medisinstudiet ved McMaster University (fra 1969) var han en av dem som utviklet problembasert læring: små grupper arbeider med pasientkasus, formulerer selv hva de må lære, og læreren er veileder. *Problem-Based Learning: An Approach to Medical Education* (1980, med Robyn Tamblyn) gjorde modellen kjent. PBL spredte seg til medisinske fakulteter verden over og senere til andre profesjonsutdanninger. Barrows innførte også simulerte pasienter i undervisningen.",
    keyWorks: verk(["Problem-Based Learning: An Approach to Medical Education", 1980]),
    kilder: [snl("problembasert_l%C3%A6ring"), bok("Howard S. Barrows og Robyn M. Tamblyn", "Problem-Based Learning: An Approach to Medical Education. Springer", 1980)],
  },

  // --- Refleksiv praksis ---
  {
    name: "Donald Schön", birthYear: 1930, deathYear: 1997, gender: "mann",
    metaGenre: R, instrument: "Filosof", mainGenre: ["Refleksiv praksis"],
    subGenre: ["Refleksjon over praksis", "Læring gjennom erfaring"],
    influenceStart: 1974, influenceEnd: 1997, geography: "MIT, Cambridge, Massachusetts", priority: 2,
    description: avsnitt(
      "Amerikansk filosof og organisasjonsforsker ved MIT, med doktorgrad om Deweys undersøkelsesteori. *The Reflective Practitioner* (1983) beskriver hvordan dyktige praktikere tenker i handling, i situasjoner teorien ikke dekker, og angriper den tekniske rasjonaliteten som har gjort profesjonene til anvendt vitenskap. Begrepene kunnskap i handling, refleksjon i handling og refleksjon over handling er blitt grunnbegreper i profesjonsutdanningene.",
      "Med Chris Argyris skrev han om organisasjonslæring og om avstanden mellom det vi sier vi gjør og det vi faktisk gjør.",
    ),
    keyWorks: verk(["Theory in Practice: Increasing Professional Effectiveness", 1974], ["The Reflective Practitioner", 1983], ["Educating the Reflective Practitioner", 1987]),
    kilder: [bok("Donald A. Schön", "The Reflective Practitioner: How Professionals Think in Action. Basic Books", 1983)],
  },
  {
    name: "Chris Argyris", birthYear: 1923, deathYear: 2013, gender: "mann",
    metaGenre: R, instrument: "Psykolog", mainGenre: ["Refleksiv praksis"],
    subGenre: ["Refleksjon over praksis"],
    influenceStart: 1974, influenceEnd: 2013, geography: "Yale og Harvard", priority: 1,
    description: "Amerikansk organisasjonspsykolog. Sammen med Donald Schön skilte han mellom *uttalt teori* (det vi sier styrer handlingene våre) og *bruksteori* (det som faktisk gjør det), og mellom *enkeltkretslæring*, der man retter feil innenfor gitte mål, og *dobbeltkretslæring*, der målene og antakelsene selv blir gjenstand for prøving (*Theory in Practice*, 1974; *Organizational Learning*, 1978). Skillene ble viktige for skoleutvikling og veiledning, også i Norge.",
    keyWorks: verk(["Theory in Practice: Increasing Professional Effectiveness", 1974], ["Organizational Learning: A Theory of Action Perspective", 1978]),
    kilder: [bok("Chris Argyris og Donald A. Schön", "Theory in Practice: Increasing Professional Effectiveness. Jossey-Bass", 1974)],
  },
  {
    name: "David A. Kolb", birthYear: 1939, gender: "mann",
    metaGenre: R, instrument: "Psykolog", mainGenre: ["Refleksiv praksis"],
    subGenre: ["Læring gjennom erfaring", "Refleksjon over praksis"],
    influenceStart: 1971, geography: "Case Western Reserve University, Cleveland", priority: 2,
    description: "Amerikansk psykolog. *Experiential Learning* (1984) beskriver læring som en syklus der konkret erfaring, reflekterende observasjon, abstrakt begrepsdannelse og aktiv utprøving følger hverandre, og bygger eksplisitt på Dewey, Kurt Lewin og Piaget. Modellen er blant de mest brukte i voksenopplæring, ledelsesutdanning og profesjonsutdanning. Hans læringsstilinventar fra 1970-årene har derimot fått kritikk: forskningen gir lite støtte for at undervisning tilpasset «læringsstiler» gir bedre læring.",
    keyWorks: verk(["Experiential Learning: Experience as the Source of Learning and Development", 1984]),
    kilder: [bok("David A. Kolb", "Experiential Learning: Experience as the Source of Learning and Development. Prentice-Hall", 1984)],
  },
  {
    name: "Gunnar Handal", birthYear: 1936, gender: "mann",
    metaGenre: R, instrument: "Forsker", mainGenre: ["Refleksiv praksis"],
    subGenre: ["Refleksjon over praksis"],
    influenceStart: 1983, geography: "Universitetet i Oslo", priority: 2,
    description: "Norsk pedagog, professor i universitetspedagogikk ved Universitetet i Oslo. Sammen med Per Lauvås utviklet han begrepet praksisteori: hver lærer har en personlig, ofte uuttalt teori om sin egen praksis, bygd av erfaringer, kunnskap og verdier, og veiledning skal hjelpe læreren å gjøre den synlig og prøve den. *På egne vilkår* (1983) ga norsk lærerutdanning en veiledningsstrategi og praksistrekanten (handling, praktisk-teoretiske og etiske begrunnelser), og har preget praksisveiledning i flere tiår.",
    keyWorks: verk(["På egne vilkår: En strategi for veiledning med lærere", 1983], ["Veiledning og praktisk yrkesteori", 1999]),
    kilder: [bok("Gunnar Handal og Per Lauvås", "På egne vilkår: En strategi for veiledning med lærere. Cappelen", 1983)],
  },
  {
    name: "Per Lauvås", gender: "mann",
    metaGenre: R, instrument: "Forsker", mainGenre: ["Refleksiv praksis"],
    subGenre: ["Refleksjon over praksis"],
    influenceStart: 1983, geography: "Oslo og Halden", priority: 1,
    description: "Norsk pedagog, lenge ved Universitetet i Oslo og senere professor ved Høgskolen i Østfold. Med Gunnar Handal skrev han om praksisteori og veiledning (*På egne vilkår*, 1983; *Veiledning og praktisk yrkesteori*, 1999). Han har også skrevet mye om vurdering i skole og høyere utdanning.",
    keyWorks: verk(["På egne vilkår: En strategi for veiledning med lærere", 1983], ["Veiledning og praktisk yrkesteori", 1999]),
    kilder: [bok("Gunnar Handal og Per Lauvås", "På egne vilkår: En strategi for veiledning med lærere. Cappelen", 1983)],
  },
];
