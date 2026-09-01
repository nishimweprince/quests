import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { Arrow } from "@/components/ui/Arrow";
import { newsItems } from "@/content/news";
import { media } from "@/content/media";

export const metadata = {
  title: "News & Events",
  description: "News and events from Agaciro Development Fund.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "News & Events" }]}
        image={media.news}
        standfirst="What the Fund has been doing, and where it has shown up."
        title="News & Events"
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          {newsItems.length ? (
            <div className="news-list">
              {newsItems.map((item) => (
                <a
                  className="news-item"
                  data-reveal
                  href={item.href}
                  key={item.slug}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <time dateTime={item.isoDate}>{item.date}</time>
                  <div className="news-body">
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <span className="card-foot">
                      Read on {item.source} <Arrow direction="diagonal" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <p className="empty-note">No news has been posted yet.</p>
          )}
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
