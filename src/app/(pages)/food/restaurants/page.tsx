import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import SectionTabs from "@/components/ui/SectionTabs";

export const metadata: Metadata = {
  title: "Indian Restaurants in Switzerland",
  description: "Find the best Indian restaurants in Zurich, Geneva, Basel, Bern, and Lausanne — from South Indian dosas to Punjabi dhabas.",
  openGraph: {
    title: "Indian Restaurants in Switzerland | IndiaSwiss",
    description: "Find the best Indian restaurants in Zurich, Geneva, Basel, Bern, and Lausanne — from South Indian dosas to Punjabi dhabas.",
  },
};

type Restaurant = { name: string; area: string; type: string; note: string; url: string | null };
type City = { city: string; restaurants: Restaurant[] };

const cities: City[] = [
  {
    city: "Zurich",
    restaurants: [
      {
        name: "Saravanaa Bhavan",
        area: "Oerlikon",
        type: "South Indian Vegetarian",
        note: "World's largest South Indian vegetarian chain — dosas, idlis, vadas, thalis. Pure veg. Part of the global brand present in 27 countries. Oerlikon district, Zürich.",
        url: "https://saravanaabhavan.swiss",
      },
      {
        name: "Kailash Parbat",
        area: "Enge / City West",
        type: "Vegetarian Mumbai Street Food",
        note: "Mumbai street food institution — chaats, bhel puri, pav bhaji, dahi puri. 100% vegetarian. Claridenstrasse 36, 8002 Zürich.",
        url: "https://www.kailashparbat.ch",
      },
      {
        name: "Restaurant Vulkan",
        area: "Langstrasse / Gewerbeschule",
        type: "Pan-Indian / Buffet",
        note: "Established Zurich favourite with traditional clay-oven tandoor dishes and all-you-can-eat buffets. Klingenstrasse 33, 8005 Zürich.",
        url: "https://restaurant-vulkan.ch",
      },
      {
        name: "Tamarind Garden",
        area: "Zurich",
        type: "North & South Indian",
        note: "Relaxed setting with a wide menu spanning North Indian curries and South Indian classics.",
        url: "https://tamarindgarden.ch",
      },
      {
        name: "Samosa Bar",
        area: "Zurich City",
        type: "Indian Street Food",
        note: "Casual Indian street food concept specialising in samosas with creative fillings — a popular quick lunch spot in central Zurich.",
        url: "https://samosabar.ch",
      },
    ],
  },
  {
    city: "Geneva",
    restaurants: [
      {
        name: "Café Gandhi",
        area: "City Centre",
        type: "Pan-Indian",
        note: "Authentic curries and thalis since 1996 — one of Geneva's longest-running Indian restaurants. 9.3 rating on TheFork. Also offers event catering.",
        url: "https://gandhi.ch",
      },
      {
        name: "Little India Street Kitchen",
        area: "Pâquis / Rue de Lausanne",
        type: "Street Food / Punjabi",
        note: "Fragrant curries and tandoori specialties. Rue de Lausanne 29, 1201 Genève. Phone: +41 22 732 71 81.",
        url: "https://littleindia-streetkitchen.ch",
      },
      {
        name: "Indian Bites",
        area: "Geneva",
        type: "Contemporary Indian",
        note: "Popular for quick and flavourful Indian bites; good vegetarian selection.",
        url: "https://www.indianbites.ch",
      },
      {
        name: "Rasoi by Vineet",
        area: "Mandarin Oriental Hotel",
        type: "Fine Dining / Modern Indian",
        note: "Award-winning fine dining Indian restaurant by Chef Vineet Bhatia inside the Mandarin Oriental Geneva. Contemporary Indian cuisine at its finest.",
        url: "https://www.mandarinoriental.com/en/geneva/rhone/dine/rasoi-by-vineet",
      },
      {
        name: "Curry Leaf Geneva",
        area: "Geneva",
        type: "South Indian / Sri Lankan",
        note: "South Indian and Sri Lankan flavours in Geneva — rice plates, kottu roti, and authentic curries popular with the Tamil community.",
        url: null,
      },
    ],
  },
  {
    city: "Basel",
    restaurants: [
      {
        name: "The Bajwa's",
        area: "City Centre",
        type: "Punjabi / North Indian",
        note: "Family-run Punjabi restaurant serving authentic North Indian cuisine. Dine-in, takeaway, and catering. Elisabethenstrasse 41, 4051 Basel.",
        url: "https://thebajwas.ch",
      },
      {
        name: "Indian Tandoori Palace",
        area: "Petersgraben",
        type: "North Indian / Tandoor",
        note: "Family-owned restaurant. Gluten-free, dairy-free, and vegan options available. Petersgraben 21, 4051 Basel. Mon–Sat 11:30–14:00 & 18:00–23:00. No website — search 'Indian Tandoori Palace Basel' on Google Maps.",
        url: null,
      },
      {
        name: "Biryani Haus Basel",
        area: "Basel",
        type: "Biryani Specialist",
        note: "Dedicated biryani restaurant with Hyderabadi and Kolkata-style biryani. No website — search on Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Bern",
    restaurants: [
      {
        name: "Swaad",
        area: "Bern",
        type: "Pan-Indian",
        note: "Highly rated for authentic home-style Indian cooking. Accommodating chef known for personalised service. No website — search 'Swaad Bern' on Google Maps.",
        url: null,
      },
      {
        name: "Indian Kitchen",
        area: "Lorraine",
        type: "Pan-Indian",
        note: "Popular neighbourhood restaurant known for generous portions and home-style cooking. Lorrainestrasse 25, 3013 Bern. No website — search Google Maps.",
        url: null,
      },
      {
        name: "Namaste India",
        area: "Monbijou",
        type: "North Indian",
        note: "Established Indian restaurant near Bern city centre. Monbijoustrasse 26, Bern. No website — search Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Lausanne",
    restaurants: [
      {
        name: "Indian Zayeka",
        area: "Chavannes-près-Renens",
        type: "North Indian / Buffet",
        note: "Authentic North Indian restaurant since 2010 by Chef Amandeep Kaur from New Delhi. Lunch buffet available. Rue de la Mouline 8, 1022 Chavannes-près-Renens.",
        url: "https://www.indianzayeka.ch",
      },
      {
        name: "NewDelhi",
        area: "City Centre",
        type: "South & North Indian",
        note: "Centrally located Indian restaurant with a broad menu. Lausanne city centre.",
        url: "https://newdelhi.ch",
      },
      {
        name: "Nandanam",
        area: "Lausanne",
        type: "Kerala / South Indian",
        note: "Kerala-influenced restaurant by owner Pradeep Chandran. Well-crafted curries and South Indian specialties. No website — search Google Maps.",
        url: null,
      },
    ],
  },
  {
    city: "Other Cities",
    restaurants: [
      {
        name: "Bollywood Restaurant",
        area: "Lugano",
        type: "Pan-Indian",
        note: "Well-established Indian restaurant in Lugano, serving North and South Indian dishes. Popular with Indian residents and tourists in Italian-speaking Switzerland.",
        url: null,
      },
      {
        name: "Indian Palace",
        area: "Lucerne",
        type: "North Indian",
        note: "Long-running Indian restaurant in Lucerne city centre. Serves classic North Indian curries, tandoor dishes, and biryani. Search 'Indian Palace Luzern' on Google Maps.",
        url: null,
      },
      {
        name: "Himalaya Restaurant",
        area: "St. Gallen",
        type: "Indian / Nepali",
        note: "Indian and Nepali cuisine in St. Gallen city. Good option for eastern Switzerland. Search 'Himalaya St. Gallen' on Google Maps.",
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
        subtitle="From crispy dosas to rich Mughlai curries — find the best Indian dining across Switzerland."
        badge="Restaurants"
        gradient="from-red-500 to-orange-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Restaurants" },
        ]}
      />

      <SectionTabs
        tabs={cities.map((c) => ({ id: c.city.toLowerCase(), label: c.city }))}
        accentColor="var(--mg)"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {cities.map((c) => (
          <section key={c.city} id={c.city.toLowerCase()}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>{c.city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.restaurants.map((r) => {
                const Wrapper = r.url ? "a" : "div";
                const props = r.url ? { href: r.url, target: "_blank", rel: "noopener noreferrer" } : {};
                return (
                  <Wrapper key={r.name} {...props} className="glass card-hover rounded-2xl p-5 block group" style={{ textDecoration: "none" }}>
                    <div className="flex items-start justify-between gap-2 mb-0.5">
                      <h3 className="text-base font-semibold group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{r.name}</h3>
                      {r.url && <span className="text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">Visit →</span>}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs" style={{ color: "var(--text-3)" }}>{r.area}</span>
                      <span style={{ color: "var(--text-3)" }}>·</span>
                      <span className="text-xs text-orange-400">{r.type}</span>
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-2)" }}>{r.note}</p>
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
                "Many Indian restaurants in Switzerland offer lunch buffets (CHF 18–28) on weekdays — often the best value for the money.",
                "Swiss Indian restaurants are generally more vegetarian-friendly than their European counterparts. Jain options (no onion/garlic) are available on request at several restaurants — always call ahead.",
                "Halal certification: several North Indian restaurants in Zurich and Geneva serve halal meat — Café Gandhi (Geneva) and Little India Street Kitchen are commonly cited. Always confirm directly with the restaurant.",
                "Spice levels: ask explicitly for Indian-spice levels if you want authentic heat — Swiss restaurants often dial it down for local tastes. Phrases like 'medium Indian' or 'like you'd make at home' help.",
                "Reservations: recommended on weekends and public holidays, especially for Zurich and Geneva restaurants. Use TheFork (LaFourchette) or call directly.",
                "Cards accepted almost universally in Switzerland, but some smaller restaurants prefer TWINT (Swiss mobile payment) or cash.",
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
          <p className="text-sm" style={{ color: "var(--text-2)" }}><span className="text-orange-400 font-semibold">Note:</span> Restaurant listings change frequently. Cards marked without a website link are verified as existing but do not have an official website — search by name on Google Maps for current hours and contact details. Know of a great Indian restaurant not listed here? Let us know via the community.</p>
        </div>
      </div>
    </div>
  );
}
