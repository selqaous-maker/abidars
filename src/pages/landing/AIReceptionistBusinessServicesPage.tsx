import React, { useState } from 'react';
import { PagePath } from '../../types';
import { 
  Phone, 
  Calendar, 
  RefreshCw, 
  Shield, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  X,
  ChevronDown,
  ChevronUp,
  Mail,
  Linkedin,
  Clock,
  Lock,
  Server,
  Briefcase,
  Building2,
  Sparkles,
  Layers,
  Users,
  Send,
  HelpCircle
} from 'lucide-react';

interface AIReceptionistBusinessServicesPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIReceptionistBusinessServicesPage: React.FC<AIReceptionistBusinessServicesPageProps> = ({ 
  onNavigate, 
  onOpenAuditModal 
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const metrics = [
    {
      value: '24/7',
      label: 'Always Available',
      disclaimer: 'System capability. Actual coverage depends on deployment configuration.',
    },
    {
      value: '< 1 Sec',
      label: 'Average Answer Time',
      disclaimer: 'Based on voice infrastructure benchmarks. Actual speed varies by call volume.',
    },
    {
      value: 'Unlimited',
      label: 'Concurrent Calls',
      disclaimer: 'System architecture supports unlimited simultaneous conversations.',
    },
    {
      value: '14 Days',
      label: 'Typical Deployment',
      disclaimer: 'Average from strategy audit to go-live. Varies by workflow complexity.',
    },
  ];

  const coreCapabilities = [
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Appointment Scheduling',
      description: 'Books appointments directly into your existing calendar with real-time availability checks.',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Customer Inquiry Handling',
      description: 'Answers pricing questions, service descriptions, availability, FAQs, and business policies instantly.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00d4ff]" />,
      title: 'After-Hours Coverage',
      description: 'Captures client calls during evenings, weekends, and holidays — no more voicemail or missed opportunities.',
    },
    {
      icon: <Send className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Service Dispatch',
      description: 'Collects customer information, identifies the request type, and routes it to the appropriate team member or department.',
    },
  ];

  const typicalWorkflows = [
    'Appointment Booking',
    'Quote Requests',
    'Customer Support',
    'Service Dispatch',
    'Lead Qualification',
    'Follow-up Calls',
    'Payment Reminders',
    'WhatsApp Confirmations',
  ];

  const supportedBusinesses = [
    { title: 'Accounting & Tax', icon: '💼' },
    { title: 'Insurance Agencies', icon: '🏢' },
    { title: 'Beauty & Spa', icon: '💇' },
    { title: 'Cleaning Companies', icon: '🧹' },
    { title: 'Consulting Firms', icon: '📊' },
    { title: 'Marketing Agencies', icon: '📢' },
    { title: 'Education & Tutoring', icon: '📚' },
    { title: 'Professional Services', icon: '⚙️' },
  ];

  const clientWorkflowSteps = [
    {
      step: '01',
      title: 'Customer Calls',
      description: 'Inbound call to your business number',
      micro: 'Direct inbound route',
    },
    {
      step: '02',
      title: 'AI Answers',
      description: 'Configured with your business greeting and knowledge base',
      micro: 'Natural voice dialogue',
    },
    {
      step: '03',
      title: 'Identifies Request',
      description: 'Qualifies if it is booking, quote, support, or dispatch',
      micro: 'Intent recognition',
    },
    {
      step: '04',
      title: 'Books / Creates Lead',
      description: 'Appointment scheduled or lead captured in your system',
      micro: 'Real-time validation',
    },
    {
      step: '05',
      title: 'CRM Updated',
      description: 'HubSpot, Salesforce, Zoho, or spreadsheet updated',
      micro: 'Instant database sync',
    },
    {
      step: '06',
      title: 'WhatsApp Confirmation',
      description: 'Confirmation or follow-up sent automatically',
      micro: 'Instant receipt',
    },
    {
      step: '07',
      title: 'Team Notified',
      description: 'Relevant staff member alerted via SMS, Slack, or email',
      micro: 'Staff context handover',
    },
  ];

  const verifiedIntegrations = [
    'Google Calendar',
    'Microsoft Outlook Calendar',
    'HubSpot',
    'Salesforce',
    'Zoho CRM',
    'WhatsApp Business API',
    'Zapier',
    'Webhooks',
    'Custom API Integrations',
  ];

  const comparison = {
    traditional: [
      'Business hours only',
      'One call at a time',
      'Voicemail after hours',
      'Manual callbacks and reminders',
      'Front desk or owner overwhelmed',
    ],
    pexek: [
      '24/7 client call answering',
      'Unlimited simultaneous calls',
      'No voicemail — every call handled',
      'Automatic SMS/WhatsApp follow-ups',
      'Team focused on service delivery, not phone tag',
    ],
  };

  const faqs = [
    {
      q: 'Can the AI answer calls for any type of service business?',
      a: 'Yes. PEXEK is configured around your specific services, pricing, availability, and workflows. We work with agencies, consultancies, beauty businesses, cleaning companies, education providers, and professional services.',
    },
    {
      q: 'Can it book appointments into our calendar?',
      a: 'Yes. PEXEK integrates with Google Calendar, Outlook, Cal.com, Calendly, and other scheduling platforms. Appointments appear instantly with client details.',
    },
    {
      q: 'Can it handle quote requests?',
      a: 'Yes. PEXEK can collect project details, budget ranges, and timeline information, then route qualified leads to your sales team or send automated quotes.',
    },
    {
      q: 'Can it send follow-up messages?',
      a: 'Yes. WhatsApp Business API and SMS integrations are included. Confirmations, reminders, payment notices, and follow-ups are sent automatically based on your templates.',
    },
    {
      q: 'How does call routing work?',
      a: 'You define the rules. PEXEK can route urgent requests, new leads, or specific service inquiries to the right team member with full caller context.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most service business deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and team onboarding.',
    },
    {
      q: 'What if we use a specific CRM or tool not listed?',
      a: 'PEXEK supports custom API integrations and webhooks. If your system has an open API, we can connect to it.',
    },
  ];

  const scrollToBlueprint = () => {
    const el = document.getElementById('service-blueprint');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-28 pb-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white font-sans">
      
      {/* SECTION 1 — HERO */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-[0.1em] rounded-[2px]">
          <Briefcase className="w-3.5 h-3.5" /> Built for Service Businesses
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          AI Voice Automation for Service Businesses
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          Answer every client call, automate appointment scheduling, qualify inquiries, and streamline customer communication with AI voice agents available 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Business Strategy Audit →
          </button>
          
          <button
            onClick={scrollToBlueprint}
            className="text-[#00d4ff] hover:underline font-mono text-xs uppercase tracking-wider py-2 px-4 transition-all flex items-center gap-1 cursor-pointer"
          >
            See Deployment Blueprint →
          </button>
        </div>
      </div>

      {/* SECTION 2 — METRICS (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((card, idx) => (
          <div 
            key={idx} 
            className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-3 relative overflow-hidden group hover:border-[#00d4ff]/40 transition-colors shadow-lg"
          >
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#00d4ff] tracking-tight">
              {card.value}
            </div>
            <div className="text-sm font-bold text-white font-sans uppercase tracking-tight">
              {card.label}
            </div>
            <p className="text-xs text-[#94a3b8] font-sans leading-normal pt-2 border-t border-white/5 italic">
              {card.disclaimer}
            </p>
          </div>
        ))}
      </div>

      {/* SECTION 3 — POSITIONING */}
      <div className="bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px] space-y-4 max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
          PEXEK DEPLOYMENT MODEL
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Built for Modern Service Businesses
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
          PEXEK helps service businesses automate routine phone conversations so your team can focus on delivering work instead of answering repetitive calls. We design and deploy AI voice systems that integrate with your existing scheduling, CRM, and communication tools.
        </p>
        <div className="pt-2 text-xs font-mono text-[#94a3b8]">
          Salah Eddine El Qaous, Founder @ PEXEK
        </div>
      </div>

      {/* SECTION 4 — CORE CAPABILITIES (4 Features) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SERVICE AUTOMATION ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What PEXEK Deploys for Service Businesses
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreCapabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[2px] bg-[#050507] border border-white/10 flex items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5 — TYPICAL SERVICE WORKFLOWS */}
      <div className="space-y-10 bg-[#0a0e1a] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SUPPORTED WORKFLOW SCOPE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Typical Service Workflows
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK can be configured to handle these common business phone workflows:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
          {typicalWorkflows.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0d1117] border border-white/5 p-4 rounded-[2px]">
              <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span className="text-sm font-semibold text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6 — SUPPORTED BUSINESSES */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SERVICE VERTICAL COVERAGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Perfect For
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {supportedBusinesses.map((biz, idx) => (
            <div 
              key={idx} 
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] text-center space-y-2 hover:border-[#00d4ff]/40 transition-colors"
            >
              <div className="text-2xl">{biz.icon}</div>
              <div className="text-sm font-bold text-white">{biz.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7 — CLIENT WORKFLOW VISUALIZATION */}
      <div id="service-blueprint" className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            CLIENT INTERACTION ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Client Calls Flow Through PEXEK
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3 relative">
          {clientWorkflowSteps.map((step, idx) => (
            <div key={idx} className="relative bg-[#050507] border border-white/10 p-4 rounded-[2px] space-y-2 flex flex-col justify-between hover:border-[#00d4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#00d4ff] font-bold block">
                  STEP {step.step}
                </span>
                <h4 className="text-xs font-bold text-white mt-1">
                  {step.title}
                </h4>
                <p className="text-[11px] text-[#94a3b8] mt-1.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="pt-2 border-t border-white/5 text-[9px] font-mono text-[#00d4ff]/80">
                {step.micro}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8 — INTEGRATIONS (VERIFIED ONLY) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            ECOSYSTEM INTEGRATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Works With Your Existing Tools
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK integrates with common business tools. Custom connections are available via API and webhook.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {verifiedIntegrations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-4 rounded-[2px] text-center hover:border-[#00d4ff]/40 transition-colors flex items-center justify-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-[#00d4ff] shrink-0" />
              <span className="text-xs font-extrabold text-white font-mono tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 9 — SECURITY & DATA PROTECTION */}
      <div className="bg-[#0a0e1a] border border-white/5 p-8 sm:p-12 rounded-[2px] space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#00d4ff]">
            <Lock className="w-5 h-5" />
            <span className="text-xs font-bold uppercase font-mono tracking-[0.1em]">
              SECURITY & DATA PROTECTION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise Security
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Encrypted conversations and data transmission',
            'Role-based access controls',
            'Secure customer data handling',
            'GDPR-aligned data architecture',
            'Custom privacy settings per deployment',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0d1117] border border-white/5 p-4 rounded-[2px]">
              <Shield className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span className="text-xs font-bold text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-[#94a3b8] leading-relaxed pt-2 border-t border-white/10">
          Every deployment is customized according to your business workflows, data requirements, and existing software ecosystem.
        </p>
      </div>

      {/* SECTION 10 — COMPARISON */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Traditional Phone Handling vs. PEXEK AI Receptionist
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* LEFT: Traditional */}
          <div className="bg-[#0d1117]/60 border border-white/5 p-8 rounded-[2px] space-y-6 opacity-85">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">
                CURRENT BASELINE
              </span>
              <h3 className="text-xl font-bold text-slate-300 mt-1">
                Traditional Phone Handling
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-slate-400">
              {comparison.traditional.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: PEXEK AI */}
          <div className="bg-[#0d1117] border border-[#00d4ff]/40 p-8 rounded-[2px] space-y-6 shadow-[0_0_25px_rgba(0,212,255,0.08)]">
            <div className="border-b border-[#00d4ff]/20 pb-4">
              <span className="text-xs font-mono uppercase text-[#00d4ff] font-bold tracking-wider">
                DEPLOYED INFRASTRUCTURE
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                PEXEK AI Receptionist
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-white">
              {comparison.pexek.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/40 text-[#00d4ff] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 11 — FAQ */}
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SERVICE BUSINESS FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-[#0d1117] border border-white/5 rounded-[2px] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="text-sm font-bold text-white font-sans">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#00d4ff] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-[#94a3b8] leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION 12 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready To Modernize Your Client Communication?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Book a 30-minute strategy session and we'll design an AI voice workflow tailored to your service business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-left py-2">
          {[
            'Workflow analysis',
            'Call handling review',
            'Automation recommendations',
            'Personalized deployment roadmap',
          ].map((bullet, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-200">
              <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <button
            onClick={onOpenAuditModal}
            className="px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] inline-flex items-center gap-2 cursor-pointer"
          >
            Book Business Strategy Audit →
          </button>
          <p className="text-[11px] text-[#94a3b8] italic">
            30-minute session. No obligation. No technical preparation required.
          </p>
        </div>
      </div>

      {/* SECTION 13 — FOOTER DISCLAIMER */}
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="bg-[#0a0e1a] border border-white/5 p-6 rounded-[2px] text-center max-w-5xl mx-auto">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            Every deployment is customized according to the organization's workflows, data requirements, and existing software ecosystem. PEXEK does not provide legal, financial, medical, or professional advice. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
