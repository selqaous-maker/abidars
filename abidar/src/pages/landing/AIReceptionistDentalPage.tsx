import React, { useState } from 'react';
import { PagePath } from '../../types';
import { 
  Phone, 
  Calendar, 
  RefreshCw, 
  AlertTriangle, 
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
  UserCheck,
  TrendingUp,
  Lock,
  Server,
  Database,
  PhoneCall,
  Activity
} from 'lucide-react';

interface AIReceptionistDentalPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIReceptionistDentalPage: React.FC<AIReceptionistDentalPageProps> = ({ 
  onNavigate, 
  onOpenAuditModal 
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const kpiCards = [
    {
      number: '$1,110+',
      label: 'Average Production Opportunity Per Missed Appointment',
      disclaimer: 'Based on industry benchmark data. Actual results vary by practice.',
    },
    {
      number: '< 4%',
      label: 'Projected No-Show Improvement',
      disclaimer: 'Modeled reduction from average 15% practice baseline. Actual results vary.',
    },
    {
      number: '24/7',
      label: 'Patient Availability',
      disclaimer: 'Estimated emergency and routine call coverage outside business hours.',
    },
  ];

  const coreCapabilities = [
    {
      icon: <Phone className="w-6 h-6 text-[#00d4ff]" />,
      title: '24/7 Patient Call Answering',
      description: 'Every patient receives an immediate response without voicemail or hold times.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Appointment Booking',
      description: 'Books appointments directly into your existing calendar with real-time availability.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Recall Campaigns',
      description: 'Automatically contacts overdue patients and helps them reschedule without staff effort.',
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Emergency Call Routing',
      description: 'Identifies urgent cases and follows your predefined routing process to the right team member.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Insurance Intake',
      description: 'Collects insurance details before the visit so front-desk check-in is faster.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'WhatsApp Follow-Up',
      description: 'Automatically sends confirmations, reminders, and intake links after every call.',
    },
  ];

  const comparison = {
    traditional: [
      'Business hours only',
      'One call at a time',
      'Voicemail after hours',
      'Manual reminders',
      'Manual booking and rescheduling',
      'Front desk overwhelmed during peak hours',
    ],
    pexek: [
      '24/7 availability',
      'Unlimited simultaneous calls',
      'No voicemail — every call answered',
      'Automatic reminders via WhatsApp/SMS',
      'Automatic booking and rescheduling',
      'Front desk focused on in-person patient care',
    ],
  };

  const patientJourney = [
    {
      step: '01',
      title: 'Incoming Call',
      description: 'Patient dials your practice number',
      micro: 'Direct inbound route',
    },
    {
      step: '02',
      title: 'VoiceOS™ Answers',
      description: "AI answers with your practice's tone and knowledge",
      micro: 'Natural voice dialogue',
    },
    {
      step: '03',
      title: 'Scheduled',
      description: 'Patient picks or confirms a slot',
      micro: 'Real-time validation',
    },
    {
      step: '04',
      title: 'Calendar',
      description: 'Your existing calendar updates instantly',
      micro: 'Zero double booking',
    },
    {
      step: '05',
      title: 'WhatsApp',
      description: 'Confirmation + intake link sent automatically',
      micro: 'Instant receipt',
    },
    {
      step: '06',
      title: 'Staff Notified',
      description: 'Your team sees the booking in real time',
      micro: 'Complete record sync',
    },
  ];

  const integrations = [
    'Google Calendar',
    'Microsoft Outlook',
    'HubSpot',
    'GoHighLevel',
    'WhatsApp Business API',
    'Google Sheets',
    'Zapier',
    'Make',
    'Custom API',
  ];

  const faqs = [
    {
      q: 'Can the AI answer emergency dental calls?',
      a: 'Yes. PEXEK can be configured to identify emergency keywords, ask triage questions, and route urgent cases to your on-call dentist while booking non-urgent appointments directly.',
    },
    {
      q: 'Can it book directly into our calendar?',
      a: 'Yes. PEXEK integrates with Google Calendar, Outlook, Cal.com, Calendly, and GoHighLevel. Appointments appear instantly with patient details.',
    },
    {
      q: 'Can it reduce no-shows?',
      a: 'PEXEK automatically sends WhatsApp and SMS confirmations and reminders. Practices using automated recall systems see projected improvements in attendance based on industry data.',
    },
    {
      q: 'Can it send WhatsApp reminders?',
      a: 'Yes. WhatsApp Business API integration is included in every deployment. Confirmations, reminders, and intake links are sent automatically.',
    },
    {
      q: 'Can it transfer urgent callers to staff?',
      a: 'Yes. You define the escalation rules. PEXEK can warm-transfer urgent calls to your designated team member with full context.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most dental deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and staff handover.',
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
          Built for Dental Practices
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Never Miss Another Patient Call.
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-slate-200 max-w-3xl mx-auto">
          AI Voice Receptionists Built for Modern Dental Practices.
        </h2>

        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Answer every patient call 24/7, automate appointment booking, reduce no-shows, qualify emergency cases, and free your front desk to focus on patient care.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Dental Strategy Audit →
          </button>
          
          <button
            onClick={scrollToBlueprint}
            className="text-[#00d4ff] hover:underline font-mono text-xs uppercase tracking-wider py-2 px-4 transition-all flex items-center gap-1"
          >
            See Deployment Blueprint →
          </button>
        </div>
      </div>

      {/* SECTION 2 — KPI CARDS (3 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {kpiCards.map((card, idx) => (
          <div 
            key={idx} 
            className="bg-[#0d1117] border border-[#00d4ff]/15 p-8 rounded-[2px] space-y-3 relative overflow-hidden group hover:border-[#00d4ff]/40 transition-colors shadow-lg"
          >
            <div className="text-5xl font-extrabold font-mono text-[#00d4ff] tracking-tight">
              {card.number}
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

      {/* SECTION 3 — CORE CAPABILITIES (6 Items) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What PEXEK Deploys for Dental Practices
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="bg-[#0d1117] border border-white/10 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200 flex flex-col justify-between"
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

      {/* SECTION 4 — WHY DENTAL PRACTICES CHOOSE AI */}
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
          <div className="bg-[#0d1117]/60 border border-white/10 p-8 rounded-[2px] space-y-6 opacity-85">
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

      {/* SECTION 5 — PATIENT JOURNEY */}
      <div className="space-y-10 bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SYSTEM FLOW
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How a Patient Interaction Flows Through PEXEK
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          {patientJourney.map((step, idx) => (
            <div key={idx} className="relative bg-[#0d1117] border border-white/10 p-5 rounded-[2px] space-y-2 flex flex-col justify-between hover:border-[#00d4ff]/40 transition-colors">
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

      {/* SECTION 6 — TYPICAL DEPLOYMENT WORKFLOW */}
      <div id="deployment-blueprint" className="bg-[#0d1117] border border-white/10 p-8 sm:p-12 rounded-[2px] space-y-8 relative overflow-hidden">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            DEPLOYMENT BLUEPRINT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Typical Dental Workflow
          </h2>
          <p className="text-xs text-[#94a3b8]">
            How PEXEK handles a common after-hours scenario.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/10 py-8">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-red-400 tracking-wider block">
              CHALLENGE
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Patients calling after business hours reach voicemail and often book elsewhere.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-[#00d4ff] tracking-wider block">
              PEXEK DEPLOYMENT
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              VoiceOS™ answers immediately, qualifies urgency, checks availability against your calendar, books the appointment, updates your schedule, and sends a WhatsApp confirmation.
            </p>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-emerald-400 tracking-wider block">
              BUSINESS IMPACT
            </span>
            <ul className="space-y-1.5 text-xs text-slate-200">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0"/> Higher patient satisfaction</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0"/> More emergency bookings captured</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0"/> Reduced front-desk workload</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-emerald-400 shrink-0"/> Consistent patient experience across every call</li>
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 7 — BUSINESS INTEGRATIONS */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            ECOSYSTEM CONNECTIVITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Connects With Your Existing Business Tools
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK integrates with your existing scheduling, CRM, and communication tools to automate bookings, notifications, and customer workflows.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {integrations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border border-white/10 p-4 rounded-[2px] text-center hover:border-[#00d4ff]/40 transition-colors flex items-center justify-center gap-2"
            >
              <Server className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span className="text-xs font-extrabold text-white font-mono tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8 — SECURITY & COMPLIANCE */}
      <div className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-[2px] space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#00d4ff]">
            <Lock className="w-5 h-5" />
            <span className="text-xs font-bold uppercase font-mono tracking-[0.1em]">
              ENTERPRISE GOVERNANCE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise Security
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Encrypted conversations',
            'Role-based access controls',
            'Secure customer data handling',
            'HIPAA-ready deployment available',
            'GDPR-aligned workflows',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0d1117] border border-white/10 p-4 rounded-[2px]">
              <Shield className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span className="text-xs font-bold text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#94a3b8] leading-relaxed pt-2 border-t border-white/10">
          PEXEK deploys within secure, enterprise-grade environments. HIPAA-ready and GDPR-aligned configurations are available for healthcare practices.
        </p>
      </div>

      {/* SECTION 9 — DENTAL FAQ */}
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            FREQUENTLY ASKED QUESTIONS
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
                className="bg-[#0d1117] border border-white/10 rounded-[2px] overflow-hidden transition-colors"
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

      {/* SECTION 10 — DASHBOARD PREVIEW */}
      <div className="space-y-8">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL VISIBILITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Your Practice Dashboard
          </h2>
        </div>

        <div className="bg-[#0d1117] border border-[#00d4ff]/30 p-8 rounded-[2px] max-w-4xl mx-auto space-y-6 shadow-[0_0_30px_rgba(0,212,255,0.08)]">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#00d4ff]" />
              <span className="text-xs font-mono font-bold text-white uppercase">Live Call Activity</span>
            </div>
            <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-2.5 py-1 rounded-[2px] border border-[#00d4ff]/20">SYSTEM OPERATIONAL</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            <div className="bg-[#050507] p-4 rounded-[2px] border border-white/5">
              <div className="text-xs text-[#94a3b8] font-mono">Today's Calls</div>
              <div className="text-2xl font-extrabold font-mono text-white mt-1">47</div>
            </div>
            <div className="bg-[#050507] p-4 rounded-[2px] border border-white/5">
              <div className="text-xs text-[#94a3b8] font-mono">Appointments Booked</div>
              <div className="text-2xl font-extrabold font-mono text-[#00d4ff] mt-1">12</div>
            </div>
            <div className="bg-[#050507] p-4 rounded-[2px] border border-white/5">
              <div className="text-xs text-[#94a3b8] font-mono">Missed Calls</div>
              <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-1">0</div>
            </div>
            <div className="bg-[#050507] p-4 rounded-[2px] border border-white/5">
              <div className="text-xs text-[#94a3b8] font-mono">Avg Call Duration</div>
              <div className="text-2xl font-extrabold font-mono text-white mt-1">2m 14s</div>
            </div>
            <div className="bg-[#050507] p-4 rounded-[2px] border border-white/5">
              <div className="text-xs text-[#94a3b8] font-mono">Booked Today</div>
              <div className="text-2xl font-extrabold font-mono text-white mt-1">8</div>
            </div>
            <div className="bg-[#050507] p-4 rounded-[2px] border border-white/5">
              <div className="text-xs text-[#94a3b8] font-mono">WhatsApp Sent</div>
              <div className="text-2xl font-extrabold font-mono text-white mt-1">23</div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 11 — FINAL CTA + FOOTER DETAILS */}
      <div className="space-y-16">
        <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/10 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready To Modernize Your Dental Front Desk?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Book a complimentary strategy session and receive a personalized AI deployment roadmap for your practice.
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
              Book Dental Strategy Audit →
            </button>
            <p className="text-[11px] text-[#94a3b8] italic">
              30-minute session. No obligation. No technical preparation required.
            </p>
          </div>
        </div>

        {/* DENTAL PAGE SPECIFIC CONTACT FOOTER */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#94a3b8]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
            <a href="mailto:hello@pexek.com" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors">
              <Mail className="w-4 h-4 text-[#00d4ff]" />
              <span>hello@pexek.com</span>
            </a>
            <a href="https://wa.me/212633323828" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors">
              <MessageCircle className="w-4 h-4 text-[#00d4ff]" />
              <span>+212 6 33 32 38 28</span>
            </a>
            <a href="https://linkedin.com/company/pexek-agency/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors">
              <Linkedin className="w-4 h-4 text-[#00d4ff]" />
              <span>linkedin.com/company/pexek-agency/</span>
            </a>
          </div>

          <button
            onClick={onOpenAuditModal}
            className="px-4 py-2 border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-mono font-bold text-xs uppercase tracking-wider rounded-[2px] transition-all"
          >
            Book Strategy Audit →
          </button>
        </div>
      </div>

    </div>
  );
};
