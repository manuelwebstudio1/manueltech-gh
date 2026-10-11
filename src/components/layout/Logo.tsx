import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
  compact = false,
}: {
  className?: string;
  inverted?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center", className)}
      aria-label="ManuelTech GH home"
    >
      <Image
        src={inverted ? "/brand/logo-on-dark.png" : "/brand/logo.png"}
        alt="ManuelTech GH"
        width={320}
        height={160}
        className={cn(
          "h-12 w-auto max-w-[180px] bg-transparent object-contain object-center sm:max-w-[210px] md:h-[54px]",
          compact && "h-10 max-w-[150px] md:h-11",
        )}
        priority
      />
    </Link>
  );
}
