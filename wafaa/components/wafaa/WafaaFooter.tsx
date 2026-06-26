import { footerContent, navLinks } from "@/data/wafaaContent";
import { wafaaConfig } from "@/data/wafaaConfig";

const serviceLinks = [
  { label: "24/7 Support", href: wafaaConfig.primaryPhoneHref },
  { label: "Crisis intervention", href: "#services" },
  { label: "Emergency housing", href: "#services" },
  { label: "Food pantry", href: "#services" },
  { label: "Counseling", href: "#services" },
  { label: "Legal assistance", href: "#services" },
];

export function WafaaFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wafaa-primary-deep text-white">
      <div className="wafaa-container py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-semibold tracking-tight">
              {wafaaConfig.shortName}
            </p>
            <p className="mt-1 text-sm text-white/70">
              Women &amp; Families Ascending Association
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              {footerContent.mission}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/85 hover:text-white hover:underline underline-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Services
            </h2>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/85 hover:text-white hover:underline underline-offset-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>
                <a
                  href={wafaaConfig.primaryPhoneHref}
                  className="font-semibold hover:text-white hover:underline underline-offset-2"
                >
                  {wafaaConfig.primaryPhone}
                </a>
                <span className="block text-white/60 text-xs">24/7</span>
              </li>
              <li>
                <a
                  href={wafaaConfig.emailHref}
                  className="hover:text-white hover:underline underline-offset-2"
                >
                  {wafaaConfig.email}
                </a>
              </li>
              <li className="text-white/70">{wafaaConfig.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/60">
            &copy; {year} {wafaaConfig.organizationName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href="#"
              className="text-white/70 hover:text-white hover:underline underline-offset-2"
              aria-label={`${footerContent.accessibilityLabel} (placeholder)`}
            >
              {footerContent.accessibilityLabel}
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white hover:underline underline-offset-2"
              aria-label={`${footerContent.privacyLabel} (placeholder)`}
            >
              {footerContent.privacyLabel}
            </a>
            {wafaaConfig.arabicBrochureUrl ? (
              <a
                href={wafaaConfig.arabicBrochureUrl}
                className="text-white/70 hover:text-white hover:underline underline-offset-2"
              >
                Arabic brochure
              </a>
            ) : null}
            <a
              href="#main-content"
              className="text-white/70 hover:text-white hover:underline underline-offset-2"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
