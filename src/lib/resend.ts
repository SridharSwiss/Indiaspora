import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY || "placeholder");
}

export async function sendWelcomeEmail(email: string, name: string) {
  return getResend().emails.send({
    from: "Indiaspora <hello@indiaspora.ch>",
    to: email,
    subject: "Welcome to Indiaspora — Switzerland's Indian Community Hub 🪔",
    html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F6F2;font-family:'Plus Jakarta Sans',system-ui,sans-serif;">
  <div style="max-width:580px;margin:40px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
    <!-- Header -->
    <div style="background:linear-gradient(135deg,#F97316,#DC2626);padding:40px 36px;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🪔</div>
      <h1 style="margin:0;color:#fff;font-size:26px;font-weight:800;letter-spacing:-0.03em">Welcome to Indiaspora</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px">Switzerland's Indian Community Hub</p>
    </div>
    <!-- Body -->
    <div style="padding:36px">
      <p style="font-size:16px;color:#09090D;margin:0 0 16px">Namaste ${name},</p>
      <p style="font-size:15px;color:#52525C;line-height:1.7;margin:0 0 24px">
        We're thrilled to welcome you to Indiaspora — your definitive guide to Indian life in Switzerland.
        You're now part of a vibrant community of over 24,500 Indians across all 26 cantons.
      </p>
      <!-- What you can do -->
      <div style="background:#F7F6F2;border-radius:14px;padding:24px;margin-bottom:24px">
        <p style="margin:0 0 16px;font-weight:700;font-size:14px;color:#09090D;text-transform:uppercase;letter-spacing:0.08em">What's available to you</p>
        <div style="display:flex;flex-direction:column;gap:12px">
          ${[
            ["🍛","Indian Restaurants & Grocery","Discover the best dining and grocery stores across Switzerland"],
            ["🏛️","Community Associations","Connect with 150+ organisations and cultural groups"],
            ["🎉","Festivals & Events","Stay updated on Diwali, Holi and community gatherings"],
            ["💼","Business Network","Find jobs, startups and professional services"],
            ["🏠","Living Guide","Housing, healthcare, banking and legal guidance"],
          ].map(([icon, title, desc]) => `
          <div style="display:flex;gap:12px;align-items:flex-start">
            <span style="font-size:20px;flex-shrink:0">${icon}</span>
            <div>
              <div style="font-weight:600;font-size:14px;color:#09090D">${title}</div>
              <div style="font-size:13px;color:#52525C;margin-top:2px">${desc}</div>
            </div>
          </div>`).join("")}
        </div>
      </div>
      <a href="https://indiaspora.ch" style="display:block;text-align:center;background:linear-gradient(135deg,#F97316,#FB923C);color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:700;font-size:15px">
        Explore the Community →
      </a>
    </div>
    <!-- Footer -->
    <div style="padding:24px 36px;border-top:1px solid #F2F0EB;text-align:center">
      <p style="font-size:12px;color:#A1A1AA;margin:0">
        © ${new Date().getFullYear()} Indiaspora · Switzerland<br>
        <a href="https://indiaspora.ch/privacy" style="color:#F97316;text-decoration:none">Privacy Policy</a> ·
        <a href="https://indiaspora.ch/terms" style="color:#F97316;text-decoration:none">Terms</a>
      </p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendPendingEmail(email: string, name: string) {
  return getResend().emails.send({
    from: "Indiaspora <hello@indiaspora.ch>",
    to: email,
    subject: "We received your Indiaspora application — you'll hear from us soon",
    html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F7F6F2;font-family:system-ui,sans-serif;">
  <div style="max-width:540px;margin:40px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
    <div style="background:linear-gradient(135deg,#F97316,#DC2626);padding:40px 36px;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">🪔</div>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">Application Received</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px">Indiaspora · Switzerland's Indian Community Hub</p>
    </div>
    <div style="padding:36px">
      <p style="font-size:16px;color:#09090D;margin:0 0 16px">Namaste ${name},</p>
      <p style="font-size:15px;color:#52525C;line-height:1.7;margin:0 0 24px">
        Thank you for applying to join Indiaspora! We've received your application and our team will review it shortly.
        You'll receive a confirmation email once your membership is approved.
      </p>
      <div style="background:#FFF7ED;border:1px solid #FED7AA;border-radius:12px;padding:20px;margin-bottom:24px">
        <p style="margin:0;font-size:14px;color:#9A3412;font-weight:600">⏳ Pending Review</p>
        <p style="margin:8px 0 0;font-size:13px;color:#C2410C;line-height:1.6">
          Your application is currently under review. We typically respond within 1–2 business days.
        </p>
      </div>
      <a href="https://indiaspora.ch" style="display:block;text-align:center;background:linear-gradient(135deg,#F97316,#FB923C);color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:700;font-size:15px">
        Explore Indiaspora →
      </a>
    </div>
    <div style="padding:24px 36px;border-top:1px solid #F2F0EB;text-align:center">
      <p style="font-size:12px;color:#A1A1AA;margin:0">© ${new Date().getFullYear()} Indiaspora · Switzerland</p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendApprovalEmail(email: string, name: string, tier: string) {
  return getResend().emails.send({
    from: "Indiaspora <hello@indiaspora.ch>",
    to: email,
    subject: "Welcome to Indiaspora — your membership is approved! 🪔",
    html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F7F6F2;font-family:system-ui,sans-serif;">
  <div style="max-width:540px;margin:40px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
    <div style="background:linear-gradient(135deg,#059669,#10B981);padding:40px 36px;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">✅</div>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">You're In!</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px">Your Indiaspora membership is approved</p>
    </div>
    <div style="padding:36px">
      <p style="font-size:16px;color:#09090D;margin:0 0 16px">Namaste ${name},</p>
      <p style="font-size:15px;color:#52525C;line-height:1.7;margin:0 0 24px">
        Great news! Your <strong>${tier}</strong> membership has been approved.
        Welcome to Switzerland's Indian community hub — you're now part of a vibrant network of over 24,500 Indians across all 26 cantons.
      </p>
      <a href="https://indiaspora.ch" style="display:block;text-align:center;background:linear-gradient(135deg,#059669,#10B981);color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:700;font-size:15px">
        Explore the Community →
      </a>
    </div>
    <div style="padding:24px 36px;border-top:1px solid #F2F0EB;text-align:center">
      <p style="font-size:12px;color:#A1A1AA;margin:0">© ${new Date().getFullYear()} Indiaspora · Switzerland</p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendRejectionEmail(email: string, name: string, note?: string) {
  return getResend().emails.send({
    from: "Indiaspora <hello@indiaspora.ch>",
    to: email,
    subject: "Update on your Indiaspora application",
    html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F7F6F2;font-family:system-ui,sans-serif;">
  <div style="max-width:540px;margin:40px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
    <div style="background:linear-gradient(135deg,#6B7280,#9CA3AF);padding:40px 36px;text-align:center">
      <div style="font-size:36px;margin-bottom:8px">📋</div>
      <h1 style="margin:0;color:#fff;font-size:22px;font-weight:800">Application Update</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px">Indiaspora · Switzerland's Indian Community Hub</p>
    </div>
    <div style="padding:36px">
      <p style="font-size:16px;color:#09090D;margin:0 0 16px">Namaste ${name},</p>
      <p style="font-size:15px;color:#52525C;line-height:1.7;margin:0 0 24px">
        Thank you for your interest in joining Indiaspora. After reviewing your application, we're unable to approve your membership at this time.
      </p>
      ${note ? `<div style="background:#F9FAFB;border-left:4px solid #D1D5DB;border-radius:0 12px 12px 0;padding:16px 20px;margin-bottom:24px"><p style="margin:0;font-size:14px;color:#374151;line-height:1.6"><strong>Note from our team:</strong><br>${note}</p></div>` : ""}
      <p style="font-size:14px;color:#52525C;line-height:1.7;margin:0 0 24px">
        You're still welcome to explore Indiaspora as a visitor, and you may reapply in the future.
        If you have any questions, please reach out to us at <a href="mailto:hello@indiaspora.ch" style="color:#F97316">hello@indiaspora.ch</a>.
      </p>
      <a href="https://indiaspora.ch" style="display:block;text-align:center;background:linear-gradient(135deg,#F97316,#FB923C);color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:700;font-size:15px">
        Visit Indiaspora →
      </a>
    </div>
    <div style="padding:24px 36px;border-top:1px solid #F2F0EB;text-align:center">
      <p style="font-size:12px;color:#A1A1AA;margin:0">© ${new Date().getFullYear()} Indiaspora · Switzerland</p>
    </div>
  </div>
</body>
</html>`,
  });
}

export async function sendMembershipConfirmEmail(email: string, name: string, tier: string) {
  return getResend().emails.send({
    from: "Indiaspora <hello@indiaspora.ch>",
    to: email,
    subject: `Your ${tier} membership is confirmed — Indiaspora`,
    html: `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#F7F6F2;font-family:system-ui,sans-serif;">
  <div style="max-width:540px;margin:40px auto;background:#fff;border-radius:20px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.06)">
    <div style="background:linear-gradient(135deg,#4F46E5,#6366F1);padding:36px;text-align:center">
      <div style="font-size:40px">✅</div>
      <h1 style="margin:12px 0 0;color:#fff;font-size:22px;font-weight:800">${tier} Membership Confirmed</h1>
    </div>
    <div style="padding:36px">
      <p style="font-size:15px;color:#52525C;line-height:1.7">Hi ${name}, your <strong>${tier}</strong> membership is now active.
      Thank you for supporting the Indian community in Switzerland!</p>
      <a href="https://indiaspora.ch/profile" style="display:block;text-align:center;background:linear-gradient(135deg,#4F46E5,#6366F1);color:#fff;text-decoration:none;padding:14px 28px;border-radius:999px;font-weight:700;margin-top:24px">
        View Your Profile →
      </a>
    </div>
  </div>
</body>
</html>`,
  });
}
