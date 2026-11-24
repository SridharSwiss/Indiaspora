import Link from "next/link";
import { Lock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { SEO_SUMMARIES } from "@/lib/seoSummaries";

// Open SEO summary of a members-only page: shown to signed-out visitors and search engines.
// The full page content is only rendered for signed-in members.
export default function GatedPreview({ path }: { path: string }) {
  const s = SEO_SUMMARIES[path];
  const section = path.split("/")[1] ?? "";
  const sectionLabel = section.charAt(0).toUpperCase() + section.slice(1);
  const heading = s?.heading ?? "Members-only guide";
  const login = `/login?redirect=${encodeURIComponent(path)}`;
  return (
    <div>
      <PageHeader
        title={heading}
        subtitle={s?.subtitle ?? s?.description ?? "This guide is available to Indiaspora members."}
        heroImage={s?.heroImage}
        heroImageAlt={heading}
        breadcrumbs={[{ label: sectionLabel, href: `/${section}` }, { label: heading }]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {s?.description && <p className="text-base" style={{ color: "var(--text-2)", lineHeight: 1.75 }}>{s.description}</p>}

        {!!s?.sections.length && (
          <section>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>What this guide covers</h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {s.sections.map(t => (
                <li key={t} className="glass rounded-xl px-4 py-3 flex items-center gap-3 text-sm" style={{ color: "var(--text)" }}>
                  <Lock size={14} style={{ color: "var(--in)", flexShrink: 0 }} aria-hidden />{t}
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="rounded-2xl p-6 text-center" style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)" }}>
          <p className="text-lg font-bold" style={{ color: "var(--text)", fontFamily: "'Playfair Display', Georgia, serif" }}>Read the full guide free with an Indiaspora account</p>
          <p className="text-sm mt-2" style={{ color: "var(--text-2)" }}>Joining is free. Members get every guide, the events calendar and the weekly digest.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <Link href={login} className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest" style={{ background: "var(--in)", color: "#1A1410", textDecoration: "none" }}>Log in to continue</Link>
            <Link href="/join" className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest" style={{ border: "1px solid var(--border-2)", color: "var(--text)", textDecoration: "none" }}>Join free</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
