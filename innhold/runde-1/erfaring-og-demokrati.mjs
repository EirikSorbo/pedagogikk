// Runde 1 — Erfaring og demokrati: retningen, epokene, teoretikerne og påvirkningene (fase 6, skrevet av Opus).
import { snl, sep, iep, brit, side, bok } from "../kilder.mjs";

const R = "Erfaring og demokrati";
const CREMIN = bok("Cremin, Lawrence A. The Transformation of the School: Progressivism in American Education, 1876–1957. Knopf, 1961.");
const LABAREE = bok("Labaree, David F. «Progressivism, Schools and Schools of Education: An American Romance.» Paedagogica Historica 41, nr. 1–2 (2005): 275–288.");
const WESTBROOK = bok("Westbrook, Robert B. John Dewey and American Democracy. Cornell University Press, 1991.");
const SCHON = bok("Schön, Donald A. The Reflective Practitioner: How Professionals Think in Action. Basic Books, 1983.");
const LAUVAS = bok("Lauvås, Per og Gunnar Handal. Veiledning og praktisk yrkesteori. Cappelen, 1990.");
const KNOLL = bok("Knoll, Michael. «The Project Method: Its Vocational Education Origin and International Development.» Journal of Industrial Teacher Education 34, nr. 3 (1997): 59–80.");

