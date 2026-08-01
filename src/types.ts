export type PagePath = 
  | '/' 
  | '/ai-receptionist'
  | '/lead-qualification-ai'
  | '/appointment-booking-ai'
  | '/workflow-automation'
  | '/conversation-intelligence'
  | '/dental-ai-receptionist'
  | '/healthcare-ai-receptionist'
  | '/home-services-ai'
  | '/business-services-ai'
  | '/real-estate-ai'
  | '/real-estate-ai-receptionist'
  | '/legal-ai-intake'
  | '/legal-ai-receptionist'
  | '/ecommerce-ai-support'
  | '/ecommerce-ai-receptionist'
  | '/how-it-works'
  | '/deployment'
  | '/deployment-process'
  | '/managed-deployment'
  | '/deployment-blueprints'
  | '/integrations'
  | '/security'
  | '/security-compliance'
  | '/pricing'
  | '/blog'
  | '/roi-calculator'
  | '/demo'
  | '/about'
  | '/founder'
  | '/contact'
  | '/book-audit'
  | '/industry-playbooks'
  | '/industries'
  | '/case-studies'
  | '/ai-phone-answering-service'
  | '/ai-receptionist-dental'
  | '/ai-receptionist-real-estate'
  | '/voice-ai-agents';

export interface IndustryPlaybook {
  id: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  iconName: string;
  stat: string;
  statLabel: string;
  description: string;
  capabilities: string[];
  useCases: {
    title: string;
    description: string;
    outcome: string;
  }[];
  sampleCallTranscript: {
    speaker: 'Caller' | 'PEXEK AI';
    text: string;
    timestamp: string;
  }[];
}

export interface Pillar {
  id: string;
  name: string;
  trademark: string;
  subtitle?: string;
  shortDesc: string;
  fullDesc: string;
  benefits?: string[];
  features: string[];
  metricType?: string;
  metrics: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  location: string;
  industry: string;
  title: string;
  challenge: string;
  systemDeployed: string;
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  quote: string;
  author: string;
  role: string;
  timeframe: string;
  numberBadge?: string;
  verticalName?: string;
  typeBadge?: string;
  architectureHeading?: string;
  projectionBullets?: string[];
  sources?: string[];
}

export interface BlogArticleSection {
  h2?: string;
  h3?: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  blockquote?: { text: string; source: string; url?: string };
  calloutStat?: { value: string; label: string };
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'AI Receptionists' | 'Missed Call Revenue' | 'Industry Solutions' | string;
  readTime: string;
  date: string;
  excerpt: string;
  author: string;
  metaDescription: string;
  focusKeyword: string;
  sources?: string[];
  relatedPostIds?: string[];
  contextualCTA?: {
    heading: string;
    subheading?: string;
    buttonText: string;
  };
  externalLinks?: { text: string; url: string }[];
  content?: string[];
  sections?: BlogArticleSection[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Pricing' | 'Deployment' | 'Technology' | 'Security';
}

export interface AuditFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  monthlyCalls: string;
  biggestChallenge: string;
  preferredDate?: string;
  preferredTime?: string;
}
