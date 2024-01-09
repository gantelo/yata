import { StyleSheet, View } from 'react-native';

import { Dot } from '@icons';
import { CText } from '@shared';
import { Colors } from '@styles';

interface DescriptionInfoProps {
	serviceType: string;
	category: string;
}

const DescriptionInfo = ({ serviceType, category }: DescriptionInfoProps) => {
	return (
		<View style={styles.infoContainer}>
			<CText weight="bold" color={Colors.primary.normal}>
				{serviceType}
			</CText>
			<View style={styles.dot}>
				<Dot color={Colors.bg.default} />
			</View>
			<CText weight="bold" color={Colors.primary.normal}>
				{category}
			</CText>
		</View>
	);
};

const styles = StyleSheet.create({
	infoContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 5,
	},
	dot: {
		marginHorizontal: 10,
	},
});

export default DescriptionInfo;
