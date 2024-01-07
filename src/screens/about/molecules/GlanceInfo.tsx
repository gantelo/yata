import { StyleSheet, View } from 'react-native';

import { GlanceDescription, GlanceProfilePic } from '../atoms';
import { useAboutContext } from '../Context';

const GlanceInfo = (): React.JSX.Element => {
	const { trade, name, type, alias } = useAboutContext();

	return (
		<View style={styles.container}>
			<GlanceProfilePic imgSrc={''} type={trade} />
			<GlanceDescription name={alias ?? name} type={type} category={trade} />
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
