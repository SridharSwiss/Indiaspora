import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const portals = [
  { name: "Homegate.ch", url: "https://www.homegate.ch", desc: "Switzerland's largest property portal. Rentals, sales and room shares across all cantons." },
  { name: "ImmoScout24", url: "https://www.immoscout24.ch", desc: "Wide range of listings. Good filters for budget, size and location." },
  { name: "Comparis.ch", url: "https://www.comparis.ch", desc: "Property search plus comparison of moving services and insurance." },
  { name: "Flatfox.ch", url: "https://flatfox.ch", desc: "Popular for finding rooms in shared flats (WG). Good for students and young professionals." },
  { name: "WG-Zimmer.ch", url: "https://www.wg-zimmer.ch", desc: "Room shares (Wohngemeinschaft) across Switzerland. Good for new arrivals needing immediate accommodation." },
  { name: "SVIT – Rental Exchange", url: "https://www.svit.ch", desc: "Swiss Real Estate Association. Tenant information, lease templates and legal guidance." },
];

const documents = [
  { name: "Betreibungsauszug", desc: "Debt register extract. Free from your Betreibungsamt (debt enforcement office). Shows you have no outstanding debts. Required by almost all landlords.", url: "https://www.ch.ch/en/debt-collection/" },
  { name: "Last 3 pay slips", desc: "Proves your income. Typically must show 3× the monthly rent as monthly gross salary. Bring originals and copies." },
  { name: "Employment contract", desc: "Shows job security and employer. Unlimited contracts preferred by landlords over fixed-term." },
  { name: "Passport copy", desc: "All applicants must provide a copy of their passport. B/C permit holders include permit copy." },
  { name: "Rental references", desc: "Reference letters from your previous landlord or employer in Switzerland. Very helpful if available." },
  { name: "Completed Mietinteressentenformular", desc: "The application form provided by the landlord or property manager. Fill in completely and accurately." },
];

export default function HousingPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Housing & Rentals in Switzerland"
        subtitle="The Swiss rental market is competitive but navigable. Learn the rules, prepare your documents, and find your home."
        badge="🏠 Housing Guide"
        gradient="from-blue-500 to-indigo-600"
        breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Housing & Real Estate" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-white mb-4">Understanding the Swiss Rental Market</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-slate-400 leading-relaxed">
            <div><span className="text-white font-medium block mb-1">Very High Demand</span>Major cities like Zurich and Geneva have vacancy rates under 1%. Apply immediately when you see a listing — suitable apartments get 50–200 applications within days.</div>
            <div><span className="text-white font-medium block mb-1">Rental Deposit (Kaution)</span>Landlords require 2–3 months rent as a security deposit. This must be held in a separate, blocked bank account (Mietkautionskonto) — not paid directly to the landlord.</div>
            <div><span className="text-white font-medium block mb-1">Notice Period</span>Standard lease notice period is 3 months, aligned to quarterly dates (Mar 31, Jun 30, Sep 30, Dec 31). Check your contract carefully.</div>
            <div><span className="text-white font-medium block mb-1">Tenant Rights</span>Swiss tenancy law (Obligationenrecht Art. 253–274) strongly protects tenants. Rent increases require advance notice. Disputes handled by Schlichtungsbehörde (conciliation authority).</div>
            <div><span className="text-white font-medium block mb-1">Nebenkosten (Utilities)</span>Rent often excludes Nebenkosten (heating, water, building maintenance). Add CHF 100–300/month depending on apartment size. Electricity is usually separate.</div>
            <div><span className="text-white font-medium block mb-1">Genossenschaft Apartments</span>Cooperative housing (Wohnbaugenossenschaften) offers significantly below-market rents. Long waiting lists (5–10 years) but worth registering early. Ask your Gemeinde.</div>
          </div>
          <div className="mt-5">
            <a href="https://www.mietrecht.ch" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium hover:bg-blue-500/20 transition-colors">
              Swiss Tenant Rights Guide (mietrecht.ch) <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Required Documents</h2>
          <p className="text-slate-400 text-sm mb-6">Prepare these before applying — have them ready in digital form too</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((d) => (
              <div key={d.name} className="glass rounded-xl p-5">
                <h3 className="font-semibold text-white text-sm mb-2">{d.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-2">{d.desc}</p>
                {d.url && (
                  <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors">
                    How to get it <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Apartment Search Portals</h2>
          <p className="text-slate-400 text-sm mb-6">Set up email alerts on all portals simultaneously for best results</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portals.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover group block">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-white text-sm group-hover:text-blue-400 transition-colors">{p.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-6 border border-blue-500/20">
          <h3 className="font-bold text-blue-400 text-sm mb-2">💡 Indian Community Tips</h3>
          <ul className="text-slate-400 text-xs leading-relaxed space-y-2">
            <li>• Join Facebook groups like <strong className="text-white">"Indians in Zurich"</strong>, <strong className="text-white">"Desis in Switzerland"</strong> for community apartment referrals and subletting.</li>
            <li>• Ask your employer's HR — many large Swiss companies (Roche, Novartis, Google, UBS) have partnerships with relocation agencies.</li>
            <li>• Furnished short-term apartments (serviced apartments) like STAY Zurich or Boardinghouse Basel are good for first 1–3 months while you search.</li>
            <li>• For Zurich: register for a Genossenschaft apartment at ABZ, Wohnbaugenossenschaften Zurich and GEBAG immediately on arrival.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
