import { createContext, useContext } from 'react';

import { Service } from '@types';

// Create a context
export const AboutContext = createContext<Service>({} as Service);

// Export a hook for other components to use the context
export const useAboutContext = () => useContext(AboutContext);
