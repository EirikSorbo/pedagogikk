// ============================================================================
//  PEDAGOGIKKENS SLEKTSTRE — SKJELETTET (fase 1, vedtatt 2026-10-19)
// ----------------------------------------------------------------------------
//  Ren data: retningene, tidsrommene og epokene slik Eirik godtok dem i fase 1.
//  Fila er ARBEIDSGRUNNLAG, ikke fasit. Appen kjører på treet i Firestore
//  (content/genealogy), og læreren endrer det videre i tre-editoren.
//  tools/lag-pedagogikk-skjelett.js bygger importfila herfra.
//
//  Modellen (PLAN.md):
//    retning  = metasjanger i koden (g): farge og gruppe
//    epoke    = node i treet: perioden da en bestemt tenkning preget
//               pedagogikken. Hver epoke hører til ÉN retning.
//    p        = påvirkning (heltrukket strek fra en tidligere epoke)
//    rx       = motreaksjon (stiplet strek)
//    r        = rad = tidsrom (TIDSROM under)
//
//  Ingen grå røtter (vedtak): noder uten retning kan ikke tagges på
//  teoretikere, og da ville Platon og Aristoteles stått uten epoke.
//
//  `era` og `personer` følger IKKE med i importfila. De er notater til fase 6
//  (beskrivelser og kildesjekk), og ble vist i widgeten bare for å forklare
//  hva epoken dekker.
//
//  Node-ID-ene kan aldri endres når treet først er importert: de er
//  dokument-ID-ene til koblingsbeskrivelsene (fra__til). Bare a-z og tall.
// ============================================================================

// Fargene treet og editoren kan velge mellom. Etiketten er fargens navn, ikke
// retningens: editorens fargevelger lister disse, og en retning som flyttes
// til en annen farge skal ikke se ut til å bytte navn. «gray» må finnes, koden
// faller tilbake på den (røtter og ukjent farge).
export const FAMILIES = {
  fiolett: { stroke: "#7c3aed", label: "Fiolett" },
  rav:     { stroke: "#d97706", label: "Rav" },
  blaa:    { stroke: "#3b82f6", label: "Blå" },
  oransje: { stroke: "#ea580c", label: "Oransje" },
  gronn:   { stroke: "#16a34a", label: "Grønn" },
  petrol:  { stroke: "#0d9488", label: "Petrol" },
  rosa:    { stroke: "#db2777", label: "Rosa" },
  rod:     { stroke: "#dc2626", label: "Rød" },
  skifer:  { stroke: "#334155", label: "Skifer" },
  oliven:  { stroke: "#4d7c0f", label: "Oliven" },
  gray:    { stroke: "#9bada1", label: "Grå (røtter)" },
};

// Retningene i pedagogisk rekkefølge (metaOrderHint: lister, tidslinje).
// `kolonne` er plasseringen venstre mot høyre i treet, valgt så retningene
// som påvirker hverandre mest står ved siden av hverandre (Kristen ved
// Klassisk dannelse, Empiri ved Barnet i sentrum). Justeres i editoren.
export const RETNINGER = [
  { navn: "Klassisk dannelse",     fam: "fiolett", kolonne: 2, beskrivelse: "Å forme hele mennesket gjennom kulturarven" },
  { navn: "Kristen oppdragelse",   fam: "rav",     kolonne: 1, beskrivelse: "Oppdragelse til tro, lydighet og leseferdighet" },
  { navn: "Empiri og metode",      fam: "blaa",    kolonne: 3, beskrivelse: "Undervisning som metode som kan måles og forbedres" },
  { navn: "Skolen for alle",       fam: "rod",     kolonne: 0, beskrivelse: "Folkeopplysning og fellesskole; bærer norsk skolehistorie" },
  { navn: "Barnet i sentrum",      fam: "oransje", kolonne: 4, beskrivelse: "Oppdragelse ut fra barnets natur og utvikling" },
  { navn: "Erfaring og demokrati", fam: "gronn",   kolonne: 6, beskrivelse: "Læring gjennom erfaring i et demokratisk fellesskap" },
  { navn: "Læring og utvikling",   fam: "petrol",  kolonne: 5, beskrivelse: "Læring som aktiv konstruksjon, alene og sammen med andre" },
  { navn: "Kritikk og frigjøring", fam: "rosa",    kolonne: 7, beskrivelse: "Utdanning som makt, og som vei til frigjøring" },
];

