import { Bookings, Chat, Home, Profile } from '@icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '@styles';

import { BookingsStackNavigator } from './BookingsNavigator';
import { ChatStackNavigator } from './ChatNavigator';
import { HomeStackNavigator } from './HomeNavigator';
import { ProfileStackNavigator } from './ProfileNavigator';

const Tab = createBottomTabNavigator();

const tabBarIconStyle = { marginTop: 5 };

export const BottomTabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: Colors.primary.normal,
				tabBarInactiveTintColor: Colors.primary.third,
			}}
		>
			<Tab.Screen
				name="HomeTab"
				component={HomeStackNavigator}
				options={{
					tabBarLabel: 'Home',
					tabBarIcon: ({ color }) => <Home color={color} />,
					tabBarIconStyle,
				}}
			/>
			<Tab.Screen
				name="ChatTab"
				component={ChatStackNavigator}
				options={{
					tabBarLabel: 'Chat',
					tabBarIcon: ({ color }) => <Chat color={color} />,
					tabBarIconStyle,
				}}
			/>
			<Tab.Screen
				name="BookingsTab"
				component={BookingsStackNavigator}
				options={{
					tabBarLabel: 'Bookings',
					tabBarIcon: ({ color }) => <Bookings color={color} />,
					tabBarIconStyle,
				}}
			/>
			<Tab.Screen
				name="ProfileTab"
				component={ProfileStackNavigator}
				options={{
					tabBarLabel: 'Profile',
					tabBarIcon: ({ color }) => <Profile color={color} />,
					tabBarIconStyle,
				}}
			/>
		</Tab.Navigator>
	);
};
