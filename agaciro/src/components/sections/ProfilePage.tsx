import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import type { Person } from "@/content/people";
import { PortraitArt } from "./PersonCards";

export function ProfilePage({ person }: { person: Person }) {
  const section = person.kind === "board" ? "Board" : "Team";
  const root = person.kind === "board" ? "/about/board" : "/about/team";
  return (
    <section className="profile-page" id="top">
      <div className="profile-topline">
        <Link className="page-back" href={root}>
          <Arrow direction="left" /> Back to {section}
        </Link>
        <p className="breadcrumb">
          Home <span>•</span> About <span>•</span> {section} <span>•</span>{" "}
          {person.name}
        </p>
      </div>
      <div className="profile-grid">
        <PortraitArt person={person} priority />
        <div>
          <p className="profile-kind">{section}</p>
          <h1>{person.name}</h1>
          <h2>{person.role}</h2>
          <p>{person.bio}</p>
          <p>
            Public profile information is kept concise where an authoritative
            biography is unavailable.
          </p>
          <Link className="button button--brown" href={root}>
            <Arrow direction="left" /> Back to {section}
          </Link>
        </div>
      </div>
    </section>
  );
}
