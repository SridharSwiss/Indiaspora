import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Swiss Taxes for Indians — Quellensteuer, DTAA, NRE/NRO & Pillar 3a Guide",
  description:
    "Complete Swiss tax guide for Indian expats: Quellensteuer (withholding tax) vs. Steuererklärung, India-Switzerland Double Taxation Avoidance Agreement (DTAA), declaring NRE/NRO accounts, FEMA/FATCA obligations, and Pillar 3a deduction optimisation.",
  keywords: [
    "Quellensteuer Indians Switzerland",
    "Swiss tax return Indians",
    "DTAA India Switzerland",
    "NRE NRO declare Switzerland taxes",
    "FEMA FATCA Switzerland Indian expat",
    "Pillar 3a tax deduction Switzerland Indians",
    "Steuererklärung Switzerland guide",
    "ordentliche Veranlagung Switzerland Indian",
  ],
};

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Quellensteuer and who pays it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quellensteuer (source tax / withholding tax) is automatically deducted from your monthly salary by your employer if you hold a Permit B and your gross income is under CHF 120,000/year. You do not need to file a separate tax return — but you lose the ability to claim deductions (Pillar 3a, transport, home office) unless you file a supplementary return (Nachtragsformular / DA-1).",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to declare my Indian NRE/NRO bank accounts in Switzerland?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Swiss tax law requires declaration of all worldwide assets and income on your Steuererklärung. NRE account interest is tax-free in India under FEMA but is taxable in Switzerland. NRO interest is taxable in both India and Switzerland — claim the Indian TDS as a DTAA credit on your Swiss return. Failure to declare is a criminal offence in Switzerland.",
      },
    },
    {
      "@type": "Question",
      name: "How does the India-Switzerland DTAA work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Double Taxation Avoidance Agreement between India and Switzerland allocates taxation rights. Swiss employment income is taxable only in Switzerland. Indian rental income is taxable in India first, then Switzerland allows a credit for Indian taxes paid (Form 10F + Tax Residency Certificate required). Dividends from Indian companies face a maximum 10% withholding in India under the treaty.",
      },
    },
  ],
};

const TAX_TRACKS = [
  {
    title: "Track A: Quellensteuer (Permit B, income < CHF 120k)",
    color: "border-amber-500/30",
    accent: "text-amber-400",
    steps: [
      "Employer deducts tax automatically each month — no action needed",
      "File Form DA-1 (Nachtragsformular) by 31 March to claim Pillar 3a, professional expenses, transport, childcare deductions",
      "If you miss DA-1 but later request it, the canton may allow late filing with penalties",
      "No Swiss tax return required (but still must declare foreign assets if requested)",
    ],
    warning:
      "Most Indians lose CHF 2,000–5,000/year by not filing DA-1 for Pillar 3a. File it every year.",
  },
  {
    title: "Track B: Ordentliche Veranlagung (Full Tax Return)",
    color: "border-blue-500/30",
    accent: "text-blue-400",
    steps: [
      "Mandatory if gross income > CHF 120,000, or if you hold global wealth > CHF 150,000, or if you have Swiss rental income",
      "File Steuererklärung by 31 March (extensions available until 30 November)",
      "Declare all worldwide income: Swiss salary, Indian rental income, NRE/NRO interest, dividends",
      "Claim DTAA credits for Indian taxes paid on Indian-source income",
      "Use a certified Swiss tax advisor (Treuhänder) for first filing — cost CHF 500–1,500",
    ],
    warning:
      "C permit holders always file a full tax return regardless of income level.",
  },
];

const DTAA_ITEMS = [
  {
    income: "Swiss employment income",
    taxedIn: "Switzerland only",
    indianObligation:
      "Report in India if total Indian income > ₹2.5L; Swiss income is exempt via DTAA",
  },
  {
    income: "Indian rental income",
    taxedIn: "India first, then Switzerland (credit)",
    indianObligation:
      "File Indian ITR; pay Indian income tax; claim DTAA credit in Swiss return with Form 10F",
  },
  {
    income: "NRE account interest",
    taxedIn: "Switzerland (not India — NRE is tax-exempt in India)",
    indianObligation:
      "Declare on Swiss Steuererklärung; no Indian tax credit available",
  },
  {
    income: "NRO account interest",
    taxedIn: "India (TDS) + Switzerland (credit for TDS)",
    indianObligation:
      "Indian TDS deducted at 30%; claim as DTAA credit in Swiss return with Form 15CA/15CB",
  },
  {
    income: "Indian mutual funds / stocks capital gains",
    taxedIn: "India (STCG/LTCG) + Switzerland potentially",
    indianObligation:
      "Indian gains taxed in India; disclose in Swiss return for wealth tax purposes on fund value",
  },
  {
    income: "Swiss Pillar 2 (BVG) lump sum withdrawal",
    taxedIn: "Switzerland (at reduced rate)",
    indianObligation:
      "Not Indian-taxable under DTAA Article 18 (pensions)",
  },
];

