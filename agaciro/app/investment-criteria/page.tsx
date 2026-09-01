import { IntroHero } from "@/components/sections/IntroHero";
import { ConnectCta } from "@/components/sections/ConnectCta";
import { criteria } from "@/content/site";

export const metadata = { title: "Investment Criteria" };
export default function CriteriaPage() { return <><IntroHero title="Investment Criteria" breadcrumb="Investment Criteria" image="/media/hero-criteria.jpg" subtitle="We evaluate every opportunity on its own merits, commercially and for Rwanda." /><section className="criteria-section" id="content"><div><p>Our lens</p><h2>What Defines the Right Opportunity</h2></div><div className="criteria-grid">{criteria.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></section><ConnectCta /></>; }
