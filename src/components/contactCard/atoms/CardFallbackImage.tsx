import { StyleSheet } from 'react-native';

import { ImageFallback } from '@shared';
import { verticalScale } from '@styles';
import { Category } from '@types';
import { getFallbackImage } from '@utils';

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
