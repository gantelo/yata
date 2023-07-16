import { ImageBackground, StyleSheet } from 'react-native';

const HomeBgImage = () => {
	return <ImageBackground source={require('@assets/images/home_bg1.png')} style={styles.imgBackground} />;
};

const styles = StyleSheet.create({
	imgBackground: {
		width: 168,
		height: 188,
		right: 0,
		bottom: 0,
		position: 'absolute',
		flex: 1,
	},
});

export default HomeBgImage;
