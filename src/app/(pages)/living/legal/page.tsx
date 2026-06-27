import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Swiss Residence Permits & Indian Documents",
  description: "Swiss residence permits (L, B, C), OCI cards, passport renewal, naturalization, and power of attorney for Indians.",
  openGraph: {
    title: "Swiss Residence Permits & Indian Documents | IndiaSwiss",
    description: "Swiss residence permits (L, B, C), OCI cards, passport renewal, naturalization, and power of attorney for Indians.",
  },
};

const permits = [
  { code: "L", name: "Short-term permit", duration: "Up to 1 year", desc: "For fixed-term contracts under 1 year. Renewable. Fewer rights than B permit." },
  { code: "B", name: "Residence permit", duration: "1–2 years", desc: "The standard permit for employees. Renewable as long as you have a valid job. Spouse and children can join on B permit." },
  { code: "C", name: "Settlement permit", duration: "Permanent", desc: "Granted after 5 or 10 years (depending on treaty). No renewal needed. Allows free movement in job market." },
  { code: "G", name: "Cross-border permit", duration: "1 year", desc: "For Indian nationals living in a neighbouring country and working in Switzerland." },
];

const indianDocs = [
  { title: "OCI Card", desc: "Overseas Citizen of India card gives visa-free entry to India for life. Apply at the Embassy in Bern or Consulate in Geneva. Essential for NRIs." },
  { title: "Passport Renewal", desc: "Indian passports can be renewed at the Embassy of India in Bern. Book an appointment online via passportindia.gov.in. Processing takes 4–6 weeks." },
  { title: "Power of Attorney (PoA)", desc: "For property transactions, legal matters, or banking in India. Must be notarised in Switzerland and apostilled at the Swiss cantonal authority before use in India." },
  { title: "Police Clearance Certificate", desc: "Required for various Indian government applications. Obtain from the Embassy — you'll need your Swiss police extract (Strafregisterauszug)." },
];

export default function LegalPage() {
  return (
    <div>
      <PageHeader
        title="Legal & Documents"
        subtitle="Understanding Swiss residence permits and managing Indian documents from abroad."
        badge="Legal Guide"
        gradient="from-slate-500 to-gray-600"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Legal & Permits" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Swiss Residence Permits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {permits.map((p) => (
              <div key={p.code} className="glass card-hover rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-slate-500/30 flex items-center justify-center text-lg font-bold text-white">{p.code}</span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{p.name}</h3>
                    <p className="text-xs text-slate-400">{p.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-white/60">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Indian Documents from Switzerland</h2>
          <div className="space-y-4">
            {indianDocs.map((d) => (
              <div key={d.title} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold text-white mb-2">{d.title}</h3>
                <p className="text-sm text-white/60">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
