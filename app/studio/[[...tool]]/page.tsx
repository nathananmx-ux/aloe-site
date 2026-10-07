import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";
import { isStudioConfigured } from "@/sanity/env";

export const dynamic = "force-static";
export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!isStudioConfigured) {
    return (
      <main className="min-h-screen bg-paper px-6 py-20 text-ink">
        <div className="mx-auto max-w-2xl border border-moss/20 bg-porcelain p-8 md:p-12">
          <p className="eyebrow">Studio Aloe</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold">
            O painel está pronto para ser conectado.
          </h1>
          <p className="mt-6 leading-8 text-graphite/75">
            Configure as variáveis públicas do Sanity descritas no arquivo
            .env.example e faça um novo deploy. Depois disso, o acesso a esta
            rota será protegido pelo login e pelas permissões do projeto Sanity.
          </p>
        </div>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
