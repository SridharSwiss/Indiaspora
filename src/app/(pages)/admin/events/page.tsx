"use client";
import { useEffect, useState } from "react";

interface Submission {
  id: string;
  title: string;
  organiser: string;
  date: string;
  location: string;
  category: string;
  description: string;
  url?: string;
  image_url?: string;
  contact_name?: string;
  contact_email?: string;
  created_at: string;
}

export default function AdminEventsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [acting, setActing] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/events/review");
    if (res.status === 401) {
      setMessage("⛔ Admin access only. Please sign in as admin.");
      setLoading(false);
      return;
    }
    const json = await res.json();
    setSubmissions(json.submissions ?? []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  async function act(id: string, action: "approve" | "reject") {
    setActing(id);
    const res = await fetch("/api/events/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, action }),
    });
    if (res.ok) {
      setSubmissions((s) => s.filter((x) => x.id !== id));
      setMessage(action === "approve" ? "✅ Event approved and published." : "❌ Event rejected.");
      setTimeout(() => setMessage(""), 3000);
    }
    setActing(null);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--text)" }}>Event Review Queue</h1>
          <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>
            Approve submissions to publish them on the events page. Only you can see this.
          </p>
        </div>
        <button
          onClick={load}
          className="px-4 py-2 rounded-xl text-sm font-medium border transition-all hover:border-violet-500/50"
          style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
        >
          Refresh
        </button>
      </div>

      {message && (
        <div className="mb-6 px-4 py-3 rounded-xl text-sm font-medium" style={{ background: "var(--surface)", color: "var(--text)" }}>
          {message}
        </div>
      )}

      {loading ? (
        <div className="text-center py-20" style={{ color: "var(--text-2)" }}>Loading…</div>
      ) : submissions.length === 0 ? (
        <div className="glass rounded-2xl p-12 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <p className="font-semibold" style={{ color: "var(--text)" }}>No pending submissions</p>
          <p className="text-sm mt-1" style={{ color: "var(--text-2)" }}>All caught up!</p>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-sm mb-4" style={{ color: "var(--text-2)" }}>{submissions.length} pending submission{submissions.length !== 1 ? "s" : ""}</p>
          {submissions.map((s) => (
            <div key={s.id} className="glass rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h2 className="font-bold text-base" style={{ color: "var(--text)" }}>{s.title}</h2>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: "var(--surface)", color: "var(--text-2)" }}>{s.category}</span>
                  </div>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>by {s.organiser}</p>
                </div>
                <p className="text-xs shrink-0" style={{ color: "var(--text-2)" }}>
                  {new Date(s.created_at).toLocaleDateString("en-CH", { day: "numeric", month: "short", year: "numeric" })}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-4 text-sm">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-2)" }}>Date</span>
                  <p style={{ color: "var(--text)" }}>{s.date}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-2)" }}>Location</span>
                  <p style={{ color: "var(--text)" }}>{s.location}</p>
                </div>
                {s.url && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-2)" }}>Website</span>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="block text-violet-400 hover:underline truncate">{s.url}</a>
                  </div>
                )}
                {(s.contact_name || s.contact_email) && (
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--text-2)" }}>Contact</span>
                    <p style={{ color: "var(--text)" }}>{s.contact_name} {s.contact_email && `· ${s.contact_email}`}</p>
                  </div>
                )}
              </div>

              <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--text-2)" }}>{s.description}</p>

              {s.image_url && (
                <img src={s.image_url} alt={s.title} className="w-full h-40 object-cover rounded-xl mb-4" />
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => act(s.id, "approve")}
                  disabled={acting === s.id}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-sm font-semibold text-white hover:from-violet-600 hover:to-purple-700 transition-all disabled:opacity-50"
                >
                  {acting === s.id ? "…" : "✅ Approve & Publish"}
                </button>
                <button
                  onClick={() => act(s.id, "reject")}
                  disabled={acting === s.id}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold border transition-all hover:border-red-500/50 hover:text-red-400 disabled:opacity-50"
                  style={{ borderColor: "var(--border)", color: "var(--text-2)" }}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
