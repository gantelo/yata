import { StyleSheet, View } from 'react-native';

import { Dot } from '@icons';
import { CText } from '@shared';
import { Colors } from '@styles';

type GlanceDescriptionProps = {
	name: string;
	type: string;
	category: string;
};

const GlanceDescription = ({ name, type, category }: GlanceDescriptionProps) => {
	return (
		<View style={styles.container}>
			<CText weight="bold" color={Colors.secondary.normal} fontSize="lg">
				{name}
			</CText>
			<View style={styles.infoContainer}>
				<CText weight="bold" color={Colors.primary.normal}>
					{type}
				</CText>
				<View style={styles.dot}>
					<Dot color={Colors.secondary.light} />
				</View>
				<CText weight="bold" color={Colors.primary.normal}>
					{category}
				</CText>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
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

export default GlanceDescription;
