import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Grocery Stores in Switzerland",
  description: "Find Indian spices, dals, flours, and groceries near you — physical stores by city and online delivery across Switzerland.",
  openGraph: {
    title: "Indian Grocery Stores in Switzerland | IndiaSwiss",
    description: "Find Indian spices, dals, flours, and groceries near you — physical stores by city and online delivery across Switzerland.",
  },
};

const stores = [
  { city: "Zurich", name: "Namaste India", area: "Schlieren", note: "Large selection of fresh curry leaves, Indian vegetables, frozen foods, and all major brands." },
  { city: "Zurich", name: "Chennai Kitchen Shop", area: "Oerlikon", note: "South Indian specialties — idli rava, sambhar masala, tamarind, and sundried items." },
  { city: "Geneva", name: "Bombay Store", area: "Carouge", note: "Well-stocked Indian grocery with French-speaking staff; also carries Pakistani and Sri Lankan items." },
  { city: "Basel", name: "Spice of India", area: "Grossbasel", note: "Indian and South Asian groceries; also carries Ayurvedic products." },
  { city: "Bern", name: "Masala Shop", area: "Bern Centre", note: "Small but well-curated Indian grocery; order ahead for large quantities." },
];

const online = [
  { name: "indiasupermarkt.ch", desc: "Swiss-based Indian online supermarket — ships nationwide with 2-day delivery." },
  { name: "asia-markt.ch", desc: "Broader Asian grocery store with a good Indian section." },
  { name: "Amazon.de (Germany)", desc: "Wide range of Indian brands; ships to Switzerland but check import duties." },
];

export default function GroceryPage() {
  return (
    <div>
      <PageHeader
        title="Indian Grocery Stores"
        subtitle="Find the ingredients you need — from fresh curry leaves to atta flour — at Indian grocery stores across Switzerland."
        badge="Groceries"
        gradient="from-green-500 to-emerald-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Grocery Stores" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Physical Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stores.map((s) => (
              <div key={s.name} className="glass card-hover rounded-2xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-white">{s.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">{s.city}</span>
                </div>
                <p className="text-xs text-white/40 mb-2">{s.area}</p>
                <p className="text-sm text-white/60">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Online Delivery</h2>
          <div className="space-y-3">
            {online.map((o) => (
              <div key={o.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-green-400 mb-1">{o.name}</h3>
                <p className="text-sm text-white/60">{o.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
