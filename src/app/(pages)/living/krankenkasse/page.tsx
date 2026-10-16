import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Swiss Health Insurance (Krankenkasse) Guide for Indians — Deductible, Tiers Payant & Provider Comparison",
  description: "Complete Krankenkasse guide for Indians in Switzerland: choosing your annual deductible (Franchise CHF 300–2,500), Tiers payant vs. Tiers garant, mandatory vs. supplemental coverage, and how to switch providers in November.",
  keywords: ["Krankenkasse India Switzerland", "Swiss health insurance Indians", "Franchise Krankenkasse CHF 2500", "Tiers payant Tiers garant Switzerland", "health insurance switch November Switzerland", "comparis.ch health insurance", "Krankenkasse English speakers Switzerland", "mandatory health insurance Switzerland deadline"],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Choose Swiss Health Insurance (Krankenkasse) as an Indian Expat",
  description: "Step-by-step guide for choosing Swiss mandatory health insurance, including franchise selection and model choice.",
  step: [
    { "@type": "HowToStep", name: "Understand the mandatory deadline", text: "Register for Krankenkasse within 3 months of arrival — it is retroactive to your arrival date. Missing the deadline means the canton assigns you an insurer and you lose the right to choose." },
    { "@type": "HowToStep", name: "Choose your annual deductible (Franchise)", text: "Low Franchise (CHF 300): Highest monthly premium (~CHF 420/mo in ZH), but you pay a maximum of CHF 300 out-of-pocket per year before the insurer covers 90%. High Franchise (CHF 2,500): Lowest monthly premium (~CHF 280/mo in ZH), but you pay the first CHF 2,500 of every claim. Choose CHF 2,500 if you rarely visit the doctor; CHF 300 if you have a family or chronic conditions." },
    { "@type": "HowToStep", name: "Choose your insurance model", text: "Standard (Freie Arztwahl): See any doctor. Most expensive. HMO/Telmed: Must call a hotline or visit a designated HMO centre first — 10–15% cheaper. Family doctor model (Hausarzt): 10% cheaper, must register with one GP. For Indians: the Telmed model suits those comfortable with English-language phone triage." },
    { "@type": "HowToStep", name: "Tiers payant vs. Tiers garant", text: "Tiers payant: Insurer pays the doctor directly. You pay nothing upfront. Standard in Geneva and Vaud. Preferred for frequent visits. Tiers garant: Doctor bills you; you pay, then claim reimbursement from insurer. Standard in Zurich and Basel. You need CHF 500–2,000 cash buffer for unexpected bills." },
    { "@type": "HowToStep", name: "Compare and enrol", text: "Use comparis.ch with your PLZ to compare premiums. Enrol directly on insurer's website. Send old insurer written cancellation by 30 November to switch from 1 January." },
  ],
};

const PROVIDERS = [
  { name: "CSS", languages: "English, German, French, Italian", model: "Standard, HMO, Telmed", note: "Large network; good English phone support", url: "https://www.css.ch/en" },
  { name: "Helsana", languages: "English, German, French", model: "Standard, HMO, Telmed, BeneFit", note: "Strong supplemental dental; popular in ZH", url: "https://www.helsana.ch/en" },
  { name: "Concordia", languages: "German, French", model: "Standard, HMO", note: "Budget-friendly; limited English support", url: "https://www.concordia.ch/en" },
  { name: "Swica", languages: "English, German, French", model: "Standard, HMO, Telmed", note: "Wellness benefits; popular with expats", url: "https://www.swica.ch/en" },
  { name: "Atupri", languages: "German, French", model: "Standard, Telmed, HMO", note: "Digital-first; cheapest Telmed in several PLZ", url: "https://www.atupri.ch/en" },
  { name: "Assura", languages: "French, German", model: "Standard, HMO", note: "Cheapest in French-speaking cantons; limited English", url: "https://www.assura.ch/en" },
  { name: "KPT", languages: "German, English", model: "Standard, Telmed, HMO", note: "Strong in Bern region; competitive pricing", url: "https://www.kpt.ch/en" },
];

