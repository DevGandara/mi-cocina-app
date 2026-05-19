import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Reveal } from "@/components/landing/reveal";

export function ExperienceCard({
  logo,
  title,
  description,
  index = 0,
}: {
  logo: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <Reveal delay={index * 140} direction="up">
        <Card
          className="
          relative overflow-hidden
          bg-background border border-border/40
          h-full p-6 sm:p-8 rounded-3xl
          shadow-none hover:shadow-xl hover:shadow-primary/8
          transition-all duration-500 group text-center
          hover:-translate-y-2
        "
      >
        <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

        <div className="absolute inset-0 bg-linear-to-b from-primary/0 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

        <CardHeader className="p-0 relative z-10">
          <div
            className="
            w-16 h-16 mx-auto rounded-2xl
            bg-primary/8 border border-primary/15
            flex items-center justify-center mb-5
            group-hover:bg-primary/15 group-hover:border-primary/30
            group-hover:scale-110
            transition-all duration-400
          "
          >
            {logo}
          </div>
          <CardTitle className="min-h-0 text-base sm:text-lg font-semibold tracking-tight leading-relaxed text-balance text-foreground/90 sm:min-h-12">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 relative z-10">
          <CardDescription className="text-muted-foreground/80 text-sm leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Reveal>
  );
}
