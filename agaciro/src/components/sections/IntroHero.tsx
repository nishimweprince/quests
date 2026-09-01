import { Arrow } from "@/components/ui/Arrow";

export function IntroHero({ title, breadcrumb, image = "/media/hero-about.jpg", subtitle }: { title: string; breadcrumb: string; image?: string; subtitle?: string; }) {
  return (
    <section className="intro-hero" style={{ "--hero-image": `url(${image})` } as React.CSSProperties}>
      <div className="intro-shade" />
      <div className="intro-content" data-reveal>
        <p className="breadcrumb">Home <span>•</span> {breadcrumb}</p>
        <h1>{title}</h1>
      </div>
      {subtitle ? <p className="intro-subtitle" data-reveal>{subtitle}</p> : null}
      <a className="scroll-link" href="#content">Scroll to Explore <Arrow direction="down" /></a>
    </section>
  );
}
