import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { getSiteUrl, hasPublicSiteUrl, siteConfig, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: hasPublicSiteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Mi Cocina | Banquetes en Aguascalientes",
    template: "%s | Mi Cocina",
  },
  description:
    siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "banquetes en Aguascalientes",
    "catering en Aguascalientes",
    "comida casera para eventos",
    "menus para eventos",
    "banquetes mexicanos",
    "Mi Cocina",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: hasPublicSiteUrl ? getSiteUrl("/") : undefined,
    siteName: siteConfig.name,
    title: "Mi Cocina | Banquetes en Aguascalientes",
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 1200,
        alt: "Logo de Mi Cocina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Cocina | Banquetes en Aguascalientes",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  category: "food",
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
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": hasPublicSiteUrl ? `${getSiteUrl("/")}#localbusiness` : undefined,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: hasPublicSiteUrl ? getSiteUrl("/") : undefined,
  image: hasPublicSiteUrl ? getSiteUrl(siteConfig.ogImage) : undefined,
  logo: hasPublicSiteUrl ? getSiteUrl(siteConfig.ogImage) : undefined,
  telephone: siteConfig.phone,
  priceRange: siteConfig.priceRange,
  areaServed: "Aguascalientes, Mexico",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.addressLocality,
    addressRegion: siteConfig.addressRegion,
    addressCountry: siteConfig.addressCountry,
  },
  openingHoursSpecification: siteConfig.openingHoursSpecification.map((schedule) => ({
    "@type": "OpeningHoursSpecification",
    ...schedule,
  })),
  sameAs: siteConfig.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: siteConfig.phone,
    availableLanguage: ["es", "en"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
