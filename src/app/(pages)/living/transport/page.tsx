import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Transport in Switzerland",
  description: "Swiss public transport guide — SBB trains, Half-Fare Travelcard, GA pass, and local city networks for Indian residents.",
  openGraph: {
    title: "Transport in Switzerland | IndiaSwiss",
    description: "Swiss public transport guide — SBB trains, Half-Fare Travelcard, GA pass, and local city networks for Indian residents.",
  },
};

const passes = [
  { name: "Half-Fare Travelcard (Halbtax)", price: "CHF 185/year", desc: "Halves the price of all single tickets nationwide. Best value for most residents.", recommended: true },
  { name: "GA (General Abonnement)", price: "~CHF 3,860/year (2nd class)", desc: "Unlimited travel on all SBB trains, trams, buses, and most boats. Worth it for daily commuters.", recommended: false },
  { name: "Day Pass", price: "CHF 52 (with Halbtax)", desc: "Unlimited travel on one day. Great for day trips.", recommended: false },
  { name: "Zone Subscription", price: "Varies by city", desc: "Monthly/annual pass for a specific city zone (e.g., ZVV in Zurich). Cheaper than GA for city-only commuters.", recommended: false },
];

const cities = [
  { city: "Zurich", network: "ZVV", note: "Trams, S-Bahn, buses. Excellent coverage. ZVV app for tickets." },
  { city: "Geneva", network: "TPG", note: "Trams and buses. Free 90-min ticket with hotel check-in." },
  { city: "Basel", network: "BVB/BLT", note: "Trams across city and into France/Germany." },
  { city: "Bern", network: "BERNMOBIL", note: "Trams and buses; compact city — very walkable too." },
  { city: "Lausanne", network: "TL / Metro", note: "Metro M2 (automated) + buses; hilly city." },
];

export default function TransportPage() {
  return (
    <div>
      <PageHeader
        title="Transport in Switzerland"
        subtitle="Switzerland's public transport is among the world's best — punctual, clean, and comprehensive. Here's how to make the most of it."
        badge="Transport Guide"
        gradient="from-sky-500 to-blue-500"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Transport" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Travel Passes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {passes.map((p) => (
              <div key={p.name} className={`glass card-hover rounded-2xl p-5 ${p.recommended ? 'border border-sky-500/40' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-white">{p.name}</h3>
                  {p.recommended && <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300">Recommended</span>}
                </div>
                <p className="text-sm text-sky-400 font-medium mb-2">{p.price}</p>
                <p className="text-sm text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">City Networks</h2>
          <div className="space-y-3">
            {cities.map((c) => (
              <div key={c.city} className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="w-16 text-center">
                  <p className="text-sm font-bold text-white">{c.city}</p>
                  <p className="text-xs text-sky-400">{c.network}</p>
                </div>
                <p className="text-sm text-white/60">{c.note}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-sky-500/20">
          <h3 className="text-base font-semibold text-sky-400 mb-2">Driving in Switzerland</h3>
          <p className="text-sm text-white/70">Indian driving licences are valid for <strong className="text-white">12 months</strong> from residence permit issue date. After that, you must convert to a Swiss licence — this typically requires a theory test and practical driving lessons (unless your home canton exempts you).</p>
        </div>
      </div>
    </div>
  );
}
