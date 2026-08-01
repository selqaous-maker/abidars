import React from 'react';
import { PagePath } from '../types';
import { 
  Settings, 
  Mic, 
  BookOpen, 
  Database, 
  CheckCircle, 
  Rocket, 
  MessageCircle, 
  GitBranch, 
  ArrowRight,
  Check,
  Clock,
  KeyRound,
  FileText,
  CheckCheck,
  Phone,
  PhoneCall,
  Brain,
  Zap,
  Bell,
  BarChart2,
  ShieldCheck,
  Plug,
  GraduationCap,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

interface ManagedDeploymentPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const ManagedDeploymentPage: React.FC<ManagedDeploymentPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const deploymentSteps = [
    {
      day: 'Day 0',
      title: 'Strategy Audit & Call Flow Mapping',
      description: 'We analyze how your business currently handles customer conversations.',
      itemsTitle: 'We map:',
      items: [
        'Common customer questions',
        'Qualification requirements',
        'Appointment workflows',
        'Escalation rules',
        'Existing business systems',
      ],
      deliverable: 'Your custom AI deployment blueprint.',
    },
    {
      day: 'Day 1–3',
      title: 'AI Agent Configuration & Knowledge Setup',
      description: 'We build your AI agent experience based on your business processes.',
      itemsTitle: 'Includes:',
      items: [
        'Brand voice configuration',
        'Business knowledge setup',
        'Conversation flows',
        'Objection handling scenarios',
        'Industry-specific workflows',
      ],
    },
    {
      day: 'Day 4–7',
      title: 'Integration & Workflow Setup',
      description: 'We connect your AI system with your existing operations.',
      itemsTitle: 'Includes:',
      items: [
        'CRM connection',
        'Calendar integration',
        'WhatsApp/SMS workflows',
        'Lead routing',
        'Data synchronization',
      ],
    },
    {
      day: 'Day 8–10',
      title: 'Testing & Conversation Optimization',
      description: 'Before launch, we test real-world scenarios.',
      itemsTitle: 'We evaluate:',
      items: [
        'Customer questions',
        'Edge cases',
        'Transfer scenarios',
        'Booking accuracy',
        'Response quality',
      ],
    },
    {
      day: 'Day 11–14',
      title: 'Launch & Optimization',
      description: 'Your AI system goes live with continuous improvement.',
      itemsTitle: 'Includes:',
      items: [
        'Production deployment',
        'Performance monitoring',
        'Initial optimization',
        'Team handover',
      ],
    },
  ];

  const deploymentIncludes = [
    {
      icon: <Settings className="w-5 h-5 text-[#00d4ff]" />,
      title: 'AI Workflow Design',
      description: 'Custom conversation flows built around your business rules and customer scenarios.',
    },
    {
      icon: <Mic className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Voice Experience Configuration',
      description: 'Brand voice, greeting scripts, tone, and multilingual settings configured to your standards.',
    },
    {
      icon: <BookOpen className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Knowledge Base Setup',
      description: 'Your business information, FAQs, policies, and product details encoded for AI responses.',
    },
    {
      icon: <Database className="w-5 h-5 text-[#00d4ff]" />,
      title: 'CRM & Calendar Integration',
      description: 'Connected to your existing systems for real-time data sync and appointment booking.',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Testing and Quality Review',
      description: 'End-to-end simulation, edge-case testing, and approval workflow before go-live.',
    },
    {
      icon: <Rocket className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Launch Support & Team Handover',
      description: 'Production deployment with monitoring, documentation, and staff onboarding.',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Documentation & Admin Training',
      description: 'Complete system documentation, call flow guides, and training for your internal team.',
    },
  ];

  const teamRequirements = [
    {
      icon: <Clock className="w-5 h-5 text-[#00d4ff]" />,
      title: 'One 30-Minute Strategy Session',
      description: 'We map your call flow, business rules, and success criteria in a single focused conversation.',
    },
    {
      icon: <KeyRound className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Access to Your Existing Systems',
      description: 'CRM, calendar, phone number, and messaging accounts — connected securely via API.',
    },
    {
      icon: <FileText className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Your FAQs and Business Information',
      description: 'Common questions, pricing, policies, and scripts so the AI speaks your language.',
    },
    {
      icon: <CheckCheck className="w-5 h-5 text-[#00d4ff]" />,
      title: 'One Final Approval Before Launch',
      description: 'You review and approve the AI experience before it goes live. No surprises.',
    },
  ];

  const graphicalFlow = [
    { icon: <Phone className="w-4 h-4 text-[#00d4ff]" />, title: 'Customer Calls' },
    { icon: <PhoneCall className="w-4 h-4 text-[#00d4ff]" />, title: 'PEXEK Answers' },
    { icon: <Brain className="w-4 h-4 text-[#00d4ff]" />, title: 'Understands Intent' },
    { icon: <Zap className="w-4 h-4 text-[#00d4ff]" />, title: 'Takes Action' },
    { icon: <Database className="w-4 h-4 text-[#00d4ff]" />, title: 'Updates CRM' },
    { icon: <Bell className="w-4 h-4 text-[#00d4ff]" />, title: 'Notifies Team' },
  ];

  const postLaunchCards = [
    {
      icon: <BarChart2 className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Weekly Performance Reviews',
      description: 'Call volume, conversation quality, and outcome metrics reviewed with your team.',
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Conversation Improvements',
      description: 'Scripts, responses, and flows refined based on real caller interactions.',
    },
    {
      icon: <GitBranch className="w-5 h-5 text-[#00d4ff]" />,
      title: 'New Workflows When Your Business Evolves',
      description: 'Services, hours, or processes change? Your AI is updated to match.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Ongoing Monitoring and Support',
      description: 'System health, integration status, and issue resolution handled continuously.',
    },
  ];

  const progressNodes = [
    'Strategy',
    'Design',
    'Build',
    'Integrate',
    'Test',
    'Launch',
    'Optimize'
  ];

  const integrationTools = [
    { name: 'HubSpot', category: 'CRM', iconBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30' },
    { name: 'Salesforce', category: 'CRM', iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/30' },
    { name: 'Google Calendar', category: 'Booking', iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' },
    { name: 'WhatsApp Business', category: 'Messaging', iconBg: 'bg-green-500/10 text-green-400 border-green-500/30' },
    { name: 'Twilio', category: 'Telephony', iconBg: 'bg-red-500/10 text-red-400 border-red-500/30' },
    { name: 'Slack', category: 'Alerts', iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30' },
    { name: 'Stripe', category: 'Payments', iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30' },
    { name: 'Zendesk', category: 'Support', iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30' },
  ];

  return (
    <div className="space-y-20 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-100">
      
      {/* SECTION 1: HERO */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-[2px]">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#00d4ff]">
            Managed Enterprise Deployment
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          We Design, Build, Integrate, and Launch Your AI Voice System — In As Little As 14 Days
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
          PEXEK designs, builds, integrates, and launches your AI voice system—from strategy and configuration to testing, deployment, and ongoing optimization. Your team stays focused on the business while we handle the implementation.
        </p>

        {/* 3 MICRO STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
          <div className="bg-[#0d1117] border border-white/5 p-5 rounded-[2px] space-y-2">
            <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
              Your Involvement ≈ 30 Minutes
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              One strategy session + final approval.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-white/5 p-5 rounded-[2px] space-y-2">
            <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
              PEXEK Handles 100% Managed Build
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Workflow design, AI configuration, integrations, testing, and launch support.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-white/5 p-5 rounded-[2px] space-y-2">
            <span className="text-xs font-mono text-[#00d4ff] uppercase font-bold tracking-wider block">
              Go-Live Criteria Client Approved
            </span>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Your AI system goes live only after reviewing and approving the final experience.
            </p>
          </div>
        </div>

        {/* HERO CTAS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-[2px] flex items-center justify-center gap-2"
          >
            Book Strategy Audit
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => onNavigate('/deployment-blueprints')}
            className="text-[#00d4ff] text-sm font-semibold hover:underline flex items-center gap-1 py-2 px-4"
          >
            View Deployment Blueprints →
          </button>
        </div>
      </section>

      {/* SECTION 2: VISUAL PROCESS (7 STEPS) */}
      <section className="space-y-6 bg-[#0a0e1a] border border-white/5 p-6 sm:p-8 rounded-[2px]">
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Visual Process (7 Steps)
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            The PEXEK Deployment Process
          </h2>
        </div>

        {/* CLEAN SINGLE TIMELINE STEP BAR */}
        <div className="pt-2 pb-2 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {progressNodes.map((node, idx) => (
              <div 
                key={idx} 
                className="bg-[#0d1117] border border-[#00d4ff]/20 py-3 px-2 rounded-[2px] text-center flex flex-col items-center justify-center space-y-1.5 relative group hover:border-[#00d4ff] transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-[#0a0e1a] border-2 border-[#00d4ff] text-[#00d4ff] font-mono text-[11px] font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <span className="text-[11px] font-bold text-white font-mono uppercase tracking-wider block">
                  {node}
                </span>
                {idx < progressNodes.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-[#00d4ff]/40 font-bold text-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-xs text-[#94a3b8] italic">
          Typical timeline: 14 days from strategy audit to production go-live. Actual duration varies by workflow complexity.
        </p>
      </section>

      {/* ENTERPRISE WORKFLOW & CRM VISUAL BLUEPRINT MOCKUP */}
      <section className="bg-[#0d1117] border border-white/10 p-6 sm:p-8 rounded-[2px] space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
              Live AI Call Sync & CRM Execution Infrastructure
            </h3>
          </div>
          <span className="text-xs font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-2.5 py-1 border border-[#00d4ff]/20 rounded-[2px] w-fit">
            System Status: Active • Latency 0.38s
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Mock Visual 1: Live Voice Call Event */}
          <div className="bg-[#0a0e1a] border border-white/5 p-5 rounded-[2px] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="text-white font-bold flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#00d4ff]" /> Inbound Call Stream
              </span>
              <span className="text-emerald-400 text-[11px]">Connected</span>
            </div>
            <div className="bg-[#050507] p-3 rounded-[2px] border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Caller: (415) 890-2100</span>
                <span>Voice: Neural AI</span>
              </div>
              <div className="h-6 flex items-center gap-1">
                {[40, 75, 30, 90, 60, 100, 45, 80, 50, 90, 70, 30, 85].map((h, i) => (
                  <span key={i} className="flex-1 bg-[#00d4ff] opacity-80 rounded-full" style={{ height: `${h}%` }} />
                ))}
              </div>
              <p className="text-[11px] text-slate-300 italic">
                "Hi, I'd like to book a consultation for tomorrow at 2 PM..."
              </p>
            </div>
          </div>

          {/* Mock Visual 2: Intent & Qualification */}
          <div className="bg-[#0a0e1a] border border-white/5 p-5 rounded-[2px] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="text-white font-bold flex items-center gap-2">
                <Brain className="w-4 h-4 text-[#00d4ff]" /> Intent Qualification
              </span>
              <span className="text-[#00d4ff] text-[11px]">Score 98/100</span>
            </div>
            <div className="bg-[#050507] p-3 rounded-[2px] border border-white/5 space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">Intent:</span>
                <span className="text-white font-bold">Appointment Booking</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Client Status:</span>
                <span className="text-emerald-400 font-bold">New Intake</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Verification:</span>
                <span className="text-white">API Pre-qualified</span>
              </div>
            </div>
          </div>

          {/* Mock Visual 3: Automated CRM & Calendar Sync */}
          <div className="bg-[#0a0e1a] border border-white/5 p-5 rounded-[2px] space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-[#94a3b8]">
              <span className="text-white font-bold flex items-center gap-2">
                <Database className="w-4 h-4 text-[#00d4ff]" /> Automated Action
              </span>
              <span className="text-purple-400 text-[11px]">Synced</span>
            </div>
            <div className="bg-[#050507] p-3 rounded-[2px] border border-white/5 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Calendar Slot Confirmed</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>CRM Lead Record Created</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>WhatsApp Confirmation Sent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 14-DAY TIMELINE */}
      <section id="deployment-roadmap" className="space-y-10 scroll-mt-24">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            14-Day Timeline
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            The 14-Day Deployment Roadmap
          </h2>
          <p className="text-sm text-[#94a3b8]">
            A structured, transparent process from first conversation to live system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {deploymentSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] flex flex-col justify-between space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#00d4ff] bg-[#00d4ff]/10 px-2.5 py-1 border border-[#00d4ff]/20 rounded-[2px]">
                    {step.day}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-2 space-y-2 border-t border-white/5">
                  <span className="text-[11px] font-semibold text-slate-300 block">
                    {step.itemsTitle}
                  </span>
                  <ul className="space-y-1.5">
                    {step.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-xs text-[#94a3b8] flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#00d4ff] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {step.deliverable && (
                <div className="pt-3 border-t border-[#00d4ff]/20">
                  <span className="text-[11px] font-mono font-semibold text-[#00d4ff] block">
                    {step.deliverable}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: WHAT EVERY PEXEK DEPLOYMENT INCLUDES */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Complete Implementation Scope
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Every PEXEK Deployment Includes
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Complete implementation support from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {deploymentIncludes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-5 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-2.5 bg-[#0a0e1a] border border-[#00d4ff]/20 w-fit rounded-[2px]">
                {item.icon}
              </div>
              <h3 className="text-sm font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: WHAT YOU NEED FROM YOUR TEAM */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Client Responsibilities
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What You Need From Your Team
          </h2>
          <p className="text-sm text-[#94a3b8]">
            During deployment, we only need a few things from you. Everything else is handled by PEXEK.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {teamRequirements.map((req, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-5 rounded-[2px] space-y-2.5 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-2.5 bg-[#0a0e1a] border border-[#00d4ff]/20 w-fit rounded-[2px]">
                {req.icon}
              </div>
              <h3 className="text-sm font-bold text-white">
                {req.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {req.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <span className="text-sm sm:text-base font-bold text-white tracking-wide">
            Estimated client time commitment: Less than one hour across the entire project.
          </span>
        </div>
      </section>

      {/* SECTION 6: OPERATIONAL FLOW (COMPACT, SLEEK PIPELINE) */}
      <section className="space-y-6">
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Operational Flow
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Your AI Works Every Day
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8]">
            Once live, every customer call follows the same automated process.
          </p>
        </div>

        {/* COMPACT SLEEK HORIZONTAL PIPELINE */}
        <div className="max-w-5xl mx-auto bg-[#0d1117] border border-white/10 p-4 sm:p-6 rounded-[2px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-center">
            {graphicalFlow.map((node, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-center justify-between relative group">
                <div className="bg-[#0a0e1a] border border-[#00d4ff]/20 px-3 py-3 rounded-[2px] w-full flex flex-col items-center justify-center text-center space-y-2 hover:border-[#00d4ff] transition-all">
                  <div className="p-1.5 bg-[#00d4ff]/10 rounded-[2px] shrink-0">
                    {node.icon}
                  </div>
                  <span className="text-xs font-bold text-white font-mono leading-tight">
                    {node.title}
                  </span>
                </div>
                {idx < graphicalFlow.length - 1 && (
                  <ChevronRight className="hidden lg:block w-4 h-4 text-[#00d4ff]/40 shrink-0 absolute -right-2 top-1/2 -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: POST-LAUNCH LIFECYCLE (WHAT HAPPENS AFTER GO-LIVE) */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Post-Launch Lifecycle
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Happens After Go-Live?
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Deployment doesn't end at launch. PEXEK continuously optimizes your AI system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {postLaunchCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-5 rounded-[2px] space-y-2.5 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#0a0e1a] border border-[#00d4ff]/20 rounded-[2px]">
                  {card.icon}
                </div>
                <h3 className="text-sm font-bold text-white">
                  {card.title}
                </h3>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: INTEGRATION CARD WITH REAL LOGO BADGES */}
      <section className="max-w-4xl mx-auto">
        <div className="bg-[#0d1117] border border-[#00d4ff]/30 p-6 sm:p-8 rounded-[2px] space-y-6 hover:border-[#00d4ff]/50 transition-all">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#0a0e1a] border border-[#00d4ff]/30 rounded-[2px] shrink-0">
                <Plug className="w-6 h-6 text-[#00d4ff]" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  Integrates With 250+ Business Systems
                </h3>
                <p className="text-xs text-[#94a3b8]">
                  Native connectors & webhooks for seamless real-time synchronization.
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('/integrations')}
              className="text-[#00d4ff] text-xs font-bold uppercase font-mono tracking-wider hover:underline shrink-0 flex items-center gap-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-3.5 py-2 rounded-[2px]"
            >
              <span>Explore Integrations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* VISUAL BADGES GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            {integrationTools.map((tool, idx) => (
              <div key={idx} className="bg-[#0a0e1a] border border-white/10 p-3 rounded-[2px] flex items-center gap-2.5">
                <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 border rounded-[2px] ${tool.iconBg}`}>
                  {tool.category}
                </span>
                <span className="text-xs font-bold text-white truncate">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="bg-[#0d1117] border border-[#00d4ff]/30 p-8 sm:p-12 rounded-[2px] text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Plan Your AI Deployment
          </h2>
          <p className="text-sm text-[#94a3b8]">
            In 30 minutes we'll map your workflows and show you exactly how AI fits into your business.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-200 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Analyze your current call process</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Identify automation opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Create your deployment roadmap</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={onOpenAuditModal}
            className="px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-[2px] inline-flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
          >
            Book Strategy Audit
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs font-mono font-semibold text-[#00d4ff] tracking-wide">
            No obligation. No technical preparation required.
          </p>
          <p className="text-[11px] text-[#94a3b8]">
            30-minute strategic mapping session.
          </p>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="bg-[#0a0e1a] border border-white/5 p-6 rounded-[2px] text-center max-w-5xl mx-auto">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            Every deployment is customized according to the organization's workflows, existing systems, and business requirements. Actual timelines vary based on workflow complexity, integration availability, and client feedback cycles. PEXEK does not provide legal, financial, or medical advice. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
