import Link from "next/link";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { Arrow } from "@/components/ui/Arrow";
import { criteria, investmentIntro, investmentPages } from "@/content/investment";
import { media } from "@/content/media";

export const metadata = {
  title: "Investment",
  description: investmentIntro,
};

export default function InvestmentPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Investment" }]}
        image={media.investment.hub}
        standfirst={investmentIntro}
        title="Investing for Rwanda's future generations"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>How we invest</h2>
            <div className="header-aside">
              <p>
                Five pages set out what we look for, how we decide, and how we
                measure impact and risk once we are invested.
              </p>
            </div>
          </div>
          <div className="card-grid" style={{ marginTop: "3rem" }}>
            {investmentPages.map((page) => (
              <Link
                className="card"
                data-reveal
                href={`/investment/${page.slug}`}
                key={page.slug}
              >
                <h3>{page.title}</h3>
                <p>{page.summary}</p>
                <span className="card-foot">
                  Read more <Arrow direction="diagonal" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sm section--sage pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>What defines the right opportunity</h2>
            <div className="header-aside">
              <p>
                We are flexible on structure and sector, and firm on track
                record, scale and governance.
              </p>
            </div>
          </div>
          <div className="rule-list rule-list--brown">
            {criteria.map((item, index) => (
              <div key={item.label}>
                {index > 0 ? <div className="rule-divider" /> : null}
                <div className="rule-row">
                  <div className="rule-row-fill" />
                  <span className="rule-row-marker">{item.label}</span>
                  <div className="rule-row-body">
                    <span>{item.body}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConnectCta body="If your business fits this profile, we would like to hear from you." />
    </>
  );
}
