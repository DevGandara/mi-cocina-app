import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../ui/card";
import { Egg, CirclePlus } from "lucide-react";
import { Button } from "../../ui/button";

const MenuEspecial = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex flex-col mb-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
            <CirclePlus size={20} />
          </span>
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight">
              Servicio Extra
            </h3>
            <p className="text-muted-foreground text-sm">
              Recomendado para baby shower, despedida de soltera, canasta, etc.
            </p>
          </div>
        </div>

        <Card
          className="w-full h-full relative overflow-hidden
        bg-background border border-border/40
        p-8 rounded-3xl
        shadow-sm hover:shadow-xl hover:shadow-primary/8
        transition-all duration-500 group text-center
        hover:-translate-y-2 flex flex-col justify-between gap-4"
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          <CardHeader className="p-0 relative z-10">
            <CardTitle className="text-center text-2xl">
              Menú Especial
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <ul className="text-muted-foreground space-y-1">
              {[1, 2].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="text-primary shrink-0" size={16} />
                  {item === 1 ? "Plato Fuerte" : "Acompañamiento"}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-3 relative z-10">
            <div className="flex flex-col items-center gap-1">
              <p className="text-primary font-extrabold text-4xl">$90.00</p>
              <span className="text-xs text-muted-foreground">por persona</span>
            </div>
            <Button
              variant="outline"
              className="w-full mt-1 rounded-xl cursor-pointer"
            >
              Solicitar menú de platillos especiales
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Seccion de desayunos*/}

      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-3 mb-8">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
            <Egg size={20} />
          </span>
          <div>
            <h3 className="text-xl font-bold text-foreground leading-tight">
              Desayunos
            </h3>
            <p className="text-muted-foreground text-sm">
              Porque la mejor forma de empezar el día es con el corazón contento
              y la panza llena.
            </p>
          </div>
        </div>

        <Card
          className="w-full relative overflow-hidden
        bg-background border border-border/40
        p-8 rounded-3xl
        shadow-sm hover:shadow-xl hover:shadow-primary/8
        transition-all duration-500 group text-center
        hover:-translate-y-2 flex flex-col justify-between gap-4"
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          <CardHeader className="p-0 relative z-10">
            <CardTitle className="text-center text-2xl">
              Menú Desayuno
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <ul className="text-muted-foreground space-y-1">
              {["Buffet (3 guisados)", "Fruta o jugo", "Pan Dulce", "Café"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="text-primary shrink-0" size={16} />
                    {item}
                  </li>
                ),
              )}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-3 relative z-10">
            <div className="flex flex-col items-center gap-1">
              <p className="text-primary font-extrabold text-4xl">$100.00</p>
              <span className="text-xs text-muted-foreground">por persona</span>
            </div>
            <Button
              variant="outline"
              className="w-full mt-1 rounded-xl cursor-pointer"
            >
              Solicitar menú de desayunos
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MenuEspecial;
