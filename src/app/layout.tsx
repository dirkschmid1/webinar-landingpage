import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kostenloses Webinar für Autoaufbereiter | MotorMarketing",
  description: "Schluss mit der Umsatz-Achterbahn! Lerne, wie du als Autoaufbereiter planbar Premium-Kunden gewinnst – ohne Social-Media-Stress.",
  keywords: "Autoaufbereiter, Kundengewinnung, Google Ranking, Premium Kunden, Webinar, MotorMarketing",
  openGraph: {
    title: "Kostenloses Webinar für Autoaufbereiter | MotorMarketing",
    description: "Schluss mit der Umsatz-Achterbahn! Lerne, wie du als Autoaufbereiter planbar Premium-Kunden gewinnst.",
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kostenloses Webinar für Autoaufbereiter",
    description: "Schluss mit der Umsatz-Achterbahn! Planbar Premium-Kunden gewinnen.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
