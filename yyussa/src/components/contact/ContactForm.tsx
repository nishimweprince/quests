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
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Form submitted:', data);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div
        className="rounded-2xl border border-[var(--color-border)] p-10 text-center"
        style={{ background: 'var(--color-surface-white)' }}
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={48} className="mx-auto mb-4" style={{ color: 'var(--color-primary)' }} aria-hidden="true" />
        <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
          Message Sent!
        </h3>
        <p className="text-[var(--color-text-secondary)] mb-6">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-sm font-normal"
          style={{ color: 'var(--color-primary)' }}
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputStyles =
    'w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm bg-[var(--color-surface-white)] text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)] focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-colors';

  const errorStyles = 'mt-1 text-xs text-red-500';

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-[var(--color-border)] p-8"
      style={{ background: 'var(--color-surface-white)' }}
      noValidate
      aria-label="Contact form"
    >
      <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
        Send Us a Message
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
            Full Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={inputStyles}
            aria-required="true"
            aria-describedby={errors.name ? 'name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="name-error" className={errorStyles} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
            Email Address <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="your@email.com"
            className={inputStyles}
            aria-required="true"
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="email-error" className={errorStyles} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
            Phone Number <span className="text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+250 7XX XXX XXX"
            className={inputStyles}
            {...register('phone')}
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
            Subject <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            id="subject"
            type="text"
            placeholder="How can we help?"
            className={inputStyles}
            aria-required="true"
            aria-describedby={errors.subject ? 'subject-error' : undefined}
            {...register('subject')}
          />
          {errors.subject && (
            <p id="subject-error" className={errorStyles} role="alert">
              {errors.subject.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-primary)' }}>
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your inquiry..."
          className={`${inputStyles} resize-none`}
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="message-error" className={errorStyles} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-normal text-white transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
        style={{ background: 'var(--color-primary)' }}
        onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.background = 'var(--color-primary-dark)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--color-primary)')}
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} aria-hidden="true" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
