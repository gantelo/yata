import { SafeAreaView, StyleSheet, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';
import { Colors } from '@styles';

const ProfileStack = createNativeStackNavigator();

export const ProfileStackNavigator = () => {
	return (
		<ProfileStack.Navigator>
			<ProfileStack.Screen
				name="Profile"
				component={Home}
				options={{
					header: () => (
						<SafeAreaView style={{ backgroundColor: Colors.bg.funk }}>
							<View style={styles.statusBar} />
						</SafeAreaView>
					),
				}}
			/>
		</ProfileStack.Navigator>
	);
};

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: Colors.bg.funk,
		flexBasis: 1,
	},
});
