import React from 'react';
import { Code, Database, Wrench, Server } from 'lucide-react';
import { skillsData } from '../data/skillsData';

export default function Skills() {
  const categoryIcons = {
    frontend: <Code className="h-6 w-6" />,
    backend: <Server className="h-6 w-6" />,
    database: <Database className="h-6 w-6" />,
    tools: <Wrench className="h-6 w-6" />,
  };

  const categoryColors = {
    frontend: 'text-blue-600 dark:text-blue-400',
    backend: 'text-green-600 dark:text-green-400',
    database: 'text-cyan-600 dark:text-cyan-400',
    tools: 'text-orange-600 dark:text-orange-400',
  };

  const categoryTitles = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Base de données',
    tools: 'Outils',
  };

  const categories = ['frontend', 'backend', 'database', 'tools'] as const;

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mes Compétences
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Un aperçu de mes compétences techniques et créatives, développées au fil des projets 
              et de mon expérience professionnelle.
            </p>
          </div>

          {/* Grille des compétences par catégorie */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* En-tête de catégorie */}
                <div className="flex items-center mb-6">
                  <div className={`${categoryColors[category]} mr-3`}>
                    {categoryIcons[category]}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {categoryTitles[category]}
                  </h3>
                </div>

                {/* Liste des compétences */}
                <div className="space-y-4">
                  {skillsData
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                </div>
              </div>
            ))}
          </div>

          {/* Section résumé */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Toujours en apprentissage
              </h3>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Le monde du développement web évolue constamment. Je reste à jour avec les dernières 
                technologies et meilleures pratiques pour offrir des solutions innovantes et performantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface SkillItemProps {
  skill: {
    name: string;
    level: number;
    category: string;
  };
}

function SkillItem({ skill }: SkillItemProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  );
}