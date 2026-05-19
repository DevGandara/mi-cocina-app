import { desayunosCategory } from "./menu-data/desayunos";
import { especialCategory } from "./menu-data/especial";
import { internacionalCategory } from "./menu-data/internacional";
import { mexicanoCategory } from "./menu-data/mexicano";
import { platillosCategory } from "./menu-data/platillos";
import { postresCategory } from "./menu-data/postres";

export type {
  Dish,
  MenuCategory,
  MenuCategoryId,
  MenuCategorySummary,
  MenuIconKey,
  MenuSection,
} from "./menu.types";

import {
  getMenuDishCount,
  hasMenuDishes,
  hasMenuSections,
  type MenuCategory,
  type MenuCategoryId,
} from "./menu.types";

function validateMenuCategories(categories: readonly MenuCategory[]) {
  const ids = new Set<MenuCategoryId>();

  for (const category of categories) {
    if (ids.has(category.id)) {
      throw new Error(`Duplicate menu category id: ${category.id}`);
    }

    ids.add(category.id);

    if (hasMenuSections(category) && category.sections.length === 0) {
      throw new Error(`Sectioned menu category has no sections: ${category.id}`);
    }

    if (hasMenuDishes(category) && category.dishes.length === 0) {
      throw new Error(`Dish menu category has no dishes: ${category.id}`);
    }
  }
}

export const menuCategories = [
  mexicanoCategory,
  internacionalCategory,
  platillosCategory,
  especialCategory,
  desayunosCategory,
  postresCategory,
] as const satisfies readonly MenuCategory[];

validateMenuCategories(menuCategories);

export const menuCategorySummaries = menuCategories.map(
  ({ id, label, iconKey }) => ({
    id,
    label,
    iconKey,
  }),
);

export function isMenuCategoryId(value: string): value is MenuCategoryId {
  return menuCategories.some((category) => category.id === value);
}

export function getMenuCategory(categoryId: MenuCategoryId) {
  return menuCategories.find((category) => category.id === categoryId);
}

export { getMenuDishCount, hasMenuDishes, hasMenuSections };
