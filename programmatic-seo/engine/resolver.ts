import { ProgrammaticPageData, PSEOTemplateType, PSEOIndustry, PSEOLocation, PSEOState, PSEOIntegration, PSEOService } from '../types';
import { PSEO_INDUSTRIES, PSEO_LOCATIONS, PSEO_INTEGRATIONS, PSEO_SERVICES } from '../data/datasets';
import { PSEO_STATES } from '../data/states';
import { SITE_CONFIG } from '../../config/siteConfig';
import { generateProgrammaticSchemaGraph } from './seoSchemaGenerator';

/**
 * Normalizes URL path string into clean slug format
 */
export function sanitizeSlug(input: string): string {
  return input.toLowerCase().trim().replace(/^\/+|\/+$/g, '');
}

/**
 * Helper to locate state by slug, name, or postal abbreviation
 */
export function findStateBySlugOrName(rawSlug: string): PSEOState | undefined {
  if (!rawSlug) return undefined;
  const norm = rawSlug.toLowerCase().trim();

  // 1. Exact slug match (e.g. 'california', 'texas', 'new-york')
  const exact = PSEO_STATES.find(s => s.slug === norm);
  if (exact) return exact;

  // 2. State postal abbreviation match (e.g. 'ca', 'tx', 'ny')
  const abbrMatch = PSEO_STATES.find(s => s.stateAbbr.toLowerCase() === norm);
  if (abbrMatch) return abbrMatch;

  // 3. Name match with hyphens removed
  return PSEO_STATES.find(s => {
    const sSlug = s.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return sSlug === norm || norm.includes(sSlug) || sSlug.includes(norm);
  });
}

/**
 * Helper to locate location by slug, city name, or state suffix
 */
export function findLocationBySlugOrCity(rawSlug: string): PSEOLocation | undefined {
  if (!rawSlug) return undefined;
  const norm = rawSlug.toLowerCase().trim();

  // 1. Exact slug match (e.g., 'new-york-ny')
  const exact = PSEO_LOCATIONS.find(l => l.slug === norm);
  if (exact) return exact;

  // 2. City name match (e.g. 'new-york' -> 'new-york-ny')
  const cityMatch = PSEO_LOCATIONS.find(l => {
    const cSlug = l.city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return cSlug === norm || norm === `${cSlug}-${l.stateAbbr.toLowerCase()}`;
  });
  if (cityMatch) return cityMatch;

  // 3. Partial or prefix match
  return PSEO_LOCATIONS.find(l => l.slug.startsWith(norm) || norm.startsWith(l.slug));
}

/**
 * Helper to locate industry by slug or keyword
 */
export function findIndustryBySlug(rawSlug: string): PSEOIndustry | undefined {
  if (!rawSlug) return undefined;
  const norm = rawSlug.toLowerCase().trim();

  const exact = PSEO_INDUSTRIES.find(i => i.slug === norm);
  if (exact) return exact;

  return PSEO_INDUSTRIES.find(i => norm.includes(i.slug) || i.slug.includes(norm));
}

/**
 * Parses any incoming path to check if it matches a programmatic SEO URL pattern.
 */
