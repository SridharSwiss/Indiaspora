"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Users, BarChart3, Globe, TrendingUp, Eye, LogOut,
  RefreshCw, Download, MapPin, Mail, Briefcase, Calendar,
  CheckCircle, XCircle, Clock,
} from "lucide-react";

type Member = {
  id: string; full_name: string; email: string; city: string;
  profession: string; interests: string[]; tier: string;
  newsletter: boolean; created_at: string;
  status: "pending" | "approved" | "rejected";
  admin_note?: string; reviewed_at?: string;
};
type AnalyticsData = {
  totalViews: number; todayViews: number;
  topPages: { path: string; views: number }[];
  byCountry: { country: string; views: number }[];
};

const TIER_COLORS: Record<string, string> = {
  Community: "#059669", Member: "#F97316", Supporter: "#4F46E5",
};

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<"overview" | "members" | "analytics">("overview");
  const [members, setMembers] = useState<Member[]>([]);
  const [memberCount, setMemberCount] = useState(0);
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [days, setDays] = useState(30);
  const [loading, setLoading] = useState(true);
  const [memberSearch, setMemberSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [rejectNote, setRejectNote] = useState<{ id: string; note: string } | null>(null);

  const supabase = createClient();

  const checkAuth = useCallback(async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { router.push("/login?redirect=/admin"); return; }
    setUser({ email: user.email! });
  }, [supabase, router]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [membersRes, analyticsRes] = await Promise.all([
        fetch("/api/members"),
        fetch(`/api/analytics?days=${days}`),
      ]);
      if (membersRes.ok) {
        const d = await membersRes.json();
        setMembers(d.data || []);
        setMemberCount(d.count || 0);
      }
      if (analyticsRes.ok) {
        setAnalytics(await analyticsRes.json());
      }
    } finally {
      setLoading(false);
    }
  }, [days]);

  useEffect(() => { checkAuth(); }, [checkAuth]);
  useEffect(() => { fetchData(); }, [fetchData]);

  const signOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  const approveMember = async (id: string) => {
    setActionLoading(id + ":approve");
    try {
      const res = await fetch(`/api/members/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "approve" }),
      });
      if (res.ok) await fetchData();
    } finally {
      setActionLoading(null);
    }
  };

  const rejectMember = async (id: string, note: string) => {
    setActionLoading(id + ":reject");
    try {
      const res = await fetch(`/api/members/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "reject", note }),
      });
      if (res.ok) { setRejectNote(null); await fetchData(); }
    } finally {
      setActionLoading(null);
    }
  };

  const deleteMember = async (id: string) => {
    if (!confirm("Delete this member permanently?")) return;
    await fetch(`/api/members/${id}`, { method: "DELETE" });
    await fetchData();
  };

  const downloadCSV = () => {
    const header = "Name,Email,City,Profession,Tier,Status,Newsletter,Joined\n";
    const rows = members.map(m =>
      `"${m.full_name}","${m.email}","${m.city || ""}","${m.profession || ""}","${m.tier}","${m.status}","${m.newsletter}","${new Date(m.created_at).toLocaleDateString()}"`
    ).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url;
    a.download = `indiaspora-members-${new Date().toISOString().slice(0,10)}.csv`; a.click();
  };

  const pendingCount = members.filter(m => m.status === "pending").length;

  const filtered = members.filter(m => {
    const matchesSearch =
      m.full_name.toLowerCase().includes(memberSearch.toLowerCase()) ||
      m.email.toLowerCase().includes(memberSearch.toLowerCase()) ||
      (m.city || "").toLowerCase().includes(memberSearch.toLowerCase());
    const matchesStatus = statusFilter === "all" || m.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const tierCounts = members.reduce((acc, m) => {
    acc[m.tier] = (acc[m.tier] || 0) + 1; return acc;
  }, {} as Record<string, number>);

  const StatCard = ({ icon: Icon, label, value, sub, color = "var(--sf)" }: {
    icon: typeof Users; label: string; value: string | number; sub?: string; color?: string;
  }) => (
    <div style={{ padding: "20px 22px", borderRadius: 16, background: "var(--surface)", border: "1px solid var(--border)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
        <div style={{ padding: 10, borderRadius: 10, background: `${color}15` }}>
          <Icon size={18} style={{ color }} />
        </div>
      </div>
      <div style={{ fontSize: 28, fontWeight: 800, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif", marginBottom: 2 }}>{value}</div>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-2)" }}>{label}</div>
      {sub && <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 2 }}>{sub}</div>}
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "var(--base)" }}>
      {/* Topbar */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "var(--surface)", borderBottom: "1px solid var(--border)",
        padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 60,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 22 }}>🪔</span>
          <span style={{ fontWeight: 800, fontSize: 16, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif" }}>
            Indiaspora Admin
          </span>
          <span style={{ fontSize: 11, padding: "2px 10px", borderRadius: 999, background: "rgba(249,115,22,0.1)", color: "var(--sf)", fontWeight: 700 }}>
            Dashboard
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 12, color: "var(--text-3)" }}>{user?.email}</span>
          <button onClick={fetchData} style={{ background: "var(--surface-2)", border: "1px solid var(--border-2)", borderRadius: 8, padding: "6px 10px", cursor: "pointer", color: "var(--text-2)" }}>
            <RefreshCw size={14} />
          </button>
          <button onClick={signOut} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "1px solid var(--border-2)", borderRadius: 8, padding: "6px 12px", cursor: "pointer", color: "var(--text-2)", fontSize: 13 }}>
            <LogOut size={13} /> Sign out
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 20px" }}>
        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, marginBottom: 28, background: "var(--surface)", borderRadius: 12, padding: 4, width: "fit-content", border: "1px solid var(--border)" }}>
          {(["overview", "members", "analytics"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "8px 20px", borderRadius: 9, border: "none", cursor: "pointer",
              fontSize: 13, fontWeight: 700, transition: "all 0.15s", textTransform: "capitalize",
              background: tab === t ? "linear-gradient(135deg,var(--sf),var(--sf-hi))" : "transparent",
              color: tab === t ? "#fff" : "var(--text-2)",
            }}>{t}</button>
          ))}
        </div>

        {loading && (
          <div style={{ textAlign: "center", padding: 60, color: "var(--text-3)" }}>Loading data…</div>
        )}

        {/* Overview */}
        {!loading && tab === "overview" && (
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 16, marginBottom: 28 }}>
              <StatCard icon={Users} label="Total Members" value={memberCount} sub="All time registrations" />
              <StatCard icon={Clock} label="Pending Approval" value={pendingCount} sub="Awaiting review" color="#F97316" />
              <StatCard icon={Eye} label="Page Views" value={analytics?.totalViews ?? "–"} sub={`Last ${days} days`} color="#4F46E5" />
              <StatCard icon={Globe} label="Countries" value={analytics?.byCountry?.length ?? "–"} sub="Visitor origins" color="#DC2626" />
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {/* Tier breakdown */}
              <div style={{ background: "var(--surface)", borderRadius: 16, padding: 24, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>Members by Tier</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {Object.entries(tierCounts).map(([tier, count]) => (
                    <div key={tier} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: TIER_COLORS[tier] || "var(--sf)", minWidth: 90 }}>{tier}</div>
                      <div style={{ flex: 1, height: 8, borderRadius: 999, background: "var(--surface-2)", overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${memberCount ? (count / memberCount) * 100 : 0}%`, background: TIER_COLORS[tier] || "var(--sf)", borderRadius: 999, transition: "width 0.5s" }} />
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", minWidth: 30, textAlign: "right" }}>{count}</div>
                    </div>
                  ))}
                  {Object.keys(tierCounts).length === 0 && <div style={{ color: "var(--text-3)", fontSize: 13 }}>No members yet</div>}
                </div>
              </div>

              {/* Top pages */}
              <div style={{ background: "var(--surface)", borderRadius: 16, padding: 24, border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--text)", marginBottom: 16 }}>Top Pages</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {(analytics?.topPages || []).slice(0, 6).map(p => (
                    <div key={p.path} style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                      <span style={{ color: "var(--text-2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "75%" }}>{p.path}</span>
                      <span style={{ fontWeight: 700, color: "var(--text)", flexShrink: 0 }}>{p.views.toLocaleString()}</span>
                    </div>
                  ))}
                  {!analytics?.topPages?.length && <div style={{ color: "var(--text-3)", fontSize: 13 }}>No data yet</div>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Members */}
        {!loading && tab === "members" && (
          <div>
            {/* Reject note modal */}
            {rejectNote && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                <div style={{ background: "var(--surface)", borderRadius: 20, padding: 32, maxWidth: 480, width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }}>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>Reject Application</div>
                  <p style={{ fontSize: 13, color: "var(--text-3)", margin: "0 0 16px" }}>Optionally add a note explaining the decision (sent to the applicant).</p>
                  <textarea
                    value={rejectNote.note}
                    onChange={e => setRejectNote({ ...rejectNote, note: e.target.value })}
                    placeholder="Optional note to applicant…"
                    rows={3}
                    style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--border-2)", background: "var(--surface-2)", color: "var(--text)", fontSize: 14, resize: "vertical", outline: "none", boxSizing: "border-box" }}
                  />
                  <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                    <button onClick={() => setRejectNote(null)} style={{ flex: 1, padding: "10px", borderRadius: 10, border: "1px solid var(--border-2)", background: "transparent", color: "var(--text-2)", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Cancel</button>
                    <button
                      onClick={() => rejectMember(rejectNote.id, rejectNote.note)}
                      disabled={actionLoading === rejectNote.id + ":reject"}
                      style={{ flex: 1, padding: "10px", borderRadius: 10, border: "none", background: "#DC2626", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 700 }}
                    >
                      {actionLoading === rejectNote.id + ":reject" ? "Rejecting…" : "Confirm Reject"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Status filter + search */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16, alignItems: "center", flexWrap: "wrap" }}>
              {(["all", "pending", "approved", "rejected"] as const).map(s => (
                <button key={s} onClick={() => setStatusFilter(s)} style={{
                  padding: "6px 14px", borderRadius: 999, border: "none", cursor: "pointer",
                  fontSize: 12, fontWeight: 700, transition: "all 0.15s", textTransform: "capitalize",
                  background: statusFilter === s ? (s === "pending" ? "#F97316" : s === "approved" ? "#059669" : s === "rejected" ? "#DC2626" : "var(--sf)") : "var(--surface-2)",
                  color: statusFilter === s ? "#fff" : "var(--text-2)",
                }}>
                  {s}{s === "pending" && pendingCount > 0 ? ` (${pendingCount})` : ""}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, marginBottom: 20, alignItems: "center", flexWrap: "wrap" }}>
              <input
                type="search" placeholder="Search members…" value={memberSearch}
                onChange={e => setMemberSearch(e.target.value)}
                style={{
                  flex: 1, minWidth: 220, padding: "10px 16px", borderRadius: 10,
                  border: "1px solid var(--border-2)", background: "var(--surface)",
                  color: "var(--text)", fontSize: 14, outline: "none",
                }}
              />
              <span style={{ fontSize: 13, color: "var(--text-3)" }}>{filtered.length} results</span>
              <button onClick={downloadCSV} style={{
                display: "flex", alignItems: "center", gap: 6,
                padding: "10px 16px", borderRadius: 10, border: "1px solid var(--border-2)",
                background: "var(--surface)", color: "var(--text-2)", cursor: "pointer", fontSize: 13, fontWeight: 600,
              }}>
                <Download size={14} /> Export CSV
              </button>
            </div>

            <div style={{ background: "var(--surface)", borderRadius: 16, border: "1px solid var(--border)", overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                      {["Name", "Email", "City", "Tier", "Status", "Joined", "Actions"].map(h => (
                        <th key={h} style={{ padding: "12px 16px", textAlign: "left", fontWeight: 700, color: "var(--text-2)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((m, i) => (
                      <tr key={m.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--border)" : "none" }}>
                        <td style={{ padding: "12px 16px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,var(--sf),var(--sf-hi))", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 12, flexShrink: 0 }}>
                              {m.full_name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <div style={{ fontWeight: 600, color: "var(--text)", whiteSpace: "nowrap" }}>{m.full_name}</div>
                              {m.profession && <div style={{ fontSize: 11, color: "var(--text-3)", display: "flex", alignItems: "center", gap: 3 }}><Briefcase size={10} />{m.profession}</div>}
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <a href={`mailto:${m.email}`} style={{ color: "var(--text-2)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                            <Mail size={12} />{m.email}
                          </a>
                        </td>
                        <td style={{ padding: "12px 16px", color: "var(--text-2)" }}>
                          {m.city ? <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={12} />{m.city}</span> : "–"}
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <span style={{ padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, background: `${TIER_COLORS[m.tier] || "#059669"}18`, color: TIER_COLORS[m.tier] || "#059669" }}>
                            {m.tier}
                          </span>
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          {m.status === "pending" && (
                            <span style={{ display: "flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, background: "rgba(249,115,22,0.1)", color: "#F97316", width: "fit-content" }}>
                              <Clock size={11} /> Pending
                            </span>
                          )}
                          {m.status === "approved" && (
                            <span style={{ display: "flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, background: "rgba(5,150,105,0.1)", color: "#059669", width: "fit-content" }}>
                              <CheckCircle size={11} /> Approved
                            </span>
                          )}
                          {m.status === "rejected" && (
                            <span style={{ display: "flex", alignItems: "center", gap: 4, padding: "3px 10px", borderRadius: 999, fontSize: 11, fontWeight: 700, background: "rgba(220,38,38,0.1)", color: "#DC2626", width: "fit-content" }}>
                              <XCircle size={11} /> Rejected
                            </span>
                          )}
                        </td>
                        <td style={{ padding: "12px 16px", color: "var(--text-3)", whiteSpace: "nowrap" }}>
                          <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={12} />{new Date(m.created_at).toLocaleDateString()}</span>
                        </td>
                        <td style={{ padding: "12px 16px" }}>
                          <div style={{ display: "flex", gap: 6 }}>
                            {m.status !== "approved" && (
                              <button
                                onClick={() => approveMember(m.id)}
                                disabled={actionLoading === m.id + ":approve"}
                                title="Approve"
                                style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 8, border: "none", background: "rgba(5,150,105,0.1)", color: "#059669", cursor: "pointer", fontSize: 11, fontWeight: 700 }}
                              >
                                <CheckCircle size={12} />{actionLoading === m.id + ":approve" ? "…" : "Approve"}
                              </button>
                            )}
                            {m.status !== "rejected" && (
                              <button
                                onClick={() => setRejectNote({ id: m.id, note: "" })}
                                title="Reject"
                                style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 8, border: "none", background: "rgba(220,38,38,0.1)", color: "#DC2626", cursor: "pointer", fontSize: 11, fontWeight: 700 }}
                              >
                                <XCircle size={12} /> Reject
                              </button>
                            )}
                            <button
                              onClick={() => deleteMember(m.id)}
                              title="Delete"
                              style={{ padding: "5px 8px", borderRadius: 8, border: "1px solid var(--border-2)", background: "transparent", color: "var(--text-3)", cursor: "pointer", fontSize: 11 }}
                            >
                              ✕
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {filtered.length === 0 && (
                      <tr><td colSpan={7} style={{ padding: 40, textAlign: "center", color: "var(--text-3)" }}>No members found</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Analytics */}
        {!loading && tab === "analytics" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 24, alignItems: "center" }}>
              <span style={{ fontSize: 13, color: "var(--text-2)", fontWeight: 600 }}>Period:</span>
              {[7, 30, 90].map(d => (
                <button key={d} onClick={() => setDays(d)} style={{
                  padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none",
                  background: days === d ? "var(--sf)" : "var(--surface-2)",
                  color: days === d ? "#fff" : "var(--text-2)",
                  transition: "all 0.15s",
                }}>{d}d</button>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {/* Top pages */}
              <div style={{ background: "var(--surface)", borderRadius: 16, padding: 24, border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <BarChart3 size={16} style={{ color: "var(--sf)" }} />
                  <span style={{ fontWeight: 700, fontSize: 15, color: "var(--text)" }}>Top Pages</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {(analytics?.topPages || []).map((p, i) => {
                    const max = analytics?.topPages?.[0]?.views || 1;
                    return (
                      <div key={p.path}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: "var(--text-2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "75%" }}>
                            {i + 1}. {p.path}
                          </span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{p.views.toLocaleString()}</span>
                        </div>
                        <div style={{ height: 6, borderRadius: 999, background: "var(--surface-2)", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${(p.views / max) * 100}%`, background: "linear-gradient(90deg,var(--sf),var(--sf-hi))", borderRadius: 999, transition: "width 0.4s" }} />
                        </div>
                      </div>
                    );
                  })}
                  {!analytics?.topPages?.length && <div style={{ color: "var(--text-3)", fontSize: 13 }}>No page view data yet</div>}
                </div>
              </div>

              {/* By country */}
              <div style={{ background: "var(--surface)", borderRadius: 16, padding: 24, border: "1px solid var(--border)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                  <Globe size={16} style={{ color: "#4F46E5" }} />
                  <span style={{ fontWeight: 700, fontSize: 15, color: "var(--text)" }}>Visitors by Country</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {(analytics?.byCountry || []).map((c) => {
                    const max = analytics?.byCountry?.[0]?.views || 1;
                    return (
                      <div key={c.country}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                          <span style={{ fontSize: 12, color: "var(--text-2)" }}>{c.country}</span>
                          <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{c.views.toLocaleString()}</span>
                        </div>
                        <div style={{ height: 6, borderRadius: 999, background: "var(--surface-2)", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${(c.views / max) * 100}%`, background: "linear-gradient(90deg,#4F46E5,#6366F1)", borderRadius: 999, transition: "width 0.4s" }} />
                        </div>
                      </div>
                    );
                  })}
                  {!analytics?.byCountry?.length && <div style={{ color: "var(--text-3)", fontSize: 13 }}>No country data yet</div>}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
