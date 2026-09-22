import Link from "next/link";

export function Logo({
  tone = "ink",
  className = "",
}: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  const textColor = tone === "ink" ? "text-ink" : "text-paper";
  const ampColor = tone === "ink" ? "text-brass-dark" : "text-brass-light";

  return (
    <Link
      href="/"
      className={`focus-ring group inline-flex items-baseline gap-[0.14em] rounded-sm font-display text-xl font-medium tracking-tight ${textColor} ${className}`}
      aria-label="Bonnar & Co — home"
    >
      <span>Bonnar</span>
      <span className={`font-display italic ${ampColor}`}>&amp;</span>
      <span>Co</span>
    </Link>
  );
}
