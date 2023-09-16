import { ImageSourcePropType, StyleSheet } from 'react-native';

import { ImageFallback } from '@shared';
import { verticalScale } from '@styles';
import { Categories, Category } from '@types';

const getFallbackImage = (type: Category): ImageSourcePropType => {
	switch (type) {
		case Categories.Cleaning:
			return require('@assets/images/fallbacks/cleaner.png');
		case Categories.Painting:
			return require('@assets/images/fallbacks/painter.png');
		default:
			return require('@assets/images/fallbacks/cleaner.png');
	}
};

type CardFallbackImageProps = {
	type: Category;
	imgSrc?: string;
};

const CardFallbackImage = ({ type, imgSrc }: CardFallbackImageProps) => {
	return (
		<ImageFallback
			src={imgSrc ? { uri: imgSrc } : undefined}
			fallbackSrc={getFallbackImage(type)}
			styles={styles.img}
		/>
	);
};

const styles = StyleSheet.create({
	img: {
		width: verticalScale(65),
		height: verticalScale(65),
	},
});

export default CardFallbackImage;
