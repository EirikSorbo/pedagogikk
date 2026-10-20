// Runde 2 — Læring og utvikling: retningen, epokene, teoretikerne og påvirkningene (fase 6, skrevet av Opus 2026-10-21).
import { snl, sep, bok } from "../kilder.mjs";

const R = "Læring og utvikling";
const BURMAN = bok("Burman, Erica. Deconstructing Developmental Psychology. Routledge, 1994.");
const BRUNER60 = bok("Bruner, Jerome S. The Process of Education. Harvard University Press, 1960.");
const PHILLIPS = bok("Phillips, D.C. «The Good, the Bad, and the Ugly: The Many Faces of Constructivism.» Educational Researcher 24, nr. 7 (1995): 5–12.");
const LAVEWENGER = bok("Lave, Jean og Etienne Wenger. Situated Learning: Legitimate Peripheral Participation. Cambridge University Press, 1991.");
const SALJO = bok("Säljö, Roger. Lärande i praktiken: Ett sociokulturellt perspektiv. Prisma, 2000.");
const DYSTHE = bok("Dysthe, Olga. Det flerstemmige klasserommet: Skriving og samtale for å lære. Ad Notam Gyldendal, 1995.");
const MARTON = bok("Marton, Ference og Roger Säljö. «On Qualitative Differences in Learning: I — Outcome and Process.» British Journal of Educational Psychology 46 (1976): 4–11.");
const NOU2015 = bok("NOU 2015: 8. Fremtidens skole: Fornyelse av fag og kompetanser. Kunnskapsdepartementet, 2015.");
const NRC2012 = bok("Pellegrino, James W. og Margaret L. Hilton (red.). Education for Life and Work: Developing Transferable Knowledge and Skills in the 21st Century. National Academies Press, 2012.");

