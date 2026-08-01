import React, { useState } from 'react';
import { PagePath } from '../types';
import { 
  Lock, 
  Shield, 
  Eye, 
  Link, 
  Globe, 
  RefreshCw, 
  FileCheck, 
  MapPin, 
  Server, 
  Archive, 
  Activity, 
  AlertTriangle, 
  RotateCcw, 
  Cloud, 
  KeyRound, 
  GitBranch, 
  Database, 
  ShieldCheck, 
  Users, 
  FileText, 
  ChevronDown, 
  ArrowRight, 
  Check,
  Cpu,
  Layers,
  CheckCircle2
} from 'lucide-react';

interface SecurityCompliancePageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const SecurityCompliancePage: React.FC<SecurityCompliancePageProps> = ({
  onNavigate,
  onOpenAuditModal,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const securityPillars = [
    {
      icon: <Lock className="w-5 h-5 text-[#00d4ff]" />,
      title: 'End-to-End Encryption',
      description: 'Voice conversations, transcripts, and business data are protected using industry-standard encryption during transmission and storage. Encryption methods are configured according to the project environment and infrastructure provider capabilities.'
    },
    {
      icon: <Shield className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Access & Identity Management',
      description: 'Only authorized personnel can access your AI voice system. Role-based access controls, multi-factor authentication (where supported by the environment), and least-privilege permissions are established during initial setup.'
    },
    {
      icon: <Eye className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Audit Logging',
      description: 'Every important system action is logged for operational visibility. Access logs, conversation handling events, and integration activities are recorded according to your configured retention policies.'
    },
    {
      icon: <Link className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Secure Integrations',
      description: 'Connections to CRM, calendar, and messaging systems use authenticated APIs and secure communication protocols. No unsecured or unverified data channels.'
    },
    {
      icon: <Layers className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Infrastructure Isolation',
      description: 'Deployment environments are logically isolated according to project architecture, reducing unnecessary exposure between connected systems.'
    }
  ];

  const compliancePillars = [
    {
      icon: <Globe className="w-5 h-5 text-[#00d4ff]" />,
      title: 'GDPR-Aligned Deployments',
      description: 'Data architecture designed to support privacy-focused workflows, including configurable data handling, processing transparency, and secure storage practices. Not a GDPR compliance guarantee.'
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Configurable Data Retention',
      description: 'Retention periods for conversations, transcripts, and logs can be configured according to your business requirements and underlying system architecture. You control how long data is stored.'
    },
    {
      icon: <FileCheck className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Data Ownership',
      description: 'Your customer business data remains under your organization\'s control. PEXEK processes data only to perform configured workflows and does not claim ownership of your business information.'
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Regional Deployment Options',
      description: 'Deployment architecture can be configured according to regional infrastructure availability and business requirements. Data residency preferences are addressed where supported by the hosting environment.'
    },
    {
      icon: <FileText className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Data Processing Transparency',
      description: 'Customer data is processed only for the configured business workflows. Data flows, integrations, and processing activities remain visible throughout the deployment lifecycle.'
    }
  ];

  const resilienceItems = [
    {
      icon: <Server className="w-5 h-5 text-[#00d4ff]" />,
      title: 'High Availability Infrastructure',
      description: 'Deployed across redundant cloud environments to maintain service continuity.'
    },
    {
      icon: <Archive className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Automated Backup Procedures',
      description: 'Regular backup processes configured according to your deployment requirements.'
    },
    {
      icon: <Activity className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Continuous System Monitoring',
      description: 'Infrastructure health and performance tracked to identify and address issues proactively.'
    },
    {
      icon: <AlertTriangle className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Incident Detection',
      description: 'Automated alerting for unusual activity, integration failures, or performance anomalies.'
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Disaster Recovery Planning',
      description: 'Recovery procedures configured to restore operations according to your business continuity requirements.'
    },
    {
      icon: <Cloud className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Secure Cloud Environments',
      description: 'PEXEK deploys within enterprise-grade cloud infrastructure providers. Physical security, network isolation, and environmental controls are managed by the underlying infrastructure.'
    }
  ];

  const trustedProviders = [
    'OpenAI',
    'ElevenLabs',
    'Twilio',
    'Google Cloud',
    'HubSpot',
    'Stripe'
  ];

  const integrationSecurityCards = [
    {
      icon: <KeyRound className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Authenticated API Connections',
      description: 'Every CRM, calendar, and messaging integration uses token-based or OAuth authentication. No open or unprotected endpoints.'
    },
    {
      icon: <GitBranch className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Webhook Security',
      description: 'Inbound and outbound webhooks are secured with signature verification and encrypted transmission where supported.'
    },
    {
      icon: <Database className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Data Minimization',
      description: 'Only the information required to perform configured business workflows is processed and transmitted between systems.'
    },
    {
      icon: <Eye className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Operational Transparency',
      description: 'Workflow execution, integration events, and automation triggers can be monitored through system logs and audit trails configured during deployment.'
    }
  ];

  const securityPrinciples = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Privacy by Design',
      description: 'Security and privacy considerations are incorporated throughout the deployment process, not added as an afterthought.'
    },
    {
      icon: <Lock className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Secure by Default',
      description: 'Deployments are configured with restrictive access, encrypted transmission, and minimal data exposure from day one.'
    },
    {
      icon: <Users className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Least Privilege',
      description: 'Users, integrations, and automated processes receive only the permissions necessary to perform their configured functions.'
    },
    {
      icon: <FileText className="w-5 h-5 text-[#00d4ff]" />,
      title: 'Operational Transparency',
      description: 'You remain informed about how data flows through your AI deployment, which systems are connected, and how information is handled.'
    }
  ];

  const pexekSecures = [
    'AI deployment architecture',
    'Voice workflows',
    'System integrations',
    'Access configuration',
    'Deployment monitoring',
    'Operational support'
  ];

  const organizationControls = [
    'Employee permissions',
    'CRM data quality',
    'Internal security policies',
    'Regulatory obligations',
    'User access management',
    'Business process compliance'
  ];

  const lifecycleSteps = [
    {
      name: 'Plan',
      desc: 'Security requirements mapped to your industry and compliance needs.'
    },
    {
      name: 'Configure',
      desc: 'Access controls, encryption, and integration security established.'
    },
    {
      name: 'Validate',
      desc: 'Penetration testing, edge-case review, and vulnerability assessment.'
    },
    {
      name: 'Deploy',
      desc: 'Production launch with real-time security monitoring.'
    },
    {
      name: 'Monitor',
      desc: 'Continuous logging, alerting, and incident detection.'
    },
    {
      name: 'Optimize',
      desc: 'Regular security reviews and architecture improvements.'
    }
  ];

  const faqs = [
    {
      q: 'Is customer data encrypted?',
      a: 'Yes. Voice conversations and connected business data are protected using industry-standard encryption during transmission and storage, depending on the selected deployment architecture.'
    },
    {
      q: 'Can PEXEK integrate securely with our CRM?',
      a: 'Yes. Integrations use authenticated APIs and secure communication protocols. Connection security is verified during the system testing phase.'
    },
    {
      q: 'Can access be restricted for employees?',
      a: 'Yes. Access permissions can be configured based on user roles and operational requirements during initial system setup.'
    },
    {
      q: 'Do we own our customer data?',
      a: 'Yes. Customer business data remains under your organization\'s control according to the project configuration. PEXEK processes data only to execute your configured workflows.'
    },
    {
      q: 'Is this HIPAA compliant?',
      a: 'PEXEK supports HIPAA-ready workflows where applicable, including encrypted data handling and access controls. We recommend reviewing your specific compliance requirements during the architecture audit.'
    },
    {
      q: 'Is this GDPR compliant?',
      a: 'PEXEK implements GDPR-aligned data architecture with configurable retention, processing transparency, and privacy-focused design. We recommend reviewing your specific obligations with your legal advisor.'
    },
    {
      q: 'Where is data stored?',
      a: 'Infrastructure architecture can be configured according to regional cloud availability. Data residency preferences are discussed during the strategy audit.'
    },
    {
      q: 'What happens if there\'s a security incident?',
      a: 'PEXEK maintains continuous monitoring and alerting procedures. Incident response protocols are configured according to your business requirements and underlying cloud capabilities.'
    },
    {
      q: 'Do you store our customer conversations?',
      a: 'Conversation storage depends on your system configuration, connected infrastructure, and retention policies. Storage duration can be configured according to business requirements.'
    }
  ];

  return (
    <div className="space-y-20 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-sans text-slate-100">
      
      {/* SECTION 1: HERO */}
      <section className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-[2px]">
          <Shield className="w-3.5 h-3.5 text-[#00d4ff]" />
          <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#00d4ff]">
            Enterprise-Grade Protection
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          Enterprise Security & Data Protection
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
          Enterprise security built into every AI voice deployment—from customer conversations to connected business systems.
        </p>

        {/* HERO CTAS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto px-7 py-3.5 bg-[#00d4ff] text-black font-bold text-sm tracking-wide hover:bg-[#00d4ff]/90 transition-all duration-200 rounded-[2px] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.25)]"
          >
            Review Your Security Architecture
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenAuditModal}
            className="text-[#00d4ff] text-sm font-semibold hover:underline flex items-center gap-1 py-2 px-4"
          >
            Discuss Your Requirements →
          </button>
        </div>
      </section>

      {/* SECTION 2: SECURITY ARCHITECTURE (4 PILLARS) */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Enterprise AI Security
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Security Architecture
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Multi-layered protection built into every deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {securityPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-2.5 bg-[#0a0e1a] border border-[#00d4ff]/20 w-fit rounded-[2px]">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: COMPLIANCE & DATA PRIVACY */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Business AI Privacy
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Compliance & Data Privacy
          </h2>
          <p className="text-sm text-[#94a3b8] max-w-2xl mx-auto">
            PEXEK deployments are designed with privacy-focused architecture to support organizations operating under modern data protection requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {compliancePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-2.5 bg-[#0a0e1a] border border-[#00d4ff]/20 w-fit rounded-[2px]">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-white">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: INFRASTRUCTURE RESILIENCE */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            AI Data Handling
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Infrastructure Resilience
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Built for business-critical operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {resilienceItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-5 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-2 bg-[#0a0e1a] border border-[#00d4ff]/20 w-fit rounded-[2px]">
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

      {/* SECTION 5: ENTERPRISE TECHNOLOGY PARTNERS */}
      <section className="space-y-6 bg-[#0d1117] border border-white/10 p-6 sm:p-8 rounded-[2px] max-w-5xl mx-auto">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Enterprise Voice Security
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
            Enterprise Technology Partners
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8]">
            PEXEK deployments are powered by trusted enterprise cloud providers and AI infrastructure platforms selected according to each project's requirements.
          </p>
        </div>

        {/* 6 PROVIDER NAMES DISPLAYED AS CLEAN TEXT GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2 text-center">
          {trustedProviders.map((provider, idx) => (
            <div key={idx} className="bg-[#0a0e1a] border border-white/10 py-3 px-2 rounded-[2px]">
              <span className="text-xs font-mono font-bold text-white tracking-wider block">
                {provider}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[11px] text-[#94a3b8] italic">
          Technology providers are selected according to each deployment's architecture, compliance requirements, and operational needs.
        </p>
      </section>

      {/* SECTION 6: INTEGRATION SECURITY */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Secure CRM Integration
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Integration Security
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Your connected systems remain protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {integrationSecurityCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-2.5 bg-[#0a0e1a] border border-[#00d4ff]/20 w-fit rounded-[2px]">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white">
                {card.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: SECURITY PRINCIPLES */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Secure AI Deployment
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Security Principles
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Every deployment follows these core principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {securityPrinciples.map((principle, idx) => (
            <div
              key={idx}
              className="bg-[#0d1117] border border-white/5 p-6 rounded-[2px] space-y-3 hover:border-[#00d4ff]/40 transition-all duration-200"
            >
              <div className="p-2.5 bg-[#0a0e1a] border border-[#00d4ff]/20 w-fit rounded-[2px]">
                {principle.icon}
              </div>
              <h3 className="text-lg font-bold text-white">
                {principle.title}
              </h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: SHARED RESPONSIBILITY MODEL */}
      <section className="space-y-10">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Shared Responsibility Model
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Shared Responsibility Model
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Security is a partnership between PEXEK and your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* LEFT: What PEXEK Secures */}
          <div className="bg-[#0d1117] border-l-2 border-l-[#00d4ff] border-t border-r border-b border-white/5 p-6 rounded-[2px] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00d4ff]" />
              What PEXEK Secures
            </h3>
            <ul className="space-y-2.5">
              {pexekSecures.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#00d4ff] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: What Your Organization Manages */}
          <div className="bg-[#0d1117] border-l-2 border-l-slate-400 border-t border-r border-b border-white/5 p-6 rounded-[2px] space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-slate-400" />
              What Your Organization Manages
            </h3>
            <ul className="space-y-2.5">
              {organizationControls.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 9: SECURITY LIFECYCLE */}
      <section className="space-y-8 max-w-6xl mx-auto">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Continuous Governance
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Security Lifecycle
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Security is reviewed throughout the entire deployment lifecycle—not only after launch.
          </p>
        </div>

        {/* HORIZONTAL TIMELINE NODES */}
        <div className="bg-[#0d1117] border border-white/10 p-6 rounded-[2px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {lifecycleSteps.map((step, idx) => (
              <div key={idx} className="bg-[#0a0e1a] border border-[#00d4ff]/20 p-4 rounded-[2px] space-y-2 relative group hover:border-[#00d4ff] transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#00d4ff] font-mono">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-white font-mono uppercase tracking-wider">
                    {step.name}
                  </span>
                </div>
                <p className="text-[11px] text-[#94a3b8] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase font-mono tracking-[0.1em] text-[#00d4ff]">
            Encrypted AI Conversations
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#0d1117] border border-white/5 rounded-[2px] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-[#00d4ff] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 border-t border-white/5 text-xs text-[#94a3b8] leading-relaxed">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 11: FINAL CTA + FOOTER DISCLAIMER */}
      <section className="bg-[#0d1117] border border-[#00d4ff]/30 p-8 sm:p-12 rounded-[2px] text-center space-y-8 max-w-4xl mx-auto">
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Review Your Security Architecture
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Book a security consultation and review how PEXEK handles data protection for your specific industry and compliance needs.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-200 font-medium">
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Security architecture review</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Compliance requirement assessment</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>Custom deployment roadmap</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#00d4ff]" />
            <span>No obligation</span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <button
            onClick={onOpenAuditModal}
            className="px-8 py-4 bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-[2px] inline-flex items-center gap-2 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
          >
            Review Your Security Architecture
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-xs text-[#94a3b8]">
            30-minute session. No obligation. No technical preparation required.
          </p>
        </div>
      </section>

      {/* FOOTER DISCLAIMER */}
      <div className="border-t border-white/10 pt-8 pb-4">
        <div className="bg-[#0a0e1a] border border-white/5 p-6 rounded-[2px] text-center max-w-5xl mx-auto">
          <p className="text-xs text-[#94a3b8] leading-relaxed">
            Certain certifications, compliance capabilities, and data residency options depend on the underlying infrastructure providers and deployment architecture selected for your project. Security features, compliance capabilities, and data residency options vary depending on the selected architecture, connected systems, hosting region, and underlying technology providers. PEXEK designs and implements secure AI voice solutions using enterprise infrastructure and industry-standard security practices. Compliance responsibilities ultimately remain with the deploying organization and should be reviewed according to applicable legal and regulatory requirements.
          </p>
        </div>
      </div>

    </div>
  );
};
