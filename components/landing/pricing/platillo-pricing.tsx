import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Button } from "../../ui/button";
import { Check, Heart, Crown } from "lucide-react";

const platillos = [
  {
    title: "Platillo a un tiempo",
    step: 1,
    description: [
      "Pan",
      "Una carne",
      "Una pasta",
      "Un acompañamiento del menú",
    ],
    price: "$105.00",
    popular: false,
    badge: null,
  },
  {
    title: "Platillo a dos tiempos",
    step: 2,
    description: [
      "Pan",
      "Entrada (Crema)",
      "Una carne",
      "Una pasta",
      "Un acompañamiento del menú",
    ],
    price: "$130.00",
    popular: true,
    badge: "Más popular",
  },
  {
    title: "Platillo a tres tiempos",
    step: 3,
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
    badge: "Más completo",
  },
];

const platillo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
      {platillos.map((platillo, index) => (
        <Card
          key={index}
          className={`relative overflow-hidden
        bg-background
        p-6 sm:p-8 rounded-3xl
        shadow-sm hover:shadow-xl hover:shadow-primary/8
        transition-all duration-500 group text-center
        hover:-translate-y-2 flex flex-col justify-between gap-4
        ${
          platillo.popular
            ? "border-2 border-primary/40 ring-4 ring-primary/10 bg-primary/2"
            : "border border-border/40"
        }`}
        >
          <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* Badge */}
          {platillo.badge && (
            <span
              className={`absolute top-3 right-3 text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full z-20 flex items-center gap-1.5
              ${
                platillo.popular
                  ? "bg-primary/10 border border-primary/30 text-primary"
                  : "bg-foreground/5 border border-border/40 text-muted-foreground"
              }`}
            >
              {platillo.popular && <Heart className="shrink-0" size={12} />}
              {!platillo.popular && <Crown className="shrink-0" size={12} />}
              {platillo.badge}
            </span>
          )}

          {/* Step indicator */}
          <div className="relative z-10 flex justify-center mb-1">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold">
              {platillo.step}
            </span>
          </div>

          <CardHeader className="p-0 relative z-10">
            <CardTitle className="pr-18 text-center text-xl sm:text-2xl">
              {platillo.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <ul className="space-y-1.5 text-sm text-muted-foreground sm:text-base">
              {platillo.description.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-left">
                  <Check className="text-primary shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center gap-3 relative z-10">
            <div className="flex flex-col items-center gap-1">
              <p className="text-primary font-extrabold text-3xl sm:text-4xl">
                {platillo.price}
              </p>
              <span className="text-xs text-muted-foreground">por persona</span>
            </div>
            <Button
              variant={platillo.popular ? "default" : "outline"}
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
