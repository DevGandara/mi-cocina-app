import { describe, expect, it } from "vitest";
import {
  defaultMenuCategory,
  resolveActiveCategory,
} from "@/lib/menu-page";

describe("menu page category resolution", () => {
  it("uses the default category when there is no param", () => {
    expect(resolveActiveCategory()).toBe(defaultMenuCategory);
  });

  it("falls back to the default category for invalid params", () => {
    expect(resolveActiveCategory("inexistente")).toBe(defaultMenuCategory);
  });

  it("keeps valid categories", () => {
    expect(resolveActiveCategory("postres")).toBe("postres");
  });
});
