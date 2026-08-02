import React, { useState, useCallback, memo } from 'react';
import { PagePath } from '../types';
import { Menu, X, ChevronDown, ArrowRight, Lock } from 'lucide-react';
import { NAV_SECTIONS, SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  currentPath: PagePath;
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal?: () => void;
  onOpenDemoModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = memo(({
  currentPath,
  onNavigate,
  onOpenAuditModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navSections = NAV_SECTIONS;

  const handleNavClick = useCallback((path: PagePath) => {
    onNavigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [onNavigate]);

  const handleAuditClick = useCallback(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (onOpenAuditModal) {
      onOpenAuditModal();
    } else {
      handleNavClick('/book-audit');
    }
  }, [onOpenAuditModal, handleNavClick]);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050507]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('/');
          }}
          className="flex items-center gap-3 cursor-pointer group shrink-0 logo-container navbar-brand logo-link"
          aria-label="PEXEK OS Home Page"
        >
          <img 
            src="/pexek-logo.png" 
            alt="PEXEK OS Logo" 
            width="44"
            height="44"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="pexek-logo"
            style={{ aspectRatio: '1/1' }}
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white font-mono">PEXEK</span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#00d4ff] bg-[#00d4ff]/10 border border-[#00d4ff]/30 px-1.5 py-0.5 rounded-[2px]">
                OS™
              </span>
            </div>
            <span className="text-[9px] font-medium text-slate-400 tracking-wider hidden sm:inline-block font-mono">
              AI VOICE OPERATING SYSTEM
            </span>
          </div>
        </a>

        {/* PRIMARY NAV (DESKTOP) */}
        <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
          {navSections.map((section) => {
            if (!section.items || section.items.length === 0) {
              const isActive = currentPath === section.directPath;
              return (
                <button
                  key={section.title}
                  onClick={() => handleNavClick(section.directPath)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-mono font-bold rounded-[2px] transition-all ${
                    isActive
                      ? 'text-[#00d4ff] bg-white/5 border-b-2 border-[#00d4ff]'
                      : 'text-slate-300 hover:text-[#00d4ff] hover:bg-white/5'
                  }`}
                >
                  {section.title}
                </button>
              );
            }

            const isSectionActive = currentPath === section.directPath || section.items?.some((i) => i.path === currentPath);
            const isDropdownOpen = activeDropdown === section.title;

            return (
              <div
                key={section.title}
                className="relative"
                onMouseEnter={() => setActiveDropdown(section.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(section.directPath)}
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                  aria-label={`${section.title} menu`}
                  aria-current={isSectionActive ? 'page' : undefined}
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-mono font-bold rounded-[2px] flex items-center gap-1.5 transition-all ${
                    isSectionActive || isDropdownOpen
                      ? 'text-[#00d4ff] bg-white/5'
                      : 'text-slate-300 hover:text-[#00d4ff] hover:bg-white/5'
                  }`}
                >
                  <span>{section.title}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180 text-[#00d4ff]' : 'text-slate-400'
                  }`} aria-hidden="true" />
                </button>

                {/* DROPDOWN MENU */}
                {isDropdownOpen && section.items && (
                  <div className="absolute top-full left-0 w-64 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-[#0a0e1a] border border-white/15 rounded-[2px] p-2 shadow-2xl space-y-1" role="menu">
                      {section.items.map((item) => {
                        const isItemActive = currentPath === item.path;
                        return (
                          <button
                            key={item.label}
                            role="menuitem"
                            onClick={() => handleNavClick(item.path)}
                            aria-current={isItemActive ? 'page' : undefined}
                            className={`w-full text-left px-3 py-2 text-xs font-mono font-medium rounded-[2px] flex items-center justify-between transition-colors ${
                              isItemActive
                                ? 'bg-[#00d4ff]/15 text-[#00d4ff] font-bold border-l-2 border-[#00d4ff]'
                                : 'text-slate-200 hover:text-[#00d4ff] hover:bg-white/5'
                            }`}
                          >
                            <span>{item.label}</span>
                            <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#00d4ff] transition-opacity" aria-hidden="true" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* RIGHT CTA BUTTON */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={SITE_CONFIG.loginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-400 hover:text-[#00d4ff] transition-colors"
            aria-label="Login to PEXEK App platform"
          >
            <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Login</span>
          </a>

          <button
            onClick={handleAuditClick}
            aria-label="Book Strategy Audit"
            className="btn-pexek-primary text-xs px-5 py-2.5 font-bold flex items-center gap-2 shadow-md uppercase tracking-wider rounded-[2px]"
          >
            <span>Book Strategy Audit →</span>
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={handleAuditClick}
            aria-label="Book Audit"
            className="btn-pexek-primary text-[11px] px-3 py-1.5 font-bold uppercase"
          >
            Audit →
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-[#0a0e1a] border border-white/10 rounded-[2px]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU ACCORDION */}
      {mobileMenuOpen && (
        <nav 
          id="mobile-navigation-menu" 
          aria-label="Mobile Navigation Menu"
          className="lg:hidden bg-[#0a0e1a] border-b border-white/15 px-4 py-6 space-y-6 animate-in slide-in-from-top-2 duration-200"
        >
          <div className="space-y-4">
            {navSections.map((section) => {
              return (
                <div key={section.title} className="space-y-2">
                  <button
                    onClick={() => handleNavClick(section.directPath)}
                    className="w-full text-left font-mono font-bold text-xs text-[#00d4ff] uppercase tracking-wider pt-2 border-b border-white/10 pb-1 flex items-center justify-between"
                  >
                    <span>{section.title}</span>
                    <span className="text-[10px] text-slate-400">View Page →</span>
                  </button>
                  {section.items && (
                    <div className="grid grid-cols-1 gap-1 pl-2">
                      {section.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleNavClick(item.path)}
                          className={`text-left py-1.5 text-xs font-mono transition-colors ${
                            currentPath === item.path ? 'text-[#00d4ff] font-bold' : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          • {item.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <a
              href={SITE_CONFIG.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs font-mono font-semibold text-slate-300 hover:text-[#00d4ff] py-2 border border-white/10 rounded-[2px]"
            >
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Login (app.pexek.com)</span>
            </a>
            <button
              onClick={handleAuditClick}
              className="w-full btn-pexek-primary text-xs py-3 font-bold flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <span>Book Strategy Audit →</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
});
