import { WorkLanding } from "@/components/portfolio/WorkLanding";
import { createPageMetadata } from "@/lib/seo";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";

export const metadata = createPageMetadata({
  title: "Our Work",
  description:
    "Explore selected ManuelTech GH website projects, including live business, real estate, and product websites designed and developed for clients.",
  path: "/work",
});

export default function WorkPage() {
  return <WorkLanding />;
}
