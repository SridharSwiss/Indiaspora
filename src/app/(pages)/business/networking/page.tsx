import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Business Networking for Indians in Switzerland",
  description: "Connect with Indian professionals through SICC, TiE Zurich, SIPN, and the Swiss-Indian business community.",
  openGraph: {
    title: "Business Networking for Indians in Switzerland | IndiaSwiss",
    description: "Connect with Indian professionals through SICC, TiE Zurich, SIPN, and the Swiss-Indian business community.",
  },
};

const chambers = [
  {
    name: "Swiss-Indian Chamber of Commerce (SICC)",
    url: "https://sicc.ch",
    founded: "1985",
    members: "400+ members",
    desc: "The premier bilateral trade chamber celebrating its 40th anniversary in 2025. Offices in Zurich and Mumbai. Hosts 50+ events annually and played a pivotal role in getting the EFTA–India Trade Agreement signed in 2024.",
    tag: "Chamber",
  },
  {
    name: "TiE Zurich",
    url: "https://zurich.tie.org",
    founded: "2000s",
    members: "Global 15,000+",
    desc: "The Indus Entrepreneurs — connecting Indian-origin founders, investors, and mentors in Switzerland. Monthly events, annual TiECon, and 1:1 mentoring for startups.",
    tag: "Startups",
  },
  {
    name: "Swiss India Professional Network (SIPN)",
    url: "https://sipn.ch",
    founded: "2024",
    members: "Growing",
    desc: "Newly launched network bringing together Indian-origin professionals, entrepreneurs, researchers, and business leaders with a Swiss connection. First event held in Basel in collaboration with Walter Science.",
    tag: "Network",
  },
  {
    name: "SICC Young Professionals Network",
    url: "https://sicc.ch/young-professionals-network/",
    founded: "Via SICC",
    members: "Students & early-career",
    desc: "Brings together India-enthusiastic students, early-career professionals, emerging leaders, and founders. Co-organises the annual Swiss-Indian Entrepreneurship Day with Venturelab and Swissnex.",
    tag: "Youth",
  },
];

const events = [
  { name: "Emirates Aircraft Visit (SICC)", timing: "2 Sep 2026", desc: "SICC member event at Zurich Airport featuring an Emirates aircraft visit and networking.", url: "https://sicc.ch/events/" },
  { name: "Market Focus India — with CCIG", timing: "8 Sep 2026", desc: "SICC and CCIG (Geneva Chamber of Commerce) co-hosted session on doing business in India. Held in Geneva.", url: "https://sicc.ch/events/" },
  { name: "Rumours vs Facts: Manufacturing in India", timing: "23 Sep 2026", desc: "SICC roundtable addressing common misconceptions about setting up manufacturing operations in India.", url: "https://sicc.ch/events/" },
  { name: "Swiss-Indian Entrepreneurship Day", timing: "February (Annual)", desc: "Annual event by SICC, Venturelab, ZHAW, and Swissnex India featuring 20 Swiss and Indian startup pitches and the Swiss-Indian Ambassador of Innovation award.", url: "https://www.venturelab.swiss/swiss_indian_day" },
  { name: "Indo-Swiss Sustainability Awards 2026", timing: "28 Nov 2026", desc: "SICC flagship sustainability awards recognising outstanding examples of Swiss-Indian cooperation in sustainable business.", url: "https://sicc.ch/events/" },
  { name: "TiEcon Switzerland", timing: "Autumn (Annual)", desc: "Annual conference for Indian-origin entrepreneurs. Startup pitches, investor panels, and networking across Zurich.", url: "https://zurich.tie.org" },
];

