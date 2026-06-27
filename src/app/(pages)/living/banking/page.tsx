import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Banking & Finance in Switzerland for Indians",
  description: "Open a Swiss bank account, send money to India, and manage finances. PostFinance, Neon, Wise transfers, and NRI tax guide.",
  openGraph: {
    title: "Banking & Finance in Switzerland for Indians | IndiaSwiss",
    description: "Open a Swiss bank account, send money to India, and manage finances. PostFinance, Neon, Wise transfers, and NRI tax guide.",
  },
};

const banks = [
  { name: "PostFinance", type: "Traditional", desc: "Easiest to open for new arrivals; widespread post office branches. Basic account is free for under-26 or salary deposit.", bestFor: "First account" },
  { name: "UBS / Credit Suisse (now UBS)", type: "Traditional", desc: "Full-service private bank with English-language support. Good for salary accounts and mortgages.", bestFor: "Full banking" },
  { name: "Neon", type: "Digital", desc: "100% mobile bank, no fees, English app. Easy to open with just a permit and passport scan. No branch visits needed.", bestFor: "Digital-first" },
  { name: "Yuh", type: "Digital", desc: "PostFinance-backed digital bank with investment features. English app, no monthly fees.", bestFor: "Investing" },
  { name: "Revolut", type: "Digital", desc: "European digital bank; great for multi-currency and India transfers. Not a Swiss bank but widely used.", bestFor: "Travel & FX" },
];

const transferOptions = [
  { name: "Wise (TransferWise)", fee: "Low flat fee + FX spread", speed: "1–2 days", note: "Best exchange rates; popular in the community." },
  { name: "Revolut", fee: "Free up to limit, then 0.5%", speed: "Same day", note: "Fast and cheap for regular small transfers." },
  { name: "Western Union", fee: "Variable", speed: "Same day", note: "Cash pickup option for recipients without a bank account." },
  { name: "Bank Wire (SWIFT)", fee: "25–50 CHF + FX", speed: "3–5 days", note: "Reliable but expensive; use for large amounts only." },
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
          <h2 className="text-2xl font-bold text-white mb-6">Choosing a Bank</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {banks.map((b) => (
              <div key={b.name} className="glass card-hover rounded-2xl p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-white">{b.name}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">{b.bestFor}</span>
                </div>
                <p className="text-xs text-white/40 mb-2">{b.type}</p>
                <p className="text-sm text-white/60">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Sending Money to India</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 pr-4 text-white/60 font-medium">Service</th>
                  <th className="text-left py-3 pr-4 text-white/60 font-medium">Fee</th>
                  <th className="text-left py-3 pr-4 text-white/60 font-medium">Speed</th>
                  <th className="text-left py-3 text-white/60 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {transferOptions.map((t) => (
                  <tr key={t.name} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white font-medium">{t.name}</td>
                    <td className="py-3 pr-4 text-white/60">{t.fee}</td>
                    <td className="py-3 pr-4 text-white/60">{t.speed}</td>
                    <td className="py-3 text-white/60">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-yellow-500/20">
          <h3 className="text-base font-semibold text-yellow-400 mb-2">NRI Tax Note</h3>
          <p className="text-sm text-white/70">Indian citizens residing in Switzerland for more than 182 days/year are classified as Non-Resident Indians (NRI) for Indian tax purposes. NRI income earned abroad is generally not taxable in India, but NRI bank accounts (NRE/NRO) have specific rules. Consult a CA familiar with India–Switzerland tax treaty provisions.</p>
        </div>
      </div>
    </div>
  );
}
