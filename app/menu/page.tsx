import type { Metadata } from "next";
import { MenuPageClient } from "@/components/menu/menu-page-client";

export const metadata: Metadata = {
  title: "Menu de Banquetes y Platillos",
  description:
    "Explora los menus mexicanos, internacionales, desayunos, postres y platillos especiales de Mi Cocina para eventos en Aguascalientes.",
  alternates: {
    canonical: "/menu",
  },
  openGraph: {
    title: "Menu de Mi Cocina | Banquetes en Aguascalientes",
    description:
      "Revisa nuestros guisados, acompanamientos, desayunos y opciones especiales para tu evento.",
    url: "/menu",
  },
};

export default function MenuPage() {
  return (
    <MenuPageClient />
  );
}
