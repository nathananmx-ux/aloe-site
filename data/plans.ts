export const plans = [
  {
    name: "Basic",
    badge: "Essencial",
    level: 1,
    description: "Administração financeira e documental essencial, sem limpeza mensal incluída.",
    idealFor: "Condomínios que precisam organizar as rotinas administrativas básicas.",
    evolution: "A base administrativa inclui boletos, contas, CNPJ, fundo de caixa, indicação de profissionais e assessoria remota. Não inclui limpeza mensal.",
    benefits: [
      "Boletos e pagamento das contas comuns",
      "Abertura e regularização de CNPJ",
      "Administração do fundo de caixa",
      "Indicação de profissionais",
      "Assessoria jurídica, financeira e condominial remota"
    ],
    featured: false
  },
  {
    name: "Silver",
    badge: "Intermediário",
    level: 2,
    description: "Todos os serviços administrativos do Basic com 1 limpeza mensal das áreas comuns.",
    idealFor: "Condomínios que precisam de uma limpeza mensal além da base administrativa.",
    evolution: "Mantém todos os serviços do Basic e acrescenta 1 limpeza mensal das áreas comuns.",
    benefits: [
      "Todos os serviços do Basic",
      "Fundo de caixa, indicação e assessoria remota já incluídos na base",
      "1 limpeza mensal das áreas comuns"
    ],
    featured: false
  },
  {
    name: "Gold",
    badge: "Mais pedido",
    level: 3,
    description: "Todos os serviços administrativos do Basic com 2 limpezas mensais das áreas comuns.",
    idealFor: "Condomínios que precisam de duas limpezas mensais das áreas comuns.",
    evolution: "Mantém todos os serviços do Basic e inclui 2 limpezas mensais das áreas comuns, uma a mais que o Silver.",
    benefits: [
      "Todos os serviços do Basic",
      "Fundo de caixa, indicação e assessoria remota já incluídos na base",
      "2 limpezas mensais das áreas comuns"
    ],
    featured: true
  },
  {
    name: "Platinum",
    badge: "Avançado",
    level: 4,
    description: "2 limpezas mensais e cuidados preventivos com caixa d'água, portão e iluminação.",
    idealFor: "Condomínios que também precisam de manutenção preventiva recorrente.",
    evolution: "Além das 2 limpezas mensais, inclui limpeza anual da caixa d'água, lubrificação trimestral do portão e troca de lâmpadas queimadas.",
    benefits: [
      "Serviços administrativos essenciais",
      "2 limpezas mensais das áreas comuns",
      "Limpeza anual da caixa d'água",
      "Lubrificação trimestral do portão",
      "Troca de lâmpadas queimadas"
    ],
    featured: false
  },
  {
    name: "Black",
    badge: "Completo",
    level: 5,
    description: "Cuidados preventivos, pinturas programadas e troca de motor queimado do portão.",
    idealFor: "Condomínios que querem incluir as manutenções e pinturas previstas na linha.",
    evolution: "Soma aos serviços do Platinum pinturas do hall, garagem e área externa a cada 5 anos, além da troca de motor queimado do portão.",
    benefits: [
      "Serviços do Platinum, incluindo 2 limpezas mensais",
      "Pintura do hall e garagem a cada 5 anos",
      "Pintura externa a cada 5 anos",
      "Troca de motor queimado do portão"
    ],
    featured: false
  }
];

export const comparisonRows = [
  ["Boleto individualizado por unidade", true, true, true, true, true],
  ["Pagamento de contas da área comum", true, true, true, true, true],
  ["Abertura de conta bancária", true, true, true, true, true],
  ["Abertura e regularização de CNPJ", true, true, true, true, true],
  ["Administração do fundo de caixa", true, true, true, true, true],
  ["Balancete mensal direto no boleto", true, true, true, true, true],
  ["Indicação de profissionais", true, true, true, true, true],
  ["Auxílio jurídico, inclusive cobrança", true, true, true, true, true],
  ["Limpeza das áreas comuns por mês", "-", "1", "2", "2", "2"],
  ["Limpeza anual da caixa d'água", false, false, false, true, true],
  ["Lubrificação trimestral do portão", false, false, false, true, true],
  ["Troca de lâmpadas queimadas", false, false, false, true, true],
  ["Pintura do hall e garagem a cada 5 anos", false, false, false, false, true],
  ["Pintura externa a cada 5 anos", false, false, false, false, true],
  ["Troca de motor queimado do portão", false, false, false, false, true]
] as const;
