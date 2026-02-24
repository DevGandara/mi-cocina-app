import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

const buffets = [
  {
    title: "Buffet Internacional",
    description: ["3 guisados de carne", "2 guisados de NO carne", "Pan"],
    price: "$105.00",
    popular: false,
  },
  {
    title: "Buffet Mexicano",
    description: [
      "3 guisados de carne",
      "3 guisados de NO carne",
      "Ensalada verde",
      "Tortillas",
    ],
    price: "$105.00",
    popular: true,
  },
];

const pricing = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
      {buffets.map((buffet, index) => (
        <Card
          key={index}
          className="relative overflow-hidden
        bg-background border border-border/40
        p-8 rounded-3xl
        shadow-sm hover:shadow-xl hover:shadow-primary/8
        transition-all duration-500 group text-center
        hover:-translate-y-2 flex flex-col justify-between gap-4 py-12"
        >
          {/* Línea decorativa superior */}
          <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

          {/* Gradiente hover */}
          <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* Badge popular */}
          {buffet.popular && (
            <span className="absolute top-4 right-4 bg-primary/5 border border-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full z-20 uppercase">
              Más popular
            </span>
          )}

          <CardHeader className="p-0 relative z-10">
            <CardTitle className="text-center text-2xl">
              {buffet.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="relative z-10">
            <ul className="text-muted-foreground space-y-1">
              {buffet.description.map((item, index) => (
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
                {buffet.price}
              </p>
              <span className="text-xs text-muted-foreground">por persona</span>
            </div>
            <Button
              variant="outline"
              className="w-full mt-1 rounded-xl cursor-pointer"
            >
              Solicitar información
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default pricing;
