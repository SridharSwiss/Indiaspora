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
  { code: "L", name: "Short-term permit", duration: "Up to 1 year", desc: "For fixed-term employment contracts under 12 months. Renewable. Fewer rights than B permit — you cannot freely change employer or canton. Issued by the cantonal migration authority (Migrationsamt)." },
  { code: "B", name: "Residence permit", duration: "1 year (renewable)", desc: "The standard permit for employees with a contract of at least 12 months or unlimited duration. Renewable as long as you maintain qualifying employment. Your spouse and dependent children can join you on a B permit via family reunification. Issued by the cantonal Migrationsamt." },
  { code: "C", name: "Settlement permit", duration: "Permanent (5-year renewal)", desc: "Granted after 10 years of uninterrupted legal residence as a third-country national (Indians). With exceptional integration, this can be shortened to 5 years. No renewal of permission needed — only address updates. Full freedom in the labour market." },
  { code: "G", name: "Cross-border permit", duration: "1 year (renewable)", desc: "For Indian nationals residing in a bordering country (Germany, France, Italy, Austria, Liechtenstein) and working in Switzerland. Must return to the country of residence at least once a week." },
];

const indianDocs = [
  { title: "OCI Card (Overseas Citizen of India)", desc: "The OCI card grants visa-free, multi-purpose, multi-entry, lifelong entry to India. It is the most important document for NRIs. Apply at the Embassy of India in Bern or the Consulate General in Geneva via the Indian government's OCI portal (ociservices.gov.in). Processing typically takes 6–10 weeks." },
  { title: "Passport Renewal", desc: "Indian passports can be renewed at the Embassy of India in Bern. Book an appointment via the Passport Seva portal (passportindia.gov.in). Processing typically takes 4–6 weeks; Tatkal (urgent) processing is available. Bring all original documents and photocopies." },
  { title: "Power of Attorney (PoA)", desc: "Required for property transactions, banking instructions, or legal matters in India. Must be drafted correctly, notarised by a Swiss notary (Notar), and apostilled at the competent Swiss cantonal authority. The apostilled PoA is then valid for use in India without further legalisation." },
  { title: "Police Clearance Certificate (PCC)", desc: "Required for various Indian applications (OCI, visa, PIO). Obtain from the Embassy — you will need your Swiss criminal record extract (Strafregisterauszug) from the Federal Office of Justice (ch.ch or fedpol.admin.ch)." },
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
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Swiss Residence Permits</h2>
          <p className="text-sm/50 mb-6" style={{ color: "var(--text)" }}>Permits for Indian nationals (third-country / non-EU/EFTA nationals) are subject to an annual quota set by the federal government. Your employer typically initiates the permit application. The authoritative source is the State Secretariat for Migration: <span className="" style={{ color: "var(--text-2)" }}>sem.admin.ch</span></p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {permits.map((p) => (
              <div key={p.code} className="glass card-hover rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-10 h-10 rounded-full bg-slate-500/30 flex items-center justify-center text-lg font-bold" style={{ color: "var(--text)" }}>{p.code}</span>
                  <div>
                    <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>{p.name}</h3>
                    <p className="text-xs " style={{ color: "var(--text-2)" }}>{p.duration}</p>
                  </div>
                </div>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Indian Documents from Switzerland</h2>
          <p className="text-sm/50 mb-6" style={{ color: "var(--text)" }}>All consular services for Indian nationals are handled by the Embassy of India in Bern (Thunstrasse 5, 3005 Bern) and the Consulate General of India in Geneva. Register as an Indian national at <span className="" style={{ color: "var(--text-2)" }}>indembassybern.gov.in</span></p>
          <div className="space-y-4">
            {indianDocs.map((d) => (
              <div key={d.title} className="glass card-hover rounded-2xl p-5">
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--text)" }}>{d.title}</h3>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-slate-500/20">
          <h3 className="text-base font-semibold  mb-2" style={{ color: "var(--text-2)" }}>Path to Swiss Citizenship</h3>
          <p className="text-sm/70" style={{ color: "var(--text)" }}>Indian nationals can apply for Swiss naturalisation after <strong style={{ color: "var(--text)" }}>10 years</strong> of total legal residence (years spent in Switzerland between ages 8–18 count double). You must hold a C permit, demonstrate language proficiency (A2 written + B1 oral in your canton's language), have a clean criminal and debt record, and show integration into Swiss civic life. Processing is handled at the cantonal and communal level and typically takes 1–3 years. Source: <span className="" style={{ color: "var(--text-2)" }}>sem.admin.ch</span></p>
        </div>
      </div>
    </div>
  );
}
