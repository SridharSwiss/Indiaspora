"use client";

import { useEffect, useRef } from "react";
import { Calendar, MapPin, ArrowRight, Tag } from "lucide-react";
import { UPCOMING_EVENTS } from "@/lib/data";

export default function Events() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="events" ref={sectionRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-6">
          <div className="reveal">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-400 mb-4 block font-medium">What&apos;s On</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Upcoming <span className="gradient-text">Events</span>
            </h2>
            <p className="text-slate-400 mt-3 max-w-lg">
              Festivals, networking nights, cultural shows, food fairs — never miss what&apos;s happening in the Swiss Indian community
            </p>
          </div>
          <button className="reveal flex items-center gap-2 px-6 py-3 rounded-xl glass text-white font-medium hover:bg-white/10 transition-all border border-white/10 whitespace-nowrap">
            View Full Calendar <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.title} className="reveal glass rounded-2xl overflow-hidden card-hover group border border-white/5 hover:border-white/15 cursor-pointer">
              <div className={`h-1.5 ${event.color}`} />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${event.color} bg-opacity-20 text-white`}>
                    <Tag className="w-3 h-3" />{event.category}
                  </span>
                  <span className="text-xs text-slate-500">{event.date}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-300 transition-colors leading-tight">{event.title}</h3>
                <p className="text-sm text-slate-400 mb-4 leading-relaxed line-clamp-2">{event.description}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar className="w-3.5 h-3.5" /><span>{event.date}</span>
                  </div>
                  <button className="text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1">
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 reveal">
          <div className="glass rounded-2xl p-8 text-center border border-orange-500/20">
            <h3 className="text-xl font-bold text-white mb-2">Have an Event to Share?</h3>
            <p className="text-slate-400 mb-6 max-w-md mx-auto text-sm">Submit your community events, workshops, and meetups to reach 30,000+ Indians across Switzerland</p>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25">
              Submit an Event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
