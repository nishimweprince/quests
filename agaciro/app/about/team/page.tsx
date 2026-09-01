import { PeopleIndex } from "@/components/sections/PeopleIndex";
import { team } from "@/content/people";
export const metadata = { title: "Our Team" };
export default function TeamPage() {
  return <PeopleIndex title="Our Team" eyebrow="Team" items={team} />;
}
