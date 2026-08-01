import React, { useState } from 'react';
import { PagePath } from '../../types';
import { 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X, 
  Database,
  Table,
  Calendar,
  Mail,
  MessageCircle,
  Bell,
  FileText,
  CheckSquare,
  RefreshCw,
  GitPullRequest,
  Webhook,
  Code,
  ShieldCheck,
  Clock,
  Eye,
  MousePointer,
  TrendingUp,
  Settings,
  Shield,
  PhoneForwarded,
  Users
} from 'lucide-react';

interface AIWorkflowAutomationPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIWorkflowAutomationPage: React.FC<AIWorkflowAutomationPageProps> = ({ 
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
      label: 'Workflow Trigger Speed',
      disclaimer: 'Based on voice infrastructure benchmarks. Actual speed varies by call volume.',
    },
    {
      value: '24/7',
      label: 'Automation Availability',
      disclaimer: 'System capability. Actual coverage depends on deployment configuration.',
    },
    {
      value: 'Unlimited',
      label: 'Concurrent Workflows',
      disclaimer: 'System architecture supports unlimited simultaneous automation triggers.',
    },
    {
      value: '100%',
      label: 'Activity Logged',
      disclaimer: 'Every workflow execution is recorded based on your configured logging rules.',
    },
  ];

  const workflowChallenges = [
    {
      title: 'Data Trapped in Phone Calls',
      description: 'Customer details, requests, and outcomes stay in the rep\'s head or scattered notes.',
    },
    {
      title: 'Manual CRM Updates',
      description: 'Sales and support teams spend hours logging call data instead of selling or serving.',
    },
    {
      title: 'Delayed Follow-Up',
      description: 'Hot leads wait hours or days before anyone creates a task, sends an email, or updates the team.',
    },
    {
      title: 'Disconnected Systems',
      description: 'Your phone, CRM, calendar, and messaging apps don\'t talk to each other. Information silos grow.',
    },
    {
      title: 'Missed Handoffs',
      description: 'Critical requests fall through the cracks between departments because nothing was documented or assigned.',
    },
    {
      title: 'No Visibility Into Call Outcomes',
      description: 'Managers can\'t see what happened on calls, what was promised, or what needs follow-up.',
    },
  ];

  const automationFeatures = [
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'CRM Automation',
      description: 'Creates contacts, updates deal stages, and logs activities in your CRM automatically.',
    },
    {
      icon: <Table className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Google Sheets Automation',
      description: 'Appends call data, scores, and outcomes to spreadsheets for reporting and tracking.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Calendar Automation',
      description: 'Creates events, blocks time, or updates schedules based on call outcomes.',
    },
    {
      icon: <Mail className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Email Automation',
      description: 'Sends personalized follow-up emails to customers or internal alerts to staff.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'WhatsApp Automation',
      description: 'Dispatches confirmations, reminders, and status updates through WhatsApp Business API.',
    },
    {
      icon: <Bell className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Slack Notifications',
      description: 'Alerts channels or team members with call summaries and action items instantly.',
    },
    {
      icon: <FileText className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Document Generation',
      description: 'Creates intake forms, call summaries, or proposal drafts from extracted conversation data.',
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Task Creation',
      description: 'Generates follow-up tasks in project management systems with deadlines and assignees.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Data Synchronization',
      description: 'Keeps customer records consistent across CRM, spreadsheets, and internal databases.',
    },
    {
      icon: <GitPullRequest className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Approval Workflows',
      description: 'Routes high-value requests or sensitive actions through your configured approval chain.',
    },
    {
      icon: <Webhook className="w-6 h-6 text-[#00d4ff]" />,
      title: 'API Integrations',
      description: 'Sends structured call data to any system with webhook receiving capabilities.',
    },
    {
      icon: <Code className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Custom Business Logic',
      description: 'Executes conditional workflows based on your unique rules, scoring, and routing criteria.',
    },
  ];

  const businessImpact = [
    {
      icon: <Zap className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Instant Data Capture',
      description: 'Call details populate your systems within seconds of hang-up. No waiting, no forgotten entries.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Zero Missed Handoffs',
      description: 'Every call outcome triggers the right notification, task, or escalation automatically.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Faster Response Times',
      description: 'Follow-up emails, tasks, and messages are sent before the customer hangs up.',
    },
    {
      icon: <Eye className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Complete Call Visibility',
      description: 'Managers see every conversation outcome, promise made, and next step required.',
    },
    {
      icon: <MousePointer className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Less Manual Entry',
      description: 'Staff stop copying call notes between systems and focus on customer-facing work.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Scalable Operations',
      description: 'Handle 10x call volume without adding data entry overhead or operational complexity.',
    },
  ];

  const pipelineSteps = [
    {
      step: '01',
      title: 'Customer Calls or Submits a Request',
      description: 'Inbound call to your business number',
      micro: 'Voice or messaging trigger',
    },
    {
      step: '02',
      title: 'AI Understands the Request',
      description: 'Intent identified, data extracted, and outcome determined',
      micro: 'Request understood',
    },
    {
      step: '03',
      title: 'AI Decides What Should Happen',
      description: 'Workflow rules evaluated: which systems to update, who to notify, what to create',
      micro: 'Workflow selected automatically',
    },
    {
      step: '04',
      title: 'Business Systems Updated',
      description: 'CRM, calendar, spreadsheet, or database updated automatically',
      micro: 'System synchronization',
    },
    {
      step: '05',
      title: 'Tasks & Notifications Sent',
      description: 'Emails, Slack alerts, WhatsApp messages, and task assignments dispatched',
      micro: 'Multi-channel notification',
    },
    {
      step: '06',
      title: 'Automation Complete',
      description: 'Every action logged, every handoff documented, every system in sync',
      micro: 'Execution confirmed',
    },
  ];

  const whyDeployCards = [
    {
      icon: <Settings className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Workflow Built Around Your Stack',
      description: 'PEXEK connects to the systems you already use. No migration, no rip-and-replace.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Enterprise-Grade Data Handling',
      description: 'Encrypted transmission, role-based access, and audit logs for every automated action.',
    },
    {
      icon: <PhoneForwarded className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Human Escalation When Needed',
      description: 'Complex or sensitive workflows pause for human approval before executing critical actions.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'System-First Architecture',
      description: 'Your CRM, calendar, and messaging systems are the source of truth. PEXEK writes to them, not around them.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Continuous Optimization',
      description: 'Workflow rules, data mappings, and trigger conditions are refined monthly based on real usage.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#00d4ff]" />,
      title: 'No Disruption to Your Team',
      description: 'Staff see updates in the systems they already use. No new interfaces, no training required.',
    },
  ];

  const workflowInsightsItems = [
    {
      title: 'Workflow Execution Status',
      description: 'Which automations fired, succeeded, or flagged for review',
    },
    {
      title: 'System Sync Log',
      description: 'Every CRM update, calendar event, and spreadsheet row timestamped',
    },
    {
      title: 'Automation Triggers Fired',
      description: 'Complete record of which rules activated and why',
    },
    {
      title: 'Captured Information',
      description: 'Review the customer information extracted from every conversation before it enters your systems',
    },
    {
      title: 'Failed Workflow Alerts',
      description: 'Immediate notification when an automation requires manual intervention',
    },
    {
      title: 'Cross-System Activity Timeline',
      description: 'Chronological view of every system touched by the call',
    },
    {
      title: 'Automation Status',
      description: 'Clear indication of whether each workflow succeeded or requires manual attention',
    },
  ];

  const integrationCategories = [
    {
      title: 'CRM',
      systems: ['HubSpot', 'Salesforce', 'GoHighLevel', 'Zoho CRM', 'Pipedrive'],
    },
    {
      title: 'Productivity & Data',
      systems: ['Google Sheets', 'Microsoft Excel', 'Airtable', 'Notion'],
    },
    {
      title: 'Calendars',
      systems: ['Google Calendar', 'Microsoft Outlook', 'Calendly', 'Cal.com'],
    },
    {
      title: 'Communication',
      systems: ['WhatsApp Business API', 'Slack', 'Microsoft Teams', 'Gmail', 'Outlook Email'],
    },
    {
      title: 'Automation',
      systems: ['Zapier', 'Make', 'Webhooks', 'REST API'],
    },
  ];

  const deploymentSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Map your current systems, data flows, handoff points, and automation gaps.',
    },
    {
      step: '02',
      title: 'Workflow Design',
      description: 'Trigger rules, data mappings, notification logic, and approval chains configured.',
    },
    {
      step: '03',
      title: 'System Integration',
      description: 'CRM, calendar, messaging, and database connections established via API.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'End-to-end simulation with sample calls, edge cases, and failure scenario handling.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Production go-live with real-time monitoring and alert configuration.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Monthly refinement of workflows, new trigger rules, and system expansions.',
    },
  ];

  const faqs = [
    {
      q: 'Can AI update our CRM automatically?',
      a: 'Yes. PEXEK creates contacts, updates deals, logs activities, and assigns tasks in HubSpot, Salesforce, Zoho, Pipedrive, GoHighLevel, and other systems via API.',
    },
    {
      q: 'Can it send data to our internal systems?',
      a: 'Yes. Through webhooks and REST APIs, PEXEK connects to most systems with open integration points or exposed endpoints.',
    },
    {
      q: 'Can it trigger different workflows for different call types?',
      a: 'Yes. Each call type (sales, support, complaint, booking) can trigger a unique automation sequence with different systems, messages, and tasks.',
    },
    {
      q: 'Can it notify our team via Slack or email?',
      a: 'Yes. Notifications are sent to designated channels, groups, or individuals based on your workflow rules and escalation criteria.',
    },
    {
      q: 'Can it create tasks in our project management tool?',
      a: 'Yes. PEXEK generates tasks with deadlines, assignees, and descriptions in connected systems via API or webhook.',
    },
    {
      q: 'Can it handle approval workflows?',
      a: 'Yes. High-value requests, refunds, or sensitive actions can be configured to pause for human approval before executing.',
    },
    {
      q: 'What if an automation fails?',
      a: 'PEXEK logs every execution and sends alerts when a workflow fails. Failed actions can be queued for manual review or automatic retry.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most workflow automation deployments go live within 14 days after the strategy audit. PEXEK handles mapping, integration, testing, and team onboarding.',
    },
  ];

  const scrollToWorkflowMap = () => {
    onNavigate('/how-it-works');
  };

  return (
    <div className="space-y-28 pb-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white font-sans">
      
      {/* SECTION 1 — HERO */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-[0.1em] rounded-[2px]">
          Built for Connected Operations
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Turn Every Customer Conversation Into Automated Workflows
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          PEXEK deploys AI workflow automation that turns every customer conversation into automated actions across your CRM, calendars, messaging platforms, and internal systems—without manual work.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Workflow Audit →
          </button>
          
          <button
            onClick={scrollToWorkflowMap}
            className="text-[#00d4ff] hover:underline font-mono text-xs uppercase tracking-wider py-2 px-4 transition-all flex items-center gap-1 cursor-pointer"
          >
            See Automation Map →
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

      {/* SECTION 3 — WORKFLOW CHALLENGES (BUSINESS PROBLEMS) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL BOTTLENECKS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Workflow Challenges
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Every phone call contains data that should move automatically. Most businesses lose it in manual handoffs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflowChallenges.map((prob, idx) => (
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

      {/* SECTION 4 — AI WORKFLOW AUTOMATION (METHODOLOGY / FEATURES) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SYSTEM ORCHESTRATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Workflow Automation
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK designs voice-triggered workflows that execute across your business stack the moment a call ends.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {automationFeatures.map((item, idx) => (
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

      {/* SECTION 5 — BUSINESS IMPACT (OPERATIONAL VALUE) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL VALUE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Business Impact
          </h2>
          <p className="text-xs text-[#94a3b8]">
            After deployment, your customer conversations automatically drive action across every system your team uses.
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

      {/* SECTION 6 — AUTOMATED WORKFLOW PIPELINE (6 STEPS) */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            VOICE TO SYSTEM PIPELINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Customer Calls Become Automated Workflows
          </h2>
          <p className="text-xs text-[#94a3b8]">
            From conversation to system action—fully orchestrated.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
          {pipelineSteps.map((step, idx) => (
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

      {/* SECTION 7 — WHY TEAMS DEPLOY WITH PEXEK */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            DEPLOYMENT ADVANTAGES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Why Teams Deploy With PEXEK
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

      {/* SECTION 8 — WORKFLOW INSIGHTS */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SYSTEM ORCHESTRATION AUDIT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Workflow Insights
          </h2>
          <p className="text-xs text-[#94a3b8]">
            After every conversation, PEXEK generates an automation audit trail that shows exactly what happened, where, and when.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {workflowInsightsItems.map((item, idx) => (
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
            Connect your voice infrastructure to the systems that power your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {integrationCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-[#00d4ff] border-b border-white/10 pb-2">
                {cat.title}
              </h4>
              <ul className="space-y-2">
                {cat.systems.map((item, tIdx) => (
                  <li key={tIdx} className="text-xs font-semibold text-slate-200 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                    {item}
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
            PEXEK designs, builds, and deploys your AI workflow infrastructure as a tailored project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {deploymentSteps.map((step, idx) => (
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

      {/* SECTION 12 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Stop Losing Customer Data Between Phone Calls and Systems
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Deploy an AI workflow infrastructure that turns every conversation into automated action across your entire business stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-left py-2">
          {[
            'Workflow architecture review',
            'System integration mapping',
            'Automation design and deployment',
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
            Book Workflow Audit →
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
            Every deployment is customized according to your workflows, existing systems, and business requirements. Available automations depend on your software ecosystem and integration capabilities. PEXEK does not provide legal, financial, or medical advice. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};

