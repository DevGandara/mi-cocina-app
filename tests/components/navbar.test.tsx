import type { AnchorHTMLAttributes, ReactNode } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Navbar } from "@/components/navbar";

const pathnameMock = vi.fn();

vi.mock("next/image", () => ({
  default: ({ alt }: { alt?: string }) => <div aria-label={alt ?? "decorative image"} />,
}));

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

vi.mock("next/navigation", () => ({
  usePathname: () => pathnameMock(),
}));

describe("Navbar", () => {
  it("marks menu link as active on menu route", () => {
    pathnameMock.mockReturnValue("/menu");

    render(<Navbar />);

    const menuLinks = screen.getAllByRole("link", { name: "Menú" });

    expect(menuLinks[0]?.className).toContain("bg-primary");
    expect(menuLinks[1]?.className).toContain("bg-primary/15");
  });

  it("opens and closes the mobile menu", () => {
    pathnameMock.mockReturnValue("/");

    render(<Navbar />);

    const toggle = screen.getAllByRole("button", { name: "Menú" })[0]!;

    expect(toggle).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(screen.getAllByRole("link", { name: "Inicio" })[1]!);

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });
});
