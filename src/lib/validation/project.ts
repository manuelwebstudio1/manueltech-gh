import { z } from "zod";
import { budgetRanges, industries } from "@/config/contact";

const industryValues = industries;
const budgetValues = budgetRanges.map((item) => item.value);

export const businessStages = [
  "Starting out",
  "Early-stage business",
  "Established business",
  "Growing or expanding",
] as const;

export const projectTypes = [
  "New business website",
  "Website redesign",
  "E-commerce website",
  "Custom web application",
  "Real estate website",
  "Business growth strategy",
  "Website maintenance",
  "Other",
] as const;

export const projectGoals = [
  "Generate more inquiries",
  "Establish a professional online presence",
  "Sell products online",
  "Showcase services",
  "Showcase properties",
  "Improve customer experience",
  "Automate business processes",
  "Improve website performance",
  "Other",
] as const;

export const timelines = [
  "As soon as practical",
  "Within one month",
  "Within two to three months",
  "Flexible",
] as const;

export const projectInquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  businessName: z.string().trim().min(2, "Please enter your business name.").max(160),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone or WhatsApp number.")
    .max(40)
    .refine(
      (value) => /^[+()\d\s.-]{7,}$/.test(value),
      "Please enter a valid phone or WhatsApp number.",
    ),
  website: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal(""))
    .refine(
      (value) => !value || /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/i.test(value),
      "Please enter a valid website or leave this field blank.",
    ),
  industry: z.enum(industryValues, { error: "Please select an industry." }),
  businessStage: z.enum(businessStages, {
    error: "Please select a business stage.",
  }),
  audience: z
    .string()
    .trim()
    .min(8, "Please describe who you want to reach.")
    .max(500),
  primaryObjective: z
    .string()
    .trim()
    .min(8, "Please describe the main business objective.")
    .max(500),
  projectType: z.enum(projectTypes, { error: "Please select a project type." }),
  goals: z
    .array(z.enum(projectGoals))
    .min(1, "Please select at least one project goal."),
  budget: z.enum(budgetValues as [string, ...string[]], {
    error: "Please select a budget range.",
  }),
  timeline: z.enum(timelines, { error: "Please select a timeline." }),
  businessDescription: z
    .string()
    .trim()
    .min(20, "Please describe the business in a little more detail.")
    .max(3000),
  desiredSolution: z
    .string()
    .trim()
    .min(20, "Please describe the digital solution you have in mind.")
    .max(3000),
  importantFeatures: z.string().trim().max(2000).optional().or(z.literal("")),
  additionalContext: z.string().trim().max(2000).optional().or(z.literal("")),
  consent: z.literal(true, {
    error: "Please confirm we may use this information to assess your project.",
  }),
  honeypot: z.string().max(0).optional().or(z.literal("")),
  startedAt: z.number().int().optional(),
});

export type ProjectInquiryInput = z.infer<typeof projectInquirySchema>;
