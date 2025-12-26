const axios = require("axios");

const API_URL = "http://localhost:1337/api";

async function updatePartners() {
  console.log("🤝 Atualizando Partners 2-6 com dados completos...\n");

  const partnersData = [
    {
      id: 2,
      data: {
        name: "Universitat Politècnica de Catalunya (UPC)",
        slug: "universitat-politecnica-catalunya",
        partnerType: "International University",
        country: "Spain",
        state: null,
        city: "Barcelona",
        description:
          "Parceria acadêmica internacional para pesquisa conjunta em controle automático, diagnóstico de falhas e sistemas tolerantes a falhas. Colaboração estabelecida com o grupo SAC (Supervisory and Advanced Control) liderado pelo Prof. Vicenç Puig.",
        collaborationType: "Pesquisa Conjunta",
        collaborationArea:
          "Controle Tolerante a Falhas, Diagnóstico de Sistemas, Controle Robusto",
        websiteUrl: "https://www.upc.edu",
        startDate: "2018-01-01",
        isActive: true,
        displayOrder: 2,
        jointPublications: 8,
        supportType: ["Pesquisa", "Publicações", "Intercâmbio"],
        seo: {
          metaTitle: "UPC Barcelona Parceira - e-Controls UFAM",
          metaDescription:
            "Colaboração internacional UPC-UFAM em controle tolerante a falhas e diagnóstico de sistemas desde 2018.",
          keywords: "UPC, Barcelona, controle tolerante falhas, parceria",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/partners/universitat-politecnica-catalunya",
        },
      },
    },
    {
      id: 3,
      data: {
        name: "University of Oxford",
        slug: "university-oxford",
        partnerType: "International University",
        country: "United Kingdom",
        state: null,
        city: "Oxford",
        description:
          "Parceria acadêmica de alto nível com o Departamento de Ciência da Computação da Universidade de Oxford, focada em verificação formal de software e sistemas críticos. Colaboração estabelecida através do grupo de pesquisa em Automated Verification.",
        collaborationType: "Pesquisa Conjunta",
        collaborationArea:
          "Verificação Formal, Model Checking, Software Crítico, Métodos Formais",
        websiteUrl: "https://www.ox.ac.uk",
        startDate: "2019-06-01",
        isActive: true,
        displayOrder: 1,
        jointPublications: 6,
        supportType: ["Pesquisa", "Publicações", "Pesquisador Visitante"],
        seo: {
          metaTitle: "Oxford University Parceira - e-Controls UFAM",
          metaDescription:
            "Colaboração internacional Oxford-UFAM em verificação formal e model checking de sistemas críticos.",
          keywords: "oxford, verificação formal, model checking, parceria",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/partners/university-oxford",
        },
      },
    },
    {
      id: 4,
      data: {
        name: "Aalborg University",
        slug: "aalborg-university",
        partnerType: "International University",
        country: "Denmark",
        state: null,
        city: "Aalborg",
        description:
          "Parceria internacional com a Aalborg University através do Institute of Energy Technology, referência mundial em pesquisa sobre microrredes e eletrônica de potência. Colaboração com os grupos liderados pelos Profs. Josep M. Guerrero e Frede Blaabjerg.",
        collaborationType: "Pesquisa Conjunta",
        collaborationArea:
          "Microrredes, Eletrônica de Potência, Controle Hierárquico, Smart Grids",
        websiteUrl: "https://www.en.aau.dk",
        startDate: "2020-03-01",
        isActive: true,
        displayOrder: 3,
        jointPublications: 10,
        supportType: ["Pesquisa", "Publicações", "Doutorado Sanduíche"],
        seo: {
          metaTitle: "Aalborg University Parceira - e-Controls UFAM",
          metaDescription:
            "Colaboração AAU-UFAM em microrredes e eletrônica de potência com grupos de Guerrero e Blaabjerg.",
          keywords:
            "aalborg, microrredes, eletrônica potência, guerrero, blaabjerg",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/partners/aalborg-university",
        },
      },
    },
    {
      id: 5,
      data: {
        name: "Sidia Instituto de Ciência e Tecnologia",
        slug: "sidia-instituto",
        partnerType: "Industrial Partner",
        country: "Brasil",
        state: "AM",
        city: "Manaus",
        description:
          "Parceria com o principal centro de P&D da Samsung na América Latina, localizado no Polo Industrial de Manaus. Colaboração em projetos de pesquisa aplicada, desenvolvimento de protótipos tecnológicos, e formação de recursos humanos especializados em áreas estratégicas para a indústria.",
        collaborationType: "P&D Industrial",
        collaborationArea:
          "Controle Industrial, IoT, Sistemas Embarcados, Indústria 4.0",
        websiteUrl: "https://www.sidia.com",
        startDate: "2021-01-01",
        isActive: true,
        displayOrder: 4,
        jointPublications: 3,
        supportType: [
          "Financiamento",
          "Infraestrutura",
          "Transferência Tecnologia",
          "Absorção Egressos",
        ],
        seo: {
          metaTitle: "Sidia Samsung Parceira - e-Controls UFAM",
          metaDescription:
            "Parceria SIDIA-UFAM em P&D industrial, IoT e indústria 4.0 no Polo Industrial de Manaus.",
          keywords: "sidia, samsung, P&D, indústria 4.0, Manaus, IoT",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/partners/sidia-instituto",
        },
      },
    },
    {
      id: 6,
      data: {
        name: "Eletrobras Amazonas Energia",
        slug: "eletrobras-amazonas-energia",
        partnerType: "Industrial Partner",
        country: "Brasil",
        state: "AM",
        city: "Manaus",
        description:
          "Parceria estratégica com a distribuidora de energia do estado do Amazonas para desenvolvimento de projetos de P&D regulados pela ANEEL. Foco em microrredes, geração distribuída, smart grids e integração de fontes renováveis para comunidades isoladas da Amazônia.",
        collaborationType: "P&D Industrial",
        collaborationArea:
          "Microrredes Isoladas, Energia Renovável, Smart Grids, Sistemas Fotovoltaicos",
        websiteUrl: "https://www.amazonasenergia.com.br",
        startDate: "2022-06-01",
        isActive: true,
        displayOrder: 5,
        jointPublications: 2,
        supportType: [
          "Financiamento",
          "Dados Reais",
          "Campo de Testes",
          "Transferência Tecnologia",
        ],
        seo: {
          metaTitle: "Eletrobras Amazonas Parceira - e-Controls UFAM",
          metaDescription:
            "P&D ANEEL Eletrobras-UFAM em microrredes e energia renovável para comunidades isoladas da Amazônia.",
          keywords:
            "eletrobras, ANEEL, microrredes, energia renovável, Amazônia",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/partners/eletrobras-amazonas-energia",
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

async function main() {
  console.log("🌱 Iniciando atualização de Partners...\n");
  await updatePartners();
  console.log("\n🎉 Atualização concluída!");
  console.log(
    "\n📋 Verificar em: http://localhost:1337/admin/content-manager/collection-types/api::partner.partner",
  );
}

main().catch(console.error);
