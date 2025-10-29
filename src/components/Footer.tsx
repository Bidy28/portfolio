import React from "react";
import { Heart, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Informations */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                ANDRIANARIVO Anjarasoa Sarobidy
              </h3>
              <p className="text-gray-400 mb-4">
                Développeur Web Full Stack passionné par la création
                d'expériences numériques exceptionnelles.
              </p>
              <p className="text-gray-400">
                Antananario, Madagascar
                <br />
                sarobidyandrianarivo28@gmail.com
                <br />
                +261 34 74 685 55
              </p>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Liens utiles</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    À propos
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projets
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Compétences
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Documents */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Documents</h3>
              <div className="space-y-3">
                <a
                  href="/src/cv/CV_Anjarasoa Sarobidy_Andrianarivo_développeur (1).pdf"
                  download
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Télécharger CV
                </a>
              </div>
            </div>
          </div>

          {/* Ligne de séparation */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} ANDRIANARIVO Anjarasoa Sarobidy.
                Tous droits réservés.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-1 mt-4 md:mt-0">
                Fait avec <Heart className="h-4 w-4 text-red-500" /> et React
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
