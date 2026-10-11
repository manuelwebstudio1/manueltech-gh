export function GrowthProcess({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step.title} className="rounded-2xl border border-line bg-white p-5">
          <p className="font-heading text-sm font-bold text-blue">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
