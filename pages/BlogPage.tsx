import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { PagePath } from '../types';
import { BLOG_POSTS, getBlogPostBySlug } from '../data/blogPosts';
import { getRelatedArticles, getPrevNextArticles, CORE_SEO_RESOURCES } from '../utils/blogSeoHelpers';
import { StandardCtaSection } from '../components/StandardCtaSection';
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Check,
  Search,
  Mail,
  BookOpen,
  Layers,
  Briefcase,
  HelpCircle,
  Sparkles,
  List,
  X
} from 'lucide-react';

interface BlogPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenAuditModal }) => {
  const { slug } = useParams<{ slug?: string }>();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);
  const [activeTocId, setActiveTocId] = useState<string>('');

  // Active article is derived from URL slug parameter
  const activeArticle = slug ? getBlogPostBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Handle active TOC tracking via IntersectionObserver
  useEffect(() => {
    if (!activeArticle || !activeArticle.sections) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTocId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0.1 }
    );

    const headings = document.querySelectorAll('h2[id^="section-"]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [activeArticle]);

  // Category Filter
  const categories = ['All', 'AI Receptionists', 'Missed Call Revenue', 'Industry Solutions'];

  // Helper for formatting read time: "Estimated reading time: 10 minutes" -> "10 min read"
  const formatReadTime = (timeStr: string) => {
    if (!timeStr) return '5 min read';
    const clean = timeStr
      .replace(/Estimated reading time:\s*/i, '')
      .replace(/minutes?/i, 'min')
      .trim();
    if (clean.includes('min')) return `${clean} read`;
    return `${clean} min read`;
  };

  // Filter posts based on category & search query
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' ? true : post.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.focusKeyword.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Featured article is the first article
  const featuredPost = BLOG_POSTS[0];
  const isShowingFeatured = selectedCategory === 'All' && !searchQuery;

  // Grid posts excluding featured when hero is active
  const gridPosts = isShowingFeatured
    ? filteredPosts.filter((p) => p.id !== featuredPost.id)
    : filteredPosts;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveTocId(id);
    }
  };

  // INVALID SLUG NOT FOUND VIEW
  if (slug && !activeArticle) {
    return (
      <div className="pb-24 pt-16 px-4 text-center space-y-4 max-w-xl mx-auto">
        <BookOpen className="w-12 h-12 text-[#00d4ff] mx-auto" />
        <h2 className="text-2xl font-extrabold text-white font-sans">Article Not Found</h2>
        <p className="text-slate-400 text-sm font-sans">The requested research article URL does not exist.</p>
        <button
          onClick={() => onNavigate('/blog')}
          className="btn-pexek-primary text-xs px-6 py-3 font-bold uppercase tracking-wider inline-flex items-center gap-2 mt-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to AI Voice Insights</span>
        </button>
      </div>
    );
  }

  // SINGLE ARTICLE VIEW (Editorial View)
  if (activeArticle) {
    const sectionHeadings = activeArticle.sections
      ? activeArticle.sections.filter((s) => s.h2).map((s, idx) => ({ id: `section-${idx}`, text: s.h2! }))
      : [];

    return (
      <div className="pb-24 pt-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 animate-in fade-in duration-200">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-xs font-mono text-[#94a3b8] flex flex-wrap items-center gap-2 pb-2 border-b border-white/5">
          <button onClick={() => onNavigate('/')} className="hover:text-[#00d4ff] transition-colors">Home</button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <button onClick={() => onNavigate('/blog')} className="hover:text-[#00d4ff] transition-colors">AI Voice Insights</button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <button
            onClick={() => {
              setSelectedCategory(activeArticle.category);
              onNavigate('/blog');
            }}
            className="text-[#00d4ff] font-bold hover:underline"
          >
            {activeArticle.category}
          </button>
          <ChevronRight className="w-3 h-3 text-slate-600" />
          <span className="text-slate-400 truncate max-w-[180px] sm:max-w-xs" title={activeArticle.title}>
            {activeArticle.title}
          </span>
        </nav>

        {/* Article Editorial Header */}
        <header className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="text-[#00d4ff] font-bold uppercase tracking-[0.1em]">
              {activeArticle.category.toUpperCase()}
            </span>
            <span className="text-[#94a3b8]">•</span>
            <span className="text-[#94a3b8] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#00d4ff]" />
              <span>{formatReadTime(activeArticle.readTime)}</span>
            </span>
            <span className="text-[#94a3b8]">• {activeArticle.date}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-sans leading-tight tracking-tight">
            {activeArticle.title}
          </h1>

          <div className="pt-2 text-xs sm:text-sm font-mono text-[#94a3b8] flex flex-wrap items-center gap-3">
            <span>By <strong className="text-white">{activeArticle.author}</strong></span>
            <span>•</span>
            <span className="text-[#00d4ff]">PEXEK Voice Systems</span>
            {activeArticle.isoModifiedDate && (
              <>
                <span>•</span>
                <span className="text-slate-400">Updated: {activeArticle.modifiedDate || activeArticle.date}</span>
              </>
            )}
          </div>
        </header>

        {/* Layout with Sticky Table of Contents on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Editorial Content Column */}
          <main className="lg:col-span-8 space-y-8 font-sans text-slate-200 text-base sm:text-lg leading-relaxed">
            
            {/* Mobile / Tablet Collapsible Table of Contents */}
            {sectionHeadings.length > 0 && (
              <div className="lg:hidden bg-[#0a0e1a] border border-white/10 p-4 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
                  <List className="w-4 h-4" />
                  <span>Table of Contents</span>
                </div>
                <ul className="space-y-2 text-xs font-sans">
                  {sectionHeadings.map((heading) => (
                    <li key={heading.id}>
                      <button
                        onClick={() => scrollToSection(heading.id)}
                        className={`text-left hover:text-[#00d4ff] transition-colors leading-normal ${
                          activeTocId === heading.id ? 'text-[#00d4ff] font-bold' : 'text-slate-300'
                        }`}
                      >
                        • {heading.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Article Summary / Meta Description Lead */}
            {activeArticle.metaDescription && (
              <div className="bg-[#0a0e1a] border-l-2 border-[#00d4ff] p-5 rounded-r-sm my-4">
                <p className="text-sm sm:text-base text-slate-300 font-sans italic leading-relaxed">
                  "{activeArticle.metaDescription}"
                </p>
              </div>
            )}

            {/* Structured Sections */}
            {activeArticle.sections && activeArticle.sections.map((section, idx) => (
              <section key={idx} className="space-y-5 pt-2">
                
                {/* Subheading H2 - Title Case with scroll target */}
                {section.h2 && (
                  <h2
                    id={`section-${idx}`}
                    className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 leading-tight font-sans scroll-mt-24"
                  >
                    {section.h2}
                  </h2>
                )}

                {/* Subheading H3 */}
                {section.h3 && (
                  <h3 className="text-lg font-bold text-[#00d4ff] pt-2 font-mono">
                    {section.h3}
                  </h3>
                )}

                {/* Paragraphs */}
                {section.paragraphs && section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                    {para}
                  </p>
                ))}

                {/* Key Statistics Callout */}
                {section.calloutStat && (
                  <div className="bg-[#0a0e1a] border border-[#00d4ff]/30 p-8 rounded-sm my-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl">
                    <div className="text-5xl sm:text-6xl font-extrabold text-[#00d4ff] font-mono shrink-0">
                      {section.calloutStat.value}
                    </div>
                    <div className="text-sm sm:text-base text-[#94a3b8] font-sans leading-relaxed pt-1">
                      {section.calloutStat.label}
                    </div>
                  </div>
                )}

                {/* Blockquotes */}
                {section.blockquote && (
                  <blockquote className="border-l-2 border-[#00d4ff] pl-6 py-2 my-8 space-y-2">
                    <p className="text-lg sm:text-xl italic text-white leading-relaxed font-sans">
                      "{section.blockquote.text}"
                    </p>
                    <footer className="text-xs font-mono text-[#94a3b8] not-italic block font-semibold">
                      — {section.blockquote.source}
                    </footer>
                  </blockquote>
                )}

                {/* Bullet Lists */}
                {section.bulletPoints && (
                  <ul className="space-y-3.5 my-6 pl-1">
                    {section.bulletPoints.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                        <Check className="w-5 h-5 text-[#00d4ff] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </section>
            ))}

            {/* Fallback for unstructured content */}
            {!activeArticle.sections && activeArticle.content && activeArticle.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans">
                {paragraph}
              </p>
            ))}

            {/* Relevant Service Spotlight Card */}
            {activeArticle.relevantService && (
              <div className="bg-[#0a0e1a] border border-[#00d4ff]/40 p-6 rounded-sm my-8 space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] uppercase tracking-wider font-bold">
                  <Layers className="w-4 h-4 text-[#00d4ff]" />
                  <span>Service Architecture Spotlight</span>
                </div>
                <h4 className="text-lg font-bold text-white font-sans">{activeArticle.relevantService.name}</h4>
                <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed">
                  {activeArticle.relevantService.description}
                </p>
                <button
                  onClick={() => onNavigate(activeArticle.relevantService!.path)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#00d4ff] font-bold hover:underline pt-1"
                >
                  <span>{activeArticle.relevantService.anchorText}</span>
                </button>
              </div>
            )}

            {/* Relevant Industry Spotlight Card */}
            {activeArticle.relevantIndustry && (
              <div className="bg-[#0a0e1a] border border-purple-500/40 p-6 rounded-sm my-8 space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">
                  <Briefcase className="w-4 h-4 text-purple-400" />
                  <span>Industry Solution Playbook</span>
                </div>
                <h4 className="text-lg font-bold text-white font-sans">{activeArticle.relevantIndustry.name}</h4>
                <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed">
                  {activeArticle.relevantIndustry.description}
                </p>
                <button
                  onClick={() => onNavigate(activeArticle.relevantIndustry!.path)}
                  className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 font-bold hover:underline pt-1"
                >
                  <span>{activeArticle.relevantIndustry.anchorText}</span>
                </button>
              </div>
            )}

            {/* Natural Source Integration - "Referenced in this article" */}
            {activeArticle.externalLinks && activeArticle.externalLinks.length > 0 && (
              <div className="pt-8 mt-10 border-t border-white/10 text-xs font-mono text-[#94a3b8] space-y-3">
                <span className="text-white font-bold block uppercase tracking-wider text-xs font-sans">
                  Referenced Benchmarks & External Studies
                </span>
                <ul className="space-y-2">
                  {activeArticle.externalLinks.map((link, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#00d4ff]">•</span>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#94a3b8] hover:text-[#00d4ff] transition-colors underline"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Structured FAQ Section */}
            {activeArticle.faqs && activeArticle.faqs.length > 0 && (
              <div className="pt-8 border-t border-white/10 my-10 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#00d4ff]" />
                    <span>Frequently Asked Questions</span>
                  </h3>
                  <span className="text-[10px] font-mono text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-2.5 py-1 rounded-full uppercase tracking-widest w-fit font-bold">
                    FAQPage Schema Active
                  </span>
                </div>
                <div className="space-y-4">
                  {activeArticle.faqs.map((faq, i) => (
                    <div key={i} className="bg-[#0a0e1a] border border-white/10 p-5 rounded-sm space-y-2">
                      <h4 className="text-base font-bold text-white font-sans flex items-start gap-2">
                        <span className="text-[#00d4ff] font-mono shrink-0">Q:</span>
                        <span>{faq.question}</span>
                      </h4>
                      <p className="text-sm text-[#94a3b8] font-sans leading-relaxed pl-6">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Author Box */}
            <div className="bg-[#0a0e1a] border border-white/10 p-6 sm:p-7 rounded-sm flex items-center gap-5 my-10 shadow-lg">
              <div className="w-14 h-14 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/40 text-[#00d4ff] font-mono font-bold flex items-center justify-center shrink-0 text-lg">
                SQ
              </div>
              <div className="space-y-1">
                <h4 className="text-base font-bold text-white font-sans">
                  Salah Eddine El Qaous
                </h4>
                <p className="text-xs font-mono text-[#00d4ff]">
                  Founder & Principal Architect, PEXEK
                </p>
                <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed">
                  Architecting enterprise-grade autonomous AI voice systems that eliminate revenue leaks for growth-focused companies.
                </p>
              </div>
            </div>

            {/* Core Resources & Internal Links Hub */}
            <div className="pt-8 border-t border-white/10 my-10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-sans flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00d4ff]" />
                  <span>PEXEK Core Infrastructure & Strategy Hub</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#94a3b8]">
                  Explore key voice architecture calculators, live demos, pricing tiers, and founder blueprints.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_SEO_RESOURCES.map((res, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      if (res.isAuditModal) {
                        onOpenAuditModal();
                      } else {
                        onNavigate(res.path);
                      }
                    }}
                    className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/40 p-4 rounded-sm space-y-2 cursor-pointer group transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider">
                      {res.label}
                    </div>
                    <p className="text-xs text-[#94a3b8] font-sans leading-relaxed">
                      {res.description}
                    </p>
                    <div className="pt-1 text-xs font-mono text-white group-hover:text-[#00d4ff] font-bold flex items-center justify-between">
                      <span>{res.anchorText}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Previous & Next Article Navigation */}
            {(() => {
              const { prevPost, nextPost } = getPrevNextArticles(activeArticle, BLOG_POSTS);
              if (!prevPost && !nextPost) return null;
              return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/10 my-10">
                  {prevPost ? (
                    <div
                      onClick={() => onNavigate(`/blog/${prevPost.slug || prevPost.id}` as PagePath)}
                      className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/40 p-5 rounded-sm space-y-2 cursor-pointer group transition-all duration-200"
                    >
                      <div className="text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider flex items-center gap-1">
                        <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                        <span>Previous Article</span>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00d4ff] transition-colors line-clamp-2 font-sans">
                        {prevPost.title}
                      </h4>
                      <span className="text-xs font-mono text-[#94a3b8] block">{prevPost.category}</span>
                    </div>
                  ) : <div />}

                  {nextPost && (
                    <div
                      onClick={() => onNavigate(`/blog/${nextPost.slug || nextPost.id}` as PagePath)}
                      className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/40 p-5 rounded-sm space-y-2 cursor-pointer group transition-all duration-200 text-right"
                    >
                      <div className="text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider flex items-center justify-end gap-1">
                        <span>Next Article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-[#00d4ff] transition-colors line-clamp-2 font-sans">
                        {nextPost.title}
                      </h4>
                      <span className="text-xs font-mono text-[#94a3b8] block">{nextPost.category}</span>
                    </div>
                  )}
                </div>
              );
            })()}

            {/* Topic Similarity Related Articles */}
            {(() => {
              const related = getRelatedArticles(activeArticle, BLOG_POSTS, 2);
              if (related.length === 0) return null;
              return (
                <div className="pt-8 border-t border-white/10 space-y-6 my-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                      Related Research & Strategy Guides
                    </h3>
                    <span className="text-xs font-mono text-[#00d4ff]">Topic Similarity Matched</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {related.map((relPost) => (
                      <div
                        key={relPost.id}
                        onClick={() => onNavigate(`/blog/${relPost.slug || relPost.id}` as PagePath)}
                        className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/30 p-6 rounded-sm space-y-3 cursor-pointer group transition-all duration-200 hover:-translate-y-0.5 shadow-md flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-xs font-mono">
                            <span className="text-[#00d4ff] font-bold uppercase tracking-[0.1em]">
                              {relPost.category.toUpperCase()}
                            </span>
                            <span className="text-[#94a3b8]">•</span>
                            <span className="text-[#94a3b8]">{formatReadTime(relPost.readTime)}</span>
                          </div>
                          <h4 className="text-base font-bold text-white group-hover:text-[#00d4ff] transition-colors leading-snug font-sans line-clamp-2">
                            {relPost.title}
                          </h4>
                          <p className="text-xs text-[#94a3b8] line-clamp-2 leading-relaxed font-sans">
                            {relPost.excerpt}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                          <span className="text-[#94a3b8]">{relPost.date}</span>
                          <span className="text-[#00d4ff] font-bold group-hover:underline">
                            Read article →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}

            {/* Contextual CTA Banner */}
            <div className="bg-[#0a0e1a] border-2 border-[#00d4ff] p-8 sm:p-10 rounded-sm text-center space-y-4 my-10 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                {activeArticle.contextualCTA?.heading || 'Ready to Turn Research Into Autonomous Revenue?'}
              </h3>
              <p className="text-sm sm:text-base text-[#94a3b8] max-w-xl mx-auto font-sans leading-relaxed">
                {activeArticle.contextualCTA?.subheading || 'Book a 30-minute strategy audit to map your AI voice infrastructure and eliminate revenue leaks.'}
              </p>
              <button
                onClick={onOpenAuditModal}
                className="btn-pexek-primary text-xs sm:text-sm px-8 py-3.5 font-bold uppercase tracking-wider inline-flex items-center gap-2 shadow-lg"
              >
                <span>{activeArticle.contextualCTA?.buttonText || 'Book Free Strategy Audit →'}</span>
              </button>
            </div>

          </main>

          {/* Desktop Sticky Sidebar for Table of Contents & Quick Actions */}
          <aside className="hidden lg:block lg:col-span-4 space-y-6">
            <div className="sticky top-28 space-y-6">
              
              {/* Sticky Table of Contents Widget */}
              {sectionHeadings.length > 0 && (
                <div className="bg-[#0a0e1a] border border-white/10 p-5 rounded-sm space-y-4 shadow-xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00d4ff] font-bold uppercase tracking-wider border-b border-white/10 pb-3">
                    <List className="w-4 h-4" />
                    <span>Table of Contents</span>
                  </div>
                  <nav className="space-y-2 text-xs font-sans">
                    {sectionHeadings.map((heading) => (
                      <button
                        key={heading.id}
                        onClick={() => scrollToSection(heading.id)}
                        className={`block text-left w-full px-2 py-1.5 rounded transition-all leading-normal ${
                          activeTocId === heading.id
                            ? 'text-[#00d4ff] font-bold bg-[#00d4ff]/10 border-l-2 border-[#00d4ff] pl-2.5'
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {heading.text}
                      </button>
                    ))}
                  </nav>
                </div>
              )}

              {/* Sidebar Strategy Audit CTA Card */}
              <div className="bg-[#0a0e1a] border border-[#00d4ff]/30 p-5 rounded-sm space-y-3">
                <span className="text-[10px] font-mono text-[#00d4ff] font-bold uppercase tracking-widest block">
                  Bespoke Voice Audit
                </span>
                <h4 className="text-sm font-bold text-white font-sans">
                  Eliminate Unanswered Call Leaks
                </h4>
                <p className="text-xs text-[#94a3b8] font-sans leading-relaxed">
                  Get a 30-minute infrastructure blueprint with a PEXEK Voice Systems Architect.
                </p>
                <button
                  onClick={onOpenAuditModal}
                  className="w-full btn-pexek-primary text-xs py-2.5 font-bold uppercase tracking-wider"
                >
                  Book Free Audit →
                </button>
              </div>

            </div>
          </aside>

        </div>

      </div>
    );
  }

  // BLOG INDEX VIEW
  return (
    <div className="space-y-12 pb-20 pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header - PEXEK AI Voice Insights */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase font-mono tracking-widest text-[#00d4ff]">
          PEXEK AI VOICE INSIGHTS
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase font-sans">
          PEXEK AI Voice Insights
        </h1>
        <p className="text-slate-300 text-base leading-relaxed font-sans font-medium">
          Expert insights on AI voice agents, business automation, missed call revenue, and revenue optimization strategies.
        </p>
      </div>

      {/* Disclaimer Bar */}
      <div className="max-w-4xl mx-auto text-center bg-[#0a0e1a]/80 border border-white/10 rounded-sm p-4 text-xs text-slate-400 italic leading-relaxed shadow-inner">
        "Every article is based on publicly available research, verified industry benchmarks, and PEXEK's independent analysis. Where projections are used, they are clearly identified as estimates rather than client results."
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 pointer-events-none" />
          <label htmlFor="blog-search-input" className="sr-only">Search Insights</label>
          <input
            id="blog-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Insights..."
            aria-label="Search Insights"
            className="w-full pl-11 pr-4 py-3 bg-[#050507] border border-white/15 focus:border-[#00d4ff] text-white text-sm font-mono placeholder-slate-400 rounded-sm focus:outline-none transition-colors shadow-lg"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 p-1 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-sm whitespace-nowrap transition-all border ${
              selectedCategory === cat
                ? 'bg-[#00d4ff] text-black border-[#00d4ff]'
                : 'bg-[#0a0e1a] text-slate-300 border-white/10 hover:border-white/30'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article Hero Section */}
      {isShowingFeatured && featuredPost && (
        <div
          onClick={() => onNavigate(`/blog/${featuredPost.slug || featuredPost.id}` as PagePath)}
          className="bg-[#0a0e1a] border border-[#00d4ff]/30 hover:border-[#00d4ff]/60 p-6 sm:p-10 rounded-sm space-y-6 cursor-pointer group transition-all duration-200 hover:-translate-y-0.5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 bg-[#00d4ff] text-black text-[10px] font-mono font-extrabold uppercase px-3 py-1 tracking-wider rounded-bl-sm">
            FEATURED RESEARCH
          </div>

          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="text-[#00d4ff] font-bold uppercase tracking-[0.1em]">
                {featuredPost.category.toUpperCase()}
              </span>
              <span className="text-[#94a3b8]">•</span>
              <span className="text-[#94a3b8]">
                {formatReadTime(featuredPost.readTime)}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-[#00d4ff] transition-colors leading-tight font-sans">
              {featuredPost.title}
            </h2>

            <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed max-w-3xl font-sans line-clamp-3">
              {featuredPost.excerpt}
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-mono">
            <span className="text-[#94a3b8]">
              By {featuredPost.author} • {featuredPost.date}
            </span>
            <span className="text-[#00d4ff] font-bold group-hover:underline flex items-center gap-1.5">
              Read article →
            </span>
          </div>
        </div>
      )}

      {/* Premium Article Cards Grid */}
      {gridPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => onNavigate(`/blog/${post.slug || post.id}` as PagePath)}
              className="bg-[#0a0e1a] border border-white/10 hover:border-[#00d4ff]/30 rounded-sm p-6 sm:p-7 space-y-4 cursor-pointer group transition-all duration-200 hover:-translate-y-0.5 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* CATEGORY TAG • READ TIME */}
                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-[#00d4ff] font-bold uppercase tracking-[0.1em]">
                    {post.category.toUpperCase()}
                  </span>
                  <span className="text-[#94a3b8]">•</span>
                  <span className="text-[#94a3b8]">
                    {formatReadTime(post.readTime)}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="text-xl sm:text-[22px] font-bold text-white group-hover:text-[#00d4ff] transition-colors leading-snug font-sans line-clamp-2">
                  {post.title}
                </h2>

                {/* EXCERPT */}
                <p className="text-sm sm:text-[15px] text-[#94a3b8] leading-relaxed font-sans line-clamp-2">
                  {post.excerpt}
                </p>
              </div>

              {/* AUTHOR + DATE & CTA */}
              <div className="pt-4 mt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                <span className="text-[#94a3b8]">
                  By {post.author} • {post.date}
                </span>
                <span className="text-[#00d4ff] font-bold group-hover:underline flex items-center gap-1">
                  Read article →
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#0a0e1a] border border-white/10 rounded-sm space-y-3">
          <BookOpen className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-lg font-bold text-white font-mono">No research articles match your query</h3>
          <p className="text-xs text-slate-400">Try adjusting your search terms or category filter.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="btn-pexek-secondary text-xs px-4 py-2 mt-2"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Newsletter Signup Section */}
      <div className="bg-[#0a0e1a] border border-[#00d4ff]/30 p-8 sm:p-10 rounded-sm text-center max-w-3xl mx-auto space-y-4 shadow-2xl relative">
        <div className="inline-flex items-center justify-center p-3 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full text-[#00d4ff]">
          <Mail className="w-5 h-5" />
        </div>
        <h3 className="text-2xl font-extrabold text-white font-sans uppercase tracking-tight">
          Stay Updated
        </h3>
        <p className="text-slate-300 text-sm font-sans max-w-md mx-auto">
          One research article every month. No spam.
        </p>

        {newsletterSubscribed ? (
          <div className="bg-emerald-950/60 border border-emerald-500/40 p-4 rounded-sm text-emerald-300 text-xs font-mono font-bold">
            ✓ Subscribed! You will receive our monthly AI voice insights.
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
            <label htmlFor="blog-newsletter-email" className="sr-only">Work Email Address</label>
            <input
              id="blog-newsletter-email"
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              aria-label="Work Email Address"
              className="w-full sm:w-auto flex-1 px-4 py-3 bg-[#050507] border border-white/20 focus:border-[#00d4ff] text-white text-xs font-mono placeholder-slate-400 rounded-sm focus:outline-none"
            />
            <button
              type="submit"
              className="btn-pexek-primary w-full sm:w-auto text-xs px-6 py-3 font-bold uppercase tracking-wider shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      {/* Standardized CTA Section */}
      <StandardCtaSection
        level={2}
        title="Ready to Turn Research Into Autonomous Revenue?"
        subtitle="Book a 30-minute strategy audit to map your AI voice infrastructure and eliminate revenue leaks."
        onOpenAuditModal={onOpenAuditModal}
      />

    </div>
  );
};
