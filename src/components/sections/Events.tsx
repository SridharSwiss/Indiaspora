import Link from "next/link";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { UPCOMING_EVENTS } from "@/lib/data";

export default function Events() {
  return (
    <section id="events" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
          <div>
            <span className="tag mb-4">What&apos;s On</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-lg">
              Festivals, networking nights, cultural shows, food fairs &mdash; never miss what&apos;s happening in the Swiss Indian community
            </p>
          </div>
          <Link href="/events" className="btn btn-outline shrink-0">
            View Full Calendar
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.title} className="card group overflow-hidden">
              <div className={`h-1.5 ${event.color}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${event.color}`}>
                    {event.category}
                  </span>
                  <span className="text-xs text-slate-500">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors leading-tight">
                  {event.title}
                </h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-2">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="mt-5 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{event.date}</span>
                  </div>
                  <Link href="/events" className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <div className="card p-8 text-center" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <h3 className="text-xl font-bold text-white mb-2">Have an Event to Share?</h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">
              Submit your community events, workshops, cultural shows, and meetups to reach 30,000+ Indians across Switzerland
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=Submit%20Event" className="btn btn-primary">Submit an Event</a>
          </div>
        </div>
      </div>
    </section>
  );
}
