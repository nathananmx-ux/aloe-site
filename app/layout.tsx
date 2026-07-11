import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aloe Condomínios | Administração Condominial e Síndico Profissional",
  description:
    "Administração condominial com gestão financeira, regularização, suporte operacional, síndico profissional e acompanhamento próximo para condomínios.",
  openGraph: {
    title: "Aloe Condomínios | Administração Condominial e Síndico Profissional",
    description:
      "Administração condominial com gestão financeira, regularização, suporte operacional, síndico profissional e acompanhamento próximo para condomínios.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
