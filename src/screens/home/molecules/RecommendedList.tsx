import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { RecommendedContactCard } from 'src/components/contactCard';
import { BaseContactCardList } from 'src/mocks/BaseContactCardList';

import { verticalScale } from '@styles';
import { RecommendedCardModel } from '@types';

const RecommendedList = () => {
	const renderContactCard = ({ item }: ListRenderItemInfo<RecommendedCardModel>) => {
		return <RecommendedContactCard {...item} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={BaseContactCardList}
				renderItem={renderContactCard}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
		paddingBottom: verticalScale(300),
	},
});

export default RecommendedList;
