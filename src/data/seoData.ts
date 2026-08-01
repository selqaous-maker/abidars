export interface PageSeoConfig {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: string;
  jsonLd?: object[];
}

const DEFAULT_DOMAIN = 'https://pexek.com';

export const pexekOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${DEFAULT_DOMAIN}/#organization`,
  name: 'PEXEK',
  url: DEFAULT_DOMAIN,
  logo: `${DEFAULT_DOMAIN}/icon.png`,
  description: 'Enterprise AI voice deployment partner for modern service businesses.',
  founder: {
    '@type': 'Person',
    name: 'Salah Eddine El Qaous'
  },
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    availableLanguage: ['English']
  }
};

export const pexekWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${DEFAULT_DOMAIN}/#website`,
  url: DEFAULT_DOMAIN,
  name: 'PEXEK Enterprise AI Voice Infrastructure',
  publisher: {
    '@id': `${DEFAULT_DOMAIN}/#organization`
  }
};

export const seoDataMap: Record<string, PageSeoConfig> = {
  '/': {
    title: 'PEXEK | Enterprise AI Voice Infrastructure & Managed AI Voice Deployment',
    description: 'PEXEK deploys enterprise AI voice agents for service businesses. Answer calls 24/7, qualify leads, and automate CRM workflows with custom AI voice infrastructure.',
    keywords: 'Enterprise AI Voice, AI Voice Agents, Managed AI Voice Deployment, AI Receptionist, AI Voice Infrastructure, Automated Call Handling, CRM Integration',
    canonical: `${DEFAULT_DOMAIN}/`,
    ogTitle: 'PEXEK | Enterprise AI Voice Infrastructure & Managed Deployment',
    ogDescription: 'Deploy production-ready AI voice agents for your business. 24/7 call answering, lead qualification, calendar booking, and CRM integration.',
    ogType: 'website',
    jsonLd: [
      pexekOrganizationSchema,
      pexekWebsiteSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Enterprise AI Voice Deployment',
        provider: { '@id': `${DEFAULT_DOMAIN}/#organization` },
        description: 'End-to-end design, configuration, integration, and continuous optimization of custom AI voice infrastructure.',
        areaServed: 'Worldwide',
        serviceType: 'AI Voice Automation'
      }
    ]
  },
  '/about': {
    title: 'About PEXEK | AI Voice Infrastructure For Modern Businesses',
    description: 'Learn about PEXEK mission, deployment philosophy, and values. We build enterprise AI voice infrastructure that answers every customer call and automates workflows.',
    keywords: 'About PEXEK, AI Voice Deployment Partner, Enterprise AI Infrastructure, AI Voice Team',
    canonical: `${DEFAULT_DOMAIN}/about`,
    ogTitle: 'About PEXEK | Enterprise AI Voice Infrastructure Partner',
    ogDescription: 'PEXEK helps service organizations deploy custom AI voice systems that respond instantly and integrate into core workflows.',
    jsonLd: [
      pexekOrganizationSchema,
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: DEFAULT_DOMAIN },
          { '@type': 'ListItem', position: 2, name: 'About PEXEK', item: `${DEFAULT_DOMAIN}/about` }
        ]
      }
    ]
  },
  '/voice-ai-agents': {
    title: 'Voice AI Agents & Custom AI Receptionists | PEXEK',
    description: 'Custom AI voice agents tailored to your business rules. Answer incoming calls, qualify prospects, schedule appointments, and update CRMs in real time.',
    keywords: 'Voice AI Agents, Custom AI Receptionist, Inbound AI Voice, Outbound AI Qualification, Conversational Voice AI',
    canonical: `${DEFAULT_DOMAIN}/voice-ai-agents`,
    ogTitle: 'Voice AI Agents & Custom AI Receptionists | PEXEK',
    ogDescription: 'Human-like voice quality, zero latency delay, and seamless CRM integrations built specifically for enterprise service workflows.',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Voice AI Agents',
        provider: { '@id': `${DEFAULT_DOMAIN}/#organization` },
        description: 'Custom conversational voice AI agents built for inbound call answering, qualification, and appointment scheduling.'
      }
    ]
  },
  '/deployment': {
    title: 'Managed AI Voice Deployment Process | PEXEK',
    description: 'Explore PEXEK 4-stage managed deployment framework: Strategy & Architecture, Custom Voice Configuration, CRM Integration & Testing, Launch & Optimization.',
    keywords: 'Managed Deployment, AI Voice Implementation, Enterprise AI Architecture, AI Deployment Process',
    canonical: `${DEFAULT_DOMAIN}/deployment`,
    ogTitle: 'Managed AI Voice Deployment | PEXEK Framework',
    ogDescription: 'A fully managed 4-step deployment process to integrate enterprise AI voice agents into your business operations with zero technical friction.',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: DEFAULT_DOMAIN },
          { '@type': 'ListItem', position: 2, name: 'Managed Deployment', item: `${DEFAULT_DOMAIN}/deployment` }
        ]
      }
    ]
  },
  '/managed-deployment': {
    title: 'Managed AI Voice Implementation Services | PEXEK',
    description: 'PEXEK handles 100% of your AI voice deployment. Custom agent engineering, telephony setup, CRM webhooks, and ongoing live performance monitoring.',
    keywords: 'Managed Implementation, Done-For-You AI Voice, Enterprise Voice Setup',
    canonical: `${DEFAULT_DOMAIN}/managed-deployment`,
    ogTitle: 'Managed AI Voice Implementation Services | PEXEK',
    ogDescription: 'End-to-end done-for-you voice AI engineering. We design, build, test, and manage your AI voice infrastructure.',
    jsonLd: []
  },
  '/deployment-blueprints': {
    title: 'AI Voice Deployment Blueprints & Architecture | PEXEK',
    description: 'Pre-tested architecture blueprints for inbound call handling, lead qualification, appointment booking, and multi-channel CRM synchronization.',
    keywords: 'AI Deployment Blueprints, AI Voice Architecture, Call Automation Workflow, Enterprise Telephony Schema',
    canonical: `${DEFAULT_DOMAIN}/deployment-blueprints`,
    ogTitle: 'AI Voice Deployment Blueprints | PEXEK Architecture',
    ogDescription: 'Standardized and custom voice AI blueprints engineered for service industries and complex enterprise operations.',
    jsonLd: []
  },
  '/integrations': {
    title: 'Enterprise CRM & Telephony Integrations | PEXEK',
    description: 'Connect PEXEK AI voice agents directly with HubSpot, Salesforce, Google Calendar, Zapier, Twilio, Stripe, and custom REST API webhooks.',
    keywords: 'AI CRM Integration, HubSpot AI Voice, Salesforce Telephony, Twilio Voice AI, Calendar Scheduling AI',
    canonical: `${DEFAULT_DOMAIN}/integrations`,
    ogTitle: 'Enterprise CRM & Telephony Integrations | PEXEK',
    ogDescription: 'Seamless bi-directional data synchronization between your voice AI agents and existing business software stack.',
    jsonLd: []
  },
  '/security-compliance': {
    title: 'Enterprise Security, Compliance & Data Protection | PEXEK',
    description: 'Enterprise security for AI voice deployments. Encrypted communications, secure API webhooks, role-based access controls, and GDPR-aligned architecture.',
    keywords: 'Enterprise AI Security, AI Voice Data Protection, Secure AI Deployment, Business AI Privacy, GDPR-Aligned AI',
    canonical: `${DEFAULT_DOMAIN}/security-compliance`,
    ogTitle: 'Enterprise Security & Data Protection | PEXEK',
    ogDescription: 'Discover how PEXEK protects customer conversations, business data, and connected systems with enterprise-grade deployment practices.',
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is customer data encrypted?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Voice conversations and connected business data are protected using industry-standard encryption during transmission and storage, depending on the selected deployment architecture.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can PEXEK integrate securely with our CRM?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Integrations use authenticated APIs and secure communication protocols. Connection security is verified during the system testing phase.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do we own our customer data?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Customer business data remains under your organization\'s control according to the project configuration. PEXEK processes data only to execute your configured workflows.'
            }
          }
        ]
      }
    ]
  },
  '/security': {
    title: 'Enterprise Security, Compliance & Data Protection | PEXEK',
    description: 'Enterprise security for AI voice deployments. Encrypted communications, secure API webhooks, role-based access controls, and GDPR-aligned architecture.',
    keywords: 'Enterprise AI Security, AI Voice Data Protection, Secure AI Deployment, Business AI Privacy, GDPR-Aligned AI',
    canonical: `${DEFAULT_DOMAIN}/security-compliance`,
    ogTitle: 'Enterprise Security & Data Protection | PEXEK',
    ogDescription: 'Discover how PEXEK protects customer conversations, business data, and connected systems with enterprise-grade deployment practices.',
    jsonLd: []
  },
  '/pricing': {
    title: 'Enterprise AI Voice Deployment Pricing Models | PEXEK',
    description: 'Transparent deployment models designed for performance and scale. Managed setup, custom workflow configuration, and predictable operational costs.',
    keywords: 'AI Voice Pricing, Managed Deployment Cost, Enterprise AI Investment, Custom AI Voice Pricing',
    canonical: `${DEFAULT_DOMAIN}/pricing`,
    ogTitle: 'Enterprise AI Voice Deployment Pricing | PEXEK',
    ogDescription: 'Clear, outcome-focused pricing models for custom AI voice infrastructure and ongoing managed optimization.',
    jsonLd: []
  },
  '/blog': {
    title: 'AI Voice Insights, Industry Trends & Deployment Guides | PEXEK',
    description: 'Read the latest technical analysis, deployment strategies, and operational guides on enterprise AI voice automation and conversational AI.',
    keywords: 'AI Voice Blog, Conversational AI Insights, Call Automation Guide, Enterprise Voice AI Strategy',
    canonical: `${DEFAULT_DOMAIN}/blog`,
    ogTitle: 'PEXEK AI Voice Engineering Blog & Insights',
    ogDescription: 'In-depth articles and operational strategies for deploying enterprise voice AI systems in modern service businesses.',
    jsonLd: []
  },
  '/roi-calculator': {
    title: 'Call Revenue Leakage & AI ROI Calculator | PEXEK',
    description: 'Calculate how much revenue your business loses to unanswered calls and after-hours lead leakage. Estimate your projected ROI with PEXEK AI voice agents.',
    keywords: 'Missed Call ROI Calculator, Call Leakage Calculator, AI Voice ROI, Revenue Recovery Calculator',
    canonical: `${DEFAULT_DOMAIN}/roi-calculator`,
    ogTitle: 'Call Revenue Leakage & AI ROI Calculator | PEXEK',
    ogDescription: 'Calculate lost revenue from missed calls and see instant return-on-investment estimates with PEXEK automated voice infrastructure.',
    jsonLd: []
  },
  '/case-studies': {
    title: 'Enterprise Deployment Case Studies & Success Stories | PEXEK',
    description: 'Explore real-world operational results: zero missed calls, faster lead response times, and increased appointment bookings across service organizations.',
    keywords: 'AI Voice Case Studies, Voice Automation Results, Enterprise AI Success Stories',
    canonical: `${DEFAULT_DOMAIN}/case-studies`,
    ogTitle: 'Enterprise AI Voice Case Studies | PEXEK Results',
    ogDescription: 'Real operational impact: How PEXEK AI voice deployments transform call answering and lead capture for high-volume businesses.',
    jsonLd: []
  },
  '/industry-playbooks': {
    title: 'Industry AI Voice Playbooks | Dental, Healthcare, Legal, Real Estate',
    description: 'Tailored AI voice deployment playbooks engineered for Dental practices, Healthcare clinics, Legal firms, Real Estate agencies, and Home Services.',
    keywords: 'Dental AI Voice, Healthcare AI Receptionist, Legal AI Intake, Real Estate Voice AI, Home Services Call Automation',
    canonical: `${DEFAULT_DOMAIN}/industry-playbooks`,
    ogTitle: 'Industry AI Voice Playbooks | PEXEK Solutions',
    ogDescription: 'Discover domain-specific workflows, pre-configured call scripts, and compliance-aligned architectures for your specific industry.',
    jsonLd: []
  },
  '/demo': {
    title: 'Interactive Voice AI Demo & Call Experience | PEXEK',
    description: 'Experience PEXEK voice AI capabilities. Listen to sample conversations, test interactive voice flows, and see real-time CRM data extraction.',
    keywords: 'AI Voice Demo, Interactive AI Call Sample, Test Voice AI, PEXEK Demo',
    canonical: `${DEFAULT_DOMAIN}/demo`,
    ogTitle: 'Interactive Voice AI Demo | PEXEK Experience',
    ogDescription: 'Test natural voice conversation, low latency response, and automated booking logic in our interactive demo sandbox.',
    jsonLd: []
  },
  '/contact': {
    title: 'Contact PEXEK | Discuss Your AI Voice Deployment',
    description: 'Get in touch with PEXEK enterprise voice engineering team. Schedule an architecture review or discuss your custom AI voice deployment requirements.',
    keywords: 'Contact PEXEK, AI Voice Consultation, Enterprise Support, Speak With AI Engineer',
    canonical: `${DEFAULT_DOMAIN}/contact`,
    ogTitle: 'Contact PEXEK | Enterprise AI Voice Infrastructure',
    ogDescription: 'Connect with our team to evaluate your call volume, integration stack, and custom voice AI deployment timeline.',
    jsonLd: []
  },
  '/founder': {
    title: 'Salah Eddine El Qaous | Founder @ PEXEK',
    description: 'Salah Eddine El Qaous is the Founder of PEXEK, building enterprise-grade AI voice infrastructure and managed deployment systems for modern businesses.',
    keywords: 'Salah Eddine El Qaous, Founder PEXEK, PEXEK Leadership',
    canonical: `${DEFAULT_DOMAIN}/founder`,
    ogTitle: 'Salah Eddine El Qaous | Founder @ PEXEK',
    ogDescription: 'Learn about the leadership and vision behind PEXEK enterprise AI voice deployment partner.',
    jsonLd: []
  }
};
