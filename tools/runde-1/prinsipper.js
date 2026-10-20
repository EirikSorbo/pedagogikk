// ============================================================================
//  RUNDE 1 — PEDAGOGISKE PRINSIPPER (genreDescriptions.sub)
// ----------------------------------------------------------------------------
//  Felles tekster som går på tvers av epoker og teoretikere. Navnene må stå
//  likt i teoretikernes `subGenre`. «Se og les»: korte sitater fra verk i det
//  fri, med kilde, og lenker som er sjekket (node tools/lag-runde-1.js --lenker).
//  Utkast skrevet av Claude (Opus) 2026-10-21.
// ============================================================================
import { snl, sep, lex, bok, avsnitt } from "./hjelpere.js";

const les = (tittel, kilde, url) => ({ tittel, kilde, url });
const sitat = (tittel, kilde, tekst) => ({ tittel, kilde, tekst });

export const prinsipper = [
  {
    navn: "Negativ oppdragelse",
    description: avsnitt(
      "Rousseaus begrep for oppdragelsen i barndommen: ikke å lære barnet dyd eller sannhet, men å verne hjertet mot last og sinnet mot villfarelse. Oppdrageren skal vinne tid, ikke bruke den, og la barnet lære av ting og konsekvenser framfor ord, bøker og formaninger.",
      "Begrepet er paradoksalt. Det forutsetter en oppdrager som kontrollerer omgivelsene fullstendig, og «velregulert frihet» har siden Hegel og Herbart vært lest både som respekt for barnets egen utvikling og som en skjult og mer total styring. Prinsippet lever videre i ideen om at læreren skal tilrettelegge mer enn instruere.",
    ),
    kilder: [sep("rousseau"), bok("Jürgen Oelkers", "Jean-Jacques Rousseau. Continuum", 2008)],
    seOgLes: [
      sitat("Åpningen av «Émile»", "Jean-Jacques Rousseau: Émile, ou De l'éducation (1762), bok I", "Tout est bien sortant des mains de l'Auteur des choses, tout dégénère entre les mains de l'homme."),
      les("Rousseau i Stanford Encyclopedia of Philosophy", "Stanford Encyclopedia of Philosophy", "https://plato.stanford.edu/entries/rousseau/"),
    ],
  },
  {
    navn: "Barndommens egenverdi",
    description: avsnitt(
      "Prinsippet om at barndommen er en livsfase med egen verdi, ikke bare en forberedelse til voksenlivet: barnet har sine egne måter å se, tenke og føle på, og oppdragelsen skal ikke ofre nåtiden for en usikker framtid. Det går fra Rousseau via romantikken og Fröbel til Ellen Keys «barnets århundre» og Neills Summerhill.",
      "Forskningen har pekt på at prinsippet både har gitt barn rettigheter og vern, og laget et normativt bilde av den «naturlige» barndommen som virkelige barn, særlig fattige og arbeidende, sjelden passet inn i. Barndomssosiologien fra 1990-årene har gjort barndommen til et sosialt konstruert fenomen, og FNs barnekonvensjon (1989) til et rettslig.",
    ),
    kilder: [snl("Ellen_Key"), bok("Jürgen Oelkers", "Reformpädagogik: Eine kritische Dogmengeschichte. Juventa", 1989)],
  },
  {
    navn: "Anskuelse",
    description: avsnitt(
      "Prinsippet om at undervisningen skal begynne med det barnet selv kan se, høre og gripe, og gå fra det nære og enkle til det fjerne og sammensatte. Det står hos Comenius («ting før ord», *Orbis sensualium pictus*, 1658), filantropistene og fremfor alt Pestalozzi, som gjorde anskuelsen til «det absolutte fundament» for all erkjennelse.",
      "For Pestalozzi var anskuelsen ikke bare sansning, men en indre bearbeiding der inntrykkene ordnes gjennom tall, form og språk. I spredningen ble prinsippet ofte redusert til gjenstandsleksjoner og bildetavler. Det lever videre i konkretisering, ekskursjoner og alle former for anskuelsesmateriell i skolen.",
    ),
    kilder: [snl("anskuelsesundervisning"), bok("Daniel Tröhler", "Pestalozzi and the Educationalization of the World. Palgrave Macmillan", 2013)],
    seOgLes: [
      sitat("Anskuelsen som fundament", "Johann Heinrich Pestalozzi: Wie Gertrud ihre Kinder lehrt (1801)", "Die Anschauung ist das absolute Fundament aller Erkenntnis."),
      les("Anskuelsesundervisning i SNL", "Store norske leksikon", "https://snl.no/anskuelsesundervisning"),
    ],
  },
  {
    navn: "Hode, hjerte og hånd",
    description: avsnitt(
      "Formelen for Pestalozzis tanke om en allsidig oppdragelse: de intellektuelle, moralsk-religiøse og praktisk-kroppslige kreftene skal utvikles i likevekt, og den moralske oppdragelsen i hjemmets nære fellesskap er grunnlaget for de andre. Uttrykket er knyttet til *Schwanengesang* (1826), men brukes langt friere enn Pestalozzi selv gjorde.",
      "Formelen er blitt et slagord for helhetlig oppdragelse i reformpedagogikk, Steinerpedagogikk, folkeskole og læreplaner, ofte uten Pestalozzis religiøse og sosiale forankring. Den viser hvordan et prinsipp kan bli et felles språk nettopp fordi det er åpent.",
    ),
    kilder: [snl("Johann_Heinrich_Pestalozzi"), bok("Daniel Tröhler", "Pestalozzi and the Educationalization of the World. Palgrave Macmillan", 2013)],
  },
  {
    navn: "Selvvirksomhet",
    description: avsnitt(
      "Prinsippet om at læring og utvikling skjer gjennom barnets egen aktivitet, ikke gjennom passiv mottakelse: på tysk *Selbsttätigkeit*. Det går fra Pestalozzi og Fröbel via Diesterweg til arbeidsskolen og Montessori, og er i norsk tradisjon blitt hetende elevaktivitet.",
      "Prinsippet har både en psykologisk og en moralsk side: barnet lærer best ved å gjøre selv, og selvstendighet er et mål for oppdragelsen. Kritikken har pekt på at aktivitet ikke er det samme som læring, og at elevaktive arbeidsformer kan øke forskjellene når strukturen og lærerens støtte mangler.",
    ),
    kilder: [snl("Adolph_Diesterweg"), snl("reformpedagogikk")],
  },
  {
    navn: "Lek",
    description: avsnitt(
      "Prinsippet om at leken er barnets egen måte å lære, utvikle seg og forstå verden på, og at den derfor har en sentral plass i oppdragelsen. Fröbel gjorde leken til «det høyeste trinnet» i barneutviklingen og til grunnlaget for barnehagen; Mead viste hvordan selvet blir til i rollelek og spill; Reggio Emilia ser lek og utforskning som sammenvevd.",
      "Spenningen mellom lek som egenverdi og lek som middel for læring går gjennom hele barnehagehistorien. I norsk barnehagepedagogikk har leken en særstilling, og forholdet mellom fri lek og læringsmål har vært et av de mest omstridte spørsmålene etter at barnehagen ble en del av utdanningsløpet.",
    ),
    kilder: [snl("lek_-_aktivitet"), snl("barnehagepedagogikk")],
    seOgLes: [
      sitat("Fröbel om leken", "Friedrich Fröbel: Die Menschenerziehung (1826)", "Spielen, Spiel ist die höchste Stufe der Kindesentwicklung, der Menschenentwicklung dieser Zeit."),
    ],
  },
  {
    navn: "Kroppslig oppdragelse",
    description: avsnitt(
      "Prinsippet om at kroppen hører med i oppdragelsen: bevegelse, lek ute, helse og fysiske ferdigheter er ikke bare rekreasjon, men en del av dannelsen. Filantropistene gjorde det til skolefag, med GutsMuths' *Gymnastik für die Jugend* (1793), og tradisjonen gikk videre i den nasjonale turnbevegelsen og i den svenske gymnastikken.",
      "Prinsippet har hatt skiftende begrunnelser: helse og nytte i opplysningstiden, nasjonal styrke og militær beredskap på 1800-tallet, lek og livsglede i reformpedagogikken. Historikere har vist hvordan kroppsøvingen også var et redskap for disiplin og kjønnsdeling.",
    ),
    kilder: [snl("Johann_Christoph_Friedrich_Guts_Muths"), snl("Christian_Gotthilf_Salzmann")],
  },
  {
    navn: "Den forberedte omgivelsen",
    description: avsnitt(
      "Montessoris prinsipp om at læreren ikke underviser barnet direkte, men forbereder en omgivelse som barnet kan lære av på egen hånd: tilpasset barnets størrelse, ordnet, estetisk og med selvkorrigerende materialer for sansene, praktisk liv, språk og matematikk. Friheten til å velge arbeid og la det ta tid er en del av prinsippet.",
      "Prinsippet har slektskap med Rousseaus regisserte frihet og har fått tilsvarende kritikk: friheten skjer innenfor rammer som er nøye bestemt av materialene og læreren. Tanken om rommet som «den tredje pedagog» i Reggio Emilia er en beslektet idé.",
    ),
    kilder: [snl("Maria_Montessori"), bok("Rita Kramer", "Maria Montessori: A Biography. Putnam", 1976)],
  },
  {
    navn: "Arbeidsskoleprinsippet",
    description: avsnitt(
      "Prinsippet om at praktisk arbeid, i verksted, kjøkken, hage og sløyd, skal være en bærende del av skolen, ikke bare et tillegg. Hos Kerschensteiner skulle arbeidet oppdra til saklighet, samarbeid og borgersinn; hos Dewey var det en inngang til fag og samfunn; hos Sethne og i Normalplanen av 1939 ble det et prinsipp for elevaktivitet i hele skolen.",
      "Begrepet har dekket svært ulike ting, fra yrkesforberedelse til en åndelig «arbeidsskole» der eleven arbeider selvstendig med stoffet. Kritikere har pekt på at arbeidsskolen kunne bli en sorteringsskole der arbeiderklassens barn fikk hendene og borgerskapets barn bøkene.",
    ),
    kilder: [snl("arbeidsskole_-_pedagogikk"), snl("Georg_Kerschensteiner"), snl("Anna_Cathrine_Sethne")],
  },
  {
    navn: "Medborgerskap",
    description: avsnitt(
      "Prinsippet om at skolen skal oppdra borgere: mennesker som kan delta i, forstå og bære et politisk fellesskap. Hos La Chalotais og Condorcet er det nasjonens og republikkens skole, hos Horace Mann republikkens fundament, hos Kerschensteiner statsborgerlig oppdragelse til en nasjonalstat, og hos Dewey en demokratisk livsform.",
      "Prinsippet har alltid hatt to sider: frigjøring til selvstendig dømmekraft og integrering i en gitt orden. Spørsmålet om skolen skal oppdra til lojalitet eller til kritikk går gjennom hele retningen «Skolen for alle», og står i dag i læreplanens tverrfaglige tema om demokrati og medborgerskap.",
    ),
    kilder: [snl("medborgerskap"), snl("Antoine_Condorcet")],
  },
  {
    navn: "Elevenes selvstyre",
    description: avsnitt(
      "Prinsippet om at barn og unge skal styre sitt eget skolefellesskap, gjennom skolemøter, egne regler og ansvar for felles saker. Det går fra Homer Lanes Little Commonwealth og Neills Summerhill via Dora Russells Beacon Hill til Forsøksgymnaset i Oslo, og har slektskap med Deweys skole som demokratisk fellesskap og med Parkhursts kontrakter.",
      "Selvstyret er både et mål (demokratisk oppdragelse) og et middel (lyst, ansvar og psykisk helse). Kritikken har pekt på at formell likhet i skolemøtet kan skjule ulik makt, og at de voksnes ansvar ikke forsvinner fordi det fordeles. Elevrådene i norsk skole er en moderat institusjonalisering av prinsippet.",
    ),
    kilder: [snl("Alexander_Sutherland_Neill"), snl("fors%C3%B8ksgymnas")],
  },
  {
    navn: "Det kompetente barnet",
    description: avsnitt(
      "Prinsippet om at barnet fra starten er rikt, aktivt og kompetent, en medskaper av kunnskap og kultur, og ikke et tomt eller ufullstendig vesen som skal fylles. Det er formulert sterkest i Reggio Emilia-pedagogikken, hos Malaguzzi og Rinaldi, og har fått støtte i barndomssosiologien og i nyere utviklingspsykologi.",
      "Begrepet ble et nøkkelord i nordisk barnehagepedagogikk fra 1990-årene. Kritikere har spurt om det kompetente barnet kan bli et nytt normativt ideal som overser sårbarhet og avhengighet, og om det passer godt sammen med en politikk som vil gjøre barnehagen til første trinn i utdanningsløpet.",
    ),
    kilder: [bok("Carlina Rinaldi", "In Dialogue with Reggio Emilia: Listening, Researching and Learning. Routledge", 2006), bok("Gunilla Dahlberg, Peter Moss og Alan Pence", "Beyond Quality in Early Childhood Education and Care: Postmodern Perspectives. Falmer Press", 1999)],
  },
  {
    navn: "Pedagogisk dokumentasjon",
    description: avsnitt(
      "Prinsippet om at pedagogene systematisk dokumenterer barnas arbeid, samtaler og læringsprosesser (med notater, foto, video og barnas egne produkter) for å gjøre dem synlige, diskutere dem med barn, kolleger og foreldre og planlegge videre. Det er utviklet i Reggio Emilia og formidlet i Norden særlig av Gunilla Dahlberg.",
      "Dokumentasjonen skiller seg fra kartlegging og vurdering ved at den ikke måler barnet mot en norm, men åpner prosessen for tolkning. Kritikken har pekt på at dokumentasjon lett glir over i overvåking og i en produksjon av vakre utstillinger, og at den krever tid og kompetanse barnehagene ofte mangler.",
    ),
    kilder: [bok("Carlina Rinaldi", "In Dialogue with Reggio Emilia: Listening, Researching and Learning. Routledge", 2006), bok("Gunilla Dahlberg, Peter Moss og Alan Pence", "Beyond Quality in Early Childhood Education and Care: Postmodern Perspectives. Falmer Press", 1999)],
  },
  {
    navn: "Læring gjennom erfaring",
    description: avsnitt(
      "Prinsippet om at læring skjer når erfaring bearbeides: man handler, opplever følgene, tenker over dem og prøver på nytt. Hos Dewey er erfaring alltid samspill mellom et levende vesen og en omgivelse, og oppdragelse er en stadig rekonstruksjon av erfaring som gjør den rikere og mer meningsfull. Ikke all erfaring er oppdragende: kontinuitet og samspill avgjør (*Experience and Education*, 1938).",
      "Kolbs erfaringslæringssyklus (1984) har gjort prinsippet til en enkel modell, men på bekostning av Deweys sosiale og demokratiske forankring. Prinsippet er også eldre: det finnes hos filantropistene, hos Edgeworth og i hele tradisjonen fra Rousseau.",
    ),
    kilder: [sep("dewey"), bok("John Dewey", "Experience and Education. Macmillan", 1938), bok("David A. Kolb", "Experiential Learning: Experience as the Source of Learning and Development. Prentice-Hall", 1984)],
    seOgLes: [
      sitat("Oppdragelse som liv", "John Dewey: My Pedagogic Creed (1897), artikkel II", "I believe that education, therefore, is a process of living and not a preparation for future living."),
      les("Dewey i Stanford Encyclopedia of Philosophy", "Stanford Encyclopedia of Philosophy", "https://plato.stanford.edu/entries/dewey/"),
    ],
  },
  {
    navn: "Interesse som utgangspunkt",
    description: avsnitt(
      "Prinsippet om at undervisningen skal ta utgangspunkt i elevens interesser. Herbart gjorde den «mangesidige interessen» til et mål for undervisningen, mens de progressive (Parker, Kilpatrick) gjorde barnets interesser til drivkraft og utgangspunkt. Dewey skilte i «Interest in Relation to Training of the Will» (1896) mellom en ytre interesse som må lokkes fram og en indre interesse der eleven identifiserer seg med oppgaven.",
      "Kritikken har to retninger: at interessen blir en lokkemat som pynter på stoffet, og at interessen gjøres til målestokk og lar elevens øyeblikkelige ønsker styre. Deweys svar var at oppgaven er å knytte interessen til fagenes organiserte erfaring.",
    ),
    kilder: [sep("dewey"), bok("William James", "Talks to Teachers on Psychology. Henry Holt", 1899)],
  },
  {
    navn: "Undersøkende læring",
    description: avsnitt(
      "Prinsippet om at elever lærer ved å undersøke problemer selv: formulere spørsmål, samle data, prøve hypoteser og trekke konklusjoner, slik forskere gjør. Det har røtter i Peirces og Deweys teori om undersøkelse (*inquiry*), der tenkning begynner i en problematisk situasjon, og ble videreført i problembasert læring (McMaster 1969) og i naturfagdidaktikkens *inquiry-based learning*.",
      "Forskningen er delt om effekten: undersøkende arbeid gir god forståelse når det er godt strukturert og veiledet, men minimal veiledning gir dårligere læring, særlig for nybegynnere (Kirschner, Sweller og Clark 2006). Debatten om veiledet og uveiledet undersøkelse har vært skarp siden 2000-tallet.",
    ),
    kilder: [sep("peirce"), snl("problembasert_l%C3%A6ring")],
  },
  {
    navn: "Skolen som demokratisk fellesskap",
    description: avsnitt(
      "Prinsippet om at skolen ikke bare skal undervise om demokrati, men selv være et demokratisk fellesskap der elevene lærer å leve sammen, samarbeide og ta ansvar. For Dewey er demokrati «mer enn en styreform», en form for felles liv og delt erfaring, og skolen et samfunn i miniatyr (*Democracy and Education*, 1916). Jane Addams og Ella Flagg Young ga prinsippet en sosial og en institusjonell form.",
      "Prinsippet står sentralt i norske læreplaner. Kritikken har pekt på spenningen mellom skolen som demokrati og skolen som obligatorisk institusjon med karakterer, plikter og voksenmakt, og på at «demokrati» i skolen ofte blir prosedyrer uten reell innflytelse.",
    ),
    kilder: [sep("dewey"), bok("John Dewey", "Democracy and Education. Macmillan", 1916)],
    seOgLes: [
      sitat("Demokrati som livsform", "John Dewey: Democracy and Education (1916), kapittel 7", "A democracy is more than a form of government; it is primarily a mode of associated living, of conjoint communicated experience."),
      sitat("Skolen som sosial institusjon", "John Dewey: My Pedagogic Creed (1897), artikkel II", "I believe that the school is primarily a social institution."),
    ],
  },
  {
    navn: "Prosjektarbeid",
    description: avsnitt(
      "Arbeidsformen der elevene arbeider over tid med en selvvalgt eller felles oppgave som munner ut i et produkt, ofte i grupper og på tvers av fag. Kilpatrick ga den navn og teori (1918), og Illeris og universitetssentrene i Roskilde og Aalborg gjorde den problemorientert og deltakerstyrt (1970-årene). I Norge ble prosjektarbeid en obligatorisk arbeidsmåte med L97.",
      "Prosjektarbeid krever mye av planlegging, veiledning og vurdering for å gi læring. Kritikken har pekt på at det lett blir aktivitet uten faglig progresjon, og at elever med svake forutsetninger får mindre ut av det.",
    ),
    kilder: [snl("prosjektarbeid_-_pedagogikk"), snl("William_Heard_Kilpatrick")],
    seOgLes: [
      sitat("Kilpatricks definisjon", "William H. Kilpatrick: «The Project Method», Teachers College Record (1918)", "whole-hearted purposeful activity proceeding in a social environment"),
    ],
  },
  {
    navn: "Refleksjon over praksis",
    description: avsnitt(
      "Prinsippet om at profesjonsutøvere lærer og utvikler seg ved å tenke systematisk over egen praksis, både mens den pågår (refleksjon i handling) og i etterkant (refleksjon over handling). Det har røtter i Deweys *How We Think* (1910) og fikk sin moderne form hos Schön (1983), Argyris og Schön (dobbeltkretslæring) og i Handal og Lauvås' praksisteori i norsk lærerutdanning.",
      "Refleksjon ble et nøkkelord i profesjonsutdanningene etter 1990. Lynn Fendler og andre har kritisert at begrepet er blitt så vidt og så ofte krevd at det har mistet innhold, og at det kan bli et redskap for selvdisiplinering snarere enn kritikk.",
    ),
    kilder: [bok("Donald A. Schön", "The Reflective Practitioner: How Professionals Think in Action. Basic Books", 1983), bok("Gunnar Handal og Per Lauvås", "På egne vilkår: En strategi for veiledning med lærere. Cappelen", 1983)],
  },
  {
    navn: "Folkelig opplysning",
    description: avsnitt(
      "Prinsippet om at hele folket, ikke bare eliten, skal få kunnskap og dannelse. Begrunnelsen har skiftet: salighet og lesing i katekismen hos pietistene, nytte og flid hos opplysningstidens folkeopplysere (Rochow, Felbiger), borgerskap hos Condorcet, og folkets egen selvbevissthet og livsopplysning hos Grundtvig og folkehøgskolene.",
      "Begrepet rommer en grunnleggende spenning mellom opplysning *av* folket og opplysning *for og ved* folket: ovenfra, for å gjøre folket nyttig og lydig, eller nedenfra, for å gjøre det myndig. Ove Korsgaard har skrevet folkeopplysningens historie som en kamp om dette.",
    ),
    kilder: [snl("folkeopplysning"), bok("Ove Korsgaard", "Kampen om lyset: Dansk voksenoplysning gennem 500 år. Gyldendal", 1997)],
  },
  {
    navn: "Det levende ord",
    description: avsnitt(
      "Grundtvigs prinsipp om at det muntlige, personlige ordet, fortellingen, foredraget og sangen, vekker og oppdrar på en måte den døde boklærdommen ikke kan. Folkehøgskolen skulle derfor bygge på levende formidling og samtale, ikke på lærebøker, pensum og eksamen. Christen Kold gjorde fortellingen til kjernen i sin praksis.",
      "Prinsippet har preget nordisk folkeopplysning og folkehøgskole i halvannet hundre år. Det er både blitt hyllet som en dialogisk pedagogikk og kritisert for å gi foredragsholderen stor makt og for å stille seg mistenksomt til kritisk lesning og vitenskap.",
    ),
    kilder: [snl("grundtvigianismen"), lex("N.F.S._Grundtvig")],
    seOgLes: [
      sitat("Kolds motto", "Christen Kold, slik mottoet er overlevert i folkehøgskoletradisjonen", "Først oplive, så oplyse."),
    ],
  },
  {
    navn: "Den felles skolen",
    description: avsnitt(
      "Prinsippet om én skole for alle barn, uavhengig av sosial bakgrunn, kjønn, bosted og evner, der de lærer et felles innhold sammen i mange år. Det går fra Condorcets plan og Horace Manns common school via folkeskolelovene av 1889 til enhetsskolen og grunnskolen. Begrunnelsene har vært nasjonal enhet, demokratisk medborgerskap og sosial utjevning.",
      "Den felles skolen er kjernen i den nordiske utdanningsmodellen. Kritikken har pekt på standardisering, på at fellesskapet forutsatte assimilering av minoriteter, og på at sorteringen bare flyttet seg inn i skolen. Forholdet til tilpasset opplæring og inkludering er et vedvarende spenningsfelt.",
    ),
    kilder: [snl("enhetsskole"), snl("folkeskolen"), bok("Alfred Oftedal Telhaug og Odd Asbjørn Mediås", "Grunnskolen som nasjonsbygger: Fra statspietisme til nyliberalisme. Abstrakt", 2003)],
    seOgLes: [
      sitat("Utdanningen som utjevner", "Horace Mann: Twelfth Annual Report of the Board of Education (1848)", "Education, then, beyond all other devices of human origin, is the great equalizer of the conditions of men, — the balance-wheel of the social machinery."),
    ],
  },
  {
    navn: "Tilpasset opplæring",
    description: avsnitt(
      "Prinsippet om at opplæringen skal tilpasses evnene og forutsetningene til den enkelte elev, innenfor fellesskapet. I norsk skole er det lovfestet (opplæringsloven 1998), har vært et grunnprinsipp i læreplanene i flere tiår og ble styrket i L97. Det har forløpere i reformpedagogikkens individualisering (Dalton-planen, Montessori) og i enhetsskolens ønske om å gi alle like muligheter.",
      "Begrepet er ett av de mest omdiskuterte i norsk skole: det kan bety differensiering av innhold og tempo, variasjon i metoder eller en holdning, og grensen mot spesialundervisning er uklar. Forskere har kalt det et «flytende» begrep som alle kan slutte seg til fordi det sier så lite om praksis.",
    ),
    kilder: [snl("tilpasset_oppl%C3%A6ring"), snl("Dalton-metoden_-_pedagogikk")],
  },
  {
    navn: "Likestilt utdanning",
    description: avsnitt(
      "Prinsippet om at kvinner og menn skal ha samme rett til utdanning, og at jenter ikke skal få en oppdragelse som bare forbereder dem til ekteskap og husholdning. Mary Wollstonecraft gjorde det til et hovedargument mot Rousseau (1792), Condorcet tok det inn i sin plan for den republikanske skolen, og kvinnebevegelsen kjempet for det gjennom hele 1800-tallet.",
      "Historien er sammensatt: Catharine Beecher og barnehagebevegelsen åpnet utdanning og yrker for kvinner med begrunnelser som bekreftet kjønnsrollene («åndelig moderskap»), og fellesundervisning av gutter og jenter ble først vanlig i Norge i den høyere skolen rundt 1900.",
    ),
    kilder: [snl("Mary_Wollstonecraft"), sep("wollstonecraft")],
    seOgLes: [
      sitat("Makt over seg selv", "Mary Wollstonecraft: A Vindication of the Rights of Woman (1792), kapittel 4", "I do not wish them to have power over men; but over themselves."),
    ],
  },
  {
    navn: "Likeverd og deltakelse",
    description: avsnitt(
      "Prinsippet om at alle elever, også de med funksjonsnedsettelser og særskilte behov, har rett til å høre til, delta og lære i fellesskolen, og at det er skolen som må endre seg, ikke eleven. Det skiller seg fra integrering, som plasserer eleven i et fellesskap som ellers forblir likt. Salamanca-erklæringen (1994) og FN-konvensjonen om rettighetene til mennesker med nedsatt funksjonsevne (2006) har gjort det til en menneskerettighet.",
      "*Index for Inclusion* (Booth og Ainscow 2000) operasjonaliserer prinsippet som arbeid med skolens kulturer, retningslinjer og praksiser. Kritikken har pekt på at det brede inkluderingsbegrepet kan skjule at enkelte elever trenger særskilt hjelp, og at retorikken ofte går lenger enn praksisen.",
    ),
    kilder: [snl("spesialpedagogikk"), bok("Tony Booth og Mel Ainscow", "Index for Inclusion: Developing Learning and Participation in Schools. CSIE", 2000)],
  },
];
