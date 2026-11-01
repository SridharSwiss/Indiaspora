import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Community in Switzerland — Associations, Temples & Networks",
  description: "Find Indian community associations, temples, student groups, and women's networks across Switzerland. 150+ organisations covering all 26 cantons — IAGZ, SICC, TASC, TeluguSwiss, BAPS, ISKCON and more.",
  keywords: ["Indian community Switzerland", "Indians in Switzerland", "Indian associations Switzerland", "Indian organisations Zurich", "IAGZ", "SICC Switzerland", "Indian expat community Switzerland"],
  openGraph: {
    title: "Indian Community in Switzerland | IndiaSwiss",
    description: "150+ Indian associations, temples, student groups, and women's networks across Switzerland.",
  },
};

const sections = [
  { label: "Associations & Clubs", href: "/community/associations", img: "/hero-events.webp", desc: "150+ regional, cultural & professional associations", color: "from-orange-500 to-red-500" },
  { label: "Temples & Spiritual", href: "/community/spiritual", img: "/images/heroes/community-spiritual.webp", desc: "Temples, yoga centres, satsang & meditation groups", color: "from-purple-500 to-violet-600" },
  { label: "Women's Network", href: "/community/women", img: "/images/heroes/community-women.webp", desc: "Support networks, WhatsApp groups & events for Indian women", color: "from-rose-500 to-pink-600" },
  { label: "Students", href: "/community/students", img: "/images/heroes/community-students.webp", desc: "ETH, EPFL, UZH, UNIGE student associations & resources", color: "from-blue-500 to-indigo-600" },
];

const orgs = [
  { name: "IAGZ – Indian Association of Greater Zurich", url: "https://iagz.ch", city: "Zurich", desc: "Premier community organisation for Indians in Zurich. Events, networking, Hindi school, Diwali Gala." },
  { name: "SICC – Swiss-Indian Chamber of Commerce", url: "https://sicc.ch", city: "Zurich", desc: "Bilateral trade and business networking between India and Switzerland. 400+ members, 50+ events/year." },
  { name: "Indian Association Berne (IAB)", url: "https://www.india-bern.ch", city: "Bern", desc: "Founded 1972. One of Switzerland's oldest Indian associations. Cultural events and support for Indians in the Swiss capital." },
  { name: "Indian Association Geneva (IAG)", url: "https://indianassociationgeneva.com", city: "Geneva", desc: "Founded 1947. 500+ members. Community platform for Indians in the Lake Geneva region and UN/diplomatic circles." },
  { name: "Indian Association Lausanne (IAL)", url: "https://www.ialausanne.com/", city: "Lausanne", desc: "Founded 1995. Non-profit for Indians in Lausanne and French-speaking Switzerland." },
  { name: "Indian Association Basel", url: "https://iabasel.com/", city: "Basel", desc: "Cultural events, cricket tournament and community welfare for Basel's Indian community." },
  { name: "TeluguSwiss / STNRI", url: "https://teluguswiss.org", city: "Nationwide", desc: "Telugu-speaking community — Ugadi, cultural events and the Mana Badi language school (Swiss Telugu NRI Forum)." },
  { name: "PrangaN@Swiss", url: "https://pranganswiss.org", city: "Lausanne", desc: "Women-led Bengali diaspora organisation. Authentic Durga Puja and Vasant Utsav in Lausanne." },
  { name: "Gujarati Samaj Switzerland", url: "https://www.gujaratisamaj.ch", city: "Nationwide", desc: "Navratri Garba, Gujarati language classes and cultural events across Switzerland." },
  { name: "Bruhan Maharashtra Mandal Switzerland", url: "https://bruhan-mms.org", city: "Nationwide", desc: "Marathi culture, Ganesh Chaturthi, language and community welfare for Maharashtrians in Switzerland." },
  { name: "Swiss Tamil Sangam", url: "https://swisstamilsangam.com", city: "Nationwide", desc: "Tamil cultural events, Pongal celebrations, and Tamil language community across Switzerland." },
  { name: "Hindu Swayamsevak Sangh Switzerland", url: "https://hssworld.org", city: "Nationwide", desc: "Hindu cultural values, shakha, yoga, and youth development programmes." },
];

export default function CommunityPage() {
  return (
    <div>
      <PageHeader
        title="Indian Community in Switzerland"
        subtitle="Connect with 25,000+ Indians across 26 cantons. Find your tribe — by region, language, profession, or interest."
        badge="🤝 150+ Active Groups"
        heroImage="/hero-events.webp"
        heroImageAlt="Indian community Switzerland"
        heroImagePosition="center 30%"
        breadcrumbs={[{ label: "Community" }]}
      />

      {/* Sub-sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {sections.map((s) => (
            <Link key={s.label} href={s.href} className="glass rounded-2xl p-6 card-hover group block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={s.img} alt="" loading="lazy" className="w-full object-cover rounded-xl mb-4" style={{ height: 130 }} />
              <h2 className="font-bold text-lg mb-2 group-hover:text-orange-400 transition-colors" style={{ color: "var(--text)" }}>{s.label}</h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{s.desc}</p>
            </Link>
          ))}
        </div>

        {/* Directory */}
        <h2 className="text-2xl sm:text-3xl font-black mb-2" style={{ color: "var(--text)" }}>Community Directory</h2>
        <p className="mb-8" style={{ color: "var(--text-2)" }}>Major Indian associations and organisations active in Switzerland</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {orgs.map((org) => (
            <a key={org.name} href={org.url} target="_blank" rel="noopener noreferrer"
              className="glass rounded-xl p-5 card-hover block group">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-sm group-hover:text-orange-400 transition-colors leading-tight" style={{ color: "var(--text)" }}>{org.name}</h3>
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/20">{org.city}</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{org.desc}</p>
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
          {[{v:"25,000+",l:"Indians in Switzerland"},{v:"150+",l:"Active Associations"},{v:"26",l:"Cantons Covered"},{v:"20+",l:"Languages Spoken"}].map((s)=>(
            <div key={s.l} className="glass rounded-xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text mb-1">{s.v}</div>
              <div className="text-xs sm:text-sm" style={{ color: "var(--text-2)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