export default function TaxesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div>
        <PageHeader
          title="Swiss Taxes for Indians"
          subtitle="Quellensteuer, DTAA India–Switzerland, NRE/NRO declaration, FEMA/FATCA, and Pillar 3a optimisation — the complete dual-country tax guide for Indian professionals."
          badge="🧾 Taxes"
          gradient="from-emerald-600 to-teal-600"
        heroImage="/hero-business.jpg"
        heroImageAlt="Swiss tax guide for Indian expats"
        heroImagePosition="center 35%"
          breadcrumbs={[
            { label: "Living in Switzerland", href: "/living" },
            { label: "Taxes" },
          ]}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">

          {/* Critical warning */}
          <div className="rounded-xl border-2 border-red-500/40 bg-red-500/5 p-5">
            <div className="font-bold text-red-400 mb-2 text-sm">
              ⚠️ Swiss Tax Law: Foreign Asset Declaration is Criminal, Not Civil
            </div>
            <p className="text-sm" style={{ color: "var(--text)" }}>
              Failure to declare Indian bank accounts, mutual funds, or property on your Swiss tax
              return is a criminal offence (Steuerbetrug) in Switzerland — not merely a civil
              penalty. Switzerland and India share banking information under the OECD Automatic
              Exchange of Information (AEOI) framework. Do not assume Indian accounts are invisible
              to Swiss authorities.
            </p>
          </div>

          {/* Tax tracks */}
          <section>
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--text)" }}>
              Which Tax Track Are You On?
            </h2>
            <div className="grid gap-5 md:grid-cols-2">
              {TAX_TRACKS.map((track) => (
                <div key={track.title} className={`glass rounded-xl p-5 border ${track.color}`}>
                  <h3 className={`font-bold text-sm mb-3 ${track.accent}`}>{track.title}</h3>
                  <ol className="space-y-2 mb-3">
                    {track.steps.map((step, i) => (
                      <li key={i} className="flex gap-2 text-xs" style={{ color: "var(--text-2)" }}>
                        <span className={`font-bold ${track.accent} flex-shrink-0`}>{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="rounded-lg border border-orange-500/20 bg-orange-500/5 p-2.5 text-xs text-orange-400">
                    💡 {track.warning}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DTAA table */}
          <section>
            <h2 className="text-xl font-bold mb-2" style={{ color: "var(--text)" }}>
              India–Switzerland DTAA: Income by Income
            </h2>
            <p className="text-sm mb-4" style={{ color: "var(--text-2)" }}>
              Treaty signed 1994, protocol updated 2010. Source:{" "}
              <a
                href="https://www.estv.admin.ch/estv/en/home/international-tax-law/double-taxation-conventions/countries/india.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:underline"
              >
                Swiss Federal Tax Administration
              </a>
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th className="text-left py-2 pr-3 font-bold" style={{ color: "var(--text)" }}>
                      Income type
                    </th>
                    <th className="text-left py-2 pr-3 font-bold" style={{ color: "var(--text)" }}>
                      Taxed where
                    </th>
                    <th className="text-left py-2 font-bold" style={{ color: "var(--text)" }}>
                      Your Indian obligation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {DTAA_ITEMS.map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid var(--border)" }}>
                      <td className="py-2.5 pr-3 font-semibold" style={{ color: "var(--text)" }}>
                        {row.income}
                      </td>
                      <td className="py-2.5 pr-3 text-teal-400">{row.taxedIn}</td>
                      <td className="py-2.5" style={{ color: "var(--text-2)" }}>
                        {row.indianObligation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Pillar 3a */}
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              Pillar 3a — The Most Underused Indian Expat Tax Deduction
            </h2>
            <div className="glass rounded-xl p-5 border border-teal-500/20">
              <div className="grid gap-4 md:grid-cols-2 text-sm" style={{ color: "var(--text-2)" }}>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>What it is</h3>
                  <ul className="space-y-1 text-xs">
                    <li>
                      • Contribute up to{" "}
                      <strong style={{ color: "var(--text)" }}>CHF 7,056/year</strong> (2025,
                      employed)
                    </li>
                    <li>
                      • Full contribution deducted from{" "}
                      <strong style={{ color: "var(--text)" }}>taxable income</strong>
                    </li>
                    <li>
                      • Tax saving: typically CHF 1,500–2,800/year depending on income and canton
                    </li>
                    <li>
                      • Invest in global equity ETFs via VIAC or Finpension — historically 6–8%
                      annual return
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: "var(--text)" }}>
                    For Indians specifically
                  </h3>
                  <ul className="space-y-1 text-xs">
                    <li>
                      •{" "}
                      <strong style={{ color: "var(--text)" }}>
                        On Quellensteuer (B permit):
                      </strong>{" "}
                      File DA-1 (Nachtragsformular) to claim the deduction — employer does NOT do
                      this automatically
                    </li>
                    <li>
                      • Withdraw tax-efficiently when: leaving Switzerland, retiring, buying Swiss
                      property, or 5 years before AHV retirement age
                    </li>
                    <li>
                      • Withdrawal is taxed at a reduced rate (typically 5–8%) — far below marginal
                      income tax rates
                    </li>
                    <li>
                      •{" "}
                      <strong style={{ color: "var(--text)" }}>Not declared in India</strong> as
                      income — it is a Swiss pension instrument, not a financial account
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href="https://viac.ch/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-orange-500 text-white rounded-lg px-3 py-1.5 font-bold hover:bg-orange-600"
                >
                  VIAC App ↗
                </a>
                <a
                  href="https://finpension.ch/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs glass border rounded-lg px-3 py-1.5 font-bold"
                  style={{ color: "var(--text-2)" }}
                >
                  Finpension ↗
                </a>
                <a
                  href="https://www.estv.admin.ch/estv/en/home.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs glass border rounded-lg px-3 py-1.5 font-bold"
                  style={{ color: "var(--text-2)" }}
                >
                  ESTV Official ↗
                </a>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
