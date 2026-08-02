import { BLOG_POSTS, INDUSTRIES, CASE_STUDIES } from './mockData';
import { resolveProgrammaticPage } from '../programmatic-seo/engine/resolver';
import { generateProgrammaticSchemaGraph } from '../programmatic-seo/engine/seoSchemaGenerator';

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

/**
 * 1. Global Core Schema: Organization
 */
export const pexekOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${DEFAULT_DOMAIN}/#organization`,
  name: 'PEXEK',
  legalName: 'PEXEK AI Voice Infrastructure Systems',
  url: DEFAULT_DOMAIN,
  logo: {
    '@type': 'ImageObject',
    '@id': `${DEFAULT_DOMAIN}/#logo`,
    url: `${DEFAULT_DOMAIN}/pexek-logo.png`,
    caption: 'PEXEK Enterprise AI Voice Infrastructure'
  },
  image: `${DEFAULT_DOMAIN}/pexek-og.png`,
  description: 'Enterprise AI voice deployment partner for modern service businesses.',
  founder: {
    '@type': 'Person',
    '@id': `${DEFAULT_DOMAIN}/founder#person`,
    name: 'Salah Eddine El Qaous',
    jobTitle: 'Founder & Principal Architect'
  },
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'contact@pexek.com',
    availableLanguage: ['English']
  }
};

/**
 * 2. Global Core Schema: WebSite with SearchAction
 */
export const pexekWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${DEFAULT_DOMAIN}/#website`,
  url: DEFAULT_DOMAIN,
  name: 'PEXEK Enterprise AI Voice Infrastructure',
  description: 'Enterprise AI voice agents, 24/7 call answering, lead qualification, and managed AI deployment.',
  publisher: {
    '@id': `${DEFAULT_DOMAIN}/#organization`
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${DEFAULT_DOMAIN}/blog?q={search_term_string}`
    },
    'query-input': 'required name=search_term_string'
  }
};

/**
 * 3. Person Schema for Founder
 */
export const pexekPersonSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${DEFAULT_DOMAIN}/founder#person`,
  name: 'Salah Eddine El Qaous',
  jobTitle: 'Founder & Principal Architect',
  worksFor: { '@id': `${DEFAULT_DOMAIN}/#organization` },
  url: `${DEFAULT_DOMAIN}/founder`,
  image: `${DEFAULT_DOMAIN}/pexek-logo.png`,
  description: 'Salah Eddine El Qaous is the Founder of PEXEK, building enterprise-grade AI voice infrastructure and managed deployment systems.',
  knowsAbout: [
    'Enterprise AI Voice Systems',
    'Low-Latency Speech Synthesis',
    'Telephony API Architecture',
    'CRM Workflow Automation',
    'Lead Qualification AI'
  ],
  sameAs: []
};

/**
 * Helper: WebPage Schema Generator
 */
export function createWebPageSchema(
  url: string,
  name: string,
  description: string,
  type: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage' = 'WebPage',
  mainEntityId?: string
) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${url}#webpage`,
    url: url,
    name: name,
    description: description,
    isPartOf: { '@id': `${DEFAULT_DOMAIN}/#website` },
    publisher: { '@id': `${DEFAULT_DOMAIN}/#organization` },
    inLanguage: 'en-US',
    breadcrumb: { '@id': `${url}#breadcrumb` }
  };

  if (mainEntityId) {
    schema.mainEntity = { '@id': mainEntityId };
  }

  return schema;
}

/**
 * Helper: BreadcrumbList Schema Generator
 */
export function createBreadcrumbSchema(url: string, items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${url}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Helper: Service Schema Generator for Service Pages
 */
export function createServiceSchema(
  url: string,
  name: string,
  serviceType: string,
  description: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${url}#service`,
    name: name,
    serviceType: serviceType,
    provider: { '@id': `${DEFAULT_DOMAIN}/#organization` },
    description: description,
    url: url,
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide'
    },
    termsOfService: `${DEFAULT_DOMAIN}/pricing`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'PEXEK AI Voice Services Tiers',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Done-For-You AI Voice Deployment',
          url: `${DEFAULT_DOMAIN}/pricing`,
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock'
        }
      ]
    }
  };
}

/**
 * Master SEO & Schema Map for All Website Pages
 */
