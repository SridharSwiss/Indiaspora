import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Restaurants in Switzerland",
  description: "Find the best Indian restaurants in Zurich, Geneva, Basel, Bern, and Lausanne — from South Indian dosas to Punjabi dhabas.",
  openGraph: {
    title: "Indian Restaurants in Switzerland | IndiaSwiss",
    description: "Find the best Indian restaurants in Zurich, Geneva, Basel, Bern, and Lausanne — from South Indian dosas to Punjabi dhabas.",
  },
};

const cities = [
  {
    city: "Zurich",
    restaurants: [
      {
        name: "Kailash Parbat",
        area: "Enge / City West",
        type: "Vegetarian Indian",
        note: "Mumbai street food institution — chaats, bhel puri, pav bhaji. 100% vegetarian. Claridenstrasse 36, 8002 Zürich.",
        url: "https://www.kailashparbat.ch",
      },
      {
        name: "Tamarind Hill",
        area: "Oerlikon",
        type: "Modern Indian",
        note: "Contemporary Indian cuisine with outdoor seating near Oerlikon station. Schaffhauserstrasse 306, 8050 Zürich.",
        url: "https://tamarindhill.ch",
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
    ],
  },
  {
    city: "Geneva",
    restaurants: [
      {
        name: "Indian Plaza",
        area: "Pâquis",
        type: "Pan-Indian",
        note: "Well-known restaurant in the UN district. Rue de Monthoux 58, 1201 Genève. Phone: +41 22 732 07 32.",
        url: "https://indianplaza.ch",
      },
      {
        name: "Café Gandhi",
        area: "City Centre",
        type: "Pan-Indian",
        note: "Authentic curries and thalis since 1996 — one of Geneva's longest-running Indian restaurants. Also offers event catering.",
        url: "https://gandhi.ch",
      },
      {
        name: "Indian Bites",
        area: "Geneva",
        type: "Contemporary Indian",
        note: "Popular for quick and flavourful Indian bites; good vegetarian selection.",
        url: "https://www.indianbites.ch",
      },
      {
        name: "Little India Street Kitchen",
        area: "Pâquis",
        type: "Street Food / Pan-Indian",
        note: "Street food-style Indian kitchen. Rue de Lausanne 29, 1201 Genève. Phone: +41 22 732 71 81.",
        url: "https://www.geneve.com/en/restaurants/little-india-street-kitchen",
      },
    ],
  },
  {
    city: "Basel",
    restaurants: [
      {
        name: "Bajwa Palace (The Bajwa's)",
        area: "Vorstädte / City Centre",
        type: "Punjabi",
        note: "Family-run Punjabi restaurant serving authentic North Indian cuisine. Dine-in and takeaway. Elisabethenstrasse 41, 4051 Basel.",
        url: "https://thebajwas.ch",
      },
      {
        name: "Indian Tandoori Palace",
        area: "Grossbasel / Petersgraben",
        type: "North Indian / Tandoor",
        note: "Family-owned restaurant with experienced chef. Gluten-free, dairy-free, and vegan options available. Petersgraben 21, 4051 Basel.",
        url: "https://indiantandooripalacerestaurant.ch",
      },
    ],
  },
  {
    city: "Bern",
    restaurants: [
      {
        name: "Indian Kitchen",
        area: "Lorraine",
        type: "Pan-Indian",
        note: "Popular neighbourhood restaurant known for generous portions and home-style cooking. Lorrainestrasse 25, 3013 Bern.",
        url: "https://indiankitchen.ch",
      },
      {
        name: "Namaste India",
        area: "Monbijou",
        type: "North Indian",
        note: "Established Indian restaurant near Bern city centre. Monbijoustrasse 26, Bern.",
        url: "https://www.namasteindia.ch",
      },
      {
        name: "Way to India",
        area: "Bärenplatz / City Centre",
        type: "Pan-Indian",
        note: "Central Bern location steps from Bärenplatz. Convenient for lunch. Bärenplatz 3, 3011 Bern.",
        url: "https://www.yelp.com/biz/way-to-india-bern",
      },
    ],
  },
  {
    city: "Lausanne",
    restaurants: [
      {
        name: "Indian Zayeka",
        area: "Chavannes-près-Renens",
        type: "Pan-Indian",
        note: "Well-regarded Indian restaurant near Lausanne, listed on official Lausanne tourism site. Rue de la Mouline 8, 1022 Chavannes-près-Renens.",
        url: "https://www.indianzayeka.ch",
      },
      {
        name: "New Delhi",
        area: "City Centre",
        type: "North Indian",
        note: "Centrally located near Lausanne train station. Avenue Louis-Ruchonnet 2, 1003 Lausanne. Phone: +41 21 323 64 61.",
        url: "https://www.trip.com/restaurant/switzerland/lausanne/detail/new-delhi-indian-restaurant-68670164/",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {cities.map((c) => (
          <section key={c.city}>
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

        <div className="glass rounded-2xl p-6 border border-orange-500/20">
          <p className="text-sm" style={{ color: "var(--text-2)" }}><span className="text-orange-400 font-semibold">Note:</span> Restaurant listings change frequently. We recommend verifying opening hours on Google Maps before visiting. Know of a great Indian restaurant not listed here? Let us know via the community.</p>
        </div>
      </div>
    </div>
  );
}
