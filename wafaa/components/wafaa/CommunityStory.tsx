import Image from "next/image";
import { aboutImage, communityStory } from "@/data/wafaaContent";

function CommunityVisual() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md border border-wafaa-line bg-wafaa-lilac">
      <Image
        src={aboutImage.src}
        alt={aboutImage.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 600px"
        className="object-cover"
      />
      <div className="absolute bottom-6 left-6 right-6 rounded-md border border-wafaa-line/60 bg-white/85 p-4 backdrop-blur-sm">
        <p className="font-display text-sm font-semibold text-wafaa-primary">
          Community connection
        </p>
        <p className="mt-1 text-xs text-wafaa-muted">
          Paterson &amp; Wayne, New Jersey
        </p>
      </div>
    </div>
  );
}

export function CommunityStory() {
  return (
    <section
      id="about"
      className="bg-wafaa-paper py-16 md:py-20"
      aria-labelledby="about-heading"
    >
      <div className="wafaa-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <CommunityVisual />
          <div>
            <h2
              id="about-heading"
              className="font-display text-3xl font-semibold leading-tight text-wafaa-primary sm:text-4xl"
            >
              {communityStory.heading}
            </h2>
            {communityStory.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="mt-5 text-lg leading-relaxed text-wafaa-muted"
              >
                {paragraph}
              </p>
            ))}
            <a
              href={communityStory.ctaHref}
              className="mt-8 inline-flex min-h-[44px] items-center text-base font-semibold text-wafaa-sage hover:text-wafaa-primary hover:underline underline-offset-4"
            >
              {communityStory.cta}
              <span aria-hidden="true" className="ml-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
