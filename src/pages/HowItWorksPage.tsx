import React from 'react';
import { PagePath } from '../types';
import { 
  Calendar, 
  Target, 
  Database, 
  MessageCircle, 
  Bell, 
  CheckSquare, 
  ArrowRight,
  Check,
  Phone,
  PhoneCall,
  Brain,
  Zap,
  RefreshCw,
  Send,
  Users
} from 'lucide-react';

interface HowItWorksPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const dailyWorkflowSteps = [
    {
      step: 'STEP 1',
      title: 'Customer Calls',
      description: 'Inbound call to your business number.',
      label: 'Any time, any day',
      icon: <Phone className="w-5 h-5 text-[#00d4ff]" />
    },
    {
      step: 'STEP 2',
      title: 'PEXEK Answers',
      description: 'AI picks up instantly with your brand voice and greeting.',
      label: '< 1 second response',
      icon: <PhoneCall className="w-5 h-5 text-[#00d4ff]" />
    },
    {
      step: 'STEP 3',
      title: 'Understands Intent',
      description: 'Identifies if it\'s a booking, inquiry, support request, or sales lead.',
      label: 'Natural conversation',
      icon: <Brain className="w-5 h-5 text-[#00d4ff]" />
    },
    {
      step: 'STEP 4',
      title: 'Takes Action',
      description: 'Books appointments, qualifies leads, answers questions, or routes calls.',
      label: 'Task execution',
      icon: <Zap className="w-5 h-5 text-[#00d4ff]" />
    },
    {
      step: 'STEP 5',
      title: 'Updates CRM',
      description: 'Conversation details, lead score, and outcome logged automatically.',
      label: 'Real-time sync',
      icon: <Database className="w-5 h-5 text-[#00d4ff]" />
    },
    {
      step: 'STEP 6',
      title: 'Books Appointment (if needed)',
      description: 'Checks calendar availability and confirms the slot instantly.',
      label: 'Instant scheduling',
      icon: <Calendar className="w-5 h-5 text-[#00d4ff]" />
    },
    {
      step: 'STEP 7',
      title: 'Sends WhatsApp Confirmation',
      description: 'Confirmation, reminder, or follow-up dispatched automatically.',
      label: 'Customer notified',
      icon: <Send className="w-5 h-5 text-[#00d4ff]" />
    },
    {
      step: 'STEP 8',
      title: 'Notifies Your Team',
      description: 'Relevant staff alerted via SMS, Slack, email, or CRM notification.',
      label: 'Team in the loop',
      icon: <Users className="w-5 h-5 text-[#00d4ff]" />
    },
  ];

  const outcomes = [
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Book an Appointment',
      description: 'Customer selects an available slot and receives instant confirmation.',
    },
    {
      icon: <Target className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Qualify a Lead',
      description: 'Budget, timeline, and need captured before your sales team ever picks up.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Update Your CRM',
      description: 'Contact created, deal staged, and conversation logged automatically.',
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Send WhatsApp Confirmation',
      description: 'Booking details, location, and reminders delivered instantly.',
    },
    {
      icon: <Bell className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Notify Your Team',
      description: 'Sales rep, support agent, or manager alerted with full call context.',
    },
    {
      icon: <CheckSquare className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Create a Follow-Up Task',
      description: 'Reminder, callback, or action item generated in your project system.',
    },
  ];

  const industries = [
    {
      emoji: '🏥',
      title: 'Healthcare',
      description: 'Handles patient intake, appointment scheduling, and after-hours inquiries.',
      path: '/healthcare-ai-receptionist' as PagePath
    },
    {
      emoji: '🦷',
      title: 'Dental',
      description: 'Manages recall campaigns, emergency triage, and booking confirmations.',
      path: '/dental-ai-receptionist' as PagePath
    },
    {
      emoji: '🏠',
      title: 'Real Estate',
      description: 'Qualifies buyers, schedules viewings, and updates CRM instantly.',
      path: '/real-estate-ai-receptionist' as PagePath
    },
    {
      emoji: '⚖️',
      title: 'Legal',
      description: 'Captures case details, books consultations, and routes urgent calls.',
      path: '/legal-ai-receptionist' as PagePath
    },
    {
      emoji: '💼',
      title: 'Business Services',
      description: 'Answers pricing questions, books consultations, and dispatches service requests.',
      path: '/business-services-ai-receptionist' as PagePath
    },
  ];

  return (
    <div className="space-y-24 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-100">
      
      {/* SECTION 1: HERO */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-[2px]">
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#00d4ff]">
            Daily AI Operation
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          How PEXEK Works
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          See <strong className="text-white">how AI receptionist works</strong> for daily business calls. Experience the complete <strong className="text-white">AI Voice Agent Process</strong> and <strong className="text-white">AI Call Handling Workflow</strong> as every customer call is answered, qualified, booked, and synchronized automatically — while your team focuses on high-value priorities.
        </p>

        {/* HERO CTAS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
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

      {/* SECTION 2: THE DAILY AI WORKFLOW (MAIN VISUAL) */}
      <section className="space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            AI Phone System How It Works
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Every Call Follows The Same Process
          </h2>
          <p className="text-sm text-[#94a3b8]">
            From ring to resolution — fully automated and synchronized.
          </p>
        </div>

        {/* 8-STEP FLOW */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Connecting Line on Desktop/Mobile */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#00d4ff]/40 to-[#00d4ff]/10 hidden sm:block" />

          <div className="space-y-6 relative">
            {dailyWorkflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-[#00d4ff]/40 transition-all duration-200 group"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="p-3 bg-[#0a0e1a] border border-[#00d4ff]/30 rounded-[2px] shrink-0 group-hover:bg-[#00d4ff]/10 transition-colors">
                    {step.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider">
                        {step.step}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#94a3b8]">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 sm:self-center">
                  <span className="text-[11px] font-mono font-semibold text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 border border-[#00d4ff]/20 rounded-[2px] inline-block">
                    {step.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT CAN HAPPEN AFTER A CALL */}
      <section className="space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Automated Call Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            What Can Happen After A Call?
          </h2>
          <p className="text-sm text-[#94a3b8]">
            PEXEK is configured to handle the outcomes that matter to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {outcomes.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-3 bg-[#0a0e1a] border border-[#00d4ff]/20 w-fit rounded-[2px]">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: BUILT AROUND YOUR BUSINESS */}
      <section className="space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            AI Business Phone System
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built Around Your Business
          </h2>
          <p className="text-sm text-[#94a3b8]">
            The same AI workflow, configured for your specific industry and rules.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              onClick={() => onNavigate(ind.path)}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 cursor-pointer transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <span className="text-3xl block">{ind.emoji}</span>
                <h3 className="text-base font-bold text-white group-hover:text-[#00d4ff] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-2 text-xs font-bold text-[#00d4ff] flex items-center gap-1 group-hover:underline">
                <span>View Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="bg-[#0d1117] border border-[#00d4ff]/30 p-8 sm:p-12 rounded-[2px] text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            See How AI Can Work In Your Business
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Book a strategy audit and we'll show you exactly how PEXEK would handle your daily customer conversations.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-200 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Workflow analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Custom AI configuration preview</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Integration recommendations</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>No obligation</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={onOpenAuditModal}
            className="px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-[2px] inline-flex items-center gap-2"
          >
            Book Strategy Audit
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-[11px] text-[#94a3b8]">
            30-minute session. No obligation. No technical preparation required.
          </p>
        </div>
      </section>

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
