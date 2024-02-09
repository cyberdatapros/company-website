/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins, DM_Sans } from "next/font/google";
import { Keywords } from "@/data/seoKeywords";
import Script from "next/script";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "500" });

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });

const isProduciton = process.env.NODE_ENV === "production";

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
  openGraph: {
    title: "CyberData Pros - Data Privacy & Security made simple",
    description:
      "With CyberData Pros, we keep up for you, providing the up-to-date knowledge you need to manage a robust information security program.",
    url: "https://cyberdatapros.com",
    siteName: "Cyberdata Pros",
    images: [
      {
        url: "",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  authors: {
    name: "CyberData Pros",
    url: "https://cyberdatapros.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${dmSans.className}`}>
      <body className={inter.className}>{children}</body>
      <Script
        suppressHydrationWarning
        type="text/javascript"
        src="https://chimpstatic.com/mcjs-connected/js/users/74e766e064366f581ab2b9424/24275a96a775217c7001c493c.js"
      />
    </html>
  );
}
