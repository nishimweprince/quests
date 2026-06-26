import { wafaaConfig } from "@/data/wafaaConfig";

function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function EmergencySupportBar() {
  return (
    <div
      className="border-b border-wafaa-line bg-wafaa-lilac/60"
      role="region"
      aria-label="Emergency support"
    >
      <div className="wafaa-container flex flex-col gap-2 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-start gap-2.5 sm:items-center">
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-wafaa-berry/10 text-wafaa-berry sm:mt-0"
            aria-hidden="true"
          >
            <PhoneIcon />
          </span>
          <p className="text-sm leading-snug text-wafaa-text sm:text-[0.9375rem]">
            <span className="font-semibold">Need immediate support?</span>{" "}
            Call{" "}
            <a
              href={wafaaConfig.primaryPhoneHref}
              className="font-bold text-wafaa-primary underline decoration-wafaa-berry/40 underline-offset-2 hover:decoration-wafaa-berry min-h-[44px] inline-flex items-center"
            >
              {wafaaConfig.primaryPhone}
            </a>{" "}
            — available 24/7.
          </p>
        </div>
        <a
          href="#services"
          className="shrink-0 text-sm font-semibold text-wafaa-sage underline-offset-2 hover:underline min-h-[44px] inline-flex items-center pl-10 sm:pl-0"
        >
          See ways we can help
        </a>
      </div>
    </div>
  );
}
