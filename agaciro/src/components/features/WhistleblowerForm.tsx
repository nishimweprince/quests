"use client";

import { useState, type FormEvent } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Arrow } from "@/components/ui/Arrow";
import { whistleblowing } from "@/content/legal";

export function WhistleblowerForm() {
  const [anonymous, setAnonymous] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (event.currentTarget.reportValidity()) setSent(true);
  };

  return (
    <>
      <form className="form" onSubmit={submit}>
        <div className="form-legend">
          <h3>Section A — About you</h3>
          <p>
            You may report anonymously. If you give your details, they are used
            only to follow up on this report.
          </p>
        </div>

        <label className="check form-wide">
          <input
            checked={anonymous}
            onChange={(event) => setAnonymous(event.target.checked)}
            type="checkbox"
          />
          <i aria-hidden="true" />
          Report anonymously
        </label>

        {!anonymous ? (
          <>
            <label>
              Full names
              <input name="reporter-name" type="text" />
            </label>
            <label>
              Position or relationship to AgDF
              <input name="reporter-role" type="text" />
            </label>
            <label>
              Phone number
              <input name="reporter-phone" type="tel" />
            </label>
            <label>
              Email address *
              <input name="reporter-email" required type="email" />
            </label>
          </>
        ) : null}

        <div className="form-legend">
          <h3>Section B — The concern</h3>
          <p>Describe the incident in as much detail as you can.</p>
        </div>

        {whistleblowing.allegationPrompts.map((prompt) => (
          <label className="form-wide" key={prompt.label}>
            {prompt.label}
            <textarea name={prompt.label} rows={3} />
            <span className="form-hint">{prompt.hint}</span>
          </label>
        ))}

        <div className="form-legend">
          <h3>Nature of the concern</h3>
          <p>Select everything that applies.</p>
        </div>
        <div className="check-grid">
          {whistleblowing.concernTypes.map((type) => (
            <label className="check" key={type}>
              <input name="concern" type="checkbox" value={type} />
              <i aria-hidden="true" />
              {type}
            </label>
          ))}
        </div>

        <div className="form-legend">
          <h3>Section C — People involved</h3>
        </div>
        <label className="form-wide">
          Person or persons alleged to be involved
          <textarea name="persons" rows={2} />
        </label>
        <label className="form-wide">
          Witnesses or others with information
          <textarea name="witnesses" rows={2} />
        </label>

        <div className="form-legend">
          <h3>Section D — Supporting evidence</h3>
          <p>{whistleblowing.evidenceNote}</p>
        </div>
        <label className="form-wide">
          Evidence you can point to
          <textarea name="evidence" rows={3} />
        </label>

        <div className="form-legend">
          <h3>Declaration</h3>
        </div>
        <label className="check form-wide">
          <input name="declaration" required type="checkbox" />
          <i aria-hidden="true" />
          {whistleblowing.declaration}
        </label>
        <label>
          Date
          <input name="date" required type="date" />
        </label>

        <div className="form-actions">
          <button className="btn btn--forest" type="submit">
            Submit disclosure <Arrow direction="diagonal" />
          </button>
        </div>
      </form>

      {sent ? (
        <div
          aria-labelledby="wb-sent-title"
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
            <p className="eyebrow">Disclosure checked</p>
            <h2 id="wb-sent-title">Nothing was sent</h2>
            <p className="muted">
              This build validates the form in the browser but does not deliver
              it, and no secure channel is connected yet. Do not rely on it to
              report a live concern.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
