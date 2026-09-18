import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ButtonLink } from "@/components/ButtonLink";

export const metadata: Metadata = {
  title: "Conteúdos | Aloe Condomínios",
  robots: { index: false, follow: true }
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="flex min-h-[70svh] items-center bg-porcelain py-20">
        <div className="section-shell max-w-3xl">
          <p className="eyebrow">Conteúdos Aloe</p>
          <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
            Artigos em preparação.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-graphite/75">
            Enquanto isso, nossa equipe pode conversar sobre as necessidades do seu condomínio.
          </p>
          <div className="mt-8">
            <ButtonLink href="/#contato">Falar com a Aloe</ButtonLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
