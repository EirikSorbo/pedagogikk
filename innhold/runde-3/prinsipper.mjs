// Runde 3 — de nye pedagogiske prinsippene, med felles tekst (fase 6, skrevet av Opus 2026-10-21).
// Prinsippene fra runde 1 og 2 brukes også på teoretikerne her.
import { snl, sep, bok } from "../kilder.mjs";

const p = (description, kilder) => ({ sub: { description, kilder } });

export default {
  genreDescriptions: {
    sub: {
      "Dygd kan læres": p(`
        Spørsmålet om dygd (*aretē*) kan læres, er pedagogikkens eldste. Sofistene, med Protagoras, svarte ja og tok betaling for å lære bort politisk dyktighet. Sokrates tvilte, men prøvde i samtalene å vise at dygd er en form for innsikt, og i Platons *Menon* ender drøftingen med at dygd verken ser ut til å være medfødt eller lært, men kommer som en gave fra gudene, en ironisk konklusjon som har vært tolket på mange måter. Aristoteles svarte at de moralske dygdene læres gjennom vane, mens de intellektuelle læres gjennom undervisning.

        Spørsmålet ligger under all moralsk oppdragelse og karakteroppdragelse, fra kirkefedrene og humanistene til dagens debatter om verdier og dannelse i skolen: kan skolen lære elevene å bli gode mennesker, eller bare å vite hva det gode er?
      `, [sep("https://plato.stanford.edu/entries/socrates/"), sep("https://plato.stanford.edu/entries/protagoras/")]),

      "Dannelse som selvdannelse": p(`
        Prinsippet om at dannelse ikke er noe som gjøres med et menneske, men noe mennesket gjør med seg selv i møte med verden. Humboldt beskrev den som den høyeste og mest harmoniske utfoldelsen av menneskets krefter til en helhet, gjennom et fritt vekselspill med en mangfoldig verden, og nyhumanismen gjorde dette til et program for gymnas og universitet. Oppdragelsen kan bare legge til rette for dannelsen, aldri sikre den.

        Prinsippet har vært tolket både individualistisk, som personlig kultivering, og sosialt, som deltakelse i et kulturelt og politisk fellesskap. Det er kritisert for å ha vært borgerskapets standsmerke, og har fått ny aktualitet i den nordiske dannelsesdebatten etter 2000, som motvekt til en utdanning der målene er gitt utenfra.
      `, [snl("https://snl.no/dannelse"), sep("https://plato.stanford.edu/entries/wilhelm-humboldt/")]),

      "Kategorial dannelse": p(`
        Wolfgang Klafkis begrep (1959) for en dannelse som overvinner motsetningen mellom materiale teorier, som legger vekt på innholdet (kanon, vitenskapens resultater), og formale teorier, som legger vekt på kreftene og metodene. Dannelse er en dobbel åpning: virkeligheten blir kategorialt åpnet for mennesket, og mennesket blir åpnet for virkeligheten. Det skjer gjennom det elementære, fundamentale og eksemplariske: innhold som gir innsikt i mer enn seg selv.

        Den didaktiske analysen, Klafkis spørsmål om innholdets eksemplariske betydning, nåtidsbetydning, framtidsbetydning, struktur og tilgjengelighet, ble pensum i norsk lærerutdanning. Begrepet lever videre i nordisk didaktikk og kan leses som en forløper for ideen om kjerneelementer i fagene.
      `, [snl("https://snl.no/Wolfgang_Klafki")]),

      "Subjektivering": p(`
        Gert Biestas begrep for den dimensjonen av utdanning som handler om at eleven blir et selvstendig subjekt, ved siden av kvalifisering (kunnskaper og ferdigheter) og sosialisering (å bli en del av en tradisjon og et fellesskap). Subjektivering er ikke noe skolen kan produsere eller måle, men det den må gjøre plass til: øyeblikk der eleven blir kalt fram som en som kan handle, tale og ta ansvar. Biesta bygger på Arendt, Levinas og Rancière.

        Prinsippet er formulert som en kritikk av en utdanning som bare spør hva som virker, og av «læringifiseringen» der eleven blir en kunde. Kritikere har spurt om begrepet er for abstrakt til å veilede undervisning, mens mange lærere har funnet i det et språk for det de opplever at målstyringen overser.
      `, [bok("Biesta, Gert. Good Education in an Age of Measurement: Ethics, Politics, Democracy. Paradigm, 2010.")]),

      "Kristen bruk av hedensk dannelse": p(`
        Prinsippet om at den greske og romerske dannelsen kan brukes av kristne, men kritisk og i troens tjeneste. Klemens av Alexandria så filosofien som en forberedelse til evangeliet, Basilios lærte unge menn å lese dikterne som biene, som bare tar honningen, og Augustin sammenlignet de frie kunster med det gullet israelittene tok med seg fra Egypt. Tertullian og senere asketiske strømninger avviste den hedenske kulturen.

        Prinsippet gjorde det mulig å overlevere antikkens dannelse gjennom middelalderen, og det kom tilbake hos humanistene og i diskusjonen om klassiske språk og kristendom i skolen. Det er et tidlig eksempel på spørsmålet om hvordan en tradisjon skal forholde seg til kunnskap fra en annen.
      `, [snl("https://snl.no/Augustin_av_Hippo"), bok("Marrou, Henri-Irénée. Histoire de l'éducation dans l'Antiquité. Seuil, 1948.")]),

      "Den indre læreren": p(`
        Augustins lære i *De magistro* (389): ingen lærer kan ved ord alene overføre kunnskap til en annen. Ordene minner bare om noe eller gir oss grunn til å søke, og forståelsen kommer når vi ser sannheten innvendig, opplyst av Kristus, den indre læreren. Thomas Aquinas modererte tanken i sin egen *De magistro*: læreren kan virkelig undervise, men som legen hjelper naturen, ved å gi tegn og eksempler som eleven bearbeider med sitt eget lys.

        Prinsippet er en tidlig form for tanken om at læring er noe den lærende selv gjør, og at undervisning bare kan legge til rette. Det har slektskap med Sokrates' fødselshjelpskunst og med senere konstruktivistiske ideer, men med en religiøs begrunnelse.
      `, [sep("https://plato.stanford.edu/entries/augustine/"), sep("https://plato.stanford.edu/entries/aquinas/")]),

      "Lectio divina": p(`
        Den hellige lesningen, klostrenes måte å lese Skriften på: langsom, gjentatt og ofte høylytt lesning som går over i meditasjon, bønn og kontemplasjon. Benedikts regel gjorde den til en del av munkenes dag, og den formet klosterskolenes forståelse av hva det vil si å lese og lære: ikke å hente informasjon, men å la teksten forme livet. Hugo av St. Victor beskrev lesning som en vei til visdom.

        Ivan Illich har i *In the Vineyard of the Text* (1993) satt denne lesekulturen opp mot den skolastiske, der boka ble et studieredskap med register og kapitler. Prinsippet er tatt opp igjen i nyere debatter om dyp lesning, langsomhet og konsentrasjon i en digital tid.
      `, [snl("https://snl.no/Benedikt_fra_Nursia"), snl("https://snl.no/Hugo_av_St._Victor")]),

      "Disputas": p(`
        Den skolastiske metoden der et spørsmål drøftes ved at argumenter for og mot stilles opp, og en lærer gir en løsning og svarer på innvendingene. Abélard la grunnen med *Sic et non*, der motstridende autoriteter stilles mot hverandre, og ved universitetene ble disputasen, ved siden av forelesningen, den viktigste undervisnings- og eksamensformen. Thomas Aquinas' *Summa* er bygd som en rekke disputerte spørsmål.

        Disputasen lever videre i doktordisputasen, i debattøvelser og i undervisning som bygger på argumentasjon. Humanistene kritiserte den for å gjøre lærdom til ordkløveri, men den er også et tidlig eksempel på en kultur der kunnskap prøves gjennom kritikk.
      `, [sep("https://plato.stanford.edu/entries/abelard/"), snl("https://snl.no/Thomas_Aquinas")]),

      "Katekismeundervisning": p(`
        Undervisning i troens hovedstykker ved spørsmål og svar som læres utenat og forklares. Luthers *Lille katekisme* (1529) gjorde husfaren til lærer, og katekismen ble den viktigste læreboka i protestantiske land i flere hundre år, med Pontoppidans forklaring (1737) i Danmark-Norge. Den katolske kirken svarte med Canisius' katekismer, og pietismen ga katekismen en ny alvor gjennom konfirmasjonen.

        Katekismeundervisningen ga folket lesekyndighet og en felles tro, men også pugg, frykt og kontroll, og den ble et hovedmål for kritikken fra filantropistene, Grundtvig og reformpedagogene. I Norge var kristendomskunnskap med katekisme et sentralt fag i folkeskolen til langt ut på 1900-tallet.
      `, [snl("https://snl.no/Martin_Luther"), snl("https://snl.no/konfirmasjon")]),

      "Cura personalis": p(`
        Omsorgen for hele personen, et prinsipp i jesuittenes pedagogikk med røtter i Ignatius' *Åndelige øvelser*: veilederen tilpasser øvelsene til den enkelte, og læreren skal kjenne elevenes evner, svakheter og behov. *Ratio studiorum* (1599) kombinerte en felles og streng studieordning med oppmerksomhet på den enkelte elev, og jesuittenes skoler ble kjent for både disiplin og personlig veiledning.

        Prinsippet brukes i dag i jesuittskoler og -universiteter over hele verden, og har slektskap med moderne ideer om tilpasset opplæring og helhetlig oppfølging. Kritikere har pekt på at den personlige omsorgen også var et redskap for kontroll og påvirkning.
      `, [snl("https://snl.no/Ignatius_av_Loyola"), bok("O'Malley, John W. The First Jesuits. Harvard University Press, 1993.")]),

      "Viljens oppdragelse": p(`
        Prinsippet om at oppdragelsen må forme, og i den pietistiske versjonen bryte, barnets egenvilje, slik at det blir lydig mot Gud, foreldre og øvrighet. August Hermann Francke gjorde det til et grunnprinsipp i Halle: barnet skal stadig være under tilsyn, lediggang og lek holdes på et minimum, og egenviljen brytes for at en ny, from vilje skal vokse fram. Ideen hadde røtter i luthersk syn på arvesynden og ble videreført i borgerlig oppdragelse på 1700- og 1800-tallet.

        Kritikken har vært sterk. Rousseau og reformpedagogene satte barnets egen vilje og frihet i sentrum, og Katharina Rutschky og Alice Miller har kalt denne tradisjonen «svart pedagogikk». Viljens oppdragelse har likevel også en mildere form, som oppøving av selvkontroll og karakter, som finnes i Herbarts og senere pedagogikk.
      `, [snl("https://snl.no/August_Hermann_Francke"), snl("https://snl.no/pietisme")]),

      "Myndighet": p(`
        Myndighet (*Mündigkeit*) er Kants opplysningsideal, menneskets utgang fra sin selvforskyldte umyndighet, gjort til oppdragelsens mål av Adorno: et demokrati forutsetter mennesker som tenker selv og kan si nei, og oppdragelsen må motvirke den autoritære karakteren som gjorde Auschwitz mulig. Myndighet er ikke tilpasning, men evnen til kritisk refleksjon over seg selv og samfunnet.

        Prinsippet ble et nøkkelbegrep i den kritisk-emansipatoriske pedagogikken i Tyskland og i Klafkis evne til selvbestemmelse, medbestemmelse og solidaritet, og står i dag i læreplanens vekt på kritisk tenkning og demokrati. Kritikere har spurt hvordan en skole med plikt og vurdering kan oppdra til myndighet, et paradoks Kant selv formulerte.
      `, [sep("https://plato.stanford.edu/entries/adorno/"), snl("https://snl.no/Theodor_W._Adorno")]),

      "Bevisstgjøring": p(`
        Freires *conscientização*: en prosess der mennesker gjennom dialog og refleksjon blir bevisste på de sosiale, politiske og økonomiske forholdene som undertrykker dem, og handler for å forandre dem. Bevisstgjøringen er ikke noe læreren gir eleven, men noe de gjør sammen når undervisningen tar utgangspunkt i elevenes egne erfaringer og «generative» temaer.

        Prinsippet er kjernen i frigjøringspedagogikken og den kritiske pedagogikken, og er brukt i alt fra voksenopplæring og folkebevegelser til lærerutdanning. Kritikerne, blant dem Elizabeth Ellsworth, har pekt på at det lett blir læreren som definerer hva elevene skal bli bevisste på, og at bevisstgjøring kan bli indoktrinering med motsatt fortegn.
      `, [snl("https://snl.no/Paulo_Freire"), bok("Freire, Paulo. De undertryktes pedagogikk. Gyldendal, 1974.")]),

      "Den skjulte læreplanen": p(`
        Den skjulte læreplanen er det skolen lærer elevene uten at det står i noen plan: å vente, adlyde, konkurrere, bli vurdert, tåle kjedsomhet og akseptere sin plass. Philip Jackson ga begrepet navn i *Life in Classrooms* (1968), og skolekritikerne rundt 1970 gjorde det til en kjerne i kritikken: Illich mente den skjulte læreplanen lærer folk å forveksle undervisning med læring, Bourdieu og Bernstein viste hvordan den favoriserer middelklassens kultur og språk, og Bowles og Gintis knyttet den til kapitalismens arbeidsdisiplin.

        Begrepet er et av de mest brukte i kritisk pedagogikk og utdanningssosiologi, og har gjort skolens organisering, ritualer og vurderingsformer til gjenstand for pedagogisk refleksjon. I Norge ble det tatt i bruk i skolekritikken etter 1970 og står i dag i lærerutdanningens pensum.
      `, [snl("https://snl.no/Pierre_Bourdieu"), snl("https://snl.no/Basil_Bernstein"), bok("Illich, Ivan. Deschooling Society. Harper & Row, 1971.")]),

      "Transformative intellektuelle": p(`
        Henry Giroux' begrep (*Teachers as Intellectuals*, 1988) for lærere som ikke bare er teknikere som gjennomfører andres planer, men intellektuelle som reflekterer over skolens mål, forbinder undervisningen med samfunnsspørsmål og gjør klasserommet til et sted for kritisk tenkning og demokratisk praksis. Begrepet bygger på Gramscis organiske intellektuelle og er rettet mot en skolepolitikk som standardiserer undervisningen.

        Prinsippet har vært viktig i forsvaret for lærerprofesjonens autonomi og i lærerutdanning med vekt på sosial rettferdighet. Kritikere har pekt på at det stiller store krav til den enkelte lærer og kan gjøre undervisning til politisk agitasjon.
      `, [bok("Giroux, Henry A. Theory and Resistance in Education: A Pedagogy for the Opposition. Bergin & Garvey, 1983.")]),

      "Normkritikk": p(`
        Normkritikk er et pedagogisk prinsipp om å synliggjøre og utfordre normene som gjør noen til «normale» og andre til avvikere, når det gjelder kjønn, seksualitet, etnisitet, funksjonsevne, alder og klasse. I stedet for å lære om «de andre» (toleransepedagogikk) skal undervisningen undersøke hvordan normer skapes, hvem de privilegerer og hvordan de kan endres. Kumashiro, Butler og skeiv teori er viktige kilder, og normkritisk pedagogikk ble et eget felt i Sverige med Bromseth og Darj (2010).

        Prinsippet er brukt i arbeid mot mobbing og diskriminering, i lærerutdanning og i læremiddelanalyse. Det er også sterkt omdiskutert: kritikerne mener det gjør alle normer mistenkelige, moraliserer og blander politikk og pedagogikk, mens tilhengerne ser det som en forutsetning for et inkluderende fellesskap.
      `, [bok("Kumashiro, Kevin K. «Toward a Theory of Anti-Oppressive Education.» Review of Educational Research 70, nr. 1 (2000): 25–53."), bok("Bromseth, Janne og Frida Darj (red.). Normkritisk pedagogik: Makt, lärande och strategier för förändring. Centrum för genusvetenskap, Uppsala universitet, 2010.")]),
    },
  },
};
