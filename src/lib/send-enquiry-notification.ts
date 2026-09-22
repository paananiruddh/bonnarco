import { promises as fs } from "fs";
import path from "path";

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  area: string;
  message: string;
  receivedAt: string;
};

/**
 * Best-effort local record of enquiries, so nothing is silently lost
 * before real email delivery is configured. Never allowed to break the
 * request — see CONFIG-CHECKLIST.md for what's needed to go live.
 */
async function logEnquiryLocally(enquiry: Enquiry): Promise<void> {
  try {
    const dir = path.join(process.cwd(), ".data");
    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(
      path.join(dir, "enquiries.log"),
      `${JSON.stringify(enquiry)}\n`,
      "utf8",
    );
  } catch {
    // Filesystem may be read-only (e.g. serverless) — logging is a nice
    // to have, not a guarantee. Real delivery is the email send below.
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Sends the enquiry via Resend's REST API. Isolated in its own function so
 * swapping providers (SMTP, another ESP, or a direct Arcus integration
 * once available) only touches this file. Returns false — without
 * throwing — whenever delivery isn't configured or fails, so the caller
 * can decide how to respond.
 */
async function sendViaResend(enquiry: Enquiry): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return false;
  }

  const subject = `New enquiry from ${enquiry.name}${
    enquiry.area ? ` — ${enquiry.area}` : ""
  }`;

  const html = `
    <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(enquiry.email)}</p>
    ${enquiry.phone ? `<p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>` : ""}
    ${enquiry.businessName ? `<p><strong>Business:</strong> ${escapeHtml(enquiry.businessName)}</p>` : ""}
    ${enquiry.area ? `<p><strong>Area of enquiry:</strong> ${escapeHtml(enquiry.area)}</p>` : ""}
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(enquiry.message).replace(/\n/g, "<br />")}</p>
    <p style="color:#888;font-size:12px;">Received ${enquiry.receivedAt}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: enquiry.email,
        subject,
        html,
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function sendEnquiryNotification(
  enquiry: Enquiry,
): Promise<{ sent: boolean }> {
  await logEnquiryLocally(enquiry);
  const sent = await sendViaResend(enquiry);
  return { sent };
}
