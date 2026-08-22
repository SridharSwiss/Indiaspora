import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Professional Services for Indians in Switzerland",
  description: "Find Indian-background lawyers, accountants, relocation consultants, and financial advisors in Switzerland.",
  openGraph: {
    title: "Professional Services for Indians in Switzerland | IndiaSwiss",
    description: "Find Indian-background lawyers, accountants, relocation consultants, and financial advisors in Switzerland.",
  },
};

const categories = [
  {
    title: "Immigration Lawyers",
    icon: "⚖️",
    color: "text-blue-400",
    desc: "Swiss immigration law is complex — a qualified lawyer helps with permit renewals, family reunification, naturalization, and appeals. Annual quotas for non-EU/EFTA nationals make specialist advice essential.",
    items: [
      { name: "Probst Partner AG – India Desk", url: "https://www.probstpartner.ch/en/international/india-desk", note: "Swiss law firm in Winterthur and Zurich with a dedicated India Desk. Advises Indian companies investing in Switzerland, handles cross-border transactions, Indian stock exchange matters, and double-taxation questions. Active SICC member." },
      { name: "KPMG Legal Switzerland", url: "https://kpmg.com/ch/en/home/services/legal.html", note: "Big4-backed immigration law practice. Experienced with Indian corporate transfers, senior executive permits, and publishes the annual Swiss Immigration Law Outlook." },
      { name: "Kellerhals Carrard", url: "https://www.kellerhals-carrard.ch/en", note: "Leading independent Swiss law firm with immigration and employment law expertise across Zurich, Basel, Bern, Lausanne, and Geneva." },
      { name: "SEM – State Secretariat for Migration", url: "https://www.sem.admin.ch/en", note: "For straightforward cases, the official SEM website provides permit application forms, quota updates, and the definitive guide to Swiss immigration law." },
    ],
  },
  {
    title: "Tax & Accounting",
    icon: "📊",
    color: "text-green-400",
    desc: "Swiss taxation differs significantly from Indian and international norms — source tax, wealth tax, and the India–Switzerland Double Taxation Avoidance Agreement (DTAA) all require specialist advice.",
    items: [
      { name: "TaXperts Switzerland", url: "https://taxperts.ch/en/", note: "Expat-focused tax advisory firm with offices in Zurich, Basel, Zug, and Lucerne. Specialises 100% in individual taxes for expats including Indian nationals dealing with Swiss source tax and cross-border income." },
      { name: "PwC Switzerland", url: "https://www.pwc.ch/en", note: "Full tax advisory for Indian expats — personal tax, corporate structuring, and India–Switzerland DTAA optimisation. Global mobility practice with India expertise." },
      { name: "Deloitte Switzerland", url: "https://www2.deloitte.com/ch/en.html", note: "Strong in expatriate tax, global mobility, and NRI tax planning for Indians on B and C permits." },
      { name: "EY Switzerland", url: "https://www.ey.com/en_ch", note: "Mobility tax, family office, and cross-border India–Switzerland tax structuring. Well-regarded for pharma-sector Indian expats in Basel." },
    ],
  },
  {
    title: "Relocation Services",
    icon: "💜",
    color: "text-purple-400",
    desc: "Specialist relocation firms help Indian expats find housing, enrol children in schools, and navigate Swiss municipality registration (Anmeldung) within the required 14 days of arrival.",
    items: [
      { name: "Crown Relocations Switzerland", url: "https://www.crownrelo.com/ch/en-ch", note: "Full relocation from India to Switzerland — household goods shipping, housing search, Gemeinde registration assistance, and school placement support." },
      { name: "Packimpex Relocation", url: "https://www.packimpex.ch/en", note: "Swiss-based relocation specialist with 40+ years experience. Strong in Zurich, Geneva, and Basel. Frequently used by pharma and finance firms for Indian transfers." },
      { name: "BGRS / Weichert Workforce Mobility", url: "https://www.bgrs.com", note: "Corporate mobility provider used by large multinationals for Indian executive transfers to Switzerland. Full end-to-end relocation management." },
    ],
  },
  {
    title: "Financial Advisory",
    icon: "🏦",
    color: "text-yellow-400",
    desc: "Indian-aware financial advisors help with NRI investment rules, FEMA compliance, CHF-to-INR remittances, Swiss pension pillars (2 and 3a), and wealth planning for high-net-worth families.",
    items: [
      { name: "Deloris AG – Expat Financial Advisor", url: "https://www.deloris.ch/en", note: "Zurich-based financial advisor specialising in expatriates. Has worked with 3,800+ clients on Swiss tax optimisation, pension planning, and cross-border wealth structuring." },
      { name: "UBS Wealth Management", url: "https://www.ubs.com/ch/en/private/wealth-management.html", note: "Private banking for high-net-worth Indians. India desk with expertise in NRI family offices, global investment portfolios, and succession planning." },
      { name: "Neon (Digital Banking)", url: "https://www.neon-free.ch/en", note: "Easy CHF account for new arrivals. No fees, English-language app, and quick permit-verification process — a popular first step for Indian expats." },
      { name: "Wise (Remittances)", url: "https://wise.com", note: "Best-in-class CHF to INR transfer rates. Real exchange rate with transparent fees and same-day transfers — widely used by the Indian diaspora in Switzerland." },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageHeader
        title="Professional Services"
        subtitle="Specialist lawyers, accountants, and advisors who understand the India–Switzerland context — from permit renewals to NRI tax planning."
        badge="Professional Services"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Professional Services" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {categories.map((cat) => (
          <section key={cat.title}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className={`text-2xl font-bold ${cat.color}`}>{cat.title}</h2>
            </div>
            <p className="text-slate-400 mb-6">{cat.desc}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover block group">
                  <h3 className="font-semibold text-white text-sm mb-2 group-hover:text-teal-400 transition-colors">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.note}</p>
                </a>
              ))}
            </div>
          </section>
        ))}

        <div className="glass rounded-2xl p-6 border border-teal-500/20">
          <h3 className="text-base font-semibold text-teal-400 mb-2">Community Referrals</h3>
          <p className="text-sm text-slate-300">The best professional referrals often come from the community. Ask in the IAGZ member network (<a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">iagz.ch</a>), the SICC member directory (<a href="https://sicc.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">sicc.ch</a>), or the Swiss India Professional Network (<a href="https://sipn.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">sipn.ch</a>) for tried-and-tested advisors who understand the Indian context.</p>
        </div>
      </div>
    </div>
  );
}
