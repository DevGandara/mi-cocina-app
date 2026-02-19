import { Hero } from "@/components/hero";
import { ExperienceSection } from "@/components/experience-section";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background relative overflow-hidden flex flex-col items-center bg-linear-to-br from-primary/10 via-background to-primary/10 ">
      <Hero />
      <ExperienceSection />
    </main>
  );
}
