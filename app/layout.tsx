import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins, DM_Sans } from "next/font/google";
import { Keywords } from "@/data/seoKeywords";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Suspense } from "react";
import { NavigationEvents } from "@/components/navigation-events";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "500" });

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberData Pros - Data Privacy & Security made simple",
  description:
    "With CyberData Pros, we keep up for you, providing the up-to-date knowledge you need to manage a robust information security program.",
  keywords: Keywords,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://cyberdatapros.com",
  },
  openGraph: {
    title: "CyberData Pros - Data Privacy & Security made simple",
    description:
      "With CyberData Pros, we keep up for you, providing the up-to-date knowledge you need to manage a robust information security program.",
    url: "https://cyberdatapros.com",
    siteName: "Cyberdata Pros",
    images: [
      {
        url: "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707762245/social-image-og_kpaxgw.png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  authors: {
    name: "CyberData Pros",
    url: "https://cyberdatapros.com",
  },
  icons: {
    apple: [
      {
        url: "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707762245/social-image-og_kpaxgw.png",
      },
      {
        url: "https://res.cloudinary.com/dzqp0dnia/image/upload/v1707762245/social-image-og_kpaxgw.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${dmSans.className}`}>
      <body className={inter.className}>
        {children}
        <Analytics />
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-6D2RGHJRV0`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6D2RGHJRV0');
          `,
        }}
      />
      <Script
        suppressHydrationWarning
        type="text/javascript"
        src="https://chimpstatic.com/mcjs-connected/js/users/74e766e064366f581ab2b9424/24275a96a775217c7001c493c.js"
      />
      <Script
        id="apollo-tracker"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            function initApollo() {
              var n = Math.random().toString(36).substring(7);
              var o = document.createElement("script");
              o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
              o.async = true;
              o.defer = true;
              o.onload = function() {
                window.trackingFunctions.onLoad({ appId: "6734c0d0a4de0f057db51ccf" });
              };
              document.head.appendChild(o);
            }
            initApollo();
          `,
        }}
      />
    </html>
  );
}
