import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';

import { verticalScale } from '@styles';
import { Category, DefaultCategories } from '@types';

import { CategoryItem } from '../atoms';

const CategoryCarousel = () => {
	const headerItem = () => {
		return (
			<CategoryItem imgSrc={require('@assets/images/default-categories/all.png')} label="All" key="all-item" />
		);
	};

	const renderCategoryItem = (props: ListRenderItemInfo<Category>) => {
		const { item } = props;

		return <CategoryItem imgSrc={item.imgSrc} label={item.label} key={item.key} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={DefaultCategories}
				ListHeaderComponent={headerItem}
				renderItem={renderCategoryItem}
				horizontal
				style={{
					paddingLeft: verticalScale(10),
				}}
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: verticalScale(105),
	},
});

export default CategoryCarousel;
