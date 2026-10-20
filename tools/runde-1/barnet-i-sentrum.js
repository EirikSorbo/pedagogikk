// ============================================================================
//  RUNDE 1 — RETNINGEN «BARNET I SENTRUM» (sju epoker)
// ----------------------------------------------------------------------------
//  Tekstene til importfila (tools/lag-runde-1.js). Utkast skrevet av Claude
//  (Opus) 2026-10-20 for forskningsnivå; læreren sjekker og retter i appen.
// ============================================================================
import { snl, nbl, sep, lenke, bok, avsnitt, verk } from "./hjelpere.js";

const reggioChildren = (sti) => lenke("Reggio Children.", `https://www.reggiochildren.it/en/reggio-emilia-approach/${sti}`);

const R = "Barnet i sentrum";

export const retning = {
  navn: R,
  beskrivelse: avsnitt(
    "Retningen samler de tradisjonene som gjør barnets natur, utvikling og egen aktivitet til utgangspunkt for oppdragelse og undervisning, framfor lærestoffet, læreren eller samfunnets krav. Linjen går fra Rousseaus *Émile* (1762) gjennom filantropistene, Pestalozzi og Fröbel til reformpedagogikken rundt 1900, den antiautoritære bølgen etter 1960 og Reggio Emilia.",
    "Det som binder dem sammen, er kritikken av en skole som behandler barnet som en liten voksen og kunnskap som noe som overføres, og troen på sansning, lek og egenvirksomhet. Det som skiller dem, er synet på frihet og struktur: fra Rousseaus iscenesatte frihet og Montessoris nøye forberedte omgivelse til Neills selvstyre. Nyere forskning, særlig Jürgen Oelkers, har vist at «barnet i sentrum» like mye er en reformretorikk som gjentar seg, som en sammenhengende praksis.",
  ),
  kilder: [snl("reformpedagogikk"), bok("Jürgen Oelkers", "Reformpädagogik: Eine kritische Dogmengeschichte. Juventa", 1989)],
  fortelling: avsnitt(
    "### Fra naturen til barnehagen",
    "Fortellingen begynner gjerne med Jean-Jacques Rousseau. *Émile, ou De l'éducation* (1762) gjorde barndommen til en egen livsfase med egen verdi og egne lover, og oppdragelsen til noe som skulle følge naturens gang i stedet for å forme barnet etter samfunnets bilde. Boka ble brent i Paris og Genève samme år, og ble likevel det mest leste pedagogiske skriftet i Europa. Rousseau skrev ingen skoleplan, men en tankeeksperiment-roman om en privatlærer og ett barn, og mye av retningens senere historie er forsøk på å gjøre den private oppdragelsen til institusjoner for mange.",
    "Det første forsøket var filantropistenes. Johann Bernhard Basedow åpnet Philanthropinum i Dessau i 1774, og skolene der og i Schnepfenthal gjorde Rousseaus (og Lockes) tanker om sansning, lek, kroppsøving og nytte til timeplaner, lærebøker og belønningssystemer. Johann Heinrich Pestalozzi tok steget videre: fra forsøk med fattige barn på Neuhof og i Stans til en «metode» i Burgdorf og Yverdon, der all kunnskap skulle bygges opp fra anskuelsen, fra det barnet selv kan se og gripe. Yverdon ble et valfartssted for lærere fra hele Europa, og prøyssiske lærerseminarer bar Pestalozzis navn i flere generasjoner.",
    "Friedrich Fröbel, som hadde arbeidet hos Pestalozzi, flyttet tyngdepunktet til de små barna. Med lekegavene (fra 1837) og navnet *Kindergarten* (1840) skapte han en institusjon som verken var skole eller asyl, bygd på leken som barnets høyeste uttrykk. Barnehagen ble også en kvinnebevegelse: Fröbels etterfølgere i Tyskland og USA var nesten alle kvinner, og «åndelig moderskap» ble en vei inn i yrkeslivet.",
    "### Barnets århundre og etterpå",
    "Rundt 1900 fikk tradisjonen et nytt navn og et nytt selvbilde. Ellen Key spådde «barnets århundre» (1900), og under merkelappene reformpedagogikk, New Education og éducation nouvelle samlet det seg skoleforsøk, arbeidsskoler, landsens internatskoler, Montessoris *Case dei Bambini* (1907) og Steiners Waldorfskole (1919). Bevegelsen var internasjonal, med New Education Fellowship fra 1921, men også ambivalent: den rommet eugenikk, nasjonalisme og kulturkritikk, og deler av den tilpasset seg fascismen og nasjonalsosialismen. I Norge ble Anna Sethnes arbeidsskole på Sagene et forbilde for Normalplanen av 1939.",
    "Etter 1945 levde retningen videre i to spor. Det ene var radikaliseringen av friheten: A.S. Neills Summerhill (1921) ble gjenoppdaget med boka *Summerhill* (1960), og i årene rundt 1968 ble antiautoritær oppdragelse et politisk program, i Norge med Forsøksgymnaset i Oslo (1967). Det andre var en ny barnehagepedagogikk: de kommunale førskolene i Reggio Emilia fra 1963, der Loris Malaguzzi gjorde barnet til en kompetent forsker og dokumentasjonen til et pedagogisk redskap.",
    "### Kritikken",
    "Retningen har alltid hatt kritikere. Herbartianerne og senere kunnskapsskolens forsvarere mente at den forsømte lærestoffet og lærerens ansvar. Forskningen etter 1980 har pekt på hvor mye styring som ligger i den tilsynelatende friheten (Rousseaus «velregulerte frihet», Montessoris materialer), på kontinuiteten i reformretorikken fra 1760 til i dag, og på at «barnet» i disse tekstene ofte er et ideal mer enn virkelige barn. Det gjør ikke retningen mindre viktig: det meste av det norske læreplanspråket om elevaktivitet, lek og tilpasning har røtter her.",
  ),
};

