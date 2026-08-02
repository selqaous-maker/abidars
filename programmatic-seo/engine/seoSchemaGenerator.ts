import { ProgrammaticPageData } from '../types';
import { SITE_CONFIG } from '../../config/siteConfig';

/**
 * Generates a complete JSON-LD Schema.org graph array for a Programmatic SEO page.
 */
export function generateProgrammaticSchemaGraph(pageData: ProgrammaticPageData): any[] {
  const canonicalUrl = pageData.meta.canonicalUrl;
  const schemas: any[] = [];

  // 1. WebPage Schema
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: pageData.meta.title,
    description: pageData.meta.description,
    inLanguage: 'en-US',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.domain}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.domain}/pexek-logo.png`
      }
    }
  });

  // 2. Service Schema
  const serviceName = pageData.industry 
    ? `24/7 AI Receptionist for ${pageData.industry.name}` 
    : (pageData.service?.name || 'Voice AI Receptionist');

  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonicalUrl}#service`,
    name: serviceName,
    serviceType: 'Voice AI & Autonomous Phone Answering',
    provider: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.domain}/#organization`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.domain
    },
    areaServed: pageData.location ? {
      '@type': 'AdministrativeArea',
      name: `${pageData.location.city}, ${pageData.location.stateAbbr}`
    } : (pageData.state ? {
      '@type': 'AdministrativeArea',
      name: `${pageData.state.name} (${pageData.state.stateAbbr})`,
      containedInPlace: {
        '@type': 'Country',
        name: 'United States'
      }
    } : {
      '@type': 'Country',
      name: 'United States'
    }),
    description: pageData.meta.description,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${SITE_CONFIG.domain}/pricing`
    }
  });

  // 3. BreadcrumbList Schema
  if (pageData.breadcrumbs && pageData.breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: pageData.breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: crumb.url
      }))
    });
  }

  // 4. FAQPage Schema
  if (pageData.faqs && pageData.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: pageData.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  // 5. SoftwareApplication Schema for AI Engine
  schemas.push({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${canonicalUrl}#software`,
    name: `PEXEK Voice AI Platform - ${serviceName}`,
    operatingSystem: 'Cloud / SIP / PSTN',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.95',
      reviewCount: '128'
    }
  });

  // 6. LocalBusiness Schema if Location context exists
  if (pageData.location) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${canonicalUrl}#localbusiness`,
      name: `PEXEK AI Telephony Hub - ${pageData.location.city}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: pageData.location.city,
        addressRegion: pageData.location.stateAbbr,
        addressCountry: pageData.location.country
      },
      telephone: `+1-${pageData.location.areaCodes[0]}-555-0199`,
      priceRange: '$$$',
      openingHours: 'Mo-Su 00:00-24:00'
    });
  } else if (pageData.state) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': `${canonicalUrl}#statebusiness`,
      name: `PEXEK AI Telephony Network - ${pageData.state.name}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: pageData.state.capital,
        addressRegion: pageData.state.stateAbbr,
        addressCountry: 'United States'
      },
      telephone: `+1-${pageData.state.areaCodes[0]}-555-0199`,
      priceRange: '$$$',
      openingHours: 'Mo-Su 00:00-24:00'
    });
  }

  return schemas;
}
