"use client";
import { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import Link from "next/link";

const CATEGORIES = ["Festival", "Cultural", "Networking", "Religious", "Food", "Arts", "Sports", "Other"];

interface FormState {
  title: string;
  organiser: string;
  date: string;
  location: string;
  category: string;
  description: string;
  url: string;
  image_url: string;
  contact_name: string;
  contact_email: string;
}

const empty: FormState = {
  title: "", organiser: "", date: "", location: "", category: "Cultural",
  description: "", url: "", image_url: "", contact_name: "", contact_email: "",
};

export default function SubmitEventPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/events/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j.error ?? "Submission failed");
      }
      setStatus("success");
      setForm(empty);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
    }
  }

  return (
    <div>
      <PageHeader
        title="Submit an Event"
        subtitle="Organising an Indian community event in Switzerland? List it here to reach 30,000+ Indians across the country."
        badge="Free Listing"
        gradient="from-violet-500 to-purple-600"
        breadcrumbs={[{ label: "Events", href: "/events" }, { label: "Submit" }]}
      />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {status === "success" ? (
          <div className="glass rounded-2xl p-10 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>Event Submitted!</h2>
            <p className="mb-6" style={{ color: "var(--text-2)" }}>
              Thank you! Your event is under review. Our automated system checks submissions twice daily —
              approved events appear on the events page within 12 hours.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setStatus("idle")}
                className="px-6 py-2.5 rounded-xl border text-sm font-semibold transition-all hover:border-violet-500/50"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                Submit another
              </button>
              <Link
                href="/events"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-sm font-semibold text-white hover:from-violet-600 hover:to-purple-700 transition-all"
              >
                View Events
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Event Details</h2>
              <p className="text-sm" style={{ color: "var(--text-2)" }}>
                All submitted events are reviewed by our AI moderation system for legitimacy before going live.
              </p>
            </div>

            {/* Title */}
            <Field label="Event Title *">
              <input
                required
                type="text"
                placeholder="e.g. IAGZ Diwali Gala 2026"
                value={form.title}
                onChange={set("title")}
                className="field-input"
              />
            </Field>

            {/* Organiser */}
            <Field label="Organiser / Association *">
              <input
                required
                type="text"
                placeholder="e.g. Indian Association Zurich (IAGZ)"
                value={form.organiser}
                onChange={set("organiser")}
                className="field-input"
              />
            </Field>

            {/* Date & Location row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Date *">
                <input
                  required
                  type="text"
                  placeholder="e.g. Nov 28, 2026 or Oct 1–5, 2026"
                  value={form.date}
                  onChange={set("date")}
                  className="field-input"
                />
              </Field>
              <Field label="Location *">
                <input
                  required
                  type="text"
                  placeholder="e.g. Mattenhofsaal, Zurich"
                  value={form.location}
                  onChange={set("location")}
                  className="field-input"
                />
              </Field>
            </div>

            {/* Category */}
            <Field label="Category *">
              <select required value={form.category} onChange={set("category")} className="field-input">
                {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>

            {/* Description */}
            <Field label="Description *">
              <textarea
                required
                rows={3}
                placeholder="Describe the event — what to expect, who it's for, any special highlights…"
                value={form.description}
                onChange={set("description")}
                className="field-input resize-none"
              />
            </Field>

            {/* URL & Image row */}
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Event Website / Tickets">
                <input
                  type="url"
                  placeholder="https://your-event-site.ch"
                  value={form.url}
                  onChange={set("url")}
                  className="field-input"
                />
              </Field>
              <Field label="Event Image URL">
                <input
                  type="url"
                  placeholder="https://… (optional banner image)"
                  value={form.image_url}
                  onChange={set("image_url")}
                  className="field-input"
                />
              </Field>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold mb-3 uppercase tracking-wider" style={{ color: "var(--text-2)" }}>
                Your Contact (not published)
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={form.contact_name}
                    onChange={set("contact_name")}
                    className="field-input"
                  />
                </Field>
                <Field label="Your Email">
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.contact_email}
                    onChange={set("contact_email")}
                    className="field-input"
                  />
                </Field>
              </div>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}

            <div className="flex items-center justify-between pt-2">
              <p className="text-xs" style={{ color: "var(--text-2)" }}>
                Reviewed within 12 hours · Free listing
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 font-semibold text-white hover:from-violet-600 hover:to-purple-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Submitting…" : "Submit Event"}
              </button>
            </div>
          </form>
        )}

        {/* How it works */}
        <div className="mt-8 glass rounded-2xl p-6">
          <h3 className="font-semibold mb-4 text-sm" style={{ color: "var(--text)" }}>How review works</h3>
          <div className="space-y-3">
            {[
              ["🤖", "AI validation", "Claude checks that the event is a legitimate community event in Switzerland"],
              ["⏱️", "Twice daily", "Review runs at 8 AM and 8 PM Swiss time — approved events go live within 12 hours"],
              ["✅", "Auto-published", "Approved events appear on the Events page immediately after review"],
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex items-start gap-3">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{title}</p>
                  <p className="text-xs" style={{ color: "var(--text-2)" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .field-input {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border-radius: 0.75rem;
          border: 1px solid var(--border);
          background: var(--surface);
          color: var(--text);
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .field-input:focus {
          border-color: rgb(139 92 246 / 0.5);
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--text-2)" }}>{label}</label>
      {children}
    </div>
  );
}
