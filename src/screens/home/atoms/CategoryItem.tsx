import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';
import { Category } from '@types';

type CategoryItemProps = Omit<Category, 'key'> & {
	onPress?: (label: string) => void;
};

const CategoryItem = ({ imgSrc, onPress, label }: CategoryItemProps) => {
	const handleOnPress = () => {
		onPress?.(label);
	};

	return (
		<TouchableOpacity style={styles.pressContainer} activeOpacity={0.5} onPress={handleOnPress}>
			<View style={styles.container}>
				<Image source={imgSrc} style={styles.imgContainer} />
				<CText color={Colors.primary.normal} style={styles.textContainer}>
					{label}
				</CText>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	pressContainer: {
		width: verticalScale(90),
		height: verticalScale(90),
	},
	imgContainer: {
		padding: 20,
		width: verticalScale(75),
		height: verticalScale(75),
		borderRadius: 99,
		backgroundColor: 'white',
		borderColor: Colors.primary.normal,
		borderWidth: 0.5,
	},
	textContainer: {
		marginTop: 5,
	},
});

export default CategoryItem;
