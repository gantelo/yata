import { NavigationProp, RouteProp } from '@react-navigation/native';

import { RecommendedCardModel } from './ContactCard';

export const Routes = {
	MainNavigator: 'MainNavigator',
	About: 'About',
} as const;

/**
 * Types for Stack Navigator.
 */
export type StackParamList = {
	[Routes.MainNavigator]: undefined;
	[Routes.About]: RecommendedCardModel;
};

export type AboutScreenProp = NavigationProp<StackParamList, 'About'>;
export type AboutScreenRouteProp = RouteProp<StackParamList, 'About'>;
