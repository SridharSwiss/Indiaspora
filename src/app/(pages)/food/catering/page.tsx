import PageHeader from "@/components/ui/PageHeader";

const tiffinServices = [
  { name: "Desi Tiffin Zurich", city: "Zurich", desc: "Monthly subscriptions available, veg and non-veg options, weekly menu posted on WhatsApp" },
  { name: "Maa ki Rasoi", city: "Zurich", desc: "Home-style Punjabi meals — dal, sabzi, roti, rice. WhatsApp orders, weekly meal plans" },
  { name: "South Indian Kitchen Zurich", city: "Zurich", desc: "Thali delivery with sambar, rasam, kootu, rice. Vegan-friendly options available" },
  { name: "Gujarat Dabba", city: "Zurich", desc: "Authentic Gujarati thali every week — dal, kadhi, shaak, rotli, rice, chhas" },
  { name: "Indian Home Kitchen Geneva", city: "Geneva", desc: "Daily tiffin and event catering for the Geneva Indian community" },
  { name: "Spice Affairs Basel", city: "Basel", desc: "Corporate catering and individual tiffin for Novartis, Roche area professionals" },
  { name: "Bern Tiffin Network", city: "Bern", desc: "Community-run meal sharing group — post requests and connect with home cooks" },
  { name: "Lausanne Indian Meals", city: "Lausanne", desc: "Student-focused affordable tiffin near EPFL campus" },
];

const eventCatering = [
  { event: "Weddings & Receptions", desc: "Full Indian wedding catering — mehendi, sangeet, reception buffets with 50+ items" },
  { event: "Diwali & Navratri Parties", desc: "Festive menus with chaat, sweets, snacks, and full dinner service" },
  { event: "Corporate Events", desc: "Professional Indian lunch/dinner catering for 10–500 guests" },
  { event: "Puja & Religious Events", desc: "Sattvic (no onion/garlic) catering, prasad preparation" },
  { event: "Birthday & Housewarmings", desc: "Home party catering with finger foods, curries, desserts" },
];

export default function CateringPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Catering & Home Chefs"
        subtitle="Home-cooked Indian meals delivered to your door — tiffin services, event catering, and home chefs across Switzerland."
        badge="Tiffin & Catering"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[{ label: "Food & Dining", href: "/food" }, { label: "Catering & Home Chefs" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-2">Tiffin Services</h2>
          <p className="text-slate-400 mb-8">Daily and weekly home-cooked Indian meal delivery across Swiss cities</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tiffinServices.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-5 card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-white">{t.name}</h3>
                  <span className="text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full ml-2 shrink-0">{t.city}</span>
                </div>
                <p className="text-sm text-slate-400">{t.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-2xl bg-orange-500/10 border border-orange-500/20">
            <p className="text-sm text-orange-300">Find tiffin services via Facebook groups: <strong>"Indians in Zurich"</strong>, <strong>"Desi Moms Switzerland"</strong>, <strong>"Indian Community Geneva"</strong>, <strong>"Indians in Basel"</strong></p>
          </div>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl font-bold text-white mb-2">Event Catering</h2>
          <p className="text-slate-400 mb-8">Professional Indian catering for weddings, pujas, and corporate events</p>
          <div className="grid md:grid-cols-2 gap-5">
            {eventCatering.map((e) => (
              <div key={e.event} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-orange-400 mb-2">{e.event}</h3>
                <p className="text-sm text-slate-400">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-3">Swiss Food Safety Note</h3>
          <p className="text-sm text-slate-400">Home chefs operating commercially in Switzerland must register with the cantonal food safety authority (Lebensmittelkontrolle). Check <a href="https://www.blv.admin.ch/blv/en/home/lebensmittel-und-ernaehrung/rechts-und-vollzugsgrundlagen/hilfsmittel-vollzug.html" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">blv.admin.ch</a> for food business regulations in Switzerland.</p>
        </div>
      </div>
    </div>
  );
}
