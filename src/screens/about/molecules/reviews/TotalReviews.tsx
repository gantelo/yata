import { StyleSheet, TouchableOpacity } from 'react-native';

import { RightArrow } from '@icons';
import { Colors, Sizes, verticalScale } from '@styles';

import { Rating } from '../../atoms';

type TotalReviewsProps = {
	rating: string;
	reviews?: number;
};

const TotalReviews = ({ rating, reviews = 0 }: TotalReviewsProps) => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.6}>
			<Rating rating={rating} reviews={reviews} />
			<RightArrow styles={styles.rightArrow} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: verticalScale(15),
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	rightArrow: {
		backgroundColor: Colors.bg.default,
		paddingVertical: 6,
		paddingHorizontal: 15,
		borderRadius: Sizes.border.default,
	},
});

export default TotalReviews;
