"use client";
import { useState, useRef, useCallback, DragEvent } from "react";
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
  tickets_url: string;
  contact_name: string;
  contact_email: string;
  image_url: string;
}

const empty: FormState = {
  title: "", organiser: "", date: "", location: "", category: "Cultural",
  description: "", url: "", tickets_url: "", contact_name: "", contact_email: "", image_url: "",
};

type UploadState = "idle" | "dragging" | "uploading" | "done" | "error";

export default function SubmitEventPage() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [uploadError, setUploadError] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const uploadFile = useCallback(async (file: File) => {
    if (!file.type.startsWith("image/")) { setUploadError("Only image files are accepted."); setUploadState("error"); return; }
    if (file.size > 5 * 1024 * 1024) { setUploadError("Image must be under 5 MB."); setUploadState("error"); return; }

    setUploadState("uploading");
    setUploadError("");
    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);

    const fd = new FormData();
    fd.append("file", file);
    try {
      const res = await fetch("/api/events/upload-image", { method: "POST", body: fd });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error ?? "Upload failed");
      setForm((f) => ({ ...f, image_url: j.url }));
      setUploadState("done");
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Upload failed");
      setUploadState("error");
      setPreviewUrl("");
    }
  }, []);

  const onDrop = useCallback((e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setUploadState("idle");
    const file = e.dataTransfer.files[0];
    if (file) uploadFile(file);
  }, [uploadFile]);

  const onDragOver = (e: DragEvent<HTMLDivElement>) => { e.preventDefault(); setUploadState("dragging"); };
  const onDragLeave = () => setUploadState("idle");

  const clearImage = () => {
    setPreviewUrl("");
    setForm((f) => ({ ...f, image_url: "" }));
    setUploadState("idle");
    setUploadError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const payload = {
        title: form.title,
        organiser: form.organiser,
        date: form.date,
        location: form.location,
        category: form.category,
        description: form.description,
        url: form.tickets_url || form.url || null,
        contact_email: form.contact_email || null,
        contact_name: form.contact_name || null,
        image_url: form.image_url || null,
      };
      const res = await fetch("/api/events/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j.error ?? "Submission failed");
      }
      setStatus("success");
      setForm(empty);
      setPreviewUrl("");
      setUploadState("idle");
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
              Thank you! Your event is under review. Approved events appear on the events page within 12 hours.
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Event Details */}
            <div className="glass rounded-2xl p-8 space-y-6">
              <div>
                <h2 className="text-xl font-bold mb-1" style={{ color: "var(--text)" }}>Event Details</h2>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>
                  All submitted events are reviewed for legitimacy before going live.
                </p>
              </div>

              <Field label="Event Title *">
                <input required type="text" placeholder="e.g. IAGZ Diwali Gala 2026" value={form.title} onChange={set("title")} className="field-input" />
              </Field>

              <Field label="Organiser / Association *">
                <input required type="text" placeholder="e.g. Indian Association Zurich (IAGZ)" value={form.organiser} onChange={set("organiser")} className="field-input" />
              </Field>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Date *">
                  <input required type="text" placeholder="e.g. Nov 28, 2026 or Oct 1–5, 2026" value={form.date} onChange={set("date")} className="field-input" />
                </Field>
                <Field label="Location *">
                  <input required type="text" placeholder="e.g. Mattenhofsaal, Zurich" value={form.location} onChange={set("location")} className="field-input" />
                </Field>
              </div>

              <Field label="Category *">
                <select required value={form.category} onChange={set("category")} className="field-input">
                  {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>

              <Field label="Description *">
                <textarea
                  required rows={4}
                  placeholder="Describe the event — what to expect, who it's for, any special highlights, dress code, entry fee…"
                  value={form.description} onChange={set("description")} className="field-input resize-none"
                />
              </Field>
            </div>

            {/* Links */}
            <div className="glass rounded-2xl p-8 space-y-6">
              <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>Event Links</h2>

              <Field label="Event Website">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: "var(--text-3)" }}>🌐</span>
                  <input type="url" placeholder="https://your-event-page.ch" value={form.url} onChange={set("url")} className="field-input pl-8" />
                </div>
                <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>Your association&rsquo;s website or an event-specific page</p>
              </Field>

              <Field label="Tickets / Registration Link">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs" style={{ color: "var(--text-3)" }}>🎟</span>
                  <input type="url" placeholder="https://… (Ticketmaster, Eventbrite, EventFrog, etc.)" value={form.tickets_url} onChange={set("tickets_url")} className="field-input pl-8" />
                </div>
                <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>Link to buy tickets or register — Swiss platforms: eventfrog.ch, ticketino.com</p>
              </Field>
            </div>

            {/* Image upload */}
            <div className="glass rounded-2xl p-8 space-y-4">
              <div>
                <h2 className="text-lg font-bold mb-1" style={{ color: "var(--text)" }}>Event Image</h2>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>Upload a banner or poster image for your event. JPG, PNG or WebP, max 5 MB.</p>
              </div>

              {previewUrl && uploadState === "done" ? (
                <div className="relative rounded-xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={previewUrl} alt="Event preview" className="w-full h-48 object-cover rounded-xl" />
                  <button
                    type="button" onClick={clearImage}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center text-sm hover:bg-black/80 transition-colors"
                  >✕</button>
                  <div className="absolute bottom-2 left-2 text-xs px-2 py-0.5 rounded-full bg-green-500/80 text-white">✓ Uploaded</div>
                </div>
              ) : (
                <div
                  onDrop={onDrop}
                  onDragOver={onDragOver}
                  onDragLeave={onDragLeave}
                  onClick={() => fileInputRef.current?.click()}
                  className="relative border-2 border-dashed rounded-xl p-10 text-center cursor-pointer transition-all"
                  style={{
                    borderColor: uploadState === "dragging" ? "rgb(139 92 246)" : "var(--border)",
                    background: uploadState === "dragging" ? "rgb(139 92 246 / 0.08)" : "transparent",
                  }}
                >
                  {uploadState === "uploading" ? (
                    <div className="space-y-2">
                      <div className="text-2xl">⏳</div>
                      <p className="text-sm font-medium" style={{ color: "var(--text)" }}>Uploading…</p>
                    </div>
                  ) : uploadState === "error" ? (
                    <div className="space-y-2">
                      <div className="text-2xl">⚠️</div>
                      <p className="text-sm text-red-400">{uploadError}</p>
                      <p className="text-xs" style={{ color: "var(--text-3)" }}>Click to try again</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="text-3xl">🖼</div>
                      <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                        {uploadState === "dragging" ? "Drop image here" : "Drag & drop image or click to browse"}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-3)" }}>JPG · PNG · WebP · max 5 MB</p>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/webp,image/gif"
                    className="sr-only"
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f); }}
                  />
                </div>
              )}
            </div>

            {/* Contact */}
            <div className="glass rounded-2xl p-8 space-y-4">
              <div>
                <h2 className="text-lg font-bold mb-1" style={{ color: "var(--text)" }}>Your Contact</h2>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>Not published — only used if we need to reach you about your submission.</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your Name">
                  <input type="text" placeholder="Full name" value={form.contact_name} onChange={set("contact_name")} className="field-input" />
                </Field>
                <Field label="Your Email">
                  <input type="email" placeholder="you@example.com" value={form.contact_email} onChange={set("contact_email")} className="field-input" />
                </Field>
              </div>
            </div>

            {status === "error" && (
              <p className="text-sm text-red-400 px-1">{errorMsg}</p>
            )}

            <div className="flex items-center justify-between">
              <p className="text-xs" style={{ color: "var(--text-2)" }}>Reviewed within 12 hours · Free listing</p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 font-semibold text-white hover:from-violet-600 hover:to-purple-700 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Submitting…" : "Submit Event →"}
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
              <div key={title as string} className="flex items-start gap-3">
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
