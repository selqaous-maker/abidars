import React, { useEffect } from 'react';
import { seoDataMap, PageSeoConfig } from '../data/seoData';

interface SEOHeadProps {
  path: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ path }) => {
  useEffect(() => {
    // Normalize hash route (e.g. '/' or '/about')
    const cleanPath = path || '/';
    const config: PageSeoConfig = seoDataMap[cleanPath] || seoDataMap['/'];

    // 1. Update Document Title
    document.title = config.title;

    // Helper to set or update meta tags
    const setMetaTag = (selector: string, key: string, value: string, attrName: string = 'name') => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Helper to set or update link tags
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Core Meta Tags
    setMetaTag('meta[name="description"]', 'description', config.description);
    setMetaTag('meta[name="keywords"]', 'keywords', config.keywords);
    setMetaTag('meta[name="robots"]', 'robots', 'index, follow, max-image-preview:large');
    setMetaTag('meta[name="theme-color"]', 'theme-color', '#050507');

    // 3. Canonical Link
    setLinkTag('canonical', config.canonical);

    // 4. OpenGraph Meta Tags
    setMetaTag('meta[property="og:title"]', 'og:title', config.ogTitle || config.title, 'property');
    setMetaTag('meta[property="og:description"]', 'og:description', config.ogDescription || config.description, 'property');
    setMetaTag('meta[property="og:url"]', 'og:url', config.canonical, 'property');
    setMetaTag('meta[property="og:type"]', 'og:type', config.ogType || 'website', 'property');
    setMetaTag('meta[property="og:site_name"]', 'og:site_name', 'PEXEK Enterprise AI Voice', 'property');
    setMetaTag('meta[property="og:image"]', 'og:image', 'https://pexek.com/icon.png', 'property');

    // 5. Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'twitter:title', config.ogTitle || config.title);
    setMetaTag('meta[name="twitter:description"]', 'twitter:description', config.ogDescription || config.description);
    setMetaTag('meta[name="twitter:image"]', 'twitter:image', 'https://pexek.com/icon.png');

    // 6. JSON-LD Structured Data Management
    // Remove existing dynamic PEXEK json-ld scripts
    const existingScripts = document.querySelectorAll('script[data-pexek-seo="true"]');
    existingScripts.forEach((script) => script.remove());

    if (config.jsonLd && config.jsonLd.length > 0) {
      config.jsonLd.forEach((schemaObj) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-pexek-seo', 'true');
        script.textContent = JSON.stringify(schemaObj);
        document.head.appendChild(script);
      });
    }

  }, [path]);

  return null;
};
