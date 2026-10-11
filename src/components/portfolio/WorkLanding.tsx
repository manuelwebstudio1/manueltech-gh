import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { liveProjects } from "@/data/live-projects";

export function WorkLanding() {
  return (
    <div className="work-page bg-[#05080f] text-white">
      <section className="work-hero relative overflow-hidden">
        <img
          src="/hero/tech-workspace.png"
          alt=""
          className="work-hero-image absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="work-hero-overlay absolute inset-0" />
        <Container className="relative z-10 flex min-h-[78vh] flex-col items-center justify-center py-28 text-center md:min-h-[84vh] md:py-36">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/14 px-4 py-1.5 text-[10px] font-semibold tracking-[0.24em] text-white/75 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" aria-hidden />
            Production Archives
          </p>
          <h1 className="services-display mt-8">
            Selected
            <span className="services-accent mt-1 block italic">Works.</span>
          </h1>
          <p className="mt-8 max-w-xl text-[15px] leading-8 text-white/78 md:text-base">
            Explore a selection of digital experiences we&apos;ve designed and developed
            for businesses. Every project reflects our commitment to thoughtful design,
            modern technology, and purposeful execution.
          </p>
        </Container>
      </section>

      <section className="pb-8 md:pb-16">
        <Container className="max-w-6xl">
          <ul className="space-y-16 md:space-y-24">
            {liveProjects.map((project, index) => (
              <li key={project.href}>
                <Reveal delay={index * 0.04}>
                  <article className="work-card overflow-hidden rounded-[28px] border border-white/8 bg-[#0a1018] p-3 sm:p-4 md:p-5">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-preview group block overflow-hidden rounded-[20px] bg-[#07111f]"
                      aria-label={`Open ${project.name}`}
                    >
                      <img
                        src={project.image}
                        alt={`Homepage preview of ${project.name}`}
                        className="h-auto w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </a>

                    <div className="px-2 pt-6 pb-3 sm:px-4 sm:pt-8 sm:pb-5">
                      <div className="flex flex-wrap gap-2">
                        {project.labels.map((label) => (
                          <span
                            key={label}
                            className="rounded-full border border-white/14 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-white/70 uppercase"
                          >
                            {label}
                          </span>
                        ))}
                      </div>

                      <h2 className="mt-5 text-2xl font-bold tracking-tight text-white md:text-[2rem]">
                        {project.name}
                      </h2>
                      <p className="mt-3 max-w-3xl text-[15px] leading-7 text-white/62">
                        {project.description}
                      </p>

                      <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-view-link inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white uppercase"
                        >
                          View Project
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </a>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 text-white transition-colors hover:border-blue-bright hover:text-blue-bright"
                          aria-label={`View ${project.name}`}
                        >
                          <ArrowUpRight className="h-4 w-4" aria-hidden />
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-white/8 py-20 md:py-28">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <h2 className="services-display">
              Have a Project
              <span className="services-accent mt-1 block italic">in Mind?</span>
            </h2>
            <p className="mx-auto mt-7 max-w-xl text-[15px] leading-8 text-white/72">
              Tell us about your business and the digital experience you want to build.
              We&apos;ll help you plan a website that fits your goals.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/start-project" size="lg">
                Start Your Project
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Contact Us
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </div>
  );
}
