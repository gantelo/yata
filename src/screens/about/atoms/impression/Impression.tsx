import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';

type ImpressionProps = {
	value: string;
	label: string;
	icon: JSX.Element;
	loading: boolean;
};

const Impression = ({ value, label, icon, loading }: ImpressionProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.ratingContainer}>
				{icon}
				<CText color={Colors.secondary.normal} weight="bold" style={styles.ratingText}>
					{/* TODO: add skeleton */}
					{loading ? '--' : value}
				</CText>
			</View>
			<CText color={Colors.secondary.normalLight}>{label}</CText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	ratingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: verticalScale(4),
	},
	ratingText: {
		marginLeft: 5,
	},
});
export default Impression;