const FRANCHISE_TABLE = [
  { franchise: "CHF 300", monthlyZH: "~CHF 415", monthlyBS: "~CHF 440", monthlyGE: "~CHF 490", monthlyVD: "~CHF 465", bestFor: "Families, chronic conditions, frequent GP visits" },
  { franchise: "CHF 500", monthlyZH: "~CHF 395", monthlyBS: "~CHF 418", monthlyGE: "~CHF 465", monthlyVD: "~CHF 440", bestFor: "Moderate risk; predictable annual costs" },
  { franchise: "CHF 1,000", monthlyZH: "~CHF 360", monthlyBS: "~CHF 380", monthlyGE: "~CHF 425", monthlyVD: "~CHF 400", bestFor: "Healthy adults with 1–2 doctor visits/year" },
  { franchise: "CHF 1,500", monthlyZH: "~CHF 340", monthlyBS: "~CHF 358", monthlyGE: "~CHF 400", monthlyVD: "~CHF 375", bestFor: "Young professionals; emergency-only coverage" },
  { franchise: "CHF 2,000", monthlyZH: "~CHF 325", monthlyBS: "~CHF 342", monthlyGE: "~CHF 380", monthlyVD: "~CHF 355", bestFor: "Rarely visits doctor; invests premium savings" },
  { franchise: "CHF 2,500", monthlyZH: "~CHF 308", monthlyBS: "~CHF 325", monthlyGE: "~CHF 362", monthlyVD: "~CHF 338", bestFor: "Healthy, high-earning individual — maximum savings" },
];

