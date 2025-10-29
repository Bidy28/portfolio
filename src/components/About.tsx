import React from 'react';
import { User, Code, Database } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Frontend Development",
      description: "React, Vue.js"
    },
    {
      icon: <Code className="h-8 w-8 text-green-600 dark:text-green-400" />,
      title: "Backend Development",
      description: "Node.js, Laravel , Java, .Net "
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      title: "Base de données",
      description: "MySQL, PostgreSQL, Oracle"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Titre de section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              À propos de moi
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenu texte */}
            <div>
              <div className="flex items-center mb-6">
                <User className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Développeur web passionné
                </h3>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Je suis un développeur web junior passionné par la technologie et l'apprentissage continu. J'ai acquis mes premières compétences en réalisant des projets personnels et des exercices pratiques, principalement avec React, Node.js et les technologies modernes du web.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Curieux, motivé et rigoureux, je cherche à rejoindre une équipe pour développer mes compétences et contribuer à des projets concrets. Je suis prêt à relever de nouveaux défis et à progresser dans le domaine du développement web.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {['React','Vue.js','Node.js','Laravel','Tailwind CSS', 'Git', 'Java', '.Net'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Cartes de compétences */}
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}