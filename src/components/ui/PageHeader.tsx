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
  gradient = "from-[var(--saffron)] to-[var(--saffron-hi)]",
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 overflow-hidden">
      {/* Background layer */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className={`absolute top-0 left-1/3 w-72 sm:w-[480px] h-72 sm:h-[480px] bg-gradient-to-br ${gradient} opacity-[0.08] rounded-full blur-[80px]`}
        />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-80 h-48 sm:h-80 bg-[var(--jade)]/[0.06] rounded-full blur-3xl" />
        <div className="absolute inset-0 mandala-bg opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center flex-wrap gap-1.5 mb-5 text-xs sm:text-sm"
          >
            <Link href="/" className="text-[var(--text-dim)] hover:text-[var(--saffron)] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-[var(--text-dim)] shrink-0" aria-hidden />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-[var(--text-dim)] hover:text-[var(--saffron)] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[var(--text-muted)]">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--saffron)]/25 bg-[var(--saffron)]/8 text-[var(--saffron)] text-xs font-semibold mb-5 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--saffron)] animate-pulse" aria-hidden />
            {badge}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 leading-[1.1] tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-[var(--text-muted)] max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
