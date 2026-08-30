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

const caterers = [
  {
    name: "Authentic Swiss Indian Catering",
    city: "Switzerland",
    type: "Full-service catering",
    note: "Professional catering service specialising in both Swiss and Indian cuisine for all event types — weddings, corporate dinners, private parties, and festivals across Switzerland.",
    url: "https://www.authenticswissindiancatering.ch",
  },
  {
    name: "Spiceitupp — Personal Indian Chef",
    city: "Basel / Zurich / Bern",
    type: "Personal chef / cooking classes",
    note: "Certified personal chef who comes to your home and cooks authentic Indian food. From CHF 65/hour for up to 4 adults. Also offers Indian cooking classes. Covers Basel, Bern, Zurich, and Zug.",
    url: "https://spiceitupp.com",
  },
  {
    name: "Restaurant Vulkan Catering",
    city: "Zurich",
    type: "Restaurant-based catering",
    note: "Established Indian restaurant (Klingenstrasse 33, Zürich) offering full event catering — weddings, corporate events, birthday parties. North Indian and South Indian menus.",
    url: "https://restaurant-vulkan.ch",
  },
  {
    name: "Café Gandhi Catering",
    city: "Geneva",
    type: "Restaurant-based catering",
    note: "Authentic Indian catering from one of Geneva's oldest Indian restaurants (operating since 1996). Handles intimate dinners through to large wedding receptions. Tasting sessions available.",
    url: "https://gandhi.ch",
  },
  {
    name: "The Bajwa's Catering",
    city: "Basel",
    type: "Punjabi catering",
    note: "Family-run Punjabi catering service based in Basel, serving North Indian food for events, parties, and corporate functions across the Basel region.",
    url: "https://thebajwas.ch",
  },
];

const tiffinTypes = [
  { name: "Daily Tiffin", desc: "Home-cooked dal, sabzi, roti, and rice — delivered Monday to Friday. Popular with working professionals who want home-style food without cooking daily." },
  { name: "Weekend Specials", desc: "Biryani, curries, sweets, and regional specialties available on weekends. Usually ordered in advance." },
  { name: "Event Catering", desc: "Full catering for Diwali parties, weddings, baby showers, and corporate Indian lunches. Minimum order quantities apply." },
  { name: "Festival Boxes", desc: "Special occasion boxes — Diwali mithai, Eid treats, Navratri boxes — delivered across Switzerland." },
];

const findTiffin = [
  "Ask in your local Indian association — IAGZ (iagz.ch), Indian Association of Geneva, or TeluguSwiss often know home chefs",
  "Ask colleagues and neighbours — most tiffin providers work through word of mouth in the community",
  "Post in Indian WhatsApp or Telegram community groups for your city — responses are usually quick",
  "Submit a request on the IndiaSwiss events page — we can connect you with providers in your city",
  "Contact the Embassy of India Berne community desk — they sometimes maintain community directories",
];

const planningTips = [
  { heading: "Book early for weddings & festivals", body: "Indian wedding catering in Switzerland requires 4–8 weeks lead time minimum. Diwali and Eid season books up even faster — contact providers in September for October events." },
  { heading: "Clarify Jain & vegan options upfront", body: "Many caterers can accommodate Jain (no root vegetables, no onion/garlic), pure veg, or vegan menus. State this when booking, not on the day." },
  { heading: "Halal meat catering", body: "Several caterers in Zurich and Geneva can source halal-certified meat for events. Always confirm the supply chain and certification when booking." },
  { heading: "Minimum order quantities", body: "Event catering typically starts at 15–20 guests minimum. Daily tiffin services may require a weekly subscription commitment. Confirm minimum commitments before booking." },
  { heading: "Swiss food hygiene regulations", body: "Professional caterers operating commercially in Switzerland must comply with cantonal food hygiene regulations (Lebensmittelhygiene). Home chefs operating informally are not subject to the same rules — ask about their setup if this matters to you." },
  { heading: "Payment & contracts", body: "For large events, agree on a written menu, delivery times, and deposit (typically 30–50%) upfront. Day-of payment is usually by TWINT or bank transfer. Credit cards are rarely accepted for home chefs." },
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
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Known Catering Providers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caterers.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-base font-semibold group-hover:text-pink-400 transition-colors" style={{ color: "var(--text)" }}>{c.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-400 flex-shrink-0 ml-2">{c.city}</span>
                </div>
                <p className="text-xs/40 mb-2" style={{ color: "var(--text)" }}>{c.type}</p>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{c.note}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Types of Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tiffinTypes.map((t) => (
              <div key={t.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-pink-400 mb-2">{t.name}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>How to Find Tiffin Services</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {findTiffin.map((f) => (
                <li key={f} className="flex items-start gap-3/70 text-sm" style={{ color: "var(--text)" }}>
                  <span className="text-pink-400 mt-0.5 flex-shrink-0">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Planning Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {planningTips.map((t) => (
              <div key={t.heading} className="glass rounded-2xl p-5">
                <h3 className="text-base font-semibold text-pink-400 mb-2">{t.heading}</h3>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>{t.body}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-pink-500/20">
          <p className="text-sm/70" style={{ color: "var(--text)" }}><span className="text-pink-400 font-semibold">Note:</span> Most tiffin services are run by home chefs and are not commercial entities. Always confirm allergen information, delivery areas, and pricing directly. Payment is typically via TWINT or bank transfer.</p>
        </div>
      </div>
    </div>
  );
}
