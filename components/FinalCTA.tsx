"use client";

import type { FormEvent } from "react";
import { Send } from "lucide-react";
import { contact } from "@/data/home";
import { ButtonLink } from "./ButtonLink";

export function FinalCTA() {
  const requestProposal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const message = [
      "Olá, gostaria de solicitar uma proposta de administração para meu condomínio.",
      `Nome: ${values.get("name")}`,
      `Condomínio: ${values.get("condominium")}`,
      `Unidades: ${values.get("units")}`,
      `Cidade/bairro: ${values.get("location")}`
    ].join("\n");

    window.location.assign(`${contact.whatsappHref}?text=${encodeURIComponent(message)}`);
  };

  return (
    <section id="contato" className="bg-ink py-20 text-porcelain md:py-24">
      <div className="section-shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="text-base font-extrabold text-bronze">Conversa inicial</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            Peça uma proposta para o seu condomínio.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Conte o básico sobre o condomínio para que a equipe comece a conversa
            com uma proposta adequada à sua rotina.
          </p>
          <div className="mt-8">
            <ButtonLink
              href={contact.whatsappHref}
              variant="secondary"
              whatsapp
              target="_blank"
              rel="noopener noreferrer"
            >
              Fazer uma pergunta pelo WhatsApp
            </ButtonLink>
          </div>
        </div>

        <form onSubmit={requestProposal} className="grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-2 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div className="sm:col-span-2">
            <p className="text-sm font-bold text-white">Dados para a proposta</p>
          </div>
          <label className="grid gap-2 text-sm font-semibold text-white/85">
            Seu nome
            <input name="name" required maxLength={80} autoComplete="name" className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/85">
            Condomínio
            <input name="condominium" required maxLength={100} className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/85">
            Número de unidades
            <input name="units" type="number" required min="1" max="10000" inputMode="numeric" className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/85">
            Cidade e bairro
            <input name="location" required maxLength={100} autoComplete="address-level2" className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <button type="submit" className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-bronze px-5 py-3 text-sm font-bold text-white transition hover:bg-[#b89262] sm:col-span-2">
            <span>Continuar no WhatsApp</span>
            <Send aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>
          <p className="text-xs leading-5 text-white/60 sm:col-span-2">
            Confira os dados e confirme o envio da mensagem no WhatsApp.
          </p>
        </form>
      </div>
    </section>
  );
}
