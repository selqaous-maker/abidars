import React, { useState } from 'react';
import { PagePath } from '../../types';
import { ServiceCrossLinks } from '../../components/ServiceCrossLinks';
import { 
  Scale, 
  ClipboardList, 
  Calendar, 
  PhoneForwarded, 
  FileText, 
  Database, 
  MessageCircle, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Shield, 
  Globe, 
  Clock, 
  ShieldCheck, 
  Users,
  Briefcase
} from 'lucide-react';

interface AIReceptionistLegalPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIReceptionistLegalPage: React.FC<AIReceptionistLegalPageProps> = ({ 
  onNavigate, 
  onOpenAuditModal 
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const metrics = [
    {
      icon: '⚖️',
      value: '24/7',
      label: 'Client Intake Availability',
      disclaimer: 'System capability. Actual coverage depends on deployment configuration.',
    },
    {
      icon: '📞',
      value: '< 1 Second',
      label: 'Average Answer Time',
      disclaimer: 'Based on voice infrastructure benchmarks. Actual speed varies by call volume.',
    },
    {
      icon: '🌍',
      value: '100+ Languages',
      label: 'Support Multilingual Callers',
      disclaimer: 'Language support depends on voice engine configuration. Actual capabilities vary.',
    },
    {
      icon: '♾️',
      value: 'Unlimited',
      label: 'Concurrent Calls',
      disclaimer: 'System architecture supports unlimited simultaneous conversations.',
    },
  ];

  const coreCapabilities = [
    {
      icon: <ClipboardList className="w-6 h-6 text-[#00d4ff]" />,
      title: 'New Client Intake',
      description: 'Collects case type, contact details, incident summary, urgency level, and preferred consultation time based on your intake script.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Consultation Scheduling',
      description: 'Books consultations directly into your existing calendar with real-time availability checks and automatic conflict prevention.',
    },
    {
      icon: <PhoneForwarded className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Urgent Call Routing',
      description: 'Identifies high-priority callers based on your criteria and warm-transfers them immediately to the assigned attorney with full context.',
    },
    {
      icon: <FileText className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Call Summaries',
      description: 'Every conversation is summarized automatically with key details extracted for your review before the follow-up.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'CRM Sync',
      description: 'Conversation logs, intake details, and consultation bookings are synchronized with your connected CRM or spreadsheet automatically.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'WhatsApp Follow-Up',
      description: 'Sends consultation confirmations, office locations, required document checklists, and appointment reminders automatically.',
    },
  ];

  const practiceAreas = [
    {
      title: 'Personal Injury',
      bullets: [
        'Emergency consultation intake',
        'Insurance information collection',
        'Incident timeline and injury details',
        'Urgency flagging for same-day callbacks',
      ],
    },
    {
      title: 'Family Law',
      bullets: [
        'Divorce and custody consultation requests',
        'Sensitive intake with professional tone',
        'Document requirements checklist',
        'Appointment scheduling for both parties (if applicable)',
      ],
    },
    {
      title: 'Immigration',
      bullets: [
        'Multilingual intake in caller\'s preferred language',
        'Visa type and case status collection',
        'Document checklist and deadline tracking',
        'Consultation booking with immigration attorney',
      ],
    },
    {
      title: 'Business Law',
      bullets: [
        'Company formation inquiries',
        'Contract consultation requests',
        'Corporate client intake',
        'Appointment scheduling and conflict checks',
      ],
    },
    {
      title: 'Real Estate Law',
      bullets: [
        'Property dispute intake',
        'Closing and title consultation requests',
        'Landlord-tenant issue collection',
        'Appointment scheduling',
      ],
    },
  ];

  const clientCallFlowSteps = [
    {
      step: '01',
      title: 'Potential Client Calls',
      description: 'Inbound inquiry to your firm number',
      micro: 'Direct inbound line',
    },
    {
      step: '02',
      title: 'AI Answers',
      description: 'Configured with your firm greeting and intake knowledge',
      micro: 'Natural voice dialogue',
    },
    {
      step: '03',
      title: 'Collects Case Details',
      description: 'Case type, contact info, urgency, and summary captured',
      micro: 'Intake script execution',
    },
    {
      step: '04',
      title: 'Books Consultation',
      description: 'Calendar checked and appointment scheduled instantly',
      micro: 'Real-time booking',
    },
    {
      step: '05',
      title: 'CRM Updated',
      description: 'Lead logged with full intake details in your system',
      micro: 'Automatic record sync',
    },
    {
      step: '06',
      title: 'WhatsApp Confirmation',
      description: 'Confirmation, location, and document list sent automatically',
      micro: 'Instant client receipt',
    },
  ];

  const whyLawFirmsChooseAi = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Never Miss an Intake Call',
      description: 'Every potential client is greeted professionally, even after hours or during court sessions.',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Serve Multilingual Clients',
      description: 'Answer and intake clients in 100+ languages, expanding your firm\'s accessibility.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Respond Instantly',
      description: 'Clients expect immediate response. AI answers in under one second, building trust from the first interaction.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Free Your Paralegals',
      description: 'Let your staff focus on case preparation instead of repetitive phone intake and scheduling.',
    },
  ];

  const verifiedIntegrations = [
    'Google Calendar',
    'Microsoft Outlook Calendar',
    'HubSpot',
    'Salesforce',
    'Zoho CRM',
    'Pipedrive',
    'WhatsApp Business API',
    'Zapier',
    'Make',
    'Webhooks',
    'Custom API Integrations',
  ];

  const faqs = [
    {
      q: 'Can AI answer calls for law firms?',
      a: 'Yes. PEXEK is configured with your firm\'s greeting, practice areas, and intake scripts. It answers calls professionally and collects client information based on your criteria.',
    },
    {
      q: 'Can AI schedule legal consultations?',
      a: 'Yes. PEXEK integrates with Google Calendar, Outlook, Calendly, and other scheduling tools. Consultations are booked in real time with automatic confirmations.',
    },
    {
      q: 'Can AI qualify potential clients?',
      a: 'Yes. PEXEK asks qualifying questions about case type, urgency, timeline, and budget based on your intake criteria. Unqualified inquiries are filtered according to your rules.',
    },
    {
      q: 'Can AI transfer urgent legal calls?',
      a: 'Yes. You define the escalation rules. PEXEK can warm-transfer high-priority callers to your attorney with full conversation context.',
    },
    {
      q: 'Can AI integrate with my CRM?',
      a: 'Yes. PEXEK connects to HubSpot, Salesforce, Zoho CRM, Pipedrive, and other systems via API or webhook. Every intake conversation is logged automatically.',
    },
    {
      q: 'Can AI support multilingual callers?',
      a: 'Yes. PEXEK supports 100+ languages depending on configuration. This is especially valuable for immigration and international practice areas.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most law firm deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and staff onboarding.',
    },
    {
      q: 'Does this create an attorney-client relationship?',
      a: 'No. PEXEK handles administrative intake and scheduling only. It does not provide legal advice, case evaluation, or establish attorney-client privilege.',
    },
  ];

  const scrollToBlueprint = () => {
    const el = document.getElementById('deployment-blueprint');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-28 pb-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white font-sans">
      
      {/* SECTION 1 — HERO */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-[0.1em] rounded-[2px]">
          <Scale className="w-3.5 h-3.5" /> Built for Law Firms
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Never Miss Another Potential Client Call
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          Every unanswered legal inquiry is a potential client contacting another firm. PEXEK deploys an <strong className="text-white">AI Client Intake System</strong> and <strong className="text-white">24/7 Legal Receptionist</strong> for <strong className="text-white">Legal Intake Automation</strong>, <strong className="text-white">Law Firm Voice Automation</strong>, and <strong className="text-white">Consultation Booking Automation</strong> that answers calls instantly, qualifies new client inquiries, schedules consultations, and synchronizes every conversation with your CRM.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Legal AI Audit →
          </button>
          
          <button
            onClick={scrollToBlueprint}
            className="text-[#00d4ff] hover:underline font-mono text-xs uppercase tracking-wider py-2 px-4 transition-all flex items-center gap-1 cursor-pointer"
          >
            View AI Voice Demo →
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
            <div className="text-2xl mb-1">{card.icon}</div>
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
          Built for Modern Law Firms
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
          PEXEK helps attorneys and law firms automate routine phone conversations so your team can focus on case work instead of answering repetitive intake calls. We design and deploy AI voice systems that integrate with your existing scheduling, CRM, and communication tools.
        </p>
        <div className="pt-2 text-xs font-mono text-[#94a3b8]">
          Salah Eddine El Qaous, Founder @ PEXEK
        </div>
      </div>

      {/* SECTION 4 — CORE CAPABILITIES (6 Features in 3x2 Grid) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            LAW FIRM AUTOMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What PEXEK Deploys for Law Firms
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Complete legal intake automation and AI Receptionist for Law Firms tailored for busy attorneys.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* SECTION 5 — PRACTICE AREAS (SEO Section) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            PRACTICE AREA WORKFLOWS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Configured for Your Practice Area
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK designs intake workflows tailored to your firm's focus areas with specialized Legal Call Answering Service and Multilingual Legal Intake rules:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area, idx) => (
            <div 
              key={idx} 
              className="bg-[#0d1117] border border-[#00d4ff]/20 p-6 rounded-[2px] space-y-4 hover:border-[#00d4ff]/60 transition-colors"
            >
              <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                <h3 className="text-base font-bold text-white font-sans">
                  {area.title}
                </h3>
                <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded-[2px]">
                  INTAKE WORKFLOW
                </span>
              </div>
              <ul className="space-y-2.5 text-xs text-[#94a3b8]">
                {area.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6 — CLIENT JOURNEY */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            INTAKE ROUTING ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How a Potential Client Call Flows Through PEXEK
          </h2>
          <p className="text-xs text-[#94a3b8]">
            From initial ring to consultation booking and CRM synchronization in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
          {clientCallFlowSteps.map((step, idx) => (
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

      {/* SECTION 7 — EXAMPLE DEPLOYMENT BLUEPRINT */}
      <div id="deployment-blueprint" className="bg-[#0a0e1a] border border-white/5 p-8 sm:p-12 rounded-[2px] space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            FIELD DEPLOYMENT ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Example Deployment Blueprint
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block">
              OPERATIONAL CHALLENGE
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              Potential clients call after hours or during court sessions. Nobody answers. They hire another attorney immediately.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#00d4ff]/30 p-6 rounded-[2px] space-y-3">
            <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider block">
              PEXEK SYSTEM DEPLOYMENT
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              AI receives the call, collects legal intake information, books a consultation, updates the CRM, and sends a WhatsApp confirmation with required documents.
            </p>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            EXPECTED BUSINESS IMPACT
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Faster intake response',
              'Better client experience',
              'More qualified consultations',
              'Less administrative work for paralegals',
            ].map((impact, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
                <span>{impact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 8 — WHY LAW FIRMS CHOOSE AI (4 Cards) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL ADVANTAGES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Law Firms Choose AI Receptionists
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Automate phone intake while keeping your legal team focused on casework and court preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyLawFirmsChooseAi.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-[2px] bg-[#050507] border border-white/10 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {card.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 9 — INTEGRATIONS (VERIFIED ONLY) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            LAW FIRM CRM INTEGRATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Works With Your Existing Tools
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK integrates with common business tools. Custom connections are available via API and webhook.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
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

      {/* SECTION 10 — SECURITY & DATA PROTECTION */}
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
          Every deployment is customized according to your firm's workflows, data requirements, and existing software ecosystem. PEXEK does not provide legal advice or establish attorney-client relationships.
        </p>
      </div>

      {/* SECTION 11 — FAQ */}
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            LAW FIRM FAQ
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

      {/* CONTEXTUAL CROSS LINKS HUB */}
      <ServiceCrossLinks 
        currentPath="/legal-ai-intake"
        type="industry"
        onNavigate={onNavigate}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* SECTION 12 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready To Capture Every Client Call?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Book a 30-minute Legal AI Strategy Audit and receive a personalized deployment roadmap for your firm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-left py-2">
          {[
            'Review your intake workflow',
            'Identify automation opportunities',
            'Design your deployment roadmap',
            'No obligation',
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
            Book Legal AI Audit →
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
            Every deployment is customized according to the organization's workflows, data requirements, and existing software ecosystem. PEXEK does not provide legal advice, case evaluation, or attorney-client services. All automation is configured based on the law firm's specific instructions and protocols. PEXEK is not a law firm and does not establish attorney-client relationships.
          </p>
        </div>
      </div>

    </div>
  );
};
