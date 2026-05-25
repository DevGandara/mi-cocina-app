import type { AnchorHTMLAttributes, ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Hero } from "@/components/landing/hero";

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

vi.mock("@/components/landing/reveal", () => ({
  Reveal: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

describe("Hero", () => {
  it("exposes accessible names for icon-only links", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: "Abrir Instagram de Mi Cocina" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Abrir WhatsApp de Mi Cocina" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Llamar a Mi Cocina" })).toBeInTheDocument();
  });
});
