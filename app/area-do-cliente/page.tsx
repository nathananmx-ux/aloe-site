import type { Metadata } from "next";
import {
  Landmark,
  MessageSquareText,
  WalletCards
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { contact } from "@/data/home";

export const metadata: Metadata = {
  title: "Área do Cliente | Aloe Condomínios",
  description:
    "Acessos importantes para clientes e moradores de condomínios administrados pela Aloe.",
  alternates: { canonical: "/area-do-cliente" }
};

const accessItems = [
  {
    title: "Segunda via de boletos",
    text: "Acesse as opções disponíveis para emissão de segunda via e pagamento.",
    href: "/boletos",
    icon: WalletCards
  },
  {
    title: "Acessar Condopay",
    text: "Atalho para condomínios que utilizam a plataforma Condopay/Condoconta.",
    href: "https://condopay.condoconta.com.br",
    external: true,
    icon: Landmark
  },
  {
    title: "Atendimento Aloe",
    text: "Tire dúvidas e solicite suporte administrativo pelo WhatsApp da equipe.",
    href: contact.whatsappHref,
    external: true,
    icon: MessageSquareText
  }
];

export default function AreaDoClientePage() {
  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="border-b border-moss/10 bg-paper py-12 md:py-14">
          <div className="section-shell max-w-4xl">
            <p className="eyebrow">Clientes Aloe</p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl md:text-6xl">
              Área do Cliente
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite/75">
              Encontre seu boleto e fale com a equipe pelos canais disponíveis.
            </p>
            <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-graphite/68">
              Para clientes e moradores de condomínios administrados pela Aloe.
            </p>
          </div>
        </section>

        <section className="py-10 md:py-12">
          <div className="section-shell grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {accessItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="focus-ring rounded-lg border border-moss/10 bg-white p-6 shadow-[0_12px_35px_rgba(25,33,29,0.05)] transition hover:-translate-y-1 hover:border-bronze/35"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-moss/10 text-moss">
                    <Icon aria-hidden="true" size={22} strokeWidth={1.7} />
                  </div>
                  <h2 className="mt-5 font-serif text-2xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-graphite/70">
                    {item.text}
                  </p>
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
