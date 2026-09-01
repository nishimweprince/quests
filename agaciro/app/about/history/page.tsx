import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { aboutIntro, history, milestones } from "@/content/about";
import { media } from "@/content/media";

export const metadata = {
  title: "Our History",
  description:
    "The Agaciro Development Fund was proposed at the ninth Umushyikirano in 2011 and launched on 23 August 2012.",
};

export default function HistoryPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us", href: "/about" }, { label: "Our History" }]}
        image={media.about.history}
        standfirst="Proposed by Rwandans in 2011, launched in 2012, and an investment company wholly owned by the Government of Rwanda since 2013."
        title="Our History"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="split">
            <div className="split-aside">
              <p className="eyebrow">Origin</p>
              <h2>Named for a value, not a strategy</h2>
            </div>
            <div className="prose">
              {[...aboutIntro, ...history].map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sm section--sage pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>Four moments that shaped the Fund</h2>
          </div>
          <div className="timeline" style={{ marginTop: "3rem" }}>
            {milestones.map((item) => (
              <article className="timeline-item" data-reveal key={item.year}>
                <p className="timeline-year">{item.year}</p>
                <div className="timeline-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
