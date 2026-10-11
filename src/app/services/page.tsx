import { ServicesLanding } from "@/components/services/ServicesLanding";
import { createPageMetadata } from "@/lib/seo";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";

export const metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore ManuelTech GH services including business websites, e-commerce, custom web applications, SEO and performance, digital strategy, and website support.",
  path: "/services",
});

export default function ServicesPage() {
  return <ServicesLanding />;
}
