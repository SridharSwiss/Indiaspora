"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  Users, BarChart3, Globe, Eye, LogOut, RefreshCw, Download,
  MapPin, Mail, Briefcase, Calendar, CheckCircle, XCircle, Clock,
  LayoutDashboard, Search, ChevronRight, TrendingUp, UserCheck, UserX,
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
const STATUS_CONFIG = {
  pending:  { color: "#D97706", bg: "rgba(217,119,6,0.1)",  icon: Clock,        label: "Pending"  },
  approved: { color: "#059669", bg: "rgba(5,150,105,0.1)",  icon: CheckCircle,  label: "Approved" },
  rejected: { color: "#DC2626", bg: "rgba(220,38,38,0.1)",  icon: XCircle,      label: "Rejected" },
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const supabase = useMemo(() => createClient(), []);

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
      if (membersRes.ok) { const d = await membersRes.json(); setMembers(d.data || []); setMemberCount(d.count || 0); }
      if (analyticsRes.ok) setAnalytics(await analyticsRes.json());
    } finally { setLoading(false); }
  }, [days]);

  useEffect(() => { checkAuth(); }, [checkAuth]);
  useEffect(() => { fetchData(); }, [fetchData]);

  const signOut = async () => { await supabase.auth.signOut(); router.push("/"); };

  const approveMember = async (id: string) => {
    setActionLoading(id + ":approve");
    try {
      const res = await fetch(`/api/members/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "approve" }) });
      if (res.ok) await fetchData();
    } finally { setActionLoading(null); }
  };

  const rejectMember = async (id: string, note: string) => {
    setActionLoading(id + ":reject");
    try {
      const res = await fetch(`/api/members/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "reject", note }) });
      if (res.ok) { setRejectNote(null); await fetchData(); }
    } finally { setActionLoading(null); }
  };

  const deleteMember = async (id: string) => {
    if (!confirm("Permanently delete this member?")) return;
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
    a.download = `indiaspora-members-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
  };

  const pendingCount = members.filter(m => m.status === "pending").length;
  const approvedCount = members.filter(m => m.status === "approved").length;
  const rejectedCount = members.filter(m => m.status === "rejected").length;

  const filtered = members.filter(m => {
    const q = memberSearch.toLowerCase();
    const matchSearch = !q || m.full_name.toLowerCase().includes(q) || m.email.toLowerCase().includes(q) || (m.city || "").toLowerCase().includes(q);
    const matchStatus = statusFilter === "all" || m.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const tierCounts = members.reduce((acc, m) => { acc[m.tier] = (acc[m.tier] || 0) + 1; return acc; }, {} as Record<string, number>);
  const recentPending = members.filter(m => m.status === "pending").slice(0, 5);

  const navItems = [
    { id: "overview" as const,   icon: LayoutDashboard, label: "Overview",  badge: null },
    { id: "members" as const,    icon: Users,           label: "Members",   badge: pendingCount > 0 ? pendingCount : null },
    { id: "analytics" as const,  icon: BarChart3,       label: "Analytics", badge: null },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "var(--base)", fontFamily: "system-ui,sans-serif" }}>
      <style>{`
        .admin-nav-item { transition: background 0.15s, color 0.15s; }
        .admin-nav-item:hover { background: var(--surface-2) !important; }
        .admin-action-btn { transition: opacity 0.15s, transform 0.1s; }
        .admin-action-btn:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }
        .admin-tr:hover { background: var(--surface-2); }
        @media (max-width: 768px) { .admin-sidebar { display: none !important; } }
      `}</style>

      {/* ── Sidebar ── */}
      <aside className="admin-sidebar" style={{
        width: sidebarOpen ? 220 : 64, flexShrink: 0,
        background: "var(--surface)", borderRight: "1px solid var(--border)",
        display: "flex", flexDirection: "column",
        position: "sticky", top: 0, height: "100vh", overflow: "hidden",
        transition: "width 0.2s ease",
      }}>
        {/* Logo */}
        <div style={{ padding: "20px 18px 16px", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid var(--border)" }}>
          <span style={{ fontSize: 24, flexShrink: 0 }}>🪔</span>
          {sidebarOpen && (
            <div>
              <div style={{ fontWeight: 800, fontSize: 14, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif", lineHeight: 1.2 }}>Indiaspora</div>
              <div style={{ fontSize: 10, color: "var(--text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Admin</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: "12px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
          {navItems.map(({ id, icon: Icon, label, badge }) => {
            const active = tab === id;
            return (
              <button key={id} className="admin-nav-item" onClick={() => setTab(id)} style={{
                display: "flex", alignItems: "center", gap: 10,
                padding: sidebarOpen ? "9px 12px" : "9px",
                borderRadius: 10, border: "none", cursor: "pointer", width: "100%",
                background: active ? "rgba(249,115,22,0.08)" : "transparent",
                color: active ? "var(--sf)" : "var(--text-2)",
                fontWeight: active ? 700 : 500, fontSize: 13, textAlign: "left",
                justifyContent: sidebarOpen ? "flex-start" : "center",
              }}>
                <Icon size={16} style={{ flexShrink: 0, color: active ? "var(--sf)" : "var(--text-3)" }} />
                {sidebarOpen && <span style={{ flex: 1 }}>{label}</span>}
                {sidebarOpen && badge !== null && (
                  <span style={{ fontSize: 10, fontWeight: 800, padding: "1px 6px", borderRadius: 999, background: "#F97316", color: "#fff" }}>{badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User + sign out */}
        <div style={{ padding: "12px 10px", borderTop: "1px solid var(--border)" }}>
          {sidebarOpen && user?.email && (
            <div style={{ fontSize: 11, color: "var(--text-3)", padding: "0 12px 8px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.email}</div>
          )}
          <button onClick={signOut} className="admin-nav-item" style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: sidebarOpen ? "9px 12px" : "9px",
            borderRadius: 10, border: "none", cursor: "pointer", width: "100%",
            background: "transparent", color: "var(--text-3)", fontSize: 13,
            justifyContent: sidebarOpen ? "flex-start" : "center",
          }}>
            <LogOut size={15} style={{ flexShrink: 0 }} />
            {sidebarOpen && "Sign out"}
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Topbar */}
        <header style={{
          height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0 24px", borderBottom: "1px solid var(--border)",
          background: "var(--surface)", position: "sticky", top: 0, zIndex: 40,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button onClick={() => setSidebarOpen(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-3)", padding: 4, borderRadius: 6 }}>
              <div style={{ width: 16, display: "flex", flexDirection: "column", gap: 3 }}>
                {[0,1,2].map(i => <div key={i} style={{ height: 2, background: "currentColor", borderRadius: 2 }} />)}
              </div>
            </button>
            <h1 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif", textTransform: "capitalize" }}>{tab}</h1>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {pendingCount > 0 && (
              <button onClick={() => { setTab("members"); setStatusFilter("pending"); }} style={{
                display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8,
                border: "1px solid rgba(217,119,6,0.3)", background: "rgba(217,119,6,0.08)",
                color: "#D97706", cursor: "pointer", fontSize: 12, fontWeight: 700,
              }}>
                <Clock size={12} /> {pendingCount} pending
              </button>
            )}
            <button onClick={fetchData} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid var(--border-2)", background: "var(--surface-2)", cursor: "pointer", color: "var(--text-2)", display: "flex", alignItems: "center" }}>
              <RefreshCw size={13} />
            </button>
          </div>
        </header>

        <main style={{ flex: 1, padding: "28px 28px", maxWidth: 1100, width: "100%" }}>

          {loading && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
              {[1,2,3,4].map(i => (
                <div key={i} style={{ height: 100, borderRadius: 14, background: "var(--surface)", border: "1px solid var(--border)", animation: "pulse 1.5s ease-in-out infinite" }} />
              ))}
              <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
            </div>
          )}

          {/* ── OVERVIEW ── */}
          {!loading && tab === "overview" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Stat row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16 }}>
                {[
                  { label: "Total Members",    value: memberCount,                       icon: Users,       color: "#4F46E5", sub: "all time" },
                  { label: "Pending Review",   value: pendingCount,                      icon: Clock,       color: "#D97706", sub: "need action" },
                  { label: "Approved",         value: approvedCount,                     icon: UserCheck,   color: "#059669", sub: "active members" },
                  { label: "Page Views",       value: analytics?.totalViews ?? "–",      icon: Eye,         color: "#F97316", sub: `last ${days}d` },
                  { label: "Countries",        value: analytics?.byCountry?.length ?? "–", icon: Globe,     color: "#DC2626", sub: "visitor origins" },
                ].map(({ label, value, icon: Icon, color, sub }) => (
                  <div key={label} style={{
                    padding: "18px 20px", borderRadius: 14,
                    background: "var(--surface)", border: "1px solid var(--border)",
                    borderLeft: `3px solid ${color}`,
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.07em" }}>{label}</div>
                      <div style={{ padding: 7, borderRadius: 8, background: `${color}12` }}>
                        <Icon size={14} style={{ color, display: "block" }} />
                      </div>
                    </div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif", lineHeight: 1 }}>{value}</div>
                    <div style={{ fontSize: 11, color: "var(--text-3)", marginTop: 4 }}>{sub}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {/* Recent pending */}
                <div style={{ background: "var(--surface)", borderRadius: 14, border: "1px solid var(--border)", overflow: "hidden" }}>
                  <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>Pending Applications</span>
                    {recentPending.length > 0 && (
                      <button onClick={() => { setTab("members"); setStatusFilter("pending"); }} style={{ fontSize: 11, color: "var(--sf)", background: "none", border: "none", cursor: "pointer", fontWeight: 600, display: "flex", alignItems: "center", gap: 3 }}>
                        View all <ChevronRight size={12} />
                      </button>
                    )}
                  </div>
                  {recentPending.length === 0 ? (
                    <div style={{ padding: "32px 20px", textAlign: "center", color: "var(--text-3)", fontSize: 13 }}>🎉 No pending applications</div>
                  ) : recentPending.map((m, i) => (
                    <div key={m.id} style={{ padding: "12px 20px", borderBottom: i < recentPending.length - 1 ? "1px solid var(--border)" : "none", display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg,#F97316,#DC2626)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0 }}>
                        {m.full_name.charAt(0).toUpperCase()}
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontWeight: 600, fontSize: 13, color: "var(--text)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.full_name}</div>
                        <div style={{ fontSize: 11, color: "var(--text-3)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{m.city || m.profession || m.email}</div>
                      </div>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button onClick={() => approveMember(m.id)} disabled={actionLoading === m.id + ":approve"} className="admin-action-btn" style={{ padding: "4px 10px", borderRadius: 7, border: "none", background: "rgba(5,150,105,0.1)", color: "#059669", cursor: "pointer", fontSize: 11, fontWeight: 700 }}>
                          {actionLoading === m.id + ":approve" ? "…" : "✓"}
                        </button>
                        <button onClick={() => setRejectNote({ id: m.id, note: "" })} className="admin-action-btn" style={{ padding: "4px 10px", borderRadius: 7, border: "none", background: "rgba(220,38,38,0.1)", color: "#DC2626", cursor: "pointer", fontSize: 11, fontWeight: 700 }}>✕</button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tier breakdown */}
                <div style={{ background: "var(--surface)", borderRadius: 14, border: "1px solid var(--border)", padding: "16px 20px" }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text)", marginBottom: 18 }}>Members by Tier</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {Object.entries(tierCounts).map(([tier, count]) => {
                      const color = TIER_COLORS[tier] || "#059669";
                      const pct = memberCount ? Math.round((count / memberCount) * 100) : 0;
                      return (
                        <div key={tier}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                            <span style={{ fontSize: 12, fontWeight: 600, color: "var(--text-2)" }}>{tier}</span>
                            <span style={{ fontSize: 12, color: "var(--text-3)" }}>{count} · {pct}%</span>
                          </div>
                          <div style={{ height: 6, borderRadius: 999, background: "var(--surface-2)" }}>
                            <div style={{ height: "100%", width: `${pct}%`, background: color, borderRadius: 999, transition: "width 0.6s cubic-bezier(.4,0,.2,1)" }} />
                          </div>
                        </div>
                      );
                    })}
                    {Object.keys(tierCounts).length === 0 && <div style={{ color: "var(--text-3)", fontSize: 13 }}>No members yet</div>}
                  </div>

                  {/* Status breakdown */}
                  {memberCount > 0 && (
                    <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--border)" }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "var(--text-2)", marginBottom: 12 }}>By Status</div>
                      <div style={{ display: "flex", gap: 10 }}>
                        {[
                          { label: "Approved", count: approvedCount, color: "#059669" },
                          { label: "Pending",  count: pendingCount,  color: "#D97706" },
                          { label: "Rejected", count: rejectedCount, color: "#DC2626" },
                        ].map(({ label, count, color }) => (
                          <div key={label} style={{ flex: 1, textAlign: "center", padding: "10px 0", borderRadius: 10, background: `${color}08`, border: `1px solid ${color}20` }}>
                            <div style={{ fontSize: 18, fontWeight: 800, color, fontFamily: "'Syne',system-ui,sans-serif" }}>{count}</div>
                            <div style={{ fontSize: 10, color: "var(--text-3)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Quick analytics */}
              {analytics?.topPages && analytics.topPages.length > 0 && (
                <div style={{ background: "var(--surface)", borderRadius: 14, border: "1px solid var(--border)", padding: "16px 20px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>Top Pages</span>
                    <button onClick={() => setTab("analytics")} style={{ fontSize: 11, color: "var(--sf)", background: "none", border: "none", cursor: "pointer", fontWeight: 600, display: "flex", alignItems: "center", gap: 3 }}>
                      Full analytics <ChevronRight size={12} />
                    </button>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 8 }}>
                    {analytics.topPages.slice(0, 6).map((p, i) => {
                      const max = analytics.topPages[0]?.views || 1;
                      return (
                        <div key={p.path} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ fontSize: 11, color: "var(--text-3)", minWidth: 16, textAlign: "right" }}>{i + 1}</span>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                              <span style={{ fontSize: 11, color: "var(--text-2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{p.path}</span>
                              <span style={{ fontSize: 11, fontWeight: 700, color: "var(--text)", flexShrink: 0, marginLeft: 8 }}>{p.views}</span>
                            </div>
                            <div style={{ height: 4, borderRadius: 999, background: "var(--surface-2)" }}>
                              <div style={{ height: "100%", width: `${(p.views / max) * 100}%`, background: "linear-gradient(90deg,var(--sf),var(--sf-hi))", borderRadius: 999 }} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ── MEMBERS ── */}
          {!loading && tab === "members" && (
            <div>
              {/* Reject modal */}
              {rejectNote && (
                <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
                  <div style={{ background: "var(--surface)", borderRadius: 20, padding: 32, maxWidth: 440, width: "100%", boxShadow: "0 24px 64px rgba(0,0,0,0.2)" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(220,38,38,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                      <XCircle size={22} style={{ color: "#DC2626" }} />
                    </div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>Reject Application</div>
                    <p style={{ fontSize: 13, color: "var(--text-3)", margin: "0 0 16px", lineHeight: 1.6 }}>Add an optional note to explain the decision. This will be included in the email sent to the applicant.</p>
                    <textarea value={rejectNote.note} onChange={e => setRejectNote({ ...rejectNote, note: e.target.value })}
                      placeholder="Optional note to applicant…" rows={3}
                      style={{ width: "100%", padding: "10px 14px", borderRadius: 10, border: "1px solid var(--border-2)", background: "var(--surface-2)", color: "var(--text)", fontSize: 14, resize: "vertical", outline: "none", boxSizing: "border-box", fontFamily: "system-ui,sans-serif" }}
                    />
                    <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                      <button onClick={() => setRejectNote(null)} style={{ flex: 1, padding: "10px", borderRadius: 10, border: "1px solid var(--border-2)", background: "transparent", color: "var(--text-2)", cursor: "pointer", fontSize: 13, fontWeight: 600 }}>Cancel</button>
                      <button onClick={() => rejectMember(rejectNote.id, rejectNote.note)} disabled={actionLoading === rejectNote.id + ":reject"}
                        style={{ flex: 1, padding: "10px", borderRadius: 10, border: "none", background: "#DC2626", color: "#fff", cursor: "pointer", fontSize: 13, fontWeight: 700 }}>
                        {actionLoading === rejectNote.id + ":reject" ? "Rejecting…" : "Confirm Reject"}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Controls */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 20 }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {(["all", "pending", "approved", "rejected"] as const).map(s => {
                    const counts: Record<string, number> = { all: memberCount, pending: pendingCount, approved: approvedCount, rejected: rejectedCount };
                    const cfg = STATUS_CONFIG[s as keyof typeof STATUS_CONFIG];
                    const color = cfg?.color || "var(--sf)";
                    const active = statusFilter === s;
                    return (
                      <button key={s} onClick={() => setStatusFilter(s)} style={{
                        padding: "6px 14px", borderRadius: 999, border: active ? "none" : "1px solid var(--border-2)",
                        cursor: "pointer", fontSize: 12, fontWeight: 700, transition: "all 0.15s",
                        background: active ? color : "var(--surface)",
                        color: active ? "#fff" : "var(--text-2)", textTransform: "capitalize",
                      }}>
                        {s} ({counts[s] ?? 0})
                      </button>
                    );
                  })}
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <div style={{ flex: 1, position: "relative" }}>
                    <Search size={14} style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-3)" }} />
                    <input type="search" placeholder="Search by name, email or city…" value={memberSearch}
                      onChange={e => setMemberSearch(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px 10px 36px", borderRadius: 10, border: "1px solid var(--border-2)", background: "var(--surface)", color: "var(--text)", fontSize: 13, outline: "none", boxSizing: "border-box" }}
                    />
                  </div>
                  <span style={{ fontSize: 12, color: "var(--text-3)", whiteSpace: "nowrap" }}>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
                  <button onClick={downloadCSV} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 14px", borderRadius: 10, border: "1px solid var(--border-2)", background: "var(--surface)", color: "var(--text-2)", cursor: "pointer", fontSize: 12, fontWeight: 600, whiteSpace: "nowrap" }}>
                    <Download size={13} /> Export CSV
                  </button>
                </div>
              </div>

              {/* Table */}
              <div style={{ background: "var(--surface)", borderRadius: 14, border: "1px solid var(--border)", overflow: "hidden" }}>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                    <thead>
                      <tr style={{ background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}>
                        {["Member", "Email", "Location", "Tier", "Status", "Joined", "Actions"].map(h => (
                          <th key={h} style={{ padding: "11px 16px", textAlign: "left", fontWeight: 700, color: "var(--text-3)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.08em", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {filtered.map((m, i) => {
                        const sc = STATUS_CONFIG[m.status];
                        const StatusIcon = sc.icon;
                        return (
                          <tr key={m.id} className="admin-tr" style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--border)" : "none", transition: "background 0.1s" }}>
                            <td style={{ padding: "11px 16px" }}>
                              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                <div style={{ width: 34, height: 34, borderRadius: "50%", background: `linear-gradient(135deg,${TIER_COLORS[m.tier] || "#059669"},${TIER_COLORS[m.tier] || "#059669"}99)`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 13, flexShrink: 0 }}>
                                  {m.full_name.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <div style={{ fontWeight: 600, color: "var(--text)" }}>{m.full_name}</div>
                                  {m.profession && <div style={{ fontSize: 11, color: "var(--text-3)", display: "flex", alignItems: "center", gap: 3, marginTop: 1 }}><Briefcase size={9} />{m.profession}</div>}
                                </div>
                              </div>
                            </td>
                            <td style={{ padding: "11px 16px" }}>
                              <a href={`mailto:${m.email}`} style={{ color: "var(--text-2)", textDecoration: "none", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                                <Mail size={11} />{m.email}
                              </a>
                            </td>
                            <td style={{ padding: "11px 16px", color: "var(--text-2)", fontSize: 12 }}>
                              {m.city ? <span style={{ display: "flex", alignItems: "center", gap: 4 }}><MapPin size={11} />{m.city}</span> : <span style={{ color: "var(--text-3)" }}>—</span>}
                            </td>
                            <td style={{ padding: "11px 16px" }}>
                              <span style={{ padding: "3px 9px", borderRadius: 999, fontSize: 10, fontWeight: 700, background: `${TIER_COLORS[m.tier] || "#059669"}15`, color: TIER_COLORS[m.tier] || "#059669" }}>
                                {m.tier}
                              </span>
                            </td>
                            <td style={{ padding: "11px 16px" }}>
                              <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: "3px 9px", borderRadius: 999, fontSize: 10, fontWeight: 700, background: sc.bg, color: sc.color }}>
                                <StatusIcon size={10} />{sc.label}
                              </span>
                            </td>
                            <td style={{ padding: "11px 16px", color: "var(--text-3)", fontSize: 12, whiteSpace: "nowrap" }}>
                              <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Calendar size={11} />{new Date(m.created_at).toLocaleDateString()}</span>
                            </td>
                            <td style={{ padding: "11px 16px" }}>
                              <div style={{ display: "flex", gap: 5 }}>
                                {m.status !== "approved" && (
                                  <button onClick={() => approveMember(m.id)} disabled={!!actionLoading} className="admin-action-btn"
                                    style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, border: "none", background: "rgba(5,150,105,0.1)", color: "#059669", cursor: "pointer", fontSize: 11, fontWeight: 700 }}>
                                    <CheckCircle size={11} />{actionLoading === m.id + ":approve" ? "…" : "Approve"}
                                  </button>
                                )}
                                {m.status !== "rejected" && (
                                  <button onClick={() => setRejectNote({ id: m.id, note: "" })} disabled={!!actionLoading} className="admin-action-btn"
                                    style={{ display: "flex", alignItems: "center", gap: 4, padding: "5px 10px", borderRadius: 7, border: "none", background: "rgba(220,38,38,0.1)", color: "#DC2626", cursor: "pointer", fontSize: 11, fontWeight: 700 }}>
                                    <XCircle size={11} /> Reject
                                  </button>
                                )}
                                <button onClick={() => deleteMember(m.id)} title="Delete" className="admin-action-btn"
                                  style={{ padding: "5px 8px", borderRadius: 7, border: "1px solid var(--border-2)", background: "transparent", color: "var(--text-3)", cursor: "pointer", fontSize: 11, lineHeight: 1 }}>✕</button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                      {filtered.length === 0 && (
                        <tr><td colSpan={7} style={{ padding: "48px 20px", textAlign: "center", color: "var(--text-3)", fontSize: 13 }}>
                          {memberSearch || statusFilter !== "all" ? "No members match the current filters." : "No members yet."}
                        </td></tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ── ANALYTICS ── */}
          {!loading && tab === "analytics" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Summary cards */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 14 }}>
                {[
                  { label: "Total Views",   value: analytics?.totalViews ?? "–",   icon: Eye,         color: "#4F46E5" },
                  { label: "Today",         value: analytics?.todayViews ?? "–",   icon: TrendingUp,  color: "#059669" },
                  { label: "Unique Pages",  value: analytics?.topPages?.length ?? "–", icon: BarChart3, color: "#F97316" },
                  { label: "Countries",     value: analytics?.byCountry?.length ?? "–", icon: Globe,   color: "#DC2626" },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} style={{ padding: "16px 18px", borderRadius: 14, background: "var(--surface)", border: "1px solid var(--border)", borderLeft: `3px solid ${color}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</span>
                      <Icon size={13} style={{ color, opacity: 0.7 }} />
                    </div>
                    <div style={{ fontSize: 24, fontWeight: 800, color: "var(--text)", fontFamily: "'Syne',system-ui,sans-serif" }}>{value}</div>
                  </div>
                ))}
              </div>

              {/* Period picker */}
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "var(--text-3)", fontWeight: 600 }}>Period:</span>
                {[7, 30, 90].map(d => (
                  <button key={d} onClick={() => setDays(d)} style={{
                    padding: "5px 12px", borderRadius: 999, border: days === d ? "none" : "1px solid var(--border-2)",
                    fontSize: 12, fontWeight: 700, cursor: "pointer",
                    background: days === d ? "var(--sf)" : "var(--surface)",
                    color: days === d ? "#fff" : "var(--text-2)", transition: "all 0.15s",
                  }}>{d}d</button>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                {/* Top pages */}
                <div style={{ background: "var(--surface)", borderRadius: 14, border: "1px solid var(--border)", padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                    <div style={{ padding: 7, borderRadius: 8, background: "rgba(249,115,22,0.1)" }}><BarChart3 size={14} style={{ color: "var(--sf)", display: "block" }} /></div>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>Top Pages</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {(analytics?.topPages || []).map((p, i) => {
                      const max = analytics?.topPages?.[0]?.views || 1;
                      return (
                        <div key={p.path}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                            <span style={{ fontSize: 12, color: "var(--text-2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "78%" }}>
                              <span style={{ color: "var(--text-3)", marginRight: 6, fontSize: 10 }}>{i + 1}</span>{p.path}
                            </span>
                            <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)", flexShrink: 0 }}>{p.views.toLocaleString()}</span>
                          </div>
                          <div style={{ height: 5, borderRadius: 999, background: "var(--surface-2)" }}>
                            <div style={{ height: "100%", width: `${(p.views / max) * 100}%`, background: "linear-gradient(90deg,#F97316,#FB923C)", borderRadius: 999, transition: "width 0.5s" }} />
                          </div>
                        </div>
                      );
                    })}
                    {!analytics?.topPages?.length && <div style={{ color: "var(--text-3)", fontSize: 13, padding: "16px 0" }}>No page view data yet</div>}
                  </div>
                </div>

                {/* By country */}
                <div style={{ background: "var(--surface)", borderRadius: 14, border: "1px solid var(--border)", padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                    <div style={{ padding: 7, borderRadius: 8, background: "rgba(79,70,229,0.1)" }}><Globe size={14} style={{ color: "#4F46E5", display: "block" }} /></div>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>Visitors by Country</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {(analytics?.byCountry || []).map((c) => {
                      const max = analytics?.byCountry?.[0]?.views || 1;
                      const pct = Math.round((c.views / (analytics?.totalViews || 1)) * 100);
                      return (
                        <div key={c.country}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                            <span style={{ fontSize: 12, color: "var(--text-2)" }}>{c.country}</span>
                            <span style={{ fontSize: 12, color: "var(--text-3)" }}>{c.views.toLocaleString()} · {pct}%</span>
                          </div>
                          <div style={{ height: 5, borderRadius: 999, background: "var(--surface-2)" }}>
                            <div style={{ height: "100%", width: `${(c.views / max) * 100}%`, background: "linear-gradient(90deg,#4F46E5,#6366F1)", borderRadius: 999, transition: "width 0.5s" }} />
                          </div>
                        </div>
                      );
                    })}
                    {!analytics?.byCountry?.length && <div style={{ color: "var(--text-3)", fontSize: 13, padding: "16px 0" }}>No country data yet</div>}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
