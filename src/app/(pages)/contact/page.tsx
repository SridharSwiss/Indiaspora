import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, MapPin, Clock, Users, CalendarPlus, HelpCircle, Megaphone, FileX } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the Indiaspora team: questions, events and listings, advertising, membership, feedback and takedown requests. We reply within two working days.",
  alternates: { canonical: "https://indiaspora.ch/contact" },
};

const FAQ = [
  ["How do I list my association, temple or business?", "Use the form and choose “Add or correct a listing”, or submit an event directly on the events page. We review every submission before it is published."],
  ["Can I advertise on Indiaspora?", "Yes. See the Advertise page for formats and ranges, or send us a message with your goals and budget and we will suggest options."],
  ["Is Indiaspora free to use?", "Browsing the site is free. Membership tiers add extra features; the current plans and prices are shown on the Advertise page and may change."],
  ["How do I ask for an image or logo to be removed?", "Choose “Takedown request (image or logo)” in the form and include the page address. We remove or replace content promptly."],
  ["I found a mistake. How do I report it?", "Choose “Report a problem or give feedback” and tell us what to fix. Please include the page address if you can."],
];

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Questions, ideas, listings, partnerships or feedback: write to the Indiaspora team. We read every message and reply within two working days."
        badge="We reply within 2 working days"
        gradient="from-amber-500 to-yellow-400"
        heroImage="/images/heroes/advice.webp"
        heroImageAlt="Talking with the Indiaspora team"
        heroImagePosition="center 40%"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2" style={{ minWidth: 0 }}>
            <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--text)" }}>Send us a message</h2>
            <p className="mb-6 text-sm" style={{ color: "var(--text-2)" }}>Fields marked * are required. The more detail you give, the faster we can help.</p>
            <ContactForm />
          </div>

          <aside className="space-y-5" style={{ minWidth: 0 }}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold mb-4" style={{ color: "var(--text)" }}>Other ways to reach us</h3>
              <ul className="space-y-4 text-sm" style={{ color: "var(--text-2)", listStyle: "none", padding: 0 }}>
                <li className="flex gap-3"><Mail size={18} style={{ flexShrink: 0, color: "var(--sf)" }} /><span>Email<br /><a href="mailto:Indiaspora.ch@proton.me" style={{ color: "var(--text)", fontWeight: 600, wordBreak: "break-all", textDecoration: "underline" }}>Indiaspora.ch@proton.me</a></span></li>
                <li className="flex gap-3"><MapPin size={18} style={{ flexShrink: 0, color: "var(--sf)" }} /><span>Based in<br /><strong style={{ color: "var(--text)" }}>Zurich, Switzerland</strong>, serving all 26 cantons</span></li>
                <li className="flex gap-3"><Clock size={18} style={{ flexShrink: 0, color: "var(--sf)" }} /><span>Response time<br /><strong style={{ color: "var(--text)" }}>Within 2 working days</strong></span></li>
                <li className="flex gap-3"><Users size={18} style={{ flexShrink: 0, color: "var(--sf)" }} /><span>Follow us<br /><a href="https://www.linkedin.com/company/swiss-indiaspora/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontWeight: 600, textDecoration: "underline" }}>Swiss Indiaspora on LinkedIn</a><br /><a href="https://www.instagram.com/indiaspora.ch" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text)", fontWeight: 600, textDecoration: "underline" }}>@indiaspora.ch on Instagram</a></span></li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-bold mb-4" style={{ color: "var(--text)" }}>Quick links</h3>
              <ul className="space-y-3 text-sm" style={{ listStyle: "none", padding: 0 }}>
                {[
                  [CalendarPlus, "Submit an event", "/events/submit"],
                  [HelpCircle, "Ask the community for advice", "/advice"],
                  [Megaphone, "Advertise with us", "/advertise"],
                  [FileX, "Request a takedown", "/contact?topic=takedown"],
                ].map(([Icon, text, href]) => {
                  const I = Icon as typeof Mail;
                  return <li key={href as string}><Link href={href as string} className="flex gap-3 items-center" style={{ color: "var(--text)", textDecoration: "none" }}><I size={16} style={{ color: "var(--sf)" }} />{text as string}</Link></li>;
                })}
              </ul>
            </div>
          </aside>
        </div>

        <section className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold mb-5" style={{ color: "var(--text)" }}>Quick answers</h2>
          <div className="space-y-3">
            {FAQ.map(([q, a]) => (
              <details key={q} className="glass rounded-xl px-5 py-4" style={{ cursor: "pointer" }}>
                <summary style={{ fontWeight: 600, color: "var(--text)" }}>{q}</summary>
                <p className="mt-3 text-sm" style={{ color: "var(--text-2)", lineHeight: 1.7 }}>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
