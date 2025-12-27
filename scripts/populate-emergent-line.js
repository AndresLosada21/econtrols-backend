#!/usr/bin/env node

/**
 * Script para popular uma linha de pesquisa Emergente
 * Popula research-line #7 com dados completos
 */

const STRAPI_URL = 'http://localhost:1337';
const RESEARCH_LINE_ID = 7;

const emergentLineData = {
  data: {
    title: "Inteligência Artificial para Sistemas de Controle",
    slug: "ia-sistemas-controle",
    shortDescription: "Aplicação de técnicas de IA e Machine Learning para otimização e controle adaptativo de sistemas dinâmicos complexos.",
    fullDescription: `Esta linha de pesquisa emergente explora a interseção entre Inteligência Artificial e Teoria de Controle, investigando como algoritmos de aprendizado de máquina podem aprimorar o desempenho de sistemas de controle em ambientes dinâmicos e incertos.

Nosso foco está em desenvolver controladores adaptativos baseados em redes neurais, algoritmos de aprendizado por reforço para controle ótimo, e técnicas de aprendizado profundo para identificação de sistemas não-lineares. Buscamos criar soluções que combinem a robustez da teoria de controle clássica com a flexibilidade e capacidade de adaptação da IA moderna.`,
    
    practicalApplications: `As aplicações práticas desta linha incluem:

• Controle adaptativo de robôs autônomos em ambientes não estruturados
• Otimização de processos industriais usando aprendizado por reforço
• Sistemas de controle preditivo baseados em redes neurais para veículos autônomos
• Diagnóstico e manutenção preditiva de equipamentos usando deep learning
• Controle de sistemas de energia renovável com previsão baseada em IA`,

    category: "Emergente",
    isActive: true,
    displayOrder: 7,
    keywords: [
      "Inteligência Artificial",
      "Machine Learning",
      "Aprendizado por Reforço",
      "Redes Neurais",
      "Deep Learning",
      "Controle Adaptativo",
      "Sistemas Autônomos",
      "Otimização Inteligente"
    ],
    colorTheme: "#10B981",
    
    // Publicar para aparecer no frontend
    publishedAt: new Date().toISOString(),
    
    // SEO completo (respeitando limites: metaDescription max 160, ogTitle max 60)
    seo: {
      metaTitle: "IA para Sistemas de Controle | Linha Emergente | e-Controls",
      metaDescription: "IA aplicada a Controle: redes neurais, aprendizado por reforço e controle adaptativo para sistemas dinâmicos complexos na UFAM.",
      keywords: "inteligência artificial, machine learning, controle adaptativo, deep learning, aprendizado por reforço, IA controle, sistemas autônomos",
      metaRobots: "index, follow",
      canonicalURL: "http://localhost:3000/research/ia-sistemas-controle",
      
      ogTitle: "IA para Sistemas de Controle | e-Controls UFAM",
      ogDescription: "Explorando a interseção entre IA e Controle: redes neurais, aprendizado por reforço e sistemas adaptativos inteligentes.",
      ogUrl: "http://localhost:3000/research/ia-sistemas-controle",
      ogType: "article",
      ogLocale: "pt_BR",
      
      twitterCard: "summary_large_image",
      twitterTitle: "IA para Sistemas de Controle | e-Controls",
      twitterDescription: "Pesquisa emergente em IA aplicada a controle de sistemas: deep learning, reinforcement learning e controle adaptativo."
    }
  }
};

async function populateEmergentLine() {
  try {
    console.log('🤖 Populando linha de pesquisa EMERGENTE #7...');
    console.log('📝 Título: Inteligência Artificial para Sistemas de Controle\n');

    const response = await fetch(`${STRAPI_URL}/api/research-lines/${RESEARCH_LINE_ID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emergentLineData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status}, body: ${errorText}`);
    }

    const result = await response.json();
    
    console.log('✅ Linha de pesquisa emergente populada com sucesso!');
    console.log('\n📊 Dados criados:');
    console.log(`   • Título: ${result.data.attributes.title}`);
    console.log(`   • Slug: ${result.data.attributes.slug}`);
    console.log(`   • Categoria: ${result.data.attributes.category}`);
    console.log(`   • Publicado: ${result.data.attributes.publishedAt ? 'Sim ✅' : 'Não ❌'}`);
    console.log(`   • Keywords: ${emergentLineData.data.keywords.length} palavras-chave`);
    console.log(`   • SEO: Completo (15 campos)`);
    
    console.log('\n🌐 Acesse no frontend:');
    console.log(`   http://localhost:3000/research`);
    console.log(`   http://localhost:3000/research/${emergentLineData.data.slug}`);
    
    console.log('\n🔧 Acesse no Strapi Admin:');
    console.log(`   http://localhost:1337/admin/content-manager/collection-types/api::research-line.research-line/${RESEARCH_LINE_ID}`);
    
    return result;
  } catch (error) {
    console.error('❌ Erro ao popular linha emergente:', error.message);
    throw error;
  }
}

// Execute
if (require.main === module) {
  populateEmergentLine()
    .then(() => {
      console.log('\n🎉 Script concluído com sucesso!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('\n💥 Script falhou:', error);
      process.exit(1);
    });
}

module.exports = { populateEmergentLine };
