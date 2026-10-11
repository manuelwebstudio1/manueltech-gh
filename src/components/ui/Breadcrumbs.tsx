import Link from "next/link";
import { cn } from "@/lib/utils";

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: { label: string; href?: string }[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={light ? "text-white/60 hover:text-white" : "text-muted hover:text-ink"}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={cn(light ? "text-white" : "text-ink")} aria-current={last ? "page" : undefined}>
                  {item.label}
                </span>
              )}
              {last ? null : (
                <span className={light ? "text-white/30" : "text-line"} aria-hidden>
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
