import { isMenuCategoryId, type MenuCategoryId } from "@/lib/constants/menu";

export const defaultMenuCategory: MenuCategoryId = "mexicano";

export function resolveActiveCategory(requestedCategory?: string): MenuCategoryId {
  return requestedCategory && isMenuCategoryId(requestedCategory)
    ? requestedCategory
    : defaultMenuCategory;
}
