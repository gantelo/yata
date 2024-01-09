import { StyleSheet, View } from 'react-native';

import { ImageFallback } from '@shared';
import { Colors, verticalScale } from '@styles';
import { Category } from '@types';
import { getFallbackImage } from '@utils';

interface GlanceProfilePicProps {
	imgSrc: string;
	category: Category;
}

const GlanceProfilePic = ({ imgSrc, category }: GlanceProfilePicProps): React.JSX.Element => {
	return (
		<View style={styles.container}>
			<ImageFallback
				src={imgSrc ? { uri: imgSrc } : undefined}
				fallbackSrc={getFallbackImage(category)}
				styles={styles.img}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.bg.default,
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 99,
		width: verticalScale(120),
		height: verticalScale(120),
	},
	img: {
		width: verticalScale(65),
		height: verticalScale(65),
	},
});

export default GlanceProfilePic;
