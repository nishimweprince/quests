import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Let&apos;s Connect</h1>
          <p className="page-hero-sub">
            Write or call us with questions about our transport services.
          </p>
        </div>
      </section>

      <div className="container page-content">
        <dl className="contact-grid">
          <div>
            <dt>Address</dt>
            <dd>
              {site.addressEn}
              <br />
              <span style={{ fontSize: "0.88rem", color: "var(--grey)" }}>
                {site.addressKw}
              </span>
            </dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd>
              <a href={site.phoneHref}>{site.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd>
              <a href={site.emailHref}>{site.email}</a>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}
