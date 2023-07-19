import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Sizes } from '@styles';

import { RecommendedList } from '../molecules';

const HomeRecommended = () => {
	return (
		<View style={styles.container}>
			<CText style={styles.textContainer} variant="title">
				Recommended
			</CText>
			<RecommendedList />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: Sizes.margin.xs,
	},
	textContainer: {
		marginBottom: Sizes.margin.md,
		marginLeft: Sizes.margin.md,
	},
});

export default HomeRecommended;
