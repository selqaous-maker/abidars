import React, { useState } from 'react';
import { Calculator, ChevronDown, ChevronUp, DollarSign, Check } from 'lucide-react';
import { PagePath } from '../types';

interface CallLeakCalculatorProps {
  onOpenAuditModal?: () => void;
  onNavigate?: (path: PagePath) => void;
}

export const CallLeakCalculator: React.FC<CallLeakCalculatorProps> = ({ onOpenAuditModal, onNavigate }) => {
  const handleClick = () => {
    if (onOpenAuditModal) {
      onOpenAuditModal();
    } else if (onNavigate) {
      onNavigate('/book-audit');
    } else {
      window.history.pushState({}, '', '/book-audit');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };
  const [monthlyCalls, setMonthlyCalls] = useState<number>(400);
  const [customerValue, setCustomerValue] = useState<number>(350);
  const [industry, setIndustry] = useState<string>('Dental Practice');
  const [showBreakdown, setShowBreakdown] = useState<boolean>(false);

  // Industry benchmark rates
  const getIndustryConfig = (ind: string) => {
    if (ind.includes('Dental')) return { rate: 0.45, defaultVal: 350 };
    if (ind.includes('Healthcare') || ind.includes('Medical')) return { rate: 0.42, defaultVal: 300 };
    if (ind.includes('Real Estate')) return { rate: 0.48, defaultVal: 800 };
    if (ind.includes('Home Services')) return { rate: 0.50, defaultVal: 400 };
    if (ind.includes('Legal') || ind.includes('Law')) return { rate: 0.46, defaultVal: 1200 };
    if (ind.includes('E-commerce')) return { rate: 0.40, defaultVal: 150 };
    return { rate: 0.45, defaultVal: 300 };
  };

  const config = getIndustryConfig(industry);
  const missedCalls = Math.round(monthlyCalls * config.rate);
  const recoverableConversations = Math.round(missedCalls * 0.80);
  const newCustomers = Math.round(recoverableConversations * 0.25);
  const estimatedRecoverableRevenue = Math.round(newCustomers * customerValue);

  const handleIndustryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedInd = e.target.value;
    setIndustry(selectedInd);
    const newConfig = getIndustryConfig(selectedInd);
    setCustomerValue(newConfig.defaultVal);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-4">
      {/* CALCULATOR CARD */}
      <div className="bg-[#0d1117] border border-[#00d4ff]/20 rounded-sm p-6 sm:p-10 space-y-10">
        
        {/* HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#050507] border border-[#00d4ff]/30 text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            Calculate Your Recoverable Revenue Opportunity
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed font-sans">
            See how much lost revenue can be captured by deploying PEXEK AI voice agents to handle unanswered calls and booking.
          </p>
        </div>

        {/* INPUTS & OUTPUTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* INPUT FIELDS (7 COLS) */}
          <div className="lg:col-span-7 bg-[#050507] border border-white/10 p-6 sm:p-8 rounded-sm space-y-6">
            <h3 className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-wider border-b border-white/10 pb-3">
              Your Call Operations Inputs
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* FIELD 1: INDUSTRY */}
              <div className="space-y-2 sm:col-span-2">
                <label htmlFor="calc-industry-select" className="block text-xs font-bold text-white font-sans">
                  Industry Vertical
                </label>
                <select
                  id="calc-industry-select"
                  value={industry}
                  onChange={handleIndustryChange}
                  aria-label="Industry Vertical"
                  className="w-full bg-[#0d1117] border border-white/15 focus:border-[#00d4ff] text-white px-3.5 py-2.5 rounded-[2px] text-sm font-sans outline-none transition-colors cursor-pointer"
                >
                  <option value="Dental Practice">Dental Practice (45% benchmark miss rate)</option>
                  <option value="Healthcare & Medical">Healthcare & Medical (42% benchmark miss rate)</option>
                  <option value="Real Estate">Real Estate (48% benchmark miss rate)</option>
                  <option value="Home Services">Home Services (50% benchmark miss rate)</option>
                  <option value="Legal & Law Firms">Legal & Law Firms (46% benchmark miss rate)</option>
                  <option value="E-commerce">E-commerce (40% benchmark miss rate)</option>
                  <option value="Other">Other Business (45% benchmark miss rate)</option>
                </select>
              </div>

              {/* FIELD 2: MONTHLY CALLS */}
              <div className="space-y-2">
                <label htmlFor="calc-monthly-calls-input" className="block text-xs font-bold text-white font-sans">
                  Monthly Incoming Calls
                </label>
                <input
                  id="calc-monthly-calls-input"
                  type="number"
                  min={10}
                  max={10000}
                  value={monthlyCalls || ''}
                  onChange={(e) => setMonthlyCalls(Math.max(0, Number(e.target.value)))}
                  placeholder="e.g. 400"
                  className="w-full bg-[#0d1117] border border-white/15 focus:border-[#00d4ff] text-white px-3.5 py-2.5 rounded-[2px] text-sm font-mono outline-none transition-colors placeholder-slate-400"
                />
              </div>

              {/* FIELD 3: AVERAGE CUSTOMER VALUE */}
              <div className="space-y-2">
                <label htmlFor="calc-customer-val-input" className="block text-xs font-bold text-white font-sans">
                  Average Customer Value ($)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-sm font-mono text-[#94a3b8]">$</span>
                  <input
                    id="calc-customer-val-input"
                    type="number"
                    min={0}
                    max={100000}
                    value={customerValue || ''}
                    onChange={(e) => setCustomerValue(Math.max(0, Number(e.target.value)))}
                    placeholder="e.g. 350"
                    className="w-full bg-[#0d1117] border border-white/15 focus:border-[#00d4ff] text-white pl-7 pr-3.5 py-2.5 rounded-[2px] text-sm font-mono outline-none transition-colors placeholder-slate-400"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* OUTPUT / RESULTS DISPLAY (5 COLS) */}
          <div className="lg:col-span-5 bg-[#050507] border border-[#00d4ff]/30 p-6 sm:p-8 rounded-sm space-y-6 flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="border-b border-white/10 pb-3 flex items-center justify-between">
                <h3 className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-wider">
                  Calculated Opportunity Gap
                </h3>
                <span className="text-[10px] font-mono text-slate-400">Live Formula</span>
              </div>

              {/* ESTIMATED RECOVERABLE REVENUE */}
              <div className="bg-[#00d4ff]/10 border border-[#00d4ff]/30 p-5 rounded-sm space-y-2">
                <span className="text-xs text-slate-300 font-sans block font-semibold">
                  Estimated Recoverable Revenue
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#00d4ff] font-mono">
                  ${estimatedRecoverableRevenue.toLocaleString()} <span className="text-sm font-normal text-slate-400">/month</span>
                </div>

                {/* BREAKDOWN TOGGLE */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="text-xs font-mono text-[#00d4ff] hover:underline flex items-center gap-1"
                  >
                    {showBreakdown ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    <span>{showBreakdown ? 'Hide Calculation' : '▼ View Calculation'}</span>
                  </button>

                  {showBreakdown && (
                    <div className="mt-3 p-3.5 bg-[#050507] border border-white/10 text-xs font-mono text-slate-300 space-y-1.5 rounded-sm">
                      <div><strong className="text-white">{monthlyCalls}</strong> monthly calls</div>
                      <div>× <strong className="text-white">{Math.round(config.rate * 100)}%</strong> estimated unanswered rate</div>
                      <div className="text-[#00d4ff] font-bold">= {missedCalls} missed calls</div>
                      <div className="pt-1 text-slate-400">{missedCalls} × 80% recoverable = <strong className="text-white">{recoverableConversations}</strong> conversations</div>
                      <div className="text-slate-400">{recoverableConversations} × 25% conversion = <strong className="text-white">{newCustomers}</strong> new customers</div>
                      <div className="pt-1 text-[#00d4ff] font-bold">{newCustomers} × ${customerValue} average value = ${estimatedRecoverableRevenue.toLocaleString()}/month</div>
                    </div>
                  )}
                </div>

              </div>

              {/* METRIC BREAKDOWN GRID */}
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="bg-[#0d1117] p-3 border border-white/10 rounded-sm">
                  <span className="text-slate-400 block text-[10px]">Missed Calls</span>
                  <span className="text-white font-bold text-base">{missedCalls} /mo</span>
                </div>
                <div className="bg-[#0d1117] p-3 border border-white/10 rounded-sm">
                  <span className="text-slate-400 block text-[10px]">New Customers</span>
                  <span className="text-[#00d4ff] font-bold text-base">{newCustomers} /mo</span>
                </div>
              </div>

            </div>

            <div className="pt-3 text-[11px] font-sans text-slate-400 bg-[#0a0e1a] p-3 border border-white/5 rounded-sm">
              Estimate based on selected industry benchmarks and your inputs. Actual results vary by business.
            </div>
          </div>

        </div>

        {/* CTA BLOCK */}
        <div className="bg-[#050507] border border-[#00d4ff]/40 p-6 sm:p-8 rounded-sm text-center space-y-5">
          <div className="space-y-1">
            <h3 className="text-2xl font-bold text-white font-sans">
              Turn Missed Calls Into Revenue
            </h3>
            <p className="text-sm text-[#94a3b8] font-sans">
              Book a free 30-minute strategy session with our AI voice engineers.
            </p>
          </div>

          <div>
            <button
              onClick={handleClick}
              className="btn-pexek-primary px-8 py-3.5 font-bold text-sm uppercase tracking-wider w-full sm:w-auto"
            >
              Book My Free Strategy Audit →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