export const seoDataMap: Record<string, PageSeoConfig> = {
  // 1. Homepage
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
      createWebPageSchema(`${DEFAULT_DOMAIN}/`, 'PEXEK Enterprise AI Voice Infrastructure', 'PEXEK deploys enterprise AI voice agents for service businesses.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/`, [{ name: 'Home', url: `${DEFAULT_DOMAIN}/` }]),
      createServiceSchema(`${DEFAULT_DOMAIN}/`, 'Enterprise AI Voice Deployment', 'AI Voice Infrastructure', 'End-to-end design, configuration, integration, and continuous optimization of custom AI voice infrastructure.')
    ]
  },

  // 2. About Page
  '/about': {
    title: 'About PEXEK | AI Voice Infrastructure For Modern Businesses',
    description: 'Learn about PEXEK mission, deployment philosophy, and values. We build enterprise AI voice infrastructure that answers every customer call and automates workflows.',
    keywords: 'About PEXEK, AI Voice Deployment Partner, Enterprise AI Infrastructure, AI Voice Team',
    canonical: `${DEFAULT_DOMAIN}/about`,
    ogTitle: 'About PEXEK | Enterprise AI Voice Infrastructure Partner',
    ogDescription: 'PEXEK helps service organizations deploy custom AI voice systems that respond instantly and integrate into core workflows.',
    jsonLd: [
      pexekOrganizationSchema,
      createWebPageSchema(`${DEFAULT_DOMAIN}/about`, 'About PEXEK | Enterprise AI Voice Infrastructure Partner', 'Learn about PEXEK mission and deployment philosophy.', 'AboutPage', `${DEFAULT_DOMAIN}/#organization`),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/about`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'About PEXEK', url: `${DEFAULT_DOMAIN}/about` }
      ])
    ]
  },

  // 3. Founder Page
  '/founder': {
    title: 'Salah Eddine El Qaous | Founder @ PEXEK',
    description: 'Salah Eddine El Qaous is the Founder of PEXEK, building enterprise-grade AI voice infrastructure and managed deployment systems for modern businesses.',
    keywords: 'Salah Eddine El Qaous, Founder PEXEK, PEXEK Leadership, AI Voice Architect',
    canonical: `${DEFAULT_DOMAIN}/founder`,
    ogTitle: 'Salah Eddine El Qaous | Founder @ PEXEK',
    ogDescription: 'Learn about the leadership and vision behind PEXEK enterprise AI voice deployment partner.',
    jsonLd: [
      pexekPersonSchema,
      createWebPageSchema(`${DEFAULT_DOMAIN}/founder`, 'Salah Eddine El Qaous | Founder @ PEXEK', 'Salah Eddine El Qaous is the Founder of PEXEK.', 'AboutPage', `${DEFAULT_DOMAIN}/founder#person`),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/founder`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Founder Profile', url: `${DEFAULT_DOMAIN}/founder` }
      ])
    ]
  },

  // 4. Contact Page
  '/contact': {
    title: 'Contact PEXEK | Discuss Your AI Voice Deployment',
    description: 'Get in touch with PEXEK enterprise voice engineering team. Schedule an architecture review or discuss your custom AI voice deployment requirements.',
    keywords: 'Contact PEXEK, AI Voice Consultation, Enterprise Support, Speak With AI Engineer',
    canonical: `${DEFAULT_DOMAIN}/contact`,
    ogTitle: 'Contact PEXEK | Enterprise AI Voice Infrastructure',
    ogDescription: 'Connect with our team to evaluate your call volume, integration stack, and custom voice AI deployment timeline.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/contact`, 'Contact PEXEK | Enterprise AI Voice Infrastructure', 'Get in touch with PEXEK enterprise voice engineering team.', 'ContactPage', `${DEFAULT_DOMAIN}/#organization`),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/contact`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Contact PEXEK', url: `${DEFAULT_DOMAIN}/contact` }
      ])
    ]
  },

  // 5. Blog Collection Page
  '/blog': {
    title: 'AI Voice Insights, Industry Trends & Deployment Guides | PEXEK',
    description: 'Read technical analysis, deployment strategies, and operational guides on enterprise AI voice automation and conversational AI.',
    keywords: 'AI Voice Blog, Conversational AI Insights, Call Automation Guide, Enterprise Voice AI Strategy',
    canonical: `${DEFAULT_DOMAIN}/blog`,
    ogTitle: 'PEXEK AI Voice Engineering Blog & Insights',
    ogDescription: 'In-depth articles and operational strategies for deploying enterprise voice AI systems in modern service businesses.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/blog`, 'AI Voice Insights, Industry Trends & Deployment Guides | PEXEK', 'Read technical analysis and deployment strategies on enterprise AI voice automation.', 'CollectionPage'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/blog`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'AI Voice Insights', url: `${DEFAULT_DOMAIN}/blog` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${DEFAULT_DOMAIN}/blog#collection`,
        name: 'PEXEK AI Voice Insights & Research Collection',
        description: 'Comprehensive research and tactical deployment guides on voice AI infrastructure.',
        url: `${DEFAULT_DOMAIN}/blog`,
        isPartOf: { '@id': `${DEFAULT_DOMAIN}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          name: 'AI Voice Insights Articles',
          numberOfItems: BLOG_POSTS.length,
          itemListElement: BLOG_POSTS.map((post, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: post.title,
            url: `${DEFAULT_DOMAIN}/blog/${post.slug || post.id}`
          }))
        }
      }
    ]
  },

  // 6. Industry Playbooks Collection Page
  '/industry-playbooks': {
    title: 'Industry AI Voice Playbooks | Dental, Healthcare, Legal, Real Estate | PEXEK',
    description: 'Tailored AI voice deployment playbooks engineered for Dental practices, Healthcare clinics, Legal firms, Real Estate agencies, and Home Services.',
    keywords: 'Dental AI Voice, Healthcare AI Receptionist, Legal AI Intake, Real Estate Voice AI, Home Services Call Automation',
    canonical: `${DEFAULT_DOMAIN}/industry-playbooks`,
    ogTitle: 'Industry AI Voice Playbooks | PEXEK Solutions',
    ogDescription: 'Discover domain-specific workflows, pre-configured call scripts, and compliance-aligned architectures for your specific industry.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/industry-playbooks`, 'Industry AI Voice Playbooks | PEXEK', 'Tailored AI voice deployment playbooks for service industries.', 'CollectionPage'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/industry-playbooks`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Industry Playbooks', url: `${DEFAULT_DOMAIN}/industry-playbooks` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${DEFAULT_DOMAIN}/industry-playbooks#collection`,
        name: 'PEXEK Industry AI Voice Deployment Playbooks',
        description: 'Domain-specific voice AI architectures engineered for specialized service sectors.',
        url: `${DEFAULT_DOMAIN}/industry-playbooks`,
        isPartOf: { '@id': `${DEFAULT_DOMAIN}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          name: 'Industry AI Voice Solutions',
          numberOfItems: INDUSTRIES.length,
          itemListElement: INDUSTRIES.map((ind, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: ind.name,
            description: ind.description,
            url: `${DEFAULT_DOMAIN}/industry-playbooks#${ind.id}`
          }))
        }
      }
    ]
  },

  // 7. Case Studies Collection Page
  '/case-studies': {
    title: 'Enterprise Deployment Case Studies & Success Stories | PEXEK',
    description: 'Explore real-world operational results: zero missed calls, faster lead response times, and increased appointment bookings across service organizations.',
    keywords: 'AI Voice Case Studies, Voice Automation Results, Enterprise AI Success Stories',
    canonical: `${DEFAULT_DOMAIN}/case-studies`,
    ogTitle: 'Enterprise AI Voice Case Studies | PEXEK Results',
    ogDescription: 'Real operational impact: How PEXEK AI voice deployments transform call answering and lead capture for high-volume businesses.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/case-studies`, 'Enterprise Deployment Case Studies | PEXEK', 'Explore real-world operational results and voice AI deployment metrics.', 'CollectionPage'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/case-studies`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Case Studies', url: `${DEFAULT_DOMAIN}/case-studies` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${DEFAULT_DOMAIN}/case-studies#collection`,
        name: 'PEXEK Enterprise AI Voice Deployment Case Studies',
        description: 'Verified deployment benchmarks and operational case studies across healthcare, real estate, and retail.',
        url: `${DEFAULT_DOMAIN}/case-studies`,
        isPartOf: { '@id': `${DEFAULT_DOMAIN}/#website` },
        mainEntity: {
          '@type': 'ItemList',
          name: 'Enterprise Deployment Case Studies',
          numberOfItems: CASE_STUDIES.length,
          itemListElement: CASE_STUDIES.map((cs, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: cs.title,
            description: cs.challenge,
            url: `${DEFAULT_DOMAIN}/case-studies#${cs.id}`
          }))
        }
      }
    ]
  },

  // 8. Core Service Page: Voice AI Agents
  '/voice-ai-agents': {
    title: 'Voice AI Agents & Custom AI Receptionists | PEXEK',
    description: 'Custom AI voice agents tailored to your business rules. Answer incoming calls, qualify prospects, schedule appointments, and update CRMs in real time.',
    keywords: 'Voice AI Agents, Custom AI Receptionist, Inbound AI Voice, Outbound AI Qualification, Conversational Voice AI',
    canonical: `${DEFAULT_DOMAIN}/voice-ai-agents`,
    ogTitle: 'Voice AI Agents & Custom AI Receptionists | PEXEK',
    ogDescription: 'Human-like voice quality, zero latency delay, and seamless CRM integrations built specifically for enterprise service workflows.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/voice-ai-agents`, 'Voice AI Agents & Custom AI Receptionists | PEXEK', 'Custom AI voice agents tailored to your business rules.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/voice-ai-agents`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Voice AI Agents', url: `${DEFAULT_DOMAIN}/voice-ai-agents` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/voice-ai-agents`, 'Voice AI Agents Service', 'Autonomous Voice AI', 'Custom conversational voice AI agents built for inbound call answering, qualification, and appointment scheduling.')
    ]
  },

  // 9. Core Service Page: 24/7 AI Receptionist
  '/ai-receptionist': {
    title: '24/7 Autonomous AI Receptionist Infrastructure | PEXEK',
    description: 'Deploy a 24/7 AI receptionist that answers every phone call on the first ring, handles inquiries, and books appointments with zero hold times.',
    keywords: 'AI Receptionist, 24/7 Phone Answering, Virtual AI Receptionist, Automated Phone Intake',
    canonical: `${DEFAULT_DOMAIN}/ai-receptionist`,
    ogTitle: '24/7 Autonomous AI Receptionist Infrastructure | PEXEK',
    ogDescription: 'Never miss a customer call again. PEXEK AI receptionist answers around the clock with human-grade speech synthesis.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/ai-receptionist`, '24/7 Autonomous AI Receptionist | PEXEK', 'Deploy a 24/7 AI receptionist that answers every phone call on the first ring.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/ai-receptionist`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: '24/7 AI Receptionist', url: `${DEFAULT_DOMAIN}/ai-receptionist` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/ai-receptionist`, '24/7 AI Receptionist Service', 'AI Phone Answering', '24/7 autonomous phone intake, caller inquiry resolution, and seamless calendar booking.')
    ]
  },

  // 10. Core Service Page: AI Lead Qualification
  '/lead-qualification-ai': {
    title: 'AI Lead Qualification & Speed to Lead Automation | PEXEK',
    description: 'Qualify inbound callers in under 60 seconds. Filter out spam, extract buyer intent, and instantly transfer high-ticket leads to your live sales team.',
    keywords: 'AI Lead Qualification, Speed to Lead Automation, Voice Lead Scoring, Automated Lead Screening',
    canonical: `${DEFAULT_DOMAIN}/lead-qualification-ai`,
    ogTitle: 'AI Lead Qualification & Speed to Lead Automation | PEXEK',
    ogDescription: 'Filter spam and qualify high-intent buyers in real time with conversational AI voice agents.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/lead-qualification-ai`, 'AI Lead Qualification & Speed to Lead | PEXEK', 'Qualify inbound callers in under 60 seconds with Voice AI.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/lead-qualification-ai`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'AI Lead Qualification', url: `${DEFAULT_DOMAIN}/lead-qualification-ai` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/lead-qualification-ai`, 'AI Lead Qualification Service', 'Lead Qualification', 'Automated inbound voice screening, intent scoring, and hot-lead live transfer.')
    ]
  },

  // 11. Core Service Page: AI Appointment Booking
  '/appointment-booking-ai': {
    title: 'Automated AI Appointment Booking & Scheduling | PEXEK',
    description: 'Direct calendar integration for voice calls. Lock in appointments, send instant SMS/WhatsApp confirmations, and eliminate scheduling back-and-forth.',
    keywords: 'AI Appointment Booking, Voice Scheduling AI, Calendar Automation, Automatic Appointment Dispatch',
    canonical: `${DEFAULT_DOMAIN}/appointment-booking-ai`,
    ogTitle: 'Automated AI Appointment Booking | PEXEK',
    ogDescription: 'Bi-directional calendar sync that converts inbound callers into locked calendar bookings automatically.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/appointment-booking-ai`, 'Automated AI Appointment Booking | PEXEK', 'Direct calendar integration for voice calls.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/appointment-booking-ai`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'AI Appointment Booking', url: `${DEFAULT_DOMAIN}/appointment-booking-ai` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/appointment-booking-ai`, 'AI Appointment Booking Service', 'Calendar Scheduling AI', 'Automated calendar booking and multi-channel confirmations during inbound calls.')
    ]
  },

  // 12. Core Service Page: AI Workflow Automation
  '/workflow-automation': {
    title: 'CRM Voice Workflow Automation & Webhooks | PEXEK',
    description: 'Automatically log call transcripts, extract key caller data fields, and sync call outcomes directly into your CRM and business software stack.',
    keywords: 'AI Workflow Automation, CRM Telephony Sync, HubSpot AI Voice Integration, Automated Call Data Logging',
    canonical: `${DEFAULT_DOMAIN}/workflow-automation`,
    ogTitle: 'CRM Voice Workflow Automation | PEXEK',
    ogDescription: 'Eliminate manual data entry. Log call recordings, transcripts, and qualification fields into your CRM instantly.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/workflow-automation`, 'CRM Voice Workflow Automation | PEXEK', 'Automatically log call transcripts and sync outcomes to CRM.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/workflow-automation`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'AI Workflow Automation', url: `${DEFAULT_DOMAIN}/workflow-automation` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/workflow-automation`, 'AI Workflow Automation Service', 'CRM Automation', 'Bi-directional CRM integration, call transcription, and automated post-call workflow dispatch.')
    ]
  },

  // 13. Core Service Page: AI Phone Answering Service
  '/ai-phone-answering-service': {
    title: '24/7 AI Phone Answering Service for Businesses | PEXEK',
    description: 'Replace costly call centers with PEXEK 24/7 AI phone answering service. Zero hold times, natural human speech, and automated appointment setting.',
    keywords: 'AI Phone Answering Service, 24/7 Answering Service, Automated Answering Service, Business Phone AI',
    canonical: `${DEFAULT_DOMAIN}/ai-phone-answering-service`,
    ogTitle: '24/7 AI Phone Answering Service | PEXEK',
    ogDescription: 'Answer every phone call on the first ring with an intelligent AI receptionist trained on your business procedures.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/ai-phone-answering-service`, '24/7 AI Phone Answering Service | PEXEK', 'Replace costly call centers with PEXEK 24/7 AI phone answering service.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/ai-phone-answering-service`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'AI Phone Answering Service', url: `${DEFAULT_DOMAIN}/ai-phone-answering-service` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/ai-phone-answering-service`, 'AI Phone Answering Service', '24/7 Answering Service', '24/7 automated business phone answering with instant CRM synchronization.')
    ]
  },

  // 14. Managed Deployment Page
  '/managed-deployment': {
    title: 'Managed AI Voice Implementation Services | PEXEK',
    description: 'PEXEK handles 100% of your AI voice deployment. Custom agent engineering, telephony setup, CRM webhooks, and ongoing live performance monitoring.',
    keywords: 'Managed Implementation, Done-For-You AI Voice, Enterprise Voice Setup, Managed Voice AI Services',
    canonical: `${DEFAULT_DOMAIN}/managed-deployment`,
    ogTitle: 'Managed AI Voice Implementation Services | PEXEK',
    ogDescription: 'End-to-end done-for-you voice AI engineering. We design, build, test, and manage your AI voice infrastructure.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/managed-deployment`, 'Managed AI Voice Implementation Services | PEXEK', 'PEXEK handles 100% of your AI voice deployment.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/managed-deployment`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Managed Deployment', url: `${DEFAULT_DOMAIN}/managed-deployment` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/managed-deployment`, 'Managed AI Voice Deployment', 'Managed Implementation', 'Full-service done-for-you AI voice architecture, telephony routing, and continuous prompt optimization.')
    ]
  },

  // 15. Deployment Framework Page
  '/deployment': {
    title: 'Managed AI Voice Deployment Process | PEXEK Framework',
    description: 'Explore PEXEK 4-stage managed deployment framework: Strategy & Architecture, Custom Voice Configuration, CRM Integration & Testing, Launch & Optimization.',
    keywords: 'Managed Deployment, AI Voice Implementation, Enterprise AI Architecture, AI Deployment Process',
    canonical: `${DEFAULT_DOMAIN}/deployment`,
    ogTitle: 'Managed AI Voice Deployment | PEXEK Framework',
    ogDescription: 'A fully managed 4-step deployment process to integrate enterprise AI voice agents into your business operations with zero technical friction.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/deployment`, 'Managed AI Voice Deployment Process | PEXEK', 'Explore PEXEK 4-stage managed deployment framework.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/deployment`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Deployment Process', url: `${DEFAULT_DOMAIN}/deployment` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/deployment`, 'AI Voice Deployment Framework', 'Deployment Engineering', 'Structured 4-stage technical onboarding for enterprise AI voice implementation.')
    ]
  },

  // 16. Integrations Page
  '/integrations': {
    title: 'Enterprise CRM & Telephony Integrations | PEXEK',
    description: 'Connect PEXEK AI voice agents directly with HubSpot, Salesforce, Google Calendar, Zapier, Twilio, Stripe, and custom REST API webhooks.',
    keywords: 'AI CRM Integration, HubSpot AI Voice, Salesforce Telephony, Twilio Voice AI, Calendar Scheduling AI',
    canonical: `${DEFAULT_DOMAIN}/integrations`,
    ogTitle: 'Enterprise CRM & Telephony Integrations | PEXEK',
    ogDescription: 'Seamless bi-directional data synchronization between your voice AI agents and existing business software stack.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/integrations`, 'Enterprise CRM & Telephony Integrations | PEXEK', 'Connect PEXEK AI voice agents directly with your software stack.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/integrations`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Integrations', url: `${DEFAULT_DOMAIN}/integrations` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/integrations`, 'Enterprise Integration Architecture', 'API Connectors', 'Bi-directional real-time data integration between AI voice agents and CRMs/Calendars.')
    ]
  },

  // 17. Security & Compliance Page
  '/security-compliance': {
    title: 'Enterprise Security, Compliance & Data Protection | PEXEK',
    description: 'Enterprise security for AI voice deployments. Encrypted communications, secure API webhooks, role-based access controls, and GDPR-aligned architecture.',
    keywords: 'Enterprise AI Security, AI Voice Data Protection, Secure AI Deployment, Business AI Privacy, GDPR-Aligned AI',
    canonical: `${DEFAULT_DOMAIN}/security-compliance`,
    ogTitle: 'Enterprise Security & Data Protection | PEXEK',
    ogDescription: 'Discover how PEXEK protects customer conversations, business data, and connected systems with enterprise-grade deployment practices.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/security-compliance`, 'Enterprise Security & Data Protection | PEXEK', 'Enterprise security for AI voice deployments.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/security-compliance`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Security & Compliance', url: `${DEFAULT_DOMAIN}/security-compliance` }
      ]),
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${DEFAULT_DOMAIN}/security-compliance#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is customer data encrypted?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Voice conversations and connected business data are protected using AES-256 bit encryption at rest and TLS 1.3 in transit.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can PEXEK integrate securely with our CRM?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Integrations use authenticated OAuth2 APIs and secure REST webhooks verified during testing.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do we own our customer data?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Customer business data remains under your organization control. PEXEK processes data only to execute your configured workflows.'
            }
          }
        ]
      }
    ]
  },

  // 18. Pricing Page
  '/pricing': {
    title: 'Enterprise AI Voice Deployment Pricing Models | PEXEK',
    description: 'Transparent deployment models designed for performance and scale. Managed setup, custom workflow configuration, and predictable operational costs.',
    keywords: 'AI Voice Pricing, Managed Deployment Cost, Enterprise AI Investment, Custom AI Voice Pricing',
    canonical: `${DEFAULT_DOMAIN}/pricing`,
    ogTitle: 'Enterprise AI Voice Deployment Pricing | PEXEK',
    ogDescription: 'Clear, outcome-focused pricing models for custom AI voice infrastructure and ongoing managed optimization.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/pricing`, 'Enterprise AI Voice Deployment Pricing | PEXEK', 'Transparent deployment models designed for performance and scale.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/pricing`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Pricing & Plans', url: `${DEFAULT_DOMAIN}/pricing` }
      ])
    ]
  },

  // 19. How It Works Page
  '/how-it-works': {
    title: 'How PEXEK AI Voice Infrastructure Works | 14-Day Go-Live Framework',
    description: 'Discover how PEXEK maps your phone call flows, trains your custom AI voice agent, integrates your CRM, and deploys 24/7 call answering in 14 days.',
    keywords: 'How AI Voice Works, AI Receptionist Architecture, 14-Day AI Deployment, PEXEK Framework',
    canonical: `${DEFAULT_DOMAIN}/how-it-works`,
    ogTitle: 'How PEXEK AI Voice Infrastructure Works | PEXEK',
    ogDescription: 'Understand the step-by-step engineering process behind zero-latency autonomous AI voice agents.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/how-it-works`, 'How PEXEK AI Voice Infrastructure Works | PEXEK', 'Discover how PEXEK maps your call flows and deploys 24/7 AI voice agents in 14 days.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/how-it-works`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'How It Works', url: `${DEFAULT_DOMAIN}/how-it-works` }
      ])
    ]
  },

  // 20. ROI Calculator Page
  '/roi-calculator': {
    title: 'Call Revenue Leakage & AI ROI Calculator | PEXEK',
    description: 'Calculate how much revenue your business loses to unanswered calls and after-hours lead leakage. Estimate your projected ROI with PEXEK AI voice agents.',
    keywords: 'Missed Call ROI Calculator, Call Leakage Calculator, AI Voice ROI, Revenue Recovery Calculator',
    canonical: `${DEFAULT_DOMAIN}/roi-calculator`,
    ogTitle: 'Call Revenue Leakage & AI ROI Calculator | PEXEK',
    ogDescription: 'Calculate lost revenue from missed calls and see instant return-on-investment estimates with PEXEK automated voice infrastructure.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/roi-calculator`, 'Call Revenue Leakage & AI ROI Calculator | PEXEK', 'Calculate how much revenue your business loses to unanswered calls.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/roi-calculator`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'ROI Calculator', url: `${DEFAULT_DOMAIN}/roi-calculator` }
      ])
    ]
  },

  // 21. Interactive Demo Page
  '/demo': {
    title: 'Interactive Voice AI Demo & Call Experience | PEXEK',
    description: 'Experience PEXEK voice AI capabilities. Listen to sample conversations, test interactive voice flows, and see real-time CRM data extraction.',
    keywords: 'AI Voice Demo, Interactive AI Call Sample, Test Voice AI, PEXEK Demo',
    canonical: `${DEFAULT_DOMAIN}/demo`,
    ogTitle: 'Interactive Voice AI Demo | PEXEK Experience',
    ogDescription: 'Test natural voice conversation, low latency response, and automated booking logic in our interactive demo sandbox.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/demo`, 'Interactive Voice AI Demo | PEXEK', 'Experience PEXEK voice AI capabilities in our interactive sandbox.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/demo`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Live Demo', url: `${DEFAULT_DOMAIN}/demo` }
      ])
    ]
  },

  // 22. Book Strategy Audit Page
  '/book-audit': {
    title: 'Book a Free Strategy Audit | PEXEK AI Voice Infrastructure',
    description: 'Schedule a 30-minute AI voice strategy audit with PEXEK engineers. We analyze your call flows, identify revenue leaks, and build a custom deployment roadmap.',
    keywords: 'AI Voice Audit, Strategy Session, Call Automation Audit, Book PEXEK Audit',
    canonical: `${DEFAULT_DOMAIN}/book-audit`,
    ogTitle: 'Book a Free AI Voice Strategy Audit | PEXEK',
    ogDescription: 'Schedule a 30-minute strategy audit to map your AI voice infrastructure and eliminate missed calls.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/book-audit`, 'Book a Free Strategy Audit | PEXEK', 'Schedule a 30-minute AI voice strategy audit with PEXEK engineers.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/book-audit`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Book Audit', url: `${DEFAULT_DOMAIN}/book-audit` }
      ])
    ]
  },

  // Industry-Specific Service Landing Pages
  '/ai-receptionist-dental': {
    title: 'Dental AI Receptionist & Patient Scheduling | PEXEK',
    description: 'Automate dental patient intake, hygiene recall reminders, and appointment scheduling 24/7. Reduce hygiene chair vacancies and no-shows.',
    keywords: 'Dental AI Receptionist, Dental Call Automation, Patient Recall AI, Dental Practice Scheduling',
    canonical: `${DEFAULT_DOMAIN}/ai-receptionist-dental`,
    ogTitle: 'Dental AI Receptionist & Patient Scheduling | PEXEK',
    ogDescription: 'Eliminate hygiene chair vacancies with 24/7 automated dental recall and interactive patient booking.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/ai-receptionist-dental`, 'Dental AI Receptionist | PEXEK', 'Automate dental patient intake and hygiene recall reminders.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/ai-receptionist-dental`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Industry Playbooks', url: `${DEFAULT_DOMAIN}/industry-playbooks` },
        { name: 'Dental AI Receptionist', url: `${DEFAULT_DOMAIN}/ai-receptionist-dental` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/ai-receptionist-dental`, 'Dental Practice AI Receptionist', 'Dental Voice AI', '24/7 automated dental patient intake, appointment scheduling, and hygiene recall confirmation.')
    ]
  },

  '/healthcare-ai-receptionist': {
    title: 'Healthcare & Clinic AI Receptionist Solutions | PEXEK',
    description: 'Answers patient triage inquiries 24/7, books medical appointments into clinic EHR systems, and sends interactive appointment reminders.',
    keywords: 'Healthcare AI Receptionist, Clinic AI Answering, Medical Scheduling AI, Patient Triage AI',
    canonical: `${DEFAULT_DOMAIN}/healthcare-ai-receptionist`,
    ogTitle: 'Healthcare & Clinic AI Receptionist Solutions | PEXEK',
    ogDescription: 'Never lose a patient to voicemail or long hold times. Deploy HIPAA-ready AI clinic answering.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/healthcare-ai-receptionist`, 'Healthcare AI Receptionist | PEXEK', 'Answers patient triage inquiries 24/7 and books clinic appointments.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/healthcare-ai-receptionist`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Industry Playbooks', url: `${DEFAULT_DOMAIN}/industry-playbooks` },
        { name: 'Healthcare AI Receptionist', url: `${DEFAULT_DOMAIN}/healthcare-ai-receptionist` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/healthcare-ai-receptionist`, 'Healthcare Clinic AI Receptionist', 'Healthcare Voice AI', 'HIPAA-ready automated patient intake, triage call handling, and clinic calendar booking.')
    ]
  },

  '/home-services-ai': {
    title: 'Home Services & Contractor AI Answering Service | PEXEK',
    description: 'Dispatch emergency HVAC, plumbing, and roofing technicians 24/7. Quote jobs and book service windows while techs are in the field.',
    keywords: 'Home Services AI Receptionist, HVAC AI Answering, Contractor Dispatch AI, Emergency Job Booking',
    canonical: `${DEFAULT_DOMAIN}/home-services-ai`,
    ogTitle: 'Home Services & Contractor AI Answering Service | PEXEK',
    ogDescription: 'Capture after-hours repair calls and dispatch technicians automatically with voice AI.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/home-services-ai`, 'Home Services AI Answering Service | PEXEK', 'Dispatch emergency HVAC, plumbing, and roofing technicians 24/7.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/home-services-ai`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Industry Playbooks', url: `${DEFAULT_DOMAIN}/industry-playbooks` },
        { name: 'Home Services AI', url: `${DEFAULT_DOMAIN}/home-services-ai` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/home-services-ai`, 'Home Services AI Dispatch & Answering', 'Home Services Voice AI', '24/7 emergency repair dispatch, automated job quoting, and technician scheduling.')
    ]
  },

  '/business-services-ai': {
    title: 'Business Services & B2B AI Voice Intake | PEXEK',
    description: 'Automate commercial inquiry intake, qualify prospective clients, and lock in sales discovery calls around the clock.',
    keywords: 'Business Services AI, B2B Voice Intake, Commercial Lead Qualification, Service Firm AI Answering',
    canonical: `${DEFAULT_DOMAIN}/business-services-ai`,
    ogTitle: 'Business Services & B2B AI Voice Intake | PEXEK',
    ogDescription: 'Filter unqualified calls and route hot sales prospects to your account team instantly.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/business-services-ai`, 'Business Services AI Voice Intake | PEXEK', 'Automate commercial inquiry intake and qualify prospective clients 24/7.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/business-services-ai`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Industry Playbooks', url: `${DEFAULT_DOMAIN}/industry-playbooks` },
        { name: 'Business Services AI', url: `${DEFAULT_DOMAIN}/business-services-ai` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/business-services-ai`, 'Business Services AI Voice Intake', 'B2B Voice AI', 'Commercial client qualification, automated scheduling, and CRM intake sync.')
    ]
  },

  '/ai-receptionist-real-estate': {
    title: 'Real Estate AI Receptionist & Showing Scheduler | PEXEK',
    description: 'Qualify home buyers and sellers in 8 seconds. Schedule property showings and live-transfer cash buyers directly to listing agents.',
    keywords: 'Real Estate AI Receptionist, Showing Scheduler AI, Buyer Qualification AI, Brokerage Voice AI',
    canonical: `${DEFAULT_DOMAIN}/ai-receptionist-real-estate`,
    ogTitle: 'Real Estate AI Receptionist & Showing Scheduler | PEXEK',
    ogDescription: 'Instant 8-second lead qualification and showing scheduling for real estate brokerages.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/ai-receptionist-real-estate`, 'Real Estate AI Receptionist | PEXEK', 'Qualify home buyers and sellers in 8 seconds.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/ai-receptionist-real-estate`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Industry Playbooks', url: `${DEFAULT_DOMAIN}/industry-playbooks` },
        { name: 'Real Estate AI Receptionist', url: `${DEFAULT_DOMAIN}/ai-receptionist-real-estate` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/ai-receptionist-real-estate`, 'Real Estate AI Receptionist', 'Real Estate Voice AI', '24/7 buyer pre-qualification, showing calendar scheduling, and agent live-transfer.')
    ]
  },

  '/legal-ai-intake': {
    title: 'Legal AI Voice Intake & Law Firm Receptionist | PEXEK',
    description: 'Perform 24/7 case qualification, conflict checking, and consultation scheduling for personal injury, family, and defense law practices.',
    keywords: 'Legal AI Intake, Law Firm AI Receptionist, Attorney Consultation Scheduler, Conflict Checking AI',
    canonical: `${DEFAULT_DOMAIN}/legal-ai-intake`,
    ogTitle: 'Legal AI Voice Intake & Law Firm Receptionist | PEXEK',
    ogDescription: 'Capture high-value legal intake calls 24/7 and book qualified consultations onto attorney calendars.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/legal-ai-intake`, 'Legal AI Voice Intake | PEXEK', 'Perform 24/7 case qualification and consultation scheduling for law firms.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/legal-ai-intake`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Industry Playbooks', url: `${DEFAULT_DOMAIN}/industry-playbooks` },
        { name: 'Legal AI Intake', url: `${DEFAULT_DOMAIN}/legal-ai-intake` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/legal-ai-intake`, 'Legal AI Voice Intake Service', 'Legal Voice AI', 'Automated legal case qualification, conflict pre-screening, and attorney consultation booking.')
    ]
  },

  '/ecommerce-ai-support': {
    title: 'E-commerce Voice AI Support & WISMO Order Tracking | PEXEK',
    description: 'Resolve "Where is my order?" (WISMO) queries in 15 seconds, dispatch instant checkout pay-links, and reduce seasonal support overhead by 60%.',
    keywords: 'E-commerce AI Voice, WISMO Voice Bot, Shopify Voice AI, Order Tracking AI',
    canonical: `${DEFAULT_DOMAIN}/ecommerce-ai-support`,
    ogTitle: 'E-commerce Voice AI Support & WISMO Tracking | PEXEK',
    ogDescription: 'Automate order tracking lookups and phone sales support with zero hold times.',
    jsonLd: [
      createWebPageSchema(`${DEFAULT_DOMAIN}/ecommerce-ai-support`, 'E-commerce Voice AI Support | PEXEK', 'Resolve order tracking queries in 15 seconds.'),
      createBreadcrumbSchema(`${DEFAULT_DOMAIN}/ecommerce-ai-support`, [
        { name: 'Home', url: `${DEFAULT_DOMAIN}/` },
        { name: 'Industry Playbooks', url: `${DEFAULT_DOMAIN}/industry-playbooks` },
        { name: 'E-commerce AI Support', url: `${DEFAULT_DOMAIN}/ecommerce-ai-support` }
      ]),
      createServiceSchema(`${DEFAULT_DOMAIN}/ecommerce-ai-support`, 'E-commerce Voice AI Support', 'E-commerce Voice AI', 'Automated WISMO order lookup, Shopify API integration, and phone checkout support.')
    ]
  }
};

