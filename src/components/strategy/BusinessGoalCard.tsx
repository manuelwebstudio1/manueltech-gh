export function BusinessGoalCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-line bg-white p-6">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
    </article>
  );
}
