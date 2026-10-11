import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeFaqs } from "@/data/faq";

export function HomeFAQ() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          title="Got Questions? We Have Answers."
          description="Practical answers about working with ManuelTech GH. If your question is more specific, the contact form is the fastest way to start."
          action={
            <Link href="/contact" className="text-sm font-semibold text-blue">
              Ask a question
            </Link>
          }
        />
        <FAQAccordion items={homeFaqs} />
      </Container>
    </section>
  );
}
