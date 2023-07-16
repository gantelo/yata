import { StyleSheet, View } from 'react-native';

import { verticalScale } from '@styles';

import { BellButton, BoxesButton } from '../atoms';

const HeaderIcons = () => {
	return (
		<View style={styles.headerIcons}>
			<BoxesButton />
			<BellButton />
		</View>
	);
};

const styles = StyleSheet.create({
	headerIcons: {
		marginTop: verticalScale(35),
		height: verticalScale(35),
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

export default HeaderIcons;
