import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { serviceDetails } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const service = serviceDetails["business-growth"];

export const metadata = createPageMetadata({
  title: "Website Strategy and Business Growth",
  description:
    "Plan what your website should achieve: objectives, user journeys, conversion paths, lead capture, search foundations, and practical improvements.",
  path: "/services/business-growth",
});

export default function BusinessGrowthPage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
