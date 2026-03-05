import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <AboutPreview />
      <PartnersSection />
    </>
  );
}