// Tidsrommene (radene i treet). Ulik lengde med vilje: lange sprang i
// antikken og middelalderen, kortere der det skjer mest. Fra fase 2 er dette
// data i Firestore; før det viser treet fortsatt tiårsetiketter på radene.
// År før Kristus er negative tall.
export const TIDSROM = [
  { rad: 0,  fra: -800, til: -150, etikett: "ca. 800–150 f.Kr.", navn: "Antikkens Hellas" },
  { rad: 1,  fra: -150, til: 500,  etikett: "150 f.Kr.–500",     navn: "Romertiden" },
  { rad: 2,  fra: 500,  til: 1100, etikett: "500–1100",          navn: "Tidlig middelalder" },
  { rad: 3,  fra: 1100, til: 1400, etikett: "1100–1400",         navn: "Høy- og senmiddelalder" },
  { rad: 4,  fra: 1400, til: 1520, etikett: "1400–1520",         navn: "Renessansen" },
  { rad: 5,  fra: 1520, til: 1600, etikett: "1520–1600",         navn: "Reformasjonstiden" },
  { rad: 6,  fra: 1600, til: 1700, etikett: "1600–1700" },
  { rad: 7,  fra: 1700, til: 1790, etikett: "1700–1790" },
  { rad: 8,  fra: 1790, til: 1850, etikett: "1790–1850" },
  { rad: 9,  fra: 1850, til: 1890, etikett: "1850–1890" },
  { rad: 10, fra: 1890, til: 1920, etikett: "1890–1920" },
  { rad: 11, fra: 1920, til: 1945, etikett: "1920–1945" },
  { rad: 12, fra: 1945, til: 1970, etikett: "1945–1970" },
  { rad: 13, fra: 1970, til: 1990, etikett: "1970–1990" },
  { rad: 14, fra: 1990, til: 2010, etikett: "1990–2010" },
  { rad: 15, fra: 2010, til: null, etikett: "2010–i dag" },
];