export default {
  genreDescriptions: {
    meta: {
      [R]: {
        meta: {
          description: `
            Retningen samler teoriene om hvordan mennesker utvikler seg og lærer, slik psykologien og læringsforskningen har formulert dem siden mellomkrigstiden: Piagets og Vygotskijs utviklingspsykologi, den kognitive vendingen mot behaviorismen, konstruktivismen, de sosiokulturelle teoriene og dagens begrep om dybdelæring. Felles er at læring ses som aktiv meningsskaping, ikke som mottak av informasjon eller forsterket atferd, og at kunnskap om hvordan forståelse vokser fram, skal forme undervisningen. Retningen skiller seg fra «Barnet i sentrum» ved at den bygger på forskning mer enn på ideal, og fra «Empiri og metode» ved at den interesserer seg for tenkning og forståelse mer enn for målbare resultater. I Norge har den preget lærerutdanningen og læreplanene fra L97 til fagfornyelsen i LK20.
          `,
          kilder: [snl("https://snl.no/l%C3%A6ringsteori"), snl("https://snl.no/Jean_Piaget")],
        },
        story: {
          body: `
            ### Barnet som tenker
            Rundt 1920 begynte psykologien å spørre hvordan barn tenker, ikke bare hvor mye de kan. I Genève, ved Claparèdes Institut Jean-Jacques Rousseau, intervjuet Jean Piaget barn om drømmer, regler, tall og årsaker, og fant at feilene deres var systematiske: barn tenker ikke dårligere enn voksne, men annerledes. Tenkningen utvikler seg i stadier gjennom barnets egen aktivitet, når nye erfaringer ikke lenger passer inn i de gamle skjemaene. I Moskva gikk Lev Vygotskij en annen vei. Tenkningen er kulturell før den er individuell: barnet tar opp språket og redskapene i omgivelsene, og læring går foran utviklingen innenfor det han kalte den nærmeste utviklingssonen. Vygotskij døde i 1934, og verket ble forbudt i Sovjetunionen etter 1936. I Wien og senere i Norge arbeidet Charlotte Bühler med barns og unges utvikling, og i Norge gjorde Åse Gruda Skard barnepsykologien til en del av den offentlige samtalen om oppdragelse.

            ### Den kognitive vendingen
            I USA var behaviorismen enerådende til 1950-årene. Så kom vendingen: Noam Chomskys kritikk av Skinner (1959), George A. Millers arbeider om hukommelsens grenser og Jerome Bruners studier av tenkning gjorde sinnet til forskningsobjekt igjen, med datamaskinen som modell. Bruners *The Process of Education* (1960), skrevet etter en konferanse om naturfagundervisning etter Sputnik, ga skolen et nytt program: fagenes struktur, oppdagende læring og en spiralplan der de samme grunnideene kommer igjen på høyere nivå. David Ausubel satte meningsfull mottakelseslæring opp mot oppdagelse og ga lærere regelen om at forkunnskapene er det viktigste.

            ### Konstruksjon og deltakelse
            Fra 1970-årene ble Piaget lest som en kunnskapsteori: kunnskap konstrueres av den som lærer, og elevers «misoppfatninger» i naturfag og matematikk er rimelige konstruksjoner som undervisningen må ta på alvor. Rosalind Driver og andre gjorde dette til et forskningsfelt, Seymour Papert ga det en datamaskin (Logo), og Ernst von Glasersfeld gjorde det til en radikal erkjennelsesteori. I Norge bygde Svein Sjøberg naturfagdidaktikken på denne tradisjonen. Fra slutten av 1980-årene flyttet tyngdepunktet seg fra hodet til fellesskapet. Vygotskij ble oversatt og gjenoppdaget, og Jean Lave og Etienne Wenger beskrev læring som deltakelse i praksisfellesskap. I Skandinavia ble Roger Säljös sosiokulturelle perspektiv og Olga Dysthes flerstemmige klasserom standardlitteratur i lærerutdanningen.

            ### Dybde og forståelse
            Den siste epoken samler tradisjonen i et politisk begrep. Allerede i 1976 skilte Ference Marton og Roger Säljö mellom dyp og overflatisk tilnærming til læring. Læringsforskningen (*learning sciences*) og amerikanske National Research Council (2012) gjorde *deeper learning* til evnen til å overføre kunnskap til nye situasjoner. I Norge brukte Ludvigsen-utvalget (2014–2015) begrepet som grunnlag for fagfornyelsen, og læreplanen fra 2020 (LK20) har dybdelæring, kjerneelementer og tverrfaglige temaer som bærende ideer.

            ### Kritikken
            Retningen har fått kritikk fra flere hold. Erica Burman og barndomssosiologien har vist hvordan utviklingspsykologien gjorde ett bestemt, vestlig middelklassebarn til norm. Debatten om konstruktivisme har vist hvor ulike ting begrepet kan bety, og kognitive psykologer har pekt på at oppdagende læring uten veiledning lærer nybegynnere lite. Begrepet dybdelæring er kritisert for å være så vidt at det kan bety nesten alt. Likevel er det i denne retningen at de fleste lærere i dag finner sitt teoretiske språk for læring.
          `,
        },
      },
    },
    main: {
      "Utviklingspsykologien": {
        main: {
          era: "ca. 1920–1940", activeFrom: 1920, activeTo: 1945,
          description: `
            Utviklingspsykologien gjorde barns tenkning, språk og sosiale liv til forskningsfelt med egne metoder: kliniske intervjuer, systematisk observasjon, dagbøker og tester. Jean Piaget beskrev i 1920- og 1930-årene hvordan barnets tenkning endres kvalitativt, fra egosentrisme mot objektiv og logisk tenkning, gjennom assimilasjon, akkomodasjon og likevekt, og i stadier fra den sensomotoriske til den formal-operasjonelle tenkningen. Lev Vygotskij la i Moskva grunnen for den kulturhistoriske psykologien: høyere mentale funksjoner oppstår i samhandling og formidles av tegn og redskaper, først og fremst språket, og god undervisning går foran utviklingen innenfor den nærmeste utviklingssonen.

            I Wien gjorde Charlotte og Karl Bühler Det psykologiske instituttet til et senter for utviklingsforskning, med livsløpsperspektiv og standardiserte småbarnstester, og i USA beskrev Arnold Gesell normale utviklingstrinn og modning med film og enveisspeil. Alle fire ga skolen et nytt spørsmål: hva kan barn forstå på ulike alderstrinn, og når er de «modne» for noe?

            Erica Burman og andre har kritisert hvordan utviklingspsykologien gjorde normer om til normalitet, og Margaret Donaldson viste (1978) at Piaget undervurderte små barns kompetanse når oppgavene gir mening for dem. Vygotskij-forskningen har de siste tiårene revidert mye av den vestlige lesningen av ham.
          `,
          samfunn: `
            Mellomkrigstiden: «Det røde Wien» med sin skolereform, de tidlige sovjetiske eksperimentene og den stalinistiske innstrammingen (pedologien ble forbudt i 1936), og velferdsstater som så barns helse og utvikling som et offentlig ansvar. Psykologien ble profesjon.
          `,
          skole: `
            Barnevern, skolepsykologi og rådgivning, tester for skolemodenhet og spesialundervisning. Utviklingspsykologien ble et fag i lærerutdanningen, og ideen om at undervisningen skal tilpasses barnets utviklingstrinn, ble en del av læreplanspråket, også i den norske Normalplanen (1939).
          `,
          kilder: [snl("https://snl.no/Jean_Piaget"), snl("https://snl.no/Lev_Vygotskij"), snl("https://snl.no/Charlotte_Berta_B%C3%BChler"), BURMAN],
        },
      },
      "Den kognitive vendingen": {
        main: {
          era: "ca. 1956–1975", activeFrom: 1956, activeTo: 1980,
          description: `
            Den kognitive vendingen brøt med behaviorismens forbud mot å studere det indre. Et symposium om informasjonsteori ved MIT i september 1956, der Newell og Simon, Chomsky og George A. Miller la fram arbeider, er blitt stående som fødselsdagen for kognitiv vitenskap. Miller viste grensene for arbeidshukommelsen («The Magical Number Seven», 1956), Bruner, Goodnow og Austin studerte begrepsdannelse som strategier (*A Study of Thinking*, 1956), og Chomskys anmeldelse av Skinners *Verbal Behavior* (1959) hevdet at språket ikke kan forklares med forsterkning. Datamaskinen ble den nye modellen for sinnet.

            For skolen ble Jerome Bruners *The Process of Education* (1960) programskriftet: undervisningen skal formidle fagenes struktur, bygge på oppdagelse og følge en spiralplan, og «ethvert fag kan undervises på en intellektuelt redelig måte til ethvert barn på ethvert utviklingstrinn». David Ausubel svarte med læren om meningsfull mottakelseslæring og forberedende organisatorer (*advance organizers*): det viktigste for læring er hva eleven allerede vet. Piaget ble oversatt og lest i USA i samme periode.

            Vendingen ga de store læreplanprosjektene i naturfag og matematikk («new math») og begrepet om stillasbygging (Wood, Bruner og Ross 1976). Kritikken kom senere fra Bruner selv, som i 1980- og 1990-årene vendte seg mot informasjonsbehandlingsmodellen og krevde en kulturell psykologi.
          `,
          samfunn: `
            Den kalde krigen, datamaskinen og romkappløpet. Sputnik (1957) førte til National Defense Education Act (1958) og en mobilisering av forskere til skolereform i USA. Kybernetikk og informasjonsteori ga nye modeller for mennesket.
          `,
          skole: `
            Fagdidaktiske læreplanprosjekter (PSSC-fysikk fra 1956, ny matematikk), oppdagende læring og fagenes struktur i undervisningen. Samfunnsfagsprosjektet MACOS ble en politisk strid i 1970-årene. Kognitiv psykologi ble grunnlaget for ny forskning på lesing, hukommelse og problemløsning.
          `,
          kilder: [snl("https://snl.no/kognitiv_psykologi"), sep("https://plato.stanford.edu/entries/cognitive-science/"), snl("https://snl.no/Jerome_S._Bruner"), BRUNER60],
        },
      },
      "Konstruktivismen": {
        main: {
          era: "ca. 1970–1995", activeFrom: 1970, activeTo: 2000,
          description: `
            Konstruktivismen er tanken om at kunnskap ikke overføres, men konstrueres av den som lærer, på grunnlag av det hun allerede vet. Den bygger på Piagets genetiske epistemologi og ble i 1970- og 1980-årene en hovedretning i fagdidaktikken. Naturfag- og matematikkdidaktikere viste at elever kommer til undervisningen med egne forestillinger om kraft, varme, tall og liv, «alternative oppfatninger», som er robuste og rimelige, og som undervisningen må utfordre for å oppnå begrepsendring. Rosalind Driver (*The Pupil as Scientist?*, 1983) ble en ledende stemme.

            Begrepet dekket svært ulike posisjoner. Ernst von Glasersfelds radikale konstruktivisme er en erkjennelsesteori der kunnskap ikke avbilder virkeligheten, men er det som fungerer for den som vet. Seymour Paperts konstruksjonisme gjorde læring til å bygge noe, med programmeringsspråket Logo (*Mindstorms*, 1980). Sosialkonstruktivister la vekt på dialog og felles meningsskaping. D.C. Phillips beskrev i 1995 «konstruktivismens mange ansikter».

            I Norge ble konstruktivismen grunnlaget for naturfagdidaktikken (Svein Sjøberg) og preget L97. Kritikken har pekt på at en erkjennelsesteori ikke gir noen bestemt undervisningsmetode, at relativismen er problematisk, og at minimal veiledning lærer nybegynnere lite (Kirschner, Sweller og Clark 2006).
          `,
          samfunn: `
            En tid med vitenskapskritikk, postmoderne relativisme og en ny interesse for den lærendes perspektiv. Datamaskinen kom inn i skolen, og fagdidaktikk ble et eget forskningsfelt med internasjonale nettverk.
          `,
          skole: `
            Elevsentrert naturfag- og matematikkundervisning, forsøk, samtale og elevenes egne forklaringer. I USA førte NCTM-standardene (1989) til «matematikkrigene». I Norge kom naturfagdidaktikken inn i lærerutdanningen, og L97 vektla elevenes aktive kunnskapsbygging.
          `,
          kilder: [snl("https://snl.no/l%C3%A6ringsteori"), snl("https://snl.no/Svein_Sj%C3%B8berg"), snl("https://snl.no/Logo_-_programmeringsspr%C3%A5k"), PHILLIPS],
        },
      },
      "Sosiokulturell teori": {
        main: {
          era: "ca. 1985–2010", activeFrom: 1985, activeTo: 2015,
          description: `
            Sosiokulturell teori flytter læringen fra individets hode til samhandling, redskaper og praksisfellesskap. Den bygger på Vygotskij, som ble oversatt og tolket i vest fra 1960- og særlig 1978 (*Mind in Society*), på James Wertschs arbeid om tegn og stemmer, på aktivitetsteorien (Yrjö Engeström) og på antropologiske studier av læring i hverdagslivet. Jean Lave og Etienne Wenger beskrev i *Situated Learning* (1991) læring som legitim perifer deltakelse, en bevegelse fra utkanten mot sentrum i et praksisfellesskap, med lærlingskap blant skreddere og jordmødre som eksempler. Barbara Rogoff skrev om læring som veiledet deltakelse på tvers av kulturer.

            I Skandinavia fikk perspektivet en særlig sterk stilling. Roger Säljös *Lärande i praktiken* (2000) ble standardverket, og Olga Dysthe gjorde Bakhtins flerstemmighet og Vygotskijs tanker til en klasseromspedagogikk der skriving og samtale er redskaper for å lære (*Det flerstemmige klasserommet*, 1995). Mesterlære ble tatt opp igjen som læringsform.

            Kritikken har gått på at teorien sier mye om deltakelse, men lite om hva den enkelte lærer og hvordan kunnskap kan overføres, og at begreper som «praksisfellesskap» er blitt brukt så vidt at de mister skarphet.
          `,
          samfunn: `
            Overgangen til et kunnskaps- og nettverkssamfunn, informasjonsteknologi og en kultur der kunnskap ble sett som distribuert og situert. Antropologi, lingvistikk og kulturpsykologi fikk ny innflytelse i pedagogikken.
          `,
          skole: `
            Samarbeidslæring, dialog, skriving for å lære og prosessorientert skriving, og digitale samarbeidsmiljøer. I Norge preget perspektivet lærerutdanningen og forskningen på klasseromsdialog og vurdering for læring.
          `,
          kilder: [snl("https://snl.no/l%C3%A6ringsfellesskap"), snl("https://snl.no/Lev_Vygotskij"), snl("https://snl.no/mesterl%C3%A6re"), LAVEWENGER, SALJO, DYSTHE],
        },
      },
      "Dybdelæring": {
        main: {
          era: "2010-tallet–", activeFrom: 2010, activeTo: null,
          description: `
            Dybdelæring betegner læring der eleven knytter ny kunnskap til det hun kan fra før, ser sammenhenger i et fagområde og kan bruke kunnskapen i nye situasjoner. Begrepet har en lang forhistorie: Ference Marton og Roger Säljö skilte i 1976 mellom dyp og overflatisk tilnærming til læring, og læringsforskningen (R. Keith Sawyers *Cambridge Handbook of the Learning Sciences*, 2006) samlet kognitiv og sosiokulturell forskning om forståelse. National Research Council definerte *deeper learning* i 2012 som prosessen der kunnskap blir overførbar, og koblet den til «det 21. århundrets ferdigheter».

            I Norge ble begrepet bærende i Ludvigsen-utvalgets utredninger (NOU 2014: 7 og NOU 2015: 8), i stortingsmeldingen *Fag – Fordypning – Forståelse* (2016) og i fagfornyelsen. Overordnet del av læreplanverket (2017) og LK20 har dybdelæring, kjerneelementer i fagene og tre tverrfaglige temaer som organiserende ideer, med færre kompetansemål for å gi tid til fordypning.

            Kritikerne har pekt på at dybdelæring betyr ulike ting i ulike tradisjoner, at OECD og kompetansebegrepet har formet den norske versjonen sterkt, og at det er uklart hvordan dybde skal vurderes. Tilhengerne ser begrepet som en samling av det beste fra læringsforskningen.
          `,
          samfunn: `
            Digitalisering, et arbeidsliv i rask endring og en internasjonal diskurs om kompetanser for framtiden, med OECD (DeSeCo, Education 2030) som sentral aktør. Skolen skulle forberede for problemer som ennå ikke finnes.
          `,
          skole: `
            Fagfornyelsen (LK20) med kjerneelementer, tverrfaglige temaer og vekt på forståelse, utforsking og refleksjon over egen læring. Lærere fikk mer ansvar for å velge innhold, og vurderingspraksisen ble utfordret av kravet om å måle forståelse, ikke bare kunnskap.
          `,
          kilder: [snl("https://snl.no/dybdel%C3%A6ring"), NOU2015, NRC2012, MARTON],
        },
      },
    },
  },

  edgeDescriptions: {
    eksperimentell__utviklingspsyk: {
      description: `
        Utviklingspsykologien vokste ut av de eksperimentelle pedagogenes laboratorier og tester. Piaget arbeidet med Binet-Simon-testene i Paris før han begynte i Genève, og ble interessert i feilene barna gjorde, ikke i skårene. Fra den eksperimentelle tradisjonen arvet utviklingspsykologien metodekravet, men byttet ut målingen av evner med studiet av hvordan tenkningen er bygd opp.
      `,
      kilder: [snl("https://snl.no/Jean_Piaget")],
    },
    utviklingspsyk__kognitiv: {
      description: `
        Den kognitive vendingen i USA tok opp utviklingspsykologien. Piaget ble oversatt og presentert (Flavell 1963), og Bruner bygde sin teori om fremstillingsformer, handlingsmessig, billedlig og symbolsk, på Piaget og senere på Vygotskij. Utviklingspsykologien ga kognitivismen et utviklingsperspektiv, mens den kognitive psykologien ga utviklingsforskningen nye metoder og modeller.
      `,
    },
    // Motreaksjon.
    behaviorisme__kognitiv: {
      description: `
        Den kognitive vendingen definerte seg mot behaviorismen. Chomskys anmeldelse av Skinners *Verbal Behavior* (1959) hevdet at språket ikke kan forklares med forsterkning og imitasjon, og Miller, Galanter og Pribram (*Plans and the Structure of Behavior*, 1960) erstattet stimulus og respons med planer og tilbakekobling. Sinnet, som behaviorismen hadde forbudt, ble igjen psykologiens hovedtema.
      `,
      kilder: [sep("https://plato.stanford.edu/entries/behaviorism/")],
    },
    kognitiv__konstruktivisme: {
      description: `
        Konstruktivismen tok opp den kognitive psykologiens interesse for begreper og forkunnskaper, men gjorde den til en kunnskapsteori: kunnskap er ikke representasjoner av en ytre verden som overføres, men konstruksjoner hos den som lærer. Ausubels regel om forkunnskapene og Bruners oppdagende læring ble grunnlaget for forskningen på elevers alternative oppfatninger og begrepsendring.
      `,
    },
    konstruktivisme__sosiokulturell: {
      description: `
        Sosiokulturell teori vokste fram som en kritikk og videreføring av konstruktivismen: det er ikke bare individet som konstruerer kunnskap, men fellesskap, redskaper og kultur. Sosialkonstruktivistene var et mellomledd, og på 1990-tallet ble skillet mellom «individuell» og «sosial» konstruktivisme et hovedtema i debatten om hvordan læring skal forstås.
      `,
    },
    utviklingspsyk__sosiokulturell: {
      description: `
        Sosiokulturell teori bygger direkte på Vygotskijs kulturhistoriske psykologi: tenkning formidles av tegn og redskaper, oppstår først mellom mennesker og blir siden individuell, og læring skjer i den nærmeste utviklingssonen. Den vestlige gjenoppdagelsen av Vygotskij fra 1978 ga teorien både begreper og en lang tradisjon å vise til.
      `,
      kilder: [snl("https://snl.no/Lev_Vygotskij")],
    },
    sosiokulturell__dybdelaering: {
      description: `
        Dybdelæringsbegrepet har tatt med seg den sosiokulturelle vekten på samtale, samarbeid og deltakelse: forståelse utvikles i faglige fellesskap der elevene forklarer, argumenterer og bruker fagets redskaper. Ludvigsen-utvalget, ledet av en sosiokulturelt orientert forsker, knyttet dybdelæring til både individuell forståelse og deltakelse i fagenes praksiser.
      `,
      kilder: [NOU2015],
    },
    kognitiv__dybdelaering: {
      description: `
        Fra kognitiv psykologi henter dybdelæringen tanken om at kunnskap må organiseres i sammenhengende strukturer for å kunne brukes i nye situasjoner, og at forkunnskaper avgjør hva man lærer. Forskningen på eksperter og nybegynnere, overføring og arbeidshukommelse ligger til grunn for National Research Councils definisjon av *deeper learning* (2012).
      `,
      kilder: [NRC2012],
    },
  },

  artists: [
    // --- Utviklingspsykologien ---------------------------------------------
    {
      name: "Jean Piaget", birthYear: 1896, deathYear: 1980, gender: "mann",
      metaGenre: R, instrument: "Psykolog", instrument2: "Filosof", mainGenre: ["Utviklingspsykologien", "Konstruktivismen"],
      subGenre: ["Utviklingstrinn", "Kunnskap som konstruksjon"],
      influenceStart: 1921, influenceEnd: 1980, geography: "Genève",
      description: `
        Sveitsisk psykolog og filosof. Etter en doktorgrad i biologi arbeidet han med intelligensprøver i Paris og ble interessert i barnas feil, og fra 1921 forsket han ved Institut Jean-Jacques Rousseau i Genève. Han ledet Det internasjonale utdanningsbyrået (1929–1968) og grunnla et senter for genetisk epistemologi (1955). Teorien beskriver hvordan tenkningen utvikles gjennom assimilasjon og akkomodasjon mot likevekt, i fire stadier fra det sensomotoriske til det formal-operasjonelle.

        Piaget ville forklare hvordan kunnskap blir til, ikke lage en pedagogikk, men han ble den viktigste psykologen for skolen i det tjuende århundret og grunnlaget for konstruktivismen. Kritikken har pekt på at han undervurderte små barns kompetanse og overså kultur og undervisning.
      `,
      keyWorks: [
        { title: "Le langage et la pensée chez l'enfant", year: 1923 },
        { title: "Le jugement moral chez l'enfant", year: 1932 },
        { title: "La naissance de l'intelligence chez l'enfant", year: 1936 },
        { title: "La psychologie de l'intelligence", year: 1947 },
      ],
      kilder: [snl("https://snl.no/Jean_Piaget")],
    },
    {
      name: "Lev Vygotskij", birthYear: 1896, deathYear: 1934, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Utviklingspsykologien", "Sosiokulturell teori"],
      subGenre: ["Den nærmeste utviklingssonen", "Læring som deltakelse"],
      influenceStart: 1924, influenceEnd: 1934, geography: "Moskva",
      description: `
        Russisk-jødisk psykolog og grunnleggeren av den kulturhistoriske psykologien. På ti år, fra han kom til Psykologisk institutt i Moskva i 1924 til han døde av tuberkulose i 1934, skrev han om pedagogisk psykologi, defektologi (spesialpedagogikk), kunst og metodologi. Høyere mentale funksjoner er kulturelle: de formidles av tegn, særlig språket, og oppstår først mellom mennesker før de blir indre. Den nærmeste utviklingssonen er avstanden mellom det barnet kan alene og det det kan med hjelp, og god undervisning går foran utviklingen.

        Verket ble undertrykt etter pedologiforbudet i 1936. Den vestlige resepsjonen fra *Thought and Language* (1962) og *Mind in Society* (1978) gjorde ham til grunnlaget for sosiokulturell teori, og nyere forskning har revidert mye av denne lesningen.
      `,
      keyWorks: [
        { title: "Pedagogitsjeskaja psikhologija", year: 1926 },
        { title: "Mysjlenije i retsj (Tenkning og tale)", year: 1934 },
      ],
      kilder: [snl("https://snl.no/Lev_Vygotskij")],
    },
    {
      name: "Charlotte Bühler", birthYear: 1893, deathYear: 1974, gender: "kvinne",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Utviklingspsykologien"],
      subGenre: ["Utviklingstrinn"],
      influenceStart: 1921, influenceEnd: 1974, geography: "Wien, Trondheim og USA",
      description: `
        Tysk-amerikansk psykolog, professor ved universitetet i Wien (1929–1938), der hun med Karl Bühler gjorde Det psykologiske instituttet til et internasjonalt senter for barne- og ungdomspsykologi. Hun brukte dagbøker, systematisk observasjon og standardiserte småbarnstester, og så utviklingen som et livsløp med mål og vendepunkter (*Kindheit und Jugend*, 1928; *Der menschliche Lebenslauf als psychologisches Problem*, 1933). Etter nazistenes overtakelse av Østerrike var hun konstituert professor i pedagogikk ved Norges lærerhøgskole i Trondheim (1939–1940) før hun reiste til USA, der hun ble en av grunnleggerne av humanistisk psykologi. *Fra barndom til alderdom* kom på norsk i 1938.
      `,
      keyWorks: [
        { title: "Kindheit und Jugend", year: 1928 },
        { title: "Der menschliche Lebenslauf als psychologisches Problem", year: 1933 },
      ],
      kilder: [snl("https://snl.no/Charlotte_Berta_B%C3%BChler")],
    },
    {
      name: "Arnold Gesell", birthYear: 1880, deathYear: 1961, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Utviklingspsykologien"],
      subGenre: ["Utviklingstrinn"],
      influenceStart: 1911, influenceEnd: 1961, geography: "Yale, New Haven",
      description: `
        Amerikansk psykolog og barnelege, leder for Yale Clinic of Child Development. Med film, fotografi og enveisspeil kartla han normale utviklingstrinn hos tusenvis av barn og formulerte en modningsteori: utviklingen følger en indre plan, og læring må vente til barnet er modent for den. Normene hans, populært formidlet i *Infant and Child in the Culture of Today* (1943, med Frances Ilg), preget foreldreråd, barneleger og skolestartalder i flere tiår. Kritikken har pekt på at normene bygde på et smalt utvalg hvite middelklassebarn, og at modningsbegrepet undervurderte miljø og læring.
      `,
      keyWorks: [{ title: "Infant and Child in the Culture of Today", year: 1943 }],
      kilder: [bok("Gesell, Arnold og Frances L. Ilg. Infant and Child in the Culture of Today. Harper, 1943."), BURMAN],
    },
    {
      name: "Åse Gruda Skard", birthYear: 1905, deathYear: 1985, gender: "kvinne",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Utviklingspsykologien"],
      subGenre: ["Utviklingstrinn", "Frihet i oppdragelsen"],
      influenceStart: 1935, influenceEnd: 1985, geography: "Oslo",
      description: `
        Norsk psykolog og pioner for moderne barneoppdragelse i Norge, dosent i psykologi ved Universitetet i Oslo (1947–1973) og mangeårig redaktør av *Norsk Pedagogisk Tidsskrift*. Mer enn noen annen gjorde hun barndommen til et faglig og politisk tema gjennom bøker, artikler, foredrag og offentlige verv. Hun understreket barns behov for trygghet og voksne som tar ansvar, og for regler som både barn og voksne må følge, og hevdet samtidig at oppdragelse til demokrati bare kan skje på en ikke-autoritær og demokratisk måte. Bøkene hennes ble oversatt til mange språk, og arbeidet hennes med anvendt psykologi og mental helse ga henne internasjonal anerkjennelse.
      `,
      kilder: [snl("https://snl.no/%C3%85se_Gruda_Skard")],
    },

    // --- Den kognitive vendingen -------------------------------------------
    {
      name: "Jerome Bruner", birthYear: 1915, deathYear: 2016, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Den kognitive vendingen", "Sosiokulturell teori"],
      subGenre: ["Spiralprinsippet", "Stillasbygging", "Undersøkende læring"],
      influenceStart: 1956, influenceEnd: 2016, geography: "Harvard, Oxford og New York",
      description: `
        Amerikansk psykolog, professor ved Harvard (1952–1972) og Oxford (1972–1980), og en av pionerene for den kognitive vendingen. *A Study of Thinking* (1956) og senteret for kognitive studier han grunnla med George A. Miller (1960) gjorde tenkning til forskningsobjekt. *The Process of Education* (1960) ga skolen fagenes struktur, oppdagende læring og spiralplanen, og *Toward a Theory of Instruction* (1966) skilte mellom handlingsmessige, billedlige og symbolske fremstillingsformer. Med Wood og Ross innførte han begrepet stillasbygging (1976).

        I 1980- og 1990-årene ble han en kritiker av informasjonsbehandlingsmodellen og en talsmann for en kulturell psykologi og narrativ tenkning (*Acts of Meaning*, 1990; *The Culture of Education*, 1996), og han var en viktig samtalepartner for Reggio Emilia.
      `,
      keyWorks: [
        { title: "A Study of Thinking", year: 1956 },
        { title: "The Process of Education", year: 1960 },
        { title: "Toward a Theory of Instruction", year: 1966 },
        { title: "Acts of Meaning", year: 1990 },
        { title: "The Culture of Education", year: 1996 },
      ],
      kilder: [snl("https://snl.no/Jerome_S._Bruner"), BRUNER60],
    },
    {
      name: "David P. Ausubel", birthYear: 1918, deathYear: 2008, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Den kognitive vendingen"],
      subGenre: ["Forkunnskaper som grunnlag"],
      influenceStart: 1960, influenceEnd: 2008, geography: "USA",
      description: `
        Amerikansk psykolog og psykiater. *The Psychology of Meaningful Verbal Learning* (1963) og *Educational Psychology: A Cognitive View* (1968) skiller mellom meningsfull læring, der det nye knyttes til begreper eleven allerede har, og pugg. Mot Bruners oppdagende læring forsvarte han en godt strukturert mottakelseslæring: forberedende organisatorer (*advance organizers*) skal gi eleven et begrepsmessig stillas før det nye stoffet. Mottoet i 1968-boka, at den viktigste enkeltfaktoren for læring er hva eleven allerede vet, er blitt en av pedagogikkens mest siterte setninger.
      `,
      keyWorks: [
        { title: "The Psychology of Meaningful Verbal Learning", year: 1963 },
        { title: "Educational Psychology: A Cognitive View", year: 1968 },
      ],
      kilder: [bok("Ausubel, David P. Educational Psychology: A Cognitive View. Holt, Rinehart and Winston, 1968.")],
    },
    {
      name: "George A. Miller", birthYear: 1920, deathYear: 2012, gender: "mann",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Den kognitive vendingen"],
      subGenre: ["Forkunnskaper som grunnlag"],
      influenceStart: 1956, influenceEnd: 2012, geography: "Harvard og Princeton",
      description: `
        Amerikansk psykolog og en av grunnleggerne av kognitiv psykologi. «The Magical Number Seven, Plus or Minus Two» (1956) viste at arbeidshukommelsen bare kan holde et begrenset antall enheter, og at vi omgår grensen ved å gruppere informasjon i større «biter». Med Bruner grunnla han Center for Cognitive Studies ved Harvard (1960), og med Galanter og Pribram erstattet han stimulus og respons med planer og tilbakekobling (*Plans and the Structure of Behavior*, 1960). Arbeidshukommelsens grenser er siden blitt et grunnlag for forskningen om kognitiv belastning i undervisning.
      `,
      keyWorks: [
        { title: "The Magical Number Seven, Plus or Minus Two", year: 1956 },
        { title: "Plans and the Structure of Behavior", year: 1960 },
      ],
      kilder: [snl("https://snl.no/George_Armitage_Miller"), sep("https://plato.stanford.edu/entries/cognitive-science/")],
    },
    {
      name: "Noam Chomsky", birthYear: 1928, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Den kognitive vendingen"],
      subGenre: ["Kunnskap som konstruksjon"],
      influenceStart: 1957, geography: "MIT, Cambridge, Massachusetts",
      description: `
        Amerikansk språkforsker og politisk aktivist. *Syntactic Structures* (1957) og anmeldelsen av Skinners *Verbal Behavior* (1959) ble vendepunkter for den kognitive vendingen: barn lærer et uendelig språk fra et begrenset og ufullstendig materiale, og det kan ikke forklares med imitasjon og forsterkning, men forutsetter en medfødt språkevne. Argumentet om «stimulusfattigdom» gjenopplivet striden mellom empirisme og rasjonalisme om læring. Chomsky har også vært en skarp kritiker av en skole som oppdrar til lydighet og konformitet.
      `,
      keyWorks: [
        { title: "Syntactic Structures", year: 1957 },
        { title: "A Review of B.F. Skinner's Verbal Behavior", year: 1959 },
        { title: "Aspects of the Theory of Syntax", year: 1965 },
      ],
      kilder: [snl("https://snl.no/Noam_Chomsky")],
    },

    // --- Konstruktivismen --------------------------------------------------
    {
      name: "Ernst von Glasersfeld", birthYear: 1917, deathYear: 2010, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Konstruktivismen"],
      subGenre: ["Kunnskap som konstruksjon"],
      influenceStart: 1974, influenceEnd: 2010, geography: "University of Georgia",
      description: `
        Østerriksk-amerikansk filosof og psykolog, og den radikale konstruktivismens grunnlegger. Med utgangspunkt i Piaget og kybernetikken hevdet han at kunnskap ikke avbilder en virkelighet uavhengig av den som vet, men består av konstruksjoner som er levedyktige, som fungerer i erfaringen. For undervisningen betyr det at læreren ikke kan overføre kunnskap, men må forstå elevens begreper og skape situasjoner der de blir utfordret. *Radical Constructivism: A Way of Knowing and Learning* (1995) samler tenkningen. Han fikk stor innflytelse i matematikkdidaktikken, og ble kritisert for relativisme.
      `,
      keyWorks: [{ title: "Radical Constructivism: A Way of Knowing and Learning", year: 1995 }],
      kilder: [bok("Glasersfeld, Ernst von. Radical Constructivism: A Way of Knowing and Learning. Falmer Press, 1995."), PHILLIPS],
    },
    {
      name: "Seymour Papert", birthYear: 1928, deathYear: 2016, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Konstruktivismen"],
      subGenre: ["Kunnskap som konstruksjon", "Skapende arbeid"],
      influenceStart: 1967, influenceEnd: 2016, geography: "MIT, Cambridge, Massachusetts",
      description: `
        Sørafrikansk-amerikansk matematiker og datavitenskapsmann. Etter fem år hos Piaget i Genève kom han til MIT, der han ledet laboratoriet for kunstig intelligens med Marvin Minsky og var med på å lage programmeringsspråket Logo (1967), der barn styrer en «skilpadde» med kommandoer. *Mindstorms: Children, Computers, and Powerful Ideas* (1980) lanserte konstruksjonismen: barn lærer best når de bygger noe meningsfullt som kan deles og vises, og datamaskinen kan være et redskap for tenkning, ikke for drill. Papert er en stamfar for programmering i skolen og for maker-bevegelsen.
      `,
      keyWorks: [
        { title: "Mindstorms: Children, Computers, and Powerful Ideas", year: 1980 },
        { title: "The Children's Machine", year: 1993 },
      ],
      kilder: [snl("https://snl.no/Logo_-_programmeringsspr%C3%A5k")],
    },
    {
      name: "Rosalind Driver", birthYear: 1941, deathYear: 1997, gender: "kvinne",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Konstruktivismen"],
      subGenre: ["Kunnskap som konstruksjon", "Forkunnskaper som grunnlag"],
      influenceStart: 1973, influenceEnd: 1997, geography: "Leeds og London",
      description: `
        Britisk naturfagdidaktiker ved universitetet i Leeds og senere King's College London. *The Pupil as Scientist?* (1983) og *Children's Ideas in Science* (1985, med Guesne og Tiberghien) viste at elever har egne, sammenhengende forestillinger om naturfenomener som undervisningen må ta utgangspunkt i, og Children's Learning in Science Project i Leeds utviklet undervisning for begrepsendring. Driver bidro sterkt til at konstruktivismen ble hovedparadigmet i naturfagdidaktikken i 1980- og 1990-årene, også i Norden, og la senere vekt på argumentasjon og vitenskapens natur.
      `,
      keyWorks: [
        { title: "The Pupil as Scientist?", year: 1983 },
        { title: "Children's Ideas in Science", year: 1985 },
      ],
      kilder: [bok("Driver, Rosalind. The Pupil as Scientist? Open University Press, 1983.")],
    },
    {
      name: "Eleanor Duckworth", gender: "kvinne",
      metaGenre: R, instrument: "Praktiker", instrument2: "Forsker", mainGenre: ["Konstruktivismen"],
      subGenre: ["Kunnskap som konstruksjon", "Undersøkende læring"],
      influenceStart: 1964, geography: "Harvard",
      description: `
        Kanadisk-amerikansk pedagog ved Harvard, som studerte og oversatte for Piaget og Inhelder i Genève. I essaysamlingen *The Having of Wonderful Ideas* (1987) gjør hun Piagets innsikter til en undervisningspraksis: å ha «vidunderlige ideer» er kjernen i intellektuell utvikling, og lærerens oppgave er å gi elevene rike situasjoner og ta deres egne forklaringer på alvor. Metoden *critical exploration*, der læreren utforsker elevens tenkning sammen med eleven, har vært viktig for lærerutdanning og forskning på undervisning.
      `,
      keyWorks: [{ title: "The Having of Wonderful Ideas and Other Essays on Teaching and Learning", year: 1987 }],
      kilder: [bok("Duckworth, Eleanor. The Having of Wonderful Ideas and Other Essays on Teaching and Learning. Teachers College Press, 1987.")],
    },
    {
      name: "Svein Sjøberg", birthYear: 1943, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Konstruktivismen"],
      subGenre: ["Kunnskap som konstruksjon"],
      influenceStart: 1982, geography: "Oslo",
      description: `
        Norsk fysiker og pedagog, professor i naturfagdidaktikk ved Universitetet i Oslo fra 1993, og den som mer enn noen bygde opp naturfagenes didaktikk i Norge og Norden. *Naturfagenes didaktikk* (1990) og *Naturfag som allmenndannelse* (1998) bygger på konstruktivistisk læringsteori og forskning på elevers forestillinger, og knytter naturfagene til allmenndannelse og demokrati. Han har ledet internasjonale prosjekter om elevers interesser (ROSE) og vært en av de skarpeste kritikerne av PISA og testbasert styring av skolen.
      `,
      keyWorks: [
        { title: "Naturfagenes didaktikk: Fra vitenskap til skolefag", year: 1990 },
        { title: "Naturfag som allmenndannelse", year: 1998 },
      ],
      kilder: [snl("https://snl.no/Svein_Sj%C3%B8berg")],
    },

    // --- Sosiokulturell teori ----------------------------------------------
    {
      name: "Jean Lave", gender: "kvinne",
      metaGenre: R, instrument: "Sosiolog", instrument2: "Forsker", mainGenre: ["Sosiokulturell teori"],
      subGenre: ["Læring som deltakelse", "Mesterlære"],
      influenceStart: 1988, geography: "University of California, Berkeley",
      description: `
        Amerikansk sosialantropolog. Studiene av skredderlærlinger i Liberia og av hvordan mennesker regner i dagliglivet (*Cognition in Practice*, 1988) viste at kunnskap er knyttet til situasjonen og praksisen den brukes i. Med Etienne Wenger skrev hun *Situated Learning* (1991), som beskriver læring som legitim perifer deltakelse: en nykommer beveger seg fra utkanten mot sentrum av et praksisfellesskap og endrer identitet underveis. Boka har vært avgjørende for forståelsen av læring i arbeidsliv, profesjonsutdanning og mesterlære.
      `,
      keyWorks: [
        { title: "Cognition in Practice", year: 1988 },
        { title: "Situated Learning: Legitimate Peripheral Participation", year: 1991 },
      ],
      kilder: [LAVEWENGER, snl("https://snl.no/l%C3%A6ringsfellesskap")],
    },
    {
      name: "Etienne Wenger", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Sosiokulturell teori"],
      subGenre: ["Læring som deltakelse"],
      influenceStart: 1991, geography: "USA",
      description: `
        Læringsteoretiker som med Jean Lave formulerte begrepet om praksisfellesskap (1991). *Communities of Practice: Learning, Meaning, and Identity* (1998) utviklet teorien: læring er deltakelse i fellesskap med felles virksomhet, gjensidig engasjement og et felles repertoar, og identitet og mening skapes gjennom denne deltakelsen. Begrepet ble svært populært i organisasjonsutvikling og kunnskapsledelse, til dels i en forenklet form som kritikere mener mister teoriens vekt på makt og identitet.
      `,
      keyWorks: [{ title: "Communities of Practice: Learning, Meaning, and Identity", year: 1998 }],
      kilder: [LAVEWENGER, snl("https://snl.no/l%C3%A6ringsfellesskap")],
    },
    {
      name: "Barbara Rogoff", gender: "kvinne",
      metaGenre: R, instrument: "Psykolog", mainGenre: ["Sosiokulturell teori"],
      subGenre: ["Læring som deltakelse", "Stillasbygging"],
      influenceStart: 1990, geography: "University of California, Santa Cruz",
      description: `
        Amerikansk psykolog som har forsket på barns læring i et maya-samfunn i Guatemala og i amerikanske familier og skoler. *Apprenticeship in Thinking* (1990) beskriver kognitiv utvikling som veiledet deltakelse i kulturelle aktiviteter, og *The Cultural Nature of Human Development* (2003) viser hvor ulikt barn lærer i ulike kulturer, blant annet ved å observere og delta i voksnes arbeid. Rogoff har vært en viktig kritiker av å gjøre én kulturs barndom og skolemodell til en universell norm.
      `,
      keyWorks: [
        { title: "Apprenticeship in Thinking", year: 1990 },
        { title: "The Cultural Nature of Human Development", year: 2003 },
      ],
      kilder: [bok("Rogoff, Barbara. Apprenticeship in Thinking: Cognitive Development in Social Context. Oxford University Press, 1990.")],
    },
    {
      name: "Roger Säljö", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Sosiokulturell teori", "Dybdelæring"],
      subGenre: ["Læring som deltakelse", "Dyp og overflatisk tilnærming"],
      influenceStart: 1976, geography: "Göteborg",
      description: `
        Svensk pedagog og psykolog ved Göteborgs universitet. Med Ference Marton beskrev han i 1976 forskjellen mellom dyp og overflatisk tilnærming til læring. Senere ble han Skandinavias ledende sosiokulturelle læringsforsker: *Lärande i praktiken* (2000) beskriver læring som tilegnelse av kulturelle redskaper, språklige og fysiske, gjennom deltakelse i sosiale praksiser, og har vært standardlitteratur i nordisk lærerutdanning. Han har også skrevet mye om hvordan digitale redskaper endrer hva det vil si å kunne og lære.
      `,
      keyWorks: [{ title: "Lärande i praktiken: Ett sociokulturellt perspektiv", year: 2000 }],
      kilder: [SALJO, MARTON],
    },
    {
      name: "Olga Dysthe", gender: "kvinne",
      metaGenre: R, instrument: "Forsker", instrument2: "Praktiker", mainGenre: ["Sosiokulturell teori"],
      subGenre: ["Dialogisk undervisning", "Læring som deltakelse"],
      influenceStart: 1987, geography: "Bergen",
      description: `
        Norsk pedagog, professor ved Universitetet i Bergen og en av grunnleggerne av prosessorientert skrivepedagogikk i Norge. *Det flerstemmige klasserommet* (1995), bygd på studier i norske og amerikanske klasserom, forener Bakhtins dialogisme og Vygotskij: læring skjer når elevenes stemmer møtes i samtale og skriving, og læreren stiller autentiske spørsmål og tar opp elevenes svar. Dysthe har også skrevet om sosiokulturell teori, veiledning og mappevurdering i høyere utdanning, og har hatt stor innflytelse på norsk skriveopplæring og lærerutdanning.
      `,
      keyWorks: [{ title: "Det flerstemmige klasserommet", year: 1995 }],
      kilder: [DYSTHE],
    },

    // --- Dybdelæring -------------------------------------------------------
    {
      name: "Ference Marton", gender: "mann",
      metaGenre: R, instrument: "Forsker", instrument2: "Psykolog", mainGenre: ["Dybdelæring"],
      subGenre: ["Dyp og overflatisk tilnærming", "Overføring av læring"],
      influenceStart: 1976, geography: "Göteborg",
      description: `
        Ungarsk-svensk pedagog ved Göteborgs universitet. Studiene med Roger Säljö (1976) av hvordan studenter leser en tekst, skilte mellom en dyp tilnærming, der man søker meningen, og en overflatisk, der man prøver å huske, og forskjellene ga ulik læring. Marton grunnla fenomenografien, studiet av de kvalitativt ulike måtene mennesker erfarer et fenomen på, og utviklet senere variasjonsteorien: for å lære noe må man erfare variasjon i det som skal læres. Skillet mellom dyp og overflatisk læring er en av forutsetningene for dagens dybdelæringsbegrep.
      `,
      keyWorks: [{ title: "Necessary Conditions of Learning", year: 2015 }],
      kilder: [MARTON],
    },
    {
      name: "R. Keith Sawyer", gender: "mann",
      metaGenre: R, instrument: "Psykolog", instrument2: "Forsker", mainGenre: ["Dybdelæring"],
      subGenre: ["Dyp og overflatisk tilnærming"],
      influenceStart: 2006, geography: "USA",
      description: `
        Amerikansk psykolog og læringsforsker, redaktør av *The Cambridge Handbook of the Learning Sciences* (2006, senere utgaver), som samlet kognitiv, sosiokulturell og designbasert forskning i et felt kalt *learning sciences*. Innledningen hans setter dybdelæring opp mot «instruksjonisme», der kunnskap ses som fakta og prosedyrer som overføres: elever lærer dypere når de knytter nye ideer til forkunnskaper, ser mønstre og prinsipper og reflekterer over egen forståelse. Ludvigsen-utvalget brukte denne forskningen i sin definisjon av dybdelæring. Sawyer har også skrevet mye om kreativitet og samarbeid.
      `,
      keyWorks: [{ title: "The Cambridge Handbook of the Learning Sciences", year: 2006 }],
      kilder: [bok("Sawyer, R. Keith (red.). The Cambridge Handbook of the Learning Sciences. Cambridge University Press, 2006."), snl("https://snl.no/dybdel%C3%A6ring")],
    },
    {
      name: "James W. Pellegrino", gender: "mann",
      metaGenre: R, instrument: "Psykolog", instrument2: "Forsker", mainGenre: ["Dybdelæring"],
      subGenre: ["Overføring av læring"],
      influenceStart: 2001, geography: "University of Illinois, Chicago",
      description: `
        Amerikansk kognitiv psykolog og vurderingsforsker. Han ledet komiteene i National Research Council som skrev *Knowing What Students Know* (2001), om vurdering bygd på læringsforskning, og *Education for Life and Work* (2012, med Margaret Hilton). Den siste definerte *deeper learning* som prosessen der kunnskap blir overførbar til nye situasjoner, og koblet det til kognitive, intrapersonlige og interpersonlige kompetanser for det 21. århundret. Rapporten ble en viktig kilde for den norske fagfornyelsen.
      `,
      keyWorks: [
        { title: "Knowing What Students Know", year: 2001 },
        { title: "Education for Life and Work", year: 2012 },
      ],
      kilder: [NRC2012],
    },
    {
      name: "Sten Ludvigsen", gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Dybdelæring"],
      subGenre: ["Dyp og overflatisk tilnærming", "Læring som deltakelse"],
      influenceStart: 2013, geography: "Universitetet i Oslo",
      description: `
        Norsk pedagog og læringsforsker ved Universitetet i Oslo, med bakgrunn i sosiokulturell forskning på læring og teknologi. Han ledet regjeringens utvalg om fremtidens skole (2013–2015), Ludvigsen-utvalget, som i NOU 2014: 7 og NOU 2015: 8 anbefalte færre og mer sammenhengende mål, dybdelæring og fire kompetanseområder: fagspesifikk kompetanse, å lære å lære, å kommunisere, samhandle og delta, og å utforske og skape. Utredningene ble grunnlaget for fagfornyelsen og LK20, og for den norske definisjonen av dybdelæring.
      `,
      kilder: [NOU2015, snl("https://snl.no/dybdel%C3%A6ring")],
    },
  ],
};
