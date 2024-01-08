import { createContext, useContext } from 'react';

import { Service } from '@types';

type AboutContextType = Service & {
	loading: boolean;
};

// Create a context
export const AboutContext = createContext<AboutContextType>({} as AboutContextType);

// Export a hook for other components to use the context
export const useAboutContext = () => useContext(AboutContext);
