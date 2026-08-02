import React from 'react';
import { PagePath } from '../../types';
import { StandardCtaSection } from '../../components/StandardCtaSection';
import { ServiceCrossLinks } from '../../components/ServiceCrossLinks';
import { Wrench, Phone, CheckCircle2, ShieldCheck, Zap, ArrowRight, UserCheck, Clock } from 'lucide-react';

interface AIReceptionistHomeServicesPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIReceptionistHomeServicesPage: React.FC<AIReceptionistHomeServicesPageProps> = ({ onNavigate, onOpenAuditModal }) => {
  return (
    <div className="space-y-20 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider rounded-sm">
          <Wrench className="w-3.5 h-3.5" /> Home Services & Contractor Automation
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight font-sans">
          Never Miss Another Emergency Customer Call
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto font-sans leading-relaxed">
          Homeowners call the contractor who picks up first. PEXEK deploys 24/7 AI voice dispatchers that qualify service requests, estimate job scope, and schedule technician visits instantly.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#00d4ff] hover:bg-[#00b8e6] text-[#050507] font-bold font-mono text-sm uppercase tracking-wider rounded-sm transition-all duration-200 shadow-lg shadow-[#00d4ff]/20 flex items-center justify-center gap-2"
          >
            Book Free Contractor Strategy Audit <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/industry-playbooks')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-mono text-sm uppercase tracking-wider rounded-sm transition-all duration-200"
          >
            View All Industry Playbooks
          </button>
        </div>
      </div>

      {/* Economics Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { stat: '< 10 Sec', label: 'Answer Speed', desc: 'Responds to HVAC, plumbing, and electrical emergency calls immediately.' },
          { stat: '3.2x', label: 'Lead Conversion', desc: 'Booking rate when answering inbound calls live vs sending to voicemail.' },
          { stat: '100%', label: 'CRM & FSM Sync', desc: 'Integrates with ServiceTitan, Housecall Pro, Jobber, and HubSpot.' },
          { stat: '24 / 7', label: 'Dispatch Coverage', desc: 'Captures midnight pipe bursts, AC outages, and emergency roofing calls.' },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#0a0e1a] border border-white/10 p-6 rounded-sm space-y-2">
            <div className="text-3xl font-extrabold font-mono text-[#00d4ff]">{item.stat}</div>
            <div className="text-sm font-bold uppercase font-mono text-white">{item.label}</div>
            <div className="text-xs text-slate-400 font-sans leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Core Features */}
      <div className="space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Built For HVAC, Plumbing, Electrical & Roofing Contractors
          </h2>
          <p className="text-slate-400 text-sm">
            Stop losing $500–$2,000 job estimates because your team is on a roof or under a sink.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: '24/7 Emergency Dispatch',
              description: 'Identifies high-urgency jobs, collects property location, and immediately notifies on-call technicians.',
            },
            {
              title: 'Job Qualification & Estimating',
              description: 'Asks targeted questions regarding equipment age, issue description, and owner authority before booking.',
            },
            {
              title: 'Automated SMS Confirmation',
              description: 'Texts homeowners instant appointment time windows, technician details, and reminder updates.',
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-[#0a0e1a] border border-white/10 p-8 rounded-sm space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#050507] border border-white/10 flex items-center justify-center text-[#00d4ff]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-extrabold font-sans text-white">{feature.title}</h3>
              <p className="text-xs text-[#94a3b8] font-sans leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contextual Service Cross Links Hub */}
      <ServiceCrossLinks 
        currentPath="/home-services-ai"
        type="industry"
        onNavigate={onNavigate}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* Standardized CTA */}
      <StandardCtaSection
        level={2}
        title="Stop Sending Emergency Contractor Leads to Voicemail"
        subtitle="Schedule a 30-minute consultation to hear real home service call handling in action."
        onOpenAuditModal={onOpenAuditModal}
      />
    </div>
  );
};
