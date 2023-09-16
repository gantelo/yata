import { useRef } from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { useRecoilState } from 'recoil';

import { currentCategoryState } from '@data';
import { verticalScale } from '@styles';
import { CategoryPicker, DefaultCategories } from '@types';

import { CategoryItem } from '../atoms';

const CategoryCarousel = () => {
	const [currentCategory, setCurrentCategory] = useRecoilState(currentCategoryState);
	const ref = useRef<FlatList>(null);

	const handleOnPress = (key: string, index: number) => {
		currentCategory !== key && setCurrentCategory(key);

		ref.current?.scrollToIndex({ index, animated: true });
	};

	const renderCategoryItem = (props: ListRenderItemInfo<CategoryPicker>) => {
		const { item } = props;

		return (
			<CategoryItem
				imgSrc={item.imgSrc}
				label={item.label}
				key={item.key}
				onPress={() => {
					handleOnPress(item.key, props.index);
				}}
				active={currentCategory === item.key}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList
				ref={ref}
				data={DefaultCategories}
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
