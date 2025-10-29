import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="mb-8 flex justify-center">
            <div className="rounded-full border-4 border-blue-400 shadow-xl overflow-hidden" style={{ width: '18rem', height: '18rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/src/photo/port.jpg"
                alt="Sarobidy"
                className="w-full h-full object-contain"
                style={{ display: 'block' }}
              />
            </div>
          </div>

          {/* Titre principal */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Bonjour, je suis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              ANDRIANARIVO Anjarasoa Sarobidy
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Développeur Web Full Stack passionné par la création d'expériences numériques exceptionnelles
          </p>

          {/* Description */}
          {/* <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Spécialisé en React, Laravel et technologies modernes, je transforme vos idées en applications web performantes et élégantes.
          </p> */}

          {/* Boutons CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Découvrir mon travail
            </button>
            <a
              href="/src/cv/CV_Anjarasoa Sarobidy_Andrianarivo_développeur (1).pdf"
              download
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              Télécharger CV
            </a>
          </div>

          {/* Indicateur de scroll */}
          <button
            onClick={scrollToAbout}
            className="animate-bounce mx-auto block p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}