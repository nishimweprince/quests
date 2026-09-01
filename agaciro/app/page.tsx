import Link from "next/link";

import { PortfolioCarousel } from "@/components/sections/PortfolioCarousel";
import { ConnectCta } from "@/components/sections/ConnectCta";
import { PersonCards } from "@/components/sections/PersonCards";
import { Button } from "@/components/ui/Button";
import { Arrow } from "@/components/ui/Arrow";
import { leadership } from "@/content/people";
import { principles, strengths } from "@/content/site";

const tickerNames = ["Akagera", "Imizi", "Urumuri", "Kivu", "Inzira", "Iwacu", "Ubumwe", "Ireme"];

export default function Home() {
  return <>
    <section className="home-hero" id="top"><div className="home-hero-bg" /><div className="home-hero-content"><h1 data-reveal>Investing for Rwanda&apos;s future generations</h1><p data-reveal>Rwanda&apos;s sovereign wealth fund, investing national savings for long-term resilience, national prosperity, and lasting value for future generations.</p><div className="hero-actions" data-reveal><Button href="/contact" variant="white">Get in Touch</Button><Button href="/portfolio" variant="glass" arrow={false}>Our Portfolio</Button></div></div><div className="hero-stat" data-reveal><strong><span data-count="456">456</span>bn</strong><span>FRW Assets Under Management</span></div><a className="scroll-link" href="#funds">Scroll to Explore <Arrow direction="down" /></a></section>
    <section className="funds-section" id="funds"><div className="funds-card" data-reveal><div className="funds-card-panel"><p>Our Funds Over Time</p><div><strong><sup>USD</sup>18M</strong><span>Solidarity<br />2012</span></div><div><strong><sup>FRW</sup>184bn</strong><span>Transfer<br />2018</span></div></div></div><div className="funds-copy"><h2 data-word-fill>A sovereign fund built on dignity and alignment.</h2><p data-word-fill>We invest national savings with commercial discipline, patient capital, and lasting purpose.</p><Link className="editorial-link" href="/about">More on Our Approach</Link></div><div className="stat-row"><div><strong><span data-count="456">456</span>bn</strong><span>FRW assets under management</span></div><div><strong><span data-count="25">25</span>+</strong><span>Portfolio and strategic investments</span></div><div><strong><span data-count="7">7</span></strong><span>Investment sectors</span></div></div></section>
    <section className="ticker-section" aria-label="Illustrative portfolio names"><div className="ticker-track">{[...tickerNames, ...tickerNames].map((name, index) => <span key={`${name}-${index}`}><b>{name.slice(0, 2).toUpperCase()}</b><em>{name}</em></span>)}</div></section>
    <section className="aligned-section"><div className="section-intro"><h2>Aligned. Patient.<br /><span>Built for Rwanda.</span></h2><div><p data-word-fill>National purpose shapes how we steward capital and evaluate opportunity.</p><Link className="editorial-link editorial-link--muted" href="/about">Discover More</Link></div></div><div className="principles-list">{principles.map(([number, label]) => <div key={number}><span>{number}</span><p>{label}</p></div>)}</div></section>
    <section className="growing-section"><div className="section-intro"><h2>A Growing Portfolio of Enduring Partnerships</h2><div><p data-word-fill>We partner with strong enterprises to build sustainable value for Rwanda.</p><Link className="editorial-link editorial-link--muted" href="/portfolio">Explore Our Cases</Link></div></div><PortfolioCarousel /></section>
    <section className="strengths-section"><div className="strengths-bg" /><div className="strengths-heading"><h2>Key Strengths and Principles</h2></div><div className="strengths-grid">{strengths.slice(0, 3).map(([title, copy]) => <article data-reveal key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="leadership-section"><div className="center-heading"><p>Stewardship</p><h2>Our Leadership</h2></div><PersonCards items={leadership} /><div className="leadership-links"><Link href="/about/board">Full board <Arrow /></Link><Link href="/about/team">Full team <Arrow /></Link></div></section>
    <ConnectCta />
  </>;
}
