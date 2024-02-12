import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins, DM_Sans } from "next/font/google";
import { Keywords } from "@/data/seoKeywords";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

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
      </body>
      <Script
        suppressHydrationWarning
        type="text/javascript"
        src="https://chimpstatic.com/mcjs-connected/js/users/74e766e064366f581ab2b9424/24275a96a775217c7001c493c.js"
      />
    </html>
  );
}
