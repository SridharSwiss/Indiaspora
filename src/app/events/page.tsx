import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { UPCOMING_EVENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming Indian community events in Switzerland — festivals, networking, cultural programs, food events, and more.",
};

const CATEGORIES = ["All", "Festival", "Networking", "Cultural", "Food", "Arts", "Sports"];

export default function EventsPage() {
  return (
    <div className="pt-20" style={{ background: "var(--bg)" }}>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pattern-dots opacity-40" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="tag mb-6">Events Calendar</div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 mt-3">
            Never Miss an <span className="gradient-text">Indian Event</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Festivals, networking events, cultural programs, food festivals, and community meetups — all across Switzerland.
          </p>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Category Filter */}
      <section className="py-8 sticky top-16 z-30" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  i === 0
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                style={i === 0 ? { background: "linear-gradient(135deg, #f97316, #f59e0b)" } : { background: "rgba(255,255,255,0.06)" }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.title} className="card group overflow-hidden">
                {/* Color bar */}
                <div className={`h-1.5 ${event.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full text-white ${event.color}`}>
                      {event.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="w-3 h-3" />
                      {event.date}
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-orange-400 transition-colors">{event.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{event.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3 h-3 text-orange-500" />
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-warm" />

      {/* Past Highlights */}
      <section className="py-20 pattern-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="tag">Event Highlights</span>
            <h2 className="text-3xl font-bold text-white mt-4 mb-3">Regular Annual Events</h2>
            <p className="text-slate-400 text-lg">These events happen every year — mark your calendar.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: "🪔", name: "Diwali Mela", month: "October", city: "Zurich", desc: "Switzerland's biggest Indian festival celebration" },
              { emoji: "🎨", name: "Holi Festival", month: "March", city: "Basel", desc: "Festival of colours at Münsterplatz" },
              { emoji: "💃", name: "Navratri Garba", month: "October", city: "Zurich", desc: "9-night Garba celebration with live orchestra" },
              { emoji: "🏏", name: "Cricket League", month: "Summer", city: "Nationwide", desc: "Swiss Indian cricket tournament across cities" },
            ].map((e) => (
              <div key={e.name} className="card p-6 text-center">
                <span className="text-4xl block mb-3">{e.emoji}</span>
                <h3 className="font-bold text-white mb-1">{e.name}</h3>
                <div className="text-xs text-orange-400 font-medium mb-2">{e.month} · {e.city}</div>
                <p className="text-xs text-slate-400">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Event */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="card p-10" style={{ borderColor: "rgba(249,115,22,0.2)" }}>
            <div className="text-4xl mb-4">📅</div>
            <h2 className="text-3xl font-bold text-white mb-4">Submit Your Event</h2>
            <p className="text-slate-400 mb-8">
              Organising an event for the Indian community in Switzerland? Get it listed on IndiaSwiss and reach thousands of Indians across all cantons.
            </p>
            <a href="mailto:hello@indiaswiss.ch?subject=Submit%20Event" className="btn btn-primary">
              Submit Your Event <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
