import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import { Home } from '@screens';
import { Colors } from '@styles';

function App(): JSX.Element {
	return (
		<>
			<View style={styles.statusBar}>
				<StatusBar barStyle={'dark-content'} backgroundColor={Colors.bg.funk} />
			</View>
			<SafeAreaView>
				<Home />
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	statusBar: {
		backgroundColor: Colors.bg.funk,
		height: 50,
	},
});

export default App;
