import { StyleSheet, View } from 'react-native';

import { useAboutContext } from '../Context';
import { GlanceDescription, GlanceImpression, GlanceProfilePic } from '../molecules';

const AboutGlance = (): React.JSX.Element => {
	const { category, name, serviceType, alias, rating, bookings, responseTime, loading } = useAboutContext();

	return (
		<View style={styles.container}>
			{/* TODO: implement imgSrc */}
			<GlanceProfilePic imgSrc={''} category={category} />
			<GlanceDescription name={alias ?? name} serviceType={serviceType} category={category} />
			<GlanceImpression rating={rating} bookings={bookings} responseTime={responseTime} loading={loading} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		top: -30,
	},
});

export default AboutGlance;
