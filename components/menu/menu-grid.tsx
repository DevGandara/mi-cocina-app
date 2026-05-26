import Image from "next/image";
import { Tags } from "lucide-react";
import {
  getMenuDishCount,
  getMenuCategory,
  hasMenuSections,
  type Dish,
  type MenuCategoryId,
} from "@/lib/constants/menu";
import { MenuCategoryIcon } from "./menu-icons";

interface MenuGridProps {
  activeCategory: MenuCategoryId;
}

const VARIANTS_LIMIT = 3;

const variantPillClass =
  "inline-flex items-center rounded-full border border-primary/15 bg-primary/6 px-1.5 py-0.5 text-[10px] font-medium tracking-[0.08em] text-foreground/70 uppercase";

function VariantList({
  dishName,
  variants,
}: {
  dishName: string;
  variants: string[];
}) {
  const hasMore = variants.length > VARIANTS_LIMIT;
  const visible = variants.slice(0, VARIANTS_LIMIT);
  const extra = variants.slice(VARIANTS_LIMIT);

  return (
    <div className="mt-1.5 flex flex-col gap-1">
      <div className="flex flex-wrap items-center gap-1.5 capitalize">
        <span
          className="inline-flex items-center text-primary/75"
          aria-label="Variantes"
        >
          <Tags size={12} strokeWidth={2} />
        </span>
        {visible.map((variant, index) => (
          <span
            key={`${dishName}-visible-${index}`}
            className={variantPillClass}
          >
            {variant}
          </span>
        ))}

        {hasMore && (
          <details className="group/details contents">
            <summary className="list-none rounded-full border border-dashed border-primary/30 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary cursor-pointer">
              <span className="group-open/details:hidden">+{extra.length}</span>
              <span className="hidden group-open/details:inline">menos</span>
            </summary>

            <div className="basis-full grid grid-rows-[0fr] transition-[grid-template-rows,opacity,margin] duration-200 ease-out opacity-0 motion-reduce:transition-none group-open/details:mt-1 group-open/details:grid-rows-[1fr] group-open/details:opacity-100">
              <div className="overflow-hidden">
                <div className="flex flex-wrap gap-1.5 capitalize pt-0.5">
                  {extra.map((variant, index) => (
                    <span
                      key={`${dishName}-extra-${index}`}
                      className={variantPillClass}
                    >
                      {variant}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </details>
        )}
      </div>
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
      {!dish.image && (
        <div
          className="absolute top-0 left-6 right-6 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      )}

      {dish.image && (
        <div className="relative w-full basis-1/2 min-h-48 overflow-hidden shrink-0">
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-60" />
        </div>
      )}

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
          <p className="my-0.5 text-sm leading-relaxed text-muted-foreground">
            {dish.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MenuGrid({ activeCategory }: MenuGridProps) {
  const category = getMenuCategory(activeCategory);

  if (!category) {
    return null;
  }

  const totalDishes = getMenuDishCount(category);

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-10">
        <div
          className="inline-flex items-center justify-center w-14 h-14 mb-4 rounded-full
                        border border-primary/30 bg-primary/10 text-primary
                        shadow-[0_0_20px_var(--primary-foreground)] backdrop-blur-sm"
        >
          <MenuCategoryIcon iconKey={category.iconKey} size={20} />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Menu <span className="text-primary">{category.label}</span>
        </h2>
        <p className="text-muted-foreground mt-2">
          {totalDishes} guisados disponibles
        </p>
      </div>

      <div
        key={activeCategory}
        className="animate-in fade-in slide-in-from-bottom-4 duration-400"
      >
        {hasMenuSections(category) ? (
          <div className="space-y-12">
            {category.sections.map((section, sectionIndex) => (
              <div key={`${activeCategory}-section-${sectionIndex}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-linear-to-r from-transparent to-primary/30" />
                  <h3 className="text-lg md:text-xl font-bold text-primary tracking-wide uppercase">
                    {section.title}
                  </h3>
                  <div className="h-px flex-1 bg-linear-to-l from-transparent to-primary/30" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {section.dishes.map((dish, dishIndex) => (
                    <DishCard
                      key={`${activeCategory}-${sectionIndex}-${dishIndex}`}
                      dish={dish}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {category.dishes.map((dish, index) => (
              <DishCard key={`${activeCategory}-${index}`} dish={dish} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
