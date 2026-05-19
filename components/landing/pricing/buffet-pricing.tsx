import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";

const buffets = [
  {
    title: "Buffet Internacional",
    description: [
      "3 guisados de carne",
      "2 guisados de NO carne",
      "Pan",
      "Ensalada campestre",
    ],
    price: "$105.00",
    popular: false,
  },
  {
    title: "Buffet Mexicano",
    description: [
      "3 guisados de carne",
      "3 guisados de NO carne",
      "Tortillas",
      "Ensalada verde",
    ],
    price: "$105.00",
    popular: true,
  },
];

const pricing = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-7xl w-full">
      {buffets.map((buffet, index) => (
        <Card
          key={index}
          className={`relative overflow-hidden
        bg-background
        p-6 sm:p-8 rounded-3xl
        shadow-sm hover:shadow-xl hover:shadow-primary/8
        transition-all duration-500 group text-center
        hover:-translate-y-2 flex flex-col justify-between gap-4 py-10 sm:py-12
        ${
          buffet.popular
            ? "border-2 border-primary/40 ring-4 ring-primary/10 bg-primary/2"
            : "border border-border/40"
        }`}
        >
          {/* Línea decorativa superior */}
          <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

          {/* Gradiente hover */}
          <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* Badge popular */}
          {buffet.popular && (
            <span className="flex items-center gap-2 absolute top-3 right-3 bg-primary/10 border border-primary/30 text-primary text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full z-20 ">
              <Heart className="shrink-0" size={12} />
              Más popular
            </span>
          )}

          <CardHeader className="p-0 relative z-10">
            <CardTitle className="pr-12 text-center text-xl sm:text-2xl">
              {buffet.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <ul className="space-y-1.5 text-sm text-muted-foreground sm:text-base">
              {buffet.description.map((item, index) => (
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
                {buffet.price}
              </p>
              <span className="text-xs text-muted-foreground">por persona</span>
            </div>
            <Button
              variant={buffet.popular ? "default" : "outline"}
              className="w-full mt-1 rounded-xl cursor-pointer"
            >
              Solicitar menú completo
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default pricing;
