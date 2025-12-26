const axios = require("axios");

const API_URL = "http://localhost:1337/api";

async function updateAlumni() {
  console.log("📚 Atualizando Alumni...");

  const alumniData = [
    {
      id: 1,
      data: {
        fullName: "Isaías Valente de Bessa",
        slug: "isaias-bessa",
        degreeLevel: "Mestrado",
        thesisTitle:
          "Desenvolvimento de Sistema Auxiliar Ativo para Microrredes CC",
        advisor: "Prof. Dr. Renan Landau Paiva de Medeiros",
        defenseYear: 2022,
        currentPosition: "Engenheiro de P&D Sênior",
        currentInstitution: "Sidia Instituto de Ciência e Tecnologia",
        researchTopic:
          "Microrredes de Corrente Contínua, Eletrônica de Potência, Sistemas de Armazenamento de Energia",
        lattesUrl: "http://lattes.cnpq.br/1122334455667788",
        linkedinUrl: "https://linkedin.com/in/isaiasbessa",
        email: "isaias.bessa@sidia.com",
        publicationsCount: 12,
        currentSector: "Indústria",
        displayOrder: 1,
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
          "Controle de Sistemas de Potência, Geração Distribuída, Smart Grids",
        lattesUrl: "http://lattes.cnpq.br/2233445566778899",
        linkedinUrl: "https://linkedin.com/in/marenicecarvalho",
        email: "marenice.carvalho@ufam.edu.br",
        publicationsCount: 15,
        currentSector: "Academia",
        displayOrder: 2,
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
          "Controle Fracionário, Eletrônica de Potência, Conversores CC-CC",
        lattesUrl: "http://lattes.cnpq.br/3344556677889900",
        linkedinUrl: "https://linkedin.com/in/claudiasabrinamonteiro",
        email: "claudia.monteiro@ufam.edu.br",
        publicationsCount: 10,
        currentSector: "Academia",
        displayOrder: 3,
      },
    },
    {
      id: 4,
      data: {
        fullName: "Lucas Figueiredo Santos",
        slug: "lucas-figueiredo",
        degreeLevel: "Iniciação Científica/TCC",
        thesisTitle:
          "Ferramenta Computacional para Análise de Estabilidade de Microrredes Híbridas",
        advisor: "Prof. Dr. Iury Valente de Bessa",
        defenseYear: 2021,
        currentPosition: "Engenheiro de Software Sênior",
        currentInstitution: "TPV Technology do Brasil",
        researchTopic:
          "Automação de Sistemas de Energia, Microrredes, Análise de Estabilidade",
        lattesUrl: "http://lattes.cnpq.br/4455667788990011",
        linkedinUrl: "https://linkedin.com/in/lucasfigueiredosantos",
        email: "lucas.figueiredo@tpvtechnology.com",
        publicationsCount: 5,
        currentSector: "Indústria",
        displayOrder: 4,
      },
    },
    {
      id: 5,
      data: {
        fullName: "Andevaldo da Encarnação Vitório",
        slug: "andevaldo-vitorio",
        degreeLevel: "Doutorado",
        thesisTitle:
          "Controle Ótimo e Robusto de Microrredes com Alta Penetração de Fontes Renováveis",
        advisor: "Prof. Dr. Renan Landau Paiva de Medeiros",
        defenseYear: 2023,
        currentPosition: "Professor Adjunto",
        currentInstitution: "Universidade Federal de Roraima",
        researchTopic:
          "Controle Ótimo, Microrredes, Energias Renováveis, Controle Robusto",
        lattesUrl: "http://lattes.cnpq.br/5566778899001122",
        linkedinUrl: "https://linkedin.com/in/andevaldovitorio",
        email: "andevaldo.vitorio@ufrr.br",
        publicationsCount: 18,
        currentSector: "Academia",
        displayOrder: 5,
      },
    },
    {
      id: 6,
      data: {
        fullName: "João Bernardo Aranha Ribeiro",
        slug: "joao-aranha-alumni",
        degreeLevel: "Doutorado",
        thesisTitle:
          "Navegação Autônoma de Robôs Móveis em Ambientes Não Estruturados Utilizando Deep Learning",
        advisor: "Prof. Dr. João Edgar Chaves Filho",
        defenseYear: 2024,
        currentPosition: "Professor Adjunto",
        currentInstitution: "Universidade Federal do Amazonas",
        researchTopic:
          "Robótica Móvel, Navegação Autônoma, Deep Learning, Visão Computacional",
        lattesUrl: "http://lattes.cnpq.br/6677889900112233",
        linkedinUrl: "https://linkedin.com/in/joaoaranha",
        email: "joao.aranha@ufam.edu.br",
        publicationsCount: 22,
        currentSector: "Academia",
        displayOrder: 6,
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
        error.message,
      );
    }
  }
}

