import React from 'react';
import { PagePath } from '../types';
import { ShieldCheck, Linkedin, MessageCircle, Facebook, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAuditModal }) => {
  const handleNav = (path: PagePath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030407] border-t border-white/10 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Column (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3 logo-container">
                <img 
                  src="https://i.ibb.co/qLm5B98M/Chat-GPT-Image-Jul-8-2026-05-29-33-PM-removebg-preview-1.png" 
                  alt="PEXEK" 
                  className="pexek-logo"
                />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl font-extrabold text-white font-mono tracking-tight">PEXEK</span>
                    <span className="text-[10px] uppercase font-bold text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-1.5 py-0.5 rounded-[2px]">
                      OS™
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] font-mono tracking-wider uppercase text-[#00d4ff] font-bold">
                AI Voice Deployment Partner For Revenue-Focused Businesses
              </p>
            </div>
            
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed font-sans">
              We design, deploy, and optimize AI voice systems that answer customers, qualify opportunities, and automate workflows.
            </p>

            <div className="pt-2 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => handleNav('/security-compliance')}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 border border-slate-800 bg-[#050507] px-3 py-1.5 rounded-[2px] hover:border-[#00d4ff]/40 transition-colors"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00d4ff]" />
                  <span>Enterprise Data Protection</span>
                </button>
              </div>
              
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-1">
                <Mail className="w-3.5 h-3.5 text-[#00d4ff]" />
                <a href="mailto:admin@pexek.com" className="hover:text-[#00d4ff] transition-colors">
                  admin@pexek.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Product & Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Product & Solutions
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-slate-300">
              <li>
                <button onClick={() => handleNav('/ai-receptionist')} className="hover:text-[#00d4ff] transition-colors text-left">
                  AI Receptionists
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/lead-qualification-ai')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Lead Qualification AI
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/appointment-booking-ai')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Appointment Booking AI
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/workflow-automation')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Workflow Automation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/conversation-intelligence')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Conversation Intelligence
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Industries
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-slate-300">
              <li>
                <button onClick={() => handleNav('/dental-ai-receptionist')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Dental Practices
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/healthcare-ai-receptionist')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Healthcare & Medical
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/business-services-ai')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Business Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/real-estate-ai-receptionist')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Real Estate
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/legal-ai-receptionist')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Legal Intake
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/ecommerce-ai-receptionist')} className="hover:text-[#00d4ff] transition-colors text-left">
                  E-commerce
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Resources & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Resources & Contact
            </h4>
            <ul className="space-y-2.5 text-xs font-sans text-slate-300">
              <li>
                <button onClick={() => handleNav('/blog')} className="hover:text-[#00d4ff] transition-colors text-left">
                  AI Voice Insights
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/industry-playbooks')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Industry Playbooks
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/roi-calculator')} className="hover:text-[#00d4ff] transition-colors text-left">
                  ROI Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/founder')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Meet the Founder
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('/contact')} className="hover:text-[#00d4ff] transition-colors text-left">
                  Contact Deployment Team
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* SOCIAL LINKS SECTION (EDIT 1) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] uppercase font-mono tracking-[0.1em] text-[#94a3b8] font-bold block">
              Follow PEXEK
            </span>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/pexek-agency/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#00d4ff] transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]"
                aria-label="PEXEK LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>

              <a
                href="https://wa.me/212633323828"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#00d4ff] transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]"
                aria-label="PEXEK WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>

              <a
                href="https://www.facebook.com/share/1BD7dk1f9U/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#94a3b8] hover:text-[#00d4ff] transition-all duration-200 hover:drop-shadow-[0_0_8px_rgba(0,212,255,0.4)]"
                aria-label="PEXEK Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAuditModal}
              className="btn-pexek-primary text-xs px-5 py-2.5 font-bold uppercase tracking-wider rounded-[2px]"
            >
              Book Strategy Audit →
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <div>
            <span>© 2026 PEXEK. All rights reserved.</span>
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('/about')} className="hover:text-slate-300">About Us</button>
            <button onClick={() => handleNav('/contact')} className="hover:text-slate-300">Contact</button>
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
