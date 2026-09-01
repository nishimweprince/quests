import { IntroHero } from "@/components/sections/IntroHero";
import { criteria } from "@/content/site";

export const metadata = { title: "Investment Criteria" };
export default function CriteriaPage() { return <><IntroHero title="Investment Criteria" breadcrumb="Investment Criteria" image="/media/hero-criteria.jpg" subtitle="We are flexible and evaluate every opportunity on its own merits." /><section className="criteria-section" id="content"><div><p>Our lens</p><h2>What Defines the Right Opportunity</h2></div><div className="criteria-grid">{criteria.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section></>; }
