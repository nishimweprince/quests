import type { Metadata } from 'next';
import { MapPin, Phone, Clock } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import ContactForm from '@/components/contact/ContactForm';
import { CONTACT_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with YYUSSA Group Ltd — real estate, logistics, and import/export inquiries. Located in Gikondo, Kigali, Rwanda.',
};

const contactCards = [
  {
    icon: MapPin,
    title: 'Our Address',
    lines: [CONTACT_INFO.address],
  },
  {
    icon: Phone,
    title: 'Transport & Logistics',
    lines: CONTACT_INFO.phones.logistics,
  },
  {
    icon: Phone,
    title: 'Real Estate',
    lines: CONTACT_INFO.phones.realEstate,
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: [CONTACT_INFO.hours],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact Us' }]}
      />

      <section
        className="py-20 md:py-28"
        style={{ background: 'var(--color-surface-light)' }}
        aria-labelledby="contact-heading"
      >
        <div className="container-xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <SectionLabel>Reach Out</SectionLabel>
              <h2
                id="contact-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
                style={{ letterSpacing: '-0.03em', color: 'var(--color-text-primary)' }}
              >
                Get In Touch
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[var(--color-text-secondary)]">
                Whether you have a logistics inquiry, real estate question, or business partnership
                opportunity — our team is ready to help.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form — spans 3 columns */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="left">
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Contact info — spans 2 columns */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right" delay={0.15}>
                <div className="space-y-4">
                  {contactCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={card.title}
                        className="rounded-xl border border-[var(--color-border)] p-6 flex gap-4"
                        style={{ background: 'var(--color-surface-white)' }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                          style={{ background: 'var(--color-primary)', opacity: 1 }}
                          aria-hidden="true"
                        >
                          <Icon size={18} className="text-white" />
                        </div>
                        <div>
                          <h3
                            className="font-normal text-sm mb-1.5"
                            style={{ color: 'var(--color-text-primary)' }}
                          >
                            {card.title}
                          </h3>
                          {card.lines.map((line) => (
                            <p
                              key={line}
                              className="text-sm text-[var(--color-text-secondary)]"
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section
        className="py-12"
        style={{ background: 'var(--color-surface-white)' }}
        aria-label="Office location"
      >
        <div className="container-xl">
          <div
            className="rounded-2xl overflow-hidden border border-[var(--color-border)] h-72 md:h-96 flex items-center justify-center"
            style={{ background: 'var(--color-surface-light)' }}
            aria-label="Map showing YYUSSA office location in Gikondo, Kigali, Rwanda"
          >
            <div className="text-center">
              <MapPin size={40} className="mx-auto mb-3" style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
              <p className="font-normal" style={{ color: 'var(--color-text-primary)' }}>
                Gikondo KK 4 AV 7
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">Kigali, Rwanda</p>
              <a
                href="https://maps.google.com/?q=Gikondo+KK+4+AV+7,+Kigali,+Rwanda"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-normal"
                style={{ color: 'var(--color-primary)' }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
