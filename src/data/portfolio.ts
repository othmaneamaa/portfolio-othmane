export const profile = {
  name: "Othmane Amaadour",
  title: "Étudiant Ingénieur en IA & Data",
  about:
    "Étudiant en 5e année du cycle ingénieur en informatique à l'EMSI Casablanca, spécialité Intelligence Artificielle et Data. Je travaille sur les pipelines de données, les agents LLM et, à l'occasion, un moteur de jeu, en français, en arabe et en anglais. Je mesure et valide mes résultats avant de conclure. Je recherche un stage PFE en IA / Data pour appliquer ces compétences sur des problématiques réelles.",
  email: "othmaneamaa@gmail.com",
  linkedin: "https://www.linkedin.com/in/othmane-amaadour-8102a5251/",
  github: "https://github.com/othmaneamaa",
};

export const skills = [
  { category: "IA & Data Science", items: ["Python", "Agents LLM", "Systèmes multi-agents", "Pipelines de données", "Nettoyage & validation"] },
  { category: "Big Data & Data Engineering", items: ["Apache Spark", "Apache Kafka", "Apache NiFi", "Apache Airflow", "Cloudera (Hive, Pig)", "SSIS", "Data Lake"] },
  { category: "Bases de données", items: ["MySQL", "Oracle", "MongoDB", "Neo4j", "Cassandra"] },
  { category: "Analyse & Visualisation", items: ["Power BI", "Excel"] },
  { category: "Cloud & Systèmes", items: ["Microsoft Azure", "Linux", "Virtualisation"] },
  { category: "Langages & Web", items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "PHP", "HTML/CSS", "Spring Boot", "Next.js"] },
  { category: "Outils", items: ["Word", "PowerPoint", "MS Project", "Photoshop"] },
];

export const experiences = [
  {
    role: "Développeur Full-Stack Mobile & IA – Stage PFA",
    company: "Amasous Immo",
    date: "juil. 2026 - sept. 2026 · 3 mois",
    location: "Casablanca, Maroc · Hybride",
    description: "Conception et développement de Pikalty, une application mobile de location de vélos électriques avec assistant IA intégré.",
    missions: ["Développement full-stack d'une application mobile.", "Conception d'une base de données relationnelle MySQL.", "Intégration d'un chatbot intelligent.", "Création d'une interface d'administration complète.", "Modélisation UML."],
    tech: ["React Native", "Expo", "Node.js", "Express", "MySQL", "TypeScript", "JWT", "bcrypt", "Google Gemini AI", "Git", "Postman"],
  },
  {
    role: "Stagiaire Data Analyst – E-réputation & Veille digitale",
    company: "Next Skills",
    date: "avr. 2023 - juin 2023 · 3 mois",
    location: "Casablanca, Maroc · Sur site",
    description: "Mission complète d'analyse et de gestion de l'e-réputation pour le Centre CIGMA – FST Settat, client de l'agence Next Skills.",
    missions: ["Audit de la e-réputation : collecte et analyse des données.", "Création de tableaux de bord interactifs sous Power BI.", "Analyse de sentiments des commentaires.", "Benchmark concurrentiel.", "Analyse SWOT et recommandations stratégiques.", "Proposition de stratégies de gestion de crise (Bad Buzz)."],
    tech: ["Power BI", "Excel", "Analyse de données", "Stratégie digitale"],
  },
];

