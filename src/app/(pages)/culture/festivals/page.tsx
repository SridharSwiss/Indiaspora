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
    name: "Diwali Mela Zurich",
    date: "October 2026",
    location: "Stadthaus Zurich",
    organiser: "IAGZ",
    organiserUrl: "https://iagz.ch",
    desc: "Switzerland's largest Diwali celebration — cultural performances, food stalls, fireworks display, and rangoli competitions. 3,000+ attendees.",
    type: "Festival",
  },
  {
    name: "Holi Festival Basel",
    date: "March 2026",
    location: "Münsterplatz, Basel",
    organiser: "ICAS",
    organiserUrl: null,
    desc: "Festival of colours on Basel's iconic cathedral square. Organic colour powder, live music, dance, and Indian food stalls.",
    type: "Festival",
  },
  {
    name: "Navratri Garba Night",
    date: "October 2026",
    location: "Hallenstadion, Zurich",
    organiser: "Gujarati Samaj",
    organiserUrl: "https://www.gujaratisamaj.ch",
    desc: "Switzerland's largest Garba celebration — live orchestra, traditional chaniya choli dress code, 2,000+ dancers on the floor.",
    type: "Cultural",
  },
  {
    name: "Durga Puja Celebrations",
    date: "October 2026",
    location: "Zurich & Geneva",
    organiser: "Bengali Cultural Society",
    organiserUrl: null,
    desc: "Elaborate Durga Puja pandal with daily pujas, cultural programmes, dhunuchi dance, and traditional prasad for the community.",
    type: "Puja",
  },
  {
    name: "Pongal Celebration",
    date: "January 2026",
    location: "Geneva",
    organiser: "Tamil Sangam Switzerland",
    organiserUrl: null,
    desc: "Tamil harvest festival with traditional pongal cooking, kolam competition, folk music, and cultural performances.",
    type: "Festival",
  },
  {
    name: "India Day Bern",
    date: "August 15, 2026",
    location: "Embassy of India, Bern",
    organiser: "Embassy of India",
    organiserUrl: "https://www.indembassybern.gov.in",
    desc: "India Independence Day hosted by the Embassy. Flag hoisting ceremony, cultural programme, and reception for the Indian community.",
    type: "National",
  },
  {
    name: "Indian Film Festival",
    date: "November 2026",
    location: "Zurich & Geneva",
    organiser: "IndieSwiss Cinema",
    organiserUrl: null,
    desc: "Curated selection of Indian cinema — Bollywood, regional art-house films, and documentaries. Q&As with visiting directors.",
    type: "Arts",
  },
  {
    name: "Eid & Iftar Gathering",
    date: "March 2026",
    location: "Zurich",
    organiser: "Muslim Indian Community",
    organiserUrl: null,
    desc: "Community Iftar dinner open to all — celebrating Ramadan and India's shared cultural heritage with traditional food.",
    type: "Community",
  },
  {
    name: "Lohri Night",
    date: "January 13, 2026",
    location: "Zurich",
    organiser: "Punjabi Cultural Association",
    organiserUrl: null,
    desc: "Traditional bonfire, bhangra, and gidda with rewri, popcorn, and makki roti. Marks the end of winter and harvest season.",
    type: "Festival",
  },
  {
    name: "Ganesh Chaturthi",
    date: "August 2026",
    location: "Nationwide",
    organiser: "Maharashtra Mandal Switzerland",
    organiserUrl: null,
    desc: "10-day celebration culminating in a symbolic Ganesh visarjan (immersion). Aarti, modak prasad, and cultural events.",
    type: "Festival",
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
                  <h3 className="font-semibold text-white">{f.name}</h3>
                  <p className="text-xs text-rose-400 mt-0.5">{f.date} &middot; {f.location}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${typeColors[f.type] ?? "bg-white/10 text-white/60"}`}>{f.type}</span>
              </div>
              <p className="text-sm text-slate-400 mb-3">{f.desc}</p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/40">Organised by {f.organiser}</p>
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
          <p className="text-sm text-slate-300"><span className="text-rose-400 font-semibold">Stay updated:</span> Most festival announcements come through IAGZ (<a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">iagz.ch</a>) and the Indian Association Geneva (<a href="https://indianassociationgeneva.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">indianassociationgeneva.com</a>). Join their mailing lists to get event notifications early.</p>
        </div>
      </div>
    </div>
  );
}
