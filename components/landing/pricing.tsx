import BuffetPricing from "./buffet-pricing";
import PlatilloPricing from "./platillo-pricing";
import { UtensilsCrossed, ChefHat } from "lucide-react";

const pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-4">
            Precios
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestros planes y encuentra el perfecto para tus
            necesidades.
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
          <div>
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
        </div>
      </div>
    </section>
  );
};

export default pricing;
