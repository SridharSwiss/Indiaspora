import type { Metadata } from "next";
import { IMAGE_CREDITS } from "@/lib/image-credits";

export const metadata: Metadata = { title: "Image credits" };

export default function CreditsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16" style={{ color: "var(--text)" }}>
      <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "2rem", fontWeight: 700, marginBottom: 12 }}>Image credits</h1>
      <p style={{ color: "var(--text-2)", marginBottom: 28 }}>
        Event photos are royalty-free images from Pixabay, used under the Pixabay Content License. Thank you to the photographers.
      </p>
      <p style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, marginBottom: 24, padding: "12px 14px", border: "1px solid var(--border)", borderRadius: 12, background: "var(--surface-2)" }}>
        <strong>Disclaimer.</strong> Photos are illustrative and do not imply endorsement by, or any connection with, anyone or anything shown. Pixabay does not guarantee model or property releases. Logos belong to their owners and are used only to identify them. If you are pictured in, or own rights in, any image or logo here, email <a href="mailto:hello@indiaspora.ch" style={{ textDecoration: "underline" }}>hello@indiaspora.ch</a> and we will remove it promptly. See our <a href="/terms" style={{ textDecoration: "underline" }}>Terms</a> (section 5A).
      </p>
      <ul style={{ display: "grid", gap: 12, padding: 0, listStyle: "none" }}>
        {IMAGE_CREDITS.map((c) => (
          <li key={c.file} style={{ display: "flex", gap: 14, alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.file} alt="" width={96} height={64} loading="lazy" style={{ width: 96, height: 64, objectFit: "cover", borderRadius: 8 }} />
            <span>
              <strong>{c.event}</strong><br />
              <a href={c.source} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-2)", textDecoration: "underline" }}>
                Photo by {c.photographer} on Pixabay
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