export default {
  artists: [
    // --- Pragmatismen ------------------------------------------------------
    {
      name: "Charles Sanders Peirce", birthYear: 1839, deathYear: 1914, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Pragmatismen"],
      subGenre: ["Undersøkende læring"],
      influenceStart: 1877, influenceEnd: 1914, geography: "Cambridge (Massachusetts) og Milford (Pennsylvania)",
      description: `
        Peirce var logiker, vitenskapsfilosof og grunnleggeren av pragmatismen, som han formulerte i to artikler fra 1877 og 1878. Den pragmatiske maksimen sier at meningen med et begrep ligger i de praktiske virkningene vi kan tenke oss at gjenstanden har. Undersøkelse er for Peirce en bevegelse fra tvil til overbevisning, og sannhet er det et fellesskap av undersøkere ville komme fram til hvis undersøkelsen fikk fortsette lenge nok. Kunnskap er alltid feilbarlig og kan rettes.

        Peirce fikk aldri en fast stilling ved et universitet, men underviste i logikk ved Johns Hopkins 1879–1884, der Dewey var blant studentene. For pedagogikken er han viktig indirekte: modellen av undersøkelse som problemløsning ligger til grunn for Deweys *How We Think* og hans logikk, og ideen om et «undersøkende fellesskap» ble tatt opp av Matthew Lipman i filosofi med barn fra 1970-tallet.
      `,
      keyWorks: [
        { title: "The Fixation of Belief", year: 1877 },
        { title: "How to Make Our Ideas Clear", year: 1878 },
      ],
      kilder: [
        snl("https://snl.no/Charles_Sanders_Peirce", "Tomas Stølen"),
        sep("https://plato.stanford.edu/entries/peirce/", "Robert Burch"),
        iep("https://iep.utm.edu/peirce-charles-sanders/"),
      ],
    },
    {
      name: "William James", birthYear: 1842, deathYear: 1910, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Pragmatismen"],
      subGenre: ["Interesseprinsippet"],
      influenceStart: 1878, influenceEnd: 1910, geography: "Harvard, Cambridge (Massachusetts)",
      description: `
        James var lege, psykolog og filosof og gjorde pragmatismen kjent fra 1898, da han ga Peirce æren for ordet. *The Principles of Psychology* (1890) ble et grunnverk for den nye psykologien, med kapitler om vane, bevissthetsstrømmen, oppmerksomhet og interesse som fikk stor betydning for lærere. *Pragmatism* (1907) gjorde sannhet til det som «virker» i erfaringen, og ble angrepet for å gjøre sannhet til nytte.

        *Talks to Teachers on Psychology* (1899), forelesninger for lærere i Cambridge, er et av de første forsøkene på å gjøre psykologien nyttig for skolen, og samtidig en advarsel mot å tro at den kan erstatte lærerens skjønn: psykologien er en vitenskap, undervisningen en kunst, og vitenskaper skaper ikke kunster direkte. Det skiller James fra hans student Edward Thorndike, som ville bygge pedagogikken på målbar læringspsykologi. Spenningen mellom de to synene preger fortsatt forholdet mellom pedagogikk og psykologi.
      `,
      keyWorks: [
        { title: "The Principles of Psychology", year: 1890 },
        { title: "Talks to Teachers on Psychology", year: 1899 },
        { title: "The Varieties of Religious Experience", year: 1902 },
        { title: "Pragmatism: A New Name for Some Old Ways of Thinking", year: 1907 },
      ],
      kilder: [
        snl("https://snl.no/William_James", "Tomas Stølen"),
        sep("https://plato.stanford.edu/entries/james/", "Russell Goodman"),
        iep("https://iep.utm.edu/james-o/"),
      ],
    },
    {
      name: "John Dewey", birthYear: 1859, deathYear: 1952, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Pragmatismen", "Progressivismen"],
      subGenre: ["Læring gjennom erfaring", "Skolen som samfunn i miniatyr", "Undersøkende læring", "Interesseprinsippet"],
      influenceStart: 1884, influenceEnd: 1952, geography: "Chicago og New York",
      description: `
        Dewey er 1900-tallets mest innflytelsesrike pedagogiske tenker. I Chicago ledet han laboratorieskolen ved universitetet (1896–1904), der barna arbeidet med matlaging, veving og snekring som sosiale aktiviteter som ledet inn i historie, naturfag og matematikk. *The School and Society* (1899) og *The Child and the Curriculum* (1902) avviser både den stoffsentrerte og den barnesentrerte skolen: oppgaven er å knytte barnets erfaring til den organiserte kunnskapen. Fra 1904 var han professor ved Columbia i New York.

        I *Democracy and Education* (1916) er oppdragelse en kontinuerlig rekonstruksjon av erfaring, og demokrati ikke bare en styreform, men en måte å leve sammen på som skolen må øve. *How We Think* (1910) beskriver refleksiv tenkning som undersøkelse av et problem. I *Experience and Education* (1938) kritiserte han progressive skoler som hadde gjort frihet til et mål i seg selv. Forskningen, fra Robert Westbrook til David Labaree, har vist hvor ofte Dewey ble sitert og hvor sjelden han ble praktisert, og hvordan navnet hans ble brukt både av barnesentrerte og effektivitetsorienterte reformatorer. I Norge påvirket han arbeidsskolen gjennom Anna Sethne.
      `,
      keyWorks: [
        { title: "My Pedagogic Creed", year: 1897 },
        { title: "The School and Society", year: 1899 },
        { title: "The Child and the Curriculum", year: 1902 },
        { title: "How We Think", year: 1910 },
        { title: "Democracy and Education", year: 1916 },
        { title: "Experience and Education", year: 1938 },
      ],
      kilder: [
        snl("https://snl.no/John_Dewey", "Kaare Skagen"),
        sep("https://plato.stanford.edu/entries/dewey/", "David Hildebrand"),
        sep("https://plato.stanford.edu/entries/dewey-political/", "Matthew Festenstein"),
        iep("https://iep.utm.edu/john-dewey/"),
        WESTBROOK,
      ],
    },
    {
      name: "George Herbert Mead", birthYear: 1863, deathYear: 1931, gender: "mann",
      metaGenre: R, instrument: "Sosiolog", mainGenre: ["Pragmatismen"],
      subGenre: ["Leken som læringsform"],
      influenceStart: 1894, influenceEnd: 1931, geography: "Chicago",
      description: `
        Mead var Deweys kollega og venn i Chicago fra 1894 og formulerte pragmatismens sosiale teori om selvet. Selvet er ikke gitt, men oppstår i samhandling, når individet lærer å se seg selv med andres øyne. Barnet utvikler dette gjennom to trinn: i leken (*play*) tar det én annens rolle om gangen, i spillet (*game*) må det holde alle de andres roller og reglene i hodet samtidig og utvikler et bilde av «den generaliserte andre».

        Teorien finnes i *Mind, Self, and Society* (1934), som ble satt sammen av studentenes notater etter hans død, og ble grunnlaget for den symbolske interaksjonismen i sosiologien. Mead skrev også om undervisning, blant annet om den sosiale bevisstheten i klasserommet (1910), og var engasjert i Chicagos skolepolitikk og i miljøet rundt Hull House. For pedagogikken har han særlig betydning gjennom teorien om lekens og spillets rolle i utviklingen av selvet og fellesskapet.
      `,
      keyWorks: [
        { title: "The Psychology of Social Consciousness Implied in Instruction", year: 1910 },
        { title: "Mind, Self, and Society (utgitt etter hans død)", year: 1934 },
      ],
      kilder: [
        snl("https://snl.no/George_Herbert_Mead", "Tomas Stølen"),
        sep("https://plato.stanford.edu/entries/mead/", "Mitchell Aboulafia og Scott Taylor"),
        iep("https://iep.utm.edu/mead/"),
      ],
    },
    {
      name: "Jane Addams", birthYear: 1860, deathYear: 1935, gender: "kvinne",
      metaGenre: R, instrument: "Sosiolog", mainGenre: ["Pragmatismen"],
      subGenre: ["Lik rett til utdanning"],
      influenceStart: 1889, influenceEnd: 1935, geography: "Hull House, Chicago",
      description: `
        Addams grunnla Hull House i Chicago i 1889 sammen med Ellen Gates Starr, et settlement der utdannede kvinner bodde blant innvandrerne i et fattig arbeiderstrøk og drev kurs, klubber, barnehage og forskning på levekår. Hull House var et laboratorium for den sosiale pragmatismen, og Dewey satt i styret. Addams fikk Nobels fredspris i 1931.

        I *Democracy and Social Ethics* (1902) og *Twenty Years at Hull-House* (1910) kritiserer hun skolen for å være lukket mot elevenes liv og arbeid, og tar til orde for en «sosialisert utdanning» som tar innvandrernes erfaring og kultur på alvor. Arbeidsmuseet hun åpnet i 1900, lot eldre innvandrere vise håndverket de kom med, slik at barna kunne se sammenhengen mellom foreldrenes kunnskap og industriens arbeid. Forskningen har de siste tiårene løftet henne fram som en selvstendig pragmatistisk filosof, ikke bare som Deweys samarbeidspartner.
      `,
      keyWorks: [
        { title: "Democracy and Social Ethics", year: 1902 },
        { title: "The Spirit of Youth and the City Streets", year: 1909 },
        { title: "Twenty Years at Hull-House", year: 1910 },
      ],
      kilder: [
        snl("https://snl.no/Jane_Addams", "Anne Synnøve Simensen"),
        sep("https://plato.stanford.edu/entries/addams-jane/", "Maurice Hamington"),
      ],
    },

    // --- Progressivismen ---------------------------------------------------
    {
      name: "Francis W. Parker", birthYear: 1837, deathYear: 1902, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Progressivismen"],
      subGenre: ["Interesseprinsippet"],
      influenceStart: 1875, influenceEnd: 1902, geography: "Quincy (Massachusetts) og Chicago",
      description: `
        Parker var offiser i borgerkrigen og studerte pedagogikk i Tyskland, der han møtte arbeidet etter Pestalozzi, Fröbel og Herbart. Som skolesjef i Quincy i Massachusetts fra 1875 avskaffet han pugg og faste lærebøker til fordel for naturstudier, ekskursjoner, lesing av meningsfulle tekster og skriving om egne erfaringer. «Quincy-systemet» ble kjent i hele landet.

        Fra 1883 til 1899 ledet han Cook County Normal School i Chicago, en lærerskole med øvingsskole som ble et sentrum for nye arbeidsmåter, og han organiserte den første foreldreforeningen i byen. Dewey kalte ham den progressive pedagogikkens far. *Talks on Teaching* (1883) og *Talks on Pedagogics* (1894) gjør barnet og dets interesser til midtpunktet i undervisningen og forbinder skolen med demokratiet. Instituttet han grunnla, ble i 1901 en del av University of Chicago.
      `,
      keyWorks: [
        { title: "Talks on Teaching", year: 1883 },
        { title: "Talks on Pedagogics", year: 1894 },
      ],
      kilder: [
        brit("https://www.britannica.com/biography/Francis-Parker"),
        CREMIN,
      ],
    },
    {
      name: "Ella Flagg Young", birthYear: 1845, deathYear: 1918, gender: "kvinne",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Progressivismen"],
      subGenre: ["Skolen som samfunn i miniatyr"],
      influenceStart: 1887, influenceEnd: 1918, geography: "Chicago",
      description: `
        Young begynte som lærer i Chicago i 1862 og arbeidet seg opp til assisterende skolesjef. Ved siden av tok hun doktorgrad hos Dewey ved University of Chicago (1900) og var en av lederne for laboratorieskolen. Dewey regnet henne som en av sine viktigste samtalepartnere om hvordan ideene kunne virke i en skole. Avhandlingen *Isolation in the School* (1900) kritiserer en byråkratisk skole der lærerne er isolert fra beslutningene og elevene fra livet utenfor.

        Hun ledet Chicagos lærerskole fra 1905 og ble i 1909 skolesjef i Chicago, den første kvinnen i en slik stilling i en stor amerikansk by. Året etter ble hun den første kvinnelige lederen av det nasjonale lærerforbundet NEA. Som skolesjef innførte hun lærerråd som skulle gi lærerne innflytelse. Young viser at progressivismen også handlet om skolens organisering og demokrati for lærerne, ikke bare om undervisningsmetoder.
      `,
      keyWorks: [
        { title: "Isolation in the School", year: 1900 },
        { title: "Ethics in the School", year: 1902 },
        { title: "Some Types of Modern Educational Theory", year: 1902 },
      ],
      kilder: [
        brit("https://www.britannica.com/biography/Ella-Flagg-Young"),
      ],
    },
    {
      name: "William Heard Kilpatrick", birthYear: 1871, deathYear: 1965, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Progressivismen", "Prosjektpedagogikken"],
      subGenre: ["Prosjektarbeid", "Interesseprinsippet"],
      influenceStart: 1912, influenceEnd: 1951, geography: "Teachers College, New York",
      description: `
        Kilpatrick var Deweys elev og kollega ved Teachers College i New York og en av de mest innflytelsesrike lærerutdannerne i USA i mellomkrigstiden; han underviste titusener av lærere. Artikkelen «The Project Method» (1918) gjorde prosjektet til en allmenn pedagogisk form: «helhjertet, målrettet aktivitet i et sosialt miljø». Han skilte mellom fire typer prosjekter, fra å skape noe til å lære en bestemt ferdighet, og la vekt på at målet måtte være elevens eget.

        *The Montessori System Examined* (1914) bidro sterkt til at Montessori mistet terreng i USA. *Foundations of Method* (1925) utvikler teorien om læring gjennom elevens egne formål. Forskningen har påpekt forskjellen mellom Kilpatrick og Dewey: Kilpatrick la mer vekt på elevens hensikt og mindre på sammenhengen i fagstoffet, og Deweys kritikk av den progressive bevegelsen i 1938 rammet også ham. I Norge påvirket han Anna Sethne og senere prosjektpedagogikken i 1970-årene.
      `,
      keyWorks: [
        { title: "The Montessori System Examined", year: 1914 },
        { title: "The Project Method", year: 1918 },
        { title: "Foundations of Method", year: 1925 },
        { title: "Education for a Changing Civilization", year: 1926 },
      ],
      kilder: [
        snl("https://snl.no/William_Heard_Kilpatrick", "Kaare Skagen"),
        KNOLL,
      ],
    },
    {
      name: "George S. Counts", birthYear: 1889, deathYear: 1974, gender: "mann",
      metaGenre: R, instrument: "Sosiolog", mainGenre: ["Progressivismen"],
      subGenre: ["Lik rett til utdanning"],
      influenceStart: 1922, influenceEnd: 1959, geography: "Teachers College, New York",
      description: `
        Counts var utdanningssosiolog ved Teachers College. *The Selective Character of American Secondary Education* (1922) viste at den amerikanske high school, tross idealet om like muligheter, i praksis sorterte elevene etter foreldrenes klasse. På den progressive bevegelsens årsmøte i 1932 holdt han talen som ble pamfletten *Dare the School Build a New Social Order?*: den barnesentrerte progressivismen tjente den øvre middelklassen og manglet en samfunnsvisjon, og lærerne burde bevisst bruke skolen til å bygge et mer rettferdig samfunn under depresjonen.

        Talen satte i gang en debatt om indoktrinering og skolens nøytralitet og ble utgangspunkt for den sosiale rekonstruksjonismen. Counts ble senere en skarp kritiker av Sovjetunionen og ledet som president for lærerforbundet AFT (1939–1942) kampen mot kommunistisk innflytelse i forbundet. Han står for den politiske og sosiologiske siden av progressivismen.
      `,
      keyWorks: [
        { title: "The Selective Character of American Secondary Education", year: 1922 },
        { title: "Dare the School Build a New Social Order?", year: 1932 },
      ],
      kilder: [
        brit("https://www.britannica.com/biography/George-S-Counts"),
        LABAREE,
      ],
    },

    // --- Prosjektpedagogikken ---------------------------------------------
    {
      name: "Knud Illeris", birthYear: 1939, deathYear: null, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Prosjektpedagogikken"],
      subGenre: ["Prosjektarbeid", "Elevmedvirkning"],
      influenceStart: 1974, influenceEnd: null, geography: "Roskilde Universitetscenter",
      description: `
        Illeris er dansk utdanningsforsker og den sentrale teoretikeren bak prosjektpedagogikken i Norden. Roskilde Universitetscenter (1972) og Aalborg Universitetscenter (1974) bygde studiene på problemorientert prosjektarbeid i grupper, og Illeris' *Problemorientering og deltagerstyring* (1974) ga modellen en teoretisk begrunnelse. Han kombinerte Piagets læringsteori med Oskar Negts eksemplariske læring og en marxistisk kritikk av skolens kvalifiseringsfunksjon: studentene skulle selv formulere problemer med samfunnsmessig relevans og styre arbeidet med dem.

        Senere utviklet han en helhetlig læringsteori med tre dimensjoner, innhold, drivkraft og samspill, i *Læring* (1999) og *How We Learn* (2007). Prosjektarbeidet fra Roskilde og Aalborg påvirket både høyere utdanning og grunnskolen i Norden, og i Norge ble tema- og prosjektarbeid anbefalt i mønsterplanene og fikk et fast omfang i L97.
      `,
      keyWorks: [
        { title: "Problemorientering og deltagerstyring. Oplæg til en alternativ didaktik", year: 1974 },
        { title: "Læring. Aktuel læringsteori i spændingsfeltet mellem Piaget, Freud og Marx", year: 1999 },
        { title: "How We Learn: Learning and Non-Learning in School and Beyond", year: 2007 },
      ],
      kilder: [
        bok("Illeris, Knud. Problemorientering og deltagerstyring. Oplæg til en alternativ didaktik. Munksgaard, 1974."),
        bok("Illeris, Knud. How We Learn: Learning and Non-Learning in School and Beyond. Routledge, 2007."),
      ],
    },
    {
      name: "Oskar Negt", birthYear: 1934, deathYear: 2024, gender: "mann",
      metaGenre: "Kritikk og frigjøring", instrument: "Sosiolog", mainGenre: ["Prosjektpedagogikken", "Kritisk teori"],
      subGenre: ["Prosjektarbeid"],
      influenceStart: 1968, influenceEnd: 2024, geography: "Frankfurt og Hannover",
      description: `
        Negt var Habermas' assistent i Frankfurt og professor i sosiologi i Hannover fra 1970. *Soziologische Phantasie und exemplarisches Lernen* (1968) ble skrevet for fagbevegelsens arbeiderutdanning: læringen skal ta utgangspunkt i deltakernes egne erfaringer av konflikter på arbeidsplassen og i samfunnet, og gjennom eksemplariske tilfeller lede til forståelse av de samfunnsstrukturene som ligger bak. Begrepet sosiologisk fantasi henter han fra C. Wright Mills.

        Ideen om eksemplarisk læring ble en hovedkilde for den problemorienterte prosjektpedagogikken i Danmark og Norge på 1970-tallet. Med Alexander Kluge skrev Negt *Öffentlichkeit und Erfahrung* (1972) om en proletarisk offentlighet, og han var med og grunnla forsøksskolen Glocksee i Hannover i 1972. Han representerer koblingen mellom kritisk teori og den erfaringsbaserte læringen.
      `,
      keyWorks: [
        { title: "Soziologische Phantasie und exemplarisches Lernen", year: 1968 },
        { title: "Öffentlichkeit und Erfahrung (med Alexander Kluge)", year: 1972 },
      ],
      kilder: [
        bok("Negt, Oskar. Soziologische Phantasie und exemplarisches Lernen. Zur Theorie der Arbeiterbildung. Europäische Verlagsanstalt, 1968."),
        snl("https://snl.no/Alexander_Kluge"),
      ],
    },
    {
      name: "Howard Barrows", birthYear: 1928, deathYear: 2011, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Prosjektpedagogikken"],
      subGenre: ["Undersøkende læring"],
      influenceStart: 1969, influenceEnd: 2011, geography: "McMaster University (Hamilton, Canada)",
      description: `
        Barrows var nevrolog og medisinsk lærer. På 1960-tallet innførte han simulerte pasienter i legeutdanningen, og ved den nye medisinske fakulteten ved McMaster University i Canada (1969) utviklet han problembasert læring (PBL). Studentene arbeider i små grupper med en veileder, møter et klinisk problem før de har lært teorien, og bruker problemet til å finne ut hva de må lære og hvordan.

        *Problem-Based Learning* (1980, med Robyn Tamblyn) gjorde modellen kjent, og den ble tatt opp i Maastricht og i profesjonsutdanninger over hele verden. PBL er den mest utbredte formen for prosjekt- og problembasert læring i høyere utdanning. Forskningen har vært delt: tilhengere viser til motivasjon og overføring til praksis, mens kritikere, blant dem Kirschner, Sweller og Clark (2006), har hevdet at lite veiledning i starten er ineffektivt for nybegynnere.
      `,
      keyWorks: [
        { title: "Problem-Based Learning: An Approach to Medical Education (med Robyn Tamblyn)", year: 1980 },
      ],
      kilder: [
        snl("https://snl.no/problembasert_l%C3%A6ring"),
        bok("Barrows, Howard S. og Robyn M. Tamblyn. Problem-Based Learning: An Approach to Medical Education. Springer, 1980."),
      ],
    },

    // --- Refleksiv praksis ---------------------------------------------------
    {
      name: "Donald Schön", birthYear: 1930, deathYear: 1997, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Refleksiv praksis"],
      subGenre: ["Refleksjon i og over handling"],
      influenceStart: 1974, influenceEnd: 1997, geography: "MIT, Cambridge (Massachusetts)",
      description: `
        Schön skrev doktoravhandling om Deweys teori om undersøkelse og arbeidet som konsulent og forsker før han ble professor ved MIT. *The Reflective Practitioner* (1983) angriper den «tekniske rasjonaliteten» i profesjonsutdanningene, ideen om at praksis er anvendelse av vitenskapelig kunnskap på veldefinerte problemer. Profesjonelle møter uklare, unike situasjoner der problemet først må settes. De handler ut fra en taus «viten-i-handling», og de dyktigste reflekterer i handlingen, mens de gjør noe, og over den i ettertid.

        *Educating the Reflective Practitioner* (1987) bruker arkitektstudenter i tegnesalen som modell for en profesjonsutdanning bygget på veiledet praksis. Med Chris Argyris skrev han om organisasjonslæring. Begrepene fikk stor gjennomslagskraft i lærer-, sykepleier- og sosialarbeiderutdanning, også i Norge. Kritikere har pekt på at begrepet refleksjon ble så utvidet at det mistet innhold, og at refleksjon kan bli et rituelt krav snarere enn en arbeidsform.
      `,
      keyWorks: [
        { title: "Theory in Practice: Increasing Professional Effectiveness (med Chris Argyris)", year: 1974 },
        { title: "The Reflective Practitioner: How Professionals Think in Action", year: 1983 },
        { title: "Educating the Reflective Practitioner", year: 1987 },
      ],
      kilder: [
        SCHON,
        bok("Schön, Donald A. Educating the Reflective Practitioner. Jossey-Bass, 1987."),
      ],
    },
    {
      name: "David A. Kolb", birthYear: 1939, deathYear: null, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Refleksiv praksis"],
      subGenre: ["Læring gjennom erfaring"],
      influenceStart: 1971, influenceEnd: null, geography: "Case Western Reserve University, Cleveland",
      description: `
        Kolb er organisasjonspsykolog og kjent for modellen av erfaringslæring som en syklus i fire faser: konkret erfaring, reflekterende observasjon, abstrakt begrepsdannelse og aktiv utprøving. *Experiential Learning* (1984) bygger modellen på Dewey, Kurt Lewin og Piaget, og knytter den til læringsstiler, der hver person har en foretrukket måte å bevege seg i syklusen på.

        Modellen ble svært utbredt i voksenopplæring, lederutvikling og profesjonsutdanning. Den er også blitt kritisert. Læringsstilene har lite empirisk støtte, slik blant annet en britisk gjennomgang av læringsstilmodeller (Coffield mfl., 2004) viste, og syklusen er blitt kritisert for å være for individuell og lineær, og for å overse det sosiale og kulturelle i læringen. Kolb står likevel som den som gjorde Deweys erfaringsbegrep til en anvendelig modell.
      `,
      keyWorks: [
        { title: "Experiential Learning: Experience as the Source of Learning and Development", year: 1984 },
      ],
      kilder: [
        bok("Kolb, David A. Experiential Learning: Experience as the Source of Learning and Development. Prentice-Hall, 1984."),
      ],
    },
    {
      name: "Chris Argyris", birthYear: 1923, deathYear: 2013, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Refleksiv praksis"],
      subGenre: ["Refleksjon i og over handling"],
      influenceStart: 1974, influenceEnd: 2013, geography: "Yale og Harvard",
      description: `
        Argyris var organisasjonspsykolog ved Yale og Harvard. Sammen med Schön skilte han i *Theory in Practice* (1974) mellom den teorien vi sier at vi handler etter (*espoused theory*), og den teorien som faktisk styrer handlingene våre (*theory-in-use*). De to er ofte i strid, uten at vi merker det, fordi vi beskytter oss mot å bli konfrontert med avviket.

        I *Organizational Learning* (1978) skilte de mellom enkeltkretslæring, der vi retter feil innenfor de samme målene og antakelsene, og dobbeltkretslæring, der vi endrer selve antakelsene. Begrepene er blitt brukt mye i skoleutvikling, veiledning og lærerutdanning, blant annet av Lauvås og Handal, for å forklare hvorfor endring av praksis forutsetter at praktikere undersøker sine egne handlingsteorier.
      `,
      keyWorks: [
        { title: "Personality and Organization", year: 1957 },
        { title: "Theory in Practice (med Donald Schön)", year: 1974 },
        { title: "Organizational Learning (med Donald Schön)", year: 1978 },
      ],
      kilder: [
        bok("Argyris, Chris og Donald A. Schön. Theory in Practice: Increasing Professional Effectiveness. Jossey-Bass, 1974."),
      ],
    },
    {
      name: "Gunnar Handal", birthYear: null, deathYear: null, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Refleksiv praksis"],
      subGenre: ["Refleksjon i og over handling"],
      influenceStart: 1983, influenceEnd: null, geography: "Universitetet i Oslo",
      description: `
        Handal er pedagog ved Universitetet i Oslo, kjent for arbeid med universitetspedagogikk og med veiledning i lærerutdanningen. Sammen med Per Lauvås skrev han *På egne vilkår* (1983) og *Veiledning og praktisk yrkesteori* (1990), som har vært grunnbøker for veiledning av lærerstudenter og lærere i Norden i flere tiår.

        Kjernen er begrepet praktisk yrkesteori: hver lærer har en personlig og ofte taus teori om undervisning, bygget på erfaringer, kunnskap og verdier, som styrer handlingene. Veiledningen skal hjelpe læreren til å gjøre denne teorien eksplisitt, prøve den og utvikle den, ut fra lærerens egne premisser og ikke veilederens. Praksistrekanten skiller mellom handlingen og to nivåer av begrunnelser: praktiske og teoretiske grunner, og etiske begrunnelser. Modellen er en norsk videreføring av Schön og Argyris.
      `,
      keyWorks: [
        { title: "På egne vilkår. En strategi for veiledning med lærere (med Per Lauvås)", year: 1983 },
        { title: "Veiledning og praktisk yrkesteori (med Per Lauvås)", year: 1990 },
      ],
      kilder: [LAUVAS],
    },
    {
      name: "Per Lauvås", birthYear: null, deathYear: null, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Refleksiv praksis"],
      subGenre: ["Refleksjon i og over handling"],
      influenceStart: 1983, influenceEnd: null, geography: "Norge",
      description: `
        Lauvås er pedagog og har sammen med Gunnar Handal utviklet den norske tradisjonen for veiledning og praktisk yrkesteori. Deres bøker fra 1983 og 1990 ga en strategi for veiledning av lærerstudenter der målet ikke er å overføre veilederens måte å undervise på, men å styrke studentens egen evne til å begrunne og vurdere sin praksis.

        Lauvås har også skrevet om vurdering i høyere utdanning og om kollegaveiledning. Sammen med Handal har han gjort refleksjon over praksis til en del av norsk lærerutdanning, og tradisjonen preget også veiledningen av nyutdannede lærere som ble bygd ut fra 2000-tallet. Tradisjonen er også blitt kritisert for å gjøre veiledning til en individuell og terapeutisk praksis, mer enn en faglig og kollektiv.
      `,
      keyWorks: [
        { title: "På egne vilkår. En strategi for veiledning med lærere (med Gunnar Handal)", year: 1983 },
        { title: "Veiledning og praktisk yrkesteori (med Gunnar Handal)", year: 1990 },
      ],
      kilder: [LAUVAS],
    },
  ],

  genreDescriptions: {
    meta: {
      "Erfaring og demokrati": {
        meta: {
          description: `
            Retningen bygger på den amerikanske pragmatismen og Deweys tanke om at mennesker lærer gjennom å undersøke problemer i sin egen erfaring, og at skolen må være et demokratisk fellesskap der dette kan skje. Den går fra Peirce og James gjennom den progressive bevegelsen i USA til prosjektpedagogikken i 1970-årene og refleksiv praksis i profesjonsutdanningene. Felles er en kunnskapsteori der tenkning er handling, og en oppfatning av demokrati som en måte å leve sammen på, ikke bare en styreform. Forskningen har vist hvor mange og ulike reformer som har tatt navnet Dewey, og hvor langt praksis ofte har ligget fra teorien.
          `,
          kilder: [
            snl("https://snl.no/pragmatisme", "Tomas Stølen"),
            sep("https://plato.stanford.edu/entries/dewey/", "David Hildebrand"),
          ],
        },
        story: {
          body: `
            ### Tenkning som handling
            Pragmatismen oppsto i Cambridge i Massachusetts på 1870-tallet, i en kultur preget av borgerkrigen, Darwin og en voksende tillit til vitenskapen. Peirce, James og senere Dewey forsto tenkning som en del av handlingen: vi begynner å tenke når vanene våre møter et problem, og en idé er sann i den grad den løser problemet og tåler videre prøving. Det var en kunnskapsteori som nesten krevde en pedagogikk, og James' forelesninger for lærere (1899) og Deweys laboratorieskole i Chicago (1896–1904) var de første svarene.

            ### Laboratorieskolen og demokratiet
            Dewey ville verken ha en skole som startet i fagene eller en som startet i barnets lyster. Skolen skulle være et samfunn i miniatyr, der barna gjennom felles arbeid med mat, klær og hus møtte problemer som førte dem inn i naturfag, historie og matematikk. Demokratiet var målet og arbeidsformen: et samfunn der mange erfaringer deles, og der vanene stadig kan prøves. *Democracy and Education* (1916) ble retningens hovedverk. Jane Addams viste samtidig i Hull House hvordan utdanning kunne knyttes til innvandreres liv og arbeid, og George Herbert Mead hvordan selvet blir til i lek og spill med andre.

            ### Progressivismens mange ansikter
            Den progressive bevegelsen i USA var bredere enn Dewey. Francis Parker hadde forvandlet skolene i Quincy før Dewey kom til Chicago, Ella Flagg Young prøvde å demokratisere skolens styring, og Kilpatrick gjorde prosjektet til en metode som titusener av lærere lærte. Ved siden av sto en administrativ progressivisme som ville gjøre skolen effektiv gjennom tester, nivådeling og yrkesretting. David Labaree har kalt det en romanse: den pedagogiske progressivismen vant lærerutdanningenes retorikk, mens den administrative vant skolens struktur. I 1932 krevde George Counts at skolen skulle ta parti for et mer rettferdig samfunn, og i 1938 kritiserte Dewey selv de progressive skolene for å gjøre frihet til et mål i seg selv.

            ### Prosjekter og problemer
            Etter krigen ble progressivismen angrepet i USA, men ideene levde videre i Europa. I Norden ga 1970-årene en ny bølge: Roskilde og Aalborg bygde universitetsstudier på problemorientert prosjektarbeid, Knud Illeris ga den en teori, og Oskar Negts eksemplariske læring ga den en kritisk og politisk begrunnelse. I medisinen gjorde Howard Barrows problembasert læring til en modell for profesjonsutdanninger over hele verden. I Norge ble tema- og prosjektarbeid anbefalt i mønsterplanene fra 1970- og 80-tallet og fikk et fast omfang i L97.

            ### Refleksjon i profesjonene
            Det siste kapitlet handler om voksne. Donald Schön, som skrev doktoravhandling om Dewey, viste i 1983 at profesjonelle ikke anvender teori, men reflekterer i og over handlingen i situasjoner som er uklare og unike. David Kolb gjorde erfaringslæringen til en syklus, og Chris Argyris viste hvordan vi handler etter andre teorier enn dem vi bekjenner oss til. I Norge gjorde Gunnar Handal og Per Lauvås dette til en strategi for veiledning i lærerutdanningen. Retningen har dermed gått fra skolen til profesjonene, og fra demokratiet som mål til refleksjonen som arbeidsform. Kritikerne spør om noe gikk tapt på veien: om refleksjon over egen praksis kan erstatte den felles, politiske undersøkelsen av hva skolen er til for.
          `,
        },
      },
    },

    main: {
      "Pragmatismen": {
        main: {
          description: `
            Pragmatismen er den filosofiske retningen som Peirce grunnla i 1870-årene, James gjorde kjent fra 1898 og Dewey utviklet til en filosofi om erfaring, undersøkelse og demokrati. Den pragmatiske maksimen sier at meningen med et begrep ligger i de praktiske virkningene det har. Kunnskap er ikke et speilbilde av en ferdig verden, men et redskap for å handle, og den er alltid feilbarlig og åpen for revisjon. Dewey angrep det han kalte tilskuerteorien om kunnskap, der den som vet står utenfor det som blir kjent.

            For pedagogikken fikk pragmatismen avgjørende følger. Hvis tenkning begynner i et problem og kunnskap prøves i handling, må læring skje gjennom undersøkelse, og skolen må gi elevene ekte problemer å arbeide med. Hvis mening og selvet blir til i samhandling, slik Mead viste, er skolen et sosialt fellesskap og ikke bare et sted for overføring av kunnskap. Pragmatismen ga dermed progressivismen sin kunnskapsteori. Retningen hadde en lang pause i amerikansk filosofi etter 1950, men fikk en renessanse fra 1980-tallet gjennom Richard Rorty og andre, og en sterk interesse i utdanningsforskningen, blant annet gjennom Gert Biestas lesning av Dewey.
          `,
          activeFrom: 1870,
          activeTo: 1910,
          era: "ca. 1870–1910",
          samfunn: `
            USA ble etter borgerkrigen en industriell stormakt med store byer, store selskaper og en voldsom innvandring. Darwins evolusjonsteori utfordret religiøse og filosofiske gamle sannheter, og de nye forskningsuniversitetene etter tysk mønster, med Johns Hopkins (1876) som det første, ga vitenskapen en ny plass i kulturen.
          `,
          skole: `
            Fellesskolen var bygd ut, og videregående skole vokste raskt. Barnestudiene under G. Stanley Hall og den nye psykologien gjorde barnets utvikling til et forskningsfelt, og herbartianismen dominerte lærerutdanningen. Pragmatismen ga et alternativ: Deweys laboratorieskole i Chicago (1896) var tenkt som et eksperiment der filosofien ble prøvd i praksis.
          `,
          kilder: [
            snl("https://snl.no/pragmatisme", "Tomas Stølen"),
            sep("https://plato.stanford.edu/entries/pragmatism/", "Catherine Legg og Christopher Hookway"),
            iep("https://iep.utm.edu/pragmati/"),
          ],
        },
      },

      "Progressivismen": {
        main: {
          description: `
            Progressivismen er samlebetegnelsen for den pedagogiske reformbevegelsen i USA fra omkring 1896, da Deweys laboratorieskole åpnet, til 1955, da Progressive Education Association (stiftet 1919) ble nedlagt. Den hadde sitt teoretiske tyngdepunkt hos Dewey, men omfattet svært ulike strømninger: barnesentrerte skoler som gjorde elevens interesser til utgangspunkt, prosjektmetoden til Kilpatrick, sosialrekonstruksjonister som Counts, og en administrativ progressivisme som ville gjøre skolen effektiv og vitenskapelig styrt gjennom tester, nivådeling og yrkesretting.

            Lawrence Cremin skrev bevegelsens klassiske historie (1961) som en del av den store progressive reformbølgen i amerikansk politikk. Senere forskere, blant dem David Tyack og David Labaree, har vist at den administrative grenen fikk størst gjennomslag i skolens organisering, mens den pedagogiske fikk lærerutdanningenes retorikk. Den åtteårige studien (1933–1941) av progressive videregående skoler tydet på at elevene klarte seg minst like godt på college. Etter Sputnik i 1957 ble progressivismen gitt skylden for svak faglighet, en anklage som går igjen i amerikansk og europeisk skoledebatt. I Norden fikk progressivismen betydning gjennom arbeidsskolen og senere gjennom elevaktive og tverrfaglige arbeidsmåter.
          `,
          activeFrom: 1896,
          activeTo: 1955,
          era: "ca. 1896–1955",
          samfunn: `
            Den progressive æra (ca. 1890–1920) var en reformbølge mot korrupsjon, monopoler og fattigdom i industrisamfunnet, med tro på vitenskap, eksperter og effektivitet. Masseinnvandringen gjorde skolen til et sted for amerikanisering. Første verdenskrig, depresjonen og New Deal ga nye spørsmål om skolens rolle i et demokrati i krise.
          `,
          skole: `
            Videregående skole ble en massskole, og nivådeling, intelligenstester og yrkesopplæring kom inn. Byer og forsøksskoler prøvde nye modeller, som Gary-planen, Winnetka og Dalton-planen. Lærerutdanningene, særlig Teachers College i New York, gjorde progressive ideer til pensum for en hel generasjon lærere.
          `,
          kilder: [
            brit("https://www.britannica.com/topic/progressive-education"),
            CREMIN,
            LABAREE,
          ],
        },
      },

      "Prosjektpedagogikken": {
        main: {
          description: `
            Prosjektpedagogikken gjør et prosjekt, et selvstendig og målrettet arbeid med et problem eller produkt, til den sentrale arbeidsformen. Michael Knoll har vist at prosjektet som metode er eldre enn det progressive programmet: det ble brukt i arkitekt- og ingeniørutdanning fra 1700-tallet og i amerikansk landbruksundervisning før Kilpatrick ga det en allmenn pedagogisk teori i artikkelen «The Project Method» (1918). Hos Kilpatrick er prosjektet «helhjertet, målrettet aktivitet i et sosialt miljø», og elevens egen hensikt er avgjørende.

            Den andre store bølgen kom rundt 1970. I Danmark ble problemorientert og deltakerstyrt prosjektarbeid grunnlaget for de nye universitetene i Roskilde og Aalborg, med Knud Illeris som teoretiker og Oskar Negts eksemplariske læring som politisk begrunnelse: problemene skulle ha samfunnsmessig relevans og ta utgangspunkt i deltakernes erfaringer. I medisinen utviklet Howard Barrows problembasert læring ved McMaster fra 1969. I Norge ble tema- og prosjektarbeid anbefalt i mønsterplanene fra 1970- og 80-tallet og fikk et fast omfang i L97. Forskningen har diskutert om prosjektarbeid fremmer dybdeforståelse eller bare aktivitet, og om lite styrte prosjekter øker forskjellene mellom elevene.
          `,
          activeFrom: 1918,
          activeTo: 1990,
          era: "1918; bølge ca. 1970–1990",
          samfunn: `
            Den første bølgen hørte til den progressive æra i USA. Den andre fulgte studentopprøret, kritikken av autoritære institusjoner og kravet om deltakerdemokrati rundt 1970. Universitetene ble utvidet for nye grupper, og fagbevegelsen og voksenopplæringen søkte former for læring som tok arbeidernes erfaringer på alvor.
          `,
          skole: `
            I USA ble prosjekter vanlige i progressive skoler i mellomkrigstiden. I Norden ble prosjektarbeid en hovedform ved nye universiteter og høgskoler fra 1970-tallet, og problembasert læring ble tatt opp i medisin og andre profesjonsutdanninger. I norsk grunnskole ble tema- og prosjektarbeid anbefalt i mønsterplanene og fikk et fast omfang av undervisningstiden i L97.
          `,
          kilder: [
            snl("https://snl.no/problembasert_l%C3%A6ring"),
            KNOLL,
            bok("Illeris, Knud. Problemorientering og deltagerstyring. Oplæg til en alternativ didaktik. Munksgaard, 1974."),
          ],
        },
      },

      "Refleksiv praksis": {
        main: {
          description: `
            Refleksiv praksis betegner tradisjonen som ser profesjonell kunnskap som noe som utvikles gjennom erfaring og refleksjon over den, mer enn gjennom anvendelse av teori. Utgangspunktet er Deweys definisjon av refleksiv tenkning i *How We Think* (1910), men tradisjonen tok form med Donald Schöns *The Reflective Practitioner* (1983), som skilte mellom refleksjon i og over handling, og med David Kolbs modell av erfaringslæring (1984). Chris Argyris og Schön ga den et begrepsapparat for forskjellen mellom de teoriene vi bekjenner oss til, og dem vi handler etter.

            Fra midten av 1980-tallet ble refleksjon et nøkkelord i lærerutdanningen internasjonalt, blant annet hos Kenneth Zeichner og Daniel Liston, og i sykepleie, sosialt arbeid og ledelse. I Norge utviklet Gunnar Handal og Per Lauvås begrepet praktisk yrkesteori og en strategi for veiledning som har preget lærerutdanningen siden 1983. Kritikken har vært at refleksjon ble så allment at det mistet presisjon, at det ble et krav om å bekjenne og dokumentere, og at det gjør læreres problemer til individuelle når de kan være strukturelle. Lynn Fendler har kalt den refleksive læreren en figur i et speilkabinett.
          `,
          activeFrom: 1983,
          activeTo: null,
          era: "ca. 1983–",
          samfunn: `
            Kunnskapssamfunnet, livslang læring og en tillitskrise for profesjonene preget 1980-tallet. Profesjonene ble både mer akademiske og mer styrt av mål og resultater, og arbeidslivet etterspurte læring i organisasjoner. Refleksjon ble svaret på spørsmålet om hvordan erfaring kan bli til kunnskap uten at den blir redusert til regler.
          `,
          skole: `
            Tradisjonen har særlig preget lærerutdanningen og andre profesjonsutdanninger, gjennom veiledet praksis, refleksjonslogger og mapper. I Norge har veiledning av lærerstudenter etter Handal og Lauvås vært en fast del av lærerutdanningen, og fra 2000-tallet ble det bygd ut en ordning for veiledning av nyutdannede lærere.
          `,
          kilder: [
            SCHON,
            LAUVAS,
            bok("Fendler, Lynn. «Teacher Reflection in a Hall of Mirrors: Historical Influences and Political Reverberations.» Educational Researcher 32, nr. 3 (2003): 16–25."),
          ],
        },
      },
    },
  },

  edgeDescriptions: {
    empirisme__pragmatisme: {
      description: `
        Pragmatistene sto i den britiske empirismens tradisjon, og James tilegnet *Pragmatism* (1907) til John Stuart Mill. Men de avviste empirismens bilde av erfaringen som passive sanseinntrykk. For Dewey er erfaring en aktiv vekselvirkning mellom organisme og omgivelser, og kunnskap blir til gjennom handling og undersøkelse.
      `,
      kilder: [sep("https://plato.stanford.edu/entries/pragmatism/", "Catherine Legg og Christopher Hookway")],
    },
    pragmatisme__progressivisme: {
      description: `
        Dewey gjorde pragmatismens teori om undersøkelse til en teori om skolen. Laboratorieskolen i Chicago (1896) var tenkt som et eksperiment der filosofien skulle prøves i praksis, og *My Pedagogic Creed* (1897) og *The School and Society* (1899) ble progressivismens første programskrifter.
      `,
      kilder: [sep("https://plato.stanford.edu/entries/dewey/", "David Hildebrand")],
    },
    herbartianisme__progressivisme: {
      description: `
        Herbartianismen dominerte amerikansk lærerutdanning på 1890-tallet, og Dewey var med i det nasjonale Herbart-selskapet. I essayet om interesse og vilje (1896) kritiserte han likevel herbartianernes interessebegrep for å gjøre interesse til noe læreren skaper med metodiske grep. Progressivismen definerte seg mot de faste formaltrinnene.
      `,
      kilder: [CREMIN],
    },
    progressivisme__prosjekt: {
      description: `
        Kilpatrick, Deweys elev ved Teachers College, gjorde den progressive tanken om læring gjennom målrettet aktivitet til en allmenn metode i «The Project Method» (1918). Han la mer vekt på elevens egen hensikt enn Dewey, som var mer opptatt av sammenhengen mellom erfaringen og fagene.
      `,
      kilder: [KNOLL, snl("https://snl.no/William_Heard_Kilpatrick", "Kaare Skagen")],
    },
    progressivisme__refleksjon: {
      description: `
        Deweys definisjon av refleksiv tenkning i *How We Think* (1910) er utgangspunktet for tradisjonen. Schön skrev doktoravhandling om Deweys teori om undersøkelse, og Kolb bygde sin læringssyklus blant annet på Deweys erfaringsbegrep.
      `,
      kilder: [SCHON],
    },
  },
};
