import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Festivals in Switzerland 2026",
  description: "Diwali, Holi, Navratri, Durga Puja, Pongal — celebrate India's festivals with the Swiss-Indian community.",
  openGraph: {
    title: "Indian Festivals in Switzerland 2026 | IndiaSwiss",
    description: "Diwali, Holi, Navratri, Durga Puja, Pongal — celebrate India's festivals with the Swiss-Indian community.",
  },
};

const festivals = [
  {
    name: "Diwali Celebration — IAGZ",
    date: "October / November 2026",
    location: "Zurich",
    organiser: "IAGZ (Indian Association of Greater Zurich)",
    organiserUrl: "https://iagz.ch",
    desc: "Annual Diwali celebration by IAGZ — one of the flagship events of the Indian community in Zurich. Cultural performances, food, and festivities. More than a third of attendees are non-Indian Indophiles. Over 100 member families. Source: iagz.ch",
    type: "Festival",
  },
  {
    name: "ICAS Diwali Night",
    date: "November 2026",
    location: "Basel",
    organiser: "ICAS (Indian Community Association Switzerland)",
    organiserUrl: null,
    desc: "Diwali celebration organised by ICAS in Basel. Cultural performances, Indian food, and community gathering for the Indian diaspora in Basel and the broader region. Past editions held at venues in Basel city.",
    type: "Festival",
  },
  {
    name: "IAGZ Holi Rang Barse",
    date: "March 2026 (29 March 2026)",
    location: "Zurich",
    organiser: "IAGZ (Indian Association of Greater Zurich)",
    organiserUrl: "https://iagz.ch",
    desc: "Holi celebration by IAGZ — 'Rang Barse' Holi event with organic colours, music, and community fun. Also organised with the Embassy of India. Additional Holi events across Switzerland: Sifaa Holi Fest (Adliswil), IAL Holi (Lausanne), BAB Holi Fest (Bern), IAB (Baden). Source: iagz.ch",
    type: "Festival",
  },
  {
    name: "IAGZ Raas Garba / Navratri",
    date: "October 2026",
    location: "Zurich",
    organiser: "IAGZ (Indian Association of Greater Zurich)",
    organiserUrl: "https://iagz.ch",
    desc: "IAGZ's annual Dandiya and Garba night — one of Switzerland's largest Navratri celebrations. Traditional chaniya choli and kurta-pyjama dress encouraged. Live music and community dancing. Source: iagz.ch",
    type: "Cultural",
  },
  {
    name: "Durga Puja — SwissPuja",
    date: "September / October 2026",
    location: "Zurich & Switzerland-wide",
    organiser: "SwissPuja (non-profit, est. 2003)",
    organiserUrl: "https://www.swisspuja.org/",
    desc: "SwissPuja is a non-profit socio-cultural organisation committed to promoting Indian culture in Switzerland, celebrating Durga Puja with traditional pandal, daily pujas, and cultural programmes. Multiple Swiss cities participate. Source: swisspuja.org",
    type: "Puja",
  },
  {
    name: "Durga Puja — Prangan@Swiss",
    date: "September / October 2026",
    location: "Le Mont-sur-Lausanne (Lausanne area)",
    organiser: "PrangaN@Swiss",
    organiserUrl: "https://www.pranganswiss.org",
    desc: "Bengali community Durga Pujo celebration held at Petit-Mont, Grande Salle (Place du Petit-Mont 2, 1052 Le Mont-sur-Lausanne). Shashthi to Dashami programme with traditional rituals, dhunuchi dance, and cultural performances.",
    type: "Puja",
  },
  {
    name: "Ganesh Chaturthi / Ganesh Utsav",
    date: "August 2026",
    location: "Geneva & Switzerland-wide",
    organiser: "Bruhan Maharashtra Mandal Switzerland",
    organiserUrl: "https://bruhan-mms.org/",
    desc: "10-day Ganesh Utsav celebration organised by Bruhan Maharashtra Mandal Switzerland. Aarti, modak prasad, and cultural events culminating in symbolic Ganesh visarjan (immersion). Events documented since 2021. Source: bruhan-mms.org",
    type: "Festival",
  },
  {
    name: "India Fest & Margazhi Utsav",
    date: "December 2026 (3 days)",
    location: "Zurich",
    organiser: "Embassy of India & SIFAA",
    organiserUrl: "https://www.indembassybern.gov.in",
    desc: "Three-day festival combining Indian classical arts with film screenings and cultural programmes. The 2024 edition ran 6–8 December in Zurich in collaboration with the Swiss India Fine Arts Association (SIFAA). Source: indembassybern.gov.in",
    type: "Arts",
  },
  {
    name: "India Day — Independence Day",
    date: "August 15, 2026",
    location: "Embassy of India, Berne",
    organiser: "Embassy of India",
    organiserUrl: "https://www.indembassybern.gov.in",
    desc: "India Independence Day hosted by the Embassy of India in Berne. Flag hoisting ceremony, cultural programme, and reception for the Indian community. Indian Associations across Switzerland also hold their own Independence Day events.",
    type: "National",
  },
  {
    name: "Pongal Celebration",
    date: "January 2026",
    location: "Geneva & Zurich",
    organiser: "Tamil Community Switzerland",
    organiserUrl: null,
    desc: "Tamil harvest festival (Pongal / Thai Pongal) celebrated by the large Swiss-Tamil community. Traditional pongal cooking, kolam competitions, folk music, and cultural performances. Switzerland has one of the largest Tamil diaspora communities in Europe.",
    type: "Festival",
  },
  {
    name: "Lohri Night",
    date: "January 13, 2026",
    location: "Zurich",
    organiser: "Punjabi & North Indian Community",
    organiserUrl: null,
    desc: "Traditional bonfire, bhangra, and gidda marking the end of winter. Rewri, popcorn, and festive food. Organised informally by Punjabi community groups across Swiss cities.",
    type: "Festival",
  },
  {
    name: "Eid & Iftar Gathering",
    date: "March 2026",
    location: "Zurich",
    organiser: "Muslim Indian Community",
    organiserUrl: null,
    desc: "Community Iftar dinner open to all — celebrating Ramadan and India's shared cultural heritage with traditional food from India's Muslim culinary traditions.",
    type: "Community",
  },
];