const linkedin = [
  { name: "Indian Association of Greater Zurich (IAGZ)", url: "https://iagz.ch", members: "100+ families", desc: "Formed in 2010, IAGZ is the main social and cultural platform for the Indian community in the Greater Zurich Area. Non-political, open to all age groups and regions of India." },
  { name: "Indian Association Geneva", url: "https://indianassociationgeneva.com", members: "500+ members", desc: "The largest and most active Indian association in Switzerland. Serves as a social and cultural forum for Indians in Geneva and fosters friendship with the Swiss and international community." },
  { name: "Swiss-Indian Chamber of Commerce", url: "https://www.linkedin.com/company/swiss---indian-chamber-of-commerce/", members: "4,800+ LinkedIn followers", desc: "Official SICC LinkedIn page — announcements, events, trade mission updates, and member spotlights." },
];

export default function NetworkingPage() {
  return (
    <div>
      <PageHeader
        title="Networking & Chambers"
        subtitle="Switzerland's Indian professional community is built on strong bilateral institutions, elite startup networks, and active industry forums."
        badge="Business Networking"
        gradient="from-teal-500 to-cyan-600"
        breadcrumbs={[
          { label: "Business & Career", href: "/business" },
          { label: "Networking & Chambers" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Chambers & Business Bodies</h2>
          <p className=" mb-8" style={{ color: "var(--text-2)" }}>Established institutions driving Switzerland–India economic relations</p>
          <div className="grid md:grid-cols-2 gap-5">
            {chambers.map((c) => (
              <a key={c.name} href={c.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 card-hover block group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold group-hover:text-teal-400 transition-colors flex-1 mr-3" style={{ color: "var(--text)" }}>{c.name}</h3>
                  <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full shrink-0">{c.tag}</span>
                </div>
                <div className="flex gap-4 mb-3">
                  <span className="text-xs " style={{ color: "var(--text-2)" }}>Est. {c.founded}</span>
                  <span className="text-xs " style={{ color: "var(--text-2)" }}>{c.members}</span>
                </div>
                <p className="text-sm " style={{ color: "var(--text-2)" }}>{c.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Key Annual Events</h2>
          <p className=" mb-8" style={{ color: "var(--text-2)" }}>Put these on your calendar</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((e) => {
              const Wrapper = e.url ? "a" : "div";
              const props = e.url ? { href: e.url, target: "_blank", rel: "noopener noreferrer" } : {};
              return (
                <Wrapper key={e.name} {...props} className="glass rounded-2xl p-5 card-hover block group" style={{ textDecoration: "none" }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm group-hover:text-teal-400 transition-colors" style={{ color: "var(--text)" }}>{e.name}</h3>
                    <span className="text-xs text-teal-400 ml-2 shrink-0">{e.timing}</span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{e.desc}</p>
                  {e.url && <span className="text-xs text-teal-400 mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</span>}
                </Wrapper>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Community Organisations</h2>
          <p className=" mb-8" style={{ color: "var(--text-2)" }}>Associations, LinkedIn pages, and digital networks</p>
          <div className="space-y-4">
            {linkedin.map((l) => (
              <a key={l.name} href={l.url} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-5 card-hover flex items-start justify-between gap-4 block group">
                <div>
                  <h3 className="font-semibold group-hover:text-teal-400 transition-colors mb-1" style={{ color: "var(--text)" }}>{l.name}</h3>
                  <p className="text-sm " style={{ color: "var(--text-2)" }}>{l.desc}</p>
                </div>
                <span className="text-xs  shrink-0" style={{ color: "var(--text-2)" }}>{l.members}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-6 border border-teal-500/20">
          <h3 className="text-base font-semibold text-teal-400 mb-2">Tip: How to join SICC</h3>
          <p className="text-sm " style={{ color: "var(--text-2)" }}>Annual SICC membership starts at CHF 200 for individuals. Members get access to 50+ events per year, the member directory, trade mission invitations, and the SICC newsletter. The 2024 EFTA–India Trade Agreement creates new opportunities for member companies. Apply at <a href="https://sicc.ch" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 underline">sicc.ch</a>.</p>
        </div>
      </div>
    </div>
  );
}
