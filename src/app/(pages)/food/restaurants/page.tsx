import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionTabs from "@/components/ui/SectionTabs";

export const metadata: Metadata = {
  title: "Indian Restaurants in Switzerland",
  description: "Find the best Indian restaurants in Zurich, Geneva, Basel, Bern, Lausanne, Winterthur and beyond — 60+ verified listings from South Indian dosas to Punjabi dhabas.",
  openGraph: {
    title: "Indian Restaurants in Switzerland | Indiaspora",
    description: "Find the best Indian restaurants in Zurich, Geneva, Basel, Bern, Lausanne, Winterthur and beyond — 60+ verified listings.",
  },
};

type Restaurant = { name: string; area: string; type: string; note: string; url: string | null };
type City = { city: string; id: string; restaurants: Restaurant[] };

const MAPS = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

const cities: City[] = [
  {
    city: "Zurich",
    id: "zurich",
    restaurants: [
      {
        name: "Saravanaa Bhavan",
        area: "Oerlikon (Kreis 11)",
        type: "South Indian Vegetarian",
        note: "Global South Indian vegetarian chain — dosas, idlis, vadas, thalis. Pure veg. One of the most authentic South Indian spots in Switzerland. Part of the worldwide brand.",
        url: "https://saravanaabhavan.swiss",
      },
      {
        name: "Kailash Parbat",
        area: "Enge — Claridenstrasse 36, 8002",
        type: "Mumbai Street Food · 100% Veg",
        note: "Mumbai institution — chaats, bhel puri, pav bhaji, dahi puri, Indian sweets. 100% vegetarian. Claridenstrasse 36, 8002 Zürich.",
        url: "https://www.kailashparbat.ch",
      },
      {
        name: "Tadka",
        area: "Kreis 5 — Quellenstrasse 49 / Ackerstrasse",
        type: "North & South Indian / Bar",
        note: "Vibrant corner restaurant and bar. Diverse curries including Kerala fish, Goa preparations, lamb vindaloo, Dal Makhani, tandoori BBQ. Vegan-friendly. +41 44 578 06 41.",
        url: "https://tadka.ch",
      },
      {
        name: "New Bombay",
        area: "Niederdorf / Old Town — Predigerplatz 34",
        type: "North Indian Vegetarian",
        note: "Hidden gem near Predigerkirche in Zurich's old town. 60 indoor + 60 terrace seats. Fresh local ingredients, Tandoori Chicken, Vegi Thali. Best value Indian in central Zurich.",
        url: "https://newbombay-zurich.ch",
      },
      {
        name: "Restaurant Vulkan",
        area: "Langstrasse — Klingenstrasse 33, 8005",
        type: "Pan-Indian / Buffet",
        note: "Zurich favourite with traditional clay-oven tandoor dishes and all-you-can-eat buffets. Generous portions, consistently good. Klingenstrasse 33, 8005 Zürich.",
        url: "https://restaurant-vulkan.ch",
      },
      {
        name: "Restaurant Masala",
        area: "Aussersihl (Kreis 4) — Stauffacherstrasse 27",
        type: "Pan-Indian",
        note: "Long-running Indian restaurant. Broad North Indian menu, tandoori specialties, biryani, lunch specials. Stauffacherstrasse 27, 8004 Zürich. +41 44 240 03 61.",
        url: "https://masala.ch",
      },
      {
        name: "Tamarind Hill",
        area: "Oerlikon — Schaffhauserstrasse 306, 8050",
        type: "Contemporary Indian",
        note: "Ranked #21 of 2,400+ restaurants in Zürich on TripAdvisor. Contemporary Indian cuisine celebrating the culinary heritage of India. Tue–Fri 11–14 & 17–22. +41 43 535 25 95.",
        url: "https://tamarindhill.ch",
      },
      {
        name: "Tamarind Garden",
        area: "Albisrieden (Kreis 9) — Birmensdorferstrasse 427",
        type: "North & South Indian",
        note: "Relaxed setting with a wide menu spanning North Indian curries and South Indian classics. Popular for family dinners. Birmensdorferstrasse 427, 8055 Zürich.",
        url: "https://tamarindgarden.ch",
      },
      {
        name: "Ooh! Curry",
        area: "Oerlikon — Franklinstrasse 6, 8050",
        type: "Modern Indian / Street Food",
        note: "Modern and urban atmosphere offering Indian street food and popular delicacies. 310m from Oerlikon station. Dal Makhni, Butter Chicken, Biryanis. +41 44 203 55 66.",
        url: "https://oohcurry.ch",
      },
      {
        name: "Delhi House",
        area: "Aussersihl (Kreis 4) — Zypressenstrasse 52",
        type: "Pan-Indian / Bistro",
        note: "Authentic Indian restaurant and adjacent bistro in Kreis 4 — Indian guests call it 'just like home'. Restaurant and takeaway side-by-side. Zypressenstrasse 52, 8004 Zürich.",
        url: "https://delhihouse.ch",
      },
      {
        name: "Taj Mahal Zurich",
        area: "Albisrieden — Badenerstrasse 649, 8048",
        type: "Punjabi / North Indian · Halal",
        note: "Halal-certified Indian and Punjabi cuisine cooked à la minute. Traditional food from Indian Punjab with aromatic freshness. Badenerstrasse 649, 8048 Zürich.",
        url: "https://tajmahal-zurich.ch",
      },
      {
        name: "Samosa Bar",
        area: "City Centre",
        type: "Indian Street Food",
        note: "Casual concept specialising in samosas with creative fillings — a popular quick lunch spot in central Zurich. Great for a fast desi snack.",
        url: "https://samosabar.ch",
      },
      {
        name: "Malabar",
        area: "Oerlikon — Wallisellenstrasse 11, 8050",
        type: "South Indian",
        note: "Elegant South Indian restaurant — exquisite curries, elaborate thalis, delicious desserts. Vegan and vegetarian options. Prompt, impeccable service. Wallisellenstrasse 11, 8050.",
        url: MAPS("Malabar Indian Restaurant Wallisellenstrasse 11 Zürich"),
      },
      {
        name: "Kormasutra",
        area: "Altstadt — Mühlegasse 5, 8001",
        type: "North Indian",
        note: "5 minutes from Zurich HB. Good selection of curries and tandoori dishes. Popular lunch spot for office workers and visitors. Mühlegasse 5, 8001 Zürich.",
        url: MAPS("Kormasutra Mühlegasse 5 Zürich"),
      },
      {
        name: "Bombay Karachi",
        area: "Kreis 6 — Stampfenbachstrasse 32, 8006",
        type: "Indian / Pakistani · Halal",
        note: "Halal Indian and Pakistani cuisine. Known for biryani with Karachi-style depth and robust curries. Best halal Indian option in central Zurich. Stampfenbachstrasse 32.",
        url: MAPS("Bombay Karachi Stampfenbachstrasse 32 Zürich"),
      },
      {
        name: "Thali House",
        area: "Kreis 6 — Schaffhauserstrasse 32, 8006",
        type: "Pan-Indian / Thali",
        note: "Authentic thali platters with age-old family recipes. Rated 4.4 stars with 1,800+ reviews — one of Zurich's most-reviewed Indian restaurants. Schaffhauserstrasse 32.",
        url: MAPS("Thali House Indian Restaurant Schaffhauserstrasse Zürich"),
      },
      {
        name: "Golden India",
        area: "Oerlikon / North — Schaffhauserstrasse 410, 8050",
        type: "Pan-Indian",
        note: "Neighbourhood Indian restaurant rated 9.4 on TheFork. Very friendly staff, dignified atmosphere, excellent food at affordable prices. Schaffhauserstrasse 410.",
        url: MAPS("Golden India Schaffhauserstrasse 410 Zürich"),
      },
      {
        name: "Maharani",
        area: "Höngg (Kreis 10) — Limmattalstrasse 252",
        type: "Pan-Indian",
        note: "Indian restaurant in Zürich Höngg, featuring a whimsical dining space with artificial tree sculptures and river views. Popular neighbourhood destination. Limmattalstrasse 252.",
        url: MAPS("Maharani Indian Restaurant Limmattalstrasse Zürich Höngg"),
      },
      {
        name: "Darbar Indian Cuisine",
        area: "Zurich",
        type: "Pan-Indian",
        note: "Curries, kebabs, tandoori chicken, pakodas, and dals. Dine-in, takeaway, kerbside pickup, and delivery. Rated 4.2 stars with 400+ Google reviews.",
        url: MAPS("Darbar Indian Cuisine Restaurant Zurich Switzerland"),
      },
      {
        name: "India Street Food",
        area: "Langstrasse — Langstrasse 213, 8005",
        type: "South Indian / Sri Lankan · Takeaway",
        note: "Casual takeaway counter on Langstrasse. South Indian and Sri Lankan eats — dosas, curries, rice plates. Rated 4.5 on TripAdvisor. +41 78 831 82 25.",
        url: null,
      },
      {
        name: "Thali Indian Restaurant",
        area: "Zurich",
        type: "Pan-Indian / Thali",
        note: "Another well-reviewed thali specialist in Zurich, separate from Thali House. Known for veg thali with each item perfectly spiced and beautifully presented. Search on Google Maps.",
        url: null,
      },
      {
        name: "Indian BBQ",
        area: "Kreis 5 — near Escher Wyss Platz",
        type: "Tandoor / Grill",
        note: "Authentic Indian cuisine specialising in tandoor and BBQ preparations near Escher Wyss Platz in Kreis 5. Friendly service. Search 'Indian BBQ Zurich' on Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Geneva",
    id: "geneva",
    restaurants: [
      {
        name: "Café Gandhi",
        area: "City Centre",
        type: "Pan-Indian",
        note: "One of Geneva's longest-running Indian restaurants since 1996. Authentic curries and thalis. Rated 9.3 on TheFork. Halal options. Also offers event catering.",
        url: "https://gandhi.ch",
      },
      {
        name: "King Curry (Indian King)",
        area: "Servette — Route de Meyrin 4, 1202",
        type: "Pan-Indian / Buffet",
        note: "150-seat restaurant near the United Nations, 5 minutes from city centre. Great for team lunches, dinner with friends, and catering. Route de Meyrin 4, 1202 Genève. +41 22 733 82 48.",
        url: "https://kingcurry.ch",
      },
      {
        name: "Little India Street Kitchen",
        area: "Pâquis — Rue de Lausanne 29, 1201",
        type: "Street Food / Punjabi",
        note: "Fragrant curries and tandoori specialties near Geneva's Pâquis quarter. Halal options cited by the Indian community. Rue de Lausanne 29, 1201 Genève. +41 22 732 71 81.",
        url: "https://littleindia-streetkitchen.ch",
      },
      {
        name: "Little India",
        area: "Pâquis — Rue du Prieuré 20, 1202",
        type: "North Indian / Punjabi",
        note: "Near Geneva railway station. Authentic Punjabi-style Indian food — more authentic and better value than many Swiss Indian restaurants. Rue du Prieuré 20, 1202 Genève.",
        url: "https://littleindia.ch",
      },
      {
        name: "Kiran",
        area: "Saint-Gervais — Rue Kléberg 8",
        type: "North Indian Vegetarian · Halal",
        note: "Regal dining room, known for tender lamb chops, butter chicken, and strong vegetarian options. Halal-certified. Rue Kléberg 8, Genève. Search 'Kiran Geneva' on Google Maps.",
        url: "https://kiran-restaurant.ch",
      },
      {
        name: "Bombay Restaurant",
        area: "Cornavin — Rue de Berne 11, 1201",
        type: "Pan-Indian · Halal",
        note: "Halal Indian restaurant in Geneva's Cornavin district. Traditional North Indian cuisine cooked with fresh spices. Rue de Berne 11, 1201 Genève. Well-reviewed on TripAdvisor.",
        url: "https://bombay-restaurant.ch",
      },
      {
        name: "Rasoi by Vineet",
        area: "Mandarin Oriental — Quai Turrettini 1, 1201",
        type: "Fine Dining / Modern Indian",
        note: "Award-winning by Michelin-starred Chef Vineet Bhatia. First fine dining Indian restaurant in Geneva. Contemporary cuisine — best for a special occasion. Reservations essential.",
        url: "https://www.mandarinoriental.com/en/geneva/rhone/dine/rasoi-by-vineet",
      },
      {
        name: "Indian Bites",
        area: "Geneva",
        type: "Contemporary Indian",
        note: "Popular for quick and flavourful Indian bites with a good vegetarian selection. Convenient location, well-regarded by the Indian expat community in Geneva.",
        url: "https://www.indianbites.ch",
      },
      {
        name: "Namasté Genève",
        area: "Rue de la Servette 76, 1202",
        type: "Pan-Indian",
        note: "Popular Indian restaurant near the cinema in Geneva. Highly recommended for its warm atmosphere and generous portions. Rue de la Servette 76, 1202 Genève.",
        url: MAPS("Namaste Geneva Rue de la Servette 76"),
      },
      {
        name: "Le Safran",
        area: "Rue de Neuchâtel 37, 1201",
        type: "Pan-Indian",
        note: "Well-reviewed Indian restaurant in central Geneva. Traditional Indian cuisine with exceptional service. Rue de Neuchâtel 37, 1201 Genève. Search 'Le Safran Geneva' on Google Maps.",
        url: MAPS("Le Safran restaurant indien Genève"),
      },
      {
        name: "Chandigarh Tandoori",
        area: "Geneva",
        type: "Punjabi / Tandoor",
        note: "Punjabi-style tandoori restaurant known for well-spiced meats and robust curries. A solid choice for North Indian food in Geneva. Search 'Chandigarh Tandoori Geneva' on Google Maps.",
        url: null,
      },
      {
        name: "Curry Leaf Geneva",
        area: "Geneva",
        type: "South Indian / Sri Lankan",
        note: "South Indian and Sri Lankan flavours popular with the Tamil community — rice plates, kottu roti, and authentic curries. Search 'Curry Leaf Geneva' on Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Basel",
    id: "basel",
    restaurants: [
      {
        name: "Royal Palace",
        area: "Spalenring 160, 4055",
        type: "Pan-Indian / Buffet",
        note: "Family-run Indian restaurant with extensive menu and popular lunchtime buffet. Vegetarian, vegan, and halal options. Spalenring 160, 4055 Basel. +41 61 301 42 11.",
        url: "https://www.royal-palace.ch/site/en/indian-restaurant-basel/",
      },
      {
        name: "The Bajwa's",
        area: "Elisabethenstrasse 41, 4051",
        type: "Punjabi / North Indian",
        note: "Family-run Punjabi restaurant serving authentic North Indian cuisine. Dine-in, takeaway, and catering. Elisabethenstrasse 41, 4051 Basel.",
        url: "https://thebajwas.ch",
      },
      {
        name: "Bayleaf Gourmet Indian Restaurant",
        area: "Basel",
        type: "Pan-Indian / Gourmet",
        note: "Consistently rated as one of Basel's top Indian restaurants on TripAdvisor. Large selection of dishes from different Indian regions. Popular for both lunch and dinner.",
        url: MAPS("Bayleaf Gourmet Indian Restaurant Basel Switzerland"),
      },
      {
        name: "Indian Tandoori Palace",
        area: "Vorstädte — Petersgraben 21, 4051",
        type: "North Indian / Tandoor",
        note: "Family-owned with gluten-free, dairy-free, and vegan options. Petersgraben 21, 4051 Basel. Mon–Sat 11:30–14:00 & 18:00–23:00. Search Google Maps for current details.",
        url: null,
      },
      {
        name: "Mandir",
        area: "Basel",
        type: "Pan-Indian",
        note: "Indian restaurant in Basel listed in TripAdvisor's top 10 for the city. Known for flavourful curries and a cosy dining atmosphere. Search 'Mandir Basel' on Google Maps.",
        url: null,
      },
      {
        name: "Kings Kurry",
        area: "Basel",
        type: "North Indian / Takeaway",
        note: "Popular Indian restaurant and takeaway in Basel. Quick service, generous portions, good value. Search 'Kings Kurry Basel' on Google Maps.",
        url: null,
      },
      {
        name: "Dabbawalas",
        area: "Basel",
        type: "Indian Home Cooking",
        note: "Named after Mumbai's famous lunch-delivery workers. Home-style Indian food in Basel. Search 'Dabbawalas Basel' on Google Maps.",
        url: null,
      },
      {
        name: "Indian Summer",
        area: "Basel",
        type: "Pan-Indian",
        note: "Indian restaurant in Basel with a warm atmosphere. Curry dishes and tandoori specialties. Search 'Indian Summer Basel' on Google Maps.",
        url: null,
      },
      {
        name: "Bollywood Take Away",
        area: "Basel",
        type: "Indian Takeaway",
        note: "Indian takeaway popular for quick lunches and dinner pickup. North Indian dishes, biryani, and wraps. Search 'Bollywood Take Away Basel' on Google Maps.",
        url: null,
      },
      {
        name: "Biryani Haus Basel",
        area: "Basel",
        type: "Biryani Specialist",
        note: "Dedicated biryani restaurant with Hyderabadi and Kolkata-style biryani. Search 'Biryani Haus Basel' on Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Bern",
    id: "bern",
    restaurants: [
      {
        name: "Maharaja Palace",
        area: "Altstadt — Aarbergergasse 55, 3011",
        type: "Pan-Indian",
        note: "Family-run since 2000. One of Bern's most established Indian restaurants. Traditional and authentic cuisine. Aarbergergasse 55, 3011 Bern. Open daily for lunch and dinner.",
        url: "https://maharajapalace.ch",
      },
      {
        name: "Maharaja Indian Restaurant",
        area: "Bern",
        type: "North Indian",
        note: "Aromatic curries and tandoori specialties in Switzerland's capital. Highly recommended by Bern's Indian community for authentic flavours and welcoming service.",
        url: "https://www.maharajaindianrestaurant.ch",
      },
      {
        name: "India4U",
        area: "Belpstrasse 11, 3007",
        type: "Indian / Pakistani / Tandoor",
        note: "Serving authentic Indian and Pakistani food in Bern since 2008. Tandoori, curries, and biryanis. Belpstrasse 11, CH-3007 Bern. +41 31 381 39 19. Also offers delivery.",
        url: "https://india4u.ch",
      },
      {
        name: "Indian Kitchen",
        area: "Lorraine — Lorrainestrasse 25, 3013",
        type: "Pan-Indian",
        note: "Popular neighbourhood restaurant known for generous portions and home-style cooking. Lorrainestrasse 25, 3013 Bern. +41 31 333 03 06.",
        url: "https://indiankitchen.ch",
      },
      {
        name: "Royal Punjab",
        area: "Länggasse — Länggassstrasse 43, 3012",
        type: "Punjabi / North Indian",
        note: "Punjabi restaurant and bar near the university quarter. Well-spiced North Indian curries and tandoori dishes. Länggassstrasse 43, 3012 Bern. +41 31 301 24 36.",
        url: "https://www.royal-punjab.ch",
      },
      {
        name: "Kesar",
        area: "Murtenstrasse 131, 3008",
        type: "Pan-Indian",
        note: "Featured on MySwitzerland.com (Switzerland Tourism official guide). Authentic Indian cooking in a relaxed setting. Murtenstrasse 131, 3008 Bern.",
        url: MAPS("Restaurant Kesar Murtenstrasse 131 Bern"),
      },
      {
        name: "Way to India",
        area: "Bärenplatz 3, Bern",
        type: "Pan-Indian",
        note: "Indian restaurant in the heart of Bern, right on Bärenplatz. Listed in the official Bern city tourism guide. Bärenplatz 3, Bern.",
        url: MAPS("Way to India Bärenplatz Bern"),
      },
      {
        name: "Swaad",
        area: "Bern",
        type: "Pan-Indian / Home Cooking",
        note: "Highly rated for authentic home-style Indian cooking. Rated 9.4 on TheFork. Accommodating kitchen known for personalised service and real Indian spice levels on request.",
        url: null,
      },
      {
        name: "Namaste India",
        area: "Monbijou — Monbijoustrasse 26",
        type: "North Indian",
        note: "Established Indian restaurant near Bern city centre. Monbijoustrasse 26, Bern. Search 'Namaste India Bern' on Google Maps.",
        url: null,
      },
      {
        name: "Chillis Way to India",
        area: "Bern",
        type: "Pan-Indian",
        note: "Indian restaurant with well-reviewed curries and a casual atmosphere. Search 'Chillis Way to India Bern' on Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Lausanne",
    id: "lausanne",
    restaurants: [
      {
        name: "Indian Zayeka",
        area: "Chavannes-près-Renens — Rue de la Mouline 8, 1022",
        type: "North Indian / Buffet",
        note: "Authentic North Indian restaurant since 2010 by Chef Amandeep Kaur from New Delhi. Lunch buffet available. Rue de la Mouline 8, 1022 Chavannes-près-Renens.",
        url: "https://www.indianzayeka.ch",
      },
      {
        name: "Nandanam",
        area: "City Centre — Avenue Louis-Ruchonnet 11, 1003",
        type: "Kerala / South Indian",
        note: "Awarded 13 GaultMillau points. Kerala-owned, using local produce prepared with southern Indian gastronomy. Near Lausanne main station. Avenue Louis-Ruchonnet 11, 1003.",
        url: "https://www.nandanam.ch",
      },
      {
        name: "NewDelhi",
        area: "City Centre — Avenue Louis-Ruchonnet 2bis, 1003",
        type: "South & North Indian",
        note: "Centrally located with a broad menu spanning North and South Indian classics. Avenue Louis-Ruchonnet 2bis, 1003 Lausanne.",
        url: "https://newdelhi.ch",
      },
      {
        name: "Golden India",
        area: "Bessières / City Centre",
        type: "Pan-Indian",
        note: "Near the Bessières M2 metro station. Dine-in and takeaway. Featured by Lausanne Tourisme (official tourism guide). Search 'Golden India Lausanne' on Google Maps.",
        url: null,
      },
      {
        name: "Kashmir",
        area: "Lausanne",
        type: "North Indian / Kashmiri",
        note: "Highly rated on TheFork users for Lausanne. Kashmiri and North Indian cuisine. Search 'Kashmir Lausanne' on Google Maps.",
        url: null,
      },
      {
        name: "7 Kings Curry",
        area: "Lausanne",
        type: "Pan-Indian",
        note: "Popular Indian restaurant in Lausanne known for flavourful curries. Search '7 Kings Curry Lausanne' on Google Maps.",
        url: null,
      },
      {
        name: "Restaurant Laxmi",
        area: "Lausanne",
        type: "Pan-Indian",
        note: "Indian restaurant in the Lausanne area. Well-regarded by the local community for home-style cooking. Search 'Laxmi Lausanne' on Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Winterthur",
    id: "winterthur",
    restaurants: [
      {
        name: "Tandoor Indian Supermarket & Restaurant",
        area: "Neuwiesenstrasse 6 — behind Hauptbahnhof",
        type: "Pan-Indian / Buffet Takeaway",
        note: "Large Indian supermarket and restaurant directly behind Winterthur main station. In-store takeaway buffet with fresh Indian dishes daily. +41 52 550 29 01.",
        url: "https://www.indian-supermarket.ch",
      },
      {
        name: "Saffron Restaurant",
        area: "Winterthur",
        type: "North Indian",
        note: "Authentic Indian food in the heart of Winterthur. Well-spiced curries and a warm atmosphere. Search 'Saffron Restaurant Winterthur' on Google Maps.",
        url: null,
      },
      {
        name: "Mirch Masala",
        area: "Winterthur",
        type: "North Indian / Pakistani",
        note: "Popular Indian and Pakistani restaurant with broad menu — curries, biryani, and grill dishes. Halal options available. Search 'Mirch Masala Winterthur' on Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Lucerne & Other Cities",
    id: "lucerne-other",
    restaurants: [
      {
        name: "GourmIndia",
        area: "Lucerne — Baselstrasse 31, 6003",
        type: "Pan-Indian / Gluten-Free options",
        note: "Ranked #21 on TripAdvisor among 439 restaurants in Lucerne. Near Gutsch castle. Gluten-free Indian cuisine available. Baselstrasse 31, 6003 Luzern. +41 41 250 43 43.",
        url: "https://www.gourmindialuzern.com",
      },
      {
        name: "Indian Palace",
        area: "Lucerne — City Centre",
        type: "North Indian",
        note: "Long-running Indian restaurant in Lucerne. Classic North Indian curries, tandoor dishes, and biryani. Repeatedly praised as 'best Indian meal in Switzerland' by visitors. Search Google Maps.",
        url: null,
      },
      {
        name: "Bollywood Restaurant",
        area: "Lugano",
        type: "Pan-Indian",
        note: "Well-established Indian restaurant in Lugano. North and South Indian dishes. Popular with Indian residents and tourists in Italian-speaking Switzerland. Search Google Maps.",
        url: null,
      },
      {
        name: "Himalaya Restaurant",
        area: "St. Gallen",
        type: "Indian / Nepali",
        note: "Indian and Nepali cuisine in St. Gallen city — good option for eastern Switzerland. Search 'Himalaya St. Gallen' on Google Maps.",
        url: null,
      },
      {
        name: "Restaurant Holi",
        area: "St. Gallen",
        type: "Pan-Indian",
        note: "Indian restaurant in St. Gallen offering curries, tandoori dishes, and biryani. Search 'Restaurant Holi St Gallen' on Google Maps.",
        url: null,
      },
    ],
  },
];

export default function RestaurantsPage() {
  return (
    <div>
      <PageHeader
        title="Indian Restaurants"
        subtitle="From crispy dosas to rich Mughlai curries — find the best Indian dining across Switzerland. 60+ verified restaurants."
        badge="60+ Restaurants"
        gradient="from-red-500 to-orange-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Restaurants" },
        ]}
      />

      <SectionTabs
        tabs={cities.map((c) => ({ id: c.id, label: c.city }))}
        accentColor="var(--mg)"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {cities.map((c) => (
          <section key={c.id} id={c.id}>
            <h2 className="text-2xl font-bold mb-1" style={{ color: "var(--text)" }}>{c.city}</h2>
            <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>{c.restaurants.length} restaurant{c.restaurants.length !== 1 ? "s" : ""} listed</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.restaurants.map((r) => {
                const isMap = r.url?.includes("google.com/maps");
                const Wrapper = r.url ? "a" : "div";
                const props = r.url ? { href: r.url, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Wrapper key={r.name} {...props} className="glass card-hover rounded-2xl p-5 block group" style={{ textDecoration: "none" }}>
                    <div className="flex items-start justify-between gap-2 mb-0.5">
                      <h3 className="text-base font-semibold group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                      {r.url && (
                        <span className="text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                          {isMap ? "Map →" : "Visit →"}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs" style={{ color: "var(--text-3)" }}>{r.area}</span>
                      <span style={{ color: "var(--text-3)" }}>·</span>
                      <span className="text-xs text-orange-400">{r.type}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{r.note}</p>
                  </Wrapper>
                );
              })}
            </div>
          </section>
        ))}

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Tips for Dining Out</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {[
                "Many Indian restaurants offer weekday lunch buffets (CHF 18–28) — the best value. Look for 'Lunch Buffet' or 'Mittagsbuffet' signs.",
                "Swiss Indian restaurants are more vegetarian-friendly than their European counterparts. Jain options (no onion/garlic) available on request at several — always call ahead.",
                "Halal options: Bombay Karachi and Taj Mahal (Zurich), Café Gandhi, Bombay Restaurant and King Curry (Geneva) are commonly cited. Always confirm directly.",
                "Spice levels: ask explicitly for Indian-spice levels — Swiss kitchens often dial it down. Saying 'medium Indian' or 'like you'd make at home' helps.",
                "Reservations recommended on weekends and public holidays, especially Zurich and Geneva. Use TheFork (LaFourchette) or call directly.",
                "Cards accepted almost universally. Many smaller restaurants also prefer TWINT (Swiss mobile payment). Cash is always a safe backup.",
                "Cards with 'Map →' link directly to Google Maps — the most reliable way to find restaurants without their own website.",
              ].map(tip => (
                <li key={tip} className="flex items-start gap-3 text-sm" style={{ color: "var(--text)" }}>
                  <span className="text-orange-400 mt-0.5 flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-orange-500/20">
          <p className="text-sm" style={{ color: "var(--text-2)" }}>
            <span className="text-orange-400 font-semibold">Note:</span> Restaurant listings change frequently. Cards without a website link are verified as existing but have no official site — click 'Map →' or search by name on Google Maps for current hours and contact details. Know of a great Indian restaurant not listed here? Let us know via the community.
          </p>
        </div>
      </div>
    </div>
  );
}
