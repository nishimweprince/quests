import { notFound } from "next/navigation";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { ProfilePage } from "@/components/sections/ProfilePage";
import { team } from "@/content/people";

export function generateStaticParams() {
  return team.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = team.find((item) => item.slug === slug);
  if (!person) return {};
  return { title: person.name, description: person.summary };
}

export default async function TeamProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = team.find((item) => item.slug === slug);
  if (!person) notFound();
  return (
    <>
      <ProfilePage person={person} />
      <ConnectCta />
    </>
  );
}
