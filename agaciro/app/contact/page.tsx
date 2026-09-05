import { RemoteImage as Image } from "@/components/ui/RemoteImage";
import Link from "next/link";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ContactForm } from "@/components/features/ContactForm";
import { site } from "@/content/site";
import { media } from "@/content/media";

export const metadata = {
  title: "Contact",
  description:
    "Reach Agaciro Development Fund at BPR PCD Towers, KN 67, Kigali, Rwanda.",
};

export default function ContactPage() {
  return (
    <section className="section section--lg pad-global" id="top" style={{ paddingTop: "10rem" }}>
      <div className="container">
        <nav aria-label="Breadcrumb" className="breadcrumb muted">
          <Link href="/">Home</Link>
          <span aria-hidden="true">•</span>
          <strong aria-current="page">Contact</strong>
        </nav>

        <div className="header-row" data-reveal style={{ margin: "2rem 0 3rem" }}>
          <h1>Contact the Fund</h1>
          <div className="header-aside">
            <p>
              Investment proposals, partnership enquiries, media questions: send
              them here, or reach the office directly.
            </p>
          </div>
        </div>

        <div className="contact-layout">
          <div className="contact-visual">
            <Image
              alt="Kigali, Rwanda"
              fill
              priority
              sizes="(max-width: 991px) 100vw, 40vw"
              src={media.contact}
            />
            <div className="contact-details">
              <p className="eyebrow">Agaciro Development Fund</p>
              <a className="contact-item" href={`mailto:${site.email}`}>
                <FontAwesomeIcon aria-hidden="true" icon={faEnvelope} />
                {site.email}
              </a>
              <a className="contact-item" href={`tel:${site.phoneHref}`}>
                <FontAwesomeIcon aria-hidden="true" icon={faPhone} />
                {site.phone}
              </a>
              <a
                className="contact-item"
                href={`https://maps.google.com/?q=${site.mapQuery}`}
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon aria-hidden="true" icon={faLocationDot} />
                <span>
                  {site.address.map((line) => (
                    <span key={line} style={{ display: "block" }}>
                      {line}
                    </span>
                  ))}
                </span>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
