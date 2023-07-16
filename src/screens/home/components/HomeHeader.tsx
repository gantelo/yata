import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Header } from '@components';
import { Bell, Boxes } from '@icons';
import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';

const HomeHeader = () => {
	return (
		<Header>
			<View style={styles.headerIcons}>
				<TouchableOpacity style={styles.icon}>
					<Boxes />
				</TouchableOpacity>
				<TouchableOpacity style={styles.icon}>
					<Bell />
				</TouchableOpacity>
			</View>
			<View style={styles.textContainer}>
				<CText fontSize="xl" weight="bold" color={Colors.primary.normal}>
					Hi, Mark!
				</CText>
				<CText fontSize="3xl" weight="bold" color={Colors.secondary.normal}>
					What services do you need?
				</CText>
			</View>
		</Header>
	);
};

const styles = StyleSheet.create({
	headerIcons: {
		marginTop: verticalScale(35),
		height: verticalScale(35),
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	icon: {
		padding: verticalScale(5),
	},
	textContainer: {
		paddingHorizontal: verticalScale(5),
		marginTop: verticalScale(20),
		gap: 10,
		maxWidth: '65%'
	},
});

export default HomeHeader;
