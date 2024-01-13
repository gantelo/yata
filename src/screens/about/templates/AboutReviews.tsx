import { StyleSheet, View } from 'react-native';

import { HorizontalDivider, Subtitle } from '@shared';
import { verticalScale } from '@styles';

import { useAboutContext } from '../Context';
import { Review, TotalReviews } from '../molecules';

const AboutReviews = () => {
	const { rating, reviews } = useAboutContext();

	return (
		<View style={styles.container}>
			<Subtitle>Reviews</Subtitle>
			<TotalReviews rating={rating} reviews={reviews} />
			<HorizontalDivider height={1} />
			<Review />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: verticalScale(22),
		paddingHorizontal: verticalScale(20),
	},
});

export default AboutReviews;
