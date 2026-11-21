import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

// Deletes the signed-in user's account and personal data (Google Play account-deletion requirement).
// Web: uses the session cookie. Android app: send "Authorization: Bearer <supabase access token>".
export async function POST(req: NextRequest) {
  const admin = createAdminClient();
  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "");
  const { data: { user } } = bearer
    ? await admin.auth.getUser(bearer)
    : await (await createClient()).auth.getUser();
  if (!user) return NextResponse.json({ error: "Please log in first" }, { status: 401 });

  const email = (user.email ?? "").toLowerCase();
  const steps = await Promise.all([
    admin.from("members").delete().eq("user_id", user.id),
    email ? admin.from("members").delete().ilike("email", email) : Promise.resolve({ error: null }),
    email ? admin.from("newsletter_subscribers").delete().ilike("email", email) : Promise.resolve({ error: null }),
  ]);
  const failed = steps.find(s => s.error);
  if (failed?.error) return NextResponse.json({ error: "Could not delete your data. Please contact us." }, { status: 500 });

  // Removes the login itself; login history and listings cascade, analytics rows are anonymised (user_id set null).
  const { error } = await admin.auth.admin.deleteUser(user.id);
  if (error) return NextResponse.json({ error: "Could not delete your account. Please contact us." }, { status: 500 });

  if (!bearer) await (await createClient()).auth.signOut();
  return NextResponse.json({ ok: true });
}
