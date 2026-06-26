import PageHeader from "@/components/ui/PageHeader";

const stores = [
  { city: "Online (All Switzerland)", name: "India Supermarkt", url: "https://indiasupermarkt.ch", desc: "Widest range of Indian groceries — spices, dals, flours, frozen, MTR, Haldirams. Nationwide delivery in 1–3 days." },
  { city: "Zurich", name: "Aggarwals Indian Grocery", url: "", desc: "Langstrasse area — pulses, flours, pickles, frozen samosas, pooja items" },
  { city: "Zurich", name: "Art of Food", url: "", desc: "Fresh Indian vegetables (methi, karela, drumsticks), spices, ready-to-eat" },
  { city: "Geneva", name: "Epicentre", url: "", desc: "Indian groceries, spices, lentils, basmati rice, near Carouge" },
  { city: "Geneva", name: "Asia Express Carouge", url: "", desc: "Indian and Asian groceries, good spice selection" },
  { city: "Basel", name: "Asian Food Store", url: "", desc: "Indian spices, basmati rice, lentils, frozen Indian foods" },
  { city: "Bern", name: "Asia Deli Bern", url: "", desc: "Indian and Asian groceries, near city centre" },
  { city: "Lausanne", name: "Asia Market Lausanne", url: "", desc: "Indian spices and groceries near EPFL campus area" },
];

const categories = [
  { name: "Spices & Masalas", items: ["Turmeric (haldi)", "Cumin (jeera)", "Coriander powder", "Cardamom (elaichi)", "Red chilli powder", "Garam masala", "Asafoetida (hing)", "Mustard seeds", "Curry leaves (dried)"] },
  { name: "Dals & Legumes", items: ["Toor dal", "Chana dal", "Moong dal", "Urad dal", "Masoor dal", "Rajma (kidney beans)", "Chana (chickpeas)", "Lobia"] },
  { name: "Flours & Grains", items: ["Atta (wheat flour)", "Besan (chickpea flour)", "Rice flour", "Sooji (semolina)", "Basmati rice", "Poha (flattened rice)", "Sabudana (tapioca)"] },
  { name: "Ready-to-Eat & Snacks", items: ["MTR ready meals", "Haldirams snacks", "Bikaji mixtures", "Frozen samosas", "Frozen parathas", "Frozen dosa batter", "Instant noodles (Maggi)"] },
];

export default function GroceryPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Grocery Stores in Switzerland"
        subtitle="Find Indian spices, dals, flours, frozen foods, paneer, and pooja items near you — or order online for nationwide delivery."
        badge="Online & In-Store"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[{ label: "Food & Dining", href: "/food" }, { label: "Grocery & Spices" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">Stores by City</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {stores.map((s) => (
              <div key={s.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{s.name}</h3>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full ml-2 shrink-0">{s.city}</span>
                </div>
                <p className="text-sm text-slate-400 mb-3">{s.desc}</p>
                {s.url && (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-400 hover:text-orange-300">Visit website &rarr;</a>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-6">What to Find</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <div key={cat.name} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-orange-400 mb-3 text-sm">{cat.name}</h3>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-orange-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-orange-500/20">
          <h3 className="font-semibold text-white mb-3">Tip: Swiss Supermarkets</h3>
          <p className="text-sm text-slate-400">Coop and Migros stock basics like basmati rice, coconut milk, curry paste, and sometimes paneer. The <span className="text-orange-400">Coop Finest</span> range and <span className="text-orange-400">Migros Bio</span> section often carry Indian-inspired products. For full Indian ingredients, dedicated Indian stores are your best bet.</p>
        </div>
      </div>
    </div>
  );
}
