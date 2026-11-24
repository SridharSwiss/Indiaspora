import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";

export const metadata: Metadata = {
  title: "Get Your Business Listed and Verified",
  description: "Indian grocery stores, restaurants, caterers and associations in Switzerland: get your Indiaspora listing added or corrected, and add the free 'Listed on Indiaspora' badge to your website.",
  alternates: { canonical: "https://indiaspora.ch/get-verified" },
};

const BADGE = `<a href="https://indiaspora.ch/food/grocery" title="Indian grocery stores in Switzerland on Indiaspora">
  <img src="https://indiaspora.ch/badge-listed-on-indiaspora.svg" alt="Listed on Indiaspora.ch" width="220" height="64">
</a>`;

export default function GetVerifiedPage() {
  return (
    <div>
      <PageHeader
        title="Get your listing verified"
        subtitle="Free for Indian shops, restaurants, caterers and associations in Switzerland."
        badge="For businesses"
        breadcrumbs={[{ label: "Get verified" }]}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-sm" style={{ color: "var(--text-2)", lineHeight: 1.75 }}>
        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>How verification works</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Send us your business name, address, website, phone, opening hours and what you sell, through the <Link href="/contact" style={{ color: "var(--in)", fontWeight: 700 }}>contact form</Link> (choose &ldquo;Listing&rdquo; or mention it in your message).</li>
            <li>We check the details against your own website or Google Maps listing. We only publish what we can confirm.</li>
            <li>Your listing goes live, marked with the date it was last checked. We re-check listings every quarter.</li>
            <li>Add the free badge below to your website so customers can find you, and other Indian shops near them, on Indiaspora.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>The &ldquo;Listed on Indiaspora&rdquo; badge</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/badge-listed-on-indiaspora.svg" alt="Listed on Indiaspora.ch" width={220} height={64} />
          <p className="mt-4">Copy this code into your website (for example in the footer):</p>
          <pre className="mt-2 p-4 rounded-xl text-xs" style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)", color: "var(--text)", overflowX: "auto", whiteSpace: "pre" }}>{BADGE}</pre>
          <p className="mt-3 text-xs" style={{ color: "var(--text-3)" }}>Restaurants can link to /food/restaurants and associations to /community/associations instead.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>Correction or removal</h2>
          <p>Spotted something out of date about your business? Tell us through the <Link href="/contact" style={{ color: "var(--in)", fontWeight: 700 }}>contact form</Link> and we&apos;ll fix it, usually within a few days.</p>
        </section>
      </div>
    </div>
  );
}
