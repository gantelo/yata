import { ImageStyle, StyleProp, StyleSheet, View } from 'react-native';

import { ImageFallback } from '@shared';
import { Colors, verticalScale } from '@styles';
import { Category } from '@types';
import { getFallbackImage } from '@utils';

type ProfileImageProps = {
	imgSrc: string;
	category: Category;
	size?: number;
	innerSize?: number;
	innerStyles?: StyleProp<ImageStyle>;
};

const ProfileImage = ({
	imgSrc,
	category,
	size = verticalScale(120),
	innerSize = verticalScale(65),
	innerStyles,
}: ProfileImageProps) => {
	return (
		<View style={[styles.container, { width: size, height: size }]}>
			<ImageFallback
				src={imgSrc ? { uri: imgSrc } : undefined}
				fallbackSrc={getFallbackImage(category)}
				size={[verticalScale(innerSize), verticalScale(innerSize)]}
				styles={innerStyles}
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
	},
});

export default ProfileImage;
