import { supportCategories } from "@/data/wafaaContent";

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 mt-0.5"
    >
      <circle cx="8" cy="8" r="7" stroke="var(--wafaa-sage)" strokeWidth="1.5" />
      <path
        d="M5 8l2 2 4-4"
        stroke="var(--wafaa-sage)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SupportCategories() {
  return (
    <section
      id="services"
      className="bg-wafaa-lilac/40 py-16 md:py-20"
      aria-labelledby="services-heading"
    >
      <div className="wafaa-container">
        <h2
          id="services-heading"
          className="max-w-2xl font-display text-3xl font-semibold leading-tight text-wafaa-primary sm:text-4xl"
        >
          {supportCategories.heading}
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {supportCategories.groups.map((group, index) => (
            <article
              key={group.title}
              className={`flex flex-col rounded-md border border-wafaa-line bg-wafaa-paper p-6 lg:p-8 ${
                index === 0 ? "lg:row-span-1 ring-1 ring-wafaa-primary/10" : ""
              }`}
            >
              <h3 className="font-display text-xl font-semibold text-wafaa-primary">
                {group.title}
              </h3>
              <p className="mt-3 text-wafaa-muted leading-relaxed">
                {group.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {group.services.map((service) => (
                  <li key={service} className="flex gap-2.5 text-[0.9375rem]">
                    <CheckIcon />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <a
                href={group.ctaHref}
                className="mt-8 inline-flex min-h-[44px] items-center text-base font-semibold text-wafaa-sage hover:text-wafaa-primary hover:underline underline-offset-4"
              >
                {group.cta}
                <span aria-hidden="true" className="ml-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
