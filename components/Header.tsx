"use client";

import { Menu, ReceiptText, UserRound, X } from "lucide-react";
import { useState } from "react";
import { BrandMark } from "./BrandMark";

const mainNavItems = [
  { label: "Início", href: "/#inicio" },
  { label: "Quem Somos", href: "/#quem-somos" },
  { label: "Blog", href: "/blog" },
  { label: "Implantação", href: "/implantacao" },
  { label: "Planos", href: "/planos" },
  { label: "Contato", href: "/#contato" }
];

const utilityItems = [
  {
    label: "Área do Cliente",
    href: "/area-do-cliente",
    icon: UserRound
  },
  {
    label: "Boletos",
    href: "/boletos",
    icon: ReceiptText
  }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-moss/10 bg-porcelain/96 backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-5">
        <a
          href="/"
          className="focus-ring rounded-md text-ink"
          aria-label="Aloe Condomínios"
        >
          <BrandMark compact />
        </a>

        <nav
          className="hidden items-center gap-5 xl:flex 2xl:gap-6"
          aria-label="Menu principal"
        >
          {mainNavItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring whitespace-nowrap rounded-md text-[13px] font-semibold text-graphite/76 transition hover:text-moss"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          {utilityItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring inline-flex min-h-10 items-center gap-2 whitespace-nowrap rounded-md px-3 text-[13px] font-semibold text-moss transition hover:bg-moss/5"
              >
                <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
                <span>{item.label}</span>
              </a>
            );
          })}
          <a
            href="/#contato"
            className="focus-ring ml-1 inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-md bg-moss px-4 text-[13px] font-semibold text-porcelain shadow-[0_10px_24px_rgba(25,33,29,0.12)] transition hover:bg-ink"
          >
            Solicitar proposta
          </a>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-moss/15 text-moss xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-moss/10 bg-porcelain xl:hidden">
          <nav
            className="section-shell flex flex-col gap-1 py-4"
            aria-label="Menu mobile"
          >
            {[...mainNavItems, ...utilityItems].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md px-2 py-3 text-sm font-semibold text-graphite"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="/#contato"
                className="focus-ring inline-flex min-h-11 w-full items-center justify-center rounded-md bg-moss px-5 py-3 text-sm font-semibold text-porcelain"
                onClick={() => setOpen(false)}
              >
                Solicitar proposta
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
