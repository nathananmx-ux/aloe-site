export const planWhatsAppBase = "https://wa.me/5511910423492?text=";

export function getPlanWhatsAppHref(planName: string) {
  const message = `Olá, tenho interesse no Plano ${planName} da Aloe para condomínio de até 16 unidades. Gostaria de receber mais informações e uma proposta.`;

  return `${planWhatsAppBase}${encodeURIComponent(message)}`;
}
