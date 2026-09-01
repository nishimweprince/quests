import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { disclaimer } from "@/content/legal";

export const metadata = {
  title: "Disclaimer",
  description: disclaimer.standfirst,
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Disclaimer" }]}
        image="/media/strengths-blue.jpg"
        standfirst={disclaimer.standfirst}
        title={disclaimer.title}
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="split">
            <div className="split-aside">
              <p className="eyebrow">Legal</p>
              <h2>Read before you act on anything here</h2>
            </div>
            <div className="prose">
              {disclaimer.body.map((paragraph) => (
                <p key={paragraph.slice(0, 30)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
