import type { Metadata } from "next";
import { getCanonicalUrl, getSiteUrl, siteConfig } from "@/config/site";

interface PageSeoInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  index?: boolean;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogImage = "/og.jpg",
  index = true,
}: PageSeoInput): Metadata {
  const canonical = getCanonicalUrl(path);
  const pageTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: canonical ? { canonical } : undefined,
    robots: {
      index,
      follow: index,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonical ?? getSiteUrl() + (path === "/" ? "" : path),
      siteName: siteConfig.name,
      title: pageTitle,
      description,
      images: [
        {
          url: ogImage,
          alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
  };
}
