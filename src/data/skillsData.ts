export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design';
}

export const skillsData: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Vue.js', level: 75, category: 'frontend' },
  { name: 'Tailwind CSS', level: 80, category: 'frontend' },
  { name: 'Bootstrap', level: 70, category: 'frontend' },

  // Backend
  { name: 'PHP', level: 90, category: 'backend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Java', level: 85, category: 'backend' },
  { name: 'Python', level: 70, category: 'backend' },
  { name: 'Laravel', level: 80, category: 'backend' },
  { name: '.Net', level: 75, category: 'backend' },
  { name: 'Express.js', level: 70, category: 'backend' },

  // Database
  { name: 'PostgreSQL', level: 90, category: 'database' },
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'SQL Server', level: 80, category: 'database' },
  { name: 'Oracle', level: 80, category: 'database' },
  { name: 'SQLite', level: 80, category: 'database' },
  
  // Tools
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },
  { name: 'Webpack', level: 75, category: 'tools' },
  { name: 'Vite', level: 80, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
  { name: 'Postman', level: 80, category: 'tools' },
  
];