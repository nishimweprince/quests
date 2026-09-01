import { notFound } from "next/navigation";
import { ProfilePage } from "@/components/sections/ProfilePage";
import { board, findPerson } from "@/content/people";
export function generateStaticParams() { return board.map(({ slug }) => ({ slug })); }
export default async function BoardProfile({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const person = findPerson(slug); if (!person || person.kind !== "board") notFound(); return <ProfilePage person={person} />; }
