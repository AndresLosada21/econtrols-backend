const Strapi = require('@strapi/strapi');

async function seedProjectsPage() {
  const strapi = await Strapi().load();

  try {
    console.log('🚀 Seeding Projects Page Settings...');

    const projectsPageData = {
      pageTitle: "Projetos",
      pageDescription: "Conheça os projetos de pesquisa desenvolvidos pelo e-Controls, desde iniciativas em andamento até projetos concluídos que geraram impacto significativo.",
      
      activeSection: {
        label: "/// projetos ativos",
        title: "Em Andamento",
        description: "Projetos em desenvolvimento que estão moldando o futuro da pesquisa em controle e automação."
      },
      
      plannedSection: {
        label: "/// projetos planejados",
        title: "Próximas Iniciativas",
        description: "Projetos em fase de planejamento e captação de recursos."
      },
      
      finishedSection: {
        label: "/// projetos concluídos",
        title: "Legado de Pesquisa",
        description: "Projetos finalizados que contribuíram para o avanço do conhecimento e formação de recursos humanos."
      },
      
      agenciesTitle: "Agências de Fomento",
      
      seo: {
        metaTitle: "Projetos de Pesquisa | e-Controls Research Group",
        metaDescription: "Explore os projetos de pesquisa do e-Controls: projetos em andamento, planejados e concluídos nas áreas de controle, verificação formal e sistemas inteligentes.",
        keywords: "projetos de pesquisa, CNPq, FAPEAM, controle de sistemas, UFAM, financiamento de pesquisa",
        metaRobots: "index, follow",
        structuredData: null,
        canonicalURL: "http://localhost:1337/projetos",
        metaViewport: "width=device-width, initial-scale=1",
        ogTitle: "Projetos de Pesquisa | e-Controls - UFAM",
        ogDescription: "Conheça os projetos de pesquisa desenvolvidos pelo grupo e-Controls da UFAM.",
        ogImage: null,
        ogUrl: "http://localhost:1337/projetos",
        ogType: "website",
        ogLocale: "pt_BR",
        twitterCard: "summary_large_image",
        twitterTitle: "Projetos de Pesquisa | e-Controls",
        twitterDescription: "Explore os projetos de pesquisa em controle, automação e sistemas inteligentes.",
        twitterImage: null
      },
      
      emptyStateMessage: "Conecte ao Strapi para ver os projetos."
    };

    // Check if already exists
    const existing = await strapi.entityService.findMany(
      'api::projects-page-setting.projects-page-setting'
    );

    if (existing) {
      console.log('✏️  Updating existing projects-page-setting...');
      await strapi.entityService.update(
        'api::projects-page-setting.projects-page-setting',
        existing.id,
        { data: projectsPageData }
      );
    } else {
      console.log('📝 Creating new projects-page-setting...');
      await strapi.entityService.create(
        'api::projects-page-setting.projects-page-setting',
        { data: projectsPageData }
      );
    }

    console.log('✅ Projects page settings created/updated successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding projects page:', error);
  } finally {
    strapi.stop();
    process.exit(0);
  }
}

seedProjectsPage();
