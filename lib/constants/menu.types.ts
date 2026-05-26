export interface Dish {
  name: string;
  description: string;
  image?: string;
  variants?: string[];
}

export interface MenuSection {
  title: string;
  dishes: Dish[];
}

export type MenuCategoryId =
  | "mexicano"
  | "internacional"
  | "platillos"
  | "especial"
  | "desayunos"
  | "canapes"
  | "postres";

export type MenuIconKey =
  | "flag"
  | "earth"
  | "hand-platter"
  | "sparkles"
  | "sun"
  | "sandwich"
  | "cake-slice";

interface BaseMenuCategory {
  id: MenuCategoryId;
  label: string;
  iconKey: MenuIconKey;
}

export interface MenuSectionedCategory extends BaseMenuCategory {
  contentType: "sections";
  sections: readonly MenuSection[];
  dishes?: never;
}

export interface MenuDishListCategory extends BaseMenuCategory {
  contentType: "dishes";
  dishes: readonly Dish[];
  sections?: never;
}

export type MenuCategory = MenuSectionedCategory | MenuDishListCategory;

export interface MenuCategorySummary {
  id: MenuCategoryId;
  label: string;
  iconKey: MenuIconKey;
}

export function createSectionedCategory(
  category: Omit<MenuSectionedCategory, "contentType">,
): MenuSectionedCategory {
  return {
    ...category,
    contentType: "sections",
  };
}

export function createDishListCategory(
  category: Omit<MenuDishListCategory, "contentType">,
): MenuDishListCategory {
  return {
    ...category,
    contentType: "dishes",
  };
}

export function hasMenuSections(
  category: MenuCategory,
): category is MenuSectionedCategory {
  return category.contentType === "sections";
}

export function hasMenuDishes(
  category: MenuCategory,
): category is MenuDishListCategory {
  return category.contentType === "dishes";
}

export function getMenuDishCount(category: MenuCategory) {
  return hasMenuSections(category)
    ? category.sections.reduce((sum, section) => sum + section.dishes.length, 0)
    : category.dishes.length;
}
