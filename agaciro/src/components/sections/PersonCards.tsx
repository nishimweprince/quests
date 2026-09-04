import Image from "next/image";
import Link from "next/link";

import type { Person } from "@/content/people";

export function initials(name: string) {
  return name
    .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+/, "")
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");
}

export function personHref(person: Person) {
  return person.kind === "board"
    ? `/about/board/${person.slug}`
    : `/about/team/${person.slug}`;
}

/**
 * Renders a real headshot when the Fund has supplied one, and a brand monogram
 * otherwise. Stock faces are not used here: these are named public figures.
 */
export function PersonPhoto({
  person,
  priority = false,
  className = "person-photo",
}: {
  person: Person;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {person.image ? (
        <Image
          alt={person.name}
          fill
          priority={priority}
          sizes="(max-width: 767px) 100vw, 30vw"
          src={person.image}
        />
      ) : (
        <span aria-hidden="true">{initials(person.name)}</span>
      )}
    </div>
  );
}

export function PersonCards({
  items,
  columns = 2,
}: {
  items: Person[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`people-grid ${columns === 3 ? "people-grid--three" : ""}`}>
      {items.map((person) => (
        <article className="person-card" data-reveal key={person.slug}>
          <div className="person-card-top">
            <PersonPhoto person={person} />
            <div className="person-meta">
              <div className="person-name">
                <h3>{person.name}</h3>
                <p className="person-role">{person.role}</p>
              </div>
              <p className="person-summary">{person.summary}</p>
            </div>
          </div>
          <Link className="link-underline" href={personHref(person)}>
            Read the profile
          </Link>
        </article>
      ))}
    </div>
  );
}
