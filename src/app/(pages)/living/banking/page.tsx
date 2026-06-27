import PageHeader from "@/components/ui/PageHeader";
import { ExternalLink } from "lucide-react";

const banks = [
  { name: "PostFinance", url: "https://www.postfinance.ch/en/", type: "Traditional", desc: "Easiest for new arrivals. No minimum salary requirement. Part of Swiss Post. Available at all post offices. Account in CHF, EUR, USD." },
  { name: "UBS", url: "https://www.ubs.com/ch/en.html", type: "Traditional", desc: "Switzerland's largest bank. Excellent wealth management. Requires employment contract and higher minimum balance." },
  { name: "Raiffeisen", url: "https://www.raiffeisen.ch/en.html", type: "Cooperative", desc: "Community cooperative bank. Very customer-friendly. Good for mortgages. Strong in smaller towns and cantons." },
  { name: "Zürcher Kantonalbank (ZKB)", url: "https://www.zkb.ch/en/", type: "Cantonal", desc: "Zurich cantonal bank. State-backed. Excellent for Zurich residents. Very reliable, Swiss-guaranteed deposits." },
  { name: "Migros Bank", url: "https://www.migrosbank.ch/en/", type: "Cooperative", desc: "Bank of the Migros cooperative. Competitive rates. No account fees. Popular with everyday banking needs." },
];

const digital = [
  { name: "Neon", url: "https://www.neon-free.ch", type: "Neobank", desc: "Free account, modern app, instant notifications. Easiest to open online — passport + selfie. Very popular with Indian tech workers." },
  { name: "Zak (Bank Cler)", url: "https://zak.ch", type: "Neobank", desc: "Free current account. Swiss bank backed. Good savings features and budgeting tools." },
  { name: "Revolut", url: "https://www.revolut.com", type: "Fintech", desc: "UK-based but popular for multi-currency. Not a full Swiss bank but great for travel spending, currency exchange and sending money abroad." },
  { name: "Wise (formerly TransferWise)", url: "https://wise.com", type: "Transfers", desc: "Best for sending money to India. Mid-market exchange rate, low fees. Much cheaper than bank wire transfers." },
];

const indiaTransfer = [
  { method: "Wise", cost: "0.5–1% fee", speed: "1–2 days", note: "Best rates. Most popular with Indian community" },
  { method: "Western Union", cost: "1–3% fee", speed: "Minutes to 2 days", note: "Good for urgent transfers. Many locations" },
  { method: "Bank Wire (SWIFT)", cost: "CHF 20–50 fee", speed: "2–5 days", note: "Reliable but expensive. Use for large amounts" },
  { method: "Remitly", cost: "~1% fee", speed: "Minutes to 3 days", note: "Good rates. App-based. Popular for India" },
];

export default function BankingPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Banking & Finance in Switzerland"
        subtitle="Open a Swiss bank account, send money to India, understand Swiss taxes, and manage your finances like a local."
        badge="🏦 Banking Guide"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[{ label: "Living in Switzerland", href: "/living" }, { label: "Banking & Finance" }]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 space-y-14">
        <div>
          <h2 className="text-2xl font-black text-white mb-2">Traditional Swiss Banks</h2>
          <p className="text-slate-400 text-sm mb-6">Recommended banks for Indian residents. PostFinance is easiest to open for new arrivals.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {banks.map((b) => (
              <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover group block">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-white text-base group-hover:text-teal-400 transition-colors">{b.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-teal-500/15 text-teal-400 border border-teal-500/20 mb-2 inline-block">{b.type}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{b.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Digital Banks & Fintechs</h2>
          <p className="text-slate-400 text-sm mb-6">Modern, app-based banking popular with Indian tech professionals</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {digital.map((d) => (
              <a key={d.name} href={d.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover group block">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="font-bold text-white text-sm group-hover:text-teal-400 transition-colors">{d.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                </div>
                <span className="text-xs text-slate-500 mb-2 block">{d.type}</span>
                <p className="text-slate-400 text-xs leading-relaxed">{d.desc}</p>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-black text-white mb-2">Sending Money to India</h2>
          <p className="text-slate-400 text-sm mb-6">Compare remittance options — fees and exchange rates matter on every transfer</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Method</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Cost</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Speed</th>
                  <th className="text-left py-3 px-4 text-slate-400 font-medium">Notes</th>
                </tr>
              </thead>
              <tbody>
                {indiaTransfer.map((t) => (
                  <tr key={t.method} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4 text-white font-medium">{t.method}</td>
                    <td className="py-3 px-4 text-slate-400">{t.cost}</td>
                    <td className="py-3 px-4 text-slate-400">{t.speed}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{t.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="glass rounded-2xl p-5 sm:p-6 border border-teal-500/20">
          <h3 className="font-bold text-teal-400 text-sm mb-3">🇮🇳 NRI Tax Note</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">If you are an NRI (Non-Resident Indian), income earned in Switzerland is generally taxable in Switzerland. India and Switzerland have a <strong className="text-white">Double Taxation Avoidance Agreement (DTAA)</strong> — you will not be taxed twice on the same income.</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">Your Swiss employer will deduct income tax at source (Quellensteuer/impôt à la source). File a Swiss tax return annually if you earn above the threshold.</p>
          <a href="https://www.estv.admin.ch/estv/en/home.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-teal-400 hover:text-teal-300 transition-colors">
            Swiss Federal Tax Administration <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>
    </div>
  );
}
