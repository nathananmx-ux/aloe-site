"use client";

import { Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { primaryNavItems } from "@/data/home";
import { BrandMark } from "./BrandMark";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-moss/15 bg-porcelain/95 backdrop-blur">
      <div className="section-shell flex min-h-16 items-center justify-between gap-3 lg:min-h-[72px]">
        <a href="/" className="focus-ring shrink-0 rounded-sm" aria-label="Aloe Condomínios, início">
          <BrandMark compact />
        </a>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Menu principal">
          {primaryNavItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring whitespace-nowrap text-xs font-semibold text-graphite/75 hover:text-moss 2xl:text-sm">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <a href="/area-do-cliente" data-event="click_area_cliente" className="focus-ring inline-flex items-center gap-2 whitespace-nowrap text-xs font-semibold text-moss hover:underline 2xl:text-sm">
            <UserRound size={17} aria-hidden="true" /> Área do Cliente
          </a>
          <a href="/#contato" data-event="click_solicitar_proposta" className="focus-ring inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-sm bg-brandSolid px-4 text-xs font-semibold text-white hover:bg-brandHover 2xl:text-sm">
            Solicitar proposta
          </a>
          <ThemeToggle />
        </div>
        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-moss/15 text-moss xl:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="aloe-mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <nav id="aloe-mobile-menu" className="section-shell grid max-h-[calc(100svh-64px)] gap-1 overflow-y-auto border-t border-moss/10 py-3 xl:hidden" aria-label="Menu mobile">
          {[...primaryNavItems, { label: "Área do Cliente", href: "/area-do-cliente" }].map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-sm px-2 py-2.5 text-sm font-semibold text-graphite" onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <ThemeToggle mobile />
          <a href="/#contato" className="focus-ring mt-2 inline-flex min-h-11 items-center justify-center rounded-sm bg-brandSolid px-4 text-sm font-semibold text-white" onClick={() => setOpen(false)}>
            Solicitar proposta
          </a>
        </nav>
      )}
    </header>
  );
}
