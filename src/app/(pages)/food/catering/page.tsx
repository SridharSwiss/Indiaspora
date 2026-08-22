import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Catering & Tiffin Services in Switzerland",
  description: "Home-cooked Indian tiffin delivery and event catering across Zurich, Geneva, Basel, and beyond.",
  openGraph: {
    title: "Indian Catering & Tiffin Services in Switzerland | IndiaSwiss",
    description: "Home-cooked Indian tiffin delivery and event catering across Zurich, Geneva, Basel, and beyond.",
  },
};

const tiffinTypes = [
  { name: "Daily Tiffin", desc: "Home-cooked dal, sabzi, roti, and rice — delivered Monday to Friday. Popular with working professionals who want home-style food without cooking daily." },
  { name: "Weekend Specials", desc: "Biryani, curries, sweets, and regional specialties available on weekends. Usually ordered in advance." },
  { name: "Event Catering", desc: "Full catering for Diwali parties, weddings, baby showers, and corporate Indian lunches. Minimum order quantities apply." },
  { name: "Festival Boxes", desc: "Special occasion boxes — Diwali mithai, Eid treats, Navratri boxes — delivered across Switzerland." },
];

const findTiffin = [
  "Search Facebook groups: 'Indian Tiffin Zurich', 'Desi Food Geneva', 'Indian Home Food Switzerland'",
  "WhatsApp community groups — ask in your city's Indian community group",
  "Check with your local Indian association (IAGZ, Indian Association of Geneva, etc.)",
  "Instagram: search #indiantiffinzurich or #homecookedswiss",
];

export default function CateringPage() {
  return (
    <div>
      <PageHeader
        title="Catering & Tiffin Services"
        subtitle="Miss home-cooked food? Dozens of home chefs across Switzerland offer authentic Indian tiffin delivery and event catering."
        badge="Tiffin & Catering"
        gradient="from-pink-500 to-rose-500"
        breadcrumbs={[
          { label: "Food & Dining", href: "/food" },
          { label: "Catering & Tiffin" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Types of Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tiffinTypes.map((t) => (
              <div key={t.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-pink-400 mb-2">{t.name}</h3>
                <p className="text-sm text-white/60">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">How to Find Tiffin Services</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {findTiffin.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="text-pink-400 mt-0.5 flex-shrink-0">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-pink-500/20">
          <p className="text-sm text-white/70"><span className="text-pink-400 font-semibold">Note:</span> Most tiffin services are run by home chefs and are not commercial entities. Always confirm allergen information, delivery areas, and pricing directly. Payment is typically via TWINT or bank transfer.</p>
        </div>
      </div>
    </div>
  );
}
