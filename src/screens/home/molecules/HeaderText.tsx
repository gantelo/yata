import { StyleSheet, View } from 'react-native';
import Animated from 'react-native-reanimated';

import { useHomeAnimations } from '@hooks';
import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';

const HeaderText = () => {
	const { genericTextStyles, hiAnimatedStyles } = useHomeAnimations();

	return (
		<View style={styles.textContainer}>
			<Animated.View style={hiAnimatedStyles}>
				<CText fontSize="xl" weight="bold" color={Colors.primary.normal}>
					Hi, Mark!
				</CText>
			</Animated.View>
			<Animated.View style={genericTextStyles}>
				<CText fontSize="3xl" weight="bold" color={Colors.secondary.normal}>
					What services do you need?
				</CText>
			</Animated.View>
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
