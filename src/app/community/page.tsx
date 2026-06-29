import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Heart, GraduationCap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description: "Connect with 38,000+ Indians across Switzerland through associations, cultural groups, women's networks, and student communities.",
};

const ASSOCIATIONS = [
  { name: "IAGZ – Indian Association of Greater Zurich", url: "https://iagz.ch", desc: "Largest Indian association in Switzerland, founded in 1983 — cultural events, networking, sports, and community support.", city: "Zurich" },
  { name: "SICC – Swiss Indian Chamber of Commerce", url: "https://sicc.ch", desc: "Premier business chamber facilitating trade and investment between India and Switzerland — networking events and bilateral summits.", city: "Zurich / Geneva" },
  { name: "Hindu Swayamsevak Sangh Switzerland", url: "https://hss.org", desc: "Cultural and spiritual activities for the Hindu community — weekly shakhas, youth programs, and festival celebrations.", city: "Nationwide" },
  { name: "Indian Student Association ETH Zurich (InSAZ)", url: "https://insaz.ch", desc: "Student community at ETH Zurich with networking events, cultural programs, and mentorship for Indian students.", city: "Zurich" },
  { name: "Swiss Telugu NRI Forum (STNRI)", url: "https://www.facebook.com/groups/swiss.telugu.nri/", desc: "Community group for Telugu-speaking Indians in Switzerland — Ugadi, Sankranti, and cultural events throughout the year.", city: "Nationwide" },
  { name: "Gujarati Samaj Switzerland", url: "https://www.facebook.com/groups/gujarati.switzerland/", desc: "Gujarati cultural events, Navratri garba nights, Diwali Mela, and community meetups across Switzerland.", city: "Nationwide" },
  { name: "Maharashtra Mandal Switzerland", url: "https://www.maharashtra-mandal.ch", desc: "Celebrating Maharashtrian culture — Ganesh Chaturthi, Gudi Padwa, Diwali, and regional cuisine events.", city: "Zurich" },
  { name: "Punjabi Cultural Association Switzerland", url: "https://www.facebook.com/groups/punjabi.switzerland/", desc: "Vaisakhi celebrations, Bhangra and Giddha events, Lohri nights, and Punjabi cultural programs.", city: "Zurich / Basel" },
];

const TEMPLES = [
  { name: "Glatbrugg Siva Temple", subtitle: "Saiva Thamil Sangam Switzerland — largest Hindu temple in Switzerland", url: "https://www.saivathamilsangam.ch", city: "Glatbrugg, Zurich" },
  { name: "ISKCON Krishna Temple Zurich", subtitle: "Hare Krishna Community — Sunday feasts, Bhagavad Gita classes, and Janmashtami", url: "https://iskcon.ch", city: "Zurich" },
  { name: "Sri Durga Temple Basel", subtitle: "Sri Durga Ambal Temple — Tamil Nadu tradition, regular pujas and festivals", url: "https://www.durgatemple-basel.ch", city: "Basel" },
  { name: "Arya Samaj Switzerland", subtitle: "Vedic traditions, havan ceremonies, and Sanskrit education", url: "https://www.aryasamaj.ch", city: "Zurich" },
  { name: "Art of Living Switzerland", subtitle: "Sri Sri Ravi Shankar Foundation — Sudarshan Kriya, yoga, and meditation", url: "https://artofliving.org/ch-en", city: "Nationwide" },
  { name: "Chinmaya Mission Switzerland", subtitle: "Vedanta classes, Geeta Chanting, and children's Balavihar programs", url: "https://chinmayamission.com", city: "Zurich / Geneva" },
];

const WOMEN_GROUPS = [
  { name: "Indian Women's Network Switzerland", url: "https://www.facebook.com/groups/indianwomenswitzlerland/", desc: "Professional networking, mentorship, and social events for Indian women across Switzerland — monthly meetups in Zurich and Geneva." },
  { name: "Desi Moms Zurich", url: "https://www.facebook.com/groups/desimomszurich/", desc: "Support group for Indian mothers in Zurich — parenting tips, school advice, activities, and community support." },
  { name: "Indian Women Connect Geneva", url: "https://www.facebook.com/groups/indianwomengeneva/", desc: "Social club and professional network for Indian women in the Lake Geneva region — coffees, networking, and cultural events." },
];

