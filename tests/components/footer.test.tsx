import type { AnchorHTMLAttributes, ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Footer } from "@/components/landing/footer";
import { siteConfig } from "@/lib/site";

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

describe("Footer", () => {
  it("renders the embedded map and main contact links", () => {
    render(<Footer />);

    expect(
      screen.getByTitle("Mapa de ubicacion de Mi Cocina"),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: siteConfig.phoneDisplay })).toHaveAttribute(
      "href",
      siteConfig.telUrl,
    );
    expect(screen.getByRole("link", { name: "WhatsApp" })).toHaveAttribute(
      "href",
      siteConfig.whatsappUrl,
    );
    expect(screen.getByRole("link", { name: siteConfig.instagramHandle })).toHaveAttribute(
      "href",
      siteConfig.instagramUrl,
    );
  });
});
