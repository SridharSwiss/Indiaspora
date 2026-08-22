import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, TrendingUp, Briefcase, Users, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Business & Career",
  description: "Advance your career and grow your business in Switzerland — networking, jobs, startups, and professional services for the Indian community.",
};

const NETWORKS = [
  { name: "SICC – Swiss Indian Chamber of Commerce", url: "https://sicc.ch", desc: "The premier Swiss-Indian business chamber — trade facilitation, networking events, and bilateral trade support between India and Switzerland.", type: "Chamber" },
  { name: "TiE Zurich – The Indus Entrepreneurs", url: "https://tie.org/chapter/tie-zurich/", desc: "Global network for Indian entrepreneurs with mentorship, startup support, and investor connections. Strong chapter in Zurich.", type: "Entrepreneur Network" },
  { name: "Namaste Switzerland Business Network", url: "https://namasteswitzerland.ch", desc: "Business listings and networking opportunities for Indians in Switzerland — directory and community platform.", type: "Network" },
  { name: "SICC Events & Forums", url: "https://sicc.ch/events", desc: "Annual Swiss-India Business Forums and bilateral events connecting Swiss and Indian business leaders across sectors.", type: "Forum" },
  { name: "NASSCOM Switzerland Chapter", url: "https://nasscom.in", desc: "Indian IT industry association — technology networking, talent, and career opportunities in Switzerland's tech sector.", type: "Tech Network" },
  { name: "Swissnex India", url: "https://swissnex.org/india/", desc: "Swiss government innovation hub bridging Switzerland and India — startup programs, research collaboration, and talent exchange.", type: "Innovation Hub" },
];

const JOB_RESOURCES = [
  { name: "Jobs.ch", url: "https://www.jobs.ch", desc: "Switzerland's largest job portal — search by field, location, and language requirement." },
  { name: "LinkedIn Switzerland", url: "https://www.linkedin.com", desc: "Professional networking — join groups like 'Indian Professionals in Switzerland' for community connections." },
  { name: "Indeed Switzerland", url: "https://www.indeed.ch", desc: "Job search across all industries and experience levels in Switzerland." },
  { name: "ETH Zurich Career Center", url: "https://www.careercenter.ethz.ch", desc: "Careers portal for ETH students, graduates, and alumni across tech and research sectors." },
  { name: "EPFL Career Center", url: "https://career.epfl.ch", desc: "Jobs and internships for EPFL students and alumni — strong in deep tech and engineering." },
  { name: "Xing", url: "https://www.xing.com", desc: "German-speaking professional network popular in Switzerland, Germany, and Austria." },
];

const STARTUPS = [
  { name: "ETH Zurich Innovation & Entrepreneurship", url: "https://ethz.ch/en/industry-and-society/innovation.html", desc: "ETH's startup ecosystem — one of Europe's strongest deep-tech incubators with 500+ spinoffs." },
  { name: "Switzerland Innovation Park", url: "https://www.switzerland-innovation.com", desc: "National network of 5 innovation parks at Zurich, Basel, Bern, Western Switzerland, and Ticino." },
  { name: "Venturelab", url: "https://venturelab.swiss", desc: "Startup education and acceleration programs across Switzerland — programmes for founders at all stages." },
  { name: "Swiss Startup Association", url: "https://swissstartupassociation.ch", desc: "Community and advocacy for Swiss startups — networking events and policy engagement." },
  { name: "India-Swiss Startup Bridge", url: "https://startupindia.gov.in/content/sih/en/international/india-swiss_startup_bridge.html", desc: "Bilateral startup collaboration programme by Startup India and Switzerland — grants, mentoring, and market access." },
];

export default function BusinessPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-grid opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">Business & Career</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            Grow Your Career <span className="gradient-text">in Switzerland</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Networking chambers, job resources, startup ecosystems, and professional services — everything you need to succeed in Swiss business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <a href="#networking" className="btn btn-primary">
              Find Networks <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#jobs" className="btn btn-outline">Job Resources</a>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Stats */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, value: "CHF 22.4bn", label: "India-Swiss Trade (2024)" },
              { icon: <Users className="w-6 h-6" />, value: "10+", label: "Indian Business Networks" },
              { icon: <Briefcase className="w-6 h-6" />, value: "500+", label: "Businesses Listed" },
              { icon: <Lightbulb className="w-6 h-6" />, value: "#8", label: "Global Startup Ecosystem" },
            ].map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <div className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-teal-400" style={{ background: "rgba(20,184,166,0.1)" }}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Trade Context */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-6 md:p-8" style={{ borderColor: "rgba(20,184,166,0.2)" }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">India-EFTA TEPA</div>
                <p className="text-sm text-slate-400">The India-EFTA Trade and Economic Partnership Agreement entered into force in <strong className="text-white">October 2025</strong> — opening new opportunities for Swiss-Indian business.</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">Work Permits 2025–26</div>
                <p className="text-sm text-slate-400">Switzerland quota for non-EU workers: <strong className="text-white">4,500 B permits + 4,000 L permits</strong> per year. Employer sponsorship required for Indians.</p>
              </div>
              <div>
                <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">Tech Expansion</div>
                <p className="text-sm text-slate-400">Infosys is expanding at The Circle, Zurich Airport. Switzerland ranks <strong className="text-white">#8 globally</strong> in startup ecosystems with CHF 1.47bn raised in H1 2025.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Networking */}
      <section id="networking" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Networking</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Business Networks & Chambers</h2>
            <p className="text-slate-400 text-lg">Connect with Swiss and Indian business communities through these key organisations.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {NETWORKS.map((n) => (
              <a
                key={n.name}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full text-teal-300 mb-3 inline-block" style={{ background: "rgba(20,184,166,0.12)" }}>
                      {n.type}
                    </span>
                    <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">{n.name}</h3>
                    <p className="text-sm text-slate-400">{n.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 shrink-0 mt-1 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Jobs */}
      <section id="jobs" className="py-20 pattern-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Jobs & Recruitment</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Job Resources</h2>
            <p className="text-slate-400 text-lg">Switzerland is one of Europe&apos;s highest-paying job markets. Here&apos;s where to find opportunities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {JOB_RESOURCES.map((j) => (
              <a
                key={j.name}
                href={j.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{j.name}</h3>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-indigo-400 shrink-0 transition-colors" />
                </div>
                <p className="text-sm text-slate-400">{j.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Startups */}
      <section id="startups" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="tag">Startups</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 mb-3">Startup Ecosystem</h2>
            <p className="text-slate-400 text-lg">Switzerland ranks #8 globally in startup ecosystems. Indians are building here too — with CHF 1.47bn raised in H1 2025.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {STARTUPS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-6 group block"
              >
                <div className="text-2xl mb-3">🚀</div>
                <h3 className="font-bold text-white group-hover:text-indigo-400 transition-colors mb-2">{s.name}</h3>
                <p className="text-sm text-slate-400">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">💼</div>
            <h2 className="text-3xl font-bold text-white mb-4">List Your Business</h2>
            <p className="text-slate-400 mb-8">
              Running a business or professional service in Switzerland? Get discovered by 25,000+ Indians.
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=List%20My%20Business" className="btn btn-primary">
              Submit Your Business <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
