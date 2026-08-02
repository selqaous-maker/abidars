import React from 'react';
import { PagePath } from '../types';
import { StandardCtaSection } from '../components/StandardCtaSection';
import { 
  Smile, Stethoscope, Wrench, Building, Scale, ShoppingBag, ArrowRight
} from 'lucide-react';

interface IndustryPlaybooksPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const IndustryPlaybooksPage: React.FC<IndustryPlaybooksPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const playbooks: {
    title: string;
    path: PagePath;
    tagline: string;
    description: string;
    icon: React.ReactNode;
  }[] = [
    {
      title: 'Dental Practices',
      path: '/dental-ai-receptionist',
      tagline: 'Eliminate empty chairs & patient churn',
      description: 'Autonomous patient recall, 24/7 appointment scheduling, emergency intake, and direct practice management system sync.',
      icon: <Smile className="w-6 h-6 text-[#00d4ff]" />,
    },
    {
      title: 'Healthcare & Medical',
      path: '/healthcare-ai-receptionist',
      tagline: 'Never lose another patient to voicemail',
      description: 'After-hours patient triage, instant clinic appointment scheduling, insurance intake, and HIPAA-compliant data routing.',
      icon: <Stethoscope className="w-6 h-6 text-[#00d4ff]" />,
    },
    {
      title: 'Home Services & Contracting',
      path: '/home-services-ai',
      tagline: 'Never miss an urgent service call',
      description: '24/7 emergency dispatch, instant job qualification, technician calendar scheduling, and automated SMS quote confirmations.',
      icon: <Wrench className="w-6 h-6 text-[#00d4ff]" />,
    },
    {
      title: 'Real Estate & Property',
      path: '/real-estate-ai',
      tagline: 'Convert inbound buyer leads instantly',
      description: 'Sub-60s buyer pre-qualification by budget and timeline, automated listing tour bookings, and direct agent transfer.',
      icon: <Building className="w-6 h-6 text-[#00d4ff]" />,
    },
    {
      title: 'Legal Intake & Law Firms',
      path: '/legal-ai-intake',
      tagline: 'Screen potential clients 24/7',
      description: 'Instant case qualification against your firm criteria, automated conflict checks, and attorney consultation booking.',
      icon: <Scale className="w-6 h-6 text-[#00d4ff]" />,
    },
    {
      title: 'E-commerce & Retail Brands',
      path: '/ecommerce-ai-support',
      tagline: 'Automate phone support & recover orders',
      description: 'Instant "Where Is My Order?" tracking, automated checkout help, SMS payment links, and 24/7 phone support.',
      icon: <ShoppingBag className="w-6 h-6 text-[#00d4ff]" />,
    },
  ];

  return (
    <div className="space-y-16 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Overview Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#00d4ff]">
          INDUSTRY DEPLOYMENT PLAYBOOKS
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase leading-tight font-sans">
          Domain-Trained AI Voice Systems For <span className="text-[#00d4ff]">High-Intent Verticals</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Explore how PEXEK deploys pre-trained AI voice agents tailored to your industry's specific call flows, compliance guidelines, and software stack.
        </p>
      </div>

      {/* 6 Overview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {playbooks.map((pb, idx) => (
          <div
            key={idx}
            className="bg-[#0a0e1a] border border-white/10 p-8 rounded-[2px] space-y-6 hover:border-[#00d4ff]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-[2px] bg-[#050507] border border-white/10 flex items-center justify-center">
                {pb.icon}
              </div>

              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#00d4ff] tracking-wider block">
                  {pb.tagline}
                </span>
                <h2 className="text-xl font-extrabold text-white tracking-tight mt-1 font-sans">
                  {pb.title}
                </h2>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {pb.description}
              </p>
            </div>

            <button
              onClick={() => onNavigate(pb.path)}
              className="w-full py-3 px-4 bg-[#050507] hover:bg-[#00d4ff] text-slate-200 hover:text-black font-mono font-bold text-xs uppercase tracking-wider rounded-[2px] border border-white/10 hover:border-[#00d4ff] transition-all duration-200 flex items-center justify-between group-hover:shadow-[0_0_12px_rgba(0,212,255,0.2)]"
            >
              <span>View Dedicated Playbook</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Standardized Level 2 CTA */}
      <StandardCtaSection
        level={2}
        title="Don't See Your Exact Industry?"
        subtitle="We build custom AI voice agent models for high-volume, specialized commercial operations in under 14 days."
        onOpenAuditModal={onOpenAuditModal}
      />

    </div>
  );
};
