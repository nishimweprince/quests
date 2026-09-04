import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioExplorer } from "@/components/features/PortfolioExplorer";
import { media } from "@/content/media";

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
        image={media.portfolio.hub}
        standfirst="Twenty-five portfolio companies and strategic national investments across seven sectors."
        title="Portfolio"
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
