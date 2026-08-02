import { PSEO_INDUSTRIES, PSEO_LOCATIONS, PSEO_INTEGRATIONS } from '../data/datasets';
import { PSEO_STATES } from '../data/states';
import { SITE_CONFIG } from '../../config/siteConfig';

export interface SitemapUrlEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: number;
}

/**
 * Generates all programmatic SEO URL entries for sitemap integration
 */
export function generateProgrammaticSitemapEntries(): SitemapUrlEntry[] {
  const entries: SitemapUrlEntry[] = [];
  const currentDate = new Date().toISOString().split('T')[0];

  // 1. Industry pages
  PSEO_INDUSTRIES.forEach(ind => {
    entries.push({
      loc: `${SITE_CONFIG.domain}/voice-ai-agent-for-${ind.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.85
    });
  });

  // 2. Location pages
  PSEO_LOCATIONS.forEach(loc => {
    entries.push({
      loc: `${SITE_CONFIG.domain}/ai-receptionist-${loc.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.85
    });
    entries.push({
      loc: `${SITE_CONFIG.domain}/voice-ai-agents-${loc.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.85
    });
    entries.push({
      loc: `${SITE_CONFIG.domain}/ai-voice-agent-in-${loc.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.80
    });
  });

  // 3. State pages
  PSEO_STATES.forEach(state => {
    entries.push({
      loc: `${SITE_CONFIG.domain}/ai-receptionist-${state.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.88
    });
    entries.push({
      loc: `${SITE_CONFIG.domain}/voice-ai-${state.slug}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.88
    });
  });

  // 4. Integration pages
  PSEO_INTEGRATIONS.forEach(integ => {
    entries.push({
      loc: `${SITE_CONFIG.domain}/${integ.slug}-integration`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.80
    });
  });

  // 5. Matrix Industry x State combinations
  PSEO_INDUSTRIES.forEach(ind => {
    PSEO_STATES.forEach(state => {
      entries.push({
        loc: `${SITE_CONFIG.domain}/${ind.slug}-ai-${state.slug}`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.80
      });
    });
  });

  // 6. Matrix Industry x Location combinations
  PSEO_INDUSTRIES.forEach(ind => {
    PSEO_LOCATIONS.forEach(loc => {
      entries.push({
        loc: `${SITE_CONFIG.domain}/${ind.slug}-ai-receptionist-${loc.slug}`,
        lastmod: currentDate,
        changefreq: 'monthly',
        priority: 0.75
      });
    });
  });

  return entries;
}

/**
 * Builds XML string for a sitemap from entries
 */
export function buildSitemapXml(entries: SitemapUrlEntry[]): string {
  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  const xmlFooter = `\n</urlset>`;

  const urlElements = entries.map(entry => `
  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority.toFixed(2)}</priority>
  </url>`).join('');

  return `${xmlHeader}${urlElements}${xmlFooter}`;
}
