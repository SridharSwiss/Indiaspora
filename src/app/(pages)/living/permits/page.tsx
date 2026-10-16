import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Swiss Residence Permits Guide for Indians — L, B, C Permit Transitions",
  description: "Complete guide to Swiss residence permits for Indian nationals: Permit L (short stay), Permit B (annual residence), Permit C (settlement/permanent). Transition rules, canton migration, employer change notifications, and the C permit 10-year timeline for non-EU citizens.",
  keywords: ["Swiss Permit B Indian", "Permit C Switzerland 10 years", "L permit B permit transition Switzerland", "Swiss residence permit guide India", "change employer B permit Switzerland", "SEM permit Switzerland Indians", "non-EU residence permit Switzerland"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I transition from Permit L to Permit B in Switzerland?", acceptedAnswer: { "@type": "Answer", text: "Permit L (short-stay) is issued for contracts under 12 months. When your contract extends beyond 12 months, your employer applies for a Permit B at the cantonal Migration Office (Migrationsamt). You do not need to leave Switzerland — the change happens administratively." } },
    { "@type": "Question", name: "When can Indian nationals get a C permit in Switzerland?", acceptedAnswer: { "@type": "Answer", text: "Non-EU/EFTA nationals (including Indians) may apply for Permit C after 10 years of continuous residence with Permit B. Some cantons grant C after 5 years for non-EU nationals who have demonstrated integration (language certificates, civic integration course). This is canton-dependent." } },
    { "@type": "Question", name: "Can I change jobs on a Permit B in Switzerland?", acceptedAnswer: { "@type": "Answer", text: "Yes. After the first 12 months, Permit B holders from non-EU countries can change employers without restriction. You must notify the cantonal Ausländeramt (Migrationsamt) within 14 days of the job change. Your new employer should also notify their cantonal authority." } },
    { "@type": "Question", name: "What happens if I move to a different Swiss canton?", acceptedAnswer: { "@type": "Answer", text: "Your permit is valid Switzerland-wide, but it is administered by the canton where you registered. When you move cantons, you must register at the new commune within 14 days. The new canton may issue a new permit document — the legal status does not reset." } },
  ],
};

const PERMITS = [
  {
    code: "L",
    name: "Short-Stay Permit",
    color: "border-amber-500/30 bg-amber-500/5",
    accent: "text-amber-400",
    duration: "Up to 12 months (renewable)",
    eligibility: "Employment contract < 12 months, or seasonal work",
    restrictions: "Employer and canton-tied. Cannot switch employers without new permit application.",
    pathway: "Automatically converts to B permit when contract extends beyond 12 months.",
    cantonAdmin: "Employer applies at cantonal Migrationsamt. No direct action required from employee initially.",
  },
  {
    code: "B",
    name: "Annual Residence Permit",
    color: "border-blue-500/30 bg-blue-500/5",
    accent: "text-blue-400",
    duration: "1 year, renewed annually (linked to employment)",
    eligibility: "Employment in Switzerland; non-EU nationals require employer sponsorship",
    restrictions: "First 12 months: employer-tied. After 12 months: can change employer freely (notify Migrationsamt within 14 days).",
    pathway: "After 10 years (non-EU) → eligible for Permit C. After integration + language certificate: some cantons grant C after 5 years.",
    cantonAdmin: "Employer applies. Annual renewal by employee directly with cantonal Migrationsamt.",
  },
  {
    code: "C",
    name: "Settlement Permit (Permanent)",
    color: "border-teal-500/30 bg-teal-500/5",
    accent: "text-teal-400",
    duration: "5 years (renewable; not revocable if conditions met)",
    eligibility: "Non-EU: 10 years continuous residence. Some cantons: 5 years with integration proof.",
    restrictions: "Can be withdrawn for serious criminal offences or long-term welfare dependency.",
    pathway: "Path to naturalisation (Swiss citizenship) after meeting residency and integration requirements.",
    cantonAdmin: "Employee applies directly at cantonal Migrationsamt. Integration certificate required.",
  },
  {
    code: "G",
    name: "Cross-Border Commuter Permit",
    color: "border-purple-500/30 bg-purple-500/5",
    accent: "text-purple-400",
    duration: "Tied to employment contract",
    eligibility: "Residence in neighbouring country; employment in Switzerland. Non-EU: rare — usually for long-term residents of EU border regions.",
    restrictions: "Must return to country of residence weekly (EU) or daily (non-EU for most cantons).",
    pathway: "Not a stepping stone to B/C permit — a separate permit class.",
    cantonAdmin: "Applied via employer at cantonal Migrationsamt of the work canton.",
  },
];

