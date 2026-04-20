"use client";

import { type FormEvent, useState } from "react";
import { submitContactForm } from "@/components/contactFormSubmit";

export function useContactForm(source: string, onSuccess?: () => void) {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle",
  );
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    const result = await submitContactForm(event.currentTarget, source);

    if (result.ok) {
      setSubmitStatus("success");
      setSubmitMessage("Thanks. Your message has been sent.");
      onSuccess?.();
    } else {
      setSubmitStatus("error");
      setSubmitMessage(result.error);
    }

    setIsSubmitting(false);
  };

  return {
    handleSubmit,
    isSubmitting,
    submitMessage,
    submitStatus,
  };
}
