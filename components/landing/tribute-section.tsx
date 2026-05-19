import { Heart } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/landing/reveal";

export function TributeSection() {
  return (
    <section className="w-full px-4 py-8 md:px-6 md:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-5xl overflow-x-clip">
        <div className="relative mx-auto max-w-3xl">
          <div className="pointer-events-none absolute inset-x-4 -inset-y-8 rounded-[2rem] bg-linear-to-b from-amber-100/30 via-transparent to-amber-100/20 blur-3xl -z-10 md:inset-x-0" />

          <Reveal direction="scale" className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-y-0 border-r-amber-200/40 border-l-amber-200/40 bg-card/70 shadow-xl backdrop-blur-sm">
              <div className="h-1 bg-linear-to-r from-transparent via-amber-400/80 to-transparent" />

              <div className="flex flex-col items-center space-y-8 p-6 text-center sm:p-8 md:p-12">
                <Reveal delay={40} className="flex w-full justify-center">
                  <div className="flex items-center gap-2 text-amber-600/70 sm:gap-3">
                    <span className="h-px w-8 bg-amber-400/50 sm:w-12" />
                    <span className="text-xs font-medium uppercase tracking-[0.3em]">
                      In Memoriam
                    </span>
                    <span className="h-px w-8 bg-amber-400/50 sm:w-12" />
                  </div>
                </Reveal>

                <Reveal delay={120} direction="scale">
                  <div className="relative">
                    <div className="relative size-36 overflow-hidden rounded-full border-4 border-amber-300/50 bg-amber-50 shadow-lg md:size-44">
                      <Image
                        src="/luzma2.jpeg"
                        alt="Ma. de la Luz Vázquez Padilla"
                        fill
                        sizes="(max-width: 768px) 144px, 176px"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -inset-2 rounded-full border border-amber-200/30 -z-10" />
                    <div className="absolute -inset-4 rounded-full border border-amber-100/20 -z-10" />
                  </div>
                </Reveal>

                <Reveal delay={180}>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-serif font-bold tracking-tight text-foreground md:text-3xl">
                      Ma. de la Luz Vazquez Padilla
                    </h2>
                    <p className="text-lg font-medium tracking-wide text-amber-700/70">
                      1953 - 2025
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={220} className="flex w-full justify-center">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="h-px w-10 bg-linear-to-r from-transparent to-amber-300/50 sm:w-16" />
                    <span className="text-xl text-amber-400/80">*</span>
                    <span className="h-px w-10 bg-linear-to-l from-transparent to-amber-300/50 sm:w-16" />
                  </div>
                </Reveal>

                <Reveal delay={280}>
                  <div className="max-w-xl space-y-4 px-1 sm:px-0">
                    <p className="text-base italic leading-relaxed text-muted-foreground md:text-lg">
                      &ldquo;Cada platillo que servimos lleva un pedacito de tu
                      corazon, de tus manos incansables y del amor infinito que
                      pusiste en cada receta.&rdquo;
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground/80 md:text-base">
                      Fundadora de <span className="font-semibold text-foreground">Mi Cocina</span>,
                      &ldquo;Luzma&rdquo; dedico su vida a compartir el sabor de la cocina
                      tradicional con quienes mas queria. Su legado vive en cada
                      evento que celebramos, en cada familia que alimentamos y en la
                      pasion con la que seguimos cocinando en su honor.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={340} className="flex w-full justify-center">
                  <span className="flex items-center justify-center gap-2 text-center">
                    <p className="text-sm font-medium tracking-wide text-amber-700/60">
                      Siempre en nuestro corazon
                    </p>
                    <Heart className="size-4 text-amber-700/60" />
                  </span>
                </Reveal>
              </div>

              <div className="h-1 bg-linear-to-r from-transparent via-amber-400/80 to-transparent" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
