import { Calendar, Users, UtensilsCrossed } from "lucide-react";
import { ExperienceCard } from "./experience-card";

const cards = [
  {
    logo: <Calendar className="w-7 h-7 text-primary" />,
    title: "Experiencia profesional desde 2006",
    description:
      "Una trayectoria sólida brindando calidad y confianza en cada evento.",
  },
  {
    logo: <Users className="w-7 h-7 text-primary" />,
    title: "Capacidad hasta 1000 personas",
    description:
      "Infraestructura completa para eventos masivos sin perder el toque personal.",
  },
  {
    logo: <UtensilsCrossed className="w-7 h-7 text-primary" />,
    title: "Menús Internacionales y Mexicanos",
    description:
      "Variedad gastronómica que va desde la cocina mexicana tradicional hasta platillos mundiales.",
  },
];

export function ExperienceSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="historia">
      {/* Top divider line */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border to-transparent" />

      {/* Soft background blobs */}
      <div className="absolute -left-[15%] top-[10%] w-[35%] h-[60%] bg-primary/4 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -right-[10%] bottom-[10%] w-[25%] h-[40%] bg-primary/3 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-5">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Nuestra historia
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Más de{" "}
            <span className="text-primary relative inline-block">
              18 años
              {/* Underline accent */}
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-primary/30 rounded-full" />
            </span>{" "}
            creando eventos memorables
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Desde 2006 ofrecemos servicio gastronómico profesional. Comenzamos
            con eventos de 200 personas y hoy atendemos desde reuniones íntimas
            hasta grandes banquetes de{" "}
            <span className="font-semibold text-foreground">
              1,000 personas
            </span>
            .
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <ExperienceCard
              key={index}
              index={index}
              logo={card.logo}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
