'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, Moon, Copy, Check, Mail, 
  BarChart3, Database, Code, Send, Wrench
} from 'lucide-react';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showPowerBIModal, setShowPowerBIModal] = useState(false);

  // Évite les décalages d'hydratation au chargement du thème
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
      
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="font-extrabold tracking-wider text-slate-900 dark:text-slate-100 text-lg">AHMED RBOUH</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Bouton Copier Email */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 transition"
              title="Copier l'email"
            >
              {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
              <span>{copied ? 'Copié !' : 'Copier Email'}</span>
            </button>

            {/* Bouton Voir Profil LinkedIn */}
            <a
              href="https://www.linkedin.com/in/votre-profil" // Remplacez par votre vrai lien LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 transition"
            >
              <svg className="w-3.5 h-3.5 fill-current text-blue-600 dark:text-blue-400" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.6a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* Theme Switcher Clair / Sombre */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition"
                aria-label="Changer le thème"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            )}

            {/* Télécharger CV */}
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

      {/* 2. Hero Section */}
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

      {/* 3. Focus PFE & Visuels Power BI */}
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
              onClick={() => setShowPowerBIModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-lg shadow-blue-500/20"
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

      {/* 4. Stack Technique & Expertise (Conforme à votre image) */}
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
            <h4 className="font-bold text-slate-900 dark:text-slate-200 mb-4 text-xs tracking-wider uppercase">CERTIFICATIONS</h4>
            <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-2.5 font-mono">
              <li>• Oracle OCI 2025 DevOps</li>
              <li>• Univ. Michigan (Python)</li>
              <li>• Univ. Pennsylvania (Java)</li>
              <li>• Bac Sciences Mention Bien</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Formulaire de Contact */}
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
        <p className="font-semibold text-slate-700 dark:text-slate-300">Ahmed Rbouh — Casablanca, Maroc</p>
        <p className="mt-1">Ingénieur d'État diplômé de l'École Marocaine des Sciences de l'Ingénieur (EMSI)</p>
      </footer>
    </div>
  );
}