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

const cities = [
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
        note: "Family-owned restaurant with experienced chef. Gluten-free, dairy-free, and vegan options available. Petersgraben 21, 4051 Basel. Mon–Sat 11:30–14h & 18–23h.",
        url: "https://www.google.com/search?q=Indian+Tandoori+Palace+Basel+Petersgraben",
      },
      {
        name: "Biryani Haus Basel",
        area: "Basel",
        type: "Biryani Specialist",
        note: "Dedicated biryani restaurant with authentic Hyderabadi and Kolkata-style biryani.",
        url: "https://www.google.com/search?q=Biryani+Haus+Basel",
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
        note: "Highly rated for authentic home-style Indian cooking. Accommodating chef known for personalised service.",
        url: "https://www.google.com/search?q=Swaad+Indian+Restaurant+Bern+Switzerland",
      },
      {
        name: "Indian Kitchen",
        area: "Lorraine",
        type: "Pan-Indian",
        note: "Popular neighbourhood restaurant known for generous portions and home-style cooking. Lorrainestrasse 25, 3013 Bern.",
        url: "https://www.google.com/search?q=Indian+Kitchen+Bern+Lorrainestrasse",
      },
      {
        name: "Namaste India",
        area: "Monbijou",
        type: "North Indian",
        note: "Established Indian restaurant near Bern city centre. Monbijoustrasse 26, Bern.",
        url: "https://www.google.com/search?q=Namaste+India+restaurant+Bern",
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
        note: "Kerala-influenced restaurant by owner Pradeep Chandran. Well-crafted curries and South Indian specialties.",
        url: "https://www.google.com/search?q=Nandanam+Indian+restaurant+Lausanne",
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

        <div className="glass rounded-2xl p-6 border border-orange-500/20">
          <p className="text-sm" style={{ color: "var(--text-2)" }}><span className="text-orange-400 font-semibold">Note:</span> Restaurant listings change frequently. We recommend verifying opening hours on Google Maps before visiting. Know of a great Indian restaurant not listed here? Let us know via the community.</p>
        </div>
      </div>
    </div>
  );
}
