import React from 'react';
import { ProgrammaticPageData } from '../types';
import { PagePath } from '../../types';
import { ArrowRight, Sparkles, PhoneCall, Briefcase, MapPin, Database, DollarSign } from 'lucide-react';

interface ProgrammaticInternalLinksProps {
  pageData: ProgrammaticPageData;
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal?: () => void;
}

export const ProgrammaticInternalLinks: React.FC<ProgrammaticInternalLinksProps> = ({
  pageData,
  onNavigate,
  onOpenAuditModal,
}) => {
  const links = pageData.internalLinks || [];

  const serviceLinks = links.filter(l => l.category === 'service');
  const industryLinks = links.filter(l => l.category === 'industry');
  const locationLinks = links.filter(l => l.category === 'location');
  const integrationLinks = links.filter(l => l.category === 'integration');

  return (
    <section className="bg-[#080b12] border border-white/10 rounded-sm p-6 sm:p-10 space-y-8 my-12 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>PEXEK Programmatic Interlinking Network</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-sans uppercase tracking-tight">
            Related Voice AI Solutions & Regional Deployment Nodes
          </h3>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('/pricing')}
            className="px-4 py-2 bg-[#050507] border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-mono font-bold text-xs uppercase tracking-wider rounded-sm transition-all"
          >
            View Pricing →
          </button>
          <button
            onClick={() => onOpenAuditModal ? onOpenAuditModal() : onNavigate('/book-audit')}
            className="btn-pexek-primary text-xs px-4 py-2 font-bold uppercase tracking-wider"
          >
            Book Audit →
          </button>
        </div>
      </div>

      {/* Grid of Contextual Programmatic Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs font-sans">
        
        {/* Col 1: Core Services */}
        <div className="space-y-3 bg-[#050507] border border-white/5 p-5 rounded-sm">
          <div className="flex items-center gap-2 text-white font-bold font-mono text-xs uppercase tracking-wider border-b border-white/10 pb-2">
            <PhoneCall className="w-4 h-4 text-[#00d4ff]" />
            <span>Core Telephony Capabilities</span>
          </div>
          <ul className="space-y-2.5 text-slate-300">
            {serviceLinks.slice(0, 4).map(link => (
              <li key={link.path}>
                <button
                  onClick={() => onNavigate(link.path as PagePath)}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span className="truncate">• {link.title}</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 2: Industry Verticals */}
        <div className="space-y-3 bg-[#050507] border border-white/5 p-5 rounded-sm">
          <div className="flex items-center gap-2 text-white font-bold font-mono text-xs uppercase tracking-wider border-b border-white/10 pb-2">
            <Briefcase className="w-4 h-4 text-[#00d4ff]" />
            <span>Industry Playbooks</span>
          </div>
          <ul className="space-y-2.5 text-slate-300">
            {industryLinks.slice(0, 4).map(link => (
              <li key={link.path}>
                <button
                  onClick={() => onNavigate(link.path as PagePath)}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span className="truncate">• {link.title}</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Regional Cities & Metro Nodes */}
        <div className="space-y-3 bg-[#050507] border border-white/5 p-5 rounded-sm">
          <div className="flex items-center gap-2 text-white font-bold font-mono text-xs uppercase tracking-wider border-b border-white/10 pb-2">
            <MapPin className="w-4 h-4 text-[#00d4ff]" />
            <span>Regional Nodes</span>
          </div>
          <ul className="space-y-2.5 text-slate-300">
            {locationLinks.slice(0, 4).map(link => (
              <li key={link.path}>
                <button
                  onClick={() => onNavigate(link.path as PagePath)}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span className="truncate">• {link.title}</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4: Integrations & Action Hub */}
        <div className="space-y-3 bg-[#050507] border border-white/5 p-5 rounded-sm">
          <div className="flex items-center gap-2 text-white font-bold font-mono text-xs uppercase tracking-wider border-b border-white/10 pb-2">
            <Database className="w-4 h-4 text-[#00d4ff]" />
            <span>CRMs & Integrations</span>
          </div>
          <ul className="space-y-2.5 text-slate-300">
            {integrationLinks.slice(0, 3).map(link => (
              <li key={link.path}>
                <button
                  onClick={() => onNavigate(link.path as PagePath)}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span className="truncate">• {link.title}</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => onNavigate('/demo')}
                className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group font-bold text-[#00d4ff]"
              >
                <span>• Live Interactive Demo →</span>
                <ArrowRight className="w-3 h-3 text-[#00d4ff]" />
              </button>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
