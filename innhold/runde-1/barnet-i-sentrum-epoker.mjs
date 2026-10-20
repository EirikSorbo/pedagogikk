// Runde 1 — Barnet i sentrum: retningen, epokene og påvirkningene (fase 6, skrevet av Opus).
import { snl, sep, iep, brit, ndb, side, bok } from "../kilder.mjs";

const OELKERS = bok("Oelkers, Jürgen. Reformpädagogik. Eine kritische Dogmengeschichte. Juventa, 1989.");
const ALLEN = bok("Allen, Ann Taylor. The Transatlantic Kindergarten: Education and Women's Movements in Germany and the United States. Oxford University Press, 2017.");
const REGGIO = bok("Edwards, Carolyn, Lella Gandini og George Forman (red.). The Hundred Languages of Children: The Reggio Emilia Approach to Early Childhood Education. Ablex, 1993.");
const TROHLER = bok("Tröhler, Daniel. Pestalozzi and the Educationalization of the World. Palgrave Macmillan, 2013.");

export default {
  genreDescriptions: {
    meta: {
      "Barnet i sentrum": {
        meta: {
          description: `
            Retningen samler tradisjonen som begrunner oppdragelse ut fra barnets natur, utvikling og egenaktivitet, ikke ut fra stoffet, kirken eller samfunnets behov. Den går fra Rousseaus *Émile* (1762) gjennom filantropene, Pestalozzi og Fröbel til reformpedagogikken rundt 1900, den antiautoritære bølgen og Reggio Emilia. Felles er ideen om at barndommen har egen verdi og egne lover, og at læring skjer best gjennom sansning, lek, arbeid og frihet. Felles er også et paradoks som forskningen stadig vender tilbake til: den barnesentrerte oppdragelsen er ofte like styrt som den den kritiserer, bare med andre midler. I Norge har retningen særlig preget barnehagen, arbeidsskolen i mellomkrigstiden og idealet om elevmedvirkning.
          `,
          kilder: [
            snl("https://snl.no/reformpedagogikk"),
            OELKERS,
          ],
        },
        story: {
          body: `
            ### Naturen som norm
            Fortellingen om barnet i sentrum begynner som regel med Rousseau. *Émile* (1762) gjorde det til en pedagogisk påstand at barndommen er et eget livsstadium med egne lover, og at oppdragelsens første plikt er å la barnet være barn. Rousseau skrev ikke for skolen, men for en tenkt huslærer med ett barn, og naturen hans er en norm, ikke en beskrivelse. Likevel ble boka lest som et program, først av de tyske filantropene, som gjorde naturlig oppdragelse til institusjoner med lek, kroppsøving og saklig undervisning, og av opplysningsfolk i Storbritannia som Maria Edgeworth, som gjorde den om til systematisk observasjon av barn. Allerede i 1792 viste Mary Wollstonecraft hvordan «naturen» i Rousseaus tekst fungerte som begrunnelse for å holde jentene nede.

            ### Fra sansning til metode
            Pestalozzi forsøkte å oppdra sin egen sønn etter *Émile* og erfarte hvor langt boka lå fra hverdagen. Hans svar var anskuelsen: all erkjennelse begynner i sansningen, og undervisningen skal gå fra det konkrete til begrepet i ordnede trinn. Med Pestalozzi flyttet retningen inn i folkeskolen. Lærere fra hele Europa besøkte Yverdon, Prøyssen bygde sin lærerutdanning på metoden, og i England og USA ble den til «object lessons». Her ser vi et mønster som går igjen i hele retningens historie: et prinsipp om barnets aktivitet blir til en metode, og metoden blir til en rutine som de neste reformatorene angriper.

            ### Leken og kvinnene
            Fröbel gjorde leken til kjernen i oppdragelsen av de minste og ga den en egen institusjon, barnehagen (1837–1840). Barnehagebevegelsen ble båret av kvinner, fra Bertha von Marenholtz-Bülow i Europa til Elizabeth Peabody og Susan Blow i USA, og ble en av de første veiene for borgerlige kvinner inn i et offentlig yrke. Den var også et sosialt prosjekt: barnehagen skulle gi barn i byene en oppvekst familien ikke lenger kunne gi. I Norden ble barnehagen likevel lenge stående i skyggen av barneasylene og fikk først en stor utbygging etter 1970.

            ### Barnets århundre
            Rundt 1900 ble retningen en internasjonal bevegelse. Ellen Key kalte det nye hundreåret barnets, og reformpedagogene ville bygge skolen «ut fra barnet»: Montessori med sitt forberedte miljø, Kerschensteiner med arbeidsskolen, Steiner med en kunstnerisk skole og mange andre. I Norge førte Anna Sethne arbeidsskolen inn på Sagene og videre inn i Normalplanen av 1939. Jürgen Oelkers har vist at mye av det som ble presentert som nytt, var gamle ideer i ny drakt, og at bevegelsen rommet både demokratiske, nasjonalistiske og rasehygieniske strømninger. Reformpedagogikken er derfor ikke bare en forløper for dagens skole, men også et eksempel på hvor lett «barnet» blir en tom figur som kan fylles med ulike politiske mål.

            ### Frihet og lytting
            Etter krigen radikaliserte A.S. Neill og 1968-generasjonen frihetstanken: barn som slipper ytre tvang, blir lykkelige og selvstendige, og skolens regler skal lages av elever og lærere sammen. I Norge ble Forsøksgymnaset i Oslo (1967) uttrykket for denne bølgen. Samtidig vokste det i Reggio Emilia fram en pedagogikk som tok vare på barnets aktivitet uten å gjøre den til et motstykke til voksen styring: barn og voksne utforsker sammen, og pedagogisk dokumentasjon gjør læringen synlig og diskuterbar. Gjennom Gunilla Dahlberg og andre ble Reggio en del av den nordiske barnehageforskningen, og begrepene finnes i dag i den norske rammeplanen.

            ### En retning med indre spenninger
            Barnet i sentrum er dermed ikke én lære, men en tradisjon med faste spenninger: mellom natur og oppdragelse, frihet og struktur, individ og fellesskap, og mellom å verne barndommen og å forberede barnet på samfunnet. De samme spenningene preger dagens debatter om lek og læring i barnehagen, om elevmedvirkning og om hvor mye skolen skal bygge på elevenes interesser.
          `,
        },
      },
    },

    main: {
      "Naturalismen": {
        main: {
          description: `
            Naturalismen i pedagogikken betegner tanken om at oppdragelsen skal følge naturens orden i barnets utvikling, og den knyttes framfor alt til Rousseaus *Émile* (1762). Rousseau skiller mellom tre lærere: naturen, menneskene og tingene. Bare de to siste kan vi styre, og de må innrettes etter den første. Derfor skal barnet lære gjennom sansene og av tingenes motstand, ikke gjennom ord, bøker og autoritet, og det skal få være barn før det blir voksent. Oppdrageren skal i de første årene drive «negativ oppdragelse»: skjerme barnet mot for tidlig moral, fornuftsresonnementer og sosial sammenligning.

            Naturen er her ikke en beskrivelse av hvordan barn er, men en målestokk for kritikk av samfunnet. Det gjør naturalismen tvetydig. Den frigjør barndommen fra å være en ufullkommen voksenalder, men frihetene er nøye regissert av en lærer som ser alt, og den gir jenter en annen og underordnet natur. Forskningen har diskutert om Rousseau «oppdaget» barndommen, slik det ofte sies, eller om han ga en ny form til ideer som allerede fantes hos Locke og i opplysningstidens medisin og familieliv. Uansett ble *Émile* det mest siterte pedagogiske skriftet i hundreåret etter, og naturalismens begreper om utvikling, egenaktivitet og barndommens egenverdi lever videre i alle senere barnesentrerte retninger.
          `,
          activeFrom: 1762,
          activeTo: 1800,
          era: "1762–ca. 1800",
          samfunn: `
            Opplysningstiden nådde sitt høydepunkt under eneveldet i Frankrike. En ny borgerlig familie med kjærlighet mellom foreldre og barn ble et ideal, og bokmarkedet for pedagogiske skrifter vokste raskt. Rousseau angrep luksus, forfinelse og avhengigheten av andres anerkjennelse, og oppfordret mødre til selv å amme barna sine. Det ble et motetrekk blant eliten. *Émile* ble dømt av parlamentet i Paris og brent i Genève i 1762, samme år som *Samfunnspakten* kom ut, og Rousseau måtte flykte.
          `,
          skole: `
            Naturalismen var en teori om privat oppdragelse, ikke en skolereform. Skolene var latinskoler og jesuittkollegier, men jesuittene ble utvist fra Frankrike i 1764, og det startet en debatt om nasjonal oppdragelse som Rousseau selv deltok i med forslaget til Polen (1772). Gjennom filantropene og Pestalozzi kom naturalismens ideer inn i skolen: sansning før ord, kroppsøving, lek og mindre pugg. For jentene ble resultatet ofte en oppdragelse til hjemmet, noe Wollstonecraft angrep.
          `,
          kilder: [
            snl("https://snl.no/Jean-Jacques_Rousseau", "Lars Fredrik Händler Svendsen og Trude Kolderup"),
            sep("https://plato.stanford.edu/entries/rousseau/", "Christopher Bertram"),
            iep("https://iep.utm.edu/rousseau/"),
          ],
        },
      },

      "Filantropismen": {
        main: {
          description: `
            Filantropismen var en tysk reformbevegelse i siste del av 1700-tallet som gjorde opplysningstidens og Rousseaus ideer om til skoler, lærebøker og en egen pedagogisk offentlighet. Navnet kommer av Basedows Philanthropinum i Dessau (1774), «menneskevennenes skole», og av tanken om at oppdragelsen skal gjøre mennesket lykkelig og nyttig for fellesskapet. Bevegelsen la vekt på kunnskap om verden (realia), levende språk lært gjennom samtale, kroppsøving og håndarbeid, lek og spill i undervisningen, religiøs toleranse og en oppdragelse uten fysisk avstraffelse.

            Den første generasjonen av filantroper var også de første som forsøkte å gjøre pedagogikk til et fag. Ernst Christian Trapp fikk det første professoratet i Halle i 1779, og Campes *Allgemeine Revision* (1785–1792) samlet bevegelsens teori i seksten bind. Kant støttet Philanthropinum og brukte Basedows lærebok når han foreleste i pedagogikk i Königsberg. Bevegelsen ble kritisert allerede av samtiden for overfladisk nyttetenkning, og i 1808 satte F.I. Niethammer opp motsetningen mellom «filantropinisme» og «humanisme» som ble utgangspunkt for nyhumanismen. I dag leses filantropene som et tidlig forsøk på empirisk og eksperimentell skolereform, og som opphavet til moderne kroppsøving, barnelitteratur og pedagogiske tidsskrifter.
          `,
          activeFrom: 1768,
          activeTo: 1800,
          era: "ca. 1770–1800",
          samfunn: `
            De tyske småstatene ble styrt av opplyste eneveldige fyrster som ville ha nyttige undersåtter og effektiv forvaltning. Anhalt-Dessau var et mønstereksempel, med hageriket i Wörlitz og støtte til skolereformer. Et borgerlig publikum leste tidsskrifter og møttes i leseselskaper, og «menneskekjærlighet» ble en dyd for en ny klasse som ville bruke kunnskap til å forbedre samfunnet.
          `,
          skole: `
            Philanthropinum og søsterskolene, blant dem Schnepfenthal (1784), var kostskoler for velstående familier. Den offentlige eksamenen i Dessau i 1776 gjorde skolen til et nasjonalt skue. Filantropene skrev lærebøker og barnebøker, startet tidsskrifter og utdannet lærere. I Danmark-Norge preget lignende ideer godseiernes mønsterskoler og den store skolekommisjonen fra 1789, som forberedte de danske skolelovene i 1814.
          `,
          kilder: [
            snl("https://snl.no/filantropisme", "Mariann Solberg"),
            snl("https://snl.no/Johann_Bernhard_Basedow"),
            ndb("https://www.deutsche-biographie.de/sfz82869.html", "Hanno Schmitt"),
          ],
        },
      },

      "Anskuelsespedagogikken": {
        main: {
          description: `
            Anskuelsespedagogikken bygger på Pestalozzis påstand om at anskuelsen, den umiddelbare sanseerfaringen, er grunnlaget for all erkjennelse. Undervisningen skal derfor føre barnet fra uklare inntrykk til klare begreper gjennom ordnede trinn, med tall, form og språk som de tre elementene. I *Wie Gertrud ihre Kinder lehrt* (1801) beskriver Pestalozzi metoden som et «ABC» for anskuelsen, og i Burgdorf og Yverdon prøvde han den ut med lærere som senere spredte den over hele Europa.

            Begrepet er filosofisk tungt. *Anschauung* hos Kant betyr den formen erkjennelsen gis til oss gjennom, og hos Pestalozzi glir betydningen mellom sansning, innsikt og moralsk erfaring i familien og hjemmet. Når metoden ble eksportert, ble den ofte redusert til enkle leksjoner om gjenstander og egenskaper, i England og USA som «object lessons» og i norske skoler som anskuelsesundervisning med veggplansjer. Forskningen har derfor skilt mellom Pestalozzi som sosialreformator og antropolog og den «pestalozzianismen» som ble en del av statlig lærerutdanning. Daniel Tröhler har vist hvordan Pestalozzi ble en myte som stater og reformatorer brukte til å legitimere svært ulike prosjekter. Anskuelsesprinsippet ble likevel et av de mest varige elementene i europeisk didaktikk.
          `,
          activeFrom: 1781,
          activeTo: 1880,
          era: "ca. 1780–1880",
          samfunn: `
            Revolusjonstiden og Napoleonskrigene satte Europa i bevegelse. Den helvetiske republikken (1798–1803) støttet Pestalozzi som et ledd i å bygge en moderne stat, og etter nederlaget i 1806 gjorde prøyssiske reformatorer folkeoppdragelse til et nasjonalt prosjekt; Fichte trakk fram Pestalozzi i sine taler til den tyske nasjon. Samtidig skapte hjemmeindustri og tidlig industrialisering fattigdom på landsbygda, som var Pestalozzis første anliggende.
          `,
          skole: `
            Metoden kom inn i folkeskolen gjennom lærerseminarene. Prøyssen sendte unge lærere til Yverdon fra 1809, England fikk sine «object lessons» gjennom Home and Colonial Society, og Oswego-bevegelsen spredte dem i USA. I Norge ble anskuelsesundervisning et eget emne i småskolen og i seminarene, og veggplansjer med bilder av dyr, yrker og landskap ble vanlige i klasserommene langt inn på 1900-tallet.
          `,
          kilder: [
            snl("https://snl.no/anskuelsesundervisning"),
            snl("https://snl.no/Johann_Heinrich_Pestalozzi", "Kaare Skagen"),
            TROHLER,
          ],
        },
      },

      "Barnehagebevegelsen": {
        main: {
          description: `
            Barnehagebevegelsen er den internasjonale bevegelsen som tok utgangspunkt i Fröbels pedagogikk og hans institusjon for barn under skolealder, som fikk navnet Kindergarten i 1840. Fröbel så leken som barnets høyeste uttrykk og utviklet et system av gaver og sysler, sanger og bevegelsesleker, der barnet skulle oppleve sammenhengen mellom seg selv, naturen og det guddommelige. Hagen var både et bilde på barnet som vokser og en faktisk del av institusjonen.

            Etter Fröbels død ble bevegelsen båret av kvinner. Bertha von Marenholtz-Bülow spredte den til Europas hovedsteder, og i USA gjorde Elizabeth Peabody og Susan Blow den til en del av den offentlige skolen. Bevegelsen programfestet at det er et samfunnsansvar å gi alle barn en god start, og den ga borgerlige kvinner et yrke og en offentlig rolle. Forskningen har vist at bevegelsen ble splittet i to retninger: en ortodoks, som holdt fast ved gavenes symbolikk, og en progressiv, som fra 1890-tallet bygde på barnestudier og fri lek. I Norden var barneasylene, som ga tilsyn til arbeiderbarn, lenge viktigere enn barnehagene, og skillet mellom omsorg og pedagogikk har preget barnehagens historie helt fram til i dag.
          `,
          activeFrom: 1837,
          activeTo: 1920,
          era: "1837–ca. 1920",
          samfunn: `
            Industrialiseringen og byveksten flyttet arbeidet ut av hjemmet, og mange barn i byene vokste opp uten tilsyn. Revolusjonsåret 1848 knyttet barnehagen til liberale og radikale miljøer, og Prøyssen forbød den i 1851. Kvinnebevegelsen gjorde barnehagen til en sak, både som tilbud til barn og som et yrke for kvinner. I USA ble barnehager brukt i arbeidet blant innvandrere og fattige i de store byene.
          `,
          skole: `
            Barnehagen var en egen institusjon før skolen, og spørsmålet var om den skulle være en del av skolen eller av omsorgen. I USA ble den en del av skolen fra St. Louis i 1873. I Tyskland vedtok riksskolekonferansen i 1920 at den skulle høre til barnevernet og være frivillig. I Norge sto barnehagen lenge under sosialforvaltningen og ble først flyttet til Kunnskapsdepartementet i 2006.
          `,
          kilder: [
            snl("https://snl.no/barnehage", "Tora Korsvold"),
            snl("https://snl.no/barnehagepedagogikk", "Tora Korsvold"),
            ALLEN,
          ],
        },
      },

      "Reformpedagogikken": {
        main: {
          description: `
            Reformpedagogikken er samlebetegnelsen for den internasjonale reformbølgen fra omkring 1890 til 1933, kjent som *Reformpädagogik*, *éducation nouvelle* og *New Education*. Felles var kritikken av den lærerstyrte «puggskolen», ofte identifisert med herbartianernes formaltrinn, og ønsket om en skole «ut fra barnet». Bevegelsen omfattet landsbykostskoler (Hermann Lietz fra 1898), arbeidsskolen (Kerschensteiner, Gaudig), kunstoppdragelse, Montessori og Decroly, steinerskolene (1919), Peter Petersens Jena-plan og Célestin Freinets skolearbeid. Ellen Keys *Barnets århundrade* (1900) ble bevegelsens manifest, og New Education Fellowship (1921) dens internasjonale nettverk.

            Forskningen har lenge skrevet bevegelsens historie slik den selv fortalte den: som et brudd med en stiv skole. Jürgen Oelkers har vist at denne «dogmehistorien» skjuler kontinuiteten bakover til Rousseau, Pestalozzi og Fröbel, og at reformpedagogikken rommet svært ulike politiske prosjekter, fra demokratisk skolereform til nasjonal oppdragelse og rasehygiene. Den norske varianten var mer pragmatisk: Anna Sethne og forsøket på Sagene skole, arbeidsskoleprinsippet og heimstadlære, og til slutt Normalplanen av 1939, som tok sentrale reformideer inn i den statlige folkeskolen. Den konvensjonelle sluttdatoen, 1933, viser til at bevegelsen ble ensrettet eller oppløst i Tyskland.
          `,
          activeFrom: 1890,
          activeTo: 1933,
          era: "ca. 1890–1933",
          samfunn: `
            Industrisamfunnet, storbyene og masseskolen preget årene rundt 1900, og kulturkritikk, ungdomsbevegelse og kvinnebevegelse satte barnet og ungdommen i sentrum. Barnepsykologien og barnestudiene ga nye argumenter. Første verdenskrig gjorde fred og internasjonal forståelse til et pedagogisk mål, og de nye republikkene etter 1918 åpnet for skolereformer. Fra 1933 ble bevegelsen i Tyskland ensrettet eller drevet i eksil.
          `,
          skole: `
            Mange reformskoler var private, men flere byer prøvde ideene i offentlig skole, som Hamburg og Wien etter 1919. Arbeidsskolen ga verksted, skolekjøkken og skolehage, og elevene skulle arbeide selvstendig i grupper. I Norge ble Sagene skole forsøksskole i 1920-årene, og Normalplanen av 1939 gjorde arbeidsskoleprinsippet, heimstadlære og elevaktivitet til offisielle mål for folkeskolen.
          `,
          kilder: [
            snl("https://snl.no/reformpedagogikk"),
            OELKERS,
            side("Norsk biografisk leksikon: Anna Sethne.", "https://nbl.snl.no/Anna_Sethne"),
          ],
        },
      },

      "Antiautoritær pedagogikk": {
        main: {
          description: `
            Antiautoritær pedagogikk betegner oppdragelse og skole som avviser ytre autoritet som legitim grunn for å styre barn: reglene skal barn og voksne lage sammen, undervisningen skal være frivillig, og barn som slipper frykt og tvang, vil utvikle seg til frie og ansvarlige mennesker. Den eldste modellen er A.S. Neills Summerhill (1921), men røttene ligger i den psykoanalytiske pedagogikken i mellomkrigstiden, blant annet hos Siegfried Bernfeld og Wilhelm Reich, og i reformpedagogikkens eksperimentskoler.

            Bølgen kom etter 1960, da *Summerhill* (1960) ble en internasjonal bestselger og studentopprøret gjorde kritikk av autoritet til en politisk sak. I Vest-Tyskland fikk Neills bok tittelen *Theorie und Praxis der antiautoritären Erziehung* (1969), og foreldrestyrte barnehager (Kinderläden) prøvde ut ideene. I Norge ble Forsøksgymnaset i Oslo (1967) det tydeligste uttrykket. Forskningen skiller gjerne mellom en antiautoritær linje, som avviser autoritet som sådan, og en demokratisk linje, som vil gjøre autoriteten forhandlbar og begrunnet. Kritikken fra 1970-tallet og senere har pekt på at frihet uten struktur kan bli et vakuum som de sterkeste fyller, og debatten om grensesetting og voksenrolle har siden fulgt retningen.
          `,
          activeFrom: 1921,
          activeTo: 1975,
          era: "1921; bølge ca. 1960–1975",
          samfunn: `
            Etterkrigstidens velstand, ungdomskultur og utdanningseksplosjon ga en ny generasjon som stilte spørsmål ved foreldre, lærere og stat. Kritisk teori om den autoritære personligheten, seksuell frigjøring og protestene mot Vietnamkrigen gjorde oppdragelse til politikk. I Norge falt bølgen sammen med utbyggingen av niårig skole og et nytt, mer elevaktivt læreplanspråk.
          `,
          skole: `
            Frie skoler, elevråd og allmøter var institusjonene. Forsøksgymnaset i Oslo (1967) ble drevet av elever og lærere sammen, og andre forsøksskoler fulgte. Ideene om elevmedvirkning, mindre karakterpress og mer selvstendig arbeid fant veien inn i den offentlige skolen, blant annet i Mønsterplanen av 1974, men mer som justeringer enn som brudd.
          `,
          kilder: [
            snl("https://snl.no/Alexander_Sutherland_Neill", "Kaare Skagen"),
            snl("https://snl.no/fors%C3%B8ksgymnas", "Merethe Roos"),
            brit("https://www.britannica.com/biography/A-S-Neill"),
          ],
        },
      },

      "Reggio Emilia": {
        main: {
          description: `
            Reggio Emilia-pedagogikken er utviklet i de kommunale førskolene og småbarnssentrene i den norditalienske byen fra 1963, med Loris Malaguzzi som pedagogisk leder. Den ser barnet som rikt, sterkt og kompetent, med «hundre språk» å uttrykke seg på. Arbeidet organiseres i prosjekter som springer ut av barnas spørsmål og blir planlagt underveis (*progettazione*). Hvert senter har et verksted med en kunstnerisk utdannet *atelierista*, en pedagogisk veileder (*pedagogista*), og miljøet er utformet som «den tredje pedagogen». Pedagogisk dokumentasjon gjør prosessene synlige for barn, personale og foreldre, og foreldrene deltar i styringen.

            Pedagogikken har aldri vært formulert som en metode. Malaguzzi trakk eklektisk på Dewey, Piaget, Vygotskij og senere Bruner, og på den italienske Freinet-bevegelsen. Etter utstillingen *The Hundred Languages of Children* (fra 1981) og internasjonal omtale på 1990-tallet ble Reggio et globalt referansepunkt. Forskningen har spurt om den kan overføres til andre land uten å miste det lokale og politiske grunnlaget, og i Norden har Gunilla Dahlberg og andre gjort pedagogisk dokumentasjon til et sentralt begrep i barnehageforskningen. Den norske rammeplanen for barnehagen (2017) omtaler pedagogisk dokumentasjon som en del av barnehagens arbeidsmåter.
          `,
          activeFrom: 1963,
          activeTo: null,
          era: "1963–",
          samfunn: `
            Reggio Emilia ligger i Emilia-Romagna, en region med sterk motstandsbevegelse under krigen og venstrestyrte kommuner etter den. Foreldre og kvinneorganisasjoner krevde barnetilsyn for yrkesaktive mødre og en oppdragelse som ikke var kirkens. Nasjonale lover fra 1968 og 1971 ga statlige førskoler og kommunale småbarnssentre, mens Reggio allerede hadde bygd sine egne.
          `,
          skole: `
            Reggio gjelder barn fra null til seks år, ikke skolen. Kommunen bygde førskoler for tre- til seksåringer fra 1963 og småbarnssentre fra 1970, med høy bemanning, verksteder og tid til felles planlegging. Internasjonalt har pedagogikken særlig påvirket barnehagene, og i Norden finnes Reggio-inspirerte barnehager og nettverk, og arbeidsmåter som prosjekter og dokumentasjon.
          `,
          kilder: [
            REGGIO,
            side("Reggio Children: Loris Malaguzzi and the Schools of Reggio Emilia.", "https://www.reggiochildren.it/rc/editoria/libri-e-audiovisivi/loris-malaguzzi-and-the-schools-of-reggio-emilia/"),
            bok("Dahlberg, Gunilla, Peter Moss og Alan Pence. Beyond Quality in Early Childhood Education and Care: Postmodern Perspectives. Falmer Press, 1999."),
          ],
        },
      },
    },
  },

  edgeDescriptions: {
    empirisme__naturalisme: {
      description: `
        Rousseau leste Locke nøye og skrev *Émile* delvis som et svar på *Some Thoughts Concerning Education* (1693). Han overtok Lockes vekt på erfaring, sansning og herding av kroppen, men avviste Lockes råd om å resonnere med barn: fornuften kommer sist i utviklingen, og et barn som får forklaringer for tidlig, lærer bare å argumentere.
      `,
      kilder: [sep("https://plato.stanford.edu/entries/rousseau/", "Christopher Bertram")],
    },
    naturalisme__filantropisme: {
      description: `
        Basedow og filantropene leste *Émile* som et program og gjorde Rousseaus private oppdragelse til en skole for mange. De tok med seg sansning før ord, kroppsøving og lek, men ga dem et mer nyttepreget og sosialt mål enn Rousseau: lykkelige og brukbare borgere.
      `,
      kilder: [snl("https://snl.no/filantropisme", "Mariann Solberg")],
    },
    empirisme__filantropisme: {
      description: `
        Lockes praktiske oppdragelseslære ga filantropene en modell for nyttig kunnskap, herding og læring gjennom spill. Locke hadde foreslått bokstavterninger og andre leker for å lære barn å lese, og filantropene utviklet slike læringsspill systematisk i undervisningen.
      `,
      kilder: [snl("https://snl.no/Johann_Bernhard_Basedow")],
    },
    naturalisme__anskuelse: {
      description: `
        Pestalozzi forsøkte å oppdra sønnen Jakob etter *Émile* og førte dagbok over forsøket i 1774. Han lærte av det at naturlig oppdragelse ikke kunne bety å overlate barnet til seg selv, og at frihet og lydighet må forenes. Rousseaus sansning ble hos Pestalozzi til en ordnet metode og knyttet til familien og folkeskolen.
      `,
      kilder: [snl("https://snl.no/Johann_Heinrich_Pestalozzi", "Kaare Skagen")],
    },
    didaktikk__anskuelse: {
      description: `
        Komenius hadde formulert at undervisningen skal begynne med sansene og ting, ikke med ord, og laget den første illustrerte læreboka, *Orbis sensualium pictus* (1658). Anskuelsespedagogikken førte dette prinsippet videre og ga det en psykologisk og filosofisk begrunnelse: begrepene skal vokse ut av anskuelsen i ordnede trinn.
      `,
      kilder: [snl("https://snl.no/anskuelsesundervisning")],
    },
    anskuelse__barnehage: {
      description: `
        Fröbel arbeidet hos Pestalozzi i Yverdon i 1808–1810 og tok med seg anskuelsen og vekten på moren og hjemmet. Han kritiserte at Pestalozzis metode manglet en indre sammenheng, og svarte med gavene: et ordnet system av former som skulle la barnet anskue helheten gjennom lek.
      `,
      kilder: [snl("https://snl.no/Friedrich_Wilhelm_August_Fr%C3%B6bel", "Kaare Skagen")],
    },
    barnehage__reformpedagogikk: {
      description: `
        Reformpedagogene tok barnehagens lek, selvvirksomhet og konkrete materiell med inn i skolen, men ofte i kritikk av Fröbel. Montessori mente gavene var for symbolske og bygde sitt materiell på sansepsykologi i stedet, og de progressive barnehagelærerne i USA erstattet gavene med fri lek og barnestudier.
      `,
      kilder: [ALLEN],
    },
    herbartianisme__reformpedagogikk: {
      description: `
        Reformpedagogikken definerte seg mot herbartianernes formaltrinn og den lærerstyrte «puggskolen», som den kalte det motsatte av arbeidsskolen. Kritikken var delvis urettferdig, for herbartianerne var også opptatt av interesse og anskuelse, men motsetningen ga reformbevegelsen et tydelig fiendebilde.
      `,
      kilder: [OELKERS],
    },
    reformpedagogikk__antiautoritaer: {
      description: `
        Neill kom fra reformpedagogikkens miljø og grunnla Summerhill i 1921 som en avdeling av en internasjonal skole i Hellerau ved Dresden. Han radikaliserte reformpedagogikkens frihetsideal med psykoanalysen: der reformpedagogene ville lede barnet gjennom et godt tilrettelagt miljø, ville Neill fjerne den voksne styringen helt fra barnas liv i skolen.
      `,
      kilder: [snl("https://snl.no/Alexander_Sutherland_Neill", "Kaare Skagen")],
    },
    reformpedagogikk__reggio: {
      description: `
        Reggio Emilia-pedagogikken vokste fram i et Italia der Montessori og katolske førskoler preget barnehagen. Malaguzzi tok avstand fra fast materiell og fikserte metoder, men bygde videre på reformpedagogikkens tillit til barnets aktivitet. Han hentet også mye fra den italienske Freinet-bevegelsen og dens vekt på barnas egne uttrykk og samarbeid.
      `,
      kilder: [REGGIO],
    },
    progressivisme__reggio: {
      description: `
        Malaguzzi leste Dewey og tok opp ideen om prosjekter som springer ut av barnas erfaringer, og om barnehagen som et demokratisk fellesskap der foreldre og pedagoger deltar. Senere ble Jerome Bruner en nær samtalepartner for pedagogene i Reggio.
      `,
      kilder: [REGGIO],
    },
  },
};
