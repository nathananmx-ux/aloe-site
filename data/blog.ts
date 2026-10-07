import type { PortableTextBlock } from "@portabletext/types";

export type BlogImage = {
  asset?: { _ref?: string; _type?: string };
  alt?: string;
  crop?: Record<string, number>;
  hotspot?: Record<string, number>;
};

export type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  mainImage?: BlogImage;
  publishedAt?: string;
  author: string;
  featured: boolean;
  body?: PortableTextBlock[];
  fallbackBody?: string[];
  source: "sanity" | "fallback";
};

// Conteúdo temporário: aparece somente enquanto o Sanity não possui posts publicados.
export const fallbackBlogPosts: BlogPost[] = [
  {
    _id: "fallback-small-condo-administration",
    title: "Como organizar a administração de um pequeno condomínio",
    slug: "como-organizar-administracao-pequeno-condominio",
    excerpt:
      "Uma visão prática sobre documentos, contas, responsabilidades e rotinas que ajudam a manter a gestão organizada.",
    category: "Gestão condominial",
    author: "Aloe Condomínios",
    featured: true,
    source: "fallback",
    fallbackBody: [
      "Mesmo com poucas unidades, um condomínio precisa definir responsabilidades, organizar documentos e acompanhar entradas e despesas com regularidade.",
      "Uma base simples começa por cadastro atualizado, calendário financeiro, arquivo de contratos, registro das decisões e um canal claro para as demandas dos moradores.",
      "Quando essas rotinas conversam entre si, o síndico ganha contexto para decidir e os condôminos encontram informações com mais facilidade."
    ]
  },
  {
    _id: "fallback-professional-manager",
    title: "Síndico profissional: quando vale a pena contratar?",
    slug: "sindico-profissional-quando-vale-a-pena-contratar",
    excerpt:
      "Os contextos em que uma atuação profissional pode trazer mais continuidade, mediação e clareza para o condomínio.",
    category: "Síndico profissional",
    author: "Aloe Condomínios",
    featured: false,
    source: "fallback",
    fallbackBody: [
      "A contratação de um síndico profissional pode fazer sentido quando falta disponibilidade entre os moradores ou quando a rotina exige acompanhamento mais frequente.",
      "O papel profissional não elimina a participação do conselho. Ele organiza a execução, acompanha fornecedores e transforma as decisões coletivas em rotinas verificáveis.",
      "Antes da escolha, o condomínio deve alinhar escopo, autonomia, prestação de contas e canais de comunicação."
    ]
  },
  {
    _id: "fallback-individual-billing",
    title: "Boleto individualizado: como isso melhora a rotina do condomínio",
    slug: "boleto-individualizado-rotina-condominio",
    excerpt:
      "Como a individualização contribui para a organização da arrecadação e para o acompanhamento financeiro.",
    category: "Financeiro",
    author: "Aloe Condomínios",
    featured: false,
    source: "fallback",
    fallbackBody: [
      "O boleto individualizado ajuda a identificar pagamentos por unidade e reduz controles paralelos na rotina financeira.",
      "Com a arrecadação organizada, o acompanhamento de vencimentos e a conciliação ficam mais claros para administração, síndico e conselho.",
      "A adoção deve vir acompanhada de cadastro correto das unidades, calendário de emissão e orientação objetiva aos moradores."
    ]
  },
  {
    _id: "fallback-default-reduction",
    title: "Como reduzir a inadimplência em condomínios pequenos",
    slug: "como-reduzir-inadimplencia-condominios-pequenos",
    excerpt:
      "Medidas de organização, comunicação e acompanhamento que ajudam a cuidar da saúde financeira condominial.",
    category: "Inadimplência",
    author: "Aloe Condomínios",
    featured: false,
    source: "fallback",
    fallbackBody: [
      "Em condomínios pequenos, poucos atrasos já podem comprometer uma parte relevante do caixa e afetar despesas essenciais.",
      "A prevenção passa por orçamento realista, vencimentos bem comunicados e acompanhamento constante, com registros que evitem abordagens improvisadas.",
      "Quando necessário, a cobrança deve seguir a convenção, as decisões aprovadas e a orientação jurídica adequada."
    ]
  },
  {
    _id: "fallback-condo-cnpj",
    title: "CNPJ do condomínio: por que regularizar e como funciona",
    slug: "cnpj-condominio-por-que-regularizar",
    excerpt:
      "O papel do CNPJ na estrutura administrativa e os principais passos para manter a documentação regular.",
    category: "Regularização",
    author: "Aloe Condomínios",
    featured: false,
    source: "fallback",
    fallbackBody: [
      "O CNPJ identifica o condomínio perante instituições financeiras, fornecedores e órgãos públicos, mesmo que o condomínio não seja uma empresa.",
      "A regularização facilita a abertura de conta, a contratação de serviços e o cumprimento das obrigações administrativas.",
      "O processo depende da documentação de constituição e dos registros do condomínio, por isso deve começar com uma conferência organizada do acervo existente."
    ]
  },
  {
    _id: "fallback-condo-meeting",
    title: "Assembleia de condomínio: cuidados para evitar conflitos",
    slug: "assembleia-condominio-cuidados-evitar-conflitos",
    excerpt:
      "Preparação, comunicação e registro como bases para reuniões mais objetivas e decisões melhor compreendidas.",
    category: "Assembleia",
    author: "Aloe Condomínios",
    featured: false,
    source: "fallback",
    fallbackBody: [
      "Uma assembleia produtiva começa antes da reunião, com convocação adequada, pauta clara e materiais enviados com antecedência.",
      "Durante o encontro, a condução deve preservar o foco da pauta e registrar propostas, votações e encaminhamentos de forma objetiva.",
      "Depois, a ata precisa refletir o que foi decidido e orientar as próximas ações da administração e do síndico."
    ]
  }
];
