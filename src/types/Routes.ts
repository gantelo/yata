import { NavigationProp, RouteProp } from '@react-navigation/native';

import { RecommendedCardModel } from './ContactCard';

export const Routes = {
	MainNavigator: 'MainNavigator',
	About: 'About',
	ChatDetails: 'ChatDetails',
} as const;

/**
 * Types for Stack Navigator.
 */
export type StackParamList = {
	[Routes.MainNavigator]: undefined;
	[Routes.About]: RecommendedCardModel;
	[Routes.ChatDetails]: { id: string; name: string; avatar: string };
};

export type AboutScreenProp = NavigationProp<StackParamList, 'About'>;
export type AboutScreenRouteProp = RouteProp<StackParamList, 'About'>;
export type ChatDetailsProp = NavigationProp<StackParamList, 'ChatDetails'>;
export type ChatDetailsRouteProp = RouteProp<StackParamList, 'ChatDetails'>;
