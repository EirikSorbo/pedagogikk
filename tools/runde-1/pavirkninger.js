// ============================================================================
//  RUNDE 1 — PÅVIRKNINGENE (edgeDescriptions)
// ----------------------------------------------------------------------------
//  Én tekst per strek i treet som går inn i eller ut fra de tre retningene i
//  runden. Nøkkelen er fra__til med epokenes id-er. Motreaksjonene (rx) er
//  merket i kommentaren. Utkast skrevet av Claude (Opus) 2026-10-21.
// ============================================================================
import { snl, sep, bok } from "./hjelpere.js";

const p = (description, kilder = []) => ({ description, kilder });

export const pavirkninger = {
  empirisme__naturalisme: p(
    "Rousseau bygde på Lockes empirisme: mennesket fødes uten medfødte ideer, all kunnskap kommer gjennom sansene, og oppdragelsen former karakteren tidlig (*Some Thoughts Concerning Education*, 1693). Han lånte også fra Condillacs sensualisme. Men han vendte seg mot Lockes viktigste regel, å resonnere med barn: før fornuftens alder skal barnet lære av ting og erfaring, ikke av argumenter.",
    [sep("rousseau")],
  ),
  naturalisme__filantropisme: p(
    "Filantropistene leste *Émile* som et program og gjorde det til institusjoner. Basedow hentet tanken om å følge barnets natur, lære gjennom lek og sansning og herde kroppen, men det Rousseau beskrev som én lærer og ett barn langt fra samfunnet, ble en internatskole med timeplan, belønningssystem og offentlig eksamen. Mange har sett nettopp denne institusjonaliseringen som et brudd med Rousseau.",
    [snl("filantropisme")],
  ),
  empirisme__filantropisme: p(
    "Fra Locke hentet filantropistene en nøktern nyttepedagogikk: lekbetont lesetrening (Locke foreslo terninger med bokstaver), herding, praktiske kunnskaper og en oppdragelse som gjør barnet til et fornuftig og nyttig medlem av samfunnet. Den empiriske holdningen ga også Trapps ønske om en pedagogikk bygd på iakttakelse og forsøk.",
  ),
  naturalisme__anskuelse: p(
    "Pestalozzi var en ivrig Rousseau-leser og oppdro sønnen Jakob etter *Émile*, med en dagbok (1774) som viser hvordan forsøket kolliderte med virkeligheten. Han beholdt tanken om å følge «naturens gang» i barnets utvikling, men flyttet tyngdepunktet fra frihet til morens og hjemmets kjærlighet, og fra et privilegert barn til folkets barn.",
    [snl("Johann_Heinrich_Pestalozzi")],
  ),
  didaktikk__anskuelse: p(
    "Anskuelsesprinsippet er Comenius' (*Didactica magna*, 1657; *Orbis sensualium pictus*, 1658): ting før ord, fra det kjente til det ukjente, og en naturlig metode som kan læres av alle lærere. Pestalozzi ville «psykologisere» og «mekanisere» undervisningen på samme måte, med elementer og trinn som gjorde metoden overførbar, og arvet dermed både didaktikkens løfte og dens fare for formalisme.",
    [snl("anskuelsesundervisning")],
  ),
  anskuelse__herbartianisme: p(
    "Herbart besøkte Pestalozzi i Burgdorf i 1799 og skrev om hans «ABC der Anschauung» (1802). Han ga anskuelsen et psykologisk grunnlag i en lære om forestillinger og apersepsjon, og gjorde den til første ledd i en systematisk undervisningslære. Herbartianerne gjorde denne systematikken til formaltrinn, nettopp den skolen reformpedagogikken senere gjorde opprør mot.",
  ),
  anskuelse__barnehage: p(
    "Fröbel arbeidet hos Pestalozzi i Yverdon (1808–1810) og tok med seg anskuelsen, elementene og tanken om en morsoppdragelse. Lekegavene (kule, terning og sylinder) er en videreføring av Pestalozzis formlære. Men Fröbel savnet en indre enhet i metoden og ga barnets aktivitet en romantisk og religiøs begrunnelse: leken som uttrykk for det guddommelige i barnet.",
    [snl("Friedrich_Wilhelm_August_Fr%C3%B6bel")],
  ),
  barnehage__reformpedagogikk: p(
    "Barnehagebevegelsen ga reformpedagogikken en tradisjon, et yrke og et nettverk av kvinner, og et ideal om barnets egen aktivitet. Samtidig gjorde reformatorene opprør mot fröbelianernes symbolikk og faste program: Dewey bygde på Fröbel, men kritiserte symbolikken (*The School and Society*, 1899), Montessori satte sine materialer opp mot fantasileken, og Kilpatrick (1916) avviste Fröbels prinsipper som vitenskapelig uholdbare.",
    [bok("Ann Taylor Allen", "The Transatlantic Kindergarten: Education and Women's Movements in Germany and the United States. Oxford University Press", 2017)],
  ),
  // Motreaksjon.
  herbartianisme__reformpedagogikk: p(
    "Reformpedagogikken definerte seg mot herbartianismen. Formaltrinnene til Ziller og Rein, lærerstyrt klasseundervisning, katekisering og «kunnskapsskolen» ble bildet på den gamle skolen som reformatorene ville avskaffe. Forskningen har senere vist at herbartianerne også var reformatorer i sin tid, og at bildet av dem ble tegnet av motstanderne.",
    [snl("reformpedagogikk"), bok("Jürgen Oelkers", "Reformpädagogik: Eine kritische Dogmengeschichte. Juventa", 1989)],
  ),
  reformpedagogikk__antiautoritaer: p(
    "Summerhill begynte i 1921 i reformmiljøet i Hellerau ved Dresden, og Neill var en tid med i New Education Fellowship. Den antiautoritære pedagogikken radikaliserte reformpedagogikkens tro på barnet: friheten ble ikke lenger et middel for læring i en tilrettelagt omgivelse, men et mål i seg selv, begrunnet i psykoanalysen.",
    [snl("Alexander_Sutherland_Neill")],
  ),
  reformpedagogikk__reggio: p(
    "Reggio Emilia står på skuldrene til reformpedagogikken: Montessori og søstrene Agazzi i den italienske førskoletradisjonen, Freinets kooperative skole og Decrolys interessesentre. Malaguzzi tok med seg tanken om barnets aktivitet og uttrykk, men avviste både faste metoder og ferdigutviklede materialer.",
    [bok("Carolyn Edwards, Lella Gandini og George Forman (red.)", "The Hundred Languages of Children: The Reggio Emilia Approach to Early Childhood Education. Ablex", 1993)],
  ),
  progressivisme__reggio: p(
    "Malaguzzi nevnte Dewey blant sine viktigste kilder: læring som undersøkelse, prosjektet som form og skolen som demokratisk fellesskap. *Progettazione*, den fleksible planleggingen av prosjekter ut fra barnas spørsmål, kan leses som en europeisk videreføring av Deweys og Kilpatricks ideer, men med en sterkere vekt på estetiske uttrykk og dokumentasjon.",
  ),
  empirisme__pragmatisme: p(
    "Pragmatismen kalte seg «et nytt navn for noen gamle tenkemåter» (James 1907) og sto i gjeld til den britiske empirismen: erfaringen som kilde til kunnskap og konsekvensene som prøve på mening. Men pragmatistene forkastet empirismens passive sansebegrep. Erfaringen er aktiv, målrettet og sosial, og ideer er redskaper, ikke kopier av sanseinntrykk.",
    [sep("pragmatism")],
  ),
  pragmatisme__progressivisme: p(
    "Deweys instrumentalisme og Meads sosialpsykologi ble prøvd ut i laboratorieskolen i Chicago (1896): hvis tenkning er problemløsning og selvet blir til i samhandling, må skolen bygge på aktivitet, samarbeid og undersøkelse. Den progressive bevegelsen gjorde disse ideene til en bred reform, men ofte i forenklet form som Dewey selv kritiserte.",
    [sep("dewey")],
  ),
  // Motreaksjon.
  herbartianisme__progressivisme: p(
    "De amerikanske herbartianerne (De Garmo, McMurry-brødrene og National Herbart Society, stiftet 1895) dominerte lærerutdanningen i 1890-årene. Dewey skrev sitt essay om interesse og vilje (1896) i deres årbok og vendte begrepet mot dem: interesse er ikke noe læreren skal vekke for stoffets skyld, men et uttrykk for elevens egen aktivitet. Fra 1902 ble selskapet National Society for the Study of Education.",
  ),
  progressivisme__prosjekt: p(
    "Kilpatricks «The Project Method» (1918) var et forsøk på å gjøre Deweys pedagogikk til én undervisningsmetode: elevens målrettede aktivitet som grunnenhet. Dewey og Boyd Bode var skeptiske til at elevens øyeblikkelige formål ble målestokken. Da prosjektarbeidet kom tilbake i Europa rundt 1970, var det mer samfunnskritisk og problemorientert enn hos Kilpatrick.",
    [snl("William_Heard_Kilpatrick")],
  ),
  progressivisme__refleksjon: p(
    "Deweys *How We Think* (1910) definerte refleksiv tenkning som aktiv og vedvarende prøving av en overbevisning i lys av grunnene for den og konsekvensene av den. Schön skrev doktorgrad om Deweys undersøkelsesteori og bygde *The Reflective Practitioner* (1983) på den, og Kolb kalte Dewey en av erfaringslæringens grunnleggere.",
    [bok("Donald A. Schön", "The Reflective Practitioner: How Professionals Think in Action. Basic Books", 1983)],
  ),
  reformpedagogikk__utviklingspsyk: p(
    "Reformpedagogikken og barnepsykologien vokste fram sammen. Montessoris sensitive perioder og barnestudiene ga reformene et vitenskapelig språk, og Édouard Claparèdes Institut Jean-Jacques Rousseau i Genève (1912), et senter for den nye pedagogikken, ble arbeidsstedet til Jean Piaget fra 1921. Utviklingspsykologien arvet spørsmålet om hva barn kan og vil på ulike alderstrinn.",
  ),
  progressivisme__kritiskped: p(
    "George Counts' *Dare the School Build a New Social Order?* (1932) ga den progressive bevegelsen en samfunnsomformende fløy, og Paulo Freire leste Dewey gjennom den brasilianske reformpedagogen Anísio Teixeira. Den kritiske pedagogikken har både bygd på Deweys demokratiske ideal og kritisert progressivismen for å overse makt, klasse og ideologi.",
  ),
  pietisme__folkeopplysning: p(
    "Pietismen krevde at hver kristen selv skulle kunne lese Bibelen og forstå troen. August Hermann Franckes anstalter i Halle (fra 1698) ble forbilde for skoler i Preussen og Danmark-Norge, og konfirmasjonen (1736) og skoleforordningen (1739) var pietistiske reformer. Opplysningstiden overtok institusjonene og ga dem en verdslig begrunnelse: nytte, fornuft og borgerskap.",
    [snl("oppl%C3%A6ringsplikt")],
  ),
  folkeopplysning__folkehogskole: p(
    "Grundtvig var både arving og kritiker av folkeopplysningen. Han overtok ideen om at hele folket skal opplyses, men avviste opplysningstidens rasjonalisme og den ovenfra kommende nyttepedagogikken. Folkehøgskolen skulle være folkets egen opplysning, båret av det levende ord og historien, ikke av bøker og kateter.",
    [snl("grundtvigianismen")],
  ),
  folkeopplysning__folkeskolen: p(
    "De nasjonale folkeskolene bygde på institusjonene fra 1700-tallet: skoleplikt, lærere, lærebøker og statlig tilsyn. I Norge går linjen fra forordningen av 1739 til lovene av 1827, 1860 og 1889. Det nye var at folkeskolen ble en nasjonal og etter hvert demokratisk institusjon, ikke bare en kirkelig og eneveldig.",
    [snl("allmueskole"), snl("folkeskolen")],
  ),
  folkeskolen__enhetsskolen: p(
    "Folkeskolelovene av 1889 skapte en felles skole for barn fra alle samfunnslag, og fra 1896 bygde middelskolen på folkeskolen. Enhetsskolen fullførte tanken: én sammenhengende skole der alle går sammen i stadig flere år, fra sjuårig folkeskole til niårig grunnskole og videregående opplæring for alle.",
    [snl("enhetsskole")],
  ),
  reformpedagogikk__enhetsskolen: p(
    "Enhetsskolen fikk sin form fra skolepolitikken og mye av sitt innhold fra reformpedagogikken. Normalplanen av 1939 kombinerte en felles folkeskole med arbeidsskoleprinsippet og elevaktivitet, og etterkrigstidens forsøk og læreplaner (Mønsterplanen 1974) bygde videre på dette. I Sverige var de progressive ideene tydelige i skolkommisjonen av 1946.",
    [snl("normalplan"), snl("reformpedagogikk")],
  ),
  enhetsskolen__inkludering: p(
    "Inkluderingen er enhetsskolens siste utvidelse: også de som var plassert i spesialskoler og institusjoner, skal høre til i fellesskolen. Integreringen i 1975 ble begrunnet med enhetsskolens egne idealer om likeverd og fellesskap, og «en skole for alle» ble et slagord i 1990-årene.",
    [snl("spesialpedagogikk")],
  ),
};
