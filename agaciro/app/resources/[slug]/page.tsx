import { notFound } from "next/navigation";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ConnectCta } from "@/components/sections/ConnectCta";
import { PageHero } from "@/components/sections/PageHero";
import { Arrow } from "@/components/ui/Arrow";
import { findResourceCategory, resourceCategories } from "@/content/resources";

export function generateStaticParams() {
  return resourceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = findResourceCategory(slug);
  if (!category) return {};
  return { title: category.title, description: category.summary };
}

export default async function ResourceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = findResourceCategory(slug);
  if (!category) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources", href: "/resources" }, { label: category.title }]}
        image="/media/funds-office.jpg"
        standfirst={category.summary}
        title={category.title}
      />

      <section className="section section--lg pad-global" id="content">
        <div className="container">
          {category.files.length ? (
            <div className="doc-list">
              {category.files.map((file) => (
                <a
                  className="doc-row"
                  href={file.href}
                  key={file.href}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <span className="doc-title">
                    <FontAwesomeIcon aria-hidden="true" icon={faFilePdf} />
                    {file.title}
                  </span>
                  <span className="doc-meta">{file.size}</span>
                  <span className="doc-action">
                    Download <Arrow direction="down" />
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <p className="empty-note">{category.emptyState}</p>
          )}
        </div>
      </section>

      <ConnectCta />
    </>
  );
}
