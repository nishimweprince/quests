"use client";

import { FormEvent, useState } from "react";
import { Arrow } from "@/components/ui/Arrow";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); if (event.currentTarget.reportValidity()) setSent(true); };
  return (
    <>
      <form className="contact-form" onSubmit={submit}>
        <label>Full names*<input name="name" placeholder="Enter full names" required /></label>
        <label>Email*<input name="email" placeholder="Enter email" required type="email" /></label>
        <label>Phone<input name="phone" placeholder="Enter phone" /></label>
        <label>Subject*<input name="subject" placeholder="Enter subject" required /></label>
        <label className="field-wide">Message*<textarea name="message" placeholder="Enter message" required rows={4} /></label>
        <button type="submit">Send a message <Arrow /></button>
      </form>
      {sent ? <div aria-modal="true" className="success-modal" role="dialog"><div><button aria-label="Close" onClick={() => setSent(false)}>×</button><p>Message prepared</p><h2>Thank You</h2><span>This demonstration form does not send data. Your message has been validated locally.</span></div></div> : null}
    </>
  );
}
