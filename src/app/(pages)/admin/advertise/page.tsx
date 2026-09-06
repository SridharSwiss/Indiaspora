"use client";
import { useEffect, useState } from "react";

interface AdInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  ad_type: string;
  target_audience?: string;
  duration?: string;
  budget?: string;
  message?: string;
  status: string;
  created_at: string;
}

const STATUS_COLORS: Record<string, string> = {
  new: "#CEB07A",
  replied: "#70BC92",
  closed: "var(--text-3)",
};

export default function AdminAdvertisePage() {
  const [items, setItems] = useState<AdInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);

  async function load() {
    setLoading(true);
    const res = await fetch("/api/inquiries/advertise", {
      headers: { "x-admin-key": process.env.NEXT_PUBLIC_ADMIN_SECRET ?? "" },
    });
    if (res.status === 401) { setMessage("⛔ Admin access only."); setLoading(false); return; }
    const json = await res.json();
    setItems(json.inquiries ?? []);
    setLoading(false);
  }

  useEffect(() => { load(); }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--text)", marginBottom: 4, fontFamily: "'Playfair Display', Georgia, serif" }}>
          Advertise With Us — Enquiries
        </h1>
        <p style={{ fontSize: 13, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
          Advertising & partnership enquiries — {items.length} total
        </p>
      </div>

      {message && (
        <div style={{ padding: "12px 16px", borderRadius: 10, background: "rgba(200,120,128,0.10)", color: "#C87880", marginBottom: 20, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", fontSize: 13 }}>{message}</div>
      )}

      {loading ? (
        <p style={{ color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>Loading…</p>
      ) : items.length === 0 ? (
        <p style={{ color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>No enquiries yet.</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
            <thead>
              <tr style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}>
                {["Date", "Name", "Company", "Email", "Ad Type", "Duration", "Budget", "Status"].map((h) => (
                  <th key={h} style={{ padding: "12px 14px", textAlign: "left", fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", whiteSpace: "nowrap" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <>
                  <tr
                    key={item.id}
                    onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                    style={{ borderBottom: "1px solid var(--border)", cursor: "pointer", transition: "background 0.15s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--surface-2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <td style={{ padding: "11px 14px", fontSize: 11, color: "var(--text-3)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", whiteSpace: "nowrap" }}>
                      {new Date(item.created_at).toLocaleDateString("en-CH")}
                    </td>
                    <td style={{ padding: "11px 14px", fontSize: 13, fontWeight: 600, color: "var(--text)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{item.name}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{item.company || "—"}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                      <a href={`mailto:${item.email}`} style={{ color: "#CEB07A", textDecoration: "none" }}>{item.email}</a>
                    </td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{item.ad_type}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{item.duration || "—"}</td>
                    <td style={{ padding: "11px 14px", fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>{item.budget || "—"}</td>
                    <td style={{ padding: "11px 14px" }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 999,
                        background: `${STATUS_COLORS[item.status] ?? "var(--text-3)"}22`,
                        color: STATUS_COLORS[item.status] ?? "var(--text-3)",
                        border: `1px solid ${STATUS_COLORS[item.status] ?? "var(--text-3)"}44`,
                        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
                        textTransform: "uppercase", letterSpacing: "0.06em",
                      }}>{item.status}</span>
                    </td>
                  </tr>
                  {expanded === item.id && (
                    <tr key={`${item.id}-exp`} style={{ borderBottom: "2px solid rgba(201,169,110,0.22)" }}>
                      <td colSpan={8} style={{ padding: "16px 20px", background: "rgba(201,169,110,0.05)" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                          {item.message && (
                            <div style={{ gridColumn: "1 / -1", fontSize: 13, color: "var(--text-2)", lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif", whiteSpace: "pre-wrap" }}>
                              <strong style={{ color: "var(--text)" }}>Message:</strong><br />{item.message}
                            </div>
                          )}
                          {item.target_audience && (
                            <div style={{ fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                              <strong style={{ color: "var(--text)" }}>Target Audience:</strong> {item.target_audience}
                            </div>
                          )}
                          {item.website && (
                            <div style={{ fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                              <strong style={{ color: "var(--text)" }}>Website:</strong>{" "}
                              <a href={item.website} target="_blank" rel="noopener noreferrer" style={{ color: "#CEB07A" }}>{item.website}</a>
                            </div>
                          )}
                          {item.phone && (
                            <div style={{ fontSize: 12, color: "var(--text-2)", fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
                              <strong style={{ color: "var(--text)" }}>Phone:</strong> {item.phone}
                            </div>
                          )}
                        </div>
                        <div style={{ marginTop: 14 }}>
                          <a href={`mailto:${item.email}?subject=Re: Your Indiaspora Advertising Enquiry`} className="btn btn-sm" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11 }}>
                            Reply via Email
                          </a>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
