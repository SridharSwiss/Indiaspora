// Curated from official tourism sites (myswitzerland.com, geneve.com, lausanne-tourisme.ch) and each attraction's own site.
export type Top10Item = { rank: number; name: string; blurb: string; area: string; url: string; sourceNote: string };
export const CITY_TOP10: Record<string, Top10Item[]> = {
  "zurich": [
    {
      "rank": 1,
      "name": "Old Town (Altstadt)",
      "blurb": "Historic centre on both banks of the Limmat, from Central to Bürkliplatz; ideal for wandering lanes, bridges and riverside cafes.",
      "area": "Altstadt / Niederdorf",
      "url": "https://www.myswitzerland.com/en-us/experiences/zurichs-old-town/",
      "sourceNote": "myswitzerland.com"
    },
    {
      "rank": 2,
      "name": "Grossmünster",
      "blurb": "Twin-towered Romanesque church and a centre of the Zurich Reformation, standing between the Limmat river and Niederdorf.",
      "area": "Altstadt (Grossmünsterplatz)",
      "url": "https://www.myswitzerland.com/en-us/experiences/grossmuenster/",
      "sourceNote": "myswitzerland.com"
    },
    {
      "rank": 3,
      "name": "Lindenhof",
      "blurb": "The city's oldest public park, a calm green terrace with views over the Limmat, Lake Zurich and the Alps.",
      "area": "Altstadt",
      "url": "https://www.myswitzerland.com/en-us/experiences/lindenhof-viewpoint/",
      "sourceNote": "myswitzerland.com"
    },
    {
      "rank": 4,
      "name": "Fraumünster",
      "blurb": "Ninth-century former women's abbey famed for five Chagall stained-glass windows, with a crypt museum on the city's history.",
      "area": "Altstadt (Stadthausquai)",
      "url": "https://www.myswitzerland.com/en-us/experiences/fraumuenster-church/",
      "sourceNote": "myswitzerland.com"
    },
    {
      "rank": 5,
      "name": "Kunsthaus Zürich",
      "blurb": "Leading Swiss art museum with a collection spanning roughly eight centuries, from the Middle Ages to contemporary work.",
      "area": "Heimplatz / Hottingen",
      "url": "https://www.kunsthaus.ch/en/",
      "sourceNote": "Official museum site (kunsthaus.ch)"
    },
    {
      "rank": 6,
      "name": "Lake Zurich cruises",
      "blurb": "Year-round scheduled ZSG boat trips on the lake and Limmat, plus themed fondue and steamboat dinner cruises.",
      "area": "Lake Zurich (Bürkliplatz)",
      "url": "https://www.myswitzerland.com/en-us/experiences/lake-zurich-cruises/",
      "sourceNote": "myswitzerland.com"
    },
    {
      "rank": 7,
      "name": "Üetliberg",
      "blurb": "Zurich's home mountain, reached by direct train from the main station, with a viewing tower overlooking city, lake and Alps.",
      "area": "Üetliberg (Albis ridge)",
      "url": "https://www.myswitzerland.com/en-us/destinations/ueetliberg-zurichs-home-mountain/",
      "sourceNote": "myswitzerland.com"
    },
    {
      "rank": 8,
      "name": "Bahnhofstrasse",
      "blurb": "Zurich's best-known shopping street, about 1.4 km from the main station down to Lake Zurich.",
      "area": "City centre / Lindenhof",
      "url": "https://www.myswitzerland.com/en-us/experiences/bahnhofstrasse/",
      "sourceNote": "myswitzerland.com"
    },
    {
      "rank": 9,
      "name": "Lindt Home of Chocolate",
      "blurb": "Interactive chocolate museum and visitor attraction on Lake Zurich, a short trip from the city centre.",
      "area": "Kilchberg",
      "url": "https://www.myswitzerland.com/en-us/experiences/lindt-home-of-chocolate/",
      "sourceNote": "myswitzerland.com"
    },
    {
      "rank": 10,
      "name": "Rhine Falls day trip",
      "blurb": "Europe's largest waterfall, about 150 m wide and 23 m high, at Neuhausen near Schaffhausen; an easy day trip.",
      "area": "Neuhausen am Rheinfall (day trip)",
      "url": "https://www.myswitzerland.com/en-us/experiences/the-rhine-falls/",
      "sourceNote": "myswitzerland.com"
    }
  ],
  "geneva": [
    {
      "rank": 1,
      "name": "Jet d'Eau",
      "blurb": "Geneva's signature fountain shoots about 500 litres of water per second roughly 140 metres into the air above the lake.",
      "area": "Lake Geneva harbour",
      "url": "https://www.geneve.com/en/see-do/attractions/the-jet-deau",
      "sourceNote": "Geneva Tourism (geneve.com), fetched"
    },
    {
      "rank": 2,
      "name": "Old Town and Bourg-de-Four",
      "blurb": "Cobbled lanes around the city's oldest square, crowned by the 12th-century St Peter's Cathedral, a symbol of the Reformation.",
      "area": "Old Town",
      "url": "https://www.geneve.com/en/see-do/attractions/the-old-town",
      "sourceNote": "Geneva Tourism (geneve.com), fetched"
    },
    {
      "rank": 3,
      "name": "St Pierre Cathedral towers and archaeological site",
      "blurb": "Climb 157 steps for views over the lake and Alps, then explore Roman and early Christian remains beneath the cathedral.",
      "area": "Old Town",
      "url": "https://www.myswitzerland.com/en-us/experiences/old-town-and-cathedral-of-saint-pierre/",
      "sourceNote": "Switzerland Tourism (myswitzerland.com), fetched"
    },
    {
      "rank": 4,
      "name": "Palais des Nations (UN Geneva)",
      "blurb": "The UN's European headquarters, built 1929-1938, offers 60-minute guided tours; pre-registration and valid ID are required.",
      "area": "International district",
      "url": "https://www.myswitzerland.com/en-us/experiences/headquarters-of-the-un-in-europe/",
      "sourceNote": "Switzerland Tourism (myswitzerland.com), fetched"
    },
    {
      "rank": 5,
      "name": "CERN Science Gateway",
      "blurb": "Free exhibitions, workshops and tours at the particle physics laboratory behind the Higgs boson discovery; closed Mondays.",
      "area": "Meyrin",
      "url": "https://www.geneve.com/en/see-do/history-culture/museums/science-nature-and-specialized-museums/cern-the-science-gateway",
      "sourceNote": "Geneva Tourism (geneve.com), fetched"
    },
    {
      "rank": 6,
      "name": "Patek Philippe Museum",
      "blurb": "Geneva watchmaking and enamel miniatures from the 1500s onward, plus Patek Philippe creations since 1839; adult entry from CHF 10.",
      "area": "Plainpalais",
      "url": "https://www.myswitzerland.com/en-us/experiences/patek-philippe-museum/",
      "sourceNote": "Switzerland Tourism (myswitzerland.com), fetched"
    },
    {
      "rank": 7,
      "name": "Lake Geneva boat cruises",
      "blurb": "Short shoreline tours, evening festive-menu cruises and lunch cruises on a Belle Epoque boat across the Petit Lac.",
      "area": "Lake Geneva quays",
      "url": "https://www.geneve.com/en/see-do/city-tours-day-trips/boat-tours-cruises",
      "sourceNote": "Geneva Tourism (geneve.com), fetched"
    },
    {
      "rank": 8,
      "name": "Bains des Pâquis",
      "blurb": "Year-round lakeside bathing spot near the Jet d'Eau with sauna, hammam and a popular fondue evening setting.",
      "area": "Pâquis",
      "url": "https://www.myswitzerland.com/en-us/experiences/bains-des-paquis-1/",
      "sourceNote": "Switzerland Tourism (myswitzerland.com), fetched"
    },
    {
      "rank": 9,
      "name": "Carouge",
      "blurb": "Mediterranean-feeling former Sardinian town with Wednesday and Saturday markets, galleries on Rue Saint-Joseph and lively bars and restaurants.",
      "area": "Carouge",
      "url": "https://www.myswitzerland.com/en-us/experiences/carouge-geneve/",
      "sourceNote": "Switzerland Tourism (myswitzerland.com), fetched"
    },
    {
      "rank": 10,
      "name": "Salève cable car day trip",
      "blurb": "A five-minute cable car ride reaches 1,100 metres with 360-degree views of Lake Geneva and Mont Blanc, about 20 minutes from Geneva.",
      "area": "Mont Salève (France, near Geneva)",
      "url": "https://www.myswitzerland.com/en-us/experiences/mont-saleve/",
      "sourceNote": "Switzerland Tourism (myswitzerland.com), fetched"
    }
  ],
  "basel": [
    {
      "rank": 1,
      "name": "Basel Old Town and Rathaus",
      "blurb": "Walk the compact Rhine-side old town: red town hall, market square, Spalentor gate and over 200 fountains.",
      "area": "Altstadt",
      "url": "https://www.myswitzerland.com/en-us/experiences/basel-old-town/",
      "sourceNote": "Fetched Switzerland Tourism page; town hall, market square, Spalentor, fountains confirmed"
    },
    {
      "rank": 2,
      "name": "Basler Münster (Basel Minster)",
      "blurb": "Landmark cathedral above the Rhine; entry is free, with a paid tower climb for city views.",
      "area": "Münsterhügel",
      "url": "https://www.baslermuenster.ch/en",
      "sourceNote": "Official Münster site fetched (tower climbing page exists); free entry/tower fee per myswitzerland.com old-town page"
    },
    {
      "rank": 3,
      "name": "Rhine Ferries",
      "blurb": "Four cable-driven ferries cross the Rhine between the bridges, running May to October, powered only by the current.",
      "area": "Rhine banks",
      "url": "https://www.myswitzerland.com/en-us/experiences/rhine-ferries/",
      "sourceNote": "Fetched Switzerland Tourism page"
    },
    {
      "rank": 4,
      "name": "Kunstmuseum Basel",
      "blurb": "Art museum across Hauptbau, Neubau and Gegenwart, covering Old Masters through classical modernism and art after 1950.",
      "area": "St. Alban-Graben",
      "url": "https://www.kunstmuseumbasel.ch/en",
      "sourceNote": "Official museum site fetched"
    },
    {
      "rank": 5,
      "name": "Fondation Beyeler",
      "blurb": "Modern and contemporary art museum in a park in Riehen, with buildings by Renzo Piano and Peter Zumthor.",
      "area": "Riehen",
      "url": "https://www.fondationbeyeler.ch/en",
      "sourceNote": "Official museum site fetched"
    },
    {
      "rank": 6,
      "name": "Museum Tinguely",
      "blurb": "Hosts the world's largest collection of Jean Tinguely's kinetic works; open Tuesday to Sunday, late on Thursdays.",
      "area": "Paul Sacher-Anlage",
      "url": "https://www.tinguely.ch/en.html",
      "sourceNote": "Official museum site fetched"
    },
    {
      "rank": 7,
      "name": "Tinguely Fountain",
      "blurb": "Free public landmark from 1977: nine moving iron figures spouting water in a basin at the former city theatre site.",
      "area": "Theaterplatz",
      "url": "https://www.myswitzerland.com/en-us/experiences/tinguely-fountain/",
      "sourceNote": "Fetched Switzerland Tourism page"
    },
    {
      "rank": 8,
      "name": "Basel Zoo (Zolli)",
      "blurb": "Basel's city zoo, nicknamed Zolli, with animal exhibits, conservation work, restaurants and day tickets.",
      "area": "Binningerstrasse",
      "url": "https://www.zoobasel.ch/en/",
      "sourceNote": "Official zoo site fetched; also listed on myswitzerland.com Basel page"
    },
    {
      "rank": 9,
      "name": "Basler Fasnacht",
      "blurb": "Switzerland's largest carnival, held every year in Basel with local traditions, schedules and events.",
      "area": "City-wide",
      "url": "https://www.basler-fasnacht.ch/en/",
      "sourceNote": "Official Fasnacht site fetched; dates not verified"
    },
    {
      "rank": 10,
      "name": "Augusta Raurica",
      "blurb": "Roman city ruins in Augst, a half-day trip into the Basel region's countryside.",
      "area": "Augst BL",
      "url": "https://www.myswitzerland.com/en-us/experiences/augusta-raurica-the-roman-city/",
      "sourceNote": "Fetched Switzerland Tourism page; address Giebenacherstrasse 17, Augst; also listed on Basel destination page"
    }
  ],
  "bern": [
    {
      "rank": 1,
      "name": "Old City of Bern (UNESCO)",
      "blurb": "Medieval old town, UNESCO-listed since 1983, with a six-kilometre arcade walk, vaulted cellar shops, historic fountains and views of the Aare.",
      "area": "Altstadt",
      "url": "https://www.myswitzerland.com/en/destinations/bern/",
      "sourceNote": "MySwitzerland Bern destination page (fetched): UNESCO since 1983, six-km arcades walk. Dedicated old-city page failed to load."
    },
    {
      "rank": 2,
      "name": "Zytglogge Clock Tower",
      "blurb": "Medieval clock tower with a 1530 mechanism; the puppet show starts four minutes before each hour, and booked one-hour tours climb 130 steps.",
      "area": "Altstadt, Kramgasse",
      "url": "https://www.myswitzerland.com/en-us/experiences/clock-tower/",
      "sourceNote": "MySwitzerland experience page (fetched)."
    },
    {
      "rank": 3,
      "name": "Bundeshaus (Parliament Building)",
      "blurb": "Seat of Swiss parliament and government, built 1894-1902; guided tours of 45-60 minutes are bookable, and debates can be watched from the gallery.",
      "area": "Bundesplatz",
      "url": "https://www.myswitzerland.com/en-us/experiences/bundeshaus/",
      "sourceNote": "MySwitzerland experience page (fetched). No regular tours while councillors are working."
    },
    {
      "rank": 4,
      "name": "BärenPark (Bear Park)",
      "blurb": "Enclosure with brown bears by the Aare, reached via the Nydeggbrücke bridge, which offers views over the old town and mountains.",
      "area": "Nydegg / Aare",
      "url": "https://www.myswitzerland.com/en/destinations/bern/",
      "sourceNote": "MySwitzerland Bern destination page (fetched) lists the BärenPark; dedicated page failed to load and bernerbaeren.ch was unreachable."
    },
    {
      "rank": 5,
      "name": "Rose Garden (Rosengarten)",
      "blurb": "Free public park above the Old Town, open at any hour, with wide views; a short downhill path leads to the Bear Park.",
      "area": "Altenberg hillside",
      "url": "https://www.myswitzerland.com/en-us/experiences/rose-garden/",
      "sourceNote": "MySwitzerland experience page (fetched)."
    },
    {
      "rank": 6,
      "name": "Einstein Museum",
      "blurb": "Second-floor exhibition inside the Bernisches Historisches Museum presenting Einstein's life and work with films and experiments; audio guide in nine languages.",
      "area": "Helvetiaplatz",
      "url": "https://www.myswitzerland.com/en/experiences/bernisches-historisches-museum-einstein-museum",
      "sourceNote": "MySwitzerland experience page (fetched). Prices vary by source; check museum before visiting."
    },
    {
      "rank": 7,
      "name": "Swimming and floating in the Aare",
      "blurb": "The turquoise Aare is part of everyday Bern life; strong swimmers can swim it or float downriver in a dinghy.",
      "area": "Aare river (Marzili, Lorraine)",
      "url": "https://www.myswitzerland.com/en/destinations/bern/",
      "sourceNote": "MySwitzerland Bern destination page (fetched). bern.com Aare page returned 403; safety: experienced swimmers only per search summary, not fetched."
    },
    {
      "rank": 8,
      "name": "Bern Minster",
      "blurb": "Gothic cathedral begun in 1421 with a 100-metre tower, Switzerland's tallest church; free entry and a viewing platform at 64 metres.",
      "area": "Altstadt, Münsterplatz",
      "url": "https://www.myswitzerland.com/en-us/experiences/bern-cathedral/",
      "sourceNote": "MySwitzerland experience page (fetched)."
    },
    {
      "rank": 9,
      "name": "Gurten, Bern's local mountain",
      "blurb": "858-metre hill reached by the 1899 funicular from Wabern, with a free 22-metre lookout tower, play park, toboggan run and restaurants.",
      "area": "Wabern / Gurten",
      "url": "https://www.myswitzerland.com/en-us/experiences/gurten-views-over-berne-and-the-alps/",
      "sourceNote": "MySwitzerland experience page (fetched)."
    },
    {
      "rank": 10,
      "name": "Botanical Garden of the University of Bern",
      "blurb": "City-centre garden beside the Aare with about 5,500 plant species, six show houses, an Alpinum and a warm rainforest-style Palm House.",
      "area": "Altenberg, by the Aare",
      "url": "https://www.myswitzerland.com/en-us/experiences/botanical-garden-of-the-university-of-bern/",
      "sourceNote": "MySwitzerland experience page (fetched)."
    }
  ],
  "lausanne": [
    {
      "rank": 1,
      "name": "Lausanne Cathedral",
      "blurb": "Gothic cathedral consecrated in 1275; climb the belfry for views of the city, lake and Alps.",
      "area": "Cité",
      "url": "https://www.lausanne-tourisme.ch/en/explore/lausanne-cathedral/",
      "sourceNote": "Lausanne Tourisme page fetched; belfry 224 steps per 7-essential-things article. Rose window closed until spring 2027."
    },
    {
      "rank": 2,
      "name": "The Olympic Museum",
      "blurb": "The IOC's official museum on the lakeshore, founded 1993, with permanent and temporary exhibitions and a panoramic restaurant.",
      "area": "Ouchy",
      "url": "https://www.lausanne-tourisme.ch/en/explore/the-olympic-museum/",
      "sourceNote": "Lausanne Tourisme page fetched."
    },
    {
      "rank": 3,
      "name": "Ouchy lakefront",
      "blurb": "Tree-lined quays, three parks and a rose garden with over 130 species; also the departure point for lake cruises.",
      "area": "Ouchy",
      "url": "https://www.lausanne-tourisme.ch/en/explore/ouchy/",
      "sourceNote": "Lausanne Tourisme page fetched."
    },
    {
      "rank": 4,
      "name": "Lavaux vineyard terraces (UNESCO)",
      "blurb": "UNESCO-listed terraced vineyards with marked walking trails, lake and Alps views, and wine tastings in local cellars.",
      "area": "Lavaux, near Lausanne",
      "url": "https://www.lausanne-tourisme.ch/en/explore/unesco-listed-lavaux-vineyard-terraces/",
      "sourceNote": "Lausanne Tourisme page fetched."
    },
    {
      "rank": 5,
      "name": "Plateforme 10",
      "blurb": "Art district beside the station housing MCBA, mudac and Photo Elysée; one ticket covers all three, plus cafes.",
      "area": "Near Lausanne station",
      "url": "https://www.lausanne-tourisme.ch/en/explore/plateforme-10/",
      "sourceNote": "Lausanne Tourisme page fetched."
    },
    {
      "rank": 6,
      "name": "CGN lake cruise",
      "blurb": "Belle Epoque or modern boats leave Ouchy for Lake Geneva ports, including Lavaux tours from CHF 38.",
      "area": "Ouchy",
      "url": "https://www.lausanne-tourisme.ch/en/explore/cruise-on-lake-geneva-cgn/",
      "sourceNote": "Lausanne Tourisme page fetched; fares as listed there, may change. cgn.ch also lists Lausanne-Ouchy as a station."
    },
    {
      "rank": 7,
      "name": "Flon district",
      "blurb": "Former industrial quarter turned lively hub of restaurants, bars, shops, cinemas and exhibition spaces.",
      "area": "Flon",
      "url": "https://www.lausanne-tourisme.ch/en/explore/flon-the-heart-of-lausanne/",
      "sourceNote": "Lausanne Tourisme page fetched."
    },
    {
      "rank": 8,
      "name": "Sauvabelin Tower",
      "blurb": "35-metre wooden tower, mostly Douglas fir, with a 360-degree panorama of rooftops, the lake, Alps and Jura.",
      "area": "Sauvabelin forest",
      "url": "https://www.lausanne-tourisme.ch/en/explore/sauvabelin-tower/",
      "sourceNote": "Lausanne Tourisme page fetched."
    },
    {
      "rank": 9,
      "name": "Rolex Learning Center (EPFL campus)",
      "blurb": "SANAA-designed library and cultural hub on the EPFL campus, open to students and the public.",
      "area": "EPFL, Ecublens",
      "url": "https://www.lausanne-tourisme.ch/en/explore/the-rolex-learning-center/",
      "sourceNote": "Lausanne Tourisme page fetched."
    },
    {
      "rank": 10,
      "name": "Lake Geneva",
      "blurb": "Described as Europe's largest freshwater lake, with beaches, steamboat trips and mountain views on Lausanne's doorstep.",
      "area": "Lakeshore",
      "url": "https://www.lausanne-tourisme.ch/en/the-lausanner/articles/7-essential-things-to-see-in-lausanne/",
      "sourceNote": "Lausanne Tourisme article fetched (7 essential things to see)."
    }
  ]
};
