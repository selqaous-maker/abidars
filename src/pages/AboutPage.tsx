import React from 'react';
import { PagePath } from '../types';
import {
  Bot,
  UserCheck,
  CalendarCheck,
  Workflow,
  Target,
  Cpu,
  Layers,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Shield,
  PhoneCall,
  Activity,
  Building2,
  Scale,
  Wrench,
  Car,
  Briefcase,
  ShoppingBag,
  Zap,
  Handshake,
  Lock
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: (source?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const whatWeDoCards = [
    {
      icon: <PhoneCall className="w-5 h-5 text-[#00d4ff]" />,
      title: 'AI Receptionists',
      description: 'Answer customer calls instantly.'
    },
    {
      icon: <UserCheck className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Lead Qualification',
      description: 'Qualify prospects before your team gets involved.'
    },
    {
      icon: <CalendarCheck className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Appointment Automation',
      description: 'Book appointments directly into your calendar.'
    },
    {
      icon: <Workflow className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Workflow Automation',
      description: 'Connect conversations to your CRM and business systems.'
    }
  ];

  const deploymentPhilosophy = [
    {
      icon: <Target className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Strategy First',
      description: 'Every deployment starts by understanding your business.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Designed Around Your Workflow',
      description: 'We adapt AI to your operations—not the other way around.'
    },
    {
      icon: <Layers className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Managed Deployment',
      description: 'From planning to launch, PEXEK handles the implementation.'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Continuous Optimization',
      description: 'We improve performance using real customer conversations.'
    }
  ];

  const industries = [
    { name: 'Dental', icon: <Activity className="w-4 h-4 text-[#00d4ff]" /> },
    { name: 'Healthcare', icon: <Activity className="w-4 h-4 text-[#00d4ff]" /> },
    { name: 'Real Estate', icon: <Building2 className="w-4 h-4 text-[#00d4ff]" /> },
    { name: 'Legal', icon: <Scale className="w-4 h-4 text-[#00d4ff]" /> },
    { name: 'Home Services', icon: <Wrench className="w-4 h-4 text-[#00d4ff]" /> },
    { name: 'Automotive', icon: <Car className="w-4 h-4 text-[#00d4ff]" /> },
    { name: 'Business Services', icon: <Briefcase className="w-4 h-4 text-[#00d4ff]" /> },
    { name: 'E-commerce', icon: <ShoppingBag className="w-4 h-4 text-[#00d4ff]" /> }
  ];

  const whyChooseUs = [
    'Fully Managed Deployment',
    'AI Voice Specialists',
    'Fast Deployment',
    'Enterprise Integrations',
    'Continuous Optimization',
    'Built Around Existing Workflows'
  ];

  const values = [
    {
      icon: <PhoneCall className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Reliability',
      description: 'Every customer deserves an answer.'
    },
    {
      icon: <Zap className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Simplicity',
      description: 'AI should reduce complexity—not create it.'
    },
    {
      icon: <Lock className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Security',
      description: 'Business data deserves enterprise protection.'
    },
    {
      icon: <Handshake className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Partnership',
      description: 'We measure success by your operational outcomes.'
    }
  ];

  return (
    <div className="space-y-20 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="text-center space-y-6 pt-4 max-w-4xl mx-auto">
        <span className="text-xs font-mono uppercase font-bold tracking-widest text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/20 px-3 py-1 rounded-[2px] inline-block">
          About PEXEK
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          AI Voice Infrastructure For Modern Businesses
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
          We help organizations deploy AI voice systems that answer every conversation, automate repetitive workflows, and improve operational efficiency.
        </p>
        <div className="pt-2">
          <button
            onClick={() => onOpenAuditModal('about_hero')}
            className="w-full sm:w-auto px-8 py-4 bg-[#00d4ff] text-black font-bold text-sm tracking-wide hover:bg-[#00d4ff]/90 transition-all duration-200 rounded-[2px] inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.25)]"
          >
            Book Strategy Audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 2. OUR MISSION */}
      <section className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-[2px] space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#00d4ff]" />
        <span className="text-xs font-mono uppercase font-bold text-[#00d4ff] tracking-wider block">
          Our Mission
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          We Believe Every Customer Conversation Matters
        </h2>
        <div className="space-y-4 max-w-4xl">
          <p className="text-lg sm:text-xl text-[#00d4ff] font-semibold leading-snug">
            Every missed call is a missed opportunity.
          </p>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            PEXEK helps businesses respond instantly using AI voice systems that answer, qualify, route, and automate customer interactions—24 hours a day.
          </p>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase font-bold text-[#00d4ff] tracking-wider block">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            What We Do
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDoCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#0a0e1a] border border-white/10 p-6 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-[2px] bg-[#00d4ff]/10 flex items-center justify-center border border-[#00d4ff]/30">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. HOW WE WORK (OUR DEPLOYMENT PHILOSOPHY) */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase font-bold text-[#00d4ff] tracking-wider block">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Deployment Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {deploymentPhilosophy.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0a0e1a] border border-white/10 p-6 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-[2px] bg-[#00d4ff]/10 flex items-center justify-center border border-[#00d4ff]/30">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INDUSTRIES */}
      <section className="bg-[#0a0e1a] border border-white/10 p-8 sm:p-12 rounded-[2px] space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-mono uppercase font-bold text-[#00d4ff] tracking-wider block">
            Industries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Built For Service Businesses
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-[#050507] border border-white/10 p-4 rounded-[2px] flex items-center gap-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-2 rounded-[2px] bg-[#00d4ff]/10 border border-[#00d4ff]/20 shrink-0">
                {ind.icon}
              </div>
              <span className="text-sm font-semibold text-white">
                {ind.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('/industry-playbooks')}
            className="px-6 py-3 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-xs uppercase tracking-wider transition-all duration-200 rounded-[2px] inline-flex items-center gap-2"
          >
            Explore Industry Playbooks →
          </button>
        </div>
      </section>

      {/* 6. WHY BUSINESSES CHOOSE PEXEK */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase font-bold text-[#00d4ff] tracking-wider block">
            Competitive Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Businesses Choose PEXEK
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((reason, idx) => (
            <div
              key={idx}
              className="bg-[#0a0e1a] border border-white/10 p-6 rounded-[2px] flex items-center gap-4 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/30 flex items-center justify-center shrink-0 text-[#00d4ff]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-base font-bold text-white">
                {reason}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. OUR VALUES */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase font-bold text-[#00d4ff] tracking-wider block">
            Guiding Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Our Values
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0a0e1a] border border-white/10 p-6 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-[2px] bg-[#00d4ff]/10 flex items-center justify-center border border-[#00d4ff]/30">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="bg-gradient-to-br from-[#0a0e1a] via-[#0d1424] to-[#0a0e1a] border border-[#00d4ff]/30 p-10 sm:p-14 rounded-[2px] text-center space-y-6 shadow-[0_0_30px_rgba(0,212,255,0.1)]">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Ready To Modernize Customer Conversations?
        </h2>
        <div className="pt-2">
          <button
            onClick={() => onOpenAuditModal('about_final_cta')}
            className="px-8 py-4 bg-[#00d4ff] text-black font-bold text-sm tracking-wide hover:bg-[#00d4ff]/90 transition-all duration-200 rounded-[2px] inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
          >
            Book a Strategy Audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
