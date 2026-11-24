import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

// Sources (checked 24 Nov 2026):
//  VFS Global, India in Switzerland, passport services: https://www.vfsglobal.com/one-pager/india/switzerland/passport-services/index.html
//  Consulate General of India Geneva (Permanent Mission of India): https://pmindiaun.gov.in/pages/NTE,
//  Global Passport Seva portal: https://mportal.passportindia.gov.in/gpsp/
const VFS = "https://www.vfsglobal.com/one-pager/india/switzerland/passport-services/index.html";
const GENEVA = "https://pmindiaun.gov.in/pages/NTE,";
const GPSP = "https://mportal.passportindia.gov.in/gpsp/";
const EMBASSY = "https://www.indembassybern.gov.in/";
const CHECKED = "24 November 2026";

export const metadata: Metadata = {
  title: "Indian Passport Renewal in Switzerland (2026): Steps, Documents, Fees",
  description: "How to renew an Indian passport in Switzerland: online form on Global Passport Seva, documents, fees in CHF (from CHF 118 for an adult), processing time of 5–7 weeks, and where to submit in Bern (VFS Global) or Geneva.",
  keywords: ["indian passport renewal switzerland", "indian passport renewal bern", "indian passport renewal geneva", "vfs indian passport switzerland", "renew indian passport zurich"],
  alternates: { canonical: "https://indiaspora.ch/living/indian-passport-renewal-switzerland" },
};

const FEES: [string, number, number][] = [
  ["Adult re-issue, 36 pages, 10-year validity (also ages 15–18)", 98, 118],
  ["Adult re-issue, 60 pages (jumbo)", 137, 157],
  ["Lost or damaged passport, 36 pages", 196, 216],
  ["Lost or damaged passport, 60 pages", 235, 255],
  ["Minor (under 18) re-issue, 36 pages, 5-year validity", 71, 91],
  ["Minor, fresh passport, 5-year validity", 64, 84],
  ["Minor, lost or damaged passport", 169, 189],
];

const FAQ: [string, string][] = [
  ["Where do I renew my Indian passport in Switzerland?", "The Embassy of India in Bern handles passport applications through VFS Global (India Visa Application Centre). Residents in the Geneva consulate's area apply to the Consulate General of India in Geneva (Chambésy). Check with the embassy or consulate which office covers your canton."],
  ["How much does Indian passport renewal cost in Switzerland?", "For an adult 36-page passport with 10-year validity, the total published by VFS Global is CHF 118: CHF 98 mission fee, CHF 2 consular surcharge and CHF 18 VFS service fee. A 60-page passport costs CHF 157. Fees are non-refundable."],
  ["How long does it take?", "VFS Global states 5 to 7 weeks from receipt of all documents, and at least one month; the embassy decides and timelines are not guaranteed."],
  ["When can I renew?", "You can apply for re-issue up to one year before your passport expires."],
  ["Is Tatkal available in Switzerland?", "No. Tatkal passport service is not offered in Switzerland."],
  ["Do I need an Indian address?", "Yes. An Indian address with proof is required for police verification; an address in a parent's or spouse's name is accepted."],
];

const card = "glass rounded-2xl p-6";
const h2 = "text-2xl font-bold mb-4";

