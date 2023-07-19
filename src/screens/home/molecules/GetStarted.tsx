import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { useHomeAnimations } from '@hooks';
import { verticalScale } from '@styles';

import { GetStartedButton } from '../atoms';

const GetStarted = () => {
	const { getStartedStyles, handleHideHeader } = useHomeAnimations();

	return (
		<Animated.View style={[styles.container, getStartedStyles]}>
			<GetStartedButton onPress={handleHideHeader} />
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: verticalScale(22),
		marginLeft: 6,
	},
});

export default GetStarted;
