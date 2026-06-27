import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { Users, Building2, Heart, GraduationCap } from "lucide-react";

const sections = [
  { icon: Building2, label: "Associations & Clubs", href: "/community/associations", desc: "150+ regional, cultural & professional associations", color: "from-orange-500 to-red-500" },
  { icon: Heart, label: "Temples & Spiritual", href: "/community/spiritual", desc: "Temples, yoga centres, satsang & meditation groups", color: "from-purple-500 to-violet-600" },
  { icon: Users, label: "Women's Network", href: "/community/women", desc: "Support networks, WhatsApp groups & events for Indian women", color: "from-rose-500 to-pink-600" },
  { icon: GraduationCap, label: "Students", href: "/community/students", desc: "ETH, EPFL, UZH, UNIGE student associations & resources", color: "from-blue-500 to-indigo-600" },
];

const orgs = [
  { name: "IAGZ – Indian Association of Greater Zurich", url: "https://www.iagz.ch", city: "Zurich", desc: "Premier community organisation for Indians in Zurich. Events, networking, Hindi school, Diwali Mela." },
  { name: "SICC – Swiss Indian Chamber of Commerce", url: "https://www.sicc.ch", city: "Zurich/Bern", desc: "Bilateral trade and business networking between India and Switzerland." },
  { name: "Indian Association Berne", url: "https://www.indiaassociationberne.ch", city: "Bern", desc: "Community events, cultural programmes and support for Indians in the capital." },
  { name: "Indian Cultural Association Basel (ICAS)", url: "#", city: "Basel", desc: "Cultural events, Diwali celebrations and community welfare for Basel's Indian community." },
  { name: "Indian Association Geneva (IAG)", url: "#", city: "Geneva", desc: "Community platform for Indians in the Lake Geneva region and UN/diplomatic circles." },
  { name: "Gujarati Samaj Switzerland", url: "#", city: "Nationwide", desc: "Cultural events, language classes and support for Gujarati-speaking Indians across Switzerland." },
  { name: "Maharashtra Mandal Switzerland", url: "#", city: "Nationwide", desc: "Marathi culture, Ganesh Chaturthi, and community welfare for Maharashtrians." },
  { name: "Tamil Sangam Switzerland", url: "#", city: "Zurich/Basel", desc: "Tamil cultural events, Pongal celebrations, and Tamil language education." },
  { name: "Telugu Association Switzerland (TAS)", url: "#", city: "Nationwide", desc: "Telugu cultural events, Ugadi, and community network for Telugu speakers." },
  { name: "Punjabi Cultural Association", url: "#", city: "Zurich", desc: "Punjabi culture, Lohri, Baisakhi celebrations and community events." },
  { name: "Kannada Koota Switzerland", url: "#", city: "Zurich", desc: "Kannada Rajyotsava, Ugadi and community events for Kannadigas." },
  { name: "Hindu Swayamsevak Sangh Switzerland", url: "#", city: "Nationwide", desc: "Hindu cultural values, yoga, and youth development programmes." },
];

export default function CommunityPage() {
  return (
    <div className="bg-slate-950 text-white">
      <PageHeader
        title="Indian Community in Switzerland"
        subtitle="Connect with 30,000+ Indians across 26 cantons. Find your tribe — by region, language, profession, or interest."
        badge="🤝 150+ Active Groups"
        breadcrumbs={[{ label: "Community" }]}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {sections.map((s) => (
            <Link key={s.label} href={s.href} className="glass rounded-2xl p-6 card-hover group block">
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${s.color} mb-4`}>
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-bold text-white text-lg mb-2 group-hover:text-orange-400 transition-colors">{s.label}</h2>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Community Directory</h2>
        <p className="text-slate-400 mb-8">Major Indian associations and organisations active in Switzerland</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {orgs.map((org) => (
            <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer"
              className="glass rounded-xl p-5 card-hover block group">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-white text-sm group-hover:text-orange-400 transition-colors leading-tight">{org.name}</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/20">{org.city}</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">{org.desc}</p>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
          {[{v:"30,000+",l:"Indians in Switzerland"},{v:"150+",l:"Active Associations"},{v:"26",l:"Cantons Covered"},{v:"20+",l:"Languages Spoken"}].map((s)=>(
            <div key={s.l} className="glass rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{s.v}</div>
              <div className="text-xs sm:text-sm text-slate-400">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
