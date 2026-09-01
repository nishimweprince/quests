import { PageHero } from "@/components/sections/PageHero";
import { WhistleblowerForm } from "@/components/features/WhistleblowerForm";
import { whistleblowing } from "@/content/legal";

export const metadata = {
  title: "Whistleblowing",
  description: whistleblowing.standfirst,
};

export default function WhistleblowingPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Whistleblowing" }]}
        image="/media/hero-about.jpg"
        standfirst={whistleblowing.standfirst}
        title={whistleblowing.title}
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="split">
            <div className="split-aside">
              <p className="eyebrow">Before you start</p>
              <h2>What this channel is for</h2>
              <div className="prose">
                <p>{whistleblowing.policy}</p>
                <p>{whistleblowing.protection}</p>
              </div>
            </div>
            <WhistleblowerForm />
          </div>
        </div>
      </section>
    </>
  );
}
