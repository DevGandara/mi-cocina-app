import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Phone } from "lucide-react";
import { WhatsAppIcon } from "../icons/WhatsappIcon";

export function Hero() {
  return (
    <section className="container min-h-screen mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 text-center lg:text-left">
        <div className="space-y-4">
          <h2 className="text-primary font-medium tracking-wide uppercase text-sm md:text-base">
            Experiencias Gastronómicas Inolvidables
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
            Banquetes y <span className="text-primary">sabor tradicional</span>{" "}
            para momentos especiales
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            En <span className="font-bold">Mi Cocina</span>, creamos
            experiencias gastronómicas únicas para bodas, eventos empresariales
            y celebraciones familiares. Calidad, sabor y presentación que
            superan expectativas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button
            asChild
            variant={"default"}
            size={"lg"}
            className="px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
          >
            <Link href="/cotizar">Solicitar Cotización</Link>
          </Button>
          <Button
            asChild
            size={"lg"}
            variant={"outline"}
            className="border border-border px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/35 active:scale-95"
          >
            <Link href="/menu">Ver Menús y Paquetes</Link>
          </Button>
        </div>

        <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/micocina.ags?igsh=aWhyYW5nc2NsZTQ2"
              className="p-2 rounded-full bg-linear-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] cursor-pointer hover:brightness-125 hover:scale-110 transition-all "
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-white shrink-0" size={20} />
            </a>
            <a
              href="https://wa.me/524491942472"
              className="p-2 rounded-full bg-linear-to-br from-[#25D366] via-[#31ca69] to-[#42a365] cursor-pointer hover:brightness-125 hover:scale-110 transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="text-white shrink-0" size={20} />
            </a>
            <a
              href="tel:+524491942472"
              className="p-2 rounded-full bg-linear-to-br from-[#2898ee] via-[#107acc] to-[#0cbccc] cursor-pointer hover:brightness-125 hover:scale-110 transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="text-white shrink-0" size={20} />
            </a>
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
  );
}
