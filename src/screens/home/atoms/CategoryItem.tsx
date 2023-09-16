import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';
import { CategoryPicker } from '@types';

type CategoryItemProps = Omit<CategoryPicker, 'key'> & {
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
				<View style={styles.imgContainer}>
					<Image source={imgSrc} style={[styles.img, activeBg]} />
				</View>
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
		alignItems: 'center',
		justifyContent: 'center',
		width: verticalScale(70),
		height: verticalScale(70),
		borderRadius: 99,
		backgroundColor: 'white',
		borderColor: Colors.primary.normal,
		borderWidth: 0.5,
	},
	img: {
		width: verticalScale(35),
		height: verticalScale(35),
	},
	textContainer: {
		marginTop: 5,
	},
});

export default CategoryItem;
