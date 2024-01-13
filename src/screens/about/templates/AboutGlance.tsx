import { StyleSheet, View } from 'react-native';

import { verticalScale } from '@styles';

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
		paddingVertical: verticalScale(20),
	},
});

export default AboutGlance;
