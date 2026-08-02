import { PagePath } from '../types';

export type PSEOTemplateType = 
  | 'industry'
  | 'location'
  | 'industry_location'
  | 'state'
  | 'industry_state'
  | 'integration'
  | 'use_case'
  | 'comparison';

export interface PSEOIndustry {
  slug: string;
  name: string;
  pluralName: string;
  category: string;
  tagline: string;
  heroHeadline: string;
  avgMonthlyMissedCalls: number;
  avgCallValue: number;
  topPainPoints: string[];
  capabilities: string[];
  primaryCrm: string;
  secondaryCrms: string[];
  transcriptSample: {
    callerRole: string;
    dialogue: { speaker: 'Caller' | 'PEXEK AI'; text: string; timestamp: string }[];
  };
  faqs: { question: string; answer: string }[];
}

export interface PSEOLocation {
  slug: string;
  city: string;
  state: string;
  stateAbbr: string;
  country: string;
  region: string;
  metroArea: string;
  businessDensity: string;
  primaryTimezone: string;
  areaCodes: string[];
  economicFocus?: string;
  localLandmark?: string;
  stateCompliance?: string;
}

export interface PSEOState {
  slug: string;
  name: string;
  stateAbbr: string;
  region: string;
  capital: string;
  majorMetros: string[];
  areaCodes: string[];
  economicFocus: string;
  stateCompliance: string;
  localLandmark: string;
  businessDensity: string;
  primaryTimezone: string;
}

export interface PSEOIntegration {
  slug: string;
  name: string;
  category: 'CRM' | 'EHR' | 'Field Service' | 'Legal' | 'Calendar' | 'Telephony';
  logoText: string;
  syncType: string;
  syncLatency: string;
  description: string;
  supportedFeatures: string[];
}

export interface PSEOService {
  slug: string;
  name: string;
  tagline: string;
  heroHeadline: string;
  valueProp: string;
  metrics: { label: string; value: string; detail: string }[];
  keyFeatures: string[];
}

export interface PSEOBreadcrumb {
  name: string;
  url: string;
}

export interface ProgrammaticPageData {
  id: string;
  slug: string;
  urlPath: string;
  templateType: PSEOTemplateType;
  meta: {
    title: string;
    description: string;
    keywords: string[];
    canonicalUrl: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
  };
  breadcrumbs: PSEOBreadcrumb[];
  hero: {
    badgeText: string;
    h1: string;
    subheadline: string;
    metricsPill: string;
  };
  industry?: PSEOIndustry;
  location?: PSEOLocation;
  state?: PSEOState;
  integration?: PSEOIntegration;
  service?: PSEOService;
  stats: {
    latency: string;
    answerRate: string;
    monthlySavings: string;
    setupTime: string;
  };
  capabilities: {
    title: string;
    description: string;
    iconName: string;
  }[];
  transcriptDialogue: {
    speaker: 'Caller' | 'PEXEK AI';
    text: string;
    timestamp: string;
  }[];
  integrationsList: string[];
  faqs: { question: string; answer: string }[];
  internalLinks: {
    title: string;
    path: string;
    description: string;
    category: 'service' | 'industry' | 'location' | 'state' | 'integration' | 'core';
  }[];
  jsonLd: any[];
}
