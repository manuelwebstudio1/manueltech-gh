import type { MetadataRoute } from "next";
import { getSiteUrl, siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrl();

  if (!siteConfig.url) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
