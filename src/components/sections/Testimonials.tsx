import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const AVATAR_COLORS = [
  "from-indigo-500 to-violet-500",
  "from-blue-500 to-indigo-600",
  "from-teal-500 to-cyan-600",
];

export default function Testimonials() {
  return (
    <section className="py-24" style={{ background: "rgba(15,20,40,0.5)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">Community Voices</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
            Indians Thriving in{" "}
            <span className="gradient-text">Switzerland</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Real stories from community members who&apos;ve built their lives in Switzerland
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="card p-6 flex flex-col">
              <Quote className="w-8 h-8 mb-4 shrink-0" style={{ color: "rgba(249,115,22,0.3)" }} />
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${AVATAR_COLORS[i]} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.role}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{t.origin} · {t.years}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
