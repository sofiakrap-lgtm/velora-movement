// Velora Movement · modaali + kielenvaihto (FI/SV).
(function () {
  "use strict";

  // ---------- Käännökset: suomi (avain) -> ruotsi (arvo) ----------
  // T = pelkkä teksti, H = sisältää inline-tageja (<em>/<br>), TITLES = sivun otsikot.
  var T = {
    // Navigaatio & yleiset
    Etusivu: "Hem",
    Palvelut: "Tjänster",
    Kauppa: "Butik",
    Meistä: "Om oss",
    Yhteisö: "Gemenskap",
    Yhteystiedot: "Kontakt",
    Hinnasto: "Prislista",
    "Treenaa itsestäsi arjen sankariksi": "Träna dig till vardagens hjälte",
    "Liity asiakkaaksi": "Bli medlem",
    "Löydä oma rytmisi →": "Hitta din rytm →",
    "Liity →": "Gå med →",
    "Katso paketit →": "Se paketen →",
    "Varaa aikasi →": "Boka din tid →",
    "Tutustu tunteihin →": "Utforska passen →",
    "Ilmoittaudu →": "Anmäl dig →",
    "Tule mukaan →": "Kom med →",
    "Liity seuraan →": "Slut dig till oss →",
    "Varaa tunti →": "Boka pass →",
    "Siirry liittymään →": "Gå vidare till anmälan →",
    "Katso asiakastarinat →": "Se kundberättelser →",
    "Liity jäseneksi →": "Bli medlem →",
    // Etusivu
    "Mistä meidät tunnistaa": "Där du känner igen oss",
    "Paketit & hinnat": "Paket & priser",
    "Kolme tasoa, oma rytmisi. Valitse paketti, joka sopii viikkoosi, vaihda tasoa milloin tahansa, ilman kiirettä.":
      "Tre nivåer, din egen rytm. Välj det paket som passar din vecka, byt nivå när du vill, utan brådska.",
    Aloittelija: "Nybörjare",
    Keskitaso: "Mellannivå",
    Edistynyt: "Avancerad",
    Suosituin: "Populärast",
    "/ kk": "/ mån",
    "1 joogatunti / vko": "1 yogapass / vecka",
    "1 stretching / vko": "1 stretching / vecka",
    "Online-jäsenyys": "Onlinemedlemskap",
    "2 joogatuntia / vko": "2 yogapass / vecka",
    "1 pilates / vko": "1 pilates / vecka",
    "1 core / vko": "1 core / vecka",
    "Rajattomat tunnit / vko": "Obegränsade pass / vecka",
    "Kaikki lajit": "Alla grenar",
    Prioriteettivaraus: "Prioriterad bokning",
    Tutkittua: "Forskning visar",
    "Pieni liike, iso vaikutus.": "Liten rörelse, stor effekt.",
    "Päivittäistä liikettä riittää kohottamaan vireystilaa ja keskittymistä läpi päivän.":
      "Daglig rörelse räcker för att höja energinivån och koncentrationen genom hela dagen.",
    "Parempi keskittymiskyky jo lyhyen, kevyen liikuntahetken jälkeen.":
      "Bättre koncentrationsförmåga redan efter en kort, lätt rörelsestund.",
    "Suurempi osuus syvää, palauttavaa unta säännöllisellä liikkeellä.":
      "Större andel djup, återhämtande sömn med regelbunden rörelse.",
    "Nopeampi palautuminen, kun keho saa liikkua omaan tahtiinsa.":
      "Snabbare återhämtning när kroppen får röra sig i sin egen takt.",
    "Mitä yksi treeni viikossa voi muuttaa elämässäsi":
      "Vad ett pass i veckan kan förändra i ditt liv",
    "Parempi mieliala": "Bättre humör",
    "Enemmän unta viikossa": "Mer sömn i veckan",
    "Enemmän energiaa arkeen": "Mer energi i vardagen",
    "Jo yksi tunti viikossa riittää käynnistämään muutoksen. Aloita pienestä, keho ja mieli seuraavat perässä.":
      "Redan en timme i veckan räcker för att sätta igång förändringen. Börja smått, kropp och sinne följer efter.",
    "Velora-jäsenyys": "Velora-medlemskap",
    "Liity asiakkaaksemme": "Bli vår medlem",
    "Saat ensimmäisenä tiedon palveluistamme, tarjouksista, yksityistapahtumista ja kampanjoista.":
      "Du får först veta om våra tjänster, erbjudanden, privata evenemang och kampanjer.",
    // Testimonialit
    "Löysin oman rytmini, vihdoin.": "Jag hittade min egen rytm, äntligen.",
    "Velorassa sain luvan hidastaa. Enää en suorita, vaan nautin liikkeestä ja hengityksestä. Olo on kevyempi niin matolla kuin sen ulkopuolella.":
      "På Velora fick jag lov att sakta ner. Jag presterar inte längre, utan njuter av rörelsen och andningen. Jag känner mig lättare både på mattan och utanför den.",
    "Pieni studio, iso ero arkeen.": "Liten studio, stor skillnad i vardagen.",
    "Lämmin ja kiireetön tunnelma sai minut palaamaan viikoittain. Uni on syventynyt ja stressi helpottanut huomattavasti, ilman suorittamisen tunnetta.":
      "Den varma och lugna stämningen fick mig att återvända varje vecka. Sömnen har blivit djupare och stressen lättat betydligt, utan prestationskänsla.",
    "Tänne on helppo tulla omana itsenään.":
      "Här är det lätt att komma som sig själv.",
    "Ei peilejä, ei kilpailua, vain kannustava yhteisö. Tunnen kuuluvani joukkoon ensimmäistä kertaa vuosiin, ja se näkyy koko viikossani.":
      "Inga speglar, ingen tävling, bara en uppmuntrande gemenskap. Jag känner mig hemma för första gången på flera år, och det märks i hela min vecka.",
    "Sanna R. · jäsen 1 v": "Sanna R. · medlem 1 år",
    "Hanna T. · jäsen 6 kk": "Hanna T. · medlem 6 mån",
    "Leila P. · jäsen 2 v": "Leila P. · medlem 2 år",
    "Anni M. · jäsen": "Anni M. · medlem",
    "Maria K. · jäsen": "Maria K. · medlem",
    // Palvelut / lajisivut
    "Säännöllinen liike on helpompaa, kun se kuuluu viikkoosi. Kokoa itsellesi sopiva kokonaisuus, kolme tasoa, oma rytmisi, ilman kiirettä.":
      "Regelbunden rörelse är lättare när den hör till din vecka. Sätt ihop en helhet som passar dig, tre nivåer, din egen rytm, utan brådska.",
    Joogatunnit: "Yogapass",
    "Laji 01": "Gren 01",
    "Laji 02": "Gren 02",
    "Laji 03": "Gren 03",
    "Laji 04": "Gren 04",
    "Pehmeää, hengityksen tahdittamaa liikettä, joka avaa kehon ja rauhoittaa mielen. Tunneilla on tilaa hidastaa, ei suorittamista, vain läsnäoloa.":
      "Mjuk rörelse i andningens takt som öppnar kroppen och lugnar sinnet. På passen finns utrymme att sakta ner, ingen prestation, bara närvaro.",
    "Hallittua, syvää keskivartalon työtä, joka rakentaa ryhtiä ja voimaa. Pienissä ryhmissä jokainen liike ohjataan tarkasti ja kiireettä.":
      "Kontrollerat, djupt bålarbete som bygger hållning och styrka. I små grupper instrueras varje rörelse noggrant och utan brådska.",
    "Rauhallista, syvää venyttelyä, joka avaa jännitykset ja palauttaa liikkuvuuden. Täydellinen vastapaino kiireiselle viikolle.":
      "Lugn, djup stretching som löser upp spänningar och återställer rörligheten. Den perfekta motvikten till en hektisk vecka.",
    "Tehokasta mutta hallittua keskivartalon harjoittelua, joka tukee koko kehon voimaa ja ryhtiä. Lyhyt, tiivis ja energinen.":
      "Effektiv men kontrollerad bålträning som stöder hela kroppens styrka och hållning. Kort, koncentrerad och energisk.",
    "Mikä kunto pitää olla?": "Vilken kondition krävs?",
    "Mitä otan mukaan?": "Vad tar jag med mig?",
    "Kenelle tunti sopii?": "Vem passar passet för?",
    "Kuinka kauan tunti kestää?": "Hur länge varar passet?",
    "Tarvitseeko varata etukäteen?": "Måste man boka i förväg?",
    "Voinko tulla rajoitteiden kanssa?": "Kan jag komma med begränsningar?",
    "Ei ennakkovaatimuksia. Tunnit sopivat kaikentasoisille, ja liikkeet sovitetaan omaan kehoosi.":
      "Inga förkunskaper krävs. Passen passar alla nivåer, och rörelserna anpassas till din kropp.",
    "Mukavat vaatteet ja oma juomapullo riittävät. Joogamatot ja apuvälineet löytyvät studiolta.":
      "Bekväma kläder och en egen vattenflaska räcker. Yogamattor och redskap finns i studion.",
    "Niin aloittelijalle kuin kokeneellekin, jokainen liikkuu omassa tahdissaan.":
      "Både för nybörjare och erfarna, var och en rör sig i sin egen takt.",
    "Tunti kestää noin 60 minuuttia.": "Passet varar cirka 60 minuter.",
    "Suosittelemme varaamaan paikan etukäteen, sillä ryhmät ovat pieniä.":
      "Vi rekommenderar att du bokar plats i förväg, eftersom grupperna är små.",
    "Kyllä. Kerro ohjaajalle ennen tuntia, niin sovitamme liikkeet sinulle turvallisiksi.":
      "Ja. Berätta för instruktören före passet, så anpassar vi rörelserna så att de är trygga för dig.",
    "Pilates sopii kaikille kuntotasoille; liikkeitä kevennetään tai haastetaan tarpeen mukaan.":
      "Pilates passar alla konditionsnivåer; rörelserna förenklas eller utmanas efter behov.",
    "Joustavat vaatteet ja liukuestesukat. Välineet ovat valmiina studiolla.":
      "Töjbara kläder och halkfria strumpor. Redskapen finns färdiga i studion.",
    "Onko reformer- vai mattopilatesta?": "Är det reformer- eller mattpilates?",
    "Tarjoamme molempia. Aloittelijalle suosittelemme aloittamaan mattotunnilla.":
      "Vi erbjuder båda. För nybörjare rekommenderar vi att börja med ett mattpass.",
    "Tunti kestää noin 50 minuuttia.": "Passet varar cirka 50 minuter.",
    "Sopiiko selkä- tai niskavaivoihin?":
      "Passar det vid rygg- eller nackbesvär?",
    "Usein kyllä, ja se voi jopa helpottaa oireita. Kerro vaivoistasi ohjaajalle etukäteen.":
      "Ofta ja, och det kan till och med lindra symtom. Berätta om dina besvär för instruktören i förväg.",
    "Kyllä, paikkoja on rajoitetusti pienen ryhmäkoon vuoksi.":
      "Ja, antalet platser är begränsat på grund av den lilla gruppstorleken.",
    "Ei mitään, stretching sopii kaikille ja on hellävarainen keholle.":
      "Ingenting, stretching passar alla och är skonsam mot kroppen.",
    "Mukavat, joustavat vaatteet ja oma juomapullo. Matot löytyvät studiolta.":
      "Bekväma, töjbara kläder och en egen vattenflaska. Mattorna finns i studion.",
    "Erityisesti heille, jotka istuvat paljon tai kaipaavat palautumista.":
      "Särskilt för dem som sitter mycket eller behöver återhämtning.",
    "Tunti kestää noin 45 minuuttia.": "Passet varar cirka 45 minuter.",
    "Voiko tulla jäykkänä?": "Kan man komma stel?",
    "Juuri silloin kannattaa tulla, liikkuvuus paranee vähitellen, omaan tahtiin.":
      "Just då lönar det sig att komma, rörligheten förbättras gradvis, i din egen takt.",
    "Suosittelemme varausta, mutta paikkoja on usein myös ovelta.":
      "Vi rekommenderar bokning, men det finns ofta platser även vid dörren.",
    "Peruskunto riittää; liikkeet on helppo skaalata omalle tasolle.":
      "Grundkondition räcker; rörelserna är lätta att anpassa till din egen nivå.",
    "Treenivaatteet, juomapullo ja pyyhe. Välineet ovat paikalla.":
      "Träningskläder, vattenflaska och handduk. Redskapen finns på plats.",
    "Heille, jotka haluavat vahvistaa keskivartaloa ja lisätä liikkeen tehoa.":
      "För dem som vill stärka bålen och öka rörelsens effekt.",
    "Tunti kestää noin 30 minuuttia tiivistä työtä.":
      "Passet varar cirka 30 minuter koncentrerat arbete.",
    "Onko tunti rankka?": "Är passet hårt?",
    "Tehokas mutta hallittu, pidät itse tahdin ja lepäät tarvittaessa.":
      "Effektivt men kontrollerat, du bestämmer takten själv och vilar vid behov.",
    "Kyllä, varaa paikkasi etukäteen ryhmäkoon vuoksi.":
      "Ja, boka din plats i förväg på grund av gruppstorleken.",
    // Kauppa
    "Lepo · rauhoittava eteerinen öljy": "Lepo · lugnande eterisk olja",
    "24 arvostelua": "24 recensioner",
    Kuvaus: "Beskrivning",
    "Rauhoittava eteerinen öljyseos laventelia ja setripuuta. Hetki itselle keskellä kiireistä arkea.":
      "En lugnande eterisk oljeblandning av lavendel och cederträ. En stund för dig själv mitt i en hektisk vardag.",
    "Muutama tippa ranteisiin tai matolle ennen harjoitusta, hengitä syvään ja anna kiireen laskeutua.":
      "Några droppar på handlederna eller mattan före passet, andas djupt och låt brådskan lägga sig.",
    "100 % luonnollinen. Eläinkokeeton. Valmistettu Suomessa.":
      "100 % naturlig. Inte testad på djur. Tillverkad i Finland.",
    "Lisää koriin": "Lägg i varukorgen",
    "Tallenna suosikki": "Spara favorit",
    // Kauppa · tuotteet
    "Hyvinvointia kotiin": "Välmående hemma",
    "Pieni valikoima rauhoittavaa itsehoitoa ja studiotarvikkeita, jotka tuovat Veloran tunnelman myös maton ulkopuolelle.":
      "Ett litet urval av lugnande egenvård och studiotillbehör som tar med sig Veloras stämning även utanför mattan.",
    "Joogasetti kotiin": "Yogaset för hemmet",
    "Joogamatto ja faskiapallo pehmeään kotiharjoitteluun.":
      "Yogamatta och fasciaboll för mjuk träning hemma.",
    "Pilatessetti kotiin": "Pilatesset för hemmet",
    "Matto ja käsipainot keskivartalon vahvistukseen kotona.":
      "Matta och handvikter för att stärka bålen hemma.",
    "Pyyhesetti, kolme kpl": "Handduksset, tre st.",
    "Kolme pehmeää puuvillapyyhettä lämpimissä sävyissä.":
      "Tre mjuka bomullshanddukar i varma toner.",
    Kylpytossut: "Badtofflor",
    "Pehmeät tossut rauhalliseen iltahetkeen.":
      "Mjuka tofflor för en lugn kvällsstund.",
    Kylpysetti: "Badset",
    "Kylpysuola, vaahto ja scrub rentouttavaan kylpyyn.":
      "Badsalt, skum och scrub för ett avkopplande bad.",
    "Kylpytakki, vaalea": "Badrock, ljus",
    "Kevyt ja pehmeä puuvillakylpytakki.": "Lätt och mjuk badrock i bomull.",
    Luonnonsaippua: "Naturtvål",
    "Käsintehty palasaippua luonnon raaka-aineista.":
      "Handgjord tvål av naturliga råvaror.",
    "Teräksinen juomapullo": "Vattenflaska i stål",
    "Pitää veden viileänä matolla ja sen ulkopuolella.":
      "Håller vattnet svalt på mattan och utanför.",
    "Ekologinen kylpysetti": "Ekologiskt badset",
    "Luonnonkuituharja ja merisieni hellävaraiseen ihonhoitoon.":
      "Naturfiberborste och havssvamp för skonsam hudvård.",
    "Käsi- & jalkavoide": "Hand- & fotkräm",
    "Kosteuttava voidepari käsille ja jaloille.":
      "Återfuktande krämpar för händer och fötter.",
    "Pään hierontasetti": "Huvudmassageset",
    "Gua sha -kampa ja hierontaöljy rentoutukseen.":
      "Gua sha-kam och massageolja för avslappning.",
    "Ilmainen toimitus yli 60 €": "Fri frakt över 60 €",
    "Toimitus 2–4 arkipäivää": "Leverans 2–4 vardagar",
    Ainesosat: "Ingredienser",
    "Laventeliöljy, setripuuöljy, bergamotti ja jojobaöljy. Ei keinotekoisia tuoksuja, väriaineita tai säilöntäaineita.":
      "Lavendelolja, cederträolja, bergamott och jojobaolja. Inga konstgjorda dofter, färgämnen eller konserveringsmedel.",
    "Lue lisää": "Läs mer",
    Käyttö: "Användning",
    "Tiputa muutama pisara ranteisiin, niskaan tai joogamatolle. Hengitä rauhassa sisään ennen harjoitusta tai illan rauhoittuessa.":
      "Droppa några droppar på handlederna, nacken eller yogamattan. Andas lugnt in före passet eller när kvällen lugnar ner sig.",
    "Vältä suoraa kosketusta silmiin. Säilytä viileässä ja valolta suojattuna.":
      "Undvik direkt kontakt med ögonen. Förvara svalt och skyddat från ljus.",
    "Saatat pitää myös näistä": "Du kanske också gillar dessa",
    "Hiljaisuus · tuoksukynttilä": "Tystnad · doftljus",
    "Juuri · villaiset grip-sukat": "Juuri · greppstrumpor i ull",
    Faskiapallo: "Fasciaboll",
    // Meistä
    "2021 · Idea syntyi": "2021 · Idén föddes",
    "2022 · Ensimmäinen studio": "2022 · Första studion",
    "2024 · Kasvava yhteisö": "2024 · Växande gemenskap",
    "Tänään · Sinä mukaan": "Idag · Du med",
    Tarinamme: "Vår historia",
    "Velora syntyi kahden siskon unelmasta: luoda tila, jonne jokainen voi tulla tukemaan omaa hyvinvointiaan kiireisen arjen keskellä. Ei suorittamista, ei vaatimuksia, vain lämmin paikka hidastaa ja hengittää.":
      "Velora föddes ur två systrars dröm: att skapa ett rum dit alla kan komma för att stödja sitt eget välmående mitt i en hektisk vardag. Ingen prestation, inga krav, bara en varm plats att sakta ner och andas.",
    "Mihin uskomme": "Vad vi tror på",
    Läsnäolo: "Närvaro",
    "Jokainen hetki matolla on tilaisuus pysähtyä. Harjoittelemme läsnäoloa, emme suorittamista.":
      "Varje stund på mattan är ett tillfälle att stanna upp. Vi övar närvaro, inte prestation.",
    "Pieni studio, tutut kasvot. Täällä jokainen kuuluu joukkoon omana itsenään, ilman vertailua.":
      "Liten studio, bekanta ansikten. Här hör var och en hemma som sig själv, utan jämförelse.",
    Hellävaraisuus: "Skonsamhet",
    "Kuuntelemme kehoa ja kunnioitamme sen rajoja. Liikkeen kuuluu tuntua hyvältä.":
      "Vi lyssnar på kroppen och respekterar dess gränser. Rörelse ska kännas bra.",
    // Yhteisö
    Tervetuloa: "Välkommen",
    "Tule osaksi yhteisöä": "Bli en del av gemenskapen",
    "Velora on enemmän kuin studio, se on yhteisö. Workshopit, tapahtumat, yhteislenkit ja kahvittelut tuovat yhteen naisia, jotka kaipaavat hetkeä irti arjen pyörityksestä. Sillä kun pidät huolta itsestäsi, siitä hyötyvät myös läheisesi. Tervetuloa juuri sellaisena kuin olet.":
      "Velora är mer än en studio, det är en gemenskap. Workshops, evenemang, gemensamma promenader och kaffestunder för samman kvinnor som längtar efter en stund bort från vardagens snurr. För när du tar hand om dig själv, gynnas även dina nära. Välkommen precis som du är.",
    "Mitä saat jäsenenä": "Vad du får som medlem",
    "Workshopit & tapahtumat": "Workshops & evenemang",
    "Jäsenille suunnatut workshopit ja tapahtumat läpi vuoden, oppia, inspiraatiota ja uusia tuttavuuksia.":
      "Workshops och evenemang för medlemmar året runt, lärdomar, inspiration och nya bekantskaper.",
    "Yhteislenkit & kahvittelut": "Gemensamma promenader & kaffestunder",
    "Rento yhteisö, joka kokoontuu liikkumaan ja jakamaan hetkiä myös maton ulkopuolella.":
      "En avslappnad gemenskap som samlas för att röra på sig och dela stunder även utanför mattan.",
    Jäsenedut: "Medlemsförmåner",
    "Jäsenhinnat tunneista, ennakkovaraukset ja vain jäsenille räätälöidyt tarjoukset.":
      "Medlemspriser på pass, förhandsbokningar och erbjudanden skräddarsydda enbart för medlemmar.",
    "Tulevat tapahtumat": "Kommande evenemang",
    "Aamujooga & smoothie": "Morgonyoga & smoothie",
    "Sunnuntain yhteislenkki": "Söndagens gemensamma promenad",
    "Kahvit & keskustelu": "Kaffe & samtal",
    "Hengitys-workshop": "Andningsworkshop",
    "Aamujoogan rauhaa": "Morgonyogans lugn",
    "Yhteinen hetki ennen arjen kiireen alkua.":
      "En gemensam stund innan vardagens brådska börjar.",
    Yhteislenkillä: "På gemensam promenad",
    "Liikettä ja raitista ilmaa luonnossa, hyvässä seurassa.":
      "Rörelse och frisk luft i naturen, i gott sällskap.",
    "Lämpöä, hyviä juttuja ja kiireettömiä hetkiä.":
      "Värme, goda samtal och stunder utan brådska.",
    "Workshop-tunnelmaa": "Workshopstämning",
    "Yhdessä oppimista ja pieniä oivalluksia.":
      "Lärande tillsammans och små insikter.",
    // Tapahtumasivut
    Tapahtuma: "Evenemang",
    "Aloita viikonloppu rauhallisella aamujoogalla ja yhteisellä smoothie-hetkellä. Pehmeää liikettä, hyvää seuraa ja raikas alku päivään.":
      "Inled helgen med en lugn morgonyoga och en gemensam smoothiestund. Mjuk rörelse, gott sällskap och en fräsch start på dagen.",
    "Milloin?": "När?",
    "Missä?": "Var?",
    "Kenelle?": "För vem?",
    "Paljonko maksaa?": "Vad kostar det?",
    "Miten ilmoittaudun?": "Hur anmäler jag mig?",
    "Pitääkö ilmoittautua?": "Måste man anmäla sig?",
    "Lauantaisin klo 9.00–10.30.": "Lördagar kl. 9.00–10.30.",
    "Velora-studiolla, Helsingissä.": "I Velora-studion, Helsingfors.",
    "Kaikentasoisille, myös aloittelijoille.":
      "För alla nivåer, även nybörjare.",
    "Mukavat vaatteet ja oma juomapullo. Matot löytyvät studiolta.":
      "Bekväma kläder och en egen vattenflaska. Mattorna finns i studion.",
    "Jäsenille maksuton, muille 15 €.": "Gratis för medlemmar, annars 15 €.",
    "Varaa paikkasi etukäteen, paikkoja on rajoitetusti.":
      "Boka din plats i förväg, antalet platser är begränsat.",
    "Rento yhteislenkki luonnossa, liikettä, raitista ilmaa ja hyvää seuraa. Jokainen kulkee omaan tahtiinsa, kiireettä.":
      "En avslappnad gemensam promenad i naturen, rörelse, frisk luft och gott sällskap. Var och en går i sin egen takt, utan brådska.",
    "Sunnuntaisin klo 10.00.": "Söndagar kl. 10.00.",
    "Lähtö Velora-studiolta, reitti luonnossa.":
      "Start från Velora-studion, rutten går i naturen.",
    "Kaikille, kulkutahdin valitset itse.": "För alla, du väljer själv takten.",
    "Säänmukaiset vaatteet ja juomapullo.":
      "Väderanpassade kläder och en vattenflaska.",
    "Maksuton kaikille.": "Gratis för alla.",
    "Ei pakollista, tule paikalle sellaisena kuin olet.":
      "Inte obligatoriskt, kom precis som du är.",
    "Lämmin hetki kahvikupin äärellä, jaamme ajatuksia hyvinvoinnista ja arjesta kiireettömästi, hyvässä seurassa.":
      "En varm stund vid en kopp kaffe, vi delar tankar om välmående och vardag i lugn och ro, i gott sällskap.",
    "Kerran kuussa, lauantai-iltapäivisin.":
      "En gång i månaden, lördagseftermiddagar.",
    "Velora-studion loungessa.": "I Velora-studions lounge.",
    "Jäsenille ja vieraille, kaikki tervetulleita.":
      "För medlemmar och gäster, alla är välkomna.",
    "Vain itsesi. Kahvit ja pienet purtavat tarjotaan.":
      "Bara dig själv. Kaffe och lite tilltugg bjuds.",
    "Maksuton.": "Gratis.",
    "Ilmoittautuminen on vapaaehtoista mutta auttaa meitä varautumaan.":
      "Anmälan är frivillig men hjälper oss att förbereda.",
    "Syvenny hengityksen voimaan ohjatussa workshopissa. Opit yksinkertaisia harjoituksia rauhoittumiseen ja palautumiseen arjen keskellä.":
      "Fördjupa dig i andningens kraft i en ledd workshop. Du lär dig enkla övningar för att lugna ner och återhämta dig mitt i vardagen.",
    "Kerran kaudessa, sunnuntai-iltapäivisin.":
      "En gång per säsong, söndagseftermiddagar.",
    "Kaikille, aiempaa kokemusta ei tarvita.":
      "För alla, ingen tidigare erfarenhet behövs.",
    "Mukavat vaatteet ja oma huopa tai viltti.":
      "Bekväma kläder och en egen filt.",
    "29 €, jäsenille 19 €.": "29 €, för medlemmar 19 €.",
    "Varaa paikkasi etukäteen, ryhmä on pieni.":
      "Boka din plats i förväg, gruppen är liten.",
    // Yhteystiedot
    "Tule käymään Punavuoressa.": "Kom och hälsa på i Rödbergen.",
    Osoite: "Adress",
    Sähköposti: "E-post",
    Puhelin: "Telefon",
    Avoinna: "Öppet",
    "Velora · Punavuori": "Velora · Rödbergen",
    Studiosali: "Studiosal",
    "Lämmin, luonnonvaloa tulviva tila liikkeelle.":
      "Ett varmt utrymme för rörelse, fyllt av naturligt ljus.",
    Loungetila: "Loungeutrymme",
    "Hetki hengähtää ennen tai jälkeen tunnin.":
      "En stund att pusta ut före eller efter passet.",
    Pukuhuone: "Omklädningsrum",
    "Rauhallinen, huoliteltu ja kodikas.": "Lugnt, välskött och hemtrevligt.",
    "Punavuoren kulma": "Hörnet i Rödbergen",
    "Studio sydämessä kaupunkia, omassa rauhassaan.":
      "En studio i hjärtat av staden, i sitt eget lugn.",
    // Modaali
    "Kanta-asiakkuus": "Stamkundskap",
    "Tervetuloa Veloran kanta-asiakkaaksi": "Välkommen som stamkund hos Velora",
    "Kanta-asiakkuutemme hoituu [järjestelmä]-palvelussa, joka pitää huolta jäsenyydestäsi, varauksistasi ja eduistasi, kaikki helposti yhdessä paikassa.":
      "Vårt stamkundskap sköts i tjänsten [järjestelmä], som tar hand om ditt medlemskap, dina bokningar och förmåner, allt enkelt på ett ställe.",
    "Jäsenenä saat joustavat tunnit, jäsenhinnat ja ennakkovaraukset sekä kutsut workshoppeihin ja tapahtumiin.":
      "Som medlem får du flexibla pass, medlemspriser och förhandsbokningar samt inbjudningar till workshops och evenemang.",
  };

  var H = {
    "Hyvinvointi<br>kuuluu<br>kaikille.": "Välmående<br>tillhör<br>alla.",
    "Kahden siskon <em>turvallinen</em> paikka.":
      "Två systrars <em>trygga</em> plats.",
    "Löysin vihdoin paikan, jossa saan sekä <em>rentoutua</em> että jakaa <em>liikkumisen ilon</em> toisten kanssa. Velora tuntuu kodilta.":
      "Jag hittade äntligen en plats där jag både får <em>koppla av</em> och dela <em>glädjen i rörelse</em> med andra. Velora känns som hemma.",
    "Ma–Pe 7–21<br>La–Su 9–17": "Mån–Fre 7–21<br>Lör–Sön 9–17",
    "Meille ei tarvitse tulla valmiina. Tule sellaisena kuin <em>olet</em>, omaan tahtiisi, <em>omaan kehoosi</em> luottaen.":
      "Du behöver inte komma färdig. Kom precis som du <em>är</em>, i din egen takt, med tillit till <em>din egen kropp</em>.",
    "Punavuorenkatu 12<br>00150 Helsinki":
      "Punavuorenkatu 12<br>00150 Helsingfors",
    "Velora on paikka, jossa saan vihdoin hengittää. En tullut tänne <em>muuttumaan</em>, vaan löytämään takaisin <em>itseeni</em>.":
      "Velora är en plats där jag äntligen får andas. Jag kom inte hit för att <em>förändras</em>, utan för att hitta tillbaka till <em>mig själv</em>.",
    "Yksittäistuntien lisäksi,<br><em>paketit</em>.":
      "Utöver enstaka pass,<br><em>paketen</em>.",
  };

  var TITLES = {
    "Velora Movement · Aamujooga & smoothie":
      "Velora Movement · Morgonyoga & smoothie",
    "Velora Movement · Hengitys-workshop": "Velora Movement · Andningsworkshop",
    "Velora Movement · Joogatunnit": "Velora Movement · Yogapass",
    "Velora Movement · Kahvit & keskustelu": "Velora Movement · Kaffe & samtal",
    "Velora Movement · Kauppa": "Velora Movement · Butik",
    "Velora Movement · Meistä": "Velora Movement · Om oss",
    "Velora Movement · Palvelut": "Velora Movement · Tjänster",
    "Velora Movement · Sunnuntain yhteislenkki":
      "Velora Movement · Söndagens gemensamma promenad",
    "Velora Movement · Yhteisö": "Velora Movement · Gemenskap",
    "Velora Movement · Yhteystiedot": "Velora Movement · Kontakt",
    "Velora Movement · liike · hengitys · läsnäolo":
      "Velora Movement · rörelse · andning · närvaro",
  };

  var T_EN = {
    // Navigaatio & yleiset
    Etusivu: "Home",
    Palvelut: "Services",
    Kauppa: "Shop",
    Meistä: "About",
    Yhteisö: "Community",
    Yhteystiedot: "Contact",
    Hinnasto: "Pricing",
    "Treenaa itsestäsi arjen sankariksi":
      "Train yourself into an everyday hero",
    "Liity asiakkaaksi": "Become a member",
    "Löydä oma rytmisi →": "Find your rhythm →",
    "Liity →": "Join →",
    "Katso paketit →": "See packages →",
    "Varaa aikasi →": "Book your time →",
    "Tutustu tunteihin →": "Explore the classes →",
    "Ilmoittaudu →": "Sign up →",
    "Tule mukaan →": "Come along →",
    "Liity seuraan →": "Join us →",
    "Varaa tunti →": "Book a class →",
    "Siirry liittymään →": "Continue to sign-up →",
    "Katso asiakastarinat →": "See customer stories →",
    "Liity jäseneksi →": "Become a member →",
    // Etusivu
    "Mistä meidät tunnistaa": "What you'll recognize us by",
    "Paketit & hinnat": "Packages & prices",
    "Kolme tasoa, oma rytmisi. Valitse paketti, joka sopii viikkoosi, vaihda tasoa milloin tahansa, ilman kiirettä.":
      "Three levels, your own rhythm. Choose the package that suits your week, change level anytime, without rush.",
    Aloittelija: "Beginner",
    Keskitaso: "Intermediate",
    Edistynyt: "Advanced",
    Suosituin: "Most popular",
    "/ kk": "/ mo",
    "1 joogatunti / vko": "1 yoga class / week",
    "1 stretching / vko": "1 stretching / week",
    "Online-jäsenyys": "Online membership",
    "2 joogatuntia / vko": "2 yoga classes / week",
    "1 pilates / vko": "1 pilates / week",
    "1 core / vko": "1 core / week",
    "Rajattomat tunnit / vko": "Unlimited classes / week",
    "Kaikki lajit": "All disciplines",
    Prioriteettivaraus: "Priority booking",
    Tutkittua: "Backed by research",
    "Pieni liike, iso vaikutus.": "Small movement, big impact.",
    "Päivittäistä liikettä riittää kohottamaan vireystilaa ja keskittymistä läpi päivän.":
      "A little daily movement is enough to lift your energy and focus throughout the day.",
    "Parempi keskittymiskyky jo lyhyen, kevyen liikuntahetken jälkeen.":
      "Better focus already after a short, light moment of movement.",
    "Suurempi osuus syvää, palauttavaa unta säännöllisellä liikkeellä.":
      "A greater share of deep, restorative sleep with regular movement.",
    "Nopeampi palautuminen, kun keho saa liikkua omaan tahtiinsa.":
      "Faster recovery when the body gets to move at its own pace.",
    "Mitä yksi treeni viikossa voi muuttaa elämässäsi":
      "What one workout a week can change in your life",
    "Parempi mieliala": "Better mood",
    "Enemmän unta viikossa": "More sleep per week",
    "Enemmän energiaa arkeen": "More energy for everyday life",
    "Jo yksi tunti viikossa riittää käynnistämään muutoksen. Aloita pienestä, keho ja mieli seuraavat perässä.":
      "Just one hour a week is enough to start the change. Begin small, body and mind will follow.",
    "Velora-jäsenyys": "Velora membership",
    "Liity asiakkaaksemme": "Become our member",
    "Saat ensimmäisenä tiedon palveluistamme, tarjouksista, yksityistapahtumista ja kampanjoista.":
      "Be the first to hear about our services, offers, private events and campaigns.",
    // Testimonialit
    "Löysin oman rytmini, vihdoin.": "I found my own rhythm, at last.",
    "Velorassa sain luvan hidastaa. Enää en suorita, vaan nautin liikkeestä ja hengityksestä. Olo on kevyempi niin matolla kuin sen ulkopuolella.":
      "At Velora I was allowed to slow down. I no longer perform, I enjoy the movement and the breath. I feel lighter both on the mat and off it.",
    "Pieni studio, iso ero arkeen.":
      "A small studio, a big difference in everyday life.",
    "Lämmin ja kiireetön tunnelma sai minut palaamaan viikoittain. Uni on syventynyt ja stressi helpottanut huomattavasti, ilman suorittamisen tunnetta.":
      "The warm, unhurried atmosphere made me come back every week. My sleep has deepened and stress eased considerably, without any sense of performing.",
    "Tänne on helppo tulla omana itsenään.":
      "It's easy to come here as yourself.",
    "Ei peilejä, ei kilpailua, vain kannustava yhteisö. Tunnen kuuluvani joukkoon ensimmäistä kertaa vuosiin, ja se näkyy koko viikossani.":
      "No mirrors, no competition, just a supportive community. I feel I belong for the first time in years, and it shows throughout my week.",
    "Sanna R. · jäsen 1 v": "Sanna R. · member 1 yr",
    "Hanna T. · jäsen 6 kk": "Hanna T. · member 6 mo",
    "Leila P. · jäsen 2 v": "Leila P. · member 2 yr",
    "Anni M. · jäsen": "Anni M. · member",
    "Maria K. · jäsen": "Maria K. · member",
    // Palvelut / lajisivut
    "Säännöllinen liike on helpompaa, kun se kuuluu viikkoosi. Kokoa itsellesi sopiva kokonaisuus, kolme tasoa, oma rytmisi, ilman kiirettä.":
      "Regular movement is easier when it's part of your week. Put together a combination that suits you, three levels, your own rhythm, without rush.",
    Joogatunnit: "Yoga classes",
    "Laji 01": "Discipline 01",
    "Laji 02": "Discipline 02",
    "Laji 03": "Discipline 03",
    "Laji 04": "Discipline 04",
    "Pehmeää, hengityksen tahdittamaa liikettä, joka avaa kehon ja rauhoittaa mielen. Tunneilla on tilaa hidastaa, ei suorittamista, vain läsnäoloa.":
      "Soft movement paced by the breath that opens the body and calms the mind. In the classes there's room to slow down, no performing, only presence.",
    "Hallittua, syvää keskivartalon työtä, joka rakentaa ryhtiä ja voimaa. Pienissä ryhmissä jokainen liike ohjataan tarkasti ja kiireettä.":
      "Controlled, deep core work that builds posture and strength. In small groups every movement is guided precisely and without rush.",
    "Rauhallista, syvää venyttelyä, joka avaa jännitykset ja palauttaa liikkuvuuden. Täydellinen vastapaino kiireiselle viikolle.":
      "Calm, deep stretching that releases tension and restores mobility. The perfect counterbalance to a busy week.",
    "Tehokasta mutta hallittua keskivartalon harjoittelua, joka tukee koko kehon voimaa ja ryhtiä. Lyhyt, tiivis ja energinen.":
      "Effective yet controlled core training that supports the whole body's strength and posture. Short, compact and energetic.",
    "Mikä kunto pitää olla?": "What fitness level is required?",
    "Mitä otan mukaan?": "What should I bring?",
    "Kenelle tunti sopii?": "Who is the class for?",
    "Kuinka kauan tunti kestää?": "How long does the class last?",
    "Tarvitseeko varata etukäteen?": "Do I need to book in advance?",
    "Voinko tulla rajoitteiden kanssa?": "Can I come with limitations?",
    "Ei ennakkovaatimuksia. Tunnit sopivat kaikentasoisille, ja liikkeet sovitetaan omaan kehoosi.":
      "No prerequisites. The classes suit all levels, and the movements are adapted to your body.",
    "Mukavat vaatteet ja oma juomapullo riittävät. Joogamatot ja apuvälineet löytyvät studiolta.":
      "Comfortable clothes and your own water bottle are enough. Yoga mats and props are available at the studio.",
    "Niin aloittelijalle kuin kokeneellekin, jokainen liikkuu omassa tahdissaan.":
      "For beginners and the experienced alike, everyone moves at their own pace.",
    "Tunti kestää noin 60 minuuttia.": "The class lasts about 60 minutes.",
    "Suosittelemme varaamaan paikan etukäteen, sillä ryhmät ovat pieniä.":
      "We recommend booking a spot in advance, as the groups are small.",
    "Kyllä. Kerro ohjaajalle ennen tuntia, niin sovitamme liikkeet sinulle turvallisiksi.":
      "Yes. Tell the instructor before the class, and we'll adapt the movements to be safe for you.",
    "Pilates sopii kaikille kuntotasoille; liikkeitä kevennetään tai haastetaan tarpeen mukaan.":
      "Pilates suits all fitness levels; the movements are eased or made more challenging as needed.",
    "Joustavat vaatteet ja liukuestesukat. Välineet ovat valmiina studiolla.":
      "Stretchy clothes and grip socks. The equipment is ready at the studio.",
    "Onko reformer- vai mattopilatesta?": "Is it reformer or mat pilates?",
    "Tarjoamme molempia. Aloittelijalle suosittelemme aloittamaan mattotunnilla.":
      "We offer both. For beginners we recommend starting with a mat class.",
    "Tunti kestää noin 50 minuuttia.": "The class lasts about 50 minutes.",
    "Sopiiko selkä- tai niskavaivoihin?":
      "Is it suitable for back or neck problems?",
    "Usein kyllä, ja se voi jopa helpottaa oireita. Kerro vaivoistasi ohjaajalle etukäteen.":
      "Often yes, and it may even ease symptoms. Tell the instructor about your issues in advance.",
    "Kyllä, paikkoja on rajoitetusti pienen ryhmäkoon vuoksi.":
      "Yes, places are limited due to the small group size.",
    "Ei mitään, stretching sopii kaikille ja on hellävarainen keholle.":
      "Nothing, stretching suits everyone and is gentle on the body.",
    "Mukavat, joustavat vaatteet ja oma juomapullo. Matot löytyvät studiolta.":
      "Comfortable, stretchy clothes and your own water bottle. Mats are available at the studio.",
    "Erityisesti heille, jotka istuvat paljon tai kaipaavat palautumista.":
      "Especially for those who sit a lot or need recovery.",
    "Tunti kestää noin 45 minuuttia.": "The class lasts about 45 minutes.",
    "Voiko tulla jäykkänä?": "Can I come stiff?",
    "Juuri silloin kannattaa tulla, liikkuvuus paranee vähitellen, omaan tahtiin.":
      "That's exactly when it's worth coming, mobility improves gradually, at your own pace.",
    "Suosittelemme varausta, mutta paikkoja on usein myös ovelta.":
      "We recommend booking, but places are often available at the door too.",
    "Peruskunto riittää; liikkeet on helppo skaalata omalle tasolle.":
      "Basic fitness is enough; the movements are easy to scale to your own level.",
    "Treenivaatteet, juomapullo ja pyyhe. Välineet ovat paikalla.":
      "Workout clothes, a water bottle and a towel. The equipment is on site.",
    "Heille, jotka haluavat vahvistaa keskivartaloa ja lisätä liikkeen tehoa.":
      "For those who want to strengthen the core and add intensity to their movement.",
    "Tunti kestää noin 30 minuuttia tiivistä työtä.":
      "The class is about 30 minutes of focused work.",
    "Onko tunti rankka?": "Is the class hard?",
    "Tehokas mutta hallittu, pidät itse tahdin ja lepäät tarvittaessa.":
      "Effective but controlled, you set the pace yourself and rest when needed.",
    "Kyllä, varaa paikkasi etukäteen ryhmäkoon vuoksi.":
      "Yes, book your spot in advance due to the group size.",
    // Kauppa
    "Lepo · rauhoittava eteerinen öljy": "Lepo · calming essential oil",
    "24 arvostelua": "24 reviews",
    Kuvaus: "Description",
    "Rauhoittava eteerinen öljyseos laventelia ja setripuuta. Hetki itselle keskellä kiireistä arkea.":
      "A calming essential oil blend of lavender and cedarwood. A moment for yourself in the middle of a busy day.",
    "Muutama tippa ranteisiin tai matolle ennen harjoitusta, hengitä syvään ja anna kiireen laskeutua.":
      "A few drops on the wrists or the mat before practice, breathe deeply and let the rush settle.",
    "100 % luonnollinen. Eläinkokeeton. Valmistettu Suomessa.":
      "100% natural. Cruelty-free. Made in Finland.",
    "Lisää koriin": "Add to cart",
    "Tallenna suosikki": "Save favorite",
    // Kauppa · tuotteet
    "Hyvinvointia kotiin": "Wellbeing for home",
    "Pieni valikoima rauhoittavaa itsehoitoa ja studiotarvikkeita, jotka tuovat Veloran tunnelman myös maton ulkopuolelle.":
      "A small selection of calming self-care and studio essentials that bring Velora's atmosphere beyond the mat.",
    "Joogasetti kotiin": "Yoga set for home",
    "Joogamatto ja faskiapallo pehmeään kotiharjoitteluun.":
      "A yoga mat and fascia ball for gentle practice at home.",
    "Pilatessetti kotiin": "Pilates set for home",
    "Matto ja käsipainot keskivartalon vahvistukseen kotona.":
      "A mat and hand weights to strengthen the core at home.",
    "Pyyhesetti, kolme kpl": "Towel set, three pcs",
    "Kolme pehmeää puuvillapyyhettä lämpimissä sävyissä.":
      "Three soft cotton towels in warm tones.",
    Kylpytossut: "Bath slippers",
    "Pehmeät tossut rauhalliseen iltahetkeen.":
      "Soft slippers for a calm evening moment.",
    Kylpysetti: "Bath set",
    "Kylpysuola, vaahto ja scrub rentouttavaan kylpyyn.":
      "Bath salt, foam and scrub for a relaxing bath.",
    "Kylpytakki, vaalea": "Bathrobe, light",
    "Kevyt ja pehmeä puuvillakylpytakki.": "A light and soft cotton bathrobe.",
    Luonnonsaippua: "Natural soap",
    "Käsintehty palasaippua luonnon raaka-aineista.":
      "Handmade bar soap from natural ingredients.",
    "Teräksinen juomapullo": "Steel water bottle",
    "Pitää veden viileänä matolla ja sen ulkopuolella.":
      "Keeps water cool on the mat and beyond.",
    "Ekologinen kylpysetti": "Eco-friendly bath set",
    "Luonnonkuituharja ja merisieni hellävaraiseen ihonhoitoon.":
      "A natural fiber brush and sea sponge for gentle skincare.",
    "Käsi- & jalkavoide": "Hand & foot cream",
    "Kosteuttava voidepari käsille ja jaloille.":
      "A moisturizing cream duo for hands and feet.",
    "Pään hierontasetti": "Head massage set",
    "Gua sha -kampa ja hierontaöljy rentoutukseen.":
      "A gua sha comb and massage oil for relaxation.",
    "Ilmainen toimitus yli 60 €": "Free shipping over €60",
    "Toimitus 2–4 arkipäivää": "Delivery 2–4 business days",
    Ainesosat: "Ingredients",
    "Laventeliöljy, setripuuöljy, bergamotti ja jojobaöljy. Ei keinotekoisia tuoksuja, väriaineita tai säilöntäaineita.":
      "Lavender oil, cedarwood oil, bergamot and jojoba oil. No artificial fragrances, dyes or preservatives.",
    "Lue lisää": "Read more",
    Käyttö: "Use",
    "Tiputa muutama pisara ranteisiin, niskaan tai joogamatolle. Hengitä rauhassa sisään ennen harjoitusta tai illan rauhoittuessa.":
      "Drop a few drops on your wrists, neck or yoga mat. Breathe in calmly before practice or as the evening winds down.",
    "Vältä suoraa kosketusta silmiin. Säilytä viileässä ja valolta suojattuna.":
      "Avoid direct contact with the eyes. Store cool and protected from light.",
    "Saatat pitää myös näistä": "You might also like these",
    "Hiljaisuus · tuoksukynttilä": "Silence · scented candle",
    "Juuri · villaiset grip-sukat": "Juuri · wool grip socks",
    Faskiapallo: "Fascia ball",
    // Meistä
    "2021 · Idea syntyi": "2021 · The idea was born",
    "2022 · Ensimmäinen studio": "2022 · The first studio",
    "2024 · Kasvava yhteisö": "2024 · A growing community",
    "Tänään · Sinä mukaan": "Today · You with us",
    Tarinamme: "Our story",
    "Velora syntyi kahden siskon unelmasta: luoda tila, jonne jokainen voi tulla tukemaan omaa hyvinvointiaan kiireisen arjen keskellä. Ei suorittamista, ei vaatimuksia, vain lämmin paikka hidastaa ja hengittää.":
      "Velora was born from two sisters' dream: to create a space where everyone can come to support their own wellbeing in the midst of a busy everyday life. No performing, no demands, just a warm place to slow down and breathe.",
    "Mihin uskomme": "What we believe in",
    Läsnäolo: "Presence",
    "Jokainen hetki matolla on tilaisuus pysähtyä. Harjoittelemme läsnäoloa, emme suorittamista.":
      "Every moment on the mat is a chance to pause. We practice presence, not performance.",
    "Pieni studio, tutut kasvot. Täällä jokainen kuuluu joukkoon omana itsenään, ilman vertailua.":
      "A small studio, familiar faces. Here everyone belongs as themselves, without comparison.",
    Hellävaraisuus: "Gentleness",
    "Kuuntelemme kehoa ja kunnioitamme sen rajoja. Liikkeen kuuluu tuntua hyvältä.":
      "We listen to the body and respect its limits. Movement should feel good.",
    // Yhteisö
    Tervetuloa: "Welcome",
    "Tule osaksi yhteisöä": "Become part of the community",
    "Velora on enemmän kuin studio, se on yhteisö. Workshopit, tapahtumat, yhteislenkit ja kahvittelut tuovat yhteen naisia, jotka kaipaavat hetkeä irti arjen pyörityksestä. Sillä kun pidät huolta itsestäsi, siitä hyötyvät myös läheisesi. Tervetuloa juuri sellaisena kuin olet.":
      "Velora is more than a studio, it's a community. Workshops, events, group walks and coffee gatherings bring together women who long for a moment away from the everyday whirl. Because when you take care of yourself, your loved ones benefit too. Welcome exactly as you are.",
    "Mitä saat jäsenenä": "What you get as a member",
    "Workshopit & tapahtumat": "Workshops & events",
    "Jäsenille suunnatut workshopit ja tapahtumat läpi vuoden, oppia, inspiraatiota ja uusia tuttavuuksia.":
      "Workshops and events for members throughout the year, learning, inspiration and new acquaintances.",
    "Yhteislenkit & kahvittelut": "Group walks & coffee gatherings",
    "Rento yhteisö, joka kokoontuu liikkumaan ja jakamaan hetkiä myös maton ulkopuolella.":
      "A relaxed community that gathers to move and share moments beyond the mat too.",
    Jäsenedut: "Member benefits",
    "Jäsenhinnat tunneista, ennakkovaraukset ja vain jäsenille räätälöidyt tarjoukset.":
      "Member prices on classes, advance bookings and offers tailored only for members.",
    "Tulevat tapahtumat": "Upcoming events",
    "Aamujooga & smoothie": "Morning yoga & smoothie",
    "Sunnuntain yhteislenkki": "Sunday group walk",
    "Kahvit & keskustelu": "Coffee & conversation",
    "Hengitys-workshop": "Breathing workshop",
    "Aamujoogan rauhaa": "The calm of morning yoga",
    "Yhteinen hetki ennen arjen kiireen alkua.":
      "A shared moment before the everyday rush begins.",
    Yhteislenkillä: "On a group walk",
    "Liikettä ja raitista ilmaa luonnossa, hyvässä seurassa.":
      "Movement and fresh air in nature, in good company.",
    "Lämpöä, hyviä juttuja ja kiireettömiä hetkiä.":
      "Warmth, good conversations and unhurried moments.",
    "Workshop-tunnelmaa": "Workshop atmosphere",
    "Yhdessä oppimista ja pieniä oivalluksia.":
      "Learning together and small insights.",
    // Tapahtumasivut
    Tapahtuma: "Event",
    "Aloita viikonloppu rauhallisella aamujoogalla ja yhteisellä smoothie-hetkellä. Pehmeää liikettä, hyvää seuraa ja raikas alku päivään.":
      "Start the weekend with a calm morning yoga and a shared smoothie moment. Soft movement, good company and a fresh start to the day.",
    "Milloin?": "When?",
    "Missä?": "Where?",
    "Kenelle?": "For whom?",
    "Paljonko maksaa?": "How much does it cost?",
    "Miten ilmoittaudun?": "How do I sign up?",
    "Pitääkö ilmoittautua?": "Do I need to sign up?",
    "Lauantaisin klo 9.00–10.30.": "Saturdays at 9.00–10.30.",
    "Velora-studiolla, Helsingissä.": "At the Velora studio, Helsinki.",
    "Kaikentasoisille, myös aloittelijoille.":
      "For all levels, including beginners.",
    "Mukavat vaatteet ja oma juomapullo. Matot löytyvät studiolta.":
      "Comfortable clothes and your own water bottle. Mats are available at the studio.",
    "Jäsenille maksuton, muille 15 €.": "Free for members, €15 for others.",
    "Varaa paikkasi etukäteen, paikkoja on rajoitetusti.":
      "Book your spot in advance, places are limited.",
    "Rento yhteislenkki luonnossa, liikettä, raitista ilmaa ja hyvää seuraa. Jokainen kulkee omaan tahtiinsa, kiireettä.":
      "A relaxed group walk in nature, movement, fresh air and good company. Everyone goes at their own pace, without rush.",
    "Sunnuntaisin klo 10.00.": "Sundays at 10.00.",
    "Lähtö Velora-studiolta, reitti luonnossa.":
      "Departure from the Velora studio, the route goes through nature.",
    "Kaikille, kulkutahdin valitset itse.":
      "For everyone, you choose the pace yourself.",
    "Säänmukaiset vaatteet ja juomapullo.":
      "Weather-appropriate clothes and a water bottle.",
    "Maksuton kaikille.": "Free for everyone.",
    "Ei pakollista, tule paikalle sellaisena kuin olet.":
      "Not mandatory, come as you are.",
    "Lämmin hetki kahvikupin äärellä, jaamme ajatuksia hyvinvoinnista ja arjesta kiireettömästi, hyvässä seurassa.":
      "A warm moment over a cup of coffee, we share thoughts about wellbeing and everyday life calmly, in good company.",
    "Kerran kuussa, lauantai-iltapäivisin.":
      "Once a month, on Saturday afternoons.",
    "Velora-studion loungessa.": "In the Velora studio lounge.",
    "Jäsenille ja vieraille, kaikki tervetulleita.":
      "For members and guests, everyone is welcome.",
    "Vain itsesi. Kahvit ja pienet purtavat tarjotaan.":
      "Just yourself. Coffee and small snacks are provided.",
    "Maksuton.": "Free.",
    "Ilmoittautuminen on vapaaehtoista mutta auttaa meitä varautumaan.":
      "Signing up is optional but helps us prepare.",
    "Syvenny hengityksen voimaan ohjatussa workshopissa. Opit yksinkertaisia harjoituksia rauhoittumiseen ja palautumiseen arjen keskellä.":
      "Dive into the power of breath in a guided workshop. You'll learn simple exercises to calm down and recover in the middle of everyday life.",
    "Kerran kaudessa, sunnuntai-iltapäivisin.":
      "Once a season, on Sunday afternoons.",
    "Kaikille, aiempaa kokemusta ei tarvita.":
      "For everyone, no prior experience needed.",
    "Mukavat vaatteet ja oma huopa tai viltti.":
      "Comfortable clothes and your own blanket.",
    "29 €, jäsenille 19 €.": "€29, €19 for members.",
    "Varaa paikkasi etukäteen, ryhmä on pieni.":
      "Book your spot in advance, the group is small.",
    // Yhteystiedot
    "Tule käymään Punavuoressa.": "Come visit us in Punavuori.",
    Osoite: "Address",
    Sähköposti: "Email",
    Puhelin: "Phone",
    Avoinna: "Open",
    "Velora · Punavuori": "Velora · Punavuori",
    Studiosali: "Studio hall",
    "Lämmin, luonnonvaloa tulviva tila liikkeelle.":
      "A warm space for movement, flooded with natural light.",
    Loungetila: "Lounge space",
    "Hetki hengähtää ennen tai jälkeen tunnin.":
      "A moment to catch your breath before or after class.",
    Pukuhuone: "Changing room",
    "Rauhallinen, huoliteltu ja kodikas.": "Calm, well-kept and cozy.",
    "Punavuoren kulma": "A corner of Punavuori",
    "Studio sydämessä kaupunkia, omassa rauhassaan.":
      "A studio in the heart of the city, in its own peace.",
    // Modaali
    "Kanta-asiakkuus": "Membership",
    "Tervetuloa Veloran kanta-asiakkaaksi": "Welcome as a Velora member",
    "Kanta-asiakkuutemme hoituu [järjestelmä]-palvelussa, joka pitää huolta jäsenyydestäsi, varauksistasi ja eduistasi, kaikki helposti yhdessä paikassa.":
      "Our membership is managed in the [system] service, which takes care of your membership, bookings and benefits, all easily in one place.",
    "Jäsenenä saat joustavat tunnit, jäsenhinnat ja ennakkovaraukset sekä kutsut workshoppeihin ja tapahtumiin.":
      "As a member you get flexible classes, member prices and advance bookings as well as invitations to workshops and events.",
  };

  var H_EN = {
    "Hyvinvointi<br>kuuluu<br>kaikille.":
      "Wellbeing<br>belongs to<br>everyone.",
    "Kahden siskon <em>turvallinen</em> paikka.":
      "Two sisters' <em>safe</em> place.",
    "Löysin vihdoin paikan, jossa saan sekä <em>rentoutua</em> että jakaa <em>liikkumisen ilon</em> toisten kanssa. Velora tuntuu kodilta.":
      "I finally found a place where I can both <em>relax</em> and share the <em>joy of movement</em> with others. Velora feels like home.",
    "Ma–Pe 7–21<br>La–Su 9–17": "Mon–Fri 7–21<br>Sat–Sun 9–17",
    "Meille ei tarvitse tulla valmiina. Tule sellaisena kuin <em>olet</em>, omaan tahtiisi, <em>omaan kehoosi</em> luottaen.":
      "You don't have to come to us ready. Come just as you <em>are</em>, at your own pace, trusting <em>your own body</em>.",
    "Punavuorenkatu 12<br>00150 Helsinki":
      "Punavuorenkatu 12<br>00150 Helsinki",
    "Velora on paikka, jossa saan vihdoin hengittää. En tullut tänne <em>muuttumaan</em>, vaan löytämään takaisin <em>itseeni</em>.":
      "Velora is a place where I can finally breathe. I didn't come here to <em>change</em>, but to find my way back to <em>myself</em>.",
    "Yksittäistuntien lisäksi,<br><em>paketit</em>.":
      "Beyond single classes,<br><em>packages</em>.",
  };

  var TITLES_EN = {
    "Velora Movement · Aamujooga & smoothie":
      "Velora Movement · Morning yoga & smoothie",
    "Velora Movement · Hengitys-workshop":
      "Velora Movement · Breathing workshop",
    "Velora Movement · Joogatunnit": "Velora Movement · Yoga classes",
    "Velora Movement · Kahvit & keskustelu":
      "Velora Movement · Coffee & conversation",
    "Velora Movement · Kauppa": "Velora Movement · Shop",
    "Velora Movement · Meistä": "Velora Movement · About",
    "Velora Movement · Palvelut": "Velora Movement · Services",
    "Velora Movement · Sunnuntain yhteislenkki":
      "Velora Movement · Sunday group walk",
    "Velora Movement · Yhteisö": "Velora Movement · Community",
    "Velora Movement · Yhteystiedot": "Velora Movement · Contact",
    "Velora Movement · liike · hengitys · läsnäolo":
      "Velora Movement · movement · breath · presence",
  };

  // ---------- Apurit ----------
  function norm(s) {
    return s
      .replace(/<br\s*\/?>/gi, "<br>")
      .replace(/\s+/g, " ")
      .trim();
  }
  var INLINE = {
    EM: 1,
    BR: 1,
    STRONG: 1,
    I: 1,
    B: 1,
    U: 1,
    SMALL: 1,
    SUP: 1,
    SUB: 1,
  };

  document.addEventListener("DOMContentLoaded", function () {
    // ----- Liity-modaali -----
    var dialog = document.createElement("dialog");
    dialog.className = "join-modal";
    dialog.innerHTML =
      '<button class="join-modal__close" type="button" aria-label="Sulje">×</button>' +
      '<div class="join-modal__inner">' +
      '<div class="join-modal__media" aria-hidden="true" style="--img:url(assets/images/kuva-2.jpg)"></div>' +
      '<div class="join-modal__body">' +
      '<span class="eyebrow">Kanta-asiakkuus</span>' +
      "<h2>Tervetuloa Veloran kanta-asiakkaaksi</h2>" +
      "<p>Kanta-asiakkuutemme hoituu [järjestelmä]-palvelussa, joka pitää huolta jäsenyydestäsi, varauksistasi ja eduistasi, kaikki helposti yhdessä paikassa.</p>" +
      "<p>Jäsenenä saat joustavat tunnit, jäsenhinnat ja ennakkovaraukset sekä kutsut workshoppeihin ja tapahtumiin.</p>" +
      '<a class="btn join-modal__cta" href="index.html#liity">Siirry liittymään →</a>' +
      '<p class="join-modal__demo" hidden>Tämä on demo. Oikeassa palvelussa siirtyisit liittymis- ja kirjautumissivulle.</p>' +
      "</div>" +
      "</div>";
    document.body.appendChild(dialog);

    // Demo: nappi ei vie minnekään, vaan kertoo että kyseessä on demo
    var joinCta = dialog.querySelector(".join-modal__cta");
    var joinDemo = dialog.querySelector(".join-modal__demo");
    joinCta.addEventListener("click", function (e) {
      e.preventDefault();
      joinDemo.hidden = false;
    });

    function openModal(e) {
      e.preventDefault();
      if (typeof dialog.showModal === "function") dialog.showModal();
      else dialog.setAttribute("open", "");
    }
    document.querySelectorAll(".btn--member").forEach(function (b) {
      b.addEventListener("click", openModal);
    });
    document.querySelectorAll("a.btn").forEach(function (a) {
      if (a.textContent.trim().toLowerCase().indexOf("liity asiakkaaksi") === 0)
        a.addEventListener("click", openModal);
    });
    dialog
      .querySelector(".join-modal__close")
      .addEventListener("click", function () {
        dialog.close();
      });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });

    // ----- Kielenvaihto -----
    var leaves = [];
    var SEL =
      "h1,h2,h3,h4,p,span,a,li,dt,dd,summary,blockquote,div.benefits__badge";
    document.querySelectorAll(SEL).forEach(function (el) {
      if (el.closest('[aria-hidden="true"]')) return;
      if (el.closest(".lang-toggle")) return;
      var kids = el.children;
      for (var i = 0; i < kids.length; i++)
        if (!INLINE[kids[i].tagName]) return;
      var mode = kids.length > 0 ? "html" : "text";
      el.__fiMode = mode;
      el.__fi = mode === "html" ? el.innerHTML : el.textContent;
      leaves.push(el);
    });
    var htmlEl = document.documentElement;
    htmlEl.__fiTitle = document.title;

    function setLang(lang) {
      htmlEl.lang = lang;
      try {
        localStorage.setItem("velora-lang", lang);
      } catch (e) {}
      var TMAP = lang === "sv" ? T : lang === "en" ? T_EN : null;
      var HMAP = lang === "sv" ? H : lang === "en" ? H_EN : null;
      for (var i = 0; i < leaves.length; i++) {
        var el = leaves[i];
        var fi = el.__fi;
        if (el.__fiMode === "html") {
          var vh = HMAP ? HMAP[norm(fi)] : null;
          el.innerHTML = vh != null ? vh : fi;
        } else {
          var vt = TMAP ? TMAP[norm(fi)] : null;
          el.textContent = vt != null ? vt : fi;
        }
      }
      var t = htmlEl.__fiTitle;
      var TIMAP = lang === "sv" ? TITLES : lang === "en" ? TITLES_EN : null;
      document.title = TIMAP && TIMAP[norm(t)] ? TIMAP[norm(t)] : t;
      document.querySelectorAll(".lang-toggle__btn").forEach(function (b) {
        b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
      });
      // Vaihda käsinkirjoitettu hero-teksti kielen mukaan
      document.querySelectorAll("[data-fi][data-sv]").forEach(function (img) {
        var src =
          lang === "sv"
            ? img.getAttribute("data-sv")
            : lang === "en"
              ? img.getAttribute("data-en") || img.getAttribute("data-fi")
              : img.getAttribute("data-fi");
        if (src) img.setAttribute("src", src);
      });
    }

    // Ostoskori-demomodaali (kori on tyhjä, demo)
    var cartDialog = document.createElement("dialog");
    cartDialog.className = "join-modal join-modal--cart";
    cartDialog.innerHTML =
      '<button class="join-modal__close" type="button" aria-label="Sulje">×</button>' +
      '<div class="join-modal__inner">' +
      '<div class="join-modal__body">' +
      '<span class="eyebrow">Ostoskori</span>' +
      "<h2>Ostoskorisi on tyhjä</h2>" +
      "<p>Tämä on demo. Oikeassa kaupassa näkisit tästä valitsemasi tuotteet ja pääsisit kassalle.</p>" +
      '<a class="btn join-modal__cta" href="kauppa.html">Jatka kauppaan →</a>' +
      "</div>" +
      "</div>";
    document.body.appendChild(cartDialog);
    cartDialog
      .querySelector(".join-modal__close")
      .addEventListener("click", function () {
        cartDialog.close();
      });
    cartDialog.addEventListener("click", function (e) {
      if (e.target === cartDialog) cartDialog.close();
    });
    function openCart(e) {
      e.preventDefault();
      if (typeof cartDialog.showModal === "function") cartDialog.showModal();
      else cartDialog.setAttribute("open", "");
    }

    // Injektoi FI/SV-valitsin jokaiseen yläpalkkiin
    document.querySelectorAll(".topbar").forEach(function (tb) {
      var host = tb.querySelector(".topbar__right") || tb;

      // Ostoskori yläreunaan
      var cart = document.createElement("a");
      cart.className = "topbar__cart";
      cart.href = "kauppa.html";
      cart.addEventListener("click", openCart);
      cart.setAttribute("aria-label", "Ostoskori");
      cart.innerHTML =
        '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" ' +
        'stroke="currentColor" stroke-width="1.5" stroke-linecap="round" ' +
        'stroke-linejoin="round" aria-hidden="true">' +
        '<circle cx="9" cy="20" r="1"></circle>' +
        '<circle cx="18" cy="20" r="1"></circle>' +
        '<path d="M2.5 3.5h2.2l2 11.2a1.2 1.2 0 0 0 1.2 1h8.4a1.2 1.2 0 0 0 1.2-1L20.5 7H6"></path>' +
        "</svg>" +
        '<span class="topbar__cart-count"></span>';
      host.appendChild(cart);

      var wrap = document.createElement("div");
      wrap.className = "lang-toggle";
      ["fi", "sv", "en"].forEach(function (l) {
        var btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-toggle__btn";
        btn.setAttribute("data-lang", l);
        btn.textContent = l.toUpperCase();
        btn.addEventListener("click", function () {
          setLang(l);
        });
        wrap.appendChild(btn);
      });
      host.appendChild(wrap);
    });

    // Skrollatessa: läpinäkyvä herokuvan päällä oleva palkki muuttuu
    // taustan väriseksi ja teksti tekstin väriseksi (sijainti ennallaan).
    var floatingBars = document.querySelectorAll(".topbar:not(.topbar--solid)");
    function onScroll() {
      var scrolled = window.scrollY > 30;
      floatingBars.forEach(function (tb) {
        tb.classList.toggle("is-scrolled", scrolled);
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Marquee: täytä nauha saumattomaksi (ei tyhjää aukkoa millään leveydellä)
    document.querySelectorAll(".marquee").forEach(function (m) {
      var track = m.querySelector(".marquee__track");
      if (!track) return;
      var base = track.innerHTML;
      var guard = 0;
      while (track.scrollWidth < m.offsetWidth && guard < 24) {
        track.innerHTML += base;
        guard++;
      }
      // Kahdenna sisältö: kaksi yhtä suurta puolikasta -> saumaton -50 % looppi
      track.innerHTML += track.innerHTML;
    });

    // Palaute-karusellin nuolet: vieritä riviä yhden kortin verran
    document.querySelectorAll(".testimonials").forEach(function (sec) {
      var row = sec.querySelector(".testimonials__row");
      if (!row) return;
      sec.querySelectorAll(".testimonials__arrow").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var card = row.querySelector(".t-card");
          var step = card ? card.getBoundingClientRect().width + 20 : 320;
          var dir = parseInt(btn.getAttribute("data-dir"), 10) || 1;
          row.scrollBy({ left: step * dir, behavior: "smooth" });
        });
      });
    });

    // Liikuntalaskuri: päivittäiset minuutit -> arvioidut vaikutukset
    var calcSlider = document.getElementById("calc-min");
    if (calcSlider) {
      var calcOut = document.getElementById("calc-out");
      var calcFormulas = {
        focus: function (m) {
          return "+" + Math.round(m * 0.5) + " %";
        },
        sleep: function (m) {
          return "+" + Math.round(m * 0.8) + " %";
        },
        energy: function (m) {
          return "+" + Math.round(m * 0.6) + " %";
        },
        recovery: function (m) {
          return (1 + m / 45).toFixed(1).replace(".", ",") + "×";
        },
      };
      var calcFields = document.querySelectorAll("[data-calc]");
      var updateCalc = function () {
        var m = parseInt(calcSlider.value, 10) || 0;
        calcOut.textContent = m + " min";
        calcFields.forEach(function (el) {
          var f = calcFormulas[el.getAttribute("data-calc")];
          if (f) el.textContent = f(m);
        });
      };
      calcSlider.addEventListener("input", updateCalc);
      updateCalc();
    }

    // Kaupan kategoriasuodatus: näytä vain valitun kategorian tuotteet
    var shopCats = document.querySelector(".shop__cats");
    if (shopCats) {
      var shopCards = document.querySelectorAll(".shop-card[data-cat]");
      shopCats.querySelectorAll("a[data-filter]").forEach(function (tab) {
        tab.addEventListener("click", function (e) {
          e.preventDefault();
          var cat = tab.getAttribute("data-filter");
          shopCats.querySelectorAll("a").forEach(function (a) {
            a.classList.toggle("is-active", a === tab);
          });
          shopCards.forEach(function (card) {
            var show = cat === "all" || card.getAttribute("data-cat") === cat;
            card.style.display = show ? "" : "none";
          });
        });
      });
    }

    // Hinnaston kategoriapainikkeet: näytä valittu ryhmä
    var priceCats = document.querySelector(".pricecats");
    if (priceCats) {
      var priceGroups = document.querySelectorAll(".pricegroup[data-group]");
      priceCats.querySelectorAll("button[data-group]").forEach(function (tab) {
        tab.addEventListener("click", function () {
          var g = tab.getAttribute("data-group");
          priceCats.querySelectorAll("button").forEach(function (b) {
            b.classList.toggle("is-active", b === tab);
          });
          priceGroups.forEach(function (grp) {
            grp.hidden = grp.getAttribute("data-group") !== g;
          });
        });
      });
    }

    var saved = "fi";
    try {
      saved = localStorage.getItem("velora-lang") || "fi";
    } catch (e) {}
    setLang(saved);
  });
})();
