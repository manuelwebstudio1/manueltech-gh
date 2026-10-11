import type { ContactConfig } from "@/types";

/**
 * Central business contact configuration.
 *
 * Leave a value empty until it has been confirmed. Empty values are
 * omitted from the public website so invented details are never shown.
 *
 * Public values may also be supplied through NEXT_PUBLIC_* environment
 * variables without changing this file.
 */
export const contactConfig: ContactConfig = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "manueltechgh@gmail.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim() || "0502889487",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "0502889487",
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ??
    "Hello ManuelTech GH, I would like to discuss a website project for my business.",
  social: [
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN?.trim() ?? "",
    },
    {
      label: "Facebook",
      href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK?.trim() ?? "",
    },
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM?.trim() ?? "",
    },
    {
      label: "X",
      href: process.env.NEXT_PUBLIC_SOCIAL_X?.trim() ?? "",
    },
  ].filter((item) => item.href.length > 0),
};

export function toInternationalDigits(value: string) {
  const digits = value.replace(/\D/g, "");

  if (digits.length < 10) {
    return "";
  }

  if (digits.startsWith("233")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `233${digits.slice(1)}`;
  }

  return digits;
}

export function getTelUrl(value = contactConfig.phone) {
  const digits = toInternationalDigits(value);
  return digits ? `tel:+${digits}` : null;
}

export function getWhatsAppUrl(message = contactConfig.whatsappMessage) {
  const digits = toInternationalDigits(contactConfig.whatsapp || contactConfig.phone);

  if (!digits) {
    return null;
  }

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${digits}?text=${encoded}`;
}

export const budgetRanges = [
  { value: "under-2000", label: "Under GHS 2,000" },
  { value: "2000-5000", label: "GHS 2,000–5,000" },
  { value: "5001-10000", label: "GHS 5,001–10,000" },
  { value: "10001-20000", label: "GHS 10,001–20,000" },
  { value: "above-20000", label: "Above GHS 20,000" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const industries = [
  "Real Estate",
  "Retail",
  "E-commerce",
  "Construction",
  "Professional Services",
  "Education",
  "Hospitality",
  "Healthcare",
  "Technology",
  "Logistics",
  "Manufacturing",
  "Other",
] as const;
