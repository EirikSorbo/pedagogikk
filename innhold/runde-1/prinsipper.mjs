// Runde 1 — de pedagogiske prinsippene, med felles tekst (fase 6, skrevet av Opus).
// Prinsippene går på tvers av epoker og retninger og merkes på teoretikerne (subGenre).
import { snl, nbl, sep, lex, side, bok } from "../kilder.mjs";

const p = (description, kilder) => ({ sub: { description, kilder } });

export default {
  genreDescriptions: {
    sub: {
      "Anskuelsesprinsippet": p(`
        Anskuelsesprinsippet sier at undervisningen skal begynne i den konkrete sanseerfaringen og gå derfra til begreper og ord. Komenius formulerte det i *Didactica magna* og laget den første illustrerte læreboka, *Orbis sensualium pictus* (1658), og Rousseau ville at Émile skulle lære av ting, ikke av bøker. Prinsippet fikk sin klassiske form hos Pestalozzi, som i 1801 kalte anskuelsen «det absolutte grunnlaget for all erkjennelse» og bygde en metode med tall, form og språk som elementer.

        Gjennom lærerseminarene ble prinsippet en del av folkeskolen i hele Europa og i USA, ofte som faste leksjoner om gjenstander og bilder. I Norge var anskuelsesundervisning et eget emne i småskolen, med veggplansjer, langt inn på 1900-tallet. Forskningen har påpekt at prinsippet hviler på en empiristisk kunnskapsteori som senere læringsforskning har nyansert: det vi ser, er alltid tolket gjennom begreper vi allerede har. Prinsippet lever likevel videre i ideen om konkretisering, i bruk av modeller og i ekskursjoner.
      `, [snl("https://snl.no/anskuelsesundervisning"), snl("https://snl.no/Johann_Heinrich_Pestalozzi", "Kaare Skagen")]),

      "Selvvirksomhet": p(`
        Selvvirksomhet betyr at barnet lærer best gjennom egen aktivitet, ikke ved å ta imot ferdig kunnskap. Begrepet har røtter i den tyske idealismens tanke om at mennesket virkeliggjør seg selv gjennom handling, og fikk pedagogisk form hos Pestalozzi og særlig hos Fröbel, som så leken som barnets selvvirksomhet. Reformpedagogikken gjorde det til et slagord: Montessoris materiell, Kerschensteiners arbeidsskole og Deweys aktivitetsskole bygger alle på det.

        I Norge ble selvvirksomhetsprinsippet et nøkkelbegrep i Normalplanen av 1939, og det har fulgt norske læreplaner siden, i dag som elevaktive arbeidsmåter. Forskningen har vist at begrepet rommer både en psykologisk og en moralsk betydning: barnet skal være aktivt fordi det lærer bedre, og fordi det skal bli et selvstendig menneske. Det har også vist at aktivitet ikke er det samme som tenkning. Elever kan være svært aktive uten å lære det som var tenkt, og læringsforskningen skiller derfor mellom fysisk og kognitiv aktivitet.
      `, [snl("https://snl.no/reformpedagogikk"), snl("https://snl.no/Friedrich_Wilhelm_August_Fr%C3%B6bel", "Kaare Skagen")]),

      "Læring gjennom erfaring": p(`
        Prinsippet om at mennesker lærer gjennom erfaring er gammelt, men fikk sin moderne form hos Dewey. Erfaring er for ham ikke passive sanseinntrykk, men en vekselvirkning mellom mennesket og omgivelsene der handling og konsekvens henger sammen. Ikke alle erfaringer er lærerike: en erfaring er god når den åpner for nye erfaringer (kontinuitet) og når den skjer i samspill med omgivelsene (interaksjon). Oppdragelse er derfor en kontinuerlig rekonstruksjon av erfaring, slik han skriver i *Democracy and Education* (1916) og *Experience and Education* (1938).

        David Kolb gjorde i 1984 erfaringslæringen til en syklus i fire faser, som ble svært utbredt i voksenopplæring og profesjonsutdanning. Kritikken har vært at syklusen er for individuell og mekanisk, og at Deweys poeng om at erfaringen er sosial og må forbindes med fagenes organiserte kunnskap, går tapt. Prinsippet ligger bak alt fra arbeidsskolen til praksisstudier i lærerutdanningen, og bak dagens vekt på dybdelæring gjennom utforskning.
      `, [sep("https://plato.stanford.edu/entries/dewey/", "David Hildebrand"), bok("Kolb, David A. Experiential Learning: Experience as the Source of Learning and Development. Prentice-Hall, 1984.")]),

      "Leken som læringsform": p(`
        At leken har pedagogisk verdi, ble gjort til et prinsipp av Fröbel, som så leken som barnets høyeste uttrykk og bygde barnehagen rundt den. Filantropene brukte spill i undervisningen, og George Herbert Mead viste hvordan leken og spillet utvikler barnets evne til å ta andres perspektiv. Utviklingspsykologien ga senere leken en sentral plass, hos Piaget som assimilasjon og øving, hos Vygotskij som en sone der barnet er «et hode høyere enn seg selv».

        Prinsippet rommer en varig spenning mellom lek som mål i seg selv og lek som middel for læring. I barnehagen i Norden har leken stått sterkt, og den norske rammeplanen gir den en egen verdi. Samtidig har læringsmål, skoleforberedelse og kartlegging gjort leken til et middel, noe barnehageforskere som Maria Øksnes har kritisert: den frie leken, med sine overskridelser og sin egen logikk, passer dårlig inn i en pedagogikk der alt skal ha et læringsutbytte. Debatten om lek i småskolen etter skolestart for seksåringer i 1997 viser at spørsmålet også gjelder skolen.
      `, [snl("https://snl.no/lek_i_barnehagen", "Maria Øksnes og Tora Korsvold"), snl("https://snl.no/barnehagepedagogikk", "Tora Korsvold")]),

      "Negativ oppdragelse": p(`
        Negativ oppdragelse er Rousseaus begrep fra *Émile* (1762) for oppdragelsen i de første leveårene: den skal ikke lære barnet dyd og sannhet, men verne hjertet mot laster og forstanden mot villfarelser. Oppdrageren skal skjerme barnet mot for tidlig moral, abstrakte forklaringer og sosial sammenligning, og la det lære av tingenes motstand og naturens nødvendighet. Det er en strategi for å vinne tid, så utviklingen kan følge sin egen orden.

        Begrepet er grunnlaget for en lang tradisjon som ser oppdragelse som tilbakeholdenhet: å legge til rette i stedet for å gripe inn. Det finnes igjen hos reformpedagogene, hos Montessori og i den antiautoritære pedagogikken. Forskningen har påpekt paradokset: den negative oppdragelsen forutsetter en lærer som kontrollerer alle omgivelsene, slik at barnets frihet er nøye regissert. Det gjør Rousseaus begrep til et utgangspunkt for diskusjonen om forholdet mellom frihet og styring i all barnesentrert pedagogikk.
      `, [sep("https://plato.stanford.edu/entries/rousseau/", "Christopher Bertram"), snl("https://snl.no/Jean-Jacques_Rousseau", "Lars Fredrik Händler Svendsen og Trude Kolderup")]),

      "Barndommens egenverdi": p(`
        Prinsippet sier at barndommen ikke bare er en forberedelse til voksenlivet, men et livsstadium med egen verdi og egne lover. Rousseau formulerte det programmatisk i *Émile*: naturen vil at barn skal være barn før de blir voksne. Ellen Key gjorde det til et politisk krav om «barnets århundre» (1900), og reformpedagogikken, barnehagen og barnepsykologien bygde videre på det. FNs barnekonvensjon (1989) ga barn rettigheter som barn.

        Philippe Ariès hevdet i 1960 at barndommen som eget livsstadium var en moderne oppfinnelse. Tesen er sterkt omdiskutert, men den har gjort barndommen til et historisk og kulturelt fenomen, ikke bare et biologisk. Den nyere barndomsforskningen ser barn som aktører og kritiserer at de bare forstås som «voksne i emning». Samtidig har prinsippet en konservativ side: et vern om barndommen kan også holde barn utenfor beslutninger og ansvar, og spenningen mellom vern og deltakelse går igjen i dagens debatter om barnehage, skole og digitale medier.
      `, [snl("https://snl.no/Ellen_Key"), bok("Ariès, Philippe. L'Enfant et la vie familiale sous l'Ancien Régime. Plon, 1960.")]),

      "Helhetlig oppdragelse": p(`
        Prinsippet om helhetlig oppdragelse sier at oppdragelsen skal omfatte hele mennesket, forstand, følelser og vilje, kropp og praktisk ferdighet, ikke bare kunnskap. Pestalozzis formel «hode, hjerte og hånd» er det mest kjente uttrykket. Filantropene la vekt på kropp og praktisk arbeid, Fröbel så mennesket som en del av en guddommelig helhet, og steinerpedagogikken bygger på et helhetlig menneskebilde der kunstnerisk arbeid, rytme og bevegelse har like stor plass som fagene.

        Prinsippet har vært et motstykke til en skole som bare måler kunnskaper i fag. I norske læreplaner kommer det til uttrykk som allsidig utvikling og i den generelle delen av læreplanverket (1993), som ender i bildet av «det integrerte mennesket». Kritikerne har pekt på at helhet kan bli et uklart ideal som gir skolen ansvar for alt, og at det kan dekke over at ulike sider ved mennesket krever ulike pedagogiske grep. Forskningen viser også at prinsippet har tjent ulike menneskesyn, fra kristne og idealistiske til antroposofiske og humanistiske.
      `, [snl("https://snl.no/Johann_Heinrich_Pestalozzi", "Kaare Skagen"), snl("https://snl.no/steinerskoler", "Jan-Erik Ebbestad Hansen")]),

      "Arbeidsskoleprinsippet": p(`
        Arbeidsskoleprinsippet sier at elevene skal lære gjennom eget arbeid, praktisk eller intellektuelt, i stedet for å lytte og pugge. Begrepet ble satt opp som motsetning til «lærskolen» eller «puggskolen». Georg Kerschensteiner ga det den mest innflytelsesrike formen (1912): manuelt arbeid i verksted, kjøkken og hage skulle utvikle saklighet, karakter og samfunnssinn. Hugo Gaudig la mer vekt på fritt åndelig arbeid, og sosialistiske reformatorer så arbeidsskolen som en produksjonsskole.

        I Norge ble prinsippet innført i stor skala gjennom Anna Sethne og forsøket på Sagene skole i 1920-årene, med heimstadlære, selvstendig arbeid og elevenes interesser, og det ble et hovedprinsipp i Normalplanen av 1939. Forskningen har vist at «arbeid» betydde svært forskjellige ting, fra yrkesforberedelse og disiplin til selvstendig undersøkelse. Prinsippet lever videre i praktiske og estetiske fag, i elevaktive arbeidsmåter og i diskusjonen om en mer praktisk skole.
      `, [snl("https://snl.no/Georg_Kerschensteiner"), nbl("https://nbl.snl.no/Anna_Sethne", "Rolf Grankvist")]),

      "Frihet i oppdragelsen": p(`
        Kant formulerte oppdragelsens grunnproblem i forelesningene om pedagogikk (utgitt 1803): hvordan kan man dyrke friheten under tvang? Barnet skal bli fritt og myndig, men det skjer gjennom en oppdragelse det ikke selv har valgt. Rousseau svarte med en «velregulert frihet», der barnet tror det er fritt i en verden læreren har innrettet. Ellen Key og reformpedagogene ville gi barnet mer rom, og A.S. Neill gjorde i Summerhill friheten fra ytre tvang til selve pedagogikken.

        Den antiautoritære bølgen på 1960- og 70-tallet gjorde frihet til et politisk krav. Kritikken har kommet fra flere hold: at frihet uten struktur gir de sterkeste makt, at barn trenger voksne som tar ansvar, og at friheten i fri oppdragelse ofte er en annen form for styring. Debatten har i senere år handlet om voksenrollen, om «grensesetting» og om autoritet som noe som må begrunnes, ikke avskaffes. Kants paradoks er ikke løst, men det er blitt et utgangspunkt for nyere dannelsesteori, blant annet hos Gert Biesta.
      `, [snl("https://snl.no/Alexander_Sutherland_Neill", "Kaare Skagen"), bok("Kant, Immanuel. Über Pädagogik. Utg. Friedrich Theodor Rink. Friedrich Nicolovius, 1803.")]),

      "Miljøet som pedagog": p(`
        Prinsippet sier at de fysiske og sosiale omgivelsene selv oppdrar, og at pedagogens viktigste oppgave er å forme dem. Rousseau innrettet Émiles omgivelser i stedet for å belære ham, og Montessori gjorde «det forberedte miljøet» til kjernen i metoden: møbler og materiell i barnets størrelse, orden, og materiell som retter seg selv. I Reggio Emilia kalles rommet «den tredje pedagogen», ved siden av barna og de voksne, med verksted, lys, speil og dokumentasjon på veggene.

        Prinsippet har påvirket både arkitektur og pedagogikk i barnehager og skoler, fra friluftsbarnehager til åpne læringsarealer. Forskningen har vist at miljøet aldri er nøytralt: det bærer verdier, forventninger og normer, og kan like gjerne disiplinere som frigjøre. Erfaringene med «åpne skoler» på 1970-tallet og med nyere læringsarealer tyder på at rommet bare virker sammen med arbeidsmåtene. Prinsippet er derfor mest fruktbart når miljøet forstås som noe pedagogene og barna former sammen.
      `, [snl("https://snl.no/Maria_Montessori", "Anne Synnøve Simensen"), bok("Edwards, Carolyn, Lella Gandini og George Forman (red.). The Hundred Languages of Children: The Reggio Emilia Approach to Early Childhood Education. Ablex, 1993.")]),

      "Pedagogisk dokumentasjon": p(`
        Pedagogisk dokumentasjon er utviklet i Reggio Emilia og betyr at pedagogene samler notater, bilder, opptak og barnas egne uttrykk underveis i arbeidet, og bruker dem til å reflektere over, tolke og planlegge videre sammen med barna, kollegene og foreldrene. Carla Rinaldi kaller det synlig lytting: dokumentasjonen gjør læringen synlig og diskuterbar, og gjør pedagogen til forsker i egen praksis.

        Gunilla Dahlberg, Peter Moss og Alan Pence satte i *Beyond Quality* (1999) pedagogisk dokumentasjon opp som et alternativ til kvalitetsmåling: i stedet for å måle mot standarder skal fellesskapet skape mening i det som skjer. Begrepet har fått stor plass i nordisk barnehageforskning og i den norske rammeplanen. Forskningen har også pekt på farene: dokumentasjon kan bli overvåking og kartlegging av barn, og fotografering og deling reiser spørsmål om barns personvern. Skillet mellom dokumentasjon som refleksjon og dokumentasjon som rapportering er avgjørende.
      `, [bok("Rinaldi, Carla. In Dialogue with Reggio Emilia: Listening, Researching and Learning. Routledge, 2006."), bok("Dahlberg, Gunilla, Peter Moss og Alan Pence. Beyond Quality in Early Childhood Education and Care: Postmodern Perspectives. Falmer Press, 1999.")]),

      "Interesseprinsippet": p(`
        Interesseprinsippet sier at undervisningen skal bygge på og vekke elevenes interesse. Herbart gjorde «den mangesidige interessen» til målet for undervisningen i *Allgemeine Pädagogik* (1806): interessen er ikke bare et middel for å lære, men selve det dannede menneskets forhold til verden. Herbartianerne gjorde den til en del av metoden, og reformpedagogene og de progressive gjorde elevens egne interesser til utgangspunkt.

        Dewey kritiserte begge sider i essayet om interesse og vilje (1896) og i *Interest and Effort in Education* (1913): interesse er verken noe læreren skaper med lokkemidler, eller elevens tilfeldige lyster, men en sammenheng mellom eleven og et mål eleven ser verdien av. Forskjellen mellom å følge elevens interesser og å utvikle dem går igjen i hele prinsippets historie. I Norge var interesseprinsippet sentralt i Anna Sethnes arbeidsskole. Nyere motivasjonsforskning skiller mellom situasjonell og individuell interesse, og viser hvordan den ene kan utvikles til den andre.
      `, [bok("Herbart, Johann Friedrich. Allgemeine Pädagogik aus dem Zweck der Erziehung abgeleitet. Röwer, 1806."), bok("Dewey, John. Interest and Effort in Education. Houghton Mifflin, 1913.")]),

      "Skolen som samfunn i miniatyr": p(`
        Prinsippet kommer fra Dewey, som i *The School and Society* (1899) ville gjøre skolen til et «embryonisk samfunn»: et fellesskap der elevene gjennom felles arbeid lærer det samarbeidet, ansvaret og den problemløsningen et demokratisk samfunn trenger. Skolen skal ikke forberede til livet, den skal være liv. I laboratorieskolen i Chicago arbeidet barna med mat, klær og hus som sosiale aktiviteter som førte inn i fagene.

        Prinsippet ble tatt opp av reformpedagogikken, i elevråd og skolerepublikker, i Summerhills fellesmøte og i Forsøksgymnaset. Kritikerne har spurt hvilket samfunn skolen skal være en miniatyr av: dagens, med dets ulikheter, eller et bedre? George Counts mente progressivismen manglet en samfunnsvisjon, og senere kritisk pedagogikk har vist hvordan skolen også reproduserer samfunnets hierarkier. I norske læreplaner lever prinsippet videre i formuleringer om skolen som et demokratisk fellesskap der elevene skal øve medvirkning.
      `, [sep("https://plato.stanford.edu/entries/dewey-political/", "Matthew Festenstein"), bok("Dewey, John. The School and Society. University of Chicago Press, 1899.")]),

      "Undersøkende læring": p(`
        Undersøkende læring betyr at elevene lærer ved å undersøke spørsmål og problemer, formulere hypoteser, samle data og trekke konklusjoner, i stedet for å ta imot ferdige svar. Prinsippet har røtter i opplysningstidens tillit til erfaring og eksperiment, hos Maria Edgeworth og andre, og fikk sin filosofiske begrunnelse hos Peirce og Dewey: tenkning er undersøkelse som begynner i en tvil og ender i en begrunnet overbevisning. Deweys *How We Think* (1910) beskrev refleksiv tenkning i faser som ble modell for problemløsning i skolen.

        Prinsippet har gått igjen i oppdagelseslæring på 1960-tallet, i problembasert læring og i dagens vekt på utforskende arbeidsmåter og dybdelæring. Det er også omstridt. Kirschner, Sweller og Clark (2006) hevdet at undervisning med lite veiledning er ineffektiv for nybegynnere, fordi de mangler kunnskapen som trengs for å undersøke noe meningsfullt. Forsvarere svarer at god undersøkende læring nettopp er sterkt stillasert. Debatten viser at spørsmålet ikke er om elevene skal undersøke, men hvor mye støtte de trenger.
      `, [sep("https://plato.stanford.edu/entries/pragmatism/", "Catherine Legg og Christopher Hookway"), bok("Kirschner, Paul A., John Sweller og Richard E. Clark. «Why Minimal Guidance During Instruction Does Not Work.» Educational Psychologist 41, nr. 2 (2006): 75–86.")]),

      "Prosjektarbeid": p(`
        Prosjektarbeid er en arbeidsform der elevene over tid arbeider med et selvvalgt eller felles problem, ofte i grupper, og leverer et produkt. Michael Knoll har vist at prosjektet kom fra arkitekt- og ingeniørutdanningen og amerikansk landbruksundervisning før Kilpatrick ga det en allmenn pedagogisk teori i 1918: «helhjertet, målrettet aktivitet i et sosialt miljø», der elevens egen hensikt er avgjørende.

        Den nordiske prosjektpedagogikken fra 1970-tallet, med Knud Illeris og universitetene i Roskilde og Aalborg, ga prosjektet en kritisk begrunnelse: problemene skulle være samfunnsmessig relevante, og deltakerne skulle styre arbeidet. I norsk skole ble tema- og prosjektarbeid anbefalt i mønsterplanene og fikk et fast omfang i L97. Forskningen har vist at prosjektarbeid kan gi motivasjon, samarbeid og dybde, men også at det lett blir aktivitet uten faglig progresjon, og at elever med svake forutsetninger kan tape når strukturen er svak. Lærerens rolle i å stille rammer og følge opp er derfor avgjørende.
      `, [bok("Knoll, Michael. «The Project Method: Its Vocational Education Origin and International Development.» Journal of Industrial Teacher Education 34, nr. 3 (1997): 59–80."), bok("Illeris, Knud. Problemorientering og deltagerstyring. Oplæg til en alternativ didaktik. Munksgaard, 1974.")]),

      "Refleksjon i og over handling": p(`
        Donald Schön skilte i *The Reflective Practitioner* (1983) mellom refleksjon i handling, der den profesjonelle tenker mens hun handler og justerer underveis, og refleksjon over handling, der hun ser tilbake og vurderer. Begge bygger på en taus viten-i-handling som ikke kan reduseres til regler. Begrepene var et angrep på den tekniske rasjonaliteten i profesjonsutdanningene, der praksis ble sett som anvendt vitenskap.

        Prinsippet ble raskt et nøkkelord i lærer-, sykepleier- og sosialarbeiderutdanning. I Norge utviklet Gunnar Handal og Per Lauvås begrepet praktisk yrkesteori og en veiledningsstrategi der læreren skal gjøre sin egen teori eksplisitt og prøve den. Kritikken har vært at refleksjon ble et så allment krav at det mistet innhold, og at det kan bli et ritual eller en bekjennelse. Lynn Fendler (2003) har vist hvordan refleksjonsbegrepet bærer med seg både Deweys vitenskapelige ideal, Schöns intuitive kunnskap og terapeutiske og feministiske tradisjoner, som ikke uten videre lar seg forene.
      `, [bok("Schön, Donald A. The Reflective Practitioner: How Professionals Think in Action. Basic Books, 1983."), bok("Fendler, Lynn. «Teacher Reflection in a Hall of Mirrors: Historical Influences and Political Reverberations.» Educational Researcher 32, nr. 3 (2003): 16–25.")]),

      "Det levende ord": p(`
        «Det levende ord» er Grundtvigs uttrykk for den muntlige, personlige fortellingen og samtalen som vekker og forbinder mennesker, i motsetning til den «døde» bokkunnskapen i latinskolen. Ordet er levende når det blir talt på morsmålet av en som selv er grepet av det, og når det knytter tilhøreren til et folks historie, poesi og tro. Kold omsatte det til en pedagogikk der fortellingen var hovedmetoden.

        Prinsippet ble kjernen i folkehøgskolen og preget også folkeskolen, særlig i historie- og kristendomsundervisningen, og den frilynte tradisjonen i Norge. Forskningen har pekt på det demokratiske i å gi muntlig kultur og folkets språk plass i utdanningen, og på det problematiske i en antiintellektuell skepsis til bøker og eksamen. Det levende ord har fått ny aktualitet i diskusjonen om lærerens fortellende stemme og om forholdet mellom muntlighet, lesing og skjerm i dagens skole.
      `, [snl("https://snl.no/Nikolai_Frederik_Severin_Grundtvig", "Merethe Roos"), bok("Korsgaard, Ove. Kampen om lyset. Dansk voksenoplysning gennem 500 år. Gyldendal, 1997.")]),

      "Lik rett til utdanning": p(`
        Prinsippet om lik rett til utdanning sier at alle skal ha tilgang til utdanning, uavhengig av stand, kjønn, bosted, økonomi og funksjonsevne. Opplysningstiden formulerte det som et politisk krav: Condorcet ville gi gutter og jenter lik undervisning, og Mary Wollstonecraft krevde felles skoler for alle. På 1800-tallet ble skoleplikt og gratis folkeskole innført, og på 1900-tallet ble prinsippet et sosialdemokratisk mål og en menneskerett, i FNs menneskerettighetserklæring (1948, artikkel 26) og barnekonvensjonen (1989, artikkel 28).

        I Norge har prinsippet vært bærende for enhetsskolen, med målet om lik tilgang til utdanning ut fra egne forutsetninger, og for retten til videregående opplæring. Forskningen har skilt mellom formell likhet i tilgang og reell likhet i resultater, og vist at sosial bakgrunn fortsatt har stor betydning for utdanningsløpet. George Counts viste allerede i 1922 at en formelt åpen skole kunne sortere etter klasse. Diskusjonen i dag gjelder hvor mye skolen kan og bør kompensere for ulikhet utenfor den.
      `, [snl("https://snl.no/oppl%C3%A6ringsplikt", "Eli Smeplass"), snl("https://snl.no/enhetsskole", "Kirsten Sivesind")]),

      "Fellesskolen": p(`
        Fellesskolen er prinsippet om at barn fra alle samfunnsklasser, livssyn og bakgrunner skal gå i den samme, offentlige skolen. Det har en demokratisk begrunnelse: et folk som skal styre seg selv, trenger en felles erfaring og felles kunnskap. Horace Mann bygde «the common school» i USA på denne ideen, og i Norge ble den sjuårige folkeskolen fra 1889 og enhetsskolen etter 1920 bygd som fellesskoler. Arbeiderbevegelsen gjorde fellesskolen til en del av velferdsstaten.

        Forskningen har vist at fellesskolen alltid har hatt en dobbel funksjon: den har samlet og utjevnet, men også normalisert og ekskludert, gjennom fornorskning av samiske og kvenske barn, kristendomsundervisning for alle og spesialskoler for dem som ikke passet. Debattene om privatskoler, valgfrihet, nivådeling og inkludering handler alle om hvor mye fellesskap og hvor mye forskjell skolen skal romme. Telhaug og Mediås og Rune Slagstad har vist hvor tett fellesskolen var knyttet til nasjonsbyggingen.
      `, [snl("https://snl.no/enhetsskole", "Kirsten Sivesind"), bok("Telhaug, Alfred Oftedal og Odd Asbjørn Mediås. Grunnskolen som nasjonsbygger. Fra statspietisme til nyliberalisme. Abstrakt forlag, 2003.")]),

      "Tilpasset opplæring": p(`
        Tilpasset opplæring er det norske prinsippet om at undervisningen skal tilpasses evnene og forutsetningene til den enkelte elev. Det ble formulert i grunnskoleloven fra 1975, er et gjennomgående prinsipp i læreplanene og står i opplæringsloven. Det skiller seg fra spesialundervisning, som er en individuell rett for elever som ikke får tilfredsstillende utbytte av den ordinære opplæringen.

        Prinsippet er et forsøk på å forene enhetsskolens felles skole med hensynet til den enkelte, og har røtter i reformpedagogikkens individualisering og i Warnock-rapportens relasjonelle syn på behov. Forskningen har vist at begrepet er tolket svært ulikt: som individuelle planer og nivådeling, som variert undervisning for hele klassen, eller som en kvalitet ved fellesskapet. Peder Haug og andre har pekt på at spesialundervisningen ofte foregår utenfor klassen og at tilpasset opplæring kan bli et argument for å skille elever. Spenningen mellom tilpasning og fellesskap er dermed innebygd i prinsippet.
      `, [snl("https://snl.no/tilpasset_oppl%C3%A6ring"), side("Haug, Peder. «Understanding inclusive education: ideals and reality.» Scandinavian Journal of Disability Research 19, nr. 3 (2017): 206–217.", "https://doi.org/10.1080/15017419.2016.1224778")]),

      "Normaliseringsprinsippet": p(`
        Normaliseringsprinsippet sier at mennesker med utviklingshemming skal ha de samme livsvilkårene som andre, så nær samfunnets vanlige normer som mulig. Det ble formulert i den danske loven fra 1959, som knyttes til N.E. Bank-Mikkelsen, og fikk sin klassiske form hos svensken Bengt Nirje (1969): en vanlig døgn-, uke- og årsrytme, vanlige livsfaser, respekt for egne valg, og vanlige økonomiske og fysiske levekår.

        Prinsippet ble drivkraften bak avinstitusjonaliseringen i Norden og Nord-Amerika og bak kravet om at barn med funksjonsnedsettelser skulle gå i vanlige barnehager og skoler. I Norge ledet det fram til integreringen i grunnskolen fra 1975 og HVPU-reformen i 1991. Nirje la vekt på at det er vilkårene som skal normaliseres, ikke menneskene, men prinsippet ble ofte lest som et krav om å bli «normal». Wolf Wolfensbergers videreutvikling til sosial rolleverdsetting og kritikken fra funksjonshemmedes egen bevegelse har gjort begrepet omstridt, og i dag er det i stor grad avløst av inkludering og rettighetsspråk.
      `, [bok("Nirje, Bengt. «The Normalization Principle and Its Human Management Implications.» I Robert B. Kugel og Wolf Wolfensberger (red.), Changing Patterns in Residential Services for the Mentally Retarded. President's Committee on Mental Retardation, 1969."), lex("https://lex.dk/N.E._Bank-Mikkelsen")]),

      "Nasjonal oppdragelse": p(`
        Nasjonal oppdragelse er prinsippet om at skolen skal skape en felles nasjonal identitet gjennom språk, historie, litteratur og verdier. Fichte gjorde det til et program etter Prøyssens nederlag i 1806, og 1800-tallets folkeskoler i hele Europa fikk denne oppgaven. Grundtvig og folkehøgskolen ga den en folkelig og demokratisk form, Kerschensteiner en statsborgerlig, og i Norge ble folkeskolen etter 1889 nasjonsbyggingens viktigste institusjon, med Nordahl Rolfsens lesebok, norsk historie og morsmålsundervisning.

        Prinsippet har en mørk side. Den nasjonale oppdragelsen innebar fornorskning av samiske og kvenske barn, med internater og forbud mot morsmålet, og under nasjonalsosialismen ble den gjort til en oppdragelse til rase og fører. Forskningen, blant annet Telhaug og Mediås, har vist hvordan grunnskolen i Norge var en nasjonsbygger, og hvordan det nasjonale gradvis ble erstattet av demokratiske, globale og flerkulturelle mål. Spørsmålet om hva som skal være felles, og hvordan skolen skal møte mangfold, er fortsatt et hovedtema i læreplanene.
      `, [bok("Telhaug, Alfred Oftedal og Odd Asbjørn Mediås. Grunnskolen som nasjonsbygger. Fra statspietisme til nyliberalisme. Abstrakt forlag, 2003."), snl("https://snl.no/folkeskolen", "Merethe Roos og Harald Jarning")]),

      "Allsidig utvikling": p(`
        Allsidig utvikling er et sentralt mål i norske læreplaner fra mellomkrigstiden: skolen skal utvikle elevene intellektuelt, sosialt, moralsk, estetisk, praktisk og fysisk, ikke bare gi dem kunnskaper. Normalplanen av 1939 formulerte det under inntrykk av reformpedagogikken og barnepsykologien, og Mønsterplanen av 1974 gjorde «allsidig utvikling» til et hovedmål for den niårige grunnskolen.

        Målet har røtter i nyhumanismens idé om harmonisk dannelse og i Pestalozzis «hode, hjerte og hånd», og det sto sentralt i den sosialdemokratiske enhetsskolen, der skolen skulle forme hele mennesket og ikke bare sortere etter faglige prestasjoner. Fra 1990-tallet ble det utfordret av en sterkere vekt på grunnleggende ferdigheter, kompetansemål og måling. Forskningen har diskutert om allsidig utvikling er et presist pedagogisk mål eller et ideal som gjør skolens oppdrag grenseløst, og om dagens begreper som dybdelæring og livsmestring viderefører det i ny form.
      `, [snl("https://snl.no/normalplan"), snl("https://snl.no/M%C3%B8nsterplan_for_grunnskolen_1974", "Elise Farstad Djupedal")]),

      "Elevmedvirkning": p(`
        Elevmedvirkning betyr at elevene har innflytelse på egen læring og på skolens liv, fra valg av arbeidsmåter til regler og fellesskap. Prinsippet har røtter i Deweys skole som demokratisk fellesskap, i reformpedagogikkens skolerepublikker og elevråd, og i A.S. Neills Summerhill, der elever og lærere har én stemme hver i fellesmøtet. I Norge ble Forsøksgymnaset i Oslo (1967) et eksempel på en skole drevet av elever og lærere sammen.

        FNs barnekonvensjon (1989, artikkel 12) ga barn rett til å si sin mening i saker som angår dem, og elevråd og elevmedvirkning er lovfestet og står i læreplanene. Forskningen har vist at medvirkning ofte blir formell, i elevråd uten reell makt, eller individualisert, som valg av oppgaver, mer enn kollektiv og demokratisk. Den har også pekt på at elever med sterke ressurser lettest benytter seg av medvirkningen. Spørsmålet er derfor ikke bare om elever skal medvirke, men om hva, hvordan og med hvilke forutsetninger.
      `, [snl("https://snl.no/fors%C3%B8ksgymnas", "Merethe Roos"), snl("https://snl.no/Mosse_J%C3%B8rgensen")]),

      "Skapende arbeid": p(`
        Prinsippet om skapende arbeid sier at elevene skal uttrykke seg og lære gjennom formgivning, kunst, musikk, drama og skriving, ikke bare gjengi. Fröbels sysler, kunstoppdragelsesbevegelsen rundt 1900 og steinerpedagogikken gjorde det skapende til en del av oppdragelsen, og Anna Sethne la vekt på fri tegning og stilskriving. I Reggio Emilia har verkstedet og «barnets hundre språk» gjort skapende uttrykk til en form for tenkning og undersøkelse, ikke bare til et fag.

        Prinsippet har gitt de praktiske og estetiske fagene en plass i skolen, og det har en sterk stilling i barnehagen. Forskningen har pekt på spenningen mellom fri utfoldelse og faglig opplæring i håndverk og teknikk, og på at kreativitet i nyere politikk ofte begrunnes økonomisk, som innovasjon, mer enn pedagogisk. Kritikere har også vist at «fritt uttrykk» kan skjule at barn lærer bestemte estetiske normer. Prinsippet er likevel en motvekt mot en skole der bare det målbare teller.
      `, [bok("Edwards, Carolyn, Lella Gandini og George Forman (red.). The Hundred Languages of Children: The Reggio Emilia Approach to Early Childhood Education. Ablex, 1993."), snl("https://snl.no/steinerskoler", "Jan-Erik Ebbestad Hansen")]),
    },
  },
};
