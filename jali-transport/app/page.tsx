import Link from "next/link";
import { Button } from "./components/Button";
import { parks, routes } from "@/lib/routes";

const principles = [
  {
    num: "01",
    text: "Gutanga serivisi z'ubwikorezi bw'abantu bose mu Mujyi wa Kigali",
    variant: "dark" as const,
  },
  {
    num: "02",
    text: "Gutezimbere imihanda y'ubwikorezi mu bice dukoramo",
    variant: "cream" as const,
  },
  {
    num: "03",
    text: "Kubahiriza amategeko n'amabwiriza y'inganda y'ubwikorezi",
    variant: "light" as const,
  },
  {
    num: "04",
    text: "Gufasha urwego rw'abikorera mu bucuruzi bw'ubwikorezi",
    variant: "dark" as const,
  },
];

const strengths = [
  "Uburambe mu gutanga serivisi z'ubwikorezi bw'abantu bose",
  "Guhuza n'amahugurwa ya RFTC mu bijyanye n'ubwikorezi",
  "Itumanaho ryihuse n'abakiriya bacu",
];

export default function Home() {
  return (
    <>
      <section className="section-hero" aria-labelledby="hero-heading">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-wrap">
          <div className="hero-content">
            <div className="hero-left">
              <h1 id="hero-heading">
                Public Transport for Kigali and Rwanda
              </h1>
              <p className="hero-lead">
                JALI Transport Limited is a subsidiary of JALI Investment
                Limited and the Rwanda Federation of Transport Cooperative
                (RFTC), providing immediate and long-term solutions to
                transportation needs across the country.
              </p>
              <div className="hero-actions">
                <Button href="/imihanda">View Routes</Button>
                <Button href="/twandikire" variant="sand">
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-stat">
                <div className="hero-stat-number">
                  <span>{routes.length}</span>
                </div>
                <div className="hero-stat-label">Active Bus Routes</div>
              </div>
              <a href="#routes" className="btn-scroll">
                Scroll to Explore
                <span className="icon-arrow icon-arrow--down">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 3v10M8 13l-4-4M8 13l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-family">
        <div className="container family-wrap">
          <div className="family-left">
            <div className="family-left-bg" aria-hidden="true" />
            <div className="family-funds">
              <div className="family-funds-title">Our Routes</div>
              <div className="family-funds-grid">
                {routes.map((route) => (
                  <div key={route.id} className="family-fund-item">
                    <span className="family-fund-num">{route.id}</span>
                    <span className="family-fund-label">{route.corridorEn}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="family-right">
            <div className="family-top">
              <div className="family-header">
                <h3>
                  A Transport Company Built on Experience and Alignment
                </h3>
                <p>
                  We provide public bus services in Kigali City with aligned
                  operations and real-world expertise from RFTC.
                </p>
                <Link href="/ibyerekeye" className="btn-line">
                  More on Our Approach
                </Link>
              </div>
            </div>
            <div className="family-stats">
              <div>
                <div className="family-stat-num">{routes.length}</div>
                <div className="family-stat-label">Active routes</div>
              </div>
              <div>
                <div className="family-stat-num">{parks.length}</div>
                <div className="family-stat-label">Taxi parks</div>
              </div>
              <div>
                <div className="family-stat-num">RFTC</div>
                <div className="family-stat-label">Parent cooperative</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-ticker" aria-hidden="true">
        <div className="ticker-track">
          {[
            ...routes.map((r) => `Route ${r.id}`),
            ...parks.map((p) => `${p.name} Park`),
            ...routes.map((r) => `Route ${r.id}`),
            ...parks.map((p) => `${p.name} Park`),
          ].map((label, i) => (
            <span key={`${label}-${i}`} className="ticker-item">
              {label}
            </span>
          ))}
        </div>
      </section>

      <section className="section-aligned">
        <div className="container">
          <div className="aligned-header">
            <h2>Reliable. Accessible. Built for Riders.</h2>
            <p>
              Our approach is grounded in real experience serving public
              transport users across Rwanda.
            </p>
          </div>
          <div className="aligned-grid">
            {principles.map((item) => (
              <div
                key={item.num}
                className={`aligned-item aligned-item--${item.variant}`}
              >
                <span className="aligned-num">{item.num}</span>
                <p className="aligned-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-portfolio" id="routes">
        <div className="container">
          <div className="portfolio-header">
            <div>
              <h2>A Growing Network of Routes and Parks</h2>
              <p>
                We operate bus routes in Kigali and manage taxi parks across
                Rwanda.
              </p>
            </div>
            <Button href="/imihanda">Explore Routes</Button>
          </div>
          <div className="portfolio-scroll">
            {routes.map((route) => (
              <Link
                key={route.id}
                href={`/imihanda/${route.id}`}
                className={`portfolio-card portfolio-card--${route.id}`}
              >
                <div>
                  <div className="portfolio-route-num">{route.id}</div>
                </div>
                <div>
                  <h3>{route.corridorEn}</h3>
                  <p>
                    {route.schedules.map((s) => s.daysEn).join(" · ")}
                  </p>
                  <span className="portfolio-card-cta">
                    View Route →
                  </span>
                </div>
              </Link>
            ))}
            {parks.map((park) => (
              <Link
                key={park.slug}
                href={`/pariki#${park.slug}`}
                className="portfolio-card portfolio-card--park"
              >
                <div>
                  <h3>{park.name}</h3>
                  <p>Taxi Park</p>
                  <span className="portfolio-card-cta">View Park →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-key">
        <div className="key-bg">
          <div className="key-bg-overlay" aria-hidden="true" />
        </div>
        <div className="container key-wrap">
          <h2>Key Strengths and Principles</h2>
          <div className="key-cards">
            {strengths.map((text, i) => (
              <div key={text} className={`key-card key-card--${i + 1}`}>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="service-strip">
        <span>Service Update</span> — Nta mpinduka uyu munsi / No disruptions today
      </div>

      <section className="section-cta">
        <div className="cta-bg" aria-hidden="true" />
        <div className="container cta-wrap">
          <h2>Let&apos;s Connect</h2>
          <p>
            JALI Transport serves passengers across Kigali City and Rwanda.
          </p>
          <Button href="/twandikire" variant="sand">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
