import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import type { Person } from "@/content/people";
import { PortraitArt } from "./PersonCards";

export function ProfilePage({ person }: { person: Person }) {
  const section = person.kind === "board" ? "Board" : "Team";
  const root = person.kind === "board" ? "/about/board" : "/about/team";
  return <section className="profile-page" id="top"><p className="breadcrumb">Home <span>•</span> About <span>•</span> {section} <span>•</span> {person.name}</p><div className="profile-grid"><PortraitArt person={person} /><div><p className="profile-kind">{section}</p><h1>{person.name}</h1><h2>{person.role}</h2><p>{person.bio}</p><p>Agaciro&apos;s public v1 profile is intentionally concise. Career details are not inferred where an authoritative public biography is unavailable.</p><Link className="button button--brown" href={root}><Arrow direction="up" /> Back to {section}</Link></div></div></section>;
}
