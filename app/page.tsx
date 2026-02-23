import { Hero } from "@/components/landing/hero";
import { ExperienceSection } from "@/components/landing/experience-section";
import { Mision } from "@/components/landing/mision";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background relative overflow-hidden flex flex-col items-center bg-linear-to-br from-primary/10 via-background to-primary/10 ">
      <Hero />
      <ExperienceSection />
      <Mision />
    </main>
  );
}
