import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-150";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-brass-dark",
  secondary: "bg-transparent text-ink border border-ink/25 hover:border-ink",
  ghost: "bg-transparent text-paper border border-paper/40 hover:border-paper",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} className={classes}>
      {children}
    </button>
  );
}
