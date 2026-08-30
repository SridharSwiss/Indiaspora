import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Banking & Finance in Switzerland for Indians",
  description: "Open a Swiss bank account, send money to India, and manage finances. PostFinance, Neon, Yuh, Wise transfers, and NRI tax guide.",
  openGraph: {
    title: "Banking & Finance in Switzerland for Indians | IndiaSwiss",
    description: "Open a Swiss bank account, send money to India, and manage finances. PostFinance, Neon, Yuh, Wise transfers, and NRI tax guide.",
  },
};

const banks = [
  { name: "PostFinance", type: "Traditional", desc: "Historically the most accessible for new arrivals, with post office branches nationwide. Note: a foreign-address surcharge (~CHF 25/month) applies if you have no Swiss address yet. Once resident, basic accounts are fee-free for under-26 or with salary deposit.", bestFor: "First account", url: "https://www.postfinance.ch/en/private.html" },
  { name: "UBS", type: "Traditional", desc: "Switzerland's largest bank after absorbing Credit Suisse (2023). Full-service with English-language support. Typically requires a branch visit and may ask for a larger initial deposit for non-EU nationals.", bestFor: "Full banking", url: "https://www.ubs.com/ch/en/private.html" },
  { name: "ZKB — Zürcher Kantonalbank", type: "Cantonal", desc: "The largest cantonal bank (state-guaranteed) serving Zurich. Strong branch network in the canton, competitive mortgage rates, and solid business banking. Other major cantonal banks: BCG (Geneva), BEKB (Bern), BKB (Basel).", bestFor: "Zurich residents", url: "https://www.zkb.ch/en/" },
  { name: "Neon", type: "Digital", desc: "100% mobile Swiss bank, no monthly fees, fully English app. Easy to open with a valid Swiss residence permit and passport scan — no branch visit. Swiss IBAN. Very popular among Indian expats.", bestFor: "Digital-first", url: "https://www.neon-free.ch/en/" },
  { name: "Yuh", type: "Digital", desc: "Joint venture of PostFinance and Swissquote. Unique in that it also accepts non-residents. Holds accounts in CHF, EUR, and USD with sub-accounts in 13 currencies. Includes investment features and no monthly fee.", bestFor: "Non-residents & investing", url: "https://www.yuh.com/en/" },
  { name: "Swissquote", type: "Online Broker", desc: "Switzerland's leading online broker and bank. Open a trading account alongside a CHF current account. Best for investing in Swiss and international stocks, ETFs, and crypto — competitive commissions and a strong English interface.", bestFor: "Investing", url: "https://www.swissquote.ch/en/" },
  { name: "Revolut", type: "Digital", desc: "European fintech; not a Swiss bank but widely used by Indian expats. Excellent for multi-currency spending and low-cost transfers to India. Regulated under a Lithuanian banking licence.", bestFor: "Travel & FX", url: "https://www.revolut.com" },
];

const transferOptions = [
  { name: "Wise (TransferWise)", fee: "Low flat fee + small FX spread", speed: "1–2 business days", note: "Mid-market exchange rate. Most popular in the Indian community for CHF → INR transfers. Use this link for a fee-free first transfer: wise.com/invite/dic/sridharg7", url: "https://wise.com/invite/dic/sridharg7" },
  { name: "Revolut", fee: "Free up to monthly limit, then ~0.5%", speed: "Same day", note: "Very fast for smaller regular transfers; watch the weekend markup on FX." },
  { name: "Western Union", fee: "Variable by amount", speed: "Same day / next day", note: "Cash pickup option — useful if recipients lack a bank account in India." },
  { name: "Bank Wire (SWIFT)", fee: "CHF 25–50 + FX margin", speed: "3–5 business days", note: "Reliable but expensive. Use only for very large transfers where the FX rate offset the fees." },
];

