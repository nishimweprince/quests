import type { Metadata } from 'next';
import { MapPin, Phone, Clock } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with YYUSSA Group Ltd — real estate, logistics, and import/export inquiries. Located in Gikondo, Kigali, Rwanda.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="We're here to discuss partnerships, property inquiries, or logistics solutions."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      />

      {/* ── Main contact section ── */}
      <section
        className="py-24 md:py-32"
        style={{ background: 'var(--bg-light)' }}
        aria-labelledby="contact-heading"
      >
        <div className="container-xl">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[3fr_2fr] lg:gap-20">
            {/* Form */}
            <ScrollReveal direction="left">
              <ContactForm />
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-0 border"
                style={{ borderColor: 'var(--color-secondary-dark)' }}>
                {[
                  {
                    Icon: MapPin,
                    title: 'Our Address',
                    lines: [CONTACT_INFO.address],
                  },
                  {
                    Icon: Phone,
                    title: 'Transport & Logistics',
                    lines: CONTACT_INFO.phones.logistics,
                    isPhone: true,
                  },
                  {
                    Icon: Phone,
                    title: 'Real Estate',
                    lines: CONTACT_INFO.phones.realEstate,
                    isPhone: true,
                  },
                  {
                    Icon: Clock,
                    title: 'Working Hours',
                    lines: [CONTACT_INFO.hours],
                  },
                ].map((card, i, arr) => {
                  const Icon = card.Icon;
                  return (
                    <div
                      key={card.title}
                      className={`flex gap-5 p-7 ${i < arr.length - 1 ? 'border-b' : ''}`}
                      style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--bg-white)' }}
                    >
                      <div
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border"
                        style={{ borderColor: 'var(--color-accent)' }}
                        aria-hidden="true"
                      >
                        <Icon size={15} style={{ color: 'var(--color-accent)' }} />
                      </div>
                      <div>
                        <p
                          className="mb-2 text-[10px] uppercase tracking-[0.14em]"
                          style={{ color: 'var(--color-grey-500)' }}
                        >
                          {card.title}
                        </p>
                        {card.lines.map((line) =>
                          card.isPhone ? (
                            <a
                              key={line}
                              href={`tel:${line.replace(/\s/g, '')}`}
                              className="block text-sm text-(--color-text-dark) transition-colors hover:text-(--color-accent)"
                            >
                              {line}
                            </a>
                          ) : (
                            <p key={line} className="text-sm" style={{ color: 'var(--color-text-dark)' }}>
                              {line}
                            </p>
                          )
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section
        className="py-0"
        style={{ background: 'var(--bg-white)' }}
        aria-label="Office location"
      >
        <div className="container-xl pb-24">
          <div className="overflow-hidden border" style={{ borderColor: 'var(--color-secondary-dark)' }}>
            <iframe
              title="YYUSSA Group Office Location - Gikondo KK 4 AV 7, Kigali, Rwanda"
              src="https://www.google.com/maps?q=Gikondo+KK+4+AV+7,+Kigali,+Rwanda&z=15&output=embed"
              className="h-72 w-full md:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── CTA Strip ── */}
      <section
        className="border-t py-10 grain-overlay"
        style={{ background: 'var(--bg-dark)', borderColor: 'var(--color-grey-800)' }}
        aria-label="Phone contact strip"
      >
        <div className="container-xl flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm" style={{ color: 'var(--color-grey-400)' }}>
            Prefer to call? Reach our team directly —
          </p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6">
            {[...CONTACT_INFO.phones.logistics, ...CONTACT_INFO.phones.realEstate].map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, '')}`}
                className="text-sm font-medium text-(--color-grey-200) transition-colors hover:text-(--color-primary)"
              >
                {p}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
