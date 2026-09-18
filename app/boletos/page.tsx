import type { Metadata } from "next";
import { ExternalLink, Landmark, WalletCards } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact } from "@/data/home";

export const metadata: Metadata = {
  title: "Boletos Aloe | Segunda via e pagamento",
  description:
    "Acesse a segunda via de boletos da Aloe pelo sistema de boletos ou pela plataforma Condopay/Condoconta."
};

const boletoOptions = [
  {
    title: "Boleto",
    text: "Use esta opção para acessar boletos emitidos pelo sistema tradicional da administradora.",
    button: "Acessar boleto",
    href: "https://www.uniondata.com.br/boletoExpress/go.ud?id=442&hash=7400a0876647009a8a5617a9d9caf72fe916efd3",
    icon: WalletCards
  },
  {
    title: "Condopay",
    text: "Use esta opção caso o boleto do seu condomínio seja emitido pela plataforma Condopay/Condoconta.",
    button: "Acessar Condopay",
    href: "https://condopay.condoconta.com.br",
    icon: Landmark
  }
];

export default function BoletosPage() {
  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="border-b border-moss/10 bg-paper py-20 md:py-24">
          <div className="section-shell max-w-4xl">
            <p className="eyebrow">Boletos</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
              Acesse seu boleto
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite/75">
              Escolha abaixo a opção correspondente ao seu condomínio para
              acessar a segunda via ou realizar o pagamento.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="section-shell grid gap-6 md:grid-cols-2">
            {boletoOptions.map((option) => {
              const Icon = option.icon;

              return (
                <article
                  key={option.title}
                  className="flex min-h-[320px] flex-col rounded-lg border border-moss/10 bg-white p-7 shadow-soft"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-moss/10 text-moss">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.7} />
                  </div>
                  <h2 className="mt-6 font-serif text-3xl font-semibold text-ink">
                    {option.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-graphite/72">
                    {option.text}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.08em] text-bronze">
                    <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
                    Ambiente externo
                  </p>
                  <div className="mt-auto pt-8">
                    <ButtonLink
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {option.button}
                    </ButtonLink>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="section-shell mt-8 rounded-lg border border-moss/10 bg-paper p-6 md:flex md:items-center md:justify-between md:gap-6">
            <p className="text-sm font-semibold leading-6 text-graphite/75">
              Em caso de dúvida sobre qual opção utilizar, fale com a equipe da
              Aloe.
            </p>
            <div className="mt-5 md:mt-0">
              <ButtonLink
                href={contact.whatsappHref}
                variant="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com a Aloe
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
