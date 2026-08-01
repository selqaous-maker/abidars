import React from 'react';
import { PagePath } from '../types';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate: _onNavigate,
  onOpenAuditModal,
}) => {
  return (
    <div className="space-y-16 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto font-sans">
      
      {/* HERO SECTION */}
      <div className="text-center space-y-4">
        <span className="text-xs font-mono uppercase font-bold tracking-widest text-[#00d4ff] block">
          GET IN TOUCH
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Contact PEXEK
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto font-sans">
          Ready to deploy AI voice for your business? Connect directly with our deployment team.
        </p>
      </div>

      {/* CONTACT DIRECTORY CARD */}
      <div className="bg-[#0a0e1a] border border-[#00d4ff]/30 p-8 sm:p-10 rounded-[2px] space-y-8 shadow-2xl">
        <div className="space-y-6 text-sm font-mono">
          
          <div className="flex items-center gap-4 bg-[#050507] border border-white/10 p-4 rounded-[2px]">
            <div className="w-10 h-10 rounded-[2px] bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center shrink-0 border border-[#00d4ff]/30">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Email:</span>
              <a href="mailto:admin@pexek.com" className="text-white hover:text-[#00d4ff] font-bold text-sm transition-colors">
                admin@pexek.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#050507] border border-white/10 p-4 rounded-[2px]">
            <div className="w-10 h-10 rounded-[2px] bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center shrink-0 border border-[#00d4ff]/30">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">WhatsApp:</span>
              <a 
                href="https://wa.me/212633323828" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#00d4ff] font-bold text-sm transition-colors"
              >
                +212 6 33 32 38 28
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-[#050507] border border-white/10 p-4 rounded-[2px]">
            <div className="w-10 h-10 rounded-[2px] bg-[#00d4ff]/10 text-[#00d4ff] flex items-center justify-center shrink-0 border border-[#00d4ff]/30">
              <Linkedin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">LinkedIn:</span>
              <a 
                href="https://www.linkedin.com/company/pexek-agency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-[#00d4ff] font-bold text-sm transition-colors"
              >
                linkedin.com/company/pexek-agency/
              </a>
            </div>
          </div>

        </div>

        <div className="pt-4 text-center border-t border-white/10 space-y-4">
          <p className="text-xs text-[#94a3b8] font-sans">
            Prefer a direct walkthrough? Book a 30-minute strategy audit with our engineering team.
          </p>
          <button
            onClick={onOpenAuditModal}
            className="btn-pexek-primary text-xs font-bold uppercase tracking-wider px-8 py-4 inline-flex items-center gap-2 shadow-xl"
          >
            <span>Book Strategy Audit →</span>
          </button>
        </div>
      </div>

    </div>
  );
};
