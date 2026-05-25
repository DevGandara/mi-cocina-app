import type { AnchorHTMLAttributes, ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { MenuNav } from "@/components/menu/menu-nav";

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: ReactNode;
    href?: string;
  }) => (
    <a href={href ?? "#"} {...props}>
      {children}
    </a>
  ),
}));

describe("MenuNav", () => {
  it("marks the active category with aria-current", () => {
    render(<MenuNav activeCategory="postres" />);

    expect(screen.getByRole("link", { name: /postres/i })).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getByRole("link", { name: /mexicano/i })).not.toHaveAttribute(
      "aria-current",
    );
  });
});
