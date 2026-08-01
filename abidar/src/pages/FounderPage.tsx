import React from 'react';
import { PagePath } from '../types';
import { Mail, Linkedin, MessageCircle, Check, ArrowRight } from 'lucide-react';

interface FounderPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({
  onNavigate: _onNavigate,
  onOpenAuditModal,
}) => {
  return (
    <div className="space-y-16 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto font-sans">
      
      {/* HERO SECTION */}
      <div className="space-y-4">
        <span className="text-xs font-mono uppercase font-bold tracking-widest text-[#00d4ff] block">
          MEET THE FOUNDER
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Salah Eddine El Qaous
        </h1>
        <p className="text-xs sm:text-sm font-mono text-[#00d4ff] font-bold tracking-wide">
          Founder & AI Voice Systems Architect
        </p>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans pt-2 border-l-2 border-[#00d4ff] pl-4">
          "I help businesses eliminate missed calls by deploying AI voice systems that answer, qualify, and book appointments automatically."
        </p>
      </div>

      {/* WHAT I DO SECTION */}
      <div className="bg-[#0a0e1a] border border-white/10 p-6 sm:p-8 rounded-[2px] space-y-6 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans uppercase tracking-tight">
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            'AI Voice Infrastructure',
            'AI Receptionists',
            'Voice Automation',
            'CRM Integrations',
            'Appointment Automation',
            'AI Workflow Design'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#050507] border border-white/10 p-4 rounded-[2px]">
              <div className="w-5 h-5 rounded-[2px] bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center shrink-0 border border-[#00d4ff]/30">
                <Check className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-white font-mono">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY PEXEK SECTION */}
      <div className="bg-[#0a0e1a] border border-white/10 p-6 sm:p-8 rounded-[2px] space-y-4 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans uppercase tracking-tight">
          Why PEXEK
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          PEXEK was created to help service businesses respond instantly to every customer conversation. We design, deploy, and optimize AI voice systems that increase response speed, automate repetitive work, and improve customer experience.
        </p>
      </div>

      {/* CONNECT SECTION */}
      <div className="bg-[#0a0e1a] border border-[#00d4ff]/30 p-6 sm:p-8 rounded-[2px] space-y-6 shadow-xl">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white font-sans uppercase tracking-tight">
          Connect
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-xs font-mono">
          <a
            href="mailto:admin@pexek.com"
            className="flex items-center gap-3 text-slate-300 hover:text-[#00d4ff] transition-colors group"
          >
            <Mail className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4ff] transition-colors" />
            <span>admin@pexek.com</span>
          </a>

          <a
            href="https://www.linkedin.com/company/pexek-agency/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-[#00d4ff] transition-colors group"
          >
            <Linkedin className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4ff] transition-colors" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://wa.me/212633323828"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-300 hover:text-[#00d4ff] transition-colors group"
          >
            <MessageCircle className="w-5 h-5 text-[#94a3b8] group-hover:text-[#00d4ff] transition-colors" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="pt-4 text-center">
        <button
          onClick={onOpenAuditModal}
          className="btn-pexek-primary text-xs font-bold uppercase tracking-wider px-8 py-4 inline-flex items-center gap-2 shadow-xl"
        >
          <span>Book Strategy Audit →</span>
        </button>
      </div>

    </div>
  );
};
