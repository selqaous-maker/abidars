import React, { useState } from 'react';
import { PagePath } from '../../types';
import { ServiceCrossLinks } from '../../components/ServiceCrossLinks';
import { 
  Phone, 
  MessageCircle, 
  PhoneForwarded, 
  Calendar, 
  UserPlus, 
  Database, 
  MessageSquare, 
  Mic, 
  Globe, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Zap,
  CalendarCheck,
  TrendingUp,
  Wallet,
  Clock,
  Eye,
  FileText,
  Target,
  BarChart3,
  CheckCircle,
  Smile,
  ScrollText,
  Settings,
  Shield,
  RefreshCw,
  MousePointer
} from 'lucide-react';

interface AIReceptionistPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIReceptionistPage: React.FC<AIReceptionistPageProps> = ({ 
  onNavigate, 
  onOpenAuditModal 
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const kpiCards = [
    {
      value: '< 1 Second',
      label: 'Average Answer Time',
      disclaimer: 'Based on voice infrastructure benchmarks. Actual speed varies by call volume.',
    },
    {
      value: '24/7',
      label: 'Always Available',
      disclaimer: 'System capability. Actual coverage depends on deployment configuration.',
    },
    {
      value: 'Unlimited',
      label: 'Concurrent Calls',
      disclaimer: 'System architecture supports unlimited simultaneous conversations.',
    },
    {
      value: '100+',
      label: 'Supported Languages',
      disclaimer: 'Language support depends on voice engine configuration. Actual capabilities vary.',
    },
  ];

  const howItWorksSteps = [
    {
      step: '01',
      title: 'Customer Calls',
      description: 'Inbound call to your business number',
      micro: 'Inbound line receipt',
    },
    {
      step: '02',
      title: 'AI Answers',
      description: 'Configured with your brand voice and greeting',
      micro: 'Natural conversational greeting',
    },
    {
      step: '03',
      title: 'Qualifies Intent',
      description: 'Identifies if it\'s booking, inquiry, support, or sales',
      micro: 'Intent screening engine',
    },
    {
      step: '04',
      title: 'Books Appointment',
      description: 'Real-time calendar check and scheduling',
      micro: 'Instant calendar sync',
    },
    {
      step: '05',
      title: 'Updates CRM',
      description: 'Conversation logged in your connected system',
      micro: 'Automatic record logging',
    },
    {
      step: '06',
      title: 'Sends WhatsApp Confirmation',
      description: 'Follow-up message sent automatically',
      micro: 'Instant client receipt',
    },
  ];

  const coreCapabilities = [
    {
      icon: <Phone className="w-6 h-6 text-[#00d4ff]" />,
      title: 'AI Phone Answering',
      description: 'Answers every call instantly with your configured brand voice and knowledge.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'FAQ Responses',
      description: 'Handles common questions about hours, location, services, and policies automatically.',
    },
    {
      icon: <PhoneForwarded className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Call Routing',
      description: 'Routes urgent or complex calls to the right team member with full context.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Appointment Booking',
      description: 'Books appointments directly into your calendar with real-time availability checks.',
    },
    {
      icon: <UserPlus className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Lead Capture',
      description: 'Collects caller information, interest level, and contact details for follow-up.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'CRM Sync',
      description: 'Logs every conversation and booking to your connected CRM or spreadsheet.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#00d4ff]" />,
      title: 'WhatsApp Follow-up',
      description: 'Sends confirmations, reminders, and intake links automatically after every call.',
    },
    {
      icon: <Mic className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Call Recording & Transcripts',
      description: 'Every conversation is recorded and transcribed for review and training.',
    },
    {
      icon: <Globe className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Multilingual Support',
      description: 'Handles conversations in 100+ languages based on your deployment configuration.',
    },
  ];

  const businessImpact = [
    {
      icon: <Zap className="w-6 h-6 text-[#00d4ff]" />,
      title: 'First-Ring Answer',
      description: 'Every caller is greeted instantly. No hold music, no voicemail, no missed opportunities.',
    },
    {
      icon: <CalendarCheck className="w-6 h-6 text-[#00d4ff]" />,
      title: 'More Booked Appointments',
      description: '24/7 availability means customers schedule outside business hours and during peak times.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Higher Lead Conversion',
      description: 'Instant response and professional qualification keep warm leads from calling competitors.',
    },
    {
      icon: <Wallet className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Lower Operational Load',
      description: 'Routine calls are handled automatically so your team focuses on revenue-generating work.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00d4ff]" />,
      title: '24/7 Customer Coverage',
      description: 'After-hours, weekends, and holidays — every call is answered according to your rules.',
    },
    {
      icon: <Eye className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Complete Conversation Visibility',
      description: 'Every call is logged, transcribed, and synced to your systems for full accountability.',
    },
  ];

  const industries = [
    {
      icon: '🦷',
      title: 'Dental Practices',
      path: '/dental-ai-receptionist' as PagePath,
    },
    {
      icon: '🏥',
      title: 'Healthcare & Medical',
      path: '/healthcare-ai-receptionist' as PagePath,
    },
    {
      icon: '🏠',
      title: 'Real Estate',
      path: '/real-estate-ai-receptionist' as PagePath,
    },
    {
      icon: '⚖️',
      title: 'Legal',
      path: '/legal-ai-receptionist' as PagePath,
    },
    {
      icon: '🛍️',
      title: 'E-commerce',
      path: '/ecommerce-ai-receptionist' as PagePath,
    },
    {
      icon: '💼',
      title: 'Business Services',
      path: '/business-services-ai' as PagePath,
    },
  ];

  const deploymentProcessSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your business workflows, call types, and success criteria.',
    },
    {
      step: '02',
      title: 'AI Design',
      description: 'Conversation architecture, knowledge base, and brand voice configuration.',
    },
    {
      step: '03',
      title: 'Integration',
      description: 'CRM, Calendar, Phone, WhatsApp — connected to your existing stack.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Internal simulation, edge-case handling, and staff review.',
    },
    {
      step: '05',
      title: 'Go Live',
      description: 'Production deployment with monitoring and support.',
    },
    {
      step: '06',
      title: 'Continuous Optimization',
      description: 'Monthly improvements based on call data and feedback.',
    },
  ];

  const conversationIntelligence = [
    {
      icon: <FileText className="w-6 h-6 text-[#00d4ff]" />,
      title: 'AI Summary',
      description: 'Every conversation summarized with key points, outcomes, and next steps.',
    },
    {
      icon: <Target className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Customer Intent',
      description: 'Calls categorized by purpose: sales, support, complaint, or inquiry.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Lead Score',
      description: 'Qualification data automatically scored based on your configured criteria.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Booking Status',
      description: 'Appointment confirmations, reschedules, and cancellations tracked instantly.',
    },
    {
      icon: <Smile className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Sentiment Analysis',
      description: 'Caller tone and satisfaction indicators flagged for review.',
    },
    {
      icon: <ScrollText className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Call Transcript',
      description: 'Full searchable text of every conversation for training and compliance.',
    },
  ];

  const integrationCategories = [
    {
      title: 'CRM',
      tools: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho CRM', 'Pipedrive'],
    },
    {
      title: 'Calendars',
      tools: ['Google Calendar', 'Microsoft Outlook', 'Calendly', 'Cal.com'],
    },
    {
      title: 'Communication',
      tools: ['WhatsApp Business API', 'Slack', 'Microsoft Teams', 'Twilio'],
    },
    {
      title: 'Automation',
      tools: ['Zapier', 'Make', 'Webhooks', 'REST API'],
    },
    {
      title: 'Productivity',
      tools: ['Google Sheets', 'Microsoft Excel', 'Notion', 'Airtable'],
    },
  ];

  const comparisonTraditional = [
    'Business hours only',
    'One call at a time',
    'Voicemail after hours',
    'Manual callbacks and reminders',
    'Front desk overwhelmed during peak hours',
  ];

  const comparisonAi = [
    '24/7 call answering',
    'Unlimited simultaneous calls',
    'No voicemail — every call handled',
    'Automatic SMS/WhatsApp follow-ups',
    'Team focused on high-value work, not phone tag',
  ];

  const whyPexekCards = [
    {
      icon: <Settings className="w-6 h-6 text-[#00d4ff]" />,
      title: 'AI Tailored to Your Workflows',
      description: 'Every deployment is configured around your specific call types, scripts, and business rules.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Enterprise-Grade Deployment',
      description: 'Encrypted conversations, role-based access, and secure data handling by default.',
    },
    {
      icon: <PhoneForwarded className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Human Escalation When Needed',
      description: 'Complex calls are warm-transferred to your team with full conversation context.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'CRM-First Architecture',
      description: 'Every call is logged, scored, and synced to your systems automatically.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Continuous Optimization',
      description: 'Monthly reviews and adjustments based on real call data and business changes.',
    },
    {
      icon: <MousePointer className="w-6 h-6 text-[#00d4ff]" />,
      title: 'No-Code Experience for Your Team',
      description: 'Your staff manages appointments and reviews calls through familiar tools — no technical training required.',
    },
  ];

  const faqs = [
    {
      q: 'Can the AI answer calls in multiple languages?',
      a: 'Yes. PEXEK supports 100+ languages depending on configuration, making your business accessible to diverse callers.',
    },
    {
      q: 'Can it book appointments into our calendar?',
      a: 'Yes. PEXEK integrates with Google Calendar, Outlook, Calendly, and other scheduling tools. Appointments appear instantly.',
    },
    {
      q: 'Can it transfer calls to our team?',
      a: 'Yes. You define escalation rules. PEXEK can warm-transfer urgent or complex calls to the right person with full context.',
    },
    {
      q: 'Can it send follow-up messages?',
      a: 'Yes. WhatsApp Business API and SMS are included. Confirmations, reminders, and intake links are sent automatically.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and onboarding.',
    },
    {
      q: 'Does it work with our existing phone number?',
      a: 'Yes. PEXEK can deploy on your existing business number or provide a new one based on your requirements.',
    },
    {
      q: 'Is this a subscription or software license?',
      a: 'No. PEXEK is a deployment partner. We design and configure your AI voice system as a tailored project with ongoing optimization.',
    },
  ];

  const scrollToBlueprint = () => {
    onNavigate('/how-it-works');
  };

  return (
    <div className="space-y-28 pb-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white font-sans">
      
      {/* SECTION 1 — HERO */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-[0.1em] rounded-[2px]">
          <Zap className="w-3.5 h-3.5" /> Enterprise AI Voice Infrastructure
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          The AI Receptionist That Never Misses a Customer Call
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          Never let another customer reach voicemail. PEXEK deploys enterprise <strong className="text-white">AI Receptionist</strong>, <strong className="text-white">24/7 AI Receptionist</strong>, and <strong className="text-white">AI Phone Answering Service</strong> solutions featuring a <strong className="text-white">Business AI Voice Agent</strong> that delivers <strong className="text-white">Automated Call Answering</strong> as your <strong className="text-white">AI Front Desk</strong> and <strong className="text-white">Virtual Receptionist AI</strong>, providing <strong className="text-white">AI Call Handling</strong>, <strong className="text-white">Smart Phone Answering</strong>, and <strong className="text-white">Enterprise Voice AI</strong> to answer every call, qualify opportunities, book appointments, and synchronize every conversation with your CRM—24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Strategy Audit →
          </button>
          
          <button
            onClick={scrollToBlueprint}
            className="text-[#00d4ff] hover:underline font-mono text-xs uppercase tracking-wider py-2 px-4 transition-all flex items-center gap-1 cursor-pointer"
          >
            View Deployment Blueprint →
          </button>
        </div>
      </div>

      {/* SECTION 2 — KPI CARDS (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card, idx) => (
          <div 
            key={idx} 
            className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-3 relative overflow-hidden group hover:border-[#00d4ff]/40 transition-colors shadow-lg"
          >
            <div className="text-4xl sm:text-5xl font-extrabold font-mono text-[#00d4ff] tracking-tight">
              {card.value}
            </div>
            <div className="text-sm font-bold text-white font-sans uppercase tracking-tight">
              {card.label}
            </div>
            <p className="text-xs text-[#94a3b8] font-sans leading-normal pt-2 border-t border-white/5 italic">
              {card.disclaimer}
            </p>
          </div>
        ))}
      </div>

      {/* SECTION 3 — CONVERSATIONAL PIPELINE (HOW IT WORKS) */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            CONVERSATIONAL PIPELINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How PEXEK Handles Your Customer Calls
          </h2>
          <p className="text-xs text-[#94a3b8]">
            From initial ring to qualification, booking, CRM sync, and instant WhatsApp confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
          {howItWorksSteps.map((step, idx) => (
            <div key={idx} className="relative bg-[#050507] border border-white/10 p-4 rounded-[2px] space-y-2 flex flex-col justify-between hover:border-[#00d4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#00d4ff] font-bold block">
                  STEP {step.step}
                </span>
                <h4 className="text-xs font-bold text-white mt-1">
                  {step.title}
                </h4>
                <p className="text-[11px] text-[#94a3b8] mt-1.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="pt-2 border-t border-white/5 text-[9px] font-mono text-[#00d4ff]/80">
                {step.micro}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4 — SYSTEM CAPABILITIES (9 Features in 3x3 Grid) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SYSTEM CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What PEXEK Deploys
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Comprehensive voice automation designed and configured specifically for your workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreCapabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-[2px] bg-[#050507] border border-white/10 flex items-center justify-center">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5 — BUSINESS IMPACT */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL VALUE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Business Impact
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Deploying a PEXEK AI Receptionist helps businesses reduce response time, capture more opportunities, and eliminate repetitive front-desk work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessImpact.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-[2px] bg-[#050507] border border-white/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 6 — INDUSTRY SOLUTIONS */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            INDUSTRY SOLUTIONS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Deployed Across Industries
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK designs custom AI receptionists for these business verticals:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <div 
              key={idx}
              onClick={() => onNavigate(ind.path)}
              className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/50 transition-all duration-200 cursor-pointer group"
            >
              <div className="text-3xl">{ind.icon}</div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                {ind.title}
              </h3>
              <div className="text-xs font-mono font-bold text-[#00d4ff] flex items-center gap-1 group-hover:underline">
                Learn More →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 7 — ENTERPRISE DEPLOYMENT PROCESS */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            METHODOLOGY & EXECUTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise Deployment Process
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK does not sell seats or recurring software licenses. We design, build, and deploy your AI voice infrastructure as a tailored project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {deploymentProcessSteps.map((step, idx) => (
            <div key={idx} className="bg-[#050507] border border-white/10 p-4 rounded-[2px] space-y-2 flex flex-col justify-between hover:border-[#00d4ff]/40 transition-colors">
              <div>
                <span className="text-[10px] font-mono text-[#00d4ff] font-bold block">
                  PHASE {step.step}
                </span>
                <h4 className="text-xs font-bold text-white mt-1">
                  {step.title}
                </h4>
                <p className="text-[11px] text-[#94a3b8] mt-1.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8 — CONVERSATION INTELLIGENCE */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            VOICE ANALYTICS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Every Conversation Becomes Business Intelligence
          </h2>
          <p className="text-xs text-[#94a3b8]">
            After every interaction, PEXEK automatically generates actionable insights from your voice channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conversationIntelligence.map((ci, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-[2px] bg-[#050507] border border-white/10 flex items-center justify-center">
                {ci.icon}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {ci.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {ci.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 9 — ENTERPRISE INTEGRATIONS */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            ECOSYSTEM CONNECTIVITY
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise Integrations
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Connect your AI voice infrastructure with the tools your business already depends on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {integrationCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-[#00d4ff] border-b border-white/10 pb-2">
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.tools.map((tool, tIdx) => (
                  <li key={tIdx} className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-[12px] text-[#94a3b8] text-center max-w-2xl mx-auto italic">
          Integration availability depends on your existing system architecture and API accessibility. Custom connections are available for systems with open APIs.
        </p>
      </div>

      {/* SECTION 10 — SYSTEM COMPARISON (THIS PAGE ONLY) */}
      <div className="space-y-10 max-w-5xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SYSTEM COMPARISON
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Traditional Phone Handling vs. PEXEK AI Receptionist
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional */}
          <div className="bg-[#0d1117]/60 border border-white/5 p-8 rounded-[2px] space-y-6 opacity-85">
            <h3 className="text-lg font-bold text-slate-300 font-sans border-b border-white/10 pb-4">
              Traditional Phone Handling
            </h3>
            <ul className="space-y-4 text-xs font-sans text-slate-400">
              {comparisonTraditional.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PEXEK AI */}
          <div className="bg-[#0d1117] border border-[#00d4ff]/40 p-8 rounded-[2px] space-y-6 shadow-[0_0_30px_rgba(0,212,255,0.08)]">
            <div className="border-b border-white/10 pb-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-white font-sans">
                PEXEK AI Receptionist
              </h3>
              <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 px-2 py-0.5 rounded-[2px]">
                RECOMMENDED
              </span>
            </div>
            <ul className="space-y-4 text-xs font-sans text-slate-200">
              {comparisonAi.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00d4ff] shrink-0 mt-0.5" />
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* SECTION 11 — WHY PEXEK */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            DEPLOYMENT ADVANTAGES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Businesses Deploy With PEXEK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyPexekCards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-[2px] bg-[#050507] border border-white/10 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-white tracking-tight">
                {card.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 12 — FAQ */}
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-[#0d1117] border border-white/5 rounded-[2px] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="text-sm font-bold text-white font-sans">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#00d4ff] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs text-[#94a3b8] leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* SECTION — CONTEXTUAL CROSS LINKS */}
      <ServiceCrossLinks 
        currentPath="/ai-receptionist"
        type="service"
        onNavigate={onNavigate}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* SECTION 13 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready To Modernize Your Customer Communication?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Deploy AI voice infrastructure built specifically for your business—not generic software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-left py-2">
          {[
            'Workflow analysis',
            'Call handling review',
            'Automation recommendations',
            'Personalized deployment roadmap',
          ].map((bullet, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-200">
              <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          <button
            onClick={onOpenAuditModal}
            className="px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] inline-flex items-center gap-2 cursor-pointer"
          >
            Book Strategy Audit →
          </button>
          <p className="text-[11px] text-[#94a3b8] italic">
            30-minute session. No obligation. No technical preparation required.
          </p>
        </div>
      </div>

      {/* FOOTER DISCLAIMER */}
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="bg-[#0a0e1a] border border-white/5 p-6 rounded-[2px] text-center max-w-5xl mx-auto">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            Every deployment is customized according to the organization's workflows, data requirements, and existing software ecosystem. PEXEK does not provide legal, financial, or medical advice. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
