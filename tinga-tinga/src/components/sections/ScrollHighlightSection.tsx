"use client";

import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/src/lib/utils";

export type ScrollHighlightItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type ScrollHighlightSectionProps<TItem extends ScrollHighlightItem> = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  items: TItem[];
  className?: string;
  activeTagline?: string;
  getStepLabel?: (item: TItem, index: number) => string;
  renderStepMeta?: (item: TItem, index: number) => ReactNode;
  renderActiveBody?: (item: TItem, index: number) => ReactNode;
  renderActiveFooter?: (item: TItem, index: number) => ReactNode;
};

export function ScrollHighlightSection<TItem extends ScrollHighlightItem>({
  id,
  eyebrow,
  title,
  intro,
  items,
  className,
  activeTagline = "Active Focus",
  getStepLabel,
  renderStepMeta,
  renderActiveBody,
  renderActiveFooter,
}: ScrollHighlightSectionProps<TItem>) {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const stepsColumnRef = useRef<HTMLDivElement | null>(null);
  const stickyContainerRef = useRef<HTMLDivElement | null>(null);

  const observerMargin = useMemo(() => "-40% 0px -40% 0px", []);

  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsColumnRef,
    offset: ["start 75%", "end 25%"],
  });

  const { scrollYProgress: stickyProgress } = useScroll({
    target: stickyContainerRef,
    offset: ["start end", "end start"],
  });

  const railScaleY = useTransform(stepsProgress, [0, 1], [0, 1]);
  const parallaxY = useTransform(stickyProgress, [0, 1], [12, -12]);

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;

        const nextIndex = Number(visible[0].target.getAttribute("data-step-index"));
        if (!Number.isNaN(nextIndex)) {
          setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
        }
      },
      {
        root: null,
        rootMargin: observerMargin,
        threshold: [0.25, 0.5, 0.75],
      },
    );

    stepRefs.current.forEach((stepRef) => {
      if (stepRef) observer.observe(stepRef);
    });

    return () => observer.disconnect();
  }, [items.length, observerMargin]);

  const activeItem = items[activeIndex] ?? items[0];
  const ActiveIcon = activeItem?.icon;

  if (!activeItem || !ActiveIcon) return null;

  return (
    <section id={id} className={cn("section-shell relative", className)}>
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_55%_45%_at_50%_20%,rgba(212,162,83,0.04),transparent_70%)]" />

      <div className="relative mx-auto w-[min(1180px,92vw)]">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-3 font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-[var(--accent-primary)]">
              {eyebrow}
            </p>
            <h2 className="font-display text-[28px] font-black leading-[1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[48px]">
              {title}
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-[var(--text-secondary)] md:text-right md:text-[14px]">{intro}</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
          <div className="order-2 lg:order-1">
            <div ref={stepsColumnRef} className="relative pl-6 md:pl-8">
              <div className="pointer-events-none absolute left-2 top-2 bottom-2 w-px bg-[var(--border)]/60 md:left-3" />
              <motion.div
                aria-hidden
                style={{ scaleY: reduceMotion ? 1 : railScaleY }}
                className="pointer-events-none absolute left-2 top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[var(--accent-primary)] via-[var(--accent-primary)]/70 to-[var(--accent-primary)]/10 shadow-[0_0_10px_rgba(212,162,83,0.45)] md:left-3"
              />

              <div className="space-y-6">
                {items.map((item, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <motion.div
                      key={item.title}
                      ref={(element) => {
                        stepRefs.current[index] = element;
                      }}
                      data-step-index={index}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              scale: isActive ? 1 : 0.975,
                              opacity: isActive ? 1 : 0.5,
                            }
                      }
                      transition={{ duration: 0.4, ease: "easeOut", delay: reduceMotion ? 0 : index * 0.04 }}
                      className={cn(
                        "relative min-h-[220px] rounded-xl border p-5 md:min-h-[250px] md:p-6",
                        "transition-[border-color,box-shadow,background-color] duration-500",
                        isActive
                          ? "border-[var(--accent-primary)]/45 bg-[var(--bg-secondary)] shadow-[0_18px_45px_rgba(0,0,0,0.35),0_0_0_1px_rgba(212,162,83,0.22),inset_0_1px_0_rgba(255,255,255,0.04)]"
                          : "border-[var(--border)]/70 bg-[var(--bg-secondary)]/45",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "absolute -left-[26px] top-7 hidden h-3 w-3 rounded-full border-2 transition-all duration-500 md:block md:-left-[30px]",
                          isActive
                            ? "border-[var(--accent-primary)] bg-[var(--accent-primary)] shadow-[0_0_0_4px_rgba(212,162,83,0.15),0_0_12px_rgba(212,162,83,0.55)]"
                            : "border-[var(--border)] bg-[var(--bg-primary,#0a0a0a)]",
                        )}
                      />

                      <span
                        className={cn(
                          "mb-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em]",
                          isActive ? "text-[var(--accent-primary)]" : "text-[var(--text-tertiary)]",
                        )}
                      >
                        <span
                          className={cn(
                            "h-1.5 w-1.5 rounded-full transition-colors duration-500 md:hidden",
                            isActive ? "bg-[var(--accent-primary)]" : "bg-[var(--text-tertiary)]/60",
                          )}
                        />
                        {getStepLabel ? getStepLabel(item, index) : `Step ${index + 1}`}
                      </span>

                      <h3 className="font-display text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>

                      {renderStepMeta ? <div className="mt-4">{renderStepMeta(item, index)}</div> : null}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div ref={stickyContainerRef} className="order-1 lg:order-2">
            <motion.div
              style={{ y: reduceMotion ? 0 : parallaxY }}
              className="sticky top-20 overflow-hidden rounded-2xl border border-[var(--accent-primary)]/22 bg-[var(--bg-secondary)] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.42)] md:p-8 lg:top-24"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(212,162,83,0.18),transparent_65%)] blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(245,200,66,0.08),transparent_70%)] blur-2xl"
              />

              <span className="relative mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent-primary)]/70">
                <span className="h-px w-6 bg-[var(--accent-primary)]/40" />
                {activeTagline}
              </span>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeItem.title}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: { staggerChildren: reduceMotion ? 0 : 0.06, delayChildren: reduceMotion ? 0 : 0.04 },
                    },
                    exit: {
                      transition: { staggerChildren: reduceMotion ? 0 : 0.03, staggerDirection: -1 },
                    },
                  }}
                  className="relative"
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: reduceMotion ? 1 : 0.8, rotate: reduceMotion ? 0 : -6 },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                        transition: reduceMotion
                          ? { duration: 0.15 }
                          : { type: "spring", stiffness: 320, damping: 20 },
                      },
                      exit: { opacity: 0, scale: reduceMotion ? 1 : 0.9, transition: { duration: 0.18 } },
                    }}
                    className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent-primary)]/12 text-[var(--accent-primary)] shadow-[0_0_0_1px_rgba(212,162,83,0.24),0_8px_22px_rgba(212,162,83,0.18)]"
                  >
                    <ActiveIcon size={26} strokeWidth={1.6} />
                  </motion.div>

                  <motion.h3
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 12 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
                      exit: { opacity: 0, y: reduceMotion ? 0 : -8, transition: { duration: 0.18 } },
                    }}
                    className="font-display text-[30px] font-black leading-[1.03] tracking-[-0.02em] text-[var(--text-primary)] md:text-[42px]"
                  >
                    {activeItem.title}
                  </motion.h3>

                  <motion.p
                    variants={{
                      hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
                      exit: { opacity: 0, transition: { duration: 0.15 } },
                    }}
                    className="mt-5 max-w-xl text-[14px] leading-relaxed text-[var(--text-secondary)] md:text-[15px]"
                  >
                    {activeItem.description}
                  </motion.p>

                  {renderActiveBody ? (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
                        exit: { opacity: 0, transition: { duration: 0.15 } },
                      }}
                      className="mt-6"
                    >
                      {renderActiveBody(activeItem, activeIndex)}
                    </motion.div>
                  ) : null}
                  {renderActiveFooter ? (
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: reduceMotion ? 0 : 10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
                        exit: { opacity: 0, transition: { duration: 0.15 } },
                      }}
                      className="mt-6 border-t border-[var(--border)] pt-5"
                    >
                      {renderActiveFooter(activeItem, activeIndex)}
                    </motion.div>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