export default function CommunityPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">Community Hub</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            Your Swiss <span className="gradient-text">Indian Family</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Connect with 38,000+ Indians across Switzerland — through associations, temples, women&apos;s networks, student groups, and cultural communities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#associations" className="btn btn-primary">
              Find Associations <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#spiritual" className="btn btn-outline">
              Temples & Spiritual
            </a>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Users className="w-6 h-6" />, value: "38,000+", label: "Indians in Switzerland" },
              { icon: <Globe className="w-6 h-6" />, value: "150+", label: "Community Associations" },
              { icon: <Heart className="w-6 h-6" />, value: "40+", label: "Temples & Centres" },
              { icon: <GraduationCap className="w-6 h-6" />, value: "15+", label: "Student Groups" },
            ].map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-indigo-400" style={{ background: "rgba(249,115,22,0.1)" }}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associations */}
      <section id="associations" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Associations & Clubs</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Indian Associations</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Regional, linguistic, and cultural associations uniting Indians across Switzerland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {ASSOCIATIONS.map((a) => (
              <a
                key={a.name}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors mb-1">{a.name}</h3>
                    <p className="text-sm text-slate-400 mb-3">{a.desc}</p>
                    <span className="text-xs text-indigo-400 font-medium">{a.city}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 shrink-0 mt-1 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Temples */}
      <section id="spiritual" className="py-20 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Temples & Spiritual</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Spiritual Centres</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Temples, yoga studios, meditation centres, and satsang groups for your spiritual journey in Switzerland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {TEMPLES.map((t) => (
              <a
                key={t.name}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-lg" style={{ background: "rgba(139,92,246,0.15)" }}>
                  🛕
                </div>
                <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors mb-1">{t.name}</h3>
                <p className="text-sm text-slate-500 mb-2">{t.subtitle}</p>
                <span className="text-xs text-purple-400 font-medium">{t.city}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Women's Network */}
      <section id="women" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Women&apos;s Network</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Women&apos;s Communities</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Support, professional networking, and social groups for Indian women in Switzerland.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {WOMEN_GROUPS.map((w) => (
              <a
                key={w.name}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="text-2xl mb-3">👩‍💼</div>
                <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors mb-2">{w.name}</h3>
                <p className="text-sm text-slate-400">{w.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Students */}
      <section id="students" className="py-20 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Students</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Student Communities</h2>
            <p className="text-slate-400 text-lg max-w-2xl">
              Indian student associations at ETH, EPFL, University of Zurich, and other Swiss institutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "InSAZ – Indian Student Association ETH Zurich", url: "https://insaz.ch", uni: "ETH Zurich" },
              { name: "EPFL Indian Student Association (AIE)", url: "https://www.epfl.ch/campus/associations/list/aie/", uni: "EPFL Lausanne" },
              { name: "UZH Indian Student Society", url: "https://www.facebook.com/groups/uzhindiansociety/", uni: "University of Zurich" },
              { name: "University of Bern Indian Students", url: "https://www.facebook.com/groups/indianstudentsbern/", uni: "University of Bern" },
              { name: "University of Geneva Indian Society", url: "https://www.facebook.com/groups/unigeindia/", uni: "University of Geneva" },
              { name: "University of Basel Indian Association", url: "https://www.facebook.com/groups/indiansbasel/", uni: "University of Basel" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="text-2xl mb-3">🎓</div>
                <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors mb-1">{s.name}</h3>
                <span className="text-xs text-teal-400 font-medium">{s.uni}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">🤝</div>
            <h2 className="text-3xl font-bold text-white mb-4">List Your Association</h2>
            <p className="text-slate-400 mb-8">
              Running an Indian community group, cultural association, or student club in Switzerland? Get listed on IndiaSwiss for free.
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=List%20My%20Association" className="btn btn-primary">
              Submit Your Group <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