export const epoker = [
  {
    navn: "Naturalismen",
    fra: 1762, til: 1800, era: "fra 1762",
    description: avsnitt(
      "Epoken er Rousseaus *Émile* (1762) og den første resepsjonen av boka. Oppdragelsen skal følge naturen: barnet gjennomgår stadier med egne behov (spedbarnsalder, barndom til om lag tolv, «fornuftens» alder, ungdom), og hvert stadium skal leves fullt i stedet for å ofres for et framtidig mål. I barndommen skal oppdragelsen være *negativ*: den skal verne mot samfunnets fordervelse og la barnet lære av ting og konsekvenser, ikke av ord og formaninger.",
      "Friheten er likevel regissert. Læreren iscenesetter situasjonene Émile lærer av, og «velregulert frihet» er blitt lest både som respekt for barnet og som skjult manipulasjon. Femte bok, om Sophie, gir jenta en oppdragelse til avhengighet og behag, og ble straks angrepet, mest kjent av Mary Wollstonecraft. Spenningen mellom *Émile* og *Samfunnskontrakten* (begge 1762), mellom å oppdra et menneske og en borger, er et grunnproblem i Rousseau-forskningen.",
      "Resepsjonen var enorm og selektiv: filantropistene, Kant (forelesningene *Über Pädagogik*, utgitt 1803) og Pestalozzi bygde videre, mens britiske leserne som Edgeworth og Thomas Day prøvde metoden på egne barn og ble skuffet.",
    ),
    samfunn: "Opplysningstidens Frankrike og republikken Genève: salongkultur, *Encyclopédie* og sensur. Den borgerlige familien og en mer følelsesbetont oppfatning av barndommen vokste fram, selv om Philippe Ariès' tese om at barndommen ble «oppdaget» i denne perioden er sterkt omdiskutert. Rousseau skrev for en velstående elite med privatlærere, ikke for flertallet.",
    skole: "Den lærde skolen var latinsk og kirkelig. Jesuittene ble utvist fra Frankrike i 1762–1764, og spørsmålet om hvem som skulle overta skolen, ga støtet til planene for en nasjonal oppdragelse (La Chalotais 1763). De fleste barn fikk ingen skole utover katekismeundervisning. I Danmark-Norge bygde allmueskolen på konfirmasjonen (1736) og skoleforordningen av 1739.",
    kilder: [snl("Jean-Jacques_Rousseau"), sep("rousseau"), bok("Jürgen Oelkers", "Jean-Jacques Rousseau. Continuum", 2008)],
    usikre: [{ tekst: "At britiske lesere «ble skuffet» over metoden", hvorfor: "Gjelder særlig Richard Lovell Edgeworth og Thomas Day; generaliseringen er Claudes", hvorSjekke: "Oxford Dictionary of National Biography (Edgeworth, Day)" }],
  },
  {
    navn: "Filantropismen",
    fra: 1768, til: 1800, era: "ca. 1768–1800",
    description: avsnitt(
      "Filantropismen gjorde opplysningstidens pedagogikk til institusjoner. Johann Bernhard Basedow ba i *Vorstellung an Menschenfreunde* (1768) om penger til en ny skole og en ny lærebok, og fikk begge: *Elementarwerk* (1774), med Daniel Chodowieckis kobberstikk i Comenius' ånd, og Philanthropinum i Dessau (1774) under fyrst Leopold III Friedrich Franz av Anhalt-Dessau. Den offentlige eksamenen i 1776 gjorde skolen berømt.",
      "Målet var lykkelige og nyttige mennesker. Undervisningen skulle gå via anskuelse, samtale og lek, med kroppsøving, levende språk og realfag ved siden av latin, belønning i stedet for straff, og en religionsundervisning som var felles for konfesjonene. Dessau ble nedlagt i 1793, men Salzmanns Schnepfenthal (1784) varte, og Campes *Allgemeine Revision* (fra 1785) samlet bevegelsens teori i seksten bind. Ernst Christian Trapp fikk i 1779 den første lærestolen i pedagogikk, i Halle.",
      "Nyhumanistene angrep filantropismens nyttetenkning; Friedrich Immanuel Niethammers *Der Streit des Philanthropinismus und Humanismus* (1808) ga konflikten navn. I Danmark-Norge ga bevegelsen støtet til latinskolereformen i 1775.",
    ),
    samfunn: "Opplyst enevelde i de tyske småstatene, en voksende borgerlig offentlighet og et bokmarked som gjorde pedagogisk litteratur til en sjanger. «Volksaufklärung» ville gjøre bønder og håndverkere til nyttige undersåtter, og pedagogikken ble et anliggende for fyrster, prester og forleggere.",
    skole: "Ved siden av latinskolene og de kirkelige allmueskolene innførte Preussen et generelt landskolereglement (1763). Filantropistenes skoler var dyre internatskoler for borgerskapet og adelen, men lærebøkene, barnelitteraturen (Campes *Robinson der Jüngere*) og kroppsøvingen (GutsMuths) nådde langt videre.",
    kilder: [snl("filantropisme"), snl("Johann_Bernhard_Basedow"), bok("Hanno Schmitt", "Vernunft und Menschlichkeit: Studien zur philanthropischen Erziehungsbewegung. Klinkhardt", 2007)],
  },
  {
    navn: "Anskuelsespedagogikken",
    fra: 1781, til: 1850, era: "ca. 1780–1850",
    description: avsnitt(
      "Johann Heinrich Pestalozzi gjorde anskuelsen, den direkte sanselige erfaringen, til grunnlaget for all erkjennelse: i *Wie Gertrud ihre Kinder lehrt* (1801) er den «det absolutte fundament». Undervisningen skulle gå fra det nære til det fjerne og fra det enkle til det sammensatte, og bygge på tre elementer, tall, form og språk. Prinsippet var gammelt (Comenius' «ting før ord»), men Pestalozzi knyttet det til en antropologi om hode, hjerte og hånd og til folkeoppdragelse for de fattige.",
      "Metoden ble utviklet i praksis: på Neuhof, blant krigsforeldreløse i Stans (1799), i Burgdorf (1800–1804) og i Yverdon (1805–1825), som ble et internasjonalt besøkssted. Fichte anbefalte metoden i *Reden an die deutsche Nation* (1807–1808), og Preussen sendte unge lærere til Yverdon. Instituttet gikk i oppløsning i bitre konflikter mellom medarbeiderne.",
      "Spredningen forandret innholdet. I prøyssiske seminarer (Diesterweg) og i engelsk og amerikansk «object teaching» (Mayo, senere Oswego-bevegelsen) ble anskuelsen ofte til faste spørsmålsrekker om gjenstander, en formalisme Pestalozzi selv hadde advart mot. Daniel Tröhler har lest epoken som et ledd i en verdensomspennende «pedagogisering» av sosiale problemer.",
    ),
    samfunn: "Revolusjonskrigene og Den helvetiske republikk (1798–1803), med fransk okkupasjon og opprøret i Nidwalden som etterlot de foreldreløse i Stans. Pauperisme og hjemmeindustri, og etter 1806 de prøyssiske reformene der skole og lærerutdanning ble en del av nasjonsbyggingen.",
    skole: "Folkeskolen var i ferd med å bli statens: lærerseminarer, skoleinspeksjon og lærebøker. I Storbritannia var det billige vekselundervisningssystemet (Bell og Lancaster) det store alternativet. I Norge fikk landet sin første lov om allmueskolen på landet i 1827, med omgangsskole som regel, og de første lærerseminarene; anskuelsesundervisning ble etter hvert eget fag i småskolen.",
    kilder: [snl("anskuelsesundervisning"), snl("Johann_Heinrich_Pestalozzi"), bok("Daniel Tröhler", "Pestalozzi and the Educationalization of the World. Palgrave Macmillan", 2013)],
  },
  {
    navn: "Barnehagebevegelsen",
    fra: 1837, til: 1916, era: "1837 til ca. 1915",
    description: avsnitt(
      "Friedrich Fröbel skapte en institusjon for barn før skolealder som verken var skole eller asyl. *Die Menschenerziehung* (1826) ga grunnlaget: et romantisk-idealistisk syn der alt levende er en enhet, og der barnets lek er «det høyeste trinnet i barneutviklingen». Fra 1837 utviklet han lekegavene (ball, kule, terning og sylinder, byggeklosser) og sysselsettingene i Bad Blankenburg, og i 1840 fikk anstalten navnet *Kindergarten*. *Mutter- und Koselieder* (1844) gjorde mødrene til medpedagoger.",
      "Preussen forbød barnehagene i 1851 som ateistiske og politisk mistenkelige, og forbudet varte til 1860. Bevegelsen ble da båret av kvinner, som Bertha von Marenholtz-Bülow og Henriette Schrader-Breymann i Europa og Elizabeth Peabody og Susan Blow i USA. «Åndelig moderskap» ga kvinner en profesjon og barnehagen en plass i kvinnebevegelsen, slik Ann Taylor Allen har vist.",
      "Rundt 1900 kom bruddet mellom de ortodokse fröbelianerne og reformatorene som ville bygge på psykologi og barnestudier. William H. Kilpatricks kritikk av Fröbels symbolikk (1916) markerer slutten på epoken. I Norge levde ideene først i barneasyler og private barnehager; en offentlig barnehagepolitikk kom først med barnehageloven av 1975.",
    ),
    samfunn: "Industrialisering og urbanisering skapte et stort behov for tilsyn med småbarn i arbeiderfamilier, mens det borgerlige hjemmet dyrket barndommen. Revolusjonsåret 1848 og reaksjonen etterpå forklarer det prøyssiske forbudet. Den transatlantiske utvandringen tok barnehagen til USA.",
    skole: "Barneasylene for fattige (fra 1820-årene, etter mønster fra Robert Owen og Samuel Wilderspin i Storbritannia) var oppbevaring og tidlig skole. Fröbel ville ha et eget pedagogisk rom for leken. I USA ble barnehagen etter hvert en del av den offentlige skolen (St. Louis 1873).",
    kilder: [snl("Friedrich_Wilhelm_August_Fr%C3%B6bel"), snl("barnehagepedagogikk"), bok("Ann Taylor Allen", "The Transatlantic Kindergarten: Education and Women's Movements in Germany and the United States. Oxford University Press", 2017), bok("Norman Brosterman", "Inventing Kindergarten. Harry N. Abrams", 1997)],
    usikre: [{ tekst: "Robert Owen og Samuel Wilderspin som forbilde for barneasylene", hvorfor: "Riktig for Storbritannia; hvor direkte forbildet var i Norden, er ikke kontrollert", hvorSjekke: "Norsk barnehagehistorie (Balke 1995)" }],
  },
  {
    navn: "Reformpedagogikken",
    fra: 1890, til: 1933, era: "ca. 1890–1933",
    description: avsnitt(
      "Reformpedagogikk er samlebetegnelsen på skolekritikk og skoleforsøk mellom om lag 1890 og 1933, på tysk *Reformpädagogik*, på engelsk *New Education* og på fransk *éducation nouvelle*. Bevegelsen vendte seg mot «kunnskapsskolen», herbartianernes formaltrinn og pugg, og satte barnets egenaktivitet, interesser og skapende evner i sentrum. Den omfattet arbeidsskolen (Kerschensteiner), landsens internatskoler (Hermann Lietz fra 1898), Montessoris *Case dei Bambini* (1907), Decrolys interessesentre, Waldorfskolen (1919), Dalton-planen og kunstopdragelsen. New Education Fellowship (1921) gjorde den til et internasjonalt nettverk.",
      "Herman Nohl skrev bevegelsens historie innenfra som «den pedagogiske bevegelsen» og lot den slutte i 1933. Nyere forskning har vært mindre velvillig. Jürgen Oelkers har vist at reformretorikken er eldre enn bevegelsen og ofte mer dogme enn empiri, og flere har påvist eugenikk (også hos Ellen Key), nasjonalisme og antimodernisme i deler av den, og tilpasning til fascismen og nasjonalsosialismen hos sentrale skikkelser.",
      "I Norge gikk impulsene gjennom Anna Sethne, Helga Eng og Bernhof Ribsskog til Normalplanen av 1939, der arbeidsskoleprinsippet og elevaktiviteten fikk plass.",
    ),
    samfunn: "Industrisamfunn, storbyer og massedemokrati; ungdomsbevegelser (Wandervogel fra 1901), kvinnebevegelse og en kulturkritikk som så skolen som et symptom på modernitetens tvang. Barnepsykologien og barnestudiene (G. Stanley Hall) ga reformene vitenskapelig språk, og første verdenskrig ga dem politisk alvor.",
    skole: "Allmenn skoleplikt var etablert i de fleste land i Europa og Nord-Amerika. Kritikken gjaldt innholdet: klasseundervisning, katekisering og lærebok. I Norge var folkeskolen sjuårig og felles fra 1889, og reformpedagogikken ble skolens moderniseringsspråk i mellomkrigstiden.",
    kilder: [snl("reformpedagogikk"), snl("arbeidsskole_-_pedagogikk"), bok("Jürgen Oelkers", "Reformpädagogik: Eine kritische Dogmengeschichte. Juventa", 1989), bok("Herman Nohl", "Die pädagogische Bewegung in Deutschland und ihre Theorie. Schulte-Bulmke", 1935)],
  },
  {
    navn: "Antiautoritær pedagogikk",
    fra: 1921, til: 1975, era: "1921; bølge 1960–1975",
    description: avsnitt(
      "Den antiautoritære pedagogikken gjorde barnets frihet til mål, ikke bare middel. A.S. Neills Summerhill (grunnlagt 1921, i Leiston i Suffolk fra 1927) hadde frivillig undervisning og et skolemøte der elever og voksne hadde én stemme hver. Neill bygde på Homer Lanes Little Commonwealth og på psykoanalysen, først Freud og senere Wilhelm Reich: undertrykte drifter gir ulykkelige og autoritære mennesker, og et barn som får leve ut sine behov, blir godt av seg selv.",
      "Bølgen kom med *Summerhill: A Radical Approach to Child Rearing* (1960, med forord av Erich Fromm) og den tyske utgaven *Theorie und Praxis der antiautoritären Erziehung* (1969), som ble en bestselger i studentbevegelsen. I Vest-Tyskland ble barnehagene i *Kinderläden*-bevegelsen et politisk prosjekt med marxistisk og psykoanalytisk begrunnelse. I Norge ble Forsøksgymnaset i Oslo (1967) med elevstyre og Mosse Jørgensen som rektor det tydeligste uttrykket.",
      "Kritikken har gått i to retninger: at friheten i praksis ga plass for de sterkeste, og at retningen undervurderte kunnskap og struktur. Summerhill selv overlevde et forsøk fra det britiske skoletilsynet på å stenge skolen (1999–2000).",
    ),
    samfunn: "Mellomkrigstidens psykoanalytiske og sosialistiske kultur, og etter 1945 velstand, ungdomsopprør og et oppgjør med autoritet etter fascismen. Theodor W. Adornos «Erziehung nach Auschwitz» (1966) ga oppgjøret et pedagogisk program: oppdragelse mot autoritær karakter.",
    skole: "Den lange utdanningseksplosjonen etter 1945: enhetsskolereformer, flere i videregående skole og universitet, og en kritikk av karakterer, eksamen og lærerautoritet. I Norge drev Forsøksrådet for skoleverket (fra 1954) forsøk som gjorde skoler som Forsøksgymnaset mulige innenfor den offentlige skolen.",
    kilder: [snl("Alexander_Sutherland_Neill"), snl("fors%C3%B8ksgymnas"), bok("A.S. Neill", "Summerhill: A Radical Approach to Child Rearing. Hart", 1960)],
    usikre: [{ tekst: "Det britiske skoletilsynets forsøk på å stenge Summerhill, 1999–2000", hvorfor: "Årstallene er gjengitt etter hukommelsen", hvorSjekke: "Summerhills egen historikk eller britisk presse 2000" }],
  },
  {
    navn: "Reggio Emilia",
    fra: 1963, til: null, era: "fra 1963",
    description: avsnitt(
      "Reggio Emilia-pedagogikken vokste fram i de kommunale førskolene i den norditalienske byen, der den første kommunale *scuola dell'infanzia*, Robinson Crusoe, åpnet i 1963. Forhistorien er de selvdrevne skolene på landsbygda etter krigen, organisert av den italienske kvinneunionen UDI: i Villa Cella bygde innbyggerne etter frigjøringen i 1945 en skole for pengene fra materiell de tyske soldatene hadde etterlatt, og den åpnet i 1947. Loris Malaguzzi formulerte tenkningen: barnet er rikt, kompetent og en forsker som uttrykker seg i «hundre språk», og pedagogikken er lytting og dialog, ikke overføring.",
      "Praksisen har egne begreper og roller: *atelieret* og *atelieristaen* (en kunstfaglig utdannet medarbeider), *pedagogistaen* som veileder flere enheter, *progettazione* (fleksibel prosjektplanlegging i stedet for læreplan) og pedagogisk dokumentasjon som gjør barnas læringsprosesser synlige og diskuterbare. Utstillingen om barnas hundre språk (fra 1981) og stiftelsen Reggio Children (1994) gjorde byen kjent i hele verden.",
      "I Norden ble Reggio formidlet gjennom Gunilla Dahlberg og kolleger, og «pedagogisk dokumentasjon» ble et nøkkelbegrep i barnehagepedagogikken. Kritikere har pekt på at tilnærmingen er tett knyttet til lokal politikk og kultur og lett blir et merkevarenavn når den eksporteres.",
    ),
    samfunn: "Emilia-Romagna etter krigen: en sterk motstandsbevegelse, kommunistisk og sosialistisk lokalstyre, et tett kooperativt liv og høy yrkesdeltakelse blant kvinner. Kommunene bygde velferd nedenfra, og barnehagen ble et politisk og kulturelt fellesskapsprosjekt.",
    skole: "Italias førskoler var lenge dominert av Den katolske kirke. Lov 444 av 1968 innførte statlige førskoler, men Reggio holdt fast ved det kommunale. Malaguzzi kritiserte både kirkens og skolens forståelse av barnet og fikk betydning langt utover Italia.",
    kilder: [reggioChildren(""), bok("Carolyn Edwards, Lella Gandini og George Forman (red.)", "The Hundred Languages of Children: The Reggio Emilia Approach to Early Childhood Education. Ablex", 1993), bok("Carlina Rinaldi", "In Dialogue with Reggio Emilia: Listening, Researching and Learning. Routledge", 2006)],
  },
];

