import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PagePath } from '../types';

interface StandardCtaSectionProps {
  level?: 1 | 2;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onOpenAuditModal?: () => void;
  onNavigate?: (path: PagePath) => void;
  className?: string;
}

export const StandardCtaSection: React.FC<StandardCtaSectionProps> = ({
  level = 2,
  title,
  subtitle,
  buttonText,
  onOpenAuditModal,
  onNavigate,
  className = '',
}) => {
  const handleClick = () => {
    if (onOpenAuditModal) {
      onOpenAuditModal();
    } else if (onNavigate) {
      onNavigate('/book-audit');
    } else {
      window.history.pushState({}, '', '/book-audit');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  if (level === 1) {
    // LEVEL 1 — PRIMARY CTA (Homepage Hero or Main Hero)
    return (
      <div className={`space-y-4 text-center ${className}`}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleClick}
            className="btn-pexek-primary text-base px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl"
          >
            <span>{buttonText || "Book Free Strategy Audit"}</span>
            <ArrowRight className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Level 1 Sub-bullets */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300 pt-1">
          <span className="flex items-center gap-1.5">
            <span className="text-[#00d4ff]">•</span> 30 Minutes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#00d4ff]">•</span> Custom Call Flow Mapping
          </span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#00d4ff]">•</span> No Sales Pressure
          </span>
        </div>
      </div>
    );
  }

  // LEVEL 2 — MID-PAGE & FINAL CTA (Above Footer on All Pages)
  return (
    <div className={`bg-[#050507] border-t-2 border-t-[#00d4ff] border-x border-b border-white/10 p-8 sm:p-12 rounded-sm text-center space-y-6 relative overflow-hidden ${className}`}>
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#00d4ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-2 max-w-2xl mx-auto">
        <h3 className="text-2xl sm:text-4xl font-extrabold text-white font-sans uppercase tracking-tight">
          {title || "Identify Your AI Automation Opportunities"}
        </h3>
        <p className="text-base text-slate-300 font-sans leading-relaxed font-medium">
          {subtitle || "30-minute strategy session"}
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleClick}
          className="btn-pexek-primary text-sm sm:text-base px-8 py-4 font-bold flex items-center justify-center gap-2 shadow-lg uppercase tracking-wider"
        >
          <span>{buttonText || "Book Strategy Audit →"}</span>
        </button>
      </div>

      {/* Level 2 Sub-bullets */}
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-w-3xl mx-auto text-xs sm:text-sm font-mono text-slate-300 pt-2 text-left sm:text-center">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0" />
          <span>Analyze your current customer workflow</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0" />
          <span>Identify automation opportunities</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0" />
          <span>Build your deployment roadmap</span>
        </div>
      </div>
    </div>
  );
};
