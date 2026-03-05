import type { Metadata } from 'next';
import { Libre_Baskerville } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

  const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-libre-baskerville',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'YYUSSA Group Ltd — Real Estate, Import & Export, Logistics',
    template: '%s | YYUSSA Group Ltd',
  },
  description:
    'YYUSSA Group Ltd is a leading Rwandan conglomerate with 30+ years of excellence in real estate, commercial wholesale, and logistics across East Africa.',
  keywords: ['YYUSSA', 'Rwanda', 'real estate', 'logistics', 'import export', 'East Africa', 'Kigali'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'YYUSSA Group Ltd',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={libreBaskerville.variable}>
      <body className="antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
