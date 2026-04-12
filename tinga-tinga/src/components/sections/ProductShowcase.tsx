"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button, FeatureCard } from "@/src/components/ui";
import type { ProductData } from "@/src/lib/constants";
import { ctaLinks } from "@/src/lib/constants";
import { cn } from "@/src/lib/utils";

type Props = {
  product: ProductData;
  reverse?: boolean;
  secondary?: boolean;
};

export function ProductShowcase({ product, reverse, secondary }: Props) {
  return (
    <section id={product.id} className="section-shell">
      <div
        className={cn(
          "mx-auto grid w-[min(1180px,92vw)] items-center gap-10 lg:grid-cols-2",
          reverse ? "lg:[&>*:first-child]:order-2" : "",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] p-3"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-tertiary)]">
            <Image src={product.image} alt={product.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 90vw, 45vw" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-[var(--accent-primary)]">
            {product.badge}
          </span>
          <h2
            className={cn(
              "mt-3 font-display font-extrabold leading-tight tracking-tight text-[var(--text-primary)]",
              secondary ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl",
            )}
          >
            {product.title}
          </h2>
          <p className="mt-3 text-sm text-[var(--text-secondary)]">{product.subtitle}</p>

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {product.features.map((feature) => (
              <FeatureCard key={feature} title={feature} />
            ))}
          </div>

          <p className="mt-6 font-mono text-3xl font-semibold text-[var(--text-primary)]">{product.price}</p>

          <a href={secondary ? ctaLinks.courseCheckout : ctaLinks.botCheckout}>
            <Button variant={secondary ? "secondary" : "primary"} size="lg" className="mt-4 w-full">
              {product.cta}
            </Button>
          </a>
          <p className="mt-3 font-mono text-[10px] text-[var(--text-tertiary)]">{product.trustLine}</p>
        </motion.div>
      </div>
    </section>
  );
}
