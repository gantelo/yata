import { Image, StyleSheet } from 'react-native';

const AboutBgImage = () => {
	return <Image source={require('@assets/images/home_bg2.png')} style={styles.imgBackground} />;
};

const styles = StyleSheet.create({
	imgBackground: {
		width: 85,
		height: 55,
		right: 0,
		bottom: 0,
		position: 'absolute',
	},
});

export default AboutBgImage;
