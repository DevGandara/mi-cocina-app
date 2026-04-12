"use client";

import { menuCategories, Dish } from "./menu-data";
import { useRef, useState } from "react";
import Image from "next/image";

interface MenuGridProps {
  activeCategory: string;
}

const VARIANTS_LIMIT = 4;

const variantPillClass =
  "text-xs text-muted-foreground bg-primary/20 px-2 py-0.5 rounded-full border border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300";

function VariantList({ dishName, variants }: { dishName: string; variants: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = variants.length > VARIANTS_LIMIT;
  const always = variants.slice(0, VARIANTS_LIMIT);
  const extra = variants.slice(VARIANTS_LIMIT);

  return (
    <div className="my-2 flex flex-col gap-1.5">
      {/* Always-visible first row */}
      <div className="flex items-center gap-2 capitalize flex-wrap">
        {always.map((variant, index) => (
          <span key={`${dishName}-always-${index}`} className={variantPillClass}>
            {variant}
          </span>
        ))}
        {hasMore && (
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded((prev) => !prev); }}
            className="text-xs text-primary border border-primary/40 bg-primary/10 hover:bg-primary hover:text-primary-foreground px-2 py-0.5 rounded-full transition-colors duration-300 cursor-pointer"
          >
            {expanded ? "Ver menos" : `+${extra.length} más`}
          </button>
        )}
      </div>

      {/* Extra variants — animated with CSS grid-rows trick */}
      {hasMore && (
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden flex flex-wrap gap-2 capitalize">
            {extra.map((variant, index) => (
              <span key={`${dishName}-extra-${index}`} className={variantPillClass}>
                {variant}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DishCard({ dish }: { dish: Dish }) {
  return (
    <div
      className={`group relative rounded-2xl border border-border/50 bg-white/5 backdrop-blur-sm
                 transition-all duration-300 overflow-hidden flex flex-col
                 hover:bg-primary/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10
                 hover:-translate-y-1 ${dish.image ? "h-full min-h-48" : "p-5 md:p-6"}`}
    >
      {/* Decorative accent line - only show for cards without images or position differently, for now let's keep it but adjust for padding */}
      {!dish.image && (
        <div
          className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}

      {/* Image Section */}
      {dish.image && (
        <div className="relative w-full basis-1/2 min-h-48 overflow-hidden shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle gradient overlay to blend image into the card */}
          <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60" />
        </div>
      )}

      {/* Content Section */}
      <div
        className={`flex items-start gap-3 ${dish.image ? "basis-1/2 p-5 md:p-6" : ""}`}
      >
        <div className="mt-[6px] w-2 h-2 rounded-full bg-primary/60 shrink-0 group-hover:bg-primary group-hover:shadow-[0_0_8px_var(--primary)] transition-all duration-300" />
        <div className="flex flex-col">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
            {dish.name}
          </h3>
          {dish.variants && (
            <VariantList dishName={dish.name} variants={dish.variants} />
          )}
          <p className="text-sm text-muted-foreground my-0.5 leading-relaxed">
            {dish.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MenuGrid({ activeCategory }: MenuGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const category = menuCategories.find((c) => c.id === activeCategory);

  if (!category) return null;

  // Count total dishes across sections or flat dishes
  const totalDishes = category.sections
    ? category.sections.reduce((sum, s) => sum + s.dishes.length, 0)
    : (category.dishes?.length ?? 0);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Category title */}
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full
                        border border-primary/30 bg-primary/10 text-primary
                        shadow-[0_0_20px_var(--primary-foreground)] backdrop-blur-sm"
        >
          {category.icon}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Menú <span className="text-primary">{category.label}</span>
        </h2>
        <p className="text-muted-foreground mt-2">
          {totalDishes} guisados disponibles
        </p>
      </div>

      <div
        key={activeCategory}
        ref={containerRef}
        className="animate-in fade-in slide-in-from-bottom-4 duration-400"
      >
        {/* Render sections if available */}
        {category.sections ? (
          <div className="space-y-12">
            {category.sections.map((section, sIdx) => (
              <div key={`${activeCategory}-section-${sIdx}`}>
                {/* Section title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent to-primary/30" />
                  <h3 className="text-lg md:text-xl font-bold text-primary tracking-wide uppercase">
                    {section.title}
                  </h3>
                  <div className="h-px flex-1 bg-linear-to-l from-transparent to-primary/30" />
                </div>
                {/* Section dishes grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {section.dishes.map((dish, dIdx) => (
                    <DishCard
                      key={`${activeCategory}-${sIdx}-${dIdx}`}
                      dish={dish}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Render flat dishes */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {category.dishes?.map((dish, index) => (
              <DishCard key={`${activeCategory}-${index}`} dish={dish} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
