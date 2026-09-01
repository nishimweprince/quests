import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { PersonCards } from "@/components/sections/PersonCards";
import { board, boardIntro } from "@/content/people";
import { media } from "@/content/media";

export const metadata = {
  title: "Board of Directors",
  description:
    "Agaciro Development Fund is governed by a Board of Directors approved by Cabinet and accountable to the Government of Rwanda.",
};

export default function BoardPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "About Us", href: "/about" },
          { label: "Board of Directors" },
        ]}
        image={media.about.board}
        standfirst="Six directors approved by Cabinet, accountable through the Minister of Finance and Economic Planning."
        title="Board of Directors"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="split">
            <div className="split-aside">
              <p className="eyebrow">Governance</p>
              <h2>Professional, transparent, accountable</h2>
            </div>
            <div className="prose">
              <p>{boardIntro}</p>
            </div>
          </div>
          <PersonCards items={board} />
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
