// Runde 2 — de nye pedagogiske prinsippene, med felles tekst (fase 6, skrevet av Opus 2026-10-21).
// Prinsippene fra runde 1 (innhold/runde-1/prinsipper.mjs) brukes også på teoretikerne her.
import { snl, sep, bok } from "../kilder.mjs";

const p = (description, kilder) => ({ sub: { description, kilder } });

export default {
  genreDescriptions: {
    sub: {
      "Alle skal lære alt": p(`
        Prinsippet er Comenius' *omnes omnia omnino*, «alle alt grundig», fra *Didactica magna*: alle barn, gutter og jenter, rike og fattige, begavede og langsomme, skal lære alt som hører til et menneskeliv, i en skole som er organisert slik at det faktisk lar seg gjøre. Det rommer både et demokratisk krav om skole for alle og et didaktisk løfte om at riktig metode gjør læring sikker, rask og behagelig.

        Prinsippet er religiøst begrunnet hos Comenius: mennesket er skapt i Guds bilde og har krav på en dannelse som gjenspeiler hele skaperverket. I ettertiden er det lest som en forløper for allmenn skoleplikt og for enhetsskolen, og som opphavet til den moderne didaktikkens tro på at metode kan gjøre alle lærere og alle elever i stand til det samme. Kritikere har pekt på at nettopp dette løftet ga den moderne skolen dens standardisering: samme stoff, samme tid, samme bok.
      `, [snl("https://snl.no/Johann_Amos_Comenius"), bok("Hamilton, David. Towards a Theory of Schooling. Falmer Press, 1989.")]),

      "Undervisning på morsmålet": p(`
        Prinsippet om at barn først skal lære på sitt eget morsmål, og at fremmedspråk og vitenskap skal bygge på det, ble formulert av Ratke og Comenius mot latinskolens praksis, der barn lærte å lese og tenke på et språk de ikke forsto. Det hadde både en didaktisk begrunnelse (forståelse før form) og en politisk (et folk, ett språk, én kirke).

        Prinsippet fikk ny aktualitet med 1800-tallets nasjonale folkeskoler og i Norge med målstriden, der retten til opplæring på eget talemål og landsmål sto sentralt. I dag gjelder det særlig minoritetsspråklige elever: forskningen viser at morsmålet er en ressurs for læring av både fag og andrespråk, mens skolepolitikken har vekslet mellom morsmålsopplæring og rask overgang til norsk. Samenes rett til opplæring på samisk er et eksempel på at prinsippet også er et spørsmål om rettigheter og historisk urett.
      `, [snl("https://snl.no/didaktikk"), snl("https://snl.no/Johann_Amos_Comenius")]),

      "Oppdragende undervisning": p(`
        Herbarts begrep *erziehender Unterricht*: undervisning er ikke bare formidling av kunnskap, men den viktigste veien til moralsk karakter. Undervisningen skal vekke en mangesidig interesse, og gjennom den formes en forestillingskrets som viljen og handlingene springer ut av. Herbart sa at han ikke kjente noen oppdragelse uten undervisning, og ingen undervisning som ikke oppdro.

        Begrepet knyttet kunnskap og dannelse sammen og ga folkeskolen en moralsk begrunnelse for faglig arbeid. Herbartianerne gjorde det til konsentrasjon om «gesinnungsstoff» fra religion og historie, og det ble kritisert som moralisering. Begrepet er tatt opp igjen i nyere tysk og nordisk didaktikk, der det brukes mot en snever læringsforståelse: undervisning former alltid også hvem eleven blir, ikke bare hva hun kan.
      `, [snl("https://snl.no/Johann_Friedrich_Herbart"), sep("https://plato.stanford.edu/entries/johann-herbart/")]),

      "Pedagogisk takt": p(`
        Herbart innførte begrepet i sin første forelesning om pedagogikk (1802): pedagogisk takt er evnen til å bedømme og handle raskt og riktig i den enkelte situasjonen, et mellomledd mellom teorien og praksisen som ingen teori kan erstatte, men som teorien kan forme. Takten utvikles gjennom erfaring, men en erfaring som er forberedt av tenkning.

        Begrepet ble lenge overskygget av herbartianernes formaltrinn, men har fått en renessanse i nyere profesjonsforskning, blant annet hos Max van Manen. Det gir et historisk motstykke til både metodetro og evidensbevegelse: lærerens dømmekraft i situasjonen kan ikke utledes av regler eller effektstørrelser. Beslektede ideer finnes i Schöns refleksjon i handling og i forskningen om profesjonelt skjønn.
      `, [snl("https://snl.no/Johann_Friedrich_Herbart"), sep("https://plato.stanford.edu/entries/johann-herbart/")]),

      "Formaltrinnene": p(`
        Formaltrinnene er herbartianernes faste rekkefølge for en undervisningsøkt. Herbart hadde beskrevet fire trinn i læringen: klarhet, assosiasjon, system og metode. Ziller gjorde dem til fem, og Rein ga dem den formen folkeskolelærere over hele verden lærte: forberedelse, framstilling, sammenknytning, sammenfatning og anvendelse. Lærerne skrev forberedelser time for time etter skjemaet.

        Trinnene ga undervisningen struktur og læreren et profesjonelt språk, men ble også symbolet på en mekanisk og lærerstyrt skole som reformpedagogene angrep. Ideen om en fast gang i undervisningen, fra aktivering av forkunnskaper via ny kunnskap til øving og anvendelse, lever videre i mange moderne modeller for undervisningsøkter, også der opphavet er glemt.
      `, [snl("https://snl.no/Johann_Friedrich_Herbart")]),

      "Overføring av læring": p(`
        Overføring (*transfer*) er spørsmålet om hvordan det man lærer i én sammenheng, kan brukes i en annen. Læren om formell dannelse hevdet at latin og matematikk trener sjelsevner som kan brukes overalt. Thorndike og Woodworth (1901) viste at overføringen var langt mindre enn antatt, og at den avhenger av felles elementer mellom oppgavene, et slag mot den klassiske skolens begrunnelse.

        Kognitiv psykologi og læringsforskning har siden vist at overføring krever forståelse av underliggende prinsipper, variasjon i eksemplene og bevissthet om når kunnskapen kan brukes. National Research Council definerte i 2012 dybdelæring som nettopp den prosessen som gjør kunnskap overførbar. Spørsmålet er derfor kjernen i debatten om hva skolen skal lære bort: fag, generelle ferdigheter eller begge deler.
      `, [snl("https://snl.no/Edward_Lee_Thorndike"), bok("Pellegrino, James W. og Margaret L. Hilton (red.). Education for Life and Work: Developing Transferable Knowledge and Skills in the 21st Century. National Academies Press, 2012.")]),

      "Forsterkning": p(`
        Forsterkning er behaviorismens forklaring på læring: atferd som følges av en positiv konsekvens, blir hyppigere, og atferd uten konsekvens dør ut. Thorndikes effektlov og Skinners operante betinging gjorde prinsippet systematisk, med forsterkningsplaner som bestemmer hvor raskt atferd læres og hvor lenge den varer. I undervisning betyr det umiddelbar tilbakemelding, ros og belønning, små trinn og hyppig repetisjon.

        Prinsippet har hatt varig betydning i spesialpedagogikk, atferdsanalyse og klasseledelse, og i belønningssystemer fra stjernekort til dataspill. Kritikken gjelder både teorien, som ikke forklarer forståelse og språk (Chomsky), og praksisen: forskning om indre motivasjon (Deci og Ryan) viser at ytre belønning kan svekke lysten til å lære det som allerede er interessant.
      `, [snl("https://snl.no/forsterkning_-_psykologi"), snl("https://snl.no/operant_betinging"), snl("https://snl.no/behaviorisme")]),

      "Programmert undervisning": p(`
        Programmert undervisning er Skinners anvendelse av forsterkningsprinsippet på skolen: lærestoffet deles i små trinn, eleven svarer aktivt på hvert trinn, får umiddelbar beskjed om svaret er riktig og går videre i eget tempo. Pressey hadde laget prøvemaskiner i 1920-årene, og Skinners undervisningsmaskiner og programmerte lærebøker ga en bølge av optimisme i 1960-årene.

        Bølgen ebbet raskt ut, men prinsippene ble videreført i undervisningsdesign, i datastøttet undervisning og i dagens adaptive læringsprogrammer, der algoritmer tilpasser oppgavene til elevens svar. Kritikken har gjentatt seg i hver bølge: programmet kan trene ferdigheter, men forståelse, samtale og fellesskap passer dårlig i små trinn.
      `, [snl("https://snl.no/programmert_undervisning"), snl("https://snl.no/B.F._Skinner")]),

      "Målstyrt undervisning": p(`
        Prinsippet om at undervisningen skal planlegges, gjennomføres og vurderes ut fra klart formulerte mål. Tyler (1949) gjorde målene til første spørsmål i læreplanarbeidet, Bloom (1956) ordnet dem i en taksonomi, og Mager (1962) krevde at de skulle beskrives som observerbar atferd med betingelser og kriterier. Prinsippet fikk ny kraft med kompetansemål og læringsmål i Kunnskapsløftet (2006), der vurdering skal skje mot mål.

        Kritikken har vært like gammel som prinsippet: Stenhouse (1975) satte prosessen opp mot målene, Eisner pekte på verdifulle mål som ikke kan formuleres som atferd, og Skjervheim kalte det et «instrumentalistisk mistak» å behandle oppdragelse som teknikk. Nordisk didaktikk har forsøkt å se målene som ett av flere ledd i en helhet, som i Bjørndal og Liebergs relasjonsmodell (1978).
      `, [bok("Tyler, Ralph W. Basic Principles of Curriculum and Instruction. University of Chicago Press, 1949."), snl("https://snl.no/Hans_Skjervheim")]),

      "Mestringslæring": p(`
        Mestringslæring (*mastery learning*) bygger på John B. Carrolls modell (1963): elever er forskjellige i hvor lang tid de trenger for å lære noe, ikke i om de kan lære det. Benjamin Bloom gjorde modellen til et program (1968): klare mål, hyppige formative prøver, korrigerende undervisning for dem som ikke har nådd målet, og berikelse for dem som har det. Da vil de fleste elever nå et nivå som bare de beste nådde før.

        Forskningen har vist gode effekter, særlig for svake elever, men også at programmet er krevende å gjennomføre og kan bremse de raske. Prinsippet lever videre i formativ vurdering, i tilpasset opplæring og i tanken om at skolen skal gi alle elever mulighet til å mestre det grunnleggende.
      `, [bok("Bloom, Benjamin S. «Learning for Mastery.» Evaluation Comment 1, nr. 2 (1968): 1–12.")]),

      "Evidensbasert praksis": p(`
        Prinsippet om at undervisning og skolepolitikk skal bygge på den beste tilgjengelige forskningen om hva som virker, etter mønster av evidensbasert medisin. Systematiske oversikter, metaanalyser og randomiserte forsøk regnes som det sterkeste grunnlaget, og organisasjoner som Campbell Collaboration og What Works Clearinghouse skal gjøre forskningen tilgjengelig for praktikere og politikere.

        I medisinen innebærer evidensbasert praksis en sammenveiing av forskning, klinisk erfaring og pasientens ønsker, men i utdanning er prinsippet ofte blitt forstått snevrere, som oppskrifter fra effektstudier. Gert Biesta har kritisert at «hva virker?» forutsetter at målene er gitt, og at prinsippet svekker lærerens skjønn og de demokratiske spørsmålene om hva skolen skal være. Forsvarerne mener at alternativet er tradisjon, moter og synsing.
      `, [bok("Biesta, Gert. «Why 'What Works' Won't Work: Evidence-Based Practice and the Democratic Deficit in Educational Research.» Educational Theory 57, nr. 1 (2007): 1–22."), bok("Hattie, John. Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement. Routledge, 2009.")]),

      "Utviklingstrinn": p(`
        Prinsippet om at barns tenkning og forståelse utvikler seg gjennom kvalitativt ulike trinn, og at undervisningen må tilpasses trinnet barnet er på. Piagets fire stadier, fra det sensomotoriske til det formal-operasjonelle, er den mest kjente modellen, og Gesells modningsnormer og Bühlers livsløpspsykologi ga beslektede bilder. Prinsippet har preget skolestartalder, læreplanenes progresjon og ideen om «skolemodenhet».

        Forskningen har nyansert prinsippet sterkt. Barn kan mye mer enn stadieteorien forutsier når oppgavene gir mening (Donaldson), utviklingen er ujevn mellom områder, og kultur og undervisning påvirker den. Vygotskij snudde forholdet: god undervisning venter ikke på utviklingen, men går foran den. Barndomssosiologien har kritisert at normale trinn lett blir en norm som skiller ut barn som avvikende.
      `, [snl("https://snl.no/Jean_Piaget"), bok("Burman, Erica. Deconstructing Developmental Psychology. Routledge, 1994.")]),

      "Den nærmeste utviklingssonen": p(`
        Vygotskijs begrep for avstanden mellom det et barn klarer alene og det det klarer med hjelp fra en voksen eller en mer kompetent jevnaldrende. Det barnet i dag klarer med hjelp, klarer det i morgen alene, og god undervisning er den som går foran utviklingen og retter seg mot de funksjonene som er i ferd med å modnes. Begrepet var opprinnelig også et argument mot intelligenstester som bare måler det barnet klarer alene.

        I vestlig resepsjon er sonen ofte blitt koblet til stillasbygging og individuell veiledning. Vygotskij-forskere har innvendt at den opprinnelige tanken er bredere: sonen gjelder kulturelle redskaper og fellesskap, ikke bare en voksen som hjelper ett barn. Begrepet er likevel et av de mest brukte i norsk lærerutdanning og barnehagepedagogikk.
      `, [snl("https://snl.no/Lev_Vygotskij")]),

      "Kunnskap som konstruksjon": p(`
        Prinsippet om at kunnskap ikke overføres, men bygges av den som lærer, på grunnlag av det hun allerede vet og gjennom egen aktivitet. Det har røtter i Piagets genetiske epistemologi og ble i 1970- og 1980-årene konstruktivismens grunntanke: elever har egne forestillinger om verden, og undervisningen må utfordre dem for at ny forståelse skal vokse fram. Posisjonene spenner fra von Glasersfelds radikale konstruktivisme, en kunnskapsteori, til en sosialkonstruktivisme der meningen skapes i fellesskap.

        Kritikken har pekt på at en kunnskapsteori ikke gir noen bestemt undervisningsmetode: også en forelesning kan føre til konstruksjon. D.C. Phillips (1995) viste hvor ulike ting begrepet dekker, og kognitive psykologer har vist at elever som lærer noe nytt, trenger tydelig veiledning. Prinsippet har likevel forandret både fagdidaktikk og læreplaner.
      `, [bok("Phillips, D.C. «The Good, the Bad, and the Ugly: The Many Faces of Constructivism.» Educational Researcher 24, nr. 7 (1995): 5–12."), snl("https://snl.no/Jean_Piaget")]),

      "Læring som deltakelse": p(`
        Prinsippet om at læring ikke først og fremst er tilegnelse av kunnskap i hodet, men økende deltakelse i sosiale praksiser. Lave og Wenger (1991) beskrev læring som legitim perifer deltakelse i et praksisfellesskap, der nykommeren går fra utkanten mot sentrum og endrer identitet. Anna Sfard (1998) skilte mellom to metaforer for læring, tilegnelse og deltakelse, og advarte mot å velge bare én.

        Prinsippet har preget forståelsen av læring i arbeidsliv, profesjonsutdanning og mesterlære, og har gitt skolen ideen om klasserommet som et faglig fellesskap der elevene deltar i fagets praksiser. Kritikken går på at det sier lite om hva den enkelte faktisk lærer, og om hvordan kunnskap kan brukes utenfor den praksisen den er lært i.
      `, [snl("https://snl.no/l%C3%A6ringsfellesskap"), bok("Lave, Jean og Etienne Wenger. Situated Learning: Legitimate Peripheral Participation. Cambridge University Press, 1991.")]),

      "Spiralprinsippet": p(`
        Bruners prinsipp fra *The Process of Education* (1960): fagenes grunnleggende ideer kan undervises på en intellektuelt redelig måte til barn på alle alderstrinn, og læreplanen bør vende tilbake til dem igjen og igjen på stadig høyere nivå, i en spiral. Det bygger på tanken om at hvert fag har en struktur av sentrale begreper og prinsipper, og at forståelse av strukturen gjør kunnskapen meningsfull og overførbar.

        Spiralprinsippet ble grunnlaget for de store læreplanprosjektene i 1960-årene og har preget progresjonen i læreplaner siden. Kjerneelementene i den norske fagfornyelsen (LK20), som skal gå igjen gjennom skoleløpet, er en moderne slektning. Kritikken har gått på at fagenes struktur er mer omstridt enn Bruner forutsatte, og at spiralen i praksis kan bli repetisjon.
      `, [snl("https://snl.no/Jerome_S._Bruner"), bok("Bruner, Jerome S. The Process of Education. Harvard University Press, 1960.")]),

      "Stillasbygging": p(`
        Begrepet *scaffolding* ble innført av Wood, Bruner og Ross (1976) om den støtten en voksen gir et barn i en oppgave barnet ikke klarer alene: å vekke interesse, forenkle oppgaven, holde retningen, markere det viktige, dempe frustrasjon og vise løsninger. Støtten skal tilpasses og trappes ned etter hvert som barnet mestrer mer, slik at ansvaret gradvis overføres.

        Begrepet ble koblet til Vygotskijs nærmeste utviklingssone og er blitt et av de mest brukte i didaktikken, fra skriveopplæring til andrespråksopplæring. Kritikere har pekt på at metaforen kan gi et bilde av en ferdig bygning og en passiv elev, og at mye av det som kalles stillasbygging i praksis er vanlig instruksjon uten nedtrapping.
      `, [snl("https://snl.no/Jerome_S._Bruner")]),

      "Forkunnskaper som grunnlag": p(`
        Prinsippet om at det eleven allerede vet, er avgjørende for hva og hvordan hun lærer. Ausubel gjorde det til mottoet for sin pedagogiske psykologi (1968): den viktigste enkeltfaktoren for læring er hva eleven allerede vet, og undervisningen skal ta utgangspunkt i det. Forberedende organisatorer skal aktivere og ordne forkunnskapene før nytt stoff.

        Prinsippet har fått bred støtte i kognitiv forskning om skjemaer, arbeidshukommelse og ekspertise: den som vet mye om et felt, lærer nytt i feltet lettere. Det har også en kritisk side: forskjeller i forkunnskaper fra hjemmet forsterkes i skolen hvis ikke undervisningen bygger opp kunnskapsgrunnlaget bevisst, et argument som er brukt både for en kunnskapsrik læreplan og for tidlig innsats.
      `, [bok("Ausubel, David P. Educational Psychology: A Cognitive View. Holt, Rinehart and Winston, 1968."), snl("https://snl.no/kognitiv_psykologi")]),

      "Mesterlære": p(`
        Mesterlære er læring gjennom deltakelse i arbeid sammen med en dyktig utøver, slik lærlinger lærte i laugene: man ser, prøver, får rettledning og tar gradvis over større deler av arbeidet. Den sosiokulturelle forskningen tok læringsformen opp igjen som modell for læring generelt, med Lave og Wengers studier av lærlingskap og de danske Klaus Nielsen og Steinar Kvales antologier om mesterlære (1999).

        Mesterlæren gir en motvekt til skolens abstrakte og oppstykkede læring: kunnskapen læres der den brukes, og identitet og ferdighet utvikles sammen. Den er grunnlaget for fag- og yrkesopplæringen og for praksis i profesjonsutdanningene. Kritikken har pekt på at mesterlære kan reprodusere tradisjon og maktforhold, og at den alene gir lite rom for kritisk refleksjon over faget.
      `, [snl("https://snl.no/mesterl%C3%A6re"), bok("Lave, Jean og Etienne Wenger. Situated Learning: Legitimate Peripheral Participation. Cambridge University Press, 1991.")]),

      "Dialogisk undervisning": p(`
        Prinsippet om at læring skjer når ulike stemmer møtes i samtale, og at undervisningen derfor må gi plass til elevenes egne ideer og spørsmål. Det bygger på Bakhtins dialogisme og Vygotskijs syn på språket som tenkningens redskap. Olga Dysthe (*Det flerstemmige klasserommet*, 1995) gjorde det til en norsk klasseromspedagogikk der skriving og samtale brukes for å lære, og der læreren stiller autentiske spørsmål og tar opp og bygger videre på elevenes svar.

        Klasseromsforskningen har vist at mye undervisning følger mønsteret spørsmål, svar og evaluering, der læreren kontrollerer, og at dialogisk undervisning er krevende. Robin Alexander og andre har formulert prinsipper for dialogisk undervisning som er tatt i bruk internasjonalt. Prinsippet står sentralt i norsk skriveopplæring og i læreplanens vekt på muntlige ferdigheter.
      `, [bok("Dysthe, Olga. Det flerstemmige klasserommet: Skriving og samtale for å lære. Ad Notam Gyldendal, 1995.")]),

      "Dyp og overflatisk tilnærming": p(`
        Skillet ble formulert av Ference Marton og Roger Säljö (1976) etter studier av hvordan studenter leste en fagtekst: noen søkte meningen og hovedpoenget (dyp tilnærming), andre prøvde å huske detaljer for å kunne gjengi dem (overflatisk tilnærming), og forskjellen ga kvalitativt ulik forståelse. Tilnærmingen er ikke en fast egenskap ved studenten, men avhenger av oppgaven og av hvordan undervisning og vurdering oppfattes.

        Skillet ble svært innflytelsesrikt i forskningen om høyere utdanning, blant annet hos John Biggs, som viste hvordan vurderingsformer styrer hvilken tilnærming studentene velger. Det er en av forutsetningene for dagens begrep om dybdelæring, og for kravet om at vurderingen må belønne forståelse og ikke bare gjengivelse.
      `, [bok("Marton, Ference og Roger Säljö. «On Qualitative Differences in Learning: I — Outcome and Process.» British Journal of Educational Psychology 46 (1976): 4–11."), snl("https://snl.no/dybdel%C3%A6ring")]),
    },
  },
};
