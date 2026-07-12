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

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Gestão", href: "#gestao" },
  { label: "Serviços", href: "#servicos" },
  { label: "Síndico profissional", href: "#sindico-profissional" },
  { label: "Planos", href: "#planos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" }
];

export const managementIndicators = [
  "Prestação de contas organizada",
  "Boletos e pagamentos acompanhados",
  "Síndico profissional disponível",
  "Rotina condominial sob controle"
];

// Faixa de posicionamento. Pode voltar a exibir números quando houver dados reais.
export const authorityItems = [
  { title: "Pequenos condomínios", text: "especialidade da Aloe" },
  { title: "Grande ABC", text: "região de atuação" },
  {
    title: "Síndico profissional",
    text: "serviço complementar disponível"
  },
  {
    title: "Gestão por unidade",
    text: "planos adaptados à rotina do condomínio"
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

export const plans = [
  {
    name: "Basic",
    level: 1,
    label: "Essencial",
    description: "Estrutura administrativa essencial",
    idealFor: "Condomínios que precisam do básico bem organizado.",
    evolution: "Base de organização financeira e administrativa.",
    features: [
      "Administração financeira essencial",
      "Boletos e rotina administrativa",
      "Prestação de contas organizada",
      "Suporte básico ao síndico"
    ],
    highlight: "Ponto de partida"
  },
  {
    name: "Silver",
    level: 2,
    label: "Intermediário",
    description: "Mais apoio recorrente na rotina",
    idealFor:
      "Condomínios que querem mais acompanhamento do que o essencial.",
    evolution: "Inclui tudo do Basic e amplia o apoio documental e operacional.",
    features: [
      "Tudo do Basic",
      "Suporte operacional ampliado",
      "Mais apoio documental",
      "Mais proximidade na rotina"
    ],
    highlight: "Evolui em acompanhamento"
  },
  {
    name: "Gold",
    badge: "Mais pedido",
    level: 3,
    label: "Mais pedido",
    description: "Equilíbrio entre gestão, suporte e rotina condominial",
    idealFor: "Condomínios que querem administração mais completa.",
    evolution:
      "Inclui tudo do Silver e traz apoio mais robusto para o síndico.",
    features: [
      "Tudo do Silver",
      "Acompanhamento mais completo",
      "Apoio mais robusto ao síndico",
      "Melhor equilíbrio entre gestão e operação"
    ],
    highlight: "Melhor equilíbrio"
  },
  {
    name: "Platinum",
    level: 4,
    label: "Avançado",
    description: "Gestão mais robusta e preventiva",
    idealFor:
      "Condomínios que precisam de mais presença e previsibilidade.",
    evolution:
      "Inclui tudo do Gold e adiciona uma rotina mais preventiva.",
    features: [
      "Tudo do Gold",
      "Serviços preventivos adicionais",
      "Maior nível de suporte e acompanhamento",
      "Rotina mais estruturada"
    ],
    highlight: "Evolui em prevenção"
  },
  {
    name: "Black",
    level: 5,
    label: "Completo",
    description: "Gestão mais completa da linha",
    idealFor: "Condomínios que querem o máximo nível de suporte.",
    evolution:
      "Inclui tudo do Platinum e amplia a cobertura de acompanhamento.",
    features: [
      "Tudo do Platinum",
      "Pacote mais completo",
      "Maior amplitude de serviços",
      "Acompanhamento ampliado"
    ],
    highlight: "Maior amplitude"
  }
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
    role: "Co-CEO e Sócio-diretor",
    description:
      "Engenheiro civil e administrador, gerente de condomínios, responsável pelo time comercial e operacional da Aloe."
  },
  {
    name: "Leonardo Sandovette",
    role: "Co-CEO e Sócio-diretor",
    description:
      "Pós-graduado em Administração, com ênfase em finanças, síndico profissional e responsável pelo time de backoffice da Aloe."
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

// Substituir por depoimentos reais e autorizados antes da publicação.
export const testimonials = [
  {
    quote:
      "A Aloe trouxe mais método para a rotina do condomínio e deixou as informações mais fáceis de acompanhar.",
    name: "Nome do síndico",
    condo: "Nome do condomínio",
    role: "Síndico"
  },
  {
    quote:
      "O conselho passou a receber documentos melhor organizados e com mais previsibilidade para análise.",
    name: "Nome do conselheiro",
    condo: "Nome do condomínio",
    role: "Conselheiro"
  },
  {
    quote:
      "A comunicação ficou mais objetiva, com respostas claras para os temas financeiros e administrativos.",
    name: "Nome do morador",
    condo: "Nome do condomínio",
    role: "Morador"
  }
];

export const contact = {
  whatsappLabel: "[INSERIR WHATSAPP CORPORATIVO]",
  whatsappHref: "#contato",
  email: "[INSERIR E-MAIL CORPORATIVO]",
  city: "Santo André/SP",
  serviceRegion: "Grande ABC e região, se aplicável"
};
