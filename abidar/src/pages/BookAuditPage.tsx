import React, { useState } from 'react';
import { PagePath, AuditFormData } from '../types';
import { INDUSTRIES } from '../data/mockData';
import { 
  Calendar, Phone, Play, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft,
  Clock, Volume2, Calculator, DollarSign, Check, HelpCircle, ChevronDown, ChevronUp,
  User, Building, Mail, AlertCircle, Sparkles, Layers, FileText, Settings, Shield
} from 'lucide-react';

interface BookAuditPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenDemoModal: (industryId?: string) => void;
}

export const BookAuditPage: React.FC<BookAuditPageProps> = ({
  onNavigate,
  onOpenDemoModal,
}) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'demo'>('audit');

  // EDIT 3: Dynamic Revenue Leak Calculator State
  const [calcIndustry, setCalcIndustry] = useState<string>('Dental Practice');
  const [calcMonthlyCalls, setCalcMonthlyCalls] = useState<number>(400);
  const [calcAvgValue, setCalcAvgValue] = useState<number>(350);

  // Calculation Logic
  const calculateRecoverableRevenue = () => {
    const missed = calcMonthlyCalls * 0.45;
    const recovered = missed * 0.80;
    const converted = recovered * 0.25;
    const revenue = Math.round(converted * calcAvgValue);
    return revenue;
  };

  const recoverableRevenue = calculateRecoverableRevenue();

  // EDIT 4: Progressive Multi-Step Form State (Step 1, 2, 3)
  const [formStep, setFormStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: 'Dental Practice',
    monthlyCalls: '300',
    biggestChallenge: 'Too many missed calls',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '10:00 AM EST'
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 1) {
      if (!formData.fullName || !formData.companyName || !formData.email || !formData.phone) {
        return;
      }
      setFormStep(2);
    } else if (formStep === 2) {
      setFormStep(3);
    } else if (formStep === 3) {
      setSubmitted(true);
    }
  };

  const challengeOptions = [
    { id: 'Too many missed calls', label: 'Too many missed calls' },
    { id: 'Staff overloaded', label: 'Staff overloaded' },
    { id: 'Slow lead response', label: 'Slow lead response' },
    { id: 'Too many no-shows', label: 'Too many no-shows' },
    { id: 'Need appointment automation', label: 'Need appointment automation' },
  ];

  // EDIT 8: FAQ Items
  const auditFaqs = [
    {
      question: "How long is the strategy session?",
      answer: "The AI strategy session is a focused 30-minute session. We review your current call flows, identify revenue leaks, and design a custom deployment blueprint."
    },
    {
      question: "Is the strategy session free?",
      answer: "Yes. The strategy session is completely free with no obligation to purchase."
    },
    {
      question: "Will I receive a proposal?",
      answer: "Yes. Within 48 hours of the strategy session, you'll receive a custom deployment roadmap with scope, timeline, and investment options."
    },
    {
      question: "What if I'm not ready to deploy yet?",
      answer: "No problem. The strategy session is designed to give you clarity. You can deploy immediately, in 3 months, or never — the blueprint is yours to keep."
    },
    {
      question: "Which industries do you support?",
      answer: "We specialize in dental practices, healthcare, real estate, legal firms, home services, and e-commerce. Custom verticals are available via direct consultation."
    }
  ];

  return (
    <div className="space-y-12 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      
      {/* EDIT 1 & 2: Page Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#00d4ff]">
          PEXEK STRATEGY AUDIT
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans">
          Let's Design Your AI Voice Deployment
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
          30-minute AI Strategy Session. We'll identify revenue leaks, map your workflows, and design a deployment roadmap tailored to your business.
        </p>

        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-[#0a0e1a] border border-[#00d4ff]/30 px-3.5 py-1.5 rounded-none text-xs font-mono text-[#00d4ff]">
          <span className="w-2 h-2 bg-[#00d4ff] animate-pulse" />
          <span>Custom deployment blueprint included • No sales pressure</span>
        </div>
      </div>

      {/* Main Mode Switcher */}
      <div className="flex justify-center border-b border-white/10 pb-4">
        <div className="bg-[#0a0e1a] border border-white/10 p-1 rounded-none inline-flex gap-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab('audit')}
            className={`px-5 py-2.5 rounded-none font-bold transition-all flex items-center gap-2 ${
              activeTab === 'audit'
                ? 'bg-[#00d4ff] text-black shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Book Strategy Session</span>
          </button>

          <button
            onClick={() => setActiveTab('demo')}
            className={`px-5 py-2.5 rounded-none font-bold transition-all flex items-center gap-2 ${
              activeTab === 'demo'
                ? 'bg-[#00d4ff] text-black shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Volume2 className="w-4 h-4" />
            <span>Listen to Live Demo Calls</span>
          </button>
        </div>
      </div>

      {activeTab === 'audit' && (
        <div className="space-y-12">
          
          {/* EDIT 3: Interactive Revenue Leak Calculator Section */}
          <div className="bg-[#0a0e1a] border border-[#00d4ff]/40 p-6 sm:p-8 rounded-none space-y-6 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-[#00d4ff] font-mono text-xs uppercase font-bold">
                <Calculator className="w-4 h-4" />
                <span>Dynamic Revenue Leak Calculator</span>
              </div>
              <span className="text-xs font-mono text-slate-400">
                Formula based on industry benchmarks
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              
              {/* Calculator Inputs */}
              <div className="lg:col-span-2 space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Input 1: Industry */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Industry</label>
                    <select
                      value={calcIndustry}
                      onChange={(e) => {
                        setCalcIndustry(e.target.value);
                        setFormData(prev => ({ ...prev, industry: e.target.value }));
                      }}
                      className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2 text-xs text-white focus:border-[#00d4ff] focus:outline-none font-mono"
                    >
                      <option>Dental Practice</option>
                      <option>Healthcare</option>
                      <option>Real Estate</option>
                      <option>Home Services</option>
                      <option>Legal</option>
                      <option>E-commerce</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Input 2: Call Volume */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Monthly Calls: <span className="text-[#00d4ff] font-bold">{calcMonthlyCalls}</span>
                    </label>
                    <input
                      type="number"
                      min={10}
                      max={10000}
                      step={25}
                      value={calcMonthlyCalls}
                      onChange={(e) => setCalcMonthlyCalls(Number(e.target.value))}
                      className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2 text-xs text-white focus:border-[#00d4ff] focus:outline-none font-mono"
                    />
                  </div>

                  {/* Input 3: Avg Value */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">
                      Avg Customer Value: <span className="text-[#00d4ff] font-bold">${calcAvgValue}</span>
                    </label>
                    <div className="relative flex items-center">
                      <span className="absolute left-3 text-xs font-mono text-slate-400">$</span>
                      <input
                        type="number"
                        min={10}
                        max={50000}
                        step={25}
                        value={calcAvgValue}
                        onChange={(e) => setCalcAvgValue(Number(e.target.value))}
                        className="w-full bg-[#050507] border border-white/15 rounded-none pl-7 pr-3 py-2 text-xs text-white focus:border-[#00d4ff] focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>

                {/* EDIT 3: Disclaimer */}
                <p className="text-[11px] text-slate-400 font-sans italic">
                  Estimate based on selected industry benchmarks and your inputs. Actual results vary by business.
                </p>

              </div>

              {/* Calculator Output Display */}
              <div className="bg-[#050507] border border-[#00d4ff]/40 p-5 rounded-none text-center space-y-2 font-mono">
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider block">
                  Estimated Recoverable Revenue
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#00d4ff]">
                  ${recoverableRevenue.toLocaleString()}/month
                </div>
                <p className="text-[10px] text-slate-400">
                  Based on <strong className="text-slate-200">{calcIndustry}</strong> benchmarks for unanswered call rates and average conversion data.
                </p>
              </div>

            </div>
          </div>

          {/* TWO COLUMN LAYOUT (Left: "What You'll Leave With" + Timeline | Right: Multi-Step Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (5 cols): "What You'll Leave With" + Timeline */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* EDIT 9: "What You'll Leave With" Card */}
              <div className="bg-[#0d1117] border-l-2 border-[#00d4ff] border-y border-r border-white/10 p-6 sm:p-7 rounded-none space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white font-sans uppercase">
                    What You'll Leave With
                  </h3>
                  <p className="text-xs text-[#94a3b8] font-sans mt-0.5">
                    Every audit delivers tangible outputs — not a pitch deck.
                  </p>
                </div>

                <ul className="space-y-2.5 pt-1">
                  {[
                    "Revenue leak assessment",
                    "AI workflow recommendations",
                    "Deployment roadmap",
                    "Integration recommendations",
                    "Estimated implementation timeline"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#94a3b8]">
                      <Check className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* EDIT 5: "What Happens Next" — Simplified Timeline */}
              <div className="bg-[#0a0e1a] border border-white/10 p-6 sm:p-7 rounded-none space-y-6">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="text-base font-bold text-white font-sans uppercase">
                    What Happens Next
                  </h3>
                  <p className="text-xs text-[#94a3b8] font-sans">
                    Clear process. Fast execution. Zero technical overhead.
                  </p>
                </div>

                {/* Vertical Timeline with Cyan Connecting Line */}
                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#00d4ff]/40">
                  
                  {/* Step 1 */}
                  <div className="relative space-y-1">
                    <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-[#00d4ff] border-2 border-[#0a0e1a]" />
                    <span className="text-[11px] font-mono text-[#00d4ff] font-bold block">STEP 1</span>
                    <h4 className="text-xs font-bold text-white font-sans">30-Minute Strategy Session</h4>
                    <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                      Review your current customer call workflow.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative space-y-1">
                    <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-[#00d4ff] border-2 border-[#0a0e1a]" />
                    <span className="text-[11px] font-mono text-[#00d4ff] font-bold block">STEP 2</span>
                    <h4 className="text-xs font-bold text-white font-sans">Workflow Design</h4>
                    <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                      Map automation opportunities and integrations.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative space-y-1">
                    <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-[#00d4ff] border-2 border-[#0a0e1a]" />
                    <span className="text-[11px] font-mono text-[#00d4ff] font-bold block">STEP 3</span>
                    <h4 className="text-xs font-bold text-white font-sans">Deployment Blueprint</h4>
                    <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                      Receive your customized implementation plan.
                    </p>
                  </div>

                  {/* Step 4 */}
                  <div className="relative space-y-1">
                    <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-[#00d4ff] border-2 border-[#0a0e1a]" />
                    <span className="text-[11px] font-mono text-[#00d4ff] font-bold block">STEP 4</span>
                    <h4 className="text-xs font-bold text-white font-sans">Proposal</h4>
                    <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                      Clear scope, timeline, and investment.
                    </p>
                  </div>

                  {/* Step 5 */}
                  <div className="relative space-y-1">
                    <div className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-[#00d4ff] border-2 border-[#0a0e1a]" />
                    <span className="text-[11px] font-mono text-[#00d4ff] font-bold block">STEP 5</span>
                    <h4 className="text-xs font-bold text-white font-sans">Deployment</h4>
                    <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                      Go live in approximately 14 days.
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Column (7 cols): Multi-Step Form */}
            <div className="lg:col-span-7 bg-[#0d1117] border border-white/10 p-6 sm:p-8 rounded-none space-y-6">
              
              {/* EDIT 6: Social Proof Line (Above Form) */}
              <div className="text-center pb-2 border-b border-white/10">
                <p className="text-xs text-[#94a3b8] italic font-sans">
                  Designed for businesses that rely on phone conversations to generate revenue.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleNextStep} className="space-y-6">
                  
                  {/* Step Progress Bar & Indicators */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#94a3b8]">
                      <span>Step {formStep} of 3</span>
                      <span className="text-[#00d4ff] font-bold">
                        {formStep === 1 && "Contact Information"}
                        {formStep === 2 && "Business Context"}
                        {formStep === 3 && "Schedule Session"}
                      </span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-1 bg-white/10 rounded-none overflow-hidden">
                      <div 
                        className="h-full bg-[#00d4ff] transition-all duration-300"
                        style={{ width: `${(formStep / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* STEP 1: CONTACT INFO */}
                  {formStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="border-b border-white/10 pb-2">
                        <h2 className="text-base font-bold text-white font-sans uppercase">
                          Contact Details
                        </h2>
                        <p className="text-xs text-[#94a3b8]">
                          Where should we send your session details and deployment blueprint?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Full Name */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2.5 text-xs text-white focus:border-[#00d4ff] focus:outline-none"
                          />
                        </div>

                        {/* Business Name */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1">Business Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Acme Practice or Realty"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2.5 text-xs text-white focus:border-[#00d4ff] focus:outline-none"
                          />
                        </div>

                        {/* Work Email */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@acme.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2.5 text-xs text-white focus:border-[#00d4ff] focus:outline-none"
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1">
                            Phone Number (for SMS & WhatsApp confirmation) *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2.5 text-xs text-white focus:border-[#00d4ff] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full bg-[#00d4ff] hover:bg-[#00c0eb] text-black font-mono font-bold text-xs py-3.5 px-6 rounded-none uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                        >
                          <span>Next →</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: BUSINESS CONTEXT */}
                  {formStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="border-b border-white/10 pb-2">
                        <h2 className="text-base font-bold text-white font-sans uppercase">
                          Business Context
                        </h2>
                        <p className="text-xs text-[#94a3b8]">
                          Help us prepare tailored call flow recommendations before we meet.
                        </p>
                      </div>

                      <div className="space-y-4">
                        {/* Industry Dropdown */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1">Industry *</label>
                          <select
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                            className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2.5 text-xs text-white focus:border-[#00d4ff] focus:outline-none"
                          >
                            <option>Dental Practice</option>
                            <option>Healthcare</option>
                            <option>Real Estate</option>
                            <option>Home Services</option>
                            <option>Legal</option>
                            <option>E-commerce</option>
                            <option>Other</option>
                          </select>
                        </div>

                        {/* Monthly Call Volume Input */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1">Monthly Call Volume *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. 300"
                            value={formData.monthlyCalls}
                            onChange={(e) => setFormData({ ...formData, monthlyCalls: e.target.value })}
                            className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2.5 text-xs text-white focus:border-[#00d4ff] focus:outline-none font-mono"
                          />
                        </div>

                        {/* Biggest Call Challenge (Button Selection) */}
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-2">
                            Biggest Call Challenge *
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {challengeOptions.map((opt) => {
                              const isSelected = formData.biggestChallenge === opt.id;
                              return (
                                <button
                                  type="button"
                                  key={opt.id}
                                  onClick={() => setFormData({ ...formData, biggestChallenge: opt.id })}
                                  className={`p-3 text-left border text-xs font-mono rounded-none transition-all flex items-center justify-between gap-2 ${
                                    isSelected
                                      ? 'bg-[#00d4ff]/10 border-[#00d4ff] text-[#00d4ff] font-bold'
                                      : 'bg-[#050507] border-white/15 text-slate-300 hover:border-white/30'
                                  }`}
                                >
                                  <span>{opt.label}</span>
                                  {isSelected && <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setFormStep(1)}
                          className="w-1/3 border border-white/20 text-white font-mono font-bold text-xs py-3.5 px-4 rounded-none uppercase tracking-wider transition-all hover:bg-white/5 flex items-center justify-center gap-1.5"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back</span>
                        </button>
                        <button
                          type="submit"
                          className="w-2/3 bg-[#00d4ff] hover:bg-[#00c0eb] text-black font-mono font-bold text-xs py-3.5 px-6 rounded-none uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                        >
                          <span>Next →</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: SCHEDULE */}
                  {formStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="border-b border-white/10 pb-2">
                        <h2 className="text-base font-bold text-white font-sans uppercase">
                          Schedule Strategy Session
                        </h2>
                        <p className="text-xs text-[#94a3b8]">
                          Select your preferred time slot for your 30-minute 1-on-1 session.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1">Preferred Date *</label>
                          <input
                            type="date"
                            required
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2.5 text-xs text-white focus:border-[#00d4ff] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-mono text-slate-300 mb-1">Preferred Time *</label>
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                            className="w-full bg-[#050507] border border-white/15 rounded-none px-3 py-2.5 text-xs text-white focus:border-[#00d4ff] focus:outline-none"
                          >
                            <option>09:00 AM EST</option>
                            <option>10:00 AM EST</option>
                            <option>11:30 AM EST</option>
                            <option>01:30 PM EST</option>
                            <option>03:00 PM EST</option>
                            <option>04:30 PM EST</option>
                          </select>
                        </div>
                      </div>

                      {/* Summary box before submitting */}
                      <div className="bg-[#050507] p-3 border border-white/10 text-xs font-mono space-y-1 text-slate-300">
                        <p className="text-[#00d4ff] font-bold">Booking Summary:</p>
                        <p>{formData.fullName} • {formData.companyName}</p>
                        <p>{formData.industry} • {formData.monthlyCalls} calls/mo</p>
                        <p>Challenge: {formData.biggestChallenge}</p>
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setFormStep(2)}
                          className="w-1/3 border border-white/20 text-white font-mono font-bold text-xs py-3.5 px-4 rounded-none uppercase tracking-wider transition-all hover:bg-white/5 flex items-center justify-center gap-1.5"
                        >
                          <ArrowLeft className="w-3.5 h-3.5" />
                          <span>Back</span>
                        </button>
                        
                        {/* EDIT 7: Final CTA Button Text */}
                        <button
                          type="submit"
                          className="w-2/3 bg-[#00d4ff] hover:bg-[#00c0eb] text-black font-mono font-bold text-xs py-3.5 px-6 rounded-none uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl"
                        >
                          <span>Get My Deployment Blueprint →</span>
                        </button>
                      </div>

                      {/* EDIT 10: Trust Bullets Below Button */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#94a3b8] pt-3 border-t border-white/10">
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#00d4ff] shrink-0" />
                          <span>30-minute AI strategy session</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#00d4ff] shrink-0" />
                          <span>Revenue leak assessment</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#00d4ff] shrink-0" />
                          <span>Personalized deployment blueprint</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#00d4ff] shrink-0" />
                          <span>Integration recommendations</span>
                        </div>
                      </div>

                    </div>
                  )}

                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#00d4ff]/10 border border-[#00d4ff] rounded-none flex items-center justify-center mx-auto text-[#00d4ff]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl font-bold text-white font-mono uppercase">Strategy Session Confirmed!</h2>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    We've sent calendar invites and session materials to <strong className="text-[#00d4ff]">{formData.email}</strong>. Our AI Voice Architect looks forward to building your deployment blueprint.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormStep(1); }}
                    className="border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff]/10 font-mono text-xs px-6 py-2.5 uppercase font-bold transition-all mt-2"
                  >
                    Modify Session Details
                  </button>
                </div>
              )}

            </div>

          </div>

          {/* FAQ Section */}
          <div className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-none space-y-6 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans uppercase">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {auditFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#050507] border border-white/10 rounded-none overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-bold text-white text-xs sm:text-sm flex items-center justify-between gap-4 hover:bg-white/5 font-sans"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-[#00d4ff] shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 pt-0 text-xs text-slate-300 leading-relaxed border-t border-white/5 font-sans">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Live Demo Sandbox */}
      {activeTab === 'demo' && (
        <div className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-none space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase">SIMULATED CALL DEPLOYMENT VAULT</span>
            <h2 className="text-2xl font-bold text-white">Select a Commercial Voice Scenario</h2>
            <p className="text-xs text-slate-400">Click any industry below to listen to a simulated deployment call based on your vertical's typical call flow.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                onClick={() => onNavigate('/demo')}
                className="bg-[#050507] border border-white/10 hover:border-[#00d4ff] p-5 rounded-none cursor-pointer space-y-3 group transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#00d4ff]">{ind.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#00d4ff] group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-sm font-bold text-white">{ind.tagline}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{ind.description}</p>
                <div className="text-[11px] font-mono text-[#00d4ff] pt-1 font-bold">
                  Explore Voice Demo →
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};

