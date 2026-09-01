import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";

import { Footer } from "@/components/layout/Footer";
import { Nav } from "@/components/layout/Nav";
import { CookieBanner } from "@/components/features/CookieBanner";
import { MotionProvider } from "@/components/providers/MotionProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

import "lenis/dist/lenis.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "Agaciro Development Fund",
    template: "%s | Agaciro Development Fund",
  },
  description:
    "Agaciro Development Fund is Rwanda's sovereign wealth fund, investing national savings for future generations.",
  icons: {
    icon: "/brand/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <MotionProvider>
            <Nav />
            <main id="main-content">{children}</main>
            <Footer />
            <CookieBanner />
          </MotionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
