import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Housing & Rentals in Switzerland",
  description: "Find an apartment in Switzerland — required documents, top portals, tenant rights, and community tips for Indian residents.",
  openGraph: {
    title: "Housing & Rentals in Switzerland | IndiaSwiss",
    description: "Find an apartment in Switzerland — required documents, top portals, tenant rights, and community tips for Indian residents.",
  },
};

const portals = [
  { name: "Homegate", url: "homegate.ch", desc: "Switzerland's largest rental portal with the widest listings." },
  { name: "ImmoScout24", url: "immoscout24.ch", desc: "Major portal with good filters; many listings also on Homegate." },
  { name: "Comparis", url: "comparis.ch", desc: "Aggregator that pulls from multiple portals; useful for comparison." },
  { name: "Tutti", url: "tutti.ch", desc: "Classifieds site with occasional private-landlord deals." },
  { name: "WGZimmer", url: "wgzimmer.ch", desc: "Best for shared flat (WG) rooms — popular with students and newcomers." },
];

const documents = [
  "Passport and Swiss residence permit (B or L)",
  "Three months' recent payslips or employment contract",
  "Betreibungsregisterauszug (debt enforcement extract) — from your Gemeinde",
  "Letter of motivation / application letter (Bewerbungsschreiben)",
  "Reference letters from previous landlords (very helpful)",
  "Recent bank statement showing your financial stability",
];

const tips = [
  "Apply on the same day a listing goes live — apartments disappear in hours in Zurich and Geneva.",
  "A professional application dossier with a cover letter makes a big difference.",
  "Neue Wohnung Facebook groups in each city often have tips and sublets.",
  "Consider temporary furnished flats (e.g., via Airbnb) for the first 1–3 months while you search.",
  "The deposit (Kaution) is typically 2–3 months' rent, held in a joint blocked account.",
];

export default function HousingPage() {
  return (
    <div>
      <PageHeader
        title="Housing & Rentals"
        subtitle="Finding an apartment in Switzerland requires preparation. Here's everything you need to know about the Swiss rental market."
        badge="Housing Guide"
        gradient="from-blue-500 to-indigo-500"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Housing" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Where to Search</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portals.map((p) => (
              <div key={p.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-blue-400 mb-1">{p.name}</h3>
                <p className="text-xs text-white/40 mb-2">{p.url}</p>
                <p className="text-sm text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Documents You'll Need</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Community Tips</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-white/70 text-sm">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
