import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "dark" | "white";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-blue text-white hover:bg-[#2c6ae8] shadow-[0_10px_24px_rgb(52_120_246_/_0.28)]",
  secondary:
    "bg-transparent text-white ring-1 ring-white/20 hover:bg-white/8 hover:ring-white/40",
  ghost:
    "bg-white text-ink ring-1 ring-line hover:ring-blue/30 hover:text-blue",
  dark: "bg-navy text-white hover:bg-navy-secondary",
  white:
    "bg-white text-navy shadow-[0_12px_30px_rgb(7_17_31_/_0.28)] hover:bg-[#f3f6fb] hover:text-navy",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-[15px]",
};

interface SharedProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
  external = false,
}: SharedProps & { href: string; external?: boolean }) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors",
    variants[variant],
    sizes[size],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  disabled,
  ...props
}: SharedProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
