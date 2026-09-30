'use client';

import React from 'react';
import { BarChart3, X } from 'lucide-react';

interface PowerBIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PowerBIModal({ isOpen, onClose }: PowerBIModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-blue-600 dark:text-blue-400" size={24} />
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Dashboards Power BI — Projet Omnidata
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Images */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-200">1. Vue d'ensemble des Ventes & CA</h4>
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 flex items-center justify-center">
              <img 
                src="/powerbi-dashboard-1.png" 
                alt="Dashboard Power BI Ventes"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-slate-800 dark:text-slate-200">2. Analyse Logistique & Taux de Retour</h4>
            <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 flex items-center justify-center">
              <img 
                src="/powerbi-dashboard-2.png" 
                alt="Dashboard Power BI Logistique"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-right">
          <button
            onClick={onClose}
            className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 px-5 py-2 rounded-xl text-sm font-semibold transition"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
}