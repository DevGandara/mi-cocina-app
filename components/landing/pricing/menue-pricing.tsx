import { Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "../../ui/card";
import { Button } from "../../ui/button";

interface MenuEspecialProps {
  type: "especial" | "desayuno";
}

const menuData = {
  especial: {
    title: "Menú Especial",
    items: ["Plato Fuerte", "Acompañamiento"],
    price: "$90.00",
    cta: "Solicitar menú de platillos especiales",
  },
  desayuno: {
    title: "Menú Desayuno",
    items: ["Buffet (3 guisados)", "Fruta o jugo", "Pan Dulce", "Café"],
    price: "$100.00",
    cta: "Solicitar menú de desayunos",
  },
};

const MenuEspecial = ({ type }: MenuEspecialProps) => {
  const data = menuData[type];

  return (
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
        <CardTitle className="text-center text-2xl">{data.title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <ul className="text-muted-foreground space-y-1">
          {data.items.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <Check className="text-primary shrink-0" size={16} />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-center justify-center gap-3 relative z-10">
        <div className="flex flex-col items-center gap-1">
          <p className="text-primary font-extrabold text-4xl">{data.price}</p>
          <span className="text-xs text-muted-foreground">por persona</span>
        </div>
        <Button
          variant="outline"
          className="w-full mt-1 rounded-xl cursor-pointer"
        >
          {data.cta}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MenuEspecial;
