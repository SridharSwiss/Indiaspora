import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sendWelcomeEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { full_name, email, city, profession, interests, newsletter, tier } = body;

    if (!full_name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const supabase = await createClient();

    const { error } = await supabase.from("members").insert({
      full_name,
      email,
      city: city || null,
      profession: profession || null,
      interests: interests || [],
      newsletter: newsletter ?? true,
      tier: tier || "Community",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ error: "This email is already registered" }, { status: 409 });
      }
      throw error;
    }

    await sendWelcomeEmail(email, full_name).catch(console.error);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Member registration error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
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
    const page = parseInt(url.searchParams.get("page") ?? "1");
    const limit = 50;
    const from = (page - 1) * limit;

    const { data, count, error } = await supabase
      .from("members")
      .select("*", { count: "exact" })
      .order("created_at", { ascending: false })
      .range(from, from + limit - 1);

    if (error) throw error;
    return NextResponse.json({ data, count, page, limit });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch members" }, { status: 500 });
  }
}
