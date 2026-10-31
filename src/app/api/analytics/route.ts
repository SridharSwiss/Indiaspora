import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { parseUA } from "@/lib/ua";

export async function POST(req: NextRequest) {
  try {
    const { path, referrer, sessionId, visitorId, newSession, prevPath, prevDuration } = await req.json();
    const supabase = createAdminClient();

    const country = req.headers.get("x-vercel-ip-country") || null;
    const ua = req.headers.get("user-agent") || null;
    const { device, browser, os, bot } = parseUA(ua);
    if (bot) return NextResponse.json({ ok: true });

    // Identify the user server-side (never trust a client-supplied id)
    let userId: string | null = null;
    let email: string | null = null;
    let fullName: string | null = null;
    try {
      const authClient = await createClient();
      const { data: { user } } = await authClient.auth.getUser();
      userId = user?.id ?? null;
      email = user?.email ?? null;
      fullName = (user?.user_metadata?.full_name as string | undefined) ?? null;
    } catch { /* anonymous */ }

    if (prevPath && prevDuration !== null && sessionId) {
      const { data: last } = await supabase
        .from("page_views").select("id")
        .eq("session_id", sessionId).eq("path", prevPath)
        .order("created_at", { ascending: false }).limit(1).maybeSingle();
      if (last) await supabase.from("page_views").update({ duration_seconds: prevDuration }).eq("id", last.id);
    }

    await supabase.from("page_views").insert({
      path: path || "/",
      pathname: path || "/",
      referrer: referrer || null,
      country, device, browser, os,
      user_agent: ua,
      session_id: sessionId ?? null,
      visitor_id: visitorId ?? null,
      user_id: userId,
    });

    if (visitorId && visitorId !== "unknown") {
      const now = new Date().toISOString();
      const { data: v } = await supabase.from("site_visitors")
        .select("visit_count, page_count, user_id, email, full_name").eq("visitor_id", visitorId).maybeSingle();
      if (!v) {
        await supabase.from("site_visitors").insert({
          visitor_id: visitorId, user_id: userId, email, full_name: fullName,
          country, device, browser, os, first_referrer: referrer || null, last_path: path || "/",
        });
      } else {
        await supabase.from("site_visitors").update({
          last_seen: now, last_path: path || "/",
          visit_count: v.visit_count + (newSession ? 1 : 0),
          page_count: v.page_count + 1,
          country, device, browser, os,
          user_id: userId ?? v.user_id, email: email ?? v.email, full_name: fullName ?? v.full_name,
        }).eq("visitor_id", visitorId);
      }
    }

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
    const days = Math.min(Math.max(parseInt(url.searchParams.get("days") ?? "30") || 30, 1), 365);
    const since = new Date(Date.now() - days * 86400000).toISOString();

    const [viewsRes, visitorsRes, usersRes, loginsRes] = await Promise.all([
      supabase.from("page_views")
        .select("path, country, device, browser, os, referrer, visitor_id, user_id, session_id, duration_seconds, created_at")
        .gte("created_at", since).order("created_at", { ascending: false }).limit(20000),
      supabase.from("site_visitors").select("visitor_id, first_seen, last_seen, user_id").gte("last_seen", since).limit(20000),
      supabase.from("site_visitors")
        .select("visitor_id, user_id, email, full_name, first_seen, last_seen, visit_count, page_count, country, device, browser, os, last_path")
        .not("user_id", "is", null).order("last_seen", { ascending: false }).limit(500),
      supabase.from("user_logins").select("user_id, email, provider, country, device, browser, os, created_at")
        .gte("created_at", since).order("created_at", { ascending: false }).limit(2000),
    ]);

    const views = viewsRes.data ?? [];
    const tally = (key: "path" | "country" | "device" | "browser" | "os") => {
      const m: Record<string, number> = {};
      for (const r of views) { const k = (r[key] as string | null) || "Unknown"; m[k] = (m[k] || 0) + 1; }
      return Object.entries(m).sort((a, b) => b[1] - a[1]);
    };

    // Daily series (views, unique visitors) for the period
    const daily = new Map<string, { views: number; visitors: Set<string> }>();
    for (let i = days - 1; i >= 0; i--) {
      daily.set(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10), { views: 0, visitors: new Set() });
    }
    for (const r of views) {
      const d = daily.get(r.created_at.slice(0, 10));
      if (d) { d.views++; if (r.visitor_id) d.visitors.add(r.visitor_id); }
    }

    const visitors = visitorsRes.data ?? [];
    const newVisitors = visitors.filter(v => v.first_seen >= since).length;

    // Per-user aggregates
    const loginCounts = new Map<string, number>();
    for (const l of loginsRes.data ?? []) if (l.user_id) loginCounts.set(l.user_id, (loginCounts.get(l.user_id) ?? 0) + 1);
    const viewsByUser = new Map<string, { views: number; duration: number; pages: Record<string, number> }>();
    for (const r of views) {
      if (!r.user_id) continue;
      const u = viewsByUser.get(r.user_id) ?? { views: 0, duration: 0, pages: {} };
      u.views++; u.duration += r.duration_seconds ?? 0; u.pages[r.path] = (u.pages[r.path] || 0) + 1;
      viewsByUser.set(r.user_id, u);
    }
    // One row per user (merge their browsers)
    const userMap = new Map<string, any>();
    for (const v of usersRes.data ?? []) {
      const ex = userMap.get(v.user_id);
      if (!ex) userMap.set(v.user_id, { ...v });
      else {
        ex.visit_count += v.visit_count; ex.page_count += v.page_count;
        if (v.last_seen > ex.last_seen) Object.assign(ex, { last_seen: v.last_seen, last_path: v.last_path, device: v.device, browser: v.browser, os: v.os, country: v.country });
        if (v.first_seen < ex.first_seen) ex.first_seen = v.first_seen;
      }
    }
    const users = [...userMap.values()].map(u => {
      const a = viewsByUser.get(u.user_id);
      const top = a ? Object.entries(a.pages).sort((x, y) => y[1] - x[1]).slice(0, 3).map(([path, n]) => ({ path, views: n })) : [];
      return {
        userId: u.user_id, email: u.email, name: u.full_name, firstSeen: u.first_seen, lastSeen: u.last_seen,
        visits: u.visit_count, pageViews: u.page_count, viewsInPeriod: a?.views ?? 0,
        timeSpentSeconds: a?.duration ?? 0, logins: loginCounts.get(u.user_id) ?? 0,
        country: u.country, device: u.device, browser: u.browser, os: u.os, lastPath: u.last_path, topPages: top,
      };
    }).sort((x, y) => y.lastSeen.localeCompare(x.lastSeen));

    const todayStr = new Date().toISOString().slice(0, 10);
    const pair = (arr: [string, number][], n = 10, k = "name") => arr.slice(0, n).map(([name, v]) => ({ [k]: name, views: v }));

    return NextResponse.json({
      totalViews: views.length,
      todayViews: daily.get(todayStr)?.views ?? 0,
      uniqueVisitors: visitors.length,
      newVisitors,
      returningVisitors: visitors.length - newVisitors,
      loggedInVisitors: visitors.filter(v => v.user_id).length,
      registeredUsers: users.length,
      totalLogins: loginsRes.data?.length ?? 0,
      topPages: pair(tally("path"), 10, "path"),
      byCountry: pair(tally("country"), 10, "country"),
      byDevice: pair(tally("device"), 6, "name"),
      byBrowser: pair(tally("browser"), 6, "name"),
      byOs: pair(tally("os"), 6, "name"),
      daily: [...daily.entries()].map(([date, d]) => ({ date, views: d.views, visitors: d.visitors.size })),
      users,
      recentLogins: (loginsRes.data ?? []).slice(0, 25),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
