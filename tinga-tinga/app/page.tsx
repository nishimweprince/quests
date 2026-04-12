import dynamic from "next/dynamic";
import Script from "next/script";
import { Footer, Navbar } from "@/src/components/layout";
import { Hero, ProductShowcase, ScrollToTop, StatsBar } from "@/src/components/sections";
import { products } from "@/src/lib/constants";

const HowItWorks = dynamic(() =>
  import("@/src/components/sections/HowItWorks").then((mod) => mod.HowItWorks),
);
const VideoSection = dynamic(() =>
  import("@/src/components/sections/VideoSection").then((mod) => mod.VideoSection),
);
const CommunityLinks = dynamic(() =>
  import("@/src/components/sections/CommunityLinks").then((mod) => mod.CommunityLinks),
);
const Brokers = dynamic(() => import("@/src/components/sections/Brokers").then((mod) => mod.Brokers));
const Subscribe = dynamic(() =>
  import("@/src/components/sections/Subscribe").then((mod) => mod.Subscribe),
);

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Tinga Tinga EA",
      description: "Plug & Play Forex Robot for all currency pairs.",
      brand: "Godfather of Forex",
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "1500", availability: "https://schema.org/InStock" },
    },
    {
      "@type": "Course",
      name: "Billionaire FX Academy",
      description: "Advanced Forex mentorship and training course.",
      provider: { "@type": "Organization", name: "Godfather of Forex" },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="godfather-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <ProductShowcase product={products.bot} />
          <ProductShowcase product={products.course} reverse secondary />
          <HowItWorks />
          <VideoSection />
          <CommunityLinks />
          <Brokers />
          <Subscribe />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
