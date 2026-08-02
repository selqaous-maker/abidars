import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PagePath } from '../types';

export function useNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = useCallback((path: PagePath) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [navigate]);

  return {
    currentPath: (location.pathname || '/') as PagePath,
    navigate: handleNavigate,
  };
}
