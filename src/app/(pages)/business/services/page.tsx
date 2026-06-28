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
    desc: "Swiss immigration law is complex — a qualified lawyer helps with permit renewals, family reunification, naturalization, and appeals.",
    items: [
      { name: "KPMG Legal Switzerland", url: "https://home.kpmg/ch/en/home/services/legal.html", note: "Big4-backed immigration law practice. Experienced with Indian corporate transfers and senior executive permits." },
      { name: "Kellerhals Carrard", url: "https://www.kellerhals-carrard.ch/en", note: "Leading Swiss law firm with immigration and employment law expertise across all major cities." },
      { name: "SEM – Immigration Self-Service", url: "https://www.sem.admin.ch/en", note: "For straightforward cases, the official State Secretariat for Migration website guides you through permit applications." },
    ],
  },
  {
    title: "Tax & Accounting",
    icon: "📊",
    color: "text-green-400",
    desc: "Swiss taxation differs significantly from Indian and international norms — source tax, wealth tax, and India-Switzerland DTAA all need specialist advice.",
    items: [
      { name: "PwC Switzerland", url: "https://www.pwc.ch/en", note: "Full tax advisory for Indian expats — personal tax, corporate structuring, and India–Switzerland DTAA optimisation." },
      { name: "Deloitte Switzerland", url: "https://www2.deloitte.com/ch/en.html", note: "Strong in expatriate tax, global mobility, and NRI tax planning for Indians." },
      { name: "EY Switzerland", url: "https://www.ey.com/en_ch", note: "Mobility tax, family office, and cross-border India–Switzerland tax structuring." },
      { name: "KPMG Switzerland", url: "https://home.kpmg/ch/en/home.html", note: "Tax compliance, transfer pricing, and wealth management advisory." },
    ],
  },
  {
    title: "Relocation Services",
    icon: "💜",
    color: "text-purple-400",
    desc: "Specialist relocation firms help Indian expats find housing, enrol children in schools, and navigate Swiss registration within the first weeks.",
    items: [
      { name: "Crown Relocations Switzerland", url: "https://www.crownrelo.com/ch/en-ch", note: "Full relocation from India to Switzerland — household goods, housing search, Gemeinde registration assistance." },
      { name: "Packimpex Relocation", url: "https://www.packimpex.ch/en", note: "Swiss-based relocation specialist with 40+ years experience. Strong in Zurich, Geneva, Basel." },
      { name: "BGRS / Weichert Workforce Mobility", url: "https://www.bgrs.com", note: "Corporate mobility provider used by large firms for Indian executive transfers." },
    ],
  },
  {
    title: "Financial Advisory",
    icon: "🏦",
    color: "text-yellow-400",
    desc: "Indian-aware financial advisors help with NRI investment rules, remittances, Swiss pension (pillar 2/3), and FEMA compliance.",
    items: [
      { name: "UBS Wealth Management", url: "https://www.ubs.com/ch/en/private/wealth-management.html", note: "Private banking for high-net-worth Indians. India desk with Bollywood and business family expertise." },
      { name: "Neon (Digital Banking)", url: "https://www.neon-free.ch/en", note: "Easy CHF account for new arrivals. No fees, English app, and instant permit verification." },
      { name: "Wise (Remittances)", url: "https://wise.com", note: "Best-in-class CHF to INR transfer rates. Real exchange rate with transparent fees." },
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
          <p className="text-sm text-slate-300">The best professional referrals often come from the community. Ask in the IAGZ member network (<a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">iagz.ch</a>), the SICC member directory (<a href="https://sicc.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">sicc.ch</a>), or Indian community WhatsApp groups for tried-and-tested advisors.</p>
        </div>
      </div>
    </div>
  );
}
