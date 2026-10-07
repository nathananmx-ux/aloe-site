# Aloe Condomínios

Site institucional em Next.js com Blog integrado ao Sanity CMS.

## Configuração do Sanity

1. Crie ou selecione um projeto em `sanity.io/manage`.
2. Copie `.env.example` para `.env.local` e preencha os valores.
3. Use o mesmo `projectId`, dataset e API version nas variáveis de servidor e nas variáveis `NEXT_PUBLIC_*` do Studio.
4. Não exponha `SANITY_READ_TOKEN` nem `SANITY_REVALIDATE_SECRET` no navegador.
5. No projeto Sanity, adicione as origens `http://localhost:3000` e `https://aloe-site.vercel.app` em **API > CORS Origins**, habilitando credenciais para o Studio.
6. Cadastre as mesmas variáveis no projeto da Vercel e faça um novo deploy.

Depois da configuração, o painel fica em `/studio`. O login e as permissões são administrados pelo próprio Sanity.

## Atualização automática

O site consulta o conteúdo publicado a cada 60 segundos. Para atualização imediata, crie um webhook no Sanity:

- URL: `https://aloe-site.vercel.app/api/revalidate`
- Método: `POST`
- Filtro: `_type == "post"`
- Projeção: `{_type, "slug": slug.current}`
- Secret: o mesmo valor de `SANITY_REVALIDATE_SECRET`
- Eventos: create, update e delete

O endpoint valida a assinatura antes de revalidar `/blog` e a página do artigo.

## Conteúdo inicial

Enquanto não houver posts publicados no dataset, o Blog utiliza os seis artigos de `data/blog.ts` como fallback. Eles também servem como referência para o primeiro cadastro manual no Studio.

## Comandos

- `pnpm dev`: desenvolvimento local
- `pnpm build`: build de produção
- `pnpm start`: servidor de produção local
- `pnpm sanity`: comandos da CLI do Sanity
