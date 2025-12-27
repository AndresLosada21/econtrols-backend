const axios = require('axios');

const API_URL = 'http://localhost:1337/api';

const peoplePageData = {
  data: {
    pageTitle: 'Nossa Equipe',
    pageDescription: 'Conheça os pesquisadores, professores e colaboradores que integram o grupo e-Controls, dedicados à excelência em pesquisa e inovação em sistemas de controle.',
    
    // Seção Líderes
    leadersSection: {
      label: '/// liderança',
      title: 'Líderes do Grupo',
      description: 'Coordenadores e líderes do grupo de pesquisa e-Controls'
    },
    
    // Seção Pesquisadores
    researchersSection: {
      label: '/// pesquisadores',
      title: 'Pesquisadores Permanentes',
      description: 'Corpo docente permanente do grupo e-Controls'
    },
    
    // Seção Pós-Doutorandos
    postdocsSection: {
      label: '/// pós-doutorandos',
      title: 'Pós-Doutorandos',
      description: 'Pesquisadores em estágio pós-doutoral'
    },
    
    // Seção Alumni
    alumniSection: {
      label: '/// ex-membros',
      title: 'Alumni',
      description: 'Ex-membros que contribuíram para o grupo e-Controls'
    },
    
    // Labels para páginas de detalhes (38 campos completos)
    detailLabels: {
      // Navegação
      backButtonText: 'voltar para equipe',
      
      // Biografia
      bioLabel: '/// biografia',
      bioTitle: 'Sobre',
      
      // Contatos
      contactsLabel: '/// contatos',
      contactsTitle: 'Informações de Contato',
      
      // Métricas Acadêmicas
      metricsLabel: '/// métricas',
      metricsTitle: 'Métricas de Impacto',
      hIndexTooltip: 'Índice H: mede produtividade e impacto das publicações',
      citationsLabel: 'Citações',
      publicationsCountLabel: 'Publicações',
      
      // Formação Acadêmica
      educationLabel: '/// formação',
      educationTitle: 'Formação Acadêmica',
      
      // Linhas de Pesquisa
      researchLinesLabel: '/// atuação',
      researchLinesTitle: 'Linhas de Pesquisa',
      
      // Projetos
      projectsLabel: '/// projetos',
      projectsTitle: 'Projetos de Pesquisa',
      coordinatedProjectsLabel: 'Coordenados',
      participatingProjectsLabel: 'Participante',
      
      // Publicações
      publicationsLabel: '/// publicações',
      publicationsTitle: 'Produção Científica',
      publicationsEmptyState: 'Nenhuma publicação cadastrada.',
      
      // Orientações
      adviseesLabel: '/// orientações',
      adviseesTitle: 'Orientações',
      currentAdviseesLabel: 'Em Andamento',
      completedAdviseesLabel: 'Concluídas',
      expectedDefenseLabel: 'Defesa prevista',
      currentPositionLabel: 'Posição atual',
      
      // Ensino
      teachingLabel: '/// ensino',
      teachingTitle: 'Disciplinas Ministradas',
      graduateCoursesLabel: 'Graduação',
      postgraduateCoursesLabel: 'Pós-Graduação',
      
      // Prêmios e Distinções
      awardsLabel: '/// prêmios',
      awardsTitle: 'Prêmios e Distinções',
      issuerLabel: 'Instituição',
      
      // Posições Institucionais
      institutionalLabel: '/// posições',
      institutionalTitle: 'Posições Institucionais',
      
      // Colaborações Internacionais
      collaborationsLabel: '/// colaborações',
      collaborationsTitle: 'Colaborações Internacionais',
      
      // Links Externos
      viewProfileLabel: 'Ver perfil completo',
      websiteLabel: 'Website'
    },
    
    // SEO
    seo: {
      metaTitle: 'Equipe | e-Controls Research Group',
      metaDescription: 'Conheça os pesquisadores, professores e colaboradores do grupo e-Controls da UFAM, dedicados à excelência em pesquisa e inovação em sistemas de controle.',
      keywords: 'equipe e-controls, pesquisadores UFAM, professores controle de sistemas, grupo de pesquisa Amazonas',
      metaRobots: 'index, follow',
      structuredData: null,
      metaViewport: 'width=device-width, initial-scale=1',
      canonicalURL: 'https://econtrols.ufam.edu.br/people',
      
      // Open Graph
      ogTitle: 'Nossa Equipe | e-Controls Research Group',
      ogDescription: 'Conheça os pesquisadores e professores do grupo e-Controls da UFAM.',
      ogUrl: 'https://econtrols.ufam.edu.br/people',
      ogType: 'website',
      ogLocale: 'pt_BR',
      ogSiteName: 'e-Controls Research Group',
      
      // Twitter
      twitterCard: 'summary_large_image',
      twitterTitle: 'Nossa Equipe | e-Controls',
      twitterDescription: 'Conheça os pesquisadores do grupo e-Controls da UFAM.',
      twitterSite: '@econtrols_ufam',
      twitterCreator: '@econtrols_ufam'
    }
  }
};

async function seedPeoplePageSettings() {
  try {
    console.log('🌱 Seeding People Page Settings...');
    
    const response = await axios.put(
      `${API_URL}/people-page-setting`,
      peoplePageData,
      {
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
    console.log('✅ People Page Settings created/updated successfully!');
    console.log('📄 Data:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error('❌ Error seeding People Page Settings:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message);
    }
    process.exit(1);
  }
}

seedPeoplePageSettings();
