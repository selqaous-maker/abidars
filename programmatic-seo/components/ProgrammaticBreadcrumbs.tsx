import React from 'react';
import { PSEOBreadcrumb } from '../types';
import { PagePath } from '../../types';
import { ChevronRight, Home } from 'lucide-react';

interface ProgrammaticBreadcrumbsProps {
  breadcrumbs: PSEOBreadcrumb[];
  onNavigate: (path: PagePath) => void;
}

export const ProgrammaticBreadcrumbs: React.FC<ProgrammaticBreadcrumbsProps> = ({
  breadcrumbs,
  onNavigate,
}) => {
  return (
    <nav aria-label="Breadcrumb" className="py-4 border-b border-white/10 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center flex-wrap gap-2 text-xs font-mono">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const pathRelative = crumb.url.replace(/^https?:\/\/[^\/]+/, '') || '/';

            return (
              <li key={crumb.url + index} className="flex items-center gap-2">
                {index > 0 && <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />}
                {isLast ? (
                  <span className="text-[#00d4ff] font-bold truncate max-w-[220px] sm:max-w-none" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(pathRelative as PagePath)}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 focus:outline-none focus:underline"
                  >
                    {index === 0 && <Home className="w-3 h-3 text-slate-400 inline" />}
                    <span>{crumb.name}</span>
                  </button>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};
