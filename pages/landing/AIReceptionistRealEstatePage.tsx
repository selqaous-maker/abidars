import React, { useState } from 'react';
import { PagePath } from '../../types';
import { ServiceCrossLinks } from '../../components/ServiceCrossLinks';
import { 
  Building2, 
  UserCheck, 
  Home, 
  Calendar, 
  PhoneForwarded, 
  Database, 
  MessageCircle, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Shield, 
  Zap, 
  PhoneCall, 
  CalendarCheck,
  ArrowRight,
  Clock,
  Sparkles,
  Layers,
  HelpCircle
} from 'lucide-react';

interface AIReceptionistRealEstatePageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIReceptionistRealEstatePage: React.FC<AIReceptionistRealEstatePageProps> = ({ 
  onNavigate, 
  onOpenAuditModal 
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const metrics = [
    {
      value: '< 1 Second',
      label: 'Average Answer Time',
      disclaimer: 'Based on voice infrastructure benchmarks. Actual speed varies by call volume.',
    },
    {
      value: '24/7',
      label: 'Always Available',
      disclaimer: 'System capability. Actual coverage depends on deployment configuration.',
    },
    {
      value: 'Unlimited',
      label: 'Concurrent Calls',
      disclaimer: 'System architecture supports unlimited simultaneous conversations.',
    },
    {
      value: '100%',
      label: 'CRM Logging',
      disclaimer: 'Every qualified conversation is logged to your connected CRM or system.',
    },
  ];

  const coreCapabilities = [
    {
      icon: <UserCheck className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Buyer Qualification',
      description: 'Captures budget range, timeline, mortgage status, and neighborhood preferences before the agent ever picks up the phone.',
    },
    {
      icon: <Home className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Property Questions',
      description: 'Answers questions about bedrooms, bathrooms, HOA fees, amenities, parking, and location using your property knowledge base.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Showing Booking',
      description: 'Books property viewings directly into Google Calendar, Outlook, Calendly, or your scheduling system with real-time availability.',
    },
    {
      icon: <PhoneForwarded className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Live Lead Transfer',
      description: 'Identifies hot buyers and warm-transfers them immediately to the assigned agent with full conversation context.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'CRM Sync',
      description: 'Every conversation, qualification detail, and booking is automatically logged to your connected CRM or spreadsheet.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'WhatsApp Follow-Up',
      description: 'Sends viewing confirmations, property details, location pins, and document links automatically after every call.',
    },
  ];

  const realEstateCallTypes = [
    { title: 'New property inquiry', desc: 'Instant response to buyer calls from yard signs, portals, or print ads.' },
    { title: 'Schedule a viewing', desc: 'Direct appointment booking for property walkthroughs and open houses.' },
    { title: 'Request property details', desc: 'Provides specs, HOA details, pricing, and virtual tour links.' },
    { title: 'Mortgage pre-qualification inquiry', desc: 'Captures financing status and lender pre-approval readiness.' },
    { title: 'Seller valuation request', desc: 'Collects property details for home valuation and listing consultations.' },
    { title: 'Rental inquiry', desc: 'Screens tenant applicants, lease timelines, and move-in dates.' },
    { title: 'Commercial property inquiry', desc: 'Handles zoning queries, square footage, and lease terms.' },
    { title: 'Property management request', desc: 'Logs maintenance issues or owner inquiries for property managers.' },
  ];

  const buyerCallFlowSteps = [
    {
      step: '01',
      title: 'Lead Calls',
      description: 'Inbound inquiry to your office or listing line',
      micro: 'Direct listing line',
    },
    {
      step: '02',
      title: 'AI Answers',
      description: 'Configured with your brand voice and property knowledge',
      micro: 'Natural voice dialogue',
    },
    {
      step: '03',
      title: 'Property Identified',
      description: 'Caller specifies property, budget, or neighborhood',
      micro: 'Preference extraction',
    },
    {
      step: '04',
      title: 'Buyer Qualified',
      description: 'Budget, timeline, and mortgage status captured',
      micro: 'Real-time qualification',
    },
    {
      step: '05',
      title: 'Viewing Scheduled',
      description: 'Appointment booked into your calendar instantly',
      micro: 'Zero scheduling overlap',
    },
    {
      step: '06',
      title: 'CRM + WhatsApp',
      description: 'Lead logged and confirmation sent automatically',
      micro: 'Instant dispatch & record sync',
    },
  ];

  const whyChooseAi = [
    {
      icon: <PhoneCall className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Never Miss Listing Calls',
      description: 'Every inquiry is answered instantly, even when agents are in showings or after hours.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Respond Within Seconds',
      description: 'Buyers expect immediate response. AI answers in under one second, every time.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Qualify Every Buyer',
      description: 'Capture budget, timeline, and mortgage status before the agent invests time in unqualified leads.',
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Book More Viewings',
      description: 'Calendar integration means showings are scheduled while the buyer is still on the line.',
    },
  ];

  const verifiedIntegrations = [
    'Google Calendar',
    'Microsoft Outlook Calendar',
    'HubSpot',
    'Salesforce',
    'Zoho CRM',
    'Pipedrive',
    'Calendly',
    'WhatsApp Business API',
    'Zapier',
    'Webhooks',
    'Make',
    'Custom API Integrations',
  ];

  const faqs = [
    {
      q: 'Can AI answer property inquiries?',
      a: 'Yes. PEXEK is configured with your property details, pricing, availability, and neighborhood knowledge. It answers common questions and captures buyer information instantly.',
    },
    {
      q: 'Can AI qualify buyers?',
      a: 'Yes. PEXEK asks qualifying questions about budget, timeline, mortgage status, and neighborhood preferences based on your criteria.',
    },
    {
      q: 'Can AI schedule property viewings?',
      a: 'Yes. PEXEK integrates with Google Calendar, Outlook, Calendly, and other scheduling tools. Viewings are booked in real time with automatic confirmations.',
    },
    {
      q: 'Can AI integrate with my CRM?',
      a: 'Yes. PEXEK connects to HubSpot, Salesforce, Zoho CRM, Pipedrive, and other systems via API or webhook. Every conversation is logged automatically.',
    },
    {
      q: 'Can AI transfer hot leads?',
      a: 'Yes. You define the hot lead criteria. PEXEK can warm-transfer qualified buyers to your agent with full conversation context.',
    },
    {
      q: 'Does it support WhatsApp?',
      a: 'Yes. WhatsApp Business API is included in every deployment. Confirmations, property details, and reminders are sent automatically.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most real estate deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and team onboarding.',
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
          <Building2 className="w-3.5 h-3.5" /> Built for Real Estate Teams
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Never Lose Another Buyer Lead Again
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          Every unanswered property inquiry is a commission opportunity walking to another agent. PEXEK deploys an <strong className="text-white">AI Receptionist for Real Estate</strong> with our <strong className="text-white">Real Estate AI Voice Agent</strong> and <strong className="text-white">AI Phone Answering for Realtors</strong> that answers buyer calls instantly, qualifies prospects, schedules property viewings, and syncs everything with your CRM 24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Real Estate AI Audit →
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
          Built for Modern Real Estate Teams
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
          PEXEK helps real estate agents, brokers, and property teams automate routine phone conversations so you can focus on showings, negotiations, and closings instead of answering repetitive calls. We design and deploy AI voice systems that integrate with your existing scheduling, CRM, and communication tools.
        </p>
        <div className="pt-2 text-xs font-mono text-[#94a3b8]">
          Salah Eddine El Qaous, Founder @ PEXEK
        </div>
      </div>

      {/* SECTION 4 — CORE CAPABILITIES (6 Features in 3x2 Grid) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            REAL ESTATE AUTOMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Receptionist for Real Estate
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Complete property inquiry automation and AI lead qualification tailored for high-performing agents.
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

      {/* SECTION 5 — COMMON REAL ESTATE CALL TYPES (SEO Section) */}
      <div className="space-y-10 bg-[#0a0e1a] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            ROUTINE PHONE WORKFLOWS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Common Real Estate Call Types
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK can be configured to handle these routine property phone workflows with 24/7 Real Estate Call Answering:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto pt-2">
          {realEstateCallTypes.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 bg-[#0d1117] border border-white/5 p-4 rounded-[2px]">
              <Check className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white font-sans">{item.title}</h3>
                <p className="text-xs text-[#94a3b8] mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6 — BUYER CALL FLOW (Patient / Buyer Journey) */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            CALL ROUTING & LOGIC
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How a Buyer Call Flows Through PEXEK
          </h2>
          <p className="text-xs text-[#94a3b8]">
            From initial ring to calendar booking and CRM synchronization in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
          {buyerCallFlowSteps.map((step, idx) => (
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
            FIELD ARCHITECTURE
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
              Agents are busy during property visits, client meetings, or open houses. Buyer calls go to voicemail. Potential buyers immediately contact competing agencies to schedule viewings.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#00d4ff]/30 p-6 rounded-[2px] space-y-3">
            <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider block">
              PEXEK SYSTEM DEPLOYMENT
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              AI answers listing calls instantly, qualifies the buyer criteria, schedules a showing directly into the agent's calendar, updates the connected CRM, and dispatches a WhatsApp confirmation with location pins and listing details.
            </p>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            EXPECTED BUSINESS IMPACT
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Faster response times',
              'Better lead qualification',
              'Fewer missed opportunities',
              'More efficient sales workflow',
            ].map((impact, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-200">
                <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
                <span>{impact}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 8 — WHY REAL ESTATE TEAMS CHOOSE AI (4 Cards) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL ADVANTAGES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Real Estate Teams Choose AI
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Automate phone intake while keeping your human agents focused on high-value closings.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseAi.map((card, idx) => (
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
            ECOSYSTEM CONNECTIVITY
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
          Every deployment is customized according to your business workflows, data requirements, and existing software ecosystem.
        </p>
      </div>

      {/* SECTION 11 — FAQ */}
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            REAL ESTATE FAQ
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
        currentPath="/ai-receptionist-real-estate"
        type="industry"
        onNavigate={onNavigate}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* SECTION 12 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready To Capture More Buyer Calls?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Book a real estate strategy session and we'll map the ideal AI voice workflow for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-left py-2">
          {[
            'Workflow review',
            'AI deployment roadmap',
            'Integration planning',
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
            Book Real Estate AI Audit →
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
            Every deployment is customized according to the organization's workflows, data requirements, and existing software ecosystem. PEXEK does not provide real estate brokerage, legal, or financial advice. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
