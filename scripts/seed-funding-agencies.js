const Strapi = require('@strapi/strapi');

async function seedFundingAgencies() {
  const strapi = await Strapi().load();

  try {
    console.log('💰 Seeding Funding Agencies...');

    const agencies = [
      {
        name: 'CNPq',
        fullName: 'Conselho Nacional de Desenvolvimento Científico e Tecnológico',
        acronym: 'CNPq',
        type: 'Federal',
        country: 'Brasil',
        websiteUrl: 'https://www.gov.br/cnpq',
        description: 'Agência do Ministério da Ciência, Tecnologia e Inovações (MCTI) destinada ao fomento da pesquisa científica e tecnológica e à formação de recursos humanos para a pesquisa no país.',
        isActive: true,
        displayOrder: 1
      },
      {
        name: 'CAPES',
        fullName: 'Coordenação de Aperfeiçoamento de Pessoal de Nível Superior',
        acronym: 'CAPES',
        type: 'Federal',
        country: 'Brasil',
        websiteUrl: 'https://www.gov.br/capes',
        description: 'Fundação do Ministério da Educação (MEC) que desempenha papel fundamental na expansão e consolidação da pós-graduação stricto sensu (mestrado e doutorado) em todos os estados brasileiros.',
        isActive: true,
        displayOrder: 2
      },
      {
        name: 'FAPEAM',
        fullName: 'Fundação de Amparo à Pesquisa do Estado do Amazonas',
        acronym: 'FAPEAM',
        type: 'Estadual',
        country: 'Brasil',
        websiteUrl: 'http://www.fapeam.am.gov.br',
        description: 'Fundação de amparo à pesquisa do Estado do Amazonas, com o objetivo de fomentar o desenvolvimento científico e tecnológico da região.',
        isActive: true,
        displayOrder: 3
      },
      {
        name: 'Samsung Electronics da Amazônia Ltda.',
        fullName: 'Samsung Electronics da Amazônia Ltda.',
        acronym: 'SAMSUNG',
        type: 'Privada',
        country: 'Coreia do Sul / Brasil',
        websiteUrl: 'https://www.samsung.com/br',
        description: 'Empresa multinacional sul-coreana de eletrônicos com unidade fabril em Manaus, que financia projetos de P&D através da Lei de Informática.',
        isActive: true,
        displayOrder: 4
      },
      {
        name: 'FINEP',
        fullName: 'Financiadora de Estudos e Projetos',
        acronym: 'FINEP',
        type: 'Federal',
        country: 'Brasil',
        websiteUrl: 'http://www.finep.gov.br',
        description: 'Empresa pública vinculada ao MCTI que promove o desenvolvimento econômico e social do Brasil por meio do fomento público à Ciência, Tecnologia e Inovação.',
        isActive: true,
        displayOrder: 5
      },
      {
        name: 'FAPESPA',
        fullName: 'Fundação Amazônia de Amparo a Estudos e Pesquisas',
        acronym: 'FAPESPA',
        type: 'Estadual',
        country: 'Brasil',
        websiteUrl: 'https://www.fapespa.pa.gov.br',
        description: 'Fundação de amparo à pesquisa do Estado do Pará.',
        isActive: true,
        displayOrder: 6
      },
      {
        name: 'Instituto Serrapilheira',
        fullName: 'Instituto Serrapilheira',
        acronym: 'Serrapilheira',
        type: 'Privada',
        country: 'Brasil',
        websiteUrl: 'https://serrapilheira.org',
        description: 'Primeira instituição privada sem fins lucrativos de fomento à ciência no Brasil, com foco em ciências naturais, computação e matemática.',
        isActive: true,
        displayOrder: 7
      }
    ];

    let created = 0;
    let updated = 0;
    let skipped = 0;

    for (const agencyData of agencies) {
      const existing = await strapi.entityService.findMany('api::funding-agency.funding-agency', {
        filters: { name: agencyData.name },
        limit: 1
      });

      if (existing && existing.length > 0) {
        console.log(`   ⏭️  Skipped ${agencyData.name} (already exists)`);
        skipped++;
      } else {
        await strapi.entityService.create('api::funding-agency.funding-agency', {
          data: agencyData
        });
        console.log(`   ✅ Created ${agencyData.name}`);
        created++;
      }
    }

    console.log('\n📊 Summary:');
    console.log(`   ✅ Created: ${created}`);
    console.log(`   ⏭️  Skipped: ${skipped}`);
    console.log(`   📦 Total: ${agencies.length}`);
    console.log('\n✅ Funding agencies seeded successfully!');
    
  } catch (error) {
    console.error('❌ Error seeding funding agencies:', error);
  } finally {
    strapi.stop();
    process.exit(0);
  }
}

seedFundingAgencies();
