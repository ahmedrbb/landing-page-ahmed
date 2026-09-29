import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* 1. Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="font-extrabold tracking-wider text-slate-100 text-lg">AHMED RBOUH</span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:ahmedrbouh11@gmail.com" 
              className="hidden sm:inline-block text-xs font-medium text-slate-400 hover:text-white transition"
            >
              ahmedrbouh11@gmail.com
            </a>
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
      <section className="max-w-6xl mx-auto px-6 py-20 text-left">
        <div className="inline-block bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
          Ingénieur d'État en Génie Informatique (MIAGE) — EMSI
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-100 leading-tight max-w-4xl">
          Conception de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Systèmes Décisionnels</span> & Développement <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Full Stack</span>.
        </h1>
        <p className="mt-6 text-slate-400 text-lg sm:text-xl max-w-3xl leading-relaxed">
          Spécialisé dans l'architecture de données (Data Warehouse, Pipelines ETL, Power BI/DAX) et la création d'applications web d'entreprise robustes (Java, Spring Boot, React).
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a 
            href="mailto:ahmedrbouh11@gmail.com" 
            className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium border border-slate-700 transition"
          >
            Me Contacter
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 px-6 py-3 rounded-lg font-medium border border-slate-800 transition"
          >
            Voir LinkedIn
          </a>
        </div>
      </section>

      {/* 3. Projets & Expériences */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800/80">
        <h2 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
          <span>💼</span> Expériences et Projets Phares
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Projet 1: Omnidata */}
          <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800/40">OMNIDATA</span>
                <span className="text-xs text-slate-500 font-mono">Fév – Jul 2026</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Système Décisionnel Ventes & Logistique (PFE)</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Conception et mise en œuvre complète d'un entrepôt de données sous schéma en constellation (PostgreSQL). Automatisation des flux d'extraction et de transformation via SSIS, et réalisation de tableaux de bord Power BI (DAX) pour l'analyse des ventes et retours clients.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">PostgreSQL</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">SSIS</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Power BI</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">DAX</span>
            </div>
          </div>

          {/* Projet 2: PwC */}
          <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-indigo-400 bg-indigo-950 px-2.5 py-1 rounded border border-indigo-800/40">PwC</span>
                <span className="text-xs text-slate-500 font-mono">Jul – Aoû 2025</span>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-3">Application Web de Gestion Hôtelière</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Développement Full Stack d'une solution de gestion. Développement d'une interface utilisateur dynamique en React et création d'une API REST sous Spring Boot (Java) avec persistance de données via l'ORM Hibernate.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">React</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Spring Boot</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Java</span>
              <span className="bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Hibernate</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Compétences Techniques */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800/80">
        <h2 className="text-2xl font-bold mb-8 text-blue-400 flex items-center gap-2">
          <span>🛠️</span> Stack Technique & Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800">
            <h4 className="font-bold text-slate-200 mb-3 text-sm uppercase tracking-wider">BI & Data Engineering</h4>
            <ul className="text-xs text-slate-400 space-y-2 font-mono">
              <li>• Power BI & DAX</li>
              <li>• PostgreSQL & SSIS</li>
              <li>• Hadoop, Spark & Hive</li>
              <li>• MySQL, Oracle PL/SQL</li>
            </ul>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800">
            <h4 className="font-bold text-slate-200 mb-3 text-sm uppercase tracking-wider">Développement Web</h4>
            <ul className="text-xs text-slate-400 space-y-2 font-mono">
              <li>• Java & Spring Boot</li>
              <li>• React & JavaScript</li>
              <li>• J2EE & Hibernate</li>
              <li>• APIs REST & Web Services</li>
            </ul>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800">
            <h4 className="font-bold text-slate-200 mb-3 text-sm uppercase tracking-wider">Data Science & IA</h4>
            <ul className="text-xs text-slate-400 space-y-2 font-mono">
              <li>• Python (Pandas, NumPy)</li>
              <li>• Scikit-learn & ML</li>
              <li>• TensorFlow & Keras</li>
              <li>• Data Analytics</li>
            </ul>
          </div>

          <div className="bg-slate-900/40 p-6 rounded-xl border border-slate-800">
            <h4 className="font-bold text-slate-200 mb-3 text-sm uppercase tracking-wider">Certifications</h4>
            <ul className="text-xs text-slate-400 space-y-2 font-mono">
              <li>• Oracle OCI 2025 DevOps</li>
              <li>• Univ. Michigan (Python)</li>
              <li>• Univ. Pennsylvania (Java)</li>
              <li>• Bac Sciences Mention Bien</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-slate-800/80 py-12 mt-12 bg-slate-950 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold text-slate-300 mb-2">Ahmed Rbouh — Casablanca, Maroc</p>
          <p className="text-xs text-slate-500">
            Ingénieur d'État diplômé de l'École Marocaine des Sciences de l'Ingénieur (EMSI)
          </p>
        </div>
      </footer>
    </div>
  );
}