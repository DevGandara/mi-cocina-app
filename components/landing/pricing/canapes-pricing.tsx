import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, GlassWater, Heart } from "lucide-react";

const canapesOptions = [
  {
    title: "Canapés Surtidos",
    description: ["4 canapés por persona"],
    price: "$60.00",
    popular: false,
  },
  {
    title: "Canapés Gourmet ",
    description: ["5 canapés por persona"],
    price: "$70.00",
    popular: false,
  },
  {
    title: "Canapés Gourmet con Vajilla",
    description: [
      "5 canapés por persona",
      "Incluye vajilla",
      "Incluye servilleta",
    ],
    price: "$80.00",
    popular: true,
  },
] as const;

export default function CanapesPricing() {
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {canapesOptions.map((option) => (
          <Card
            key={option.title}
            className={`group relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-3xl bg-background p-6 text-center shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/8 sm:p-8 ${
              option.popular
                ? "border-2 border-primary/40 ring-4 ring-primary/10 bg-primary/2"
                : "border border-border/40"
            }`}
          >
            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
            <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-primary/0 to-primary/3 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            {option.popular && (
              <span className="absolute top-3 right-3 z-20 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary sm:px-3 sm:text-xs">
                <Heart className="shrink-0" size={12} />
                Más solicitado
              </span>
            )}

            <CardHeader className="relative z-10 p-0">
              <CardTitle className="pr-12 text-center text-xl sm:text-2xl">
                {option.title}
              </CardTitle>
            </CardHeader>

            <CardContent className="relative z-10 p-0">
              <ul className="space-y-1.5 text-left text-sm text-muted-foreground sm:text-base">
                {option.description.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="shrink-0 text-primary" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter className="relative z-10 flex flex-col items-center justify-center gap-3 p-0">
              <div className="flex flex-col items-center gap-1">
                <p className="text-3xl font-extrabold text-primary sm:text-4xl">
                  {option.price}
                </p>
                <span className="text-xs text-muted-foreground">
                  por persona
                </span>
              </div>

              <Button
                asChild
                variant={option.popular ? "default" : "outline"}
                className="mt-1 w-full rounded-xl"
              >
                <Link href="/menu?categoria=canapes">Ver menú de canapés</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="rounded-2xl border border-rose-200/70 bg-linear-to-r from-rose-50 via-white to-rose-50/80 px-5 py-4 shadow-sm">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <GlassWater size={18} />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Servicio adicional opcional: vino rosado con copas
              </p>
              <p className="text-sm text-muted-foreground">
                Disponible como complemento para quienes deseen acompañar su
                mesa de canapés.
              </p>
            </div>
          </div>

          <div className="pl-12 md:pl-0 md:text-right">
            <p className="text-2xl font-extrabold text-rose-600">$30.00</p>
            <span className="text-xs text-muted-foreground">por persona</span>
          </div>
        </div>
      </div>
    </div>
  );
}
