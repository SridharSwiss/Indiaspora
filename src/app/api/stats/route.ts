import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Live footer counter. Tracking started 31 Oct 2026; Jan–Oct 2026 is an estimate
// (~900 page views a month × 10 months), every view after that is a real count from Supabase.
const ESTIMATED_BEFORE_TRACKING = 9000;

export async function GET() {
  const { count } = await createAdminClient()
    .from("page_views").select("id", { count: "exact", head: true })
    .gte("created_at", "2026-01-01T00:00:00Z").lt("created_at", "2027-01-01T00:00:00Z");
  const tracked = count ?? 0;
  return NextResponse.json(
    { views: ESTIMATED_BEFORE_TRACKING + tracked, tracked, estimated: ESTIMATED_BEFORE_TRACKING },
    { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=3600" } },
  );
}