export function parseProgrammaticPath(rawPath: string): {
  isMatch: boolean;
  templateType?: PSEOTemplateType;
  industrySlug?: string;
  locationSlug?: string;
  stateSlug?: string;
  integrationSlug?: string;
  serviceSlug?: string;
} {
  const cleanPath = sanitizeSlug(rawPath);

  // Pattern 1a: /{industry}-ai-receptionist-{state_or_city} or /{industry}-ai-{state_or_city}
  const indAiStateOrCityMatch = cleanPath.match(/^([a-z0-9-]+)-ai-(?:receptionist-)?([a-z0-9-]+)$/i);
  if (indAiStateOrCityMatch) {
    const indPart = indAiStateOrCityMatch[1];
    const targetPart = indAiStateOrCityMatch[2];
    const ind = findIndustryBySlug(indPart);
    
    if (ind) {
      const state = findStateBySlugOrName(targetPart);
      if (state) {
        return {
          isMatch: true,
          templateType: 'industry_state',
          industrySlug: ind.slug,
          stateSlug: state.slug,
          serviceSlug: 'ai-receptionist'
        };
      }
      const loc = findLocationBySlugOrCity(targetPart);
      if (loc) {
        return {
          isMatch: true,
          templateType: 'industry_location',
          industrySlug: ind.slug,
          locationSlug: loc.slug,
          serviceSlug: 'ai-receptionist'
        };
      }
    }
  }

  // Pattern 1b: /{industry}-ai-receptionist-{city} (e.g. /dental-ai-receptionist-new-york-ny or /real-estate-ai-receptionist-miami-fl)
  const indAiRecCityMatch = cleanPath.match(/^([a-z0-9-]+)-ai-receptionist-([a-z0-9-]+)$/i);
  if (indAiRecCityMatch) {
    const indPart = indAiRecCityMatch[1];
    const locPart = indAiRecCityMatch[2];
    const ind = findIndustryBySlug(indPart);
    const loc = findLocationBySlugOrCity(locPart);
    if (ind && loc) {
      return {
        isMatch: true,
        templateType: 'industry_location',
        industrySlug: ind.slug,
        locationSlug: loc.slug,
        serviceSlug: 'ai-receptionist'
      };
    }
  }

  // Pattern 2: /ai-receptionist-[industry]-in-[location_or_state] or /voice-ai-[industry]-[location_or_state]
  const indLocMatch = cleanPath.match(/^(?:ai-receptionist|voice-ai|ai-voice-agent)-(?:for-)?([a-z0-9-]+)-in-([a-z0-9-]+)$/i);
  if (indLocMatch) {
    const ind = findIndustryBySlug(indLocMatch[1]);
    const targetPart = indLocMatch[2];
    if (ind) {
      const state = findStateBySlugOrName(targetPart);
      if (state) {
        return {
          isMatch: true,
          templateType: 'industry_state',
          industrySlug: ind.slug,
          stateSlug: state.slug,
          serviceSlug: 'ai-receptionist'
        };
      }
      const loc = findLocationBySlugOrCity(targetPart);
      if (loc) {
        return {
          isMatch: true,
          templateType: 'industry_location',
          industrySlug: ind.slug,
          locationSlug: loc.slug,
          serviceSlug: 'ai-receptionist'
        };
      }
    }
  }

  // Pattern 3: /ai-receptionist-{state_or_city_or_industry} or /voice-ai-{state}
  const aiRecMatch = cleanPath.match(/^(?:ai-receptionist|voice-ai|ai-voice)-([a-z0-9-]+)$/i);
  if (aiRecMatch) {
    const subSlug = aiRecMatch[1];
    const state = findStateBySlugOrName(subSlug);
    if (state) {
      return {
        isMatch: true,
        templateType: 'state',
        stateSlug: state.slug,
        serviceSlug: 'ai-receptionist'
      };
    }
    const loc = findLocationBySlugOrCity(subSlug);
    if (loc) {
      return {
        isMatch: true,
        templateType: 'location',
        locationSlug: loc.slug,
        serviceSlug: 'ai-receptionist'
      };
    }
    const ind = findIndustryBySlug(subSlug);
    if (ind) {
      return {
        isMatch: true,
        templateType: 'industry',
        industrySlug: ind.slug,
        serviceSlug: 'ai-receptionist'
      };
    }
  }

  // Pattern 4: /voice-ai-agents-{city_or_state} or /voice-ai-agent-in-{city_or_state} or /ai-voice-agent-in-{city_or_state}
  const voiceAiAgentsCityMatch = cleanPath.match(/^(?:voice-ai-agents|voice-ai-agent-in|ai-voice-agent-in)-([a-z0-9-]+)$/i);
  if (voiceAiAgentsCityMatch) {
    const target = voiceAiAgentsCityMatch[1];
    const state = findStateBySlugOrName(target);
    if (state) {
      return {
        isMatch: true,
        templateType: 'state',
        stateSlug: state.slug,
        serviceSlug: 'voice-ai-agents'
      };
    }
    const loc = findLocationBySlugOrCity(target);
    if (loc) {
      return {
        isMatch: true,
        templateType: 'location',
        locationSlug: loc.slug,
        serviceSlug: 'voice-ai-agents'
      };
    }
  }

  // Pattern 5: /voice-ai-agent-for-[industry] or /ai-receptionist-for-[industry]
  const indMatch = cleanPath.match(/^(?:voice-ai-agent-for|ai-receptionist-for|voice-ai)-([a-z0-9-]+)$/i);
  if (indMatch) {
    const ind = findIndustryBySlug(indMatch[1]);
    if (ind) {
      return {
        isMatch: true,
        templateType: 'industry',
        industrySlug: ind.slug,
        serviceSlug: 'ai-receptionist'
      };
    }
  }

  // Pattern 6: /[integration]-integration
  const intMatch = cleanPath.match(/^(?:ai-receptionist-|voice-ai-)?([a-z0-9-]+)-integration$/i);
  if (intMatch) {
    const matchedInt = PSEO_INTEGRATIONS.find(i => i.slug === intMatch[1]);
    if (matchedInt) {
      return {
        isMatch: true,
        templateType: 'integration',
        integrationSlug: matchedInt.slug,
        serviceSlug: 'workflow-automation'
      };
    }
  }

  // Pattern 7: /pseo/:slug
  if (cleanPath.startsWith('pseo/')) {
    const sub = cleanPath.replace('pseo/', '');
    const ind = findIndustryBySlug(sub);
    const loc = findLocationBySlugOrCity(sub);
    const int = PSEO_INTEGRATIONS.find(i => i.slug === sub);

    if (ind && loc) {
      return { isMatch: true, templateType: 'industry_location', industrySlug: ind.slug, locationSlug: loc.slug, serviceSlug: 'ai-receptionist' };
    }
    if (ind) {
      return { isMatch: true, templateType: 'industry', industrySlug: ind.slug, serviceSlug: 'ai-receptionist' };
    }
    if (loc) {
      return { isMatch: true, templateType: 'location', locationSlug: loc.slug, serviceSlug: 'voice-ai-agent' };
    }
    if (int) {
      return { isMatch: true, templateType: 'integration', integrationSlug: int.slug, serviceSlug: 'workflow-automation' };
    }
  }

  return { isMatch: false };
}

