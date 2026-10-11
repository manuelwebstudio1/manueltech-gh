export const siteConfig = {
  name: "ManuelTech GH",
  legalName: "ManuelTech GH",
  tagline: "We Build Websites. We Engineer Business Growth.",
  coreMessage:
    "Your website should do more than exist. It should work for your business.",
  description:
    "ManuelTech GH is a full-stack web development and digital business growth company. We design and build professional websites, e-commerce experiences, and custom digital solutions that help businesses communicate clearly, attract the right customers, and create opportunities for growth.",
  locale: "en_GH",
  language: "en",
  /**
   * Production origin. Leave empty until the live domain is confirmed.
   * Used for canonical URLs, Open Graph tags, and the sitemap.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "",
  keywords: [
    "web development in Ghana",
    "website design for businesses",
    "full-stack web development",
    "e-commerce development",
    "custom web applications",
    "website strategy",
    "business website development",
  ],
} as const;

export function getSiteUrl() {
  if (siteConfig.url) {
    return siteConfig.url;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export function getCanonicalUrl(path = "/") {
  const origin = siteConfig.url;
  if (!origin) {
    return undefined;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized === "/" ? "" : normalized}`;
}
