import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Draft privacy policy for ManuelTech GH explaining how inquiry information is intended to be handled. Review with qualified counsel before publication.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal draft"
        title="Privacy policy"
        description="This page is a working draft for review. It must be adapted to the company's actual operations, hosting, email provider, and legal advice before it is treated as a final policy."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <section className="bg-white py-16">
        <Container className="prose-legal max-w-3xl space-y-8 text-sm leading-7 text-muted">
          <p>
            ManuelTech GH (&quot;we&quot;, &quot;us&quot;) may collect information that you submit
            through the contact or project inquiry forms. This typically includes
            your name, email address, optional phone number, business details, and
            the content of your message.
          </p>
          <h2 className="text-2xl font-bold text-ink">How information is used</h2>
          <p>
            Inquiry information is used to understand your request, respond, and
            assess whether a project is a suitable next step. It is not sold. It
            should not be used for unrelated marketing unless you give a separate,
            documented permission.
          </p>
          <h2 className="text-2xl font-bold text-ink">How information is stored</h2>
          <p>
            When the email delivery integration is configured, form submissions are
            sent to the mailbox specified in the server environment. Retention
            periods, access lists, and any additional storage (for example a CRM)
            must be documented by the operator of this website before launch.
          </p>
          <h2 className="text-2xl font-bold text-ink">Your requests</h2>
          <p>
            You may ask what inquiry information is held, request a correction, or
            ask that a record be deleted where that is practical and lawful. Use
            the published contact email once it is configured, or the form on the
            contact page.
          </p>
          <h2 className="text-2xl font-bold text-ink">What this draft does not claim</h2>
          <p>
            This draft does not assert registration details, a Data Protection
            Officer appointment, cross-border transfer mechanisms, or compliance
            with a specific statute. Those statements should be added only after
            verification.
          </p>
        </Container>
      </section>
    </>
  );
}
