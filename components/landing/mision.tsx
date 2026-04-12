"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/landing/reveal";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export const Mision = () => {
  return (
    <section className="py-12" id="mision">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-24 md:grid-cols-2">
          {/* Texto */}
          <div className="space-y-12">
            <Reveal direction="left">
              <article className="space-y-2">
                <h2 className="text-4xl font-bold text-primary underline underline-offset-8">
                  Misión
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Somos una empresa de respuesta sensible y rápida, dedicada a la
                  elaboración de platillos gastronómicos que por nuestros valores:
                  la limpieza, calidad en el servicio, calidez, buen trato y
                  precios accesibles sobrepasamos las expectativas de nuestros
                  clientes.
                </p>
              </article>
            </Reveal>

            <Reveal direction="left" delay={140}>
              <article className="space-y-2">
                <h2 className="text-4xl font-bold text-primary underline underline-offset-8">
                  Visión
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ser una empresa líder en la rama de banquetes, reconocida por la
                  calidad de nuestros platillos, el servicio de excelencia y la
                  confianza que generamos en nuestros clientes.
                </p>
              </article>
            </Reveal>
          </div>

          {/* Carrusel */}
          <Reveal direction="right" delay={120} className="w-full max-w-xl justify-self-center">
            <Carousel
              className="w-full rounded-xl"
              plugins={[
                Autoplay({
                  delay: 5000,
                }),
              ]}
            >
              <CarouselContent>
                {[1, 2, 3].map((i) => (
                  <CarouselItem key={i} className="basis-full">
                    <div className="relative w-full aspect-6/5">
                      <Image
                        src={`/carrousel-${i}.webp`}
                        alt="Servicio de catering"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover rounded-xl"
                        priority={i === 1}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
