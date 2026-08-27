import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Women's Network in Switzerland",
  description: "Community networks, official support, and practical resources for Indian women in Switzerland.",
  openGraph: {
    title: "Indian Women's Network in Switzerland | IndiaSwiss",
    description: "Community networks, official support, and practical resources for Indian women in Switzerland.",
  },
};

// Community networks verified via namasteswitzerland.ch, iagz.ch, idcn.info and web search (Aug 2026)
const support: { name: string; url: string | null; city: string; desc: string }[] = [
  { name: "Namaste Switzerland", url: "https://namasteswitzerland.ch", city: "Nationwide", desc: "Online infotainment magazine founded and run by Indian professional women. Mission: Connect. Inform. Integrate. Covers Swiss integration, Indian community profiles, culture and recipes. Officially listed on the Embassy of India Berne website." },
  { name: "IAGZ Women's Wing", url: "https://www.iagz.ch", city: "Zurich", desc: "Women's events, networking lunches and community activities organised under the Indian Association of Greater Zurich." },
  { name: "International Dual Career Network (IDCN)", url: "https://idcn.info", city: "Zurich / Basel", desc: "Active in the Zurich region since 2012 — networking and job-market re-entry support for accompanying spouses and partners, a common first stop for Indian women arriving on a dependant permit." },
  { name: "Professional Women's Group Zürich (PWG)", url: "https://www.pwg-zh.com", city: "Zurich", desc: "International career network for women founded in 1983 — monthly evening events, mentorship and company visits for internationally minded professionals, including many Indian members." },
  { name: "Miyara Women", url: "https://www.miyarahealth.com", city: "Zurich-founded, India + Switzerland", desc: "Femtech platform founded by a Zurich-based biochemist-entrepreneur focused on perimenopause and midlife women's health — symptom guidance, nutrition and mental-health support." },
  { name: "Desi Moms Switzerland", url: null, city: "Nationwide", desc: "WhatsApp and Facebook group for Indian mothers — parenting tips, school advice and local events. No verified standalone website." },
];

const official: { name: string; url: string; city: string; desc: string }[] = [
  { name: "FIZ – Counselling Centre for Women", url: "https://www.fiz-info.ch", city: "Zurich", desc: "Advice and support for migrant women including legal, social and emergency assistance." },
  { name: "Gender Equality – Swiss Confederation", url: "https://www.ebg.admin.ch/ebg/en/home.html", city: "Nationwide", desc: "Official federal office for gender equality — information on rights and anti-discrimination." },
  { name: "SEM – Family Reunification", url: "https://www.sem.admin.ch/sem/en/home/themen/einreise/familiennachzug.html", city: "Nationwide", desc: "Official information on family reunification visas for spouses and dependants." },
  { name: "HEKS – Aid for Refugees and the Poor", url: "https://www.heks.ch/en", city: "Nationwide", desc: "Swiss relief organisation providing counselling and integration support for migrants." },
  { name: "Weisser Ring Switzerland", url: "https://www.weisser-ring.ch", city: "Nationwide", desc: "Victim support organisation — assistance after violence, crime or domestic abuse." },
];

const tips = [
  { title: "Maternity Leave", desc: "Switzerland offers 14 weeks paid maternity leave (80% salary). Paternity leave is 2 weeks. Cantonal supplements may apply." },
  { title: "Childcare & Kita", desc: "Subsidised Kita (day-care) costs vary by canton and income. Register early — waiting lists are common in Zurich and Geneva." },
  { title: "Language Integration", desc: "German/French courses are often subsidised by cantons and employers. Fide.ch offers nationally recognised language tests." },
  { title: "Work Permit for Spouses", desc: "Spouses of B/C permit holders generally have the right to work. Check SEM website for your specific permit category." },
];

export default function WomenPage() {
  return (
    <div>
      <PageHeader
        title="Indian Women's Network in Switzerland"
        subtitle="Community networks, official support organisations, and practical resources for Indian women in Switzerland."
        badge="👩‍🤝‍👩 Women's Community"
        breadcrumbs={[{ label: "Community", href: "/community" }, { label: "Women's Network" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Community Networks</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Indian women's groups and social networks across Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {support.map((s) =>
              s.url ? (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-sm leading-tight group-hover:text-rose-400 transition-colors" style={{ color: "var(--text)" }}>{s.name}</h3>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/20">{s.city}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{s.desc}</p>
                </a>
              ) : (
                <div key={s.name} className="glass rounded-xl p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-sm leading-tight" style={{ color: "var(--text)" }}>{s.name}</h3>
                    <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/20">{s.city}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{s.desc}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Official Support Organisations</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Government and NGO resources for women in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {official.map((o) => (
              <a key={o.name} href={o.url} target="_blank" rel="noopener noreferrer" className="glass rounded-xl p-5 card-hover block group">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-sm leading-tight group-hover:text-rose-400 transition-colors" style={{ color: "var(--text)" }}>{o.name}</h3>
                  <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-rose-500/15 text-rose-400 border border-rose-500/20">{o.city}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{o.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Practical Tips</h2>
          <p className="text-sm mb-6" style={{ color: "var(--text-2)" }}>Key information for Indian women settling in Switzerland</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((t) => (
              <div key={t.title} className="glass rounded-xl p-5">
                <h3 className="font-semibold text-rose-400 text-sm mb-2">{t.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-2)" }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="glass rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>Emergency & Helpline Contacts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div style={{ color: "var(--text-2)" }}>
                <p className="mb-1">Police (all cantons): <span className="font-bold" style={{ color: "var(--text)" }}>117</span></p>
                <p className="mb-1">Ambulance: <span className="font-bold" style={{ color: "var(--text)" }}>144</span></p>
                <p className="mb-1">Domestic violence helpline: <span className="font-bold" style={{ color: "var(--text)" }}>0800 060 060</span></p>
                <p>Dargebotene Hand (emotional support): <span className="font-bold" style={{ color: "var(--text)" }}>143</span></p>
              </div>
              <div style={{ color: "var(--text-2)" }}>
                <p className="mb-2">Embassy of India, Bern:</p>
                <a href="https://www.indembassybern.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm">indembassybern.gov.in</a>
                <p className="mt-3 mb-2">Consulate General of India, Geneva:</p>
                <a href="https://www.cgigeneva.gov.in" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 text-sm">cgigeneva.gov.in</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
