import React, { useState } from 'react';
import { PagePath } from '../types';
import { PILLARS, INDUSTRIES, TIMELINE_STEPS } from '../data/mockData';
import { StandardCtaSection } from '../components/StandardCtaSection';
import { CallLeakCalculator } from '../components/CallLeakCalculator';
import { 
  PhoneCall, Calendar, Filter, Zap, ArrowRight, Play, CheckCircle2, 
  TrendingDown, ShieldCheck, Stethoscope, Building, Smile, ShoppingBag, 
  Scale, Wrench, ChevronRight, Calculator, AlertTriangle, Activity
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
  onOpenDemoModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenAuditModal,
  onOpenDemoModal,
}) => {
  // Icon mapper helper
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope className="w-5 h-5 text-[#00d4ff]" />;
      case 'Building': return <Building className="w-5 h-5 text-[#00d4ff]" />;
      case 'Smile': return <Smile className="w-5 h-5 text-[#00d4ff]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-[#00d4ff]" />;
      case 'Scale': return <Scale className="w-5 h-5 text-[#00d4ff]" />;
      default: return <Wrench className="w-5 h-5 text-[#00d4ff]" />;
    }
  };

  return (
    <div className="space-y-24 pb-16">
      
      {/* HERO SECTION START */}
      <section className="relative pt-12 lg:pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00d4ff]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
          
          {/* HERO LOGO WITH ORBITAL LIGHT */}
          {/* [HERO LOGO REPLACE] */}
          <div className="flex justify-center mb-2">
            <div className="pexek-logo-orbit">
              {/* Orbital ring with glowing dot */}
              <div className="orbit-ring">
                <div className="orbit-dot"></div>
              </div>
              
              {/* Secondary reverse orbit (subtle) */}
              <div className="orbit-ring reverse">
                <div className="orbit-dot delay"></div>
              </div>
              
              {/* The Logo */}
              <img 
                src="/pexek-logo.png" 
                alt="PEXEK" 
                width="220"
                height="220"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="orbit-logo-img"
                style={{ aspectRatio: '1/1' }}
              />
            </div>
          </div>
          {/* [HERO LOGO REPLACE END] */}

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#0f172a] border border-[#00d4ff]/30 text-xs font-mono text-[#00d4ff] uppercase tracking-widest font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
            <span>PEXEK OS™ | AI Voice Revenue Systems</span>
          </div>

          {/* H1 HEADLINE */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] font-sans uppercase">
            AI Voice Agents That Turn Missed Calls Into <span className="text-[#00d4ff]">Revenue Opportunities</span>
          </h1>

          {/* SUBHEADLINE */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-sans">
            PEXEK designs and deploys industry-specific AI voice systems that answer customer calls, qualify high-intent leads, book appointments, and automate follow-ups — helping businesses capture more revenue without adding operational complexity.
          </p>

          {/* CTAs & TRUST LINE */}
          <div className="pt-2 space-y-6">
            <div className="flex items-center justify-center">
              <button
                onClick={onOpenAuditModal}
                className="btn-pexek-primary text-base px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 shadow-xl"
              >
                <span>Book Free Strategy Audit</span>
                <ArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* TRUST LINE */}
            <div className="pt-2">
              <p className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider mb-2">
                30-Minute Strategy Session
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00d4ff] font-bold">✓</span> Call Flow Analysis
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00d4ff] font-bold">✓</span> Revenue Leak Assessment
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#00d4ff] font-bold">✓</span> Custom Deployment Roadmap
                </span>
              </div>
            </div>
          </div>

          {/* INDUSTRIES BAR (Directly Below Hero) */}
          <div className="pt-10 border-t border-white/10 max-w-4xl mx-auto space-y-4">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">
              BUILT FOR HIGH-INTENT INDUSTRIES
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-300 font-sans">
              <span>Healthcare & Medical</span>
              <span className="text-slate-400">•</span>
              <span>Dental Practices</span>
              <span className="text-slate-400">•</span>
              <span>Real Estate</span>
              <span className="text-slate-400">•</span>
              <span>Legal Firms</span>
              <span className="text-slate-400">•</span>
              <span>Home Services</span>
              <span className="text-slate-400">•</span>
              <span>E-commerce Brands</span>
            </div>
          </div>

        </div>
      </section>
      {/* HERO SECTION END */}

      {/* REVENUE LEAK SECTION START */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0a0e1a] border border-white/10 rounded-sm p-8 sm:p-12 space-y-12">
          
          {/* SECTION TITLE & SUBHEADLINE */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              Your Highest-Intent Customers Are Trying To Reach You. Are You Ready?
            </h2>
            <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-sans">
              Every missed call represents a potential customer who already showed buying intent. When businesses cannot answer immediately, those opportunities often disappear before the team ever gets involved.
            </p>
          </div>

          {/* REVENUE LEAKAGE FRAMEWORK — 3 PILLARS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#050507] border-l-2 border-l-[#00d4ff] border-t border-r border-b border-white/5 p-6 rounded-sm space-y-2">
              <h3 className="text-lg font-bold text-white font-sans">Missed Conversations</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed font-sans">
                Inbound calls happen when customers are ready to act. Busy teams, after-hours inquiries, and peak demand periods create gaps where valuable opportunities are lost.
              </p>
            </div>

            <div className="bg-[#050507] border-l-2 border-l-[#00d4ff] border-t border-r border-b border-white/5 p-6 rounded-sm space-y-2">
              <h3 className="text-lg font-bold text-white font-sans">Slow Response Times</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed font-sans">
                Speed matters when customers are comparing options. The longer a prospect waits for a response, the higher the chance they move to another provider.
              </p>
            </div>

            <div className="bg-[#050507] border-l-2 border-l-[#00d4ff] border-t border-r border-b border-white/5 p-6 rounded-sm space-y-2">
              <h3 className="text-lg font-bold text-white font-sans">Manual Bottlenecks</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed font-sans">
                Your team should focus on high-value conversations, not repetitive call handling. AI systems can handle routine inquiries, qualification, scheduling, and follow-ups automatically.
              </p>
            </div>
          </div>

          {/* 4 BENEFIT BLOCKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            <div className="bg-[#050507] border border-white/5 p-6 rounded-sm space-y-2">
              <h4 className="text-base font-bold text-white font-sans">24/7 Coverage</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Capture customer conversations beyond business hours.
              </p>
            </div>

            <div className="bg-[#050507] border border-white/5 p-6 rounded-sm space-y-2">
              <h4 className="text-base font-bold text-white font-sans">Instant Response</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Engage prospects immediately when intent is highest.
              </p>
            </div>

            <div className="bg-[#050507] border border-white/5 p-6 rounded-sm space-y-2">
              <h4 className="text-base font-bold text-white font-sans">Automated Qualification</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Prioritize the opportunities that deserve human attention.
              </p>
            </div>

            <div className="bg-[#050507] border border-white/5 p-6 rounded-sm space-y-2">
              <h4 className="text-base font-bold text-white font-sans">Appointment Conversion</h4>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                Turn conversations into scheduled actions.
              </p>
            </div>
          </div>

          {/* CTA BLOCK */}
          <div className="bg-[#050507] border border-[#00d4ff]/40 p-6 sm:p-8 rounded-sm max-w-3xl mx-auto text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-sans">Find Your Revenue Leakage</h3>
              <p className="text-xs font-mono text-[#00d4ff] uppercase tracking-wider font-bold">
                30-minute strategy audit:
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5">
                <span className="text-[#00d4ff] font-bold">✓</span> Analyze your current call flow
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#00d4ff] font-bold">✓</span> Identify missed opportunities
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#00d4ff] font-bold">✓</span> Design your AI deployment roadmap
              </span>
            </div>

            <div>
              <button
                onClick={onOpenAuditModal}
                className="btn-pexek-primary px-8 py-3.5 font-bold text-sm uppercase tracking-wider w-full sm:w-auto"
              >
                Book Free Strategy Audit
              </button>
            </div>
          </div>

        </div>
      </section>
      {/* REVENUE LEAK SECTION END */}

      {/* CALCULATOR SECTION START */}
      <CallLeakCalculator onOpenAuditModal={onOpenAuditModal} />
      {/* CALCULATOR SECTION END */}

      {/* REVENUE ARCHITECTURE SECTION START */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#050507] border border-[#00d4ff]/30 text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
            <span>Deployment Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            One Connected AI Revenue System For Every Customer Conversation
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-sans">
            PEXEK combines AI voice agents, business workflows, integrations, and optimization processes into one deployment framework designed to capture, qualify, and convert customer demand.
          </p>
        </div>

        {/* SECTION INTRO */}
        <div className="text-center">
          <span className="text-xs font-mono text-[#00d4ff] uppercase tracking-widest font-bold">
            How Customer Intent Flows Through PEXEK
          </span>
        </div>

        {/* 5 LAYERS FLOW */}
        <div className="space-y-6 relative">
          
          {/* LAYER 1: VoiceOS™ */}
          <div className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/40 p-6 sm:p-8 rounded-sm transition-all relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold font-mono text-[#00d4ff]">01</span>
                  <h3 className="text-2xl font-bold text-white font-sans">VoiceOS™ — AI Receptionist Platform</h3>
                </div>
                <h4 className="text-base font-semibold text-[#00d4ff] font-sans">
                  Answer Every Customer Conversation 24/7
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed font-sans max-w-2xl">
                  Your AI voice agent responds instantly, handles common questions, and follows your business communication style.
                </p>
              </div>

              <div className="w-full md:w-auto bg-[#050507] border border-white/5 p-4 rounded-sm min-w-[280px]">
                <ul className="space-y-2 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>24/7 call answering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Natural voice conversations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Brand-specific scripts and knowledge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Multilingual customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LAYER 2: LeadEngine™ */}
          <div className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/40 p-6 sm:p-8 rounded-sm transition-all relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold font-mono text-[#00d4ff]">02</span>
                  <h3 className="text-2xl font-bold text-white font-sans">LeadEngine™ — AI Lead Qualification</h3>
                </div>
                <h4 className="text-base font-semibold text-[#00d4ff] font-sans">
                  Qualifies Every Caller Before Your Team Gets Involved
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed font-sans max-w-2xl">
                  Every conversation is analyzed to understand customer intent and qualification criteria.
                </p>
              </div>

              <div className="w-full md:w-auto bg-[#050507] border border-white/5 p-4 rounded-sm min-w-[280px]">
                <ul className="space-y-2 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Lead qualification questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Budget discovery and needs discovery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Spam filtering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Human transfer when needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LAYER 3: BookingOS™ */}
          <div className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/40 p-6 sm:p-8 rounded-sm transition-all relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold font-mono text-[#00d4ff]">03</span>
                  <h3 className="text-2xl font-bold text-white font-sans">BookingOS™ — AI Appointment Scheduling</h3>
                </div>
                <h4 className="text-base font-semibold text-[#00d4ff] font-sans">
                  Books Appointments Automatically Without Back-and-Forth
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed font-sans max-w-2xl">
                  Convert qualified conversations into appointments without back-and-forth communication.
                </p>
              </div>

              <div className="w-full md:w-auto bg-[#050507] border border-white/5 p-4 rounded-sm min-w-[280px]">
                <ul className="space-y-2 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Calendar synchronization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Appointment booking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>SMS / WhatsApp confirmations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Reminder workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LAYER 4: WorkflowOS™ */}
          <div className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/40 p-6 sm:p-8 rounded-sm transition-all relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold font-mono text-[#00d4ff]">04</span>
                  <h3 className="text-2xl font-bold text-white font-sans">WorkflowOS™ — AI Workflow Automation</h3>
                </div>
                <h4 className="text-base font-semibold text-[#00d4ff] font-sans">
                  Automatically Updates Your CRM & Sends Confirmations
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed font-sans max-w-2xl">
                  Keep your team updated automatically after every interaction.
                </p>
              </div>

              <div className="w-full md:w-auto bg-[#050507] border border-white/5 p-4 rounded-sm min-w-[280px]">
                <ul className="space-y-2 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>CRM updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Call summaries and transcripts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Follow-up automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Internal notifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* LAYER 5: InsightOS™ */}
          <div className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/40 p-6 sm:p-8 rounded-sm transition-all relative">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-3 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold font-mono text-[#00d4ff]">05</span>
                  <h3 className="text-2xl font-bold text-white font-sans">InsightOS™ — AI Conversation Analytics</h3>
                </div>
                <h4 className="text-base font-semibold text-[#00d4ff] font-sans">
                  See Every Call, Every Lead, and Every Booking in One Place
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed font-sans max-w-2xl">
                  Understand what happens across every customer interaction.
                </p>
              </div>

              <div className="w-full md:w-auto bg-[#050507] border border-white/5 p-4 rounded-sm min-w-[280px]">
                <ul className="space-y-2 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Call analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Conversion tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Conversation reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Optimization recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="bg-[#050507] border-t-2 border-t-[#00d4ff] border-x border-b border-white/10 p-8 sm:p-10 rounded-sm text-center space-y-3">
          <h3 className="text-2xl font-bold text-white font-sans">
            From First Customer Call To Business Action
          </h3>
          <p className="text-sm sm:text-base text-[#94a3b8] max-w-3xl mx-auto leading-relaxed font-sans">
            PEXEK transforms customer conversations into structured workflows that help businesses respond faster, qualify better, and operate more efficiently.
          </p>
        </div>

      </section>
      {/* REVENUE ARCHITECTURE SECTION END */}

      {/* DEMO CTA SECTION START */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0a0e1a] border border-white/10 rounded-sm p-8 sm:p-10 text-center space-y-6">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Experience an AI Voice Conversation
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed font-sans">
              Explore interactive AI voice scenarios tailored to your industry and hear how PEXEK handles real customer conversations — from the first hello to CRM updates.
            </p>
          </div>

          <div>
            <button
              onClick={() => onNavigate('/demo')}
              className="btn-pexek-secondary text-sm px-7 py-3.5 font-bold inline-flex items-center gap-2 uppercase tracking-wider shadow-lg"
            >
              <span>🎧 Listen to Interactive Voice Demos →</span>
            </button>
          </div>
        </div>
      </section>
      {/* DEMO CTA SECTION END */}

      {/* HOW IT WORKS (14-DAY TIMELINE) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#00d4ff]">
            DEPLOYMENT METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-sans">
            From First Call to Fully Deployed in 14 Days.
          </h2>
          <p className="text-slate-300 text-sm font-sans">
            We handle 100% of the training, integration, testing, and go-live optimization.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {TIMELINE_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff] p-6 rounded-sm space-y-3 relative group transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded-[2px]">
                  {step.day}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase">{step.badge}</span>
              </div>

              <h3 className="text-base font-bold text-white font-sans">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar under timeline */}
        <div className="bg-[#050507] border border-white/10 p-6 rounded-sm grid grid-cols-2 lg:grid-cols-4 gap-6 text-center font-mono">
          <div>
            <div className="text-2xl font-extrabold text-[#00d4ff]">&lt;60s</div>
            <div className="text-xs text-slate-400 mt-1">Avg Response Speed</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">24/7/365</div>
            <div className="text-xs text-slate-400 mt-1">Autonomous Coverage</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-[#00d4ff]">100%</div>
            <div className="text-xs text-slate-400 mt-1">Bi-Directional CRM Sync</div>
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">14 Days</div>
            <div className="text-xs text-slate-400 mt-1">Turnkey Deployment</div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION START */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            AI Voice Systems Designed For Your Industry
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed font-sans">
            Generic AI assistants fail in real business conversations. PEXEK builds industry-specific deployments with customized call flows, qualification logic, workflows, and integrations based on your operational needs.
          </p>
        </div>

        {/* 6 VERTICAL CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* VERTICAL 1: Dental Practices */}
          <div className="bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 p-6 sm:p-7 rounded-sm space-y-5 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-widest block">
                Dental Practices
              </span>
              <h3 className="text-xl font-bold text-white font-sans leading-snug">
                Never Miss A Patient Opportunity
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                PEXEK helps dental practices capture every patient conversation, automate appointment booking, and reduce front-desk workload.
              </p>

              {/* AI Deployment Includes */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
                  AI Deployment Includes:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Emergency call handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Patient qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Recall and reminder workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>WhatsApp/SMS confirmations</span>
                  </li>
                </ul>
              </div>

              {/* Common Use Cases */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                  Common Use Cases:
                </span>
                <ul className="space-y-1 text-xs text-[#94a3b8] font-sans">
                  <li>• After-hours emergency calls</li>
                  <li>• New patient intake</li>
                  <li>• Hygiene appointment reminders</li>
                  <li>• Missed call recovery</li>
                </ul>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('/dental-ai-receptionist')}
                className="text-xs font-mono font-bold text-[#00d4ff] flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Dental AI Deployment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* VERTICAL 2: Home & Professional Services */}
          <div className="bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 p-6 sm:p-7 rounded-sm space-y-5 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-widest block">
                Home & Professional Services
              </span>
              <h3 className="text-xl font-bold text-white font-sans leading-snug">
                Capture Every Service Request
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                PEXEK helps service businesses respond instantly to urgent calls, qualify jobs, and schedule technician visits.
              </p>

              {/* AI Deployment Includes */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
                  AI Deployment Includes:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Emergency call capture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Customer qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Job information collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Scheduling automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Follow-up workflows</span>
                  </li>
                </ul>
              </div>

              {/* Common Use Cases */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                  Common Use Cases:
                </span>
                <ul className="space-y-1 text-xs text-[#94a3b8] font-sans">
                  <li>• HVAC emergencies</li>
                  <li>• Plumbing requests</li>
                  <li>• Electrical services</li>
                  <li>• Home repairs</li>
                </ul>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('/home-services-ai')}
                className="text-xs font-mono font-bold text-[#00d4ff] flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Service AI Deployment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* VERTICAL 3: Real Estate & Property */}
          <div className="bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 p-6 sm:p-7 rounded-sm space-y-5 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-widest block">
                Real Estate & Property
              </span>
              <h3 className="text-xl font-bold text-white font-sans leading-snug">
                Respond To Buyers Before They Move On
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                PEXEK helps real estate teams qualify leads instantly and route high-value opportunities to agents.
              </p>

              {/* AI Deployment Includes */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
                  AI Deployment Includes:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Buyer qualification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Property inquiry handling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Lead routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>CRM updates</span>
                  </li>
                </ul>
              </div>

              {/* Common Use Cases */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                  Common Use Cases:
                </span>
                <ul className="space-y-1 text-xs text-[#94a3b8] font-sans">
                  <li>• Property inquiries</li>
                  <li>• Listing calls</li>
                  <li>• Buyer screening</li>
                  <li>• Showing appointments</li>
                </ul>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('/real-estate-ai-receptionist')}
                className="text-xs font-mono font-bold text-[#00d4ff] flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Real Estate AI Deployment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* VERTICAL 4: Healthcare & Medical */}
          <div className="bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 p-6 sm:p-7 rounded-sm space-y-5 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-widest block">
                Healthcare & Medical
              </span>
              <h3 className="text-xl font-bold text-white font-sans leading-snug">
                Improve Patient Access Without Increasing Staff Load
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                PEXEK helps healthcare organizations manage patient communication while following their operational workflows.
              </p>

              {/* AI Deployment Includes */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
                  AI Deployment Includes:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Patient information collection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Appointment coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Call routing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Reminder workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Administrative automation</span>
                  </li>
                </ul>
              </div>

              {/* Common Use Cases */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                  Common Use Cases:
                </span>
                <ul className="space-y-1 text-xs text-[#94a3b8] font-sans">
                  <li>• Appointment requests</li>
                  <li>• Patient FAQs</li>
                  <li>• Intake information collection</li>
                  <li>• After-hours communication</li>
                </ul>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('/healthcare-ai-receptionist')}
                className="text-xs font-mono font-bold text-[#00d4ff] flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Healthcare AI Deployment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* VERTICAL 5: Legal & Law Firms */}
          <div className="bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 p-6 sm:p-7 rounded-sm space-y-5 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-widest block">
                Legal & Law Firms
              </span>
              <h3 className="text-xl font-bold text-white font-sans leading-snug">
                Capture More Qualified Consultations
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                PEXEK helps law firms collect intake information, qualify potential cases, and schedule consultations.
              </p>

              {/* AI Deployment Includes */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
                  AI Deployment Includes:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Client intake automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Qualification questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Consultation scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Follow-up workflows</span>
                  </li>
                </ul>
              </div>

              {/* Common Use Cases */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                  Common Use Cases:
                </span>
                <ul className="space-y-1 text-xs text-[#94a3b8] font-sans">
                  <li>• Personal injury intake</li>
                  <li>• Consultation requests</li>
                  <li>• Case screening</li>
                </ul>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('/legal-ai-receptionist')}
                className="text-xs font-mono font-bold text-[#00d4ff] flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Legal AI Deployment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* VERTICAL 6: E-commerce & Brands */}
          <div className="bg-[#0d1117] border border-[#00d4ff]/10 hover:border-[#00d4ff]/40 p-6 sm:p-7 rounded-sm space-y-5 flex flex-col justify-between transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-widest block">
                E-commerce & Brands
              </span>
              <h3 className="text-xl font-bold text-white font-sans leading-snug">
                Automate Customer Conversations At Scale
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed font-sans">
                PEXEK helps brands handle customer calls, order questions, and sales opportunities.
              </p>

              {/* AI Deployment Includes */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
                  AI Deployment Includes:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-200 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Order status assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Customer support automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Sales assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
                    <span>Follow-up messaging</span>
                  </li>
                </ul>
              </div>

              {/* Common Use Cases */}
              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                  Common Use Cases:
                </span>
                <ul className="space-y-1 text-xs text-[#94a3b8] font-sans">
                  <li>• "Where is my order?" calls</li>
                  <li>• Product questions</li>
                  <li>• Checkout assistance</li>
                  <li>• Customer support</li>
                </ul>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={() => onNavigate('/ecommerce-ai-receptionist')}
                className="text-xs font-mono font-bold text-[#00d4ff] flex items-center gap-1.5 hover:underline"
              >
                <span>Explore Commerce AI Deployment</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* FINAL CTA BLOCK */}
        <div className="bg-[#050507] border-t-2 border-t-[#00d4ff] border-x border-b border-white/10 p-8 sm:p-10 rounded-sm text-center space-y-4 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white font-sans">
            Don't See Your Industry?
          </h3>
          <p className="text-sm text-[#94a3b8] max-w-xl mx-auto font-sans leading-relaxed">
            We design custom AI voice deployments for businesses with high call volume, repetitive workflows, and valuable customer conversations.
          </p>
          <div>
            <button
              onClick={onOpenAuditModal}
              className="btn-pexek-primary px-8 py-3.5 font-bold text-sm uppercase tracking-wider inline-flex items-center gap-2"
            >
              <span>Book Your Strategy Audit</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>

      </section>
      {/* INDUSTRIES SECTION END */}

      {/* CUSTOM PRICING TEASER */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#00d4ff]">
              TRANSPARENT VALUE ARCHITECTURE
            </span>
            <h2 className="text-3xl font-extrabold text-white font-sans">
              Custom Pricing. No Hidden Fees.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              Every deployment is scoped to your call volume, integrations, and revenue goals. We don't charge per generic software seat — we partner on revenue infrastructure.
            </p>
          </div>

          <div className="space-y-4 w-full lg:w-auto shrink-0">
            <button
              onClick={() => { onNavigate('/pricing'); window.scrollTo(0, 0); }}
              className="btn-pexek-secondary text-sm px-8 py-4 font-bold w-full sm:w-auto flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>See How Pricing & Models Work</span>
              <ArrowRight className="w-4 h-4 text-[#00d4ff]" />
            </button>
            {/* Custom deployment roadmap note */}
            <p className="text-xs text-slate-400 text-center font-mono">
              Custom deployment roadmap included
            </p>
          </div>
        </div>
      </section>

      {/* PART 2: TRUST SIGNALS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-sm space-y-6">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider block">
              ENTERPRISE DEPLOYMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Enterprise-Ready AI Deployment
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs font-mono text-slate-200">
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>Industry-specific AI workflows</span>
            </div>
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>Secure business integrations</span>
            </div>
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>Custom conversation design</span>
            </div>
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>CRM & calendar connectivity</span>
            </div>
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>Continuous optimization support</span>
            </div>
          </div>
        </div>
      </section>

      {/* PART 1: NEW ABOUT SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-sm space-y-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-widest block">
              ABOUT PEXEK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans leading-tight">
              Building The Next Generation Of Business Communication
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              <p>
                PEXEK helps businesses deploy AI voice systems that improve customer communication, automate repetitive workflows, and capture revenue opportunities that are often lost through slow response times.
              </p>
              <p>
                We combine AI automation technology with industry-specific workflows, business process design, and continuous optimization to help companies adopt AI without operational complexity.
              </p>
            </div>
          </div>

          {/* 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-white/10">
            <div className="bg-[#050507] p-6 border border-white/10 rounded-sm space-y-2">
              <h3 className="text-base font-bold text-white font-sans flex items-center gap-2">
                <span className="text-[#00d4ff] font-mono">01.</span> Strategy First
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                We understand your customer journey before designing automation.
              </p>
            </div>
            <div className="bg-[#050507] p-6 border border-white/10 rounded-sm space-y-2">
              <h3 className="text-base font-bold text-white font-sans flex items-center gap-2">
                <span className="text-[#00d4ff] font-mono">02.</span> Business-Focused AI
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                We build systems around your workflows, not generic conversations.
              </p>
            </div>
            <div className="bg-[#050507] p-6 border border-white/10 rounded-sm space-y-2">
              <h3 className="text-base font-bold text-white font-sans flex items-center gap-2">
                <span className="text-[#00d4ff] font-mono">03.</span> Continuous Optimization
              </h3>
              <p className="text-xs text-slate-400 font-sans leading-relaxed">
                We improve AI performance as your business evolves.
              </p>
            </div>
          </div>

          {/* Founder Block */}
          <div className="border-l-2 border-l-[#00d4ff] bg-[#050507] p-6 sm:p-8 rounded-r-sm space-y-3">
            <span className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider block">
              Built By:
            </span>
            <div>
              <p className="text-lg font-bold text-white font-sans">Salah Eddine El Qaous</p>
              <p className="text-xs text-[#00d4ff] font-mono">Founder, PEXEK</p>
            </div>
            <p className="text-sm text-slate-300 italic font-sans leading-relaxed">
              "Building AI systems that help businesses respond faster, operate smarter, and capture more customer opportunities."
            </p>
          </div>
        </div>
      </section>

      {/* PART 3: SECURITY SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-sm space-y-6">
          <div className="space-y-2 border-b border-white/10 pb-6">
            <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider block">
              SECURITY & DATA PROTECTION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
              Business Data Protection
            </h2>
            <p className="text-sm text-slate-300 font-sans">
              PEXEK deployments are designed with security-focused workflows including:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-slate-200">
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>Encrypted data transmission</span>
            </div>
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>Controlled system access</span>
            </div>
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>Privacy-focused architecture</span>
            </div>
            <div className="bg-[#050507] p-4 border border-white/10 rounded-sm flex items-center gap-2">
              <span className="text-[#00d4ff] font-bold shrink-0">✓</span>
              <span>Industry-specific compliance considerations</span>
            </div>
          </div>
        </div>
      </section>

      {/* EDIT 14: LEVEL 2 — MID-PAGE FINAL CTA SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-8">
        <StandardCtaSection
          level={2}
          title="Your Competitors Are Already Using AI to Answer Calls."
          subtitle="The question isn't whether AI voice works. It's whether you'll deploy it before they dominate your market."
          onOpenAuditModal={onOpenAuditModal}
        />
      </section>

    </div>
  );
};
