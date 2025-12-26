const axios = require("axios");

const API_URL = "http://localhost:1337/api";

async function updateNewsItem2() {
  console.log("📰 Atualizando News Item 2 com dados completos...\n");

  const newsData = {
    data: {
      title:
        "Projeto SUPER Samsung-UFAM conclui com sucesso formação de 15 mestres e doutores",
      slug: "projeto-super-samsung-conclusao-sucesso",
      summary:
        "Projeto SUPER conclui formando 15 mestres/doutores, 7 protótipos e 12 artigos Q1. Parceria Samsung-UFAM superou metas em formação e tecnologia.",
      content:
        "O projeto SUPER (Samsung-UFAM Project for Education and Research), parceria estratégica entre UFAM e Samsung Electronics da Amazônia, está concluindo suas atividades com resultados que superaram as metas estabelecidas. Iniciado em 2020 com R$ 800 mil, capacitou 15 estudantes (10 mestres, 5 doutores), desenvolveu 7 protótipos e publicou 12 artigos em revistas Q1 e conferências IEEE. Segundo Prof. Dr. Renan Landau, 'o SUPER representa um modelo bem-sucedido de parceria universidade-empresa na Amazônia'. Egressos foram absorvidos por Sidia, LG e Foxconn.",
      category: "Projetos",
      isFeatured: true,
      seo: {
        metaTitle: "Projeto SUPER Samsung-UFAM Conclusão - e-Controls",
        metaDescription:
          "SUPER Samsung-UFAM conclui com 15 mestres/doutores, 7 protótipos e 12 artigos em eletrônica de potência.",
        keywords: "SUPER, Samsung, UFAM, capacitação, eletrônica potência",
        metaRobots: "index, follow",
        canonicalURL:
          "https://econtrols.ufam.edu.br/news/projeto-super-samsung-conclusao-sucesso",
      },
    },
  };

  try {
    const response = await axios.put(`${API_URL}/news-items/2`, newsData);
    console.log(`✅ News Item 2 atualizada com sucesso`);
  } catch (error) {
    console.error(`❌ Erro:`, error.response?.data?.error || error.message);
  }
}

async function main() {
  await updateNewsItem2();
  console.log(
    "\n📋 Verificar em: http://localhost:1337/admin/content-manager/collection-types/api::news-item.news-item/2",
  );
}

main().catch(console.error);
