import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { sendApprovalEmail, sendRejectionEmail } from "@/lib/resend";

function isAdmin(email: string | undefined) {
  return email && email === process.env.ADMIN_EMAIL;
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authClient = await createClient();
    const { data: { user } } = await authClient.auth.getUser();
    if (!isAdmin(user?.email)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createAdminClient();
    const { id } = await params;
    const { action, note } = await req.json(); // action: "approve" | "reject"

    if (!["approve", "reject"].includes(action)) {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    const newStatus = action === "approve" ? "approved" : "rejected";

    const { data: member, error: fetchErr } = await supabase
      .from("members")
      .select("full_name, email, tier")
      .eq("id", id)
      .single();

    if (fetchErr || !member) {
      return NextResponse.json({ error: "Member not found" }, { status: 404 });
    }

    const { error } = await supabase
      .from("members")
      .update({
        status: newStatus,
        admin_note: note || null,
        reviewed_at: new Date().toISOString(),
      })
      .eq("id", id);

    if (error) throw error;

    if (action === "approve") {
      await sendApprovalEmail(member.email, member.full_name, member.tier).catch(console.error);
    } else {
      await sendRejectionEmail(member.email, member.full_name, note).catch(console.error);
    }

    return NextResponse.json({ success: true, status: newStatus });
  } catch (err) {
    console.error("Member update error:", err);
    return NextResponse.json({ error: "Failed to update member" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const authClient = await createClient();
    const { data: { user } } = await authClient.auth.getUser();
    if (!isAdmin(user?.email)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const supabase = createAdminClient();
    const { id } = await params;
    const { error } = await supabase.from("members").delete().eq("id", id);
    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete member" }, { status: 500 });
  }
}
