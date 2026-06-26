import { heroContent } from "@/data/wafaaContent";
import { wafaaConfig } from "@/data/wafaaConfig";
import { SupportThread } from "./SupportThread";

function IntakeLink({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const href = wafaaConfig.intakeUrl || "#contact";
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function NextSteps() {
  return (
    <section
      className="relative overflow-hidden bg-wafaa-paper py-16 md:py-20 lg:py-24"
      aria-labelledby="next-steps-heading"
    >
      <div className="wafaa-container">
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-start">
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-wafaa-sage">
              {heroContent.eyebrow}
            </p>
            <h1
              id="next-steps-heading"
              className="mt-4 font-display text-4xl font-semibold leading-[1.15] tracking-tight text-wafaa-primary sm:text-5xl lg:text-[3.25rem]"
            >
              {heroContent.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-wafaa-muted">
              {heroContent.supporting}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={wafaaConfig.primaryPhoneHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-wafaa-primary px-6 text-base font-semibold text-white transition-colors hover:bg-wafaa-primary-deep"
              >
                {heroContent.primaryCta}
              </a>
              <IntakeLink className="inline-flex min-h-[48px] items-center justify-center rounded-md border-2 border-wafaa-primary px-6 text-base font-semibold text-wafaa-primary transition-colors hover:bg-wafaa-lilac">
                {heroContent.secondaryCta}
              </IntakeLink>
            </div>
            <a
              href="#services"
              className="mt-4 inline-flex min-h-[44px] items-center text-base font-semibold text-wafaa-sage underline-offset-4 hover:underline"
            >
              {heroContent.tertiaryCta}
            </a>

            <SupportThread variant="hero" className="relative" />
          </div>

          <aside
            className="rounded-md border border-wafaa-line bg-white p-6 shadow-sm lg:p-8"
            aria-label="Start here — quick actions"
          >
            <h2 className="font-display text-xl font-semibold text-wafaa-primary">
              {heroContent.panelTitle}
            </h2>
            <ol className="mt-6 space-y-6">
              {heroContent.panelItems.map((item, index) => (
                <li key={item.label} className="flex gap-4">
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-wafaa-lilac text-sm font-bold text-wafaa-primary"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-wafaa-text">
                      {item.label}
                    </p>
                    {item.type === "phone" ? (
                      <a
                        href={item.href}
                        className="mt-1 block text-base font-semibold text-wafaa-primary hover:underline underline-offset-2"
                      >
                        {item.action}
                      </a>
                    ) : item.type === "intake" ? (
                      <IntakeLink className="mt-1 block text-base text-wafaa-muted hover:text-wafaa-primary hover:underline underline-offset-2">
                        {item.action}
                      </IntakeLink>
                    ) : (
                      <a
                        href={item.href}
                        className="mt-1 block text-base text-wafaa-muted hover:text-wafaa-primary hover:underline underline-offset-2"
                      >
                        {item.action}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
