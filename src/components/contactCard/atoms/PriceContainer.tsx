import { StyleSheet, Text, View } from 'react-native';

import { Colors, Sizes } from '@styles';

type PriceContainerProps = {
	price?: number;
};

const PriceContainer = ({ price }: PriceContainerProps) => {
	return (
		<View style={styles.priceContainer}>
			{price ? (
				<>
					<Text style={styles.primaryText}>$ 24</Text>
					<Text style={styles.hr}>/hr</Text>
				</>
			) : (
				<Text style={styles.primaryText}>$ Ask</Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	priceContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	primaryText: {
		fontWeight: Sizes.fonts.weight.bold as never,
		color: Colors.secondary.normal,
		fontSize: Sizes.fonts.size.lg,
	},
	hr: {
		color: Colors.secondary.normal,
		fontSize: Sizes.fonts.size.sm,
	},
});

export default PriceContainer;
