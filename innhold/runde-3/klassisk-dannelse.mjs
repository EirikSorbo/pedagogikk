// Runde 3 — Klassisk dannelse: retningen, epokene, teoretikerne og påvirkningene (fase 6, skrevet av Opus 2026-10-21).
import { snl, sep, bok } from "../kilder.mjs";

const R = "Klassisk dannelse";
const JAEGER = bok("Jaeger, Werner. Paideia: Die Formung des griechischen Menschen. 3 bind. De Gruyter, 1934–1947.");
const MARROU = bok("Marrou, Henri-Irénée. Histoire de l'éducation dans l'Antiquité. Seuil, 1948.");
const GRAFTON = bok("Grafton, Anthony og Lisa Jardine. From Humanism to the Humanities: Education and the Liberal Arts in Fifteenth- and Sixteenth-Century Europe. Duckworth, 1986.");
const STRAUME = bok("Straume, Ingerid S. (red.). Danningens filosofihistorie. Gyldendal Akademisk, 2013.");
const BIESTA10 = bok("Biesta, Gert. Good Education in an Age of Measurement: Ethics, Politics, Democracy. Paradigm, 2010.");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler tradisjonen som ser oppdragelse som dannelse av hele mennesket gjennom møtet med kulturens beste uttrykk: språket, litteraturen, filosofien og kunsten. Den går fra den greske *paideia* via romersk *humanitas*, de sju frie kunster og renessansehumanismen til nyhumanismens *Bildung*, den tyske dannelsesteorien og dagens dannelsesdebatt. Felles er at målet ikke er nytte eller ferdigheter, men et menneske som tenker selv, dømmer klokt og tar del i et fellesskap, og at veien går gjennom et innhold med egen verdi. Felles er også kritikken: at dannelsen har vært elitens, at kanon har ekskludert, og at «dannet» lett blir et standsmerke. I Norge har tradisjonen levd i latinskolen, universitetet og i ordet danning i læreplanene.
          `,
          kilder: [snl("https://snl.no/dannelse"), STRAUME],
        },
        story: {
          body: `
            ### Paideia og humanitas
            Tradisjonen begynner i Athen i det femte århundret før Kristus. Sofistene solgte dyktighet i tale og politikk, Sokrates spurte hva dyd er og om den kan læres, og Platon svarte med en filosofi der oppdragelsen vender sjelen mot det gode. Isokrates satte den retoriske dannelsen opp mot filosofien, og Aristoteles knyttet dygd til vane og fritid til det gode liv. *Paideia* ble navnet på hele det greske dannelsesidealet. Romerne overtok det: Cicero kalte det *humanitas*, og Quintilian beskrev talerens oppdragelse fra vuggen som en oppdragelse til et godt menneske som kan tale.

            ### Artes og humanisme
            I senantikken ble dannelsen ordnet i de sju frie kunster, trivium og quadrivium, av Martianus Capella, Boethius og Cassiodorus, og slik ble den overlevert gjennom kloster- og katedralskolene som en forberedelse til teologien. Renessansehumanistene ville tilbake til kildene: Vittorino da Feltres skole i Mantua, Erasmus' og Vives' oppdragelsesskrifter og en latinskole bygd på klassisk litteratur, historie og moralfilosofi. Anthony Grafton og Lisa Jardine har vist at humanistskolen i praksis ofte var drill som utdannet en lojal elite. I Bergen var Absalon Pederssøn Beyer et eksempel på hvordan humanismen nådde Norge med reformasjonen.

            ### Bildung
            Rundt 1800 fikk tradisjonen sitt tyske kjernebegrep. Wilhelm von Humboldt beskrev dannelsen som den høyeste og mest harmoniske utfoldelsen av menneskets krefter i møte med verden, og gjorde det til program for den prøyssiske gymnasreformen og Universitetet i Berlin (1810). Schiller ga den en estetisk vending, og Niethammer satte humanismen opp mot filantropistenes nyttetenkning. Det klassiske gymnaset med latin og gresk ble Europas elitesskole i hundre år, også i Norge, der det første universitetet (1811) var preget av samme ideal.

            ### Dannelsesteori og ny dannelse
            I det tjuende århundret ble Bildung et vitenskapelig begrep i den åndsvitenskapelige pedagogikken. Herman Nohl, Eduard Spranger og Erich Weniger gjorde dannelse, pedagogisk forhold og læreplanens historiske karakter til fagets sentrum, og Wolfgang Klafki forente den materiale og formale dannelsen i sin kategoriale dannelse. Etter krigen ble det klart hvor mange av dem som hadde kompromittert seg med nasjonalsosialismen, og 1968-generasjonen kritiserte tradisjonen for å være apolitisk. Klafki svarte med en kritisk-konstruktiv didaktikk og «epoketypiske nøkkelproblemer». Etter år 2000 vendte begrepet tilbake som motvekt til målstyring, testing og kompetansebegrepet, med Gert Biesta, Klaus Mollenhauer og Martha Nussbaum som viktige stemmer, og ordet danning står i dag sentralt i læreplanens overordnede del (2017).
          `,
        },
      },
    },
    main: {
      "Gresk paideia": {
        main: {
          era: "ca. 450–300 f.Kr.", activeFrom: -450, activeTo: -300,
          description: `
            *Paideia* betyr både oppdragelse og kultur. Den tradisjonelle athenske oppdragelsen var privat og gjaldt frie gutter: lesing og skriving hos *grammatistes*, musikk og dikt (Homer) hos *kitharistes* og idrett hos *paidotribes*, med en slave, *paidagogos*, som fulgte gutten. I det femte århundret kom sofistene, som Protagoras, og solgte opplæring i tale og politisk dyktighet for betaling, og reiste spørsmålet om dygd (*aretē*) kan læres.

            Sokrates stilte spørsmålet på nytt gjennom samtalen, der motpartens selvsikkerhet brytes ned (*elenchos*) og innsikt forløses (fødselshjelpskunsten i *Theaitetos*). Platon gjorde oppdragelsen til statens kjerne i *Staten*: musikk og idrett for alle voktere, så matematikk og dialektikk for de få, og hulelignelsen som bilde på oppdragelse som en omvending av sjelen. I *Lovene* skisserte han en offentlig og livslang oppdragelse. Isokrates grunnla en skole (ca. 390 f.Kr.) der retorisk og politisk dannelse var målet, og Aristoteles knyttet dygd til vanedannelse og skrev i *Politikken* om en felles, offentlig oppdragelse til et liv i fritid (*scholē*).

            Werner Jaegers *Paideia* (1934–1947) gjorde den greske oppdragelsen til et tidløst ideal, Henri-Irénée Marrou skrev dens sosiale historie (1948). Senere forskning har understreket hvor eksklusiv den var: kvinner, slaver og fremmede sto utenfor.
          `,
          samfunn: `
            Bystaten (*polis*), athensk demokrati for frie menn, slaveri og Peloponneserkrigen (431–404 f.Kr.). Talekunst var makt i folkeforsamling og domstol, og spørsmålet om hvem som kunne lære politisk dyktighet, var et demokratisk spørsmål.
          `,
          skole: `
            Ingen offentlige skoler i Athen, men private lærere, idrettsplasser (*palaistra*, *gymnasion*) og fra 300-tallet en organisert militær utdanning av unge menn (*ephebeia*). Sparta hadde en statlig oppdragelse (*agogē*). Platons akademi og Aristoteles' Lykeion ble mønstre for senere høyere skoler.
          `,
          kilder: [snl("https://snl.no/Platon"), sep("https://plato.stanford.edu/entries/plato/"), JAEGER, MARROU],
        },
      },
      "Romersk humanitas": {
        main: {
          era: "ca. 80 f.Kr.–100", activeFrom: -80, activeTo: 100,
          description: `
            Romerne overtok den greske dannelsen og ga den et romersk mål: den gode taleren og borgeren. Cicero forente veltalenhet og filosofi i talerens ideal (*De oratore*, 55 f.Kr.), og ordet *humanitas* fikk betydningen dannelse og menneskelighet på én gang: det som gjør mennesket til menneske, gjennom studiet av de fag som hører et fritt menneske til. Quintilian beskrev i *Institutio oratoria* (ca. 95) oppdragelsen av taleren fra vuggen: tidlig språkopplæring, offentlig skole framfor privatlærer, lek og ros framfor juling, og et mål som er moralsk, «en god mann som kan tale».

            Seneca stilte spørsmål ved de frie kunster: de forbereder, men gjør ingen god, og han klaget over at «vi lærer for skolen, ikke for livet». Det romerske tredelte skolesystemet, med lese- og skrivelærer, grammatiker og retor, ble forbildet for europeisk skole i halvannet årtusen.

            Quintilian forsvant nesten fra Europa i middelalderen; funnet av et fullstendig manuskript i St. Gallen i 1416 ble en hendelse for humanistene.
          `,
          samfunn: `
            Republikkens siste tiår og keiserrikets første århundre: et imperium der gresk kultur var overklassens dannelse, og der talekunst var veien til karriere i domstol og senat. Under keiserne mistet talen sin politiske kraft, og retorikken ble skolefag og underholdning.
          `,
          skole: `
            Barn fra frie familier gikk hos *litterator*, *grammaticus* og *rhetor*, mest privat og i byene. Keiser Vespasian ga lønn til de første offentlige lærerstolene i retorikk (Quintilian hadde en av dem), og skolene i provinsene spredte latinsk dannelse i hele riket.
          `,
          kilder: [snl("https://snl.no/Cicero"), snl("https://snl.no/Quintilian"), sep("https://plato.stanford.edu/entries/cicero/"), MARROU],
        },
      },
      "Artes liberales": {
        main: {
          era: "ca. 500–1100", activeFrom: 420, activeTo: 1100,
          description: `
            De sju frie kunster (*artes liberales*) er den ordningen av dannelsesfagene som senantikken overleverte til middelalderen: språkfagene grammatikk, retorikk og dialektikk (*trivium*) og tallfagene aritmetikk, geometri, musikk og astronomi (*quadrivium*). Martianus Capella ga dem en allegorisk form i *Merkurs og Philologias bryllup* (første halvdel av 400-tallet), Boethius brukte ordet *quadrivium* og oversatte og kommenterte gresk logikk og matematikk, og Cassiodorus gjorde kunstene til munkenes forberedelse til bibelstudiet ved klosteret Vivarium (*Institutiones*, ca. 560).

            Kunstene var «frie» fordi de hørte det frie mennesket til, i motsetning til de mekaniske kunstene, og de ble forstått som veien fra det sanselige til det åndelige, og som tjenere for teologien. Den karolingiske renessansen, med Alkuin ved Karl den stores hoff, gjorde dem til grunnlaget for kloster- og katedralskolene i hele det latinske Europa.

            Pierre Riché har vist hvor tynn den lærde kulturen var i perioden: noen få klostre og bispeseter bar den, og skrift og latin var geistlighetens monopol.
          `,
          samfunn: `
            Vestromerrikets fall (476), østgoternes Italia, de germanske kongedømmene og kristningen av Europa. Klostrene ble de viktigste bærerne av skrift og lærdom, og Karl den store forsøkte å samle riket gjennom kirke, lov og skole.
          `,
          skole: `
            Kloster- og katedralskoler for gutter som skulle bli munker og prester, med latin, salmesang, tidsregning og de frie kunster. I Norden kom skolene først med kristningen og bispesetene i høymiddelalderen.
          `,
          kilder: [snl("https://snl.no/Martianus_Capella"), snl("https://snl.no/Bo%C3%ABthius"), snl("https://snl.no/Cassiodorus"), sep("https://plato.stanford.edu/entries/boethius/")],
        },
      },
      "Humanismen": {
        main: {
          era: "ca. 1400–1550", activeFrom: 1400, activeTo: 1550,
          description: `
            Renessansehumanismen var en dannelsesbevegelse før den var en filosofi. *Studia humanitatis*, som Paul Oskar Kristeller definerte dem, var grammatikk, retorikk, poesi, historie og moralfilosofi, studert i de klassiske tekstene selv og ikke i skolastikkens kommentarer. Pier Paolo Vergerio skrev det første humanistiske oppdragelsesskriftet (ca. 1402), og Vittorino da Feltre i Mantua og Guarino da Verona i Ferrara drev internatskoler der klassisk litteratur, lek, idrett og kristen fromhet skulle danne fyrstebarn og fattige begavelser, gutter og noen jenter.

            I nord forente Erasmus humanismen med en reformert kristendom: *bonae litterae* og *pietas*, med skrifter om studiets orden (1511), om en kristen fyrstes oppdragelse (1516) og om tidlig og mild oppdragelse av barn (1529). Juan Luis Vives skrev om kvinners oppdragelse (1523), fattighjelp (1526) og et helt fagsystem (*De tradendis disciplinis*, 1531), og pekte fram mot Comenius.

            Humanismen ga Europa latinskolen og gymnaset. Anthony Grafton og Lisa Jardine har likevel vist at skolene i praksis var pugg, imitasjon og disiplin, og at de passet godt til en ny stat som trengte lojale og veltalende tjenestemenn.
          `,
          samfunn: `
            De italienske bystatene og fyrstehoffene (Gonzaga, Este, Medici), boktrykkerkunsten (Gutenberg rundt 1450), oppdagelsesreisene og en voksende stat med behov for skrivekyndige embetsmenn. Reformasjonen tok opp og forandret humanismen i nord.
          `,
          skole: `
            Latinskoler og kollegier med klassisk pensum, nye lærebøker og grammatikker, og etter hvert humanistiske gymnasier i protestantiske byer. I Norge nådde humanismen med reformasjonen og latinskolene, med Bergens-humanistene rundt Geble Pederssøn og Absalon Pederssøn Beyer.
          `,
          kilder: [snl("https://snl.no/humanisme"), sep("https://plato.stanford.edu/entries/erasmus/"), GRAFTON],
        },
      },
      "Nyhumanismen": {
        main: {
          era: "ca. 1790–1850", activeFrom: 1790, activeTo: 1850,
          description: `
            Nyhumanismen gjorde grekerne til forbildet for et nytt dannelsesideal. Winckelmann hadde lovprist den greske kunstens «edle enfold og stille storhet» (1755), og Wilhelm von Humboldt beskrev i fragmentet *Theorie der Bildung des Menschen* (ca. 1793) dannelsen som menneskets høyeste og mest harmoniske utfoldelse av sine krefter til en helhet, i et vekselspill med verden. Friedrich Schiller ga den en estetisk vending (*Über die ästhetische Erziehung des Menschen*, 1795): mennesket er bare helt menneske der det leker, og skjønnheten forsoner sansning og fornuft.

            Som leder for den prøyssiske kultus- og undervisningsseksjonen (1809–1810) gjorde Humboldt idealet til politikk: et gymnas med latin, gresk og matematikk for alle som skulle studere, en lærerutdanning med eksamen og Universitetet i Berlin (1810), bygd på forskningens og undervisningens enhet. Friedrich Immanuel Niethammer formulerte konflikten med filantropistene (1808), og Hegel holdt som gymnasrektor i Nürnberg taler om dannelsen gjennom de gamle språkene.

            Forskningen har vist at «Humboldt-universitetet» er en myte som i stor grad ble skapt rundt 1900, og at det nyhumanistiske gymnaset raskt ble en eliteskole som reproduserte det dannede borgerskapet.
          `,
          samfunn: `
            Den franske revolusjonen og Napoleonskrigene, Preussens nederlag i 1806 og reformene som fulgte. Romantikken, det dannede borgerskapet (*Bildungsbürgertum*) og en ny nasjonal og kulturell selvbevissthet i de tyske statene.
          `,
          skole: `
            Det humanistiske gymnaset med artium (*Abitur*), filologiske seminarer og en lærerstand med universitetsutdanning. I Danmark-Norge kom en ny ordning for de lærde skolene i 1809, og universitetet i Christiania (1811) fikk et nyhumanistisk preg.
          `,
          kilder: [snl("https://snl.no/Wilhelm_von_Humboldt"), sep("https://plato.stanford.edu/entries/wilhelm-humboldt/"), sep("https://plato.stanford.edu/entries/schiller/")],
          usikre: [{ tekst: "Den nye ordningen for de lærde skolene i Danmark-Norge i 1809", hvorfor: "Årstallet er gjengitt etter hukommelsen", hvorSjekke: "SNL: latinskole; norsk utdanningshistorie" }],
        },
      },
      "Dannelsesteorien": {
        main: {
          era: "ca. 1920–1970", activeFrom: 1920, activeTo: 1970,
          description: `
            Den åndsvitenskapelige pedagogikken gjorde dannelsen til et vitenskapelig begrep. Med Wilhelm Dilthey som filosofisk utgangspunkt ville Herman Nohl, Eduard Spranger, Theodor Litt, Wilhelm Flitner og Erich Weniger forstå oppdragelsen hermeneutisk, som en historisk og kulturell virkelighet med egen logikk. Nohl formulerte det pedagogiske forholdet (*pädagogischer Bezug*) mellom den voksne og den unge og pedagogikkens relative autonomi, og skrev reformbevegelsens historie (1933/1935). Weniger viste at læreplanen er resultatet av en kamp mellom samfunnsmakter, og gjorde didaktikken til en teori om dannelsesinnhold.

            Wolfgang Klafki samlet tradisjonen i *kategorial dannelse* (1959): dannelse er en dobbel åpning, der verden åpner seg for mennesket og mennesket for verden gjennom det eksemplariske og elementære. Hans didaktiske analyse (1958) ble en mal for planlegging i hele Norden. Etter 1968 gjorde Klafki dannelsesteorien kritisk-konstruktiv, med evne til selvbestemmelse, medbestemmelse og solidaritet og arbeid med epoketypiske nøkkelproblemer som mål.

            Etterkrigstidens forskning har dokumentert hvordan Spranger, Nohl og Weniger i ulik grad tilpasset seg nasjonalsosialismen, og dannelsesteorien ble kritisert for å være apolitisk og konservativ. Den har likevel preget nordisk didaktikk, også norsk, mer enn den amerikanske curriculum-tradisjonen.
          `,
          samfunn: `
            Weimarrepublikken, nasjonalsosialismen og etterkrigstidens Vest-Tyskland, med restaurasjon i 1950-årene og studentopprør i 1960-årene. Pedagogikken ble et universitetsfag med egen identitet, og kampen om skolens innhold ble en kamp om nasjonens kultur.
          `,
          skole: `
            Pedagogiske akademier for lærerutdanning (fra 1926), læreplanreformer og en tysk og nordisk didaktikktradisjon der spørsmålet om hva elevene skal lære, og hvorfor, sto sentralt. Klafkis didaktiske analyse ble pensum i norsk lærerutdanning.
          `,
          kilder: [snl("https://snl.no/Wolfgang_Klafki"), snl("https://snl.no/Eduard_Spranger"), snl("https://snl.no/dannelse")],
        },
      },
      "Ny dannelsesdebatt": {
        main: {
          era: "2000-tallet–", activeFrom: 2000, activeTo: null,
          description: `
            Etter år 2000 kom dannelsesbegrepet tilbake i nordisk og internasjonal debatt, som et svar på målstyring, testing, kompetansebegrepet og det Gert Biesta kalte «læringifiseringen» av utdanningen: når alt beskrives som læring, forsvinner spørsmålet om hva læringen er til for. Biesta skiller mellom utdanningens tre funksjoner, kvalifisering, sosialisering og subjektivering, og forsvarer utdanningens «vakre risiko»: oppdragelse handler om å gjøre mennesker i stand til å være subjekter, noe som ikke kan garanteres eller måles.

            Klaus Mollenhauers *Vergessene Zusammenhänge* (1983, *Glemte sammenhenger* 1996) ble lest i Norden som en påminnelse om at oppdragelse er overlevering av en kultur og en livsform, ikke bare tilrettelegging for læring. Martha Nussbaum forsvarte humaniora som demokratiets forutsetning (*Not for Profit*, 2010). I Norge la Dannelsesutvalget for høyere utdanning fram sin rapport i 2009, og *Danningens filosofihistorie* (2013) samlet tradisjonen. Danning er et bærende begrep i den overordnede delen av læreplanverket fra 2017, der et av kapitlene handler om prinsipper for læring, utvikling og danning.

            Kritikerne har pekt på at dannelsesbegrepet er vagt, at det lett blir elitært eller nostalgisk, og at det sier lite om hva skolen konkret skal gjøre. Debatten viser likevel at spørsmålet om utdanningens mål ikke lar seg erstatte av spørsmålet om effekt.
          `,
          samfunn: `
            Globalisering, kunnskapsøkonomi og en styring av utdanning gjennom mål, resultater og internasjonale sammenligninger. Krisen for humaniora i høyere utdanning og spørsmål om demokrati, polarisering og teknologi ga dannelsesdebatten ny aktualitet.
          `,
          skole: `
            Overordnet del av læreplanverket (2017) gjør danning og identitet, kritisk tenkning og demokrati til grunnverdier ved siden av fagene. I høyere utdanning ble dannelse et argument for bredde, examen philosophicum og humanistiske fag.
          `,
          kilder: [snl("https://snl.no/dannelse"), BIESTA10, STRAUME],
        },
      },
    },
  },

  edgeDescriptions: {
    paideia__humanitas: {
      description: `
        Romersk dannelse var gresk dannelse på latin. Romerne hentet greske lærere, oversatte begrepene og gjorde *paideia* til *humanitas*, med Cicero som den store formidleren. Men målet ble romersk: ikke filosofens kontemplasjon, men den gode taleren og borgeren i republikkens tjeneste.
      `,
      kilder: [MARROU],
    },
    humanitas__artes: {
      description: `
        De sju frie kunster er senantikkens ordning av den romerske dannelsens fag. Varro hadde skrevet om ni disipliner, og Martianus Capella, Boethius og Cassiodorus ga sju av dem den formen middelalderen arvet, nå som forberedelse til teologien i stedet for til politikken.
      `,
    },
    humanitas__humanisme: {
      description: `
        Renessansehumanistene tok navnet og idealet sitt fra Cicero: *studia humanitatis* skulle danne et menneske som forener veltalenhet, kunnskap og dygd. Funnet av Quintilians fullstendige *Institutio oratoria* i St. Gallen (1416) og Ciceros retoriske skrifter ga humanistskolene deres pedagogiske program.
      `,
      kilder: [GRAFTON],
    },
    // Motreaksjon.
    skolastikk__humanisme: {
      description: `
        Humanistene definerte seg mot skolastikken: dens «barbariske» latin, dialektiske spissfindigheter og kommentarer til kommentarer. Petrarca og hans etterfølgere ville tilbake til kildene og til retorikk, historie og poesi. Forskningen har senere vist at skillet var mindre skarpt: humanister og skolastikere levde lenge side om side ved de samme universitetene.
      `,
    },
    humanisme__nyhumanisme: {
      description: `
        Nyhumanismen fornyet renessansehumanismens dannelse gjennom antikken, men med en annen vekt: ikke imitasjon av latinsk stil, men møte med den greske ånden som forbilde for menneskets harmoniske utvikling. Latinskolens pugg ble kritisert som død lærdom, og gresk fikk en ny plass i gymnaset.
      `,
    },
    paideia__nyhumanisme: {
      description: `
        Grekerne var nyhumanismens forbilde, gjennom Winckelmanns kunstsyn, Wolfs klassiske filologi og Humboldts dannelsesteori. Den greske *paideia* ble lest som uttrykk for en helhetlig og fri menneskelighet som den moderne verdens arbeidsdeling hadde splittet, en lesning som sa like mye om Tyskland rundt 1800 som om Athen.
      `,
      kilder: [JAEGER],
    },
    nyhumanisme__dannelsesteori: {
      description: `
        Dannelsesteorien gjorde nyhumanismens *Bildung* til et vitenskapelig begrep. Dilthey og hans elever leste Humboldt, Schleiermacher og Goethe som klassikere og ville forstå dannelsen historisk og hermeneutisk. Klafkis kategoriale dannelse var et forsøk på å forene den nyhumanistiske arven med en moderne skole for alle.
      `,
      kilder: [snl("https://snl.no/Wolfgang_Klafki")],
    },
    dannelsesteori__nydannelse: {
      description: `
        Den nye dannelsesdebatten tok opp dannelsesteoriens spørsmål om utdanningens mål og innhold, men med nye kilder: Arendt, Levinas, Rancière og pragmatismen hos Biesta, kulturkritikk hos Mollenhauer og kapabilitetstilnærmingen hos Nussbaum. Klafki og den tyske *Didaktik* ble samtidig lest på nytt i internasjonal didaktikkforskning.
      `,
      kilder: [BIESTA10],
    },
  },

  artists: [
    // --- Gresk paideia -----------------------------------------------------
    {
      name: "Protagoras", birthYear: -485, deathYear: -415, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Gresk paideia"],
      subGenre: ["Dygd kan læres"],
      influenceStart: -450, influenceEnd: -415, geography: "Abdera og Athen",
      description: `
        Gresk filosof, den mest kjente av sofistene. Han reiste mellom bystatene og tok betaling for å lære unge menn politisk dyktighet og talekunst, og hevdet at dygd kan læres. Setningen om at «mennesket er alle tings målestokk» er blitt lest som en relativisme. I Platons dialog *Protagoras* forsvarer han med myten om Prometevs at alle borgere har del i rettferdighet og skam, og at oppdragelse gjennom foreldre, lærere og lover gjør dem bedre. Protagoras gjorde dermed oppdragelsen til et demokratisk spørsmål: kan alle lære det som trengs for å styre?
      `,
      kilder: [snl("https://snl.no/Protagoras_fra_Abdera"), sep("https://plato.stanford.edu/entries/protagoras/")],
    },
    {
      name: "Sokrates", birthYear: -469, deathYear: -399, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Gresk paideia"],
      subGenre: ["Dygd kan læres", "Dialogisk undervisning"],
      influenceStart: -430, influenceEnd: -399, geography: "Athen",
      description: `
        Gresk filosof som ikke skrev noe selv, men er kjent gjennom Platon, Xenofon og Aristofanes. I samtaler på torget prøvde han andres oppfatninger av dygd, rettferdighet og mot, og viste at de ikke holdt (*elenchos*). Han hevdet å vite at han ikke visste, og sammenlignet seg med en fødselshjelper som hjelper andre å forløse sine egne tanker. Den sokratiske samtalen er blitt et grunnbilde av undervisning som spørsmål og selvstendig tenkning. Han ble dømt til døden i 399 f.Kr. for å ha fordervet ungdommen og ikke trodd på byens guder.
      `,
      kilder: [snl("https://snl.no/Sokrates"), sep("https://plato.stanford.edu/entries/socrates/")],
    },
    {
      name: "Platon", birthYear: -428, deathYear: -347, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Gresk paideia"],
      subGenre: ["Dygd kan læres", "Allsidig utvikling"],
      influenceStart: -399, influenceEnd: -347, geography: "Athen",
      description: `
        Gresk filosof, Sokrates' elev, som grunnla Akademiet (ca. 387 f.Kr.). *Staten* er den første store teorien om oppdragelse: musikk og idrett for å forme sjelen hos alle voktere, matematikk og dialektikk for de få som skal styre, og hulelignelsen som bilde på oppdragelse som en omvending av hele sjelen fra skyggene mot det gode. *Menon* spør om dygd kan læres og antyder at læring er gjenerindring. I *Lovene* skisserte han en offentlig, obligatorisk og livslang oppdragelse også for jenter. Platons pedagogikk er blitt lest både som et dannelsesideal og som en totalitær statsoppdragelse.
      `,
      keyWorks: [
        { title: "Menon" },
        { title: "Staten (Politeia)" },
        { title: "Lovene (Nomoi)" },
      ],
      kilder: [snl("https://snl.no/Platon"), sep("https://plato.stanford.edu/entries/plato/")],
    },
    {
      name: "Isokrates", birthYear: -436, deathYear: -338, gender: "mann",
      metaGenre: R, instrument: "Praktiker", instrument2: "Filosof", mainGenre: ["Gresk paideia"],
      subGenre: ["Allsidig utvikling"],
      influenceStart: -390, influenceEnd: -338, geography: "Athen",
      description: `
        Gresk talelærer og politisk tenker. Han grunnla rundt 390 f.Kr. en skole i Athen som i flere tiår utdannet politikere og talere fra hele den greske verden, og satte i *Mot sofistene* og *Antidosis* den retoriske dannelsen opp mot både sofistenes knep og Platons filosofi: å tale godt om viktige saker gjør mennesket klokt og godt, og dannelse er det som gjør grekere til grekere. Marrou har kalt ham den egentlige læremesteren for antikkens dannelse, fordi det var hans retoriske ideal, ikke Platons filosofi, som ble skolens.
      `,
      kilder: [snl("https://snl.no/Isokrates"), MARROU],
    },
    {
      name: "Aristoteles", birthYear: -384, deathYear: -322, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Gresk paideia"],
      subGenre: ["Allsidig utvikling", "Læring gjennom erfaring"],
      influenceStart: -335, influenceEnd: -322, geography: "Athen (Lykeion)",
      description: `
        Gresk filosof, Platons elev og lærer for Aleksander den store, som grunnla Lykeion i Athen (335 f.Kr.). I *Den nikomakiske etikk* blir de moralske dygdene til gjennom vane: vi blir rettferdige ved å handle rettferdig. Klokskap (*phronesis*) er en praktisk visdom som ikke kan læres som regler. I *Politikken* krever han at oppdragelsen skal være felles og offentlig, og at den skal danne til et liv i fritid (*scholē*), ikke bare til arbeid, med musikk som dannelsesfag. Begrepene om vane, praktisk klokskap og det gode liv er tatt opp igjen i nyere dygdsetikk og profesjonsetikk.
      `,
      keyWorks: [
        { title: "Den nikomakiske etikk" },
        { title: "Politikken" },
      ],
      kilder: [snl("https://snl.no/Aristoteles"), sep("https://plato.stanford.edu/entries/aristotle/")],
    },

    // --- Romersk humanitas -------------------------------------------------
    {
      name: "Marcus Tullius Cicero", birthYear: -106, deathYear: -43, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", instrument2: "Filosof", mainGenre: ["Romersk humanitas"],
      subGenre: ["Allsidig utvikling"],
      influenceStart: -80, influenceEnd: -43, geography: "Roma",
      description: `
        Romersk politiker, advokat og forfatter. I *De oratore* (55 f.Kr.) forener han veltalenhet og filosofi i idealet om taleren som behersker alle fag og bruker dem til felleskapets beste. Hans bruk av *humanitas* om både dannelse og menneskelighet ble opphavet til renessansens *studia humanitatis*. Ciceros latin ble stilforbildet i europeiske skoler i halvannet årtusen, og humanistene diskuterte om man skulle skrive som Cicero eller som seg selv.
      `,
      keyWorks: [{ title: "De oratore", year: -55 }],
      kilder: [snl("https://snl.no/Cicero"), sep("https://plato.stanford.edu/entries/cicero/")],
    },
    {
      name: "Quintilian", birthYear: 35, deathYear: 100, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Romersk humanitas"],
      subGenre: ["Allsidig utvikling", "Leken som læringsform"],
      influenceStart: 68, influenceEnd: 100, geography: "Roma",
      description: `
        Romersk retor og lærer fra Spania, som fikk en av de første offentlig lønnede lærerstolene i retorikk under Vespasian. *Institutio oratoria* (ca. 95) beskriver oppdragelsen av taleren fra vuggen til voksen alder og er antikkens mest systematiske pedagogiske verk: barnet skal lære tidlig og gjennom lek, læreren skal tilpasse seg elevens evner, offentlig skole er bedre enn privat, ros virker bedre enn juling, og målet er «en god mann som kan tale». Funnet av et fullstendig manuskript i 1416 gjorde boka til humanistenes pedagogiske håndbok.
      `,
      keyWorks: [{ title: "Institutio oratoria", year: 95 }],
      kilder: [snl("https://snl.no/Quintilian"), MARROU],
    },
    {
      name: "Seneca den yngre", birthYear: -4, deathYear: 65, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Romersk humanitas"],
      subGenre: ["Allsidig utvikling"],
      influenceStart: 40, influenceEnd: 65, geography: "Roma",
      description: `
        Romersk stoisk filosof, forfatter og lærer for den unge keiser Nero. I brevene til Lucilius (*Epistulae morales*) stiller han de frie kunster til ansvar: de kan forberede sjelen, men ikke gjøre den god, og bare filosofien lærer oss å leve (brev 88). I brev 106 klager han over at «vi lærer ikke for livet, men for skolen», en setning som senere er blitt snudd til et pedagogisk motto. Seneca er et tidlig eksempel på kritikken av en dannelse som blir lærdom uten livsvisdom.
      `,
      keyWorks: [{ title: "Epistulae morales ad Lucilium" }],
      kilder: [sep("https://plato.stanford.edu/entries/seneca/")],
    },

    // --- Artes liberales ---------------------------------------------------
    {
      name: "Martianus Capella", gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Artes liberales"],
      subGenre: ["Allsidig utvikling"],
      influenceStart: 410, influenceEnd: 440, geography: "Karthago, Nord-Afrika",
      description: `
        Romersk forfatter fra Nord-Afrika i første halvdel av 400-tallet. Hans allegoriske encyklopedi *Merkurs og Philologias bryllup* lar de sju frie kunster opptre som brudepiker, hver med en framstilling av sitt fag: grammatikk, dialektikk, retorikk, geometri, aritmetikk, astronomi og harmonilære. Boka ble en av middelalderens mest brukte lærebøker og fastla antallet og rekkefølgen av de frie kunster. Den er et eksempel på hvordan antikkens dannelse ble overlevert som systematisert skolestoff.
      `,
      keyWorks: [{ title: "De nuptiis Philologiae et Mercurii" }],
      kilder: [snl("https://snl.no/Martianus_Capella")],
    },
    {
      name: "Boethius", birthYear: 480, deathYear: 524, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Politiker og reformator", mainGenre: ["Artes liberales"],
      subGenre: ["Allsidig utvikling"],
      influenceStart: 500, influenceEnd: 524, geography: "Roma og Ravenna",
      description: `
        Romersk filosof og statsmann i tjeneste hos østgoterkongen Theoderik. Han ville oversette og kommentere hele Platon og Aristoteles på latin, og hans lærebøker i logikk, aritmetikk og musikk var grunnbøker i middelalderens skoler. Han brukte ordet *quadrivium* om tallfagene som vei fra det sanselige til det evige. I fengselet før henrettelsen skrev han *Filosofiens trøst*, en av middelalderens mest leste bøker, der filosofien selv underviser den fortvilte fangen.
      `,
      keyWorks: [{ title: "De consolatione philosophiae", year: 524 }],
      kilder: [snl("https://snl.no/Bo%C3%ABthius"), sep("https://plato.stanford.edu/entries/boethius/")],
    },
    {
      name: "Cassiodorus", birthYear: 485, deathYear: 580, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", instrument2: "Teolog", mainGenre: ["Artes liberales", "Klosterskolene"],
      subGenre: ["Allsidig utvikling"],
      influenceStart: 540, influenceEnd: 580, geography: "Vivarium, Calabria",
      description: `
        Romersk senator og statsmann som etterfulgte Boethius hos Theoderik, og som etter et mislykt forsøk på å grunnlegge en kristen høyskole i Roma trakk seg tilbake til klosteret Vivarium i Sør-Italia. *Institutiones* (ca. 560) gir munkene en studieplan: først Bibelen og kirkefedrene, så de sju frie kunster som redskaper for å forstå dem. Kopieringen av manuskripter ble en del av munkenes arbeid, og Cassiodorus regnes som en av dem som gjorde klostrene til bærere av antikkens lærdom.
      `,
      keyWorks: [{ title: "Institutiones divinarum et saecularium litterarum" }],
      kilder: [snl("https://snl.no/Cassiodorus")],
    },

    // --- Humanismen --------------------------------------------------------
    {
      name: "Vittorino da Feltre", birthYear: 1378, deathYear: 1446, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Humanismen"],
      subGenre: ["Allsidig utvikling", "Leken som læringsform"],
      influenceStart: 1423, influenceEnd: 1446, geography: "Mantua",
      description: `
        Italiensk humanist og lærer. Fra 1423 drev han for markgreven Gonzaga en internatskole i Mantua, *La Giocosa* («det glade huset»), for Gonzagas barn, også døtrene, og for begavede elever uten midler. Skolen forente klassisk latin og gresk, matematikk, musikk, idrett og lek, kristen fromhet og disiplin, og regnes som den fremste humanistskolen i Italia. Vittorino skrev nesten ingenting; hans pedagogikk er kjent gjennom elevene og deres skildringer.
      `,
      kilder: [GRAFTON],
    },
    {
      name: "Erasmus av Rotterdam", birthYear: 1466, deathYear: 1536, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Filosof", mainGenre: ["Humanismen"],
      subGenre: ["Allsidig utvikling", "Barndommens egenverdi"],
      influenceStart: 1500, influenceEnd: 1536, geography: "Nederland, England, Basel",
      description: `
        Nederlandsk teolog og den ledende humanisten i Nord-Europa. Han ville forene klassisk dannelse (*bonae litterae*) og kristen fromhet, og skrev lærebøker, samtaler (*Colloquia*) og ordtakssamlinger (*Adagia*) som ble brukt i latinskolene i flere hundre år. *De ratione studii* (1511) gir en studieplan, *Institutio principis christiani* (1516) en fyrsteoppdragelse, og *De pueris instituendis* (1529) argumenterer for tidlig, mild og lekende oppdragelse og mot juling. Erasmus' utgave av Det nye testamente på gresk (1516) var et grunnlag for reformasjonen, selv om han ikke ble med i den.
      `,
      keyWorks: [
        { title: "De ratione studii", year: 1511 },
        { title: "Institutio principis christiani", year: 1516 },
        { title: "De pueris instituendis", year: 1529 },
      ],
      kilder: [snl("https://snl.no/Erasmus_av_Rotterdam"), sep("https://plato.stanford.edu/entries/erasmus/")],
    },
    {
      name: "Juan Luis Vives", birthYear: 1492, deathYear: 1540, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Humanismen"],
      subGenre: ["Lik rett til utdanning", "Anskuelsesprinsippet"],
      influenceStart: 1519, influenceEnd: 1540, geography: "Valencia, Leuven, Oxford og Brugge",
      description: `
        Spansk humanist av jødisk slekt, som levde i Nederland og England. *De institutione feminae christianae* (1523), skrevet for dronning Katarina av Aragon, argumenterer for at jenter skal lære å lese og studere, om enn innenfor en streng kristen kjønnsorden. *De subventione pauperum* (1526) er en tidlig plan for offentlig fattighjelp med opplæring av fattige barn, og *De tradendis disciplinis* (1531) et helt system for undervisning i alle fag, med vekt på iakttakelse og erfaring. Med *De anima et vita* (1538) regnes han som en forløper for den empiriske psykologien, og han påvirket Comenius.
      `,
      keyWorks: [
        { title: "De institutione feminae christianae", year: 1523 },
        { title: "De subventione pauperum", year: 1526 },
        { title: "De tradendis disciplinis", year: 1531 },
        { title: "De anima et vita", year: 1538 },
      ],
      kilder: [snl("https://snl.no/Juan_Luis_Vives"), sep("https://plato.stanford.edu/entries/vives/")],
    },
    {
      name: "Absalon Pederssøn Beyer", birthYear: 1528, deathYear: 1575, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Humanismen", "Reformasjonen"],
      subGenre: ["Undervisning på morsmålet"],
      influenceStart: 1552, influenceEnd: 1575, geography: "Bergen",
      description: `
        Norsk prest, historiker og lærer, og en av de sentrale Bergens-humanistene rundt biskop Geble Pederssøn. Han studerte i København og Wittenberg og var lektor ved katedralskolen i Bergen. Skriftet *Om Norgis Rige* (1567) og dagboka hans (*Absalons dagbok*) er viktige kilder til tidens Bergen. Beyer var en av brobyggerne i den norske reformasjonen, og møtte motstand fra borgerskapet, men han viser hvordan humanistisk lærdom, luthersk tro og norsk historiebevissthet kom sammen i latinskolen.
      `,
      keyWorks: [{ title: "Om Norgis Rige", year: 1567 }],
      kilder: [snl("https://snl.no/Absalon_Pedersson_Beyer")],
    },

    // --- Nyhumanismen ------------------------------------------------------
    {
      name: "Wilhelm von Humboldt", birthYear: 1767, deathYear: 1835, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", instrument2: "Filosof", mainGenre: ["Nyhumanismen"],
      subGenre: ["Dannelse som selvdannelse", "Allsidig utvikling"],
      influenceStart: 1792, influenceEnd: 1835, geography: "Berlin",
      description: `
        Tysk språkforsker, filosof og statsmann. I fragmentet *Theorie der Bildung des Menschen* (ca. 1793) og i skriftet om statens grenser beskriver han menneskets bestemmelse som den høyeste og mest harmoniske dannelsen av alle sine krefter til en helhet, gjennom et fritt vekselspill med en mangfoldig verden. Som leder for den prøyssiske seksjonen for kultus og undervisning (1809–1810) laget han skoleplaner for et enhetlig skolesystem, reformerte gymnaset og lærerutdanningen og grunnla Universitetet i Berlin (1810). Forskningen har vist at det berømte «Humboldt-universitetet» i stor grad er en senere konstruksjon.
      `,
      keyWorks: [
        { title: "Theorie der Bildung des Menschen" },
        { title: "Ideen zu einem Versuch, die Grenzen der Wirksamkeit des Staates zu bestimmen", year: 1792 },
      ],
      kilder: [snl("https://snl.no/Wilhelm_von_Humboldt"), sep("https://plato.stanford.edu/entries/wilhelm-humboldt/")],
    },
    {
      name: "Friedrich Schiller", birthYear: 1759, deathYear: 1805, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Nyhumanismen"],
      subGenre: ["Skapende arbeid", "Leken som læringsform"],
      influenceStart: 1795, influenceEnd: 1805, geography: "Jena og Weimar",
      description: `
        Tysk dikter og filosof. *Über die ästhetische Erziehung des Menschen in einer Reihe von Briefen* (1795) er et svar på den franske revolusjonens terror: politisk frihet forutsetter mennesker som er dannet til frihet, og veien går gjennom skjønnheten, som forsoner sansedrift og formdrift i en «lekedrift». «Mennesket leker bare der det er menneske i ordets fulle betydning, og det er bare helt menneske der det leker.» Brevene ble et grunnlag for estetisk oppdragelse, for kunstoppdragelsesbevegelsen rundt 1900 og for senere teorier om lek og danning.
      `,
      keyWorks: [{ title: "Über die ästhetische Erziehung des Menschen", year: 1795 }],
      kilder: [snl("https://snl.no/Friedrich_Schiller"), sep("https://plato.stanford.edu/entries/schiller/")],
    },
    {
      name: "Friedrich Immanuel Niethammer", birthYear: 1766, deathYear: 1848, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Politiker og reformator", mainGenre: ["Nyhumanismen"],
      subGenre: ["Dannelse som selvdannelse"],
      influenceStart: 1808, influenceEnd: 1848, geography: "Jena og München",
      description: `
        Tysk filosof, teolog og skolereformator i Bayern, venn av Hegel. *Der Streit des Philanthropinismus und Humanismus in der Theorie des Erziehungs-Unterrichts unserer Zeit* (1808) ga både begrepet humanisme og konflikten mellom nyttepedagogikk og dannelsespedagogikk navn: filantropistene oppdrar til samfunnets bruk, humanistene til mennesket selv. Som skoleråd i Bayern laget han en ny skoleordning og fikk Hegel ansatt som gymnasrektor i Nürnberg.
      `,
      keyWorks: [{ title: "Der Streit des Philanthropinismus und Humanismus", year: 1808 }],
      kilder: [snl("https://snl.no/humanisme")],
    },

    // --- Dannelsesteorien --------------------------------------------------
    {
      name: "Herman Nohl", birthYear: 1879, deathYear: 1960, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Dannelsesteorien", "Reformpedagogikken"],
      subGenre: ["Dannelse som selvdannelse", "Pedagogisk takt"],
      influenceStart: 1920, influenceEnd: 1960, geography: "Göttingen",
      description: `
        Tysk pedagog, Diltheys elev og professor i Göttingen, og den åndsvitenskapelige pedagogikkens sentrale skikkelse. Han formulerte det pedagogiske forholdet (*pädagogischer Bezug*), et lidenskapelig forhold mellom en moden og en voksende person for den voksendes egen skyld, og pedagogikkens relative autonomi overfor stat og kirke. *Die pädagogische Bewegung in Deutschland und ihre Theorie* (1933/1935) skrev reformpedagogikkens historie innenfra. Nohl var åpen for deler av nasjonalsosialismen i 1933–1934, og ble avsatt i 1937.
      `,
      keyWorks: [{ title: "Die pädagogische Bewegung in Deutschland und ihre Theorie", year: 1935 }],
      kilder: [bok("Nohl, Herman. Die pädagogische Bewegung in Deutschland und ihre Theorie. Schulte-Bulmke, 1935."), snl("https://snl.no/dannelse")],
    },
    {
      name: "Eduard Spranger", birthYear: 1882, deathYear: 1963, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Psykolog", mainGenre: ["Dannelsesteorien"],
      subGenre: ["Dannelse som selvdannelse"],
      influenceStart: 1914, influenceEnd: 1963, geography: "Leipzig, Berlin og Tübingen",
      description: `
        Tysk filosof, psykolog og pedagog, Diltheys elev, professor i Leipzig og Berlin og senere Tübingen. *Lebensformen* (1914) skiller mellom seks idealtyper av mennesker etter hvilke verdier som styrer dem, og *Psychologie des Jugendalters* (1924) ble et standardverk om ungdomstiden. Spranger skrev om Humboldt og nyhumanismen og forsto dannelse som en forbindelse mellom personlighet og objektive kulturverdier. Han var nasjonalkonservativ og hilste 1933 delvis velkommen, leverte samme år en avskjedssøknad i protest mot inngrep i universitetet, men trakk den tilbake, og kom senere i konflikt med regimet.
      `,
      keyWorks: [
        { title: "Lebensformen", year: 1914 },
        { title: "Psychologie des Jugendalters", year: 1924 },
      ],
      kilder: [snl("https://snl.no/Eduard_Spranger")],
    },
    {
      name: "Erich Weniger", birthYear: 1894, deathYear: 1961, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Praktiker", mainGenre: ["Dannelsesteorien"],
      subGenre: ["Dannelse som selvdannelse"],
      influenceStart: 1926, influenceEnd: 1961, geography: "Göttingen og Frankfurt",
      description: `
        Tysk pedagog, Nohls elev, leder av pedagogiske akademier i Weimarrepublikken og etter krigen professor i Göttingen. *Theorie der Bildungsinhalte und des Lehrplans* (1930, utvidet 1952) gjorde didaktikken til en teori om dannelsesinnhold og viste at læreplanen er et historisk kompromiss mellom samfunnsmakter som kjemper om skolen. Weniger ble en grunnlegger av den tyske didaktikktradisjonen. Skriftene hans om militær oppdragelse under nasjonalsosialismen er blitt sterkt kritisert, og han var senere med på å utforme Bundeswehrs prinsipp om borgeren i uniform.
      `,
      keyWorks: [{ title: "Theorie der Bildungsinhalte und des Lehrplans", year: 1930 }],
      kilder: [bok("Weniger, Erich. Didaktik als Bildungslehre. Teil 1: Theorie der Bildungsinhalte und des Lehrplans. Beltz, 1952."), snl("https://snl.no/Wolfgang_Klafki")],
    },
    {
      name: "Wolfgang Klafki", birthYear: 1927, deathYear: 2016, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Forsker", mainGenre: ["Dannelsesteorien", "Ny dannelsesdebatt"],
      subGenre: ["Kategorial dannelse", "Dannelse som selvdannelse"],
      influenceStart: 1958, influenceEnd: 2016, geography: "Marburg",
      description: `
        Tysk pedagog og didaktiker i Marburg, og en av de mest innflytelsesrike didaktikerne i Norden. *Kategorial dannelse* (1959) forener den materiale dannelsen, som legger vekt på innholdet, og den formale, som legger vekt på kreftene: dannelse er en dobbel åpning der verden åpner seg for mennesket og mennesket for verden, gjennom det eksemplariske og elementære. Den didaktiske analysen (1958) med fem spørsmål ble en planleggingsmal i norsk lærerutdanning. Etter 1968 utviklet han en kritisk-konstruktiv didaktikk der dannelse betyr evne til selvbestemmelse, medbestemmelse og solidaritet, og der skolen arbeider med epoketypiske nøkkelproblemer som fred, miljø og ulikhet (1985).
      `,
      keyWorks: [
        { title: "Didaktische Analyse als Kern der Unterrichtsvorbereitung", year: 1958 },
        { title: "Das pädagogische Problem des Elementaren und die Theorie der kategorialen Bildung", year: 1959 },
        { title: "Neue Studien zur Bildungstheorie und Didaktik", year: 1985 },
      ],
      kilder: [snl("https://snl.no/Wolfgang_Klafki")],
    },

    // --- Ny dannelsesdebatt ------------------------------------------------
    {
      name: "Gert Biesta", gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Ny dannelsesdebatt"],
      subGenre: ["Subjektivering", "Dannelse som selvdannelse"],
      influenceStart: 2006, geography: "Nederland, Storbritannia og Luxembourg",
      description: `
        Nederlandsk pedagogisk filosof, en av de mest leste i nordisk lærerutdanning. *Beyond Learning* (2006) kritiserer «læringifiseringen», et språk der alt er læring og elever er kunder, og *Good Education in an Age of Measurement* (2010) skiller mellom utdanningens tre funksjoner: kvalifisering, sosialisering og subjektivering. God utdanning krever at vi spør hva den er til for, ikke bare hva som virker. I *The Beautiful Risk of Education* (2013) forsvarer han den risikoen som ligger i at oppdragelse møter mennesker som frie subjekter. Biesta bygger på Dewey, Arendt, Levinas og Rancière.
      `,
      keyWorks: [
        { title: "Beyond Learning", year: 2006 },
        { title: "Good Education in an Age of Measurement", year: 2010 },
        { title: "The Beautiful Risk of Education", year: 2013 },
      ],
      kilder: [BIESTA10, bok("Biesta, Gert. «Why 'What Works' Won't Work: Evidence-Based Practice and the Democratic Deficit in Educational Research.» Educational Theory 57, nr. 1 (2007): 1–22.")],
    },
    {
      name: "Klaus Mollenhauer", birthYear: 1928, deathYear: 1998, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Sosiolog", mainGenre: ["Ny dannelsesdebatt", "Dannelsesteorien"],
      subGenre: ["Dannelse som selvdannelse"],
      influenceStart: 1968, influenceEnd: 1998, geography: "Göttingen",
      description: `
        Tysk pedagog, professor i Göttingen. I *Erziehung und Emanzipation* (1968) var han en av dem som førte kritisk teori inn i pedagogikken. *Vergessene Zusammenhänge* (1983, på norsk *Glemte sammenhenger*, 1996) vender tilbake til oppdragelsens grunnspørsmål gjennom kulturhistoriske eksempler: oppdragelse er å vise fram og overlevere en livsform, og barnet blir til gjennom presentasjon, representasjon, dannbarhet og selvvirksomhet. Boka ble en viktig inspirasjon for den nordiske dannelsesdebatten etter 1990.
      `,
      keyWorks: [
        { title: "Erziehung und Emanzipation", year: 1968 },
        { title: "Vergessene Zusammenhänge", year: 1983 },
      ],
      kilder: [bok("Mollenhauer, Klaus. Glemte sammenhenger: Om kultur og oppdragelse. Ad Notam Gyldendal, 1996."), STRAUME],
    },
    {
      name: "Martha Nussbaum", birthYear: 1947, gender: "kvinne",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Ny dannelsesdebatt"],
      subGenre: ["Dannelse som selvdannelse", "Lik rett til utdanning"],
      influenceStart: 1997, geography: "University of Chicago",
      description: `
        Amerikansk filosof ved University of Chicago. *Cultivating Humanity* (1997) forsvarer en liberal utdanning bygd på sokratisk selvprøving, verdensborgerskap og narrativ fantasi, og *Not for Profit: Why Democracy Needs the Humanities* (2010) advarer mot en utdanning som bare skal tjene økonomisk vekst. Sammen med Amartya Sen har hun utviklet kapabilitetstilnærmingen, der utdanning er en grunnleggende evne mennesker må ha for å leve et verdig liv. Nussbaum er en viktig stemme i forsvaret for humaniora og dannelse i en tid med målstyring.
      `,
      keyWorks: [
        { title: "Cultivating Humanity", year: 1997 },
        { title: "Not for Profit", year: 2010 },
      ],
      kilder: [snl("https://snl.no/Martha_Nussbaum")],
    },
  ],
};
