const localhostUrl = "http://localhost:3000";
const isProduction = process.env.NODE_ENV === "production";

function normalizeSiteUrl(value?: string) {
  const normalizedValue = value?.trim();

  if (!normalizedValue) {
    return null;
  }

  const withProtocol = normalizedValue.startsWith("http")
    ? normalizedValue
    : `https://${normalizedValue}`;

  try {
    return new URL(withProtocol).toString().replace(/\/$/, "");
  } catch {
    return null;
  }
}

const publicSiteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);
const vercelProductionUrl = normalizeSiteUrl(
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
);
const vercelUrl = normalizeSiteUrl(process.env.VERCEL_URL);

if (isProduction && process.env.NEXT_PUBLIC_SITE_URL && !publicSiteUrl) {
  throw new Error(
    "NEXT_PUBLIC_SITE_URL must be a valid URL or bare domain in production.",
  );
}

if (isProduction && !publicSiteUrl && !vercelProductionUrl && !vercelUrl) {
  throw new Error(
    "A public site URL is required in production. Set NEXT_PUBLIC_SITE_URL or rely on Vercel's production URL.",
  );
}

const configuredSiteUrl = publicSiteUrl ?? vercelProductionUrl ?? vercelUrl;

export const hasPublicSiteUrl = Boolean(configuredSiteUrl);
export const siteUrl = configuredSiteUrl ?? localhostUrl;

function createWhatsAppUrl(message: string) {
  return `https://wa.me/524491942472?text=${encodeURIComponent(message)}`;
}

export const siteConfig = {
  name: "Mi Cocina",
  shortName: "Mi Cocina",
  description:
    "Banquetes, comida casera y catering para eventos en Aguascalientes. Menus mexicanos e internacionales con servicio profesional.",
  legalName: "Mi Cocina",
  phone: "+524491942472",
  phoneDisplay: "+52 449 194 2472",
  telUrl: "tel:+524491942472",
  whatsappUrl: createWhatsAppUrl(
    "Hola, me gustaria solicitar informacion sobre sus banquetes.",
  ),
  whatsappQuoteUrl: createWhatsAppUrl(
    "Hola, me gustaria solicitar una cotizacion para un evento.",
  ),
  whatsappEventQuoteUrl: createWhatsAppUrl(
    "Hola, me gustaria cotizar un evento con Mi Cocina.",
  ),
  instagramUrl: "https://www.instagram.com/micocina.ags?igsh=aWhyYW5nc2NsZTQ2",
  instagramHandle: "@micocina.ags",
  sameAs: ["https://www.instagram.com/micocina.ags?igsh=aWhyYW5nc2NsZTQ2"],
  addressLocality: "Aguascalientes",
  addressDisplay: "Aguascalientes, Ags., México",
  addressRegion: "Aguascalientes",
  addressCountry: "MX",
  businessHours: "Lun - Vie · 9:00 - 15:00",
  openingHoursSpecification: [
    {
      dayOfWeek: [
        "https://schema.org/Monday",
        "https://schema.org/Tuesday",
        "https://schema.org/Wednesday",
        "https://schema.org/Thursday",
        "https://schema.org/Friday",
      ],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  priceRange: "$$",
  ogImage: "/mi-cocina-logo.webp",
} as const;

export function getSiteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
