import { PageHero } from "@/components/ui/PageHero";
import { ProjectInquiryCTA } from "@/components/ui/ProjectInquiryCTA";
import { Container } from "@/components/ui/Container";
import { processStages } from "@/data/process";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Our Process",
  description:
    "See how ManuelTech GH manages discovery, strategy, proposals, design and development, testing, launch, and support.",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Delivery process"
        title="From business idea to a digital experience you can use."
        description="The stages below explain how requirements, scope, revisions, testing, launch, and support are handled. Exact milestones depend on the project agreement."
        backgroundImage="/hero/strategy-session.png"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Our Process" },
        ]}
      />

      <section className="bg-white py-16 md:py-20">
        <Container className="space-y-8">
          {processStages.map((stage) => (
            <article
              key={stage.number}
              className="rounded-3xl border border-line bg-surface p-6 md:p-8"
            >
              <p className="font-heading text-sm font-bold text-blue">
                {stage.number} · {stage.title}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-ink">{stage.objective}</h2>
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                    Typical activities
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
                    {stage.activities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                      Client involvement
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{stage.clientInvolvement}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                      Expected deliverables
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-muted">
                      {stage.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">
                      Completion criteria
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">{stage.completionCriteria}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-surface py-12">
        <Container className="max-w-3xl">
          <p className="text-sm leading-7 text-muted">
            Revisions are handled inside the agreed review rounds. Changes that expand
            scope, add integrations, or require new content models are discussed before
            they are scheduled. Support after launch is included only when the proposal
            says so.
          </p>
        </Container>
      </section>

      <ProjectInquiryCTA title="If you are ready to start, we can map this process to your project." />
    </>
  );
}
