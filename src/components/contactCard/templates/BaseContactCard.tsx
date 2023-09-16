import { StyleSheet, View } from 'react-native';

import { horizontalScale, Sizes, verticalScale } from '@styles';
import { BaseContactCard } from '@types';

import { CardInfoText, CardRating } from '../atoms';
import { CardImage } from '../molecules';

type BaseContactCardProps = {
	baseCard: BaseContactCard;
};

const BaseContactCardTemplate = ({ baseCard }: BaseContactCardProps) => {
	return (
		<View style={styles.container}>
			<CardImage imgSrc={baseCard.imgSrc} type={baseCard.type} />
			<View style={styles.contentContainer}>
				<CardRating rating={baseCard.rating} />
				<CardInfoText
					primaryName={baseCard.name}
					location={baseCard.location}
					secondaryName={baseCard.alias}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		height: verticalScale(124),
		margin: horizontalScale(21),
		marginVertical: verticalScale(12),
		borderRadius: Sizes.border.default,
		borderTopLeftRadius: Sizes.border.lg,
		borderBottomLeftRadius: Sizes.border.lg,
		display: 'flex',
		flexDirection: 'row',
	},
	contentContainer: {
		paddingHorizontal: verticalScale(20),
		paddingVertical: verticalScale(14),
	},
});

export default BaseContactCardTemplate;
