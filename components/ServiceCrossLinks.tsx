import React from 'react';
import { PagePath } from '../types';
import { 
  ArrowRight, 
  Layers, 
  Briefcase, 
  DollarSign, 
  PhoneCall, 
  Calendar, 
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface ServiceCrossLinksProps {
  currentPath: PagePath;
  type: 'service' | 'industry' | 'general';
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal?: () => void;
}

export const ServiceCrossLinks: React.FC<ServiceCrossLinksProps> = ({
  currentPath,
  type,
  onNavigate,
  onOpenAuditModal,
}) => {
  const handleAudit = () => {
    if (onOpenAuditModal) {
      onOpenAuditModal();
    } else {
      onNavigate('/book-audit');
    }
  };

  return (
    <section className="bg-[#080b12] border border-white/10 rounded-sm p-6 sm:p-10 space-y-8 my-12 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>PEXEK Voice AI Ecosystem & Related Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold font-sans uppercase tracking-tight">
            {type === 'service' ? 'Explore Related Voice Capabilities & Industry Playbooks' : 'Core Voice Infrastructure & Specialized Solutions'}
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
            onClick={handleAudit}
            className="btn-pexek-primary text-xs px-4 py-2 font-bold uppercase tracking-wider"
          >
            Book Audit →
          </button>
        </div>
      </div>

      {/* Grid of Contextual Internal Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-sans">
        
        {/* Column 1: Core AI Voice Services */}
        <div className="space-y-3 bg-[#050507] border border-white/5 p-5 rounded-sm">
          <div className="flex items-center gap-2 text-white font-bold font-mono text-xs uppercase tracking-wider border-b border-white/10 pb-2">
            <PhoneCall className="w-4 h-4 text-[#00d4ff]" />
            <span>Core Voice Solutions</span>
          </div>
          <ul className="space-y-2.5 text-slate-300">
            {currentPath !== '/voice-ai-agents' && (
              <li>
                <button 
                  onClick={() => onNavigate('/voice-ai-agents')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• Voice AI Agents Infrastructure</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/ai-receptionist' && (
              <li>
                <button 
                  onClick={() => onNavigate('/ai-receptionist')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• 24/7 AI Receptionist</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/lead-qualification-ai' && (
              <li>
                <button 
                  onClick={() => onNavigate('/lead-qualification-ai')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• AI Lead Qualification</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/appointment-booking-ai' && (
              <li>
                <button 
                  onClick={() => onNavigate('/appointment-booking-ai')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• AI Appointment Booking</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/workflow-automation' && (
              <li>
                <button 
                  onClick={() => onNavigate('/workflow-automation')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• CRM Workflow Automation</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/ai-phone-answering-service' && (
              <li>
                <button 
                  onClick={() => onNavigate('/ai-phone-answering-service')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• 24/7 AI Phone Answering</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Column 2: Industry Deployment Playbooks */}
        <div className="space-y-3 bg-[#050507] border border-white/5 p-5 rounded-sm">
          <div className="flex items-center gap-2 text-white font-bold font-mono text-xs uppercase tracking-wider border-b border-white/10 pb-2">
            <Briefcase className="w-4 h-4 text-[#00d4ff]" />
            <span>Industry Playbooks</span>
          </div>
          <ul className="space-y-2.5 text-slate-300">
            {currentPath !== '/ai-receptionist-dental' && currentPath !== '/dental-ai-receptionist' && (
              <li>
                <button 
                  onClick={() => onNavigate('/ai-receptionist-dental')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• Dental Practice AI Receptionist</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/healthcare-ai-receptionist' && (
              <li>
                <button 
                  onClick={() => onNavigate('/healthcare-ai-receptionist')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• Healthcare & Medical Intake</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/ai-receptionist-real-estate' && currentPath !== '/real-estate-ai' && (
              <li>
                <button 
                  onClick={() => onNavigate('/ai-receptionist-real-estate')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• Real Estate AI Receptionist</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/legal-ai-intake' && currentPath !== '/legal-ai-receptionist' && (
              <li>
                <button 
                  onClick={() => onNavigate('/legal-ai-intake')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• Legal & Law Firm AI Intake</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/home-services-ai' && (
              <li>
                <button 
                  onClick={() => onNavigate('/home-services-ai')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• Home Services & Emergency HVAC</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
            {currentPath !== '/ecommerce-ai-support' && currentPath !== '/ecommerce-ai-receptionist' && (
              <li>
                <button 
                  onClick={() => onNavigate('/ecommerce-ai-support')}
                  className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
                >
                  <span>• E-Commerce Voice Support</span>
                  <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
            )}
          </ul>
        </div>

        {/* Column 3: Platform Resources & Action Hub */}
        <div className="space-y-3 bg-[#050507] border border-white/5 p-5 rounded-sm">
          <div className="flex items-center gap-2 text-white font-bold font-mono text-xs uppercase tracking-wider border-b border-white/10 pb-2">
            <DollarSign className="w-4 h-4 text-[#00d4ff]" />
            <span>Pricing & Action Hub</span>
          </div>
          <ul className="space-y-2.5 text-slate-300">
            <li>
              <button 
                onClick={() => onNavigate('/pricing')}
                className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group font-bold text-white"
              >
                <span>• Pricing & Investment Tiers →</span>
                <ArrowRight className="w-3 h-3 text-[#00d4ff]" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/demo')}
                className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group font-bold text-white"
              >
                <span>• Interactive Voice Demo →</span>
                <ArrowRight className="w-3 h-3 text-[#00d4ff]" />
              </button>
            </li>
            <li>
              <button 
                onClick={handleAudit}
                className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group font-bold text-[#00d4ff]"
              >
                <span>• Book 30-Min Strategy Audit →</span>
                <ArrowRight className="w-3 h-3 text-[#00d4ff]" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/case-studies')}
                className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
              >
                <span>• Case Studies & ROI Data</span>
                <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/how-it-works')}
                className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
              >
                <span>• 14-Day Deployment Framework</span>
                <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </li>
            <li>
              <button 
                onClick={() => onNavigate('/security-compliance')}
                className="hover:text-[#00d4ff] transition-colors text-left flex items-center justify-between w-full group"
              >
                <span>• Security & Compliance</span>
                <ArrowRight className="w-3 h-3 text-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
