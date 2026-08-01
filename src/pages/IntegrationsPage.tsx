import React from 'react';
import { PagePath } from '../types';
import { 
  ArrowRight, 
  Check, 
  ChevronRight, 
  Plug, 
  Database, 
  Calendar, 
  Phone, 
  MessageSquare, 
  Zap, 
  ShoppingBag, 
  RefreshCw, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Cpu, 
  Globe, 
  Share2, 
  Layers
} from 'lucide-react';

interface IntegrationsPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const IntegrationsPage: React.FC<IntegrationsPageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const scrollToCategories = () => {
    const el = document.getElementById('integration-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    {
      title: 'CRM Systems',
      icon: <Database className="w-5 h-5 text-[#00d4ff]" />,
      badgeBg: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
      items: ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive', 'GoHighLevel', 'Microsoft Dynamics'],
      description: 'Sync caller data, interaction logs, qualification tags, and pipeline updates automatically.'
    },
    {
      title: 'Calendars & Scheduling',
      icon: <Calendar className="w-5 h-5 text-[#00d4ff]" />,
      badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      items: ['Google Calendar', 'Outlook', 'Calendly', 'Cal.com'],
      description: 'Check real-time availability, book appointments, handle reschedules, and send invites instantly.'
    },
    {
      title: 'Telephony & Voice Carriers',
      icon: <Phone className="w-5 h-5 text-[#00d4ff]" />,
      badgeBg: 'bg-red-500/10 text-red-400 border-red-500/30',
      items: ['Twilio', 'Telnyx', 'SIP Trunking', 'VoIP Providers'],
      description: 'Direct call routing, international number hosting, low-latency audio streams, and carrier-grade reliability.'
    },
    {
      title: 'Messaging & Notifications',
      icon: <MessageSquare className="w-5 h-5 text-[#00d4ff]" />,
      badgeBg: 'bg-green-500/10 text-green-400 border-green-500/30',
      items: ['WhatsApp Business', 'SMS', 'Slack', 'Microsoft Teams', 'Email'],
      description: 'Instant SMS reminders, post-call WhatsApp confirmations, internal Slack alerts, and email summaries.'
    },
    {
      title: 'Automation & API Infrastructure',
      icon: <Zap className="w-5 h-5 text-[#00d4ff]" />,
      badgeBg: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      items: ['Zapier', 'Make', 'Webhooks', 'REST API'],
      description: 'Connect custom internal databases, proprietary backends, and multi-step custom business automation logic.'
    },
    {
      title: 'Commerce & Payments',
      icon: <ShoppingBag className="w-5 h-5 text-[#00d4ff]" />,
      badgeBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30',
      items: ['Stripe', 'Shopify', 'WooCommerce', 'Square'],
      description: 'Order status verification, payment link dispatch, checkout support, and transaction lookup.'
    },
  ];

  const graphicalFlow = [
    { title: 'PEXEK AI', icon: <Cpu className="w-4 h-4 text-[#00d4ff]" /> },
    { title: 'Reads Customer Request', icon: <Phone className="w-4 h-4 text-[#00d4ff]" /> },
    { title: 'Checks CRM', icon: <Database className="w-4 h-4 text-[#00d4ff]" /> },
    { title: 'Updates Calendar', icon: <Calendar className="w-4 h-4 text-[#00d4ff]" /> },
    { title: 'Creates Task', icon: <CheckCircle2 className="w-4 h-4 text-[#00d4ff]" /> },
    { title: 'Sends WhatsApp', icon: <MessageSquare className="w-4 h-4 text-[#00d4ff]" /> },
    { title: 'Notifies Team', icon: <Share2 className="w-4 h-4 text-[#00d4ff]" /> },
  ];

  const whyIntegrate = [
    {
      title: 'Keep your current software',
      description: 'No painful database migrations or staff retraining needed. PEXEK plugs into what you already use.'
    },
    {
      title: 'No manual data entry',
      description: 'Caller details, interaction notes, and booking dates are pushed automatically into your systems.'
    },
    {
      title: 'Real-time synchronization',
      description: 'Calendar slots and client records update in real time with sub-second synchronization latency.'
    },
    {
      title: 'Faster customer response',
      description: 'Instant lead logging and post-call messaging ensure no lead waits or falls through the cracks.'
    },
    {
      title: 'One source of truth',
      description: 'Your existing CRM remains the master record — keeping all department workflows organized.'
    },
  ];

  const connectionMethods = [
    {
      method: 'Native Integration',
      bestFor: 'Popular software (HubSpot, Salesforce, Google Calendar, Twilio, WhatsApp)',
      badge: 'Direct Connect',
      badgeColor: 'bg-[#00d4ff]/10 text-[#00d4ff] border-[#00d4ff]/30'
    },
    {
      method: 'REST API',
      bestFor: 'Custom internal systems and proprietary databases',
      badge: 'Developer Choice',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30'
    },
    {
      method: 'Webhooks',
      bestFor: 'Real-time event triggers, instant alerts, and live data streaming',
      badge: 'Sub-Second',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    },
    {
      method: 'Zapier',
      bestFor: 'No-code automation and 5,000+ app connectors',
      badge: 'No-Code',
      badgeColor: 'bg-orange-500/10 text-orange-400 border-orange-500/30'
    },
    {
      method: 'Make',
      bestFor: 'Advanced visual multi-step workflows and scenario logic',
      badge: 'Complex Workflows',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30'
    },
  ];

  return (
    <div className="space-y-20 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-100">
      
      {/* SECTION 1: HERO */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-[2px]">
          <Plug className="w-3.5 h-3.5 text-[#00d4ff]" />
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#00d4ff]">
            Unified Integration Infrastructure
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Connect PEXEK To The Tools You Already Use
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
          No migration. No rebuilding your workflows. PEXEK connects with your existing CRM, calendar, phone system, messaging apps, and business software.
        </p>

        {/* HERO CTAS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={scrollToCategories}
            className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-[2px] flex items-center justify-center gap-2"
          >
            View Supported Integrations
            <ChevronRight className="w-4 h-4 rotate-90" />
          </button>

          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#00d4ff] text-black font-bold text-sm tracking-wide hover:bg-[#00d4ff]/90 transition-all duration-200 rounded-[2px] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.25)]"
          >
            Book Strategy Audit
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* SECTION 2: INTEGRATION CATEGORIES */}
      <section id="integration-categories" className="space-y-10 scroll-mt-24">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Supported Connectors
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Integration Categories
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Built to work seamlessly with the industry-standard software running your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-[#0a0e1a] border border-[#00d4ff]/20 rounded-[2px]">
                    {cat.icon}
                  </div>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 border rounded-[2px] ${cat.badgeBg}`}>
                    {cat.items.length} Supported
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-wide">
                  {cat.title}
                </h3>

                <p className="text-xs text-[#94a3b8] leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#00d4ff] uppercase tracking-wider block">
                  Tools:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item, iIdx) => (
                    <span 
                      key={iIdx}
                      className="text-xs bg-[#0a0e1a] border border-white/10 px-2.5 py-1 rounded-[2px] text-slate-200 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: HOW INTEGRATIONS WORK (GRAPHICAL FLOW) */}
      <section className="space-y-6">
        <div className="text-center space-y-1.5 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Automated Architecture
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Integrations Work
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8]">
            Every inbound or outbound call executes continuous real-time system actions.
          </p>
        </div>

        {/* COMPACT SLEEK HORIZONTAL PIPELINE */}
        <div className="max-w-5xl mx-auto bg-[#0d1117] border border-white/10 p-4 sm:p-6 rounded-[2px]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 items-center">
            {graphicalFlow.map((node, idx) => (
              <div key={idx} className="flex flex-col items-center justify-between relative group">
                <div className="bg-[#0a0e1a] border border-[#00d4ff]/20 px-2 py-3 rounded-[2px] w-full flex flex-col items-center justify-center text-center space-y-1.5 hover:border-[#00d4ff] transition-all">
                  <div className="p-1.5 bg-[#00d4ff]/10 rounded-[2px] shrink-0">
                    {node.icon}
                  </div>
                  <span className="text-[11px] font-bold text-white font-mono leading-tight">
                    {node.title}
                  </span>
                </div>
                {idx < graphicalFlow.length - 1 && (
                  <ChevronRight className="hidden lg:block w-3.5 h-3.5 text-[#00d4ff]/40 shrink-0 absolute -right-2 top-1/2 -translate-y-1/2 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY INTEGRATE? */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Core Benefits
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Integrate?
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Eliminate operational friction and keep your existing technology stack intact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {whyIntegrate.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="flex items-center gap-2 text-[#00d4ff]">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: SUPPORTED CONNECTION METHODS */}
      <section className="space-y-8 max-w-5xl mx-auto">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Flexible Protocols
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Supported Connection Methods
          </h2>
        </div>

        <div className="bg-[#0d1117] border border-white/10 rounded-[2px] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead className="bg-[#0a0e1a] border-b border-white/10 font-mono text-[#00d4ff] uppercase tracking-wider">
                <tr>
                  <th className="py-3.5 px-6">Method</th>
                  <th className="py-3.5 px-6">Best For</th>
                  <th className="py-3.5 px-6 text-right">Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {connectionMethods.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white font-mono flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff]" />
                      {row.method}
                    </td>
                    <td className="py-4 px-6 text-slate-300">
                      {row.bestFor}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 border rounded-[2px] ${row.badgeColor}`}>
                        {row.badge}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section className="bg-[#0d1117] border border-[#00d4ff]/30 p-8 sm:p-12 rounded-[2px] text-center space-y-6 max-w-4xl mx-auto">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Don't Replace Your Software
          </h2>
          <p className="text-base text-[#94a3b8]">
            Connect PEXEK to the tools your business already uses.
          </p>
        </div>

        <div className="pt-2">
          <button
            onClick={onOpenAuditModal}
            className="px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-[2px] inline-flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
          >
            Book Strategy Audit
            <ArrowRight className="w-4 h-4" />
          </button>
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
