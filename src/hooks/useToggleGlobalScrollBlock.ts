import { useEffect } from 'react';

export const useToggleGlobalScrollBlock = (shouldBlock: boolean) => {
  useEffect(() => {
    if (shouldBlock) {
      document.body.classList.add('global-scroll-block');
    }

    return () => document.body.classList.remove('global-scroll-block');
  }, [shouldBlock]);
};
