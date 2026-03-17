"use client";

import { useState } from "react";
import { MenuHeader } from "@/components/menu/menu-header";
import { MenuNav } from "@/components/menu/menu-nav";
import { MenuGrid } from "@/components/menu/menu-grid";
import { Footer } from "@/components/landing/footer";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("mexicano");

  return (
    <main className="min-h-dvh bg-background relative overflow-x-clip flex flex-col items-center bg-linear-to-br from-primary/10 via-background to-primary/10">
      <MenuHeader />
      <MenuNav
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <MenuGrid activeCategory={activeCategory} />
      <div className="w-full max-w-xs mx-auto flex items-center gap-4 py-2">
        <span className="flex-1 h-px bg-linear-to-r from-transparent to-border" />
        <span className="text-border text-xs">✦</span>
        <span className="flex-1 h-px bg-linear-to-l from-transparent to-border" />
      </div>
      <Footer />
    </main>
  );
}
