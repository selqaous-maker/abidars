import React, { useState, useEffect } from 'react';
import { PagePath } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { LiveCallDemoModal } from './components/LiveCallDemoModal';
import { AuditBookingModal } from './components/AuditBookingModal';
import { HeroVideoModal } from './components/HeroVideoModal';

import { HomePage } from './pages/HomePage';
import { IndustriesPage } from './pages/IndustriesPage';
import { IndustryPlaybooksPage } from './pages/IndustryPlaybooksPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { BlogPage } from './pages/BlogPage';
import { BookAuditPage } from './pages/BookAuditPage';
import { DemoPage } from './pages/DemoPage';
import { FounderPage } from './pages/FounderPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AIReceptionistPage } from './pages/landing/AIReceptionistPage';
import { AILeadQualificationPage } from './pages/landing/AILeadQualificationPage';
import { AIAppointmentBookingPage } from './pages/landing/AIAppointmentBookingPage';
import { AIWorkflowAutomationPage } from './pages/landing/AIWorkflowAutomationPage';
import { AIReceptionistDentalPage } from './pages/landing/AIReceptionistDentalPage';
import { AIReceptionistRealEstatePage } from './pages/landing/AIReceptionistRealEstatePage';
import { AIReceptionistHealthcarePage } from './pages/landing/AIReceptionistHealthcarePage';
import { AIReceptionistBusinessServicesPage } from './pages/landing/AIReceptionistBusinessServicesPage';
import { AIReceptionistLegalPage } from './pages/landing/AIReceptionistLegalPage';
import { AIReceptionistEcommercePage } from './pages/landing/AIReceptionistEcommercePage';
import { AIPhoneAnsweringServicePage } from './pages/landing/AIPhoneAnsweringServicePage';
import { VoiceAIAgentsPage } from './pages/landing/VoiceAIAgentsPage';
import { DeploymentPage } from './pages/DeploymentPage';
import { IntegrationsPage } from './pages/IntegrationsPage';
import { SecurityCompliancePage } from './pages/SecurityCompliancePage';

