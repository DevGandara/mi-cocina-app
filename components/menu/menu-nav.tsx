"use client";

import { menuCategories } from "./menu-data";

interface MenuNavProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function MenuNav({ activeCategory, onCategoryChange }: MenuNavProps) {
  return (
    <div className="sticky top-16 md:top-32 z-40 w-full py-4 flex justify-center px-4">
      <nav
        className="flex gap-1.5 overflow-x-auto scrollbar-hide snap-x snap-mandatory
                   px-3 py-2 rounded-full border border-white/20 bg-white/15 backdrop-blur-md shadow-lg shadow-black/10"
        role="tablist"
        aria-label="Categorías del menú"
      >
        {menuCategories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(category.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                whitespace-nowrap snap-start transition-all duration-300 cursor-pointer
                shrink-0
                ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }
              `}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
