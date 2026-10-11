import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { serviceDetails } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const service = serviceDetails["web-development"];

export const metadata = createPageMetadata({
  title: "Full-Stack Web Development",
  description:
    "ManuelTech GH designs and develops full-stack websites and web applications with carefully planned frontend, backend, data, and integration work.",
  path: "/services/web-development",
});

export default function WebDevelopmentPage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
