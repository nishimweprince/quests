import Link from "next/link";

import type { Person } from "@/content/people";
import { Arrow } from "@/components/ui/Arrow";

function initials(name: string) {
  return name.replace(/^(Mr\.|Mrs\.|Dr\.)\s+/, "").split(" ").slice(0, 2).map((part) => part[0]).join("");
}

export function PortraitArt({ person }: { person: Person }) {
  const seed = person.slug.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0);
  return <div aria-hidden="true" className="portrait-art" style={{ "--portrait-shift": `${seed % 32}%` } as React.CSSProperties}><span>{initials(person.name)}</span></div>;
}

export function PersonCards({ items, profile = true }: { items: Person[]; profile?: boolean }) {
  return (
    <div className="person-grid">
      {items.map((person) => {
        const root = person.kind === "board" ? "/about/board" : "/about/team";
        return (
          <article className="person-card" data-reveal key={person.slug}>
            <PortraitArt person={person} />
            <div className="person-card-body">
              <h3>{person.name}</h3><p>{person.role}</p>
              {profile ? <Link href={`${root}/${person.slug}`}>Read more <Arrow /></Link> : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
