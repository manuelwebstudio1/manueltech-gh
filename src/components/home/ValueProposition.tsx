import { Compass, Gauge, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const cards = [
  {
    icon: Compass,
    title: "Built With Purpose",
    copy: "Every project begins with your business objectives, audience, and requirements.",
  },
  {
    icon: Gauge,
    title: "Engineered for Performance",
    copy: "We focus on responsive design, clean implementation, usability, and technical quality.",
  },
  {
    icon: TrendingUp,
    title: "Designed for Growth",
    copy: "We help businesses identify opportunities to improve visibility, customer engagement, and lead generation.",
  },
];

export function ValueProposition() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <Container>
        <SectionHeading
          title="Your Website Should Work as Hard as You Do."
          description="A professional website is more than an online brochure. It is an opportunity to communicate your value, reach potential customers, and create a better experience for the people you serve."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <article className="card-hover h-full rounded-2xl border border-line bg-white p-6">
                <card.icon className="h-6 w-6 text-blue" aria-hidden />
                <h3 className="mt-5 text-lg font-semibold text-ink">{card.title}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{card.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
