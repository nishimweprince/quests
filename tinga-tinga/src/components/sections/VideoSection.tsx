import { SectionHeading } from "@/src/components/ui";
import { video } from "@/src/lib/constants";

export function VideoSection() {
  return (
    <section id="video" className="section-shell">
      <SectionHeading title={video.heading} />
      <div className="mx-auto w-[min(980px,92vw)] rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-4 md:p-6">
        <div className="relative aspect-video overflow-hidden rounded-lg border border-[var(--border)]">
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
          <a href={video.ctaHref} className="font-medium text-[var(--accent-primary)] hover:text-[var(--text-primary)]">
            {video.cta}
          </a>
        </p>
      </div>
    </section>
  );
}
