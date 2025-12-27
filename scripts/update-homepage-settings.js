#!/usr/bin/env node
"use strict";

/**
 * Script para atualizar o Homepage Settings via API
 * Executa: node scripts/update-homepage-settings.js
 */

const http = require("http");

const homepageSettings = {
  groupName: "e-Controls - Grupo de Estudos em Controle de Sistemas",
  tagline: "Avançando a fronteira do conhecimento em controle de sistemas",
  institutionalAffiliation: "Universidade Federal do Amazonas",
  department: "Faculdade de Tecnologia",
  location: "Manaus, Amazonas, Brasil",
  introductionText:
    "O <strong>e-Controls</strong> é um grupo de pesquisa da UFAM que se destaca como referência nacional em teoria de controle, sistemas tolerantes a falhas e verificação formal de software.\n\nCom colaborações internacionais estabelecidas com Oxford, Manchester e Cambridge, atuamos na fronteira do conhecimento aplicando soluções para a indústria amazônica.",
  foundingYear: "2017",
  aboutTitle: "Referência em Controle de Sistemas da Região Norte",
  projectsSection: {
    label: "/// projetos",
    title: "Pesquisa & Desenvolvimento",
    description:
      "Projetos de pesquisa financiados por agências nacionais e internacionais.",
  },
  teamSection: {
    label: "/// equipe",
    title: "Liderança Acadêmica",
    description:
      "Pesquisadores com formação em universidades de excelência mundial.",
  },
  alumniSection: {
    label: "/// egressos",
    title: "Alumni",
    description:
      "Nossos egressos atuam em universidades, indústrias e centros de pesquisa ao redor do mundo.",
  },
  partnersSection: {
    label: "/// parceiros",
    title: "Rede de Colaboração Internacional",
    description:
      "Colaboramos com universidades e centros de pesquisa de excelência ao redor do mundo.",
  },
  publicationsSection: {
    label: "/// publicações",
    title: "Produção Científica",
    description:
      "Artigos publicados em periódicos e conferências de alto impacto.",
  },
  newsSection: {
    label: "/// notícias",
    title: "Últimas Atualizações",
    description: "",
  },
  sectionVisibility: {
    showHero: true,
    showAbout: true,
    showMetrics: true,
    showResearch: true,
    showProjects: true,
    showTeam: true,
    showAlumni: true,
    showPartners: true,
    showPublications: true,
    showNews: true,
  },
  keyMetrics: [
    { label: "publicações", value: "201+", order: 1 },
    { label: "citações", value: "450+", order: 2 },
    { label: "mestres formados", value: "25+", order: 3 },
    { label: "parcerias internac.", value: "6+", order: 4 },
  ],
};

const data = JSON.stringify({ data: homepageSettings });

const options = {
  hostname: "localhost",
  port: 1337,
  path: "/api/homepage-setting",
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

console.log("🔄 Atualizando Homepage Settings...");

const req = http.request(options, (res) => {
  let responseData = "";

  res.on("data", (chunk) => {
    responseData += chunk;
  });

  res.on("end", () => {
    if (res.statusCode === 200) {
      console.log("✅ Homepage Settings atualizado com sucesso!");
      console.log("\n📊 Resposta da API:");
      try {
        const parsed = JSON.parse(responseData);
        console.log(JSON.stringify(parsed, null, 2));
      } catch (e) {
        console.log(responseData);
      }
    } else {
      console.error(`❌ Erro ao atualizar: Status ${res.statusCode}`);
      try {
        const parsed = JSON.parse(responseData);
        console.error(JSON.stringify(parsed, null, 2));
      } catch (e) {
        console.error(responseData);
      }
    }
  });
});

req.on("error", (error) => {
  console.error("❌ Erro na requisição:", error.message);
});

req.write(data);
req.end();
