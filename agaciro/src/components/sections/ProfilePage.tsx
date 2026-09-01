import Link from "next/link";

import { Arrow } from "@/components/ui/Arrow";
import type { Person } from "@/content/people";
import { PersonPhoto } from "./PersonCards";

export function ProfilePage({ person }: { person: Person }) {
  const isBoard = person.kind === "board";
  const section = isBoard ? "Board of Directors" : "Our Team";
  const root = isBoard ? "/about/board" : "/about/team";

  return (
    <section className="section section--lg pad-global" id="top">
      <div className="container">
        <nav aria-label="Breadcrumb" className="breadcrumb muted">
          <Link href="/">Home</Link>
          <span aria-hidden="true">•</span>
          <Link href="/about">About Us</Link>
          <span aria-hidden="true">•</span>
          <Link href={root}>{section}</Link>
          <span aria-hidden="true">•</span>
          <strong aria-current="page">{person.name}</strong>
        </nav>

        <div className="profile" style={{ marginTop: "3rem" }}>
          <PersonPhoto
            className="profile-photo"
            person={person}
            priority
          />
          <div className="profile-body">
            <p className="eyebrow">{section}</p>
            <h1>{person.name}</h1>
            <p className="person-role">{person.role}</p>
            <div className="prose" style={{ marginTop: "1rem" }}>
              {person.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="profile-actions">
              <Link className="btn btn--brown" href={root}>
                <Arrow direction="left" /> Back to {section}
              </Link>
              <Link className="btn btn--cream" href="/contact">
                Get in Touch <Arrow direction="diagonal" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
