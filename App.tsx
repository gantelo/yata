import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

import { CText } from '@shared';

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar
				barStyle={isDarkMode ? 'light-content' : 'dark-content'}
				backgroundColor={backgroundStyle.backgroundColor}
			/>
			<ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
				<Header />
				<View
					style={{
						backgroundColor: isDarkMode ? Colors.black : Colors.white,
					}}
				>
					<CText style={styles.sectionDescription}>What services do</CText>
					<Text style={styles.sectionTitle}>What services do</Text>
					<Text style={styles.sectionTitle2}>What services do</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 23,
		marginLeft: 22,
		fontFamily: 'SF-Pro',
	},
	sectionTitle2: {
		fontSize: 23,
		fontFamily: 'SF Pro',
		marginLeft: 22,
	},
	sectionDescription: {
		fontSize: 23,
		fontFamily: 'sf',
		marginLeft: 22,
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
