import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const inter = Inter({
  subsets: ["latin"],
  // Tailwind body/headings: normal–extrabold (400–800); font-black (900) unused in app CSS.
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nuvigant · Gestión Notarial con IA",
    template: "%s · Nuvigant",
  },
  description:
    "Nuvigant — Plataforma de gestión notarial con IA para México. Portal de clientes, prevención de lavado, facturación electrónica y más.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Nuvigant",
    title: "Nuvigant · Gestión Notarial con IA",
    description:
      "Nuvigant — Plataforma de gestión notarial con IA para México. Portal de clientes, prevención de lavado, facturación electrónica y más.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nuvigant · Gestión Notarial con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nuvigant",
    creator: "@nuvigant",
    title: "Nuvigant · Gestión Notarial con IA",
    description:
      "Nuvigant — Plataforma de gestión notarial con IA para México. Portal de clientes, prevención de lavado, facturación electrónica y más.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="min-h-screen bg-white">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
