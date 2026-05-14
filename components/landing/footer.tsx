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

export const Footer = () => {
  const whatsappQuoteHref =
    "https://wa.me/524491942472?text=Hola%2C%20me%20gustaria%20cotizar%20un%20evento%20con%20Mi%20Cocina.";

  return (
    <footer className="w-full">
      <div className="relative w-full" id="contact">
        <div className="absolute -inset-8 bg-linear-to-b from-amber-100/30 via-transparent to-amber-100/20 rounded-[2rem] blur-3xl -z-10" />

        <div className="relative bg-card/70 backdrop-blur-sm border border-y-0 border-r-amber-200/40 border-l-amber-200/40 rounded-2xl overflow-hidden shadow-xl">
          <div className="h-1 bg-linear-to-r from-transparent via-primary/80 to-transparent" />

          {/* ── CTA Section ── */}
          <div className="px-6 py-8 md:px-10 md:py-10 flex flex-col items-center text-center gap-4">
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
              className="mt-2 px-8 py-6 rounded-full font-semibold transition-all shadow-lg hover:shadow-primary/25 active:scale-95"
            >
              <a
                href={whatsappQuoteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Cotizar Evento
                <ChevronRight className="size-4" />
              </a>
            </Button>
          </div>

          <div className="h-px mx-6 md:mx-10 bg-linear-to-r from-transparent via-primary/30 to-transparent" />

          {/* ── Main content: 3-column on desktop ── */}
          <div className="px-6 py-8 md:px-10 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 items-start">
            {/* Column 1 — Map + Address */}
            <div className="space-y-3">
              <h3 className="flex items-center gap-2 text-green-600/70">
                <MapPin className="size-3.5" />
                <span className="text-[11px] tracking-[0.2em] uppercase font-medium">
                  Ubicación
                </span>
              </h3>
              <div className="relative rounded-xl overflow-hidden border border-amber-200/30 shadow-sm h-48 md:h-56 group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29614.741819890332!2d-102.30824960000001!3d21.9021312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429ef5eefe826d1%3A0xce7b8b83f94d417e!2sMi%20Cocina!5e0!3m2!1ses-419!2smx!4v1773175431002!5m2!1ses-419!2smx"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Floating "open in maps" button */}
              </div>
              <p className="text-muted-foreground text-xs">
                Aguascalientes, Ags., México
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
                    href="tel:+524491942472"
                    className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group text-sm rounded-lg px-2 py-2 -mx-2 hover:translate-x-0.5"
                  >
                    <span className="p-1.5 rounded-full bg-linear-to-br from-[#2898ee] via-[#107acc] to-[#0cbccc] group-hover:scale-110 transition-transform shadow-sm">
                      <Phone className="size-3 text-white" />
                    </span>
                    +52 449 194 2472
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/524491942472"
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
                    href="https://www.instagram.com/micocina.ags?igsh=aWhyYW5nc2NsZTQ2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all group text-sm rounded-lg px-2 py-2 -mx-2 hover:translate-x-0.5"
                  >
                    <span className="p-1.5 rounded-full bg-linear-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] group-hover:scale-110 transition-transform shadow-sm">
                      <Instagram className="size-3 text-white" />
                    </span>
                    @micocina.ags
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 — Nav + Schedule */}
            <div className="space-y-6">
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
                    Lun – Vie · 9:00 – 15:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="px-6 md:px-10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-muted-foreground/70">
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
    </footer>
  );
};
