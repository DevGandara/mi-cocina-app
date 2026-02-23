import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export const Mision = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-24 md:grid-cols-2">
          {/* Texto */}
          <div className="space-y-12">
            <article className="space-y-2">
              <h2 className="text-4xl font-bold text-primary">Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Somos una empresa de respuesta sensible y rápida, dedicada a la
                elaboración de platillos gastronómicos que por nuestros valores:
                la limpieza, calidad en el servicio, calidez, buen trato y
                precios accesibles sobrepasamos las expectativas de nuestros
                clientes.
              </p>
            </article>

            <article className="space-y-2">
              <h2 className="text-4xl font-bold text-primary">Visión</h2>
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/30 rounded-full" />
              <p className="text-muted-foreground leading-relaxed">
                Ser una empresa líder en la rama de banquetes, reconocida por la
                calidad de nuestros platillos, el servicio de excelencia y la
                confianza que generamos en nuestros clientes.
              </p>
            </article>
          </div>

          {/* Carrusel */}
          <Carousel className="w-full max-w-xl justify-self-center">
            <CarouselContent>
              {[1, 2, 3].map((i) => (
                <CarouselItem key={i} className="basis-full">
                  <div className="relative w-full aspect-6/5">
                    <Image
                      src="/Imagen_Buffet-1.webp"
                      alt="Servicio de catering"
                      fill
                      className="object-cover rounded-lg"
                      priority={i === 1}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
