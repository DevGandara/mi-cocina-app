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
    <div className="sticky top-16 z-40 flex w-full justify-center px-4 py-3 md:top-32 md:py-4">
      <nav
        className="scrollbar-hide flex w-full max-w-full gap-1.5 overflow-x-auto snap-x snap-mandatory rounded-full border border-white/20 bg-white/55 px-2 py-2 backdrop-blur-md shadow-lg shadow-black/10 sm:w-auto sm:px-3"
        aria-label="Categorias del menu"
      >
        {menuCategorySummaries.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <Link
              key={category.id}
              href={`/menu?categoria=${category.id}`}
              aria-current={isActive ? "page" : undefined}
              className={`
                flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium
                whitespace-nowrap snap-start transition-all duration-300 cursor-pointer
                shrink-0 sm:px-4
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
