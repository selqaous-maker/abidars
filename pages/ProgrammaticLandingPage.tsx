import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { PagePath } from '../types';
import { resolveProgrammaticPage } from '../programmatic-seo/engine/resolver';
import { ProgrammaticLandingPageTemplate } from '../programmatic-seo/components/ProgrammaticLandingPageTemplate';
import { SEOHead } from '../components/SEOHead';

interface ProgrammaticLandingPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: (source?: string) => void;
  onOpenDemoModal?: (industryId?: string) => void;
}

export const ProgrammaticLandingPage: React.FC<ProgrammaticLandingPageProps> = ({
  onNavigate,
  onOpenAuditModal,
  onOpenDemoModal,
}) => {
  const location = useLocation();
  const params = useParams();

  const currentPath = useMemo(() => {
    // Check location pathname or wildcard params
    const path = location.pathname || (params['*'] ? `/${params['*']}` : '/');
    return path;
  }, [location.pathname, params]);

  const pageData = useMemo(() => {
    return resolveProgrammaticPage(currentPath);
  }, [currentPath]);

  if (!pageData) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 text-center space-y-6 bg-[#050507]">
        <h1 className="text-3xl font-extrabold font-sans text-white">Programmatic Telephony Node Not Found</h1>
        <p className="text-sm text-slate-400 max-w-md">
          The requested Voice AI landing page parameter could not be resolved in the programmatic routing matrix.
        </p>
        <button
          onClick={() => onNavigate('/')}
          className="btn-pexek-primary text-xs px-6 py-3 font-bold uppercase tracking-wider"
        >
          Return to Platform Home →
        </button>
      </div>
    );
  }

  return (
    <>
      <SEOHead path={currentPath} />
      <ProgrammaticLandingPageTemplate
        pageData={pageData}
        onNavigate={onNavigate}
        onOpenAuditModal={onOpenAuditModal}
        onOpenDemoModal={onOpenDemoModal}
      />
    </>
  );
};
