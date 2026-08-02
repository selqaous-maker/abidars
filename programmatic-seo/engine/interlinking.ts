import { PSEO_INDUSTRIES, PSEO_LOCATIONS, PSEO_INTEGRATIONS, PSEO_SERVICES } from '../data/datasets';

export interface InterlinkNode {
  title: string;
  path: string;
  description: string;
  category: 'industry' | 'location' | 'integration' | 'service' | 'hub';
}

/**
 * Returns a matrix of contextually relevant programmatic landing page URLs
 */
export function getInterlinkingMatrix(currentPath: string): {
  industryLinks: InterlinkNode[];
  locationLinks: InterlinkNode[];
  integrationLinks: InterlinkNode[];
  serviceLinks: InterlinkNode[];
} {
  const industryLinks: InterlinkNode[] = PSEO_INDUSTRIES.map(ind => ({
    title: `${ind.name} AI Receptionist`,
    path: `/voice-ai-agent-for-${ind.slug}`,
    description: ind.tagline,
    category: 'industry'
  }));

  const locationLinks: InterlinkNode[] = PSEO_LOCATIONS.map(loc => ({
    title: `AI Phone Answering in ${loc.city}, ${loc.stateAbbr}`,
    path: `/ai-voice-agent-in-${loc.slug}`,
    description: `Serving ${loc.metroArea} businesses.`,
    category: 'location'
  }));

  const integrationLinks: InterlinkNode[] = PSEO_INTEGRATIONS.map(integ => ({
    title: `${integ.name} Integration`,
    path: `/${integ.slug}-integration`,
    description: integ.description,
    category: 'integration'
  }));

  const serviceLinks: InterlinkNode[] = Object.values(PSEO_SERVICES).map(srv => ({
    title: srv.name,
    path: `/${srv.slug}`,
    description: srv.tagline,
    category: 'service'
  }));

  return {
    industryLinks: industryLinks.filter(l => l.path !== currentPath),
    locationLinks: locationLinks.filter(l => l.path !== currentPath),
    integrationLinks: integrationLinks.filter(l => l.path !== currentPath),
    serviceLinks: serviceLinks.filter(l => l.path !== currentPath)
  };
}

/**
 * Estimates total possible programmatic landing page combinations
 */
export function calculateScalabilityMetrics(): {
  industriesCount: number;
  locationsCount: number;
  integrationsCount: number;
  servicesCount: number;
  totalCombinations: number;
} {
  const ind = PSEO_INDUSTRIES.length;
  const loc = PSEO_LOCATIONS.length;
  const int = PSEO_INTEGRATIONS.length;
  const srv = Object.keys(PSEO_SERVICES).length;

  // Single entity pages + Industry x Location matrix + Integration x Service matrix
  const totalCombinations = ind + loc + int + (ind * loc) + (ind * int) + (loc * srv);

  return {
    industriesCount: ind,
    locationsCount: loc,
    integrationsCount: int,
    servicesCount: srv,
    totalCombinations
  };
}
