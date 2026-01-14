import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { motion } from 'framer-motion';

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
          <motion.div 
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-full border-4 border-blue-400 shadow-xl overflow-hidden" style={{ width: '18rem', height: '18rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src="/port.jpg"
                alt="Sarobidy"
                className="w-full h-full object-contain"
                style={{ display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Titre principal */}
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Bonjour, je suis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              ANDRIANARIVO Anjarasoa Sarobidy
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Développeur Web Full Stack passionné par la création d'expériences numériques exceptionnelles
          </motion.p>

          {/* Description */}
          {/* <p className="text-lg text-gray-700 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Spécialisé en React, Laravel et technologies modernes, je transforme vos idées en applications web performantes et élégantes.
          </p> */}

          {/* Boutons CTA */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Découvrir mon travail
            </button>
            <a
              href="/cv/CV_Anjarasoa_Sarobidy_Andrianarivo.pdf"
              download
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="h-5 w-5" />
              Télécharger CV
            </a>
          </motion.div>

          {/* Indicateur de scroll */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            onClick={scrollToAbout}
            className="animate-bounce mx-auto block p-2 rounded-full hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
          >
            <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}