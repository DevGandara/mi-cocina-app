import { describe, expect, it } from "vitest";
import {
  getMenuCategory,
  getMenuDishCount,
  isMenuCategoryId,
  menuCategories,
} from "@/lib/constants/menu";

describe("menu domain", () => {
  it("validates known category ids", () => {
    expect(isMenuCategoryId("mexicano")).toBe(true);
    expect(isMenuCategoryId("inexistente")).toBe(false);
  });

  it("returns categories with at least one dish", () => {
    for (const category of menuCategories) {
      expect(getMenuDishCount(category)).toBeGreaterThan(0);
    }
  });

  it("returns the requested category", () => {
    const category = getMenuCategory("postres");

    expect(category?.label).toBeDefined();
    expect(category?.id).toBe("postres");
  });
});
