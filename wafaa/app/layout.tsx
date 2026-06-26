import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Literata } from "next/font/google";
import { wafaaConfig } from "@/data/wafaaConfig";
import "./globals.css";

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  display: "swap",
});

const atkinson = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteTitle =
  "WAFAA Organization | Support for Women, Families, and Communities";
const siteDescription =
  "WAFAA helps individuals and families access counseling, crisis support, emergency resources, guidance, and community services in Paterson and Wayne, New Jersey.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(wafaaConfig.siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    locale: "en_US",
    siteName: wafaaConfig.shortName,
    images: [
      {
        url: "/og-wafaa.svg",
        width: 1200,
        height: 630,
        alt: "WAFAA Organization — Support for Women, Families, and Communities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-wafaa.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: wafaaConfig.organizationName,
  alternateName: wafaaConfig.shortName,
  url: wafaaConfig.siteUrl,
  telephone: wafaaConfig.primaryPhone,
  email: wafaaConfig.email,
  areaServed: {
    "@type": "Place",
    name: wafaaConfig.serviceArea,
  },
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${literata.variable} ${atkinson.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
