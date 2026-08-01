import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ChevronDown, ChevronUp, DollarSign, Calculator, ArrowRight, ShieldCheck, Check, Layers, AlertCircle } from 'lucide-react';
import { AuditFormData } from '../types';

interface AuditBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
  defaultIndustry?: string;
}

interface ValidationErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  industry?: string;
  monthlyCalls?: string;
  biggestChallenge?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export const AuditBookingModal: React.FC<AuditBookingModalProps> = ({
  isOpen,
  onClose,
  source = 'homepage',
  defaultIndustry = 'Dental Practice'
}) => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showCalculationBreakdown, setShowCalculationBreakdown] = useState(false);
  const [hasStep2Interacted, setHasStep2Interacted] = useState(false);

  // Initial Form Data
  const getInitialFormData = (): AuditFormData => ({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    industry: defaultIndustry,
    monthlyCalls: '100-500 calls/mo',
    biggestChallenge: 'Too many missed calls',
    preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
    preferredTime: '10:00 AM EST'
  });

  const [formData, setFormData] = useState<AuditFormData>(getInitialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});

  // BUG 2 FIX: RESET FORM EVERY TIME MODAL OPENS
  useEffect(() => {
    if (isOpen) {
      setCurrentStep(1);
      setSubmitted(false);
      setIsSubmitting(false);
      setSubmitError(null);
      setErrors({});
      setShowCalculationBreakdown(false);
      setHasStep2Interacted(false);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        industry: defaultIndustry,
        monthlyCalls: '100-500 calls/mo',
        biggestChallenge: 'Too many missed calls',
        preferredDate: new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0],
        preferredTime: '10:00 AM EST'
      });
    }
  }, [isOpen, defaultIndustry]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Dynamic Headline Resolution
  const getHeadline = () => {
    const src = source.toLowerCase();
    if (src.includes('dental')) return "Let's Design Your Dental AI Receptionist";
    if (src.includes('healthcare')) return "Let's Design Your Healthcare AI System";
    if (src.includes('real-estate') || src.includes('realestate')) return "Let's Design Your Real Estate AI Workflow";
    if (src.includes('home-service') || src.includes('homeservices')) return "Let's Design Your Home Services AI Dispatch";
    if (src.includes('legal')) return "Let's Design Your Legal AI Intake System";
    if (src.includes('ecommerce') || src.includes('e-commerce')) return "Let's Design Your E-commerce AI Support";
    if (src.includes('pricing')) return "Get Your Custom AI Deployment Quote";
    return "Let's Design Your AI Voice Deployment";
  };

  // BUG 1 FIX: DYNAMIC REVENUE CALCULATOR LOGIC
  const getIndustryConfig = () => {
    const ind = formData.industry;
    if (ind.includes('Dental')) return { rate: 0.45, value: 350, label: 'Dental Practice' };
    if (ind.includes('Healthcare') || ind.includes('Medical')) return { rate: 0.42, value: 300, label: 'Healthcare' };
    if (ind.includes('Real Estate')) return { rate: 0.48, value: 800, label: 'Real Estate' };
    if (ind.includes('Home Services')) return { rate: 0.50, value: 400, label: 'Home Services' };
    if (ind.includes('Legal') || ind.includes('Law')) return { rate: 0.46, value: 1200, label: 'Legal' };
    if (ind.includes('E-commerce')) return { rate: 0.40, value: 150, label: 'E-commerce' };
    return { rate: 0.45, value: 300, label: 'General Business' };
  };

  const getMonthlyCallNumber = () => {
    const vol = formData.monthlyCalls;
    if (vol.includes('<100')) return 75;
    if (vol.includes('100-500')) return 300;
    if (vol.includes('500-2000')) return 1000;
    if (vol.includes('2000+')) return 3000;
    return 300;
  };

  const config = getIndustryConfig();
  const callCount = getMonthlyCallNumber();
  const missedCalls = Math.round(callCount * config.rate);
  const recoveredCalls = Math.round(missedCalls * 0.80);
  const newCustomers = Math.round(recoveredCalls * 0.25);
  const estimatedRevenue = Math.round(newCustomers * config.value);

  // BUG 5 FIX: VALIDATION RULES
  const validateStep1 = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (at least 2 characters)';
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Please enter your business name';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid work email address';
    }
    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim() || digitsOnly.length < 10) {
      newErrors.phone = 'Please enter a valid phone number (at least 10 digits)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!formData.industry) {
      newErrors.industry = 'Please select your industry';
    }
    if (!formData.monthlyCalls) {
      newErrors.monthlyCalls = 'Please select your monthly call volume';
    }
    if (!formData.biggestChallenge) {
      newErrors.biggestChallenge = 'Please select your biggest call challenge';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const newErrors: ValidationErrors = {};
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date';
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.preferredDate = 'Date cannot be in the past';
      }
    }
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep1 = () => {
    if (validateStep1()) {
      setCurrentStep(2);
      setErrors({});
    }
  };

  const handleNextStep2 = () => {
    if (validateStep2()) {
      setHasStep2Interacted(true);
      setCurrentStep(3);
      setErrors({});
    }
  };

  // BUG 3 FIX: BACK NAVIGATION
  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else if (currentStep === 3) {
      setCurrentStep(2);
    }
    setErrors({});
  };

  // FORM SUBMISSION TO FORMSPREE
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: formData.fullName,
      business_name: formData.companyName,
      email: formData.email,
      phone: formData.phone,
      industry: formData.industry,
      call_volume: formData.monthlyCalls,
      challenge: formData.biggestChallenge,
      preferred_date: formData.preferredDate,
      preferred_time: formData.preferredTime,
      estimated_revenue: `$${estimatedRevenue.toLocaleString()}/mo`,
      source: source
    };

    try {
      const res = await fetch('https://formspree.io/f/xkodykaj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Something went wrong sending your request. Please try again or email us directly.');
      }
    } catch (err) {
      setSubmitError('Network error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const challengeOptions = [
    'Too many missed calls',
    'Staff overloaded',
    'Slow lead response',
    'Too many no-shows',
    'Need appointment automation'
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-[#0d1117] border border-[#00d4ff]/20 rounded-md max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[95vh] relative"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Step Progress Line */}
        <div className="w-full bg-slate-900 h-1 relative">
          <div 
            className="bg-[#00d4ff] h-1 transition-all duration-300"
            style={{ width: `${(currentStep / 3) * 100}%` }}
          />
        </div>

        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#050507] border-b border-white/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00d4ff]">
                PATH A: STRATEGY SESSION
              </span>
              <span className="text-slate-600 text-[10px] font-mono">•</span>
              <span className="text-xs font-mono text-slate-400">Step {currentStep} of 3</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white font-sans tracking-tight">
              {getHeadline()}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-900/80 border border-white/10 rounded hover:border-[#00d4ff]/40 transition-colors"
            title="Close (ESC)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Body (2 Columns Desktop) */}
        <div className="flex flex-col lg:flex-row overflow-y-auto">
          
          {/* LEFT SIDEBAR: Dynamic Calculator & Deliverables */}
          <div className="lg:w-2/5 bg-[#050507] p-6 border-b lg:border-b-0 lg:border-r border-white/10 space-y-6 shrink-0">
            
            {/* DYNAMIC REVENUE CALCULATOR BOX */}
            <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/30 p-4 space-y-2 rounded-sm">
              <div className="text-[10px] font-mono text-[#00d4ff] uppercase tracking-wider font-bold flex items-center gap-1.5">
                <DollarSign className="w-3.5 h-3.5" />
                <span>Estimated Revenue Opportunity</span>
              </div>

              {!hasStep2Interacted && currentStep === 1 ? (
                <div className="py-2 text-xs text-slate-300 font-sans italic border-l-2 border-[#00d4ff] pl-2 bg-[#050507]/60">
                  Complete Step 2 to calculate your estimated revenue opportunity.
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-black text-white font-mono">
                    ${estimatedRevenue.toLocaleString()}
                    <span className="text-xs font-normal text-slate-400">/mo</span>
                  </div>

                  {/* BREAKDOWN TOGGLE */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setShowCalculationBreakdown(!showCalculationBreakdown)}
                      className="text-[11px] font-mono text-[#00d4ff] hover:underline flex items-center gap-1"
                    >
                      {showCalculationBreakdown ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      <span>{showCalculationBreakdown ? 'Hide Calculation' : '▼ View Calculation'}</span>
                    </button>

                    {showCalculationBreakdown && (
                      <div className="mt-2.5 p-3 bg-[#050507] border border-white/10 text-[11px] font-mono text-slate-300 space-y-1 rounded-[2px] animate-in fade-in duration-150">
                        <div><strong className="text-white">{callCount}</strong> monthly calls</div>
                        <div>× <strong className="text-white">{Math.round(config.rate * 100)}%</strong> estimated unanswered rate</div>
                        <div className="text-[#00d4ff] font-bold">= {missedCalls} missed calls</div>
                        <div className="pt-1 text-slate-400">{missedCalls} × 80% recoverable = <strong className="text-white">{recoveredCalls}</strong> conversations</div>
                        <div className="text-slate-400">{recoveredCalls} × 25% conversion = <strong className="text-white">{newCustomers}</strong> new customers</div>
                        <div className="pt-1 text-[#00d4ff] font-bold">{newCustomers} × ${config.value} avg value = ${estimatedRevenue.toLocaleString()}/mo</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <p className="text-[10px] text-slate-400 font-sans border-t border-white/10 pt-2">
                Estimate based on selected industry benchmarks and your inputs. Actual results vary by business.
              </p>
            </div>

            {/* What You'll Leave With */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" />
                <span>What You'll Leave With</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-300 font-sans">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                  <span>Revenue leak assessment & recovery model</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                  <span>Custom AI voice call flow recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                  <span>Personalized 14-day deployment roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                  <span>Ecosystem integration compatibility check</span>
                </li>
              </ul>
            </div>

            {/* What Happens Next */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#00d4ff]" />
                <span>What Happens Next</span>
              </h4>
              <div className="space-y-1 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2"><span className="text-[#00d4ff] font-bold">1.</span> 30-Min Strategy Session</div>
                <div className="flex items-center gap-2"><span className="text-slate-500 font-bold">2.</span> Workflow Architecture</div>
                <div className="flex items-center gap-2"><span className="text-slate-500 font-bold">3.</span> Deployment Blueprint</div>
                <div className="flex items-center gap-2"><span className="text-slate-500 font-bold">4.</span> Proposal & SLA Setup</div>
                <div className="flex items-center gap-2"><span className="text-slate-500 font-bold">5.</span> Go Live (~14 Days)</div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: 3-Step Form & Success View */}
          <div className="lg:w-3/5 p-6 sm:p-8 space-y-6">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitError && (
                  <div className="p-3 bg-red-950/80 border border-red-500 text-red-200 text-xs font-mono rounded flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{submitError}</span>
                  </div>
                )}

                {/* STEP 1: CONTACT INFO */}
                {currentStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <div className="border-b border-white/10 pb-2">
                      <h4 className="text-sm font-bold text-white font-sans uppercase">
                        Step 1: Contact Information
                      </h4>
                      <p className="text-xs text-slate-400">Where should we send your custom deployment blueprint?</p>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">Full Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Sarah Vance"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          className={`w-full bg-[#050507] border rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                            errors.fullName ? 'border-red-500' : 'border-white/15 focus:border-[#00d4ff]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="text-[11px] text-red-400 font-mono mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">Business Name *</label>
                        <input
                          type="text"
                          placeholder="e.g. Apex Health Clinic"
                          value={formData.companyName}
                          onChange={(e) => {
                            setFormData({ ...formData, companyName: e.target.value });
                            if (errors.companyName) setErrors({ ...errors, companyName: undefined });
                          }}
                          className={`w-full bg-[#050507] border rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                            errors.companyName ? 'border-red-500' : 'border-white/15 focus:border-[#00d4ff]'
                          }`}
                        />
                        {errors.companyName && (
                          <p className="text-[11px] text-red-400 font-mono mt-1">{errors.companyName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">Work Email *</label>
                        <input
                          type="email"
                          placeholder="sarah@apexhealth.com"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          className={`w-full bg-[#050507] border rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                            errors.email ? 'border-red-500' : 'border-white/15 focus:border-[#00d4ff]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[11px] text-red-400 font-mono mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">
                          Phone Number (for SMS & WhatsApp confirmation) *
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: undefined });
                          }}
                          className={`w-full bg-[#050507] border rounded-sm px-3.5 py-2.5 text-sm text-white focus:outline-none transition-colors ${
                            errors.phone ? 'border-red-500' : 'border-white/15 focus:border-[#00d4ff]'
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[11px] text-red-400 font-mono mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={handleNextStep1}
                        className="w-full bg-[#00d4ff] hover:bg-[#00c0eb] text-black font-mono font-bold text-xs py-3.5 uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      >
                        <span>Next: Business Context →</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: BUSINESS CONTEXT */}
                {currentStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white font-sans uppercase">
                          Step 2: Business Context
                        </h4>
                        <p className="text-xs text-slate-400">Tell us about your call volume and pain points</p>
                      </div>

                      {/* BUG 3 FIX: BACK BUTTON */}
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-xs font-mono text-slate-400 hover:text-white underline"
                      >
                        ← Back
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">Industry Vertical *</label>
                        <select
                          value={formData.industry}
                          onChange={(e) => {
                            setFormData({ ...formData, industry: e.target.value });
                            setHasStep2Interacted(true);
                          }}
                          className="w-full bg-[#050507] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:border-[#00d4ff] focus:outline-none"
                        >
                          <option>Dental Practice</option>
                          <option>Healthcare & Medical</option>
                          <option>Real Estate & Property</option>
                          <option>Law Firm & Legal</option>
                          <option>Home Services (HVAC, Plumbing, etc.)</option>
                          <option>E-commerce & Retail</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">Monthly Call Volume *</label>
                        <select
                          value={formData.monthlyCalls}
                          onChange={(e) => {
                            setFormData({ ...formData, monthlyCalls: e.target.value });
                            setHasStep2Interacted(true);
                          }}
                          className="w-full bg-[#050507] border border-white/15 rounded-sm px-3.5 py-2.5 text-sm text-white focus:border-[#00d4ff] focus:outline-none"
                        >
                          <option>&lt;100 calls/mo</option>
                          <option>100-500 calls/mo</option>
                          <option>500-2000 calls/mo</option>
                          <option>2000+ calls/mo</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-2">
                          Biggest Call Challenge *
                        </label>
                        <div className="space-y-2">
                          {challengeOptions.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, biggestChallenge: opt });
                                setHasStep2Interacted(true);
                                if (errors.biggestChallenge) setErrors({ ...errors, biggestChallenge: undefined });
                              }}
                              className={`w-full text-left px-3.5 py-2 text-xs font-mono border transition-all flex items-center justify-between ${
                                formData.biggestChallenge === opt
                                  ? 'bg-[#00d4ff]/10 border-[#00d4ff] text-white font-bold'
                                  : 'bg-[#050507] border-white/15 text-slate-300 hover:border-white/30'
                              }`}
                            >
                              <span>🔘 {opt}</span>
                              {formData.biggestChallenge === opt && <Check className="w-3.5 h-3.5 text-[#00d4ff]" />}
                            </button>
                          ))}
                        </div>
                        {errors.biggestChallenge && (
                          <p className="text-[11px] text-red-400 font-mono mt-1">{errors.biggestChallenge}</p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="w-1/3 border border-white/20 hover:bg-white/5 text-slate-300 font-mono text-xs py-3.5 uppercase tracking-wider transition-all text-center"
                      >
                        ← Back
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStep2}
                        className="w-2/3 bg-[#00d4ff] hover:bg-[#00c0eb] text-black font-mono font-bold text-xs py-3.5 uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                      >
                        <span>Next: Schedule Session →</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: SCHEDULE & SUBMIT */}
                {currentStep === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-150">
                    <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white font-sans uppercase">
                          Step 3: Preferred Schedule
                        </h4>
                        <p className="text-xs text-slate-400">Select a time for your 30-minute strategy audit</p>
                      </div>

                      {/* BUG 3 FIX: BACK BUTTON */}
                      <button
                        type="button"
                        onClick={handleBack}
                        className="text-xs font-mono text-slate-400 hover:text-white underline"
                      >
                        ← Back
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">Preferred Date *</label>
                        <input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => {
                            setFormData({ ...formData, preferredDate: e.target.value });
                            if (errors.preferredDate) setErrors({ ...errors, preferredDate: undefined });
                          }}
                          className={`w-full bg-[#050507] border rounded-sm px-3.5 py-2 text-sm text-white focus:outline-none ${
                            errors.preferredDate ? 'border-red-500' : 'border-white/15 focus:border-[#00d4ff]'
                          }`}
                        />
                        {errors.preferredDate && (
                          <p className="text-[11px] text-red-400 font-mono mt-1">{errors.preferredDate}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-300 mb-1">Preferred Time Slot *</label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => {
                            setFormData({ ...formData, preferredTime: e.target.value });
                            if (errors.preferredTime) setErrors({ ...errors, preferredTime: undefined });
                          }}
                          className="w-full bg-[#050507] border border-white/15 rounded-sm px-3.5 py-2 text-sm text-white focus:border-[#00d4ff]"
                        >
                          <option>09:00 AM EST</option>
                          <option>10:00 AM EST</option>
                          <option>01:30 PM EST</option>
                          <option>03:00 PM EST</option>
                          <option>04:30 PM EST</option>
                        </select>
                      </div>
                    </div>

                    {/* Final Submission Controls */}
                    <div className="pt-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={handleBack}
                          disabled={isSubmitting}
                          className="w-1/3 border border-white/20 hover:bg-white/5 text-slate-300 font-mono text-xs py-4 uppercase tracking-wider transition-all text-center"
                        >
                          ← Back
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-2/3 bg-[#00d4ff] hover:bg-[#00c0eb] text-black font-mono font-bold text-xs py-4 uppercase tracking-wider transition-all shadow-xl shadow-[#00d4ff]/20 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <span>Submitting Request...</span>
                          ) : (
                            <span>Get My Deployment Blueprint →</span>
                          )}
                        </button>
                      </div>

                      <p className="text-[10px] text-center text-slate-400 font-mono">
                        No credit card required • 30-minute session • 100% confidential
                      </p>
                    </div>
                  </div>
                )}

              </form>
            ) : (
              /* BUG 4 FIX: ENHANCED SUCCESS SCREEN */
              <div className="py-4 space-y-6 animate-in fade-in duration-200">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 bg-[#00d4ff]/10 border-2 border-[#00d4ff] rounded-full flex items-center justify-center mx-auto text-[#00d4ff]">
                    <Check className="w-10 h-10 stroke-[3]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white font-sans uppercase">
                    Strategy Session Request Received
                  </h3>
                  <p className="text-xs text-slate-300 font-sans max-w-md mx-auto leading-relaxed">
                    We'll review your information and contact you shortly to schedule your session.
                  </p>
                </div>

                {/* SUBMITTED DETAILS SUMMARY CARD */}
                <div className="bg-[#050507] border border-white/10 p-4 sm:p-5 rounded-sm text-xs font-mono space-y-2 max-w-md mx-auto text-left">
                  <div className="text-[#00d4ff] font-bold uppercase tracking-wider border-b border-white/10 pb-2 mb-2 flex items-center justify-between">
                    <span>Submitted Session Details</span>
                    <span className="text-[10px] text-slate-500 font-normal">PEXEK AI Audit</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-slate-500">Name:</span>
                    <span className="col-span-2 text-white font-bold">{formData.fullName}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-slate-500">Business:</span>
                    <span className="col-span-2 text-white font-bold">{formData.companyName}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-slate-500">Industry:</span>
                    <span className="col-span-2 text-white font-bold">{formData.industry}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-slate-500">Call Volume:</span>
                    <span className="col-span-2 text-white font-bold">{formData.monthlyCalls}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-slate-500">Challenge:</span>
                    <span className="col-span-2 text-white font-bold">{formData.biggestChallenge}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1">
                    <span className="text-slate-500">Preferred Time:</span>
                    <span className="col-span-2 text-white font-bold">{formData.preferredDate} at {formData.preferredTime}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-1 pt-2 border-t border-white/10">
                    <span className="text-[#00d4ff] font-bold">Est. Revenue:</span>
                    <span className="col-span-2 text-[#00d4ff] font-bold">${estimatedRevenue.toLocaleString()}/mo</span>
                  </div>
                </div>

                {/* SUCCESS SCREEN ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                  <button
                    onClick={onClose}
                    className="w-full sm:w-1/2 bg-[#00d4ff] hover:bg-[#00c0eb] text-black font-mono font-bold text-xs py-3.5 uppercase tracking-wider transition-all text-center"
                  >
                    ✓ Done / Close
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setCurrentStep(1);
                      setFormData(getInitialFormData());
                    }}
                    className="w-full sm:w-1/2 border border-white/20 hover:bg-white/5 text-slate-300 font-mono text-xs py-3.5 uppercase tracking-wider transition-all text-center"
                  >
                    Book Another Session
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
