import PageHeader from "@/components/ui/PageHeader";
import { UPCOMING_EVENTS } from "@/lib/data";

const monthlyCalendar = [
  { month: "January", events: ["Pongal Celebration (Geneva)", "Lohri Night (Zurich)", "Makar Sankranti celebrations"] },
  { month: "February", events: ["Valentine's Bollywood Night", "Vasant Panchami Puja"] },
  { month: "March", events: ["Holi Festival Basel", "Holi Zurich (Landiwiese)", "Ugadi / Gudi Padwa"] },
  { month: "April", events: ["Baisakhi Bhangra Night", "Tamil/Telugu New Year", "Ram Navami Puja"] },
  { month: "May", events: ["Buddha Purnima", "Indian food pop-ups"] },
  { month: "June", events: ["Rath Yatra (ISKCON)", "Summer networking events"] },
  { month: "July", events: ["Bollywood Dance Workshop", "Guru Purnima"] },
  { month: "August", events: ["Indian Independence Day (Embassy Bern)", "Indian Food Festival Basel", "Onam celebrations"] },
  { month: "September", events: ["Ganesh Chaturthi", "Swiss India Business Summit (Bern)"] },
  { month: "October", events: ["Navratri Garba Night", "Dussehra celebrations", "Diwali Mela Zurich"] },
  { month: "November", events: ["Diwali parties and melas (all cities)", "Indian Film Festival Zurich", "Bhai Dooj events"] },
  { month: "December", events: ["Christmas Indian fusion party", "Year-end community gala", "Advent Indian bazaar"] },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Indian Events in Switzerland 2026"
        subtitle="From Diwali melas and Garba nights to business summits and food festivals — never miss an event in the Swiss-Indian calendar."
        badge="100+ Events/Year"
        gradient="from-violet-500 to-purple-600"
        breadcrumbs={[{ label: "Events" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Upcoming Events</h2>
          <p className="text-slate-400 mb-8">Next events in the Swiss-Indian community calendar</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.title} className="glass rounded-2xl p-5 card-hover">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${event.color} mt-1 shrink-0`} />
                  <div>
                    <h3 className="font-semibold text-white text-sm">{event.title}</h3>
                    <p className="text-xs text-slate-400">{event.date}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-400 mb-2">📍 {event.location}</p>
                <p className="text-sm text-slate-300">{event.description}</p>
                <span className="inline-block mt-3 text-xs bg-white/10 text-slate-300 px-2 py-1 rounded-full">{event.category}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Annual Festival Calendar</h2>
          <p className="text-slate-400 mb-8">Key celebrations through the year for the Swiss-Indian community</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {monthlyCalendar.map((m) => (
              <div key={m.month} className="glass rounded-2xl p-4">
                <h3 className="font-semibold text-violet-400 mb-2 text-sm">{m.month}</h3>
                <ul className="space-y-1">
                  {m.events.map((e) => (
                    <li key={e} className="text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-violet-400 shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Submit Your Event</h3>
          <p className="text-slate-400 mb-6">Organising an Indian community event in Switzerland? List it here to reach thousands of Indians across the country.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="text" placeholder="Event name" className="flex-1 px-4 py-2.5 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-violet-500/50" />
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white text-sm font-semibold hover:from-violet-600 hover:to-purple-700 transition-all whitespace-nowrap">
              Submit Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
