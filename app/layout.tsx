import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins, DM_Sans } from "next/font/google";

const dmSans = DM_Sans({ subsets: ["latin"], weight: "500" });

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CyberData Pros - Data Privacy & Security made simple",
  description:
    "With CyberData Pros, we keep up for you, providing the up-to-date knowledge you need to manage a robust information security program.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${dmSans.className}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
