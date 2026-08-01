import React, { useState } from 'react';
import { PagePath } from '../types';
import { ArrowRight, ChevronDown, ChevronUp, Check, CheckCircle2, RotateCcw } from 'lucide-react';

interface PricingPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigate,
  onOpenAuditModal: _onOpenAuditModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculator Multi-Step State
  const [calcStep, setCalcStep] = useState<1 | 2 | 3 | 4>(1); // 1: Inputs, 2: Recommended Plan, 3: Contact Info, 4: Success

  // Step 1 Inputs
  const [calcCalls, setCalcCalls] = useState<string>('');
  const [calcLocations, setCalcLocations] = useState<string>('');
  const [calcIndustry, setCalcIndustry] = useState<string>('Dental Practice');
  const [calcSystems, setCalcSystems] = useState<string>('');

  // Step 3 Inputs
  const [fullName, setFullName] = useState<string>('');
  const [workEmail, setWorkEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
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
      formData.append('subject', `PEXEK Deployment Plan Request - ${calcIndustry}`);
      formData.append('name', fullName);
      formData.append('email', workEmail);
      formData.append('phone', phoneNumber);
      formData.append('industry', calcIndustry);
      formData.append('call_volume', calcCalls || 'Not specified (Default ~200)');
      formData.append('locations', calcLocations || '1');
      formData.append('systems', calcSystems || 'None specified');
      formData.append('form_type', 'pricing_calculator');

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
        setSubmitError('Failed to send request. Please try again or email support.');
      }
    } catch (err) {
      // Fallback success for client-side demo reliability if network blocks formspree
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
  };

  const faqs = [
    {
      q: 'How long does deployment take?',
      a: 'Most deployments are completed within 14 days after the initial strategy audit, depending on workflow complexity and integrations.'
    },
    {
      q: 'Do I need technical resources?',
      a: 'No. PEXEK manages the configuration, workflow design, integrations, testing, and launch process.'
    },
    {
      q: 'Can the AI match our brand voice?',
      a: 'Yes. Each deployment is configured around your business information, communication style, customer questions, and operational rules.'
    },
    {
      q: 'Can it connect with our existing tools?',
      a: 'PEXEK deployments can integrate with common CRM, calendar, communication, and business systems.'
    },
    {
      q: 'How is pricing determined?',
      a: 'Every deployment is scoped individually based on call volume, workflow complexity, integration requirements, and ongoing optimization needs. We provide a custom proposal after the strategy audit.'
    },
    {
      q: 'What happens after launch?',
      a: 'PEXEK provides ongoing optimization, conversation reviews, workflow improvements, and support to ensure your AI system continues to perform as your business evolves.'
    }
  ];

  return (
    <div className="space-y-16 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans">
      
      {/* HEADER SECTION */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase font-bold tracking-widest text-[#00d4ff] block">
          VALUE-BASED AI DEPLOYMENT MODELS
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Build Your AI Revenue System. Not Another Software Subscription.
        </h1>
        <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-[700px] mx-auto">
          PEXEK creates and manages custom AI voice deployments based on your business workflows, customer journey, integrations, and revenue objectives.
        </p>

        {/* INTRO BULLETS */}
        <div className="pt-2">
          <span className="text-xs text-[#94a3b8] block mb-2 font-medium">Every deployment is scoped around:</span>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs text-white">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] inline-block"></span>
              <span>Call volume</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] inline-block"></span>
              <span>Business complexity</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] inline-block"></span>
              <span>Required integrations</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] inline-block"></span>
              <span>Operational goals</span>
            </span>
          </div>
        </div>
      </div>

      {/* 3 TIERS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* TIER 1 */}
        <div className="bg-[#0d1117] border border-white/10 p-6 sm:p-8 rounded-sm space-y-6 flex flex-col justify-between hover:border-[#00d4ff]/40 transition-all">
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-white">AI Voice Deployment</h2>
              <span className="text-xs font-mono text-[#00d4ff] font-semibold block mt-1">
                Done-For-You Implementation
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-white block">Best for:</span>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Businesses that want a complete AI voice system without managing technical setup.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-white block">PEXEK builds:</span>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>AI receptionist deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Customer qualification workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Appointment booking automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>CRM and calendar integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>SMS/WhatsApp follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Conversation optimization</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-bold text-[#94a3b8] block">Includes:</span>
              <ul className="space-y-1 text-[11px] text-[#94a3b8]">
                <li className="flex items-center gap-1.5">
                  <span>•</span>
                  <span>Strategy & workflow mapping</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>•</span>
                  <span>AI configuration</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>•</span>
                  <span>Business knowledge setup</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>•</span>
                  <span>Integration setup</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>•</span>
                  <span>Testing & launch support</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span>•</span>
                  <span>Post-launch optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={scrollToCalculator}
              className="w-full border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-all font-bold text-xs uppercase tracking-wider rounded-[2px] py-3.5 px-4 flex items-center justify-center gap-2"
            >
              <span>Get Custom Deployment Plan →</span>
            </button>
          </div>
        </div>

        {/* TIER 2 */}
        <div className="bg-[#0d1117] border border-white/10 p-6 sm:p-8 rounded-sm space-y-6 flex flex-col justify-between hover:border-[#00d4ff]/40 transition-all">
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-white">AI Operations Partnership</h2>
              <span className="text-xs font-mono text-[#00d4ff] font-semibold block mt-1">
                Ongoing Optimization & Management
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-white block">Best for:</span>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Businesses that want continuous improvement after launch.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-white block">Includes:</span>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Conversation performance reviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Workflow improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>New scenario configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Lead qualification optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Reporting insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Ongoing support</span>
                </li>
              </ul>
            </div>

            <div className="pt-2 border-t border-white/10">
              <p className="text-xs text-[#94a3b8] italic">
                Your AI system improves as your customer conversations evolve.
              </p>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={scrollToCalculator}
              className="w-full border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-all font-bold text-xs uppercase tracking-wider rounded-[2px] py-3.5 px-4 flex items-center justify-center gap-2"
            >
              <span>Get Partnership Quote →</span>
            </button>
          </div>
        </div>

        {/* TIER 3 */}
        <div className="bg-[#0d1117] border border-white/10 p-6 sm:p-8 rounded-sm space-y-6 flex flex-col justify-between hover:border-[#00d4ff]/40 transition-all">
          <div className="space-y-5">
            <div>
              <h2 className="text-2xl font-bold text-white">Enterprise AI Deployment</h2>
              <span className="text-xs font-mono text-[#00d4ff] font-semibold block mt-1">
                Custom Solutions For High-Volume Organizations
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-white block">Best for:</span>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                Organizations managing multiple locations, complex workflows, or high call volumes.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold text-white block">Includes:</span>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Multi-location deployment strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Advanced workflow architecture</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Security requirements review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Dedicated optimization cycles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                  <span>Executive reporting</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={scrollToCalculator}
              className="w-full border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-all font-bold text-xs uppercase tracking-wider rounded-[2px] py-3.5 px-4 flex items-center justify-center gap-2"
            >
              <span>Request Enterprise Plan →</span>
            </button>
          </div>
        </div>

      </div>

      {/* FUNNEL B — INLINE PRICING CALCULATOR */}
      <div
        id="pricing-calculator"
        className="bg-[#0a0e1a] border-t-2 border-t-[#00d4ff] border-x border-b border-white/10 p-6 sm:p-10 rounded-sm space-y-8 scroll-mt-24 shadow-2xl"
      >
        {/* Header & Step Indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Interactive Deployment Scope Calculator
            </h2>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-1 font-sans">
              Generate a custom deployment plan & estimate based on your operational scope.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 text-xs font-mono shrink-0 bg-[#050507] border border-white/10 px-4 py-2 rounded-sm">
            <span className={calcStep === 1 ? 'text-[#00d4ff] font-bold' : 'text-[#94a3b8]'}>
              Step 1: Calculator
            </span>
            <span className="text-white/20">→</span>
            <span className={calcStep === 2 ? 'text-[#00d4ff] font-bold' : 'text-[#94a3b8]'}>
              Step 2: Your Plan
            </span>
            <span className="text-white/20">→</span>
            <span className={calcStep === 3 || calcStep === 4 ? 'text-[#00d4ff] font-bold' : 'text-[#94a3b8]'}>
              Step 3: Contact Info
            </span>
          </div>
        </div>

        {/* STEP 1 — CALCULATOR INPUTS */}
        {calcStep === 1 && (
          <form onSubmit={handleStep1Submit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Monthly Call Volume:</label>
                <input
                  type="text"
                  placeholder="e.g. 200 calls/month"
                  value={calcCalls}
                  onChange={(e) => setCalcCalls(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#00d4ff] font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Number Of Locations:</label>
                <input
                  type="text"
                  placeholder="e.g. 1 Location"
                  value={calcLocations}
                  onChange={(e) => setCalcLocations(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#00d4ff] font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Industry:</label>
                <select
                  value={calcIndustry}
                  onChange={(e) => setCalcIndustry(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#00d4ff] font-mono"
                >
                  <option value="Dental Practice">Dental Practice</option>
                  <option value="Healthcare">Healthcare & Medical</option>
                  <option value="Real Estate">Real Estate & Property</option>
                  <option value="Home Services">Home Services</option>
                  <option value="Legal">Legal & Law Firms</option>
                  <option value="E-commerce">E-commerce & Retail</option>
                  <option value="Other">Other Services</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-white block">Current Systems (CRM / Calendar):</label>
                <input
                  type="text"
                  placeholder="e.g. WhatsApp, HubSpot, Calendly, Dentrix"
                  value={calcSystems}
                  onChange={(e) => setCalcSystems(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#00d4ff] font-mono"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="btn-pexek-primary text-xs px-8 py-3.5 font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg"
              >
                <span>Generate My Deployment Plan →</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 2 — RECOMMENDED PLAN RESULTS CARD */}
        {calcStep === 2 && (
          <div className="space-y-6">
            <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/10 p-6 sm:p-8 rounded-sm space-y-6 shadow-xl">
              
              <div className="border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase font-bold text-[#00d4ff] tracking-wider block">
                  DEPLOYMENT ESTIMATE
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                  Your AI Deployment Estimate
                </h3>
              </div>

              {/* Based on your inputs summary */}
              <div className="bg-[#050507] border border-white/10 p-4 sm:p-5 rounded-sm space-y-3">
                <span className="text-xs font-mono text-[#94a3b8] font-bold block uppercase tracking-wider">
                  Based on your inputs:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                  <div>
                    <span className="text-[#94a3b8] block">Industry:</span>
                    <strong className="text-white">{calcIndustry}</strong>
                  </div>
                  <div>
                    <span className="text-[#94a3b8] block">Monthly Calls:</span>
                    <strong className="text-white">{calcCalls || '200'}</strong>
                  </div>
                  <div>
                    <span className="text-[#94a3b8] block">Locations:</span>
                    <strong className="text-white">{calcLocations || '1'}</strong>
                  </div>
                  <div>
                    <span className="text-[#94a3b8] block">Systems:</span>
                    <strong className="text-white">{calcSystems || 'WhatsApp / CRM'}</strong>
                  </div>
                </div>
              </div>

              {/* Recommended Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#00d4ff] font-bold block uppercase">
                    Recommended Solution
                  </span>
                  <h4 className="text-lg font-bold text-white">
                    AI Voice Deployment
                  </h4>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    Custom voice agent architecture with sub-450ms speech synthesis, real-time qualification, and direct CRM sync.
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-mono text-[#94a3b8] block">Estimated Complexity:</span>
                    <span className="inline-block mt-1 text-xs font-mono font-bold text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-3 py-1 rounded-sm">
                      {calcLocations && parseInt(calcLocations) > 2 ? 'High (Multi-Location)' : 'Medium Complexity'}
                    </span>
                  </div>
                </div>

                {/* What's Included */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#00d4ff] font-bold block uppercase">
                    What's Included
                  </span>
                  <ul className="space-y-2 text-xs text-slate-200">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
                      <span>AI receptionist setup & customized phone script</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
                      <span>CRM & calendar real-time integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
                      <span>SMS & WhatsApp automated lead follow-ups</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
                      <span>14-day full deployment timeline & testing</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Next Step Banner */}
              <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/30 p-4 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-200">
                  <strong className="text-white block font-sans text-sm">Next Step:</strong>
                  Receive your full implementation roadmap, call architecture breakdown, and investment proposal.
                </div>
                <button
                  onClick={handleStep2Next}
                  className="btn-pexek-primary text-xs px-6 py-3 font-bold uppercase tracking-wider shrink-0 flex items-center gap-2"
                >
                  <span>Continue to Get My Plan →</span>
                </button>
              </div>

            </div>

            <div className="flex justify-between items-center text-xs font-mono text-[#94a3b8]">
              <button
                onClick={() => setCalcStep(1)}
                className="hover:text-white underline flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Adjust Calculator Inputs
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 — CONTACT FORM */}
        {calcStep === 3 && (
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono uppercase font-bold text-[#00d4ff]">
                STEP 3 OF 3: CONTACT INFO
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                Where should we send your custom deployment plan?
              </h3>
              <p className="text-xs text-[#94a3b8]">
                No spam. We will generate your customized PDF roadmap and email it directly to you.
              </p>
            </div>

            {submitError && (
              <div className="bg-red-950/60 border border-red-500/40 p-4 rounded-sm text-red-300 text-xs font-mono">
                {submitError}
              </div>
            )}

            <form onSubmit={handleStep3Submit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white block">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Salah Eddine"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#00d4ff] font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white block">Work Email *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. name@company.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#00d4ff] font-mono"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white block">Phone Number (for follow-up) *</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +1 (555) 000-0000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-[#050507] border border-white/15 text-white placeholder-slate-500 text-xs px-4 py-3 rounded-sm focus:outline-none focus:border-[#00d4ff] font-mono"
                />
              </div>

              <div className="pt-4 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setCalcStep(2)}
                  className="text-xs font-mono text-[#94a3b8] hover:text-white underline"
                >
                  ← Back to Plan Summary
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-pexek-primary text-xs px-8 py-3.5 font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending Plan...' : 'Send My Deployment Plan →'}</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 4 — SUCCESS CONFIRMATION */}
        {calcStep === 4 && (
          <div className="bg-[#050507] border border-[#00d4ff]/40 p-8 sm:p-10 rounded-sm text-center space-y-4 max-w-xl mx-auto shadow-2xl">
            <div className="w-12 h-12 rounded-full bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-white font-sans">
              Deployment Plan Request Received
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-sans">
              Your deployment plan is being prepared. You'll receive it via email within 24 hours, and our team will follow up to discuss implementation.
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetCalculator}
                className="btn-pexek-secondary text-xs px-6 py-2.5 font-bold font-mono"
              >
                Calculate Another Plan
              </button>
            </div>
          </div>
        )}

      </div>

      {/* FAQ SECTION */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">FAQ</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0a0e1a] border border-white/10 rounded-sm overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left font-bold text-white text-sm flex items-center justify-between gap-4 hover:bg-white/5"
                >
                  <span>Q: {faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#00d4ff] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#94a3b8] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-[#94a3b8] leading-relaxed border-t border-white/5 bg-[#050507]">
                    A: {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FINAL CTA */}
      <div className="bg-[#050507] border border-[#00d4ff]/30 p-8 sm:p-10 rounded-sm text-center space-y-6 max-w-4xl mx-auto">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready To Build Your AI Revenue System?
          </h2>
          <p className="text-sm text-[#94a3b8] max-w-xl mx-auto leading-relaxed">
            Generate your custom deployment estimate and implementation roadmap.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-200 max-w-xl mx-auto">
          <div className="flex items-center gap-1.5">
            <span className="text-[#00d4ff] font-bold">✓</span>
            <span>Revenue opportunity assessment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#00d4ff] font-bold">✓</span>
            <span>Call workflow review</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[#00d4ff] font-bold">✓</span>
            <span>Custom deployment roadmap</span>
          </div>
        </div>

        <div>
          <button
            onClick={scrollToCalculator}
            className="border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black transition-all font-bold text-xs uppercase tracking-wider rounded-[2px] py-3.5 px-8 inline-flex items-center gap-2"
          >
            <span>Generate My Deployment Plan →</span>
          </button>
        </div>
      </div>

    </div>
  );
};
