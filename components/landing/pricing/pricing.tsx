import { Reveal } from "@/components/landing/reveal";
import BuffetPricing from "./buffet-pricing";
import PlatilloPricing from "./platillo-pricing";
import MenuEspecial from "./menue-pricing";
import KidsMenuAddOn from "./kids-addon";
import { UtensilsCrossed, ChefHat, CirclePlus, Egg, Info } from "lucide-react";

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
              Selecciona la modalidad y después elige el menú que mejor se adapte
              a tu celebración.
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Servicio Extra */}
            <Reveal direction="left" delay={80}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                    <CirclePlus size={20} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      Servicio Extra
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Recomendado para baby shower, despedida de soltera, canasta,
                      etc.
                    </p>
                  </div>
                </div>
                <MenuEspecial type="especial" />
              </div>
            </Reveal>

            {/* Desayunos */}
            <Reveal direction="right" delay={140}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                    <Egg size={20} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-foreground leading-tight">
                      Desayunos
                    </h3>
                    <p className="text-muted-foreground text-sm">
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

          <Reveal delay={120}>
            <div>
              <KidsMenuAddOn />
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
                    personas, con una cantidad inferior de comensales, los costos
                    aumentan a razón de $10.00 por persona.
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
