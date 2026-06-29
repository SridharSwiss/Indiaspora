import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const networks = [
  { city: "Nationwide", name: "SBB (Swiss Federal Railways)", url: "https://www.sbb.ch", desc: "The backbone of Swiss transport. Trains, regional buses, and lake ferries. Legendary punctuality. Book at sbb.ch or the SBB app." },
  { city: "Zurich", name: "ZVV – Zürcher Verkehrsverbund", url: "https://www.zvv.ch", desc: "Zurich's integrated transport network — trains, trams, buses, S-Bahn, Sihltal railway and lake boats. Buy zone-based tickets." },
  { city: "Geneva", name: "TPG – Transports Publics Genevois", url: "https://www.tpg.ch", desc: "Geneva trams, trolleybuses and buses. Links to CERN, UN and Geneva airport. Unireso network spans canton boundary." },
  { city: "Basel", name: "BVB – Basler Verkehrs-Betriebe", url: "https://www.bvb.ch", desc: "Basel's trams and buses. Cross-border into France and Germany — useful for pharma hub workers." },
  { city: "Bern", name: "Bernmobil", url: "https://www.bernmobil.ch", desc: "Bern city trams and buses. Connects with RegionalbusOberaargau for surrounding cantons." },
  { city: "Lausanne", name: "TL – Transports Lausannois", url: "https://www.t-l.ch", desc: "Lausanne metro (M1, M2), buses and trolleybuses. M2 is one of the few driverless metro systems in Europe." },
];

const passes = [
  { name: "Half-Fare Travelcard (Halbtax)", price: "CHF 190/year", desc: "50% discount on ALL SBB trains, trams, buses, lake boats, cable cars, and most private railways. Pays for itself in 4–5 trips. Essential for Swiss life.", url: "https://www.sbb.ch/en/tickets-offers/tickets/all-offers/half-fare-travelcard.html" },
  { name: "GA Travelcard (Generalabonnement)", price: "CHF 3,995/year (2nd class)", desc: "Unlimited travel on all Swiss public transport. Best if you commute daily between cities. Tax-deductible portion depends on canton.", url: "https://www.sbb.ch/en/tickets-offers/tickets/all-offers/ga.html" },
  { name: "Day Pass (Tageskarte)", price: "CHF 52 (with Halbtax)", desc: "Unlimited travel for one day across Switzerland. Sell day passes to friends or family — community Tageskarte sharing is common.", url: "https://www.sbb.ch/en/" },
  { name: "Youth Annual Pass", price: "CHF 730/year", desc: "Full travel pass for under-25s. Includes urban transport networks. Excellent value for students.", url: "https://www.sbb.ch/en/" },
  { name: "Children Travel Free (under 6)", price: "Free", desc: "Children under 6 travel completely free on all Swiss public transport. Under-16s with a Junior Card travel free with a parent.", url: "https://www.sbb.ch/en/" },
];

export default function TransportPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Transport in Switzerland"
        subtitle="Switzerland has one of the world's best public transport systems. Learn how trains, passes, and local networks make car-free living practical."
        badge="🚄 Transport Guide"
        gradient="from-green-500 to-emerald-600"
        breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Transport" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Travel Passes — Start Here</h2>
          <p className="text-slate-400 text-sm mb-6">The Half-Fare card (Halbtax) is the single most impactful purchase for most Indian residents in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {passes.map((p) => (
              <div key={p.name} className="glass rounded-xl p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-white text-sm">{p.name}</h3>
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20 whitespace-nowrap">{p.price}</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-2">{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-green-400 hover:text-green-300 transition-colors">
                  Buy on SBB <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Local Transport Networks by City</h2>
          <p className="text-slate-400 text-sm mb-6">Each major city has its own integrated transport network</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {networks.map((n) => (
              <a key={n.name} href={n.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover group block">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-semibold text-white text-sm group-hover:text-green-400 transition-colors">{n.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </div>
                <span className="text-xs text-green-400 block mb-2">{n.city}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{n.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-6 border border-green-500/20">
          <h3 className="font-bold text-green-400 text-sm mb-3">🚗 Driving in Switzerland</h3>
          <div className="text-slate-400 text-xs leading-relaxed space-y-2">
            <p>• <strong className="text-white">Indian driving licence</strong>: Valid for 12 months after arrival. After that, you must take a <strong className="text-white">full Swiss driving test</strong> — there is no licence conversion or reciprocity agreement between India and Switzerland. Contact your cantonal Strassenverkehrsamt to register for the theory and practical tests.</p>
            <p>• <strong className="text-white">Motorway vignette</strong>: CHF 40/year. Required sticker for all motorways. Buy at petrol stations, post offices or online.</p>
            <p>• <strong className="text-white">Mobility</strong>: Car-sharing platform. <a href="https://www.mobility.ch" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">mobility.ch</a>. Many Indians use this rather than owning a car.</p>
            <p>• <strong className="text-white">Road rules</strong>: Speed cameras are everywhere. 50 km/h in towns, 80 km/h on country roads, 120 km/h on motorways.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
