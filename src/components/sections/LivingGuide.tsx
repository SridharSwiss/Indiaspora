"use client";

import { useEffect, useRef, useState } from "react";
import { Plane, Heart, Home, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";
import { LIVING_GUIDE } from "@/lib/data";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ReactNode> = {
  Plane: <Plane className="w-5 h-5" />,
  Heart: <Heart className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
};

const QUICK_LINKS = [
  { label: "Residence Permits", icon: "📋", href: "https://www.sem.admin.ch/sem/en/home/themen/aufenthalt/eu_efta.html" },
  { label: "Health Insurance", icon: "🏥", href: "https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung.html" },
  { label: "Swiss Banking", icon: "🏦", href: "https://www.comparis.ch/bank/kontokorrent/info/konto-eroeffnen" },
  { label: "Schools & Kita", icon: "🏫", href: "https://www.edk.ch/en/education-system/cantonal-school-structures" },
  { label: "Language Courses", icon: "🗣️", href: "https://www.ch.ch/en/education/language-courses-in-switzerland/" },
  { label: "Tax Returns", icon: "📊", href: "https://www.estv.admin.ch/estv/en/home/direct-federal-tax/individuals.html" },
  { label: "Driving Licence", icon: "🚗", href: "https://www.astra.admin.ch/astra/en/home/themen/fuehrerausweise-und-fahrzeugausweis/fuehrerausweis.html" },
  { label: "Emergency Numbers", icon: "🆘", href: "https://www.ch.ch/en/safety-and-justice/police/emergency-numbers/" },
];

export default function LivingGuide() {
  const [activeTab, setActiveTab] = useState(0);
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
    <section id="living" ref={sectionRef} className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.3em] text-orange-400 mb-4 block font-medium">
            Settle In
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Living in{" "}
            <span className="gradient-text">Switzerland</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Your comprehensive guide to settling into Swiss life — from day one to feeling at home
          </p>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 mb-16 reveal">
          {QUICK_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 rounded-xl glass hover:bg-white/10 transition-all group cursor-pointer border border-white/5 hover:border-white/15"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-xs text-slate-400 group-hover:text-white text-center leading-tight">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tab navigation */}
          <div className="reveal">
            <div className="space-y-3 mb-6">
              {LIVING_GUIDE.map((guide, i) => (
                <button
                  key={guide.title}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    "w-full flex items-center gap-4 p-4 rounded-xl transition-all text-left",
                    activeTab === i
                      ? "bg-gradient-to-r from-orange-500/20 to-amber-500/10 border border-orange-500/30 shadow-lg"
                      : "glass border border-white/5 hover:border-white/15"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all",
                      activeTab === i
                        ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white"
                        : "bg-white/10 text-slate-400"
                    )}
                  >
                    {ICON_MAP[guide.icon]}
                  </div>
                  <div>
                    <div className={cn("font-semibold text-sm", activeTab === i ? "text-white" : "text-slate-300")}>
                      {guide.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      {guide.steps.length} key steps
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="glass rounded-xl p-5 border border-blue-500/20">
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">💡</span>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Pro Tip</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Join the Indian expat Facebook groups for Zurich, Geneva, and Basel immediately upon arrival. Community members are incredibly helpful and can guide you through Swiss bureaucracy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step detail */}
          <div className="reveal">
            <div className="glass rounded-2xl p-8 border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white">
                  {ICON_MAP[LIVING_GUIDE[activeTab].icon]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{LIVING_GUIDE[activeTab].title}</h3>
                  <p className="text-sm text-slate-400">Step-by-step guide</p>
                </div>
              </div>

              <ol className="space-y-4">
                {LIVING_GUIDE[activeTab].steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold text-orange-400">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>

              <button className="mt-8 flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors">
                Read Full Guide
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
