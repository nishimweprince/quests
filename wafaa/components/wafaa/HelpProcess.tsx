import { helpProcess } from "@/data/wafaaContent";
import { wafaaConfig } from "@/data/wafaaConfig";
import { SupportThread } from "./SupportThread";

export function HelpProcess() {
  return (
    <section
      id="how-to-get-help"
      className="py-16 md:py-20"
      aria-labelledby="help-heading"
    >
      <div className="wafaa-container">
        <h2
          id="help-heading"
          className="max-w-2xl font-display text-3xl font-semibold leading-tight text-wafaa-primary sm:text-4xl"
        >
          {helpProcess.heading}
        </h2>

        <SupportThread variant="process" className="mt-10 mb-2" />

        <ol className="mt-8 grid gap-8 lg:grid-cols-3 lg:gap-6">
          {helpProcess.steps.map((step) => (
            <li key={step.number}>
              <div className="rounded-md border border-wafaa-line bg-white p-6 h-full">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-wafaa-primary text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {String(step.number).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-wafaa-primary">
                  {step.title}
                </h3>
                <p className="mt-3 text-wafaa-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-md border border-wafaa-berry/20 bg-wafaa-berry/5 px-5 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <p className="text-[0.9375rem] font-medium text-wafaa-text">
            {helpProcess.reminder}
          </p>
          <a
            href={wafaaConfig.primaryPhoneHref}
            className="mt-3 inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-md bg-wafaa-primary px-5 text-sm font-semibold text-white hover:bg-wafaa-primary-deep sm:mt-0"
          >
            Call now
          </a>
        </div>
      </div>
    </section>
  );
}