export default function BankingPage() {
  return (
    <div>
      <PageHeader
        title="Banking & Finance"
        subtitle="Managing money in Switzerland and sending remittances to India — your complete guide to Swiss banking for Indians."
        badge="Finance Guide"
        gradient="from-yellow-500 to-amber-500"
        breadcrumbs={[
          { label: "Living in Switzerland", href: "/living" },
          { label: "Banking" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Choosing a Bank</h2>
          <p className="text-sm/50 mb-6" style={{ color: "var(--text)" }}>Indian nationals on a valid B or L permit can open a Swiss bank account. Digital banks (Neon, Yuh) are the easiest route — no appointment needed.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {banks.map((b) => (
              <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="glass card-hover rounded-2xl p-5 block group">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold group-hover:text-yellow-400 transition-colors" style={{ color: "var(--text)" }}>{b.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">{b.bestFor}</span>
                </div>
                <p className="text-xs/40 mb-1" style={{ color: "var(--text)" }}>{b.type}</p>
                <p className="text-sm/60" style={{ color: "var(--text)" }}>{b.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "var(--text)" }}>Sending Money to India</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b [border:1px_solid_var(--border)]">
                  <th className="text-left py-3 pr-4/60 font-medium" style={{ color: "var(--text)" }}>Service</th>
                  <th className="text-left py-3 pr-4/60 font-medium" style={{ color: "var(--text)" }}>Fee</th>
                  <th className="text-left py-3 pr-4/60 font-medium" style={{ color: "var(--text)" }}>Speed</th>
                  <th className="text-left py-3/60 font-medium" style={{ color: "var(--text)" }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {transferOptions.map((t) => (
                  <tr key={t.name} className="border-b [border:1px_solid_var(--border)]">
                    <td className="py-3 pr-4 font-medium" style={{ color: "var(--text)" }}>
                      {(t as { url?: string }).url ? (
                        <a href={(t as { url?: string }).url} target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">{t.name}</a>
                      ) : t.name}
                    </td>
                    <td className="py-3 pr-4/60" style={{ color: "var(--text)" }}>{t.fee}</td>
                    <td className="py-3 pr-4/60" style={{ color: "var(--text)" }}>{t.speed}</td>
                    <td className="py-3/60" style={{ color: "var(--text)" }}>{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--text)" }}>Swiss Pensions & 2nd Pillar (BVG)</h2>
          <div className="glass rounded-2xl p-6 text-sm space-y-3" style={{ color: "var(--text)" }}>
            <p>Switzerland operates a three-pillar pension system. As an employee you are automatically enrolled in the <strong style={{ color: "var(--text)" }}>2nd pillar (BVG / occupational pension)</strong> — both you and your employer contribute monthly (typically 7–18% of salary depending on age). This money is held in your pension fund (Pensionskasse).</p>
            <p><strong style={{ color: "var(--text)" }}>Leaving Switzerland permanently:</strong> You can withdraw your Pensionskasse capital in full when you leave Switzerland for a non-EU/EFTA country. The mandatory portion is paid out by the Stiftung Auffangeinrichtung; the extra-mandatory portion by your employer's fund. Withdrawals are subject to a withholding tax (typically 5–8%) deducted at source.</p>
            <p><strong style={{ color: "var(--text)" }}>3rd pillar (Pillar 3a):</strong> A voluntary tax-advantaged savings account — contributions up to CHF 7,258/year (2025) are deductible from cantonal and federal income tax. Open via any Swiss bank or insurer. Money is locked until retirement (or departure from Switzerland). Very worthwhile for anyone staying 3+ years.</p>
            <p><strong style={{ color: "var(--text)" }}>Cash culture:</strong> Switzerland remains significantly cash-oriented. Keep CHF 100–200 on hand — many markets, small shops, and parking meters still prefer cash. Major credit cards (Visa, Mastercard) are accepted broadly; American Express less so.</p>
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-yellow-500/20">
          <h3 className="text-base font-semibold text-yellow-400 mb-2">NRI Tax Note</h3>
          <p className="text-sm/70" style={{ color: "var(--text)" }}>Indian citizens residing in Switzerland for more than 182 days/year are classified as Non-Resident Indians (NRI) for Indian tax purposes. NRI income earned abroad is generally not taxable in India, but NRI bank accounts (NRE/NRO) have specific rules. India and Switzerland have a Double Taxation Avoidance Agreement (DTAA) in force — it prevents double taxation on income, pensions, and capital gains for Indian residents in Switzerland. Swiss employers deduct tax at source (Quellensteuer) for B permit holders; you typically file a simplified return. Consult a Swiss-qualified tax advisor or a CA familiar with the India–Switzerland DTAA before filing in either country.</p>
        </div>
      </div>
    </div>
  );
}
