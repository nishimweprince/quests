"use client";

import { useEffect, useState } from "react";
import { faCookieBite, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const KEY = "agaciro-cookie-choice";

export function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try {
        setOpen(!localStorage.getItem(KEY));
      } catch {
        setOpen(false);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!open) return null;

  const choose = (value: string) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage unavailable, so dismiss for this visit only */
    }
    setOpen(false);
  };

  return (
    <aside aria-label="Cookie preferences" className="cookies">
      <div className="cookies-top">
        <span>
          <FontAwesomeIcon aria-hidden="true" icon={faCookieBite} /> We use
          cookies
        </span>
        <button
          aria-label="Dismiss cookie notice"
          className="cookies-close"
          onClick={() => choose("dismissed")}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <p>
        This site stores your preference locally so it can remember this choice.
        No analytics or tracking are enabled.
      </p>
      <div className="cookies-actions">
        <button className="btn btn--sage" onClick={() => choose("declined")}>
          Decline
        </button>
        <button className="btn btn--green" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </aside>
  );
}
