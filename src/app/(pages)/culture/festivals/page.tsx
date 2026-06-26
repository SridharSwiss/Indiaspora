import PageHeader from "@/components/ui/PageHeader";

const calendar2026 = [
  { month: "January", events: [
    { name: "Pongal Celebration", org: "Tamil Sangam Geneva", location: "Geneva" },
    { name: "Lohri Night", org: "Community Event", location: "Zurich" },
  ]},
  { month: "February", events: [
    { name: "Vasant Panchami", org: "Various temples and community groups", location: "Zurich / Geneva" },
  ]},
  { month: "March", events: [
    { name: "Holi — ICAS Basel", org: "Indian Community Association Switzerland", location: "Münsterplatz, Basel" },
    { name: "Holi Zurich", org: "Community Event", location: "Landiwiese, Zurich" },
  ]},
  { month: "April", events: [
    { name: "Baisakhi Bhangra Night", org: "Punjabi Association Switzerland", location: "Zurich" },
    { name: "Ugadi & Gudi Padwa", org: "Telugu & Marathi Associations", location: "Zurich" },
    { name: "Ram Navami", org: "ISKCON Switzerland", location: "Zurich / Geneva" },
  ]},
  { month: "June", events: [
    { name: "Rath Yatra", org: "ISKCON Switzerland", location: "Zurich" },
  ]},
  { month: "August", events: [
    { name: "Independence Day Celebration", org: "Embassy of India, Bern", location: "Bern" },
    { name: "Onam", org: "Kerala Association Switzerland", location: "Zurich" },
  ]},
  { month: "September", events: [
    { name: "Ganesh Chaturthi", org: "Maharashtra Mandal Switzerland", location: "Zurich" },
    { name: "Swiss India Business Summit", org: "SICC", location: "Bern" },
  ]},
  { month: "October", events: [
    { name: "Navratri Garba", org: "Gujarati Samaj Switzerland", location: "Hallenstadion, Zurich" },
    { name: "Dussehra", org: "Community Event", location: "Zurich" },
    { name: "Diwali Mela Zurich", org: "Community Event", location: "Stadthaus, Zurich" },
  ]},
  { month: "November", events: [
    { name: "Diwali Parties", org: "Various associations and community groups", location: "Zurich / Geneva / Basel" },
    { name: "Indian Film Festival", org: "Film Festival Committee", location: "Zurich & Geneva" },
  ]},
  { month: "December", events: [
    { name: "Year-End Community Gala", org: "IAGZ and partner associations", location: "Zurich" },
  ]},
];

export default function FestivalsPage() {
  return (
    <div>
      <PageHeader
        title="Indian Festivals in Switzerland 2026"
        subtitle="Celebrate every major Indian festival with the Swiss-Indian community — from Diwali melas to Holi, Navratri Garba, and Pongal."
        badge="100+ Events/Year"
        gradient="from-rose-500 to-pink-600"
        breadcrumbs={[
          { label: "Culture & Arts", href: "/culture" },
          { label: "Festivals & Events" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-10">
          {calendar2026.map((month) => (
            <section key={month.month}>
              <h2 className="text-xl font-bold text-white mb-4">{month.month}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {month.events.map((event) => (
                  <div key={event.name} className="glass card-hover rounded-2xl p-5">
                    <h3 className="text-base font-semibold text-white mb-1">{event.name}</h3>
                    <p className="text-sm text-rose-400">{event.org}</p>
                    <p className="text-sm text-white/60 mt-1">{event.location}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Stay Updated */}
        <div className="mt-16 glass rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-white/70 text-sm mb-4">Event dates and venues change — follow these channels to stay informed:</p>
          <ul className="space-y-2 text-white/70 text-sm">
            <li className="flex items-start gap-2"><span className="text-rose-400">→</span> IAGZ newsletter (subscribe at iagz.ch)</li>
            <li className="flex items-start gap-2"><span className="text-rose-400">→</span> Facebook group: <span className="text-white font-medium">"Indians in Zurich"</span></li>
            <li className="flex items-start gap-2"><span className="text-rose-400">→</span> Facebook group: <span className="text-white font-medium">"Indian Events Switzerland"</span></li>
            <li className="flex items-start gap-2"><span className="text-rose-400">→</span> Embassy of India, Bern events calendar at <span className="text-white font-medium">indembbern.gov.in</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