export default function App() {
  // Helper to parse path from pathname or legacy hash
  const getInitialPath = (): PagePath => {
    const validPaths: PagePath[] = [
      '/',
      '/ai-receptionist',
      '/lead-qualification-ai',
      '/appointment-booking-ai',
      '/workflow-automation',
      '/conversation-intelligence',
      '/dental-ai-receptionist',
      '/healthcare-ai-receptionist',
      '/home-services-ai',
      '/business-services-ai',
      '/real-estate-ai',
      '/real-estate-ai-receptionist',
      '/legal-ai-intake',
      '/legal-ai-receptionist',
      '/ecommerce-ai-support',
      '/how-it-works',
      '/deployment',
      '/deployment-process',
      '/managed-deployment',
      '/deployment-blueprints',
      '/integrations',
      '/security',
      '/security-compliance',
      '/pricing',
      '/blog',
      '/roi-calculator',
      '/demo',
      '/about',
      '/founder',
      '/contact',
      '/book-audit',
      '/industry-playbooks',
      '/industries',
      '/case-studies',
      '/ai-phone-answering-service',
      '/ai-receptionist-dental',
      '/ai-receptionist-real-estate',
      '/voice-ai-agents'
    ];

    // Check legacy hash first for backward compatibility
    const hash = window.location.hash.replace('#', '');
    if (hash && validPaths.includes(hash as PagePath)) {
      window.history.replaceState({}, '', hash);
      return hash as PagePath;
    }

    const pathname = window.location.pathname as PagePath;
    if (validPaths.includes(pathname)) {
      return pathname;
    }

    return '/';
  };

  const [currentPath, setCurrentPath] = useState<PagePath>(getInitialPath());
  
  // Modal states
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditModalSource, setAuditModalSource] = useState('homepage');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoIndustryId, setDemoIndustryId] = useState('dental');
  const [traceModalOpen, setTraceModalOpen] = useState(false);

  const openAuditModal = (sourceName?: string) => {
    setAuditModalSource(sourceName || currentPath.replace('/', '') || 'homepage');
    setAuditModalOpen(true);
  };

  // HTML5 History pushState navigation
  const handleNavigate = (path: PagePath) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(getInitialPath());
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const openDemoWithIndustry = (indId?: string) => {
    if (indId) setDemoIndustryId(indId);
    setDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 flex flex-col font-sans selection:bg-[#00d4ff] selection:text-black">
      <SEOHead path={currentPath} />
      
      {/* Sticky Global Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenAuditModal={() => setAuditModalOpen(true)}
        onOpenDemoModal={() => openDemoWithIndustry()}
      />

      {/* Main Page Content Router */}
      <main className="flex-1">
        {currentPath === '/' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
            onOpenDemoModal={() => openDemoWithIndustry()}
          />
        )}

        {(currentPath === '/industry-playbooks' || currentPath === '/industries') && (
          <IndustryPlaybooksPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/how-it-works' && (
          <HowItWorksPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/pricing' && (
          <PricingPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/case-studies' && (
          <CaseStudiesPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
            onOpenDemoModal={() => openDemoWithIndustry()}
          />
        )}

        {currentPath === '/blog' && (
          <BlogPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/book-audit' && (
          <BookAuditPage
            onNavigate={handleNavigate}
            onOpenDemoModal={openDemoWithIndustry}
          />
        )}

        {(currentPath === '/ai-receptionist' || 
          currentPath === '/conversation-intelligence') && (
          <AIReceptionistPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/workflow-automation' && (
          <AIWorkflowAutomationPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/appointment-booking-ai' && (
          <AIAppointmentBookingPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/lead-qualification-ai' && (
          <AILeadQualificationPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {(currentPath === '/ai-receptionist-dental' || currentPath === '/dental-ai-receptionist') && (
          <AIReceptionistDentalPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/healthcare-ai-receptionist' && (
          <AIReceptionistHealthcarePage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {(currentPath === '/home-services-ai' || currentPath === '/business-services-ai') && (
          <AIReceptionistBusinessServicesPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {(currentPath === '/ai-receptionist-real-estate' || currentPath === '/real-estate-ai' || currentPath === '/real-estate-ai-receptionist') && (
          <AIReceptionistRealEstatePage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {(currentPath === '/legal-ai-intake' || currentPath === '/legal-ai-receptionist') && (
          <AIReceptionistLegalPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {(currentPath === '/ecommerce-ai-support' || currentPath === '/ecommerce-ai-receptionist') && (
          <AIReceptionistEcommercePage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/ai-phone-answering-service' && (
          <AIPhoneAnsweringServicePage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/voice-ai-agents' && (
          <VoiceAIAgentsPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {(currentPath === '/deployment' || currentPath === '/deployment-process' || currentPath === '/managed-deployment') && (
          <DeploymentPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/deployment-blueprints' && (
          <CaseStudiesPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
            onOpenDemoModal={() => openDemoWithIndustry()}
          />
        )}

        {currentPath === '/integrations' && (
          <IntegrationsPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {(currentPath === '/security' || currentPath === '/security-compliance') && (
          <SecurityCompliancePage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/roi-calculator' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
            onOpenDemoModal={() => openDemoWithIndustry()}
          />
        )}

        {currentPath === '/demo' && (
          <DemoPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => setAuditModalOpen(true)}
          />
        )}

        {currentPath === '/founder' && (
          <FounderPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => openAuditModal('founder')}
          />
        )}

        {currentPath === '/about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => openAuditModal('about')}
          />
        )}

        {currentPath === '/contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenAuditModal={() => openAuditModal('contact')}
          />
        )}
      </main>

      {/* Global Modals */}
      <AuditBookingModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        source={auditModalSource}
      />

      <LiveCallDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        initialIndustryId={demoIndustryId}
      />

      <HeroVideoModal
        isOpen={traceModalOpen}
        onClose={() => setTraceModalOpen(false)}
      />

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAuditModal={() => setAuditModalOpen(true)}
      />

    </div>
  );
}