const typeColors: Record<string, string> = {
  Festival: "bg-orange-500/20 text-orange-400",
  Cultural: "bg-purple-500/20 text-purple-400",
  Puja: "bg-rose-500/20 text-rose-400",
  National: "bg-blue-500/20 text-blue-400",
  Arts: "bg-teal-500/20 text-teal-400",
  Community: "bg-green-500/20 text-green-400",
};

export default function FestivalsPage() {
  return (
    <div>
      <PageHeader
        title="Indian Festivals in Switzerland"
        subtitle="India's vibrant festival calendar comes alive in Switzerland — from Diwali Mela in Zurich to Pongal in Geneva."
        badge="100+ Events / Year"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Festivals & Events" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {festivals.map((f) => (
            <div key={f.name} className="glass rounded-2xl p-6 card-hover">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 mr-3">
                  <h3 className="font-semibold" style={{ color: "var(--text)" }}>{f.name}</h3>
                  <p className="text-xs text-rose-400 mt-0.5">{f.date} &middot; {f.location}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${typeColors[f.type] ?? " text-white/60"}`}>{f.type}</span>
              </div>
              <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>{f.desc}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs" style={{ color: "var(--text-3)" }}>Organised by {f.organiser}</p>
                {f.organiserUrl && (
                  <a href={f.organiserUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-rose-400 hover:text-rose-300">
                    Website →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-6 border border-rose-500/20">
          <p className="text-sm" style={{ color: "var(--text-2)" }}>
            <span className="text-rose-400 font-semibold">Stay updated:</span> Most festival announcements come through{" "}
            <a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">IAGZ (iagz.ch)</a>,{" "}
            <a href="https://indianassociationgeneva.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">Indian Association Geneva</a>{" "}
            (est. 1947, 500+ members), and the{" "}
            <a href="https://www.indembassybern.gov.in/page/diaspora-events/" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">Embassy of India diaspora events page</a>.
            {" "}SwissDesi (formerly IndianMomsZurich) also maintains a comprehensive community events calendar at swissdesi.ch.
          </p>
        </div>
      </div>
    </div>
  );
}
