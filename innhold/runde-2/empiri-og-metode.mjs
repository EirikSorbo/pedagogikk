// Runde 2 — Empiri og metode: retningen, epokene, teoretikerne og påvirkningene (fase 6, skrevet av Opus 2026-10-21).
import { snl, sep, bok } from "../kilder.mjs";

const R = "Empiri og metode";
const HAMILTON = bok("Hamilton, David. Towards a Theory of Schooling. Falmer Press, 1989.");
const LAGEMANN = bok("Lagemann, Ellen Condliffe. An Elusive Science: The Troubling History of Education Research. University of Chicago Press, 2000.");
const TYLER = bok("Tyler, Ralph W. Basic Principles of Curriculum and Instruction. University of Chicago Press, 1949.");
const BLOOM56 = bok("Bloom, Benjamin S. (red.). Taxonomy of Educational Objectives. Handbook I: Cognitive Domain. David McKay, 1956.");
const HATTIE = bok("Hattie, John. Visible Learning: A Synthesis of Over 800 Meta-Analyses Relating to Achievement. Routledge, 2009.");
const BIESTA07 = bok("Biesta, Gert. «Why 'What Works' Won't Work: Evidence-Based Practice and the Democratic Deficit in Educational Research.» Educational Theory 57, nr. 1 (2007): 1–22.");
const GREK = bok("Grek, Sotiria. «Governing by Numbers: The PISA 'Effect' in Europe.» Journal of Education Policy 24, nr. 1 (2009): 23–37.");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler forsøkene på å gjøre undervisningen til en metode og pedagogikken til en vitenskap: fra 1600-tallets didaktikere, som lovet en kunst å lære alle alt, via empirismens lære om sinnet som formes av erfaring og Herbarts vitenskapelige pedagogikk, til eksperimentell pedagogikk, behaviorisme, målstyrt undervisning og dagens evidensbevegelse. Felles er troen på at undervisning kan planlegges, måles og forbedres systematisk, og at kunnskap om hvordan mennesker lærer, skal styre hvordan lærere underviser. Felles er også kritikken: at metoden fortrenger dannelsen, at det målbare fortrenger det viktige, og at lærerens skjønn reduseres til teknikk. I Norge har retningen preget lærerutdanningen fra seminarenes herbartianisme til nasjonale prøver og Kunnskapsløftet.
          `,
          kilder: [snl("https://snl.no/didaktikk"), LAGEMANN],
        },
        story: {
          body: `
            ### En kunst å lære alle alt
            Retningen begynner i et krigs- og konfesjonshundreår. Wolfgang Ratke lovet riksdagen i Frankfurt i 1612 en ny metode som kunne lære barn språk raskt og forene riket i språk, religion og styre, og Johann Amos Comenius skrev i eksil sin *Didactica magna*, «den store undervisningskunsten», om hvordan alle, gutter og jenter, rike og fattige, kunne lære alt på en rask, sikker og behagelig måte. Bacons program for en ny, induktiv vitenskap ga didaktikerne et forbilde: kunnskapen skulle komme fra tingene, ikke fra autoritetene. David Hamilton har vist at det er i denne perioden ordene *klasse* og *læreplan* får sin moderne mening: undervisning blir en ordnet rekkefølge av stoff for grupper av elever.

            ### Sinnet som et blankt ark
            John Locke ga metoden en psykologi. Hvis sinnet ved fødselen er et blankt ark, og alle ideer kommer fra erfaringen, er oppdragelsen nesten allmektig: vi er det vi er blitt gjort til. *Some Thoughts Concerning Education* (1693) gjorde vane, ære og skam, lek og nytte til grunnprinsipper, og franske og britiske etterfølgere (Condillac, Helvétius, Hartley) gjorde assosiasjonspsykologien til en teori om hvordan erfaringer bygger opp tanker. Empirismen ble dermed opphavet både til Rousseaus naturalisme og til 1800-tallets vitenskapelige pedagogikk.

            ### Pedagogikk som vitenskap
            Johann Friedrich Herbart ville bygge pedagogikken på etikken (målene) og psykologien (midlene), og hans *Allgemeine Pädagogik* (1806) gjorde den oppdragende undervisningen og den mangesidige interessen til kjernebegreper. Etterfølgerne Ziller og Rein gjorde læren til formaltrinn, kulturstadier og ferdige timeplaner, og herbartianismen ble rundt 1880–1900 folkeskolelærernes teori i Tyskland, Norden, USA og Japan. Den ble også reformpedagogikkens fiendebilde. Rundt 1900 kom de eksperimentelle pedagogene, som Meumann, Lay, Binet og Thorndike, med laboratoriet, testen og statistikken: hva som virker, skulle avgjøres ved forsøk, ikke ved filosofi.

            ### Atferd, mål og måling
            Behaviorismen gjorde læring til observerbar atferd og forsterkning, og Skinner tok skrittet fra rottelaboratoriet til undervisningsmaskiner og programmert undervisning. I etterkrigstiden ble målene det sentrale: Ralph Tyler spurte hvilke mål skolen skal nå og hvordan man vet at de er nådd (1949), Benjamin Bloom ordnet målene i en taksonomi (1956), og Robert Mager lærte lærere å skrive mål som atferd. Mestringslæring lovet at nesten alle elever kunne nå målene med nok tid og riktig hjelp. Kritikken kom straks, i Norge med Hans Skjervheims angrep på «det instrumentalistiske mistaket» (1972).

            ### Evidens og tall
            Den siste bølgen begynte i 1990-årene med kravet om at undervisning skulle bygge på forskning slik medisinen gjør, med randomiserte forsøk og systematiske oversikter. OECDs PISA (fra 2000), *No Child Left Behind* i USA og John Hatties *Visible Learning* (2009) gjorde resultater og effektstørrelser til politikkens språk. I Norge førte PISA-sjokket i 2001 til nasjonale prøver (2004) og Kunnskapsløftet (2006). Gert Biesta og andre har innvendt at spørsmålet «hva virker?» forutsetter at målene er gitt, og at utdanning reduseres til produksjon av målbare resultater. Spenningen mellom metode og dannelse, som begynte med Comenius' løfte, er fortsatt retningens kjerne.
          `,
        },
      },
    },
    main: {
      "Didaktikken": {
        main: {
          era: "ca. 1610–1700", activeFrom: 1612, activeTo: 1700,
          description: `
            Didaktikken som egen lære om undervisningens kunst oppstod i den protestantiske delen av Europa tidlig på 1600-tallet. Wolfgang Ratkes *Memorial* til riksdagen i Frankfurt (1612) lovet en metode som kunne lære språk og vitenskaper raskt, alltid først på morsmålet, én ting om gangen, med gjentakelse og uten tvang, og forsøket i Köthen (1618–1620) prøvde den ut. Ordet *didactica* ble etter hvert et programord for en ny, ordnet undervisning.

            Johann Amos Comenius ga programmet sin klassiske form. *Didactica magna* (tsjekkisk utgave på 1630-tallet, latinsk i *Opera didactica omnia*, 1657) vil lære «alle alt grundig» (*omnes omnia omnino*) i et skolesystem med fire trinn på seks år: morsskole, morsmålsskole, latinskole og akademi. Undervisningen skal følge naturens orden, gå fra sansene til forstanden og bruke lærebøker som gjør alle lærere i stand til å undervise. *Janua linguarum reserata* (1631) og billedleksikonet *Orbis sensualium pictus* (1658) ble blant de mest brukte lærebøkene i Europa i hundre år.

            Didaktikken var både religiøs og vitenskapelig: Comenius' pansofi, en enhetlig kunnskap om Gud, verden og mennesket, sto i gjeld til Bacons program for en ny vitenskap og til en millenaristisk tro på verdens forbedring. David Hamilton har lest perioden som fødselen av den moderne skolens grammatikk: klasse, læreplan og metode. Comenius ble gjenoppdaget i 1800-tallets tsjekkiske nasjonale vekkelse, og hovedverket om universell oppdragelse, *Pampaedia*, ble først funnet i 1935.
          `,
          samfunn: `
            Trettiårskrigen (1618–1648), konfesjonelle konflikter og de bøhmiske protestantenes nederlag ved Det hvite fjell (1620), som drev Comenius og Brødremenigheten i eksil. Samtidig vitenskapsrevolusjonen, boktrykkerkunstens nye lærebokmarked og fyrster som så skolen som et redskap for orden og konfesjonell enhet.
          `,
          skole: `
            Latinskolene var preget av humanistisk språkopplæring og pugg, jesuittene hadde sin felles studieordning (*Ratio studiorum*, 1599), og protestantiske skoleordninger gjorde lesing av katekisme og Bibel til et mål for folket. Hertug Ernst av Sachsen-Gothas skoleordning (*Schulmethodus*, 1642) var et tidlig forsøk på allmenn skoleplikt. I Norge var katedralskolene latinskoler for de få.
          `,
          kilder: [snl("https://snl.no/didaktikk"), snl("https://snl.no/Johann_Amos_Comenius"), sep("https://plato.stanford.edu/entries/francis-bacon/"), HAMILTON],
        },
      },
      "Empirismen": {
        main: {
          era: "ca. 1690–1750", activeFrom: 1690, activeTo: 1760,
          description: `
            Empirismen gjorde erfaringen til kilden til all kunnskap, og dermed oppdragelsen til en nesten allmektig kraft. I *An Essay Concerning Human Understanding* (1690) avviste John Locke medfødte ideer: sinnet er ved fødselen som et blankt ark, og alle ideer kommer fra sansning og refleksjon. I *Some Thoughts Concerning Education* (1693), skrevet som brev om oppdragelsen av en gentlemanns sønn, følger konsekvensene: tidlig vanedannelse, ære og skam i stedet for juling, lekpreget læring, nyttige kunnskaper, og dyd og klokskap foran lærdom.

            På 1700-tallet ble Lockes lære radikalisert. Condillac utledet i *Traité des sensations* (1754) alle sjelens evner fra sansninger, med tanken om en statue som får én sans om gangen. Helvétius hevdet at alle mennesker er født med like evner, og at forskjellene kommer av oppdragelse og samfunn: «l'éducation peut tout». David Hartley gjorde assosiasjonen av ideer til en fysiologisk og psykologisk teori (*Observations on Man*, 1749), som gjennom Joseph Priestley og James Mill ble grunnlaget for utilitaristisk oppdragelse.

            Pedagogisk ga empirismen to arv: tilliten til oppdragelsens makt, som går til filantropistene, Owen og den moderne miljøtenkningen, og assosiasjonspsykologien, som går til Herbart og behaviorismen. Rousseau tok fra Locke sansningen, men avviste hans regel om å resonnere med barn.
          `,
          samfunn: `
            England etter den glorverdige revolusjonen (1688), med religiøs toleranse for protestanter, Royal Society (1660) og en voksende kommersiell overklasse. I Frankrike salongene og opplysningsfilosofene, som leste Locke og Newton som frigjørere fra skolastikken.
          `,
          skole: `
            Den lærde skolen var fortsatt latinsk. Lockes ideal var huslærer, ikke skole. For de fattige foreslo han «working schools» (1697), der barn fra tre års alder skulle lære arbeid og religion. Veldedighetsskolene (Society for Promoting Christian Knowledge, 1698) og senere dissenterakademiene med naturvitenskap og moderne språk viser hvordan skolen langsomt fikk nytt innhold.
          `,
          kilder: [snl("https://snl.no/empirisme"), sep("https://plato.stanford.edu/entries/locke/"), snl("https://snl.no/John_Locke")],
        },
      },
      "Herbartianismen": {
        main: {
          era: "1806; storhetstid ca. 1860–1900", activeFrom: 1806, activeTo: 1914,
          description: `
            Johann Friedrich Herbart ville gjøre pedagogikken til en vitenskap med egne begreper. I *Allgemeine Pädagogik aus dem Zweck der Erziehung abgeleitet* (1806) henter den målene fra etikken og midlene fra psykologien. Målet er moralsk karakter, og veien dit går gjennom *den oppdragende undervisningen*: undervisning som vekker en «mangesidig interesse» og dermed former viljen. Barnet er *dannbart* (Bildsamkeit), og oppdragelsen har tre funksjoner: styring, undervisning og tukt. Herbarts psykologi var en mekanikk av forestillinger som apperseperer nye forestillinger, og undervisningen skulle derfor gå gjennom trinnene klarhet, assosiasjon, system og metode.

            Etterfølgerne gjorde læren til et system for folkeskolen. Tuiskon Ziller (*Grundlegung zur Lehre vom erziehenden Unterricht*, 1865) innførte kulturstadieteorien, konsentrasjon om et gesinnungsstoff og fem formaltrinn, og grunnla Verein für wissenschaftliche Pädagogik (1868). Wilhelm Rein i Jena gjorde formaltrinnene (forberedelse, framstilling, sammenknytning, sammenfatning, anvendelse) og de ferdige forberedelsene til tidens lærerseminarpedagogikk, og ferieskolene i Jena trakk lærere fra hele verden. I USA dannet De Garmo og McMurry-brødrene National Herbart Society (1895).

            Rundt 1900 ble herbartianismen symbolet på den lærerstyrte «lærskolen» reformpedagogene gjorde opprør mot. Nyere forskning skiller skarpt mellom Herbart selv, som snakket om pedagogisk takt og advarte mot mekanisk metode, og herbartianernes formalisme.
          `,
          samfunn: `
            Det tyske forbundet og senere keiserriket (1871), der folkeskolen og lærerstanden var redskaper for nasjonsbygging, og en borgerlig dannelseskultur med universitetet som ideal. Industrialiseringen og massene av folkeskolelærere skapte etterspørsel etter en lærbar og vitenskapelig begrunnet undervisningsteori.
          `,
          skole: `
            Lærerseminarene, hospitering og ferdige «preparasjoner» for hver time. Herbartianismen ga folkeskolelærerne et faglig språk og et krav om profesjonell status, og spredte seg til seminarene i Norden, USA og Japan. Skolebøker og timeplaner ble organisert etter formaltrinnene.
          `,
          kilder: [snl("https://snl.no/Johann_Friedrich_Herbart"), sep("https://plato.stanford.edu/entries/johann-herbart/")],
        },
      },
      "Eksperimentell pedagogikk": {
        main: {
          era: "ca. 1890–1930", activeFrom: 1890, activeTo: 1935,
          description: `
            Eksperimentell pedagogikk ville avgjøre pedagogiske spørsmål med eksperiment, måling og statistikk, ikke med filosofi og erfaring. Forbildet var Wilhelm Wundts psykologiske laboratorium i Leipzig (1879) og Hermann Ebbinghaus' hukommelsesforsøk (1885). Ernst Meumann (*Vorlesungen zur Einführung in die experimentelle Pädagogik*, 1907) og Wilhelm August Lay (*Experimentelle Didaktik*, 1903) undersøkte læring, hukommelse, tretthet og ulike undervisningsmåter i forsøk med skolebarn.

            I Frankrike utviklet Alfred Binet og Théodore Simon den første brukbare intelligensskalaen (1905) for å finne barn som trengte særskilt undervisning, og i USA gjorde G. Stanley Hall barnestudiene til en bevegelse og Edward L. Thorndike gjorde pedagogisk psykologi til et kvantitativt fag. Thorndike og Woodworth viste (1901) at øvelse i ett fag i liten grad overføres til andre, et hardt slag mot læren om formell dannelse gjennom latin og matematikk.

            Ellen Condliffe Lagemann har beskrevet hvordan denne retningen, med Thorndike som seierherre over Dewey, formet amerikansk utdanningsforskning. Intelligenstestene fikk en mørk side: de ble brukt til nivådeling, til eugenisk begrunnet sortering og i rasistisk innvandringspolitikk, slik Stephen Jay Gould har kritisert.
          `,
          samfunn: `
            Positivisme og vitenskapstro, Taylors «vitenskapelige bedriftsledelse» (1911), massedemokrati og masseutdanning, og en eugenisk bevegelse som ville forbedre befolkningen. Første verdenskrig gjorde testing i stor skala mulig (de amerikanske hærtestene 1917).
          `,
          skole: `
            Skolehygiene, standardiserte prøver, intelligenstesting og nivådeling ble en del av skolens hverdag i mange land. I Norge kom testpsykologien gjennom Helga Eng, og Pedagogisk forskningsinstitutt ved Universitetet i Oslo ble opprettet i 1938.
          `,
          kilder: [snl("https://snl.no/eksperimentell_pedagogikk"), snl("https://snl.no/Alfred_Binet"), snl("https://snl.no/Edward_Lee_Thorndike"), LAGEMANN],
        },
      },
      "Behaviorismen": {
        main: {
          era: "1913–1960-tallet", activeFrom: 1913, activeTo: 1975,
          description: `
            Behaviorismen gjorde psykologien til vitenskapen om observerbar atferd. John B. Watsons manifest «Psychology as the Behaviorist Views It» (1913) avviste introspeksjon og bevissthet som forskningsobjekt, og bygde på Ivan Pavlovs klassiske betinging og Edward Thorndikes «effektlov»: atferd som følges av tilfredsstillelse, styrkes. Watson lovet at han kunne gjøre et hvilket som helst friskt spedbarn til hva som helst, og forsøket med «lille Albert» (1920) er blitt et eksempel på forskning uten etiske grenser.

            B.F. Skinner utviklet den operante betingingen: atferd formes av konsekvensene, og forsterkningsplaner bestemmer hvor sterk og varig den blir. I «The Science of Learning and the Art of Teaching» (1954) brukte han det på skolen. Undervisning skulle deles i små trinn, eleven skulle svare aktivt og få umiddelbar tilbakemelding, og undervisningsmaskiner og programmerte lærebøker skulle la hver elev gå i eget tempo. Sidney Pressey hadde laget en prøvemaskin alt i 1920-årene.

            Programmert undervisning ble en kortvarig bølge i 1960-årene, men behaviorismen fikk varig betydning i atferdsanalyse, spesialpedagogikk og atferdsmodifikasjon, i drill- og øvingsprogrammer og i tanken om tydelige mål og tilbakemelding. Noam Chomskys anmeldelse av Skinners *Verbal Behavior* (1959) ble startskuddet for den kognitive kritikken.
          `,
          samfunn: `
            Amerikansk mellom- og etterkrigstid: tro på teknikk, effektivitet og sosial ingeniørkunst. Watson gikk fra universitetet til reklamebransjen, Skinner skrev utopien *Walden Two* (1948), og den kalde krigen ga undervisningsteknologi militær og politisk interesse.
          `,
          skole: `
            Undervisningsmaskiner, programmerte lærebøker og senere dataprogrammer for drill. Atferdsmodifikasjon og belønningssystemer i spesialundervisning og institusjoner. Tydelige læringsmål og hyppig tilbakemelding ble en del av didaktikken, også der behaviorismen som teori var avvist.
          `,
          kilder: [snl("https://snl.no/behaviorisme"), sep("https://plato.stanford.edu/entries/behaviorism/"), snl("https://snl.no/B.F._Skinner")],
        },
      },
      "Målrasjonell didaktikk": {
        main: {
          era: "ca. 1949–1980", activeFrom: 1949, activeTo: 1985,
          description: `
            Målrasjonell didaktikk gjør målene til utgangspunktet for planlegging, undervisning og vurdering. Ralph W. Tylers *Basic Principles of Curriculum and Instruction* (1949), «Tyler-rasjonalet», stiller fire spørsmål: hvilke mål skal skolen nå, hvilke erfaringer kan nå dem, hvordan skal de organiseres, og hvordan vet vi om målene er nådd? Benjamin Bloom og kolleger ordnet de kognitive målene i en taksonomi fra kunnskap til vurdering (1956), og Robert Mager lærte lærere å skrive mål som observerbar atferd med betingelser og kriterier (1962). Robert Gagné beskrev læringens betingelser og hendelsene i en undervisningsøkt (1965).

            Mestringslæring (Carroll 1963; Bloom 1968) lovet at nesten alle elever kan nå målene hvis tid og hjelp tilpasses. Målrasjonaliteten ble grunnlaget for læreplanutvikling, undervisningsdesign og senere målstyring i offentlig sektor.

            Kritikken var tidlig og sterk. Lawrence Stenhouse satte en prosessmodell opp mot målmodellen (1975), Elliot Eisner pekte på mål som ikke lar seg formulere som atferd, og Hans Skjervheim kalte det å behandle oppdragelse som teknikk for «det instrumentalistiske mistaket» (1972). I Norge ble Bjørndal og Liebergs didaktiske relasjonsmodell (1978) et forsøk på å se mål som ett av flere samvirkende ledd.
          `,
          samfunn: `
            Etterkrigstidens planleggingsoptimisme, systemteori og kybernetikk, og en offentlig sektor som skulle styres etter mål. Sputnik (1957) og den kalde krigen gjorde skolens resultater til et nasjonalt anliggende, og målstyring ble en ledelsesfilosofi i både næringsliv og stat.
          `,
          skole: `
            Læreplaner med målhierarkier, undervisningsplanlegging etter mål og vurdering mot mål. Taksonomier ble brukt til å lage prøver og til å gi mål «høyere orden». I Norge preget måltenkningen læreplanarbeidet fra 1970-årene og fikk ny kraft med kompetansemålene i Kunnskapsløftet.
          `,
          kilder: [TYLER, BLOOM56, snl("https://snl.no/Hans_Skjervheim"), snl("https://snl.no/Sigmund_Lieberg")],
          usikre: [{ tekst: "Årstallet 1972 for Skjervheims «Det instrumentalistiske mistaket»", hvorfor: "Essayet er best kjent fra samlingen Deltakar og tilskodar (1976); første trykk er gjengitt etter hukommelsen", hvorSjekke: "Skjervheim, Deltakar og tilskodar og andre essays (1976), kildelista" }],
        },
      },
      "Evidensbevegelsen": {
        main: {
          era: "ca. 1995–", activeFrom: 1996, activeTo: null,
          description: `
            Evidensbevegelsen vil at undervisning og utdanningspolitikk skal bygge på den beste tilgjengelige forskningen om hva som virker, etter mønster av evidensbasert medisin. David Hargreaves' foredrag «Teaching as a Research-Based Profession» (1996) satte saken på dagsordenen i Storbritannia, og Campbell Collaboration (2000), EPPI-Centre og amerikanske What Works Clearinghouse (2002) laget systematiske oversikter. Randomiserte kontrollerte forsøk ble gullstandarden, og *No Child Left Behind* (2002) krevde «vitenskapelig basert forskning».

            Samtidig ble internasjonale målinger et styringsredskap. OECDs PISA (fra 2000) gjorde 15-åringers ferdigheter sammenlignbare mellom land, og John Hatties *Visible Learning* (2009) samlet over 800 metaanalyser i én rangering av effektstørrelser. Sotiria Grek har kalt dette «styring med tall». I Norge utløste PISA-sjokket i 2001 Kvalitetsutvalget, nasjonale prøver (2004), Kunnskapsløftet (2006) og et nasjonalt kvalitetsvurderingssystem.

            Kritikken har vært omfattende: Gert Biesta (2007) mener at «hva virker?» forutsetter at målene er gitt, og fortrenger spørsmålet om hva som er ønskelig. Statistikere har påvist feil i Hatties metode. Andre har vist hvordan rangeringer og tester endrer det de måler. Bevegelsen har likevel varig forandret både forskning, lærerutdanning og skolepolitikk.
          `,
          samfunn: `
            New Public Management, globalisering og kunnskapsøkonomi. Utdanning ble sett som nasjonal konkurransekraft, og internasjonale organisasjoner som OECD fikk stor innflytelse over nasjonal politikk. Digitale data gjorde måling i stor skala mulig.
          `,
          skole: `
            Nasjonale prøver, kartlegging, kvalitetsvurdering og resultatoppfølging. Lærerutdanningen ble forskningsbasert, i Norge med femårig masterutdanning fra 2017. Lærere ble bedt om å bruke «forskningsbaserte» metoder, mens kritikerne forsvarte profesjonelt skjønn.
          `,
          kilder: [snl("https://snl.no/PISA_-_internasjonal_skoletest"), snl("https://snl.no/nasjonale_pr%C3%B8ver"), snl("https://snl.no/Kunnskapsl%C3%B8ftet"), HATTIE, BIESTA07, GREK],
        },
      },
    },
  },

  edgeDescriptions: {
    reformasjonen__didaktikk: {
      description: `
        Reformasjonen gjorde lesing til en religiøs plikt: Luthers brev til rådsherrene (1524) ba byene opprette skoler, og Melanchthon og de lutherske skoleordningene ga dem form. Didaktikerne Ratke og Comenius var protestanter som ville gjøre dette mulig for alle: en metode som kunne lære alle barn å lese, forstå og leve kristent, og som skulle forene folket i tro og språk.
      `,
    },
    // Motreaksjon.
    humanisme__didaktikk: {
      description: `
        Didaktikerne gjorde opprør mot humanismens latinskole: pugg av grammatikk, imitasjon av Cicero og ord før ting. Ratke og Comenius ville undervise på morsmålet først, gå fra sansene til ordene og bruke tingene selv eller bilder av dem. Samtidig arvet de humanismens tro på oppdragelsens makt og mange av dens lærebøker, og Comenius' *Janua* var også en latinbok.
      `,
    },
    didaktikk__empirisme: {
      description: `
        Fra Bacon og didaktikerne gikk linjen til Locke: kunnskap kommer fra erfaringen, og undervisningen skal begynne med sansene. Men Locke skiftet ut Comenius' religiøse pansofi med en empirisk psykologi, og gjorde oppdragelsen til et spørsmål om vane, nytte og karakter for den enkelte gentleman, ikke om en universell skole for alle.
      `,
    },
    empirisme__herbartianisme: {
      description: `
        Herbarts psykologi var en videreføring av assosiasjonspsykologien. Han avviste læren om sjelsevner og forklarte sjelelivet som forestillinger som forbinder seg, fortrenger hverandre og danner «apperseptive masser». Det nye var forsøket på å gjøre denne mekanikken matematisk og å bruke den som grunnlag for en undervisning som systematisk bygger opp elevens forestillingskrets.
      `,
      kilder: [sep("https://plato.stanford.edu/entries/johann-herbart/")],
    },
    herbartianisme__eksperimentell: {
      description: `
        Herbart hadde krevd at pedagogikken skulle bygge på psykologi, og de eksperimentelle pedagogene tok kravet på alvor, men byttet ut hans spekulative forestillingsmekanikk med laboratoriet. Meumann og Lay prøvde herbartianernes påstander, som formaltrinnene og læren om interesse, i forsøk, og bidro til å svekke autoriteten deres i skolen.
      `,
    },
    eksperimentell__behaviorisme: {
      description: `
        Behaviorismen vokste ut av den eksperimentelle psykologien. Thorndikes dyreforsøk og effektlov, Pavlovs betingingsforsøk og kravet om objektiv måling ga Watson grunnlaget for å avvise bevisstheten som forskningsobjekt. Fra den eksperimentelle pedagogikken arvet behaviorismen også troen på at undervisning kan forbedres gjennom kontrollerte forsøk.
      `,
      kilder: [snl("https://snl.no/behaviorisme")],
    },
    behaviorisme__maalrasjonell: {
      description: `
        Målrasjonell didaktikk tok fra behaviorismen kravet om at mål skal beskrives som observerbar atferd. Mager skrev boka si om mål for programmert undervisning, og Skinners trinnvise undervisning med tilbakemelding ble grunnlaget for undervisningsdesign. Tyler og Bloom var likevel ikke behaviorister: de ville ha mål for forståelse og holdninger, ikke bare for atferd.
      `,
    },
    maalrasjonell__evidens: {
      description: `
        Evidensbevegelsen arvet målrasjonalitetens logikk: når målene er definert og målbare, kan virkningen av ulike tiltak sammenlignes. Blooms «2-sigma-problem» (1984), om effekten av individuell undervisning, og metaanalysene fra 1970-årene ledet fram til Hatties rangering av effektstørrelser. Det nye var skalaen og kravet om at politikken selv skulle styres etter forskningsbasert evidens.
      `,
    },
    // Motreaksjon.
    evidens__nydannelse: {
      description: `
        Den nye dannelsesdebatten er i stor grad et svar på evidensbevegelsen. Gert Biesta kritiserte «læringifiseringen» av utdanningen og spørsmålet «hva virker?», og i Norden ble dannelsesbegrepet tatt fram igjen som motvekt til målstyring, testing og kompetansebegrepet. Striden handler om hvem som bestemmer utdanningens mål, og om de kan måles.
      `,
      kilder: [BIESTA07],
    },
  },

  artists: [
    // --- Didaktikken -------------------------------------------------------
    {
      name: "Wolfgang Ratke", birthYear: 1571, deathYear: 1635, gender: "mann",
      metaGenre: R, instrument: "Praktiker", instrument2: "Politiker og reformator", mainGenre: ["Didaktikken"],
      subGenre: ["Undervisning på morsmålet", "Alle skal lære alt"],
      influenceStart: 1612, influenceEnd: 1635, geography: "Frankfurt, Köthen og Weimar",
      description: `
        Tysk pedagog, også kjent som Ratichius. Hans *Memorial* til riksdagen i Frankfurt (1612) lovet en metode som kunne lære språk raskt og forene riket i ett språk, én religion og én regjering. Grunnreglene er blitt en del av didaktikkens grammatikk: alt først på morsmålet, én ting om gangen, gjentakelse, ingenting med tvang, og forståelse før pugg. Forsøket i Köthen (1618–1620), med støtte fra fyrst Ludwig av Anhalt-Köthen, endte i konflikt og fengsel.

        Ratke var en utålmodig reformator, og metoden ble holdt hemmelig, men han gjorde «didaktikk» til et programord og påvirket både Comenius og skoleordningene i de lutherske fyrstedømmene.
      `,
      kilder: [HAMILTON],
    },
    {
      name: "Johann Amos Comenius", birthYear: 1592, deathYear: 1670, gender: "mann",
      metaGenre: R, instrument: "Teolog", instrument2: "Filosof", mainGenre: ["Didaktikken"],
      subGenre: ["Alle skal lære alt", "Anskuelsesprinsippet", "Undervisning på morsmålet"],
      influenceStart: 1628, influenceEnd: 1670, geography: "Mähren, Leszno, Elbing og Amsterdam",
      description: `
        Tsjekkisk teolog, biskop i Brødremenigheten og pedagogikkens klassiker. Etter de bøhmiske protestantenes nederlag levde han i eksil i Polen, England, Sverige, Ungarn og Nederland, og knyttet skolereformen til et håp om verdens forbedring. *Didactica magna* (latinsk 1657) vil lære «alle alt grundig» i et skolesystem for alle, gutter og jenter, med fire trinn og en undervisning som følger naturens orden og går fra sansene til forstanden.

        Lærebøkene *Janua linguarum reserata* (1631) og *Orbis sensualium pictus* (1658), det første billedleksikonet for barn, gjorde ham berømt i hele Europa. Pansofien, en enhetlig kunnskap om alt, og *Pampaedia*, som først ble funnet i 1935, viser at metoden var del av et religiøst og universelt reformprosjekt. Han regnes som en av grunnleggerne av den pedagogiske vitenskapen.
      `,
      keyWorks: [
        { title: "Janua linguarum reserata", year: 1631 },
        { title: "Didactica magna", year: 1657 },
        { title: "Orbis sensualium pictus", year: 1658 },
        { title: "Pampaedia" },
      ],
      kilder: [snl("https://snl.no/Johann_Amos_Comenius"), HAMILTON],
    },
    {
      name: "Francis Bacon", birthYear: 1561, deathYear: 1626, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Politiker og reformator", mainGenre: ["Didaktikken", "Empirismen"],
      subGenre: ["Undersøkende læring"],
      influenceStart: 1605, influenceEnd: 1626, geography: "London",
      description: `
        Engelsk filosof, essayist og statsmann, og den nye vitenskapens programforfatter. *The Advancement of Learning* (1605) og *Novum Organum* (1620) angrep skolastikkens og humanismens ordkunnskap og krevde en induktiv vitenskap som begynner med systematisk iakttakelse og eksperiment, og som fjerner «idolene» som forvrenger tenkningen. *New Atlantis* (1627) skildrer et forskningssamfunn i statens tjeneste.

        Bacon skrev ikke pedagogikk, men programmet hans ble en kilde for didaktikerne, særlig Comenius' pansofi og realisme, for Royal Society og for empirismen. Tanken om at kunnskap skal komme fra tingene, ikke fra autoritetene, er et grunnmotiv i hele retningen.
      `,
      keyWorks: [
        { title: "The Advancement of Learning", year: 1605 },
        { title: "Novum Organum", year: 1620 },
        { title: "New Atlantis", year: 1627 },
      ],
      kilder: [snl("https://snl.no/Francis_Bacon_-_filosof"), sep("https://plato.stanford.edu/entries/francis-bacon/")],
    },
    {
      name: "Samuel Hartlib", deathYear: 1662, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Didaktikken"],
      subGenre: ["Alle skal lære alt"],
      influenceStart: 1630, influenceEnd: 1662, geography: "London",
      description: `
        Prøyssisk-engelsk kjøpmann, forlegger og «etterretningsmann» for kunnskap, som fra London drev et omfattende brevnettverk for vitenskapelig, religiøs og pedagogisk reform i Bacons ånd. Hartlib-kretsen fikk Comenius til England i 1641 i håp om å grunnlegge en pansofisk høyskole, og ga ut og spredte skrifter om skolereform, landbruk og medisin, blant dem John Miltons *Of Education* (1644), som var tilegnet ham. Hartlib er et eksempel på hvordan didaktikken var del av et europeisk nettverk for samfunnsreform.
      `,
      kilder: [HAMILTON],
    },

    // --- Empirismen --------------------------------------------------------
    {
      name: "John Locke", birthYear: 1632, deathYear: 1704, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Empirismen"],
      subGenre: ["Læring gjennom erfaring", "Leken som læringsform"],
      influenceStart: 1689, influenceEnd: 1704, geography: "Oxford og London",
      description: `
        Engelsk filosof og lege, empirismens grunnlegger. *An Essay Concerning Human Understanding* (1690) avviser medfødte ideer: sinnet er som et blankt papir, og alle ideer kommer fra sansning og refleksjon. *Some Thoughts Concerning Education* (1693), opprinnelig brev til en venn om oppdragelsen av hans sønn, ble en av 1700-tallets mest leste pedagogiske bøker: dyd, klokskap og god oppførsel foran lærdom, tidlig vanedannelse, ære og skam i stedet for juling, lek med bokstaver og nyttige kunnskaper.

        Locke skrev for overklassen og foreslo for de fattige arbeidsskoler (1697). Hans politiske filosofi, om samtykke og rettigheter, og hans pedagogikk henger sammen: et selvstendig og fornuftig menneske er både målet for oppdragelsen og grunnlaget for et legitimt styre.
      `,
      keyWorks: [
        { title: "Two Treatises of Government", year: 1689 },
        { title: "An Essay Concerning Human Understanding", year: 1690 },
        { title: "Some Thoughts Concerning Education", year: 1693 },
        { title: "Of the Conduct of the Understanding", year: 1706 },
      ],
      kilder: [snl("https://snl.no/John_Locke"), sep("https://plato.stanford.edu/entries/locke/")],
    },
    {
      name: "Étienne Bonnot de Condillac", birthYear: 1715, deathYear: 1780, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Empirismen"],
      subGenre: ["Anskuelsesprinsippet"],
      influenceStart: 1746, influenceEnd: 1780, geography: "Paris og Parma",
      description: `
        Fransk filosof, prest og sensualismens viktigste representant. *Traité des sensations* (1754) utleder alle sjelens evner, oppmerksomhet, hukommelse, dømmekraft og vilje, fra sansningene, med tankeeksperimentet om en statue som får én sans om gangen. Som lærer for prinsen av Parma (1758–1767) skrev han et stort undervisningsverk (*Cours d'études*, 1775), der språket er tenkningens redskap og undervisningen skal følge den rekkefølgen kunnskapen faktisk oppstår i. Condillac var venn av Rousseau og fikk stor innflytelse på revolusjonstidens planer for offentlig undervisning og på ideologene rundt 1800.
      `,
      keyWorks: [
        { title: "Essai sur l'origine des connaissances humaines", year: 1746 },
        { title: "Traité des sensations", year: 1754 },
        { title: "Cours d'études pour l'instruction du prince de Parme", year: 1775 },
      ],
      kilder: [snl("https://snl.no/%C3%89tienne_Bonnot_de_Condillac"), sep("https://plato.stanford.edu/entries/condillac/")],
    },
    {
      name: "Claude Adrien Helvétius", birthYear: 1715, deathYear: 1771, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Empirismen"],
      subGenre: ["Læring gjennom erfaring"],
      influenceStart: 1758, influenceEnd: 1771, geography: "Paris",
      description: `
        Fransk filosof. *De l'esprit* (1758) ble fordømt og brent fordi den førte all moral tilbake til egeninteresse, og det posthume *De l'homme* (1773) trakk den pedagogiske konsekvensen av sensualismen: alle mennesker er født med like evner, og forskjellene skyldes oppdragelse, miljø og tilfeldigheter. «L'éducation peut tout», oppdragelsen kan alt. Helvétius gjorde dermed oppdragelsen og lovgivningen til nøklene til et bedre samfunn, en tanke som gikk videre til utilitaristene og til de radikale miljøteoriene på 1800- og 1900-tallet. Diderot svarte med en kritikk som forsvarte naturlige forskjeller.
      `,
      keyWorks: [
        { title: "De l'esprit", year: 1758 },
        { title: "De l'homme", year: 1773 },
      ],
      kilder: [snl("https://snl.no/Claude_Adrien_Helv%C3%A9tius")],
    },
    {
      name: "David Hartley", birthYear: 1705, deathYear: 1757, gender: "mann",
      metaGenre: R, instrument: "Psykolog", instrument2: "Filosof", mainGenre: ["Empirismen"],
      subGenre: ["Læring gjennom erfaring"],
      influenceStart: 1749, influenceEnd: 1757, geography: "London og Bath",
      description: `
        Britisk lege og filosof, og assosiasjonspsykologiens grunnlegger. *Observations on Man* (1749) forbinder Lockes lære om ideer med en Newton-inspirert teori om vibrasjoner i nervesystemet: enkle sansninger blir til komplekse ideer, følelser og moralske holdninger ved at de gjentatte ganger opptrer sammen. Joseph Priestley ga ut en forkortet utgave (1775), og gjennom ham og James Mill ble assosiasjonspsykologien grunnlaget for utilitaristisk oppdragelsestenkning, med John Stuart Mills oppvekst som det mest kjente forsøket.
      `,
      keyWorks: [{ title: "Observations on Man, His Frame, His Duty, and His Expectations", year: 1749 }],
      kilder: [snl("https://snl.no/David_Hartley"), sep("https://plato.stanford.edu/entries/hartley/")],
    },

    // --- Herbartianismen ---------------------------------------------------
    {
      name: "Johann Friedrich Herbart", birthYear: 1776, deathYear: 1841, gender: "mann",
      metaGenre: R, instrument: "Filosof", instrument2: "Psykolog", mainGenre: ["Herbartianismen"],
      subGenre: ["Oppdragende undervisning", "Interesseprinsippet", "Pedagogisk takt"],
      influenceStart: 1802, influenceEnd: 1841, geography: "Göttingen og Königsberg",
      description: `
        Tysk filosof og pedagog, en av grunnleggerne av den vitenskapelige pedagogikken. Han var huslærer i Bern, besøkte Pestalozzi i Burgdorf og fikk i 1809 Kants gamle lærestol i Königsberg, der han drev et pedagogisk seminar med øvingsskole. *Allgemeine Pädagogik* (1806) bygger pedagogikken på etikk og psykologi, gjør moralsk karakter til målet og *den oppdragende undervisningen*, som vekker en mangesidig interesse, til veien. Han innførte begrepet dannbarhet og skilte mellom styring, undervisning og tukt.

        Allerede i 1802 talte han om den *pedagogiske takten*: evnen til å handle riktig i situasjonen, som teorien ikke kan erstatte. Det skiller Herbart fra herbartianerne, som gjorde hans fire trinn (klarhet, assosiasjon, system, metode) til faste formaltrinn.
      `,
      keyWorks: [
        { title: "Pestalozzis Idee eines ABC der Anschauung", year: 1802 },
        { title: "Allgemeine Pädagogik aus dem Zweck der Erziehung abgeleitet", year: 1806 },
        { title: "Lehrbuch zur Psychologie", year: 1816 },
        { title: "Umriss pädagogischer Vorlesungen", year: 1835 },
      ],
      kilder: [snl("https://snl.no/Johann_Friedrich_Herbart"), sep("https://plato.stanford.edu/entries/johann-herbart/")],
    },
    {
      name: "Tuiskon Ziller", birthYear: 1817, deathYear: 1882, gender: "mann",
      metaGenre: R, instrument: "Forsker", instrument2: "Praktiker", mainGenre: ["Herbartianismen"],
      subGenre: ["Formaltrinnene", "Oppdragende undervisning"],
      influenceStart: 1856, influenceEnd: 1882, geography: "Leipzig",
      description: `
        Tysk pedagog ved universitetet i Leipzig og den som gjorde Herbarts pedagogikk til et system for folkeskolen. *Grundlegung zur Lehre vom erziehenden Unterricht* (1865) innførte kulturstadieteorien, at barnets utvikling gjentar menneskehetens kulturtrinn og at stoffet skal velges deretter, og konsentrasjonsprinsippet, at alle fag skal samles rundt et sentralt «gesinnungsstoff» fra religion og historie. Han delte Herbarts trinn i fem formaltrinn. Ziller grunnla Verein für wissenschaftliche Pädagogik (1868), som ble herbartianismens organisasjon.
      `,
      keyWorks: [{ title: "Grundlegung zur Lehre vom erziehenden Unterricht", year: 1865 }],
      kilder: [snl("https://snl.no/Johann_Friedrich_Herbart")],
    },
    {
      name: "Wilhelm Rein", birthYear: 1847, deathYear: 1929, gender: "mann",
      metaGenre: R, instrument: "Praktiker", instrument2: "Forsker", mainGenre: ["Herbartianismen"],
      subGenre: ["Formaltrinnene"],
      influenceStart: 1878, influenceEnd: 1929, geography: "Jena",
      description: `
        Tysk pedagog, professor i Jena og herbartianismens mest internasjonale navn. *Theorie und Praxis des Volksschulunterrichts nach Herbartischen Grundsätzen* (fra 1878, med Pickel og Scheller) ga lærerne ferdige forberedelser etter formaltrinnene forberedelse, framstilling, sammenknytning, sammenfatning og anvendelse. Ferieskolene i Jena trakk lærere og professorer fra hele verden, også fra USA og Norden, og *Encyklopädisches Handbuch der Pädagogik* (fra 1895), som han redigerte, var tidens store oppslagsverk. Rein ble en hovedmotstander for reformpedagogene.
      `,
      keyWorks: [
        { title: "Theorie und Praxis des Volksschulunterrichts nach Herbartischen Grundsätzen", year: 1878 },
        { title: "Encyklopädisches Handbuch der Pädagogik", year: 1895 },
      ],
      kilder: [snl("https://snl.no/Johann_Friedrich_Herbart")],
    },
    {
      name: "Charles A. McMurry", birthYear: 1857, deathYear: 1929, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Herbartianismen"],
      subGenre: ["Formaltrinnene", "Interesseprinsippet"],
      influenceStart: 1892, influenceEnd: 1929, geography: "Illinois",
      description: `
        Amerikansk pedagog som hadde studert i Jena, og som sammen med broren Frank McMurry og Charles De Garmo førte herbartianismen til USA. *The Elements of General Method Based on the Principles of Herbart* (1892) og brødrenes *The Method of the Recitation* (1897) gjorde formaltrinnene og læren om interesse og konsentrasjon til lærebokstoff i lærerutdanningen. National Herbart Society (1895) ble arenaen der Dewey la fram sin kritikk av interessebegrepet, og selskapet ble senere National Society for the Study of Education.
      `,
      keyWorks: [{ title: "The Elements of General Method Based on the Principles of Herbart", year: 1892 }],
      kilder: [bok("Cremin, Lawrence A. The Transformation of the School: Progressivism in American Education, 1876–1957. Knopf, 1961.")],
    },

    // --- Eksperimentell pedagogikk -----------------------------------------
    {
      name: "Ernst Meumann", birthYear: 1862, deathYear: 1915, gender: "mann",
      metaGenre: R, instrument: "Psykolog", instrument2: "Forsker", mainGenre: ["Eksperimentell pedagogikk"],
      subGenre: ["Overføring av læring"],
      influenceStart: 1903, influenceEnd: 1915, geography: "Zürich, Leipzig og Hamburg",
      description: `
        Tysk psykolog og pedagog, elev av Wundt, og den eksperimentelle pedagogikkens ledende teoretiker. Han grunnla *Zeitschrift für experimentelle Pädagogik* (1905) og samlet feltet i *Vorlesungen zur Einführung in die experimentelle Pädagogik* (1907): læring, hukommelse, oppmerksomhet, tretthet og evner skulle undersøkes med psykologiske metoder, og pedagogikken skulle bli en empirisk vitenskap om barnet. Meumann skilte likevel mellom de empiriske spørsmålene og spørsmålet om oppdragelsens mål, som han mente krevde filosofi.
      `,
      keyWorks: [{ title: "Vorlesungen zur Einführung in die experimentelle Pädagogik", year: 1907 }],
      kilder: [snl("https://snl.no/eksperimentell_pedagogikk"), bok("Meumann, Ernst. Vorlesungen zur Einführung in die experimentelle Pädagogik und ihre psychologischen Grundlagen. Engelmann, 1907.")],
    },
    {
      name: "Wilhelm August Lay", birthYear: 1862, deathYear: 1926, gender: "mann",
      metaGenre: R, instrument: "Praktiker", instrument2: "Forsker", mainGenre: ["Eksperimentell pedagogikk", "Reformpedagogikken"],
      subGenre: ["Selvvirksomhet"],
      influenceStart: 1903, influenceEnd: 1926, geography: "Karlsruhe",
      description: `
        Tysk seminarlærer og pedagog. *Experimentelle Didaktik* (1903) prøvde undervisningsmåter i forsøk med skolebarn, og sammen med Meumann ga han ut tidsskrift for eksperimentell pedagogikk. Fra forsøkene utledet han en «handlingspedagogikk» (*Die Tatschule*, 1911): læring skjer gjennom en sammenheng av inntrykk, bearbeiding og uttrykk, og eleven må handle, tegne, bygge og forme for å lære. Lay er et eksempel på hvor nær eksperimentell pedagogikk og reformpedagogikk kunne ligge hverandre.
      `,
      keyWorks: [
        { title: "Experimentelle Didaktik", year: 1903 },
        { title: "Die Tatschule", year: 1911 },
      ],
      kilder: [snl("https://snl.no/eksperimentell_pedagogikk")],
    },
    {
      name: "Alfred Binet", birthYear: 1857, deathYear: 1911, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Eksperimentell pedagogikk"],
      subGenre: ["Tilpasset opplæring"],
      influenceStart: 1890, influenceEnd: 1911, geography: "Paris",
      description: `
        Fransk psykolog ved Sorbonne. På oppdrag fra undervisningsdepartementet utviklet han med Théodore Simon den første brukbare intelligensskalaen (1905, revidert 1908 og 1911), for å finne barn som trengte særskilt undervisning. Skalaen målte en «mental alder» gjennom oppgaver ordnet etter vanskegrad. Binet så intelligensen som sammensatt og foranderlig og advarte mot å bruke testen til å stemple barn; han foreslo «mental ortopedi» for å utvikle den. Den amerikanske bruken av testene til sortering og eugenikk gikk langt utover det han mente.
      `,
      keyWorks: [{ title: "Les idées modernes sur les enfants", year: 1909 }],
      kilder: [snl("https://snl.no/Alfred_Binet")],
    },
    {
      name: "Edward L. Thorndike", birthYear: 1874, deathYear: 1949, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Eksperimentell pedagogikk", "Behaviorismen"],
      subGenre: ["Overføring av læring", "Forsterkning"],
      influenceStart: 1898, influenceEnd: 1949, geography: "Teachers College, New York",
      description: `
        Amerikansk psykolog ved Teachers College, Columbia University, og den pedagogiske psykologiens mest innflytelsesrike skikkelse i første halvdel av 1900-tallet. Dyreforsøkene (*Animal Intelligence*, 1898) ga «effektloven», at handlinger som følges av tilfredsstillelse, styrkes, og en konneksjonistisk læringsteori. Med Robert Woodworth viste han (1901) at øvelse i ett område i liten grad overføres til andre, noe som undergravde læren om formell dannelse.

        Thorndike gjorde pedagogisk psykologi til et kvantitativt fag med standardiserte prøver og statistikk (*Educational Psychology*, 1913–1914). Ellen Lagemann har sagt at Thorndike vant og Dewey tapte i kampen om utdanningsforskningen. Han var også eugeniker.
      `,
      keyWorks: [
        { title: "Animal Intelligence", year: 1898 },
        { title: "Educational Psychology", year: 1913 },
      ],
      kilder: [snl("https://snl.no/Edward_Lee_Thorndike"), LAGEMANN],
    },
    {
      name: "G. Stanley Hall", birthYear: 1846, deathYear: 1924, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Eksperimentell pedagogikk"],
      subGenre: ["Barndommens egenverdi"],
      influenceStart: 1883, influenceEnd: 1924, geography: "Johns Hopkins og Clark University",
      description: `
        Amerikansk psykolog og pedagog, regnet som grunnleggeren av amerikansk utviklingspsykologi. Han opprettet et av de første psykologiske laboratoriene i USA ved Johns Hopkins, var første rektor ved Clark University og grunnla American Psychological Association (1892). Barnestudie-bevegelsen hans brukte spørreskjemaer til lærere og foreldre om barns tanker og atferd, og *Adolescence* (1904) gjorde ungdomstiden til et eget stadium av «storm og stress». Hall bygde på en rekapitulasjonsteori og en rasebiologi som i dag er forlatt, men han gjorde barnet til et forskningsobjekt og skolen til et felt for psykologien.
      `,
      keyWorks: [{ title: "Adolescence", year: 1904 }],
      kilder: [snl("https://snl.no/Granville_Stanley_Hall")],
    },

    // --- Behaviorismen -----------------------------------------------------
    {
      name: "Ivan Pavlov", birthYear: 1849, deathYear: 1936, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Behaviorismen"],
      subGenre: ["Forsterkning"],
      influenceStart: 1903, influenceEnd: 1936, geography: "St. Petersburg",
      description: `
        Russisk fysiolog, Nobels pris i fysiologi eller medisin 1904 for forskningen på fordøyelsen. I forsøkene med hunder oppdaget han den klassiske betingingen: en nøytral stimulus som gjentatte ganger opptrer sammen med mat, kommer til å utløse spytt alene. Betinget refleks, utslukking og generalisering ble grunnbegreper for Watson og hele den behavioristiske læringspsykologien, og i Sovjetunionen ble Pavlovs fysiologi en offisiell grunnmur for psykologien.
      `,
      kilder: [snl("https://snl.no/Ivan_Pavlov")],
    },
    {
      name: "John B. Watson", birthYear: 1878, deathYear: 1958, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Behaviorismen"],
      subGenre: ["Forsterkning"],
      influenceStart: 1913, influenceEnd: 1930, geography: "Johns Hopkins, Baltimore",
      description: `
        Amerikansk psykolog, professor ved Johns Hopkins (1908–1920) og behaviorismens grunnlegger. «Psychology as the Behaviorist Views It» (1913) gjorde psykologien til vitenskapen om observerbar atferd, med prediksjon og kontroll som mål. Forsøket med «lille Albert» (1920, med Rosalie Rayner), som skulle vise at frykt kan betinges, er blitt et skoleeksempel på forskning uten etiske grenser. Etter at han måtte forlate universitetet, gikk han til reklamebransjen. *Psychological Care of Infant and Child* (1928) rådet foreldre til å unngå kjærtegn og oppdra barna etter faste rutiner, et råd som ble svært utbredt og senere sterkt kritisert.
      `,
      keyWorks: [
        { title: "Psychology as the Behaviorist Views It", year: 1913 },
        { title: "Behaviorism", year: 1924 },
        { title: "Psychological Care of Infant and Child", year: 1928 },
      ],
      kilder: [snl("https://snl.no/John_B._Watson"), sep("https://plato.stanford.edu/entries/behaviorism/")],
    },
    {
      name: "B.F. Skinner", birthYear: 1904, deathYear: 1990, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Behaviorismen", "Målrasjonell didaktikk"],
      subGenre: ["Forsterkning", "Programmert undervisning"],
      influenceStart: 1938, influenceEnd: 1990, geography: "Harvard",
      description: `
        Amerikansk psykolog ved Harvard og den radikale behaviorismens grunnlegger. Den operante betingingen (*The Behavior of Organisms*, 1938) forklarer atferd ut fra konsekvensene, og forsterkningsplanene bestemmer hvordan den læres og holdes ved like. I «The Science of Learning and the Art of Teaching» (1954) og *The Technology of Teaching* (1968) anvendte han teorien på skolen: små trinn, aktivt svar, umiddelbar forsterkning og individuelt tempo, med undervisningsmaskiner og programmerte lærebøker.

        Utopien *Walden Two* (1948) og *Beyond Freedom and Dignity* (1971) gjorde ham til en omstridt kulturdebattant som avviste fri vilje som forklaring. Han er den mest siterte psykologen på 1900-tallet.
      `,
      keyWorks: [
        { title: "The Behavior of Organisms", year: 1938 },
        { title: "Walden Two", year: 1948 },
        { title: "The Science of Learning and the Art of Teaching", year: 1954 },
        { title: "The Technology of Teaching", year: 1968 },
        { title: "Beyond Freedom and Dignity", year: 1971 },
      ],
      kilder: [snl("https://snl.no/B.F._Skinner"), snl("https://snl.no/programmert_undervisning")],
    },
    {
      name: "Sidney L. Pressey", birthYear: 1888, deathYear: 1979, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Behaviorismen"],
      subGenre: ["Programmert undervisning"],
      influenceStart: 1924, influenceEnd: 1979, geography: "Ohio State University",
      description: `
        Amerikansk psykolog ved Ohio State University som i 1920-årene laget den første «undervisningsmaskinen»: et apparat som stilte flervalgsspørsmål, registrerte svarene og bare gikk videre når eleven svarte riktig. Han presenterte den i «A Simple Apparatus Which Gives Tests and Scores—and Teaches» (1926). Maskinen fikk liten utbredelse i depresjonsårene, men Pressey ble gjenoppdaget da Skinner lanserte programmert undervisning i 1950-årene, og regnes som en pioner for undervisningsteknologi og tilbakemeldingsbasert læring.
      `,
      kilder: [snl("https://snl.no/programmert_undervisning")],
    },

    // --- Målrasjonell didaktikk --------------------------------------------
    {
      name: "Ralph W. Tyler", birthYear: 1902, deathYear: 1994, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Målrasjonell didaktikk", "Progressivismen"],
      subGenre: ["Målstyrt undervisning"],
      influenceStart: 1934, influenceEnd: 1994, geography: "Ohio State og University of Chicago",
      description: `
        Amerikansk utdanningsforsker. Han ledet evalueringen i den progressive Eight-Year Study (1933–1941) og utviklet der en evaluering som tok utgangspunkt i skolenes egne mål. *Basic Principles of Curriculum and Instruction* (1949), «Tyler-rasjonalet», er blitt en av de mest innflytelsesrike bøkene om læreplaner: hvilke mål skal skolen søke å nå, hvilke læringserfaringer kan nå dem, hvordan skal de organiseres, og hvordan avgjøres det om målene er nådd? Tyler var selv opptatt av mål for tenkning og holdninger, men modellen ble grunnlaget for den målstyrte didaktikken og for nasjonale prøver i USA.
      `,
      keyWorks: [{ title: "Basic Principles of Curriculum and Instruction", year: 1949 }],
      kilder: [TYLER],
    },
    {
      name: "Benjamin S. Bloom", birthYear: 1913, deathYear: 1999, gender: "mann",
      metaGenre: R, instrument: "Forsker", instrument2: "Psykolog", mainGenre: ["Målrasjonell didaktikk"],
      subGenre: ["Målstyrt undervisning", "Mestringslæring"],
      influenceStart: 1956, influenceEnd: 1999, geography: "University of Chicago",
      description: `
        Amerikansk pedagog og psykolog ved University of Chicago, Tylers elev. *Taxonomy of Educational Objectives* (1956), som han redigerte, ordnet de kognitive målene i seks nivåer fra kunnskap via forståelse, anvendelse, analyse og syntese til vurdering, og taksonomien er blitt et av de mest brukte redskapene i læreplan- og prøvearbeid. Med «Learning for Mastery» (1968) lanserte han mestringslæring: nesten alle elever kan nå målene hvis undervisningen gir nok tid, tilbakemelding og korrigerende hjelp. «The 2 Sigma Problem» (1984) viste den store effekten av individuell undervisning og ble et utgangspunkt for senere effektforskning.
      `,
      keyWorks: [
        { title: "Taxonomy of Educational Objectives. Handbook I: Cognitive Domain", year: 1956 },
        { title: "Learning for Mastery", year: 1968 },
        { title: "Human Characteristics and School Learning", year: 1976 },
      ],
      kilder: [BLOOM56],
    },
    {
      name: "Robert F. Mager", gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Målrasjonell didaktikk"],
      subGenre: ["Målstyrt undervisning"],
      influenceStart: 1962, geography: "USA",
      description: `
        Amerikansk psykolog og konsulent i undervisningsdesign. *Preparing Instructional Objectives* (1962, opprinnelig om mål for programmert undervisning) lærte lærere og instruktører å skrive mål som beskriver observerbar atferd, under hvilke betingelser den skal vises, og etter hvilket kriterium den er god nok. Den lille, programmert oppbygde boka solgte i millioner og ble grunnlaget for måltenkningen i opplæring, militær trening og senere i læreplaner. Kritikerne mente at mål som bare kan beskrives som atferd, gjør det vesentlige i utdanningen usynlig.
      `,
      keyWorks: [{ title: "Preparing Instructional Objectives", year: 1962 }],
      kilder: [bok("Mager, Robert F. Preparing Instructional Objectives. Fearon, 1962.")],
    },
    {
      name: "Robert M. Gagné", birthYear: 1916, deathYear: 2002, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Målrasjonell didaktikk"],
      subGenre: ["Målstyrt undervisning"],
      influenceStart: 1965, influenceEnd: 2002, geography: "USA",
      description: `
        Amerikansk psykolog som forbandt læringspsykologi og undervisningsdesign. *The Conditions of Learning* (1965) skiller mellom typer av læring, fra signallæring til problemløsning, som hver krever egne betingelser, og ordner dem i læringshierarkier der forutsetningene må læres først. Hans ni «undervisningshendelser», fra å vekke oppmerksomhet til å fremme overføring, ble en mal for systematisk planlegging av undervisning i skole, militær og arbeidsliv. Gagné bygde bro mellom behavioristisk og kognitiv psykologi.
      `,
      keyWorks: [{ title: "The Conditions of Learning", year: 1965 }],
      kilder: [bok("Gagné, Robert M. The Conditions of Learning. Holt, Rinehart and Winston, 1965.")],
    },

    // --- Evidensbevegelsen -------------------------------------------------
    {
      name: "David H. Hargreaves", gender: "mann",
      metaGenre: R, instrument: "Sosiolog", instrument2: "Forsker", mainGenre: ["Evidensbevegelsen"],
      subGenre: ["Evidensbasert praksis"],
      influenceStart: 1996, geography: "Cambridge",
      description: `
        Britisk utdanningssosiolog, professor i Cambridge. Foredraget «Teaching as a Research-Based Profession: Possibilities and Prospects» (Teacher Training Agency, 1996) hevdet at utdanningsforskningen var for lite relevant og kumulativ, og at undervisning burde bli en forskningsbasert profesjon slik medisinen var blitt. Foredraget utløste en omfattende debatt og regnes som et startpunkt for evidensbevegelsen i europeisk utdanning. Hargreaves hadde tidligere skrevet klassiske skolesosiologiske studier om nivådeling og elevkulturer.
      `,
      kilder: [bok("Hargreaves, David H. «Teaching as a Research-Based Profession: Possibilities and Prospects.» Teacher Training Agency Annual Lecture, 1996.")],
    },
    {
      name: "Robert E. Slavin", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Evidensbevegelsen"],
      subGenre: ["Evidensbasert praksis"],
      influenceStart: 1987, geography: "Johns Hopkins, Baltimore",
      description: `
        Amerikansk utdanningsforsker ved Johns Hopkins og en av de mest innflytelsesrike talsmennene for evidensbasert utdanning. Han utviklet og prøvde ut skoleprogrammet *Success for All* og samarbeidslæringsmetoder i store kontrollerte studier, og argumenterte i «Evidence-Based Education Policies» (2002) for at utdanningspolitikken skulle følge medisinens eksempel. Slavins oversikter over hva som virker i lese- og matematikkundervisning, og hans kritikk av svake studier, preget både forskningsmetode og politikk.
      `,
      kilder: [bok("Slavin, Robert E. «Evidence-Based Education Policies: Transforming Educational Practice and Research.» Educational Researcher 31, nr. 7 (2002): 15–21.")],
    },
    {
      name: "John Hattie", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Evidensbevegelsen"],
      subGenre: ["Evidensbasert praksis"],
      influenceStart: 2009, geography: "Auckland og Melbourne",
      description: `
        New Zealandsk utdanningsforsker. *Visible Learning* (2009) syntetiserer over 800 metaanalyser av faktorer som påvirker elevers prestasjoner og rangerer dem etter effektstørrelse, med 0,40 som «hengselpunkt». Budskapet, at læreren og tilbakemeldingen betyr mest, og at undervisningen må gjøres synlig for både lærer og elev, fikk enorm gjennomslagskraft i skoler og skolepolitikk, også i Norge. Metoden er sterkt kritisert: å slå sammen metaanalyser av ulike mål og studier gir tall som er vanskelige å tolke, og statistikere har påvist regnefeil.
      `,
      keyWorks: [{ title: "Visible Learning", year: 2009 }],
      kilder: [HATTIE],
    },
    {
      name: "Andreas Schleicher", gender: "mann",
      metaGenre: R, instrument: "Forsker", instrument2: "Politiker og reformator", mainGenre: ["Evidensbevegelsen"],
      subGenre: ["Evidensbasert praksis"],
      influenceStart: 2000, geography: "OECD, Paris",
      description: `
        Tysk statistiker og utdanningsforsker, leder for utdanningsdirektoratet i OECD og initiativtakeren til PISA, som siden 2000 hvert tredje år har testet 15-åringers ferdigheter i lesing, matematikk og naturfag i et stadig større antall land. Schleicher er blitt ansiktet utad for en global utdanningsdebatt der sammenligninger mellom land styrer nasjonal politikk. Forskere har beskrevet PISA som et redskap for «styring med tall», og kritisert hvordan rangeringene forenkler og påvirker skolepolitikk.
      `,
      kilder: [snl("https://snl.no/PISA_-_internasjonal_skoletest"), GREK],
    },
    {
      name: "Kristin Clemet", birthYear: 1957, gender: "kvinne",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Evidensbevegelsen"],
      subGenre: ["Evidensbasert praksis", "Målstyrt undervisning"],
      influenceStart: 2001, influenceEnd: 2005, geography: "Oslo",
      description: `
        Norsk politiker for Høyre, utdannings- og forskningsminister 2001–2005 og senere leder for tankesmien Civita. Få uker etter at hun tiltrådte, kom de første PISA-resultatene (desember 2001), og hun gjorde «PISA-sjokket» til grunnlag for en omfattende omlegging: nasjonale prøver (fra 2004), resultatoppfølging, større frihet for skoleeierne og stortingsmeldingen *Kultur for læring* (2004), som la grunnen for Kunnskapsløftet (2006) med kompetansemål og grunnleggende ferdigheter. Reformene ble både sett som et nødvendig kvalitetsløft og kritisert som målstyring og testregime.
      `,
      kilder: [snl("https://snl.no/Kristin_Clemet"), snl("https://snl.no/nasjonale_pr%C3%B8ver"), snl("https://snl.no/Kunnskapsl%C3%B8ftet")],
    },
  ],
};
