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
  gradient = "from-orange-500 to-amber-500",
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-3xl`} />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 mandala-bg opacity-30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="flex items-center gap-1.5 mb-5 text-xs sm:text-sm text-slate-400 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-600" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-orange-400 transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-slate-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs sm:text-sm font-medium mb-4">
            {badge}
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base lg:text-xl text-slate-400 max-w-3xl leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
