import { createContext } from 'react';
import { SharedValue } from 'react-native-reanimated';

export const HeaderContext = createContext<SharedValue<number> | null>(null);
