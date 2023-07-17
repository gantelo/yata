import { SafeAreaView, StyleSheet, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens';
import { Colors } from '@styles';

const ChatStack = createNativeStackNavigator();

export const ChatStackNavigator = () => {
	return (
		<ChatStack.Navigator>
			<ChatStack.Screen
				name="Chat"
				component={Home}
				options={{
					header: () => (
						<SafeAreaView style={{ backgroundColor: Colors.bg.funk }}>
							<View style={styles.statusBar} />
						</SafeAreaView>
					),
				}}
			/>
		</ChatStack.Navigator>
	);
};

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: Colors.bg.funk,
		flexBasis: 1,
	},
});
