export function LegalDoc({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: Array<[string, string]>;
}) {
  return (
    <section className="legal-page" id="top">
      <div className="legal-head">
        <p>Legal</p>
        <h1>
          {title.split(" ").slice(0, -1).join(" ")}{" "}
          <span>{title.split(" ").at(-1)}</span>
        </h1>
        <p>{intro}</p>
        <small>Effective Date: 31 August 2026</small>
      </div>
      <div className="legal-layout">
        <aside>
          <p>Contents</p>
          {sections.map(([heading], index) => (
            <a href={`#legal-${index + 1}`} key={heading}>
              {String(index + 1).padStart(2, "0")} {heading}
            </a>
          ))}
        </aside>
        <article>
          {sections.map(([heading, copy], index) => (
            <section id={`legal-${index + 1}`} key={heading}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{heading}</h2>
              <p>{copy}</p>
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
