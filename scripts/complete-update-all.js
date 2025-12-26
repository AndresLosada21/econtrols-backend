const axios = require("axios");

const API_URL = "http://localhost:1337/api";

async function updateAllProjects() {
  console.log("📁 Atualizando TODOS os Projects com relações e SEO...");

  const projectsData = [
    {
      id: 1,
      data: {
        title: "Cibersegurança de Sistemas Ciber-Físicos Industriais",
        slug: "cybersecurity-cyber-physical-systems",
        shortDescription:
          "Desenvolvimento de técnicas avançadas de defesa contra ataques cibernéticos em sistemas de controle industrial.",
        summary:
          "Projeto focado no desenvolvimento de técnicas de defesa para ataques cibernéticos em sistemas ciber-físicos industriais, utilizando verificação formal e detecção de intrusão.",
        fullDescription:
          "Este projeto desenvolve e valida técnicas avançadas de cibersegurança para sistemas ciber-físicos industriais, combinando métodos formais de verificação (model checking) com sistemas de detecção de intrusão baseados em aprendizado de máquina. O objetivo é garantir a operação segura e confiável de infraestruturas críticas na região amazônica, incluindo sistemas de energia, água e processos industriais.",
        status: "Em Andamento",
        fundingAgency: "FAPEAM",
        fundingAmount: 150000,
        processNumber: "0148.2024.2.23.0050",
        startDate: "2024-01-01",
        endDate: "2027-12-31",
        duration: "48 meses",
        progressPercentage: 35,
        currentStatus:
          "Desenvolvimento de testbed experimental para validação de técnicas de detecção de intrusão.",
        objectives:
          "Desenvolver e testar técnicas de defesa cibernética para sistemas ciber-físicos, incluindo detecção de intrusão, verificação formal e tolerância a ataques.",
        methodology:
          "Metodologia baseada em verificação formal usando model checking (ESBMC), desenvolvimento de sistemas de detecção de intrusão usando machine learning, e testes de penetração em sistemas embarcados industriais.",
        expectedResults:
          "Protótipos de sistemas de defesa cibernética, algoritmos de detecção de intrusão validados experimentalmente, e publicações científicas em revistas e conferências internacionais de alto impacto.",
        achievedResults:
          "Testbed experimental montado com PLCs e sistemas SCADA, 3 artigos submetidos a conferências internacionais (IEEE CCTA, ACC, IFAC), 1 artigo aceito em periódico Q1.",
        impactLegacy:
          "Benefício direto para a indústria local através da transferência de tecnologia de cibersegurança, fortalecimento da segurança de sistemas críticos na Amazônia, e formação de recursos humanos especializados.",
        keywords: [
          "Cibersegurança",
          "Sistemas Ciber-Físicos",
          "Verificação Formal",
          "Sistemas de Controle Industrial",
          "Detecção de Intrusão",
          "Model Checking",
        ],
        websiteUrl: "https://econtrols.ufam.edu.br/projetos/cybersecurity",
        repositoryUrl: "https://github.com/e-controls-ufam/cybersecurity-cps",
        showOnHomepage: true,
        displayOrder: 1,
        researchLine: 2,
        coordinator: 1,
        teamMembers: [1, 9, 13],
        relatedPublications: [1],
        relatedPartners: [1],
        relatedNews: [1],
        seo: {
          metaTitle: "Cibersegurança Sistemas Ciber-Físicos - e-Controls",
          metaDescription:
            "Projeto FAPEAM de cibersegurança para sistemas industriais usando verificação formal e detecção de intrusão com IA na Amazônia.",
          keywords:
            "cibersegurança, sistemas ciber-físicos, verificação formal",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/projetos/cybersecurity-cyber-physical-systems",
        },
      },
    },
    {
      id: 2,
      data: {
        title: "Samsung-UFAM Project for Education and Research (SUPER)",
        slug: "samsung-ufam-super-project",
        shortDescription:
          "Programa de capacitação e P&D em eletrônica de potência e sistemas de controle para a indústria.",
        summary:
          "Programa de capacitação e pesquisa em áreas estratégicas de eletrônica de potência, sistemas de controle e indústria 4.0, em parceria com Samsung Electronics.",
        fullDescription:
          "O projeto SUPER é uma parceria estratégica entre UFAM e Samsung Electronics para capacitação de recursos humanos e desenvolvimento de pesquisa aplicada em eletrônica de potência, sistemas de controle, microrredes e indústria 4.0. O programa inclui cursos intensivos, orientação de projetos de mestrado e doutorado, desenvolvimento de protótipos experimentais, e transferência de tecnologia para a indústria local.",
        status: "Em Andamento",
        fundingAgency: "Samsung Electronics da Amazônia Ltda.",
        fundingAmount: 800000,
        processNumber: "Samsung-UFAM-SUPER-2020",
        startDate: "2020-01-01",
        endDate: "2024-12-31",
        duration: "60 meses",
        progressPercentage: 85,
        currentStatus:
          "Fase final de execução, com transferência de tecnologia e publicação de resultados.",
        objectives:
          "Capacitar recursos humanos em áreas estratégicas de eletrônica de potência e sistemas de controle, realizar pesquisa aplicada com foco em microrredes e indústria 4.0, desenvolver protótipos experimentais, e transferir tecnologia para a indústria.",
        methodology:
          "Aulas teóricas e práticas intensivas, orientação individualizada de projetos de pesquisa (mestrado e doutorado), desenvolvimento de protótipos experimentais em laboratório, e workshops de transferência de tecnologia com empresas parceiras.",
        expectedResults:
          "Formação de 10 mestres e doutores, desenvolvimento de 5 protótipos experimentais, publicação de 8 artigos em revistas e conferências internacionais, e registro de 2 patentes.",
        achievedResults:
          "15 estudantes capacitados (10 mestres, 5 doutores), 7 protótipos desenvolvidos e validados experimentalmente, 12 artigos publicados em revistas Q1 e conferências IEEE, 3 pedidos de patente depositados.",
        impactLegacy:
          "Fortalecimento do parque industrial da Amazônia através da formação de recursos humanos qualificados, transferência de tecnologia avançada para empresas locais, e consolidação da pesquisa em eletrônica de potência na região Norte.",
        keywords: [
          "Eletrônica de Potência",
          "Sistemas de Controle",
          "Microrredes",
          "Educação em Engenharia",
          "Indústria 4.0",
          "Capacitação",
        ],
        websiteUrl: "https://econtrols.ufam.edu.br/projetos/super",
        repositoryUrl: "https://github.com/e-controls-ufam/super-project",
        showOnHomepage: true,
        displayOrder: 2,
        researchLine: 3,
        coordinator: 2,
        teamMembers: [2, 3, 11],
        relatedPublications: [2, 3],
        relatedPartners: [1],
        relatedNews: [2],
        seo: {
          metaTitle: "Projeto SUPER Samsung-UFAM - e-Controls",
          metaDescription:
            "Capacitação e P&D em eletrônica de potência, controle e indústria 4.0 em parceria Samsung-UFAM para a Amazônia.",
          keywords: "samsung, eletrônica potência, microrredes, indústria 4.0",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/projetos/samsung-ufam-super-project",
        },
      },
    },
    {
      id: 3,
      data: {
        title: "Estabilidade e Controle de Microrredes CC",
        slug: "estabilidade-controle-microrredes-cc",
        shortDescription:
          "Pesquisa em análise de estabilidade e desenvolvimento de controladores para microrredes de corrente contínua.",
        summary:
          "Projeto de pesquisa focado na análise de estabilidade e desenvolvimento de técnicas avançadas de controle para microrredes de corrente contínua com alta penetração de fontes renováveis.",
        fullDescription:
          "Este projeto investiga técnicas avançadas de análise de estabilidade e desenvolvimento de controladores robustos para microrredes de corrente contínua com alta penetração de fontes de energia renovável. A pesquisa abrange modelagem de conversores CC-CC, análise de estabilidade usando critério de Nyquist generalizado, projeto de controladores robustos usando desigualdades matriciais lineares (LMIs), e validação experimental em testbed de laboratório.",
        status: "Concluído",
        fundingAgency: "CNPq",
        fundingAmount: 45000,
        processNumber: "CNPq-408690/2021-0",
        startDate: "2021-03-01",
        endDate: "2023-02-28",
        duration: "24 meses",
        progressPercentage: 100,
        currentStatus:
          "Projeto concluído com sucesso, resultados publicados em periódicos internacionais.",
        objectives:
          "Desenvolver modelos matemáticos precisos de conversores CC-CC, realizar análise de estabilidade de microrredes CC usando ferramentas avançadas, projetar controladores robustos, e validar experimentalmente os resultados.",
        methodology:
          "Modelagem matemática usando averaged models, análise de estabilidade usando critério de Nyquist generalizado e análise de impedância, projeto de controladores usando LMIs e técnicas de controle robusto H-infinito, e validação experimental.",
        expectedResults:
          "Modelos matemáticos validados, técnicas de análise de estabilidade implementadas, controladores robustos desenvolvidos, publicação de 4 artigos científicos, e dissertação de mestrado defendida.",
        achievedResults:
          "Todos os objetivos alcançados: 2 artigos em periódicos Q1 (IEEE Transactions on Power Electronics, IEEE Transactions on Industrial Electronics), 3 artigos em conferências IEEE, 1 dissertação de mestrado defendida com distinção.",
        impactLegacy:
          "Contribuição científica para área de microrredes CC, formação de recursos humanos especializados, e desenvolvimento de ferramentas de análise disponibilizadas para comunidade científica.",
        keywords: [
          "Microrredes CC",
          "Estabilidade",
          "Controle Robusto",
          "Conversores CC-CC",
          "Energia Renovável",
          "LMI",
        ],
        websiteUrl: "https://econtrols.ufam.edu.br/projetos/microrredes-cc",
        repositoryUrl: "https://github.com/e-controls-ufam/dc-microgrids",
        showOnHomepage: true,
        displayOrder: 3,
        researchLine: 3,
        coordinator: 2,
        teamMembers: [2, 11],
        relatedPublications: [3, 4],
        relatedPartners: [2],
        relatedNews: [],
        seo: {
          metaTitle: "Microrredes CC Estabilidade Controle - e-Controls",
          metaDescription:
            "Pesquisa CNPq em estabilidade e controle robusto de microrredes CC com fontes renováveis na Amazônia.",
          keywords:
            "microrredes cc, estabilidade, controle robusto, energia renovável",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/projetos/estabilidade-controle-microrredes-cc",
        },
      },
    },
    {
      id: 4,
      data: {
        title: "Robôs Móveis Autônomos para Ambientes Não Estruturados",
        slug: "robos-moveis-autonomos-ambientes-nao-estruturados",
        shortDescription:
          "Desenvolvimento de algoritmos de navegação autônoma para robôs móveis terrestres em ambientes não estruturados.",
        summary:
          "Projeto de pesquisa em desenvolvimento de algoritmos avançados de navegação autônoma para robôs móveis terrestres operando em ambientes não estruturados da Amazônia.",
        fullDescription:
          "Este projeto desenvolve algoritmos avançados de navegação autônoma para robôs móveis terrestres capazes de operar em ambientes não estruturados característicos da região amazônica. A pesquisa combina técnicas de SLAM (Simultaneous Localization and Mapping), planejamento de trajetórias usando RRT* (Rapidly-exploring Random Trees), e deep learning para detecção e classificação de obstáculos. O projeto inclui desenvolvimento de simuladores realísticos e validação experimental em ambiente real.",
        status: "Em Andamento",
        fundingAgency: "CAPES",
        fundingAmount: 120000,
        processNumber: "CAPES-88887.595615/2023-00",
        startDate: "2023-06-01",
        endDate: "2027-05-31",
        duration: "48 meses",
        progressPercentage: 45,
        currentStatus:
          "Desenvolvimento de algoritmos de SLAM e validação em simulador Gazebo.",
        objectives:
          "Desenvolver algoritmos de SLAM para ambientes não estruturados, implementar planejamento de trajetórias usando RRT*, desenvolver sistema de detecção de obstáculos usando deep learning, e validar experimentalmente em robô móvel real.",
        methodology:
          "Desenvolvimento de algoritmos de SLAM usando filtro de partículas e graph optimization, planejamento de trajetórias usando RRT* com custos adaptativos, treinamento de redes neurais convolucionais para detecção de obstáculos, simulação usando Gazebo e ROS, e validação experimental.",
        expectedResults:
          "Algoritmos de navegação autônoma implementados e validados, publicação de 6 artigos científicos, desenvolvimento de tese de doutorado, e demonstração em ambiente real amazônico.",
        achievedResults:
          "Algoritmos de SLAM implementados e testados em simulador, rede neural treinada com dataset amazônico, 2 artigos publicados em conferências IEEE Robotics and Automation.",
        impactLegacy:
          "Desenvolvimento de tecnologia nacional de robótica para aplicações amazônicas, formação de recursos humanos em robótica avançada, e potencial aplicação em monitoramento ambiental e logística.",
        keywords: [
          "Robótica Móvel",
          "Navegação Autônoma",
          "SLAM",
          "Deep Learning",
          "RRT*",
          "Ambientes Não Estruturados",
        ],
        websiteUrl: "https://econtrols.ufam.edu.br/projetos/robos-autonomos",
        repositoryUrl: "https://github.com/e-controls-ufam/autonomous-robots",
        showOnHomepage: true,
        displayOrder: 4,
        researchLine: 1,
        coordinator: 7,
        teamMembers: [6, 7],
        relatedPublications: [5],
        relatedPartners: [3],
        relatedNews: [],
        seo: {
          metaTitle: "Robôs Autônomos Ambientes Não Estruturados",
          metaDescription:
            "Pesquisa CAPES em navegação autônoma de robôs móveis com SLAM e deep learning para ambientes amazônicos.",
          keywords:
            "robótica móvel, navegação autônoma, SLAM, deep learning, Amazônia",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/projetos/robos-moveis-autonomos-ambientes-nao-estruturados",
        },
      },
    },
    {
      id: 5,
      data: {
        title:
          "Desenvolvimento de Controladores Inteligentes para Processos Industriais",
        slug: "controladores-inteligentes-processos-industriais",
        shortDescription:
          "Projeto de desenvolvimento de controladores baseados em inteligência computacional para otimização de processos industriais.",
        summary:
          "Este projeto visa desenvolver controladores inteligentes utilizando técnicas de inteligência computacional para otimizar processos industriais em diversos setores.",
        fullDescription:
          "O projeto desenvolve controladores inteligentes baseados em inteligência computacional, incluindo redes neurais artificiais, sistemas fuzzy e algoritmos genéticos, aplicados à otimização de processos industriais. Serão desenvolvidas soluções para indústrias de transformação, química e de energia, com foco em eficiência energética e redução de custos operacionais. A pesquisa inclui desenvolvimento de modelos de processos usando redes neurais, otimização de parâmetros de controladores PID usando algoritmos genéticos, e implementação de controladores fuzzy adaptativos.",
        status: "Em Andamento",
        fundingAgency: "CNPq",
        fundingAmount: 500000,
        processNumber: "CNPq-123456/2023-0",
        startDate: "2023-01-01",
        endDate: "2025-12-31",
        duration: "36 meses",
        progressPercentage: 65,
        currentStatus:
          "Em desenvolvimento dos algoritmos de controle inteligente e validação em plantas piloto.",
        objectives:
          "Desenvolver controladores inteligentes para processos industriais, implementar técnicas de otimização usando algoritmos genéticos, desenvolver sistemas de controle fuzzy adaptativos, e validar em ambientes industriais reais.",
        methodology:
          "Desenvolvimento teórico de controladores inteligentes, simulação computacional usando Matlab/Simulink, implementação em laboratório usando plantas piloto, e testes em ambiente industrial com empresas parceiras do Polo Industrial de Manaus.",
        expectedResults:
          "Controladores inteligentes implementados e validados, publicações científicas em revistas internacionais, patentes de algoritmos de controle, e transferência de tecnologia para empresas parceiras.",
        achievedResults:
          "Algoritmos de controle fuzzy desenvolvidos, protótipos testados em laboratório, 5 artigos publicados (2 periódicos Q1, 3 conferências), 1 pedido de patente em análise.",
        impactLegacy:
          "Contribuição para a indústria 4.0 brasileira, redução de custos industriais através de otimização de processos, aumento da competitividade de empresas amazônicas, e formação de mestres e doutores especializados.",
        keywords: [
          "Controle Inteligente",
          "Processos Industriais",
          "Otimização",
          "Redes Neurais",
          "Algoritmos Genéticos",
          "Sistemas Fuzzy",
        ],
        websiteUrl:
          "https://econtrols.ufam.edu.br/projetos/controladores-inteligentes",
        repositoryUrl:
          "https://github.com/econtrols/controladores-inteligentes",
        showOnHomepage: true,
        displayOrder: 5,
        researchLine: 1,
        coordinator: 1,
        teamMembers: [1, 2, 4, 13],
        relatedPublications: [1],
        relatedPartners: [1, 4],
        relatedNews: [1],
        seo: {
          metaTitle: "Controladores Inteligentes - e-Controls UFAM",
          metaDescription:
            "Projeto CNPq de desenvolvimento de controladores inteligentes com IA para otimizar processos industriais na Amazônia.",
          keywords:
            "controladores inteligentes, IA, processos industriais, fuzzy",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/projetos/controladores-inteligentes-processos-industriais",
        },
      },
    },
  ];

  for (const project of projectsData) {
    try {
      await axios.put(`${API_URL}/projects/${project.id}`, project);
      console.log(`✅ Project ${project.id} atualizado: ${project.data.title}`);
    } catch (error) {
      console.error(
        `❌ Erro ao atualizar project ${project.id}:`,
        error.response?.data || error.message,
      );
    }
  }
}

