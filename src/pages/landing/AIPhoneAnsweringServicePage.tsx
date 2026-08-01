import React from 'react';
import { PagePath } from '../../types';
import { StandardCtaSection } from '../../components/StandardCtaSection';
import { Phone, Clock, ShieldCheck, Zap, ArrowRight, Server, CheckCircle2, Headphones } from 'lucide-react';

interface AIPhoneAnsweringServicePageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIPhoneAnsweringServicePage: React.FC<AIPhoneAnsweringServicePageProps> = ({ onNavigate, onOpenAuditModal }) => {
  return (
    <div className="space-y-20 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-wider rounded-sm">
          <Headphones className="w-3.5 h-3.5" /> Enterprise Voice Automation
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase leading-tight font-sans">
          The AI Phone Answering Service That Actually Solves Problems
        </h1>
        <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto font-sans leading-relaxed">
          Stop paying offshore call centers to take basic messages. PEXEK deploys intelligent AI phone answering systems that understand your business, answer complex questions, screen prospects, and book calendars in real time.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-[#00d4ff] hover:bg-[#00b8e6] text-[#050507] font-bold font-mono text-sm uppercase tracking-wider rounded-sm transition-all duration-200 shadow-lg shadow-[#00d4ff]/20 flex items-center justify-center gap-2"
          >
            Book Free Strategy Audit <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/how-it-works')}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:border-white/40 text-white font-mono text-sm uppercase tracking-wider rounded-sm transition-all duration-200"
          >
            How Deployment Works
          </button>
        </div>
      </div>

      {/* Comparison & Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { stat: '0 Hold Time', label: 'Instant Connection', desc: 'No hold music or IVR phone menu torture.' },
          { stat: '100%', label: 'Script & KB Adherence', desc: 'Answers questions strictly based on your verified business data.' },
          { stat: '< 450ms', label: 'Audio Latency', desc: 'Imperceptible delays for natural conversational pacing.' },
          { stat: '70% Savings', label: 'Cost vs Call Centers', desc: 'Eliminates high per-minute rates of outsourced call reps.' },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#0a0e1a] border border-white/10 p-6 rounded-sm space-y-2">
            <div className="text-3xl font-extrabold font-mono text-[#00d4ff]">{item.stat}</div>
            <div className="text-sm font-bold uppercase font-mono text-white">{item.label}</div>
            <div className="text-xs text-slate-400 font-sans leading-relaxed">{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Core Benefits */}
      <div className="space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
            Why Modern Businesses Choose AI Answering Over Call Centers
          </h2>
          <p className="text-slate-400 text-sm">
            Intelligent automation that acts as a true extension of your operational team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Deep Knowledge Integration',
              description: 'Trained directly on your FAQs, service pricing, appointment policies, and staff directory.',
            },
            {
              title: 'Live Warm Phone Transfers',
              description: 'Identifies urgent high-ticket calls, whispers context to your on-duty rep, and transfers the call instantly.',
            },
            {
              title: 'Bi-Directional CRM Logging',
              description: 'Writes complete transcripts, audio links, and qualification metrics directly into your CRM.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0a0e1a] border border-white/10 p-8 rounded-sm space-y-4 hover:border-[#00d4ff]/40 transition-colors">
              <div className="w-10 h-10 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-sm flex items-center justify-center text-[#00d4ff] font-mono font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold font-sans uppercase">{item.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <StandardCtaSection onOpenAuditModal={onOpenAuditModal} />
    </div>
  );
};
