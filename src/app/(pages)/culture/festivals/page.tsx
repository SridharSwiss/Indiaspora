import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Indian Festivals in Switzerland 2026 — Diwali Zurich, Navratri, Durga Puja",
  description: "Indian festivals 2026: Diwali celebration Zurich, Navratri Garba night, Durga Puja SwissPuja Basel/Zurich, Holi Lausanne Lake Geneva, Pongal — dates, venues, and event tickets for the Swiss Indian community.",
  keywords: ["Diwali Zurich 2026", "Navratri Garba Switzerland", "Durga Puja Switzerland 2026", "Indian festival calendar Switzerland 2026", "Holi party Lausanne", "Diwali celebration Zurich tickets", "Navratri Dandiya Geneva", "SwissPuja Durga Puja schedule"],
  openGraph: {
    title: "Diwali Zurich, Navratri & Indian Festivals 2026 | IndiaSwiss",
    description: "Diwali Zurich 2026, Navratri Garba night, SwissPuja Durga Puja, Holi Lausanne — dates, venues, and event info for the Swiss Indian community.",
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
    organiserUrl: "https://icas-online.com",
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
    organiserUrl: "https://www.google.com/search?q=pongal%20tamil%20sangam%20switzerland",
    desc: "Tamil harvest festival (Pongal / Thai Pongal) celebrated by the large Swiss-Tamil community. Traditional pongal cooking, kolam competitions, folk music, and cultural performances. Switzerland has one of the largest Tamil diaspora communities in Europe.",
    type: "Festival",
  },
  {
    name: "Lohri Night",
    date: "January 13, 2026",
    location: "Zurich",
    organiser: "Punjabi & North Indian Community",
    organiserUrl: "https://www.google.com/search?q=lohri%20zurich%20punjabi",
    desc: "Traditional bonfire, bhangra, and gidda marking the end of winter. Rewri, popcorn, and festive food. Organised informally by Punjabi community groups across Swiss cities.",
    type: "Festival",
  },
  {
    name: "Eid & Iftar Gathering",
    date: "March 2026",
    location: "Zurich",
    organiser: "Muslim Indian Community",
    organiserUrl: "https://www.google.com/search?q=indian%20iftar%20zurich",
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
  const eventSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "IAGZ Diwali Gala 2026",
      "startDate": "2026-11-14",
      "endDate": "2026-11-14",
      "location": { "@type": "Place", "name": "Mattenhofsaal, Zurich", "address": { "@type": "PostalAddress", "addressLocality": "Zurich", "addressCountry": "CH" } },
      "organizer": { "@type": "Organization", "name": "Indian Association of Greater Zurich (IAGZ)", "url": "https://iagz.ch" },
      "description": "IAGZ's annual Diwali Gala with cultural performances, gourmet Indian dinner, and awards.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "IAGZ Navratri Garba 2026",
      "startDate": "2026-10-25",
      "endDate": "2026-10-25",
      "location": { "@type": "Place", "name": "Stadthalle Dietikon", "address": { "@type": "PostalAddress", "addressLocality": "Dietikon", "addressCountry": "CH" } },
      "organizer": { "@type": "Organization", "name": "Indian Association of Greater Zurich (IAGZ)", "url": "https://iagz.ch" },
      "description": "IAGZ's annual Dandiya and Garba night — one of Switzerland's largest Navratri celebrations with live music and community dancing.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "SwissPuja Durga Puja 2026",
      "startDate": "2026-10-16",
      "endDate": "2026-10-21",
      "location": { "@type": "Place", "name": "Schwerzisaal, Langnau am Albis", "address": { "@type": "PostalAddress", "addressLocality": "Langnau am Albis", "addressCountry": "CH" } },
      "organizer": { "@type": "Organization", "name": "SwissPuja", "url": "https://www.swisspuja.org" },
      "description": "SwissPuja's annual Durga Puja celebration with traditional pandal, daily pujas, and cultural programmes.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "SICC Diwali Evening 2026",
      "startDate": "2026-11-04",
      "endDate": "2026-11-04",
      "location": { "@type": "Place", "name": "Prime Tower Zurich", "address": { "@type": "PostalAddress", "addressLocality": "Zurich", "addressCountry": "CH" } },
      "organizer": { "@type": "Organization", "name": "Swiss Indian Chamber of Commerce (SICC)", "url": "https://sicc.ch" },
      "description": "SICC's annual Diwali Evening — celebrating the festival of lights with the Swiss-Indian business community.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    },
    {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": "InBa India Basel Festival 2026",
      "startDate": "2026-05-01",
      "endDate": "2026-06-30",
      "location": { "@type": "Place", "name": "Theater Basel", "address": { "@type": "PostalAddress", "addressLocality": "Basel", "addressCountry": "CH" } },
      "organizer": { "@type": "Organization", "name": "InBa India Basel", "url": "https://inba.ch" },
      "description": "InBa India Basel Festival — celebrating Indian culture, arts, and performances in Basel.",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchemas) }} />
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
            <a key={f.name} href={f.organiserUrl!} target="_blank" rel="noopener noreferrer" className="glass rounded-2xl p-6 card-hover block group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 mr-3">
                  <h3 className="font-semibold group-hover:text-rose-400 transition-colors" style={{ color: "var(--text)" }}>{f.name}</h3>
                  <p className="text-xs text-rose-400 mt-0.5">{f.date} &middot; {f.location}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${typeColors[f.type] ?? " text-white/60"}`}>{f.type}</span>
              </div>
              <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>{f.desc}</p>
              <p className="text-xs" style={{ color: "var(--text-3)" }}>Organised by {f.organiser}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 glass rounded-2xl p-6 border border-rose-500/20">
          <p className="text-sm" style={{ color: "var(--text-2)" }}>
            <span className="text-rose-400 font-semibold">Stay updated:</span> Most festival announcements come through{" "}
            <a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">IAGZ (iagz.ch)</a>,{" "}
            <a href="https://indianassociationgeneva.com" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">Indian Association Geneva</a>{" "}
            (est. 1947, 500+ members), and the{" "}
            <a href="https://www.indembassybern.gov.in/page/diaspora-events/" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300 underline">Embassy of India diaspora events page</a>.
            {" "}The Embassy of India Berne also maintains a diaspora events calendar at indembassybern.gov.in.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
