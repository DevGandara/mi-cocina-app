import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Check, Heart } from "lucide-react";

const platillos = [
  {
    title: "Platillo a un tiempo",
    description: [
      "Pan",
      "Una carne",
      "Una pasta",
      "Un acompañamiento del menú",
    ],
    price: "$105.00",
    popular: false,
  },
  {
    title: "Platillo a dos tiempos",
    description: [
      "Pan",
      "Entrada (Crema)",
      "Una carne",
      "Una pasta",
      "Un acompañamiento del menú",
    ],
    price: "$130.00",
    popular: true,
  },
  {
    title: "Platillo a tres tiempos",
    description: [
      "Pan",
      "Entrada (Crema)",
      "Una carne",
      "Una pasta",
      "Un acompañamiento del menú",
      "Un postre",
    ],
    price: "$160.00",
    popular: false,
  },
];

const platillo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {platillos.map((platillo, index) => (
        <Card
          key={index}
          className="relative overflow-hidden
        bg-background border border-border/40
        p-8 rounded-3xl
        shadow-sm hover:shadow-xl hover:shadow-primary/8
        transition-all duration-500 group text-center
        hover:-translate-y-2 flex flex-col justify-between gap-4"
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* Badge popular */}
          {platillo.popular && (
            <span className="absolute top-4 right-4 bg-primary/5 border border-primary/20 text-xs font-semibold p-2 rounded-full z-20">
              <Heart className="text-primary shrink-0" size={16} />
            </span>
          )}

          <CardHeader className="p-0 relative z-10">
            <CardTitle className="text-center text-2xl">
              {platillo.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <ul className="text-muted-foreground space-y-1">
              {platillo.description.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="text-primary shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-3 relative z-10">
            <div className="flex flex-col items-center gap-1">
              <p className="text-primary font-extrabold text-4xl">
                {platillo.price}
              </p>
              <span className="text-xs text-muted-foreground">por persona</span>
            </div>
            <Button
              variant="outline"
              className="w-full mt-1 rounded-xl cursor-pointer"
            >
              Solicitar menú de platillos
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default platillo;