async function updateAllAlumni() {
  console.log("\n📚 Atualizando TODOS os Alumni com relações e SEO...");

  const alumniData = [
    {
      id: 1,
      data: {
        fullName: "Isaías Valente de Bessa",
        slug: "isaias-bessa",
        degreeLevel: "Mestrado",
        thesisTitle:
          "Desenvolvimento de Sistema Auxiliar Ativo para Microrredes CC com Armazenamento de Energia",
        advisor: "Prof. Dr. Renan Landau Paiva de Medeiros",
        defenseYear: 2022,
        currentPosition: "Engenheiro de P&D Sênior",
        currentInstitution: "Sidia Instituto de Ciência e Tecnologia",
        researchTopic:
          "Microrredes de Corrente Contínua, Eletrônica de Potência, Sistemas de Armazenamento de Energia, Conversores CC-CC",
        lattesUrl: "http://lattes.cnpq.br/1122334455667788",
        linkedinUrl: "https://linkedin.com/in/isaiasbessa",
        email: "isaias.bessa@sidia.com",
        publicationsCount: 12,
        currentSector: "Indústria",
        displayOrder: 1,
        researchLines: [3],
        advisedBy: [2],
        seo: {
          metaTitle: "Isaías Valente de Bessa - Alumni e-Controls",
          metaDescription:
            "Mestre em Engenharia Elétrica pela UFAM, Engenheiro de P&D Sênior na Sidia, especialista em microrredes CC.",
          keywords: "isaías bessa, microrredes cc, sidia, engenharia elétrica",
          metaRobots: "index, follow",
          canonicalURL: "https://econtrols.ufam.edu.br/alumni/isaias-bessa",
        },
      },
    },
    {
      id: 2,
      data: {
        fullName: "Marenice Melo de Carvalho",
        slug: "marenice-carvalho",
        degreeLevel: "Mestrado",
        thesisTitle:
          "Investigação de Técnicas de Controle para Sistemas de Potência com Geração Distribuída",
        advisor: "Prof. Dr. Renan Landau Paiva de Medeiros",
        defenseYear: 2022,
        currentPosition: "Pesquisadora em Pós-Doutorado",
        currentInstitution: "Universidade Federal do Amazonas",
        researchTopic:
          "Controle de Sistemas de Potência, Geração Distribuída, Smart Grids, Estabilidade de Tensão",
        lattesUrl: "http://lattes.cnpq.br/2233445566778899",
        linkedinUrl: "https://linkedin.com/in/marenicecarvalho",
        email: "marenice.carvalho@ufam.edu.br",
        publicationsCount: 15,
        currentSector: "Academia",
        displayOrder: 2,
        researchLines: [3],
        advisedBy: [2],
        seo: {
          metaTitle: "Marenice Melo de Carvalho - Alumni e-Controls",
          metaDescription:
            "Mestre e pós-doutoranda em Engenharia Elétrica UFAM, especialista em controle de sistemas de potência.",
          keywords: "marenice carvalho, sistemas potência, geração distribuída",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/alumni/marenice-carvalho",
        },
      },
    },
    {
      id: 3,
      data: {
        fullName: "Claudia Sabrina Monteiro da Silva",
        slug: "claudia-sabrina-monteiro",
        degreeLevel: "Mestrado",
        thesisTitle:
          "Controle de Ordem Fracionária para Conversores Estáticos de Potência",
        advisor: "Prof. Dr. Florindo Antonio de Carvalho Ayres Júnior",
        defenseYear: 2021,
        currentPosition: "Doutoranda em Cotutela Internacional",
        currentInstitution:
          "UFAM / LAMIH (Université Polytechnique Hauts-de-France, França)",
        researchTopic:
          "Controle Fracionário, Eletrônica de Potência, Conversores CC-CC, Sistemas de Energia Renovável",
        lattesUrl: "http://lattes.cnpq.br/3344556677889900",
        linkedinUrl: "https://linkedin.com/in/claudiasabrinamonteiro",
        email: "claudia.monteiro@ufam.edu.br",
        publicationsCount: 10,
        currentSector: "Academia",
        displayOrder: 3,
        researchLines: [3],
        advisedBy: [5],
        seo: {
          metaTitle: "Claudia Sabrina Monteiro - Alumni e-Controls",
          metaDescription:
            "Mestre e doutoranda em cotutela UFAM-França, especialista em controle fracionário de conversores de potência.",
          keywords:
            "claudia monteiro, controle fracionário, eletrônica potência",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/alumni/claudia-sabrina-monteiro",
        },
      },
    },
    {
      id: 4,
      data: {
        fullName: "Lucas Figueiredo Santos",
        slug: "lucas-figueiredo",
        degreeLevel: "Iniciação Científica/TCC",
        thesisTitle:
          "Ferramenta Computacional para Análise de Estabilidade de Microrredes Híbridas CC/CA",
        advisor: "Prof. Dr. Iury Valente de Bessa",
        defenseYear: 2021,
        currentPosition: "Engenheiro de Software Sênior",
        currentInstitution: "TPV Technology do Brasil",
        researchTopic:
          "Automação de Sistemas de Energia, Microrredes, Análise de Estabilidade, Desenvolvimento de Software Científico",
        lattesUrl: "http://lattes.cnpq.br/4455667788990011",
        linkedinUrl: "https://linkedin.com/in/lucasfigueiredosantos",
        email: "lucas.figueiredo@tpvtechnology.com",
        publicationsCount: 5,
        currentSector: "Indústria",
        displayOrder: 4,
        researchLines: [1, 3],
        advisedBy: [1],
        seo: {
          metaTitle: "Lucas Figueiredo Santos - Alumni e-Controls",
          metaDescription:
            "Engenheiro de Software Sênior na TPV Technology, desenvolveu ferramenta para análise de microrredes.",
          keywords: "lucas figueiredo, tpv technology, microrredes, software",
          metaRobots: "index, follow",
          canonicalURL: "https://econtrols.ufam.edu.br/alumni/lucas-figueiredo",
        },
      },
    },
  ];

  for (const alumnus of alumniData) {
    try {
      await axios.put(`${API_URL}/alumni/${alumnus.id}`, alumnus);
      console.log(
        `✅ Alumni ${alumnus.id} atualizado: ${alumnus.data.fullName}`,
      );
    } catch (error) {
      console.error(
        `❌ Erro ao atualizar alumni ${alumnus.id}:`,
        error.response?.data || error.message,
      );
    }
  }
}

