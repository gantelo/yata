import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';

import { useAboutContext } from '../Context';
import { DetailsInfo, DetailsPrompt } from '../molecules';

const AboutDetails = () => {
	const { alias, about, distance, cost } = useAboutContext();

	return (
		<View style={styles.container}>
			<CText fontSize="xl" weight="semibold" color={Colors.secondary.normal}>
				About {alias}
			</CText>
			<DetailsPrompt about={about} />
			<DetailsInfo distance={distance} cost={cost} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: verticalScale(22),
		paddingHorizontal: verticalScale(20),
	},
});

export default AboutDetails;
