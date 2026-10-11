import { QuickCall } from "@/components/home/QuickCall";
import { ProjectQualificationForm } from "@/components/forms/ProjectQualificationForm";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Start a Project",
  description:
    "Tell ManuelTech GH about your business, goals, and the digital solution you are considering so we can recommend an appropriate next step.",
  path: "/start-project",
});

export default function StartProjectPage() {
  return (
    <>
      <PageHero
        eyebrow="Project inquiry"
        title="Let's Build Something That Moves Your Business Forward."
        description="Tell us about your business, your goals, and the digital solution you're considering. We'll use this information to understand your requirements and determine an appropriate next step."
        backgroundImage="/hero/tech-workspace.png"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Start a Project" },
        ]}
      />
      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <ProjectQualificationForm />
        </Container>
      </section>
      <QuickCall />
    </>
  );
}
