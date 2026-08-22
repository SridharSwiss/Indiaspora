import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    const { path, referrer } = await req.json();
    const supabase = await createClient();

    const country = req.headers.get("x-vercel-ip-country") || null;
    const ua = req.headers.get("user-agent") || null;

    await supabase.from("page_views").insert({
      path: path || "/",
      referrer: referrer || null,
      country,
      user_agent: ua,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}

export async function GET(req: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user || user.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const days = parseInt(url.searchParams.get("days") ?? "30");
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

    const { data: topPages } = await supabase
      .from("page_views")
      .select("path")
      .gte("created_at", since);

    const { data: byCountry } = await supabase
      .from("page_views")
      .select("country")
      .gte("created_at", since);

    const { count: totalViews } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .gte("created_at", since);

    const { count: todayViews } = await supabase
      .from("page_views")
      .select("*", { count: "exact", head: true })
      .gte("created_at", new Date(Date.now() - 86400000).toISOString());

    // Aggregate client-side safe
    const pageCounts: Record<string, number> = {};
    for (const r of topPages ?? []) {
      pageCounts[r.path] = (pageCounts[r.path] || 0) + 1;
    }
    const countryCounts: Record<string, number> = {};
    for (const r of byCountry ?? []) {
      const c = r.country || "Unknown";
      countryCounts[c] = (countryCounts[c] || 0) + 1;
    }

    return NextResponse.json({
      totalViews,
      todayViews,
      topPages: Object.entries(pageCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([path, views]) => ({ path, views })),
      byCountry: Object.entries(countryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([country, views]) => ({ country, views })),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
