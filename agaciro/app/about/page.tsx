import Link from "next/link";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { PersonCards } from "@/components/sections/PersonCards";
import { Arrow } from "@/components/ui/Arrow";
import { Button } from "@/components/ui/Button";
import { aboutIntro, missionVision } from "@/content/about";
import { leadership } from "@/content/people";

export const metadata = {
  title: "About Us",
  description:
    "Agaciro Development Fund was proposed by Rwandans at the 2011 Umushyikirano and launched on 23 August 2012.",
};

const sections = [
  {
    href: "/about/history",
    title: "Our History",
    body: "From voluntary contributions by Rwandans at home and abroad to an investment company wholly owned by the Government of Rwanda.",
  },
  {
    href: "/about/mission-and-vision",
    title: "Mission and Vision",
    body: "The vision, mission, mandate and values that set the Fund's direction and hold it to account.",
  },
  {
    href: "/about/board",
    title: "Board of Directors",
    body: "Six directors approved by Cabinet, accountable through the Minister of Finance and Economic Planning.",
  },
  {
    href: "/about/team",
    title: "Our Team",
    body: "Executive management and the investment, legal, finance, risk and communications team in Kigali.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us" }]}
        image="/media/hero-about.jpg"
        standfirst="Agaciro means dignity. The Fund carries a value Rwandans named for themselves, and invests to make it durable."
        title="About Us"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="split">
            <div className="split-aside">
              <p className="eyebrow">Where it began</p>
              <h2>A fund Rwandans asked for</h2>
            </div>
            <div className="prose">
              {aboutIntro.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
              <Link className="link-underline" href="/about/history">
                Read the full history
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sm section--cream pad-global">
        <div className="container">
          <div className="panel-grid">
            <div className="panel" data-reveal>
              <p className="eyebrow">Vision</p>
              <p>{missionVision.vision}</p>
            </div>
            <div className="panel" data-reveal>
              <p className="eyebrow">Mission</p>
              <p>{missionVision.mission}</p>
            </div>
            <div className="panel" data-reveal>
              <p className="eyebrow">Mandate</p>
              <p>{missionVision.mandate}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sm pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>Explore About Us</h2>
            <div className="header-aside">
              <p>Four pages cover where the Fund came from and who runs it.</p>
            </div>
          </div>
          <div className="card-grid" style={{ marginTop: "3rem" }}>
            {sections.map((section) => (
              <Link
                className="card"
                data-reveal
                href={section.href}
                key={section.href}
              >
                <h3>{section.title}</h3>
                <p>{section.body}</p>
                <span className="card-foot">
                  Read more <Arrow direction="diagonal" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--sm section--haze pad-global">
        <div className="container">
          <div className="header-center" data-reveal>
            <p className="eyebrow">Leadership</p>
            <h2>Accountable for the Fund</h2>
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

      <ConnectCta />
    </>
  );
}
