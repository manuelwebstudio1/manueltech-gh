import { Container } from "@/components/ui/Container";
import { BusinessGoalCard } from "@/components/strategy/BusinessGoalCard";

export function WebsiteStrategySection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { title: string; description: string }[];
}) {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <h2 className="section-title max-w-3xl text-ink">{title}</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">{description}</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <BusinessGoalCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
