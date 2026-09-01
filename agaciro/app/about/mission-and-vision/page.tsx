import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { missionVision } from "@/content/about";

export const metadata = {
  title: "Mission and Vision",
  description:
    "The vision, mission, mandate and values of Agaciro Development Fund.",
};

export default function MissionVisionPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Mission and Vision" },
        ]}
        image="/media/strengths-blue.jpg"
        standfirst="What the Fund is for, what it is required to do, and the values it is run by."
        title="Mission and Vision"
      />

      <section className="section section--lg pad-global" id="content">
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

      <section className="section section--sm section--cream pad-global">
        <div className="container">
          <div className="split">
            <div className="split-aside">
              <p className="eyebrow">Values</p>
              <h2>AgDF belongs to the people of Rwanda</h2>
            </div>
            <div className="prose">
              <p>{missionVision.valuesIntro}</p>
              <div className="chip-row" style={{ marginTop: "1rem" }}>
                {missionVision.values.map((value) => (
                  <span className="chip" key={value}>
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
