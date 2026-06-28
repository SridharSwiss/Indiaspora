import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { RESOURCES } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  Official: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Living: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  Transport: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Community: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Business: "bg-green-500/20 text-green-300 border-green-500/30",
  Media: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Shopping: "bg-amber-500/20 text-amber-300 border-amber-500/30",
};

export default function Resources() {
  return (
    <section id="resources" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="tag mb-4">Essential Links</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mt-3">
            Key <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Curated links to official, community, and lifestyle resources every Indian in Switzerland needs
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {RESOURCES.map((r) => (
            <a key={r.title} href={r.url} target="_blank" rel="noopener noreferrer" className="card p-5 group block">
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-md border ${CATEGORY_COLORS[r.category] ?? "bg-slate-500/20 text-slate-300"}`}>
                  {r.category}
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-orange-400 transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-orange-300 transition-colors">{r.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{r.description}</p>
            </a>
          ))}
        </div>
        <div className="card p-8 lg:p-12 text-center relative overflow-hidden" style={{ borderColor: "rgba(249,115,22,0.1)" }}>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-blue-600/5 rounded-[18px]" />
          <div className="relative">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">Know a Resource We&apos;re Missing?</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Help grow the most comprehensive Indian community directory in Switzerland.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources" className="btn btn-primary">
                Browse All Resources <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:hello@indiaswiss.ch?subject=Resource%20Suggestion" className="btn btn-outline">Suggest a Link</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
