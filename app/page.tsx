import type { Metadata } from "next";
import { AboutSection } from "@/components/AboutSection";
import { AuthorityBar } from "@/components/AuthorityBar";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MethodSection } from "@/components/MethodSection";
import { PlansSection } from "@/components/PlansSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SpecialistSection } from "@/components/SpecialistSection";
import { TransitionSection } from "@/components/TransitionSection";
import { TechnologySection } from "@/components/TechnologySection";
import { SmallCondoSection } from "@/components/SmallCondoSection";
import { FAQSection } from "@/components/FAQSection";
import { VisualBreakSection } from "@/components/VisualBreakSection";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AuthorityBar />
        <ServicesSection />
        <VisualBreakSection />
        <SpecialistSection />
        <ProblemSection />
        <MethodSection />
        <TechnologySection />
        <SmallCondoSection />
        <PlansSection />
        <TransitionSection />
        <AboutSection />
        <CaseStudiesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
