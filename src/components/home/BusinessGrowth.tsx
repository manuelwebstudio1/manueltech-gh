import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Understand",
    copy: "Identify business goals, audience needs, and current challenges.",
  },
  {
    number: "02",
    title: "Strategize",
    copy: "Define the website's purpose, essential features, and customer journey.",
  },
  {
    number: "03",
    title: "Build",
    copy: "Develop a tailored digital experience around the agreed requirements.",
  },
  {
    number: "04",
    title: "Improve",
    copy: "Where analytics and relevant data are available, identify opportunities to improve performance.",
  },
];

export function BusinessGrowth() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <Container className="max-w-3xl">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-blue uppercase">
            Business-first development
          </p>
          <h2 className="section-title mt-3 text-ink">
            We Don&apos;t Just Build Your Website. We Think About What It Should Achieve.
          </h2>
          <p className="mt-5 text-base leading-7 text-muted">
            Before deciding what to build, we work to understand your business, your
            customers, and the opportunities you want to pursue. That understanding
            helps shape the structure, features, and user experience of your website.
          </p>
          <ol className="mt-8 space-y-4">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-4">
                <span className="font-heading text-sm font-bold text-blue">{step.number}</span>
                <div>
                  <p className="font-semibold text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-6 text-muted">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted">
            The exact strategy depends on the client&apos;s industry, budget, available
            data, and goals.
          </p>
          <ButtonLink href="/start-project" className="mt-7">
            Let&apos;s Discuss Your Business
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
