import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';

const HeaderText = () => {
	return (
		<View style={styles.textContainer}>
			<CText fontSize="xl" weight="bold" color={Colors.primary.normal}>
				Hi, Mark!
			</CText>
			<CText fontSize="3xl" weight="bold" color={Colors.secondary.normal}>
				What services do you need?
			</CText>
		</View>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		paddingHorizontal: verticalScale(5),
		marginTop: verticalScale(20),
		gap: 10,
		maxWidth: '65%',
	},
});

export default HeaderText;
