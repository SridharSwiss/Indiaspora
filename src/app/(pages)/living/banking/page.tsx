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
  { name: "Neon", type: "Digital", desc: "100% mobile Swiss bank, no monthly fees, fully English app. Easy to open with a valid Swiss residence permit and passport scan — no branch visit. Swiss IBAN. Very popular among Indian expats.", bestFor: "Digital-first", url: "https://www.neon-free.ch/en/" },
  { name: "Yuh", type: "Digital", desc: "Joint venture of PostFinance and Swissquote. Unique in that it also accepts non-residents. Holds accounts in CHF, EUR, and USD with sub-accounts in 13 currencies. Includes investment features and no monthly fee.", bestFor: "Non-residents & investing", url: "https://www.yuh.com/en/" },
  { name: "Revolut", type: "Digital", desc: "European fintech; not a Swiss bank but widely used by Indian expats. Excellent for multi-currency spending and low-cost transfers to India. Regulated under a Lithuanian banking licence.", bestFor: "Travel & FX", url: "https://www.revolut.com" },
];

const transferOptions = [
  { name: "Wise (TransferWise)", fee: "Low flat fee + small FX spread", speed: "1–2 business days", note: "Mid-market exchange rate. Most popular in the Indian community for CHF → INR transfers." },
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
                    <td className="py-3 pr-4 font-medium" style={{ color: "var(--text)" }}>{t.name}</td>
                    <td className="py-3 pr-4/60" style={{ color: "var(--text)" }}>{t.fee}</td>
                    <td className="py-3 pr-4/60" style={{ color: "var(--text)" }}>{t.speed}</td>
                    <td className="py-3/60" style={{ color: "var(--text)" }}>{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-yellow-500/20">
          <h3 className="text-base font-semibold text-yellow-400 mb-2">NRI Tax Note</h3>
          <p className="text-sm/70" style={{ color: "var(--text)" }}>Indian citizens residing in Switzerland for more than 182 days/year are classified as Non-Resident Indians (NRI) for Indian tax purposes. NRI income earned abroad is generally not taxable in India, but NRI bank accounts (NRE/NRO) have specific rules. India and Switzerland have a Double Taxation Avoidance Agreement (DTAA) — consult a CA familiar with India–Switzerland tax treaty provisions before filing.</p>
        </div>
      </div>
    </div>
  );
}
