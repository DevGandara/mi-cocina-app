const defaultSiteUrl = "http://localhost:3000";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const siteUrl = rawSiteUrl?.length ? rawSiteUrl : defaultSiteUrl;

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
