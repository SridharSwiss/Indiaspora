import PageHeader from "@/components/ui/PageHeader";

const tiffinServices = [
  { name: "Desi Tiffin Zurich", description: "Monthly subscriptions for veg and non-veg home-cooked meals, delivered across Zurich.", contact: "WhatsApp / DM" },
  { name: "Maa ki Rasoi", description: "Punjabi home-style cooking. Weekly thali orders placed via WhatsApp.", contact: "WhatsApp" },
  { name: "South Indian Kitchen Zurich", description: "Thali delivery service featuring sambar, rasam, rice, and curries. Vegan-friendly.", contact: "Facebook / WhatsApp" },
  { name: "Gujarat Dabba", description: "Gujarati thali delivered weekly — dal, sabzi, rotli, rice, and sweets.", contact: "WhatsApp" },
  { name: "Indian Home Kitchen Geneva", description: "Home-cooked North and South Indian meals for working professionals in Geneva.", contact: "Facebook DM" },
  { name: "Spice Affairs Basel", description: "Regular meal subscriptions and weekend specials serving the Basel community.", contact: "WhatsApp / Facebook" },
];

const cateringItems = [
  "Weddings: full multi-course Indian buffet, live chaat counter, desserts",
  "Diwali parties: chaat, starters, mains, mithai, and drinks",
  "Corporate events: vegetarian and non-vegetarian Indian lunch boxes",
  "Naming ceremonies, birthdays, pooja bhojan",
];

export default function CateringPage() {
  return (
    <div>
      <PageHeader
        title="Indian Catering & Home Chefs"
        subtitle="Home-cooked Indian meals delivered to your door — tiffin services, event catering, and home chefs across Switzerland."
        badge="Tiffin & Catering"
        gradient="from-amber-500 to-orange-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Catering & Home Chefs" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Tiffin Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiffinServices.map((service) => (
              <div key={service.name} className="glass card-hover rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-sm text-white/70 mb-3">{service.description}</p>
                <span className="text-xs text-amber-400 font-medium">Order via: {service.contact}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Event Catering</h2>
          <div className="glass rounded-2xl p-8">
            <p className="text-white/70 mb-4">Many home chefs and catering operations take on larger event bookings. Typical offerings include:</p>
            <ul className="space-y-2">
              {cateringItems.map((item) => (
                <li key={item} className="flex items-start gap-2 text-white/70 text-sm">
                  <span className="text-amber-400 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">How to Find Tiffin & Catering Services</h2>
          <div className="glass rounded-2xl p-8">
            <p className="text-white/70 mb-4">Most home chefs operate through community Facebook groups. Search for and join these groups:</p>
            <ul className="space-y-2">
              {["Indians in Zurich", "Desi Moms Switzerland", "Indian Community Geneva", "Indians in Basel"].map((group) => (
                <li key={group} className="flex items-start gap-2 text-white/70 text-sm">
                  <span className="text-amber-400 mt-0.5">→</span>
                  Facebook group: <span className="text-white font-medium ml-1">"{group}"</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-amber-500/20">
          <p className="text-white/80 text-sm">
            <span className="font-semibold text-amber-400">Note on Swiss Food Safety Rules:</span> Home chefs operating commercially in Switzerland must comply with cantonal food hygiene regulations. Cantons may require registration with the local food safety authority (<em>Lebensmittelkontrolle</em>) before selling home-cooked food. Ask your home chef if they are registered.
          </p>
        </div>
      </div>
    </div>
  );
}
