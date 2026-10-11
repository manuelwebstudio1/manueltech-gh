import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/config/site";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const routes = [
    "",
    "/services",
    "/services/web-development",
    "/services/ecommerce",
    "/services/business-growth",
    "/work",
    "/about",
    "/process",
    "/contact",
    "/start-project",
    "/privacy",
    "/terms",
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
