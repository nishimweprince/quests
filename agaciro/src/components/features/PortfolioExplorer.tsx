"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  portfolioCompanies,
  sectors,
  type SectorSlug,
} from "@/content/portfolio";

export function PortfolioExplorer() {
  const [active, setActive] = useState<SectorSlug | "all">("all");

  const visible = useMemo(
    () =>
      active === "all"
        ? portfolioCompanies
        : portfolioCompanies.filter((company) =>
            company.sectors.includes(active),
          ),
    [active],
  );

  return (
    <>
      <div className="filter-bar" role="group" aria-label="Filter by sector">
        <button
          aria-pressed={active === "all"}
          className={`filter-chip ${active === "all" ? "is-active" : ""}`}
          onClick={() => setActive("all")}
        >
          All sectors ({portfolioCompanies.length})
        </button>
        {sectors.map((sector) => {
          const count = portfolioCompanies.filter((company) =>
            company.sectors.includes(sector.slug),
          ).length;
          return (
            <button
              aria-pressed={active === sector.slug}
              className={`filter-chip ${active === sector.slug ? "is-active" : ""}`}
              key={sector.slug}
              onClick={() => setActive(sector.slug)}
            >
              {sector.short} ({count})
            </button>
          );
        })}
      </div>

      <div className="company-grid">
        {visible.map((company) => (
          <article className="company-card" key={company.slug}>
            <h3>{company.name}</h3>
            {company.description ? (
              <p>{company.description}</p>
            ) : (
              <p className="company-card-note">
                A description of this holding has not been published yet.
              </p>
            )}
            <div className="company-card-tags">
              {company.sectors.map((slug) => {
                const sector = sectors.find((item) => item.slug === slug);
                return (
                  <Link
                    className="company-tag"
                    href={`/portfolio/${slug}`}
                    key={slug}
                  >
                    {sector?.short}
                  </Link>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
