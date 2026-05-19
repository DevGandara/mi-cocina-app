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
  MenuIconKey,
  MenuSection,
} from "./menu.types";

import type { MenuCategoryId } from "./menu.types";

export const menuCategories = [
  mexicanoCategory,
  internacionalCategory,
  platillosCategory,
  especialCategory,
  desayunosCategory,
  postresCategory,
];

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
