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

export const siteConfig = {
  name: "Mi Cocina",
  shortName: "Mi Cocina",
  description:
    "Banquetes, comida casera y catering para eventos en Aguascalientes. Menus mexicanos e internacionales con servicio profesional.",
  phone: "+524491942472",
  whatsappUrl:
    "https://wa.me/524491942472?text=Hola%2C%20me%20gustaria%20solicitar%20informacion%20sobre%20sus%20banquetes.",
  instagramUrl: "https://www.instagram.com/micocina.ags?igsh=aWhyYW5nc2NsZTQ2",
  addressLocality: "Aguascalientes, Ags., Mexico",
  ogImage: "/mi-cocina-logo.png",
} as const;

export function getSiteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}
