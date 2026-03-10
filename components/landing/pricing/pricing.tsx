import BuffetPricing from "./buffet-pricing";
import PlatilloPricing from "./platillo-pricing";
import MenuEspecial from "./menue-pricing";
import KidsMenuAddOn from "./kids-addon";
import { UtensilsCrossed, ChefHat, ChevronRight } from "lucide-react";

const pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado principal */}
        <div className="text-center mb-16">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Servicios profesionales
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
            <span className="text-primary relative inline-block">
              Paquetes
              {/* Underline accent */}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/30 rounded-full" />
            </span>{" "}
            para tu evento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecciona la modalidad y después elige el menú que mejor se adapte
            a tu celebración.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {/* Platillos a la carta */}
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

          {/* Separador */}
          <div className="h-px bg-border/40" />

          {/* Buffet */}
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

          <div className="h-px bg-border/40" />

          <div className="flex">
            <div>
              <MenuEspecial />
            </div>
          </div>
          <div className="-mt-8">
            <KidsMenuAddOn />
          </div>

          <div className="h-px bg-border/40" />

          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight">
              A considerar
            </h3>
            <ul className="my-4 flex flex-col gap-4 text-muted-foreground text-sm">
              <li className="flex">
                <ChevronRight size={20} />
                Los costos antes mencionados son para un mínimo de 50 personas,
                con una cantidad inferior de comensales, los costos aumentan a
                razón de $10.00 por persona.
              </li>
              <li className="flex">
                <ChevronRight size={20} />
                Se requiere del 50% de anticipo para contratar y el resto el día
                del evento.
              </li>
              <li className="flex">
                <ChevronRight size={20} />
                Las cremas tienen costo de $25.00
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default pricing;