async function updateAllPublications() {
  console.log("\n📚 Atualizando TODAS as Publications com relações e SEO...");

  const publicationsData = [
    {
      id: 1,
      data: {
        title:
          "Formal Verification of Cyber-Physical Systems Using ESBMC: A Case Study in Industrial Control Systems",
        slug: "formal-verification-cps-esbmc",
        abstract:
          "This paper presents a comprehensive approach for formal verification of cyber-physical systems using ESBMC (Efficient SMT-Based Context-Bounded Model Checker). We demonstrate the effectiveness of our methodology through a detailed case study in industrial control systems, showing how model checking can detect critical vulnerabilities and ensure system safety. The proposed approach combines formal methods with practical validation in real industrial scenarios.",
        authorsText:
          "Iury Valente de Bessa, Lucas Carvalho Cordeiro, Eddie Batista de Lima Filho, Renan Landau Paiva de Medeiros",
        publicationType: "Journal Article",
        year: 2023,
        journalName: "IEEE Transactions on Industrial Informatics",
        volume: "19",
        issue: "8",
        pages: "8234-8245",
        doi: "10.1109/TII.2023.1234567",
        citationCount: 28,
        keywords: [
          "Formal Verification",
          "Model Checking",
          "Cyber-Physical Systems",
          "Industrial Control",
          "ESBMC",
          "Safety",
        ],
        qualis: "A1",
        quartile: "Q1",
        impactFactor: 11.7,
        isFeatured: true,
        publicationStatus: "Published",
        pdfUrl: "https://ieeexplore.ieee.org/document/1234567",
        bibtex:
          "@article{bessa2023formal,\n  title={Formal Verification of Cyber-Physical Systems Using ESBMC},\n  author={Bessa, Iury V and Cordeiro, Lucas C and Lima Filho, Eddie B and Medeiros, Renan LP},\n  journal={IEEE Transactions on Industrial Informatics},\n  volume={19},\n  number={8},\n  pages={8234--8245},\n  year={2023},\n  publisher={IEEE}\n}",
        authors: [1, 9],
        researchLines: [2],
        relatedProjects: [1],
        seo: {
          metaTitle: "Formal Verification CPS ESBMC - e-Controls",
          metaDescription:
            "Verificação formal de sistemas ciber-físicos usando ESBMC em IEEE Transactions on Industrial Informatics 2023.",
          keywords:
            "verificação formal, model checking, ESBMC, sistemas ciber-físicos",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/publications/formal-verification-cps-esbmc",
        },
      },
    },
  ];

  for (const pub of publicationsData) {
    try {
      await axios.put(`${API_URL}/publications/${pub.id}`, pub);
      console.log(
        `✅ Publication ${pub.id} atualizada: ${pub.data.title.substring(0, 60)}...`,
      );
    } catch (error) {
      console.error(
        `❌ Erro ao atualizar publication ${pub.id}:`,
        error.response?.data || error.message,
      );
    }
  }
}

