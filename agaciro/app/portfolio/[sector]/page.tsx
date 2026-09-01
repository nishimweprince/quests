import Link from "next/link";
import { notFound } from "next/navigation";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import {
  companiesInSector,
  findSector,
  sectors,
  type SectorSlug,
} from "@/content/portfolio";

export function generateStaticParams() {
  return sectors.map((sector) => ({ sector: sector.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const match = findSector(sector);
  if (!match) return {};
  return { title: match.name, description: match.intro };
}

const IMAGES: Record<string, string> = {
  "financial-services": "/media/funds-office.jpg",
  "telecommunications-media-and-technology": "/media/strengths-blue.jpg",
  "agriculture-and-agro-processing": "/media/hero-about.jpg",
  "transport-and-logistics": "/media/hero-home.jpg",
  "industrials-and-manufacturing": "/media/hero-criteria.jpg",
  mining: "/media/key-strengths.png",
  hospitality: "/media/connect-office.jpg",
};

export default async function SectorPage({
  params,
}: {
  params: Promise<{ sector: string }>;
}) {
  const { sector } = await params;
  const match = findSector(sector);
  if (!match) notFound();

  const companies = companiesInSector(match.slug as SectorSlug);
  const others = sectors.filter((item) => item.slug !== match.slug);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Portfolio", href: "/portfolio" }, { label: match.name }]}
        image={IMAGES[match.slug] ?? "/media/hero-home.jpg"}
        standfirst={match.intro}
        title={match.name}
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>
              {companies.length}{" "}
              {companies.length === 1 ? "holding" : "holdings"}
            </h2>
            <div className="header-aside">
              <p>{match.intro}</p>
            </div>
          </div>
          <div className="company-grid" style={{ marginTop: "3rem" }}>
            {companies.map((company) => (
              <article className="company-card" data-reveal key={company.slug}>
                <h3>{company.name}</h3>
                {company.description ? (
                  <p>{company.description}</p>
                ) : (
                  <p className="company-card-note">
                    A description of this holding has not been published yet.
                  </p>
                )}
                {company.sectors.length > 1 ? (
                  <div className="company-card-tags">
                    {company.sectors
                      .filter((slug) => slug !== match.slug)
                      .map((slug) => (
                        <Link
                          className="company-tag"
                          href={`/portfolio/${slug}`}
                          key={slug}
                        >
                          Also in {findSector(slug)?.short}
                        </Link>
                      ))}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sm section--cream pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>Other sectors</h2>
          </div>
          <div className="chip-row" style={{ marginTop: "2rem" }}>
            {others.map((item) => (
              <Link className="chip" href={`/portfolio/${item.slug}`} key={item.slug}>
                {item.short}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
