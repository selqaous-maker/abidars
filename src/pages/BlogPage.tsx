import React, { useState } from 'react';
import { PagePath, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import { StandardCtaSection } from '../components/StandardCtaSection';
import { Clock, ArrowLeft, X, Check, Search, Mail, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenAuditModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

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

  // SINGLE ARTICLE VIEW (Editorial View)
  if (activeArticle) {
    return (
      <div className="pb-24 pt-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10 animate-in fade-in duration-200">
        
        {/* Back Button */}
        <div>
          <button
            onClick={() => {
              setActiveArticle(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#00d4ff] hover:underline font-bold transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to AI Voice Insights</span>
          </button>
        </div>

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

          <div className="pt-2 text-xs sm:text-sm font-mono text-[#94a3b8] flex items-center gap-2">
            <span>By <strong className="text-white">{activeArticle.author}</strong></span>
            <span>•</span>
            <span className="text-[#00d4ff]">PEXEK Voice Systems</span>
          </div>
        </header>

        {/* Editorial Body */}
        <main className="space-y-8 font-sans text-slate-200 text-base sm:text-lg leading-relaxed max-w-3xl">
          
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
            <section key={idx} className="space-y-5 pt-4">
              
              {/* Subheading H2 - Title Case, 20-24px, Bold, White */}
              {section.h2 && (
                <h2 className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 leading-tight font-sans">
                  {section.h2}
                </h2>
              )}

              {/* Subheading H3 */}
              {section.h3 && (
                <h3 className="text-lg font-bold text-[#00d4ff] pt-2 font-mono">
                  {section.h3}
                </h3>
              )}

              {/* Paragraphs - Short, max 3-4 lines */}
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

              {/* Blockquotes - 18-20px, italic, left border 2px cyan, em-dash attribution */}
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

          {/* Natural Source Integration - "Referenced in this article" */}
          {activeArticle.externalLinks && activeArticle.externalLinks.length > 0 && (
            <div className="pt-8 mt-12 border-t border-white/10 text-xs font-mono text-[#94a3b8] space-y-3">
              <span className="text-white font-bold block uppercase tracking-wider text-xs font-sans">
                Referenced in this article
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

          {/* Author Box - Horizontal layout, no "Writes about:" label */}
          <div className="bg-[#0a0e1a] border border-white/10 p-6 sm:p-7 rounded-sm flex items-center gap-5 my-12 shadow-lg">
            <div className="w-14 h-14 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/40 text-[#00d4ff] font-mono font-bold flex items-center justify-center shrink-0 text-lg">
              SQ
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-white font-sans">
                Salah Eddine El Qaous
              </h4>
              <p className="text-xs font-mono text-[#00d4ff]">
                Founder, PEXEK
              </p>
              <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed">
                Architecting autonomous AI voice systems that eliminate revenue leaks for growth-focused businesses.
              </p>
            </div>
          </div>

          {/* Related Reading Section - Title: "Related Reading" with 2 cards */}
          {activeArticle.relatedPostIds && activeArticle.relatedPostIds.length > 0 && (
            <div className="pt-12 border-t border-white/10 space-y-6 my-12">
              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                Related Reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {activeArticle.relatedPostIds.map((relId) => {
                  const relPost = BLOG_POSTS.find((p) => p.id === relId);
                  if (!relPost) return null;
                  return (
                    <div
                      key={relPost.id}
                      onClick={() => {
                        setActiveArticle(relPost);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
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
                  );
                })}
              </div>
            </div>
          )}

          {/* Contextual CTA Banner */}
          <div className="bg-[#0a0e1a] border-2 border-[#00d4ff] p-8 sm:p-10 rounded-sm text-center space-y-4 my-12 shadow-2xl">
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
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Insights..."
            className="w-full pl-11 pr-4 py-3 bg-[#050507] border border-white/15 focus:border-[#00d4ff] text-white text-sm font-mono placeholder-slate-500 rounded-sm focus:outline-none transition-colors shadow-lg"
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
          onClick={() => {
            setActiveArticle(featuredPost);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
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
              onClick={() => {
                setActiveArticle(post);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
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
          <BookOpen className="w-8 h-8 text-slate-500 mx-auto" />
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
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full sm:w-auto flex-1 px-4 py-3 bg-[#050507] border border-white/20 focus:border-[#00d4ff] text-white text-xs font-mono placeholder-slate-500 rounded-sm focus:outline-none"
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
