import PageHeader from "@/components/ui/PageHeader";

const storesByCity = [
  { city: "Zurich", stores: ["Aggarwals — Langstrasse", "Art of Food — Zurich"] },
  { city: "Geneva", stores: ["Epicentre — Geneva", "Asia Express — Carouge"] },
  { city: "Basel", stores: ["Asian Food Store — Güterstrasse"] },
  { city: "Bern", stores: ["Asia Deli — Bern"] },
  { city: "Lausanne", stores: ["Asia Market — Lausanne"] },
];

const categories = [
  { label: "Spices", items: "Turmeric, Cumin, Coriander, Cardamom, Chilli" },
  { label: "Dals & Lentils", items: "Toor dal, Chana dal, Moong dal, Urad dal" },
  { label: "Flours", items: "Atta (wheat flour), Besan (chickpea flour), Rice flour" },
  { label: "Frozen Foods", items: "Samosas, Parathas, Dosas, Vadas" },
  { label: "Ready-to-Eat", items: "MTR meals, Haldirams snacks, packaged curries" },
  { label: "Pooja Items", items: "Incense sticks, Diyas, Kumkum, Camphor, Puja thalis" },
];

export default function GroceryPage() {
  return (
    <div>
      <PageHeader
        title="Indian Grocery Stores in Switzerland"
        subtitle="Find Indian spices, dals, flours, frozen foods, paneer, and pooja items near you."
        badge="Online & In-Store"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Grocery & Spices" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Online Stores */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Online Stores</h2>
          <div className="glass card-hover rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-white">India Supermarkt</h3>
                <p className="text-white/70 mt-1">Widest range of Indian products — nationwide delivery across Switzerland.</p>
                <p className="text-sm text-white/50 mt-1">Spices, flours, dals, frozen goods, snacks, pooja items and more.</p>
              </div>
              <a
                href="https://indiasupermarkt.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                Visit Store
              </a>
            </div>
          </div>
        </section>

        {/* Physical Stores by City */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Physical Stores by City</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {storesByCity.map((group) => (
              <div key={group.city} className="glass card-hover rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">{group.city}</h3>
                <ul className="space-y-2">
                  {group.stores.map((store) => (
                    <li key={store} className="text-white/70 text-sm">{store}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* What to Find */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">What to Find</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.label} className="glass rounded-2xl p-6">
                <h3 className="text-base font-semibold text-white mb-2">{cat.label}</h3>
                <p className="text-sm text-white/60">{cat.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tip */}
        <div className="glass rounded-2xl p-6 border border-amber-500/20">
          <p className="text-white/80 text-sm">
            <span className="font-semibold text-amber-400">Tip:</span> Many Swiss supermarkets (Coop, Migros) stock basic Indian ingredients like basmati rice, coconut milk, and curry paste — great for everyday cooking.
          </p>
        </div>
      </div>
    </div>
  );
}
