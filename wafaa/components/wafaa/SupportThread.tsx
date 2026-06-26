type SupportThreadVariant = "hero" | "process";

interface SupportThreadProps {
  variant?: SupportThreadVariant;
  className?: string;
}

export function SupportThread({
  variant = "hero",
  className = "",
}: SupportThreadProps) {
  if (variant === "process") {
    return (
      <div
        className={`hidden lg:block ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-3"
          preserveAspectRatio="none"
        >
          <path
            d="M0 6 H260 M280 6 H520 M540 6 H800"
            stroke="var(--wafaa-line)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="0" cy="6" r="5" fill="var(--wafaa-sage)" />
          <circle cx="400" cy="6" r="5" fill="var(--wafaa-sage)" />
          <circle cx="800" cy="6" r="5" fill="var(--wafaa-primary)" />
        </svg>
      </div>
    );
  }

  return (
    <div
      className={`${className}`}
      aria-hidden="true"
    >
      {/* Desktop horizontal thread */}
      <svg
        viewBox="0 0 120 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 w-[120px] h-[200px]"
      >
        <path
          d="M10 20 C 60 40, 60 80, 60 100 S 60 160, 110 180"
          stroke="var(--wafaa-primary)"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          fill="none"
          className="thread-animate"
        />
        <circle cx="10" cy="20" r="4" fill="var(--wafaa-sage)" />
        <circle cx="60" cy="100" r="4" fill="var(--wafaa-sage)" />
        <circle cx="110" cy="180" r="4" fill="var(--wafaa-primary)" />
      </svg>
      {/* Mobile vertical thread */}
      <svg
        viewBox="0 0 24 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="lg:hidden mx-auto w-6 h-[120px] my-4"
      >
        <path
          d="M12 8 V 112"
          stroke="var(--wafaa-primary)"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          className="thread-animate"
        />
        <circle cx="12" cy="8" r="4" fill="var(--wafaa-sage)" />
        <circle cx="12" cy="60" r="4" fill="var(--wafaa-sage)" />
        <circle cx="12" cy="112" r="4" fill="var(--wafaa-primary)" />
      </svg>
    </div>
  );
}

export function ProcessThreadMobile({ className = "" }: { className?: string }) {
  return (
    <div className={`lg:hidden flex flex-col items-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 80" className="w-6 h-20" fill="none">
        <path d="M12 4 V 76" stroke="var(--wafaa-line)" strokeWidth="2" />
        <circle cx="12" cy="4" r="4" fill="var(--wafaa-sage)" />
        <circle cx="12" cy="40" r="4" fill="var(--wafaa-sage)" />
        <circle cx="12" cy="76" r="4" fill="var(--wafaa-primary)" />
      </svg>
    </div>
  );
}
