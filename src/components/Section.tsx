import { type ReactNode } from "react";
import { Container } from "./Container";

type Tone = "paper" | "sand" | "ink" | "harbour";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  sand: "bg-sand text-ink",
  ink: "bg-ink text-paper",
  harbour: "bg-harbour text-paper",
};

export function Section({
  children,
  tone = "paper",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`${toneClasses[tone]} py-20 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  dek,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  dek?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const dekColor = tone === "dark" ? "text-stone" : "text-paper/75";
  const eyebrowColor = tone === "dark" ? "text-brass-dark" : "text-brass-light";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className={`eyebrow ${eyebrowColor}`}>{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">
        {title}
      </h2>
      {dek ? <p className={`mt-4 text-lg leading-relaxed ${dekColor}`}>{dek}</p> : null}
    </div>
  );
}
