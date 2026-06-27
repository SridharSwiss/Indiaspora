import PageHeader from "@/components/ui/PageHeader";

const calendar = [
  { month: "January", events: [
    { name: "Pongal Celebration", org: "Tamil Sangam Switzerland", location: "Geneva", desc: "Tamil harvest festival with kolam, traditional cooking, cultural programmes" },
    { name: "Lohri Night", org: "Punjabi Cultural Association", location: "Zurich", desc: "Bonfire, bhangra, gidda, rewri and popcorn" },
    { name: "Makar Sankranti / Uttarayan", org: "Gujarati Samaj Switzerland", location: "Zurich", desc: "Kite flying, chikki, til ladoo" },
  ]},
  { month: "March", events: [
    { name: "Holi Festival Basel", org: "ICAS", location: "Muensterplatz, Basel", desc: "Largest Holi in Switzerland — organic colour powder, music, food stalls" },
    { name: "Holi Zurich", org: "IAGZ / Community", location: "Landiwiese, Zurich", desc: "Colour festival with DJ, food, and family activities" },
    { name: "Ugadi / Gudi Padwa", org: "Telugu & Maharashtrian Associations", location: "Zurich", desc: "New Year celebrations for Telugu and Marathi communities" },
  ]},
  { month: "April", events: [
    { name: "Baisakhi Bhangra Night", org: "Punjabi Cultural Association", location: "Zurich", desc: "Harvest festival with live bhangra, dhol, and Punjabi food" },
    { name: "Ram Navami Puja", org: "ISKCON Zurich", location: "Zurich", desc: "Religious ceremony and community prasad" },
  ]},
  { month: "August", events: [
    { name: "India Independence Day", org: "Embassy of India", location: "Alpenstrasse 40, Bern", desc: "Flag hoisting ceremony at the Embassy. Open to Indian nationals and OCI holders." },
    { name: "Onam Celebrations", org: "Malayali Association Switzerland", location: "Zurich / Geneva", desc: "Onasadya (feast), Pookalam (flower carpet), cultural programmes" },
    { name: "Indian Food Festival Basel", org: "ICAS", location: "Muensterplatz, Basel", desc: "Multi-day celebration of Indian regional cuisines" },
  ]},
  { month: "September", events: [
    { name: "Ganesh Chaturthi", org: "Maharashtra Mandal Switzerland", location: "Zurich", desc: "Ganesh puja, aarti, visarjan — 10-day celebrations" },
    { name: "Swiss India Business Summit", org: "SICC", location: "Kursaal Bern", desc: "Annual India-Switzerland business and networking summit" },
  ]},
  { month: "October", events: [
    { name: "Navratri Garba Night", org: "Gujarati Samaj Switzerland", location: "Hallenstadion, Zurich", desc: "Largest Garba celebration in Switzerland — live orchestra, 2,000+ attendees" },
    { name: "Dussehra", org: "IAGZ / Community", location: "Zurich", desc: "Ramlila, Ravan dahan, cultural programmes" },
    { name: "Diwali Mela Zurich", org: "IAGZ", location: "Stadthaus Zurich", desc: "Annual Diwali celebration — food stalls, cultural performances, fireworks. Largest Indian event in Switzerland." },
  ]},
  { month: "November", events: [
    { name: "Diwali Parties (all cities)", org: "Various associations", location: "Zurich, Geneva, Basel, Bern", desc: "Community Diwali celebrations across all major Swiss cities" },
    { name: "Indian Film Festival", org: "IndieSwiss Cinema", location: "Zurich & Geneva", desc: "Curated Indian cinema — Bollywood, regional, and art-house films" },
  ]},
  { month: "December", events: [
    { name: "Year-End Community Gala", org: "IAGZ", location: "Zurich", desc: "Annual year-end dinner and cultural programme for the community" },
  ]},
];

export default function FestivalsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Festivals in Switzerland 2026"
        subtitle="Celebrate every major Indian festival with the Swiss-Indian community — from Diwali melas and Garba nights to Pongal and Holi across all Swiss cities."
        badge="100+ Events/Year"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[{ label: "Culture & Arts", href: "/culture" }, { label: "Festivals & Events" }]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {calendar.map((month) => (
            <section key={month.month}>
              <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-rose-500 to-pink-600" />
                {month.month}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {month.events.map((e) => (
                  <div key={e.name} className="glass rounded-2xl p-5 card-hover">
                    <h3 className="font-semibold text-white mb-1">{e.name}</h3>
                    <p className="text-xs text-rose-400 mb-1">{e.org}</p>
                    <p className="text-xs text-slate-500 mb-3">{e.location}</p>
                    <p className="text-sm text-slate-400">{e.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-3">Stay Updated on Events</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>&#8226; Subscribe to <a href="https://iagz.ch" target="_blank" rel="noopener noreferrer" className="text-rose-400 hover:text-rose-300">IAGZ newsletter</a> for Zurich events</li>
            <li>&#8226; Join Facebook group <strong className="text-slate-300">"Indians in Zurich"</strong> and <strong className="text-slate-300">"Indian Events Switzerland"</strong></li>
            <li>&#8226; Follow <strong className="text-slate-300">Embassy of India Berne</strong> on social media for official events</li>
            <li>&#8226; Check community WhatsApp groups — most associations post events there first</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
