import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  gradient?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  gradient = "from-indigo-500 to-violet-500",
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className={`absolute top-0 left-1/3 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-gradient-to-br ${gradient} opacity-[0.07] rounded-full blur-[80px]`}
        />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 rounded-full blur-3xl" style={{ background: "rgba(99,102,241,0.05)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 mb-5 text-xs sm:text-sm">
            <Link href="/" className="transition-colors" style={{ color: "var(--text-3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#a5b4fc")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}>
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 shrink-0" style={{ color: "var(--text-3)" }} aria-hidden />
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors" style={{ color: "var(--text-3)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#a5b4fc")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-3)")}>
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ color: "var(--text-2)" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {badge && (
          <div className="tag tag-saffron mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" aria-hidden />
            {badge}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-[1.1] tracking-tight">
          {title}
        </h1>

        <p className="text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed" style={{ color: "var(--text-2)" }}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}
