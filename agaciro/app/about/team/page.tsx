import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { PersonCards } from "@/components/sections/PersonCards";
import { executives, teamMembers } from "@/content/people";
import { media } from "@/content/media";

export const metadata = {
  title: "Our Team",
  description:
    "Executive management and the team running Agaciro Development Fund from Kigali.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "About Us", href: "/about" }, { label: "Our Team" }]}
        image={media.about.team}
        standfirst="Investment, legal, finance, risk, technology and communications: the people who run the Fund day to day."
        title="Our Team"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>Executive management</h2>
            <div className="header-aside">
              <p>
                Three executives lead the Fund&apos;s investment, legal and
                corporate mandate.
              </p>
            </div>
          </div>
          <PersonCards items={executives} columns={3} />
        </div>
      </section>

      <section className="section section--sm section--haze pad-global">
        <div className="container">
          <div className="header-row" data-reveal>
            <h2>Team members</h2>
            <div className="header-aside">
              <p>
                Sixteen colleagues across investments, finance, legal, risk and
                compliance, people, technology and communications.
              </p>
            </div>
          </div>
          <PersonCards items={teamMembers} columns={3} />
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