/**
 * Resolves full structured ProgrammaticPageData for rendering
 */
export function resolveProgrammaticPage(rawPath: string): ProgrammaticPageData | null {
  const parsed = parseProgrammaticPath(rawPath);
  if (!parsed.isMatch) {
    return null;
  }

  const cleanPath = sanitizeSlug(rawPath);
  const canonicalUrl = `${SITE_CONFIG.domain}/${cleanPath}`;

  const industry = parsed.industrySlug ? PSEO_INDUSTRIES.find(i => i.slug === parsed.industrySlug) : undefined;
  const location = parsed.locationSlug ? PSEO_LOCATIONS.find(l => l.slug === parsed.locationSlug) : undefined;
  const state = parsed.stateSlug ? PSEO_STATES.find(s => s.slug === parsed.stateSlug) : undefined;
  const integration = parsed.integrationSlug ? PSEO_INTEGRATIONS.find(i => i.slug === parsed.integrationSlug) : undefined;
  const service = PSEO_SERVICES[parsed.serviceSlug || 'ai-receptionist'] || PSEO_SERVICES['ai-receptionist'];

  const defaultIndustry = PSEO_INDUSTRIES[0];
  const activeInd = industry || defaultIndustry;

  let title = '';
  let description = '';
  let keywords: string[] = [];
  let h1 = '';
  let subheadline = '';
  let badgeText = '';

  if (parsed.templateType === 'industry_state' && industry && state) {
    badgeText = `${state.name} (${state.stateAbbr}) • ${industry.name} AI Solution`;
    h1 = `24/7 AI Receptionist & Voice AI Answering for ${industry.pluralName} in ${state.name}`;
    subheadline = `Eliminate missed calls, automate ${industry.name.toLowerCase()} intake, and schedule calendar appointments 24/7 across ${state.name} area codes (${state.areaCodes.join(', ')}). Serving ${state.majorMetros.slice(0, 3).join(', ')}.`;
    title = `24/7 AI Receptionist for ${industry.pluralName} in ${state.name} | PEXEK`;
    description = `Deploy a sub-450ms Voice AI Receptionist for your ${industry.name} practice in ${state.name}. 100% call answer rate, native ${industry.primaryCrm} sync, and ${state.stateCompliance}.`;
    keywords = [
      `AI Receptionist ${state.name}`,
      `${industry.name} AI Answering ${state.name}`,
      `${industry.name} Phone AI ${state.stateAbbr}`,
      `Virtual Receptionist ${state.name}`,
      `${industry.primaryCrm} Voice AI ${state.stateAbbr}`
    ];
  } else if (parsed.templateType === 'state' && state) {
    badgeText = `${state.name} (${state.stateAbbr}) • State-Wide Telephony Network`;
    h1 = `24/7 AI Virtual Receptionist & Autonomous Phone Answering in ${state.name}`;
    title = `24/7 AI Virtual Receptionist in ${state.name} | PEXEK`;
    subheadline = `Transform front desk operations for ${state.name} businesses. Sub-450ms speech turnaround, 100% call answer rate across local area codes (${state.areaCodes.join(', ')}), and zero staff overhead in ${state.capital} and ${state.majorMetros.join(', ')}.`;
    description = `Deploy a 24/7 AI Virtual Receptionist for your ${state.name} business. Never miss an inbound call across local ${state.stateAbbr} area codes. Includes bi-directional CRM calendar booking and ${state.stateCompliance}.`;
    keywords = [
      `AI Receptionist ${state.name}`,
      `Voice AI Agent ${state.name}`,
      `Virtual Receptionist ${state.stateAbbr}`,
      `Phone Answering Service ${state.name}`,
      `AI Phone Agent ${state.capital} ${state.stateAbbr}`
    ];
  } else if (parsed.templateType === 'industry_location' && industry && location) {
    badgeText = `${location.city}, ${location.stateAbbr} • ${industry.name} AI Solution`;
    h1 = `24/7 AI Receptionist for ${industry.pluralName} in ${location.city}, ${location.stateAbbr}`;
    subheadline = `Eliminate missed phone calls, automate ${industry.name.toLowerCase()} intake, and book direct calendar appointments 24/7 across ${location.city} area codes (${location.areaCodes.join(', ')}).`;
    title = `24/7 AI Receptionist for ${industry.pluralName} in ${location.city}, ${location.stateAbbr} | PEXEK`;
    description = `Deploy a sub-450ms Voice AI Receptionist for your ${industry.name} practice in ${location.city}, ${location.stateAbbr} (${location.metroArea}). 100% call answer rate, native ${industry.primaryCrm} sync, and ${location.stateCompliance || 'full compliance'}.`;
    keywords = [
      `AI Receptionist ${location.city}`,
      `${industry.name} AI Answering ${location.city}`,
      `${industry.name} Phone AI ${location.stateAbbr}`,
      `Virtual Receptionist ${location.city} ${location.stateAbbr}`,
      `${industry.primaryCrm} Voice AI Integration`
    ];
  } else if (parsed.templateType === 'industry' && industry) {
    badgeText = `Enterprise ${industry.name} Voice AI Infrastructure`;
    h1 = `24/7 AI Receptionist & Phone Answering for ${industry.pluralName}`;
    subheadline = `${industry.tagline}. Capture 100% of high-intent inbound phone calls, automate intake, and sync bi-directionally with ${industry.primaryCrm}.`;
    title = `24/7 AI Receptionist & Voice AI for ${industry.pluralName} | PEXEK`;
    description = `Eliminate missed revenue at your ${industry.name}. PEXEK answers inbound phone calls in sub-450ms, qualifies intent, and schedules appointments in ${industry.primaryCrm}.`;
    keywords = [
      `${industry.name} AI Receptionist`,
      `Voice AI for ${industry.pluralName}`,
      `Phone Answering ${industry.name}`,
      `${industry.primaryCrm} Phone Integration`,
      `Automated ${industry.name} Intake`
    ];
  } else if (parsed.templateType === 'location' && location) {
    const isVoiceAgentsTemplate = cleanPath.includes('voice-ai-agents');
    badgeText = `${location.city}, ${location.stateAbbr} • Regional Telephony Node`;
    
    if (isVoiceAgentsTemplate) {
      h1 = `24/7 Autonomous Voice AI Agents in ${location.city}, ${location.stateAbbr}`;
      title = `24/7 Autonomous Voice AI Agents in ${location.city}, ${location.stateAbbr} | PEXEK`;
      subheadline = `Enterprise-grade Voice AI infrastructure serving businesses in ${location.city} and across the ${location.metroArea}. Sub-450ms speech response across local ${location.areaCodes.join(', ')} area codes.`;
      description = `Deploy autonomous Voice AI Agents for ${location.city}, ${location.stateAbbr} businesses. Answers local calls 24/7 in sub-450ms with zero hold times, ${location.economicFocus || 'multi-industry support'}, and ${location.stateCompliance || 'enterprise security'}.`;
    } else {
      h1 = `24/7 AI Virtual Receptionist & Autonomous Phone Answering in ${location.city}, ${location.stateAbbr}`;
      title = `24/7 AI Virtual Receptionist in ${location.city}, ${location.stateAbbr} | PEXEK`;
      subheadline = `Transform front desk operations for ${location.city} businesses. Sub-450ms speech turnaround, 100% answer rate, and zero staff overhead in ${location.metroArea}.`;
      description = `Deploy a 24/7 AI Virtual Receptionist for your ${location.city}, ${location.stateAbbr} business. Never miss an inbound call across local area codes (${location.areaCodes.join(', ')}). Includes bi-directional CRM calendar booking.`;
    }
    
    keywords = [
      `AI Receptionist ${location.city}`,
      `AI Voice Agent ${location.city} ${location.stateAbbr}`,
      `24/7 Virtual Receptionist ${location.city}`,
      `Phone Answering Service ${location.metroArea}`,
      `Voice AI Infrastructure ${location.stateAbbr}`
    ];
  } else if (parsed.templateType === 'integration' && integration) {
    badgeText = `Native ${integration.name} Integration Engine`;
    h1 = `Voice AI & 24/7 Phone Receptionist Integrated with ${integration.name}`;
    subheadline = `Connect PEXEK Voice AI directly to ${integration.name}. ${integration.description} Sync speed: ${integration.syncLatency}.`;
    title = `Voice AI & Phone Receptionist for ${integration.name} Integration | PEXEK`;
    description = `Automate phone call logging, lead creation, and appointment scheduling in ${integration.name}. ${integration.syncType} integration with sub-second sync latency.`;
    keywords = [
      `${integration.name} Voice AI`,
      `${integration.name} Phone Integration`,
      `AI Receptionist ${integration.name}`,
      `Automated Call Logging ${integration.name}`
    ];
  } else {
    badgeText = 'Voice AI Infrastructure';
    h1 = `${service.name} for ${activeInd.pluralName}`;
    subheadline = service.valueProp;
    title = `${service.name} | PEXEK Voice AI`;
    description = service.valueProp;
    keywords = ['Voice AI', 'AI Receptionist', 'Automated Phone Answering'];
  }

  // Breadcrumbs
  const breadcrumbs = [
    { name: 'Home', url: `${SITE_CONFIG.domain}/` },
    { name: 'Solutions', url: `${SITE_CONFIG.domain}/voice-ai-agents` }
  ];

  if (industry && state) {
    breadcrumbs.push({ name: `${industry.name}`, url: `${SITE_CONFIG.domain}/voice-ai-agent-for-${industry.slug}` });
    breadcrumbs.push({ name: `${state.name}`, url: `${SITE_CONFIG.domain}/ai-receptionist-${state.slug}` });
  } else if (state) {
    breadcrumbs.push({ name: `${state.name}`, url: `${SITE_CONFIG.domain}/ai-receptionist-${state.slug}` });
  } else if (industry && location) {
    breadcrumbs.push({ name: `${industry.name}`, url: `${SITE_CONFIG.domain}/voice-ai-agent-for-${industry.slug}` });
    breadcrumbs.push({ name: `${location.city}, ${location.stateAbbr}`, url: `${SITE_CONFIG.domain}/ai-receptionist-${location.slug}` });
  } else if (industry) {
    breadcrumbs.push({ name: industry.name, url: `${SITE_CONFIG.domain}/voice-ai-agent-for-${industry.slug}` });
  } else if (location) {
    breadcrumbs.push({ name: `${location.city}, ${location.stateAbbr}`, url: `${SITE_CONFIG.domain}/ai-receptionist-${location.slug}` });
  } else if (integration) {
    breadcrumbs.push({ name: `${integration.name} Integration`, url: `${SITE_CONFIG.domain}/${integration.slug}-integration` });
  }

  // Dynamic FAQs tailored to location, state & industry
  const baseFaqs = activeInd.faqs || [];
  const locationFaqs: { question: string; answer: string }[] = [];

  if (state) {
    locationFaqs.push({
      question: `Does PEXEK support local area codes across ${state.name}?`,
      answer: `Yes, PEXEK provisions local SIP phone numbers with area codes ${state.areaCodes.join(', ')} covering all major metropolitan areas in ${state.name} (${state.majorMetros.join(', ')}), as well as toll-free 800 numbers.`
    });
    locationFaqs.push({
      question: `How does PEXEK comply with ${state.name} telecommunication & privacy regulations?`,
      answer: `PEXEK is engineered for ${state.stateCompliance}, featuring SOC-2 Type II security, HIPAA-ready call recording encryption, and state-wide data protection compliance for businesses operating in ${state.name}.`
    });
    locationFaqs.push({
      question: `Which ${state.name} business sectors benefit most from PEXEK Voice AI?`,
      answer: `PEXEK provides tailored neural speech models for ${state.name}'s key economic drivers including ${state.economicFocus}.`
    });
  } else if (location) {
    locationFaqs.push({
      question: `Does PEXEK support local area codes in ${location.city}, ${location.stateAbbr}?`,
      answer: `Yes, PEXEK provisions local SIP phone numbers with area codes ${location.areaCodes.join(', ')} across the ${location.city} metro region (${location.metroArea}), as well as toll-free 800 numbers.`
    });
    locationFaqs.push({
      question: `How does PEXEK handle local compliance and data privacy in ${location.state}?`,
      answer: `PEXEK maintains ${location.stateCompliance || 'SOC-2 Type II and HIPAA compliance'}, ensuring encrypted call logging and compliant caller data storage for all businesses operating in ${location.city}, ${location.stateAbbr}.`
    });
    locationFaqs.push({
      question: `Can PEXEK manage peak inbound phone call spikes in ${location.city}?`,
      answer: `Absolutely. PEXEK's multi-line cloud telephony architecture dynamically scales to answer concurrent calls during peak morning and afternoon volume in ${location.city} with zero hold times.`
    });
  }

  const integrationFaq = integration ? [{
    question: `How fast does data sync between PEXEK and ${integration.name}?`,
    answer: `Data syncs via ${integration.syncType} with average post-call latency of ${integration.syncLatency}. Transcripts, contact details, and intent tags are created automatically.`
  }] : [];

  const allFaqs = [...baseFaqs, ...locationFaqs, ...integrationFaq];

  // Calculate stats based on industry and location
  const monthlySavingsCalc = `$${((activeInd.avgMonthlyMissedCalls * activeInd.avgCallValue * 0.25) / 1000).toFixed(1)}k/mo`;

  // Dynamic internal linking targets (matrix calculated across cities, states & industries)
  const internalLinks: {
    title: string;
    path: string;
    description: string;
    category: 'service' | 'industry' | 'location' | 'state' | 'integration' | 'core';
  }[] = [
    {
      title: '24/7 AI Receptionist Core Service',
      path: '/ai-receptionist',
      description: 'Explore our multi-line autonomous front desk telephony engine.',
      category: 'service'
    },
    {
      title: 'Voice AI Agents Infrastructure',
      path: '/voice-ai-agents',
      description: 'Review our SOC-2 compliant neural speech architecture.',
      category: 'service'
    },
    {
      title: 'Platform Pricing & Tiers',
      path: '/pricing',
      description: 'View transparent per-minute and managed enterprise tiers.',
      category: 'core'
    },
    {
      title: 'Book 30-Min Strategy Audit',
      path: '/book-audit',
      description: 'Schedule a live telephony architecture review with PEXEK engineers.',
      category: 'core'
    }
  ];

  if (state) {
    // Add links to other major US states
    PSEO_STATES.filter(s => s.slug !== state.slug).slice(0, 4).forEach(otherState => {
      internalLinks.push({
        title: `AI Receptionist in ${otherState.name}`,
        path: `/ai-receptionist-${otherState.slug}`,
        description: `Autonomous front desk coverage in ${otherState.capital} and ${otherState.majorMetros.slice(0, 2).join(', ')}.`,
        category: 'state'
      });
    });

    // Add links to key industry solutions in this state
    PSEO_INDUSTRIES.slice(0, 4).forEach(ind => {
      internalLinks.push({
        title: `${ind.name} AI in ${state.name}`,
        path: `/${ind.slug}-ai-${state.slug}`,
        description: `Voice AI phone answering tailored for ${ind.pluralName} across ${state.stateAbbr}.`,
        category: 'industry'
      });
    });
  } else {
    // Add 4 related industry cross-links
    PSEO_INDUSTRIES.filter(i => i.slug !== activeInd.slug).slice(0, 4).forEach(ind => {
      const path = location 
        ? `/${ind.slug}-ai-receptionist-${location.slug}`
        : `/voice-ai-agent-for-${ind.slug}`;
      internalLinks.push({
        title: `${ind.name} AI Receptionist`,
        path,
        description: ind.tagline,
        category: 'industry'
      });
    });

    // Add 4 related location cross-links (neighboring major US cities)
    PSEO_LOCATIONS.filter(l => !location || l.slug !== location.slug).slice(0, 4).forEach(loc => {
      const path = industry 
        ? `/${industry.slug}-ai-receptionist-${loc.slug}`
        : `/ai-receptionist-${loc.slug}`;
      internalLinks.push({
        title: `AI Receptionist in ${loc.city}, ${loc.stateAbbr}`,
        path,
        description: `Serving businesses across ${loc.metroArea}.`,
        category: 'location'
      });
    });
  }

  // Add integration cross-links
  PSEO_INTEGRATIONS.slice(0, 3).forEach(integ => {
    internalLinks.push({
      title: `${integ.name} Integration`,
      path: `/${integ.slug}-integration`,
      description: integ.description,
      category: 'integration'
    });
  });

  const pageResult: ProgrammaticPageData = {
    id: `pseo-${cleanPath}`,
    slug: cleanPath,
    urlPath: `/${cleanPath}`,
    templateType: parsed.templateType || 'industry',
    meta: {
      title,
      description,
      keywords,
      canonicalUrl,
      ogTitle: title,
      ogDescription: description,
      ogImage: `${SITE_CONFIG.domain}/pexek-og.png`
    },
    breadcrumbs,
    hero: {
      badgeText,
      h1,
      subheadline,
      metricsPill: `Estimated ROI: ${monthlySavingsCalc} Revenue Recovered`
    },
    industry,
    location,
    state,
    integration,
    service,
    stats: {
      latency: '<450ms',
      answerRate: '100%',
      monthlySavings: monthlySavingsCalc,
      setupTime: '14 Days'
    },
    capabilities: [
      {
        title: state ? `24/7 Local ${state.name} Area Code Answering` : (location ? `24/7 Local ${location.city} Phone Answering` : '24/7 Instant Phone Answering'),
        description: state
          ? `Never miss a call across ${state.name}. Sub-450ms response across local ${state.areaCodes.join(', ')} area codes.`
          : (location 
            ? `Never miss a high-intent caller in ${location.city}. Sub-450ms response across local ${location.areaCodes.join(', ')} area codes.` 
            : 'Never miss a high-intent inbound phone call again. Zero hold times, sub-450ms vocal turnaround.'),
        iconName: 'PhoneCall'
      },
      {
        title: `Native ${activeInd.primaryCrm} Synchronization`,
        description: `Bi-directional real-time sync with ${activeInd.primaryCrm} logs transcripts, updates calendars, and routes calls.`,
        iconName: 'RefreshCw'
      },
      {
        title: 'Automated Intent Triage',
        description: `Custom neural dialogue trees qualify caller budget, urgency, and requirements instantly.`,
        iconName: 'Brain'
      },
      {
        title: 'Emergency Live Transfer',
        description: `Escalate urgent calls directly to staff mobile devices in ${state ? state.name : (location ? location.city : 'your region')} based on custom rules.`,
        iconName: 'Zap'
      }
    ],
    transcriptDialogue: activeInd.transcriptSample.dialogue,
    integrationsList: [activeInd.primaryCrm, ...activeInd.secondaryCrms],
    faqs: allFaqs,
    internalLinks,
    jsonLd: []
  };

  pageResult.jsonLd = generateProgrammaticSchemaGraph(pageResult);

  return pageResult;
}

