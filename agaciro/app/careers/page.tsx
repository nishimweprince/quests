import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { Arrow } from "@/components/ui/Arrow";
import { careersIntro, vacancies } from "@/content/careers";

export const metadata = {
  title: "Careers",
  description: careersIntro,
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Careers" }]}
        image="/media/connect-office.jpg"
        standfirst="Work on the investments that build Rwanda's long-term savings."
        title="Careers"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          <div className="split">
            <div className="split-aside">
              <p className="eyebrow">Working here</p>
              <h2>Open roles</h2>
            </div>
            <div className="prose" style={{ width: "100%", maxWidth: "none" }}>
              <p className="measure">{careersIntro}</p>
              {vacancies.length ? (
                <div className="listing" style={{ marginTop: "1.5rem" }}>
                  {vacancies.map((role) => (
                    <article className="listing-item" data-reveal key={role.slug}>
                      <h3>{role.title}</h3>
                      <dl className="listing-meta">
                        <div>
                          <dt>Department</dt>
                          <dd>{role.department}</dd>
                        </div>
                        <div>
                          <dt>Location</dt>
                          <dd>{role.location}</dd>
                        </div>
                        <div>
                          <dt>Application deadline</dt>
                          <dd>{role.deadline}</dd>
                        </div>
                      </dl>
                      <a
                        className="btn btn--brown"
                        href={role.href}
                        rel="noreferrer noopener"
                        style={{ alignSelf: "flex-start" }}
                        target="_blank"
                      >
                        Download job profile <Arrow direction="diagonal" />
                      </a>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="empty-note">
                  There are no open roles right now. Check back soon.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <ConnectCta
        body="No role that fits? Tell us what you do and we will keep it on file."
        title="Get in touch"
      />
    </>
  );
}
