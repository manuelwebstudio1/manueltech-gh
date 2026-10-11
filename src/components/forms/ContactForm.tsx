"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { FormField, fieldClass, textareaClass } from "@/components/forms/FormField";
import { contactReasons, contactSchema, type ContactInput } from "@/lib/validation/contact";

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessName: "",
      phone: "",
      reason: undefined,
      message: "",
      consent: undefined,
      honeypot: "",
    },
  });

  useEffect(() => {
    form.setValue("startedAt", Date.now());
  }, [form]);

  async function onSubmit(values: ContactInput) {
    setServerMessage(null);
    setSuccess(false);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string }
      | null;

    if (!response.ok) {
      setServerMessage(
        payload?.message ??
          "We could not send this message. Please try again or use another contact method if one is published.",
      );
      return;
    }

    setSuccess(true);
    form.reset({
      ...form.getValues(),
      name: "",
      email: "",
      businessName: "",
      phone: "",
      message: "",
      consent: undefined,
      honeypot: "",
    });
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      <div aria-hidden className="hidden">
        <label htmlFor="company-website">Company website</label>
        <input id="company-website" tabIndex={-1} autoComplete="off" {...form.register("honeypot")} />
      </div>

      <FormField label="Full name" htmlFor="name" error={form.formState.errors.name?.message}>
        <input id="name" className={fieldClass} autoComplete="name" {...form.register("name")} />
      </FormField>

      <FormField label="Email" htmlFor="email" error={form.formState.errors.email?.message}>
        <input id="email" type="email" className={fieldClass} autoComplete="email" {...form.register("email")} />
      </FormField>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="Business name"
          htmlFor="businessName"
          optional
          error={form.formState.errors.businessName?.message}
        >
          <input id="businessName" className={fieldClass} autoComplete="organization" {...form.register("businessName")} />
        </FormField>
        <FormField label="Phone number" htmlFor="phone" optional error={form.formState.errors.phone?.message}>
          <input id="phone" className={fieldClass} autoComplete="tel" {...form.register("phone")} />
        </FormField>
      </div>

      <FormField label="Reason for contacting" htmlFor="reason" error={form.formState.errors.reason?.message}>
        <select id="reason" className={fieldClass} defaultValue="" {...form.register("reason")}>
          <option value="" disabled>
            Select a reason
          </option>
          {contactReasons.map((reason) => (
            <option key={reason} value={reason}>
              {reason}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Message" htmlFor="message" error={form.formState.errors.message?.message}>
        <textarea id="message" className={textareaClass} {...form.register("message")} />
      </FormField>

      <label className="flex items-start gap-3 text-sm leading-6 text-muted">
        <input
          type="checkbox"
          className="mt-1"
          {...form.register("consent")}
        />
        <span>
          I agree that ManuelTech GH may use this information to respond to my inquiry.
          See the <a className="text-blue underline" href="/privacy">privacy policy</a>.
        </span>
      </label>
      {form.formState.errors.consent ? (
        <p className="text-xs text-red-600" role="alert">
          {form.formState.errors.consent.message}
        </p>
      ) : null}

      {serverMessage ? (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {serverMessage}
        </p>
      ) : null}
      {success ? (
        <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
          Your message was sent. We will review it and respond using the contact details you provided.
        </p>
      ) : null}

      <Button type="submit" disabled={form.formState.isSubmitting} className="w-full sm:w-auto">
        {form.formState.isSubmitting ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
