const localhostUrl = "http://localhost:3000";

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

const configuredSiteUrl =
  normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL) ??
  normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL) ??
  normalizeSiteUrl(process.env.VERCEL_URL);

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
  addressLocality: "Aguascalientes, Ags., Mexico",
  addressDisplay: "Aguascalientes, Ags., México",
  businessHours: "Lun - Vie · 9:00 - 15:00",
  ogImage: "/mi-cocina-logo.webp",
} as const;

export function getSiteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
