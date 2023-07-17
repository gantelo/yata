import { SafeAreaView, StyleSheet, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';
import { Colors } from '@styles';

const HomeStack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name="Home"
				component={Home}
				options={{
					header: () => (
						<SafeAreaView style={{ backgroundColor: Colors.bg.funk }}>
							<View style={styles.statusBar} />
						</SafeAreaView>
					),
				}}
			/>
		</HomeStack.Navigator>
	);
};

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: Colors.bg.funk,
		flexBasis: 1,
	},
});
