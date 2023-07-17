import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { Colors } from '@styles';

import { defaultAnimationWithoutHeader, Stack } from './Stack';
import { UserNavigator } from './UserNavigator';

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'dark-content'} backgroundColor={Colors.bg.funk} />
			<Stack.Navigator>
				<Stack.Screen name="UserScreens" component={UserNavigator} options={defaultAnimationWithoutHeader} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;
