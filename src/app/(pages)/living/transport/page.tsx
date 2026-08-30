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
  { name: "Half-Fare Travelcard (Halbtax)", url: "https://www.sbb.ch/en/travelcards-and-tickets/railpasses/half-fare-travelcard.html", price: "CHF 190/year (first year); CHF 170/year thereafter", desc: "Halves the price of virtually all public transport tickets nationwide — trains, buses, trams, boats, and most cable cars. Best value for most residents. Under-25 pay CHF 100/year.", recommended: true },
  { name: "GA Travelcard (Generalabonnement)", url: "https://www.sbb.ch/en/travelcards-and-tickets/railpasses/ga.html", price: "~CHF 3,995/year 2nd class; ~CHF 6,885 1st class", desc: "Unlimited travel on all SBB trains, most city trams and buses, regional railways, and boats. Worth it for heavy commuters travelling long distances daily.", recommended: false },
  { name: "Day Pass", url: "https://www.sbb.ch/en/travelcards-and-tickets/tickets/day-pass.html", price: "~CHF 52 (with Halbtax)", desc: "Unlimited travel anywhere in Switzerland on one day. Great for weekend day-trips. Available via the SBB app.", recommended: false },
  { name: "Zone Subscription", url: "https://www.sbb.ch/en/travelcards-and-tickets/railpasses/zone-passes.html", price: "Varies by city and zone", desc: "Monthly or annual pass for a specific fare zone in your city (e.g., ZVV in Zurich, TPG in Geneva). More economical than GA if you commute locally within one zone.", recommended: false },
];

const cities = [
  { city: "Zurich", network: "ZVV", note: "Trams, S-Bahn regional trains, buses, and lake boats — all integrated under ZVV (zvv.ch). ZVV app for tickets and real-time departures. Tram 10 & 14, and the S-Bahn, are the main routes for Indian communities in Zurich and surrounds." },
  { city: "Geneva", network: "TPG", note: "Trams and buses operated by TPG (tpg.ch). Tip: hotel guests receive a free Tout Genève pass for unlimited free travel within the canton during their stay. Geneva also has cross-border lines into France." },
  { city: "Basel", network: "BVB / BLT", note: "Trams across the city and into neighbouring France and Germany — a unique trilingual cross-border network. BVB runs city trams; BLT covers suburban routes." },
  { city: "Bern", network: "BERNMOBIL", note: "Trams and buses run by BERNMOBIL. The capital is compact and very walkable. The S-Bahn network connects surrounding towns." },
  { city: "Lausanne", network: "TL / Metro", note: "The automated Metro M2 (steepest metro in the world) + bus network TL. An M3 metro extension is under construction. Good connections to Geneva via direct trains every 20 minutes." },
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Travel Passes</h2>
          <p className="text-sm/50 mb-6" style={{ color: "var(--text)" }}>All passes and tickets can be purchased via the SBB app or at any SBB ticket counter. The SBB app (sbb.ch/en) allows mobile tickets and real-time journey planning across all Swiss transport operators.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {passes.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className={`glass card-hover rounded-2xl p-5 block group ${p.recommended ? 'border border-sky-500/40' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold group-hover:text-sky-400 transition-colors" style={{ color: "var(--text)" }}>{p.name}</h3>
                  {p.recommended && <span className="text-xs px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300">Recommended</span>}
                </div>
                <p className="text-sm text-sky-400 font-medium mb-2">{p.price}</p>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{p.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>City Networks</h2>
          <div className="space-y-3">
            {cities.map((c) => (
              <div key={c.city} className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className="w-16 text-center flex-shrink-0">
                  <p className="text-sm font-bold" style={{ color: "var(--text)" }}>{c.city}</p>
                  <p className="text-xs text-sky-400">{c.network}</p>
                </div>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{c.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>Beyond Trains — Other Ways to Get Around</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Mobility Car-Sharing", url: "https://www.mobility.ch/en/", note: "Switzerland's national car-sharing cooperative with 3,000+ vehicles at SBB stations and throughout cities. Book by the hour or day via app. Pay-as-you-go and flat monthly membership options. No need to own a car for occasional trips." },
              { title: "PubliBike", url: "https://www.publibike.ch/en/", note: "Switzerland's national bike-sharing network in 90+ cities. Electric and standard bikes; rent by the minute via app. Ideal for the last kilometre from a train station." },
              { title: "Zurich Airport Rail (ZRH)", url: "https://www.flughafen-zuerich.ch/en/passengers/access-and-parking/public-transport", note: "Direct SBB trains run to Zurich HB every 10 minutes — journey time 10 minutes. Trains to Bern, Basel, Winterthur, and St. Gallen depart directly from the airport underground station without going to Zurich HB." },
              { title: "Geneva Airport (GVA)", url: "https://www.gva.ch/en/Site/Passengers/Access/PublicTransport", note: "The main TPG tram and SBB train station is in the basement of Terminal 1. Trains reach Geneva Cornavin in 7 minutes; Lausanne in 40 minutes. The UNIRESO zone pass for Geneva covers airport travel." },
              { title: "SBB Night Trains", url: "https://www.sbb.ch/en/leisure-holidays/travel-offers/night-trains.html", note: "ÖBB Nightjet overnight trains depart from Zurich to Vienna, Hamburg, Amsterdam, Berlin, and Rome — great for weekend travel without a hotel. Book in advance for best prices; includes couchette and private sleeper options." },
              { title: "Swiss Travel Pass (for visitors)", url: "https://www.sbb.ch/en/leisure-holidays/travel-offers/swiss-travel-pass.html", note: "If family visits from India, the Swiss Travel Pass gives unlimited travel on all trains, buses, and most boats for 3–15 consecutive days. Cheaper than buying individual tickets and includes many mountain railways and city transport." },
            ].map(item => (
              <a key={item.title} href={item.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <h3 className="text-sm font-semibold mb-2 group-hover:text-sky-400 transition-colors" style={{ color: "var(--text)" }}>{item.title}</h3>
                <p className="text-xs/60" style={{ color: "var(--text)" }}>{item.note}</p>
              </a>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-sky-500/20">
          <h3 className="text-base font-semibold text-sky-400 mb-2">Driving in Switzerland with an Indian Licence</h3>
          <p className="text-sm/70 mb-3" style={{ color: "var(--text)" }}>An Indian driving licence is valid in Switzerland for <strong style={{ color: "var(--text)" }}>12 months from the date on your Swiss residence permit</strong>. If your licence is not in English, carry a certified translation. You must carry the original licence at all times while driving.</p>
          <p className="text-sm/70" style={{ color: "var(--text)" }}>After 12 months, you must convert to a Swiss licence. As an Indian national (non-EU country), this typically requires passing both the <strong style={{ color: "var(--text)" }}>Swiss theory test</strong> and a <strong style={{ color: "var(--text)" }}>practical control ride</strong> with an approved examiner. Start the process early — missing the deadline means re-taking the full Swiss driving school course. Contact your cantonal road traffic office (Strassenverkehrsamt / Office des automobiles) for the process in your canton. See also: <span className="text-sky-400">eda.admin.ch/countries/india</span> (Swiss Embassy guidance for Indian residents).</p>
        </div>
      </div>
    </div>
  );
}
