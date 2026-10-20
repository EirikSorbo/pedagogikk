// Runde 1 — Barnet i sentrum: teoretikerne (fase 6, skrevet av Opus).
import { snl, nbl, sep, iep, brit, ndb, side, bok } from "../kilder.mjs";

const R = "Barnet i sentrum";

export default {
  artists: [
    // --- Naturalismen ------------------------------------------------------
    {
      name: "Jean-Jacques Rousseau", birthYear: 1712, deathYear: 1778, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Naturalismen"],
      subGenre: ["Negativ oppdragelse", "Barndommens egenverdi"],
      influenceStart: 1750, influenceEnd: 1778, geography: "Genève og Paris",
      description: `
        Rousseaus *Émile* (1762) er ikke en håndbok, men et tankeeksperiment: hvordan ville et menneske bli om oppdragelsen fulgte naturen og ikke samfunnet? Svaret er trinnvis. Til tolvårsalderen skal barnet lære av ting og sanser, ikke av ord og bøker; først deretter kommer nytte, fornuft, moral og samfunn. Kjernen er den «negative oppdragelsen»: oppdrageren skal mindre lære bort enn verne barnet mot for tidlig sosialisering, slik at selvkjærligheten (*amour de soi*) ikke slår over i forfengelighet og avhengighet av andres blikk (*amour-propre*).

        Boka ble forbudt og brent i Paris og Genève samme år, og fikk likevel en enorm resepsjon: filantropene, Pestalozzi og Kant leste den som et program. Forskningen har siden diskutert hvordan *Émile* forholder seg til *Samfunnspakten* fra samme år, altså spenningen mellom å oppdra et menneske og å oppdra en borger, og hvor mye av den senere barnesentrerte pedagogikken som egentlig kan føres tilbake til et skrift der barnet er gjennomstyrt av en usynlig lærer. Bok V, om Sophie, gir jentene en oppdragelse til underordning, og ble kritisert allerede av Wollstonecraft.
      `,
      keyWorks: [
        { title: "Discours sur les sciences et les arts", year: 1750 },
        { title: "Julie ou la Nouvelle Héloïse", year: 1761 },
        { title: "Du contrat social", year: 1762 },
        { title: "Émile ou De l'éducation", year: 1762 },
        { title: "Considérations sur le gouvernement de Pologne", year: 1772 },
      ],
      kilder: [
        snl("https://snl.no/Jean-Jacques_Rousseau", "Lars Fredrik Händler Svendsen og Trude Kolderup"),
        sep("https://plato.stanford.edu/entries/rousseau/", "Christopher Bertram"),
        iep("https://iep.utm.edu/rousseau/"),
      ],
    },
    {
      name: "Mary Wollstonecraft", birthYear: 1759, deathYear: 1797, gender: "kvinne",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Naturalismen"],
      subGenre: ["Lik rett til utdanning"],
      influenceStart: 1784, influenceEnd: 1797, geography: "London",
      description: `
        Wollstonecraft drev en pikeskole i Newington Green fra 1784, var guvernante i Irland og skrev sin første bok om jenters oppdragelse (1787) før hun ble politisk filosof. I *A Vindication of the Rights of Woman* (1792) går hun direkte løs på Rousseaus Sophie: fornuften har ikke kjønn, og den svakheten Rousseau kaller kvinnens natur, er et produkt av en oppdragelse som lærer jenter å behage. Dermed snur hun naturalismens eget argument mot den: det «naturlige» må prøves, ikke forutsettes.

        Pedagogisk er boka også et skoleprogram. Wollstonecraft foreslår nasjonale dagskoler der gutter og jenter, fattige og rike, går sammen de første årene, med lek ute og felles undervisning, før elevene skilles etter evner og framtidig arbeid. Hun foregriper dermed både fellesskolen og kampen for jenters høyere utdanning. Resepsjonen var lenge preget av skandalene i biografien som William Godwin ga ut etter hennes død; i dag leses hun som en sentral opplysningsfilosof og som den første systematiske kritikeren av kjønnsdelingen i Rousseaus pedagogikk.
      `,
      keyWorks: [
        { title: "Thoughts on the Education of Daughters", year: 1787 },
        { title: "Original Stories from Real Life", year: 1788 },
        { title: "A Vindication of the Rights of Men", year: 1790 },
        { title: "A Vindication of the Rights of Woman", year: 1792 },
      ],
      kilder: [
        snl("https://snl.no/Mary_Wollstonecraft", "Anne Synnøve Simensen"),
        sep("https://plato.stanford.edu/entries/wollstonecraft/", "Sylvana Tomaselli"),
      ],
    },
    {
      name: "Maria Edgeworth", birthYear: 1767, deathYear: 1849, gender: "kvinne",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Naturalismen"],
      subGenre: ["Undersøkende læring"],
      influenceStart: 1795, influenceEnd: 1849, geography: "Edgeworthstown, Irland",
      description: `
        Faren, Richard Lovell Edgeworth, hadde forsøkt å oppdra sin eldste sønn etter *Émile* og gitt opp. Sammen med ham skrev Maria Edgeworth *Practical Education* (1798), som gjorde Rousseau og Locke om til en erfaringsbasert hjemmepedagogikk. Grunnlaget var notater om hvordan barna i den store familien faktisk lærte, ført over år. Boka anbefaler leker og redskaper i stedet for pugg, enkle eksperimenter i kjemi og mekanikk, samtaler som får barnet til å finne ut selv, og forsiktighet med belønning og straff.

        Edgeworth skrev også fortellinger for barn (*The Parent's Assistant*, 1796) og romaner om irske forhold. Hun er interessant for pedagogikkhistorien fordi hun viser hvordan naturalismen ble tatt opp i britisk opplysningstradisjon: mindre romantisk og mer empirisk og vitenskapelig, med observasjon av barn som metode. Slik foregriper hun både barnestudiene på slutten av 1800-tallet og det undersøkende idealet i senere progressiv pedagogikk.
      `,
      keyWorks: [
        { title: "Letters for Literary Ladies", year: 1795 },
        { title: "The Parent's Assistant", year: 1796 },
        { title: "Practical Education (med Richard Lovell Edgeworth)", year: 1798 },
        { title: "Castle Rackrent", year: 1800 },
      ],
      kilder: [
        snl("https://snl.no/Maria_Edgeworth", "Marie Nedregotten Sørbø"),
        brit("https://www.britannica.com/biography/Maria-Edgeworth"),
      ],
    },

    // --- Filantropismen ----------------------------------------------------
    {
      name: "Johann Bernhard Basedow", birthYear: 1724, deathYear: 1790, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Filantropismen"],
      subGenre: ["Anskuelsesprinsippet", "Leken som læringsform"],
      influenceStart: 1753, influenceEnd: 1790, geography: "Sorø, Altona og Dessau",
      description: `
        Basedow lærte faget sitt i den danske helstaten: som lærer ved ridderakademiet i Sorø (1753–1761) og ved gymnaset i Altona. Etter å ha lest *Émile* satte han i gang filantropismen som bevegelse. *Vorstellung an Menschenfreunde* (1768) var et opprop om penger til en reformert lærebok, og *Elementarwerk* (1774), med kobberstikk av Daniel Chodowiecki, skulle lære barn om verden gjennom bilder og samtale i stedet for latinsk grammatikk.

        Samme år åpnet han Philanthropinum i Dessau med støtte fra fyrst Leopold III Friedrich Franz. Skolen skulle oppdra nyttige, lykkelige og religiøst tolerante verdensborgere: språk gjennom samtale, lek og kroppsøving, håndverk, naturfag og ingen fysisk avstraffelse. Den offentlige eksamenen i 1776 ble et pedagogisk skue som trakk besøkende fra hele Tyskland, og Kant skrev to oppfordringer om å støtte skolen. Basedow selv var en vanskelig leder og trakk seg ut tidlig, og Philanthropinum ble stengt i 1793. Nyhumanistene kritiserte senere filantropismen for å gjøre nytte til dannelsens mål.
      `,
      keyWorks: [
        { title: "Vorstellung an Menschenfreunde und vermögende Männer über Schulen, Studien und ihren Einfluss in die öffentliche Wohlfahrt", year: 1768 },
        { title: "Das Methodenbuch für Väter und Mütter der Familien und Völker", year: 1770 },
        { title: "Elementarwerk", year: 1774 },
      ],
      kilder: [
        snl("https://snl.no/Johann_Bernhard_Basedow"),
        brit("https://www.britannica.com/biography/Johann-Bernhard-Basedow"),
        ndb("https://www.deutsche-biographie.de/sfz68160.html"),
      ],
    },
    {
      name: "Christian Gotthilf Salzmann", birthYear: 1744, deathYear: 1811, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Filantropismen"],
      subGenre: ["Helhetlig oppdragelse"],
      influenceStart: 1780, influenceEnd: 1811, geography: "Dessau og Schnepfenthal (Thüringen)",
      description: `
        Salzmann var prest i Erfurt, underviste i religion ved Philanthropinum i Dessau fra 1781 og grunnla i 1784 sin egen skole i Schnepfenthal ved Gotha. Den overlevde filantropismen som bevegelse og drives fortsatt som Salzmannschule. Skolen var en internatfamilie der lærerne bodde med elevene, med hagearbeid, håndverk, vandring og ekskursjoner. Johann Christoph Friedrich GutsMuths underviste i gymnastikk der fra 1785, og Schnepfenthal regnes som et utgangspunkt for skolegymnastikken i Tyskland.

        Salzmann skrev pedagogikk i ironisk og fortellende form. *Krebsbüchlein* (1780) er en «veiledning» i fornuftsstridig barneoppdragelse, og *Ameisenbüchlein* (1806) er en lærebok for oppdragere. Den har setningen som har gjort ham kjent: oppdrageren skal søke grunnen til alle feil hos eleven i seg selv. Det er en tidlig formulering av at oppdragelse er et forhold der den voksne har ansvaret, ikke en teknikk som virker på et objekt.
      `,
      keyWorks: [
        { title: "Krebsbüchlein oder Anweisung zu einer unvernünftigen Erziehung der Kinder", year: 1780 },
        { title: "Konrad Kiefer oder Anweisung zu einer vernünftigen Erziehung der Kinder", year: 1796 },
        { title: "Ameisenbüchlein oder Anweisung zu einer vernünftigen Erziehung der Erzieher", year: 1806 },
      ],
      kilder: [
        snl("https://snl.no/Christian_Gotthilf_Salzmann"),
      ],
    },
    {
      name: "Joachim Heinrich Campe", birthYear: 1746, deathYear: 1818, gender: "mann",
      metaGenre: R, instrument: "Teolog", mainGenre: ["Filantropismen"],
      subGenre: ["Læring gjennom erfaring"],
      influenceStart: 1776, influenceEnd: 1818, geography: "Dessau, Hamburg og Braunschweig",
      description: `
        Campe var teolog, ledet en kort tid Philanthropinum i Dessau (1776–1777) og drev deretter eget erziehungsinstitut i Hamburg. Han ble filantropismens store formidler. *Robinson der Jüngere* (1779–1780) gjorde Defoes roman til samtaler mellom en far og barna hans, der historien avbrytes av spørsmål om nytte, flid og moral. Rousseau hadde gjort *Robinson Crusoe* til den eneste boka Émile fikk lese, og Campes versjon ble en av de mest solgte barnebøkene i Europa, også i Danmark og Norge.

        Som redaktør av *Allgemeine Revision des gesammten Schul- und Erziehungswesens* (16 bind, 1785–1792) samlet han bevegelsens teori i ett verk, med bidrag fra blant andre Trapp. I Braunschweig satt han i skoledirektoriet fra 1786, men reformen strandet på motstand fra kirken og stendene. Campe reiste til Paris i 1789, ble æresborger av Frankrike i 1792 og arbeidet til slutt med en stor ordbok over tysk språk. Han viser filantropismens styrke og grense: barnet som fornuftig og nysgjerrig, men opplæringen bundet til nytte og borgerdyd.
      `,
      keyWorks: [
        { title: "Robinson der Jüngere", year: 1779 },
        { title: "Allgemeine Revision des gesammten Schul- und Erziehungswesens (red., 16 bind)", year: 1785 },
        { title: "Wörterbuch der deutschen Sprache", year: 1807 },
      ],
      kilder: [
        snl("https://snl.no/Joachim_Heinrich_Campe", "Morten O. Haugen"),
        brit("https://www.britannica.com/biography/Joachim-Heinrich-Campe"),
        ndb("https://www.deutsche-biographie.de/sfz7811.html"),
      ],
    },
    {
      name: "Ernst Christian Trapp", birthYear: 1745, deathYear: 1818, gender: "mann",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Filantropismen"],
      subGenre: [],
      influenceStart: 1777, influenceEnd: 1818, geography: "Dessau, Halle, Hamburg og Braunschweig",
      description: `
        Trapp ble født på Friedrichsruhe ved Itzehoe i Holstein, som da lå under den danske kongen, og kom som lærer til Philanthropinum i Dessau i 1777. I 1779 fikk han det første professoratet i pedagogikk i Tyskland, ved universitetet i Halle, knyttet til et institutt for utdanning av lærere. Forsøket gikk dårlig: forelesningene stoppet allerede første semester fordi det kom for få studenter, og etter strid med teologen Johann Salomo Semler forlot han Halle i 1783 for å overta Campes institutt i Hamburg. Fra 1786 arbeidet han med skolereformen i Braunschweig.

        *Versuch einer Pädagogik* (1780) regnes som den første systematiske teorien fra den tyske reformbevegelsen. Trapp ville gjøre pedagogikken til en egen vitenskap bygget på observasjon og erfaring, med forsøk og nøyaktige iakttakelser av barn, ikke på teologi eller gammel skoletradisjon. Det gjør ham til et tidlig utgangspunkt for empirisk utdanningsforskning. Det tyske pedagogikkforbundet (DGfE) har siden 1996 delt ut en pris i hans navn.
      `,
      keyWorks: [
        { title: "Versuch einer Pädagogik", year: 1780 },
      ],
      kilder: [
        ndb("https://www.deutsche-biographie.de/sfz82869.html", "Hanno Schmitt"),
      ],
    },

    // --- Anskuelsespedagogikken -------------------------------------------
    {
      name: "Johann Heinrich Pestalozzi", birthYear: 1746, deathYear: 1827, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Anskuelsespedagogikken"],
      subGenre: ["Anskuelsesprinsippet", "Helhetlig oppdragelse", "Selvvirksomhet"],
      influenceStart: 1774, influenceEnd: 1827, geography: "Neuhof, Stans, Burgdorf og Yverdon",
      description: `
        Pestalozzi var sosialreformator før han var metodiker. På gården Neuhof drev han fra 1774 en anstalt for fattige barn som gikk konkurs, og romanen *Lienhard und Gertrud* (1781–1787) viser hvordan en landsby kan reises gjennom en mor som oppdrar barna i stua. Etter den franske invasjonen tok han i 1799 hånd om krigsforeldreløse barn i Stans, og brevet han skrev derfra, er et nøkkeldokument om oppdragelse gjennom tillit og omsorg.

        I Burgdorf (1800–1804) og Yverdon (1805–1825) utviklet han metoden som gjorde ham berømt. I *Wie Gertrud ihre Kinder lehrt* (1801) kaller han anskuelsen «det absolutte grunnlaget for all erkjennelse»: undervisningen skal gå fra sansning til begrep gjennom tall, form og språk, i små og ordnede trinn. Formelen «hode, hjerte og hånd» står for en oppdragelse av hele mennesket. Yverdon ble et valfartssted for Europas pedagoger, blant dem Fröbel og Herbart. Prøyssen sendte lærere dit fra 1809, og anskuelsesundervisningen ble pensum i lærerutdanningen, også i Norge. Senere forskning har pekt på hvor lett metoden ble mekanisk når den ble skilt fra den sosiale og moralske tenkningen bak.
      `,
      keyWorks: [
        { title: "Lienhard und Gertrud", year: 1781 },
        { title: "Meine Nachforschungen über den Gang der Natur in der Entwicklung des Menschengeschlechts", year: 1797 },
        { title: "Brief über den Aufenthalt in Stans", year: 1799 },
        { title: "Wie Gertrud ihre Kinder lehrt", year: 1801 },
        { title: "Schwanengesang", year: 1826 },
      ],
      kilder: [
        snl("https://snl.no/Johann_Heinrich_Pestalozzi", "Kaare Skagen"),
        brit("https://www.britannica.com/biography/Johann-Heinrich-Pestalozzi"),
      ],
    },
    {
      name: "Philipp Emanuel von Fellenberg", birthYear: 1771, deathYear: 1844, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Anskuelsespedagogikken"],
      subGenre: ["Arbeidsskoleprinsippet"],
      influenceStart: 1799, influenceEnd: 1844, geography: "Hofwyl ved Bern",
      description: `
        Fellenberg var en bernsk patrisier som kjøpte godset Hofwyl i 1799 og bygde det ut til et helt utdanningssystem. Der lå en selvforsørgende landbruksskole for fattige barn, der arbeid i jord og verksted gikk sammen med lesing og regning, ved siden av et klassisk institutt for barn av velstående foreldre, en skole for jenter og kurs for lærere. Han samarbeidet en kort tid med Pestalozzi, men de to brøt fordi Fellenberg var en streng organisator og Pestalozzi ikke ville styres.

        Fattigskolen ble ledet av Johann Jakob Wehrli, og «wehrliskolene» ble et mønster for arbeidsskoler for fattige barn i flere land. Fellenbergs sosiale mål var å sveise sammen samfunnsklassene ved at hver klasse fikk den oppdragelsen han mente passet den, i samme anlegg. Det gjør Hofwyl tvetydig sett fra i dag: et tidlig eksempel på å forene hånd og hode, og samtidig en skole som befestet klasseskillet den skulle mildne.
      `,
      keyWorks: [],
      kilder: [
        brit("https://www.britannica.com/biography/Philipp-Emanuel-von-Fellenberg"),
      ],
    },
    {
      name: "Edward Austin Sheldon", birthYear: 1823, deathYear: 1897, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Anskuelsespedagogikken"],
      subGenre: ["Anskuelsesprinsippet"],
      influenceStart: 1853, influenceEnd: 1897, geography: "Oswego, New York",
      description: `
        Sheldon ble skoledirektør i Oswego i staten New York i 1853 og brakte anskuelsespedagogikken til USA i den formen den hadde fått i England. Der hadde Home and Colonial Infant School Society gjort Pestalozzis idé om til «object lessons»: faste leksjoner om en gjenstand og dens egenskaper. Sheldon hentet en lærer fra London og grunnla i 1861 en skole for lærere som ble statlig lærerskole (Oswego Normal School) noen år senere.

        «The Oswego movement» spredte objektundervisningen til lærerskoler i store deler av landet på 1860- og 1870-tallet, med Sheldons *A Manual of Elementary Instruction* (1862) som grunnbok. Bevegelsen er et skoleeksempel på hvordan et pedagogisk prinsipp blir en metode og deretter en rutine: kritikerne pekte snart på at elevene lærte å ramse opp egenskaper ved ting, ikke å iaktta. Samtidig var Oswego en viktig institusjon for profesjonalisering av lærerinner i den amerikanske fellesskolen.
      `,
      keyWorks: [
        { title: "A Manual of Elementary Instruction", year: 1862 },
      ],
      kilder: [
        brit("https://www.britannica.com/biography/Edward-Austin-Sheldon"),
      ],
    },

    // --- Barnehagebevegelsen ------------------------------------------------
    {
      name: "Friedrich Fröbel", birthYear: 1782, deathYear: 1852, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Barnehagebevegelsen"],
      subGenre: ["Leken som læringsform", "Selvvirksomhet"],
      influenceStart: 1816, influenceEnd: 1852, geography: "Keilhau og Bad Blankenburg (Thüringen)",
      description: `
        Fröbel var i Yverdon hos Pestalozzi i 1808–1810 og grunnla i 1816 en skole som fra året etter lå i Keilhau i Thüringen. *Die Menschenerziehung* (1826) gir en romantisk og idealistisk begrunnelse for oppdragelse: alt levende er uttrykk for en guddommelig enhet, og mennesket utvikler seg ved å gjøre det indre ytre gjennom skapende virksomhet. Leken er for ham ikke tidtrøyte, men det høyeste uttrykket for barnets utvikling på dette trinnet.

        I Blankenburg åpnet han i 1837 en anstalt for å pleie barns virketrang, og i 1840 fikk den navnet Kindergarten. Til den laget han et system av «gaver» (ball, kule, terning og klosser) og «sysler» (fletting, bretting, mønstre), og han utdannet kvinner som barnehagelærerinner. Prøyssen forbød barnehagene i 1851, mistenkt for ateisme og radikalisme, til forbudet ble opphevet i 1860. Forskningen har lest Fröbel både som grunnlegger av førskolepedagogikken, som en del av kvinnebevegelsens historie og som en kilde til moderne kunst og arkitektur gjennom klossene og den geometriske formlæren.
      `,
      keyWorks: [
        { title: "Die Menschenerziehung", year: 1826 },
        { title: "Mutter- und Koselieder", year: 1844 },
      ],
      kilder: [
        snl("https://snl.no/Friedrich_Wilhelm_August_Fr%C3%B6bel", "Kaare Skagen"),
        brit("https://www.britannica.com/biography/Friedrich-Froebel"),
        ndb("https://www.deutsche-biographie.de/pnd11853629X.html"),
        bok("Brosterman, Norman. Inventing Kindergarten. Harry N. Abrams, 1997."),
      ],
    },
    {
      name: "Bertha von Marenholtz-Bülow", birthYear: 1810, deathYear: 1893, gender: "kvinne",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Barnehagebevegelsen"],
      subGenre: ["Leken som læringsform"],
      influenceStart: 1849, influenceEnd: 1893, geography: "Berlin, Dresden og Europas hovedsteder",
      description: `
        Marenholtz-Bülow var en prøyssisk adelskvinne som møtte Fröbel i 1849, i hans siste leveår, og ble bevegelsens viktigste strateg etter hans død. Mens Fröbel hadde formulert ideene i en religiøs og mystisk form, oversatte hun dem til et sosialt og politisk program: barnehagen som svar på industrisamfunnets problemer og som en vei til en ny oppdragelse for alle samfunnsklasser.

        Hun brukte sitt nettverk ved hoffene til å spre barnehagen til London, Paris, Italia og Nederland på 1850- og 1860-tallet, og hennes innflytelse regnes som en grunn til at Prøyssen opphevet barnehageforbudet i 1860. Seinere grunnla hun foreninger og seminarer for utdanning av barnehagelærerinner. Hun er et eksempel på at kvinner ble barnehagebevegelsens bærere, og på at barnehagen ble et av de første offentlige yrkesfeltene for borgerlige kvinner. *Erinnerungen an Friedrich Fröbel* (1876) har formet ettertidens bilde av ham.
      `,
      keyWorks: [
        { title: "Erinnerungen an Friedrich Fröbel", year: 1876 },
      ],
      kilder: [
        ndb("https://www.deutsche-biographie.de/sfz6918.html"),
        bok("Allen, Ann Taylor. The Transatlantic Kindergarten: Education and Women's Movements in Germany and the United States. Oxford University Press, 2017."),
      ],
    },
    {
      name: "Elizabeth Palmer Peabody", birthYear: 1804, deathYear: 1894, gender: "kvinne",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Barnehagebevegelsen"],
      subGenre: ["Leken som læringsform"],
      influenceStart: 1834, influenceEnd: 1894, geography: "Boston",
      description: `
        Peabody tilhørte transcendentalistene i Boston. Hun var assistent ved Bronson Alcotts Temple School og dokumenterte den i *Record of a School* (1835), drev en bokhandel som var et møtested for kretsen, og var svigerinne til Horace Mann. I 1860 åpnet hun den første engelskspråklige barnehagen i USA; den første tyskspråklige hadde Margarethe Schurz startet i Wisconsin i 1856.

        Etter en studiereise til Tyskland i 1867 erkjente hun at hennes egen barnehage hadde vært lite fröbelsk, og brukte resten av livet på å utdanne lærerinner, gi ut tidsskrift og agitere for barnehagen i hele landet. Sammen med søsteren Mary Mann skrev hun *Moral Culture of Infancy and Kindergarten Guide* (1863). Hun viser hvordan barnehagen ble en transatlantisk bevegelse båret av kvinnelige nettverk, og hvordan Fröbels idealisme møtte amerikansk reformprotestantisme.
      `,
      keyWorks: [
        { title: "Record of a School", year: 1835 },
        { title: "Moral Culture of Infancy and Kindergarten Guide (med Mary Mann)", year: 1863 },
      ],
      kilder: [
        brit("https://www.britannica.com/biography/Elizabeth-Palmer-Peabody"),
      ],
    },
    {
      name: "Susan Blow", birthYear: 1843, deathYear: 1916, gender: "kvinne",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Barnehagebevegelsen"],
      subGenre: ["Leken som læringsform"],
      influenceStart: 1873, influenceEnd: 1916, geography: "St. Louis og New York",
      description: `
        Blow åpnet i 1873 den første offentlige barnehagen i USA, ved Des Peres-skolen i St. Louis, med støtte fra skoledirektøren William Torrey Harris, som selv var hegelianer. Dermed ble barnehagen for første gang en del av den offentlige skolen. Hun utdannet lærerinner, og St. Louis ble et sentrum for barnehagebevegelsen.

        Blow var ortodoks fröbelianer og leste Fröbel gjennom Hegel: gavene og syslene var symboler som skulle føre barnet til innsikt i helheten. Fra 1890-tallet kom hun i konflikt med en ny generasjon som bygde på barnestudier og Deweys pragmatisme, ledet av Patty Smith Hill. Striden i det internasjonale barnehageforbundet endte med en splittet rapport i 1913. Konflikten mellom Blow og Hill er en nøkkel til hvordan barnehagen ble «progressiv», og til at lek gikk fra å være symbolsk og styrt til å bli fri og utforskende.
      `,
      keyWorks: [
        { title: "Symbolic Education", year: 1894 },
        { title: "Letters to a Mother on the Philosophy of Froebel", year: 1899 },
        { title: "Educational Issues in the Kindergarten", year: 1908 },
      ],
      kilder: [
        brit("https://www.britannica.com/biography/Susan-Blow"),
      ],
    },

    // --- Reformpedagogikken -------------------------------------------------
    {
      name: "Ellen Key", birthYear: 1849, deathYear: 1926, gender: "kvinne",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Reformpedagogikken"],
      subGenre: ["Barndommens egenverdi", "Frihet i oppdragelsen"],
      influenceStart: 1880, influenceEnd: 1926, geography: "Stockholm og Strand ved Vättern",
      description: `
        Key var lærerinne ved en pikeskole i Stockholm og foreleste i to tiår ved Arbetareinstitutet før hun ble en av Europas mest leste samfunnsdebattanter. *Barnets århundrade* (1900) gav reformpedagogikken et slagord da den kom på tysk i 1902 som *Das Jahrhundert des Kindes*. Hun anklaget skolen for «sjelemord», for å kvele individualitet gjennom pugg, eksamen og disiplin, og tok til orde for en skole uten karakterer, med selvstendig arbeid og et hjem der barnet fikk vokse i ro.

        Boka har også et kapittel om «slektens rett», der barnets rett til god arv brukes til å begrunne rasehygieniske tanker. Det har ført til en omfattende diskusjon om forholdet mellom reformpedagogikk og eugenikk, og om hvor nytt Keys budskap egentlig var. For pedagogikkhistorien står hun likevel som den som gjorde barndommen til et politisk spørsmål i Norden i årene rundt 1900.
      `,
      keyWorks: [
        { title: "Missbrukad kvinnokraft", year: 1896 },
        { title: "Barnets århundrade", year: 1900 },
        { title: "Lifslinjer", year: 1903 },
      ],
      kilder: [
        snl("https://snl.no/Ellen_Key"),
        bok("Oelkers, Jürgen. Reformpädagogik. Eine kritische Dogmengeschichte. Juventa, 1989."),
      ],
    },
    {
      name: "Maria Montessori", birthYear: 1870, deathYear: 1952, gender: "kvinne",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Reformpedagogikken"],
      subGenre: ["Selvvirksomhet", "Miljøet som pedagog", "Frihet i oppdragelsen"],
      influenceStart: 1898, influenceEnd: 1952, geography: "Roma, Barcelona, Laren og Adyar",
      description: `
        Montessori var blant de første kvinnelige legene i Italia og arbeidet med psykisk utviklingshemmede barn ut fra Itards og Séguins sanseopplæring. I 1907 overførte hun metoden til vanlige barn i Casa dei Bambini i arbeiderstrøket San Lorenzo i Roma. *Il metodo della pedagogia scientifica* (1909) beskriver et forberedt miljø med materiell i barnets størrelse, sansemateriell som retter seg selv, aldersblandede grupper og en lærer som iakttar mer enn hun underviser. Barnet har sensitive perioder og arbeider best når det får velge selv og bli konsentrert.

        Metoden spredte seg raskt, men ble også kontroversiell. Kilpatrick kritiserte den i 1914 for å være foreldet psykologi, og den amerikanske interessen sank. Fascistregimet støttet en tid montessoriskolene, men de ble stengt i 1934, og Montessori levde i eksil, blant annet i India under krigen. I forskningen står hun både som pioner for vitenskapelig observasjon av barn og som eksempel på en metode som ble holdt i en lukket, internasjonal organisasjon. I Norge inspirerte hun blant andre Anna Sethne.
      `,
      keyWorks: [
        { title: "Il metodo della pedagogia scientifica applicato all'educazione infantile nelle case dei bambini", year: 1909 },
        { title: "L'autoeducazione nelle scuole elementari", year: 1916 },
        { title: "Il segreto dell'infanzia", year: 1936 },
        { title: "La mente del bambino", year: 1949 },
      ],
      kilder: [
        snl("https://snl.no/Maria_Montessori", "Anne Synnøve Simensen"),
        brit("https://www.britannica.com/biography/Maria-Montessori"),
      ],
    },
    {
      name: "Georg Kerschensteiner", birthYear: 1854, deathYear: 1932, gender: "mann",
      metaGenre: R, instrument: "Politiker og reformator", mainGenre: ["Reformpedagogikken"],
      subGenre: ["Arbeidsskoleprinsippet", "Nasjonal oppdragelse"],
      influenceStart: 1895, influenceEnd: 1932, geography: "München",
      description: `
        Kerschensteiner var lektor i matematikk og naturfag før han i 1895 ble skolesjef i München, et embete han hadde til 1919. Han bygde ut fortsettelsesskolen for unge arbeidere til en yrkesskole med verksteder og fagklasser, og regnes som far til det tyske yrkesopplæringssystemet. Med foredraget om «framtidens skole i Pestalozzis ånd» (1908) og *Begriff der Arbeitsschule* (1912) ble han arbeidsskolens fremste teoretiker: manuelt arbeid i verksted, kjøkken og hage skulle utvikle saklighet, karakter og samarbeid.

        Målet var uttrykkelig politisk. *Staatsbürgerliche Erziehung der deutschen Jugend* (1901) gjorde arbeidsskolen til en oppdragelse av nyttige og lojale borgere, også som et motstykke til sosialdemokratiet. Forskningen har derfor skilt mellom Kerschensteiners arbeidsskole og de friere variantene hos Hugo Gaudig og de sosialistiske skolereformatorene. I Norden ble arbeidsskoleprinsippet tatt opp i normalplanene i mellomkrigstiden.
      `,
      keyWorks: [
        { title: "Staatsbürgerliche Erziehung der deutschen Jugend", year: 1901 },
        { title: "Begriff der Arbeitsschule", year: 1912 },
        { title: "Theorie der Bildung", year: 1926 },
      ],
      kilder: [
        snl("https://snl.no/Georg_Kerschensteiner"),
      ],
    },
    {
      name: "Rudolf Steiner", birthYear: 1861, deathYear: 1925, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Reformpedagogikken"],
      subGenre: ["Helhetlig oppdragelse", "Skapende arbeid"],
      influenceStart: 1907, influenceEnd: 1925, geography: "Dornach og Stuttgart",
      description: `
        Steiner var filosof og grunnlegger av antroposofien. Pedagogikken hans bygger på et menneskebilde der barnet utvikler seg i sjuårsperioder, hver med sin måte å lære på: etterligning, bilder og følelser, og til slutt selvstendig dømmekraft. *Die Erziehung des Kindes vom Gesichtspunkte der Geisteswissenschaft* (1907) og forelesningene for de første lærerne (1919) er grunntekstene.

        Den første skolen åpnet i 1919 for barna til arbeiderne ved sigarettfabrikken Waldorf-Astoria i Stuttgart, på initiativ fra fabrikkeieren Emil Molt. Kjennetegnene var allerede da en klasselærer som følger klassen i mange år, periodeundervisning, kunstnerisk arbeid, eurytmi og ingen karakterer. Den første steinerskolen i Norge åpnet i Oslo i 1926. Forskningen skiller gjerne mellom praksisen, som ofte har fått anerkjennelse for kunstfag og helhetlig skoledag, og det esoteriske menneskebildet bak den, som er vitenskapelig omstridt.
      `,
      keyWorks: [
        { title: "Die Philosophie der Freiheit", year: 1894 },
        { title: "Die Erziehung des Kindes vom Gesichtspunkte der Geisteswissenschaft", year: 1907 },
        { title: "Allgemeine Menschenkunde als Grundlage der Pädagogik (forelesninger)", year: 1919 },
      ],
      kilder: [
        snl("https://snl.no/Rudolf_Steiner", "Jan-Erik Ebbestad Hansen"),
        snl("https://snl.no/steinerskoler", "Jan-Erik Ebbestad Hansen"),
      ],
    },
    {
      name: "Anna Sethne", birthYear: 1872, deathYear: 1961, gender: "kvinne",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Reformpedagogikken", "Enhetsskolen"],
      subGenre: ["Arbeidsskoleprinsippet", "Interesseprinsippet"],
      influenceStart: 1919, influenceEnd: 1953, geography: "Sagene skole, Oslo",
      description: `
        Sethne er den viktigste formidleren av reformpedagogikken til den norske folkeskolen. Hun var overlærer ved Sagene skole i Oslo fra 1919 til 1938 og gjorde den, med støtte fra skoleinspektør Bernhof Ribsskog, til forsøksskole for arbeidsskolen. Først inspirert av Montessori, senere av Dewey og Kilpatrick, innførte hun heimstadlære som samlende fag i småskolen og ga stilskriving, tegning og elevens egne interesser stor plass. Sagene fikk også landets første folkeskolebibliotek med lesestue.

        Sethne stiftet den norske avdelingen av New Education Fellowship i 1928 og ledet den til 1953, og hun var med og stiftet Norges Lærerinneforbund i 1912 og ledet det 1919–1938. Hun hadde en sentral plass i Lærerorganisasjonenes skolenevnd (1931–1933), Skoleplankomiteen (1935–1938) og Normalplankomiteen (1936–1939). Gjennom dem kom arbeidsskoleprinsippet inn i Normalplanen av 1939, og hun er dermed et bindeledd mellom reformpedagogikken og enhetsskolen.
      `,
      keyWorks: [],
      kilder: [
        nbl("https://nbl.snl.no/Anna_Sethne", "Rolf Grankvist"),
      ],
    },

    // --- Antiautoritær pedagogikk -----------------------------------------
    {
      name: "A.S. Neill", birthYear: 1883, deathYear: 1973, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Antiautoritær pedagogikk"],
      subGenre: ["Frihet i oppdragelsen", "Elevmedvirkning"],
      influenceStart: 1915, influenceEnd: 1973, geography: "Summerhill, Leiston (England)",
      description: `
        Alexander Sutherland Neill var skotsk landsbylærer og skrev om det i *A Dominie's Log* (1915). Han grunnla Summerhill i 1921 som en avdeling av en internasjonal skole i Hellerau ved Dresden, flyttet den til Lyme Regis i 1924 og til Leiston i Suffolk i 1927. Skolen bygger på at barn som får leve uten frykt og ytre tvang, blir lykkelige og selvstendige. Undervisningen er frivillig, og skolens fellesmøte, der elever og lærere har én stemme hver, lager reglene.

        Neill var påvirket av Homer Lane, av psykoanalysen og senere av Wilhelm Reich. Hans tekster er mer forkynnende enn teoretiske, men *Summerhill* (1960) ble solgt i millionopplag og gjorde skolen til et referansepunkt for frie skoler og antiautoritær oppdragelse på 1960- og 70-tallet, også i Norden. Kritikerne har stilt spørsmål ved om frihet kan erstatte kunnskap og struktur, og ved hva slags elever en privat kostskole egentlig kan si noe om.
      `,
      keyWorks: [
        { title: "A Dominie's Log", year: 1915 },
        { title: "The Problem Child", year: 1926 },
        { title: "Summerhill: A Radical Approach to Child Rearing", year: 1960 },
      ],
      kilder: [
        snl("https://snl.no/Alexander_Sutherland_Neill", "Kaare Skagen"),
        brit("https://www.britannica.com/biography/A-S-Neill"),
      ],
    },
    {
      name: "Bertrand Russell", birthYear: 1872, deathYear: 1970, gender: "mann",
      metaGenre: R, instrument: "Filosof", mainGenre: ["Antiautoritær pedagogikk"],
      subGenre: ["Frihet i oppdragelsen"],
      influenceStart: 1926, influenceEnd: 1932, geography: "Beacon Hill School, Sussex",
      description: `
        Russell er kjent som logiker og filosof, men skrev også to bøker om oppdragelse og drev en skole. Sammen med Dora Russell grunnla han Beacon Hill School i 1927, en fri skole for små barn der elevene hadde stor frihet i tale og handling, seksualundervisningen var åpen og religionsundervisning manglet. Han trakk seg ut i 1932, mens Dora drev skolen videre til 1943.

        *On Education, Especially in Early Childhood* (1926) er mindre antiautoritær enn Neills tekster: Russell bygde på behavioristisk psykologi om vanedannelse i de første leveårene og ville forene frihet med disiplin og vitenskapelig oppdragelse. I *Education and the Social Order* (1932) analyserer han konflikten mellom å oppdra individet og å oppdra borgeren, og kritiserer nasjonalismen i skolen. Russell viser at den antiautoritære bølgen også hadde en liberal og rasjonalistisk gren ved siden av den psykoanalytiske.
      `,
      keyWorks: [
        { title: "On Education, Especially in Early Childhood", year: 1926 },
        { title: "Education and the Social Order", year: 1932 },
      ],
      kilder: [
        snl("https://snl.no/Bertrand_Russell", "Jan Harald Alnes og Anders Nes"),
        sep("https://plato.stanford.edu/entries/russell/", "Andrew David Irvine"),
      ],
    },
    {
      name: "Mosse Jørgensen", birthYear: 1921, deathYear: 2009, gender: "kvinne",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Antiautoritær pedagogikk"],
      subGenre: ["Elevmedvirkning", "Frihet i oppdragelsen"],
      influenceStart: 1967, influenceEnd: 2009, geography: "Oslo",
      description: `
        Jørgensen var lærer og var med og startet Forsøksgymnaset i Oslo i 1967, og hun ble skolens første rektor. Skolen ble drevet av elever og lærere sammen gjennom allmøtet, uten den vanlige rektormakten, og ble et symbol for den norske skoleopprørsbevegelsen rundt 1968. *Fra skoleopprør til opprørsskole* (1971) og *En nødvendig skole* (1972) er hennes beretning og begrunnelse.

        Hun var en markant stemme i norsk skoledebatt i fire tiår. I 1977 var hun med og stiftet Lære for livet, og i 2000 Forum Ny Skole, som ville skape alternativer til den offentlige grunnskolen etter Peter Petersens Jena-plan. I 2004 startet hun Nyskolen i Oslo med aldersblandede grupper og medbestemmelse. Hennes arbeid viser hvordan den antiautoritære bølgen i Norge gikk sammen med eldre reformpedagogiske ideer, og hvordan elevmedvirkning ble en del av den norske skoletradisjonen.
      `,
      keyWorks: [
        { title: "Fra skoleopprør til opprørsskole", year: 1971 },
        { title: "En nødvendig skole", year: 1972 },
        { title: "Hverandre", year: 1981 },
        { title: "Skoler jeg møtte", year: 1997 },
        { title: "Ny skole – for lærelyst og livsglede", year: 2005 },
      ],
      kilder: [
        snl("https://snl.no/Mosse_J%C3%B8rgensen"),
        snl("https://snl.no/fors%C3%B8ksgymnas", "Merethe Roos"),
      ],
    },

    // --- Reggio Emilia --------------------------------------------------------
    {
      name: "Loris Malaguzzi", birthYear: 1920, deathYear: 1994, gender: "mann",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Reggio Emilia"],
      subGenre: ["Miljøet som pedagog", "Pedagogisk dokumentasjon", "Skapende arbeid"],
      influenceStart: 1945, influenceEnd: 1994, geography: "Reggio Emilia",
      description: `
        Malaguzzi var lærer og psykolog og knyttet seg i 1945 til foreldrene i Villa Cella utenfor Reggio Emilia, som bygde en førskole med det de fikk for en tysk stridsvogn og noen lastebiler etter krigen. Fra 1963 bygde kommunen sine egne førskoler, og fra 1970 sentre for de minste barna, med Malaguzzi som pedagogisk leder. Han utviklet det som kalles Reggio Emilia-pedagogikken: et bilde av barnet som rikt og kompetent, prosjekter som springer ut av barnas spørsmål, et verksted (*atelier*) med en kunstnerisk utdannet *atelierista*, en pedagogisk veileder (*pedagogista*) og foreldre med reell medbestemmelse.

        Malaguzzi skrev lite systematisk. Ideene finnes i foredrag, artikler og diktet om barnets «hundre språk», og i utstillingen som ble vist i Stockholm i 1981 og senere fikk navnet *The Hundred Languages of Children*. Han trakk eklektisk på Dewey, Piaget, Vygotskij og Bruner. Forskningen har diskutert om Reggio er en metode som kan overføres, eller en lokal, politisk tradisjon som må forstås i sin egen by.
      `,
      keyWorks: [
        { title: "L'occhio se salta il muro (utstilling, senere «The Hundred Languages of Children»)", year: 1981 },
        { title: "Loris Malaguzzi and the Schools of Reggio Emilia: A Selection of His Writings and Speeches, 1945–1993 (red. Cagliari mfl.)", year: 2016 },
      ],
      kilder: [
        side("Reggio Children: Loris Malaguzzi and the Schools of Reggio Emilia.", "https://www.reggiochildren.it/rc/editoria/libri-e-audiovisivi/loris-malaguzzi-and-the-schools-of-reggio-emilia/"),
        bok("Edwards, Carolyn, Lella Gandini og George Forman (red.). The Hundred Languages of Children: The Reggio Emilia Approach to Early Childhood Education. Ablex, 1993."),
      ],
    },
    {
      name: "Carla Rinaldi", birthYear: null, deathYear: 2025, gender: "kvinne",
      metaGenre: R, instrument: "Praktiker", mainGenre: ["Reggio Emilia"],
      subGenre: ["Pedagogisk dokumentasjon"],
      influenceStart: 1970, influenceEnd: 2025, geography: "Reggio Emilia",
      description: `
        Rinaldi begynte som *pedagogista* i Reggio Emilia i 1970 og arbeidet med Malaguzzi til hans død i 1994, senere som pedagogisk leder for de kommunale tilbudene. Hun ledet Reggio Children og fra 2011 Fondazione Reggio Children, der hun ble ærespresident i 2024.

        Hennes bidrag er å ha formulert tradisjonen teoretisk etter Malaguzzi. I *In Dialogue with Reggio Emilia* (2006) kaller hun den en «lyttingens pedagogikk»: pedagogisk dokumentasjon er synlig lytting, der notater, bilder og barnas egne uttrykk gjør læringsprosessen til noe barn, pedagoger og foreldre kan tolke sammen. Dokumentasjon blir slik en form for forskning i praksis og et alternativ til vurdering etter forhåndsgitte mål. Begrepene har hatt stor innflytelse på barnehageforskningen, også i Norden.
      `,
      keyWorks: [
        { title: "In Dialogue with Reggio Emilia: Listening, Researching and Learning", year: 2006 },
      ],
      kilder: [
        side("Fondazione Reggio Children: Carla Rinaldi.", "https://www.frchildren.org/en/who-we-are/people/carla-rinaldi"),
        bok("Rinaldi, Carla. In Dialogue with Reggio Emilia: Listening, Researching and Learning. Routledge, 2006."),
      ],
    },
    {
      name: "Gunilla Dahlberg", birthYear: null, deathYear: null, gender: "kvinne",
      metaGenre: R, instrument: "Forsker", mainGenre: ["Reggio Emilia"],
      subGenre: ["Pedagogisk dokumentasjon"],
      influenceStart: 1999, influenceEnd: null, geography: "Stockholm",
      description: `
        Dahlberg er professor emerita i pedagogikk ved Stockholms universitet og har vært den sentrale formidleren av Reggio Emilia til nordisk barnehageforskning. Hun var med i en tidlig svensk arbeidsgruppe som studerte Reggio, og sitter i det vitenskapelige rådet til Fondazione Reggio Children.

        *Beyond Quality in Early Childhood Education and Care* (1999), skrevet med Peter Moss og Alan Pence, kritiserer kvalitetsbegrepet i barnehagepolitikken: målingen av kvalitet hviler på en utviklingspsykologisk normalitet som gjør barnet til et objekt for standarder. Forfatterne setter i stedet opp «meningsskaping» og pedagogisk dokumentasjon som demokratisk praksis, med Foucault og Deleuze som teoretiske kilder. Boka og *Ethics and Politics in Early Childhood Education* (2005, med Moss) har hatt stor betydning for den postmoderne retningen i barnehageforskningen.
      `,
      keyWorks: [
        { title: "Beyond Quality in Early Childhood Education and Care: Postmodern Perspectives (med Peter Moss og Alan Pence)", year: 1999 },
        { title: "Ethics and Politics in Early Childhood Education (med Peter Moss)", year: 2005 },
      ],
      kilder: [
        side("Reggio Children: Beyond Quality in Early Childhood Education and Care.", "https://www.reggiochildren.it/en/rc/publishing/books-and-audiovisuals/beyond-quality-in-early-childhood-education-and-care/"),
        bok("Dahlberg, Gunilla, Peter Moss og Alan Pence. Beyond Quality in Early Childhood Education and Care: Postmodern Perspectives. Falmer Press, 1999."),
      ],
    },
  ],
};
