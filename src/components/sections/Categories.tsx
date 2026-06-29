import Link from "next/link";
import { ArrowRight, Users, Home, UtensilsCrossed, Sparkles, TrendingUp, Music } from "lucide-react";
import { FEATURED_CATEGORIES } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  UtensilsCrossed: <UtensilsCrossed className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Music: <Music className="w-6 h-6" />,
};

export default function Categories() {
  return (
    <section id="categories" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4">What We Cover</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 mt-3">
            Everything for{" "}
            <span className="gradient-text">Swiss Indians</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From landing in Switzerland to building a life here — we cover every aspect of the Indian experience in the Swiss Confederation
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="card group block overflow-hidden"
            >
              {/* Card top with gradient */}
              <div className={`relative p-6 bg-gradient-to-br ${cat.color} rounded-t-[15px]`}>
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white/30 to-transparent rounded-t-[15px]" />
                <div className="relative flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white shadow-lg">
                    {ICON_MAP[cat.icon]}
                  </div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 text-white/90">
                    {cat.count}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">{cat.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{cat.description}</p>
              </div>

              {/* Items list */}
              <div className="p-6">
                <ul className="space-y-2">
                  {cat.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 opacity-70" style={{ background: "var(--primary)" }} />
                      {item}
                    </li>
                  ))}
                  {cat.items.length > 4 && (
                    <li className="text-sm text-slate-500 pl-3.5">
                      +{cat.items.length - 4} more...
                    </li>
                  )}
                </ul>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-medium transition-colors" style={{ color: "#818cf8" }}>
                  View All
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/events" className="btn btn-outline">
            Browse All Events & Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
