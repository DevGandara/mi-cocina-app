import { Hero } from "@/components/landing/hero";
import { ExperienceSection } from "@/components/landing/experience/experience-section";
import { Mision } from "@/components/landing/mision";
import Pricing from "@/components/landing/pricing/pricing";
import { QASection } from "@/components/landing/qa-section";
import { TributeSection } from "@/components/landing/tribute-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-dvh bg-background relative overflow-hidden flex flex-col items-center bg-linear-to-br from-primary/10 via-background to-primary/10 ">
      <Hero />
      <ExperienceSection />
      <Mision />
      <Pricing />
      <QASection />
      <div className="w-full max-w-xs mx-auto flex items-center gap-4 py-2">
        <span className="flex-1 h-px bg-linear-to-r from-transparent to-border" />
        <span className="text-border text-xs">✦</span>
        <span className="flex-1 h-px bg-linear-to-l from-transparent to-border" />
      </div>
      <TributeSection />
      <Footer />
    </main>
  );
}
