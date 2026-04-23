import {
  getPublicMailErrorMessage,
  getRequiredEnv,
  getSmtpHelpMessage,
  isSmtpAuthError,
  isSmtpConnectionError,
  sendMailWithConfiguredTransport,
} from "@/lib/smtp";

export const runtime = "nodejs";

const recipientEmail = process.env.CONTACT_EMAIL?.trim() || "contact@nexifire.com";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  countryCode?: unknown;
  phone?: unknown;
  message?: unknown;
  source?: unknown;
};

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = (await request.json()) as ContactRequest;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = normalizeString(payload.name);
  const email = normalizeString(payload.email);
  const countryCode = normalizeString(payload.countryCode);
  const phone = normalizeString(payload.phone);
  const message = normalizeString(payload.message);
  const source = normalizeString(payload.source) || "NexiFire contact form";

  if (!name || !email || !phone || !message) {
    return Response.json(
      { error: "Please fill in name, email, phone, and message." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const fullPhone = [countryCode, phone].filter(Boolean).join(" ");
  const subject = `New NexiFire inquiry from ${name}`;
  const text = [
    "New NexiFire contact form submission",
    "",
    `Source: ${source}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${fullPhone}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New NexiFire contact form submission</h2>
    <p><strong>Source:</strong> ${escapeHtml(source)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(fullPhone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    await sendMailWithConfiguredTransport({
      from: `"NexiFire Website" <${getRequiredEnv("SMTP_USER")}>`,
      to: recipientEmail,
      replyTo: email,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.error("Contact email failed:", error);

    if (isSmtpAuthError(error)) {
      return Response.json(
        {
          error: getPublicMailErrorMessage("contact"),
        },
        { status: 500 },
      );
    }

    if (isSmtpConnectionError(error)) {
      return Response.json(
        {
          error: getPublicMailErrorMessage("contact"),
        },
        { status: 500 },
      );
    }

    return Response.json(
      { error: getPublicMailErrorMessage("contact") },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
