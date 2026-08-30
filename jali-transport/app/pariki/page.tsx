import type { Metadata } from "next";
import { parks } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Parks",
};

export default function ParksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Parks</h1>
          <p className="page-hero-sub">
            JALI Transport taxi parks across Rwanda.
          </p>
        </div>
      </section>

      <div className="container page-content">
        <div className="parks-grid">
          {parks.map((park) => (
            <div key={park.slug} id={park.slug} className="park-card">
              <h3>{park.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
