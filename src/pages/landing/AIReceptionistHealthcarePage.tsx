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
  Activity,
  UserCheck,
  Stethoscope,
  HeartPulse
} from 'lucide-react';

interface AIReceptionistHealthcarePageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIReceptionistHealthcarePage: React.FC<AIReceptionistHealthcarePageProps> = ({ 
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
      label: 'Patient Call Coverage',
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
      label: 'Typical Deployment Timeline',
      disclaimer: 'Average from strategy audit to go-live. Varies by workflow complexity.',
    },
  ];

  const coreCapabilities = [
    {
      icon: <Phone className="w-6 h-6 text-[#00d4ff]" />,
      title: '24/7 Patient Call Handling',
      description: 'Answers routine patient questions, captures caller information, and routes urgent requests according to your predefined workflow. Never sends patients to voicemail.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Appointment Scheduling',
      description: 'Books appointments, checks real-time availability, and sends confirmation messages through SMS or WhatsApp based on your calendar rules.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Patient Follow-Up',
      description: 'Automates appointment reminders, rescheduling requests, and missed-call follow-up workflows to reduce no-shows and administrative burden.',
    },
  ];

  const commonWorkflows = [
    'Appointment Booking',
    'Appointment Rescheduling',
    'New Patient Intake',
    'Missed Call Recovery',
    'Frequently Asked Questions',
    'After-Hours Call Handling',
    'Prescription Refill Requests',
    'Call Routing to Departments',
    'Insurance Information Collection',
    'WhatsApp Follow-up & Reminders',
  ];

  const patientWorkflowSteps = [
    {
      step: '01',
      title: 'Patient Calls',
      description: 'Inbound call to your practice number',
      micro: 'Direct patient line',
    },
    {
      step: '02',
      title: 'AI Answers Instantly',
      description: 'Configured with your practice greeting and knowledge',
      micro: 'Natural voice dialogue',
    },
    {
      step: '03',
      title: 'Collects Information',
      description: 'Caller details, reason for visit, insurance (if needed)',
      micro: 'Structured data capture',
    },
    {
      step: '04',
      title: 'Books Appointment',
      description: 'Real-time calendar check and booking',
      micro: 'Zero scheduling overlap',
    },
    {
      step: '05',
      title: 'Updates Systems',
      description: 'CRM, spreadsheet, or webhook notification',
      micro: 'Instant sync',
    },
    {
      step: '06',
      title: 'WhatsApp Confirmation',
      description: 'Confirmation + reminder dispatched automatically',
      micro: 'Instant dispatch',
    },
  ];

  const integrations = [
    'Google Calendar',
    'Microsoft Outlook Calendar',
    'WhatsApp Business API',
    'HubSpot',
    'Salesforce',
    'Zapier',
    'Webhooks',
    'Custom API Integrations',
    'CRM Platforms',
    'Scheduling Platforms',
  ];

  const comparison = {
    traditional: [
      'Business hours only',
      'One call at a time',
      'Voicemail after hours',
      'Manual reminders and callbacks',
      'Front desk overwhelmed during peak hours',
    ],
    pexek: [
      '24/7 call answering',
      'Unlimited simultaneous calls',
      'No voicemail — every call handled',
      'Automatic SMS/WhatsApp reminders',
      'Front desk focused on in-person care',
    ],
  };

  const faqs = [
    {
      q: 'Can the AI answer patient calls after hours?',
      a: 'Yes. PEXEK answers calls 24/7 based on your configured workflows, capturing patient information and booking appointments according to your rules.',
    },
    {
      q: 'Can it book into our existing calendar?',
      a: 'Yes. PEXEK integrates with Google Calendar, Outlook, Cal.com, Calendly, and other scheduling platforms. Appointments appear instantly with patient details.',
    },
    {
      q: 'Does it handle prescription refill requests?',
      a: 'PEXEK can collect refill requests and route them to your designated staff or system. It does not process prescriptions or provide medical advice.',
    },
    {
      q: 'Can it send appointment reminders?',
      a: 'Yes. WhatsApp Business API and SMS integrations are included. Confirmations, reminders, and follow-ups are sent automatically based on your templates.',
    },
    {
      q: 'How does urgent call routing work?',
      a: 'You define the escalation rules. PEXEK can route urgent calls to your on-call team member with full caller context, based on your predefined criteria.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most healthcare deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and staff onboarding.',
    },
    {
      q: 'Is this HIPAA compliant?',
      a: 'PEXEK supports HIPAA-ready deployment workflows where applicable, including encrypted data handling and access controls. We recommend reviewing your specific compliance requirements during the strategy audit.',
    },
  ];

  const scrollToBlueprint = () => {
    const el = document.getElementById('healthcare-workflow-blueprint');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-28 pb-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white font-sans">
      
      {/* SECTION 1 — HERO */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-[0.1em] rounded-[2px]">
          <HeartPulse className="w-3.5 h-3.5" /> Built for Healthcare Providers
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          AI Voice Receptionists for Healthcare Providers
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          Answer every patient call, automate appointment scheduling, qualify patient inquiries, and reduce front-desk workload with AI voice automation available 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Healthcare Strategy Audit →
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

      {/* SECTION 3 — ABOUT / POSITIONING */}
      <div className="bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px] space-y-4 max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
          PEXEK POSITIONING
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Built Around Modern Healthcare Workflows
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
          PEXEK helps healthcare providers automate routine phone conversations so front-desk teams can focus on patient care instead of repetitive calls. We design and deploy AI voice systems that integrate with your existing scheduling and communication tools.
        </p>
      </div>

      {/* SECTION 4 — CORE CAPABILITIES (3 Features) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            HEALTHCARE AUTOMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What PEXEK Deploys for Healthcare
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* SECTION 5 — COMMON HEALTHCARE WORKFLOWS */}
      <div className="space-y-10 bg-[#0a0e1a] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SUPPORTED ADMINISTRATIVE SCOPE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Common Healthcare Workflows
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK can be configured to handle these administrative phone workflows:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
          {commonWorkflows.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0d1117] border border-white/5 p-4 rounded-[2px]">
              <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span className="text-sm font-semibold text-white">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6 — PATIENT WORKFLOW VISUALIZATION */}
      <div id="healthcare-workflow-blueprint" className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            PATIENT JOURNEY VISUALIZATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Patient Calls Flow Through PEXEK
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {patientWorkflowSteps.map((step, idx) => (
            <div key={idx} className="relative bg-[#050507] border border-white/10 p-5 rounded-[2px] space-y-2 flex flex-col justify-between hover:border-[#00d4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#00d4ff] font-bold block">
                  STEP {step.step}
                </span>
                <h4 className="text-sm font-bold text-white mt-1">
                  {step.title}
                </h4>
                <p className="text-xs text-[#94a3b8] mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="pt-3 border-t border-white/5 text-[10px] font-mono text-[#00d4ff]/80">
                {step.micro}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7 — INTEGRATIONS (VERIFIED ONLY) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            ECOSYSTEM CONNECTIVITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Works With Your Existing Tools
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK integrates with common business tools. Custom connections are available via API and webhook.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {integrations.map((item, idx) => (
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

      {/* SECTION 8 — SECURITY & COMPLIANCE */}
      <div className="bg-[#0a0e1a] border border-white/5 p-8 sm:p-12 rounded-[2px] space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#00d4ff]">
            <Lock className="w-5 h-5" />
            <span className="text-xs font-bold uppercase font-mono tracking-[0.1em]">
              SECURITY ARCHITECTURE
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
            'Supports HIPAA-ready deployment workflows where applicable',
            'GDPR-aligned data architecture',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0d1117] border border-white/5 p-4 rounded-[2px]">
              <Shield className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span className="text-xs font-bold text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-[#94a3b8] leading-relaxed pt-2 border-t border-white/10">
          Every healthcare deployment is customized according to the organization's workflows, compliance requirements, and existing software ecosystem. PEXEK does not provide medical advice, diagnosis, or clinical triage.
        </p>
      </div>

      {/* SECTION 9 — COMPARISON */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Traditional Front Desk vs. PEXEK AI Receptionist
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
                Traditional Front Desk
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

      {/* SECTION 10 — FAQ */}
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            HEALTHCARE FAQ
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

      {/* SECTION 11 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready to Modernize Your Patient Phone Experience?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Book a healthcare strategy session and we'll map the ideal AI voice workflow for your organization.
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
            Book Healthcare Strategy Audit →
          </button>
          <p className="text-[11px] text-[#94a3b8] italic">
            30-minute session. No obligation. No technical preparation required.
          </p>
        </div>
      </div>

      {/* SECTION 12 — FOOTER DISCLAIMER */}
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="bg-[#0a0e1a] border border-white/5 p-6 rounded-[2px] text-center max-w-5xl mx-auto">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            Every healthcare deployment is customized according to the organization's workflows, compliance requirements, and existing software ecosystem. PEXEK does not provide medical advice, clinical diagnosis, or patient triage. All administrative automation is configured based on the healthcare provider's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
