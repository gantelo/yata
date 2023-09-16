import { StyleSheet, Text, View } from 'react-native';

import { Colors, Sizes, verticalScale } from '@styles';

type CardInfoTextProps = {
	primaryName: string;
	secondaryName?: string;
	location: string;
};

const CardInfoText = ({ primaryName, secondaryName, location }: CardInfoTextProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.primaryName}>{primaryName}</Text>
			<Text style={styles.locationText}>{location}</Text>
			{secondaryName && <Text style={styles.secondaryName}>By {secondaryName}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		marginVertical: verticalScale(7),
	},
	primaryName: {
		fontWeight: Sizes.fonts.weight.bold as never,
		fontSize: Sizes.fonts.size.md,
		color: Colors.secondary.normal,
	},
	locationText: {
		fontWeight: Sizes.fonts.weight.thin as never,
		fontSize: Sizes.fonts.size.xs,
		color: Colors.secondary.normal,
	},
	secondaryName: {
		fontWeight: Sizes.fonts.weight.semibold as never,
		fontSize: Sizes.fonts.size.xxs,
		color: Colors.secondary.light,
	},
});

export default CardInfoText;
