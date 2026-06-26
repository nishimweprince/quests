"use client";

import { FormEvent, useState } from "react";
import { contactContent } from "@/data/wafaaContent";
import { wafaaConfig } from "@/data/wafaaConfig";

type FormFields = {
  firstName: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

function IntakeButton({ className }: { className: string }) {
  if (wafaaConfig.intakeUrl) {
    return (
      <a href={wafaaConfig.intakeUrl} className={className}>
        {contactContent.actions.intake}
      </a>
    );
  }
  return (
    <a href="#contact-form" className={className}>
      {contactContent.actions.intake}
    </a>
  );
}

export function ContactSection() {
  const [fields, setFields] = useState<FormFields>({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!fields.firstName.trim()) {
      next.firstName = "First name is required.";
    }
    if (!fields.email.trim()) {
      next.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!fields.message.trim()) {
      next.message = "Please include a brief message.";
    }
    return next;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!wafaaConfig.contactFormEndpoint) {
      setSubmitted(true);
      setSubmitMessage(contactContent.formFallback);
      return;
    }

    try {
      const res = await fetch(wafaaConfig.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      setSubmitMessage("Your message has been sent. WAFAA will be in touch.");
      setFields({ firstName: "", email: "", phone: "", message: "" });
    } catch {
      setSubmitted(true);
      setSubmitMessage(contactContent.formFallback);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20"
      aria-labelledby="contact-heading"
    >
      <div className="wafaa-container">
        <h2
          id="contact-heading"
          className="font-display text-3xl font-semibold leading-tight text-wafaa-primary sm:text-4xl"
        >
          {contactContent.heading}
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-wafaa-muted">
                  {contactContent.labels.support}
                </h3>
                <a
                  href={wafaaConfig.primaryPhoneHref}
                  className="mt-1 block text-2xl font-bold text-wafaa-primary hover:underline underline-offset-2"
                >
                  {wafaaConfig.primaryPhone}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-wafaa-muted">
                  {contactContent.labels.additional}
                </h3>
                <ul className="mt-2 space-y-1">
                  {wafaaConfig.alternatePhones.map((phone) => (
                    <li key={phone}>
                      <a
                        href={`tel:+1${phone.replace(/\D/g, "")}`}
                        className="text-lg text-wafaa-text hover:text-wafaa-primary hover:underline underline-offset-2"
                      >
                        {phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-wafaa-muted">
                  {contactContent.labels.email}
                </h3>
                <a
                  href={wafaaConfig.emailHref}
                  className="mt-1 block text-lg text-wafaa-text hover:text-wafaa-primary hover:underline underline-offset-2"
                >
                  {wafaaConfig.email}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-wafaa-muted">
                  {contactContent.labels.area}
                </h3>
                <p className="mt-1 text-lg text-wafaa-text">
                  {wafaaConfig.serviceArea}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={wafaaConfig.primaryPhoneHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-wafaa-primary px-5 text-sm font-semibold text-white hover:bg-wafaa-primary-deep"
              >
                {contactContent.actions.call}
              </a>
              <IntakeButton className="inline-flex min-h-[48px] items-center justify-center rounded-md border-2 border-wafaa-primary px-5 text-sm font-semibold text-wafaa-primary hover:bg-wafaa-lilac" />
              <a
                href={wafaaConfig.emailHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-wafaa-line px-5 text-sm font-semibold text-wafaa-sage hover:bg-wafaa-lilac"
              >
                {contactContent.actions.email}
              </a>
            </div>

            {wafaaConfig.arabicBrochureUrl ? (
              <a
                href={wafaaConfig.arabicBrochureUrl}
                className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-wafaa-muted hover:text-wafaa-primary hover:underline underline-offset-2"
              >
                {contactContent.actions.brochure}
              </a>
            ) : (
              <p className="mt-4 text-sm text-wafaa-muted">
                {contactContent.actions.brochure} — available soon.
              </p>
            )}
          </div>

          <div
            id="contact-form"
            className="rounded-md border border-wafaa-line bg-white p-6 md:p-8"
          >
            <h3 className="font-display text-xl font-semibold text-wafaa-primary">
              Send a message
            </h3>
            <p className="mt-2 text-sm text-wafaa-muted">
              {contactContent.formPrivacy}
            </p>

            {submitted ? (
              <div
                role="status"
                className="mt-6 rounded-md border border-wafaa-sage/30 bg-wafaa-lilac/50 p-4 text-wafaa-text"
              >
                {submitMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-wafaa-text"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    value={fields.firstName}
                    onChange={(e) =>
                      setFields((f) => ({ ...f, firstName: e.target.value }))
                    }
                    aria-describedby={
                      errors.firstName ? "firstName-error" : undefined
                    }
                    aria-invalid={!!errors.firstName}
                    className="mt-1.5 w-full rounded-md border border-wafaa-line px-4 py-3 text-base text-wafaa-text focus:border-wafaa-sage"
                  />
                  {errors.firstName && (
                    <p
                      id="firstName-error"
                      className="mt-1 text-sm text-wafaa-berry"
                      role="alert"
                    >
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-wafaa-text"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={fields.email}
                    onChange={(e) =>
                      setFields((f) => ({ ...f, email: e.target.value }))
                    }
                    aria-describedby={errors.email ? "email-error" : undefined}
                    aria-invalid={!!errors.email}
                    className="mt-1.5 w-full rounded-md border border-wafaa-line px-4 py-3 text-base text-wafaa-text focus:border-wafaa-sage"
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      className="mt-1 text-sm text-wafaa-berry"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-wafaa-text"
                  >
                    Phone number{" "}
                    <span className="font-normal text-wafaa-muted">
                      (optional)
                    </span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={fields.phone}
                    onChange={(e) =>
                      setFields((f) => ({ ...f, phone: e.target.value }))
                    }
                    className="mt-1.5 w-full rounded-md border border-wafaa-line px-4 py-3 text-base text-wafaa-text focus:border-wafaa-sage"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-wafaa-text"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={fields.message}
                    onChange={(e) =>
                      setFields((f) => ({ ...f, message: e.target.value }))
                    }
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    aria-invalid={!!errors.message}
                    className="mt-1.5 w-full resize-y rounded-md border border-wafaa-line px-4 py-3 text-base text-wafaa-text focus:border-wafaa-sage"
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-1 text-sm text-wafaa-berry"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-md bg-wafaa-primary px-6 text-base font-semibold text-white hover:bg-wafaa-primary-deep sm:w-auto"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
