'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, Moon, Copy, Check, Mail, 
  BarChart3, Database, Code, Send, Wrench, User, Award, ExternalLink
} from 'lucide-react';
import PowerBIModal from '../components/PowerBIModal';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ahmedrbouh11@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="font-extrabold tracking-wider text-slate-900 dark:text-slate-100 text-lg">AHMED RBOUH</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 transition"
            >
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              <span>{copied ? 'Copié !' : 'Copier Email'}</span>
            </button>

            <button
              onClick={() => window.open('https://www.linkedin.com/in/ahmed-rbouh-229b94265/', '_blank', 'noopener,noreferrer')}
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 transition cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z"/>
              </svg>
              <span>LinkedIn</span>
            </button>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            <a 
              href="/CV_AHMED_RBOUH.pdf" 
              download 
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition shadow-lg shadow-blue-500/20"
            >
              Télécharger CV (PDF)
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-left">
        <div className="inline-block bg-blue-100 dark:bg-blue-950/60 border border-blue-300 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
          Ingénieur d'État en Génie Informatique (MIAGE) — EMSI
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 leading-tight max-w-4xl">
          Conception de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Systèmes Décisionnels</span> & Développement <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400">Full Stack</span>.
        </h1>
        <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg max-w-3xl leading-relaxed">
          Spécialisé dans l'architecture de données (Data Warehouse, Pipelines ETL, Power BI/DAX) et la création d'applications web d'entreprise robustes (Java, Spring Boot, React).
        </p>
      </section>

      {/* SECTION À PROPOS */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <User size={24} /> À propos de moi
        </h2>

        <div className="bg-slate-50 dark:bg-slate-900/60 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-blue-500 shadow-xl flex-shrink-0 bg-slate-200 dark:bg-slate-800">
            <img 
              src="/profile.png" 
              alt="Ahmed Rbouh" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback visuel si l'image n'est pas encore chargée
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>

          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            <p>
              Actuellement élève ingénieur en 5ème année Génie Informatique (option MIAGE) à l'École Marocaine des Sciences de l'Ingénieur (EMSI) à Casablanca, je me passionne pour la transformation des données brutes en leviers décisionnels stratégiques[cite: 2.2, 2.3].
            </p>
            <p>
              Mon parcours m'a permis d'acquérir une double compétence solide : d'une part l'ingénierie des données (architecture Data Warehouse, pipelines ETL avec SSIS, modélisation PostgreSQL et tableaux de bord Power BI) et d'autre part le développement d'applications d'entreprise Full Stack (Java, Spring Boot, React).
            </p>
            <p className="font-semibold text-slate-900 dark:text-slate-100">
              🎯 À la recherche d'une opportunité professionnelle stimulante (CDI ou Stage PFE) en Business Intelligence, Data Engineering ou Développement Full Stack afin de mettre mes compétences au service de projets à forte valeur ajoutée.
            </p>
          </div>
        </div>
      </section>

      {/* Focus PFE */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <BarChart3 size={24} /> Projet de Fin d'Études (PFE) — Omnidata
        </h2>

        <div className="bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 px-2.5 py-1 rounded border border-blue-200 dark:border-blue-800/40">PFE / Stage OMNIDATA</span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mt-2">Mise en place d'un Système Décisionnel Ventes & Logistique</h3>
            </div>
            
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-lg shadow-blue-500/20 cursor-pointer"
            >
              <BarChart3 size={18} />
              <span>Voir les Visuels Power BI</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-700 dark:text-slate-300">
            <div className="bg-white dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/60">
              <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-2">
                <Database size={16} /> Architecture Data
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Modélisation en schéma constellation sous PostgreSQL. Conception des tables de faits (ventes, retours) et dimensions.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/60">
              <h4 className="font-bold text-cyan-600 dark:text-cyan-400 mb-2 flex items-center gap-2">
                <Code size={16} /> Pipelines ETL (SSIS)
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Automatisation des flux d'extraction, nettoyage et chargement périodique depuis les sources de production.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800/60">
              <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-2 flex items-center gap-2">
                <BarChart3 size={16} /> Dashboards & DAX
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                Rapports d'analyse dynamique des performances commerciales, taux de retour et KPIs de livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Technique */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <Wrench size={24} /> Stack Technique & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-4 text-xs tracking-wider uppercase">BI & DATA ENGINEERING</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 font-mono">
              <li>• Power BI & DAX</li>
              <li>• PostgreSQL & SSIS</li>
              <li>• Hadoop, Spark & Hive</li>
              <li>• MySQL, Oracle PL/SQL</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-4 text-xs tracking-wider uppercase">DÉVELOPPEMENT WEB</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 font-mono">
              <li>• Java & Spring Boot</li>
              <li>• React & JavaScript</li>
              <li>• J2EE & Hibernate</li>
              <li>• APIs REST & Web Services</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-4 text-xs tracking-wider uppercase">DATA SCIENCE & IA</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 font-mono">
              <li>• Python (Pandas, NumPy)</li>
              <li>• Scikit-learn & ML</li>
              <li>• TensorFlow & Keras</li>
              <li>• Data Analytics</li>
            </ul>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-4 text-xs tracking-wider uppercase">OUTILS & DEVOPS</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 font-mono">
              <li>• Git & GitHub</li>
              <li>• Docker & Linux</li>
              <li>• Vercel & CI/CD</li>
              <li>• VS Code & Eclipse</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION CERTIFICATIONS */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <Award size={24} /> Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Coursera - Web Dev */}
          <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">Coursera</span>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mt-1">HTML, CSS, and Javascript for Web Developers</h3>
                <p className="text-xs text-slate-500">Johns Hopkins University</p>
              </div>
              <a 
                href="https://coursera.org/share/92e31a10560eb95da242b44800e17af2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 p-1"
                title="Vérifier le certificat"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Maîtrise des fondamentaux du développement web moderne et de la création d'interfaces utilisateur réactives.
            </p>
          </div>

          {/* Coursera - Arduino & C */}
          <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-950 px-2 py-0.5 rounded">Coursera</span>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mt-1">The Arduino Platform and C Programming</h3>
                <p className="text-xs text-slate-500">University of California, Irvine</p>
              </div>
              <a 
                href="https://coursera.org/share/586c09550794360cbea840d23450ab1e" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-500 p-1"
                title="Vérifier le certificat"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Programmation bas niveau en C, interaction avec des composants matériels et logique embarquée.
            </p>
          </div>

          {/* Oracle OCI DevOps */}
          <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950 px-2 py-0.5 rounded">Oracle</span>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mt-1">Oracle Cloud Infrastructure (OCI) 2025 DevOps Professional</h3>
                <p className="text-xs text-slate-500">Oracle Cloud</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Automation du déploiement, pipelines CI/CD, gestion d'infrastructures cloud et services OCI.
            </p>
          </div>

          {/* Spécialisations académiques Michigan / Pennsylvania */}
          <div className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-xs font-bold text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950 px-2 py-0.5 rounded">Spécialisations</span>
                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base mt-1">Python for Everybody & Java Programming</h3>
                <p className="text-xs text-slate-500">Univ. of Michigan & Univ. of Pennsylvania</p>
              </div>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Structures de données avancées, développement orienté objet en Java et traitement de données sous Python.
            </p>
          </div>

        </div>
      </section>

      {/* Formulaire de Contact */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <Mail size={24} /> Me Contacter
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              Vous avez une opportunité d'emploi, un projet de Business Intelligence ou une question technique ? N'hésitez pas à me laisser un message direct.
            </p>
            <div className="space-y-3">
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition text-sm"
              >
                <Mail size={18} className="text-blue-600 dark:text-blue-400" />
                <span>ahmedrbouh11@gmail.com</span>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-mono">(Copier)</span>
              </button>
            </div>
          </div>

          <form 
            action="https://formspree.io/f/moevbnjy" 
            method="POST"
            className="bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Nom Complet</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Votre nom" 
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="votre.email@exemple.com" 
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">Message</label>
              <textarea 
                name="message" 
                rows={3} 
                required 
                placeholder="Bonjour Ahmed..." 
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-900 dark:text-slate-200 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition flex items-center justify-center gap-2"
            >
              <Send size={16} /> Envoyer le message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500">
        <p className="font-semibold text-slate-700 dark:text-slate-300">Ahmed Rbouh — Casablanca, Maroc[cite: 2.2, 2.3]</p>
        <p className="mt-1">Ingénieur d'État diplômé de l'École Marocaine des Sciences de l'Ingénieur (EMSI)[cite: 2.2, 2.3]</p>
      </footer>

      {/* Modal Power BI */}
      <PowerBIModal isOpen={showModal} onClose={() => setShowModal(false)} />

    </div>
  );
}