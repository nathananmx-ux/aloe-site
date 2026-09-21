"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { contact } from "@/data/home";
import { ButtonLink } from "./ButtonLink";

export function FinalCTA() {
  const [opened, setOpened] = useState(false);
  const requestProposal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const message = [
      "Olá, gostaria de solicitar uma proposta de administração para meu condomínio.",
      `Nome: ${values.get("name")}`,
      `WhatsApp: ${values.get("phone")}`,
      `E-mail: ${values.get("email")}`,
      `Condomínio: ${values.get("condominium")}`,
      `Unidades: ${values.get("units")}`,
      `Cidade/bairro: ${values.get("location")}`,
      `Já possui administradora: ${values.get("hasAdministration")}`,
      `Interesse: ${values.get("interest")}`,
      `Observações: ${values.get("notes") || "Não informadas"}`
    ].join("\n");

    const destination = `${contact.whatsappBaseHref}?text=${encodeURIComponent(message)}`;
    const analyticsWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
    analyticsWindow.dataLayer ??= [];
    analyticsWindow.dataLayer.push({ event: "form_proposta_valido", interest: values.get("interest"), has_administration: values.get("hasAdministration") });
    const newTab = window.open(destination, "_blank");
    if (newTab) newTab.opener = null;
    setOpened(true);
    if (!newTab) window.location.assign(destination);
  };

  return (
    <section id="contato" className="bg-deep py-20 text-white md:py-24">
      <div className="section-shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="text-base font-extrabold text-bronze">Conversa inicial</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
            Seu condomínio pode ser mais organizado.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Conte um pouco sobre a situação atual. A Aloe analisa o cenário e
            apresenta uma proposta adequada à estrutura do condomínio.
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
            WhatsApp
            <input name="phone" type="tel" required maxLength={25} autoComplete="tel" className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/85">
            E-mail
            <input name="email" type="email" required maxLength={120} autoComplete="email" className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/85">
            Nome do condomínio
            <input name="condominium" required maxLength={100} className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/85">
            Quantidade aproximada de unidades
            <input name="units" type="number" required min="1" max="10000" inputMode="numeric" className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/85">
            Cidade e bairro
            <input name="location" required maxLength={100} autoComplete="address-level2" className="focus-ring min-h-11 rounded-md border border-white/20 bg-white px-3 text-ink" />
          </label>
          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white/85">
            O condomínio já possui administradora?
            <select name="hasAdministration" required defaultValue="" className="focus-ring min-h-11 min-w-0 w-full rounded-md border border-white/20 bg-white px-3 text-ink"><option value="" disabled>Selecione</option><option>Sim</option><option>Não</option></select>
          </label>
          <label className="grid min-w-0 gap-2 text-sm font-semibold text-white/85">
            Principal interesse
            <select name="interest" required defaultValue="" className="focus-ring min-h-11 min-w-0 w-full rounded-md border border-white/20 bg-white px-3 text-ink"><option value="" disabled>Selecione</option><option>Administração</option><option>Pequeno condomínio</option><option>Síndico profissional</option><option>Administração + limpeza</option><option>Gestão completa</option><option>Quero orientação</option></select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-white/85 sm:col-span-2">
            Conte brevemente o que vocês precisam resolver. <span className="font-normal text-white/60">(opcional)</span>
            <textarea name="notes" maxLength={600} rows={3} className="focus-ring w-full rounded-md border border-white/20 bg-white px-3 py-2 text-ink" />
          </label>
          <button type="submit" className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-bronze px-5 py-3 text-sm font-bold text-deep transition hover:brightness-110 sm:col-span-2">
            <span>Solicitar análise</span>
            <Send aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>
          <p className="text-xs leading-5 text-white/60 sm:col-span-2">
            Seus dados não são enviados pelo site. Confira a mensagem e confirme o envio no WhatsApp.
          </p>
          {opened && <p role="status" className="text-sm font-semibold text-white sm:col-span-2">WhatsApp aberto. Confira e envie a mensagem para concluir a solicitação.</p>}
        </form>
      </div>
    </section>
  );
}
