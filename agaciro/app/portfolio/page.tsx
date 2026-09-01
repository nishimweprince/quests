import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioExplorer } from "@/components/features/PortfolioExplorer";

export const metadata = {
  title: "Portfolio",
  description:
    "Twenty-five portfolio companies and strategic national investments across seven sectors in Rwanda and the region.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Portfolio" }]}
        image="/media/hero-home.jpg"
        standfirst="Twenty-five portfolio companies and strategic national investments across seven sectors."
        title="Our Portfolio"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <PortfolioExplorer />
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
