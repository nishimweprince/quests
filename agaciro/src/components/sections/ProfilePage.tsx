import Link from "next/link";

import { Arrow } from "@/components/ui/Arrow";
import { SocialIcon } from "@/components/ui/SocialIcon";
import type { Person } from "@/content/people";
import { site, socials } from "@/content/site";
import { PersonPhoto } from "./PersonCards";

export function ProfilePage({ person }: { person: Person }) {
  const isBoard = person.kind === "board";
  const section = isBoard ? "Board of Directors" : "Our Team";
  const root = isBoard ? "/about/board" : "/about/team";

  const fundLinkedIn = socials.find((item) => item.icon === "linkedin")!.href;
  const fundX = socials.find((item) => item.icon === "x")!.href;

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

        <Link className="page-back" href={root}>
          <Arrow direction="left" /> Back to {section}
        </Link>

        <div className="profile">
          <PersonPhoto className="profile-photo" person={person} priority />
          <div className="profile-body">
            <p className="eyebrow">{section}</p>
            <h1>{person.name}</h1>
            <p className="person-role">{person.role}</p>
            <div className="prose" style={{ marginTop: "1rem" }}>
              {person.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="social-row">
              <SocialIcon
                href={person.linkedin ?? fundLinkedIn}
                label={
                  person.linkedin
                    ? `${person.name} on LinkedIn`
                    : "Agaciro Development Fund on LinkedIn"
                }
                name="linkedin"
              />
              <SocialIcon
                href={person.twitter ?? fundX}
                label={
                  person.twitter
                    ? `${person.name} on X`
                    : "Agaciro Development Fund on X"
                }
                name="x"
              />
              <SocialIcon
                href={`mailto:${person.email ?? site.email}`}
                label={
                  person.email
                    ? `Email ${person.name}`
                    : "Email Agaciro Development Fund"
                }
                name="email"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
