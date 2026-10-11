import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
        align === "center" && "md:flex-col md:items-center md:text-center",
      )}
    >
      <div className={cn(align === "center" && "max-w-3xl")}>
        {eyebrow ? (
          <p
            className={cn(
              "mb-3 text-xs font-semibold tracking-[0.18em] uppercase",
              light ? "text-blue-bright" : "text-blue",
            )}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2 className={cn("section-title", light ? "text-white" : "text-ink")}>
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-4 max-w-2xl text-base leading-7 md:text-[17px]",
              light ? "text-white/70" : "text-muted",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
