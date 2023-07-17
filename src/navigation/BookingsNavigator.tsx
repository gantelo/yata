import { SafeAreaView, StyleSheet, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';
import { Colors } from '@styles';

const BookingsStack = createNativeStackNavigator();

export const BookingsStackNavigator = () => {
	return (
		<BookingsStack.Navigator>
			<BookingsStack.Screen
				name="Bookings"
				component={Home}
				options={{
					header: () => (
						<SafeAreaView style={{ backgroundColor: Colors.bg.funk }}>
							<View style={styles.statusBar} />
						</SafeAreaView>
					),
				}}
			/>
		</BookingsStack.Navigator>
	);
};

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: Colors.bg.funk,
		flexBasis: 1,
	},
});
