"use client";

import { useState, type FormEvent } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Arrow } from "@/components/ui/Arrow";

const SUBJECTS = [
  "Investment opportunity",
  "Partnership",
  "Media enquiry",
  "Careers",
  "General enquiry",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSent(true);
  };

  return (
    <>
      <form className="form" onSubmit={submit}>
        <div className="form-legend">
          <h3>Send an enquiry</h3>
          <p>
            Fields marked with an asterisk are required. We reply to enquiries
            from the address you give here.
          </p>
        </div>
        <label>
          Full names *
          <input
            autoComplete="name"
            name="name"
            placeholder="Your full names"
            required
            type="text"
          />
        </label>
        <label>
          Email address *
          <input
            autoComplete="email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
        <label>
          Phone number
          <input
            autoComplete="tel"
            name="phone"
            placeholder="+250 …"
            type="tel"
          />
        </label>
        <label>
          Subject *
          <select defaultValue="" name="subject" required>
            <option disabled value="">
              Choose a subject
            </option>
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </label>
        <label className="form-wide">
          Message *
          <textarea
            name="message"
            placeholder="How can we help?"
            required
            rows={5}
          />
        </label>
        <div className="form-actions">
          <button className="btn btn--forest" type="submit">
            Send enquiry <Arrow direction="diagonal" />
          </button>
        </div>
      </form>

      {sent ? (
        <div
          aria-labelledby="contact-sent-title"
          aria-modal="true"
          className="modal"
          role="dialog"
        >
          <div className="modal-card">
            <button
              aria-label="Close"
              className="modal-close"
              onClick={() => setSent(false)}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <p className="eyebrow">Enquiry checked</p>
            <h2 id="contact-sent-title">Thank you</h2>
            <p className="muted">
              This build validates the form in the browser but does not deliver
              it. To reach the Fund today, email info@agaciro.rw or call +250 788
              331 820.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
