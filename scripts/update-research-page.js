#!/usr/bin/env node

/**
 * Update script for research-page-setting
 * Populates the research page settings via Strapi API
 * 
 * Usage: node scripts/update-research-page.js
 */

const STRAPI_URL = 'http://localhost:1337';
const API_ENDPOINT = `${STRAPI_URL}/api/research-page-setting`;

const researchPageData = {
  data: {
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
      canonicalURL: `${STRAPI_URL}/pesquisa`,
      metaViewport: "width=device-width, initial-scale=1",
      ogTitle: "Linhas de Pesquisa | e-Controls - UFAM",
      ogDescription: "Explore as linhas de pesquisa do e-Controls em teoria de controle, verificação formal, robótica e indústria 4.0.",
      ogImage: null,
      ogUrl: `${STRAPI_URL}/pesquisa`,
      ogType: "website",
      ogLocale: "pt_BR",
      twitterCard: "summary_large_image",
      twitterTitle: "Linhas de Pesquisa | e-Controls",
      twitterDescription: "Conheça nossas áreas de pesquisa em controle de sistemas, verificação formal e indústria 4.0.",
      twitterImage: null
    }
  }
};

async function updateResearchPageSettings() {
  try {
    console.log('🔍 Checking if research-page-setting exists...');
    
    // First, try to fetch existing data
    const getResponse = await fetch(`${API_ENDPOINT}?populate=deep`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Single types in Strapi always use PUT (not POST)
    // They are created automatically when you access them
    let method = 'PUT';
    let endpoint = API_ENDPOINT;
    
    if (getResponse.ok) {
      const existingData = await getResponse.json();
      if (existingData.data) {
        console.log('✏️  Updating existing research-page-setting...');
      } else {
        console.log('📝 Creating new research-page-setting...');
      }
    } else {
      console.log('📝 Creating new research-page-setting (404 expected for empty single types)...');
    }

    // Create or update the data (always PUT for single types)
    const response = await fetch(endpoint, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(researchPageData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Research page settings updated successfully!');
    console.log(`📊 Data: ${JSON.stringify(result.data?.attributes || result.data, null, 2)}`);
    
    console.log('\n🔗 Test the endpoint:');
    console.log(`   curl -s "${API_ENDPOINT}?populate=deep" | jq`);
    
    return result;
  } catch (error) {
    console.error('❌ Error updating research page settings:', error.message);
    throw error;
  }
}

// Run the update
if (require.main === module) {
  updateResearchPageSettings()
    .then(() => {
      console.log('\n🎉 Script completed!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Script failed:', error);
      process.exit(1);
    });
}

module.exports = { updateResearchPageSettings };