async function updateAllPartners() {
  console.log("\n🤝 Atualizando TODOS os Partners com relações e SEO...");

  const partnersData = [
    {
      id: 1,
      data: {
        name: "Samsung Electronics da Amazônia Ltda.",
        slug: "samsung-amazonia",
        partnerType: "Industrial Partner",
        country: "Brasil",
        state: "AM",
        city: "Manaus",
        description:
          "Parceria estratégica para desenvolvimento de pesquisa aplicada em eletrônica de potência, sistemas de controle e indústria 4.0, com foco na formação de recursos humanos e transferência de tecnologia para o Polo Industrial de Manaus.",
        collaborationType: [
          "Pesquisa aplicada",
          "Capacitação de recursos humanos",
          "Desenvolvimento de protótipos",
          "Transferência de tecnologia",
        ],
        websiteUrl: "https://www.samsung.com.br",
        contactEmail: "pesquisa@samsung.com.br",
        contactPhone: "+55 92 2121-0000",
        supportType: ["Financeiro", "Técnico", "Infraestrutura"],
        isActive: true,
        displayOrder: 1,
        partnershipStartYear: 2020,
        relatedProjects: [2, 5],
        relatedPublications: [2],
        seo: {
          metaTitle: "Samsung Electronics Parceira - e-Controls UFAM",
          metaDescription:
            "Parceria estratégica Samsung-UFAM em P&D de eletrônica de potência e indústria 4.0 no Polo Industrial de Manaus.",
          keywords:
            "samsung, parceria, eletrônica potência, indústria 4.0, Manaus",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/partners/samsung-amazonia",
        },
      },
    },
  ];

  for (const partner of partnersData) {
    try {
      await axios.put(`${API_URL}/partners/${partner.id}`, partner);
      console.log(`✅ Partner ${partner.id} atualizado: ${partner.data.name}`);
    } catch (error) {
      console.error(
        `❌ Erro ao atualizar partner ${partner.id}:`,
        error.response?.data || error.message,
      );
    }
  }
}

