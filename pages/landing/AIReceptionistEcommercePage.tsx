import React, { useState } from 'react';
import { PagePath } from '../../types';
import { ServiceCrossLinks } from '../../components/ServiceCrossLinks';
import { 
  ShoppingBag, 
  Package, 
  RefreshCcw, 
  HelpCircle, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Lock, 
  Shield, 
  Clock, 
  Headphones, 
  ShoppingCart, 
  TrendingUp 
} from 'lucide-react';

interface AIReceptionistEcommercePageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const AIReceptionistEcommercePage: React.FC<AIReceptionistEcommercePageProps> = ({ 
  onNavigate, 
  onOpenAuditModal 
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const metrics = [
    {
      value: '24/7',
      label: 'Customer Availability',
      disclaimer: 'System capability. Actual coverage depends on deployment configuration.',
    },
    {
      value: '100+',
      label: 'Concurrent Conversations',
      disclaimer: 'System architecture supports high-volume simultaneous conversations.',
    },
    {
      value: '< 1 Second',
      label: 'Average Response Time',
      disclaimer: 'Based on voice infrastructure benchmarks. Actual speed varies by call volume.',
    },
    {
      value: '14 Days',
      label: 'Deployment Timeline',
      disclaimer: 'Average from strategy audit to go-live. Varies by workflow complexity.',
    },
  ];

  const coreCapabilities = [
    {
      icon: <Package className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Order Status Automation',
      description: 'Customers instantly receive order updates, delivery status, and tracking information without waiting for an agent or navigating phone menus.',
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Returns & Exchange Requests',
      description: 'Handle return requests, exchange eligibility, and refund guidance automatically based on your business workflow and policy rules.',
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Product Questions',
      description: 'Answer common product questions, availability, sizing, compatibility, and shipping information using your configured business knowledge base.',
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Customer Calls',
      description: 'Inbound inquiry to your business number',
      micro: 'Direct call receipt',
    },
    {
      step: '02',
      title: 'AI Identifies Customer',
      description: 'Matches caller to order or account via your connected systems',
      micro: 'Account verification',
    },
    {
      step: '03',
      title: 'Answers Question',
      description: 'Provides order status, product info, or policy answers',
      micro: 'Instant information delivery',
    },
    {
      step: '04',
      title: 'Resolves Issue or Creates Ticket',
      description: 'Handles routine requests or escalates complex issues',
      micro: 'Workflow resolution',
    },
    {
      step: '05',
      title: 'CRM Updated',
      description: 'Conversation logged in your connected system',
      micro: 'Automatic record sync',
    },
    {
      step: '06',
      title: 'WhatsApp Confirmation Sent',
      description: 'Follow-up message sent automatically',
      micro: 'Instant receipt delivery',
    },
  ];

  const genericIntegrations = [
    'CRM Systems',
    'Google Calendar',
    'WhatsApp Business API',
    'Stripe',
    'HubSpot',
    'Zapier / Make',
    'Custom API Integrations',
    'Internal Business Systems',
  ];

  const whyEcommerceBrandsChooseAi = [
    {
      icon: <Headphones className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Reduce Support Backlog',
      description: 'Handle routine order and product questions automatically, freeing your team for complex issues.',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Answer Instantly',
      description: 'Customers never wait on hold. AI responds in under one second, every time.',
    },
    {
      icon: <ShoppingCart className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Recover More Sales',
      description: 'Follow up on abandoned carts and answer buyer questions before they leave for a competitor.',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#00d4ff]" />,
      title: 'Scale Without Hiring',
      description: 'Support high-volume sales periods without adding temporary staff or extending hours.',
    },
  ];

  const faqs = [
    {
      q: 'Can AI answer order status questions?',
      a: 'Yes. PEXEK connects to your existing order management system or database to provide real-time order updates, tracking information, and delivery status to callers.',
    },
    {
      q: 'Can AI handle returns and exchanges?',
      a: 'Yes. PEXEK is configured with your return policy and workflow. It guides customers through eligibility checks and creates return tickets in your connected system.',
    },
    {
      q: 'Can AI answer product questions?',
      a: 'Yes. PEXEK uses your product knowledge base to answer questions about availability, sizing, compatibility, features, and shipping options.',
    },
    {
      q: 'Can AI work with our existing e-commerce platform?',
      a: 'PEXEK connects through APIs and webhooks. If your system has an open API or you use a CRM/OMS with integration capabilities, PEXEK can exchange data with it.',
    },
    {
      q: 'Can AI send follow-up messages?',
      a: 'Yes. WhatsApp Business API and SMS integrations are included. Order confirmations, shipping updates, and reminders are sent automatically.',
    },
    {
      q: 'Can AI transfer calls to human agents?',
      a: 'Yes. You define escalation rules. Complex issues, VIP customers, or specific request types can be warm-transferred to your team with full context.',
    },
    {
      q: 'How long does deployment take?',
      a: 'Most e-commerce deployments go live within 14 days after the strategy audit. PEXEK handles configuration, integration, testing, and team onboarding.',
    },
    {
      q: 'Does AI process payments?',
      a: 'No. PEXEK does not process, store, or handle payment transactions. It can direct customers to your secure checkout or payment portal.',
    },
  ];

  const scrollToBlueprint = () => {
    const el = document.getElementById('deployment-scenario');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-28 pb-20 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white font-sans">
      
      {/* SECTION 1 — HERO */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-mono font-bold uppercase tracking-[0.1em] rounded-[2px]">
          <ShoppingBag className="w-3.5 h-3.5" /> Built for E-commerce Brands
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          AI Voice Automation for E-commerce Brands
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
          Never let customer support slow down sales. PEXEK deploys an <strong className="text-white">E-commerce AI Receptionist</strong> and <strong className="text-white">AI Customer Support for Online Stores</strong> featuring <strong className="text-white">Voice AI for E-commerce Brands</strong> that answer customer calls, execute <strong className="text-white">Automated Order Inquiries</strong>, handle <strong className="text-white">Abandoned Cart Recovery Calls</strong>, and provide <strong className="text-white">24/7 E-commerce Support</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#050507] font-extrabold font-mono text-sm uppercase tracking-wider rounded-[2px] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.2)] flex items-center justify-center gap-2 cursor-pointer"
          >
            Book E-commerce Strategy Audit →
          </button>
          
          <button
            onClick={scrollToBlueprint}
            className="text-[#00d4ff] hover:underline font-mono text-xs uppercase tracking-wider py-2 px-4 transition-all flex items-center gap-1 cursor-pointer"
          >
            See Deployment Blueprint →
          </button>
        </div>
      </div>

      {/* SECTION 2 — METRICS (4 Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((card, idx) => (
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

      {/* SECTION 3 — POSITIONING */}
      <div className="bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px] space-y-4 max-w-4xl mx-auto text-center">
        <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
          PEXEK DEPLOYMENT MODEL
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Built for Modern E-commerce Operations
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
          Instead of overwhelming your support team with repetitive phone calls, PEXEK automates customer conversations while your staff focuses on fulfillment and growth. We design and deploy AI voice systems that connect with your existing business tools and workflows.
        </p>
        <div className="pt-2 text-xs font-mono text-[#94a3b8]">
          Salah Eddine El Qaous, Founder @ PEXEK
        </div>
      </div>

      {/* SECTION 4 — CORE CAPABILITIES (3 Features in 3x1 Grid) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            AUTOMATED PHONE WORKFLOWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What PEXEK Deploys for E-commerce
          </h2>
          <p className="text-xs text-[#94a3b8]">
            E-commerce Call Answering and Customer Service Voice AI tailored for online retail operations.
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

      {/* SECTION 5 — CUSTOMER JOURNEY AUTOMATION */}
      <div className="space-y-10 bg-[#0d1117] border border-white/5 p-8 sm:p-12 rounded-[2px]">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            CONVERSATION ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            How Customer Calls Flow Through PEXEK
          </h2>
          <p className="text-xs text-[#94a3b8]">
            From inbound ring to order status lookup, CRM updates, and instant WhatsApp confirmations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
          {journeySteps.map((step, idx) => (
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

      {/* SECTION 6 — SAMPLE DEPLOYMENT SCENARIO */}
      <div id="deployment-scenario" className="bg-[#0a0e1a] border border-white/5 p-8 sm:p-12 rounded-[2px] space-y-8 max-w-4xl mx-auto">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            OPERATIONAL CASE DEPLOYMENT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            High Support Volume During Sales Campaigns
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3">
            <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider block">
              SUPPORT CHALLENGE
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              During promotions and product launches, support teams receive hundreds of repetitive calls about orders, shipping, and returns. Response times increase and customer satisfaction drops.
            </p>
          </div>

          <div className="bg-[#0d1117] border border-[#00d4ff]/30 p-6 rounded-[2px] space-y-3">
            <span className="text-xs font-mono font-bold text-[#00d4ff] uppercase tracking-wider block">
              PEXEK SOLUTION
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">
              AI voice agents answer customer questions instantly, provide order information, create support tickets when required, and escalate only complex situations to your human team.
            </p>
          </div>
        </div>

        <div className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-4">
          <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
            PROJECTED OUTCOME
          </h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Estimated reduction in repetitive customer support calls while improving response speed and customer satisfaction. Results vary depending on business size, call volume, and workflow configuration.
          </p>
          <div className="pt-2 border-t border-white/5 text-[11px] text-[#94a3b8] italic">
            Results vary by business size, workflow complexity, and existing system architecture. PEXEK configures automation based on your specific requirements.
          </div>
        </div>
      </div>

      {/* SECTION 7 — BUSINESS INTEGRATIONS (GENERIC) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            SYSTEM CONNECTOR ECOSYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Connect With Your Existing Business Tools
          </h2>
          <p className="text-xs text-[#94a3b8]">
            PEXEK integrates with your existing technology stack through flexible API and webhook connections.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {genericIntegrations.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-4 rounded-[2px] text-center hover:border-[#00d4ff]/40 transition-colors flex items-center justify-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-[#00d4ff] shrink-0" />
              <span className="text-xs font-extrabold text-white font-mono tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 8 — SECURITY & DATA PROTECTION */}
      <div className="bg-[#0a0e1a] border border-white/5 p-8 sm:p-12 rounded-[2px] space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-[#00d4ff]">
            <Lock className="w-5 h-5" />
            <span className="text-xs font-bold uppercase font-mono tracking-[0.1em]">
              SECURITY & DATA PROTECTION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise Security
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Encrypted conversations and data transmission',
            'Role-based access controls',
            'Secure customer data handling',
            'GDPR-aligned data architecture',
            'PCI-DSS-aware deployment options available',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-[#0d1117] border border-white/5 p-4 rounded-[2px]">
              <Shield className="w-4 h-4 text-[#00d4ff] shrink-0" />
              <span className="text-xs font-bold text-slate-200">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-[13px] text-[#94a3b8] leading-relaxed pt-2 border-t border-white/10">
          Every deployment is customized according to your business workflows, data requirements, and existing technology ecosystem. PEXEK does not process payments or store credit card information.
        </p>
      </div>

      {/* SECTION 9 — WHY E-COMMERCE BRANDS CHOOSE AI (4 Cards) */}
      <div className="space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            AI PHONE SUPPORT FOR RETAIL
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why E-commerce Brands Choose AI Voice Support
          </h2>
          <p className="text-xs text-[#94a3b8]">
            Deliver responsive customer service around the clock while keeping operating costs predictable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyEcommerceBrandsChooseAi.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-[#0d1117] border border-white/5 p-8 rounded-[2px] space-y-4 hover:border-[#00d4ff]/40 transition-colors"
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

      {/* SECTION 10 — FAQ */}
      <div className="space-y-10 max-w-4xl mx-auto">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            E-COMMERCE FAQ
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
        currentPath="/ecommerce-ai-support"
        type="industry"
        onNavigate={onNavigate}
        onOpenAuditModal={onOpenAuditModal}
      />

      {/* SECTION 11 — FINAL CTA */}
      <div className="bg-[#0d1117] border-t-2 border-t-[#00d4ff] border-x border-b border-white/5 p-8 sm:p-14 rounded-[2px] text-center space-y-8 shadow-2xl">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready To Automate Customer Conversations?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Book a 30-minute deployment strategy session and receive a personalized AI voice roadmap for your e-commerce operation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto text-left py-2">
          {[
            'Analyze your support workflow',
            'Identify automation opportunities',
            'Build your deployment roadmap',
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
            Book E-commerce Strategy Audit →
          </button>
          <p className="text-[11px] text-[#94a3b8] italic">
            30-minute session. No obligation. No technical preparation required.
          </p>
        </div>
      </div>

      {/* SECTION 12 — FOOTER DISCLAIMER */}
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="bg-[#0a0e1a] border border-white/5 p-6 rounded-[2px] text-center max-w-5xl mx-auto">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            Every deployment is customized according to the organization's workflows, data requirements, and existing software ecosystem. PEXEK does not process payments, manage inventory, or operate as an e-commerce platform. All automation is configured based on the business owner's specific instructions and protocols.
          </p>
        </div>
      </div>

    </div>
  );
};
