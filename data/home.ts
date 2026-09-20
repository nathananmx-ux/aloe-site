import {
  AppWindow,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  FileCheck2,
  Handshake,
  Landmark,
  LayoutList,
  MessageSquareText,
  Scale,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Wrench
} from "lucide-react";

export const logo = {
  src: "/logo-aloe-symbol.png",
  alt: "Logo Aloe Condomínios"
};

export const primaryNavItems = [
  { label: "Administração", href: "/#administracao" },
  { label: "Pequenos condomínios", href: "/pequenos-condominios" },
  { label: "Planos", href: "/planos" },
  { label: "Implantação", href: "/implantacao" },
  { label: "Quem somos", href: "/#quem-somos" }
] as const;

export const footerNavItems = [
  ...primaryNavItems,
  { label: "Área do Cliente", href: "/area-do-cliente" },
  { label: "Boletos", href: "/boletos" },
  { label: "Contato", href: "/#contato" }
] as const;

export const managementIndicators = [
  "Prestação de contas organizada",
  "Boletos e pagamentos acompanhados",
  "Síndico profissional disponível",
  "Rotina condominial sob controle"
];

// Faixa de posicionamento. Pode voltar a exibir números quando houver dados reais.
export const authorityItems = [
  {
    title: "Residenciais e Comerciais",
    text: "Atuação para condomínios de diferentes perfis."
  },
  {
    title: "ABCDM e Grande SP",
    text: "Presença regional com atendimento próximo."
  },
  {
    title: "Gerente Exclusivo",
    text: "Acompanhamento dedicado para o síndico."
  },
  {
    title: "Planos especiais para pequenos condomínios",
    text: "Soluções sob medida para até 16 unidades."
  }
];

export const painPoints = [
  "Prestação de contas confusa",
  "Moradores cobrando respostas o tempo todo",
  "Assembleias mal conduzidas",
  "Inadimplência sem acompanhamento",
  "Falta de previsibilidade no caixa",
  "Fornecedores sem controle"
];

export const services = [
  {
    title: "Administração financeira",
    text: "Organização das contas, boletos individualizados, pagamentos da área comum, fundo de caixa e acompanhamento do fluxo financeiro.",
    icon: Banknote
  },
  {
    title: "Prestação de contas",
    text: "Balancete mensal, documentos organizados e informações mais claras para síndico, conselho e moradores.",
    icon: FileCheck2
  },
  {
    title: "Regularização condominial",
    text: "Abertura e regularização de CNPJ, apoio documental e organização da estrutura administrativa do condomínio.",
    icon: Landmark
  },
  {
    title: "Auxílio jurídico",
    text: "Apoio em dúvidas, notificações, multas, cobranças e demandas sensíveis da rotina condominial.",
    icon: Scale
  },
  {
    title: "Síndico profissional",
    text: "Serviço complementar para orçamento, acompanhamento de serviços, visitas mensais e sindicância em geral.",
    icon: UsersRound
  },
  {
    title: "Limpeza e conservação",
    text: "Limpeza das áreas comuns com equipe, produtos e equipamentos próprios quando contratado no plano.",
    icon: Sparkles
  },
  {
    title: "Indicação de profissionais",
    text: "Apoio na busca de profissionais qualificados para orçamentos, manutenções e serviços do condomínio.",
    icon: Wrench
  },
  {
    title: "Aplicativo para moradores",
    text: "Acesso prático à segunda via de boletos, pagamentos e informações do condomínio.",
    icon: AppWindow
  }
];

export const professionalSyndicItems = [
  "Visitas mensais ao condomínio",
  "Acompanhamento de serviços e fornecedores",
  "Orçamentos e apoio em contratações",
  "Suporte em demandas operacionais",
  "Interface com moradores e conselho",
  "Apoio em assembleias e decisões administrativas",
  "Organização da sindicância em geral"
];

export const methodSteps = [
  {
    title: "Diagnóstico",
    text: "Entendemos a operação, documentos, contratos, finanças e principais pontos de atenção do condomínio."
  },
  {
    title: "Organização",
    text: "Estruturamos processos, calendário financeiro, documentos e canais de comunicação."
  },
  {
    title: "Gestão",
    text: "Acompanhamos contas, cobranças, assembleias, obrigações administrativas e demandas do síndico."
  },
  {
    title: "Transparência",
    text: "Entregamos informações claras para síndico, conselho e condôminos, com documentação e rotina de acompanhamento."
  }
];

export const audienceItems = [
  "Condomínios residenciais",
  "Condomínios em implantação",
  "Síndicos profissionais",
  "Síndicos moradores",
  "Conselhos que querem mais controle",
  "Condomínios que precisam trocar de administradora",
  "Condomínios que buscam mais clareza financeira e segurança jurídica"
];

export const partners = [
  {
    name: "Leonardo Almeida",
    role: "CEO",
    image: "/images/leonardo-almeida.jpg",
    imageClassName: "object-[center_35%]",
    description:
      "Engenheiro civil e administrador, gerente de condomínios, responsável pelo time comercial e operacional."
  },
  {
    name: "Leonardo Sandovette",
    role: "COO",
    image: "/images/leonardo-sandovette.jpg",
    imageClassName: "object-[center_58%]",
    description:
      "Pós-graduado em Administração, com ênfase em finanças, síndico profissional e responsável pelo time de backoffice."
  }
];

export const differentials = [
  {
    title: "Atendimento próximo e consultivo",
    text: "Comunicação objetiva com síndico, conselho e moradores, sem burocracia desnecessária.",
    icon: Handshake
  },
  {
    title: "Clareza financeira",
    text: "Rotina de acompanhamento das contas, boletos, pagamentos e fundo de caixa.",
    icon: ClipboardCheck
  },
  {
    title: "Organização documental",
    text: "Documentos, registros e informações estruturados para facilitar decisões e prestação de contas.",
    icon: LayoutList
  },
  {
    title: "Síndico profissional disponível",
    text: "Serviço complementar para condomínios que precisam de acompanhamento operacional mais próximo.",
    icon: BadgeCheck
  },
  {
    title: "Apoio em fornecedores e serviços",
    text: "Indicação de profissionais, apoio em orçamentos e acompanhamento das demandas do condomínio.",
    icon: BriefcaseBusiness
  },
  {
    title: "Aplicativo para moradores",
    text: "Acesso à segunda via de boletos, pagamentos e informações importantes na palma da mão.",
    icon: MessageSquareText
  },
  {
    title: "Conta condominial sem tarifas",
    text: "Apoio na abertura de conta para o condomínio, com soluções bancárias adequadas à rotina condominial.",
    icon: Building2
  },
  {
    title: "Gestão com método",
    text: "Processos claros para reduzir improviso, ruído de comunicação e desorganização administrativa.",
    icon: ShieldCheck
  }
];

export const contact = {
  whatsappLabel: "+55 11 91042-3492",
  whatsappBaseHref: "https://wa.me/5511910423492",
  whatsappHref: `https://wa.me/5511910423492?text=${encodeURIComponent("Olá! Conheci a Aloe pelo site e gostaria de conversar sobre a administração do meu condomínio.")}`,
  email: "contato@almeidagalante.com.br",
  city: "Santo André/SP",
  serviceRegion: "ABCDM e Grande SP"
};
