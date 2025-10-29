export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'frontend' | 'backend' | 'fullstack';
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Application de gestion des cotisations sociales (Frontend)",
    description: "Conception et développement d'une interface utilisateur interactive pour la gestion des cotisations sociales . Réalisée avec Vue.js 3, cette interface permet la saisie, la consultation et le suivi des cotisations de manière intuitive.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "frontend",
    technologies: ["JavaScript", "Vue.js 3", "HTML5", "CSS3", "Git", "Tailwind CSS"],
    githubUrl: "https://github.com/Bidy28/Front_end_portfolio",
    demoUrl: ""
  },
  {
    id: 2,
    title: "API & Backend pour gestion sociale (Backend)",
    description: "Développement de l'API et de la logique métier pour l'application de gestion des cotisations sociales . Réalisé avec Laravel 11 (PHP) pour un backend moderne, sécurisé et performant, interfaçé avec une base de données MySQL.",
    image: "https://blog.acasi.io/hubfs/Gerer_Les_Cotisations_Sociale-1.jpg",
    category: "backend",
    technologies: ["PHP", "Laravel 11", "MySQL", "REST API", "Git", "Postman"],
    githubUrl: "https://github.com/Bidy28/Back_end_portfolio",
    demoUrl: ""
  }
];