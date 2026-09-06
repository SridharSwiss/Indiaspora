import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ active: false });
  }

  const supabase = createAdminClient();
  const { data } = await supabase
    .from("newsletter_subscribers")
    .select("active")
    .eq("email", email.trim().toLowerCase())
    .maybeSingle();

  return NextResponse.json({ active: data?.active === true });
}
