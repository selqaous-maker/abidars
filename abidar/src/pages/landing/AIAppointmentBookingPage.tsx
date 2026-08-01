import React, { useState } from 'react';
import { PagePath } from '../../types';
import { 
  Zap, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  X, 
  Search,
  Brain,
  RefreshCcw,
  CheckCircle,
  Bell,
  Database,
  CalendarPlus,
  ShieldCheck,
  MousePointer,
  BellRing,
  Eye,
  Calendar,
  SlidersHorizontal,
  PhoneForwarded,
  RefreshCw,
  Users,
  FileText,
  Target,
  Smile,
  ScrollText,
  Clock
} from 'lucide-react';

interface AIAppointmentBookingPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIAppointmentBookingPage: React.FC<AIAppointmentBookingPageProps> = ({ 
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
      label: 'Booking Response Time',
      disclaimer: 'Based on voice infrastructure benchmarks. Actual speed varies by call volume.',
    },
    {
      value: '24/7',
      label: 'Booking Availability',
      disclaimer: 'System capability. Actual coverage depends on deployment configuration.',
    },
    {
      value: 'Real-Time',
      label: 'Calendar Synchronization',
      disclaimer: 'Depends on connected calendar system API and configuration. Actual sync speed varies.',
    },
    {
      value: '100%',
      label: 'Booking Records Logged',
      disclaimer: 'Every confirmed appointment is logged to connected systems based on configuration.',
    },
  ];

  const appointmentChallenges = [
    {
      title: 'Missed Booking Calls',
      description: 'Customers call after business hours and never receive a response. The appointment is never made.',
    },
    {
      title: 'Double Bookings',
      description: 'Manual scheduling creates conflicts between appointments, forcing awkward reschedules and lost trust.',
    },
    {
      title: 'Endless Back-and-Forth',
      description: 'Staff spend valuable time checking calendars, proposing times, and confirming via phone tag.',
    },
    {
      title: 'High No-Show Rates',
      description: 'Customers forget appointments when reminders are manual or inconsistent.',
    },
    {
      title: 'Manual Calendar Updates',
      description: 'Employees update multiple calendars by hand after every call. Errors and delays are inevitable.',
    },
    {
      title: 'Lost Revenue',
      description: 'Potential customers abandon the booking process when response is slow or complicated.',
    },
  ];

  const schedulingFramework = [
    {
      icon: <Search className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Availability Detection',
      description: 'Checks Google Calendar, Outlook, Calendly, or your scheduling infrastructure in real time before offering any slot.',
    },
    {
      icon: <Brain className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Intelligent Scheduling',
      description: 'Offers available time slots based on your business rules: duration, buffer time, staff specialty, and location.',
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Rescheduling',
      description: 'Moves appointments automatically while updating every connected calendar and notifying the customer instantly.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Confirmation',
      description: 'Sends SMS or WhatsApp confirmations immediately after booking with location, time, and preparation details.',
    },
    {
      icon: <Bell className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Reminder Automation',
      description: 'Delivers automated reminders before the appointment based on your configured schedule and messaging rules.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'CRM Synchronization',
      description: 'Updates customer records, appointment history, and booking status in your connected system automatically.',
    },
  ];

  const operationalValue = [
    {
      icon: <CalendarPlus className="w-6 h-6 text-[#00d4ff]" />,
      title: 'More Appointments Booked',
      description: '24/7 availability captures customers outside office hours and during peak periods.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00d4ff]" />,
      title: 'No Double Bookings',
      description: 'Real-time synchronization checks every connected calendar before confirming any slot.',
    },
    {
      icon: <MousePointer className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Less Administrative Work',
      description: 'Staff stop managing calendars manually and focus on delivering the service.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Faster Customer Experience',
      description: 'Appointments are confirmed in seconds, not hours. No callbacks, no waiting.',
    },
    {
      icon: <BellRing className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Lower No-Show Rates',
      description: 'Automated reminders keep appointments top of mind through WhatsApp and SMS.',
    },
    {
      icon: <Eye className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Better Calendar Accuracy',
      description: 'Every booking, reschedule, and cancellation updates instantly across all connected systems.',
    },
  ];

  const bookingPipelineSteps = [
    {
      step: '01',
      title: 'Customer Requests Appointment',
      description: 'Inbound call requesting a booking or service',
      micro: 'Customer initiates scheduling',
    },
    {
      step: '02',
      title: 'AI Identifies Requested Service',
      description: 'Determines appointment type, location, and staff requirements',
      micro: 'Service classification',
    },
    {
      step: '03',
      title: 'Calendar Availability Checked',
      description: 'Real-time check across connected calendars and business rules',
      micro: 'Live availability verification',
    },
    {
      step: '04',
      title: 'Appointment Confirmed',
      description: 'Slot selected, booked, and locked across all systems',
      micro: 'Instant booking confirmation',
    },
    {
      step: '05',
      title: 'CRM Updated',
      description: 'Customer record, appointment details, and history logged automatically',
      micro: 'Automatic record sync',
    },
    {
      step: '06',
      title: 'WhatsApp / SMS Confirmation Sent',
      description: 'Confirmation with time, location, and details delivered instantly',
      micro: 'Instant client receipt',
    },
  ];

  const whyDeployCards = [
    {
      icon: <Calendar className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Real-Time Calendar Integration',
      description: 'Your existing Google Calendar, Outlook, or Calendly is checked and updated instantly—no migration needed.',
    },
    {
      icon: <SlidersHorizontal className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Business Rule Scheduling',
      description: 'Duration, buffer time, blackout dates, and multi-location logic are configured to your exact requirements.',
    },
    {
      icon: <PhoneForwarded className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Human Escalation',
      description: 'Complex requests or VIP customers are warm-transferred to your team with full booking context.',
    },
    {
      icon: <Database className="w-6 h-6 text-[#00d4ff]" />,
      title: 'CRM-First Architecture',
      description: 'Every appointment is attached to the customer record before your staff opens the calendar.',
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Continuous Optimization',
      description: 'Booking scripts, reminder timing, and availability rules are refined monthly based on real data.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#00d4ff]" />,
      title: 'No Staff Training Required',
      description: 'Your team sees appointments in the calendars and CRMs they already use. No new systems to learn.',
    },
  ];

  const calendarIntelligenceItems = [
    {
      icon: <CheckCircle className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Appointment Status',
      description: 'Confirmed, rescheduled, cancelled, or pending flag attached to every record',
    },
    {
      icon: <FileText className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Booking Summary',
      description: 'Two-sentence overview of the appointment type, time, and customer details',
    },
    {
      icon: <RefreshCcw className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Reschedule History',
      description: 'Complete log of date changes and customer preferences',
    },
    {
      icon: <X className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Cancellation Reasons',
      description: 'Patterns and reasons surfaced for operational review',
    },
    {
      icon: <Target className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Customer Intent',
      description: 'Whether the call was new booking, reschedule, or cancellation inquiry',
    },
    {
      icon: <Smile className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Sentiment Analysis',
      description: 'Caller tone during scheduling interaction flagged for staff awareness',
    },
    {
      icon: <ScrollText className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Calendar Timeline',
      description: 'Full chronological record of all booking activity per customer',
    },
  ];

  const integrationCategories = [
    {
      title: 'Calendars',
      tools: ['Google Calendar', 'Microsoft Outlook', 'Calendly', 'Cal.com'],
    },
    {
      title: 'CRM',
      tools: ['HubSpot', 'Salesforce', 'Zoho CRM', 'GoHighLevel', 'Pipedrive'],
    },
    {
      title: 'Automation',
      tools: ['Zapier', 'Make', 'Webhooks', 'REST API'],
    },
    {
      title: 'Communication',
      tools: ['WhatsApp Business API', 'SMS', 'Slack', 'Email'],
    },
  ];

  const deploymentProcessSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understand your booking types, staff schedules, locations, and business rules.',
    },
    {
      step: '02',
      title: 'Conversation Design',
      description: 'Booking scripts, rescheduling flows, and confirmation messaging configured.',
    },
    {
      step: '03',
      title: 'Calendar Integration',
      description: 'Google Calendar, Outlook, Calendly, or your system connected for bidirectional sync.',
    },
    {
      step: '04',
      title: 'Testing',
      description: 'Internal simulation with sample bookings, edge cases, and conflict scenarios.',
    },
    {
      step: '05',
      title: 'Deployment',
      description: 'Production go-live with monitoring and staff onboarding.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Monthly refinement of availability rules, reminder timing, and messaging.',
    },
  ];

  const faqs = [
    {
      q: 'Can AI book appointments into our existing calendar?',
      a: 'Yes. PEXEK connects with Google Calendar, Outlook, Calendly, Cal.com, and custom APIs. Appointments appear instantly with customer details according to your configured rules and calendar permissions.',
    },
    {
      q: 'Can customers reschedule automatically?',
      a: 'Yes. Customers can request rescheduling through voice or messaging. PEXEK checks availability, moves the appointment, and updates all connected systems.',
    },
    {
      q: 'Does AI prevent double bookings?',
      a: 'PEXEK checks real-time availability across all connected calendars before confirming any appointment. Conflicts are prevented based on your configured rules.',
    },
    {
      q: 'Can it support multiple locations?',
      a: 'Yes. PEXEK can be configured with location-specific availability, staff assignments, and routing rules.',
    },
    {
      q: 'Can it support multiple staff members?',
      a: 'Yes. Individual staff calendars, specialties, and availability are checked automatically when customers request specific providers.',
    },
    {
      q: 'Can confirmations be sent by WhatsApp?',
      a: 'Yes. WhatsApp Business API and SMS are included. Confirmations, reminders, and location details are sent automatically.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most appointment booking deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and onboarding.',
    },
    {
      q: 'Does this replace my scheduling staff?',
      a: 'No. PEXEK handles routine booking calls and calendar updates. Your team manages exceptions, complex requests, and in-person service delivery.',
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
          Built for Appointment-Driven Businesses
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Book Every Appointment Automatically — 24/7
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          PEXEK deploys enterprise <strong className="text-white">AI Appointment Scheduling</strong>, <strong className="text-white">AI Appointment Booking</strong>, and <strong className="text-white">Automated Appointment Scheduling</strong> systems featuring <strong className="text-white">Voice AI Booking</strong>, a <strong className="text-white">Smart Scheduling Engine</strong>, and <strong className="text-white">Calendar Intelligence AI</strong> with an <strong className="text-white">AI Booking Agent</strong> and <strong className="text-white">Appointment Reminder AI</strong> for <strong className="text-white">24/7 Appointment Booking</strong> and <strong className="text-white">AI Calendar Sync</strong> to check real-time availability, schedule appointments, handle rescheduling, send confirmations, and synchronize every booking with your calendars and CRM—automatically.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book Scheduling Audit →
          </button>
          
          <button
            onClick={scrollToWorkflow}
            className="text-[#00d4ff] hover:underline font-mono text-xs uppercase tracking-wider py-2 px-4 transition-all flex items-center gap-1 cursor-pointer"
          >
            View Booking Workflow →
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

      {/* SECTION 3 — APPOINTMENT CHALLENGES (BUSINESS PROBLEMS) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SCHEDULING FRICTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Appointment Challenges
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Manual scheduling creates friction for your customers and overhead for your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {appointmentChallenges.map((prob, idx) => (
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

      {/* SECTION 4 — AI SCHEDULING FRAMEWORK (METHODOLOGY) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            BOOKING ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AI Scheduling Framework
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK designs a booking workflow around your calendar rules, business hours, and staff availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schedulingFramework.map((item, idx) => (
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

      {/* SECTION 5 — OPERATIONAL VALUE (BUSINESS IMPACT) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            BUSINESS IMPACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Operational Value
          </h2>
          <p className="text-xs text-[#94a3b8]">
            After deployment, your calendar stays full, your staff stays focused, and your customers never wait for a callback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operationalValue.map((item, idx) => (
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

      {/* SECTION 6 — BOOKING PIPELINE (6 STEPS) */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            AUTOMATED WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Appointment Booking Flows Through PEXEK
          </h2>
          <p className="text-xs text-[#94a3b8]">
            From customer request to confirmed booking — fully automated.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
          {bookingPipelineSteps.map((step, idx) => (
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

      {/* SECTION 8 — CALENDAR & VOICE INTELLIGENCE */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            CALENDAR INTELLIGENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Calendar Intelligence From Every Booking Call
          </h2>
          <p className="text-xs text-[#94a3b8]">
            After every scheduling conversation, PEXEK automatically generates insights that keep your calendar optimized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calendarIntelligenceItems.map((item, idx) => (
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
            Connect your booking workflow to the calendars, CRMs, and communication systems your team already depends on.
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
            PEXEK designs, builds, and deploys your AI booking infrastructure as a tailored project.
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

      {/* SECTION 12 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Never Miss Another Appointment Opportunity
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Deploy an AI appointment booking workflow that schedules customers automatically while your team focuses on delivering the service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-left py-2">
          {[
            'Calendar workflow review',
            'Booking automation design',
            'Integration planning',
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
            Book Scheduling Audit →
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
            Every deployment is customized according to the organization's workflows, data requirements, and existing software ecosystem. PEXEK does not guarantee elimination of no-shows, double-bookings, or scheduling conflicts. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
