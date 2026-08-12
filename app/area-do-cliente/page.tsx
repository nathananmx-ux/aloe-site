import type { Metadata } from "next";
import {
  BadgeCheck,
  FileText,
  Headphones,
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
    "Acessos importantes para clientes e moradores de condomínios administrados pela Aloe."
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
    title: "Falar com a equipe Aloe",
    text: "Entre em contato pelo WhatsApp corporativo da Aloe.",
    href: contact.whatsappHref,
    external: true,
    icon: MessageSquareText
  },
  {
    title: "Solicitar suporte",
    text: "Canal para dúvidas e solicitações da rotina administrativa.",
    href: contact.whatsappHref,
    external: true,
    icon: Headphones
  },
  {
    title: "Atualização cadastral",
    text: "Em breve, este acesso ficará disponível para clientes Aloe.",
    href: "/area-do-cliente",
    icon: BadgeCheck
  },
  {
    title: "Documentos do condomínio",
    text: "Em breve, esta área reunirá documentos e acessos importantes.",
    href: "/area-do-cliente",
    icon: FileText
  }
];

export default function AreaDoClientePage() {
  return (
    <>
      <Header />
      <main className="bg-porcelain">
        <section className="border-b border-moss/10 bg-paper py-20 md:py-24">
          <div className="section-shell max-w-4xl">
            <p className="eyebrow">Clientes Aloe</p>
            <h1 className="mt-3 font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
              Área do Cliente
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-graphite/75">
              Acesse facilidades e canais importantes para a rotina do seu
              condomínio.
            </p>
            <p className="mt-5 max-w-3xl text-sm font-semibold leading-6 text-graphite/68">
              Esta área reúne acessos importantes para clientes e moradores de
              condomínios administrados pela Aloe.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20">
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
