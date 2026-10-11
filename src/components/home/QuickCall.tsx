import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getTelUrl, getWhatsAppUrl } from "@/config/contact";

export function QuickCall() {
  const whatsappHref = getWhatsAppUrl();
  const telHref = getTelUrl();

  return (
    <section className="quick-call relative min-h-[88vh] overflow-hidden bg-[#07111F] md:min-h-[92vh]">
      <img
        src="/hero/strategy-session.png"
        alt="A strategy session in a modern office, representing a conversation about your next project."
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="quick-call-overlay absolute inset-0" />

      <Container className="relative z-10 flex min-h-[88vh] items-center justify-center py-24 md:min-h-[92vh] md:py-28">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h2 className="quick-call-title text-white">
            Prefer a{" "}
            <span className="font-medium text-blue-bright italic">Quick Call?</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/85 md:text-lg md:leading-8">
            Our team is ready to discuss your next big idea. Let&apos;s explore how
            the right website and digital strategy can help your business grow.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/75 md:text-[17px]">
            Let&apos;s talk about your project and plan your next move.
          </p>

          <div className="mx-auto mt-10 flex w-full max-w-xl flex-col gap-4">
            {whatsappHref ? (
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="quick-call-whatsapp inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold text-white"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                WhatsApp Us
              </a>
            ) : null}

            {telHref ? (
              <a
                href={telHref}
                className="quick-call-phone inline-flex min-h-14 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold text-white"
              >
                Call Now
                <ArrowRight className="h-5 w-5" aria-hidden />
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