async function updateAllNewsItems() {
  console.log("\n📰 Atualizando TODAS as News com relações e SEO...");

  const newsData = [
    {
      id: 1,
      data: {
        title:
          "e-Controls recebe financiamento da FAPEAM para projeto de cibersegurança",
        slug: "econtrols-financiamento-fapeam-cybersecurity",
        excerpt:
          "Grupo e-Controls foi contemplado com R$ 150 mil da FAPEAM para desenvolver técnicas de cibersegurança em sistemas ciber-físicos industriais.",
        summary:
          "O grupo e-Controls da UFAM recebeu financiamento de R$ 150.000,00 da Fundação de Amparo à Pesquisa do Estado do Amazonas (FAPEAM) para desenvolvimento de projeto de pesquisa em cibersegurança de sistemas ciber-físicos industriais.",
        content:
          "O grupo de pesquisa e-Controls da Universidade Federal do Amazonas (UFAM) foi contemplado com financiamento de R$ 150.000,00 da Fundação de Amparo à Pesquisa do Estado do Amazonas (FAPEAM) no edital Universal 2024. O projeto aprovado, intitulado 'Cibersegurança de Sistemas Ciber-Físicos Industriais', será coordenado pelo Prof. Dr. Iury Valente de Bessa e terá duração de 48 meses.\n\nO objetivo principal do projeto é desenvolver e validar técnicas avançadas de defesa contra ataques cibernéticos em sistemas de controle industrial, combinando métodos formais de verificação com sistemas de detecção de intrusão baseados em aprendizado de máquina. Os resultados esperados incluem o desenvolvimento de protótipos de sistemas de defesa, publicações científicas em revistas e conferências internacionais de alto impacto, e transferência de tecnologia para empresas da região.\n\nO projeto conta com a participação de pesquisadores do grupo e-Controls, estudantes de mestrado e doutorado do Programa de Pós-Graduação em Engenharia Elétrica (PPGEE) da UFAM, e colaboradores internacionais da University of Manchester (Reino Unido) e University of Oxford (Reino Unido).\n\nSegundo o coordenador Prof. Iury Bessa, 'este projeto representa um avanço significativo para a segurança de infraestruturas críticas na Amazônia, especialmente considerando a crescente digitalização de processos industriais'.",
        category: "Projetos",
        publishDate: "2024-03-15",
        isFeatured: true,
        isPinned: true,
        eventDate: null,
        viewCount: 387,
        readingTime: 4,
        isPublished: true,
        author: "Coordenação e-Controls",
        tags: [
          "Cibersegurança",
          "FAPEAM",
          "Financiamento",
          "Sistemas Ciber-Físicos",
        ],
        relatedProjects: [1],
        relatedFaculty: [1],
        relatedResearchLines: [2],
        seo: {
          metaTitle: "Financiamento FAPEAM Cibersegurança - e-Controls",
          metaDescription:
            "e-Controls UFAM recebe R$ 150 mil da FAPEAM para pesquisa em cibersegurança de sistemas industriais.",
          keywords: "FAPEAM, financiamento, cibersegurança, e-controls, UFAM",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/news/econtrols-financiamento-fapeam-cybersecurity",
        },
      },
    },
  ];

  for (const news of newsData) {
    try {
      await axios.put(`${API_URL}/news-items/${news.id}`, news);
      console.log(`✅ News ${news.id} atualizada: ${news.data.title}`);
    } catch (error) {
      console.error(
        `❌ Erro ao atualizar news ${news.id}:`,
        error.response?.data || error.message,
      );
    }
  }
}

async function main() {
  console.log(
    "🌱 Iniciando atualização COMPLETA de TODOS os dados com relações e SEO...\n",
  );

  await updateAllProjects();
  await updateAllAlumni();
  await updateAllPublications();
  await updateAllPartners();
  await updateAllNewsItems();

  console.log("\n🎉 Atualização completa finalizada com sucesso!");
  console.log("\n📋 VALIDAÇÃO - Acesse os links abaixo para verificar:");
  console.log(
    "   • Projects: http://localhost:1337/admin/content-manager/collection-types/api::project.project",
  );
  console.log(
    "   • Alumni: http://localhost:1337/admin/content-manager/collection-types/api::alumnus.alumnus",
  );
  console.log(
    "   • Publications: http://localhost:1337/admin/content-manager/collection-types/api::publication.publication",
  );
  console.log(
    "   • Partners: http://localhost:1337/admin/content-manager/collection-types/api::partner.partner",
  );
  console.log(
    "   • News: http://localhost:1337/admin/content-manager/collection-types/api::news-item.news-item",
  );
}

main().catch(console.error);
