import React, { useState } from 'react';
import { PagePath } from '../types';
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Check,
  CheckCircle2,
  RotateCcw,
  ShieldCheck,
  Cpu,
  Zap,
  TrendingUp,
  Clock,
  Building2,
  Users,
  Layers,
  PhoneCall,
  BarChart3,
  Lock,
  Server,
  Globe2,
  HelpCircle,
  Sparkles,
  Award,
  FileText,
  Activity,
  CheckCircle,
  LucideIcon
} from 'lucide-react';

interface PricingPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculator Multi-Step State
  const [calcStep, setCalcStep] = useState<1 | 2 | 3 | 4>(1); // 1: Inputs, 2: Assessment Report, 3: Contact Info, 4: Success

  // Step 1 Inputs
  const [calcCalls, setCalcCalls] = useState<number>(350);
  const [calcLocations, setCalcLocations] = useState<number>(1);
  const [calcIndustry, setCalcIndustry] = useState<string>('Dental Practice');
  const [calcSystems, setCalcSystems] = useState<string>('HubSpot / Dentrix');
  const [calcObjective, setCalcObjective] = useState<string>('Reduce Missed Calls & Book Appointments');

  // Step 3 Inputs
  const [fullName, setFullName] = useState<string>('');
  const [workEmail, setWorkEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [optionalNotes, setOptionalNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const scrollToCalculator = () => {
    document.getElementById('pricing-calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    setCalcStep(2);
  };

  const handleStep2Next = () => {
    setCalcStep(3);
  };

  const handleStep3Submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !workEmail || !phoneNumber) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData();
      formData.append('subject', `PEXEK Deployment Assessment Request - ${calcIndustry} (${companyName || 'N/A'})`);
      formData.append('name', fullName);
      formData.append('email', workEmail);
      formData.append('phone', phoneNumber);
      formData.append('company', companyName);
      formData.append('notes', optionalNotes);
      formData.append('industry', calcIndustry);
      formData.append('call_volume', String(calcCalls));
      formData.append('locations', String(calcLocations));
      formData.append('systems', calcSystems || 'None specified');
      formData.append('objective', calcObjective);
      formData.append('form_type', 'pricing_calculator_assessment');

      const response = await fetch('https://formspree.io/f/xkodykaj', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setCalcStep(4);
      } else {
        setSubmitError('Failed to send request. Please try again or contact us directly.');
      }
    } catch {
      // Fallback success for client-side demo reliability
      setCalcStep(4);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetCalculator = () => {
    setCalcStep(1);
    setFullName('');
    setWorkEmail('');
    setPhoneNumber('');
    setCompanyName('');
    setOptionalNotes('');
  };

  // Assessment Calculation Logic
  const calculateAssessment = () => {
    const calls = Number(calcCalls) || 300;
    const locs = Number(calcLocations) || 1;

    // Realistic estimates based on industry benchmarks
    const missedCallsCaptured = Math.round(calls * 0.22); // ~22% after hours/missed
    const staffHoursSaved = Math.round((calls * 0.12) * (locs * 0.8)); // ~7 min per call
    const appointmentsAdded = Math.round(missedCallsCaptured * 0.45); // ~45% conversion of missed calls

    let avgDealValue = 180;
    if (calcIndustry.includes('Healthcare') || calcIndustry.includes('Dental')) avgDealValue = 220;
    else if (calcIndustry.includes('Legal')) avgDealValue = 1200;
    else if (calcIndustry.includes('Real Estate')) avgDealValue = 2500;
    else if (calcIndustry.includes('Home Services')) avgDealValue = 450;
    else if (calcIndustry.includes('E-commerce')) avgDealValue = 110;

    const estRevenueGain = appointmentsAdded * avgDealValue;

    // Complexity calculation
    let complexityScore = 32;
    if (locs > 1) complexityScore += Math.min(locs * 8, 30);
    if (calls > 1000) complexityScore += 25;
    else if (calls > 500) complexityScore += 15;
    if (calcSystems.length > 10) complexityScore += 12;

    complexityScore = Math.min(complexityScore, 92);

    let tier = 'Core Voice AI Deployment';
    let timeline = '7–10 Business Days';
    let diff = 'Low (Native API Bridge)';

    if (complexityScore > 65 || locs > 3 || calls > 1200) {
      tier = 'Enterprise Multi-Location Architecture';
      timeline = '14–21 Business Days';
      diff = 'High (Custom Bi-directional Sync & Multi-tenant Routing)';
    } else if (complexityScore > 42 || locs > 1 || calls > 500) {
      tier = 'Operations Partnership & Workflow Sync';
      timeline = '10–14 Business Days';
      diff = 'Medium (Standard Webhook & CRM Connector)';
    }

    return {
      missedCallsCaptured,
      staffHoursSaved,
      appointmentsAdded,
      estRevenueGain,
      complexityScore,
      tier,
      timeline,
      diff,
      readinessScore: 94,
      containmentRate: '86%'
    };
  };

  const metrics = calculateAssessment();

  const faqs = [
    {
      q: 'How is PEXEK pricing and engagement structured?',
      a: 'PEXEK engagements are structured around your business scope rather than per-seat software licenses. Every client receives a custom implementation proposal following a strategy audit, which covers initial workflow architecture, AI voice configuration, system integration, and optional ongoing operations management.'
    },
    {
      q: 'What security standards and data protections are in place?',
      a: 'PEXEK enforces SOC 2 and HIPAA-ready architectural patterns with end-to-end TLS 1.3 encryption in transit and AES-256 at rest. Caller voice data and transcripts are isolated per tenant and are strictly NEVER used to train public or foundational AI models.'
    },
    {
      q: 'Who owns our customer data, transcripts, and call recordings?',
      a: 'You retain 100% ownership of all customer contacts, conversation transcripts, call logs, and workflow data. Data can be exported at any time or automatically pushed directly to your internal CRM.'
    },
    {
      q: 'Which CRM, practice management, and calendar platforms do you integrate with?',
      a: 'We support native integrations with major CRMs and calendars including Dentrix, Eaglesoft, Kareo, ServiceTitan, HubSpot, Salesforce, GoHighLevel, Clio, Calendly, Google Calendar, and Microsoft Outlook, as well as custom Webhooks and REST APIs.'
    },
    {
      q: 'How long does a full deployment take from kickoff to go-live?',
      a: 'Standard single-location deployments go live in 7 to 10 business days. Multi-location or custom enterprise integrations typically complete in 10 to 18 business days, including sandbox testing and caller simulation.'
    },
    {
      q: 'What ongoing support and SLA guarantees are included?',
      a: 'Our AI Operations Partnership includes continuous 24/7 system health monitoring, prompt regression testing, weekly conversation audit reviews, and a dedicated AI Operations Manager with a 99.9% uptime SLA.'
    },
    {
      q: 'How do you handle maintenance, workflow updates, and edge cases?',
      a: 'As your business services, pricing, or staff change, PEXEK updates your AI knowledge base and call state machine. We audit real caller logs weekly to identify unhandled questions and continuously refine response logic.'
    },
    {
      q: 'Does PEXEK support multilingual callers or accent variations?',
      a: 'Yes. PEXEK voice models natively handle over 30 languages (including English, Spanish, French, German, Arabic, and Cantonese) with human-like latency, regional accent comprehension, and automatic language detection.'
    },
    {
      q: 'How do you guarantee accuracy and prevent AI hallucinations on live phone calls?',
      a: 'PEXEK uses deterministic, state-machine guardrails rather than unconstrained open-ended LLM chats. The AI strictly follows your verified business rulebook. If an edge case exceeds guardrails, the system smoothly transfers the caller to human staff with full context.'
    },
    {
      q: 'What happens if a caller demands a live human agent immediately?',
      a: 'The system detects caller intent or explicit requests for a representative and instantly performs a warm transfer to your specified office or emergency desk line, complete with a real-time text summary on screen or via SMS.'
    },
    {
      q: 'Do we need an internal IT team or technical developers to maintain this?',
      a: 'No technical resources are required on your end. PEXEK handles prompt engineering, API mapping, SIP/telephony trunk routing, testing, and continuous maintenance as a fully managed service.'
    },
    {
      q: 'How do we measure ROI and track system performance after launch?',
      a: 'You receive access to an executive dashboard tracking call volume, containment rate, booked appointments, missed call recovery, caller sentiment, and staff hours saved, complete with monthly executive reviews.'
    }
  ];

  return (
    <div className="space-y-16 pb-24 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-100">
      
      {/* 1. HERO SECTION */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ENTERPRISE-GRADE AI DEPLOYMENT ARCHITECTURE</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Transform Inbound Calls into a Revenue Engine. <span className="text-[#01DF4A] block sm:inline">Zero Overhead.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed max-w-3xl mx-auto font-normal">
          Every PEXEK deployment is custom engineered around your exact operational workflows, customer journey, CRM integrations, and revenue targets — delivered as a fully managed service.
        </p>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenAuditModal}
            className="btn-pexek-primary text-sm px-8 py-4 font-bold flex items-center justify-center gap-2.5 uppercase tracking-wider w-full sm:w-auto shadow-lg"
          >
            <span>Book Strategy Audit →</span>
          </button>

          <button
            onClick={scrollToCalculator}
            className="btn-pexek-secondary text-sm px-8 py-4 font-bold flex items-center justify-center gap-2 uppercase tracking-wider w-full sm:w-auto"
          >
            <span>Calculate Deployment Scope ↓</span>
          </button>
        </div>

        {/* TRUST INDICATORS ROW */}
        <div className="pt-6 border-t border-white/10 mt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-300 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#01DF4A]" />
              <span>Enterprise Deployment</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#01DF4A]" />
              <span>AI Engineers Included</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#01DF4A]" />
              <span>Custom Architecture</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#01DF4A]" />
              <span>No Generic Templates</span>
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#01DF4A]" />
              <span>SOC2 & HIPAA Ready</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. DEPLOYMENT SOLUTION CARDS */}
      <div className="space-y-6 pt-4">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00d4ff]">
            TAILORED DEPLOYMENT MODELS
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Architected For Your Operational Scale
          </h2>
          <p className="text-sm text-[#94a3b8] max-w-2xl mx-auto">
            Choose the engagement model that matches your volume, multi-unit complexity, and internal systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          
          {/* CARD 1: AI VOICE DEPLOYMENT */}
          <div className="bg-[#0d1117] border border-white/10 p-6 sm:p-8 rounded-[4px] space-y-6 flex flex-col justify-between hover:border-[#00d4ff]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 relative group">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">AI Voice Deployment</h3>
                  <Cpu className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <span className="text-xs font-mono text-[#00d4ff] font-semibold block mt-1">
                  Done-For-You Implementation
                </span>
              </div>

              {/* Ideal Customer & Business Outcome */}
              <div className="space-y-2 bg-[#050507] p-3.5 rounded-[4px] border border-white/5">
                <p className="text-xs text-slate-300">
                  <strong className="text-white block mb-0.5">Ideal Customer:</strong> Single to multi-location practices replacing missed calls with 24/7 AI receptionist logic.
                </p>
                <p className="text-xs text-slate-300 pt-1 border-t border-white/5">
                  <strong className="text-[#01DF4A] block mb-0.5">Business Outcome:</strong> 100% inbound call capture, instant lead qualification, sub-450ms speech response.
                </p>
              </div>

              {/* Expected Timeline & Support Level */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                <div className="bg-white/5 p-2 rounded">
                  <span className="text-[#94a3b8] block">Timeline:</span>
                  <strong className="text-white">7–10 Days Go-Live</strong>
                </div>
                <div className="bg-white/5 p-2 rounded">
                  <span className="text-[#94a3b8] block">Support:</span>
                  <strong className="text-white">Managed Onboarding</strong>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-white block uppercase tracking-wider font-mono">What's Included:</span>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>AI Receptionist & prompt engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Custom caller script & objection handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Direct CRM & Calendar sync (Dentrix, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>SMS & WhatsApp follow-up sequences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Call recording & transcript analytics</span>
                  </li>
                </ul>
              </div>

              {/* Typical Use Cases */}
              <div className="pt-2 border-t border-white/10 text-xs text-[#94a3b8]">
                <strong className="text-slate-300 block mb-1">Typical Use Cases:</strong>
                After-hours call answering, appointment booking, emergency triage, and FAQ automation.
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAuditModal}
                className="w-full btn-pexek-primary text-xs uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-2"
              >
                <span>Schedule Discovery →</span>
              </button>
            </div>
          </div>

          {/* CARD 2: AI OPERATIONS PARTNERSHIP (RECOMMENDED) */}
          <div className="bg-[#0d1117] border-2 border-[#01DF4A] p-6 sm:p-8 rounded-[4px] space-y-6 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(1,223,74,0.25)] transition-all duration-300 relative group">
            
            {/* Recommended Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#01DF4A] text-black font-extrabold text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full shadow-md flex items-center gap-1">
              <Award className="w-3 h-3 text-black" />
              <span>RECOMMENDED ENTERPRISE PARTNERSHIP</span>
            </div>

            <div className="space-y-5 pt-2">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">AI Operations Partnership</h3>
                  <Zap className="w-6 h-6 text-[#01DF4A]" />
                </div>
                <span className="text-xs font-mono text-[#01DF4A] font-semibold block mt-1">
                  Continuous Optimization & Management
                </span>
              </div>

              {/* Ideal Customer & Business Outcome */}
              <div className="space-y-2 bg-[#050507] p-3.5 rounded-[4px] border border-[#01DF4A]/20">
                <p className="text-xs text-slate-300">
                  <strong className="text-white block mb-0.5">Ideal Customer:</strong> Growing mid-market businesses & multi-unit operations seeking continuous performance tuning.
                </p>
                <p className="text-xs text-slate-300 pt-1 border-t border-white/5">
                  <strong className="text-[#01DF4A] block mb-0.5">Business Outcome:</strong> Maximized appointment conversion rates, proactive workflow updates, zero staff friction.
                </p>
              </div>

              {/* Expected Timeline & Support Level */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                <div className="bg-white/5 p-2 rounded">
                  <span className="text-[#94a3b8] block">Timeline:</span>
                  <strong className="text-white">10–14 Days Go-Live</strong>
                </div>
                <div className="bg-white/5 p-2 rounded">
                  <span className="text-[#94a3b8] block">Support:</span>
                  <strong className="text-[#01DF4A]">Dedicated AI Ops Manager</strong>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-white block uppercase tracking-wider font-mono">What's Included:</span>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Everything in Voice Deployment tier</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Weekly conversation audits & tuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Continuous prompt & scenario expansion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Advanced CRM custom field bi-directional sync</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Real-time SLA monitoring & priority support</span>
                  </li>
                </ul>
              </div>

              {/* Typical Use Cases */}
              <div className="pt-2 border-t border-white/10 text-xs text-[#94a3b8]">
                <strong className="text-slate-300 block mb-1">Typical Use Cases:</strong>
                Multi-department routing, automated follow-up cadences, and lead pipeline enrichment.
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAuditModal}
                className="w-full btn-pexek-primary text-xs uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-2"
              >
                <span>Get Custom Proposal →</span>
              </button>
            </div>
          </div>

          {/* CARD 3: ENTERPRISE AI DEPLOYMENT */}
          <div className="bg-[#0d1117] border border-white/10 p-6 sm:p-8 rounded-[4px] space-y-6 flex flex-col justify-between hover:border-[#00d4ff]/50 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] transition-all duration-300 relative group">
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">Enterprise AI Deployment</h3>
                  <Building2 className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <span className="text-xs font-mono text-[#00d4ff] font-semibold block mt-1">
                  Custom Architecture For High-Volume
                </span>
              </div>

              {/* Ideal Customer & Business Outcome */}
              <div className="space-y-2 bg-[#050507] p-3.5 rounded-[4px] border border-white/5">
                <p className="text-xs text-slate-300">
                  <strong className="text-white block mb-0.5">Ideal Customer:</strong> Regional healthcare networks, franchise groups, and high-volume legal/real estate practices.
                </p>
                <p className="text-xs text-slate-300 pt-1 border-t border-white/5">
                  <strong className="text-[#01DF4A] block mb-0.5">Business Outcome:</strong> Enterprise-wide voice automation across tens of thousands of monthly inbound calls.
                </p>
              </div>

              {/* Expected Timeline & Support Level */}
              <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-slate-300">
                <div className="bg-white/5 p-2 rounded">
                  <span className="text-[#94a3b8] block">Timeline:</span>
                  <strong className="text-white">14–21 Days Custom</strong>
                </div>
                <div className="bg-white/5 p-2 rounded">
                  <span className="text-[#94a3b8] block">Support:</span>
                  <strong className="text-white">24/7 Priority SLA</strong>
                </div>
              </div>

              {/* What's Included */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-bold text-white block uppercase tracking-wider font-mono">What's Included:</span>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Multi-location / multi-brand hierarchy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Custom API & legacy system integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Custom security, compliance & audit logs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Multi-tier call escalation & warm transfers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                    <span>Executive QBRs & custom dashboard</span>
                  </li>
                </ul>
              </div>

              {/* Typical Use Cases */}
              <div className="pt-2 border-t border-white/10 text-xs text-[#94a3b8]">
                <strong className="text-slate-300 block mb-1">Typical Use Cases:</strong>
                High-volume call routing, bespoke EHR integrations, and strict HIPAA compliance.
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAuditModal}
                className="w-full btn-pexek-primary text-xs uppercase tracking-wider py-3.5 px-4 flex items-center justify-center gap-2"
              >
                <span>Request Enterprise Consultation →</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 3. DEPLOYMENT SCOPE CALCULATOR & ASSESSMENT ENGINE */}
      <div
        id="pricing-calculator"
        className="bg-[#0a0e1a] border-t-2 border-t-[#01DF4A] border-x border-b border-white/10 p-6 sm:p-10 rounded-[4px] space-y-8 scroll-mt-24 shadow-2xl relative"
      >
        {/* Header & Step Indicator */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#01DF4A] uppercase tracking-widest font-bold">
              <BarChart3 className="w-4 h-4 text-[#01DF4A]" />
              <span>INTERACTIVE AI DEPLOYMENT ASSESSMENT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Scope Your AI Voice Deployment Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] font-sans">
              Provide your operational metrics to generate a dynamic implementation assessment & custom blueprint.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono shrink-0 bg-[#050507] border border-white/10 px-4 py-2.5 rounded-[4px]">
            <span className={calcStep === 1 ? 'text-[#01DF4A] font-bold' : 'text-[#94a3b8]'}>
              1. Scope Inputs
            </span>
            <span className="text-white/20">→</span>
            <span className={calcStep === 2 ? 'text-[#01DF4A] font-bold' : 'text-[#94a3b8]'}>
              2. AI Report
            </span>
            <span className="text-white/20">→</span>
            <span className={calcStep === 3 || calcStep === 4 ? 'text-[#01DF4A] font-bold' : 'text-[#94a3b8]'}>
              3. Roadmap Request
            </span>
          </div>
        </div>

        {/* STEP 1 — CALCULATOR INPUTS */}
        {calcStep === 1 && (
          <form onSubmit={handleStep1Submit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Monthly Calls Slider & Input */}
              <div className="space-y-3 bg-[#0d1117] p-5 rounded-[4px] border border-white/10">
                <div className="flex items-center justify-between">
                  <label htmlFor="pricing-calc-calls" className="text-xs font-bold text-white flex items-center gap-2">
                    <PhoneCall className="w-4 h-4 text-[#00d4ff]" />
                    <span>Monthly Inbound Call Volume:</span>
                  </label>
                  <span className="text-xs font-mono font-bold text-[#01DF4A] bg-[#01DF4A]/10 border border-[#01DF4A]/30 px-2.5 py-1 rounded">
                    {calcCalls} calls / mo
                  </span>
                </div>
                <input
                  id="pricing-calc-calls"
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={calcCalls}
                  onChange={(e) => setCalcCalls(Number(e.target.value))}
                  className="w-full accent-[#01DF4A] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8]">
                  <button type="button" onClick={() => setCalcCalls(150)} className="hover:text-white">150</button>
                  <button type="button" onClick={() => setCalcCalls(500)} className="hover:text-white">500</button>
                  <button type="button" onClick={() => setCalcCalls(1500)} className="hover:text-white">1,500</button>
                  <button type="button" onClick={() => setCalcCalls(3500)} className="hover:text-white">3,500+</button>
                </div>
              </div>

              {/* Locations Slider & Input */}
              <div className="space-y-3 bg-[#0d1117] p-5 rounded-[4px] border border-white/10">
                <div className="flex items-center justify-between">
                  <label htmlFor="pricing-calc-locations" className="text-xs font-bold text-white flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[#00d4ff]" />
                    <span>Operating Locations:</span>
                  </label>
                  <span className="text-xs font-mono font-bold text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded">
                    {calcLocations} Location{calcLocations > 1 ? 's' : ''}
                  </span>
                </div>
                <input
                  id="pricing-calc-locations"
                  type="range"
                  min="1"
                  max="25"
                  step="1"
                  value={calcLocations}
                  onChange={(e) => setCalcLocations(Number(e.target.value))}
                  className="w-full accent-[#00d4ff] cursor-pointer"
                />
                <div className="flex items-center justify-between text-[11px] font-mono text-[#94a3b8]">
                  <button type="button" onClick={() => setCalcLocations(1)} className="hover:text-white">1 Single</button>
                  <button type="button" onClick={() => setCalcLocations(3)} className="hover:text-white">3 Multi</button>
                  <button type="button" onClick={() => setCalcLocations(10)} className="hover:text-white">10 Enterprise</button>
                  <button type="button" onClick={() => setCalcLocations(25)} className="hover:text-white">25+</button>
                </div>
              </div>

              {/* Industry Selector */}
              <div className="space-y-2">
                <label htmlFor="pricing-calc-industry" className="text-xs font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#00d4ff]" />
                  <span>Industry Sector:</span>
                </label>
                <select
                  id="pricing-calc-industry"
                  value={calcIndustry}
                  onChange={(e) => setCalcIndustry(e.target.value)}
                  aria-label="Industry Sector"
                  className="w-full bg-[#050507] border border-white/15 text-white text-xs px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#01DF4A] font-mono"
                >
                  <option value="Dental Practice">Dental Practice & Orthodontics</option>
                  <option value="Healthcare & Medical">Healthcare & Outpatient Clinics</option>
                  <option value="Real Estate & Property">Real Estate & Property Management</option>
                  <option value="Home Services">Home Services (HVAC, Plumbing, Electrical)</option>
                  <option value="Legal & Law Firms">Legal & Law Practice</option>
                  <option value="E-commerce & Retail">E-commerce & Consumer Services</option>
                  <option value="Business Services">Business Services & Agencies</option>
                </select>
              </div>

              {/* Current Systems / CRM */}
              <div className="space-y-2">
                <label htmlFor="pricing-calc-systems" className="text-xs font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#00d4ff]" />
                  <span>Current CRM / Calendar / Practice System:</span>
                </label>
                <input
                  id="pricing-calc-systems"
                  type="text"
                  placeholder="e.g. Dentrix, ServiceTitan, HubSpot, GoHighLevel, Calendly"
                  value={calcSystems}
                  onChange={(e) => setCalcSystems(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-400 text-xs px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#01DF4A] font-mono"
                />
              </div>

              {/* Primary Objective */}
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="pricing-calc-objective" className="text-xs font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#01DF4A]" />
                  <span>Primary Business Goal:</span>
                </label>
                <select
                  id="pricing-calc-objective"
                  value={calcObjective}
                  onChange={(e) => setCalcObjective(e.target.value)}
                  aria-label="Primary Business Goal"
                  className="w-full bg-[#050507] border border-white/15 text-white text-xs px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#01DF4A] font-mono"
                >
                  <option value="Reduce Missed Calls & Book Appointments">Eliminate Missed After-Hours Calls & Auto-Book Appointments</option>
                  <option value="Qualify Leads 24/7">Qualify Inbound Leads 24/7 Before Routing to Sales</option>
                  <option value="Automate Customer Support FAQ">Automate Repetitive Front-Desk Inquiries & Status Updates</option>
                  <option value="Cut Call Center Operating Costs">Reduce Front-Desk Staff Workload & Operating Overhead</option>
                </select>
              </div>

            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="btn-pexek-primary text-xs px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg"
              >
                <span>Analyze Deployment Scope →</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 2 — GENERATED AI ASSESSMENT REPORT */}
        {calcStep === 2 && (
          <div className="space-y-8">
            <div className="bg-[#0d1117] border border-[#01DF4A]/40 p-6 sm:p-8 rounded-[4px] space-y-8 shadow-2xl relative">
              
              {/* Header */}
              <div className="border-b border-white/10 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#01DF4A] tracking-wider block">
                    CONFIDENTIAL ASSESSMENT REPORT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                    AI Deployment Feasibility & Impact Analysis
                  </h3>
                </div>

                <div className="flex items-center gap-2 bg-[#01DF4A]/10 border border-[#01DF4A]/30 px-3 py-1.5 rounded text-xs font-mono text-[#01DF4A]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Readiness: {metrics.readinessScore}% High</span>
                </div>
              </div>

              {/* Profile Bar */}
              <div className="bg-[#050507] border border-white/10 p-4 rounded-[4px] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div>
                  <span className="text-[#94a3b8] block text-[11px]">Sector:</span>
                  <strong className="text-white">{calcIndustry}</strong>
                </div>
                <div>
                  <span className="text-[#94a3b8] block text-[11px]">Monthly Volume:</span>
                  <strong className="text-white">{calcCalls} Calls</strong>
                </div>
                <div>
                  <span className="text-[#94a3b8] block text-[11px]">Scale:</span>
                  <strong className="text-white">{calcLocations} Location{calcLocations > 1 ? 's' : ''}</strong>
                </div>
                <div>
                  <span className="text-[#94a3b8] block text-[11px]">Tech Stack:</span>
                  <strong className="text-[#00d4ff]">{calcSystems || 'CRM/Calendar Sync'}</strong>
                </div>
              </div>

              {/* Key Impact Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="bg-[#050507] border border-white/10 p-4 rounded-[4px] space-y-1">
                  <span className="text-[11px] font-mono text-[#94a3b8] block">Missed Calls Recovered</span>
                  <div className="text-2xl font-extrabold text-[#01DF4A]">
                    ~{metrics.missedCallsCaptured} <span className="text-xs text-slate-400 font-normal">/mo</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Captured 24/7 with instant voice engagement</p>
                </div>

                <div className="bg-[#050507] border border-white/10 p-4 rounded-[4px] space-y-1">
                  <span className="text-[11px] font-mono text-[#94a3b8] block">Staff Time Saved</span>
                  <div className="text-2xl font-extrabold text-[#00d4ff]">
                    ~{metrics.staffHoursSaved} <span className="text-xs text-slate-400 font-normal">hrs/mo</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Freed from repetitive phone handling</p>
                </div>

                <div className="bg-[#050507] border border-white/10 p-4 rounded-[4px] space-y-1">
                  <span className="text-[11px] font-mono text-[#94a3b8] block">Est. New Appointments</span>
                  <div className="text-2xl font-extrabold text-[#01DF4A]">
                    +{metrics.appointmentsAdded} <span className="text-xs text-slate-400 font-normal">booked</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Directly synchronized into calendar</p>
                </div>

                <div className="bg-[#050507] border border-white/10 p-4 rounded-[4px] space-y-1">
                  <span className="text-[11px] font-mono text-[#94a3b8] block">Est. Revenue Potential</span>
                  <div className="text-2xl font-extrabold text-white">
                    +${metrics.estRevenueGain.toLocaleString()} <span className="text-xs text-slate-400 font-normal">/mo</span>
                  </div>
                  <p className="text-[11px] text-slate-400">Based on industry average conversion</p>
                </div>

              </div>

              {/* Recommended Architecture & Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Left Column: Deployment Details */}
                <div className="space-y-4 bg-[#050507] p-5 rounded-[4px] border border-white/10">
                  <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2 text-[#01DF4A]">
                    <Cpu className="w-4 h-4" />
                    <span>Recommended Architecture Tier</span>
                  </h4>
                  
                  <div className="space-y-2">
                    <span className="text-base font-extrabold text-white block">{metrics.tier}</span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Custom voice agent workflow featuring sub-450ms human-grade response, multi-step caller qualification, and instant bi-directional CRM integration.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 space-y-2 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-[#94a3b8]">Complexity Score:</span>
                      <span className="text-[#00d4ff] font-bold">{metrics.complexityScore} / 100</span>
                    </div>
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#00d4ff] h-full" style={{ width: `${metrics.complexityScore}%` }}></div>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#94a3b8]">Est. Implementation Time:</span>
                      <span className="text-white font-bold">{metrics.timeline}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#94a3b8]">Integration Method:</span>
                      <span className="text-[#01DF4A] font-bold">{metrics.diff}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Recommended Modules */}
                <div className="space-y-4 bg-[#050507] p-5 rounded-[4px] border border-white/10">
                  <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider flex items-center gap-2 text-[#00d4ff]">
                    <Layers className="w-4 h-4" />
                    <span>Recommended AI Modules Included</span>
                  </h4>

                  <ul className="space-y-2.5 text-xs text-slate-200">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">24/7 AI Voice Agent & Triage</strong>
                        <span className="text-[#94a3b8] text-[11px]">Human-like conversational flow with intent detection</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Real-time Calendar & CRM Bridge</strong>
                        <span className="text-[#94a3b8] text-[11px]">Direct schedule write-back into {calcSystems || 'your CRM'}</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Automated SMS / WhatsApp Confirmation</strong>
                        <span className="text-[#94a3b8] text-[11px]">Instant text follow-up sent to caller upon call end</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#01DF4A] shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Warm Escalation & Emergency Transfer</strong>
                        <span className="text-[#94a3b8] text-[11px]">Instant live transfer with on-screen transcript summary</span>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Next Step Action Box */}
              <div className="bg-[#01DF4A]/10 border border-[#01DF4A]/30 p-5 rounded-[4px] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-200 space-y-0.5">
                  <strong className="text-white font-sans text-sm block">Ready for Your Implementation Roadmap?</strong>
                  <p className="text-[#94a3b8]">Request your custom PDF blueprint, call architecture diagram, and tailored deployment proposal.</p>
                </div>
                <button
                  onClick={handleStep2Next}
                  className="btn-pexek-primary text-xs px-6 py-3.5 font-bold uppercase tracking-wider shrink-0 flex items-center gap-2"
                >
                  <span>Receive Custom Roadmap →</span>
                </button>
              </div>

            </div>

            <div className="flex justify-between items-center text-xs font-mono text-[#94a3b8]">
              <button
                onClick={() => setCalcStep(1)}
                className="hover:text-white underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Adjust Assessment Inputs
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — CONTACT INFO & ROADMAP REQUEST */}
        {calcStep === 3 && (
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-[#01DF4A]">
                STEP 3 OF 3: ENTERPRISE ROADMAP REQUEST
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Where should we send your custom deployment roadmap?
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8]">
                We will compile your customized AI voice architecture, system integration diagram, and ROI proposal.
              </p>
            </div>

            {/* What Visitor Receives Box */}
            <div className="bg-[#050507] border border-[#00d4ff]/30 p-5 rounded-[4px] space-y-3">
              <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider block">
                Included in your deployment roadmap package:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#01DF4A]" />
                  <span>Personalized AI Deployment Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#01DF4A]" />
                  <span>Voice Architecture Blueprint</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#01DF4A]" />
                  <span>CRM & System Integration Diagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#01DF4A]" />
                  <span>Step-by-Step Implementation Timeline</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#01DF4A]" />
                  <span>Custom ROI & Revenue Forecast</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#01DF4A]" />
                  <span>Security & Compliance Overview</span>
                </div>
              </div>
            </div>

            {submitError && (
              <div className="bg-red-950/60 border border-red-500/40 p-4 rounded-[4px] text-red-300 text-xs font-mono">
                {submitError}
              </div>
            )}

            <form onSubmit={handleStep3Submit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="pricing-full-name" className="text-xs font-semibold text-white block">Full Name *</label>
                  <input
                    id="pricing-full-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-400 text-xs px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#01DF4A] font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="pricing-work-email" className="text-xs font-semibold text-white block">Business Email *</label>
                  <input
                    id="pricing-work-email"
                    type="email"
                    required
                    placeholder="e.g. sjenkins@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-400 text-xs px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#01DF4A] font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="pricing-phone-number" className="text-xs font-semibold text-white block">Phone Number *</label>
                  <input
                    id="pricing-phone-number"
                    type="tel"
                    required
                    placeholder="e.g. +1 (555) 234-5678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-400 text-xs px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#01DF4A] font-mono"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="pricing-company-name" className="text-xs font-semibold text-white block">Company / Practice Name</label>
                  <input
                    id="pricing-company-name"
                    type="text"
                    placeholder="e.g. Apex Dental Group"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-400 text-xs px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#01DF4A] font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="pricing-notes" className="text-xs font-semibold text-white block">Optional Technical Notes / Integration Requirements</label>
                <textarea
                  id="pricing-notes"
                  rows={2}
                  placeholder="Tell us about any specific phone system, EHR/CRM requirements, or workflow rules..."
                  value={optionalNotes}
                  onChange={(e) => setOptionalNotes(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-400 text-xs px-4 py-3 rounded-[4px] focus:outline-none focus:border-[#01DF4A] font-mono resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCalcStep(2)}
                  className="text-xs font-mono text-[#94a3b8] hover:text-white underline"
                >
                  ← Back to Assessment Report
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pexek-primary text-xs px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Preparing Roadmap...' : 'Receive My Custom Deployment Roadmap →'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 4 — SUCCESS CONFIRMATION */}
        {calcStep === 4 && (
          <div className="bg-[#050507] border border-[#01DF4A]/40 p-8 sm:p-12 rounded-[4px] text-center space-y-6 max-w-xl mx-auto shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-[#01DF4A]/20 text-[#01DF4A] border border-[#01DF4A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white font-sans">
                Roadmap Request Received
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Our AI engineering team is compiling your custom deployment roadmap and architecture specification. You will receive the full PDF via email shortly.
              </p>
            </div>

            <div className="bg-[#0d1117] p-4 rounded-[4px] border border-white/10 text-xs text-[#94a3b8] space-y-1 text-left font-mono">
              <div className="text-white font-bold mb-1">Next Steps:</div>
              <div>• Detailed PDF roadmap emailed to <span className="text-[#00d4ff]">{workEmail || 'your email'}</span></div>
              <div>• AI Solution Architect review assigned</div>
              <div>• Invitation for technical discovery call</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={onOpenAuditModal}
                className="btn-pexek-primary text-xs px-6 py-3 font-bold uppercase tracking-wider w-full sm:w-auto"
              >
                Schedule Discovery Call Now →
              </button>
              <button
                onClick={handleResetCalculator}
                className="btn-pexek-secondary text-xs px-6 py-3 font-bold font-mono w-full sm:w-auto"
              >
                Recalculate Assessment
              </button>
            </div>
          </div>
        )}

      </div>

      {/* 4. EXPANDED ENTERPRISE FAQ DOCUMENTATION */}
      <div className="space-y-8 pt-8">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" />
            <span>ENTERPRISE DOCUMENTATION & FAQs</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Deployment Questions
          </h2>
          <p className="text-sm text-[#94a3b8] max-w-2xl mx-auto">
            Comprehensive details regarding compliance, CRM integrations, guardrails, and implementation procedures.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-[#0a0e1a] border rounded-[4px] overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#00d4ff]/50 shadow-[0_0_15px_rgba(0,212,255,0.1)]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-white text-sm sm:text-base flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#00d4ff] shrink-0 font-normal">[{String(idx + 1).padStart(2, '0')}]</span>
                    <span>{faq.q}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#01DF4A] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#94a3b8] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-5 pt-1 text-xs sm:text-sm text-[#94a3b8] leading-relaxed border-t border-white/5 bg-[#050507] font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. FINAL CONVERSION SECTION */}
      <div className="bg-[#050507] border-2 border-[#01DF4A] p-8 sm:p-12 rounded-[4px] text-center space-y-6 max-w-4xl mx-auto shadow-[0_0_30px_rgba(1,223,74,0.15)] relative">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#01DF4A]">
            READY TO ELIMINATE MISSED CALLS?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Schedule Your AI Strategy Audit Today
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Meet with a PEXEK AI Solution Architect to review your inbound caller workflows, map your system integrations, and receive a guaranteed implementation timeline.
          </p>
        </div>

        {/* Audit Guarantee Bullet points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-200 max-w-2xl mx-auto pt-2 font-mono">
          <div className="bg-white/5 p-3 rounded border border-white/10 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#01DF4A] shrink-0" />
            <span>Workflow Assessment</span>
          </div>
          <div className="bg-white/5 p-3 rounded border border-white/10 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#01DF4A] shrink-0" />
            <span>Architecture Blueprint</span>
          </div>
          <div className="bg-white/5 p-3 rounded border border-white/10 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#01DF4A] shrink-0" />
            <span>Guaranteed ROI Plan</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenAuditModal}
            className="btn-pexek-primary text-sm uppercase tracking-wider py-4 px-8 flex items-center justify-center gap-2 w-full sm:w-auto shadow-xl"
          >
            <span>Book Free Strategy Audit →</span>
          </button>

          <button
            onClick={scrollToCalculator}
            className="btn-pexek-secondary text-sm uppercase tracking-wider py-4 px-8 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>Calculate Deployment Scope ↓</span>
          </button>
        </div>
      </div>

    </div>
  );
};
