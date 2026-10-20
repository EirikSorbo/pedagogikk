// Runde 4 — reformer og milepæler (tech), fase 6, skrevet av Opus 2026-10-21.
// Kategoriene er TECH_CATEGORIES i js/ui/ui-tech.js: Lov, Læreplan, Institusjon,
// Læremiddel, Metode, Norsk spor. Alt som gjelder norsk skole, står som «Norsk spor»,
// slik at kategorien blir den norske tidslinja. `type: "hendelse"` er en viktig
// hendelse; resten er reformer og milepæler.
import { snl, sep, side, bok } from "../kilder.mjs";

const UH = snl("https://snl.no/norsk_utdanningshistorie");
const TELHAUG = bok("Telhaug, Alfred Oftedal og Odd Asbjørn Mediås. Grunnskolen som nasjonsbygger: Fra statspietisme til nyliberalisme. Abstrakt, 2003.");
const MELTON = bok("Melton, James Van Horn. Absolutism and the Eighteenth-Century Origins of Compulsory Schooling in Prussia and Austria. Cambridge University Press, 1988.");
const KLIEBARD = bok("Kliebard, Herbert M. The Struggle for the American Curriculum, 1893–1958. Routledge & Kegan Paul, 1986.");
const CREMIN80 = bok("Cremin, Lawrence A. American Education: The National Experience, 1783–1876. Harper & Row, 1980.");

const r = (name, category, aar, description, kilder, { type = "innovasjon", iBruk = aar, etikett } = {}) => ({
  name, category, type, inventedYear: aar, adoptedYear: iBruk,
  ...(etikett ? { adoptedLabel: etikett } : {}),
  description, kilder,
});

