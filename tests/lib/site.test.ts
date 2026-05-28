import { describe, expect, it, vi } from "vitest";

describe("site config module", () => {
  it("normalizes NEXT_PUBLIC_SITE_URL without protocol", async () => {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "micocina.mx");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", undefined);
    vi.stubEnv("VERCEL_URL", undefined);

    const { getSiteUrl, hasPublicSiteUrl, siteUrl } = await import("@/lib/site");

    expect(hasPublicSiteUrl).toBe(true);
    expect(siteUrl).toBe("https://micocina.mx");
    expect(getSiteUrl("/menu")).toBe("https://micocina.mx/menu");

    vi.unstubAllEnvs();
  });

  it("falls back to localhost when there is no valid public url", async () => {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "nota url valida");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", undefined);
    vi.stubEnv("VERCEL_URL", undefined);

    const { hasPublicSiteUrl, siteUrl } = await import("@/lib/site");

    expect(hasPublicSiteUrl).toBe(false);
    expect(siteUrl).toBe("http://localhost:3000");

    vi.unstubAllEnvs();
  });

  it("throws in production when NEXT_PUBLIC_SITE_URL is invalid", async () => {
    vi.resetModules();
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "nota url valida");
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", undefined);
    vi.stubEnv("VERCEL_URL", undefined);

    await expect(import("@/lib/site")).rejects.toThrow(
      "NEXT_PUBLIC_SITE_URL must be a valid URL or bare domain in production.",
    );

    vi.unstubAllEnvs();
  });

  it("throws in production when no public url can be resolved", async () => {
    vi.resetModules();
    vi.stubEnv("NODE_ENV", "production");
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", undefined);
    vi.stubEnv("VERCEL_PROJECT_PRODUCTION_URL", undefined);
    vi.stubEnv("VERCEL_URL", undefined);

    await expect(import("@/lib/site")).rejects.toThrow(
      "A public site URL is required in production. Set NEXT_PUBLIC_SITE_URL or rely on Vercel's production URL.",
    );

    vi.unstubAllEnvs();
  });
});
