import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description:
    "Draft website terms for ManuelTech GH. Review and adapt these terms to actual commercial practices before publication.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal draft"
        title="Terms and conditions"
        description="These terms are a starting draft for the public website. They are not a substitute for a signed project agreement and should be reviewed before the site is published."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms and Conditions" },
        ]}
      />
      <section className="bg-white py-16">
        <Container className="max-w-3xl space-y-8 text-sm leading-7 text-muted">
          <p>
            By using this website you agree to these draft terms. Project work is
            governed by a separate written proposal or statement of work once both
            sides accept it.
          </p>
          <h2 className="text-2xl font-bold text-ink">Website content</h2>
          <p>
            Portfolio items labelled as concepts are demonstrations of approach and
            interface design. They are not claims about named clients, revenue, or
            performance. Copy on this site may be updated as services evolve.
          </p>
          <h2 className="text-2xl font-bold text-ink">Inquiries</h2>
          <p>
            Submitting a form does not create a contract, reserve a delivery date,
            or confirm a fee. ManuelTech GH may decline work that is a poor fit or
            that cannot be scoped from the information provided.
          </p>
          <h2 className="text-2xl font-bold text-ink">Limitation</h2>
          <p>
            The website is provided as general information about services. It does
            not guarantee search rankings, sales, or a specific commercial outcome.
            Liability for paid work is defined in the project agreement, not on
            this page.
          </p>
          <h2 className="text-2xl font-bold text-ink">Changes</h2>
          <p>
            These terms can be updated. The operator of the website should record
            the effective date and applicable law after legal review. No governing
            jurisdiction is asserted here until that review is complete.
          </p>
        </Container>
      </section>
    </>
  );
}
