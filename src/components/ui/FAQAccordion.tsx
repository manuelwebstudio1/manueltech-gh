"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line rounded-2xl border border-line bg-white">
      {items.map((item, index) => {
        const expanded = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-[15px] font-semibold text-ink md:px-6"
                onClick={() => setOpen(expanded ? null : index)}
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-transform",
                    expanded && "rotate-180 text-blue",
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!expanded}
              className="px-5 pb-5 text-sm leading-7 text-muted md:px-6"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