// Epokene. l = etiketten i treet (identitet), f = fullt navn, g = retning,
// r = rad (tidsrom), p = påvirket av, rx = motreaksjon mot.
// yOffset (andel av raden) skyver en epoke ned når forelderen står i samme rad.
export const EPOKER = [
  // --- Klassisk dannelse ---
  { id: "paideia", l: "Gresk paideia", f: "Gresk paideia", g: "Klassisk dannelse", r: 0, p: [],
    era: "ca. 450–300 f.Kr.", personer: "Sofistene, Sokrates, Platon, Isokrates, Aristoteles" },
  { id: "humanitas", l: "Romersk humanitas", f: "Romersk humanitas og retorikkutdanning", g: "Klassisk dannelse", r: 1, p: ["paideia"],
    era: "ca. 80 f.Kr.–100", personer: "Cicero, Quintilian" },
  { id: "artes", l: "Artes liberales", f: "De sju frie kunster (trivium og quadrivium)", g: "Klassisk dannelse", r: 2, p: ["humanitas"],
    era: "ca. 500–1100", personer: "Boethius, Cassiodorus, Alkuin" },
  { id: "humanisme", l: "Humanismen", f: "Renessansehumanismen", g: "Klassisk dannelse", r: 4, p: ["humanitas"], rx: ["skolastikk"],
    era: "ca. 1400–1550", personer: "Vittorino da Feltre, Erasmus, Juan Luis Vives" },
  { id: "nyhumanisme", l: "Nyhumanismen", f: "Nyhumanismen og Bildung", g: "Klassisk dannelse", r: 8, p: ["humanisme", "paideia"],
    era: "ca. 1790–1850", personer: "Wilhelm von Humboldt, Friedrich Schiller" },
  { id: "dannelsesteori", l: "Dannelsesteorien", f: "Åndsvitenskapelig pedagogikk og dannelsesteori", g: "Klassisk dannelse", r: 12, p: ["nyhumanisme"],
    era: "ca. 1920–1970", personer: "Herman Nohl, Erich Weniger, Wolfgang Klafki" },
  { id: "nydannelse", l: "Ny dannelsesdebatt", f: "Den nye dannelsesdebatten", g: "Klassisk dannelse", r: 15, p: ["dannelsesteori"], rx: ["evidens"],
    era: "2000-tallet–", personer: "Gert Biesta" },

  // --- Kristen oppdragelse ---
  { id: "kirkefedrene", l: "Kirkefedrene", f: "Kirkefedrenes oppdragelse", g: "Kristen oppdragelse", r: 1, p: ["paideia"],
    era: "ca. 150–450", personer: "Klemens av Alexandria, Origenes, Augustin" },
  { id: "klosterskoler", l: "Klosterskolene", f: "Kloster- og katedralskolene", g: "Kristen oppdragelse", r: 2, p: ["kirkefedrene"],
    era: "ca. 500–1100", personer: "Benedikt av Nursia, Karl den store" },
  { id: "skolastikk", l: "Skolastikken", f: "Skolastikken og de første universitetene", g: "Kristen oppdragelse", r: 3, p: ["klosterskoler", "artes"],
    era: "ca. 1100–1400", personer: "Pierre Abélard, Thomas Aquinas; i Norge katedralskolene fra 1100-tallet" },
  { id: "reformasjonen", l: "Reformasjonen", f: "Reformasjonens skoletanker", g: "Kristen oppdragelse", r: 5, p: ["humanisme"], rx: ["skolastikk"],
    era: "ca. 1520–1600", personer: "Martin Luther, Philipp Melanchthon; i Norge reformasjonen 1537" },
  // Samme rad som Reformasjonen, som den er en motreaksjon mot (samme mønster
  // som Hard bop mot Cool jazz i musikkappen): yOffset legger den lavere.
  { id: "jesuittene", l: "Jesuittene", f: "Jesuittenes skoler og Ratio studiorum", g: "Kristen oppdragelse", r: 5, yOffset: 0.5, p: ["skolastikk", "humanisme"], rx: ["reformasjonen"],
    era: "1540–1773", personer: "Ignatius av Loyola, Ratio studiorum (1599)" },
  { id: "pietisme", l: "Pietismen", f: "Pietistisk oppdragelse", g: "Kristen oppdragelse", r: 6, yOffset: 0.6, p: ["reformasjonen"],
    era: "ca. 1690–1760", personer: "August Hermann Francke; i Norge konfirmasjonen 1736" },

  // --- Empiri og metode ---
  { id: "didaktikk", l: "Didaktikken", f: "Realismen og den didaktiske vendingen", g: "Empiri og metode", r: 6, p: ["reformasjonen"], rx: ["humanisme"],
    era: "ca. 1610–1700", personer: "Francis Bacon, Wolfgang Ratke, Komenius" },
  { id: "empirisme", l: "Empirismen", f: "Empirismen og Lockes oppdragelseslære", g: "Empiri og metode", r: 6, yOffset: 0.6, p: ["didaktikk"],
    era: "ca. 1690–1750", personer: "John Locke" },
  { id: "herbartianisme", l: "Herbartianismen", f: "Herbart og herbartianismen", g: "Empiri og metode", r: 9, p: ["empirisme", "anskuelse"],
    era: "1806; storhetstid ca. 1860–1900", personer: "Johann Friedrich Herbart, Tuiskon Ziller, Wilhelm Rein" },
  { id: "eksperimentell", l: "Eksperimentell pedagogikk", f: "Eksperimentell pedagogikk og testbevegelsen", g: "Empiri og metode", r: 10, p: ["herbartianisme"],
    era: "ca. 1890–1930", personer: "Ernst Meumann, Alfred Binet, Edward L. Thorndike" },
  { id: "behaviorisme", l: "Behaviorismen", f: "Behaviorismen", g: "Empiri og metode", r: 11, p: ["eksperimentell"],
    era: "1913–1960-tallet", personer: "John B. Watson, B.F. Skinner" },
  { id: "maalrasjonell", l: "Målrasjonell didaktikk", f: "Målrasjonell didaktikk og programmert undervisning", g: "Empiri og metode", r: 12, p: ["behaviorisme"],
    era: "ca. 1949–1980", personer: "Ralph W. Tyler, Benjamin Bloom, B.F. Skinner" },
  { id: "evidens", l: "Evidensbevegelsen", f: "Evidens, testing og resultatstyring", g: "Empiri og metode", r: 14, p: ["maalrasjonell"],
    era: "ca. 1995–", personer: "OECD og PISA, John Hattie; i Norge nasjonale prøver 2004" },

  // --- Barnet i sentrum ---
  { id: "naturalisme", l: "Naturalismen", f: "Rousseau og den naturlige oppdragelsen", g: "Barnet i sentrum", r: 7, p: ["empirisme"],
    era: "1762–", personer: "Jean-Jacques Rousseau" },
  { id: "filantropisme", l: "Filantropismen", f: "Filantropismen", g: "Barnet i sentrum", r: 7, yOffset: 0.5, p: ["naturalisme", "empirisme"],
    era: "ca. 1770–1800", personer: "Johann Bernhard Basedow, Christian Gotthilf Salzmann" },
  { id: "anskuelse", l: "Anskuelsespedagogikken", f: "Pestalozzi og anskuelsesundervisningen", g: "Barnet i sentrum", r: 8, p: ["naturalisme", "didaktikk"],
    era: "ca. 1780–1850", personer: "Johann Heinrich Pestalozzi" },
  { id: "barnehage", l: "Barnehagebevegelsen", f: "Fröbel og barnehagebevegelsen", g: "Barnet i sentrum", r: 9, p: ["anskuelse"],
    era: "1837–", personer: "Friedrich Fröbel" },
  { id: "reformpedagogikk", l: "Reformpedagogikken", f: "Reformpedagogikken", g: "Barnet i sentrum", r: 10, p: ["barnehage"], rx: ["herbartianisme"],
    era: "ca. 1890–1933", personer: "Ellen Key, Maria Montessori, Georg Kerschensteiner, Rudolf Steiner; i Norge Anna Sethne" },
  { id: "antiautoritaer", l: "Antiautoritær pedagogikk", f: "Antiautoritær og fri oppdragelse", g: "Barnet i sentrum", r: 12, p: ["reformpedagogikk"],
    era: "1921; bølge ca. 1960–1975", personer: "A.S. Neill; i Norge Forsøksgymnaset 1967" },
  { id: "reggio", l: "Reggio Emilia", f: "Reggio Emilia-pedagogikken", g: "Barnet i sentrum", r: 13, p: ["reformpedagogikk", "progressivisme"],
    era: "1963–", personer: "Loris Malaguzzi" },

  // --- Erfaring og demokrati ---
  { id: "pragmatisme", l: "Pragmatismen", f: "Pragmatismen", g: "Erfaring og demokrati", r: 9, p: ["empirisme"],
    era: "ca. 1870–1910", personer: "Charles S. Peirce, William James, John Dewey" },
  { id: "progressivisme", l: "Progressivismen", f: "Dewey og progressivismen", g: "Erfaring og demokrati", r: 10, p: ["pragmatisme"], rx: ["herbartianisme"],
    era: "ca. 1896–1955", personer: "John Dewey, William H. Kilpatrick, Francis W. Parker" },
  { id: "prosjekt", l: "Prosjektpedagogikken", f: "Prosjektarbeid og problembasert læring", g: "Erfaring og demokrati", r: 13, p: ["progressivisme"],
    era: "1918; bølge ca. 1970–1990", personer: "William H. Kilpatrick, Knud Illeris" },
  { id: "refleksjon", l: "Refleksiv praksis", f: "Erfaringslæring og refleksiv praksis", g: "Erfaring og demokrati", r: 13, yOffset: 0.5, p: ["progressivisme"],
    era: "ca. 1983–", personer: "Donald Schön, David Kolb" },

  // --- Læring og utvikling ---
  { id: "utviklingspsyk", l: "Utviklingspsykologien", f: "Den tidlige utviklingspsykologien", g: "Læring og utvikling", r: 11, p: ["eksperimentell", "reformpedagogikk"],
    era: "ca. 1920–1940", personer: "Jean Piaget, Lev Vygotskij, Charlotte Bühler" },
  { id: "kognitiv", l: "Den kognitive vendingen", f: "Den kognitive vendingen", g: "Læring og utvikling", r: 12, p: ["utviklingspsyk"], rx: ["behaviorisme"],
    era: "ca. 1956–1975", personer: "Jerome Bruner, David Ausubel" },
  { id: "konstruktivisme", l: "Konstruktivismen", f: "Konstruktivismen", g: "Læring og utvikling", r: 13, p: ["kognitiv"],
    era: "ca. 1970–1995", personer: "Jean Piaget, Ernst von Glasersfeld, Seymour Papert" },
  { id: "sosiokulturell", l: "Sosiokulturell teori", f: "Det sosiokulturelle perspektivet", g: "Læring og utvikling", r: 14, p: ["konstruktivisme", "utviklingspsyk"],
    era: "ca. 1985–2010", personer: "Lev Vygotskij, Jean Lave og Etienne Wenger, Roger Säljö, Olga Dysthe" },
  { id: "dybdelaering", l: "Dybdelæring", f: "Læringsvitenskap og dybdelæring", g: "Læring og utvikling", r: 15, p: ["sosiokulturell", "kognitiv"],
    era: "2010-tallet–", personer: "R. Keith Sawyer; i Norge Ludvigsen-utvalget (2015) og LK20" },

  // --- Kritikk og frigjøring ---
  { id: "kritiskteori", l: "Kritisk teori", f: "Frankfurterskolens kritiske teori", g: "Kritikk og frigjøring", r: 11, p: [],
    era: "1930-tallet–", personer: "Max Horkheimer, Theodor W. Adorno, Jürgen Habermas" },
  { id: "frigjoring", l: "Frigjøringspedagogikk", f: "Frigjøringspedagogikk og skolekritikk", g: "Kritikk og frigjøring", r: 13, p: ["kritiskteori"],
    era: "ca. 1968–1985", personer: "Paulo Freire, Ivan Illich, Pierre Bourdieu; i Norge Nils Christie" },
  { id: "kritiskped", l: "Kritisk pedagogikk", f: "Kritisk pedagogikk", g: "Kritikk og frigjøring", r: 14, p: ["frigjoring", "progressivisme"],
    era: "ca. 1985–2010", personer: "Henry Giroux, Peter McLaren, bell hooks" },
  { id: "normkritikk", l: "Normkritikken", f: "Normkritisk og poststrukturalistisk pedagogikk", g: "Kritikk og frigjøring", r: 15, p: ["kritiskped"],
    era: "2000-tallet–", personer: "Kevin Kumashiro, Janne Bromseth" },

  // --- Skolen for alle ---
  { id: "folkeopplysning", l: "Folkeopplysningen", f: "Opplysningstidens folkeopplysning", g: "Skolen for alle", r: 7, p: ["pietisme"],
    era: "ca. 1739–1800", personer: "Skoleforordningen 1739, Condorcet" },
  { id: "folkehogskole", l: "Folkehøgskolen", f: "Grundtvig og folkehøgskolebevegelsen", g: "Skolen for alle", r: 8, p: ["folkeopplysning"],
    era: "1844–", personer: "N.F.S. Grundtvig, Christen Kold; i Norge Sagatun 1864" },
  { id: "folkeskolen", l: "Folkeskolen", f: "Den allmenne folkeskolen", g: "Skolen for alle", r: 9, p: ["folkeopplysning"],
    era: "ca. 1840–1920", personer: "Horace Mann, Hartvig Nissen; i Norge lovene 1860 og 1889" },
  { id: "enhetsskolen", l: "Enhetsskolen", f: "Enhetsskolen", g: "Skolen for alle", r: 12, p: ["folkeskolen", "reformpedagogikk"],
    era: "ca. 1920–1975", personer: "Normalplanen 1939, niårig grunnskole 1969, Mønsterplanen 1974" },
  { id: "inkludering", l: "Inkludering", f: "Den inkluderende skolen", g: "Skolen for alle", r: 14, p: ["enhetsskolen"],
    era: "ca. 1975–", personer: "Integreringen 1975, Salamanca-erklæringen 1994" },
];
