import { Heart } from "lucide-react";
import Image from "next/image";

export function TributeSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16">
      <div className="relative max-w-3xl mx-auto">
        {/* Soft background glow */}
        <div className="absolute -inset-8 bg-linear-to-b from-amber-100/30 via-transparent to-amber-100/20 rounded-[2rem] blur-3xl -z-10" />

        <div className="relative bg-card/70 backdrop-blur-sm border border-y-0 border-r-amber-200/40 border-l-amber-200/40 rounded-2xl overflow-hidden shadow-xl">
          {/* Top decorative gold line */}
          <div className="h-1  bg-linear-to-r from-transparent via-amber-400/80 to-transparent" />

          <div className="p-8 md:p-12 flex flex-col items-center text-center space-y-8">
            {/* Decorative cross / memorial icon */}
            <div className="flex items-center gap-3 text-amber-600/70">
              <span className="h-px w-12 bg-amber-400/50" />
              <span className="text-xs tracking-[0.3em] uppercase font-medium">
                In Memoriam
              </span>
              <span className="h-px w-12 bg-amber-400/50" />
            </div>

            {/* Photo placeholder */}
            <div className="relative">
              <div className="relative size-36 md:size-44 rounded-full border-4 border-amber-300/50 shadow-lg overflow-hidden bg-amber-50">
                <Image
                  src="/luzma.jpeg"
                  alt="Ma. de la Luz Vázquez Padilla"
                  fill={true}
                  className="object-cover"
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-amber-200/30 -z-10" />
              <div className="absolute -inset-4 rounded-full border border-amber-100/20 -z-10" />
            </div>

            {/* Name */}
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground tracking-tight">
                Ma. de la Luz Vázquez Padilla
              </h2>
              <p className="text-amber-700/70 font-medium text-lg tracking-wide">
                1953 — 2025
              </p>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4">
              <span className="h-px w-16 bg-linear-to-r from-transparent to-amber-300/50" />
              <span className="text-amber-400/80 text-xl">✦</span>
              <span className="h-px w-16 bg-linear-to-l from-transparent to-amber-300/50" />
            </div>

            {/* Tribute message */}
            <div className="space-y-4 max-w-xl">
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
                &ldquo;Cada platillo que servimos lleva un pedacito de tu
                corazón, de tus manos incansables y del amor infinito que
                pusiste en cada receta.&rdquo;
              </p>
              <p className="text-muted-foreground/80 text-sm md:text-base leading-relaxed">
                Fundadora de{" "}
                <span className="font-semibold text-foreground">Mi Cocina</span>
                , &ldquo;Luzma&rdquo; dedicó su vida a compartir el sabor de la
                cocina tradicional con quienes más quería. Su legado vive en
                cada evento que celebramos, en cada familia que alimentamos y en
                la pasión con la que seguimos cocinando en su honor.
              </p>
            </div>

            {/* Closing sentiment */}
            <span className="flex items-center justify-center content-center gap-2">
              <p className="text-amber-700/60 text-sm font-medium tracking-wide">
                Siempre en nuestro corazón
              </p>
              <Heart className="size-4 text-amber-700/60" />
            </span>
          </div>

          {/* Bottom decorative gold line */}
          <div className="h-1 bg-linear-to-r from-transparent via-amber-400/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
