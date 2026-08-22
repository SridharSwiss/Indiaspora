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
  { name: "Homegate", url: "homegate.ch", desc: "Switzerland's largest rental portal with the widest listing inventory. Set up alerts for new listings immediately." },
  { name: "ImmoScout24", url: "immoscout24.ch", desc: "Major portal with powerful filters. Many listings are syndicated across both Homegate and ImmoScout24." },
  { name: "Flatfox", url: "flatfox.ch", desc: "Growing portal, often with exclusive listings. Known for a smoother application process and tenant-friendly design." },
  { name: "Newhome", url: "newhome.ch", desc: "Associated with cantonal banks; good for listings from institutional landlords. Often less competitive." },
  { name: "Comparis", url: "comparis.ch", desc: "Aggregator that pulls listings from multiple portals — useful for a single search across sources." },
  { name: "WGZimmer", url: "wgzimmer.ch", desc: "Best for shared flat (WG / colocation) rooms. Popular with students and newcomers looking for short-term arrangements." },
];

const documents = [
  "Passport and Swiss residence permit (B or L permit; C permit holders have the easiest time)",
  "Three months' recent payslips or a signed employment contract from a Swiss employer",
  "Betreibungsregisterauszug (debt enforcement extract) — obtain from your Gemeinde; costs around CHF 20",
  "Application / cover letter (Bewerbungsschreiben) — personalised letters genuinely help",
  "Reference letters from previous landlords (Swiss references are particularly valued)",
  "Recent bank statement demonstrating sufficient savings or salary",
  "AHV number (if already assigned) and copy of Swiss tax return (for longer residents)",
];

const tips = [
  "The Swiss rental vacancy rate is very low (around 1.15% nationally; even lower in Zurich and Geneva). Apply on the same day a listing goes live — good apartments disappear in hours.",
  "Prepare a polished, complete dossier before you start searching so you can submit instantly. Many landlords reject incomplete applications outright.",
  "Facebook groups ('Wohnung Zürich', 'Appartement Genève', 'Basel WG') often have private sublets and early listings before they go on portals.",
  "Consider furnished short-term lets (Airbnb, Wunderflats, MagicStay) for your first 1–3 months while you search without time pressure.",
  "The rental deposit (Mietkaution) is typically 2–3 months' rent, held in a joint blocked bank account (Sperrkonto) — it is returned at the end of the tenancy after the final inspection.",
  "Tenants have strong legal protections in Switzerland. The tenants' association (Mieterverband / ASLOCA) offers free or low-cost legal advice.",
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
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Where to Search</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portals.map((p) => (
              <div key={p.name} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-blue-400 mb-1">{p.name}</h3>
                <p className="text-xs/40 mb-2" style={{ color: "var(--text)" }}>{p.url}</p>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Documents You'll Need</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {documents.map((doc) => (
                <li key={doc} className="flex items-start gap-3/70 text-sm" style={{ color: "var(--text)" }}>
                  <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Community Tips</h2>
          <div className="glass rounded-2xl p-6">
            <ul className="space-y-3">
              {tips.map((tip) => (
                <li key={tip} className="flex items-start gap-3/70 text-sm" style={{ color: "var(--text)" }}>
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
