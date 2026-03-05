import Link from 'next/link';
import { ArrowRight, Clock3, FileText, ShieldCheck } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface LegalSection {
  title: string;
  paragraphs: string[];
  points?: string[];
}

interface LegalDocumentPageProps {
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
  label: string;
  intro: string;
  lastUpdated: string;
  notice: string;
  sections: LegalSection[];
  summaryTitle: string;
  summaryPoints: string[];
}

export default function LegalDocumentPage({
  title,
  subtitle,
  breadcrumbs,
  label,
  intro,
  lastUpdated,
  notice,
  sections,
  summaryTitle,
  summaryPoints,
}: LegalDocumentPageProps) {
  return (
    <>
      <PageHeader title={title} subtitle={subtitle} breadcrumbs={breadcrumbs} />

      <section
        className="py-20 md:py-24"
        style={{ background: 'var(--bg-light)' }}
        aria-labelledby="legal-document-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(280px,0.9fr)] lg:gap-12">
            <div>
              <ScrollReveal direction="up">
                <div
                  className="relative overflow-hidden border p-7 md:p-8"
                  style={{
                    background: 'var(--bg-white)',
                    borderColor: 'var(--color-secondary-dark)',
                  }}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-[3px]"
                    style={{ background: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />

                  <div className="mb-5 flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-[0.16em]">
                    <span
                      className="inline-flex items-center gap-2 border px-3 py-1.5"
                      style={{
                        borderColor: 'var(--color-secondary-dark)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      <FileText size={12} aria-hidden="true" />
                      {label}
                    </span>
                    <span
                      className="inline-flex items-center gap-2 border px-3 py-1.5"
                      style={{
                        borderColor: 'var(--color-secondary-dark)',
                        color: 'var(--color-grey-500)',
                      }}
                    >
                      <Clock3 size={12} aria-hidden="true" />
                      Last updated: {lastUpdated}
                    </span>
                  </div>

                  <span className="section-label">Important Note</span>
                  <h2
                    id="legal-document-heading"
                    className="mt-2 text-xl md:text-2xl"
                    style={{
                      color: 'var(--color-text-dark)',
                      letterSpacing: '-0.025em',
                    }}
                  >
                    Placeholder legal copy aligned to the current YYUSSA website
                  </h2>
                  <p
                    className="mt-4 max-w-3xl text-sm leading-relaxed md:text-[15px]"
                    style={{ color: 'var(--color-grey-600)' }}
                  >
                    {intro}
                  </p>

                  <div
                    className="mt-6 border-l-[3px] pl-4 md:pl-5"
                    style={{ borderColor: 'var(--color-accent)' }}
                  >
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ color: 'var(--color-grey-500)' }}
                    >
                      {notice}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="mt-5 space-y-4">
                {sections.map((section, index) => (
                  <ScrollReveal key={section.title} direction="up" delay={index * 0.04}>
                    <section
                      className="border p-7 md:p-8"
                      style={{
                        background: 'var(--bg-white)',
                        borderColor: 'var(--color-secondary-dark)',
                      }}
                      aria-labelledby={`legal-section-${index + 1}`}
                    >
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div className="max-w-3xl">
                          <div
                            className="mb-2 text-[9px] uppercase tracking-[0.16em]"
                            style={{ color: 'var(--color-grey-500)' }}
                          >
                            Section {String(index + 1).padStart(2, '0')}
                          </div>
                          <h3
                            id={`legal-section-${index + 1}`}
                            className="text-lg md:text-xl"
                            style={{
                              color: 'var(--color-text-dark)',
                              letterSpacing: '-0.02em',
                            }}
                          >
                            {section.title}
                          </h3>
                        </div>
                        <div
                          className="h-px w-14 shrink-0 md:mt-3"
                          style={{ background: 'var(--color-accent)' }}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="mt-5 space-y-3.5">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-relaxed"
                            style={{ color: 'var(--color-grey-600)' }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.points && section.points.length > 0 && (
                        <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2">
                          {section.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 border p-3.5"
                              style={{
                                background: 'var(--bg-light)',
                                borderColor: 'var(--color-secondary-dark)',
                              }}
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0"
                                style={{ background: 'var(--color-accent)' }}
                                aria-hidden="true"
                              />
                              <span className="text-[13px] leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
              <ScrollReveal direction="right">
                <aside
                  className="border p-6"
                  style={{
                    background: 'var(--color-grey-800)',
                    borderColor: 'var(--color-grey-700)',
                  }}
                  aria-label="Document summary"
                >
                  <div className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.16em]">
                    <ShieldCheck size={12} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
                    <span style={{ color: 'var(--color-grey-400)' }}>Document Summary</span>
                  </div>
                  <h3 className="mt-3 text-lg text-white">{summaryTitle}</h3>
                  <div
                    className="mt-4 h-px w-12"
                    style={{ background: 'var(--color-accent)' }}
                    aria-hidden="true"
                  />
                  <ul className="mt-5 space-y-3">
                    {summaryPoints.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0"
                          style={{ background: 'var(--color-accent)' }}
                          aria-hidden="true"
                        />
                        <span className="text-[13px] leading-relaxed" style={{ color: 'var(--color-grey-300)' }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </aside>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.08}>
                <aside
                  className="border p-6"
                  style={{
                    background: 'var(--bg-white)',
                    borderColor: 'var(--color-secondary-dark)',
                  }}
                  aria-label="Need more help"
                >
                  <p
                    className="text-[9px] uppercase tracking-[0.16em]"
                    style={{ color: 'var(--color-grey-500)' }}
                  >
                    Need Clarification?
                  </p>
                  <h3
                    className="mt-2 text-lg"
                    style={{ color: 'var(--color-text-dark)' }}
                  >
                    Speak with the YYUSSA team directly
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed" style={{ color: 'var(--color-grey-600)' }}>
                    If you need to confirm information related to a property inquiry, logistics request,
                    or partnership conversation, use the contact page to reach the appropriate team.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] transition-colors"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    Contact YYUSSA
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </aside>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section
        className="grain-overlay border-t py-12"
        style={{
          background: 'var(--bg-dark)',
          borderColor: 'var(--color-grey-800)',
        }}
        aria-label="Legal page closing call to action"
      >
        <div className="container-xl flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="text-[9px] uppercase tracking-[0.18em]"
              style={{ color: 'var(--color-accent)' }}
            >
              YYUSSA Group Ltd
            </p>
            <h2 className="mt-2 text-xl text-white! md:text-2xl">
              Built for clarity across every division
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center border px-5 py-3 text-[10px] uppercase tracking-[0.14em] transition-colors"
              style={{
                borderColor: 'var(--color-grey-700)',
                color: 'var(--color-grey-300)',
              }}
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border px-5 py-3 text-[10px] uppercase tracking-[0.14em] transition-colors"
              style={{
                borderColor: 'var(--color-accent)',
                color: 'var(--color-accent)',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
