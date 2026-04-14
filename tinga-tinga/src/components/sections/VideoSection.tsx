import { SectionHeading } from "@/src/components/ui";
import { video } from "@/src/lib/constants";

export function VideoSection() {
  return (
    <section id="video" className="section-shell">
      <SectionHeading title={video.heading} />
      <div className="relative mx-auto w-[min(980px,92vw)]">
        <div className="absolute inset-0 -m-4 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(212,162,83,0.06),transparent_70%)] pointer-events-none" />
        <div className="relative rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-4 shadow-[0_0_40px_rgba(212,162,83,0.06)] md:p-6">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-[var(--accent-primary)]/10">
          <iframe
            src={video.youtubeEmbedUrl}
            title={video.label}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <p className="mt-5 text-center text-sm text-[var(--text-secondary)]">
          <a href={video.ctaHref} className="group/cta inline-flex items-center gap-1.5 font-medium text-[var(--accent-primary)] transition-colors hover:text-[var(--text-primary)]">
            {video.cta}
            <span className="inline-block transition-transform group-hover/cta:translate-x-1">→</span>
          </a>
        </p>
      </div>
      </div>
    </section>
  );
}
