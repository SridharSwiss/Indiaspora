import { createClient } from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const canton = searchParams.get("canton");
  const category = searchParams.get("category");

  try {
    const supabase = await createClient();
    let query = supabase
      .from("directory_listings")
      .select("id, name, category, city, canton, website_url, google_maps_url, description, languages_spoken, cuisine_type, speciality, community_rating, rating_count, last_verified_at")
      .eq("is_published", true)
      .order("community_rating", { ascending: false });

    if (canton && canton !== "ALL") query = query.eq("canton", canton);
    if (category) query = query.eq("category", category);

    const { data, error } = await query.limit(100);
    if (error) throw error;
    return NextResponse.json({ data });
  } catch {
    return NextResponse.json({ error: "Database not configured" }, { status: 503 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("directory_listings")
      .insert({
        ...body,
        is_published: false,
        is_verified: false,
      })
      .select("id")
      .single();

    if (error) throw error;
    return NextResponse.json({ id: data.id, message: "Listing submitted for review" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
