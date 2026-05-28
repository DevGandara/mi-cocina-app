import Link from "next/link";
import {
  Instagram,
  Phone,
  MapPin,
  Clock,
  Heart,
  ChevronRight,
  Utensils,
} from "lucide-react";
import { WhatsAppIcon } from "../icons/WhatsappIcon";
import { Button } from "../ui/button";
import { siteConfig } from "@/lib/site";
import { FooterMap } from "./footer-map";

export const Footer = () => {
  return (
    <footer className="w-full" id="contact">
      <div className="w-full">
        <div className="relative overflow-x-clip rounded-[2rem]">
          <div className="pointer-events-none absolute inset-x-0 -inset-y-8 rounded-[2rem] bg-linear-to-b from-amber-100/30 via-transparent to-amber-100/20 blur-3xl -z-10" />

          <div className="relative overflow-hidden rounded-2xl border border-y-0 border-r-amber-200/40 border-l-amber-200/40 bg-card/70 shadow-xl backdrop-blur-sm">
          <div className="h-1 bg-linear-to-r from-transparent via-primary/80 to-transparent" />

          {/* ── CTA Section ── */}
          <div className="flex flex-col items-center gap-4 px-5 py-8 text-center sm:px-6 md:px-10 md:py-10">
            <div className="flex items-center gap-2 text-amber-600/70">
              <span className="h-px w-10 bg-amber-400/40" />
              <Utensils className="size-4" />
              <span className="h-px w-10 bg-amber-400/40" />
            </div>
            <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-tight">
              ¿Listo para tu próximo evento?
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Platillos tradicionales y servicio profesional para hacer de tu
              celebración algo inolvidable.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-2 w-full sm:w-auto px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
            >
              <a
                href={siteConfig.whatsappEventQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Cotizar Evento
                <ChevronRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="mx-5 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent sm:mx-6 md:mx-10" />

          {/* ── Main content: 3-column on desktop ── */}
          <div className="grid grid-cols-1 items-start gap-8 px-5 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:gap-10 lg:px-10 lg:py-10">
            {/* Column 1 — Map + Address */}
            <div className="space-y-3 sm:col-span-2 lg:col-span-1">
              <h3 className="flex items-center gap-2 text-green-600/70">
                <MapPin className="size-3.5" />
                <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                  Ubicación
                </span>
              </h3>
              <FooterMap />
              <p className="text-muted-foreground text-xs">
                {siteConfig.addressDisplay}
              </p>
            </div>

            {/* Column 2 — Contact */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-green-600/70">
                <Phone className="size-3.5" />
                <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                  Contacto
                </span>
              </h3>
              <ul className="space-y-1.5">
                <li>
                  <a
                    href={siteConfig.telUrl}
                    className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group text-sm rounded-lg px-2 py-2 -mx-2 hover:translate-x-0.5"
                  >
                    <span className="p-1.5 rounded-full bg-linear-to-br from-[#2898ee] via-[#107acc] to-[#0cbccc] group-hover:scale-110 transition-transform shadow-sm">
                      <Phone className="size-3 text-white" />
                    </span>
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group text-sm rounded-lg px-2 py-2 -mx-2 hover:translate-x-0.5"
                  >
                    <span className="p-1.5 rounded-full bg-linear-to-br from-[#25D366] via-[#31ca69] to-[#42a365] group-hover:scale-110 transition-transform shadow-sm">
                      <WhatsAppIcon className="text-white" size={12} />
                    </span>
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group text-sm rounded-lg px-2 py-2 -mx-2 hover:translate-x-0.5"
                  >
                    <span className="p-1.5 rounded-full bg-linear-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] group-hover:scale-110 transition-transform shadow-sm">
                      <Instagram className="size-3 text-white" />
                    </span>
                    {siteConfig.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 — Nav + Schedule */}
            <div className="space-y-6 sm:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-green-600/70">
                  <ChevronRight className="size-3.5" />
                  <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                    Navegación
                  </span>
                </h3>
                <nav className="flex flex-col gap-1.5">
                  <Link
                    href="/#historia"
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all"
                  >
                    Historia
                  </Link>
                  <Link
                    href="/#mision"
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all"
                  >
                    Misión y Visión
                  </Link>
                  <Link
                    href="/#paquetes"
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all"
                  >
                    Paquetes
                  </Link>
                  <Link
                    href="/menu"
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all"
                  >
                    Menús y Platillos
                  </Link>
                  <Link
                    href="/#faqs"
                    className="text-sm text-muted-foreground hover:text-foreground hover:translate-x-0.5 transition-all"
                  >
                    Preguntas Frecuentes
                  </Link>
                </nav>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-green-600/70">
                  <Clock className="size-3.5" />
                  <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                    Horario
                  </span>
                </h3>
                <div className="bg-muted/30 rounded-lg px-3 py-2.5 border border-amber-100/40">
                  <p className="text-sm text-muted-foreground">
                    {siteConfig.businessHours}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="flex flex-col items-center justify-between gap-2 px-5 py-4 text-center text-[11px] text-muted-foreground/70 sm:flex-row sm:text-left sm:px-6 md:px-10">
            <p>
              © {new Date().getFullYear()} Mi Cocina. Todos los derechos
              reservados.
            </p>
            <p className="flex items-center gap-1">
              Hecho con{" "}
              <span className="text-primary animate-pulse">
                <Heart width={12} />
              </span>{" "}
              en Aguascalientes
            </p>
          </div>

          {/* Bottom decorative gold line */}
          <div className="h-1 bg-linear-to-r from-transparent via-primary/80 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
};
