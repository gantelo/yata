import { Image, StyleSheet, Text, View } from 'react-native';

import { horizontalScale, Sizes, verticalScale } from '@styles';

type CardRatingProps = {
	rating?: number;
};

const CardRating = ({ rating }: CardRatingProps) => {
	return (
		<View style={styles.container}>
			<Image source={require('@assets/images/star.png')} style={styles.img} />
			<Text style={styles.ratingText}>{rating ?? '-'}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	img: {
		width: verticalScale(13),
		height: verticalScale(13),
	},
	ratingText: {
		fontWeight: Sizes.fonts.weight.bold as never,
		fontSize: Sizes.fonts.size.xs,
		marginLeft: horizontalScale(5),
	},
});

export default CardRating;
