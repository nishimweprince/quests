"use client";

import { useState } from "react";
import { leadership, type TeamMember } from "@/lib/content";

function LeaderCard({ member }: { member: TeamMember }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="leader-card">
      <div className="leader-card__head">
        <h3>{member.name}</h3>
        <p className="leader-card__role">{member.role}</p>
      </div>
      <blockquote className="leader-card__quote">{member.excerpt}</blockquote>
      {open && (
        <div className="leader-card__bio">
          {member.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      )}
      <button
        type="button"
        className="btn-line leader-card__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "Less info" : "More info"}
      </button>
    </article>
  );
}

export function LeadershipSection() {
  return (
    <section className="section-leadership" aria-labelledby="leadership-heading">
      <div className="container">
        <h2 id="leadership-heading">Our Leadership Team</h2>
        <div className="leader-grid">
          {leadership.map((member) => (
            <LeaderCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
