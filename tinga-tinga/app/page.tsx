import Script from "next/script";
import { Footer, Navbar } from "@/src/components/layout";
import {
  FeaturesGrid,
  Hero,
  ScrollToTop,
  Subscribe,
  Testimonials,
  VideoSection,
} from "@/src/components/sections";

const productSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Tinga Tinga EA",
      description: "Plug & Play Forex Robot for all currency pairs.",
      brand: "Godfather of Forex",
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "1500",
        availability: "https://schema.org/InStock",
      },
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
          <FeaturesGrid />
          <div className="section-divider" />
          <Testimonials />
          <div className="section-divider" />
          <VideoSection />
          <div className="section-divider" />
          <Subscribe />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
