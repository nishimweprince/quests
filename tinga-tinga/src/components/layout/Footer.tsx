import { navLinks, socialLinks } from "@/src/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="mx-auto grid w-[min(1180px,92vw)] gap-10 py-10 md:grid-cols-3">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-tertiary)]">GODFATHER OF FOREX</p>
          <p className="mt-3 max-w-xs text-xs text-[var(--text-tertiary)]">
            Institutional-grade forex automation.
          </p>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-widest text-[var(--text-tertiary)]">Links</p>
          <div className="flex flex-col gap-1.5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-widest text-[var(--text-tertiary)]">Social</p>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded border border-[var(--border)] text-[var(--text-tertiary)] transition-colors hover:border-[var(--accent-primary)] hover:text-[var(--text-secondary)]"
              >
                <item.icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)]">
        <div className="mx-auto w-[min(1180px,92vw)] py-5 text-[10px] text-[var(--text-tertiary)]">
          <p>© {new Date().getFullYear()} Godfather of Forex. All rights reserved.</p>
          <p className="mt-2 leading-relaxed">
            Trading forex involves significant risk of loss and is not suitable for all investors.
            Past performance is not indicative of future results. The products and services offered
            on this website are for educational and informational purposes. Please trade responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
