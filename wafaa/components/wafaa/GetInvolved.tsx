import { getInvolved } from "@/data/wafaaContent";
import { wafaaConfig } from "@/data/wafaaConfig";

export function GetInvolved() {
  const donateHref = wafaaConfig.donationUrl || "#contact";

  return (
    <section
      id="get-involved"
      className="bg-wafaa-primary py-16 text-white md:py-20"
      aria-labelledby="involved-heading"
    >
      <div className="wafaa-container">
        <h2
          id="involved-heading"
          className="max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl"
        >
          {getInvolved.heading}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {getInvolved.paths.map((path, index) => (
            <article
              key={path.title}
              className={`flex flex-col rounded-md border border-white/15 p-6 md:p-8 ${
                index === 0
                  ? "bg-white/10 md:-mt-4 md:pb-10"
                  : "bg-white/5"
              }`}
            >
              <h3 className="font-display text-2xl font-semibold">
                {path.title}
              </h3>
              <p className="mt-3 flex-1 text-white/80 leading-relaxed">
                {path.description}
              </p>
              <a
                href={
                  path.ctaType === "donate"
                    ? donateHref
                    : path.ctaHref ?? "#contact"
                }
                className={`mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md px-6 text-base font-semibold transition-colors ${
                  index === 0
                    ? "bg-white text-wafaa-primary hover:bg-wafaa-lilac"
                    : "border border-white/40 text-white hover:bg-white/10"
                }`}
              >
                {path.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