export default function KrankenkassePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div>
        <PageHeader
          title="Swiss Health Insurance (Krankenkasse) Guide"
          subtitle="Choose your deductible, model, and provider with confidence. From mandatory enrolment deadlines to Tiers payant vs. Tiers garant — the complete Indian expat guide."
          badge="🏥 Health Insurance"
          gradient="from-blue-500 to-teal-600"
        heroImage="/hero-community.jpg"
        heroImageAlt="Swiss health insurance guide for Indians"
        heroImagePosition="center 45%"
          breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Health Insurance" }]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* Critical deadline */}
          <div className="rounded-xl border-2 border-red-500/40 bg-red-500/5 p-5">
            <div className="font-bold text-red-400 mb-2 text-sm">⏰ Critical Deadline</div>
            <p className="text-sm" style={{ color: "var(--text)" }}>
              Register for Krankenkasse within <strong>3 months of arrival</strong>. Coverage is retroactive to your arrival date — so any hospital visit in those 3 months is covered. Miss the deadline and the canton assigns an insurer for you, removing your right to choose.
            </p>
          </div>

          {/* Franchise table */}
          <section>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Annual Deductible (Franchise) — 2025 Premium Estimates</h2>
            <p className="text-sm mb-4" style={{ color: "var(--text-2)" }}>Premiums vary by canton and PLZ. Verify exact premiums at <a href="https://www.comparis.ch/krankenkassen" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">comparis.ch</a>.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th className="text-left py-2 pr-3 font-bold" style={{ color: "var(--text)" }}>Franchise</th>
                    <th className="text-left py-2 pr-3 font-bold" style={{ color: "var(--text)" }}>ZH/mo</th>
                    <th className="text-left py-2 pr-3 font-bold" style={{ color: "var(--text)" }}>BS/mo</th>
                    <th className="text-left py-2 pr-3 font-bold" style={{ color: "var(--text)" }}>GE/mo</th>
                    <th className="text-left py-2 pr-3 font-bold" style={{ color: "var(--text)" }}>VD/mo</th>
                    <th className="text-left py-2 font-bold" style={{ color: "var(--text)" }}>Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {FRANCHISE_TABLE.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td className="py-2.5 pr-3 font-bold text-orange-400">{row.franchise}</td>
                      <td className="py-2.5 pr-3" style={{ color: "var(--text-2)" }}>{row.monthlyZH}</td>
                      <td className="py-2.5 pr-3" style={{ color: "var(--text-2)" }}>{row.monthlyBS}</td>
                      <td className="py-2.5 pr-3" style={{ color: "var(--text-2)" }}>{row.monthlyGE}</td>
                      <td className="py-2.5 pr-3" style={{ color: "var(--text-2)" }}>{row.monthlyVD}</td>
                      <td className="py-2.5 text-xs" style={{ color: "var(--text-3)" }}>{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs mt-2" style={{ color: "var(--text-3)" }}>* Indicative 2025 figures for standard model (Freie Arztwahl). Add 10% Selbstbehalt (co-insurance) above deductible up to a max of CHF 700/year additional.</p>
          </section>

          {/* Tiers payant vs garant */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Tiers Payant vs. Tiers Garant</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="glass rounded-xl p-5 border border-teal-500/20">
                <h3 className="font-bold text-teal-400 mb-2">✅ Tiers Payant (recommended for Indians)</h3>
                <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>Insurer pays the doctor directly. You pay nothing upfront for covered services.</p>
                <ul className="text-xs space-y-1" style={{ color: "var(--text-2)" }}>
                  <li>• Standard in Geneva and Vaud</li>
                  <li>• No cash buffer needed for doctor visits</li>
                  <li>• Preferred if visiting doctors frequently</li>
                  <li>• Ask any doctor in ZH: &quot;Do you accept Tiers payant?&quot;</li>
                </ul>
              </div>
              <div className="glass rounded-xl p-5 border border-orange-500/20">
                <h3 className="font-bold text-orange-400 mb-2">⚡ Tiers Garant (standard in ZH, BS)</h3>
                <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>Doctor bills you directly. You pay the full amount, then claim reimbursement from your insurer.</p>
                <ul className="text-xs space-y-1" style={{ color: "var(--text-2)" }}>
                  <li>• Requires CHF 500–2,000 cash buffer for large bills</li>
                  <li>• Reimbursement takes 2–4 weeks</li>
                  <li>• Specialist visits: bills can reach CHF 800–1,500</li>
                  <li>• Saves nothing vs. Tiers payant — purely administrative</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Provider table */}
          <section>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>English-Friendly Providers</h2>
            <p className="text-sm mb-4" style={{ color: "var(--text-2)" }}>All major Swiss insurers offer basic (Grundversicherung) coverage at legally identical prices per canton and PLZ — the only differences are service, language, and model options.</p>
            <div className="grid gap-3 md:grid-cols-2">
              {PROVIDERS.map((p) => (
                <div key={p.name} className="glass rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-sm" style={{ color: "var(--text)" }}>{p.name}</h3>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-xs text-orange-400 hover:underline">Website ↗</a>
                  </div>
                  <div className="text-xs space-y-0.5" style={{ color: "var(--text-2)" }}>
                    <div><span className="font-semibold" style={{ color: "var(--text)" }}>Languages:</span> {p.languages}</div>
                    <div><span className="font-semibold" style={{ color: "var(--text)" }}>Models:</span> {p.model}</div>
                    <div className="text-orange-400/80 italic mt-1">{p.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Switching */}
          <section>
            <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Switching Insurers</h2>
            <div className="glass rounded-xl p-5 border border-blue-500/20">
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-2)" }}>
                <li>📅 <strong style={{ color: "var(--text)" }}>30 November:</strong> Cancellation deadline for switching from 1 January. Send cancellation by <em>registered letter</em> (Einschreiben).</li>
                <li>📅 <strong style={{ color: "var(--text)" }}>30 June:</strong> Deadline to switch from 1 July (if changing franchise mid-year — only downwards, CHF 300, is allowed).</li>
                <li>💡 <strong style={{ color: "var(--text)" }}>Free switch:</strong> You may switch mid-year if your insurer raises premiums — 30-day notice period.</li>
                <li>🔗 <a href="https://www.comparis.ch/krankenkassen" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">comparis.ch</a> generates the cancellation letter automatically after you choose a new insurer.</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
