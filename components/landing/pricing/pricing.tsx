import Link from "next/link";
import { Reveal } from "@/components/landing/reveal";
import BuffetPricing from "./buffet-pricing";
import CanapesPricing from "./canapes-pricing";
import PlatilloPricing from "./platillo-pricing";
import MenuEspecial from "./menue-pricing";
import KidsMenuAddOn from "./kids-addon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UtensilsCrossed,
  ChefHat,
  CirclePlus,
  Egg,
  IceCreamCone,
  Info,
  HandPlatter,
} from "lucide-react";

const pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="paquetes">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado principal */}
        <div className="text-center mb-16">
          {/* Eyebrow label */}
          <Reveal delay={40} className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Servicios profesionales
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
              <span className="text-primary relative inline-block">
                Paquetes
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/30 rounded-full" />
              </span>{" "}
              para tu evento
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Selecciona la modalidad y después elige el menú que mejor se
              adapte a tu celebración.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-16">
          {/* Platillos a la carta */}
          <Reveal delay={60}>
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                  <UtensilsCrossed size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    Platillos a la carta
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Servicio individual por persona
                  </p>
                </div>
              </div>
              <PlatilloPricing />
            </div>
          </Reveal>

          {/* Separador */}
          <div className="h-px bg-border/40" />

          {/* Buffet */}
          <Reveal delay={120}>
            <div className="w-full">
              <div className="flex items-center gap-3 mb-8">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                  <ChefHat size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    Buffet
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Servicio libre para grupos y eventos
                  </p>
                </div>
              </div>
              <BuffetPricing />
            </div>
          </Reveal>

          <div className="h-px bg-border/40" />

          {/* Servicio Extra y Desayunos */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6  ">
            {/* Servicio Extra */}
            <Reveal delay={80}>
              <div className="space-y-3">
                <div className="mb-5 flex items-start gap-3 text-left sm:items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                    <CirclePlus size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                      Servicio Extra
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Recomendado para baby shower, despedida de soltera,
                      canasta, etc.
                    </p>
                  </div>
                </div>
                <MenuEspecial type="especial" />
              </div>
            </Reveal>

            {/* Desayunos */}
            <Reveal delay={140}>
              <div className="space-y-3">
                <div className="mb-5 flex items-start gap-3 text-left sm:items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Egg size={20} />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground leading-tight">
                      Desayunos
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Porque la mejor forma de empezar el día es con el corazón
                      contento y la panza llena.
                    </p>
                  </div>
                </div>
                <MenuEspecial type="desayuno" />
              </div>
            </Reveal>
          </div>

          <div className="h-px bg-border/40" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <Reveal delay={120}>
              <div>
                <KidsMenuAddOn />
              </div>
            </Reveal>

            <Reveal direction="up" delay={160}>
              <div className="w-full">
                <div className="mb-8 flex w-full items-start gap-3 sm:items-center">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                    <IceCreamCone size={20} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      Menú de Postres
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Opción complementaria para cerrar tu evento con un toque
                      dulce.
                    </p>
                  </div>
                </div>

                <Card
                  className="relative overflow-hidden
                    bg-background border border-border/40
                    w-full p-6 sm:p-8 rounded-3xl
                    shadow-sm hover:shadow-xl hover:shadow-primary/8
                    transition-all duration-500 group
                    hover:-translate-y-2 flex flex-col justify-between gap-4"
                >
                  <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
                  <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  <CardHeader className="relative z-10 p-0 text-center">
                    <CardTitle className="text-2xl">Postres</CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10 p-0 text-center">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      Consulta las opciones disponibles para acompañar cualquier
                      paquete con una seleccion especial de postres.
                    </p>
                  </CardContent>

                  <CardFooter className="relative z-10 flex flex-col items-center justify-center gap-3 p-0">
                    <div className="flex flex-col items-center gap-1">
                      <p className="text-primary font-extrabold text-3xl sm:text-4xl">
                        $30.00
                      </p>
                      <span className="text-xs text-muted-foreground">
                        por persona
                      </span>
                    </div>

                    <Button
                      asChild
                      variant="outline"
                      className="mt-1 w-full rounded-xl"
                    >
                      <Link href="/menu?categoria=postres">
                        Ver menú de postres
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </Reveal>
          </div>

          <div className="h-px bg-border/40" />

          <Reveal delay={150}>
            <div className="w-full">
              <div className="mb-8 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <HandPlatter size={20} />
                </span>
                <div>
                  <h3 className="text-xl font-bold leading-tight text-foreground">
                    Canapés
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Bocadillos ideales para recepciones, cocteles y mesas de
                    bienvenida.
                  </p>
                </div>
              </div>

              <CanapesPricing />
            </div>
          </Reveal>

          <div className="h-px bg-border/40" />

          <Reveal direction="up" delay={160}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600 shrink-0">
                  <Info size={20} />
                </span>
                <h3 className="text-xl font-bold text-foreground leading-tight">
                  A considerar
                </h3>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6">
                <ul className="flex flex-col gap-3 text-sm text-amber-900/80">
                  <li className="flex gap-2">
                    <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                    Los costos antes mencionados son para un mínimo de 50
                    personas, con una cantidad inferior de comensales, los
                    costos aumentan a razón de $10.00 por persona.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                    Se requiere del 50% de anticipo para contratar y el resto el
                    día del evento.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-500 mt-0.5 shrink-0">•</span>
                    Las cremas tienen costo de $25.00
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
          <div className="h-px bg-border/40" />
        </div>
      </div>
    </section>
  );
};

export default pricing;
