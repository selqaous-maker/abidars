import { PagePath } from '../types';

export const SITE_CONFIG = {
  name: 'PEXEK',
  fullName: 'PEXEK Enterprise AI Voice',
  tagline: 'Enterprise AI Voice Infrastructure & Managed AI Voice Deployment',
  description: 'PEXEK deploys enterprise AI voice agents for service businesses. Answer calls 24/7, qualify leads, and automate CRM workflows with custom AI voice infrastructure.',
  domain: 'https://pexek.com',
  loginUrl: 'https://app.pexek.com/login',
  contactEmail: 'contact@pexek.com',
  author: 'Salah Eddine El Qaous, PEXEK',
  themeColor: '#050507',
  accentColor: '#00d4ff',
} as const;

export interface NavItem {
  label: string;
  path: PagePath;
  desc?: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  directPath: PagePath;
  items?: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    title: 'SOLUTIONS',
    directPath: '/voice-ai-agents',
    items: [
      { label: 'Voice AI Agents', path: '/voice-ai-agents', desc: 'Custom inbound & outbound voice AI infrastructure' },
      { label: 'AI Receptionist', path: '/ai-receptionist', desc: '24/7 automated call answering & instant dispatch' },
      { label: 'AI Lead Qualification', path: '/lead-qualification-ai', desc: 'Filter, qualify, & pass warm transfer calls' },
      { label: 'AI Appointment Booking', path: '/appointment-booking-ai', desc: '2-way live calendar sync & confirmation' },
      { label: 'AI Workflow Automation', path: '/workflow-automation', desc: 'Connect calls to CRM, EHR, & ERP tools' },
      { label: 'AI Phone Answering', path: '/ai-phone-answering-service', desc: 'Zero missed calls with instant human-like response' },
    ],
  },
  {
    title: 'INDUSTRIES',
    directPath: '/industries',
    items: [
      { label: 'Dental Practices', path: '/ai-receptionist-dental', desc: 'Patient intake, emergency triaging, appointments' },
      { label: 'Real Estate', path: '/ai-receptionist-real-estate', desc: 'Buyer/seller qualification & tour scheduling' },
      { label: 'Healthcare & Medical', path: '/healthcare-ai-receptionist', desc: 'HIPAA-compliant patient communication' },
      { label: 'Business & Professional', path: '/business-services-ai', desc: 'B2B inbound handling & executive dispatch' },
      { label: 'Legal & Law Firms', path: '/legal-ai-receptionist', desc: 'Confidential case intake & initial evaluation' },
      { label: 'E-Commerce & Retail', path: '/ecommerce-ai-receptionist', desc: 'Order tracking & VIP customer assistance' },
      { label: 'Home Services & Contractors', path: '/home-services-ai', desc: 'Emergency dispatch & service job booking' },
      { label: 'Industry Playbooks', path: '/industry-playbooks', desc: 'Comprehensive architectural blueprints by sector' },
    ],
  },
  {
    title: 'HOW IT WORKS',
    directPath: '/how-it-works',
    items: [
      { label: 'Deployment Process', path: '/how-it-works', desc: '4-step enterprise voice AI implementation' },
      { label: 'Managed Deployment', path: '/managed-deployment', desc: 'White-glove engineering & continuous tuning' },
      { label: 'Platform Integrations', path: '/integrations', desc: 'Native connections to 50+ business platforms' },
      { label: 'Security & Compliance', path: '/security-compliance', desc: 'SOC2, HIPAA, & enterprise voice encryption' },
    ],
  },
  {
    title: 'PRICING',
    directPath: '/pricing',
  },
  {
    title: 'RESOURCES',
    directPath: '/blog',
    items: [
      { label: 'Knowledge Hub & Insights', path: '/blog', desc: 'Research papers, playbooks, & ROI case studies' },
      { label: 'Client Case Studies', path: '/case-studies', desc: 'Proven results and metrics from live deployments' },
      { label: 'Interactive Live Demo', path: '/demo', desc: 'Test voice agent execution in real-time' },
      { label: 'About PEXEK', path: '/about', desc: 'Our mission & voice engineering standards' },
      { label: 'Leadership', path: '/founder', desc: 'Founder & executive team insights' },
      { label: 'Contact Us', path: '/contact', desc: 'Reach out to our voice engineering team' },
    ],
  },
];
