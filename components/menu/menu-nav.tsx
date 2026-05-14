import Link from "next/link";
import {
  menuCategorySummaries,
  type MenuCategoryId,
} from "@/lib/constants/menu";
import { MenuCategoryIcon } from "./menu-icons";

interface MenuNavProps {
  activeCategory: MenuCategoryId;
}

export function MenuNav({ activeCategory }: MenuNavProps) {
  return (
    <div className="sticky top-16 md:top-32 z-40 w-full py-4 flex justify-center px-4">
      <nav
        className="flex gap-1.5 overflow-x-auto scrollbar-hide snap-x snap-mandatory
                   px-3 py-2 rounded-full border border-white/20 bg-white/55 backdrop-blur-md shadow-lg shadow-black/10"
        role="tablist"
        aria-label="Categorias del menu"
      >
        {menuCategorySummaries.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <Link
              key={category.id}
              href={`/menu?categoria=${category.id}`}
              role="tab"
              aria-selected={isActive}
              aria-current={isActive ? "page" : undefined}
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
              <MenuCategoryIcon iconKey={category.iconKey} size={20} />
              <span>{category.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
