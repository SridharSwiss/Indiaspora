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
      { name: "Saffron", area: "City Centre", type: "North Indian", note: "Upscale North Indian cuisine; popular for business lunches." },
      { name: "Ganesha", area: "Langstrasse", type: "South Indian / Pan-Indian", note: "Affordable lunch thalis and dosas; community favourite." },
      { name: "India House", area: "Oerlikon", type: "Punjabi", note: "Generous portions; halal options available." },
    ],
  },
  {
    city: "Geneva",
    restaurants: [
      { name: "Rasoi", area: "Carouge", type: "Pan-Indian", note: "Popular with UN professionals; good vegetarian options." },
      { name: "Taj Mahal", area: "City Centre", type: "North Indian", note: "Classic Indian restaurant; open for decades." },
    ],
  },
  {
    city: "Basel",
    restaurants: [
      { name: "Bollywood", area: "Grossbasel", type: "Pan-Indian", note: "Lively atmosphere; popular with pharma community." },
      { name: "Curry Heaven", area: "Kleinbasel", type: "South Indian", note: "Dosas and South Indian breakfast on weekends." },
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
            <h2 className="text-2xl font-bold text-white mb-6">{c.city}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {c.restaurants.map((r) => (
                <div key={r.name} className="glass card-hover rounded-2xl p-5">
                  <h3 className="text-base font-semibold text-white mb-0.5">{r.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-white/40">{r.area}</span>
                    <span className="text-white/20">·</span>
                    <span className="text-xs text-orange-400">{r.type}</span>
                  </div>
                  <p className="text-sm text-white/60">{r.note}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="glass rounded-2xl p-6 border border-orange-500/20">
          <p className="text-sm text-white/70"><span className="text-orange-400 font-semibold">Note:</span> Restaurant listings change frequently. We recommend verifying opening hours on Google Maps before visiting. Know of a great Indian restaurant not listed here? Let us know via the community.</p>
        </div>
      </div>
    </div>
  );
}
