import type { Metadata } from "next";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Us</h1>
          <p className="page-hero-sub">
            JALI Transport Limited — a subsidiary of JALI Investment Limited
            and RFTC.
          </p>
        </div>
      </section>

      <div className="container page-content">
        <p>
          JALI Transport Limited (JTL) is a subsidiary of JALI Investment
          Limited, which is also an investment company of the Rwanda Federation
          of Transport Cooperative (RFTC).
        </p>
        <p>
          JALI Transport was created to provide immediate and long-term
          solutions to transportation needs in Kigali City and the rest of
          Rwanda.
        </p>

        <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>
          Our Activities
        </h2>
        <ul style={{ color: "var(--grey)", maxWidth: "65ch", paddingLeft: "1.25rem" }}>
          <li>Providing direct transportation services to the public</li>
          <li>Organizing transport systems in our areas of control</li>
          <li>
            Ensuring services adhere to rules governing the public transport
            sector
          </li>
          <li>
            Promoting the private sector by hiring transport vehicles from
            private investors
          </li>
        </ul>

        <p style={{ marginTop: "2rem" }}>
          <Button href="/twandikire">Get in Touch</Button>
        </p>
      </div>
    </>
  );
}
