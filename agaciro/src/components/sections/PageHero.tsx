import Image from "next/image";
import Link from "next/link";

import { media } from "@/content/media";

export type Crumb = { label: string; href?: string };

export function PageHero({
  title,
  crumbs = [],
  image = media.about.hub,
  standfirst,
  eyebrow,
}: {
  title: string;
  crumbs?: Crumb[];
  image?: string;
  standfirst?: string;
  eyebrow?: string;
}) {
  return (
    <section className="page-hero" id="top">
      <div className="frame">
        <Image alt="" fill priority sizes="100vw" src={image} />
        <div className="frame-shade" />
      </div>
      <div className="pad-global">
        <div className="container">
          <div className="page-hero-inner" data-reveal>
            <nav aria-label="Breadcrumb" className="breadcrumb">
              <Link href="/">Home</Link>
              {crumbs.map((crumb) => (
                <span key={crumb.label} style={{ display: "contents" }}>
                  <span aria-hidden="true">•</span>
                  {crumb.href ? (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  ) : (
                    <strong aria-current="page">{crumb.label}</strong>
                  )}
                </span>
              ))}
            </nav>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h1>{title}</h1>
            {standfirst ? <p>{standfirst}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
