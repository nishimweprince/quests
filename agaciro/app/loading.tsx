/**
 * Shown while a destination segment suspends during navigation, so moving
 * between pages never leaves a blank or stuck-looking screen. Pure markup:
 * no images, no client JavaScript, disabled shimmer under reduced motion.
 */
export default function Loading() {
  return (
    <div aria-busy="true" aria-label="Loading page">
      <span className="sr-only" role="status">
        Loading page…
      </span>
      <section aria-hidden="true" className="page-hero">
        <div className="frame">
          <span className="skeleton skeleton--frame" />
        </div>
        <div className="pad-global">
          <div className="container">
            <div className="page-hero-inner">
              <span className="skeleton skeleton--line skeleton--line-short" />
              <span className="skeleton skeleton--title" />
              <span className="skeleton skeleton--line" />
            </div>
          </div>
        </div>
      </section>
      <section aria-hidden="true" className="pad-global">
        <div className="container">
          <div className="skeleton-cards">
            {[0, 1, 2].map((index) => (
              <span className="skeleton skeleton--card" key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
