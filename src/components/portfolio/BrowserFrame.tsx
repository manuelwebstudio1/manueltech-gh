import { cn } from "@/lib/utils";

export function BrowserFrame({
  title,
  children,
  className,
  compact = false,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-white/10 bg-[#0d1a2d] shadow-[0_24px_60px_rgb(0_0_0_/_0.35)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-white/8 bg-[#0a1526] px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        </span>
        <p className="min-w-0 truncate rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-white/45">
          {title}
        </p>
      </div>
      <div className={cn(compact ? "p-2.5" : "p-3")}>{children}</div>
    </div>
  );
}
