import { Reveal } from "@/components/landing/reveal";
import { MisionCarouselIsland } from "@/components/landing/mision-carousel-island";

export const Mision = () => {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" id="mision">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:gap-16 lg:gap-20 md:grid-cols-2">
          {/* Texto */}
          <div className="space-y-8 md:space-y-12">
            <Reveal direction="left">
              <article className="space-y-3 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary underline underline-offset-8">
                  Misión
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Somos una empresa de respuesta sensible y rápida, dedicada a la
                  elaboración de platillos gastronómicos que por nuestros valores:
                  la limpieza, calidad en el servicio, calidez, buen trato y
                  precios accesibles sobrepasamos las expectativas de nuestros
                  clientes.
                </p>
              </article>
            </Reveal>

            <Reveal direction="left" delay={140}>
              <article className="space-y-3 text-center md:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary underline underline-offset-8">
                  Visión
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Ser una empresa líder en la rama de banquetes, reconocida por la
                  calidad de nuestros platillos, el servicio de excelencia y la
                  confianza que generamos en nuestros clientes.
                </p>
              </article>
            </Reveal>
          </div>

          {/* Carrusel */}
          <Reveal direction="right" delay={120} className="w-full max-w-xl justify-self-center">
            <MisionCarouselIsland />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