/**
 * Helper to normalize route aliases to their canonical seoDataMap key
 */
export function getSeoConfigForPath(path: string): PageSeoConfig {
  const cleanPath = path || '/';

  // Explicit match in static map
  if (seoDataMap[cleanPath]) {
    return seoDataMap[cleanPath];
  }

  // Check programmatic SEO engine resolver
  const pSeoData = resolveProgrammaticPage(cleanPath);
  if (pSeoData) {
    const jsonLd = generateProgrammaticSchemaGraph(pSeoData);
    return {
      title: pSeoData.meta.title,
      description: pSeoData.meta.description,
      keywords: pSeoData.meta.keywords.join(', '),
      canonical: pSeoData.meta.canonicalUrl,
      ogTitle: pSeoData.meta.ogTitle,
      ogDescription: pSeoData.meta.ogDescription,
      ogType: 'website',
      jsonLd
    };
  }

  // Alias maps
  const aliasMap: Record<string, string> = {
    '/industries': '/industry-playbooks',
    '/deployment-blueprints': '/case-studies',
    '/deployment-process': '/deployment',
    '/security': '/security-compliance',
    '/conversation-intelligence': '/ai-receptionist',
    '/dental-ai-receptionist': '/ai-receptionist-dental',
    '/real-estate-ai': '/ai-receptionist-real-estate',
    '/real-estate-ai-receptionist': '/ai-receptionist-real-estate',
    '/legal-ai-receptionist': '/legal-ai-intake',
    '/ecommerce-ai-receptionist': '/ecommerce-ai-support'
  };

  if (aliasMap[cleanPath] && seoDataMap[aliasMap[cleanPath]]) {
    const canonicalConfig = seoDataMap[aliasMap[cleanPath]];
    return {
      ...canonicalConfig,
      canonical: `${DEFAULT_DOMAIN}${cleanPath}`
    };
  }

  // Fallback to home
  return seoDataMap['/'];
}
