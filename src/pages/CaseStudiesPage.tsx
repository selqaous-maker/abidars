import React from 'react';
import { PagePath } from '../types';
import { ArrowRight, Download, Check } from 'lucide-react';

interface CaseStudiesPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
  onOpenDemoModal?: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const blueprints = [
    {
      emoji: '🦷',
      title: 'Dental AI Blueprint',
      description: 'Handle patient calls, schedule appointments, and manage emergencies 24/7.',
      path: '/dental-ai-receptionist' as PagePath,
    },
    {
      emoji: '🏥',
      title: 'Healthcare AI Blueprint',
      description: 'Automate patient intake, appointment booking, and after-hours inquiries.',
      path: '/healthcare-ai-receptionist' as PagePath,
    },
    {
      emoji: '🏠',
      title: 'Real Estate AI Blueprint',
      description: 'Qualify buyers instantly, schedule viewings, and update CRM automatically.',
      path: '/real-estate-ai-receptionist' as PagePath,
    },
    {
      emoji: '⚖️',
      title: 'Legal AI Blueprint',
      description: 'Capture case details, book consultations, and route urgent calls.',
      path: '/legal-ai-receptionist' as PagePath,
    },
    {
      emoji: '💼',
      title: 'Business Services AI Blueprint',
      description: 'Answer pricing questions, book consultations, and dispatch service requests.',
      path: '/business-services-ai-receptionist' as PagePath,
    },
    {
      emoji: '🚗',
      title: 'Automotive AI Blueprint',
      description: 'Handle service bookings, parts inquiries, and customer follow-ups.',
      path: '/home-services-ai-receptionist' as PagePath,
    },
    {
      emoji: '🛒',
      title: 'E-commerce AI Blueprint',
      description: 'Automate order inquiries, returns, and customer support calls.',
      path: '/ecommerce-ai-support' as PagePath,
    },
  ];

  const handleDownloadPlaybook = (title: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // Prompt audit modal with playbook context or trigger simulated download
    onOpenAuditModal();
  };

  return (
    <div className="space-y-24 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-100">
      
      {/* SECTION 1: HERO */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-[2px]">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#00d4ff]">
            Enterprise Deployment Models
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Industry AI Deployment Blueprints
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          See how PEXEK designs <strong className="text-white">AI Deployment Blueprints</strong> and <strong className="text-white">AI Voice Deployment Models</strong> for different industries. Each blueprint shows the business problem, the AI solution, the customer journey, and the automation workflow.
        </p>

        {/* HERO CTAS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href="#blueprints-grid"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-[2px] flex items-center justify-center gap-2"
          >
            Explore Your Industry
            <ArrowRight className="w-4 h-4" />
          </a>
          
          <button
            onClick={onOpenAuditModal}
            className="text-[#00d4ff] text-sm font-semibold hover:underline flex items-center gap-1 py-2 px-4"
          >
            Book Strategy Audit →
          </button>
        </div>
      </section>

      {/* SECTION 2: BLUEPRINT GRID */}
      <section id="blueprints-grid" className="space-y-12 scroll-mt-24">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Industry AI Deployment
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deployment Blueprints by Industry
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Select your industry to see the complete AI voice deployment model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blueprints.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 sm:p-7 rounded-[2px] space-y-5 hover:border-[#00d4ff]/40 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{item.emoji}</span>
                  <span className="text-[10px] font-mono font-bold uppercase text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 border border-[#00d4ff]/20 rounded-[2px]">
                    Blueprint #{String(idx + 1).padStart(3, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-3">
                <button
                  onClick={() => onNavigate(item.path)}
                  className="w-full py-2.5 px-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-xs tracking-wider uppercase transition-all duration-200 rounded-[2px] flex items-center justify-center gap-2"
                >
                  <span>Explore Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={(e) => handleDownloadPlaybook(item.title, e)}
                  className="w-full py-2 px-3 text-[#94a3b8] hover:text-white font-medium text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span>Get Free Playbook (PDF) →</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: DISCLAIMER */}
      <section className="bg-[#0a0e1a] border border-white/5 p-6 rounded-[2px] text-center max-w-5xl mx-auto">
        <p className="text-xs text-[#94a3b8] leading-relaxed">
          These blueprints represent deployment models and projected outcomes based on industry benchmarks and PEXEK's voice automation capabilities. Verified client results will be published with permission as live deployments are documented. Every deployment is customized according to the organization's specific workflows, data requirements, and existing software ecosystem.
        </p>
      </section>

      {/* SECTION 4: FINAL CTA */}
      <section className="bg-[#0d1117] border border-[#00d4ff]/30 p-8 sm:p-12 rounded-[2px] text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            See What AI Could Automate In Your Business
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Book a 30-minute strategy audit.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-200 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Call workflow analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Revenue opportunity assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Custom AI deployment roadmap</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={onOpenAuditModal}
            className="px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-[2px] inline-flex items-center gap-2"
          >
            Book Strategy Audit
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-[#94a3b8]">
            30-minute session. No obligation. No technical preparation required.
          </p>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="bg-[#0a0e1a] border border-white/5 p-6 rounded-[2px] text-center max-w-5xl mx-auto">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            Every deployment is customized according to the organization's workflows, data requirements, and existing software ecosystem. PEXEK does not provide legal, financial, or medical advice. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
