// Registro único de mídia. Cada fotografia ocupa um único slot editorial.
export const mediaMap = {
  home: {
    heroInstitutional: {
      src: "/images/aloe-diretoria-hero.jpg",
      alt: "Diretores da Aloe Administradora de Condomínios",
      source: "Acervo Aloe"
    },
    heroSmallCondo: {
      src: "/images/temporary-small-condo.jpg",
      alt: "Condomínio residencial de pequeno porte",
      source: "Pexels photo 23172027"
    },
    heroManagement: {
      src: "/images/temporary-residential-hall.jpg",
      alt: "Área de circulação residencial bem conservada",
      source: "Pexels photo 6296916"
    },
    organize: {
      financial: {
        src: "/images/temporary-admin-work.jpg",
        alt: "Relatórios e notebook em uma rotina financeira organizada",
        source: "Pexels photo 7964540"
      },
      administrative: {
        src: "/images/organiza-administrativo.jpg",
        alt: "Documentos organizados em uma estação administrativa",
        source: "Pexels photo 8353764"
      },
      assemblies: {
        src: "/images/temporary-assembly-work.jpg",
        alt: "Mesa de reunião com relatórios e documentos organizados",
        source: "Pexels photo 7109315"
      },
      collection: {
        src: "/images/organiza-cobranca.jpg",
        alt: "Notebook e relatórios usados no controle financeiro",
        source: "Pexels photo 6801649"
      },
      operations: {
        src: "/images/temporary-condo-corridor.jpg",
        alt: "Área comum iluminada e bem conservada",
        source: "Pexels photo 18123382"
      },
      communication: {
        src: "/images/organiza-comunicacao.jpg",
        alt: "Smartphone integrado a uma estação de trabalho organizada",
        source: "Pexels photo 8004045"
      }
    },
    condoNow: {
      home: { src: "/images/condonow-official-01.jpg", alt: "Menu oficial do aplicativo CondoNow" },
      boleto: { src: "/images/condonow-official-03.jpg", alt: "Tela oficial com detalhes de boleto no CondoNow" },
      financial: { src: "/images/condonow-official-04.jpg", alt: "Tela oficial de balancete do CondoNow" }
    },
    smallCondominiums: {
      src: "/images/pequenos-condominios-home.jpg",
      alt: "Edifício residencial de médio padrão cercado por área verde",
      source: "Pexels photo 32194032"
    }
  },
  administration: {
    hero: {
      src: "/images/administracao-hero.jpg",
      alt: "Entrada de edifício residencial acompanhada pela administração",
      source: "Pexels photo 31406338"
    },
    financial: {
      src: "/images/administracao-financeiro.jpg",
      alt: "Documentos e notebook em uma rotina de controle financeiro",
      source: "Pexels photo 7545311"
    },
    assemblies: {
      src: "/images/administracao-assembleias.jpg",
      alt: "Sala preparada para reunião e tomada de decisões",
      source: "Pexels photo 13323677"
    },
    operations: {
      src: "/images/administracao-operacao.jpg",
      alt: "Hall residencial organizado e bem conservado",
      source: "Pexels photo 7031907"
    }
  },
  smallCondominiumsPage: {
    hero: {
      src: "/images/pequenos-hero.jpg",
      alt: "Condomínio residencial de pequeno porte com jardim",
      source: "Pexels photo 35304920"
    },
    base: {
      src: "/images/pequenos-base.jpg",
      alt: "Área de circulação residencial limpa e organizada",
      source: "Pexels photo 6903159"
    },
    services: {
      src: "/images/pequenos-servicos.jpg",
      alt: "Área comum residencial conservada e iluminada",
      source: "Pexels photo 35179884"
    },
    conservation: {
      src: "/images/pequenos-conservacao.jpg",
      alt: "Edifício residencial de pequeno porte cercado por área verde",
      source: "Pexels photo 31944646"
    }
  },
  plans: {
    hero: {
      src: "/images/planos-hero.jpg",
      alt: "Conjunto residencial com áreas comuns ajardinadas",
      source: "Pexels photo 34360413"
    },
    evolution: {
      src: "/images/planos-evolucao.jpg",
      alt: "Condomínio residencial com fachada e paisagismo conservados",
      source: "Pexels photo 28463539"
    }
  },
  implantation: {
    hero: {
      src: "/images/implantacao-condominio.png",
      alt: "Entrada de um condomínio recém-entregue",
      source: "Acervo Aloe"
    },
    structure: {
      src: "/images/implantacao-estrutura.jpg",
      alt: "Entrada organizada de um empreendimento residencial",
      source: "Pexels photo 8082198"
    },
    process: {
      src: "/images/implantacao-processo.jpg",
      alt: "Documentos preparados para o início da implantação",
      source: "Pexels photo 9869392"
    }
  }
} as const;
