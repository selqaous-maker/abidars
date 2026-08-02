import React, { useEffect } from 'react';
import { getSeoConfigForPath, PageSeoConfig, createWebPageSchema } from '../data/seoData';
import { getBlogPostBySlug } from '../data/blogPosts';
import { SITE_CONFIG } from '../config/siteConfig';

interface SEOHeadProps {
  path: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ path }) => {
  useEffect(() => {
    let config: PageSeoConfig;
    let isArticle = false;
    let articleMeta: {
      publishedTime?: string;
      modifiedTime?: string;
      author?: string;
      section?: string;
      tag?: string;
      image?: string;
    } = {};

    if (path.startsWith('/blog/')) {
      const slug = path.replace('/blog/', '');
      const post = getBlogPostBySlug(slug);
      if (post) {
        isArticle = true;
        const pageTitle = post.seoTitle || `${post.title} | PEXEK AI Voice Insights`;
        const metaDesc = post.metaDescription || post.excerpt;
        const canonicalUrl = `${SITE_CONFIG.domain}/blog/${post.slug || post.id}`;
        const keywordsStr = post.keywords && post.keywords.length > 0
          ? post.keywords.join(', ')
          : `${post.focusKeyword}, AI Voice Agents, Business Automation, PEXEK`;
        const ogImg = post.ogImage || `${SITE_CONFIG.domain}/pexek-og.png`;
        const publishedIso = post.isoPublishedDate || post.date;
        const modifiedIso = post.isoModifiedDate || post.modifiedDate || publishedIso;

        articleMeta = {
          publishedTime: publishedIso,
          modifiedTime: modifiedIso,
          author: post.author,
          section: post.category,
          tag: post.focusKeyword,
          image: ogImg,
        };

        const jsonLdSchemas: any[] = [
          createWebPageSchema(canonicalUrl, pageTitle, metaDesc),
          {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            '@id': `${canonicalUrl}#article`,
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': `${canonicalUrl}#webpage`
            },
            headline: post.title,
            description: metaDesc,
            image: [ogImg],
            author: {
              '@type': 'Person',
              name: post.author
            },
            datePublished: publishedIso,
            dateModified: modifiedIso,
            publisher: {
              '@type': 'Organization',
              '@id': `${SITE_CONFIG.domain}/#organization`,
              name: SITE_CONFIG.name,
              url: SITE_CONFIG.domain,
              logo: {
                '@type': 'ImageObject',
                url: `${SITE_CONFIG.domain}/pexek-logo.png`
              }
            },
            keywords: keywordsStr,
            articleSection: post.category
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            '@id': `${canonicalUrl}#breadcrumb`,
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: `${SITE_CONFIG.domain}/`
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'AI Voice Insights',
                item: `${SITE_CONFIG.domain}/blog`
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: post.category,
                item: `${SITE_CONFIG.domain}/blog`
              },
              {
                '@type': 'ListItem',
                position: 4,
                name: post.title,
                item: canonicalUrl
              }
            ]
          }
        ];

        if (post.faqs && post.faqs.length > 0) {
          jsonLdSchemas.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': `${canonicalUrl}#faq`,
            mainEntity: post.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
              }
            }))
          });
        }

        config = {
          title: pageTitle,
          description: metaDesc,
          keywords: keywordsStr,
          canonical: canonicalUrl,
          ogTitle: pageTitle,
          ogDescription: metaDesc,
          ogType: 'article',
          jsonLd: jsonLdSchemas
        };
      } else {
        config = getSeoConfigForPath('/blog');
      }
    } else {
      const cleanPath = path || '/';
      config = getSeoConfigForPath(cleanPath);
    }

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

    // Helper to remove meta tag if present
    const removeMetaTag = (selector: string) => {
      const element = document.querySelector(selector);
      if (element) {
        element.remove();
      }
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
    setMetaTag('meta[name="author"]', 'author', articleMeta.author || SITE_CONFIG.author);
    setMetaTag('meta[name="application-name"]', 'application-name', SITE_CONFIG.fullName);
    setMetaTag('meta[name="apple-mobile-web-app-title"]', 'apple-mobile-web-app-title', SITE_CONFIG.name);
    setMetaTag('meta[name="robots"]', 'robots', 'index, follow, max-image-preview:large');
    setMetaTag('meta[name="theme-color"]', 'theme-color', SITE_CONFIG.themeColor);

    // 3. Canonical Link
    setLinkTag('canonical', config.canonical);

    // 4. OpenGraph Meta Tags
    const ogImage = articleMeta.image || `${SITE_CONFIG.domain}/pexek-og.png`;
    setMetaTag('meta[property="og:title"]', 'og:title', config.ogTitle || config.title, 'property');
    setMetaTag('meta[property="og:description"]', 'og:description', config.ogDescription || config.description, 'property');
    setMetaTag('meta[property="og:url"]', 'og:url', config.canonical, 'property');
    setMetaTag('meta[property="og:type"]', 'og:type', config.ogType || 'website', 'property');
    setMetaTag('meta[property="og:locale"]', 'og:locale', 'en_US', 'property');
    setMetaTag('meta[property="og:site_name"]', 'og:site_name', SITE_CONFIG.fullName, 'property');
    setMetaTag('meta[property="og:image"]', 'og:image', ogImage, 'property');
    setMetaTag('meta[property="og:image:width"]', 'og:image:width', '1200', 'property');
    setMetaTag('meta[property="og:image:height"]', 'og:image:height', '630', 'property');
    setMetaTag('meta[property="og:image:alt"]', 'og:image:alt', config.ogTitle || config.title, 'property');

    // 5. Article specific OG tags (published date, modified date, author, section, tag)
    if (isArticle && articleMeta.publishedTime) {
      setMetaTag('meta[property="article:published_time"]', 'article:published_time', articleMeta.publishedTime, 'property');
      if (articleMeta.modifiedTime) {
        setMetaTag('meta[property="article:modified_time"]', 'article:modified_time', articleMeta.modifiedTime, 'property');
      }
      if (articleMeta.author) {
        setMetaTag('meta[property="article:author"]', 'article:author', articleMeta.author, 'property');
      }
      if (articleMeta.section) {
        setMetaTag('meta[property="article:section"]', 'article:section', articleMeta.section, 'property');
      }
      if (articleMeta.tag) {
        setMetaTag('meta[property="article:tag"]', 'article:tag', articleMeta.tag, 'property');
      }
    } else {
      // Clean up article meta tags when on regular pages
      removeMetaTag('meta[property="article:published_time"]');
      removeMetaTag('meta[property="article:modified_time"]');
      removeMetaTag('meta[property="article:author"]');
      removeMetaTag('meta[property="article:section"]');
      removeMetaTag('meta[property="article:tag"]');
    }

    // 6. Twitter Card Meta Tags
    setMetaTag('meta[name="twitter:card"]', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:site"]', 'twitter:site', '@PEXEK_AI');
    setMetaTag('meta[name="twitter:creator"]', 'twitter:creator', '@PEXEK_AI');
    setMetaTag('meta[name="twitter:title"]', 'twitter:title', config.ogTitle || config.title);
    setMetaTag('meta[name="twitter:description"]', 'twitter:description', config.ogDescription || config.description);
    setMetaTag('meta[name="twitter:image"]', 'twitter:image', ogImage);
    setMetaTag('meta[name="twitter:image:alt"]', 'twitter:image:alt', config.ogTitle || config.title);

    // 7. JSON-LD Structured Data Management
    const existingScripts = document.querySelectorAll('script[data-pexek-seo="true"]');
    existingScripts.forEach((script) => script.remove());

    const activeJsonLd = (config.jsonLd && config.jsonLd.length > 0) ? config.jsonLd : [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: config.title,
        description: config.description,
        url: config.canonical,
        publisher: {
          '@type': 'Organization',
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.domain,
          logo: `${SITE_CONFIG.domain}/pexek-logo.png`
        }
      }
    ];

    activeJsonLd.forEach((schemaObj) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-pexek-seo', 'true');
      script.textContent = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    });

  }, [path]);

  return null;
};
