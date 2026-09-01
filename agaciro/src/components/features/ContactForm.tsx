"use client";

import { FormEvent, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Arrow } from "@/components/ui/Arrow";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [inquiry, setInquiry] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSent(true);
  };
  return (
    <>
      <form className="contact-form" onSubmit={submit}>
        <label>
          Full names*
          <input name="name" placeholder="Enter full names" required />
        </label>
        <label>
          Email*
          <input name="email" placeholder="Enter email" required type="email" />
        </label>
        <label>
          Phone
          <input name="phone" placeholder="Enter phone" />
        </label>
        <div className="grid gap-4">
          <label htmlFor="inquiry-type">Inquiry type*</label>
          <Select
            name="subject"
            required
            value={inquiry}
            onValueChange={(value) => {
              if (value !== null) setInquiry(value);
            }}
          >
            <SelectTrigger className="w-full" id="inquiry-type">
              <SelectValue placeholder="Select an inquiry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Investment opportunity">
                Investment opportunity
              </SelectItem>
              <SelectItem value="Partnership">Partnership</SelectItem>
              <SelectItem value="Media">Media</SelectItem>
              <SelectItem value="General enquiry">General enquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <label className="field-wide">
          Message*
          <textarea
            name="message"
            placeholder="Enter message"
            required
            rows={4}
          />
        </label>
        <button type="submit">
          Send a message <Arrow />
        </button>
      </form>
      {sent ? (
        <div aria-modal="true" className="success-modal" role="dialog">
          <div>
            <button aria-label="Close" onClick={() => setSent(false)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <p>Message prepared</p>
            <h2>Thank You</h2>
            <span>
              This demonstration form does not send data. Your message has been
              validated locally.
            </span>
          </div>
        </div>
      ) : null}
    </>
  );
}
