const axios = require("axios");

const API_URL = "http://localhost:1337/api";

async function updateResearchLinesWithSEO() {
  console.log("🔬 Atualizando Research Lines com SEO...\n");

  const researchLinesData = [
    {
      id: 1,
      data: {
        seo: {
          metaTitle: "Sistemas Inteligentes - e-Controls UFAM",
          metaDescription:
            "Pesquisa em IA, redes neurais, lógica fuzzy e machine learning aplicados ao controle de processos industriais na Amazônia.",
          keywords:
            "sistemas inteligentes, machine learning, redes neurais, controle",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/research/sistemas-inteligentes",
        },
      },
    },
    {
      id: 2,
      data: {
        seo: {
          metaTitle: "Cibersegurança Sistemas Controle - e-Controls",
          metaDescription:
            "Verificação formal, model checking e defesa cibernética para sistemas de controle industrial críticos.",
          keywords: "cibersegurança, verificação formal, model checking, ESBMC",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/research/cybersecurity-control-systems",
        },
      },
    },
    {
      id: 3,
      data: {
        seo: {
          metaTitle: "Eletrônica Potência Microrredes - e-Controls",
          metaDescription:
            "Pesquisa em conversores de potência, microrredes CC/CA e integração de fontes renováveis na Amazônia.",
          keywords:
            "eletrônica potência, microrredes, energia renovável, conversores",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/research/power-electronics-microgrids",
        },
      },
    },
    {
      id: 4,
      data: {
        seo: {
          metaTitle: "Robótica Móvel Autônoma - e-Controls UFAM",
          metaDescription:
            "Desenvolvimento de robôs móveis autônomos com SLAM, RRT* e deep learning para aplicações amazônicas.",
          keywords:
            "robótica móvel, navegação autônoma, SLAM, deep learning, RRT*",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/research/mobile-robotics",
        },
      },
    },
    {
      id: 5,
      data: {
        seo: {
          metaTitle: "Controle Processos Industriais - e-Controls",
          metaDescription:
            "Técnicas avançadas de controle para otimização de processos industriais no Polo Industrial de Manaus.",
          keywords:
            "controle processos, otimização industrial, controle robusto",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/research/industrial-process-control",
        },
      },
    },
    {
      id: 6,
      data: {
        seo: {
          metaTitle: "Diagnóstico Sistemas Dinâmicos - e-Controls",
          metaDescription:
            "Técnicas de detecção de falhas, diagnóstico e controle tolerante a falhas para sistemas industriais.",
          keywords:
            "diagnóstico falhas, FDI, controle tolerante falhas, detecção",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/research/fault-diagnosis-systems",
        },
      },
    },
  ];

  for (const line of researchLinesData) {
    try {
      await axios.put(`${API_URL}/research-lines/${line.id}`, line);
      console.log(`✅ Research Line ${line.id} atualizada com SEO`);
    } catch (error) {
      console.error(
        `❌ Erro ao atualizar research line ${line.id}:`,
        error.response?.data || error.message,
      );
    }
  }
}

async function main() {
  console.log("🌱 Iniciando atualização de Research Lines com SEO...\n");
  await updateResearchLinesWithSEO();
  console.log("\n🎉 Atualização concluída!");
  console.log(
    "\n📋 Verificar em: http://localhost:1337/admin/content-manager/collection-types/api::research-line.research-line",
  );
}

main().catch(console.error);
