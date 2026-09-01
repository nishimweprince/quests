import type { Metadata } from "next";
import { Button } from "../components/Button";
import { LeadershipSection } from "../components/LeadershipSection";
import { copy } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>{copy.about.title}</h1>
          <p className="page-hero-sub">{copy.about.body}</p>
        </div>
      </section>

      <div className="container page-content">
        <p>{copy.hero.welcome}</p>

        <h2 style={{ marginTop: "2rem", marginBottom: "0.75rem", fontSize: "1.35rem" }}>
          {copy.services.title}
        </h2>
        <p>{copy.services.intro}</p>
        <ul style={{ color: "var(--grey)", maxWidth: "65ch", paddingLeft: "1.25rem", fontSize: "0.92rem" }}>
          {copy.services.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p style={{ marginTop: "1.5rem", fontSize: "0.92rem" }}>{copy.about.holdings}</p>

        <p style={{ marginTop: "1.5rem" }}>
          <Button href="/twandikire">Get in Touch</Button>
        </p>
      </div>

      <LeadershipSection />
    </>
  );
}
