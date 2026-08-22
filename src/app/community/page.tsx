import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Heart, GraduationCap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Community",
  description: "Connect with 25,000+ Indians across Switzerland through associations, cultural groups, women's networks, and student communities.",
};

const ASSOCIATIONS = [
  { name: "IAGZ – Indian Association of Greater Zurich", url: "https://iagz.ch", desc: "Largest Indian association in Switzerland — events, Diwali Gala, networking, and community support since 2010.", city: "Zurich" },
  { name: "SICC – Swiss Indian Chamber of Commerce", url: "https://sicc.ch", desc: "Business networking, trade facilitation, and professional events between India and Switzerland.", city: "Zurich/Geneva" },
  { name: "IAG – Indian Association Geneva", url: "https://indianassociationgeneva.com", desc: "Community hub for Indians in the Lake Geneva region — cultural events, networking, and support.", city: "Geneva" },
  { name: "ICAS – Indian Cultural Association Switzerland", url: "https://icas-online.com", desc: "Cultural events, Diwali, Holi, and community support for Indians in the Basel region.", city: "Basel" },
  { name: "Hindu Swayamsevak Sangh Switzerland", url: "https://hssworld.org", desc: "Cultural and spiritual activities — shakha, yoga, and Hindu cultural programs across Switzerland.", city: "Nationwide" },
  { name: "TeluguSwiss Association", url: "https://teluguswiss.org", desc: "Telugu-speaking Indian community — Ugadi, Diwali, cultural events, and networking across Switzerland.", city: "Nationwide" },
  { name: "Indian Student Association ETH Zurich (InSAZ)", url: "https://blogs.ethz.ch/insaz/", desc: "Student community at ETH with cultural events, mentorship, and academic networking.", city: "Zurich" },
  { name: "PrangaN@Swiss", url: "https://pranganswiss.org", desc: "Bengali community organises authentic Durga Puja in Lausanne with pandal, prasad, and cultural programs.", city: "Lausanne" },
  { name: "SwissPuja", url: "#", desc: "Annual Durga Puja celebration held at Schwerzisaal, Langnau am Albis — five days of authentic puja.", city: "Langnau am Albis" },
  { name: "Gujarati Samaj Switzerland", url: "https://www.facebook.com/groups/gujarati.switzerland/", desc: "Gujarati cultural events, Navratri Garba, and Diwali meetups across Switzerland.", city: "Nationwide" },
  { name: "Maharashtra Mandal Switzerland", url: "#", desc: "Celebrating Maharashtrian culture — Ganesh Chaturthi, Diwali, and Gudi Padwa.", city: "Zurich" },
  { name: "Punjabi Cultural Association Switzerland", url: "#", desc: "Vaisakhi celebrations, Bhangra evenings, and cultural programs.", city: "Zurich/Basel" },
];

const TEMPLES = [
  { name: "Arulmihu Sivan Temple Zurich", subtitle: "Saiva Thamil Sangam Switzerland", url: "https://sivankovil.ch", city: "Zurich (Glatbrugg)", contact: "info@sivankovil.ch | +41 44 371 02 42" },
  { name: "ISKCON Krishna Temple Zurich", subtitle: "Hare Krishna Community", url: "https://krishna.ch", city: "Zurich", contact: "" },
  { name: "Sri Rajeswari Ambal Temple Basel", subtitle: "Tamil Hindu Temple", url: "#", city: "Basel", contact: "" },
  { name: "BAPS Swaminarayan Mandir", subtitle: "BAPS Swaminarayan Sanstha", url: "https://baps.org", city: "Zurich", contact: "" },
  { name: "Art of Living Switzerland", subtitle: "Sri Sri Ravi Shankar Foundation", url: "https://artofliving.org/ch-en", city: "Nationwide", contact: "" },
  { name: "Chinmaya Mission Switzerland", subtitle: "Vedanta and spiritual education", url: "https://chinmayamission.com", city: "Zurich/Geneva", contact: "" },
  { name: "Arya Samaj Switzerland", subtitle: "Vedic traditions, havan, and pujas", url: "#", city: "Zurich", contact: "" },
  { name: "Brahma Kumaris Switzerland", subtitle: "Raja Yoga meditation centres", url: "https://brahmakumaris.org", city: "Nationwide", contact: "" },
];

const WOMEN_GROUPS = [
  { name: "Indian Women's Network Switzerland", url: "#", desc: "Professional networking, mentorship, and social events for Indian women across Switzerland." },
  { name: "Desi Moms Zurich", url: "https://www.facebook.com/groups/desimomszurich/", desc: "Support group for Indian mothers in Zurich — parenting tips, schools, and children's activities." },
  { name: "Indian Women Connect Geneva", url: "#", desc: "Social club and professional network for Indian women in the Lake Geneva region." },
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
            Connect with 25,000+ Indians across Switzerland — through associations, temples, women&apos;s networks, student groups, and cultural communities.
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
              { icon: <Users className="w-6 h-6" />, value: "25,000+", label: "Indians in Switzerland" },
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
                href={a.url === "#" ? undefined : a.url}
                target={a.url !== "#" ? "_blank" : undefined}
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
                href={t.url === "#" ? undefined : t.url}
                target={t.url !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center text-lg" style={{ background: "rgba(139,92,246,0.15)" }}>
                  🛕
                </div>
                <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors mb-1">{t.name}</h3>
                <p className="text-sm text-slate-500 mb-2">{t.subtitle}</p>
                <span className="text-xs text-purple-400 font-medium">{t.city}</span>
                {t.contact && <p className="text-xs text-slate-600 mt-1">{t.contact}</p>}
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
                href={w.url === "#" ? undefined : w.url}
                target={w.url !== "#" ? "_blank" : undefined}
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
              { name: "InSAZ – Indian Student Association ETH Zurich", url: "https://blogs.ethz.ch/insaz/", uni: "ETH Zurich" },
              { name: "EPFL Indian Student Association", url: "https://www.epfl.ch/campus/associations/list/aie/", uni: "EPFL Lausanne" },
              { name: "UZH Indian Student Society", url: "#", uni: "University of Zurich" },
              { name: "University of Bern Indian Students", url: "#", uni: "University of Bern" },
              { name: "University of Geneva Indian Society", url: "#", uni: "University of Geneva" },
              { name: "University of Basel Indian Association", url: "#", uni: "University of Basel" },
            ].map((s) => (
              <a
                key={s.name}
                href={s.url === "#" ? undefined : s.url}
                target={s.url !== "#" ? "_blank" : undefined}
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
