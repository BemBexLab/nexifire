export type ContactFormSubmitResult =
  | { ok: true }
  | { ok: false; error: string };

export async function submitContactForm(
  form: HTMLFormElement,
  source: string,
): Promise<ContactFormSubmitResult> {
  const formData = new FormData(form);

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      countryCode: formData.get("countryCode"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      source,
    }),
  });

  const result = (await response.json().catch(() => ({}))) as {
    error?: string;
  };

  if (!response.ok) {
    return {
      ok: false,
      error: result.error || "Unable to send your message right now.",
    };
  }

  form.reset();
  return { ok: true };
}
