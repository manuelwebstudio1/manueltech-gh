import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import { serviceDetails } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const service = serviceDetails.ecommerce;

export const metadata = createPageMetadata({
  title: "E-commerce Development",
  description:
    "Create online shopping experiences with catalogue, cart, checkout, payment, and order handling planned around your products and operations.",
  path: "/services/ecommerce",
});

export default function EcommercePage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}
