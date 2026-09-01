import { IntroHero } from "@/components/sections/IntroHero";
import { PortfolioExplorer } from "@/components/features/PortfolioExplorer";

export const metadata = { title: "Portfolio" };
export default function PortfolioPage() { return <><IntroHero title="Investment Portfolio" breadcrumb="Investment Portfolio" image="/media/hero-home.jpg" /><PortfolioExplorer /></>; }
