import type { Metadata } from "next";
import { ArrowRight, ExternalLink, TrendingUp, Briefcase, Users, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Business & Career",
  description: "Advance your career and grow your business in Switzerland — networking, jobs, startups, and professional services for the Indian community.",
};

const NETWORKS = [
  { name: "SICC – Swiss Indian Chamber of Commerce", url: "https://sicc.ch", desc: "The premier Swiss-Indian business chamber — trade facilitation, bilateral investment forums, networking events, and advocacy for Indian businesses in Switzerland.", type: "Chamber" },
  { name: "India Business Switzerland (IBS)", url: "https://india-business.ch", desc: "Business platform promoting Indian-Swiss economic ties — investment facilitation, market entry support, and partnership opportunities.", type: "Business Network" },
  { name: "TiE Zurich", url: "https://www.tie-zurich.ch", desc: "The Indus Entrepreneurs Zurich chapter — global network supporting Indian entrepreneurs with mentorship, funding connections, and startup ecosystem access.", type: "Entrepreneur Network" },
  { name: "Namaste Switzerland Business", url: "https://namasteswitzerland.ch", desc: "Business directory and networking platform for Indians in Switzerland — listings, events calendar, and community news.", type: "Directory" },
  { name: "Swiss Indo Business Forum", url: "https://sicc.ch/events", desc: "Annual forum co-organised by SICC connecting Swiss and Indian business leaders — panel discussions, B2B meetings, and trade sessions.", type: "Forum" },
  { name: "NASSCOM Switzerland Chapter", url: "https://nasscom.in", desc: "Indian IT industry association's Switzerland presence — technology networking, policy advocacy, and career opportunities in Swiss tech.", type: "Tech Network" },
];

const JOB_RESOURCES = [
  { name: "Jobs.ch", url: "https://www.jobs.ch", desc: "Switzerland's largest job portal — search by field, salary band, location, and language requirement. Strong in finance, pharma, and tech." },
  { name: "LinkedIn Switzerland", url: "https://www.linkedin.com", desc: "Professional networking — join 'Indian Professionals in Switzerland' and 'Indians in Zurich' groups for community job leads." },
  { name: "Indeed Switzerland", url: "https://www.indeed.ch", desc: "Wide coverage across all industries and experience levels — good for international companies with English-language roles." },
  { name: "ETH Zurich Career Center", url: "https://www.careercenter.ethz.ch", desc: "Careers portal for ETH graduates, alumni, and industry partners — top roles in deep tech, pharma, and finance." },
  { name: "EPFL Career Center", url: "https://career.epfl.ch", desc: "Jobs, internships, and startup connections for EPFL students and alumni — strong in life sciences and engineering." },
  { name: "Xing", url: "https://www.xing.com", desc: "German-speaking professional network popular in Switzerland, Germany, and Austria — useful for Swiss-German speaking market roles." },
];

const STARTUPS = [
  { name: "ETH Zurich Innovation & Entrepreneurship", url: "https://ethz.ch/en/industry-and-society/innovation.html", desc: "ETH's startup ecosystem — one of Europe's strongest deep-tech incubators producing 30+ startups per year, including several by Indian founders." },
  { name: "Switzerland Innovation Park", url: "https://www.switzerland-innovation.com", desc: "National network of 5 innovation parks across Switzerland — co-working, funding, and R&D partnerships with Swiss universities and corporates." },
  { name: "Venturelab", url: "https://www.venturelab.ch", desc: "Startup education and acceleration — flagship Venture program for ETH/EPFL spinoffs, coaching in business model and fundraising." },
  { name: "Swiss Startup Association", url: "https://swissstartupassociation.ch", desc: "Community, advocacy, and networking for Swiss startups — annual Swiss Startup Day and access to investor networks." },
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
            Networking chambers, job resources, startup ecosystems, and professional services — everything you need to succeed in one of the world&apos;s most competitive business environments.
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
              { icon: <TrendingUp className="w-6 h-6" />, value: "CHF 33bn", label: "India-Swiss Trade (2023)" },
              { icon: <Users className="w-6 h-6" />, value: "15+", label: "Indian Business Networks" },
              { icon: <Briefcase className="w-6 h-6" />, value: "500+", label: "Businesses Listed" },
              { icon: <Lightbulb className="w-6 h-6" />, value: "50+", label: "Indian-Founded Startups" },
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
            <p className="text-slate-400 text-lg">Switzerland offers some of Europe&apos;s highest salaries. Here&apos;s where Indians find the best opportunities.</p>
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
            <p className="text-slate-400 text-lg">Switzerland ranks #2 globally for innovation (Global Innovation Index 2023). Indians are building here too.</p>
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
              Running a business or professional service in Switzerland? Get discovered by 38,000+ Indians.
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
