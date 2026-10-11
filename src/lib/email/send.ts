interface OutboundEmail {
  subject: string;
  text: string;
  html: string;
  replyTo: string;
}

export function isEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
}

export async function sendInquiryEmail(message: OutboundEmail) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL || "ManuelTech GH <noreply@resend.dev>";

  if (!apiKey || !to) {
    return {
      ok: false as const,
      code: "not_configured" as const,
      error:
        "Inquiry delivery is not configured. Set RESEND_API_KEY and CONTACT_TO_EMAIL.",
    };
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: message.replyTo,
      subject: message.subject,
      text: message.text,
      html: message.html,
    }),
  });

  if (!response.ok) {
    return {
      ok: false as const,
      code: "provider_error" as const,
      error: "The email provider could not accept this inquiry.",
    };
  }

  return { ok: true as const };
}

export function isSuspiciousTiming(startedAt?: number) {
  if (!startedAt) {
    return false;
  }

  return Date.now() - startedAt < 1500;
}

export function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }

  const allowed = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "",
    "http://localhost:3000",
    "http://127.0.0.1:3000",
  ].filter((value): value is string => Boolean(value));

  return allowed.some((value) => origin === value || origin.startsWith(value));
}
