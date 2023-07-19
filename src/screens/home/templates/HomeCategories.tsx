import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Sizes, verticalScale } from '@styles';

import { CategoryCarousel } from '../molecules';

const HomeCategories = () => {
	return (
		<View style={styles.container}>
			<CText style={styles.textContainer} variant="title">
				Categories
			</CText>
			<CategoryCarousel />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: verticalScale(20),
	},
	textContainer: {
		marginBottom: Sizes.margin.md,
		marginLeft: Sizes.margin.md,
	},
});

export default HomeCategories;
