import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { RESOURCES } from "@/lib/data";
import AnimateIn from "@/components/ui/AnimateIn";

const CATEGORY_STYLE: Record<string, { bg: string; color: string; border: string }> = {
  Official:  { bg: "rgba(128,168,208,0.14)", color: "#80A8D0", border: "rgba(128,168,208,0.28)" },
  Living:    { bg: "rgba(112,188,146,0.14)", color: "#70BC92", border: "rgba(112,188,146,0.28)" },
  Transport: { bg: "rgba(184,128,200,0.14)", color: "#B880C8", border: "rgba(184,128,200,0.28)" },
  Community: { bg: "rgba(201,169,110,0.14)", color: "#CEB07A", border: "rgba(201,169,110,0.28)" },
  Business:  { bg: "rgba(112,188,146,0.14)", color: "#70BC92", border: "rgba(112,188,146,0.28)" },
  Media:     { bg: "rgba(200,120,128,0.14)", color: "#C87880", border: "rgba(200,120,128,0.28)" },
  Shopping:  { bg: "rgba(212,144,106,0.14)", color: "#D4906A", border: "rgba(212,144,106,0.28)" },
};
const DEFAULT_CAT = { bg: "rgba(180,170,160,0.14)", color: "var(--text-3)", border: "rgba(180,170,160,0.28)" };

export default function Resources() {
  return (
    <section id="resources" className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <AnimateIn from="left">
            <span className="tag mb-4">Essential Links</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-3" style={{ color: "var(--text)" }}>
              Key <span className="gradient-text">Resources</span>
            </h2>
          </AnimateIn>
          <AnimateIn from="right" delay={100}>
            <p className=" mt-3 max-w-xl mx-auto" style={{ color: "var(--text-2)" }}>
              Curated links to official, community, and lifestyle resources every Indian in Switzerland needs
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {RESOURCES.map((r) => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card p-5 group block"
            >
              {(() => {
                const s = CATEGORY_STYLE[r.category] ?? DEFAULT_CAT;
                return (
                  <>
                    <div className="flex items-start justify-between mb-3">
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6,
                        background: s.bg, color: s.color, border: `1px solid ${s.border}`,
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        letterSpacing: "0.06em", textTransform: "uppercase",
                      }}>
                        {r.category}
                      </span>
                      <ExternalLink style={{ width: 13, height: 13, color: "var(--text-3)", flexShrink: 0 }} />
                    </div>
                    <h3 style={{
                      fontSize: 13, fontWeight: 700, marginBottom: 6,
                      color: "var(--text)",
                      fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                      transition: "color 0.2s",
                    }}
                      className="resource-title"
                    >
                      {r.title}
                    </h3>
                    <p style={{ fontSize: 12, color: "var(--text-3)", lineHeight: 1.6, margin: 0, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                      {r.description}
                    </p>
                  </>
                );
              })()}
            </a>
          ))}
        </div>

        <div className="card p-8 lg:p-12 text-center relative overflow-hidden" style={{ borderColor: "rgba(201,169,110,0.18)" }}>
          <div aria-hidden style={{ position:"absolute", inset:0, borderRadius:18, pointerEvents:"none",
            background:"radial-gradient(ellipse at 70% 30%, rgba(201,169,110,0.07) 0%, transparent 65%)" }} />
          <div className="relative">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{ color: "var(--text)" }}>
              Know a Resource We&apos;re Missing?
            </h3>
            <p className=" mb-8 max-w-lg mx-auto" style={{ color: "var(--text-2)" }}>
              Help grow the most comprehensive Indian community directory in Switzerland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/resources" className="btn btn-primary">
                Browse All Resources
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:hello@indiaspora.ch?subject=Resource%20Suggestion" className="btn btn-outline">
                Suggest a Link
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .group:hover .resource-title { color: var(--in) !important; }
      `}</style>
    </section>
  );
}
