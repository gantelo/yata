import { SafeAreaView, StyleSheet, View } from 'react-native';

import { Home } from '@screens';
import { Colors } from '@styles';

import { Stack } from './Stack';

export const UserNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
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
		</Stack.Navigator>
	);
};

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: Colors.bg.funk,
		flexBasis: 1,
	},
});
