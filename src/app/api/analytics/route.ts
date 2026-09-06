import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(req: NextRequest) {
  try {
    const { path, referrer, sessionId, userId, prevPath, prevDuration } = await req.json();
    const supabase = createAdminClient();

    const country = req.headers.get("x-vercel-ip-country") || null;
    const ua = req.headers.get("user-agent") || null;

    // Update duration on previous page view if we have the data
    if (prevPath && prevDuration !== null && sessionId) {
      await supabase
        .from("page_views")
        .update({ duration_seconds: prevDuration })
        .eq("session_id", sessionId)
        .eq("path", prevPath)
        .order("created_at", { ascending: false })
        .limit(1);
    }

    await supabase.from("page_views").insert({
      path: path || "/",
      referrer: referrer || null,
      country,
      user_agent: ua,
      session_id: sessionId ?? null,
      user_id: userId ?? null,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

export async function GET(req: NextRequest) {
  try {
    const authClient = await createClient();
    const { data: { user } } = await authClient.auth.getUser();
    if (!user || user.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createAdminClient();
    const url = new URL(req.url);
    const days = parseInt(url.searchParams.get("days") ?? "30");
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    const [topPagesRes, byCountryRes, totalRes, todayRes, sessionsRes] = await Promise.all([
      supabase.from("page_views").select("path").gte("created_at", since),
      supabase.from("page_views").select("country").gte("created_at", since),
      supabase.from("page_views").select("*", { count: "exact", head: true }).gte("created_at", since),
      supabase.from("page_views").select("*", { count: "exact", head: true }).gte("created_at", new Date(Date.now() - 86400000).toISOString()),
      // User sessions: join with auth users via user_id
      supabase
        .from("page_views")
        .select("user_id, session_id, path, created_at, duration_seconds, country")
        .gte("created_at", since)
        .not("user_id", "is", null)
        .order("created_at", { ascending: false })
        .limit(500),
    ]);

    const pageCounts: Record<string, number> = {};
    for (const r of topPagesRes.data ?? []) {
      pageCounts[r.path] = (pageCounts[r.path] || 0) + 1;
    }
    const countryCounts: Record<string, number> = {};
    for (const r of byCountryRes.data ?? []) {
      const c = r.country || "Unknown";
      countryCounts[c] = (countryCounts[c] || 0) + 1;
    }

    // Aggregate sessions by user+session
    type SessionRow = { userId: string; sessionId: string; pages: string[]; startedAt: string; lastSeen: string; totalDuration: number; country: string | null };
    const sessionMap = new Map<string, SessionRow>();
    for (const r of sessionsRes.data ?? []) {
      const key = `${r.user_id}::${r.session_id ?? "nosession"}`;
      const existing = sessionMap.get(key);
      if (!existing) {
        sessionMap.set(key, {
          userId: r.user_id,
          sessionId: r.session_id ?? "",
          pages: [r.path],
          startedAt: r.created_at,
          lastSeen: r.created_at,
          totalDuration: r.duration_seconds ?? 0,
          country: r.country,
        });
      } else {
        existing.pages.push(r.path);
        if (r.created_at < existing.startedAt) existing.startedAt = r.created_at;
        if (r.created_at > existing.lastSeen) existing.lastSeen = r.created_at;
        existing.totalDuration += r.duration_seconds ?? 0;
      }
    }

    // Fetch emails for all user_ids
    const userIds = [...new Set([...sessionMap.values()].map(s => s.userId))];
    const emailMap = new Map<string, string>();
    if (userIds.length > 0) {
      const { data: profiles } = await supabase
        .from("profiles")
        .select("id, email")
        .in("id", userIds);
      for (const p of profiles ?? []) emailMap.set(p.id, p.email);
    }

    const userSessions = [...sessionMap.values()]
      .sort((a, b) => b.lastSeen.localeCompare(a.lastSeen))
      .slice(0, 100)
      .map(s => ({
        userId: s.userId,
        email: emailMap.get(s.userId) ?? s.userId.slice(0, 8) + "…",
        sessionId: s.sessionId,
        pages: [...new Set(s.pages)],
        pageCount: s.pages.length,
        startedAt: s.startedAt,
        lastSeen: s.lastSeen,
        totalDuration: s.totalDuration,
        country: s.country,
      }));

    return NextResponse.json({
      totalViews: totalRes.count,
      todayViews: todayRes.count,
      topPages: Object.entries(pageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([path, views]) => ({ path, views })),
      byCountry: Object.entries(countryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([country, views]) => ({ country, views })),
      userSessions,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
