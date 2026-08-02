import React, { useState } from 'react';
import { ProgrammaticPageData } from '../types';
import { PagePath } from '../../types';
import { ProgrammaticBreadcrumbs } from './ProgrammaticBreadcrumbs';
import { ProgrammaticInternalLinks } from './ProgrammaticInternalLinks';
import { StandardCtaSection } from '../../components/StandardCtaSection';
import { 
  PhoneCall, 
  Zap, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  TrendingUp, 
  Database, 
  Volume2, 
  ChevronDown, 
  ArrowRight,
  Layers,
  Cpu,
  Brain,
  RefreshCw,
  Server
} from 'lucide-react';

interface ProgrammaticLandingPageTemplateProps {
  pageData: ProgrammaticPageData;
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: (source?: string) => void;
  onOpenDemoModal?: (industryId?: string) => void;
}

export const ProgrammaticLandingPageTemplate: React.FC<ProgrammaticLandingPageTemplateProps> = ({
  pageData,
  onNavigate,
  onOpenAuditModal,
  onOpenDemoModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Interactive ROI Calculator State
  const [monthlyCallsInput, setMonthlyCallsInput] = useState<number>(
    pageData.industry?.avgMonthlyMissedCalls || 120
  );
  const [dealValueInput, setDealValueInput] = useState<number>(
    pageData.industry?.avgCallValue || 750
  );

  const calculateRecoverableRevenue = () => {
    // Estimate 25% of missed calls become closed customers
    return Math.round(monthlyCallsInput * 0.25 * dealValueInput);
  };

  const handleOpenDemo = () => {
    if (onOpenDemoModal) {
      onOpenDemoModal(pageData.industry?.slug || 'dental');
    } else {
      onNavigate('/demo');
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 font-sans">
      {/* 1. Dynamic Breadcrumb Navigation */}
      <ProgrammaticBreadcrumbs
        breadcrumbs={pageData.breadcrumbs}
        onNavigate={onNavigate}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        
        {/* 2. Dynamic Hero Section */}
        <section className="space-y-8 text-center max-w-4xl mx-auto pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#080b12] border border-[#00d4ff]/30 text-[#00d4ff] font-mono text-xs font-bold uppercase tracking-wider rounded-sm shadow-lg">
            <Zap className="w-3.5 h-3.5 animate-pulse" />
            <span>{pageData.hero.badgeText}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-sans text-white tracking-tight leading-[1.12]">
            {pageData.hero.h1}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-sans leading-relaxed max-w-3xl mx-auto">
            {pageData.hero.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenAuditModal(`pSEO_${pageData.slug}`)}
              className="btn-pexek-primary text-sm px-8 py-4 font-bold uppercase tracking-wider w-full sm:w-auto shadow-2xl"
            >
              Book 30-Min Voice Audit →
            </button>
            <button
              onClick={handleOpenDemo}
              className="px-8 py-4 bg-[#050507] border border-[#00d4ff]/40 text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-mono font-bold text-xs uppercase tracking-wider rounded-sm transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Volume2 className="w-4 h-4" />
              <span>Try Interactive Voice Demo</span>
            </button>
          </div>

          {/* Key Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#080b12] border border-white/10 p-4 sm:p-6 rounded-sm text-left font-mono mt-8">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Speech Latency</div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#00d4ff]">{pageData.stats.latency}</div>
              <div className="text-[10px] text-slate-400">Natural conversation</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Line 1 Answer Rate</div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#00d4ff]">{pageData.stats.answerRate}</div>
              <div className="text-[10px] text-slate-400">Zero missed calls</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Est. Monthly Recovered</div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#00d4ff]">{pageData.stats.monthlySavings}</div>
              <div className="text-[10px] text-slate-400">Captured revenue</div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">Managed Setup</div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#00d4ff]">{pageData.stats.setupTime}</div>
              <div className="text-[10px] text-slate-400">Full EHR/CRM testing</div>
            </div>
          </div>
        </section>

        {/* 3. Simulated Live Call Dialogue Transcript */}
        <section className="bg-[#080b12] border border-white/10 rounded-sm p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
                <Volume2 className="w-4 h-4 animate-pulse text-[#00d4ff]" />
                <span>Real-Time Dialogue Audit Trace</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-sans text-white uppercase tracking-tight">
                Live Voice AI Conversation Benchmark
              </h2>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#050507] border border-white/10 text-xs font-mono text-slate-400 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Sub-450ms Latency Active</span>
            </div>
          </div>

          <div className="space-y-4 bg-[#050507] border border-white/5 p-4 sm:p-6 rounded-sm font-sans text-sm">
            {pageData.transcriptDialogue.map((line, idx) => (
              <div key={idx} className={`p-4 rounded-sm border ${
                line.speaker === 'PEXEK AI' 
                  ? 'bg-[#00d4ff]/5 border-[#00d4ff]/20 text-white ml-2 sm:ml-8' 
                  : 'bg-white/5 border-white/10 text-slate-200 mr-2 sm:mr-8'
              }`}>
                <div className="flex items-center justify-between gap-2 mb-1.5 font-mono text-xs">
                  <span className={line.speaker === 'PEXEK AI' ? 'text-[#00d4ff] font-bold' : 'text-slate-400 font-bold'}>
                    {line.speaker === 'PEXEK AI' ? '⚡ PEXEK Autonomous AI Agent' : `👤 ${line.speaker}`}
                  </span>
                  <span className="text-slate-400 text-[11px]">{line.timestamp}</span>
                </div>
                <p className="leading-relaxed font-sans text-sm text-slate-200">{line.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Core Functional Capabilities */}
        <section className="space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
              Autonomous System Capabilities
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-sans text-white uppercase tracking-tight">
              Enterprise Voice Telephony Built for High Call Volume
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              PEXEK operates as an autonomous multi-line front desk, handling screening, booking, and CRM logging natively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pageData.capabilities.map((cap, i) => (
              <div key={i} className="bg-[#080b12] border border-white/10 p-6 rounded-sm space-y-4 hover:border-[#00d4ff]/40 transition-all">
                <div className="w-10 h-10 rounded-sm bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-sans text-white">{cap.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">{cap.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Native CRM Integration Compatibility Matrix */}
        <section className="bg-[#080b12] border border-white/10 p-6 sm:p-10 rounded-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
                Direct API & Webhook Connectivity
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold font-sans text-white uppercase tracking-tight mt-1">
                Native CRM & Platform Integration
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/integrations')}
              className="text-xs font-mono text-[#00d4ff] hover:underline flex items-center gap-1 shrink-0"
            >
              <span>View All 30+ Integrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {pageData.integrationsList.map((integ, idx) => (
              <div key={idx} className="bg-[#050507] border border-white/10 p-4 rounded-sm text-center space-y-2 hover:border-[#00d4ff]/30 transition-all">
                <Database className="w-5 h-5 text-[#00d4ff] mx-auto" />
                <div className="text-xs font-bold font-mono text-white truncate">{integ}</div>
                <div className="text-[10px] text-emerald-400 font-mono">Bi-Directional</div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Dynamic ROI Calculator */}
        <section className="bg-[#080b12] border-2 border-[#00d4ff]/30 p-6 sm:p-10 rounded-sm space-y-8">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <div className="text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
              Interactive Value Recovered Calculator
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-white uppercase tracking-tight">
              Calculate Your Recoverable Missed Call Revenue
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Adjust your monthly missed call volume and average client value to project annual revenue recovery with PEXEK.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Controls */}
            <div className="space-y-6 lg:col-span-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Est. Monthly Missed Calls:</span>
                  <span className="text-[#00d4ff] font-bold text-sm">{monthlyCallsInput} calls/mo</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={monthlyCallsInput}
                  onChange={(e) => setMonthlyCallsInput(Number(e.target.value))}
                  className="w-full accent-[#00d4ff] bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Average Customer/Patient Value ($):</span>
                  <span className="text-[#00d4ff] font-bold text-sm">${dealValueInput}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={dealValueInput}
                  onChange={(e) => setDealValueInput(Number(e.target.value))}
                  className="w-full accent-[#00d4ff] bg-slate-800 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Projection Box */}
            <div className="bg-[#050507] border border-[#00d4ff]/40 p-6 rounded-sm text-center space-y-3">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Projected Recovered Revenue</div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#00d4ff]">
                ${(calculateRecoverableRevenue() * 12).toLocaleString()} / yr
              </div>
              <div className="text-[11px] text-emerald-400 font-mono">
                +${calculateRecoverableRevenue().toLocaleString()} monthly pipeline lift
              </div>
              <button
                onClick={() => onOpenAuditModal(`ROI_pSEO_${pageData.slug}`)}
                className="btn-pexek-primary text-xs w-full py-3 font-bold uppercase tracking-wider mt-2"
              >
                Claim Recovered Revenue →
              </button>
            </div>
          </div>
        </section>

        {/* 7. Dynamic FAQ Accordion */}
        {pageData.faqs && pageData.faqs.length > 0 && (
          <section className="space-y-6">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
                Frequently Asked Questions
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans text-white uppercase tracking-tight">
                Telephony Architecture & Compliance FAQs
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {pageData.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-[#080b12] border border-white/10 rounded-sm overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-sans font-bold text-white text-sm sm:text-base hover:text-[#00d4ff] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-[#00d4ff] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed border-t border-white/5 bg-[#050507]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* 8. Contextual Programmatic Interlinking Hub */}
        <ProgrammaticInternalLinks
          pageData={pageData}
          onNavigate={onNavigate}
          onOpenAuditModal={() => onOpenAuditModal(`interlink_${pageData.slug}`)}
        />

        {/* 9. Standardized CTA Section */}
        <StandardCtaSection onOpenAuditModal={() => onOpenAuditModal(`footer_${pageData.slug}`)} />

      </div>
    </div>
  );
};
