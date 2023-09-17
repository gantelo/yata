import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { About } from '@screens';
import { Colors } from '@styles';
import { StackParamList } from '@types';

import { BottomTabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator<StackParamList>();

const MainNavigator = () => {
	return (
		<NavigationContainer>
			<StatusBar barStyle={'dark-content'} backgroundColor={Colors.bg.funk} />

			<Stack.Navigator>
				<Stack.Screen name="MainNavigator" component={BottomTabNavigator} options={{ headerShown: false }} />
				<Stack.Screen
					name="About"
					component={About}
					options={{
						header: () => (
							<SafeAreaView style={{ backgroundColor: Colors.bg.funk }}>
								<View style={styles.statusBar} />
							</SafeAreaView>
						),
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: Colors.bg.funk,
		flexBasis: 1,
	},
});

export default MainNavigator;
