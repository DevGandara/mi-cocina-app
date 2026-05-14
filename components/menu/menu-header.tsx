import Image from "next/image";

export function MenuHeader() {
  return (
    <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/menu-collage.png"
          alt="Collage de platillos"
          fill
          sizes="100vw"
          className="object-cover scale-110 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-4 py-24 md:py-32 mt-8">
        <div className="inline-block px-4 py-1 mb-6 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
          <span className="text-sm text-white/80 tracking-widest uppercase font-medium">
            Mi Cocina
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4 drop-shadow-lg">
          Nuestros{" "}
          <span className="text-primary drop-shadow-[0_0_30px_var(--primary)]">
            Menús
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
          Descubre nuestra variedad de platillos preparados con los mejores
          ingredientes y recetas tradicionales
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-background to-transparent z-10" />
    </section>
  );
}
