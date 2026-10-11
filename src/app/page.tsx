import { BusinessGrowth } from "@/components/home/BusinessGrowth";
import { Hero } from "@/components/home/Hero";
import { HomeFAQ } from "@/components/home/HomeFAQ";
import { IndustryStrip } from "@/components/home/IndustryStrip";
import { ProcessPreview } from "@/components/home/ProcessPreview";
import { ValueProposition } from "@/components/home/ValueProposition";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { WhyManuelTech } from "@/components/home/WhyManuelTech";
import { QuickCall } from "@/components/home/QuickCall";
import { ProjectInquiryCTA } from "@/components/ui/ProjectInquiryCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "We Build Websites. We Engineer Business Growth.",
  description:
    "ManuelTech GH designs and develops professional websites, e-commerce experiences, and custom digital solutions that help businesses earn trust and create opportunities for growth.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <div>
        <IndustryStrip />
        <ValueProposition />
        <WhyChooseUs />
        <WhyManuelTech />
        <BusinessGrowth />
        <ProcessPreview />
        <HomeFAQ />
        <ProjectInquiryCTA />
      </div>
      <QuickCall />
    </>
  );
}
