import Image from "next/image";

export function MenuHeader() {
  return (
    <section className="relative flex min-h-[42vh] w-full items-center justify-center overflow-hidden sm:min-h-[50vh]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/menu-collage.webp"
          alt="Collage de platillos"
          fill
          sizes="100vw"
          className="object-cover scale-110 blur-[2px] brightness-[0.72] saturate-[0.9]"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/78 via-black/58 to-black/84" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_48%)]" />
      </div>

      <div className="relative z-10 mt-8 px-4 py-20 text-center sm:py-24 md:py-32">
        <div className="relative mb-6 inline-flex sm:mb-8">
          <div className="absolute -inset-4 rounded-[2.75rem] bg-primary/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/30 bg-white/12 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.38)] backdrop-blur-md">
            <div className="absolute inset-0 bg-linear-to-br from-primary/35 via-white/30 to-transparent" />
            <div className="relative rounded-[1.75rem] bg-white/90 px-6 py-4 ring-1 ring-black/5 sm:px-7">
              <Image
                src="/mi-cocina-logo.webp"
                alt="Logo de Mi Cocina"
                width={220}
                height={74}
                className="h-16 w-auto object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:h-20 md:h-24"
                priority
              />
            </div>
          </div>
        </div>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-6xl lg:text-7xl">
          Nuestros{" "}
          <span className="text-primary drop-shadow-[0_0_30px_var(--primary)]">
            Menús
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg md:text-xl">
          Descubre nuestra variedad de platillos preparados con los mejores
          ingredientes y recetas tradicionales
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-background to-transparent z-10" />
    </section>
  );
}
