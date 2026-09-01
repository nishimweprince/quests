export type ArrowDirection = "right" | "left" | "up" | "down" | "diagonal";

const ROTATION: Record<ArrowDirection, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
  diagonal: -45,
};

/** Single arrow glyph. Siwa uses a 45° arrow on buttons and a straight one elsewhere. */
export function Arrow({
  direction = "right",
  className,
}: {
  direction?: ArrowDirection;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={className ?? "btn-icon"}>
      <svg fill="none" viewBox="0 0 16 16">
        <g
          stroke="currentColor"
          strokeLinecap="square"
          strokeWidth="1.4"
          transform={`rotate(${ROTATION[direction]} 8 8)`}
        >
          <path d="M2.5 8h10" />
          <path d="M8.8 4.2 12.8 8l-4 3.8" />
        </g>
      </svg>
    </span>
  );
}

export function Chevron({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 10 6">
      <path
        d="M1 1.2 5 4.8l4-3.6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </svg>
  );
}
