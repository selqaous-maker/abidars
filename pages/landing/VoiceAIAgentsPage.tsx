import React from 'react';
import { PagePath } from '../../types';
import { StandardCtaSection } from '../../components/StandardCtaSection';
import { ServiceCrossLinks } from '../../components/ServiceCrossLinks';
import { Cpu, Phone, Calendar, CheckCircle2, ShieldCheck, Zap, ArrowRight, Layers, Lock } from 'lucide-react';

interface VoiceAIAgentsPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const VoiceAIAgentsPage: React.FC<VoiceAIAgentsPageProps> = ({ onNavigate, onOpenAuditModal }) => {
  return (
    <div className="space-y-20 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider rounded-sm">
          <Cpu className="w-3.5 h-3.5" /> Enterprise Voice Architecture
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight font-sans">
          Autonomous Voice AI Agents Built for Revenue Infrastructure
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto font-sans leading-relaxed">
          PEXEK engineers custom voice AI agents that replace manual phone intake bottlenecks. Built with ultra-low latency speech engines, dynamic BANT qualification, and native CRM integrations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#00d4ff] hover:bg-[#00b8e6] text-[#050507] font-bold font-mono text-sm uppercase tracking-wider rounded-sm transition-all duration-200 shadow-lg shadow-[#00d4ff]/20 flex items-center justify-center gap-2"
          >
            Book Free Strategy Audit <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/case-studies')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-mono text-sm uppercase tracking-wider rounded-sm transition-all duration-200"
          >
            View Deployment Blueprints
          </button>
        </div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'VoiceOS™',
            desc: 'Ultra-low latency neural speech synthesis for natural conversational pacing and objection handling.',
          },
          {
            title: 'BookingOS™',
            desc: 'Real-time calendar locking and automated interactive rescheduling over voice, SMS, and WhatsApp.',
          },
          {
            title: 'LeadEngine™',
            desc: 'Dynamic BANT and MEDDIC prospect screening to ensure only pre-qualified leads reach your sales team.',
          },
          {
            title: 'WorkflowOS™',
            desc: 'Bi-directional CRM synchronization, audio recordings, transcripts, and custom webhook triggers.',
          },
        ].map((pillar, idx) => (
          <div key={idx} className="bg-[#0a0e1a] border border-white/10 p-6 rounded-sm space-y-3 hover:border-[#00d4ff]/40 transition-colors">
            <div className="text-xs font-mono font-bold uppercase text-[#00d4ff]">Pillar 0{idx + 1}</div>
            <h3 className="text-xl font-bold font-sans uppercase text-white">{pillar.title}</h3>
            <p className="text-xs text-slate-300 font-sans leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>

      {/* Security & Data Protection */}
      <div className="bg-[#0a0e1a] border border-white/10 p-8 rounded-sm space-y-6">
        <div className="flex items-center gap-3">
          <Lock className="w-6 h-6 text-[#00d4ff]" />
          <h2 className="text-xl font-extrabold uppercase">Business Data Protection</h2>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed max-w-3xl font-sans">
          PEXEK deployments are designed with security-focused workflows to keep your customer interactions protected.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2 p-3 bg-[#050507] border border-white/10 rounded-sm">
            <span className="text-[#00d4ff] font-bold">✓</span> Encrypted data transmission
          </div>
          <div className="flex items-center gap-2 p-3 bg-[#050507] border border-white/10 rounded-sm">
            <span className="text-[#00d4ff] font-bold">✓</span> Controlled system access
          </div>
          <div className="flex items-center gap-2 p-3 bg-[#050507] border border-white/10 rounded-sm">
            <span className="text-[#00d4ff] font-bold">✓</span> Privacy-focused architecture
          </div>
          <div className="flex items-center gap-2 p-3 bg-[#050507] border border-white/10 rounded-sm">
            <span className="text-[#00d4ff] font-bold">✓</span> Industry-specific compliance considerations
          </div>
        </div>
      </div>

      {/* Contextual Service Cross Links Hub */}
      <ServiceCrossLinks 
        currentPath="/voice-ai-agents"
        type="service"
        onNavigate={onNavigate}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* CTA Section */}
      <StandardCtaSection onOpenAuditModal={onOpenAuditModal} />
    </div>
  );
};
