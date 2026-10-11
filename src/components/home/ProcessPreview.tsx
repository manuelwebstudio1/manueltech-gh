import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processStages } from "@/data/process";

export function ProcessPreview() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <SectionHeading
          title="From Business Idea to Digital Experience."
          description="A simple, transparent process designed to keep requirements, feedback, and delivery aligned."
          action={
            <Link href="/process" className="text-sm font-semibold text-blue">
              View the full process
            </Link>
          }
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processStages.map((stage) => (
            <li
              key={stage.number}
              className="rounded-2xl border border-line bg-surface p-5"
            >
              <p className="font-heading text-sm font-bold text-blue">{stage.number}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{stage.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{stage.summary}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
