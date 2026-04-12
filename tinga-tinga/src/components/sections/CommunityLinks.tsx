import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/src/components/ui";
import { communityLinks } from "@/src/lib/constants";

export function CommunityLinks() {
  return (
    <section id="community" className="section-shell">
      <SectionHeading title="Join the Trading Community" />

      <div className="mx-auto grid w-[min(1180px,92vw)] gap-4 md:grid-cols-2">
        {communityLinks.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-5 transition-colors duration-200 hover:border-[var(--accent-primary)]/30"
          >
            <div className="flex items-start justify-between gap-4">
              <div
                className="inline-flex rounded-lg p-2.5"
                style={{ color: item.color, backgroundColor: item.color + "15" }}
              >
                <item.icon size={18} />
              </div>
              <ArrowUpRight
                size={16}
                className="text-[var(--text-tertiary)] transition-colors group-hover:text-[var(--text-primary)]"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
