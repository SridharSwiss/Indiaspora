import type { Metadata } from "next";
import GatedPreview from "@/components/ui/GatedPreview";
import { SEO_SUMMARIES } from "@/lib/seoSummaries";

// Signed-out requests for members-only pages are rewritten here by the middleware (URL unchanged),
// so the full page is never rendered or sent. Search engines index this open summary.
type Props = { searchParams: Promise<{ path?: string }> };

const clean = (p?: string) => (p && /^\/[a-z0-9\-/]+$/.test(p) ? p : "/");

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const path = clean((await searchParams).path);
  const s = SEO_SUMMARIES[path];
  return {
    title: s ? { absolute: s.title.includes("Indiaspora") ? s.title : `${s.title} | Indiaspora` } : "Members-only guide",
    description: s?.description,
    alternates: { canonical: `https://indiaspora.ch${path}` },
    robots: s ? undefined : { index: false },
  };
}

export default async function GatedPreviewPage({ searchParams }: Props) {
  return <GatedPreview path={clean((await searchParams).path)} />;
}
