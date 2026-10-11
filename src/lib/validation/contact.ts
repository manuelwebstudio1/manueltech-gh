import { z } from "zod";

const optionalText = z
  .string()
  .trim()
  .max(200)
  .optional()
  .or(z.literal(""));

export const contactReasons = [
  "New website",
  "Website redesign",
  "E-commerce",
  "Custom application",
  "Strategy or review",
  "Website support",
  "General question",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(160),
  businessName: optionalText,
  phone: z
    .string()
    .trim()
    .max(40)
    .optional()
    .or(z.literal(""))
    .refine(
      (value) => !value || /^[+()\d\s.-]{7,}$/.test(value),
      "Please enter a valid phone number or leave this field blank.",
    ),
  reason: z.enum(contactReasons, {
    error: "Please choose a reason for contacting us.",
  }),
  message: z
    .string()
    .trim()
    .min(20, "Please share a little more detail so we can respond usefully.")
    .max(4000),
  consent: z.literal(true, {
    error: "Please confirm we may use this information to respond to your inquiry.",
  }),
  honeypot: z.string().max(0).optional().or(z.literal("")),
  startedAt: z.number().int().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
