import { createContext, useContext } from 'react';

import { Data } from '../types';

interface MainContextType {
  data: Data | null;
  isMobile: boolean;
}

export const MainContext = createContext<MainContextType>({
  data: null,
  isMobile: false,
});

export function useMainContext() {
  return useContext(MainContext) as { data: Data; isMobile: boolean };
}
