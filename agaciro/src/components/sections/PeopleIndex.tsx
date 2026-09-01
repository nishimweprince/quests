import { ConnectCta } from "./ConnectCta";
import { IntroHero } from "./IntroHero";
import { PersonCards } from "./PersonCards";
import type { Person } from "@/content/people";

export function PeopleIndex({ title, items, eyebrow }: { title: string; items: Person[]; eyebrow: string }) {
  return <><IntroHero title={title} breadcrumb={`About • ${eyebrow}`} image="/media/hero-about.jpg" /><section className="people-index" id="content"><div className="people-index-heading"><p>{eyebrow}</p><h2>Stewardship shaped by experience, integrity, and national purpose.</h2></div><PersonCards items={items} /></section><ConnectCta /></>;
}
