import type { Metadata } from "next";
import { Footer } from "@/components/landing/footer";
import { MenuGrid } from "@/components/menu/menu-grid";
import { MenuHeader } from "@/components/menu/menu-header";
import { MenuNav } from "@/components/menu/menu-nav";
import { resolveActiveCategory } from "@/lib/menu-page";

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

interface MenuPageProps {
  searchParams?: Promise<{
    categoria?: string;
  }>;
}

export default async function MenuPage({ searchParams }: MenuPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const activeCategory = resolveActiveCategory(resolvedSearchParams?.categoria);

  return (
    <main className="min-h-dvh bg-background relative overflow-x-clip flex flex-col items-center bg-linear-to-br from-primary/10 via-background to-primary/10">
      <MenuHeader />
      <MenuNav activeCategory={activeCategory} />
      <MenuGrid activeCategory={activeCategory} />
      <Footer />
    </main>
  );
}
