"use client";

import { menuCategories } from "./menu-data";
import { useRef } from "react";

interface MenuGridProps {
  activeCategory: string;
}

export function MenuGrid({ activeCategory }: MenuGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const category = menuCategories.find((c) => c.id === activeCategory);

  // Trigger a CSS animation on category change via key prop
  if (!category) return null;

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Category title */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full
                        border border-primary/30 bg-primary/10 text-primary
                        shadow-[0_0_20px_var(--primary-foreground)] backdrop-blur-sm">
          {category.icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Menú{" "}
          <span className="text-primary">{category.label}</span>
        </h2>
        <p className="text-muted-foreground mt-2">
          {category.dishes.length} platillos disponibles
        </p>
      </div>

      {/* Dish grid — key forces re-mount for CSS animation */}
      <div
        key={activeCategory}
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6
                   animate-in fade-in slide-in-from-bottom-4 duration-400"
      >
        {category.dishes.map((dish, index) => (
          <div
            key={`${activeCategory}-${index}`}
            className="group relative rounded-2xl border border-border/50 bg-white/5 backdrop-blur-sm
                       p-5 md:p-6 transition-all duration-300
                       hover:bg-primary/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10
                       hover:-translate-y-1"
          >
            {/* Decorative accent line */}
            <div className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start gap-3">
              <div className="mt-1 w-2 h-2 rounded-full bg-primary/60 shrink-0 group-hover:bg-primary group-hover:shadow-[0_0_8px_var(--primary)] transition-all duration-300" />
              <div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                  {dish.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

