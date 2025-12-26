const axios = require("axios");

const API_URL = "http://localhost:1337/api";

async function updateNewsItem2() {
  console.log("📰 Atualizando News Item 2 com dados completos...\n");

  const newsData = {
    id: 2,
    data: {
      title:
        "Projeto SUPER Samsung-UFAM conclui com sucesso formação de 15 mestres e doutores",
      slug: "projeto-super-samsung-conclusao-sucesso",
      summary:
        "Projeto SUPER conclui formando 15 mestres e doutores, desenvolvendo 7 protótipos e publicando 12 artigos em revistas Q1. Parceria Samsung-UFAM superou metas em formação, tecnologia e ciência, com absorção de egressos pelo Polo Industrial de Manaus.",
      content:
        "O projeto SUPER (Samsung-UFAM Project for Education and Research), parceria estratégica entre a Universidade Federal do Amazonas (UFAM) e a Samsung Electronics da Amazônia, está concluindo suas atividades com resultados que superaram as metas inicialmente estabelecidas.\n\nIniciado em janeiro de 2020 com investimento de R$ 800.000,00, o programa tinha como objetivo capacitar recursos humanos em áreas estratégicas de eletrônica de potência, sistemas de controle e indústria 4.0, além de realizar pesquisa aplicada com foco em microrredes e transferência de tecnologia para a indústria local.\n\nResultados Alcançados:\n- 15 estudantes capacitados (10 mestres e 5 doutores), superando a meta de 10 estudantes\n- 7 protótipos experimentais desenvolvidos e validados, contra meta de 5\n- 12 artigos publicados em revistas Q1 e conferências IEEE de alto impacto, superando meta de 8\n- 3 pedidos de patente depositados no INPI, contra meta de 2\n- Transferência de tecnologia para 5 empresas do Polo Industrial de Manaus\n\nSegundo o coordenador Prof. Dr. Renan Landau, 'o projeto SUPER representa um modelo bem-sucedido de parceria universidade-empresa na região amazônica, demonstrando que é possível realizar pesquisa de ponta e formar recursos humanos altamente qualificados mesmo em condições desafiadoras'.\n\nOs protótipos desenvolvidos incluem sistemas de controle para microrredes CC/CA, conversores de potência de alta eficiência, e soluções de monitoramento inteligente para sistemas de energia. Diversos egressos do programa já foram absorvidos por empresas do Polo Industrial de Manaus, incluindo Sidia, LG, e Foxconn.\n\nA cerimônia de encerramento do projeto está prevista para dezembro de 2024, onde serão apresentados os resultados finais e iniciadas discussões para uma possível segunda edição do programa.",
      category: "Projetos",
      publishDate: "2024-11-20",
      isFeatured: true,
      isPinned: false,
      eventDate: "2024-12-15",
      externalUrl: "https://www.samsung.com.br",
      readingTime: 5,
      tags: [
        { name: "SUPER", slug: "super" },
        { name: "Samsung", slug: "samsung" },
        { name: "Capacitação", slug: "capacitacao" },
        { name: "Eletrônica de Potência", slug: "eletronica-potencia" },
        { name: "Microrredes", slug: "microrredes" },
        { name: "Formação", slug: "formacao" },
      ],
      projects: [2],
      facultyMembers: [2],
      researchLines: [3],
      seo: {
        metaTitle: "Projeto SUPER Samsung-UFAM Conclusão - e-Controls",
        metaDescription:
          "SUPER Samsung-UFAM conclui com 15 mestres/doutores formados, 7 protótipos e 12 artigos em eletrônica de potência.",
        keywords:
          "SUPER, Samsung, UFAM, capacitação, eletrônica potência, mestrado",
        metaRobots: "index, follow",
        canonicalURL:
          "https://econtrols.ufam.edu.br/news/projeto-super-samsung-conclusao-sucesso",
      },
    },
  };

  try {
    await axios.put(`${API_URL}/news-items/${newsData.id}`, newsData);
    console.log(
      `✅ News Item ${newsData.id} atualizada: ${newsData.data.title}`,
    );
  } catch (error) {
    console.error(
      `❌ Erro ao atualizar news item ${newsData.id}:`,
      error.response?.data || error.message,
    );
  }
}

async function main() {
  console.log("🌱 Iniciando atualização de News Item 2...\n");
  await updateNewsItem2();
  console.log("\n🎉 Atualização concluída!");
  console.log(
    "\n📋 Verificar em: http://localhost:1337/admin/content-manager/collection-types/api::news-item.news-item",
  );
}

main().catch(console.error);
