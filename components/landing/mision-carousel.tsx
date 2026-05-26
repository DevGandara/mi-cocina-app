"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function MisionCarousel() {
  return (
    <Carousel
      className="w-full rounded-xl"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent className="ml-0 sm:-ml-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <CarouselItem key={i} className="basis-full pl-0 sm:pl-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-6/5">
              <Image
                src={`/carrousel-${i}.webp`}
                alt="Servicio de catering"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 hidden sm:inline-flex md:-left-4" />
      <CarouselNext className="right-3 hidden sm:inline-flex md:-right-4" />
    </Carousel>
  );
}