export default function PassportRenewalPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  const howLd = {
    "@context": "https://schema.org", "@type": "HowTo", name: "Renew an Indian passport in Switzerland",
    totalTime: "P7W", estimatedCost: { "@type": "MonetaryAmount", currency: "CHF", value: 118 },
    step: [
      "Fill in the re-issue application online on the Global Passport Seva portal.",
      "Print and sign the completed application form.",
      "Collect the documents: current passport and copies, photos, Swiss residence permit copy, address proof, declaration form.",
      "Pay the fee and submit everything to VFS Global (Bern) or the Consulate General in Geneva.",
      "Track your application status on the passport portal.",
    ].map((text, i) => ({ "@type": "HowToStep", position: i + 1, text })),
  };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howLd) }} />
      <PageHeader
        title="Indian Passport Renewal in Switzerland"
        subtitle="Steps, documents, fees in CHF and processing times for renewing (re-issuing) an Indian passport while living in Switzerland."
        badge="Living guide"
        breadcrumbs={[{ label: "Living", href: "/living" }, { label: "Indian passport renewal" }]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-sm" style={{ color: "var(--text-2)", lineHeight: 1.75 }}>
        <div className={card}>
          <p className="font-semibold" style={{ color: "var(--text)" }}>In short</p>
          <ul className="mt-2 space-y-1">
            <li>• Apply online on the <a href={GPSP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>Global Passport Seva portal</a>, then submit the signed form and documents.</li>
            <li>• Adult 36-page renewal: <strong>CHF 118</strong> in total. Processing: <strong>5–7 weeks</strong>.</li>
            <li>• Submit to <strong>VFS Global in Bern</strong> (Embassy of India) or the <strong>Consulate General of India in Geneva</strong>, depending on where you live.</li>
            <li>• Tatkal is not available in Switzerland. You can renew up to a year before expiry.</li>
          </ul>
          <p className="text-xs mt-3" style={{ color: "var(--text-3)" }}>Information checked {CHECKED} against the official VFS Global and Consulate General of India Geneva pages. Fees and rules change: always confirm on the official pages linked below before applying.</p>
        </div>

        <section>
          <h2 className={h2} style={{ color: "var(--text)" }}>Who handles Indian passport renewal in Switzerland?</h2>
          <p><strong>Embassy of India, Bern:</strong> passport applications are processed through <a href={VFS} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>VFS Global (India Visa Application Centre)</a>. The embassy decides on each application; VFS collects documents and fees.</p>
          <p className="mt-3"><strong>Consulate General of India, Geneva:</strong> handles passport services for its jurisdictional area. Address: Appia 21, 1292 Chambésy. Phone +41 22 717 0600 (general) or +41 22 717 0672 (visa and consular). Open 9:00–17:30, closed weekends and public holidays. <a href={GENEVA} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>Official page</a>.</p>
          <p className="mt-3">Not sure which office covers your canton? Check the <a href={EMBASSY} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>Embassy of India Bern website</a> or ask the Geneva consulate before you apply.</p>
        </section>

        <section>
          <h2 className={h2} style={{ color: "var(--text)" }}>Step by step (Bern / VFS Global)</h2>
          <ol className="space-y-2 list-decimal pl-5">
            <li>Fill in the re-issue form online on the <a href={GPSP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>Global Passport Seva portal</a>.</li>
            <li>Print the completed form and sign it. Incomplete applications are not accepted.</li>
            <li>Gather the documents listed below.</li>
            <li>Pay the fee (card except American Express, cash, or bank transfer to VF Services (UK) Limited) and submit the form, documents and proof of payment to VFS Global.</li>
            <li>Track your application on the passport portal.</li>
          </ol>
          <p className="mt-3"><strong>Geneva:</strong> apply on the mission portal (Europe → Switzerland → Geneva), then submit the printed form in person with the original documents. The applicant must be present.</p>
          <p className="mt-3 text-xs" style={{ color: "var(--text-3)" }}>Appointment booking, postal submission and how the new passport is returned: check the current instructions on the <a href={VFS} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>VFS Global page</a>.</p>
        </section>

        <section>
          <h2 className={h2} style={{ color: "var(--text)" }}>Documents for an adult renewal</h2>
          <ul className="space-y-1">
            {["Signed printout of the online application form",
              "2 passport photos (630×810 px, under 250 KB, plain background, face about 85% of the frame)",
              "Your original current passport, plus colour copies of the front and last pages",
              "Copy of your Swiss residence permit",
              "Swiss address proof: residence certificate (Meldebescheinigung / attestation de domicile) or a utility bill",
              "Declaration form (required for all applicants)",
              "Indian address with proof, for police verification (an address in a parent's or spouse's name is accepted)",
              "Proof of payment"].map(d => <li key={d}>• {d}</li>)}
          </ul>
          <p className="mt-3"><strong>Minors:</strong> Annexure D (parental consent), parents&apos; consent or a statutory declaration, and self-attested copies of both parents&apos; passports and residence permits.</p>
          <p className="mt-2"><strong>Change of name or address:</strong> add a signed covering letter with supporting documents.</p>
          <p className="mt-2"><strong>Geneva</strong> additionally asks for one extra photo, copies of your residence card or CDL, and copies of the front and back of the old passport.</p>
        </section>

        <section>
          <h2 className={h2} style={{ color: "var(--text)" }}>Fees (CHF)</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="w-full text-sm" style={{ borderCollapse: "collapse", fontVariantNumeric: "tabular-nums" }}>
              <thead><tr style={{ borderBottom: "1px solid var(--border-2)", color: "var(--text)" }}>
                <th className="text-left py-2 pr-4">Service</th><th className="text-right py-2 px-2">Mission fee</th><th className="text-right py-2 pl-2">Total*</th></tr></thead>
              <tbody>{FEES.map(([s, m, t]) => (
                <tr key={s} style={{ borderBottom: "1px solid var(--border)" }}><td className="py-2 pr-4">{s}</td><td className="text-right px-2">{m}</td><td className="text-right pl-2 font-semibold" style={{ color: "var(--text)" }}>{t}</td></tr>
              ))}</tbody>
            </table>
          </div>
          <p className="text-xs mt-2" style={{ color: "var(--text-3)" }}>*Total = mission fee + CHF 2 consular surcharge + CHF 18 VFS service fee, as published by <a href={VFS} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>VFS Global</a>. Fees are non-refundable. Courier or return-postage charges may apply. Geneva consulate fees may differ.</p>
        </section>

        <section>
          <h2 className={h2} style={{ color: "var(--text)" }}>Processing time</h2>
          <p>VFS Global states <strong>5 to 7 weeks</strong> from receipt of all documents (at least one month). Timelines are decided by the embassy and are not guaranteed, so apply well before you travel. There is no Tatkal (express) service in Switzerland.</p>
        </section>

        <section>
          <h2 className={h2} style={{ color: "var(--text)" }}>Frequently asked questions</h2>
          <div className="space-y-4">
            {FAQ.map(([q, a]) => <div key={q}><h3 className="font-semibold" style={{ color: "var(--text)" }}>{q}</h3><p className="mt-1">{a}</p></div>)}
          </div>
        </section>

        <section className={card}>
          <h2 className="text-lg font-bold mb-2" style={{ color: "var(--text)" }}>Official sources</h2>
          <ul className="space-y-1">
            <li>• <a href={VFS} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>VFS Global: Indian passport services in Switzerland</a></li>
            <li>• <a href={GENEVA} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>Consulate General of India, Geneva</a></li>
            <li>• <a href={EMBASSY} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>Embassy of India, Bern</a></li>
            <li>• <a href={GPSP} target="_blank" rel="noopener noreferrer" style={{ color: "var(--in)" }}>Global Passport Seva portal</a></li>
          </ul>
          <p className="mt-3">Related: <Link href="/living/permits" style={{ color: "var(--in)" }}>Swiss permits L → B → C</Link> · <Link href="/living/legal" style={{ color: "var(--in)" }}>Legal &amp; immigration</Link> · <Link href="/advice" style={{ color: "var(--in)" }}>Ask the community</Link></p>
        </section>
      </div>
    </div>
  );
}
