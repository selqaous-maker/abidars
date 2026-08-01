import React from 'react';
import { ManagedDeploymentPage } from './ManagedDeploymentPage';
import { PagePath } from '../types';

interface DeploymentPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenAuditModal: () => void;
}

export const DeploymentPage: React.FC<DeploymentPageProps> = (props) => {
  return <ManagedDeploymentPage {...props} />;
};

export { ManagedDeploymentPage };
