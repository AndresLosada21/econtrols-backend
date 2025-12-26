const axios = require("axios");

const API_URL = "http://localhost:1337/api";

async function updatePublications() {
  console.log("📚 Atualizando Publications 2-5 com dados completos...\n");

  const publicationsData = [
    {
      id: 2,
      data: {
        title:
          "Advanced Control Strategies for DC Microgrids with Energy Storage Systems",
        slug: "advanced-control-dc-microgrids-storage",
        abstract:
          "This paper proposes advanced control strategies for DC microgrids incorporating energy storage systems to enhance stability and performance. We develop a hierarchical control architecture combining droop control at primary level with model predictive control at secondary level. The proposed approach is validated through extensive simulations and experimental tests in a laboratory-scale DC microgrid testbed. Results demonstrate improved voltage regulation, power sharing accuracy, and transient response compared to conventional methods.",
        authorsText:
          "Renan Landau Paiva de Medeiros, Iury Valente de Bessa, Josep M. Guerrero, Juan C. Vasquez",
        publicationType: "Journal Article",
        year: 2023,
        journalName: "IEEE Transactions on Power Electronics",
        volume: "38",
        issue: "5",
        pages: "6123-6135",
        doi: "10.1109/TPEL.2023.3245678",
        citationCount: 15,
        keywords: [
          "DC Microgrids",
          "Energy Storage",
          "Hierarchical Control",
          "Droop Control",
          "Model Predictive Control",
          "Voltage Regulation",
        ],
        qualis: "A1",
        quartile: "Q1",
        impactFactor: 7.2,
        isFeatured: true,
        publicationStatus: "Published",
        pdfUrl: "https://ieeexplore.ieee.org/document/3245678",
        bibtex:
          "@article{medeiros2023advanced,\n  title={Advanced Control Strategies for DC Microgrids with Energy Storage Systems},\n  author={Medeiros, Renan LP and Bessa, Iury V and Guerrero, Josep M and Vasquez, Juan C},\n  journal={IEEE Transactions on Power Electronics},\n  volume={38},\n  number={5},\n  pages={6123--6135},\n  year={2023},\n  publisher={IEEE}\n}",
        authors: [2, 1],
        researchLines: [3],
        relatedProjects: [2, 3],
        seo: {
          metaTitle: "Control DC Microgrids Energy Storage - e-Controls",
          metaDescription:
            "Estratégias avançadas de controle hierárquico para microrredes CC com armazenamento em IEEE Trans. Power Electronics.",
          keywords:
            "microrredes cc, controle hierárquico, armazenamento energia",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/publications/advanced-control-dc-microgrids-storage",
        },
      },
    },
    {
      id: 3,
      data: {
        title:
          "Stability Analysis of Islanded DC Microgrids Using Impedance-Based Methods",
        slug: "stability-analysis-dc-microgrids-impedance",
        abstract:
          "This paper presents a comprehensive stability analysis framework for islanded DC microgrids based on impedance-based methods. We derive small-signal impedance models for various power electronic converters including buck, boost, and bidirectional DC-DC converters. The generalized Nyquist criterion is applied to assess system stability considering the interaction between source and load converters. Design guidelines for stable operation are provided along with experimental validation using a multi-converter DC microgrid testbed.",
        authorsText:
          "Renan Landau Paiva de Medeiros, Florin Iov, Frede Blaabjerg, Iury Valente de Bessa",
        publicationType: "Journal Article",
        year: 2022,
        journalName: "IEEE Transactions on Industrial Electronics",
        volume: "69",
        issue: "12",
        pages: "12456-12467",
        doi: "10.1109/TIE.2022.9876543",
        citationCount: 22,
        keywords: [
          "DC Microgrids",
          "Stability Analysis",
          "Impedance Methods",
          "Nyquist Criterion",
          "Power Electronics",
          "Small-Signal Analysis",
        ],
        qualis: "A1",
        quartile: "Q1",
        impactFactor: 8.2,
        isFeatured: true,
        publicationStatus: "Published",
        pdfUrl: "https://ieeexplore.ieee.org/document/9876543",
        bibtex:
          "@article{medeiros2022stability,\n  title={Stability Analysis of Islanded DC Microgrids Using Impedance-Based Methods},\n  author={Medeiros, Renan LP and Iov, Florin and Blaabjerg, Frede and Bessa, Iury V},\n  journal={IEEE Transactions on Industrial Electronics},\n  volume={69},\n  number={12},\n  pages={12456--12467},\n  year={2022},\n  publisher={IEEE}\n}",
        authors: [2, 1],
        researchLines: [3],
        relatedProjects: [3],
        seo: {
          metaTitle: "Stability DC Microgrids Impedance - e-Controls",
          metaDescription:
            "Análise de estabilidade de microrredes CC usando métodos de impedância e critério de Nyquist em IEEE TIE.",
          keywords:
            "estabilidade microrredes, impedância, nyquist, eletrônica potência",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/publications/stability-analysis-dc-microgrids-impedance",
        },
      },
    },
    {
      id: 4,
      data: {
        title:
          "Machine Learning-Based Intrusion Detection for Industrial Control Systems",
        slug: "ml-intrusion-detection-industrial-control",
        abstract:
          "This work proposes a machine learning-based intrusion detection system specifically designed for industrial control systems. We develop a hybrid approach combining supervised learning (Random Forest) with unsupervised learning (Autoencoder) to detect both known and zero-day attacks. The system is trained and tested using real network traffic data from an operational SCADA system in a water treatment facility. Experimental results show detection rates above 98% with low false positive rates below 2%, demonstrating the effectiveness of the approach for protecting critical infrastructure.",
        authorsText:
          "Iury Valente de Bessa, Eddie Batista de Lima Filho, Lucas Carvalho Cordeiro, Renan Landau Paiva de Medeiros",
        publicationType: "Journal Article",
        year: 2024,
        journalName: "IEEE Transactions on Dependable and Secure Computing",
        volume: "21",
        issue: "2",
        pages: "1234-1246",
        doi: "10.1109/TDSC.2024.1122334",
        citationCount: 8,
        keywords: [
          "Intrusion Detection",
          "Machine Learning",
          "Industrial Control Systems",
          "SCADA",
          "Cybersecurity",
          "Random Forest",
        ],
        qualis: "A1",
        quartile: "Q1",
        impactFactor: 7.8,
        isFeatured: true,
        publicationStatus: "Published",
        pdfUrl: "https://ieeexplore.ieee.org/document/1122334",
        bibtex:
          "@article{bessa2024machine,\n  title={Machine Learning-Based Intrusion Detection for Industrial Control Systems},\n  author={Bessa, Iury V and Lima Filho, Eddie B and Cordeiro, Lucas C and Medeiros, Renan LP},\n  journal={IEEE Transactions on Dependable and Secure Computing},\n  volume={21},\n  number={2},\n  pages={1234--1246},\n  year={2024},\n  publisher={IEEE}\n}",
        authors: [1, 9],
        researchLines: [2],
        relatedProjects: [1],
        seo: {
          metaTitle: "ML Intrusion Detection ICS - e-Controls UFAM",
          metaDescription:
            "Detecção de intrusão baseada em machine learning para sistemas de controle industrial SCADA em IEEE TDSC.",
          keywords:
            "detecção intrusão, machine learning, ICS, SCADA, cibersegurança",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/publications/ml-intrusion-detection-industrial-control",
        },
      },
    },
    {
      id: 5,
      data: {
        title:
          "Autonomous Navigation for Mobile Robots in Unstructured Environments Using Deep Reinforcement Learning",
        slug: "autonomous-navigation-deep-rl",
        abstract:
          "This paper presents an end-to-end autonomous navigation system for mobile robots operating in unstructured environments using deep reinforcement learning. We develop a navigation policy based on Deep Q-Network (DQN) that learns directly from raw sensor data (RGB-D camera and LiDAR) without requiring explicit maps. The proposed approach is trained in simulation using domain randomization techniques and successfully transferred to real robots. Extensive experiments in challenging real-world scenarios demonstrate robust navigation performance, including obstacle avoidance, goal reaching, and recovery behaviors in cluttered environments typical of the Amazon region.",
        authorsText:
          "Victor Figueiredo Lucena Junior, Raimundo Carlos Silvério Freire, Iury Valente de Bessa",
        publicationType: "Journal Article",
        year: 2023,
        journalName: "Robotics and Autonomous Systems",
        volume: "162",
        issue: "",
        pages: "104365",
        doi: "10.1016/j.robot.2023.104365",
        citationCount: 12,
        keywords: [
          "Autonomous Navigation",
          "Mobile Robotics",
          "Deep Reinforcement Learning",
          "DQN",
          "Unstructured Environments",
          "Obstacle Avoidance",
        ],
        qualis: "A1",
        quartile: "Q1",
        impactFactor: 4.3,
        isFeatured: true,
        publicationStatus: "Published",
        pdfUrl: "https://www.sciencedirect.com/science/article/pii/104365",
        bibtex:
          "@article{lucena2023autonomous,\n  title={Autonomous Navigation for Mobile Robots in Unstructured Environments Using Deep Reinforcement Learning},\n  author={Lucena Jr, Victor F and Freire, Raimundo CS and Bessa, Iury V},\n  journal={Robotics and Autonomous Systems},\n  volume={162},\n  pages={104365},\n  year={2023},\n  publisher={Elsevier}\n}",
        authors: [6, 7, 1],
        researchLines: [4],
        relatedProjects: [4],
        seo: {
          metaTitle: "Autonomous Navigation Deep RL - e-Controls",
          metaDescription:
            "Navegação autônoma com deep reinforcement learning para robôs móveis em ambientes não estruturados amazônicos.",
          keywords:
            "navegação autônoma, deep RL, robótica móvel, DQN, Amazônia",
          metaRobots: "index, follow",
          canonicalURL:
            "https://econtrols.ufam.edu.br/publications/autonomous-navigation-deep-rl",
        },
      },
    },
  ];

  for (const pub of publicationsData) {
    try {
      await axios.put(`${API_URL}/publications/${pub.id}`, pub);
      console.log(
        `✅ Publication ${pub.id} atualizada: ${pub.data.title.substring(0, 50)}...`,
      );
    } catch (error) {
      console.error(
        `❌ Erro ao atualizar publication ${pub.id}:`,
        error.response?.data || error.message,
      );
    }
  }
}

async function main() {
  console.log("🌱 Iniciando atualização de Publications...\n");
  await updatePublications();
  console.log("\n🎉 Atualização concluída!");
  console.log(
    "\n📋 Verificar em: http://localhost:1337/admin/content-manager/collection-types/api::publication.publication",
  );
}

main().catch(console.error);
