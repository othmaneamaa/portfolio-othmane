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
  { title: "S.O.P.H.I.A", description: "Assistant vocal multi-agents avec voix clonée et avatar 3D.", tech: ["LLM", "Multi-agents", "Python"] },
  { title: "Naxus", description: "Pipeline de veille e-commerce (data lake en couches, scrapers Jumia & MarjaneMall).", tech: ["Spark", "Kafka", "Data Lake"] },
  { title: "Guelya-time", description: "Plateforme de recommandation de films multi-plateforme.", tech: ["Spring Boot", "Next.js", "Neo4j"] },
  { title: "Pikalty", description: "Application mobile de location de vélos électriques avec assistance IA.", tech: ["React Native", "Node.js", "Gemini AI"] },
  { title: "Wijewelry Shop", description: "Application web e-commerce complète (catalogue, panier, commandes).", tech: ["PHP", "MySQL"] },
  { title: "E-réputation CIGMA", description: "Analyse de données et tableaux de bord Power BI pour un centre de formation.", tech: ["Power BI", "Data Analysis"] },
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
