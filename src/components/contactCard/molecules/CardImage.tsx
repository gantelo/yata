import { StyleSheet, View } from 'react-native';

import { Colors, Sizes, verticalScale } from '@styles';
import { Category } from '@types';

import { CardFallbackImage } from '../atoms';

type CardImageProps = {
	imgSrc?: string;
	type: Category;
};

const CardImage = ({ imgSrc, type }: CardImageProps) => {
	return (
		<View style={styles.container}>
			<CardFallbackImage imgSrc={imgSrc} type={type} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.bg.default,
		width: verticalScale(124),
		height: verticalScale(124),
		borderRadius: Sizes.border.lg,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default CardImage;
