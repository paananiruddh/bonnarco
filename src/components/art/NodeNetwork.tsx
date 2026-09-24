type Tone = "paper" | "ink";

const line: Record<Tone, string> = {
  paper: "text-stone-light",
  ink: "text-harbour-light/70",
};

const accent: Record<Tone, string> = {
  paper: "text-brass-dark",
  ink: "text-brass-light",
};

const NODES = [
  [70, 130],
  [220, 90],
  [245, 190],
  [180, 260],
  [90, 250],
  [45, 170],
] as const;

/**
 * A hub-and-spoke cluster — enquiries, brands and technology drawn into
 * one place. Used where that "brought together" idea is the point (the
 * technology teaser, "what sits under the umbrella").
 */
export function NodeNetwork({
  tone = "ink",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const hub: [number, number] = [150, 175];

  return (
    <svg
      className={`pointer-events-none ${className}`}
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
    >
      <g className={line[tone]} stroke="currentColor">
        {NODES.map(([x, y]) => (
          <line key={`${x}-${y}`} x1={hub[0]} y1={hub[1]} x2={x} y2={y} />
        ))}
      </g>
      <circle cx={hub[0]} cy={hub[1]} r="7" className={accent[tone]} fill="currentColor" />
      {NODES.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="4" className={accent[tone]} fill="currentColor" opacity="0.6" />
      ))}
    </svg>
  );
}
