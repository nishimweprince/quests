import Image from "next/image";
import Link from "next/link";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { PersonCards } from "@/components/sections/PersonCards";
import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { strengths } from "@/content/investment";
import { leadership } from "@/content/people";
import { portfolioCompanies, sectors } from "@/content/portfolio";
import { site } from "@/content/site";

const values = [
  {
    label: "Dignity",
    title: "National savings, invested with purpose",
    body: "Agaciro means dignity. The Fund was proposed by Rwandans and seeded by Rwandans, at home and in the diaspora.",
  },
  {
    label: "Horizon",
    title: "A long-term view, without undue risk",
    body: "We maximise return over the long term so as to reduce Rwanda's debt burden and secure a better Rwanda for future generations.",
  },
  {
    label: "Discipline",
    title: "Commercial from the first question",
    body: "We invest on a commercial basis in market leaders and defensible niche players, and evaluate every opportunity on its own merits.",
  },
  {
    label: "Accountability",
    title: "Governed in the open",
    body: "A Board appointed by Cabinet, accountable to the Government of Rwanda through the Minister of Finance and Economic Planning.",
  },
];

export default function Home() {
  const tickerNames = portfolioCompanies.map((company) =>
    company.name.replace(/\s*\(.*\)$/, ""),
  );

  return (
    <>
      <section className="hero" id="top">
        <div className="frame">
          <Image
            alt="Kigali, Rwanda"
            fill
            priority
            sizes="100vw"
            src="/media/hero-home.jpg"
          />
          <div className="frame-shade" />
        </div>
        <div className="hero-inner container">
          <div className="hero-copy">
            <h1 data-reveal>{site.tagline}</h1>
            <p data-reveal>{site.dek}</p>
            <div className="hero-actions" data-reveal>
              <Button href="/investment" variant="white">
                Explore the Fund
              </Button>
              <Button arrow={false} href="/portfolio" variant="glass">
                Our Portfolio
              </Button>
            </div>
          </div>
          <div className="hero-aside">
            <div className="glass-panel hero-stat" data-reveal>
              <p className="stat-value">
                <sup>FRW</sup>
                <span data-count="456">456</span>bn
              </p>
              <span className="stat-label">Assets under management</span>
            </div>
            <a className="scroll-cue" href="#glance">
              Scroll to explore <Arrow direction="down" />
            </a>
          </div>
        </div>
      </section>

      <section className="section section--lg pad-global" id="glance">
        <div className="container">
          <div className="glance">
            <div className="glance-media" data-reveal>
              <Image
                alt="Agaciro Development Fund offices in Kigali"
                fill
                sizes="(max-width: 991px) 100vw, 34rem"
                src="/media/funds-office.jpg"
              />
              <div className="frame-shade" />
              <div className="glass-panel glance-overlay">
                <p>AgDF at a glance</p>
                <div className="glance-overlay-figures">
                  <div>
                    <p className="stat-value">
                      <span data-count="25">25</span>
                    </p>
                    <span className="stat-label">Portfolio companies</span>
                  </div>
                  <div>
                    <p className="stat-value">
                      <span data-count="7">7</span>
                    </p>
                    <span className="stat-label">Investment sectors</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glance-body">
              <div className="glance-intro" data-reveal>
                <h2>Rwanda&apos;s sovereign wealth fund, owned by Rwandans</h2>
                <p>
                  Proposed at the 2011 Umushyikirano and launched on 23 August
                  2012, Agaciro grows a self-sufficient fund with a long-term
                  horizon — investing on a commercial basis to build up public
                  savings and catalyse economic impact in Rwanda.
                </p>
                <Link className="link-underline" href="/about/history">
                  More on our history
                </Link>
              </div>

              <div className="glance-figures" data-reveal>
                <div>
                  <p className="stat-value">
                    <span data-count="456">456bn</span>
                  </p>
                  <sup>FRW</sup>
                  <span className="stat-label">Assets under management</span>
                </div>
                <div>
                  <p className="stat-value">
                    <span data-count="25">25</span>
                  </p>
                  <span className="stat-label">
                    Portfolio companies and strategic national investments
                  </span>
                </div>
                <div>
                  <p className="stat-value">
                    <span data-count="7">7</span>
                  </p>
                  <span className="stat-label">Investment sectors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Portfolio companies"
        className="section section--sm ticker-band"
      >
        <div className="ticker">
          {[0, 1].map((copy) => (
            <div aria-hidden={copy === 1} className="ticker-group" key={copy}>
              {tickerNames.map((name) => (
                <span className="ticker-item" key={`${copy}-${name}`}>
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section section--sm pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>What guides the Fund</h2>
            <div className="header-aside">
              <p>
                Four commitments shape how we steward national savings and judge
                every opportunity.
              </p>
              <Button href="/about/mission-and-vision" variant="grey">
                Mission and vision
              </Button>
            </div>
          </div>

          <div className="rule-list">
            {values.map((value, index) => (
              <div key={value.label}>
                {index > 0 ? <div className="rule-divider" /> : null}
                <div className="rule-row">
                  <div className="rule-row-fill" />
                  <span className="rule-row-marker">{value.label}</span>
                  <div className="rule-row-body">
                    <span>{value.title}</span>
                    <p>{value.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sm section--haze pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>A portfolio built for Rwanda&apos;s economy</h2>
            <div className="header-aside">
              <p>
                Twenty-five holdings across seven sectors, from banks and
                exchanges to cassava, coffee, tin and connectivity.
              </p>
              <Button href="/portfolio" variant="grey">
                Explore the portfolio
              </Button>
            </div>
          </div>
          <PortfolioCarousel />
        </div>
      </section>

      <section className="strengths">
        <div className="frame">
          <Image
            alt=""
            fill
            sizes="100vw"
            src="/media/key-strengths.png"
          />
          <div className="frame-shade" />
        </div>
        <div className="strengths-inner pad-global">
          <div className="header-center" data-reveal>
            <h2>Key strengths and principles</h2>
          </div>
          <div className="strengths-cards container">
            {strengths.slice(0, 3).map((item) => (
              <article
                className="strengths-card glass-panel"
                data-reveal
                key={item.title}
              >
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sm pad-global">
        <div className="container">
          <div className="header-center" data-reveal>
            <p className="eyebrow">Stewardship</p>
            <h2>The people accountable for the Fund</h2>
          </div>
          <PersonCards items={leadership} />
          <div
            className="hero-actions"
            style={{ justifyContent: "center", marginTop: "3rem" }}
          >
            <Button href="/about/board" variant="brown">
              Board of Directors
            </Button>
            <Button href="/about/team" variant="cream">
              Our team
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--sm section--cream pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>Where we invest</h2>
            <div className="header-aside">
              <p>
                We are sector-agnostic, with preferred sectors in ICT, financial
                services, transport and logistics, agriculture and
                agro-processing, and industrials.
              </p>
            </div>
          </div>
          <div
            className="card-grid card-grid--three"
            style={{ marginTop: "3rem" }}
          >
            {sectors.map((sector) => (
              <Link
                className="card"
                data-reveal
                href={`/portfolio/${sector.slug}`}
                key={sector.slug}
              >
                <h3>{sector.short}</h3>
                <p>{sector.intro}</p>
                <span className="card-foot">
                  View holdings <Arrow direction="diagonal" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConnectCta
        body="Whether you are raising growth capital, structuring debt, or partnering as a fund manager — start the conversation here."
        image="/media/connect-office.jpg"
      />
    </>
  );
}
