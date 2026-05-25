import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MenuGrid } from "@/components/menu/menu-grid";

vi.mock("next/image", () => ({
  default: ({ alt }: { alt?: string }) => <div aria-label={alt ?? "decorative image"} />,
}));

describe("MenuGrid", () => {
  it("renders a compact variants label for dishes that have variants", () => {
    render(<MenuGrid activeCategory="mexicano" />);

    expect(screen.getByText(/guisados disponibles/i)).toBeInTheDocument();
    expect(screen.getAllByLabelText("Variantes").length).toBeGreaterThan(0);
  });
});
