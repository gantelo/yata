import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Colors } from '@styles';

import { StarNumber } from '..';

interface RatingProps {
	rating: string;
	reviews: number;
}

const Rating = ({ rating, reviews }: RatingProps) => {
	return (
		<View style={styles.container}>
			<StarNumber rating={rating} />
			<CText weight="semibold" color={Colors.secondary.light} fontSize="lg">
				/5 ({reviews} reviews)
			</CText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default Rating;
