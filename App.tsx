import React, { useState, Suspense, lazy, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PagePath } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { useNavigation } from './hooks/useNavigation';

// Lazy load modals to optimize initial JavaScript bundle size
const LiveCallDemoModal = lazy(() => import('./components/LiveCallDemoModal').then(m => ({ default: m.LiveCallDemoModal })));
const AuditBookingModal = lazy(() => import('./components/AuditBookingModal').then(m => ({ default: m.AuditBookingModal })));
const HeroVideoModal = lazy(() => import('./components/HeroVideoModal').then(m => ({ default: m.HeroVideoModal })));

// Code Splitting / Lazy Loading for all Page Components
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const IndustryPlaybooksPage = lazy(() => import('./pages/IndustryPlaybooksPage').then(m => ({ default: m.IndustryPlaybooksPage })));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(m => ({ default: m.PricingPage })));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(m => ({ default: m.BlogPage })));
const BookAuditPage = lazy(() => import('./pages/BookAuditPage').then(m => ({ default: m.BookAuditPage })));
const DemoPage = lazy(() => import('./pages/DemoPage').then(m => ({ default: m.DemoPage })));
const FounderPage = lazy(() => import('./pages/FounderPage').then(m => ({ default: m.FounderPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AIReceptionistPage = lazy(() => import('./pages/landing/AIReceptionistPage').then(m => ({ default: m.AIReceptionistPage })));
const AILeadQualificationPage = lazy(() => import('./pages/landing/AILeadQualificationPage').then(m => ({ default: m.AILeadQualificationPage })));
const AIAppointmentBookingPage = lazy(() => import('./pages/landing/AIAppointmentBookingPage').then(m => ({ default: m.AIAppointmentBookingPage })));
const AIWorkflowAutomationPage = lazy(() => import('./pages/landing/AIWorkflowAutomationPage').then(m => ({ default: m.AIWorkflowAutomationPage })));
const AIReceptionistDentalPage = lazy(() => import('./pages/landing/AIReceptionistDentalPage').then(m => ({ default: m.AIReceptionistDentalPage })));
const AIReceptionistRealEstatePage = lazy(() => import('./pages/landing/AIReceptionistRealEstatePage').then(m => ({ default: m.AIReceptionistRealEstatePage })));
const AIReceptionistHealthcarePage = lazy(() => import('./pages/landing/AIReceptionistHealthcarePage').then(m => ({ default: m.AIReceptionistHealthcarePage })));
const AIReceptionistHomeServicesPage = lazy(() => import('./pages/landing/AIReceptionistHomeServicesPage').then(m => ({ default: m.AIReceptionistHomeServicesPage })));
const AIReceptionistBusinessServicesPage = lazy(() => import('./pages/landing/AIReceptionistBusinessServicesPage').then(m => ({ default: m.AIReceptionistBusinessServicesPage })));
const AIReceptionistLegalPage = lazy(() => import('./pages/landing/AIReceptionistLegalPage').then(m => ({ default: m.AIReceptionistLegalPage })));
const AIReceptionistEcommercePage = lazy(() => import('./pages/landing/AIReceptionistEcommercePage').then(m => ({ default: m.AIReceptionistEcommercePage })));
const AIPhoneAnsweringServicePage = lazy(() => import('./pages/landing/AIPhoneAnsweringServicePage').then(m => ({ default: m.AIPhoneAnsweringServicePage })));
const VoiceAIAgentsPage = lazy(() => import('./pages/landing/VoiceAIAgentsPage').then(m => ({ default: m.VoiceAIAgentsPage })));
const DeploymentPage = lazy(() => import('./pages/DeploymentPage').then(m => ({ default: m.DeploymentPage })));
const ManagedDeploymentPage = lazy(() => import('./pages/ManagedDeploymentPage').then(m => ({ default: m.ManagedDeploymentPage })));
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage').then(m => ({ default: m.IntegrationsPage })));
const SecurityCompliancePage = lazy(() => import('./pages/SecurityCompliancePage').then(m => ({ default: m.SecurityCompliancePage })));
const ProgrammaticLandingPage = lazy(() => import('./pages/ProgrammaticLandingPage').then(m => ({ default: m.ProgrammaticLandingPage })));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4 p-8" role="status" aria-live="polite">
      <div className="w-10 h-10 border-2 border-[#00d4ff]/20 border-t-[#00d4ff] rounded-full animate-spin" />
      <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Loading...</span>
    </div>
  );
}

export default function App() {
  const { currentPath, navigate: handleNavigate } = useNavigation();
  
  // Modal states
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [auditModalSource, setAuditModalSource] = useState('homepage');
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [demoIndustryId, setDemoIndustryId] = useState('dental');
  const [traceModalOpen, setTraceModalOpen] = useState(false);

  const openAuditModal = useCallback((sourceName?: unknown) => {
    const src = typeof sourceName === 'string' ? sourceName : (currentPath.replace('/', '') || 'homepage');
    setAuditModalSource(src);
    setAuditModalOpen(true);
  }, [currentPath]);

  const openDemoWithIndustry = useCallback((indId?: string) => {
    if (indId) setDemoIndustryId(indId);
    setDemoModalOpen(true);
  }, []);

  const closeAuditModal = useCallback(() => setAuditModalOpen(false), []);
  const closeDemoModal = useCallback(() => setDemoModalOpen(false), []);
  const closeTraceModal = useCallback(() => setTraceModalOpen(false), []);

  return (
    <div className="min-h-screen bg-[#050507] text-slate-100 flex flex-col font-sans selection:bg-[#00d4ff] selection:text-black">
      {/* Skip to Content Link for WCAG Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00d4ff] focus:text-black focus:font-bold focus:outline-none focus:ring-2 focus:ring-white rounded-[2px] shadow-2xl"
      >
        Skip to main content
      </a>

      <SEOHead path={currentPath} />
      
      {/* Sticky Global Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenAuditModal={openAuditModal}
        onOpenDemoModal={openDemoWithIndustry}
      />

      {/* Main Page Content Router */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/industry-playbooks" element={<IndustryPlaybooksPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/industries" element={<IndustryPlaybooksPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/how-it-works" element={<HowItWorksPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/pricing" element={<PricingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/case-studies" element={<CaseStudiesPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/deployment-blueprints" element={<CaseStudiesPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/blog" element={<BlogPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/blog/:slug" element={<BlogPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/book-audit" element={<BookAuditPage onNavigate={handleNavigate} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/ai-receptionist" element={<AIReceptionistPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/conversation-intelligence" element={<AIReceptionistPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/workflow-automation" element={<AIWorkflowAutomationPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/appointment-booking-ai" element={<AIAppointmentBookingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/lead-qualification-ai" element={<AILeadQualificationPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/ai-receptionist-dental" element={<AIReceptionistDentalPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/dental-ai-receptionist" element={<AIReceptionistDentalPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/healthcare-ai-receptionist" element={<AIReceptionistHealthcarePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/home-services-ai" element={<AIReceptionistHomeServicesPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/business-services-ai" element={<AIReceptionistBusinessServicesPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/ai-receptionist-real-estate" element={<AIReceptionistRealEstatePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/real-estate-ai" element={<AIReceptionistRealEstatePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/real-estate-ai-receptionist" element={<AIReceptionistRealEstatePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/legal-ai-intake" element={<AIReceptionistLegalPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/legal-ai-receptionist" element={<AIReceptionistLegalPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/ecommerce-ai-support" element={<AIReceptionistEcommercePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/ecommerce-ai-receptionist" element={<AIReceptionistEcommercePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/ai-phone-answering-service" element={<AIPhoneAnsweringServicePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/voice-ai-agents" element={<VoiceAIAgentsPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/deployment" element={<DeploymentPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/deployment-process" element={<DeploymentPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/managed-deployment" element={<ManagedDeploymentPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/integrations" element={<IntegrationsPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/security" element={<SecurityCompliancePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/security-compliance" element={<SecurityCompliancePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/roi-calculator" element={<HomePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/demo" element={<DemoPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} />} />
            <Route path="/founder" element={<FounderPage onNavigate={handleNavigate} onOpenAuditModal={() => openAuditModal('founder')} />} />
            <Route path="/about" element={<AboutPage onNavigate={handleNavigate} onOpenAuditModal={() => openAuditModal('about')} />} />
            <Route path="/contact" element={<ContactPage onNavigate={handleNavigate} onOpenAuditModal={() => openAuditModal('contact')} />} />
            
            {/* Programmatic SEO Dynamic Routes */}
            <Route path="/voice-ai-agent-for-*" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/ai-voice-agent-in-*" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/ai-receptionist-*" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/voice-ai-agents-*" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/voice-ai-*" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/*-ai-receptionist-*" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/*-ai-*" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/*-integration" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
            <Route path="/pseo/*" element={<ProgrammaticLandingPage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />

            <Route path="*" element={<HomePage onNavigate={handleNavigate} onOpenAuditModal={openAuditModal} onOpenDemoModal={openDemoWithIndustry} />} />
          </Routes>
        </Suspense>
      </main>

      {/* Global Modals */}
      <Suspense fallback={null}>
        {auditModalOpen && (
          <AuditBookingModal
            isOpen={auditModalOpen}
            onClose={closeAuditModal}
            source={auditModalSource}
          />
        )}

        {demoModalOpen && (
          <LiveCallDemoModal
            isOpen={demoModalOpen}
            onClose={closeDemoModal}
            initialIndustryId={demoIndustryId}
          />
        )}

        {traceModalOpen && (
          <HeroVideoModal
            isOpen={traceModalOpen}
            onClose={closeTraceModal}
          />
        )}
      </Suspense>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAuditModal={openAuditModal}
      />

    </div>
  );
}
