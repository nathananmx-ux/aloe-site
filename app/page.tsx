import { AboutSection } from "@/components/AboutSection";
import { AuthorityBar } from "@/components/AuthorityBar";
import { BrandIntro } from "@/components/BrandIntro";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MethodSection } from "@/components/MethodSection";
import { PartnersSection } from "@/components/PartnersSection";
import { PlansSection } from "@/components/PlansSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SpecialistSection } from "@/components/SpecialistSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <BrandIntro />
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <ProblemSection />
        <ServicesSection />
        <SpecialistSection />
        <PlansSection />
        <MethodSection />
        <AboutSection />
        <TestimonialsSection />
        <PartnersSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
