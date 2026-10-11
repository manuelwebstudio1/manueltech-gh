"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { FormField, fieldClass, textareaClass } from "@/components/forms/FormField";
import { budgetRanges, industries } from "@/config/contact";
import {
  businessStages,
  projectGoals,
  projectInquirySchema,
  projectTypes,
  timelines,
  type ProjectInquiryInput,
} from "@/lib/validation/project";

export function ProjectQualificationForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const form = useForm<ProjectInquiryInput>({
    resolver: zodResolver(projectInquirySchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      website: "",
      audience: "",
      primaryObjective: "",
      goals: [],
      businessDescription: "",
      desiredSolution: "",
      importantFeatures: "",
      additionalContext: "",
      honeypot: "",
    },
  });

  useEffect(() => {
    form.setValue("startedAt", Date.now());
  }, [form]);

  async function onSubmit(values: ProjectInquiryInput) {
    setServerMessage(null);
    setSuccess(false);

    const response = await fetch("/api/projects", {
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
          "We could not submit this inquiry. Please try again shortly.",
      );
      return;
    }

    setSuccess(true);
    form.reset({
      name: "",
      businessName: "",
      email: "",
      phone: "",
      website: "",
      audience: "",
      primaryObjective: "",
      goals: [],
      businessDescription: "",
      desiredSolution: "",
      importantFeatures: "",
      additionalContext: "",
      honeypot: "",
    });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10" noValidate>
      <div aria-hidden className="hidden">
        <label htmlFor="fax-number">Fax</label>
        <input id="fax-number" tabIndex={-1} autoComplete="off" {...form.register("honeypot")} />
      </div>

      <fieldset className="space-y-5">
        <legend className="font-heading text-xl font-bold text-ink">Contact information</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Full name" htmlFor="name" error={form.formState.errors.name?.message}>
            <input id="name" className={fieldClass} autoComplete="name" {...form.register("name")} />
          </FormField>
          <FormField
            label="Business name"
            htmlFor="businessName"
            error={form.formState.errors.businessName?.message}
          >
            <input id="businessName" className={fieldClass} autoComplete="organization" {...form.register("businessName")} />
          </FormField>
          <FormField label="Email address" htmlFor="email" error={form.formState.errors.email?.message}>
            <input id="email" type="email" className={fieldClass} autoComplete="email" {...form.register("email")} />
          </FormField>
          <FormField
            label="Phone or WhatsApp number"
            htmlFor="phone"
            error={form.formState.errors.phone?.message}
          >
            <input id="phone" className={fieldClass} autoComplete="tel" {...form.register("phone")} />
          </FormField>
        </div>
        <FormField
          label="Business website"
          htmlFor="website"
          optional
          error={form.formState.errors.website?.message}
        >
          <input id="website" className={fieldClass} autoComplete="url" {...form.register("website")} />
        </FormField>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-heading text-xl font-bold text-ink">Business information</legend>
        <div className="grid gap-5 md:grid-cols-2">
          <FormField label="Industry" htmlFor="industry" error={form.formState.errors.industry?.message}>
            <select id="industry" className={fieldClass} defaultValue="" {...form.register("industry")}>
              <option value="" disabled>
                Select an industry
              </option>
              {industries.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>
          <FormField
            label="Business stage"
            htmlFor="businessStage"
            error={form.formState.errors.businessStage?.message}
          >
            <select id="businessStage" className={fieldClass} defaultValue="" {...form.register("businessStage")}>
              <option value="" disabled>
                Select a stage
              </option>
              {businessStages.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </FormField>
        </div>
        <FormField
          label="Target audience"
          htmlFor="audience"
          error={form.formState.errors.audience?.message}
        >
          <textarea id="audience" className={textareaClass} {...form.register("audience")} />
        </FormField>
        <FormField
          label="Primary business objective"
          htmlFor="primaryObjective"
          error={form.formState.errors.primaryObjective?.message}
        >
          <textarea id="primaryObjective" className={textareaClass} {...form.register("primaryObjective")} />
        </FormField>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-heading text-xl font-bold text-ink">Project type</legend>
        <FormField
          label="What are you considering?"
          htmlFor="projectType"
          error={form.formState.errors.projectType?.message}
        >
          <select id="projectType" className={fieldClass} defaultValue="" {...form.register("projectType")}>
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </FormField>
      </fieldset>

      <fieldset>
        <legend className="font-heading text-xl font-bold text-ink">Project goals</legend>
        <p className="mt-2 mb-4 text-sm text-muted">Select all that apply.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {projectGoals.map((goal) => (
            <label key={goal} className="flex items-start gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink">
              <input type="checkbox" value={goal} className="mt-0.5" {...form.register("goals")} />
              {goal}
            </label>
          ))}
        </div>
        {form.formState.errors.goals ? (
          <p className="mt-2 text-xs text-red-600" role="alert">
            {form.formState.errors.goals.message}
          </p>
        ) : null}
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-heading text-xl font-bold text-ink">Budget</legend>
        <p className="text-sm text-muted">
          These ranges are for qualification only. They are not official ManuelTech GH prices.
        </p>
        <FormField label="Provisional budget range" htmlFor="budget" error={form.formState.errors.budget?.message}>
          <select id="budget" className={fieldClass} defaultValue="" {...form.register("budget")}>
            <option value="" disabled>
              Select a range
            </option>
            {budgetRanges.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </FormField>
      </fieldset>

      <fieldset>
        <legend className="font-heading text-xl font-bold text-ink">Timeline</legend>
        <FormField
          label="When would you like to begin?"
          htmlFor="timeline"
          error={form.formState.errors.timeline?.message}
        >
          <select id="timeline" className={fieldClass} defaultValue="" {...form.register("timeline")}>
            <option value="" disabled>
              Select a timeline
            </option>
            {timelines.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </FormField>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className="font-heading text-xl font-bold text-ink">Project description</legend>
        <FormField
          label="Describe the business"
          htmlFor="businessDescription"
          error={form.formState.errors.businessDescription?.message}
        >
          <textarea id="businessDescription" className={textareaClass} {...form.register("businessDescription")} />
        </FormField>
        <FormField
          label="Explain the desired solution"
          htmlFor="desiredSolution"
          error={form.formState.errors.desiredSolution?.message}
        >
          <textarea id="desiredSolution" className={textareaClass} {...form.register("desiredSolution")} />
        </FormField>
        <FormField
          label="Identify important features"
          htmlFor="importantFeatures"
          optional
          error={form.formState.errors.importantFeatures?.message}
        >
          <textarea id="importantFeatures" className={textareaClass} {...form.register("importantFeatures")} />
        </FormField>
        <FormField
          label="Additional context"
          htmlFor="additionalContext"
          optional
          error={form.formState.errors.additionalContext?.message}
        >
          <textarea id="additionalContext" className={textareaClass} {...form.register("additionalContext")} />
        </FormField>
      </fieldset>

      <label className="flex items-start gap-3 text-sm leading-6 text-muted">
        <input type="checkbox" className="mt-1" {...form.register("consent")} />
        <span>
          I agree that ManuelTech GH may use this information to assess the project and
          respond. Read the <a className="text-blue underline" href="/privacy">privacy policy</a> for how inquiries are handled.
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
          Your project inquiry was received. We will review the details and follow up
          with an appropriate next step.
        </p>
      ) : null}

      <Button type="submit" disabled={form.formState.isSubmitting} size="lg">
        {form.formState.isSubmitting ? "Submitting…" : "Submit project inquiry"}
      </Button>
    </form>
  );
}