export const projects = [
  {
    slug: "sophia",
    title: "S.O.P.H.I.A",
    description: "Assistant vocal multi-agents avec voix clonée et avatar 3D.",
    tech: ["LLM", "Multi-agents", "Python", "LangGraph", "Ollama"],
    category: { en: "AI Agent", fr: "Agent IA" },
    year: "2026",
    longDescription: {
      en: "A self-hosted assistant that listens continuously, reasons locally with Ollama, and responds with a cloned voice through a lip-sync desktop avatar. Powered by a LangGraph pipeline that routes each request to a specialist: system commands, RAG researcher, calculator, and writer.",
      fr: "Un assistant auto-hébergé qui écoute en continu, raisonne en local avec Ollama et répond avec une voix clonée à travers un avatar de bureau synchronisé sur les lèvres. Un pipeline LangGraph oriente chaque requête vers un spécialiste : un agent de commandes système, un chercheur RAG, un mathématicien et un rédacteur.",
    },
    architectureFlow: [
      { step: "Voix", desc: { en: "Continuous listening", fr: "Écoute en continu" } },
      { step: "Agent routeur", desc: { en: "LangGraph intent router", fr: "Routeur d'intention LangGraph" } },
      {
        branches: [
          { step: "Système", desc: { en: "Commands", fr: "Commandes" } },
          { step: "RAG", desc: { en: "Local docs", fr: "Docs locales" } },
          { step: "Calcul", desc: { en: "Math engine", fr: "Moteur math" } },
          { step: "Dialogue", desc: { en: "General", fr: "Général" } },
        ]
      },
      { step: "Agent rédacteur", desc: { en: "Synthesizes final response", fr: "Synthétise la réponse finale" } },
      {
        branches2: [
          { step: "Voix clonée", desc: { en: "Cloned TTS", fr: "Voix clonée TTS" } },
          { step: "Avatar 3D", desc: { en: "Lip-sync desktop avatar", fr: "Avatar 3D synchronisé" } },
        ]
      }
    ],
    metrics: {
      bars: [
        { label: { en: "Speech recognition accuracy", fr: "Précision reconnaissance vocale" }, value: 95 },
        { label: { en: "LangGraph routing precision", fr: "Précision routage LangGraph" }, value: 92 },
        { label: { en: "Local inference speed", fr: "Vitesse d'inférence locale" }, value: 90 },
      ],
      highlights: [
        { value: "4", label: { en: "specialized agents", fr: "agents spécialisés" } },
        { value: "Ollama", label: { en: "local LLM inference", fr: "inférence LLM locale" } },
        { value: "3D", label: { en: "lip-sync avatar", fr: "avatar synchro-lèvres" } },
      ],
    },
    github: "https://github.com/othmaneamaa",
  },
  {
    slug: "naxus",
    title: "Naxus",
    description: "Pipeline de veille e-commerce (data lake en couches, scrapers Jumia & MarjaneMall).",
    tech: ["Python", "Pandas", "Airflow", "MinIO", "PostgreSQL", "Kafka", "Streamlit"],
    category: { en: "Data Engineering", fr: "Data Engineering" },
    year: "2026",
    longDescription: {
      en: "Data architecture module project. An hourly Airflow pipeline collects product listings from two Moroccan e-commerce sites, cleans and aggregates them with Pandas into bronze, silver, and gold layers stored in MinIO, then loads the gold layer via upserts into a PostgreSQL warehouse with daily price history. A Streamlit dashboard compares prices between sites, and a Kafka stream triggers price alerts.",
      fr: "Projet du module d'architecture de données. Un pipeline Airflow horaire collecte les fiches produits de deux sites marocains de e-commerce, les nettoie et les agrège avec pandas en couches bronze, silver et gold stockées dans MinIO, puis charge la couche gold par upserts dans un entrepôt PostgreSQL avec historique quotidien des prix. Un tableau de bord Streamlit compare les prix entre les deux sites, et un flux Kafka déclenche des alertes de prix.",
    },
    architectureFlow: [
      {
        sources: [
          { step: "Jumia", desc: { en: "Product listings", fr: "Fiches produits" } },
          { step: "MarjaneMall", desc: { en: "Product listings", fr: "Fiches produits" } },
          { step: "Airflow", desc: { en: "Hourly schedule", fr: "Planification horaire" } },
        ]
      },
      { step: "Scraper", desc: { en: "Name, price, category", fr: "Nom, prix, catégorie" } },
      {
        lake: [
          { step: "Bronze", desc: { en: "Raw lines", fr: "Lignes brutes" } },
          { step: "Silver", desc: { en: "Cleaned, deduplicated", fr: "Nettoyé, dédoublonné" } },
          { step: "Gold", desc: { en: "Price stats", fr: "Stats de prix" } },
        ]
      },
      {
        sinks: [
          { step: "PostgreSQL", desc: { en: "Price history upserts", fr: "Historique & upserts" } },
          { step: "Streamlit", desc: { en: "Price comparison dashboard", fr: "Dashboard comparatif" } },
          { step: "Kafka / Alertes", desc: { en: "Real-time price alerts", fr: "Alertes prix temps réel" } },
        ]
      }
    ],
    metrics: {
      bars: [
        { label: { en: "Data collection coverage", fr: "Couverture collecte de données" }, value: 100 },
        { label: { en: "Pipeline reliability (Airflow)", fr: "Fiabilité pipeline (Airflow)" }, value: 98 },
        { label: { en: "Data quality & deduplication", fr: "Qualité & dédoublonnage" }, value: 96 },
      ],
      highlights: [
        { value: "2", label: { en: "e-commerce sites", fr: "sites e-commerce" } },
        { value: "3", label: { en: "lake layers (Bronze/Silver/Gold)", fr: "couches (Bronze/Silver/Gold)" } },
        { value: "Streamlit", label: { en: "analytics dashboard", fr: "dashboard analytique" } },
      ],
    },
    github: "https://github.com/othmaneamaa",
  },
  {
    slug: "guelya-time",
    title: "Guelya-time",
    description: "Plateforme de recommandation de films multi-plateforme (JavaFX & Neo4j).",
    tech: ["Java", "JavaFX", "Spring Boot", "Neo4j", "MVC"],
    category: { en: "Desktop / Graph App", fr: "Application Desktop / Graphe" },
    year: "2025",
    longDescription: {
      en: "A movie recommendation desktop application built on an MVC architecture. Features a JavaFX interactive UI, a hybrid recommendation engine in Java, and a Neo4j graph database modeling complex relationships (USERS, MOVIES, GENRES, ACTORS, A_VU, AIME).",
      fr: "Une application desktop de recommandation de films basée sur une architecture MVC. Intègre une interface JavaFX interactive, un moteur de recommandation hybride en Java, et une base de données orientée graphe Neo4j modélisant les relations complexes (UTILISATEURS, FILMS, GENRES, ACTEURS, A_VU, AIME).",
    },
    architectureFlow: [
      { step: "Utilisateur", desc: { en: "Desktop client interaction", fr: "Interaction client lourd" } },
      { step: "Interface JavaFX & FXML", desc: { en: "Presentation layer", fr: "Couche présentation (Vue)" } },
      { step: "Contrôleurs JavaFX", desc: { en: "Event handling & bindings", fr: "Gestion des événements" } },
      { step: "Services Métier", desc: { en: "Hybrid recommendation engine", fr: "Moteur de reco. hybride" } },
      { step: "DAO Neo4j", desc: { en: "Cypher queries mapper", fr: "Mapping requêtes Cypher" } },
      { step: "Base de Données Neo4j", desc: { en: "Graph storage & nodes", fr: "Stockage orienté graphe" } },
    ],
    metrics: {
      bars: [
        { label: { en: "Recommendation relevance", fr: "Pertinence des recommandations" }, value: 91 },
        { label: { en: "Graph traversal optimization", fr: "Optimisation parcours graphe" }, value: 94 },
        { label: { en: "UI responsiveness (JavaFX)", fr: "Réactivité UI (JavaFX)" }, value: 95 },
      ],
      highlights: [
        { value: "Neo4j", label: { en: "graph database", fr: "base de données graphe" } },
        { value: "MVC", label: { en: "clean architecture", fr: "architecture propre" } },
        { value: "JavaFX", label: { en: "rich desktop ui", fr: "interface desktop riche" } },
      ],
    },
    github: "https://github.com/othmaneamaa",
  },
  {
    slug: "pikalty",
    title: "Pikalty",
    description: "Application mobile de location de vélos électriques avec assistance IA.",
    tech: ["React Native", "Expo", "Node.js", "Express", "MySQL", "Google Gemini AI"],
    category: { en: "Mobile App & AI", fr: "App Mobile & IA" },
    year: "2026",
    longDescription: {
      en: "A 3-tier client-server mobile e-bike rental application. React Native/Expo frontend for iOS/Android, Node.js/Express REST API backend with JWT security, MySQL relational database for persistence, and Google Gemini AI API integration for an intelligent chatbot assistant with fallback mechanism.",
      fr: "Une application mobile de location de vélos électriques en architecture 3-tiers client-serveur. Frontend React Native/Expo pour iOS/Android, backend API REST Node.js/Express sécurisée par JWT, base de données relationnelle MySQL, et intégration de l'API Google Gemini AI pour un assistant chatbot intelligent avec mécanisme de secours.",
    },
    architectureFlow: [
      { step: "Client Mobile (React Native)", desc: { en: "iOS / Android app & UI", fr: "App iOS / Android & UI" } },
      { step: "API REST (Node.js / Express)", desc: { en: "Auth JWT & business logic", fr: "Auth JWT & logique métier" } },
      {
        branches: [
          { step: "MySQL", desc: { en: "Relational persistence", fr: "Persistance relationnelle" } },
          { step: "Google Gemini AI", desc: { en: "Smart assistant chatbot", fr: "Chatbot assistant intelligent" } },
        ]
      },
    ],
    metrics: {
      bars: [
        { label: { en: "API security & JWT auth", fr: "Sécurité API & auth JWT" }, value: 98 },
        { label: { en: "Gemini AI integration", fr: "Intégration Gemini AI" }, value: 92 },
        { label: { en: "Mobile UX fluidity", fr: "Fluidité UX mobile" }, value: 95 },
      ],
      highlights: [
        { value: "JWT", label: { en: "secure tokens", fr: "jetons sécurisés" } },
        { value: "Gemini", label: { en: "LLM chatbot", fr: "chatbot LLM" } },
        { value: "MySQL", label: { en: "structured data", fr: "données structurées" } },
      ],
    },
    github: "https://github.com/othmaneamaa",
  },
  {
    slug: "wijewelry-shop",
    title: "Wijewelry Shop",
    description: "Application web e-commerce complète (catalogue, panier, commandes).",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Admin Dashboard"],
    category: { en: "Web E-commerce", fr: "E-commerce Web" },
    year: "2024",
    longDescription: {
      en: "A complete e-commerce web application for jewelry. Features user authentication, product catalog with dynamic categories, shopping cart management, order processing, and a dedicated administrator webmaster dashboard for inventory and orders management.",
      fr: "Une application web e-commerce complète pour la bijouterie. Fonctionnalités : authentification utilisateur, catalogue produits avec catégories dynamiques, gestion du panier, traitement des commandes, et un tableau de bord webmaster administrateur dédié pour la gestion des stocks et commandes.",
    },
    architectureFlow: [
      { step: "Navigateur Web (HTML/CSS/JS)", desc: { en: "Client storefront UI", fr: "Interface boutique client" } },
      { step: "Serveur Web & Logique PHP", desc: { en: "Backend e-commerce logic", fr: "Logique backend e-commerce" } },
      { step: "Base de Données MySQL", desc: { en: "Products, categories, orders", fr: "Produits, catégories, commandes" } },
      { step: "Interface Administrateur", desc: { en: "Webmaster management panel", fr: "Panel de gestion webmaster" } },
    ],
    metrics: {
      bars: [
        { label: { en: "E-commerce workflow completion", fr: "Complétude parcours e-commerce" }, value: 100 },
        { label: { en: "Database relational design", fr: "Conception relationnelle BDD" }, value: 95 },
        { label: { en: "Admin control & CRUD", fr: "Contrôle admin & CRUD" }, value: 90 },
      ],
      highlights: [
        { value: "PHP", label: { en: "backend engine", fr: "moteur backend" } },
        { value: "MySQL", label: { en: "relational storage", fr: "stockage relationnel" } },
        { value: "Admin", label: { en: "management panel", fr: "panel de gestion" } },
      ],
    },
    github: "https://github.com/othmaneamaa",
  },
  {
    slug: "e-reputation-cigma",
    title: "E-réputation CIGMA",
    description: "Analyse de données et tableaux de bord Power BI pour un centre de formation.",
    tech: ["Power BI", "Excel", "Data Analysis", "SWOT", "Sentiment Analysis"],
    category: { en: "Data Analysis & Audit", fr: "Analyse de Données & Audit" },
    year: "2023",
    longDescription: {
      en: "A comprehensive data analysis and strategic audit project for Centre CIGMA – FST Settat. Implemented a full data pipeline: collection across social platforms & review sites, consolidation and sentiment classification in Excel, interactive Power BI dashboards, SWOT analysis, and crisis management strategy.",
      fr: "Un projet complet d'analyse de données et d'audit stratégique pour le Centre CIGMA – FST Settat. Implémentation d'un pipeline data complet : collecte sur les réseaux sociaux & avis, consolidation et classification des sentiments sous Excel, tableaux de bord interactifs Power BI, analyse SWOT et stratégie de gestion de crise.",
    },
    architectureFlow: [
      { step: "Sources de Données", desc: { en: "Web, Socials, Google My Business", fr: "Web, Réseaux, Google My Business" } },
      { step: "Traitement & Stockage", desc: { en: "Excel consolidation & Sentiment tagging", fr: "Consolidation & classification sentiments" } },
      { step: "Analyse & Visualisation", desc: { en: "Power BI dashboards & SWOT matrix", fr: "Tableaux de bord Power BI & SWOT" } },
      { step: "Recommandations Stratégiques", desc: { en: "Bad buzz crisis management plan", fr: "Plan d'action & gestion de crise" } },
    ],
    metrics: {
      bars: [
        { label: { en: "Data sources coverage", fr: "Couverture sources de données" }, value: 100 },
        { label: { en: "Sentiment analysis accuracy", fr: "Précision analyse sentiments" }, value: 94 },
        { label: { en: "Power BI dashboard impact", fr: "Impact tableaux de bord Power BI" }, value: 96 },
      ],
      highlights: [
        { value: "Power BI", label: { en: "interactive viz", fr: "visualisation interactive" } },
        { value: "SWOT", label: { en: "strategic matrix", fr: "matrice stratégique" } },
        { value: "Audit", label: { en: "reputation report", fr: "rapport de réputation" } },
      ],
    },
    github: "https://github.com/othmaneamaa",
  },
];

