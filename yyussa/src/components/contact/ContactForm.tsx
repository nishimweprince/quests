'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.enum(['General Inquiry', 'Real Estate', 'Import & Export', 'Logistics', 'Partnership', 'Other']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

const inputBase =
  'w-full border-0 border-b-2 focus-visible:border-none focus:ring-0 focus:border-none focus-visible:ring-0 focus:border-[var(--color-accent)] focus-visible:border-[var(--color-accent)] transition-[border-color] duration-200 px-3 bg-transparent pb-2 text-[13px] pt-2 text-sm text-[var(--color-text-dark)] placeholder-[var(--color-grey-400)] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:border-[var(--color-accent)] focus-visible:border-[var(--color-accent)] transition-[border-color] duration-200';

const labelBase = 'mb-2 block text-[10px] uppercase tracking-[0.14em] text-[var(--color-grey-500)]';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { subject: 'General Inquiry' },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        className="flex flex-col items-center justify-center border p-14 text-center"
        style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--bg-white)' }}
        role="alert"
        aria-live="polite"
      >
        <div
          className="mb-4 flex h-14 w-14 items-center justify-center border"
          style={{ borderColor: 'var(--color-accent)' }}
        >
          <CheckCircle size={24} style={{ color: 'var(--color-accent)' }} aria-hidden="true" />
        </div>
        <h3
          className="mb-2 text-xl"
          style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: 'var(--color-text-dark)' }}
        >
          Message Sent
        </h3>
        <p className="mb-6 text-sm" style={{ color: 'var(--color-grey-600)' }}>
          Thank you for reaching out. Our team will respond within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[11px] uppercase tracking-[0.14em] transition-colors"
          style={{ color: 'var(--color-accent)' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border p-8 md:p-10"
      style={{ borderColor: 'var(--color-secondary-dark)', background: 'var(--bg-white)' }}
      noValidate
      aria-label="Contact form"
    >
      <h2
        className="mb-8 text-xl"
        style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: 'var(--color-text-dark)' }}
      >
        Send Us a Message
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelBase}>
            Full Name <span className="text-[var(--color-accent)]" aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={`${inputBase} ${errors.name ? 'border-red-500' : 'border-[var(--color-secondary-dark)]'}`}
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelBase}>
            Email Address <span className="text-[var(--color-accent)]" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className={`${inputBase} ${errors.email ? 'border-red-500' : 'border-[var(--color-secondary-dark)]'}`}
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelBase}>
            Phone Number <span style={{ color: 'var(--color-grey-400)' }}>(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+250 7XX XXX XXX"
            className={`${inputBase} border-[var(--color-secondary-dark)]`}
            {...register('phone')}
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className={labelBase}>
            Subject <span className="text-[var(--color-accent)]" aria-hidden="true">*</span>
          </label>
          <select
            id="subject"
            className={`${inputBase} border-[var(--color-secondary-dark)]`}
            style={{ appearance: 'none', cursor: 'pointer' }}
            aria-required="true"
            {...register('subject')}
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Real Estate">Real Estate</option>
            <option value="Import & Export">Import &amp; Export</option>
            <option value="Logistics">Logistics</option>
            <option value="Partnership">Partnership</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelBase}>
            Message <span className="text-[var(--color-accent)]" aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell us about your inquiry..."
            className={`${inputBase} resize-none ${errors.message ? 'border-red-500' : 'border-[var(--color-secondary-dark)]'}`}
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
            {...register('message')}
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-xs text-red-500" role="alert">
              {errors.message.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-10 cursor-pointer inline-flex items-center gap-3 border px-8 py-4 text-sm font-medium uppercase tracking-[0.14em] text-white transition-all duration-200 disabled:opacity-50"
        style={{ background: 'var(--color-text-dark)', borderColor: 'var(--color-text-dark)' }}
        onMouseEnter={(e) => {
          if (!isSubmitting) {
            (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)';
          }
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = 'var(--color-text-dark)';
          (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-text-dark)';
        }}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span
              className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
              aria-hidden="true"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={15} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
