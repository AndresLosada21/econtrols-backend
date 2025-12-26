const Strapi = require("@strapi/strapi");

async function seedLayoutData() {
  const strapi = await Strapi().load();

  try {
    console.log("🌱 Seeding Navbar and Footer data...\n");

    // ============================================
    // NAVBAR DATA
    // ============================================
    console.log("📌 Updating Navbar Settings...");

    const navbarData = {
      logoAlt: "e-Controls Logo",
      siteName: "e-Controls",
      showSearch: false,
      isSticky: true,
      transparentOnTop: true,
      mainMenu: [
        { label: "/pesquisa", url: "/research", order: 1, isExternal: false },
        { label: "/equipe", url: "/people", order: 2, isExternal: false },
        { label: "/projetos", url: "/projects", order: 3, isExternal: false },
        { label: "/parceiros", url: "/partners", order: 4, isExternal: false },
        {
          label: "/publicações",
          url: "/publications",
          order: 5,
          isExternal: false,
        },
        { label: "/notícias", url: "/news", order: 6, isExternal: false },
      ],
      ctaButton: {
        label: "contato",
        url: "#contact",
        isExternal: false,
        variant: "outline",
        isVisible: true,
      },
    };

    // Check if navbar-setting exists
    const existingNavbar = await strapi.entityService.findMany(
      "api::navbar-setting.navbar-setting",
    );

    if (existingNavbar) {
      // Update existing
      await strapi.entityService.update(
        "api::navbar-setting.navbar-setting",
        existingNavbar.id,
        {
          data: navbarData,
        },
      );
      console.log("   ✅ Navbar settings updated!");
    } else {
      // Create new
      await strapi.entityService.create("api::navbar-setting.navbar-setting", {
        data: navbarData,
      });
      console.log("   ✅ Navbar settings created!");
    }

    // ============================================
    // FOOTER DATA
    // ============================================
    console.log("\n📌 Updating Footer Settings...");

    const footerData = {
      logoAlt: "e-Controls Logo",
      siteName: "e-Controls",
      description:
        "Grupo de pesquisa em controle e automação da Universidade Federal do Amazonas, referência em teoria de controle, sistemas tolerantes a falhas e verificação formal.",
      institutionName: "Universidade Federal do Amazonas (UFAM)",
      departmentName: "Departamento de Eletricidade - Faculdade de Tecnologia",
      copyrightText: "e-Controls Research Group. Todos os direitos reservados.",
      bottomText: "Desenvolvido com ❤️ na Amazônia.",
      showNewsletter: false,
      contactInfo: {
        email: "iurybessa@ufam.edu.br",
        phone: "+55 92 3305-1181",
        address: "Av. General Rodrigo Otávio, 6200",
        city: "Manaus",
        state: "AM",
        postalCode: "69077-000",
        country: "Brasil",
        mapUrl: "https://maps.google.com/?q=UFAM+Manaus",
      },
      socialLinks: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/company/e-controls-ufam",
          label: "LinkedIn",
        },
        {
          platform: "GitHub",
          url: "https://github.com/e-controls",
          label: "GitHub",
        },
        {
          platform: "Google Scholar",
          url: "https://scholar.google.com/citations?user=XXXXXX",
          label: "Google Scholar",
        },
        {
          platform: "ResearchGate",
          url: "https://researchgate.net/lab/e-Controls-UFAM",
          label: "ResearchGate",
        },
      ],
      menuColumns: [
        {
          title: "navegação",
          order: 1,
          links: [
            { label: "início", url: "/", order: 1, isExternal: false },
            {
              label: "pesquisa",
              url: "/research",
              order: 2,
              isExternal: false,
            },
            { label: "equipe", url: "/people", order: 3, isExternal: false },
            {
              label: "projetos",
              url: "/projects",
              order: 4,
              isExternal: false,
            },
          ],
        },
        {
          title: "recursos",
          order: 2,
          links: [
            {
              label: "publicações",
              url: "/publications",
              order: 1,
              isExternal: false,
            },
            { label: "notícias", url: "/news", order: 2, isExternal: false },
            {
              label: "parceiros",
              url: "/partners",
              order: 3,
              isExternal: false,
            },
            {
              label: "portal ufam",
              url: "https://ufam.edu.br",
              order: 4,
              isExternal: true,
            },
          ],
        },
      ],
    };

    // Check if footer-setting exists
    const existingFooter = await strapi.entityService.findMany(
      "api::footer-setting.footer-setting",
    );

    if (existingFooter) {
      // Update existing
      await strapi.entityService.update(
        "api::footer-setting.footer-setting",
        existingFooter.id,
        {
          data: footerData,
        },
      );
      console.log("   ✅ Footer settings updated!");
    } else {
      // Create new
      await strapi.entityService.create("api::footer-setting.footer-setting", {
        data: footerData,
      });
      console.log("   ✅ Footer settings created!");
    }

    console.log("\n🎉 Layout data seeded successfully!\n");
  } catch (error) {
    console.error("❌ Error seeding layout data:", error);
  } finally {
    strapi.stop();
    process.exit(0);
  }
}

seedLayoutData();
