import type { Metadata } from "next";
import { Darker_Grotesque, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://godfatherofforex.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Godfather of Forex",
    template: "%s | Godfather of Forex",
  },
  description:
    "Trade smarter with Tinga Tinga EA. Professional forex automation, mentorship, and broker recommendations from Godfather of Forex.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Godfather of Forex",
    description:
      "High-converting forex platform for Tinga Tinga EA bot, mentorship, and trading community access.",
    url: siteUrl,
    type: "website",
    siteName: "Godfather of Forex",
    images: ["/images/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Godfather of Forex",
    description: "Trade smarter with automated precision.",
    images: ["/images/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${darkerGrotesque.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
