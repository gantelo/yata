import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { BaseContactCardTemplate } from 'src/components/contactCard';
import { BaseContactCardList } from 'src/mocks/BaseContactCardList';

import { BaseContactCard } from '@types';

const RecommendedList = () => {
	const renderContactCard = ({ item }: ListRenderItemInfo<BaseContactCard>) => {
		return <BaseContactCardTemplate baseCard={item} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={BaseContactCardList}
				renderItem={renderContactCard}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
});

export default RecommendedList;
