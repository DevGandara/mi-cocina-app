"use client";

import dynamic from "next/dynamic";

const MisionCarousel = dynamic(
  () =>
    import("@/components/landing/mision-carousel").then(
      (module) => module.MisionCarousel,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-[4/3] w-full rounded-xl bg-muted/40 sm:aspect-6/5" />
    ),
  },
);

export function MisionCarouselIsland() {
  return <MisionCarousel />;
}
