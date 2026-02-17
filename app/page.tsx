import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background relative overflow-hidden flex items-center">
      {/* Background decoration */}

      <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h2 className="text-primary font-medium tracking-wide uppercase text-sm md:text-base">
              Experiencias Gastronómicas Inolvidables
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Banquetes y <span className="text-primary">comida casera</span>{" "}
              para momentos especiales
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Creamos experiencias gastronómicas únicas para bodas, eventos
              empresariales y celebraciones familiares. Calidad, sabor y
              presentación que superan expectativas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant={"default"}
              size={"lg"}
              className=" px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25 cursor-pointer active:scale-95"
            >
              Solicitar Cotización
            </Button>
            <Button
              size={"lg"}
              variant={"ghost"}
              className=" border border-border px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25 cursor-pointer active:scale-95"
            >
              Ver Menús y Paquetes
            </Button>
          </div>

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Ingredientes Frescos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span>Servicio Premium</span>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[500px] mx-auto lg:max-w-none">
          <div className="relative aspect-square md:aspect-4/3 lg:aspect-square w-full">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10 scale-90" />
            <Image
              src="/catering-service-bro.svg"
              alt="Servicio de Catering Profesional"
              fill
              className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
