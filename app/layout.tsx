import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aloe-site.vercel.app"),
  title: "Aloe Condomínios | Administração Condominial e Síndico Profissional",
  description:
    "Administração condominial com gestão financeira, regularização, suporte operacional, síndico profissional e acompanhamento próximo para condomínios.",
  openGraph: {
    title: "Aloe Condomínios | Administração Condominial e Síndico Profissional",
    description:
      "Administração condominial com gestão financeira, regularização, suporte operacional, síndico profissional e acompanhamento próximo para condomínios.",
    type: "website",
    url: "https://aloe-site.vercel.app",
    images: ["/images/aloe-diretoria-hero.jpg"],
    locale: "pt_BR"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Aloe Administradora de Condomínios",
            url: "https://aloe-site.vercel.app",
            logo: "https://aloe-site.vercel.app/logo-aloe-symbol.png",
            telephone: "+55 11 91042-3492",
            areaServed: ["ABCDM", "Grande São Paulo"],
            address: { "@type": "PostalAddress", addressLocality: "Santo André", addressRegion: "SP", addressCountry: "BR" }
          }) }}
        />
        <AnalyticsEvents />
        {children}
      </body>
    </html>
  );
}
