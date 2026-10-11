import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { featuredServices } from "@/data/featured-services";

export function ServicesLanding() {
  return (
    <div className="services-page bg-[#05080f] text-white">
      <section className="relative min-h-[92vh] overflow-hidden">
        <img
          src="/hero/tech-workspace.png"
          alt=""
          className="services-hero-image absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="services-hero-overlay absolute inset-0" />

        <Container className="relative z-10 flex min-h-[92vh] flex-col justify-end pt-32 pb-16 md:justify-center md:pt-36 md:pb-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-3.5 py-1.5 text-[10px] font-semibold tracking-[0.22em] text-white/75 uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" aria-hidden />
              Infrastructure & Capabilities
            </p>
            <h1 className="services-display mt-8">
              Our
              <span className="services-accent mt-1 block italic">Services.</span>
            </h1>
            <div className="mt-8 h-px w-16 bg-white/35" />
            <p className="mt-8 max-w-xl text-[15px] leading-8 text-white/88 md:text-base md:leading-8">
              Architecting digital experiences through precision and purpose. We go
              beyond conventional web development to build powerful digital solutions
              that strengthen your brand, connect you with customers, and create
              opportunities for business growth.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/8 py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="services-display max-w-3xl">
              Digital Solutions.
              <span className="services-accent mt-1 block italic">Built for Business.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-[15px] leading-8 text-white/80 md:text-base">
              Every business has different goals. We combine thoughtful design, modern
              engineering, and strategic thinking to deliver digital solutions tailored
              to your objectives.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-8 md:pb-12">
        <Container>
          <ul>
            {featuredServices.map((service, index) => (
              <li key={service.number} className="border-t border-white/10">
                <Reveal delay={index * 0.04}>
                  <article className="grid gap-5 py-10 md:grid-cols-[5rem_1fr_auto] md:items-start md:gap-10 md:py-14">
                    <p className="text-xs font-semibold tracking-[0.2em] text-blue-bright">
                      {service.number}
                    </p>
                    <div className="max-w-2xl">
                      <h3 className="services-service-title text-white">{service.title}</h3>
                      <p className="mt-4 text-[15px] leading-8 text-white/78">{service.description}</p>
                    </div>
                    {service.href ? (
                      <Link
                        href={service.href}
                        className="services-explore inline-flex items-center gap-2 self-start text-sm font-semibold text-white"
                      >
                        Explore Service
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    ) : (
                      <span className="hidden md:block" />
                    )}
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <div className="border-t border-white/10" />
        </Container>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <img
          src="/hero/late-night-coding.png"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[#05080f]/72" />
        <Container className="relative z-10">
          <Reveal>
            <h2 className="services-display max-w-4xl">
              Accelerated Market Visibility.
              <span className="services-accent mt-2 block italic">Built for Lasting Growth.</span>
            </h2>
            <div className="mt-10 h-px w-16 bg-white/35" />
            <p className="mt-10 max-w-2xl text-[15px] leading-8 text-white/80 md:text-base md:leading-8">
              Your website should be more than a digital presence. It should communicate
              your value, build trust, and make it easier for the right customers to
              choose your business. We engineer every project with your goals, your
              audience, and your long-term growth in mind.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-white/8 py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="services-display max-w-4xl">
              Ready to Build
              <span className="services-accent mt-1 block italic">Something Exceptional?</span>
            </h2>
            <p className="mt-8 max-w-2xl text-[15px] leading-8 text-white/80 md:text-base">
              Tell us about your business, your goals, and the digital solution you have
              in mind. Let&apos;s build something that moves your business forward.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/start-project" size="lg">
                Start Your Project
                <ArrowRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Contact Us
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
