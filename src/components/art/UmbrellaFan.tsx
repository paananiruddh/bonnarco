type Tone = "paper" | "sand";

const strokeTone: Record<Tone, string> = {
  paper: "text-brass-dark/55",
  sand: "text-brass-dark/45",
};

const CX = 340;
const CY = -40;
const RADIUS = 340;
const RAY_COUNT = 7;
const SPAN_DEG = 100;

function pointAt(deg: number): [number, number] {
  const rad = (deg * Math.PI) / 180;
  return [CX + RADIUS * Math.cos(rad), CY + RADIUS * Math.sin(rad)];
}

const startDeg = 90 - SPAN_DEG / 2;
const rayTips = Array.from({ length: RAY_COUNT }, (_, i) =>
  pointAt(startDeg + (SPAN_DEG / (RAY_COUNT - 1)) * i),
);

const [firstTip] = rayTips;
const lastTip = rayTips[rayTips.length - 1];

/**
 * An umbrella canopy, drawn literally — ribs radiating from a point plus
 * the canopy's arc. Reserved for the one place the "umbrella" metaphor is
 * the actual point being made (the About hero), rather than used as a
 * generic decoration.
 */
export function UmbrellaFan({
  tone = "sand",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      className={`pointer-events-none ${strokeTone[tone]} ${className}`}
      viewBox="0 0 560 360"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor">
        {rayTips.map(([x, y]) => (
          <line key={`${x}-${y}`} x1={CX} y1={CY} x2={x} y2={y} />
        ))}
        <path
          d={`M${firstTip[0]},${firstTip[1]} A${RADIUS},${RADIUS} 0 0,1 ${lastTip[0]},${lastTip[1]}`}
          strokeWidth="1.5"
          opacity="0.85"
        />
      </g>
      <circle cx={CX} cy={CY} r="4" fill="currentColor" />
    </svg>
  );
}
