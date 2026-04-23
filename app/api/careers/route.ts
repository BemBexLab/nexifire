import {
  getPublicMailErrorMessage,
  getRequiredEnv,
  getSmtpHelpMessage,
  isSmtpAuthError,
  isSmtpConnectionError,
  sendMailWithConfiguredTransport,
} from "@/lib/smtp";

export const runtime = "nodejs";

const recipientEmail =
  process.env.CAREERS_EMAIL?.trim() ||
  process.env.CONTACT_EMAIL?.trim() ||
  "contact@nexifire.com";
const maxResumeSize = 5 * 1024 * 1024;

function getFormString(formData: FormData, name: string) {
  const value = formData.get(name);
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
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return Response.json({ error: "Invalid application form." }, { status: 400 });
  }

  const firstName = getFormString(formData, "firstName");
  const lastName = getFormString(formData, "lastName");
  const email = getFormString(formData, "email");
  const countryCode = getFormString(formData, "countryCode");
  const phone = getFormString(formData, "phone");
  const salaryExpectation = getFormString(formData, "salaryExpectation");
  const position = getFormString(formData, "position");
  const employmentStatus = getFormString(formData, "employmentStatus");
  const joinTimeline = getFormString(formData, "joinTimeline");
  const portfolio = getFormString(formData, "portfolio");
  const resumeValue = formData.get("resume");
  const resume =
    resumeValue instanceof File && resumeValue.size > 0 ? resumeValue : null;

  if (!firstName || !lastName || !email || !phone || !position) {
    return Response.json(
      { error: "Please fill in first name, last name, email, phone, and position." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (resume && resume.size > maxResumeSize) {
    return Response.json(
      { error: "Please upload a resume smaller than 5MB." },
      { status: 400 },
    );
  }

  const fullName = `${firstName} ${lastName}`;
  const fullPhone = [countryCode, phone].filter(Boolean).join(" ");
  const fields = [
    ["Name", fullName],
    ["Email", email],
    ["Phone", fullPhone],
    ["Position", position],
    ["Salary Expectation", salaryExpectation],
    ["Currently Employed", employmentStatus],
    ["Join Timeline", joinTimeline],
    ["Portfolio", portfolio],
  ];
  const text = [
    "New NexiFire career application",
    "",
    ...fields.map(([label, value]) => `${label}: ${value || "Not provided"}`),
  ].join("\n");
  const html = `
    <h2>New NexiFire career application</h2>
    ${fields
      .map(
        ([label, value]) =>
          `<p><strong>${escapeHtml(label)}:</strong> ${escapeHtml(value || "Not provided")}</p>`,
      )
      .join("")}
  `;

  try {
    await sendMailWithConfiguredTransport({
      from: `"NexiFire Careers" <${getRequiredEnv("SMTP_USER")}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `New career application from ${fullName}`,
      text,
      html,
      attachments: resume
        ? [
            {
              filename: resume.name,
              content: Buffer.from(await resume.arrayBuffer()),
              contentType: resume.type || undefined,
            },
          ]
        : [],
    });
  } catch (error) {
    console.error("Career application email failed:", error);

    if (isSmtpAuthError(error)) {
      return Response.json(
        {
          error: getPublicMailErrorMessage("career"),
        },
        { status: 500 },
      );
    }

    if (isSmtpConnectionError(error)) {
      return Response.json(
        {
          error: getPublicMailErrorMessage("career"),
        },
        { status: 500 },
      );
    }

    return Response.json(
      { error: getPublicMailErrorMessage("career") },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
