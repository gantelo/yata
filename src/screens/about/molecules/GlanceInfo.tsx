import { StyleSheet, View } from 'react-native';

import { GlanceDescription, GlanceProfilePic } from '../atoms';
import { useAboutContext } from '../Context';

const GlanceInfo = (): React.JSX.Element => {
	const { category, name, serviceType, alias } = useAboutContext();

	return (
		<View style={styles.container}>
			<GlanceProfilePic imgSrc={''} category={category} />
			<GlanceDescription name={alias ?? name} serviceType={serviceType} category={category} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		top: -50,
	},
});

export default GlanceInfo;
