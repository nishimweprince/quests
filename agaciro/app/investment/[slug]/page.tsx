import Link from "next/link";
import { notFound } from "next/navigation";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { Arrow } from "@/components/ui/Arrow";
import { findInvestmentPage, investmentPages } from "@/content/investment";
import { investmentHero, media } from "@/content/media";

export function generateStaticParams() {
  return investmentPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = findInvestmentPage(slug);
  if (!page) return {};
  return { title: page.title, description: page.summary };
}

export default async function InvestmentDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = findInvestmentPage(slug);
  if (!page) notFound();

  const others = investmentPages.filter((item) => item.slug !== slug);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Investment", href: "/investment" }, { label: page.title }]}
        image={investmentHero[slug] ?? media.investment.hub}
        standfirst={page.summary}
        title={page.title}
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="split">
            <div className="split-aside">
              <p className="eyebrow">Investment</p>
              <h2>{page.title}</h2>
            </div>
            <div className="stack">
              {page.sections.map((section, index) => (
                <div
                  className="stack-block"
                  data-reveal
                  key={section.heading ?? index}
                >
                  {section.heading ? <h3>{section.heading}</h3> : null}
                  {section.body ? (
                    <div className="prose">
                      {section.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 30)}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.list ? (
                    <ul className="prose-list">
                      {section.list.map((item) => (
                        <li key={item.slice(0, 30)}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sm section--haze pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>Continue reading</h2>
          </div>
          <div className="card-grid" style={{ marginTop: "3rem" }}>
            {others.map((item) => (
              <Link
                className="card"
                href={`/investment/${item.slug}`}
                key={item.slug}
              >
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className="card-foot">
                  Read more <Arrow direction="diagonal" />
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
