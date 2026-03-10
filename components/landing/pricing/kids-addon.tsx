import { Baby, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";

const KidsMenuAddOn = () => {
  const items = [
    "Hamburguesa con papas",
    "Nuggets con espaguetti",
    "Pizza",
    "Tiras de pollo empanizadas con papas o espaguetti",
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* Encabezado */}
      <div className="flex items-center gap-3 mb-8">
        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
          <Baby size={20} />
        </span>
        <div>
          <h3 className="text-xl font-bold text-foreground leading-tight">
            Menú Infantil
          </h3>
          <p className="text-muted-foreground text-sm">
            Opción adicional disponible al contratar cualquier paquete
          </p>
        </div>
      </div>

      <Card
        className="relative overflow-hidden
        bg-background border border-border/40
        p-8 rounded-3xl
        shadow-sm hover:shadow-xl hover:shadow-primary/8
        transition-all duration-500 group
        hover:-translate-y-2 flex flex-col justify-between gap-4 max-w-3/4"
      >
        {/* Línea decorativa superior */}
        <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
        {/* Gradiente hover */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

        <CardHeader className="p-0 relative z-10 text-center">
          <CardTitle className="text-2xl">Menú Infantil</CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 p-0">
          <ul className="text-muted-foreground space-y-1">
            {items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="text-primary shrink-0" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default KidsMenuAddOn;