async function updateProjects() {
  console.log("📁 Atualizando Projects...");

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
        error.message,
      );
    }
  }
}

async function updatePublications() {
  console.log("📚 Atualizando Publications...");

  const publicationsData = [
    {
      id: 1,
      data: {
        title:
          "Formal Verification of Cyber-Physical Systems Using ESBMC: A Case Study in Industrial Control Systems",
        slug: "formal-verification-cps-esbmc",
        abstract:
          "This paper presents a comprehensive approach for formal verification of cyber-physical systems using ESBMC (Efficient SMT-Based Context-Bounded Model Checker). We demonstrate the effectiveness of our methodology through a detailed case study in industrial control systems, showing how model checking can detect critical vulnerabilities and ensure system safety.",
        authorsText:
          "Iury Valente de Bessa, Lucas Carvalho Cordeiro, Eddie Batista de Lima Filho",
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
          "@article{bessa2023formal,\n  title={Formal Verification of Cyber-Physical Systems Using ESBMC},\n  author={Bessa, Iury V and Cordeiro, Lucas C and Lima Filho, Eddie B},\n  journal={IEEE Transactions on Industrial Informatics},\n  volume={19},\n  number={8},\n  pages={8234--8245},\n  year={2023}\n}",
      },
    },
  ];

  for (const pub of publicationsData) {
    try {
      await axios.put(`${API_URL}/publications/${pub.id}`, pub);
      console.log(`✅ Publication ${pub.id} atualizada: ${pub.data.title}`);
    } catch (error) {
      console.error(
        `❌ Erro ao atualizar publication ${pub.id}:`,
        error.message,
      );
    }
  }
}

async function updatePartners() {
  console.log("🤝 Atualizando Partners...");

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
          "Parceria estratégica para desenvolvimento de pesquisa aplicada em eletrônica de potência, sistemas de controle e indústria 4.0, com foco na formação de recursos humanos e transferência de tecnologia.",
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
        logoUrl: "https://econtrols.ufam.edu.br/logos/samsung.png",
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
        error.message,
      );
    }
  }
}

async function updateNewsItems() {
  console.log("📰 Atualizando News Items...");

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
          "O grupo de pesquisa e-Controls da Universidade Federal do Amazonas (UFAM) foi contemplado com financiamento de R$ 150.000,00 da Fundação de Amparo à Pesquisa do Estado do Amazonas (FAPEAM) no edital Universal 2024. O projeto aprovado, intitulado 'Cibersegurança de Sistemas Ciber-Físicos Industriais', será coordenado pelo Prof. Dr. Iury Valente de Bessa e terá duração de 48 meses.\n\nO objetivo principal do projeto é desenvolver e validar técnicas avançadas de defesa contra ataques cibernéticos em sistemas de controle industrial, combinando métodos formais de verificação com sistemas de detecção de intrusão baseados em aprendizado de máquina. Os resultados esperados incluem o desenvolvimento de protótipos de sistemas de defesa, publicações científicas em revistas e conferências internacionais de alto impacto, e transferência de tecnologia para empresas da região.\n\nO projeto conta com a participação de pesquisadores do grupo e-Controls, estudantes de mestrado e doutorado do Programa de Pós-Graduação em Engenharia Elétrica (PPGEE) da UFAM, e colaboradores internacionais da University of Manchester (Reino Unido) e University of Oxford (Reino Unido).",
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
      },
    },
  ];

  for (const news of newsData) {
    try {
      await axios.put(`${API_URL}/news-items/${news.id}`, news);
      console.log(`✅ News ${news.id} atualizada: ${news.data.title}`);
    } catch (error) {
      console.error(`❌ Erro ao atualizar news ${news.id}:`, error.message);
    }
  }
}

async function main() {
  console.log("🌱 Iniciando atualização completa de todos os dados...\n");

  await updateAlumni();
  console.log("");

  await updateProjects();
  console.log("");

  await updatePublications();
  console.log("");

  await updatePartners();
  console.log("");

  await updateNewsItems();
  console.log("");

  console.log("🎉 Atualização completa finalizada!");
}

main().catch(console.error);
