import { createContext, useContext } from 'react';

import { Data } from '../../types';

interface MainContextType {
  data: Data | null;
}

export const MainContext = createContext<MainContextType>({ data: null });

export function useMainContext() {
  return useContext(MainContext);
}
