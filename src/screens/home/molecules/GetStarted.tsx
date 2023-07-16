import { StyleSheet, View } from 'react-native';

import { verticalScale } from '@styles';

import { GetStartedButton } from '../atoms';

const GetStarted = () => {
	return (
		<View style={styles.container}>
			<GetStartedButton />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: verticalScale(22),
		marginLeft: 6,
	},
});

export default GetStarted;