const CANTON_CONTACTS = [
  { canton: "ZH", office: "Migrationsamt Kanton Zürich", url: "https://www.migrationsamt.zh.ch" },
  { canton: "BS", office: "Amt für Migration Basel-Stadt", url: "https://www.bs.ch/pd/migration" },
  { canton: "GE", office: "OCPM — Office Cantonal de la Population", url: "https://www.ge.ch/ocpm" },
  { canton: "VD", office: "SPOP — Service de la Population", url: "https://www.vd.ch/themes/population" },
  { canton: "ZG", office: "Amt für Migration Zug", url: "https://www.zg.ch/behoerden/sicherheitsdirektion/amt-fuer-migration" },
  { canton: "BE", office: "Amt für Migration und Personenstand BE", url: "https://www.be.ch/de/start/themen/sicherheit-polizei-justiz/auslaenderrecht.html" },
];

export default function PermitsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div>
        <PageHeader
          title="Swiss Residence Permits for Indians"
          subtitle="From Permit L to the 10-year path to Permit C — timelines, employer-change rules, canton migration, and the integration requirements that unlock permanent residency."
          badge="📄 Permits & Residency"
          gradient="from-blue-600 to-indigo-600"
        heroImage="/hero-community.jpg"
        heroImageAlt="Swiss residence permit guide for Indians"
        heroImagePosition="center 40%"
          breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Permits" }]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* Permit type cards */}
          <section>
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text)" }}>The Four Permit Types</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {PERMITS.map((p) => (
                <div key={p.code} className={`glass rounded-xl p-5 border ${p.color}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-2xl font-black ${p.accent}`}>{p.code}</span>
                    <span className="font-bold text-sm" style={{ color: "var(--text)" }}>{p.name}</span>
                  </div>
                  <div className="space-y-2 text-xs" style={{ color: "var(--text-2)" }}>
                    <div><span className="font-semibold" style={{ color: "var(--text)" }}>Duration:</span> {p.duration}</div>
                    <div><span className="font-semibold" style={{ color: "var(--text)" }}>Eligibility:</span> {p.eligibility}</div>
                    <div><span className="font-semibold" style={{ color: "var(--text)" }}>Restrictions:</span> {p.restrictions}</div>
                    <div><span className={`font-semibold ${p.accent}`}>→ Pathway:</span> {p.pathway}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key rules */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Critical Rules for Indians on Permit B</h2>
            <div className="space-y-3">
              {[
                { icon: "⚠️", title: "Notify Migrationsamt within 14 days of any job change", body: "This is a legal obligation, not optional. Your new employer is also required to notify their cantonal authority. Failure to notify can affect your annual permit renewal." },
                { icon: "🏠", title: "Moving cantons resets your cantonal integration clock", body: "The 10-year countdown for Permit C is federal — it does not reset when you move cantons. However, the integration requirements (language test, civic knowledge) are administered by the new canton." },
                { icon: "🌍", title: "Absences from Switzerland: 6-month rule", body: "Continuous absences longer than 6 months in a calendar year can jeopardise Permit B renewal. For Permit C, absences longer than 6 months without prior approval can lead to revocation." },
                { icon: "📋", title: "Integration criteria for accelerated C permit", body: "Some cantons (ZH, ZG, BS) grant Permit C after 5 years for non-EU nationals who pass a B1 German language test and attend a civic integration course. This is not automatic — you must apply proactively." },
                { icon: "💍", title: "Family reunification on Permit B", body: "Spouse and minor children may apply for family reunification Permit B after 12 months of your Swiss residence, provided you have an apartment with sufficient square footage (varies by canton) and financial self-sufficiency." },
              ].map((rule) => (
                <div key={rule.title} className="glass rounded-xl p-4 flex gap-3">
                  <span className="text-xl flex-shrink-0">{rule.icon}</span>
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: "var(--text)" }}>{rule.title}</h3>
                    <p className="text-xs" style={{ color: "var(--text-2)" }}>{rule.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Canton contacts */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Cantonal Migration Offices</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {CANTON_CONTACTS.map((c) => (
                <a key={c.canton} href={c.url} target="_blank" rel="noopener noreferrer"
                  className="glass rounded-xl p-4 hover:border-orange-500/40 transition-colors block" style={{ color: "var(--text)" }}>
                  <div className="text-2xl font-black text-orange-500/30 mb-1">{c.canton}</div>
                  <div className="text-xs font-semibold mb-0.5">{c.office}</div>
                  <div className="text-xs text-orange-400">Visit website ↗</div>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs" style={{ color: "var(--text-3)" }}>
              Federal authority: <a href="https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/nicht_eu_efta.html" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">State Secretariat for Migration (SEM)</a>
            </p>
          </section>

        </div>
      </div>
    </>
  );
}
