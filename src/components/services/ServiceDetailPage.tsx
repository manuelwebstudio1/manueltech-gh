import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectInquiryCTA } from "@/components/ui/ProjectInquiryCTA";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { GrowthProcess } from "@/components/strategy/GrowthProcess";
import { getRelatedProjects } from "@/data/projects";
import type { ServiceDetail } from "@/types";

export function ServiceDetailPage({ service }: { service: ServiceDetail }) {
  const related = getRelatedProjects(service.relatedProjectSlugs);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.headline}
        description={service.introduction}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title text-ink">The business problem</h2>
            <p className="mt-4 text-base leading-7 text-muted">{service.problem}</p>
          </div>
          <div>
            <h2 className="section-title text-ink">How we approach it</h2>
            <p className="mt-4 text-base leading-7 text-muted">{service.solution}</p>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <Container>
          <h2 className="section-title text-ink">Capabilities</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-line bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-ink">What a project may include</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-ink">Optional work, separately agreed</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
              {service.optionalWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <Container>
          <h2 className="section-title text-ink">Information needed to scope the project</h2>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {service.scopingNeeds.map((item) => (
              <li key={item} className="rounded-2xl border border-line bg-white px-5 py-4 text-sm text-ink">
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="section-title text-ink">Engagement process</h2>
          <div className="mt-10">
            <GrowthProcess steps={service.process} />
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="bg-surface py-16 md:py-20">
          <Container>
            <h2 className="section-title text-ink">Related concept projects</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
              These are labelled concept projects. They illustrate possible directions,
              not completed client case studies.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {related.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-white py-16 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="section-title text-ink">Questions</h2>
          <div className="mt-8">
            <FAQAccordion items={service.faqs} />
          </div>
          <ButtonLink href="/start-project" className="mt-8">
            Begin with a project inquiry
          </ButtonLink>
        </Container>
      </section>

      <ProjectInquiryCTA />
    </>
  );
}
