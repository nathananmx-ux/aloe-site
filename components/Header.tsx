"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/home";
import { BrandMark } from "./BrandMark";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-moss/10 bg-porcelain/95 backdrop-blur">
      <div className="section-shell flex min-h-20 items-center justify-between gap-6">
        <a
          href="#inicio"
          className="focus-ring rounded-md text-ink"
          aria-label="Aloe Condomínios"
        >
          <BrandMark compact />
        </a>

        <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-md text-sm font-semibold text-graphite/80 transition hover:text-moss"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="#contato">Solicitar proposta</ButtonLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-md border border-moss/15 text-moss lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-moss/10 bg-porcelain lg:hidden">
          <nav className="section-shell flex flex-col gap-1 py-4" aria-label="Menu mobile">
            {navItems.map((item) => (
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
              <ButtonLink href="#contato">Solicitar proposta</ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
