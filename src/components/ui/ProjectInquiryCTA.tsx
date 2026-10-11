import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ProjectInquiryCTA({
  title = "Your Next Stage of Growth Deserves a Better Digital Foundation.",
  description = "Tell us about your business, what you want to achieve, and the digital challenges you're ready to solve.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="dark-glow py-20 md:py-24">
      <Container className="max-w-3xl text-center">
        <h2 className="section-title text-white">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/start-project" size="lg">
            Start Your Project
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" size="lg">
            Contact ManuelTech GH
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
