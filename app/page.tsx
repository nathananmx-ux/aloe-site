import { AboutSection } from "@/components/AboutSection";
import { AudienceSection } from "@/components/AudienceSection";
import { AuthorityBar } from "@/components/AuthorityBar";
import { BrandIntro } from "@/components/BrandIntro";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MethodSection } from "@/components/MethodSection";
import { PlansSection } from "@/components/PlansSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProfessionalSyndicSection } from "@/components/ProfessionalSyndicSection";
import { ServicesSection } from "@/components/ServicesSection";
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
        <ProfessionalSyndicSection />
        <PlansSection />
        <MethodSection />
        <AudienceSection />
        <AboutSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
