import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesSection from '@/components/home/ServicesSection';
import PartnersSection from '@/components/home/PartnersSection';

export const metadata: Metadata = {
  title: 'YYUSSA Group Ltd — Real Estate, Import & Export, Logistics',
  description:
    'YYUSSA Group Ltd delivers integrated leadership in real estate, logistics, and commercial wholesale across East Africa.',
};

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
