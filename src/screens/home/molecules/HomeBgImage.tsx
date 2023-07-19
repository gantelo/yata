import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { useHomeAnimations } from '@hooks';

const HomeBgImage = () => {
	const { bgImageStyles } = useHomeAnimations();

	return (
		<Animated.Image source={require('@assets/images/home_bg1.png')} style={[styles.imgBackground, bgImageStyles]} />
	);
};

const styles = StyleSheet.create({
	imgBackground: {
		width: 168,
		height: 188,
		right: 0,
		bottom: 0,
		position: 'absolute',
	},
});

export default HomeBgImage;
