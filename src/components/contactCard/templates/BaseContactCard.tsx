import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { horizontalScale, Sizes, verticalScale } from '@styles';
import { BaseContactCard } from '@types';

import { CardInfoText, CardRating } from '../atoms';
import { CardImage } from '../molecules';

type BaseContactCardProps = {
	baseCard: BaseContactCard;
	children?: React.ReactNode;
};

const BaseContactCardTemplate = ({ baseCard, children }: BaseContactCardProps) => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.5}>
			<CardImage imgSrc={baseCard.imgSrc} type={baseCard.type} />
			<View style={styles.contentContainer}>
				<View>
					<CardRating rating={baseCard.rating} />
					<CardInfoText
						primaryName={baseCard.name}
						location={baseCard.location}
						secondaryName={baseCard.alias}
					/>
				</View>
				<View>{children}</View>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		height: verticalScale(124),
		margin: horizontalScale(21),
		marginVertical: verticalScale(8),
		borderRadius: Sizes.border.default,
		borderTopLeftRadius: Sizes.border.lg,
		borderBottomLeftRadius: Sizes.border.lg,
		display: 'flex',
		flexDirection: 'row',
	},
	contentContainer: {
		paddingHorizontal: verticalScale(20),
		paddingVertical: verticalScale(14),
		display: 'flex',
		justifyContent: 'space-between',
		flex: 1,
	},
});

export default BaseContactCardTemplate;
