import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '@styles';

import { BottomTabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'dark-content'} backgroundColor={Colors.bg.funk} />

			<Stack.Navigator>
				<Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default MainNavigator;
