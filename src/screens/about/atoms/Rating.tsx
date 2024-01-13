import { StyleSheet, View } from 'react-native';

import { Star } from '@icons';
import { CText } from '@shared';
import { Colors } from '@styles';

interface RatingProps {
	rating: string;
    reviews: number;
}

const Rating = ({ rating = 'xd', reviews }: RatingProps) => {
	return (
		<View style={styles.container}>
			<Star color={Colors.misc.starYellow} size={18} />
			<CText style={styles.txt} weight="bold" color={Colors.secondary.normal} fontSize="lg">
				{rating}
			</CText>
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
	txt: {
		marginLeft: 10,
	},
});

export default Rating;