export const teoretikere = [
  // --- Naturalismen ---
  {
    name: "Jean-Jacques Rousseau", birthYear: 1712, deathYear: 1778, gender: "mann",
    metaGenre: R, instrument: "Filosof", mainGenre: ["Naturalismen"],
    subGenre: ["Negativ oppdragelse", "Barndommens egenverdi"],
    influenceStart: 1750, influenceEnd: 1778, geography: "Genève og Frankrike", priority: 3,
    description: avsnitt(
      "Sveitsisk-fransk filosof og forfatter, og opphavsmannen til retningen. *Émile* (1762) gjør barndommen til et eget livsstadium og oppdragelsen til å følge naturen: barnet skal vernes mot samfunnet og lære av ting og erfaring før ord og bøker. Den «negative» oppdragelsen er likevel nøye regissert av læreren, og femte bok gir Sophie en oppdragelse til avhengighet, som Mary Wollstonecraft tok et oppgjør med.",
      "Forholdet mellom *Émile* og *Samfunnskontrakten* (begge 1762), mellom å oppdra et menneske og en borger, er fortsatt omstridt. At Rousseau satte sine egne fem barn på barnehjem, har fulgt resepsjonen siden *Bekjennelsene*.",
    ),
    keyWorks: verk(["Discours sur les sciences et les arts", 1750], ["Discours sur l'origine et les fondements de l'inégalité parmi les hommes", 1755], ["Du contrat social", 1762], ["Émile, ou De l'éducation", 1762]),
    kilder: [snl("Jean-Jacques_Rousseau"), sep("rousseau")],
  },
  {
    name: "Mary Wollstonecraft", birthYear: 1759, deathYear: 1797, gender: "kvinne",
    metaGenre: "Kritikk og frigjøring", instrument: "Filosof", mainGenre: ["Naturalismen"],
    subGenre: ["Likestilt utdanning"],
    influenceStart: 1787, influenceEnd: 1797, geography: "London", priority: 2,
    description: avsnitt(
      "Britisk forfatter og filosof. *A Vindication of the Rights of Woman* (1792) er et oppgjør med Rousseaus Sophie: kvinner er ikke av natur svake og forfengelige, men oppdratt til det, og en fornuftig oppdragelse vil gjøre dem til selvstendige borgere og bedre mødre. Hun foreslo en offentlig dagskole for jenter og gutter sammen, og hadde selv drevet skole og vært guvernante.",
      "Wollstonecraft står med én fot i naturalismen og én i en kritisk tradisjon: hun deler Rousseaus tro på erfaring og fornuft, men ikke hans kjønnsorden. Reiseboka fra Skandinavia (1796) er godt kjent i Norge.",
    ),
    keyWorks: verk(["Thoughts on the Education of Daughters", 1787], ["Original Stories from Real Life", 1788], ["A Vindication of the Rights of Woman", 1792]),
    kilder: [snl("Mary_Wollstonecraft"), sep("wollstonecraft")],
  },
  {
    name: "Stéphanie Félicité de Genlis", birthYear: 1746, deathYear: 1830, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Naturalismen"],
    subGenre: ["Anskuelse"],
    influenceStart: 1779, influenceEnd: 1830, geography: "Paris", priority: 1,
    description: avsnitt(
      "Fransk forfatter og oppdrager. Som «gouverneur» for barna til hertugen av Chartres, blant dem den senere kong Louis-Philippe, prøvde hun ut en oppdragelse inspirert av Rousseau, men med langt mer innhold: språk, botanikk, teater og anskuelsesmidler som bilder og modeller. Brevromanen *Adèle et Théodore* (1782) var en av de mest leste oppdragelsesbøkene i sin tid og en motstemme til *Émile*: jentene får også en grundig, om enn kjønnsdelt, oppdragelse.",
      "Hun skrev skuespill og fortellinger for barn og ti bind memoarer (1825), et viktig tidsdokument.",
    ),
    keyWorks: verk(["Adèle et Théodore, ou Lettres sur l'éducation", 1782]),
    kilder: [snl("St%C3%A9phanie_F%C3%A9licit%C3%A9_Genlis")],
  },
  {
    name: "Maria Edgeworth", deathYear: 1849, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Naturalismen"],
    subGenre: ["Læring gjennom erfaring", "Interesse som utgangspunkt"],
    influenceStart: 1796, influenceEnd: 1849, geography: "Edgeworthstown, Irland", priority: 1,
    description: avsnitt(
      "Anglo-irsk forfatter (født 1768; SNL oppgir 1767). Sammen med faren, Richard Lovell Edgeworth, som hadde oppdratt sin eldste sønn etter Rousseau og angret, skrev hun *Practical Education* (1798). Boka er empirisk i tonen: den bygger på notater om egne søsken, vil ha forsøk, leker og redskaper inn i barnerommet, og lar barnets nysgjerrighet og interesse styre før pugg. Den er Rousseau korrigert av Locke og erfaring.",
      "Hun var en av sin tids mest leste romanforfattere (*Castle Rackrent*, 1800) og skrev fortellinger for barn som skulle oppdra gjennom handling og følger, ikke moralpreken.",
    ),
    keyWorks: verk(["The Parent's Assistant", 1796], ["Practical Education", 1798], ["Castle Rackrent", 1800]),
    kilder: [snl("Maria_Edgeworth")],
  },

  // --- Filantropismen ---
  {
    name: "Johann Bernhard Basedow", birthYear: 1724, deathYear: 1790, gender: "mann",
    metaGenre: R, instrument: "Praktiker", instrument2: "Teolog", mainGenre: ["Filantropismen"],
    subGenre: ["Anskuelse", "Kroppslig oppdragelse"],
    influenceStart: 1768, influenceEnd: 1790, geography: "Dessau (tidligere Sorø og Altona)", priority: 2,
    description: avsnitt(
      "Tysk pedagog og filantropismens grunnlegger. Han underviste ved akademiet i Sorø (1753–1761) og i Altona, begge under den danske kronen, før han med *Vorstellung an Menschenfreunde* (1768) samlet penger til en ny skole og et nytt lærebokverk. *Elementarwerk* (1774) var en billedbok for hele verden i Comenius' ånd, og Philanthropinum i Dessau (1774) skulle oppdra lykkelige og nyttige mennesker gjennom anskuelse, lek, kroppsøving, levende språk og en religion felles for alle.",
      "Basedow var en bedre agitator enn skoleleder, og skolen var preget av konflikter. Men han gjorde pedagogikken til en offentlig sak og ga Rousseau og Locke en form skoler kunne bruke.",
    ),
    keyWorks: verk(["Vorstellung an Menschenfreunde", 1768], ["Methodenbuch für Väter und Mütter der Familien und Völker", 1770], ["Elementarwerk", 1774]),
    kilder: [snl("Johann_Bernhard_Basedow"), snl("filantropisme")],
  },
  {
    name: "Christian Gotthilf Salzmann", birthYear: 1744, deathYear: 1811, gender: "mann",
    metaGenre: R, instrument: "Teolog", instrument2: "Praktiker", mainGenre: ["Filantropismen"],
    subGenre: ["Kroppslig oppdragelse", "Læring gjennom erfaring"],
    influenceStart: 1780, influenceEnd: 1811, geography: "Schnepfenthal, Thüringen", priority: 2,
    description: avsnitt(
      "Tysk prest og pedagog. Etter noen år ved Philanthropinum i Dessau grunnla han internatskolen i Schnepfenthal (1784), den filantropiske skolen som varte lengst og der GutsMuths utviklet gymnastikken. Salzmann la vekt på elevenes individualitet, kroppslige utvikling, arbeid i hage og verksted og undervisning ute.",
      "*Krebsbüchlein* (1780) er en ironisk «anvisning» i hvordan man oppdrar barn feil. *Ameisenbüchlein* (1806) snur blikket mot oppdrageren: årsaken til barnas feil skal oppdrageren først søke hos seg selv.",
    ),
    keyWorks: verk(["Krebsbüchlein", 1780], ["Ameisenbüchlein", 1806]),
    kilder: [snl("Christian_Gotthilf_Salzmann")],
  },
  {
    name: "Joachim Heinrich Campe", birthYear: 1746, deathYear: 1818, gender: "mann",
    metaGenre: R, instrument: "Praktiker", instrument2: "Teolog", mainGenre: ["Filantropismen"],
    subGenre: ["Læring gjennom erfaring"],
    influenceStart: 1776, influenceEnd: 1818, geography: "Dessau, Hamburg og Braunschweig", priority: 2,
    description: avsnitt(
      "Tysk prest, pedagog og forlegger. Han var en kort tid ved Philanthropinum i Dessau og ble filantropismens fremste systematiker og barnebokforfatter. *Robinson der Jüngere* (1779–1780) gjorde Defoes roman til en pedagogisk samtale mellom en far og barna, der Robinson lærer seg selvhjelp og nyttige ferdigheter. Boka ble en av de mest utbredte barnebøkene i Europa.",
      "*Allgemeine Revision des gesammten Schul- und Erziehungswesens* (fra 1785), som han redigerte, var tidens store pedagogiske oppslagsverk. Han arbeidet også med tysk språkrøkt og ordbøker.",
    ),
    keyWorks: verk(["Robinson der Jüngere", 1779], ["Allgemeine Revision des gesammten Schul- und Erziehungswesens", 1785]),
    kilder: [snl("Joachim_Heinrich_Campe")],
  },
  {
    name: "Ernst Christian Trapp", birthYear: 1745, deathYear: 1818, gender: "mann",
    metaGenre: R, instrument: "Forsker", mainGenre: ["Filantropismen"],
    subGenre: ["Læring gjennom erfaring"],
    influenceStart: 1779, influenceEnd: 1818, geography: "Halle og Braunschweig", priority: 2,
    description: avsnitt(
      "Tysk pedagog. Han fikk i 1779 den første lærestolen i pedagogikk ved et tysk universitet, i Halle, og skrev *Versuch einer Pädagogik* (1780). Boka vil gjøre pedagogikken til en erfaringsvitenskap: oppdragelsen skal bygge på systematisk iakttakelse av barn og forsøk, ikke på tradisjon og spekulasjon.",
      "Trapp ga opp professoratet etter få år, og pedagogikken ble ikke et eget universitetsfag i Tyskland før langt ut på 1800-tallet. Han regnes likevel som en tidlig talsmann for en empirisk pedagogikk, og var medarbeider i Campes revisjonsverk.",
    ),
    keyWorks: verk(["Versuch einer Pädagogik", 1780]),
    kilder: [bok("Ernst Christian Trapp", "Versuch einer Pädagogik. Nicolai", 1780), bok("Hanno Schmitt", "Vernunft und Menschlichkeit: Studien zur philanthropischen Erziehungsbewegung. Klinkhardt", 2007)],
  },
  {
    name: "Johann Christoph Friedrich GutsMuths", birthYear: 1759, deathYear: 1839, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Filantropismen"],
    subGenre: ["Kroppslig oppdragelse"],
    influenceStart: 1786, influenceEnd: 1839, geography: "Schnepfenthal, Thüringen", priority: 1,
    description: "Tysk lærer og en av den moderne gymnastikkens pionerer. Fra 1786 var han lærer i kroppsøving ved Salzmanns skole i Schnepfenthal, og *Gymnastik für die Jugend* (1793) ga filantropistenes tanker om kroppslig oppdragelse en praktisk form: løp, hopp, kast, klatring, svømming og lek ute, gradert etter alder. Boka fikk stor betydning for kroppsøving som skolefag i Tyskland, Frankrike og Danmark, og dermed indirekte i Norge.",
    keyWorks: verk(["Gymnastik für die Jugend", 1793], ["Spiele zur Übung und Erholung des Körpers und Geistes", 1796]),
    kilder: [snl("Johann_Christoph_Friedrich_Guts_Muths")],
  },

  // --- Anskuelsespedagogikken ---
  {
    name: "Johann Heinrich Pestalozzi", birthYear: 1746, deathYear: 1827, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Anskuelsespedagogikken"],
    subGenre: ["Anskuelse", "Hode, hjerte og hånd", "Selvvirksomhet"],
    influenceStart: 1774, influenceEnd: 1827, geography: "Sveits (Neuhof, Stans, Burgdorf, Yverdon)", priority: 3,
    description: avsnitt(
      "Sveitsisk pedagog og den mest innflytelsesrike folkeskolepedagogen på 1800-tallet. Etter mislykte forsøk som bonde og med en fattiganstalt på Neuhof skrev han folkeromanen *Lienhard und Gertrud* (1781–1787), der en mor oppdrar barna og landsbyen. Stans (1799), Burgdorf (1800–1804) og Yverdon (1805–1825) ble laboratorier for «metoden»: anskuelsen som grunnlag, tall, form og språk som elementer, og en oppdragelse av hode, hjerte og hånd.",
      "*Wie Gertrud ihre Kinder lehrt* (1801) er metodens programskrift, *Meine Nachforschungen* (1797) hans filosofiske antropologi. Pestalozzi var en dårlig organisator, og ettermælet er blitt formet like mye av elevene og myten som av tekstene; Daniel Tröhler leser ham i lys av republikansk tradisjon i Zürich.",
    ),
    keyWorks: verk(["Lienhard und Gertrud", 1781], ["Meine Nachforschungen über den Gang der Natur in der Entwicklung des Menschengeschlechts", 1797], ["Wie Gertrud ihre Kinder lehrt", 1801], ["Schwanengesang", 1826]),
    kilder: [snl("Johann_Heinrich_Pestalozzi"), bok("Daniel Tröhler", "Pestalozzi and the Educationalization of the World. Palgrave Macmillan", 2013)],
  },
  {
    name: "Adolph Diesterweg", birthYear: 1790, deathYear: 1866, gender: "mann",
    metaGenre: R, instrument: "Praktiker", instrument2: "Politiker og reformator", mainGenre: ["Anskuelsespedagogikken"],
    subGenre: ["Selvvirksomhet", "Anskuelse"],
    influenceStart: 1820, influenceEnd: 1866, geography: "Moers og Berlin", priority: 2,
    description: avsnitt(
      "Tysk pedagog og den viktigste formidleren av Pestalozzis ideer til den prøyssiske folkeskolen. Han ledet lærerseminaret i Moers og fra 1830-årene seminaret for byskolelærere i Berlin. *Wegweiser zur Bildung für deutsche Lehrer* (1835) ga lærerne regler for en undervisning som er «naturgemäß» og «kulturgemäß», og som vekker elevenes selvvirksomhet.",
      "Diesterweg var også en liberal skolepolitiker: han ville ha en skole uavhengig av kirken, konfesjonsløs religionsundervisning og en standsorganisert lærerstand. Det kostet ham stillingen etter 1847.",
    ),
    keyWorks: verk(["Wegweiser zur Bildung für deutsche Lehrer", 1835]),
    kilder: [snl("Adolph_Diesterweg")],
  },
  {
    name: "Elizabeth Mayo", birthYear: 1793, deathYear: 1865, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Anskuelsespedagogikken"],
    subGenre: ["Anskuelse"],
    influenceStart: 1830, influenceEnd: 1865, geography: "Cheam og London", priority: 1,
    description: "Engelsk pedagog. Sammen med broren Charles Mayo, som hadde arbeidet i Yverdon, drev hun en skole i Cheam i Pestalozzis ånd, og hennes *Lessons on Objects* gjorde anskuelsesundervisningen til «object lessons» i engelske og amerikanske skoler. Gjennom Home and Colonial Infant School Society (fra 1836) utdannet hun lærere til småbarnsskolen. Ettertiden har brukt hennes leksjoner som eksempel på hvordan anskuelsen stivnet til faste spørsmål om gjenstander; hun er også et eksempel på hvor tidlig kvinner fikk en ledende rolle i lærerutdanningen.",
    keyWorks: verk(["Lessons on Objects"]),
    kilder: [bok("Oxford Dictionary of National Biography", "Mayo, Elizabeth (1793–1865). Oxford University Press"), bok("Daniel Tröhler", "Pestalozzi and the Educationalization of the World. Palgrave Macmillan", 2013)],
  },
  {
    name: "Joseph Neef", birthYear: 1770, deathYear: 1854, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Anskuelsespedagogikken"],
    subGenre: ["Anskuelse"],
    influenceStart: 1806, influenceEnd: 1854, geography: "Philadelphia og New Harmony", priority: 1,
    description: "Alsacisk lærer som underviste hos Pestalozzi og kom til USA i 1806 på invitasjon fra William Maclure. *Sketch of a Plan and Method of Education* (1808) var den første boka på engelsk om Pestalozzis metode, og skolene hans i Philadelphia og senere i Robert Owens utopiske samfunn i New Harmony (fra 1826) var de første pestalozziske forsøkene i Amerika. Neef er et tidlig eksempel på hvordan metoden vandret sammen med sosiale reformprosjekter.",
    keyWorks: verk(["Sketch of a Plan and Method of Education", 1808]),
    kilder: [bok("Lawrence A. Cremin", "American Education: The National Experience, 1783–1876. Harper & Row", 1980)],
  },

  // --- Barnehagebevegelsen ---
  {
    name: "Friedrich Fröbel", birthYear: 1782, deathYear: 1852, gender: "mann",
    metaGenre: R, instrument: "Praktiker", instrument2: "Filosof", mainGenre: ["Barnehagebevegelsen"],
    subGenre: ["Lek", "Selvvirksomhet"],
    influenceStart: 1816, influenceEnd: 1852, geography: "Keilhau og Bad Blankenburg, Thüringen", priority: 3,
    description: avsnitt(
      "Tysk pedagog og barnehagens grunnlegger. Han studerte hos Pestalozzi (1808–1810), grunnla en oppdragelsesanstalt i Keilhau (1817) og skrev *Die Menschenerziehung* (1826), der oppdragelsen skal hjelpe det guddommelige i barnet til å folde seg ut. Fra 1837 utviklet han lekegavene og sysselsettingene i Bad Blankenburg, og i 1840 kalte han institusjonen *Kindergarten*.",
      "Leken er for Fröbel «det høyeste trinnet» i barnets utvikling og et uttrykk for indre selvvirksomhet. Hans symbolske, romantisk-idealistiske system ble senere kritisert som mystisk, men lekegavene og barnehagen som eget pedagogisk rom gikk verden rundt.",
    ),
    keyWorks: verk(["Die Menschenerziehung", 1826], ["Mutter- und Kose-Lieder", 1844]),
    kilder: [snl("Friedrich_Wilhelm_August_Fr%C3%B6bel"), snl("barnehagepedagogikk")],
  },
  {
    name: "Bertha von Marenholtz-Bülow", birthYear: 1810, deathYear: 1893, gender: "kvinne",
    metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Barnehagebevegelsen"],
    subGenre: ["Lek"],
    influenceStart: 1849, influenceEnd: 1893, geography: "Tyskland og Europa", priority: 1,
    description: "Tysk adelskvinne som møtte Fröbel i 1849 og etter hans død ble barnehagebevegelsens fremste agitator. Etter det prøyssiske forbudet (1851) reiste hun i England, Frankrike, Belgia, Nederland og Italia, holdt foredrag, skrev og knyttet kontakter. Hun gjorde barnehagen til et sosialt program for folkeoppdragelse, også for arbeiderklassens barn, og bidro til at bevegelsen ble internasjonal og ledet av kvinner.",
    kilder: [bok("Ann Taylor Allen", "The Transatlantic Kindergarten: Education and Women's Movements in Germany and the United States. Oxford University Press", 2017)],
  },
  {
    name: "Henriette Schrader-Breymann", birthYear: 1827, deathYear: 1899, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Barnehagebevegelsen"],
    subGenre: ["Lek", "Selvvirksomhet"],
    influenceStart: 1854, influenceEnd: 1899, geography: "Berlin", priority: 1,
    description: "Tysk pedagog, grandniese og elev av Fröbel. I Berlin bygde hun opp det som ble Pestalozzi-Fröbel-Haus, med folkebarnehage, utdanning av barnehagelærerinner og husholdningsundervisning. Hun ville knytte barnehagen tettere til hverdagsliv og hjem enn Fröbels symbolikk gjorde, og formulerte idealet om «åndelig moderskap»: kvinners omsorgsevne som samfunnsoppgave og yrke. Idealet ble viktig for den borgerlige kvinnebevegelsen og for profesjonaliseringen av barnehagen.",
    kilder: [bok("Ann Taylor Allen", "The Transatlantic Kindergarten: Education and Women's Movements in Germany and the United States. Oxford University Press", 2017)],
  },
  {
    name: "Elizabeth Palmer Peabody", birthYear: 1804, deathYear: 1894, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Barnehagebevegelsen"],
    subGenre: ["Lek"],
    influenceStart: 1834, influenceEnd: 1894, geography: "Boston", priority: 2,
    description: "Amerikansk pedagog, forlegger og transcendentalist. Hun var assistent ved Bronson Alcotts Temple School og skrev *Record of a School* (1835), et tidlig dokument om samtalebasert undervisning. I 1860 åpnet hun den første engelskspråklige barnehagen i USA, i Boston, og etter en reise til Tyskland ble hun fröbelbevegelsens viktigste talskvinne i Amerika, med tidsskrift, foredrag og utdanning av barnehagelærerinner.",
    keyWorks: verk(["Record of a School", 1835]),
    kilder: [bok("Ann Taylor Allen", "The Transatlantic Kindergarten: Education and Women's Movements in Germany and the United States. Oxford University Press", 2017)],
  },
  {
    name: "Susan Blow", birthYear: 1843, deathYear: 1916, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Barnehagebevegelsen"],
    subGenre: ["Lek"],
    influenceStart: 1873, influenceEnd: 1916, geography: "St. Louis", priority: 1,
    description: "Amerikansk pedagog som i 1873, med støtte fra skolesjef William Torrey Harris, åpnet den første offentlige barnehagen i et amerikansk skoleverk, i St. Louis. Modellen spredte seg til mange byer. Blow var den mest konsekvente fröbelianeren og tolket Fröbel gjennom Hegel (*Symbolic Education*, 1894). Rundt 1900 tapte hun striden med de progressive som ville bygge barnehagen på psykologi og barnestudier, og hun ble et symbol på den ortodoksien reformpedagogikken brøt med.",
    keyWorks: verk(["Symbolic Education: A Commentary on Froebel's Mother Play", 1894]),
    kilder: [bok("Ann Taylor Allen", "The Transatlantic Kindergarten: Education and Women's Movements in Germany and the United States. Oxford University Press", 2017)],
  },

  // --- Reformpedagogikken ---
  {
    name: "Ellen Key", birthYear: 1849, deathYear: 1926, gender: "kvinne",
    metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Reformpedagogikken"],
    subGenre: ["Barndommens egenverdi", "Elevenes selvstyre"],
    influenceStart: 1900, influenceEnd: 1926, geography: "Sverige", priority: 2,
    description: avsnitt(
      "Svensk forfatter, pedagog og kvinnesaksideolog. *Barnets århundrade* (1900) ga reformpedagogikken et slagord og ble oversatt til mange språk. Key ville at oppdragelsen skulle la barnet være i fred, at skolen skulle ta utgangspunkt i barnets egne interesser og at de voksne skulle være forbilder snarere enn tuktemestere. «Själamordet i skolorna» er hennes karakteristikk av den gamle skolen.",
      "Boka argumenterer også eugenisk for et «rasens» og slektenes framtidige velferd, og Keys syn på moderskapet som kvinners kall skilte henne fra deler av kvinnebevegelsen. Begge sider hører med til resepsjonen.",
    ),
    keyWorks: verk(["Barnets århundrade", 1900]),
    kilder: [snl("Ellen_Key")],
  },
  {
    name: "Maria Montessori", birthYear: 1870, deathYear: 1952, gender: "kvinne",
    metaGenre: R, instrument: "Forsker", instrument2: "Praktiker", mainGenre: ["Reformpedagogikken"],
    subGenre: ["Den forberedte omgivelsen", "Selvvirksomhet"],
    influenceStart: 1907, influenceEnd: 1952, geography: "Roma, senere Spania, India og Nederland", priority: 3,
    description: avsnitt(
      "Italiensk lege og pedagog. Hun begynte med barn med utviklingshemning og bygde på Itard og Séguin, og i 1907 åpnet hun den første *Casa dei Bambini* i arbeiderkvarteret San Lorenzo i Roma. Metoden bygger på en forberedt omgivelse med selvkorrigerende materialer, frihet til å velge arbeid, sensitive perioder i utviklingen og en lærer som observerer mer enn hun underviser. Hun kalte det en vitenskapelig pedagogikk (*Il metodo*, 1909).",
      "Montessoribevegelsen ble raskt internasjonal. Forholdet til Mussolinis regime, som støttet bevegelsen fra 1924 til bruddet i 1934, og kritikken av metodens stivhet (Kilpatrick 1914) er en del av historien.",
    ),
    keyWorks: verk(["Il metodo della pedagogia scientifica applicato all'educazione infantile nelle Case dei Bambini", 1909]),
    kilder: [snl("Maria_Montessori"), bok("Rita Kramer", "Maria Montessori: A Biography. Putnam", 1976)],
  },
  {
    name: "Georg Kerschensteiner", birthYear: 1854, deathYear: 1932, gender: "mann",
    metaGenre: R, instrument: "Politiker og reformator", instrument2: "Praktiker", mainGenre: ["Reformpedagogikken"],
    subGenre: ["Arbeidsskoleprinsippet", "Medborgerskap"],
    influenceStart: 1895, influenceEnd: 1932, geography: "München", priority: 2,
    description: avsnitt(
      "Tysk pedagog og skolepolitiker, skoledirektør i München fra 1895 og professor fra 1919. Han er arbeidsskolens viktigste teoretiker: manuelt arbeid i verksted, kjøkken og skolehage skal ikke bare gi ferdigheter, men oppdra til saklighet, samarbeid og karakter. Hans yrkesskoler for unge arbeidere i München ble et internasjonalt forbilde.",
      "Kerschensteiners mål var «statsborgerlig oppdragelse» (*Staatsbürgerliche Erziehung der deutschen Jugend*, 1901): arbeidsskolen skal lage brukbare borgere av en nasjonalstat, et konservativt og integrerende motiv som skiller ham fra den barnesentrerte fløyen.",
    ),
    keyWorks: verk(["Staatsbürgerliche Erziehung der deutschen Jugend", 1901], ["Begriff der Arbeitsschule", 1912], ["Theorie der Bildung", 1926]),
    kilder: [snl("Georg_Kerschensteiner"), snl("arbeidsskole_-_pedagogikk")],
  },
  {
    name: "Rudolf Steiner", birthYear: 1861, deathYear: 1925, gender: "mann",
    metaGenre: R, instrument: "Filosof", mainGenre: ["Reformpedagogikken"],
    subGenre: ["Hode, hjerte og hånd"],
    influenceStart: 1907, influenceEnd: 1925, geography: "Østerrike, Tyskland og Sveits", priority: 2,
    description: avsnitt(
      "Østerriksk filosof og grunnleggeren av antroposofien. Den første Waldorfskolen åpnet i Stuttgart i 1919 for barna til arbeiderne ved Emil Molts sigarettfabrikk Waldorf-Astoria. Pedagogikken bygger på en antroposofisk lære om utvikling i sjuårsfaser, med periodeundervisning, kunstneriske fag, eurytmi og en klasselærer som følger klassen i mange år.",
      "Steinerskolene er blant de mest utbredte alternative skolene i verden, også i Norge (fra 1926). Det antroposofiske grunnlaget er omstridt, og forholdet mellom pedagogisk praksis og esoterisk lære er et sentralt tema i forskningen.",
    ),
    keyWorks: verk(["Die Erziehung des Kindes vom Gesichtspunkte der Geisteswissenschaft", 1907]),
    kilder: [snl("Rudolf_Steiner"), snl("steinerskoler")],
  },
  {
    name: "Anna Sethne", birthYear: 1872, deathYear: 1961, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Reformpedagogikken"],
    subGenre: ["Arbeidsskoleprinsippet", "Selvvirksomhet"],
    influenceStart: 1911, influenceEnd: 1961, geography: "Kristiania (Oslo)", priority: 2,
    description: avsnitt(
      "Norsk lærer og pedagog, overlærer ved Sagene folkeskole i Kristiania fra 1919 til 1938. Etter et reisestipend i 1911 til europeiske skoler gjorde hun Sagene til forsøksskole for arbeidsskolen: elevaktivitet, samarbeid, praktiske oppgaver og en skole knyttet til nærmiljøet. Forsøkene hennes fikk betydelig innflytelse på Normalplanen av 1939.",
      "Sethne er den norske reformpedagogikkens mest konkrete praktiker, og et eksempel på hvordan reformene ble formidlet av lærere, ikke bare av teoretikere.",
    ),
    kilder: [snl("Anna_Cathrine_Sethne"), nbl("Anna_Sethne")],
  },

  // --- Antiautoritær pedagogikk ---
  {
    name: "A.S. Neill", birthYear: 1883, deathYear: 1973, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Antiautoritær pedagogikk"],
    subGenre: ["Elevenes selvstyre", "Barndommens egenverdi"],
    influenceStart: 1921, influenceEnd: 1973, geography: "Leiston, Suffolk", priority: 3,
    description: avsnitt(
      "Skotsk lærer og grunnleggeren av Summerhill (1921), som etter flyttinger kom til Leiston i Suffolk i 1927. Skolen hadde frivillig undervisning og et skolemøte der barn og voksne hadde like stemmer. Neill bygde på Homer Lane og psykoanalysen, særlig Wilhelm Reich: et barn som får leve ut sine drifter og behov, blir lykkelig og godt; tvang gir hat og neurose.",
      "*Summerhill* (1960) og den tyske utgaven (1969) gjorde ham til en ikonisk skikkelse i 1968-generasjonen. (SNL oppgir fødselsåret 1893; de fleste kilder har 1883.)",
    ),
    keyWorks: verk(["A Dominie's Log", 1915], ["Summerhill: A Radical Approach to Child Rearing", 1960]),
    kilder: [snl("Alexander_Sutherland_Neill")],
  },
  {
    name: "Homer Lane", birthYear: 1875, deathYear: 1925, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Antiautoritær pedagogikk"],
    subGenre: ["Elevenes selvstyre"],
    influenceStart: 1907, influenceEnd: 1925, geography: "Michigan og Dorset", priority: 1,
    description: "Amerikansk pedagog som arbeidet med unge lovbrytere. I Ford Republic i Michigan og i Little Commonwealth i Dorset (1913–1918) lot han ungdommene styre seg selv gjennom egne lover og domstoler, ut fra en psykologisk overbevisning om at kriminalitet kommer av tvang, og at ansvar læres ved å få det. Little Commonwealth ble stengt etter anklager om overgrep, som Lane benektet. Gjennom A.S. Neill, som regnet ham som sin læremester, ble ideene grunnlaget for Summerhill.",
    keyWorks: verk(["Talks to Parents and Teachers", 1928]),
    kilder: [bok("Homer Lane", "Talks to Parents and Teachers. Allen & Unwin", 1928)],
  },
  {
    name: "Dora Russell", birthYear: 1894, deathYear: 1986, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Antiautoritær pedagogikk"],
    subGenre: ["Elevenes selvstyre", "Likestilt utdanning"],
    influenceStart: 1927, influenceEnd: 1943, geography: "Sussex", priority: 1,
    description: "Britisk feminist og pedagog. Sammen med ektemannen Bertrand Russell grunnla hun Beacon Hill School (1927), en fri skole med skolemøter, åpen seksualopplysning og vitenskap i sentrum, og hun drev den alene etter skilsmissen til 1943. Hvor Neill var psykoanalytisk motivert, var Beacon Hill rasjonalistisk og sosialistisk; Bertrand Russells *On Education, Especially in Early Childhood* (1926) var skolens teoretiske bakgrunn.",
    kilder: [bok("Bertrand Russell", "On Education, Especially in Early Childhood. Allen & Unwin", 1926)],
  },
  {
    name: "Mosse Jørgensen", birthYear: 1921, deathYear: 2009, gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Antiautoritær pedagogikk"],
    subGenre: ["Elevenes selvstyre"],
    influenceStart: 1967, influenceEnd: 2009, geography: "Oslo", priority: 2,
    description: "Norsk lektor og reformpedagog, den første rektor ved Forsøksgymnaset i Oslo (fra 1967), som elevene selv hadde tatt initiativ til. Skolen hadde elevstyre gjennom allmøtet og et fellesskap der lærere og elever skulle være likestilte. Jørgensen var i mer enn tretti år en av de mest innflytelsesrike og omstridte stemmene i norsk skoledebatt, og var aktiv i SF og SV.",
    kilder: [nbl("Mosse_J%C3%B8rgensen"), snl("fors%C3%B8ksgymnas")],
  },

  // --- Reggio Emilia ---
  {
    name: "Loris Malaguzzi", birthYear: 1920, deathYear: 1994, gender: "mann",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Reggio Emilia"],
    subGenre: ["Det kompetente barnet", "Pedagogisk dokumentasjon"],
    influenceStart: 1946, influenceEnd: 1994, geography: "Reggio Emilia", priority: 3,
    description: avsnitt(
      "Italiensk lærer og pedagog, og tenkeren bak Reggio Emilia-pedagogikken. Han var vitne til de selvdrevne skolene på landsbygda etter krigen, fra Villa Cella (åpnet 1947), og ledet senere de kommunale førskolene i Reggio Emilia fra den første i 1963. Diktet om barnas «hundre språk» oppsummerer synet: barnet er rikt og kompetent, og skolen tar fra det nittini av språkene når den skiller tenkning fra kropp, lek fra arbeid og fantasi fra virkelighet.",
      "Malaguzzi bygde på Dewey, Piaget, Vygotskij og Bruner, men var skeptisk til ferdige teorier og programmer. Han skrev lite systematisk; mye av tenkningen er formidlet gjennom intervjuer og samarbeidspartnere.",
    ),
    kilder: [reggioChildren("loris-malaguzzi/"), bok("Carolyn Edwards, Lella Gandini og George Forman (red.)", "The Hundred Languages of Children: The Reggio Emilia Approach to Early Childhood Education. Ablex", 1993)],
  },
  {
    name: "Carlina Rinaldi", gender: "kvinne",
    metaGenre: R, instrument: "Praktiker", mainGenre: ["Reggio Emilia"],
    subGenre: ["Pedagogisk dokumentasjon", "Det kompetente barnet"],
    influenceStart: 1970, geography: "Reggio Emilia", priority: 1,
    description: "Italiensk pedagog. Fra 1970 arbeidet hun i Reggio Emilia, først som *pedagogista*, senere som pedagogisk leder for de kommunale tilbudene og som Malaguzzis etterfølger, og fra 2007 som president for Reggio Children. Hun har gjort «lyttingens pedagogikk» og dokumentasjonen til begreper med teoretisk vekt: dokumentasjon er ikke å arkivere det som har skjedd, men en måte å gjøre læring synlig, diskutere den og planlegge videre sammen med barna.",
    keyWorks: verk(["In Dialogue with Reggio Emilia: Listening, Researching and Learning", 2006]),
    kilder: [bok("Carlina Rinaldi", "In Dialogue with Reggio Emilia: Listening, Researching and Learning. Routledge", 2006)],
  },
  {
    name: "Gunilla Dahlberg", gender: "kvinne",
    metaGenre: R, instrument: "Forsker", mainGenre: ["Reggio Emilia"],
    subGenre: ["Pedagogisk dokumentasjon", "Det kompetente barnet"],
    influenceStart: 1990, geography: "Stockholm", priority: 1,
    description: "Svensk barnehageforsker ved Lärarhögskolan i Stockholm og den viktigste formidleren av Reggio Emilia i Norden. Med Peter Moss og Alan Pence skrev hun *Beyond Quality in Early Childhood Education and Care* (1999), som kritiserer målstyrte kvalitetsbegreper og bruker Reggio og postmoderne teori til å forsvare en barnehage der meningsskaping og pedagogisk dokumentasjon står sentralt. Boka har preget barnehageforskning og lærerutdanning i Norge og Sverige.",
    keyWorks: verk(["Beyond Quality in Early Childhood Education and Care: Postmodern Perspectives", 1999]),
    kilder: [bok("Gunilla Dahlberg, Peter Moss og Alan Pence", "Beyond Quality in Early Childhood Education and Care: Postmodern Perspectives. Falmer Press", 1999)],
  },
];
