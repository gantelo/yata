import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';
import { Category } from '@types';

type CategoryItemProps = Omit<Category, 'key'> & {
	onPress?: (label: string) => void;
	active?: boolean;
};

const CategoryItem = ({ imgSrc, onPress, label, active }: CategoryItemProps) => {
	const handleOnPress = () => {
		onPress?.(label);
	};

	const activeOpacity = { opacity: active ? 1 : 0.6 };
	const activeBg = { backgroundColor: active ? 'white' : Colors.bg.whitey };

	return (
		<TouchableOpacity style={[styles.pressContainer, activeOpacity]} activeOpacity={0.2} onPress={handleOnPress}>
			<View style={styles.container}>
				<Image source={imgSrc} style={[styles.imgContainer, activeBg]} />
				<CText color={Colors.primary.normal} style={styles.textContainer} fontSize="xs">
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
		width: verticalScale(80),
		height: verticalScale(80),
	},
	imgContainer: {
		padding: verticalScale(16),
		width: verticalScale(65),
		height: verticalScale(65),
		borderRadius: 99,
		borderColor: Colors.primary.normal,
		borderWidth: 0.5,
	},
	textContainer: {
		marginTop: 5,
	},
});

export default CategoryItem;
