import React, { useState } from 'react';
import { PagePath } from '../../types';
import { ServiceCrossLinks } from '../../components/ServiceCrossLinks';
import { 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X, 
  Filter, 
  Database, 
  MousePointer, 
  PhoneCall, 
  BarChart3, 
  Settings, 
  Shield, 
  PhoneForwarded, 
  RefreshCw, 
  Users, 
  FileText, 
  Target, 
  CheckCircle, 
  Smile, 
  ScrollText,
  Clock
} from 'lucide-react';

interface AILeadQualificationPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AILeadQualificationPage: React.FC<AILeadQualificationPageProps> = ({ 
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
      label: 'First Response Time',
      disclaimer: 'Based on voice infrastructure benchmarks. Actual speed varies by call volume.',
    },
    {
      value: '24/7',
      label: 'Lead Capture Availability',
      disclaimer: 'System capability. Actual coverage depends on deployment configuration.',
    },
    {
      value: 'Unlimited',
      label: 'Concurrent Qualification Calls',
      disclaimer: 'System architecture supports unlimited simultaneous conversations.',
    },
    {
      value: '100%',
      label: 'Structured Data Capture',
      disclaimer: 'Every conversation is logged according to your configured qualification framework.',
    },
  ];

  const businessProblems = [
    {
      title: 'Unqualified Inbound Calls',
      description: 'Sales reps answer calls from prospects who don\'t match your ideal customer profile.',
    },
    {
      title: 'Slow Response Times',
      description: 'By the time a human responds, the prospect has already contacted a competitor.',
    },
    {
      title: 'Inconsistent Qualification',
      description: 'Every rep asks different questions. Critical information is missed or recorded poorly.',
    },
    {
      title: 'Missing BANT Information',
      description: 'Budget, Authority, Need, and Timeline data is incomplete when leads reach your CRM.',
    },
    {
      title: 'Manual CRM Updates',
      description: 'Reps spend hours logging call notes instead of selling. Data entry delays follow-up.',
    },
    {
      title: 'Lost High-Intent Opportunities',
      description: 'Hot prospects slip through the cracks while reps handle low-priority inquiries.',
    },
  ];

  const bantCapabilities = [
    {
      title: 'Intelligent Qualification',
      subItems: [
        { label: 'Budget', desc: 'Captures available budget range and investment readiness' },
        { label: 'Authority', desc: 'Identifies decision-making role and purchasing influence' },
        { label: 'Need', desc: 'Surfaces pain points, requirements, and urgency drivers' },
        { label: 'Timeline', desc: 'Determines purchase timeframe and decision deadlines' },
      ],
    },
    {
      title: 'Lead Scoring',
      subItems: [
        { label: 'AI Scoring', desc: 'Assigns numerical scores based on your configured rules' },
        { label: 'Priority Levels', desc: 'Segments leads into hot, warm, and nurture categories' },
        { label: 'Sales Readiness', desc: 'Flags prospects ready for immediate sales contact' },
      ],
    },
    {
      title: 'CRM Automation',
      subItems: [
        { label: 'HubSpot', desc: 'Creates contacts and updates deal stages automatically' },
        { label: 'Salesforce', desc: 'Logs tasks, opportunities, and lead source attribution' },
        { label: 'GoHighLevel', desc: 'Updates pipelines and triggers follow-up sequences' },
        { label: 'Custom APIs', desc: 'Connects to proprietary CRMs through webhook integration' },
      ],
    },
    {
      title: 'Smart Routing',
      subItems: [
        { label: 'Assign', desc: 'Routes qualified leads to the right rep based on territory or specialty' },
        { label: 'Notify', desc: 'Alerts sales team via SMS, Slack, or email with full context' },
        { label: 'Book', desc: 'Schedules discovery calls directly into the rep\'s calendar' },
      ],
    },
  ];

  const businessImpact = [
    {
      icon: <Filter className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Higher Lead Quality',
      description: 'Only pre-qualified, scored leads reach your sales team.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Faster First Response',
      description: 'Every inbound lead is qualified instantly — no waiting for business hours.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Better CRM Accuracy',
      description: 'Structured data populates your CRM automatically. No missing fields.',
    },
    {
      icon: <MousePointer className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Less Manual Work',
      description: 'Reps stop logging notes and start selling.',
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-[#00d4ff]" />,
      title: 'More Sales Conversations',
      description: 'Your team talks to more qualified prospects every day.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Consistent Qualification',
      description: 'Every lead is evaluated using the same methodology. No rep-dependent variance.',
    },
  ];

  const qualificationPipelineSteps = [
    {
      step: '01',
      title: 'Inbound Lead Calls',
      description: 'Prospect calls your business number',
      micro: 'Inbound sales inquiry',
    },
    {
      step: '02',
      title: 'AI Qualification Interview',
      description: 'Configured with your BANT script and custom questions',
      micro: 'Structured conversation',
    },
    {
      step: '03',
      title: 'Lead Score Assigned',
      description: 'Budget, authority, need, timeline evaluated and scored',
      micro: 'AI scoring engine',
    },
    {
      step: '04',
      title: 'CRM Updated',
      description: 'Contact created, deal staged, notes logged automatically',
      micro: 'Automatic record creation',
    },
    {
      step: '05',
      title: 'Sales Team Notified',
      description: 'High-priority lead routed to assigned rep with full context',
      micro: 'Instant alert + context',
    },
    {
      step: '06',
      title: 'Meeting Booked Automatically',
      description: 'Qualified prospects are offered available calendar slots and synced to your CRM',
      micro: 'Instant calendar sync',
    },
  ];

  const whyDeployCards = [
    {
      icon: <Settings className="w-6 h-6 text-[#00d4ff]" />,
      title: 'AI Qualifies Using Your Methodology',
      description: 'Every lead is scored using your exact BANT, MEDDIC, or custom framework — not generic questions.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Enterprise-Grade Data Handling',
      description: 'Lead conversations, qualification data, and CRM logs are encrypted and access-controlled.',
    },
    {
      icon: <PhoneForwarded className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Human Escalation When Needed',
      description: 'Complex negotiations or VIP prospects are warm-transferred to senior reps with full context.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'CRM-First Architecture',
      description: 'Every qualification detail is structured and synced before the rep ever sees the lead.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Continuous Optimization',
      description: 'Qualification scripts and scoring rules are refined monthly based on real sales feedback.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#00d4ff]" />,
      title: 'No Disruption to Your Sales Process',
      description: 'Your team receives fully qualified leads in the systems they already use. No new software to learn.',
    },
  ];

  const salesIntelligenceItems = [
    {
      icon: <BarChart3 className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Lead Score',
      description: 'Numerical qualification score based on your criteria',
    },
    {
      icon: <FileText className="w-5 h-5 text-[#00d4ff]" />,
      title: 'AI Summary',
      description: 'Two-sentence overview of the conversation outcome',
    },
    {
      icon: <Target className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Qualification Status',
      description: 'BANT completeness and sales readiness flag',
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Objection Analysis',
      description: 'Common objections and hesitations surfaced',
    },
    {
      icon: <Zap className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Buying Intent',
      description: 'Indicators of purchase urgency and commitment',
    },
    {
      icon: <Smile className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Sentiment',
      description: 'Caller tone and engagement level during the conversation',
    },
    {
      icon: <ScrollText className="w-5 h-5 text-[#00d4ff]" />,
      title: 'CRM Timeline',
      description: 'Full chronological record attached to the contact record',
    },
  ];

  const integrationCategories = [
    {
      title: 'CRM',
      tools: ['HubSpot', 'Salesforce', 'Zoho CRM', 'Pipedrive', 'GoHighLevel'],
    },
    {
      title: 'Automation',
      tools: ['Zapier', 'Make', 'Webhooks', 'REST API'],
    },
    {
      title: 'Data & Reporting',
      tools: ['Google Sheets', 'Microsoft Excel', 'Airtable', 'Notion'],
    },
    {
      title: 'Communication',
      tools: ['Slack', 'Microsoft Teams', 'Email', 'SMS'],
    },
  ];

  const deploymentProcessSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your sales process, ICP, and qualification criteria.',
    },
    {
      step: '02',
      title: 'Conversation Design',
      description: 'BANT script, objection handling, and scoring rules configured.',
    },
    {
      step: '03',
      title: 'CRM Integration',
      description: 'HubSpot, Salesforce, or your system connected for bidirectional sync.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Internal simulation with sample leads and edge-case review.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Production go-live with monitoring and team onboarding.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Monthly refinement of scripts, scoring, and routing rules.',
    },
  ];

  const faqs = [
    {
      q: 'Can AI qualify leads using our existing sales script?',
      a: 'Yes. PEXEK is configured with your exact qualification questions, BANT criteria, and custom scoring rules.',
    },
    {
      q: 'Can it score leads before sending them to sales?',
      a: 'Yes. Lead scoring rules are configured based on your definition of a qualified opportunity. Hot, warm, and nurture categories are assigned automatically.',
    },
    {
      q: 'Can it integrate with our CRM?',
      a: 'Yes. PEXEK connects to HubSpot, Salesforce, Zoho, Pipedrive, GoHighLevel, and other systems via API and webhook.',
    },
    {
      q: 'How does urgent lead routing work?',
      a: 'You define the criteria. High-priority leads are warm-transferred to sales with full qualification context, conversation summary, and score.',
    },
    {
      q: 'Can it book meetings directly into rep calendars?',
      a: 'Yes. PEXEK checks real-time availability and books discovery calls into Google Calendar, Outlook, or Calendly.',
    },
    {
      q: 'Can it detect buying signals during the call?',
      a: 'PEXEK analyzes conversation patterns, urgency language, and commitment indicators based on your configured parameters. This is analytical, not predictive.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most lead qualification deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and team onboarding.',
    },
    {
      q: 'Does this replace our sales team?',
      a: 'No. PEXEK handles the first qualification conversation. Your team receives structured, scored leads and focuses on closing.',
    },
  ];

  const scrollToWorkflow = () => {
    onNavigate('/how-it-works');
  };

  return (
    <div className="space-y-28 pb-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white font-sans">
      
      {/* SECTION 1 — HERO */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-[0.1em] rounded-[2px]">
          Built for Sales Teams
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Qualify Every Lead Before Your Team Picks Up The Phone
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          PEXEK deploys enterprise <strong className="text-white">AI Lead Qualification</strong>, <strong className="text-white">Lead Qualification AI</strong>, and <strong className="text-white">AI Sales Qualification</strong> systems powered by <strong className="text-white">Automated Lead Scoring</strong>, <strong className="text-white">BANT Qualification AI</strong>, and <strong className="text-white">Sales Call Automation</strong> to interview prospects, capture structured qualification data, <strong className="text-white">qualify leads automatically</strong> with <strong className="text-white">Lead Routing AI</strong> and <strong className="text-white">Sales Intelligence Voice AI</strong>, and route only high-intent leads to your sales team — automatically and consistently.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Lead Qualification Audit →
          </button>
          
          <button
            onClick={scrollToWorkflow}
            className="text-[#00d4ff] hover:underline font-mono text-xs uppercase tracking-wider py-2 px-4 transition-all flex items-center gap-1 cursor-pointer"
          >
            See Qualification Workflow →
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

      {/* SECTION 3 — BUSINESS PROBLEMS */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            CHALLENGES IN SALES QUALIFICATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Sales Teams Lose Time Every Day
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Your sales representatives shouldn't spend hours qualifying prospects that will never buy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessProblems.map((prob, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border border-red-500/20 p-8 rounded-[2px] space-y-4 hover:border-red-500/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <X className="w-5 h-5 text-red-400 shrink-0" />
                <h3 className="text-base font-bold text-white tracking-tight">
                  {prob.title}
                </h3>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 4 — BANT SCORING & QUALIFICATION CARDS */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            STRUCTURED METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Intelligent Lead Qualification
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK structures every conversation around your sales methodology — starting with BANT and extending to your custom criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bantCapabilities.map((card, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border-l-2 border-l-[#00d4ff] border-y border-r border-white/5 p-8 rounded-[2px] space-y-6 hover:border-r-[#00d4ff]/30 transition-all duration-200"
            >
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00d4ff]" />
                {card.title}
              </h3>

              <div className="space-y-4 border-t border-white/5 pt-4">
                {card.subItems.map((sub, sIdx) => (
                  <div key={sIdx} className="space-y-1">
                    <div className="text-xs font-bold text-slate-200 font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                      {sub.label}
                    </div>
                    <p className="text-xs text-[#94a3b8] pl-3.5 leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                ))}
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
            After deployment, your sales team spends less time qualifying and more time closing.
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

      {/* SECTION 6 — QUALIFICATION PIPELINE (6 Steps) */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            AUTOMATED PIPELINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Lead Qualification Flows Through PEXEK
          </h2>
          <p className="text-xs text-[#94a3b8]">
            From inbound call to qualified lead in your CRM — fully automated.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
          {qualificationPipelineSteps.map((step, idx) => (
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

      {/* SECTION 7 — WHY SALES TEAMS DEPLOY WITH PEXEK */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            DEPLOYMENT ADVANTAGES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Sales Teams Deploy With PEXEK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyDeployCards.map((card, idx) => (
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

      {/* SECTION 8 — SALES CONVERSATION INTELLIGENCE */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            VOICE ANALYTICS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Every Call Generates Sales Intelligence
          </h2>
          <p className="text-xs text-[#94a3b8]">
            After every conversation, PEXEK automatically creates actionable sales insights from your voice channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salesIntelligenceItems.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
                <h3 className="text-sm font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed pl-6">
                {item.description}
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
            Connect your qualification workflow to the systems your sales team already depends on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* SECTION 10 — ENTERPRISE DEPLOYMENT TIMELINE */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            METHODOLOGY & EXECUTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise Deployment Process
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK designs, builds, and deploys your AI qualification infrastructure as a tailored project.
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

      {/* SECTION 11 — FAQ */}
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

      {/* CONTEXTUAL CROSS LINKS HUB */}
      <ServiceCrossLinks 
        currentPath="/lead-qualification-ai"
        type="service"
        onNavigate={onNavigate}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* SECTION 12 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stop Sending Unqualified Prospects To Your Sales Team
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Deploy an AI qualification workflow that captures the right information before every sales conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-left py-2">
          {[
            'Qualification workflow review',
            'BANT scoring design',
            'CRM integration planning',
            'No obligation',
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
            Book Lead Qualification Audit →
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
            Every deployment is customized according to the organization's workflows, data requirements, and existing software ecosystem. PEXEK does not guarantee sales outcomes, conversion rates, or revenue. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
