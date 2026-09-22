import { type ReactNode } from "react";

export function EntityCard({
  eyebrow,
  title,
  summary,
  description,
  href,
  linkLabel,
  footer,
}: {
  eyebrow?: string;
  title: string;
  summary: string;
  description: string;
  href?: string;
  linkLabel?: string;
  footer?: ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-8">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h3 className="mt-2 font-display text-2xl font-medium text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm font-medium text-brass-dark">{summary}</p>
      <p className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-stone">
        {description}
      </p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer noopener"
          className="focus-ring mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition-colors hover:border-ink"
        >
          {linkLabel ?? "Visit site"}
          <span aria-hidden>↗</span>
        </a>
      ) : null}
      {footer}
    </div>
  );
}
