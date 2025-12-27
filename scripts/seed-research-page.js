const Strapi = require('@strapi/strapi');

async function seedResearchPage() {
  const strapi = await Strapi().load();

  try {
    console.log('🔬 Seeding Research Page Settings...');

    const researchPageData = {
      pageTitle: "Linhas de Pesquisa",
      pageDescription: "Explore nossas áreas de pesquisa em teoria de controle, verificação formal, robótica e indústria 4.0.",
      
      principalSection: {
        label: "/// linhas principais",
        title: "Áreas de Atuação Principal",
        description: "Nossas principais áreas de expertise consolidadas ao longo de anos de pesquisa."
      },
      
      secondarySection: {
        label: "/// linhas secundárias",
        title: "Áreas Complementares",
        description: "Áreas de pesquisa que complementam e fortalecem nossas linhas principais."
      },
      
      emergentSection: {
        label: "/// linhas emergentes",
        title: "Pesquisas em Desenvolvimento",
        description: "Novas áreas de investigação com alto potencial de impacto."
      },
      
      ctaSection: {
        label: "/// publicações",
        title: "Explore Nossa Produção Científica",
        description: "Veja os resultados concretos de nossas pesquisas em artigos, conferências e periódicos de alto impacto."
      },
      
      ctaButton: {
        label: "Ver todas as publicações",
        url: "/publicacoes",
        isExternal: false,
        variant: "primary",
        isVisible: true
      },
      
      seo: {
        metaTitle: "Linhas de Pesquisa | e-Controls Research Group",
        metaDescription: "Conheça as linhas de pesquisa do e-Controls: teoria de controle avançado, verificação formal, eletrônica de potência, robótica e indústria 4.0.",
        keywords: "linhas de pesquisa, controle de sistemas, verificação formal, UFAM, robótica, indústria 4.0, eletrônica de potência",
        metaRobots: "index, follow",
        structuredData: null,
        canonicalURL: "http://localhost:1337/pesquisa",
        metaViewport: "width=device-width, initial-scale=1",
        ogTitle: "Linhas de Pesquisa | e-Controls - UFAM",
        ogDescription: "Explore as linhas de pesquisa do e-Controls em teoria de controle, verificação formal, robótica e indústria 4.0.",
        ogImage: null,
        ogUrl: "http://localhost:1337/pesquisa",
        ogType: "website",
        ogLocale: "pt_BR",
        twitterCard: "summary_large_image",
        twitterTitle: "Linhas de Pesquisa | e-Controls",
        twitterDescription: "Conheça nossas áreas de pesquisa em controle de sistemas, verificação formal e indústria 4.0.",
        twitterImage: null
      },
      
      // Textos adicionais da UI
      statsLabelTotal: "linhas de pesquisa",
      statsLabelPrincipal: "principais",
      statsLabelSecondary: "secundárias",
      statsLabelEmergent: "emergentes",
      cardDetailText: "ver detalhes",
      emptyStateMessage: "Conecte ao Strapi para ver as linhas de pesquisa."
    };

    // Check if already exists
    const existing = await strapi.entityService.findMany(
      'api::research-page-setting.research-page-setting'
    );

    if (existing) {
      console.log('✏️  Updating existing research-page-setting...');
      await strapi.entityService.update(
        'api::research-page-setting.research-page-setting',
        existing.id,
        { data: researchPageData }
      );
    } else {
      console.log('📝 Creating new research-page-setting...');
      await strapi.entityService.create(
        'api::research-page-setting.research-page-setting',
        { data: researchPageData }
      );
    }

    console.log('✅ Research page settings created/updated successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding research page:', error);
  } finally {
    strapi.stop();
    process.exit(0);
  }
}

seedResearchPage();
