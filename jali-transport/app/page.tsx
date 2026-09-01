import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/Button";
import { LeadershipSection } from "./components/LeadershipSection";
import { copy, images } from "@/lib/content";
import { parks, routes } from "@/lib/routes";

const principles = copy.services.items.slice(0, 4).map((text, i) => ({
  num: String(i + 1).padStart(2, "0"),
  text,
  variant: (["dark", "cream", "light", "dark"] as const)[i],
}));

export default function Home() {
  return (
    <>
      <section className="section-hero" aria-labelledby="hero-heading">
        <Image
          src={images.hero}
          alt=""
          fill
          priority
          className="hero-bg-img"
          sizes="100vw"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-wrap">
          <div className="hero-content">
            <div className="hero-left">
              <h1 id="hero-heading">{copy.hero.title}</h1>
              <p className="hero-lead">{copy.hero.lead}</p>
              <div className="hero-actions">
                <Button href="/imihanda">Our Services</Button>
                <Button href="/twandikire" variant="sand">
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-stat">
                <div className="hero-stat-number">{routes.length}</div>
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
            <Image
              src={images.about}
              alt="Kigali community"
              fill
              className="family-left-bg"
              sizes="(max-width: 991px) 100vw, 34rem"
            />
            <div className="family-funds">
              <div className="family-funds-title">{copy.schedules.title}</div>
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
            <div className="family-header">
              <h3>{copy.about.title}</h3>
              <p>{copy.about.body}</p>
              <Link href="/ibyerekeye" className="btn-line">
                Learn More
              </Link>
            </div>
            <div className="family-stats">
              <div>
                <div className="family-stat-num">{routes.length}</div>
                <div className="family-stat-label">Routes</div>
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
            ...parks.map((p) => `${p.name} Taxi Park`),
            ...routes.map((r) => `Route ${r.id}`),
            ...parks.map((p) => `${p.name} Taxi Park`),
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
            <h2>{copy.services.title}</h2>
            <p>{copy.services.intro}</p>
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
              <h2>{copy.projects.title}</h2>
              <p>{copy.hero.welcome}</p>
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
                <div className="portfolio-route-num">{route.id}</div>
                <div>
                  <h3>{route.corridorEn}</h3>
                  <p>{route.schedules.map((s) => s.daysEn).join(" · ")}</p>
                  <span className="portfolio-card-cta">View →</span>
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
                  <span className="portfolio-card-cta">View →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-key">
        <div className="key-bg">
          <Image
            src={images.landscape}
            alt=""
            fill
            className="key-bg-img"
            sizes="100vw"
          />
        </div>
        <div className="key-bg-overlay" aria-hidden="true" />
        <div className="container key-wrap">
          <h2>Key Strengths</h2>
          <div className="key-cards">
            {copy.services.items.slice(4).map((text) => (
              <div key={text} className="key-card">
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadershipSection />

      <div className="service-strip">
        <span>Welcome</span> — We encourage you to use this site to find information about Jali Transport.
      </div>

      <section className="section-cta">
        <div className="cta-bg" aria-hidden="true" />
        <div className="container cta-wrap">
          <h2>{copy.cta.title}</h2>
          <p>{copy.about.holdings}</p>
          <Button href="/twandikire" variant="sand">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
