import { Image, StyleSheet } from 'react-native';

export const MidHeaderDefaultBg = () => {
	return <Image source={require('@assets/images/home_bg1.png')} style={styles.imgBackground} />;
};

const styles = StyleSheet.create({
	imgBackground: {
		width: 75,
		height: 84,
		right: 0,
		bottom: 0,
		position: 'absolute',
	},
});
