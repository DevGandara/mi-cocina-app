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
          className="object-cover scale-110 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 mt-8 px-4 py-20 text-center sm:py-24 md:py-32">
        <div className="mb-6 inline-flex rounded-[2rem] border border-white/12 bg-white/6 px-6 py-4 shadow-lg shadow-black/10 backdrop-blur-sm sm:mb-8 sm:px-7">
          <Image
            src="/mi-cocina-logo.webp"
            alt="Logo de Mi Cocina"
            width={220}
            height={74}
            className="h-16 w-auto object-contain sm:h-20 md:h-24"
            priority
          />
        </div>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-6xl lg:text-7xl">
          Nuestros{" "}
          <span className="text-primary drop-shadow-[0_0_30px_var(--primary)]">
            Menús
          </span>
        </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl">
          Descubre nuestra variedad de platillos preparados con los mejores
          ingredientes y recetas tradicionales
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-background to-transparent z-10" />
    </section>
  );
}
