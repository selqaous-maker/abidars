import React, { useState } from 'react';
import { PagePath } from '../types';
import { INDUSTRIES } from '../data/mockData';
import { StandardCtaSection } from '../components/StandardCtaSection';
import { 
  Stethoscope, Building, Smile, ShoppingBag, Scale, Wrench, 
  CheckCircle2, ArrowRight, ShieldCheck, ChevronRight
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
  onOpenDemoModal?: (industryId?: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [activeTab, setActiveTab] = useState<string>(INDUSTRIES[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case 'healthcare': return <Stethoscope className="w-6 h-6 text-[#00d4ff]" />;
      case 'real-estate': return <Building className="w-6 h-6 text-[#00d4ff]" />;
      case 'dental': return <Smile className="w-6 h-6 text-[#00d4ff]" />;
      case 'e-commerce': return <ShoppingBag className="w-6 h-6 text-[#00d4ff]" />;
      case 'legal': return <Scale className="w-6 h-6 text-[#00d4ff]" />;
      default: return <Wrench className="w-6 h-6 text-[#00d4ff]" />;
    }
  };

  return (
    <div className="space-y-16 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Page Hero */}
      {/* PEXEK LOGO INSERTED (Renders via Navbar header & Footer on this page) */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#00d4ff]">
          VERTICAL PLAYBOOKS & AI MODELS
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase">
          Built for Your Vertical. <span className="text-[#00d4ff]">Not Repurposed.</span>
        </h1>
        <p className="text-slate-300 text-base leading-relaxed">
          Generic prompts fail in real-world commercial phone calls. PEXEK voice agents are pre-trained on domain-specific terminology, objections, compliance rules, and software integrations.
        </p>
      </div>

      {/* Quick Jump Tab Strip */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {INDUSTRIES.map((ind) => (
          <button
            key={ind.id}
            onClick={() => {
              setActiveTab(ind.id);
              const el = document.getElementById(`industry-${ind.id}`);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-sm whitespace-nowrap transition-all border ${
              activeTab === ind.id
                ? 'bg-[#00d4ff] text-black border-[#00d4ff]'
                : 'bg-[#0a0e1a] text-slate-300 border-white/10 hover:border-white/30'
            }`}
          >
            {ind.name}
          </button>
        ))}
      </div>

      {/* Deep Industry Sections */}
      <div className="space-y-16">
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.id}
            id={`industry-${ind.id}`}
            className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-sm space-y-8 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 border-b border-white/10 pb-8">
              
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#050507] border border-white/10 rounded-sm">
                    {getIcon(ind.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold">
                      {ind.name} Vertical Playbook
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                      "{ind.tagline}"
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              {/* Key Stat Box */}
              <div className="bg-[#050507] p-6 border border-white/10 rounded-sm text-center shrink-0 w-full lg:w-64 font-mono">
                <span className="text-3xl font-extrabold text-[#00d4ff] block">{ind.stat}</span>
                <span className="text-xs text-slate-400 mt-1 block">{ind.statLabel}</span>
              </div>

            </div>

            {/* Grid of Capabilities & Real World Use Cases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Capabilities */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-white">
                  3 Core AI Capabilities
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  {ind.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2.5 bg-[#050507] p-3 border border-white/5 rounded-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                      <span>{cap.replace(/^✓\s*/, '')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deployments & Outcomes */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase font-mono tracking-wider text-white">
                  Sample Deployment Scenarios
                </h3>
                <div className="space-y-3">
                  {ind.useCases.map((uc, i) => (
                    <div key={i} className="bg-[#050507] p-4 border border-white/5 rounded-sm space-y-1.5">
                      <h4 className="text-xs font-bold text-white font-mono">{uc.title}</h4>
                      <p className="text-xs text-slate-400">{uc.description}</p>
                      <div className="text-[11px] font-mono text-[#00d4ff] font-semibold pt-1">
                        PROJECTED OUTCOME: {uc.outcome}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Callout & Audio Trigger */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <span className="text-xs text-slate-400 font-mono">
                PEXEK VoiceOS Agent for {ind.name} ready for immediate 14-day deployment.
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => onNavigate('/demo')}
                  className="btn-pexek-secondary text-xs px-4 py-2.5 font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Explore Voice Demo →</span>
                </button>

                <button
                  onClick={onOpenAuditModal}
                  className="btn-pexek-primary text-xs px-5 py-2.5 font-bold w-full sm:w-auto"
                >
                  Deploy for Your Business →
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* EDIT 14: Level 2 Standardized CTA */}
      <StandardCtaSection
        level={2}
        title="Don't See Your Exact Vertical?"
        subtitle="We build custom voice agent models for high-volume, high-intent call flows across all specialized industries."
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* Footer Note / Legal Disclaimer */}
      <div className="text-center pt-2">
        <p className="text-xs text-slate-500 max-w-3xl mx-auto leading-relaxed">
          PEXEK is currently documenting live deployments. These scenarios are modeled projections based on verified industry benchmarks and the documented capabilities of our voice automation stack.
        </p>
      </div>

    </div>
  );
};
