import { NextResponse } from "next/server";
import { sendEnquiryNotification } from "@/lib/send-enquiry-notification";

export const runtime = "nodejs";

type EnquiryPayload = {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  area?: string;
  message?: string;
  /** Honeypot — real visitors never fill this in. */
  company?: string;
};

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
// Best-effort, single-instance only — see CONFIG-CHECKLIST.md.
const rateLimitStore = new Map<string, number[]>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (rateLimitStore.get(key) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  rateLimitStore.set(key, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: EnquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "That didn't come through properly — please try again." },
      { status: 400 },
    );
  }

  if (body.company) {
    // Honeypot tripped — pretend success, do nothing further.
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const businessName = (body.businessName ?? "").trim();
  const area = (body.area ?? "").trim();

  if (!name || name.length > 200) {
    return NextResponse.json(
      { ok: false, error: "Please let us know your name." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email) || email.length > 320) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (!message || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please add a few details about your enquiry." },
      { status: 400 },
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { ok: false, error: "That message is a bit long — please keep it under 5,000 characters." },
      { status: 400 },
    );
  }
  if (phone.length > 40 || businessName.length > 200 || area.length > 200) {
    return NextResponse.json(
      { ok: false, error: "One of those fields is longer than expected — please shorten it." },
      { status: 400 },
    );
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many enquiries sent recently. Please try again shortly." },
      { status: 429 },
    );
  }

  const enquiry = {
    name,
    email,
    phone,
    businessName,
    area,
    message,
    receivedAt: new Date().toISOString(),
  };

  const { sent } = await sendEnquiryNotification(enquiry);

  if (!sent) {
    console.warn(
      "[enquiry] Email delivery is not configured — the enquiry was received but not emailed. " +
        "Set RESEND_API_KEY, ENQUIRY_TO_EMAIL and RESEND_FROM_EMAIL to enable delivery (see CONFIG-CHECKLIST.md).",
      enquiry,
    );
  }

  return NextResponse.json({ ok: true });
}
