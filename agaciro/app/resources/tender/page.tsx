import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { Arrow } from "@/components/ui/Arrow";
import { tenders } from "@/content/resources";
import { media } from "@/content/media";

export const metadata = {
  title: "Tenders",
  description:
    "Open procurement notices and expressions of interest from Agaciro Development Fund.",
};

export default function TenderPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Tenders" }]}
        image={media.resources.tender}
        standfirst="Open procurement notices and expressions of interest."
        title="Tenders"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          {tenders.length ? (
            <div className="listing">
              {tenders.map((tender) => (
                <article className="listing-item" data-reveal key={tender.title}>
                  <h3>{tender.title}</h3>
                  <dl className="listing-meta">
                    <div>
                      <dt>Location</dt>
                      <dd>{tender.location}</dd>
                    </div>
                    {tender.deadlines.map((deadline) => (
                      <div key={deadline.label}>
                        <dt>{deadline.label}</dt>
                        <dd>{deadline.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <a
                    className="btn btn--forest"
                    href={tender.href}
                    rel="noreferrer noopener"
                    style={{ alignSelf: "flex-start" }}
                    target="_blank"
                  >
                    Download {tender.hrefLabel} <Arrow direction="diagonal" />
                  </a>
                </article>
              ))}
            </div>
          ) : (
            <p className="empty-note">
              There are no open tenders right now. Check back soon.
            </p>
          )}
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
