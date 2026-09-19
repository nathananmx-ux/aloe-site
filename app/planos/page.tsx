import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PlansPageContent } from "@/components/PlansPageContent";

export const metadata: Metadata = {
  title: "Planos Aloe | Administração condominial por porte",
  description:
    "Planos de administração condominial para pequenos condomínios até 16 unidades e propostas personalizadas para condomínios maiores.",
  alternates: { canonical: "/planos" }
};

export default function PlanosPage() {
  return (
    <>
      <Header />
      <PlansPageContent />
      <Footer />
    </>
  );
}
