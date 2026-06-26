"use client";

import { useState } from "react";
import { faqItems } from "@/data/wafaaContent";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-wafaa-lilac/30 py-16 md:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="wafaa-container max-w-3xl">
        <h2
          id="faq-heading"
          className="font-display text-3xl font-semibold leading-tight text-wafaa-primary sm:text-4xl"
        >
          Frequently asked questions
        </h2>
        <p className="mt-3 text-wafaa-muted">
          Answers based on WAFAA&apos;s current services and contact information.
        </p>

        <div className="mt-10 divide-y divide-wafaa-line rounded-md border border-wafaa-line bg-white">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full min-h-[56px] cursor-pointer items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-wafaa-lilac/30"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span
                      className="shrink-0 font-mono text-sm font-bold text-wafaa-sage"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-base font-semibold text-wafaa-text">
                      {item.question}
                    </span>
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-wafaa-line text-wafaa-primary"
                      aria-hidden="true"
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5 pl-[3.25rem] text-wafaa-muted leading-relaxed"
                >
                  {item.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
