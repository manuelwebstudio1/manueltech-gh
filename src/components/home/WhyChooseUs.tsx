import { ArrowRight, Gauge, Handshake, Layers, TrendingUp } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const imageHighlights = [
  {
    title: "Custom Websites",
    copy: "Built around your business.",
  },
  {
    title: "Modern Technology",
    copy: "Designed for performance.",
  },
  {
    title: "Growth-Focused",
    copy: "Created with your goals in mind.",
  },
];

const reasons = [
  {
    number: "01",
    icon: Layers,
    title: "Custom-Built Solutions",
    copy: "We create websites tailored to your brand, your customers, and your business objectives instead of relying on generic, one-size-fits-all designs.",
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Built for Business Growth",
    copy: "We approach every project with your business goals in mind, creating clear user journeys and calls to action that encourage visitors to take the next step.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Performance & SEO",
    copy: "We prioritize responsive design, efficient loading, accessibility, and search-engine-friendly development to give your website a strong technical foundation.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "A Partner You Can Rely On",
    copy: "From the initial idea to launch, we focus on clear communication, thoughtful execution, and solutions that support your business as it develops.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="why-choose py-20 md:py-24">
      <Container>
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.2em] text-blue uppercase">
            Why Choose ManuelTech GH
          </p>
          <h2 className="section-title mt-4 max-w-4xl text-navy">
            Technology Built Around Your Business.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-muted md:text-[17px]">
            We combine creative thinking, modern technology, and business-focused
            strategy to build websites and digital solutions that help businesses
            establish credibility, reach more customers, and grow online.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mt-10 min-h-[28rem] overflow-hidden rounded-[28px] shadow-[0_24px_60px_rgb(16_24_40_/_0.14)] md:min-h-[32rem]">
            <img
              src="/hero/strategy-session.png"
              alt="ManuelTech GH team collaborating in a modern office during a strategy session."
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="why-choose-image-overlay absolute inset-0" />

            <div className="relative z-10 flex min-h-[28rem] flex-col justify-between p-6 sm:p-8 md:min-h-[32rem] md:p-10">
              <p className="w-fit rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white uppercase">
                Built for Business Growth
              </p>

              <div>
                <ul className="grid gap-4 sm:grid-cols-3 sm:gap-6">
                  {imageHighlights.map((item) => (
                    <li key={item.title}>
                      <p className="text-sm font-semibold text-white">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/72">{item.copy}</p>
                    </li>
                  ))}
                </ul>

                <ButtonLink href="/start-project" variant="white" size="lg" className="mt-7">
                  Start Your Project
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <Reveal key={reason.number} delay={0.1 + index * 0.05}>
              <article className="card-hover relative h-full overflow-hidden rounded-2xl border border-line bg-white p-6">
                <span
                  className="pointer-events-none absolute top-4 right-5 font-heading text-4xl font-bold text-blue/15"
                  aria-hidden
                >
                  {reason.number}
                </span>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue/8 text-blue">
                  <reason.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-5 pr-12 text-lg font-bold text-navy">{reason.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{reason.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
