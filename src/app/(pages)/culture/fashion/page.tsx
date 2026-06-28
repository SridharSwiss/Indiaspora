import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Fashion & Boutiques in Switzerland",
  description: "Find Indian sarees, lehengas, designer wear, and jewellery in Switzerland — physical boutiques and online options.",
  openGraph: {
    title: "Indian Fashion & Boutiques in Switzerland | IndiaSwiss",
    description: "Find Indian sarees, lehengas, designer wear, and jewellery in Switzerland — physical boutiques and online options.",
  },
};

const boutiques = [
  { name: "Rang De Zurich", city: "Zurich", speciality: "Sarees & Salwars", desc: "Curated collection of Indian ethnic wear — silk sarees, cotton salwars, and Indo-Western fusion. Custom alterations available." },
  { name: "Desi Closet", city: "Geneva", speciality: "Bridal & Party Wear", desc: "Bridal lehengas, anarkalis, and occasion wear for the Geneva community. Appointments recommended." },
  { name: "Lehenga House Zurich", city: "Zurich", speciality: "Wedding Collection", desc: "Specialises in bridal and wedding guest wear. Full collection of lehengas, sherwanis, and kurtas. In-house alterations." },
  { name: "Silk India Basel", city: "Basel", speciality: "Pure Silk Sarees", desc: "Kanjivaram, Banarasi, and Mysore silk sarees imported directly from India. Also carries running fabric and blouse pieces." },
];

const online = [
  { name: "Myntra (India)", url: "https://www.myntra.com", desc: "India's largest fashion platform. Ships internationally; check import duties for Switzerland." },
  { name: "Utsav Fashion", url: "https://www.utsavfashion.com", desc: "Designer ethnic wear with international shipping — sarees, lehengas, and salwars." },
  { name: "Craftsvilla", url: "https://www.craftsvilla.com", desc: "Authentic Indian handicrafts and ethnic wear. Handloom sarees, block print fabric." },
  { name: "BAZG Swiss Customs", url: "https://www.bazg.admin.ch/bazg/en/home.html", desc: "Check Swiss customs duties before ordering — clothing imports above CHF 300 may attract duty." },
];

const community = [
  { channel: "Facebook: Indian Wardrobe Switzerland", desc: "Buy, sell, and swap pre-loved Indian outfits. Active community with regular posts." },
  { channel: "WhatsApp: Desi Moms Switzerland", desc: "Many home boutique owners take orders via WhatsApp. Ask for recommendations in this group." },
  { channel: "Instagram: #IndianFashionZurich", desc: "Follow the hashtag for boutique announcements, outfit inspiration, and sale events." },
  { channel: "DHL International Shipping from India", desc: "Most families use DHL or FedEx to bring ethnic wear from India. Budget for duties and VAT on arrival." },
];

const jewellery = [
  { name: "Gold in Switzerland", note: "22K gold jewellery is harder to find in Switzerland than in India. Some families bring it on trips or order via trusted jewellers in India." },
  { name: "Indian Jewellery Shops", note: "A few shops in Zurich's city centre carry 22K gold and silver Indian jewellery. Ask the community for current recommendations." },
  { name: "Tanishq (India Duty-Free)", note: "Many Indians purchase Tanishq jewellery at Indian airports and bring it to Switzerland duty-free within the personal allowance limits." },
];

export default function FashionPage() {
  return (
    <div>
      <PageHeader
        title="Indian Fashion & Boutiques"
        subtitle="Find Indian ethnic wear in Switzerland — from Kanjivaram silk sarees to bridal lehengas — through boutiques, community networks, and online orders."
        badge="Fashion Guide"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Fashion & Boutiques" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Physical Boutiques</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {boutiques.map((b) => (
              <div key={b.name} className="glass card-hover rounded-2xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-white">{b.name}</h3>
                  <span className="text-xs bg-rose-500/20 text-rose-400 px-2 py-1 rounded-full ml-2">{b.city}</span>
                </div>
                <p className="text-xs text-white/40 mb-2">{b.speciality}</p>
                <p className="text-sm text-slate-400">{b.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/30 mt-4">Note: boutique availability changes. Verify hours on Google Maps or ask in community groups before visiting.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Online Shopping & Imports</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {online.map((o) => (
              <a key={o.name} href={o.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-rose-400 transition-colors">{o.name}</h3>
                <p className="text-sm text-slate-400">{o.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Community Channels</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-4">
              {community.map((c) => (
                <li key={c.channel} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <p className="font-medium text-white text-sm mb-1">{c.channel}</p>
                  <p className="text-sm text-slate-400">{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Gold & Jewellery</h2>
          <div className="space-y-3">
            {jewellery.map((j) => (
              <div key={j.name} className="glass rounded-2xl p-5">
                <h3 className="font-semibold text-white text-sm mb-1">{j.name}</h3>
                <p className="text-sm text-slate-400">{j.note}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
