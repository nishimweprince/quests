import Link from "next/link";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { Arrow } from "@/components/ui/Arrow";
import { resourceCategories, tenders } from "@/content/resources";
import { newsItems } from "@/content/news";
import { vacancies } from "@/content/careers";
import { media } from "@/content/media";

export const metadata = {
  title: "Resources",
  description:
    "Annual reports, financial statements, publications, policies and tenders from Agaciro Development Fund.",
};

export default function ResourcesPage() {
  const cards = [
    ...resourceCategories.map((category) => ({
      href: `/resources/${category.slug}`,
      title: category.title,
      body: category.summary,
      count: category.files.length,
      unit: "file",
    })),
    {
      href: "/resources/tender",
      title: "Tenders",
      body: "Open procurement notices and expressions of interest.",
      count: tenders.length,
      unit: "notice",
    },
    {
      href: "/news",
      title: "News & Events",
      body: "What the Fund has been doing, and where it has shown up.",
      count: newsItems.length,
      unit: "item",
    },
    {
      href: "/careers",
      title: "Careers",
      body: "Open roles across investments, finance, legal and operations.",
      count: vacancies.length,
      unit: "role",
    },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources" }]}
        image={media.resources.hub}
        standfirst="Reports, statements, policies, tenders and notices, in one place."
        title="Resources"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="card-grid card-grid--three">
            {cards.map((card) => (
              <Link className="card" data-reveal href={card.href} key={card.href}>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <span className="card-foot">
                  {card.count
                    ? `${card.count} ${card.unit}${card.count === 1 ? "" : "s"}`
                    : "Nothing posted yet"}
                  <Arrow direction="diagonal" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
