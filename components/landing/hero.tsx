import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, ArrowDown } from "lucide-react";
import { Reveal } from "@/components/landing/reveal";
import { WhatsAppIcon } from "../icons/WhatsappIcon";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <section className="container min-h-screen mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-24 md:pt-0 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <div className="landing-intro landing-intro-delay-1 flex justify-center lg:justify-start ">
              <Image
                src="/mi-cocina-logo.png"
                alt="Mi Cocina Logo"
                width={150}
                height={150}
                className="object-contain drop-shadow-md"
              />
            </div>
            <div className="landing-intro landing-intro-delay-2">
              <h2 className="text-primary font-medium tracking-wide uppercase text-sm md:text-base">
                Experiencias Gastronómicas Inolvidables
              </h2>
            </div>
            <div className="landing-intro landing-intro-delay-3">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Banquetes y{" "}
                <span className="text-primary">sabor tradicional</span> para
                momentos especiales
              </h1>
            </div>
            <div className="landing-intro landing-intro-delay-4">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                En <span className="font-bold">Mi Cocina</span>, creamos
                experiencias gastronómicas únicas para bodas, eventos
                empresariales y celebraciones familiares. Calidad, sabor y
                presentación que superan expectativas.
              </p>
            </div>
          </div>

          <div className="landing-intro landing-intro-delay-5 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              variant={"default"}
              size={"lg"}
              className="px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
            >
              <a
                href={siteConfig.whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar Cotizacion
              </a>
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

          <div className="landing-intro landing-intro-delay-6 pt-4 flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.instagramUrl}
                className="p-2 rounded-full bg-linear-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] cursor-pointer hover:brightness-125 hover:scale-110 transition-all "
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="text-white shrink-0" size={20} />
              </a>
              <a
                href={siteConfig.whatsappUrl}
                className="p-2 rounded-full bg-linear-to-br from-[#25D366] via-[#31ca69] to-[#42a365] cursor-pointer hover:brightness-125 hover:scale-110 transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="text-white shrink-0" size={20} />
              </a>
              <a
                href={siteConfig.telUrl}
                className="p-2 rounded-full bg-linear-to-br from-[#2898ee] via-[#107acc] to-[#0cbccc] cursor-pointer hover:brightness-125 hover:scale-110 transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                <Phone className="text-white shrink-0" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="landing-intro landing-intro-delay-4 relative w-full max-w-[500px] mx-auto lg:max-w-none">
          <div className="relative aspect-square md:aspect-4/3 lg:aspect-square w-full">
            <div className="landing-hero-orb absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl -z-10 scale-90" />
            <div className="landing-hero-ring absolute inset-[12%] rounded-full border border-primary/15 -z-10" />
            <Image
              src="/catering-service-bro.svg"
              alt="Servicio de Catering Profesional"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="landing-hero-illustration object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 animate-blurred-fade-in"
              priority
            />
          </div>
        </div>
      </section>
      <Reveal delay={180} className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-6">
        <span className="p-2 rounded-full border border-white/20 shadow-lg shadow-black/10 animate-bounce bg-linear-to-br from-primary/20 to-white">
          <ArrowDown className="text-black z-50" size={20} />
        </span>
      </Reveal>
    </div>
  );
}