export default {
  tech: [
    // --- Institusjoner -----------------------------------------------------
    r("Platons akademi", "Institusjon", -387, `
      Platon grunnla rundt 387 f.Kr. en skole i lunden Akademeia utenfor Athen, der eldre og yngre drev matematikk, dialektikk og politisk filosofi sammen. Akademiet regnes som forbildet for senere høyere skoler, og ordet «akademi» kommer herfra. Skolen besto i ulike former til langt inn i senantikken.
    `, [snl("https://snl.no/Platon")], { etikett: "ca. 387 f.Kr." }),

    r("Aristoteles' Lykeion", "Institusjon", -335, `
      Aristoteles grunnla sin skole i Lykeion i Athen i 335 f.Kr. Undervisningen foregikk ofte gående (derav navnet peripatetikerne), og skolen drev systematisk forskning i biologi, politikk og logikk med samlinger av materiale. Lykeion er et tidlig eksempel på en skole der forskning og undervisning hører sammen.
    `, [snl("https://snl.no/Lykeion")], { etikett: "335 f.Kr." }),

    r("Middelalderens universiteter", "Institusjon", 1150, `
      Universitetene vokste fram rundt 1200 som laug (*universitas*) av lærere og studenter, i Bologna (jus), Paris (teologi og de frie kunster) og Oxford. Med fakultetene for de frie kunster, teologi, jus og medisin, forelesning og disputas, grader og lærerett (*licentia docendi*) ble de forbildet for alle senere universiteter. Norden fikk sine første i Uppsala (1477) og København (1479).
    `, [bok("Rashdall, Hastings. The Universities of Europe in the Middle Ages. Clarendon Press, 1895."), snl("https://snl.no/katedralskole")], { iBruk: 1200, etikett: "rundt 1200" }),

    r("Collegio Romano", "Institusjon", 1551, `
      Jesuittenes kollegium i Roma, grunnlagt av Ignatius av Loyola i 1551, ble modellen for ordenens hundrevis av skoler og for *Ratio studiorum* (1599). Undervisningen var gratis og gikk fra grammatikk og humaniora til filosofi og teologi. Kollegiet ble senere Det pavelige gregorianske universitet.
    `, [snl("https://snl.no/Jesuittordenen")]),

    r("Franckes stiftelser i Halle", "Institusjon", 1695, `
      August Hermann Francke begynte i 1695 en fattigskole i Glaucha ved Halle, og bygde den ut til et helt kompleks: barnehjem (1698), latinskole, pedagogium for adelen, pikeskole, lærerseminar, apotek og trykkeri. Stiftelsene ble Europas mest beundrede skoleanstalt og forbildet for pietistiske skoler og skolelover i Preussen og Danmark-Norge.
    `, [snl("https://snl.no/August_Hermann_Francke")], { iBruk: 1698 }),

    r("Philanthropinum i Dessau", "Institusjon", 1774, `
      Johann Bernhard Basedows skole i Dessau (1774–1793) skulle gjøre opplysningstidens oppdragelse til praksis: anskuelse, lek, kroppsøving, levende språk og realfag, og en religionsundervisning felles for konfesjonene. Den offentlige eksamenen i 1776 gjorde skolen kjent i hele Europa, og den ble forbildet for filantropistenes skoler, blant dem Schnepfenthal.
    `, [snl("https://snl.no/Johann_Bernhard_Basedow"), snl("https://snl.no/filantropisme")]),

    r("Universitetet i Berlin", "Institusjon", 1810, `
      Universitetet i Berlin, grunnlagt i 1810 under Wilhelm von Humboldts ledelse av den prøyssiske undervisningsseksjonen, ble symbolet på det moderne forskningsuniversitetet: forskningens og undervisningens enhet, akademisk frihet og dannelse gjennom vitenskap. Forskningen har vist at mye av «Humboldt-modellen» ble formulert senere, men universitetet ble et internasjonalt forbilde.
    `, [snl("https://snl.no/Wilhelm_von_Humboldt"), sep("https://plato.stanford.edu/entries/wilhelm-humboldt/")]),

    r("Den første barnehagen", "Institusjon", 1837, `
      Friedrich Fröbel åpnet i 1837 en anstalt for småbarns lek og sysselsetting i Bad Blankenburg i Thüringen, og ga den i 1840 navnet *Kindergarten*. Institusjonen var verken skole eller barneasyl, men et pedagogisk rom for lek, og ble forbildet for barnehager i hele verden, også i Norden. Preussen forbød barnehagene i 1851–1860.
    `, [snl("https://snl.no/Friedrich_Wilhelm_August_Fr%C3%B6bel"), snl("https://snl.no/barnehagepedagogikk")], { iBruk: 1840 }),

    r("Rødding høyskole", "Institusjon", 1844, `
      Den første folkehøgskolen ble åpnet i Rødding i Sønderjylland i 1844, inspirert av Grundtvigs tanker om en skole for livet, og som et dansk svar i den nasjonale striden om Slesvig. Den ble forbildet for folkehøgskolene i hele Norden, også Sagatun i Norge (1864).
    `, [snl("https://snl.no/folkeh%C3%B8gskole"), snl("https://snl.no/Nikolai_Frederik_Severin_Grundtvig")]),

    r("Hull House", "Institusjon", 1889, `
      Jane Addams og Ellen Gates Starr grunnla Hull House i et innvandrerkvarter i Chicago i 1889, et nabolagssenter med kurs, klubber, barnehage, teater og sosialt arbeid. Hull House ble et laboratorium for den progressive bevegelsen og for Deweys tenkning om utdanning og demokrati.
    `, [snl("https://snl.no/Jane_Addams")]),

    r("Laboratorieskolen i Chicago", "Institusjon", 1896, `
      John Dewey åpnet i 1896 en forsøksskole ved University of Chicago, der filosofien og psykologien hans skulle prøves. Barna arbeidet med matlaging, veving, snekring og hage som innganger til historie, naturfag og samarbeid. Skolen ble et forbilde for den progressive bevegelsen, og Dewey forlot den og Chicago i 1904.
    `, [snl("https://snl.no/John_Dewey"), sep("https://plato.stanford.edu/entries/dewey/")]),

    r("Casa dei Bambini", "Institusjon", 1907, `
      Maria Montessori åpnet den første *Casa dei Bambini* («barnas hus») i arbeiderkvarteret San Lorenzo i Roma i 1907, for barn mellom tre og seks år. Med et forberedt miljø, selvkorrigerende materiell og en lærer som observerer, ble huset utgangspunktet for montessoribevegelsen i hele verden.
    `, [snl("https://snl.no/Maria_Montessori")]),

    r("Institut Jean-Jacques Rousseau", "Institusjon", 1912, `
      Édouard Claparède grunnla i 1912 et institutt for pedagogikk og barnepsykologi i Genève, oppkalt etter Rousseau. Det ble et senter for den nye pedagogikken og barneforskningen, og Jean Piaget arbeidet der fra 1921. Instituttet lå bak Det internasjonale utdanningsbyrået (1925), som Piaget ledet.
    `, [snl("https://snl.no/Jean_Piaget")]),

    r("Den første Waldorfskolen", "Institusjon", 1919, `
      Den første Waldorfskolen åpnet i Stuttgart i 1919 for barna til arbeiderne ved Emil Molts sigarettfabrikk Waldorf-Astoria, med Rudolf Steiner som pedagogisk leder. Steinerskolene er i dag blant verdens mest utbredte alternative skoler; den første norske kom i Oslo i 1926.
    `, [snl("https://snl.no/steinerskoler"), snl("https://snl.no/Rudolf_Steiner")]),

    r("Summerhill", "Institusjon", 1921, `
      A.S. Neill grunnla Summerhill i 1921, og skolen flyttet til Leiston i Suffolk i 1927. Med frivillig undervisning og et skolemøte der barn og voksne har like stemmer, ble den verdens mest kjente frie skole og et forbilde for den antiautoritære bølgen etter 1960.
    `, [snl("https://snl.no/Alexander_Sutherland_Neill")]),

    r("Problembasert medisinstudium ved McMaster", "Institusjon", 1969, `
      Det nye medisinstudiet ved McMaster University i Canada tok i 1969 i bruk problembasert læring, der studentene arbeider i små grupper med pasientkasus og selv finner ut hva de må lære. Modellen spredte seg til medisinsk utdanning over hele verden og senere til andre profesjonsutdanninger.
    `, [snl("https://snl.no/problembasert_l%C3%A6ring")]),

    r("Roskilde Universitetscenter", "Institusjon", 1972, `
      Roskilde Universitetscenter (1972) og Aalborg Universitetscenter (1974) bygde hele studiet på problemorientert og deltakerstyrt prosjektarbeid i grupper, teoretisert av Knud Illeris. Modellen ble et nordisk forbilde for prosjektpedagogikk i høyere utdanning.
    `, [bok("Illeris, Knud. Problemorientering og deltagerstyring: Oplæg til en alternativ didaktik. Munksgaard, 1974.")]),

    r("PISA", "Institusjon", 2000, `
      OECDs Programme for International Student Assessment tester hvert tredje år 15-åringers kompetanse i lesing, matematikk og naturfag, første gang i 2000. PISA har gjort internasjonale sammenligninger til et sentralt redskap i utdanningspolitikken, og har både utløst reformer og blitt kritisert for å forenkle og styre det skolen skal være.
    `, [snl("https://snl.no/PISA_-_internasjonal_skoletest")]),

    // --- Lover og rettigheter (internasjonalt) -----------------------------
    r("Det prøyssiske landskolereglementet", "Lov", 1763, `
      Fredrik den stores *Generallandschulreglement* (1763) påla skoleplikt for barn på landet fra fem til tretten–fjorten år, med pietistisk inspirert innhold. Det ble lite gjennomført i praksis, men er et tidlig eksempel på statlig skoleplikt, og James Van Horn Melton har vist hvordan det sprang ut av både pietisme og opplyst enevelde.
    `, [MELTON]),

    r("Den østerrikske skoleordningen", "Lov", 1774, `
      Maria Theresias *Allgemeine Schulordnung* (1774), utarbeidet av Johann Ignaz von Felbiger, innførte skoleplikt, lærerutdanning ved normalskoler og felles lærebøker i de habsburgske landene. Ordningen la grunnen for folkeskolen i store deler av Sentral-Europa.
    `, [MELTON]),

    r("Skoleplikt i Massachusetts", "Lov", 1852, `
      Massachusetts vedtok i 1852 den første allmenne skolepliktloven i USA, etter Horace Manns arbeid for en felles, offentlig skole. Innen 1918 hadde alle delstater skoleplikt.
    `, [CREMIN80]),

    r("Elementary Education Act", "Lov", 1870, `
      Den britiske skoleloven av 1870, kjent som Forster-loven, ga lokale skolestyrer ansvar for å bygge offentlige skoler der de kirkelige ikke dekket behovet. Skoleplikt kom i 1880 og gratis skole i 1891. Loven markerer starten på det offentlige skolevesenet i England og Wales.
    `, [bok("Simon, Brian. Education and the Labour Movement, 1870–1920. Lawrence & Wishart, 1965.")]),

    r("Ferry-lovene", "Lov", 1881, `
      Lovene som er oppkalt etter den franske undervisningsministeren Jules Ferry (1881–1882), gjorde barneskolen i Den tredje republikk gratis, obligatorisk for barn fra seks til tretten år og verdslig (*laïque*): religionsundervisningen ble tatt ut av skolen og erstattet med moral og borgerkunnskap. Lovene er grunnlaget for den republikanske skolen i Frankrike.
    `, [snl("https://snl.no/Jules_Fran%C3%A7ois_Camille_Ferry")], { iBruk: 1882, etikett: "1881–1882" }),

    r("Verdenserklæringen om menneskerettigheter, artikkel 26", "Lov", 1948, `
      FNs verdenserklæring om menneskerettigheter (1948) slår i artikkel 26 fast at alle har rett til utdanning, at grunnutdanningen skal være gratis og obligatorisk, og at utdanningen skal ta sikte på den fulle utvikling av menneskets personlighet og styrke respekten for menneskerettighetene. Artikkelen er grunnlaget for senere konvensjoner om retten til utdanning.
    `, [snl("https://snl.no/Verdenserkl%C3%A6ringen_om_menneskerettigheter")]),

    r("Brown mot Board of Education", "Lov", 1954, `
      USAs høyesterett slo i 1954 fast at raseskille i offentlige skoler er grunnlovsstridig, fordi atskilte skoler i seg selv er ulike. Dommen ble et vendepunkt for borgerrettsbevegelsen, men integreringen av skolene møtte hard motstand og gikk langsomt i tiårene etter.
    `, [bok("Kluger, Richard. Simple Justice: The History of Brown v. Board of Education and Black America's Struggle for Equality. Knopf, 1976.")], { type: "hendelse" }),

    r("Barnekonvensjonen", "Lov", 1989, `
      FNs konvensjon om barnets rettigheter ble vedtatt i 1989 og trådte i kraft i 1990. Artikkel 28 og 29 gir barn rett til utdanning og sier at utdanningen skal utvikle barnets personlighet, evner og respekt for menneskerettighetene, og artikkel 12 gir barn rett til å bli hørt. Norge ratifiserte konvensjonen i 1991 og gjorde den til norsk lov i 2003.
    `, [snl("https://snl.no/Barnekonvensjonen")]),

    r("Salamanca-erklæringen", "Lov", 1994, `
      UNESCOs verdenskonferanse om spesialundervisning i Salamanca (1994) vedtok en erklæring om at elever med særskilte behov skal ha tilgang til vanlige skoler, og at inkluderende skoler er det mest effektive middelet mot diskriminering. Erklæringen gjorde inkluderende opplæring til et globalt mål.
    `, [bok("UNESCO. The Salamanca Statement and Framework for Action on Special Needs Education. UNESCO, 1994.")], { type: "hendelse" }),

    r("No Child Left Behind", "Lov", 2002, `
      Den amerikanske loven fra 2002 krevde årlige tester i lesing og matematikk, at skolene skulle vise framgang for alle elevgrupper, og sanksjoner mot skoler som ikke nådde målene, og den krevde «vitenskapelig basert» undervisning. Loven ble et symbol på testbasert ansvarliggjøring og ble erstattet i 2015. Diane Ravitch, som først støttet den, ble en av de skarpeste kritikerne.
    `, [bok("Ravitch, Diane. The Death and Life of the Great American School System: How Testing and Choice Are Undermining Education. Basic Books, 2010.")]),

    r("FN-konvensjonen om rettighetene til mennesker med nedsatt funksjonsevne", "Lov", 2006, `
      Konvensjonen ble vedtatt av FN i 2006, og artikkel 24 forplikter statene til et inkluderende utdanningssystem på alle nivåer, med rimelig tilrettelegging. Norge ratifiserte konvensjonen i 2013. Den har gitt inkluderingsdebatten et rettighetsgrunnlag.
    `, [bok("De forente nasjoner. Convention on the Rights of Persons with Disabilities. FN, 2006.")]),

    // --- Læreplaner --------------------------------------------------------
    r("Ratio studiorum", "Læreplan", 1599, `
      Jesuittenes studieordning fra 1599 ga ordenens kollegier en felles plan: klasser i grammatikk, humaniora og retorikk, så filosofi og teologi, med forelesning, repetisjon, kappestrid mellom elevene og skoleteater. *Ratio studiorum* er et av de første omfattende læreplanverkene i europeisk historie og preget eliteutdanningen i katolske land i to hundre år.
    `, [snl("https://snl.no/Jesuittordenen"), bok("O'Malley, John W. The First Jesuits. Harvard University Press, 1993.")]),

    r("Committee of Ten", "Læreplan", 1893, `
      En komité ledet av Harvard-rektor Charles W. Eliot la i 1893 fram anbefalinger for den amerikanske high school: et felles akademisk pensum for alle elever, enten de skulle studere videre eller ikke. Rapporten ble startpunktet for den lange striden om den amerikanske læreplanen som Herbert Kliebard har skrevet historien om.
    `, [KLIEBARD], { type: "hendelse" }),

    r("Cardinal Principles of Secondary Education", "Læreplan", 1918, `
      Rapporten fra 1918 ga den amerikanske high school sju mål, fra helse og grunnleggende ferdigheter til yrke, borgerskap og fritid, og vendte seg bort fra Committee of Tens akademiske pensum mot en skole tilpasset en bred elevmasse. Den ble et nøkkeldokument for de administrative progressive og for differensiering etter elevenes antatte framtid.
    `, [KLIEBARD]),

    // --- Læremidler --------------------------------------------------------
    r("Orbis sensualium pictus", "Læremiddel", 1658, `
      Comenius' billedleksikon fra 1658 er regnet som den første illustrerte læreboka for barn: hvert bilde av verden, fra Gud og naturen til håndverk og samfunn, har tekst på morsmålet og latin. Boka virkeliggjorde prinsippet om ting før ord og ble brukt i hele Europa i over hundre år.
    `, [snl("https://snl.no/Johann_Amos_Comenius"), snl("https://snl.no/anskuelsesundervisning")]),

    r("Pontoppidans forklaring", "Norsk spor", 1737, `
      Erik Pontoppidans *Sandhed til Gudfrygtighed* (1737), en forklaring til Luthers lille katekisme i spørsmål og svar, ble innført som lærebok i konfirmasjonsundervisningen i Danmark-Norge og brukt i Norge i mer enn hundre år. Den var pietismens viktigste lærebok og det mange nordmenn lærte å lese i.
    `, [snl("https://snl.no/konfirmasjon"), UH]),

    r("Elementarwerk", "Læremiddel", 1774, `
      Basedows *Elementarwerk* (1774) var et billedverk for hele verden, med Daniel Chodowieckis kobberstikk og tekst for barn og foreldre, i Comenius' tradisjon. Det skulle gjøre anskuelse og samtale mulig hjemme og i skolen, og var filantropismens programverk.
    `, [snl("https://snl.no/Johann_Bernhard_Basedow")]),

    r("Fröbels lekegaver", "Læremiddel", 1837, `
      Fröbels lekegaver (*Spielgaben*) er en serie leker, fra myke baller via kule, terning og sylinder til byggeklosser, og sysselsettinger som fletting, bretting og legging. De skulle la barnet oppdage form, tall og sammenheng gjennom lek. Norman Brosterman har vist hvordan generasjoner av barn, blant dem senere kunstnere og arkitekter, lærte formspråk av dem.
    `, [snl("https://snl.no/Friedrich_Wilhelm_August_Fr%C3%B6bel"), bok("Brosterman, Norman. Inventing Kindergarten. Harry N. Abrams, 1997.")]),

    r("Undervisningsmaskinen", "Læremiddel", 1926, `
      Sidney Pressey presenterte i 1926 en maskin som stilte flervalgsspørsmål og bare gikk videre når eleven svarte riktig, og B.F. Skinner lanserte i 1950-årene undervisningsmaskiner og programmerte lærebøker bygd på forsterkning. Maskinene fikk kort levetid, men ideen om trinnvis, selvrettende undervisning lever videre i adaptive dataprogrammer.
    `, [snl("https://snl.no/programmert_undervisning"), snl("https://snl.no/B.F._Skinner")], { iBruk: 1954, etikett: "1926; bølge rundt 1960" }),

    r("Logo", "Læremiddel", 1967, `
      Programmeringsspråket Logo ble utviklet fra 1967 av Seymour Papert og medarbeidere, for at barn skulle lære matematikk og tenkning ved å programmere en «skilpadde». Paperts *Mindstorms* (1980) gjorde Logo til et symbol på konstruksjonismen, og det er en forløper for programmering i skolen.
    `, [snl("https://snl.no/Logo_-_programmeringsspr%C3%A5k")]),

    // --- Metoder -----------------------------------------------------------
    r("Vekselundervisning", "Metode", 1798, `
      Vekselundervisningen (*monitorial system*), utviklet av Andrew Bell i Madras og Joseph Lancaster i London rundt 1800, lot flinke elever undervise grupper av andre elever, så én lærer kunne undervise hundrevis. Metoden var billig og ble brukt over hele verden, også i Norge, men ble kritisert for mekanisk drill.
    `, [snl("https://snl.no/Andrew_Bell")], { iBruk: 1803, etikett: "rundt 1800" }),

    r("Formaltrinnene", "Metode", 1865, `
      Herbartianerne gjorde Herbarts læringstrinn til faste trinn for en undervisningsøkt: Ziller (1865) delte dem i fem, og Wilhelm Rein ga dem formen forberedelse, framstilling, sammenknytning, sammenfatning og anvendelse. Formaltrinnene preget lærerutdanningen i Tyskland, Norden og USA rundt 1900 og ble reformpedagogikkens fiendebilde.
    `, [snl("https://snl.no/Johann_Friedrich_Herbart")]),

    r("Binet-Simon-skalaen", "Metode", 1905, `
      Alfred Binet og Théodore Simon laget i 1905 den første brukbare intelligensskalaen, for å finne barn som trengte særskilt undervisning. Skalaen ble videreutviklet i USA (Stanford-Binet, 1916) og brukt til sortering og nivådeling, langt utover det Binet hadde ment.
    `, [snl("https://snl.no/Alfred_Binet")]),

    r("Arbeidsskolen", "Metode", 1912, `
      Georg Kerschensteiner (*Begriff der Arbeitsschule*, 1912) og andre reformpedagoger gjorde praktisk og selvstendig arbeid til et prinsipp for hele skolen. I Norge prøvde Anna Sethne arbeidsskolen ut på Sagene skole, og Normalplanen av 1939 gjorde arbeidsskoleprinsippet til en del av folkeskolen.
    `, [snl("https://snl.no/arbeidsskole_-_pedagogikk"), snl("https://snl.no/Georg_Kerschensteiner")]),

    r("Prosjektmetoden", "Metode", 1918, `
      William H. Kilpatricks artikkel «The Project Method» (1918) gjorde prosjektet, en helhjertet og målrettet aktivitet i et sosialt miljø, til grunnenheten i undervisningen. Metoden ble svært populær i amerikanske lærerutdanninger og fikk en ny bølge i Europa rundt 1970.
    `, [snl("https://snl.no/William_Heard_Kilpatrick"), snl("https://snl.no/prosjektarbeid_-_pedagogikk")]),

    r("Dalton-planen", "Metode", 1920, `
      Helen Parkhurst utviklet Dalton-planen ved en skole i Dalton i Massachusetts (1920): klasseundervisningen ble erstattet av fagrom, månedsoppgaver og en kontrakt mellom elev og lærer om arbeidet. Planen fikk stor utbredelse i 1920-årene, også i Europa og Sovjetunionen.
    `, [snl("https://snl.no/Dalton-metoden_-_pedagogikk")]),

    r("Blooms taksonomi", "Metode", 1956, `
      *Taxonomy of Educational Objectives* (1956), redigert av Benjamin Bloom, ordnet de kognitive læringsmålene i seks nivåer fra kunnskap til vurdering. Taksonomien ble et av de mest brukte redskapene i læreplanarbeid, prøvekonstruksjon og undervisningsplanlegging, og ble revidert i 2001.
    `, [bok("Bloom, Benjamin S. (red.). Taxonomy of Educational Objectives. Handbook I: Cognitive Domain. David McKay, 1956.")]),

    r("Synlig læring", "Metode", 2009, `
      John Hatties *Visible Learning* (2009) syntetiserte over 800 metaanalyser og rangerte faktorer etter effekt på elevers prestasjoner. Budskapet, at lærerens tilbakemelding og en synlig læringsprosess betyr mest, fikk stor innflytelse på skoleutvikling, også i Norge, mens metoden er kritisert av statistikere og pedagoger.
    `, [bok("Hattie, John. Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement. Routledge, 2009.")], { type: "hendelse" }),

    // --- Norsk spor --------------------------------------------------------
    r("Katedralskolene", "Norsk spor", 1153, `
      De første katedralskolene i Norge, i Trondheim, Oslo og Bergen og noe senere i Stavanger og Hamar, ble grunnlagt kort etter at Norge ble eget erkebispedømme i 1152. De skulle utdanne prester, med latin og de sju frie kunster, og ble etter reformasjonen latinskoler. Flere av dem lever i dag som videregående skoler med navnet katedralskole.
    `, [snl("https://snl.no/katedralskole")], { etikett: "kort etter 1152" }),

    r("Kirkeordinansen", "Norsk spor", 1537, `
      Med reformasjonen i 1536–1537 fikk Danmark-Norge en luthersk statskirke, og kirkeordinansen (vedtatt 1537, latinsk 1539) påla latinskoler i bispebyene og kristendomsopplæring av allmuen gjennom katekismen. Den la grunnen for den lutherske skolens to spor: latinskolen for embetsstanden og trosopplæringen for folket.
    `, [UH, snl("https://snl.no/Johannes_Bugenhagen")], { iBruk: 1539, etikett: "1537/1539" }),

    r("Konfirmasjonen", "Norsk spor", 1736, `
      Christian VI gjorde i 1736 konfirmasjonen obligatorisk i Danmark-Norge, med prøving i kristendomskunnskap og lesing. Uten konfirmasjon kunne man ikke gifte seg, ta tjeneste eller vitne i retten, og kravet om å kunne lese katekismen gjorde skole nødvendig. Konfirmasjonen ble opptakten til skoleforordningen av 1739.
    `, [snl("https://snl.no/konfirmasjon"), snl("https://snl.no/Christian_6.")]),

    r("Skoleforordningen av 1739", "Norsk spor", 1739, `
      Forordningen om skolene på landet i Norge (1739) innførte allmueskole med skoleplikt fram til konfirmasjonen, med katekisme og lesing som hovedinnhold. Etter motstand mot kostnadene ga en forordning av 1741 prestegjeldene ansvaret for å lage egne skoleplaner, og omgangsskolen ble hovedformen. Forordningen regnes som et av de tidligste eksemplene på nasjonal skoleplikt i Europa.
    `, [snl("https://snl.no/oppl%C3%A6ringsplikt"), snl("https://snl.no/allmueskole"), UH], { iBruk: 1741, etikett: "1739, endret 1741" }),

    r("Det Kongelige Frederiks Universitet", "Norsk spor", 1811, `
      Norges første universitet ble vedtatt opprettet i Christiania i 1811 og kom i gang i 1813, etter lang kamp for et eget norsk universitet. Det utdannet embetsmenn, prester og lærere til den nye staten etter 1814, og het Universitetet i Oslo fra 1939.
    `, [snl("https://snl.no/Det_Kongelige_Frederiks_Universitet"), UH], { iBruk: 1813 }),

    r("Allmueskoleloven for landet", "Norsk spor", 1827, `
      Den første norske loven om allmueskolen på landet (1827) reviderte skoleordningen fra dansketiden etter krav om bedre skole i den nye staten. Omgangsskolen var fortsatt det vanlige, men loven ga grunnlag for faste skoler der det var mulig. I 1848 kom en egen lov for byene.
    `, [UH, snl("https://snl.no/allmueskole")]),

    r("Landsskoleloven av 1860", "Norsk spor", 1860, `
      Den nye loven om allmueskolevesenet på landet (1860), utarbeidet av Hartvig Nissen, ga bygdene fast skole i stedet for omgangsskole der det var mulig, flere fag og en lesebok med verdslig innhold ved siden av katekismen. Fra 1870 gikk fire av fem barn i faste skoler.
    `, [snl("https://snl.no/Hartvig_Nissen_-_skolemann"), UH]),

    r("Sagatun folkehøgskole", "Norsk spor", 1864, `
      Herman Anker og Olaus Arvesen grunnla Norges første folkehøgskole på Sagatun ved Hamar i 1864, etter dansk grundtvigiansk mønster. Folkehøgskolene ble viktige for bondeungdommen, venstrebevegelsen og målsaken.
    `, [snl("https://snl.no/Herman_Anker"), snl("https://snl.no/Olaus_Arvesen")]),

    r("Lov om høyere allmennskoler", "Norsk spor", 1869, `
      Loven av 1869 reformerte de høyere skolene og innførte middelskolen som en egen skole med moderne fag, ved siden av gymnaset. Den var et steg mot et sammenhengende skolesystem der høyere skole kunne bygge på allmueskolen.
    `, [UH, snl("https://snl.no/middelskule")]),

    r("Loven om skoler for «abnorme» barn", "Norsk spor", 1881, `
      Loven av 1881 ga det første lovgrunnlaget for særskoler for døve, blinde og barn med utviklingshemning, med tidens ord «abnorme». Den ble revidert i 1915 og avløst av spesialskoleloven i 1951. Loven var et vern og en utestengning på én gang: barna fikk opplæring, men utenfor fellesskolen.
    `, [UH, snl("https://snl.no/spesialpedagogikk")]),

    r("Kvinner får ta examen artium", "Norsk spor", 1882, `
      I 1882 fikk kvinner rett til å ta examen artium, og fra 1884 adgang til universitetseksamener; fra 1890 kunne de søke lærerseminarene. Gymnasloven av 1896 innførte fellesundervisning av jenter og gutter i den høyere skolen, og de fleste pikeskolene ble nedlagt fram mot 1920.
    `, [UH], { type: "hendelse" }),

    r("Folkeskolelovene av 1889", "Norsk spor", 1889, `
      Lovene om folkeskolen på landet og i byene (1889) skapte en sjuårig skole som skulle være felles for barn fra alle samfunnslag, med moderne og nasjonale fag ved siden av kristendom, og skolestyrer der lekfolk satt ved siden av presten. Navnet folkeskolen erstattet allmueskolen. Lovene var en del av venstrereformene etter innføringen av parlamentarismen i 1884.
    `, [snl("https://snl.no/folkeskolen"), UH]),

    r("Gymnasloven av 1896", "Norsk spor", 1896, `
      Loven om høyere skoler (1896) gjorde middelskolen fireårig og bygde den direkte på de fem første årene i folkeskolen, og innførte fellesundervisning for jenter og gutter. Elevene kunne velge riksmål eller landsmål som hovedmål. Loven knyttet den høyere skolen til folkeskolen, et tidlig steg mot enhetsskolen.
    `, [UH, snl("https://snl.no/gymnas")]),

    r("Felles skole for alle", "Norsk spor", 1920, `
      Stortinget vedtok i mars 1920 som prinsipp at statsstøtte til høyere skoler forutsatte at elevene hadde fullført den sjuårige folkeskolen. Siden 1920 har Norge hatt samme grunnleggende skole for alle barn, et sentralt trekk ved den norske enhetsskolen.
    `, [UH, snl("https://snl.no/enhetsskole")], { type: "hendelse" }),

    r("Norges lærerhøgskole", "Norsk spor", 1922, `
      Norges lærerhøgskole ble opprettet i Trondheim i 1922 for videreutdanning av lærere, og ble i 1968 en del av Universitetet i Trondheim. Charlotte Bühler var konstituert professor der i 1939–1940.
    `, [UH, snl("https://snl.no/Charlotte_Berta_B%C3%BChler")]),

    r("Folkeskolelovene av 1936", "Norsk spor", 1936, `
      Etter femten år med utredninger og innsparinger gjennomførte Nygaardsvold-regjeringen, med Nils Hjelmtveit som kirke- og undervisningsminister, en omfattende revisjon av skolelovene fra 1935. Folkeskolelovene av 1936 ga en mer likeverdig skole i by og land, og reformene omfattet også framhaldsskole, høyere skole og yrkesskoler.
    `, [snl("https://snl.no/Nils_Hjelmtveit"), UH]),

    r("Pedagogisk forskningsinstitutt", "Norsk spor", 1938, `
      Pedagogisk forskningsinstitutt ved Universitetet i Oslo ble opprettet i 1938, med Helga Eng som første professor og bestyrer (1938–1948). Instituttet gjorde pedagogikk til et forskningsfag i Norge og var lenge sentrum for norsk utdanningsforskning.
    `, [snl("https://snl.no/Helga_Eng")]),

    r("Normalplanen av 1939", "Norsk spor", 1939, `
      Normalplanen for folkeskolen (1939) var den første felles læreplanen etter skolelovene av 1936, og bygde på reformpedagogikkens arbeidsskoleprinsipp, elevaktivitet og allsidig utvikling. Den preget folkeskolen fram til grunnskolereformene, og var et stort gjennomslag for Anna Sethne og mellomkrigstidens reformpedagoger.
    `, [snl("https://snl.no/normalplan"), snl("https://snl.no/Anna_Cathrine_Sethne")]),

    r("Spesialskoleloven", "Norsk spor", 1951, `
      Loven om spesialskoler (1951) ga et samlet lovgrunnlag for opplæring av barn med hørsels-, syns- og talehemninger, utviklingshemning og psykososiale vansker, i egne skoler. Et tillegg til folkeskolelovene i 1955 påla kommunene hjelpeundervisning. Loven ble opphevet da spesialundervisningen ble en del av grunnskolen i midten av 1970-årene.
    `, [UH, snl("https://snl.no/spesialpedagogikk")]),

    r("Felles folkeskolelov for by og land", "Norsk spor", 1959, `
      Folkeskoleloven av 1959 ga for første gang felles lovverk for skolen i by og land, og åpnet for at kommunene kunne utvide skolen til ni år. Den var et steg mot grunnskolen og en del av sentraliseringen etter krigen: fra 1950 til 1970 ble antall folkeskoler nær halvert.
    `, [UH, snl("https://snl.no/grunnskolen")]),

    r("Forsøksgymnaset i Oslo", "Norsk spor", 1967, `
      Forsøksgymnaset i Oslo ble opprettet i 1967 etter initiativ fra elever, med elevstyre gjennom allmøtet og Mosse Jørgensen som rektor. Skolen ble drevet til 2004, og et søsterforsøk fantes i Bærum (1969–1982). Den var det tydeligste norske uttrykket for den antiautoritære bølgen.
    `, [snl("https://snl.no/fors%C3%B8ksgymnas")]),

    r("Grunnskoleloven", "Norsk spor", 1969, `
      Loven om grunnskolen (1969) gjorde den niårige grunnskolen obligatorisk for alle, med barnetrinn og ungdomstrinn, og avløste folkeskolen. Utbyggingen skjedde i løpet av 1970-årene, og med den gikk den korte felles folkeskolen over i en lang felles skole.
    `, [snl("https://snl.no/grunnskolen"), UH]),

    r("Mønsterplanen av 1974", "Norsk spor", 1974, `
      Mønsterplanen for grunnskolen (1974, M74) var den første læreplanen for den niårige grunnskolen. Den avviklet nivådelingen i ungdomsskolen, la vekt på tilpasning til den enkelte elev og på lokalt planarbeid, og ble fulgt av Mønsterplanen av 1987 (M87).
    `, [snl("https://snl.no/M%C3%B8nsterplan_for_grunnskolen_1974")]),

    r("Integreringen i grunnskolen", "Norsk spor", 1975, `
      I midten av 1970-årene fikk Norge et samlet skolelovverk for alle barn: spesialskoleloven ble opphevet, og spesialundervisningen ble en del av grunnskolens ansvar. Integreringen ble begrunnet med enhetsskolens idealer om likeverd og fellesskap, og var forløperen for inkluderingsbegrepet.
    `, [UH, snl("https://snl.no/spesialpedagogikk")]),

    r("Barnehageloven av 1975", "Norsk spor", 1975, `
      Den første barnehageloven (1975) skulle gi barn under skolepliktig alder gode utviklings- og aktivitetsmuligheter i nær forståelse og samarbeid med hjemmene. Den la grunnen for den store barnehageutbyggingen, og barnehagen ble overført til Kunnskapsdepartementet i 2006.
    `, [snl("https://snl.no/barnehageloven")]),

    r("Skolefritidsordningen", "Norsk spor", 1991, `
      Skolefritidsordningen (SFO) ble et fast tilbud ved barneskolene fra 1991, og ble en del av hverdagen for mange av de yngste elevene. I 2020 deltok om lag 60 prosent av barna fra første til fjerde trinn.
    `, [snl("https://snl.no/skolefritidsordning"), UH]),

    r("Reform 94", "Norsk spor", 1994, `
      Reform 94 ga alle mellom 16 og 19 år lovfestet rett til videregående opplæring, med færre og bredere grunnkurs og en lærlingordning integrert i opplæringen (to år i skole og to i bedrift). Reformen skulle få flere til å fullføre med studie- eller yrkeskompetanse.
    `, [snl("https://snl.no/Reform_94"), snl("https://snl.no/videreg%C3%A5ende_oppl%C3%A6ring_i_Norge")]),

    r("Reform 97", "Norsk spor", 1997, `
      Reform 97 forlenget grunnskolen fra ni til ti år og senket skolestarten fra sju til seks år, med et nytt læreplanverk (L97) og en generell del fra 1993. Læreplanen la vekt på felles kunnskap og kulturarv, tema- og prosjektarbeid, og ble også utgitt i en egen samisk utgave. Den ble erstattet av Kunnskapsløftet i 2006.
    `, [snl("https://snl.no/Reform_97"), snl("https://snl.no/grunnskolen")]),

    r("Opplæringslova", "Norsk spor", 1998, `
      Opplæringslova (1998) samlet for første gang lovverket for grunnskole og videregående opplæring i én lov, med rett til tilpasset opplæring, spesialundervisning og et godt skolemiljø. En ny opplæringslov ble vedtatt i 2023.
    `, [snl("https://snl.no/oppl%C3%A6ringslova"), UH]),

    r("PISA-sjokket", "Norsk spor", 2001, `
      Da de første PISA-resultatene kom i desember 2001, lå norske elever omkring gjennomsnittet i OECD, langt dårligere enn mange hadde ventet. «PISA-sjokket» ble utgangspunkt for Kvalitetsutvalget, nasjonale prøver og Kunnskapsløftet, og for en ny vekt på resultater og grunnleggende ferdigheter i norsk skolepolitikk.
    `, [snl("https://snl.no/PISA_-_internasjonal_skoletest"), snl("https://snl.no/Kristin_Clemet")], { type: "hendelse" }),

    r("Kvalitetsreformen", "Norsk spor", 2001, `
      Kvalitetsreformen i høyere utdanning ble vedtatt av Stortinget i 2001 og innført fra 2003: ny gradsstruktur (bachelor og master), studiepoeng, tettere oppfølging, nye vurderingsformer og finansiering etter resultater. Den var en del av Bologna-prosessen i Europa.
    `, [snl("https://snl.no/Kvalitetsreformen")], { iBruk: 2003 }),

    r("Nasjonale prøver", "Norsk spor", 2004, `
      Nasjonale prøver i blant annet lesing, regning og engelsk ble innført i 2004, samme år som Utdanningsdirektoratet ble opprettet. Prøvene er en del av det nasjonale kvalitetsvurderingssystemet og har vært omstridt, særlig når resultatene brukes til å rangere skoler.
    `, [snl("https://snl.no/nasjonale_pr%C3%B8ver"), snl("https://snl.no/Utdanningsdirektoratet")]),

    r("Kunnskapsløftet", "Norsk spor", 2006, `
      Kunnskapsløftet (2006) var en reform av hele grunnopplæringen, med kompetansemål i stedet for detaljerte innholdsplaner, fem grunnleggende ferdigheter i alle fag og større frihet for skoleeierne i valg av metoder. Reformen bygde på stortingsmeldingen *Kultur for læring* (2004) og ble revidert gjennom fagfornyelsen.
    `, [snl("https://snl.no/Kunnskapsl%C3%B8ftet")]),

    r("Ny formålsparagraf", "Norsk spor", 2008, `
      Stortinget vedtok i 2008 en ny formålsparagraf for skolen og barnehagen, som erstattet den gamle formuleringen om en kristen og moralsk oppdragelse med en verdiforankring i kristen og humanistisk arv og tradisjon, menneskeverd, likeverd, demokrati og vitenskapelig tenkemåte. Endringen avsluttet en lang strid om skolens kristne formål.
    `, [snl("https://snl.no/Kunnskapsl%C3%B8ftet"), TELHAUG], { type: "hendelse" }),

    r("Rett til barnehageplass", "Norsk spor", 2009, `
      Fra 2009 fikk alle barn lovfestet rett til barnehageplass fra de er ett år. Det fullførte den store barnehageutbyggingen og gjorde barnehagen til en del av utdanningsløpet for nesten alle norske barn.
    `, [UH, snl("https://snl.no/barnehageloven")]),

    r("Femårig lærerutdanning", "Norsk spor", 2017, `
      Fra 2017 ble grunnskolelærerutdanningen en femårig masterutdanning. Reformen fulgte utviklingen i OECD-området og skulle styrke lærernes faglige og forskningsbaserte kompetanse, men er omdiskutert med tanke på rekrutteringen til yrket.
    `, [snl("https://snl.no/grunnskolel%C3%A6rer"), UH]),

    r("Fagfornyelsen (LK20)", "Norsk spor", 2020, `
      Fagfornyelsen er en revisjon av Kunnskapsløftet med nye læreplaner i alle fag og en ny overordnet del med verdier og prinsipper (fastsatt 2017), innført fra 2020. Dybdelæring, kjerneelementer i fagene og tre tverrfaglige temaer, folkehelse og livsmestring, demokrati og medborgerskap og bærekraftig utvikling, er bærende ideer. Reformen bygde på Ludvigsen-utvalget og stortingsmeldingen *Fag – Fordypning – Forståelse* (2016).
    `, [snl("https://snl.no/Fagfornyelsen"), snl("https://snl.no/dybdel%C3%A6ring")], { iBruk: 2020, etikett: "fra 2020" }),

    r("Fornorskingspolitikken i skolen", "Norsk spor", 1850, `
      Fra midten av 1800-tallet til etter andre verdenskrig ble skolen brukt til å fornorske samiske og kvenske barn: undervisningen skulle foregå på norsk, morsmålet ble forbudt eller bare tillatt som hjelpespråk, og internatskoler skilte barna fra familiene. Politikken ble gradvis avviklet etter 1950-årene, og Sannhets- og forsoningskommisjonen la fram sin rapport i 2023.
    `, [snl("https://snl.no/fornorskingspolitikk")], { type: "hendelse", iBruk: 1880, etikett: "ca. 1850–1960" }),
  ],
};
