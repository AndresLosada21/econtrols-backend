const axios = require('axios');

const API_URL = 'http://localhost:1337/api';

const completeData = {
  // Disciplinas de Graduação
  teachingGraduate: [
    "Sistemas de Controle",
    "Eletrônica Digital",
    "Microcontroladores e Microprocessadores",
    "Instrumentação Eletrônica"
  ],
  
  // Disciplinas de Pós-Graduação
  teachingPostgraduate: [
    "Verificação Formal de Sistemas Embarcados",
    "Controle Digital Avançado",
    "Sistemas Ciber-Físicos Seguros",
    "Tópicos Especiais em Model Checking"
  ],
  
  // Prêmios e Distinções
  awardsDistinctions: [
    {
      title: "Best Paper Award - IEEE CCTA 2022",
      year: 2023,
      issuer: "IEEE Conference on Control Technology and Applications",
      description: "Artigo premiado sobre verificação formal de controladores PID digitais usando ESBMC"
    },
    {
      title: "Jovem Pesquisador Destaque",
      year: 2022,
      issuer: "Sociedade Brasileira de Automática (SBA)",
      description: "Reconhecimento por contribuições em verificação formal aplicada a sistemas de controle"
    },
    {
      title: "Menção Honrosa - Prêmio CAPES de Tese",
      year: 2021,
      issuer: "CAPES - Ministério da Educação",
      description: "Tese de doutorado sobre model checking de sistemas ciber-físicos"
    }
  ],
  
  // Orientandos em Andamento
  currentGraduateAdvisees: [
    {
      name: "Carlos Silva Santos",
      level: "Doutorado",
      startYear: 2023,
      title: "Verificação Formal de Sistemas de Controle usando Inteligência Artificial",
      expectedDefense: 2027
    },
    {
      name: "Maria Oliveira Costa",
      level: "Mestrado",
      startYear: 2024,
      title: "Model Checking de Controladores Fuzzy para Microrredes CC",
      expectedDefense: 2026
    },
    {
      name: "João Pedro Almeida",
      level: "Mestrado",
      startYear: 2024,
      title: "Detecção de Intrusão em PLCs usando Machine Learning",
      expectedDefense: 2026
    },
    {
      name: "Ana Paula Ferreira",
      level: "Iniciação Científica",
      startYear: 2024,
      title: "Desenvolvimento de Testbed para Cibersegurança Industrial",
      expectedDefense: 2025
    }
  ],
  
  // Orientações Concluídas
  completedAdvisees: [
    {
      name: "Lucas Henrique Rocha",
      level: "Mestrado",
      year: 2023,
      title: "Verificação de Segurança em Sistemas de Controle de Microrredes usando ESBMC",
      currentPosition: "Doutorando na UNICAMP"
    },
    {
      name: "Fernanda Souza Lima",
      level: "Mestrado",
      year: 2022,
      title: "Análise Formal de Controladores PID Digitais: Estabilidade e Overflow",
      currentPosition: "Engenheira de Controle na Siemens Brasil"
    },
    {
      name: "Rafael Costa Mendes",
      level: "Iniciação Científica",
      year: 2023,
      title: "Implementação de Algoritmos de Verificação para Sistemas Embarcados",
      currentPosition: "Mestrando UFAM"
    },
    {
      name: "Juliana Santos Pereira",
      level: "Iniciação Científica",
      year: 2022,
      title: "Estudo Comparativo de Ferramentas de Model Checking",
      currentPosition: "Graduanda em Engenharia Elétrica UFAM"
    },
    {
      name: "Bruno Martins Oliveira",
      level: "Iniciação Científica",
      year: 2021,
      title: "Desenvolvimento de Interface Gráfica para ESBMC",
      currentPosition: "Desenvolvedor de Software no Polo Industrial de Manaus"
    }
  ],
  
  // Posições Institucionais (atualizar)
  institutionalPositions: [
    "Coordenador do Curso de Engenharia Elétrica (2023-atual)",
    "Membro do Colegiado do Programa de Pós-Graduação em Engenharia Elétrica (2019-atual)",
    "Representante da UFAM no IEEE Control Systems Society",
    "Membro do Comitê de Infraestrutura de Laboratórios da FT",
    "Coordenador do Laboratório de Sistemas Embarcados e Verificação Formal"
  ],
  
  // Colaborações Internacionais (Rich Text)
  internationalCollaborations: `<h3>Principais Colaborações Internacionais</h3>

<h4>University of Oxford (Reino Unido)</h4>
<p>Colaboração ativa desde 2019 com o Department of Computer Science, focada em verificação formal de sistemas autônomos e seguros. Participação em projetos conjuntos financiados pelo programa Newton Fund UK-Brazil.</p>
<ul>
  <li>2 artigos publicados em coautoria</li>
  <li>1 visita técnica realizada em 2020 (3 meses)</li>
  <li>Co-orientação de 1 aluno de doutorado</li>
</ul>

<h4>Universitat Politècnica de Catalunya - UPC (Espanha)</h4>
<p>Parceria estabelecida durante doutorado sanduíche (2018-2019). Trabalho conjunto em verificação de sistemas de controle tolerantes a falhas.</p>
<ul>
  <li>4 publicações conjuntas</li>
  <li>Participação em projeto europeu H2020</li>
  <li>Intercâmbio de estudantes de mestrado</li>
</ul>

<h4>University of Manchester (Reino Unido)</h4>
<p>Colaboração focada no desenvolvimento da ferramenta ESBMC (Efficient SMT-Based Model Checker). Membro do comitê técnico do projeto open-source.</p>
<ul>
  <li>Contribuições ao código-fonte do ESBMC</li>
  <li>3 artigos publicados sobre extensões da ferramenta</li>
  <li>Participação em workshops anuais</li>
</ul>

<h4>Outras Colaborações</h4>
<ul>
  <li><strong>University of Southampton (UK):</strong> Verificação de sistemas embarcados críticos</li>
  <li><strong>INRIA Rennes (França):</strong> Controle tolerante a falhas</li>
  <li><strong>TU Dortmund (Alemanha):</strong> Automação industrial</li>
</ul>`,
  
  // Toggles de visibilidade (todos habilitados por padrão)
  showBiography: true,
  showEducation: true,
  showResearchLines: true,
  showProjects: true,
  showPublications: true,
  showAdvisees: true,
  showTeaching: true,
  showAwards: true,
  showInstitutionalPositions: true,
  showCollaborations: true
};

async function populateIuryComplete() {
  try {
    console.log('🌱 Populando dados completos do Prof. Iury Bessa...');
    
    const response = await axios.put(
      `${API_URL}/faculty-members/1`,
      { data: completeData },
      { headers: { 'Content-Type': 'application/json' } }
    );
    
    console.log('✅ Dados atualizados com sucesso!');
    console.log('\n📊 Resumo:');
    console.log(`  - ${completeData.teachingGraduate.length} disciplinas de graduação`);
    console.log(`  - ${completeData.teachingPostgraduate.length} disciplinas de pós-graduação`);
    console.log(`  - ${completeData.awardsDistinctions.length} prêmios e distinções`);
    console.log(`  - ${completeData.currentGraduateAdvisees.length} orientandos em andamento`);
    console.log(`  - ${completeData.completedAdvisees.length} orientações concluídas`);
    console.log(`  - ${completeData.institutionalPositions.length} posições institucionais`);
    console.log('  - Colaborações internacionais: ✅ Texto rico adicionado');
    console.log('\n🎛️  Toggles de visibilidade: Todos habilitados');
    
  } catch (error) {
    console.error('❌ Erro ao popular dados:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(error.message);
    }
    process.exit(1);
  }
}

populateIuryComplete();
