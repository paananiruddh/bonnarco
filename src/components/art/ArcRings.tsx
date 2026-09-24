type Tone = "paper" | "ink";

const accent: Record<Tone, string> = {
  paper: "text-brass-dark",
  ink: "text-brass-light",
};

const neutral: Record<Tone, string> = {
  paper: "text-stone-light/45",
  ink: "text-harbour-light/50",
};

/**
 * Concentric rings bleeding off a corner — the site's default abstract
 * accent. Corner/size are controlled by the wrapping className; colour by
 * `tone` (which background it's sitting on).
 */
export function ArcRings({
  tone = "paper",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="199" className={neutral[tone]} stroke="currentColor" />
      <circle cx="200" cy="200" r="150" className={neutral[tone]} stroke="currentColor" />
      <circle
        cx="200"
        cy="200"
        r="95"
        className={accent[tone]}
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.65"
      />
      <circle cx="200" cy="200" r="3" className={accent[tone]} fill="currentColor" />
    </svg>
  );
}
