import { StyleSheet, View } from 'react-native';

import { GlanceInfo } from '../molecules';

const AboutGlance = (): React.JSX.Element => {
	return (
		<View style={styles.container}>
			<GlanceInfo />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: 20,
	},
});

export default AboutGlance;
