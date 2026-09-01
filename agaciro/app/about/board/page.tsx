import { PeopleIndex } from "@/components/sections/PeopleIndex";
import { board } from "@/content/people";
export const metadata = { title: "Board of Directors" };
export default function BoardPage() {
  return (
    <PeopleIndex title="Board of Directors" eyebrow="Board" items={board} />
  );
}
