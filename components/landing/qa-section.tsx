"use client";

import { MessageCircleQuestion } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const items = [
  {
    value: "item-1",
    trigger: "¿Cuál es el mínimo de personas para contratar el servicio?",
    content:
      "Nuestros paquetes están diseñados para eventos a partir de 50 personas. Si el número de comensales es menor, el precio por persona puede ajustarse.",
  },
  {
    value: "item-2",
    trigger: "¿Cómo se realiza la reserva del servicio?",
    content:
      "Para confirmar el servicio se solicita un anticipo del 50% y el resto se liquida el día del evento.",
  },
  {
    value: "item-3",
    trigger: "¿Puedo elegir el menú para mi evento?",
    content:
      "Sí. Una vez seleccionado el paquete, podrás elegir los platillos del menú mexicano, internacional, especial o de desayunos según tu preferencia y el tipo de paquete.",
  },
  {
    value: "item-4",
    trigger: "¿El servicio incluye vajilla?",
    content:
      "La renta de vajilla puede incluirse como servicio adicional dependiendo del tipo de evento y paquete contratado.",
  },
  {
    value: "item-5",
    trigger: "¿Ofrecen opciones para niños?",
    content:
      "Sí, contamos con menú infantil opcional por $60 por niño, ideal para eventos familiares.",
  },
  {
    value: "item-6",
    trigger: "¿Qué incluye el servicio de catering?",
    content:
      "El servicio incluye la preparación, transporte y servicio de alimentos, así como el personal necesario para atender a tus invitados.",
  },
];

export const QASection = () => {
  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 md:px-6 lg:px-8 md:pb-16 pb-8"
      id="faqs"
    >
      {/* Header */}
      <div className="text-center mb-12 md:mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wide">
          <MessageCircleQuestion className="size-4" />
          FAQ
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
          Preguntas <span className="text-primary">Frecuentes</span>
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Resolvemos tus dudas más comunes sobre nuestros servicios de banquetes
          y catering.
        </p>
      </div>

      {/* Accordion */}
      <div className="relative max-w-2xl mx-auto">
        {/* Decorative glow */}
        <div className="absolute -inset-4 bg-linear-to-br from-primary/5 via-transparent to-primary/5 rounded-3xl blur-2xl -z-10" />

        <div className="bg-card/60 backdrop-blur-sm border border-border/60 rounded-2xl p-4 md:p-6 shadow-lg">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="space-y-1"
          >
            {items.map((item, index) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-b-0 rounded-xl px-4 transition-colors data-[state=open]:bg-primary/5"
              >
                <AccordionTrigger className="text-base font-semibold hover:no-underline hover:text-primary transition-colors py-5 gap-4">
                  <span className="flex items-center gap-3 text-left">
                    <span className="flex items-center justify-center size-7 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    {item.trigger}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pl-10 pb-5">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
