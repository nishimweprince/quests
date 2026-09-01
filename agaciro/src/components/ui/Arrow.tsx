export function Arrow({ direction = "right" }: { direction?: "right" | "down" | "up" }) {
  const rotate = direction === "down" ? "rotate(90 8 8)" : direction === "up" ? "rotate(-90 8 8)" : undefined;
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16">
      <g transform={rotate} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35">
        <path d="M2.5 8h10.2" />
        <path d="m9 4.3 3.7 3.7L9 11.7" />
      </g>
    </svg>
  );
}
