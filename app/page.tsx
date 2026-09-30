'use client';

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { 
  Sun, Moon, Copy, Check, ExternalLink, Mail, 
  BarChart3, Database, Code, CheckCircle, FileText, Send 
} from 'lucide-react';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [copied, setCopied] = useState(false);
  const [showPowerBIModal, setShowPowerBIModal] = useState(false);

  // Fonction pour copier l'email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ahmedrbouh11@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 text-slate-100 dark:text-slate-100 transition-colors duration-300 font-sans">
      
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="font-extrabold tracking-wider text-slate-100 text-lg">AHMED RBOUH</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Bouton Copier Email */}
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 transition"
              title="Copier l'email"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              <span>{copied ? 'Copié !' : 'Copier Email'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition"
              aria-label="Changer le thème"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            

            {/* Télécharger CV */}
            <a 
              href="/CV_AHMED_RBOUH.pdf" 
              download 
              className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-xs md:text-sm font-semibold transition shadow-lg shadow-blue-500/20"
            >
              Télécharger CV
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-left">
        <div className="inline-block bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
          Ingénieur d'État en Génie Informatique (MIAGE) — EMSI
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-100 leading-tight max-w-4xl">
          Conception de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Systèmes Décisionnels</span> & Développement <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Full Stack</span>.
        </h1>
        <p className="mt-6 text-slate-400 text-lg max-w-3xl leading-relaxed">
          Spécialisé dans l'architecture de données (Data Warehouse, Pipelines ETL, Power BI/DAX) et la création d'applications web d'entreprise robustes (Java, Spring Boot, React).
        </p>
      </section>

      {/* 3. Focus PFE & Visuels Power BI */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
          <BarChart3 size={24} /> Projet de Fin d'Études (PFE) — Omnidata
        </h2>

        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800/40">PFE / Stage OMNIDATA</span>
              <h3 className="text-2xl font-bold text-slate-100 mt-2">Mise en place d'un Système Décisionnel Ventes & Logistique</h3>
            </div>
            
            {/* Bouton pour voir les visuels Power BI */}
            <button
              onClick={() => setShowPowerBIModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition shadow-lg shadow-blue-500/20"
            >
              <BarChart3 size={18} />
              <span>Voir les Visuels Power BI</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
              <h4 className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Database size={16} /> Architecture Data
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Modélisation en schéma constellation sous PostgreSQL. Conception des tables de faits (ventes, retours) et dimensions.
              </p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
              <h4 className="font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Code size={16} /> Pipelines ETL (SSIS)
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Automatisation des flux d'extraction, nettoyage et chargement périodique depuis les sources de production.
              </p>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
              <h4 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
                <BarChart3 size={16} /> Dashboards & DAX
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rapports d'analyse dynamique des performances commerciales, taux de retour et KPIs de livraison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal / Galerie des Visuels Power BI */}
      {showPowerBIModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 max-w-4xl w-full rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto">
            <button 
              onClick={() => setShowPowerBIModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <BarChart3 size={20} /> Aperçu des Tableaux de Bord Power BI (PFE)
            </h3>
            
            <div className="space-y-6">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <img 
                  src="/powerbi-sales.png" 
                  alt="Dashboard Ventes Power BI" 
                  className="w-full rounded-lg border border-slate-800 mb-3 object-cover max-h-80"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
                <h4 className="font-bold text-slate-200 text-sm">1. Tableau de Bord Ventes & CA</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Visuel interactif présentant le chiffre d'affaires par région, catégorie de produits et évolution temporelle (mesures DAX avancées pour le Time Intelligence).
                </p>
              </div>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                <img 
                  src="/powerbi-logistics.png" 
                  alt="Dashboard Logistique Power BI" 
                  className="w-full rounded-lg border border-slate-800 mb-3 object-cover max-h-80"
                  onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
                />
                <h4 className="font-bold text-slate-200 text-sm">2. Suivi de la Logistique & Retours</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Analyse du taux de satisfaction, suivi des délais de livraison et identification des motifs de retour par transporteur.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Formulaire de Contact */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800">
        <h2 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
          <Mail size={24} /> Me Contacter
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Vous avez une opportunité d'emploi, un projet de Business Intelligence ou une question technique ? N'hésitez pas à me laisser un message direct.
            </p>
            <div className="space-y-3">
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition text-sm"
              >
                <Mail size={18} className="text-blue-400" />
                <span>ahmedrbouh11@gmail.com</span>
                <span className="text-xs text-blue-400 font-mono">(Copier)</span>
              </button>
            </div>
          </div>

          <form 
            action="https://formspree.io/f/moevbnjy" 
            method="POST"
            className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Nom Complet</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="Votre nom" 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Email</label>
              <input 
                type="email" 
                name="email" 
                required 
                placeholder="votre.email@exemple.com" 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1">Message</label>
              <textarea 
                name="message" 
                rows={3} 
                required 
                placeholder="Bonjour Ahmed..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
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
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>Ahmed Rbouh — Ingénieur d'État en Génie Informatique (EMSI)</p>
      </footer>
    </div>
  );
}