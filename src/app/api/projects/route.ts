import { NextResponse } from "next/server";
import { projectEmailContent } from "@/lib/email/templates";
import {
  isAllowedOrigin,
  isEmailConfigured,
  isSuspiciousTiming,
  sendInquiryEmail,
} from "@/lib/email/send";
import { enforceRateLimit, getClientIdentifier } from "@/lib/rate-limit";
import { clampText, normalizeMultiline } from "@/lib/utils";
import { projectInquirySchema } from "@/lib/validation/project";

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ message: "This request origin is not allowed." }, { status: 403 });
  }

  const limit = enforceRateLimit(`project:${getClientIdentifier(request)}`);
  if (!limit.ok) {
    return NextResponse.json(
      { message: "Too many inquiries were submitted. Please wait and try again." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "The request body was not valid JSON." }, { status: 400 });
  }

  const parsed = projectInquirySchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Please check the highlighted fields and try again." },
      { status: 422 },
    );
  }

  const input = parsed.data;
  if (input.honeypot || isSuspiciousTiming(input.startedAt)) {
    return NextResponse.json({ message: "Inquiry received." }, { status: 200 });
  }

  if (!isEmailConfigured()) {
    return NextResponse.json(
      {
        message:
          "Inquiry delivery is not configured yet. Set RESEND_API_KEY and CONTACT_TO_EMAIL before launch.",
      },
      { status: 503 },
    );
  }

  const normalized = {
    ...input,
    name: clampText(normalizeMultiline(input.name), 120),
    businessDescription: clampText(normalizeMultiline(input.businessDescription), 3000),
    desiredSolution: clampText(normalizeMultiline(input.desiredSolution), 3000),
  };

  const email = projectEmailContent(normalized);
  const result = await sendInquiryEmail({
    ...email,
    replyTo: normalized.email,
  });

  if (!result.ok) {
    return NextResponse.json(
      { message: "The inquiry could not be delivered. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: "Inquiry delivered." });
}
