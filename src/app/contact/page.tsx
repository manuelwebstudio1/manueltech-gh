import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import { contactConfig, getTelUrl } from "@/config/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact ManuelTech GH to discuss a website, e-commerce project, custom application, or digital strategy question.",
  path: "/contact",
});

export default function ContactPage() {
  const hasDirectContact = Boolean(
    contactConfig.email || contactConfig.phone || contactConfig.whatsapp,
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need help with."
        description="Use the form for project questions, redesigns, or a short introduction. If published contact channels are configured, they will appear here as well."
        backgroundImage="/hero/strategy-session.png"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-2xl font-bold text-ink">How to reach ManuelTech GH</h2>
            <p className="mt-4 text-sm leading-7 text-muted">
              Share enough context for a useful reply: the business, the digital
              problem, and any timing constraints. We do not publish a guaranteed
              response time until one has been confirmed as an operating standard.
            </p>
            <dl className="mt-8 space-y-5 text-sm">
              {contactConfig.email ? (
                <div>
                  <dt className="font-semibold text-ink">Email</dt>
                  <dd className="mt-1">
                    <a className="text-blue" href={`mailto:${contactConfig.email}`}>
                      {contactConfig.email}
                    </a>
                  </dd>
                </div>
              ) : null}
              {contactConfig.phone ? (
                <div>
                  <dt className="font-semibold text-ink">Phone</dt>
                  <dd className="mt-1">
                    <a className="text-blue" href={getTelUrl() ?? `tel:${contactConfig.phone}`}>
                      {contactConfig.phone}
                    </a>
                  </dd>
                </div>
              ) : null}
            </dl>
            <div className="mt-6">
              <WhatsAppCTA />
            </div>
            {!hasDirectContact ? (
              <p className="mt-6 rounded-2xl border border-dashed border-line bg-surface px-5 py-4 text-sm text-muted">
                Public email, phone, and WhatsApp are not configured yet. Set the
                NEXT_PUBLIC_CONTACT_* and NEXT_PUBLIC_WHATSAPP_NUMBER values before
                launch if you want those channels displayed. The form still works
                once RESEND_API_KEY and CONTACT_TO_EMAIL are set on the server.
              </p>
            ) : null}
            {contactConfig.social.length > 0 ? (
              <ul className="mt-6 space-y-2 text-sm">
                {contactConfig.social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-blue"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="rounded-3xl border border-line bg-surface p-6 md:p-8">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
