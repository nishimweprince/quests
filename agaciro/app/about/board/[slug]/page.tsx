import { notFound } from "next/navigation";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { ProfilePage } from "@/components/sections/ProfilePage";
import { board } from "@/content/people";

export function generateStaticParams() {
  return board.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = board.find((item) => item.slug === slug);
  if (!person) return {};
  return { title: person.name, description: person.summary };
}

export default async function BoardProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = board.find((item) => item.slug === slug);
  if (!person) notFound();
  return (
    <>
      <ProfilePage person={person} />
      <ConnectCta />
    </>
  );
}