export const certifications = [
  { title: "React Native", issuer: "Meta", date: "déc. 2025", id: "OU4BXMU78CI8" },
  { title: "Les bases de React", issuer: "Meta", date: "déc. 2025", id: "JN8B4I3PNU25" },
  { title: "Certified Data Analytics", issuer: "ALX Morocco", date: "févr. 2024 (Expiré sept. 2024)", skills: "PL/SQL, Microsoft Power BI" },
  { title: "Google My Business", issuer: "Google", date: "déc. 2022", id: "135731645" },
  { title: "Oracle Fusion AI Agent Studio Certified Foundations Associate", issuer: "Oracle", date: "août 2026" },
  { title: "Introduction aux Big Data", issuer: "University of California San Diego", date: "avr. 2026", id: "XUKME5MG1K13" },
  { title: "Applications of AI for Anomaly Detection", issuer: "NVIDIA", date: "janv. 2026", id: "tsySqX7jSfWy5q22OMl6hw" },
];

export const education = [
  { degree: "Diplôme d'Ingénieur en Informatique et Réseaux, spécialité IA & Data", school: "EMSI Casablanca", date: "En cours" },
  { degree: "Formation Data Analytics", school: "ALX Africa", date: "2023" },
  { degree: "Licence Système d'Information et Transformation Digitale (SITD)", school: "Université Hassan 1er, FST Settat", date: "2023" },
  { degree: "DEUST Mathématiques, Informatique et Physique (MIP)", school: "Université Hassan 1er, FST Settat", date: "2021" },
  { degree: "Baccalauréat Sciences Physiques, option Français", school: "Lycée La Pertinence, Casablanca", date: "2020" },
];

export const languages = ["Arabe (courant)", "Français (courant)", "Anglais (courant)"];
export const softSkills = ["Esprit d'équipe", "Autonomie", "Gestion du stress", "Rigueur", "Esprit d'initiative", "Curiosité", "Gestion de projet"];
